## Lanzando eventos

Una de las cosas más habituales que harán nuestros componentes de Vue será esperar la entrada del usuario. `vue-test-utils` y Jest facilitan probar dicha entrada. Veamos cómo usar `trigger` y los mocks de Jest para verificar que nuestros componentes funcionan correctamente.

El código fuente para la prueba descrita en esta página se puede encontrar [aquí](https://github.com/lmiller1990/vue-testing-handbook/tree/master/demo-app/tests/unit/FormSubmitter.spec.js).

## Creación del componente

Crearemos un componente de formulario simple, `<FormSubmitter>`, que contiene un `<input>` y un `<button>`. Cuando se pulse el botón debería suceder algo. El primer ejemplo simplemente mostrará un mensaje de éxito. A continuación, seguiremos con un ejemplo más interesante que envía el formulario a un endpoint externo.

Cree `<FormSubmitter>` e introduzca la plantilla:

```html
<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="username" data-username>
      <input type="submit">
    </form>

    <div 
      class="message" 
      v-if="submitted"
    >
      Thank you for your submission, {{ username }}.
    </div>
  </div>
</template>
```

Cuando el usuario envíe el formulario, mostraremos un mensaje agradeciéndole su envío. Queremos enviar el formulario asíncronamente, por lo que usamos `@submit.prevent` para evitar la acción por defecto, que consiste en refrescar la página cuando se envía el formulario.

Ahora, añada la lógica de envío del formulario:

```html
<script>
  export default {
    name: "FormSubmitter",

    data() {
      return {
        username: '',
        submitted: false
      }
    },

    methods: {
      handleSubmit() {
        this.submitted = true
      }
    }
  }
</script>
```

Bastante simple: cambiamos `submitted` a `true` cuando se envía el formulario, lo que mostrará el `<div>` que contiene el mensaje de éxito.

## Escribiendo la prueba

Veamos una prueba. Estamos marcándola como `async` – siga leyendo para ver por qué.

```js
import { shallowMount } from "@vue/test-utils"
import FormSubmitter from "@/components/FormSubmitter.vue"

describe("FormSubmitter", () => {
  it("reveals a notification when submitted", async () => {
    const wrapper = shallowMount(FormSubmitter)

    wrapper.find("[data-username]").setValue("alice")
    wrapper.find("form").trigger("submit.prevent")
    await wrapper.vm.$nextTick()

    expect(wrapper.find(".message").text())
      .toBe("Thank you for your submission, alice.")
  })
})
```

Esta prueba es bastante autoexplicativa. Montamos el componente mediante `shallowMount`, damos valor al nombre de usuario y usamos el método `trigger` que proporciona `vue-test-utils` para simular la entrada del usuario. `trigger` funciona en eventos personalizado, así como con eventos que usan modificadores, como `submit.prevent`, `keydown.enter`, etc.

Nótese que después de llamar a `trigger`, hacemos `await wrapper.vm.$nextTick()`. Este es el motivo por el que hemos tenido que marcar la prueba como `async`: para poder usar `await`. Desde `vue-test-utils` beta 28, es necesario llamar a `nextTick` para asegurarnos de que el sistema de reactividad de vue actualiza el DOM. A veces no llamar a `nextTick` puede funcionar, pero si nuestros componentes empiezan a ganar complejidad, podemos encontrarnos con una condición de carrera y nuestra comprobación podría ejecutarse antes de que Vue haya actualizado el DOM. Puede leer más sobre esto en la [documentación oficial de vue-test-utils](https://vue-test-utils.vuejs.org/guides/#updates-applied-by-vue).

La prueba anterior también sigue los tres pasos de las pruebas unitarias:

1. Preparar (configurar todo para la prueba. En nuestro caso, renderizamos el componente)
2. Actuar (ejecutar acciones en el sistema)
3. Comprobar (asegurarse de que el resultado encaja con lo que esperamos)

Separamos cada paso con una nueva línea para que la prueba sea más legible.

Ejecute esta prueba con `yarn test:unit`. Debería pasar.

`trigger` es muy simple – utilizamos `find` para obtener el elemento en el que queremos simular una entrada, y llamamos a `trigger` con el nombre del evento junto con cualquier modificador. 

## Un ejemplo real

Los formularios se suelen enviar a algún endpoint. Veamos cómo podemos probar este componente con una implementación diferente para `handleSubmit`. Una práctica habitual es crear un alias de nuestra librería HTTP a `Vue.prototype.$http`. Esto nos permite hacer peticiones AJAX llamando a `this.$http.get(...)`. Más información sobre esta práctia [aquí](https://vuejs.org/v2/cookbook/adding-instance-properties.html). 

A menudo la librería HTTP es `axios`, un cliente HTTP popular. En este caso, nuestro `handleSubmit` probablemente sería así:

```js
handleSubmitAsync() {
  return this.$http.get("/api/v1/register", { username: this.username })
    .then(() => {
      // show success message, etc
    })
    .catch(() => {
      // handle error
    })
}
```

En este caso, una técnica es _mockear_ `this.$http` para crear el entorno de pruebas deseado. Podemos ver más acerca de la opción `mocks` [aquí](https://vue-test-utils.vuejs.org/api/options.html#mocks). Veamos una implementación de un mock para un método `http.get`:

```js
let url = ''
let data = ''

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url
      data = _data
      resolve()
    })
  }
}
```

Aquí suceden unas cuantas cosas interesantes:

- Creamos unas variables `url` y `data` para guardar la `url` y `data` pasadas a `$http.get`. Esto es útil para comprobar que la petición está llegando al endpoint correcto, con la información correcta.
- Tras asignar los parámetros `url` y `data`, inmediatamente resolvemos la promesa, para simular una respuesta exitosa del API.

Antes de ver la prueba, aquí está la nueva función `handleSubmitAsync`:

```js
methods: {
  handleSubmitAsync() {
    return this.$http.get("/api/v1/register", { username: this.username })
      .then(() => {
        this.submitted = true
      })
      .catch((e) => {
        throw Error("Something went wrong", e)
      })
  }
}
```

También actualizamos la `<template>` para que use el nuevo método `handleSubmitAsync`:

```html
<template>
  <div>
    <form @submit.prevent="handleSubmitAsync">
      <input v-model="username" data-username>
      <input type="submit">
    </form>

  <!-- ... -->
  </div>
</template>
```

Ahora, la prueba.

## Mockear una llamada AJAX

Primero, incluimos la implementación mockeada de `this.$http` en la parte superior, antes del bloque `describe`:

```js
let url = ''
let data = ''

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url
      data = _data
      resolve()
    })
  }
}
```

Ahora, añadimos la prueba, pasando el `$http` mockeado a la opción de montado `mocks`:

```js
it("reveals a notification when submitted", () => {
  const wrapper = shallowMount(FormSubmitter, {
    mocks: {
      $http: mockHttp
    }
  })

  wrapper.find("[data-username]").setValue("alice")
  wrapper.find("form").trigger("submit.prevent")

  expect(wrapper.find(".message").text())
    .toBe("Thank you for your submission, alice.")
})
```

Ahora, en lugar de usar la librería HTTP real que esté asignada a `Vue.prototype.$http`, se usará la implementación mockeada. Esto es bueno: podemos controlar el entorno de la prueba y obtener resultados consistentes.

Ejecutar `yarn test:unit` devuelve una prueba fallida:

```sh
FAIL  tests/unit/FormSubmitter.spec.js
  ● FormSubmitter › reveals a notification when submitted

    [vue-test-utils]: find did not return .message, cannot call text() on empty Wrapper
```

Lo que está sucediendo es que la prueba está terminando _antes_ de que la promesa devuelta por `mockHttp` se resuelva. Podemos hacer que la prueba se `async` así:

```js
it("reveals a notification when submitted", async () => {
  // ...
})
```

Sin embargo, la prueba seguirá terminando antes de que la promesa se resuelva. Una forma de solucionar esto es usar [flush-promises](https://www.npmjs.com/package/flush-promises), un módulo Node.js simple que inmediatamente resolverá todas las promesas pendientes. Lo podemos instalar con `yarn add flus-promises`, y a continuación actualizamos la prueba así:

```js
import flushPromises from "flush-promises"
// ...

it("reveals a notification when submitted", async () => {
  const wrapper = shallowMount(FormSubmitter, {
    mocks: {
      $http: mockHttp
    }
  })

  wrapper.find("[data-username]").setValue("alice")
  wrapper.find("form").trigger("submit.prevent")

  await flushPromises()

  expect(wrapper.find(".message").text())
    .toBe("Thank you for your submission, alice.")
})
```

Utilizar `flush-promises` tiene la ventaja adicional de asegurarse de que todas las promesas, incluyendo `nextTick` se han resuelto, y de que Vue ha actualizado el DOM.

Ahora la prueba pasa. El código fuente de `flush-promises` es solo de unas 10 líneas. Si le interesa Node.js merece la pena leerlo y entender cómo funciona.

También deberíamos asegurarnos de que el endpoint y los datos enviados son correctos. Añadamos dos comprobaciones más a la prueba:

```js
// ...
expect(url).toBe("/api/v1/register")
expect(data).toEqual({ username: "alice" })
```

La prueba sigue pasando.

## Conclusión

En este apartado, vimos cómo:

- Utilizar `trigger` para lanzar eventos, incluso los que tienen modificadores como `prevent`.
- Utilizar `setValue` para darle valor a un `<input>` usando `v-model`.
- Escribir pruebas usando los tres pasos de las pruebas unitarias.
- Mockear un método de `Vue.prototype` usando la opción de montado `mocks`.
- Cómo usar `flush-promises` para resolver inmediatamente todas las promesas, una técnica útil en las pruebas unitarias.

El código fuente para la prueba descrita en esta página se encuentra [aquí](https://github.com/lmiller1990/vue-testing-handbook/tree/master/demo-app/tests/unit/FormSubmitter.spec.js).
