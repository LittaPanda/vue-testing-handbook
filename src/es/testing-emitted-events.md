## Probando eventos emitidos

A medida que las aplicaciones crecen, también crece la cantidad de componentes. Cuando estos comoponentes necesitan compartir datos, los componentes hijos pueden [emitir](https://vuejs.org/v2/api/#vm-emit) un evento, al que el componente padre responderá.

`vue-test-utils` proporciona un API `emitted` que permite hacer comprobaciones sobre eventos emitidos. La documentación para `emitted` se encuentra [aquí](https://vue-test-utils.vuejs.org/api/wrapper/emitted.html).

El código fuente para la prueba descrita en esta página se encuentra [aquí](https://github.com/lmiller1990/vue-testing-handbook/tree/master/demo-app/tests/unit/Emitter.spec.js).

## Escribir un componente y su prueba

Vamos a crear un componente simple. Creamos un componente `<Emitter>`, y añadimos el código siguiente:

```html
<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: "Emitter",

    methods: { 
      emitEvent() {
        this.$emit("myEvent", "name", "password")
      }
    }
  }
</script>

<style scoped>
</style>
```

Añadimos una prueba llamada `emitEvent`:

```js
import Emitter from "@/components/Emitter.vue"
import { mount } from "@vue/test-utils"

describe("Emitter", () => {
  it("emits an event with two arguments", () => {
    const wrapper = mount(Emitter)

    wrapper.vm.emitEvent()

    console.log(wrapper.emitted())
  })
})
```

Mediante el [API emitted](https://vue-test-utils.vuejs.org/ja/api/wrapper/emitted.html) proporcionada por `vue-test-utils`, podemos ver los eventos emitidos fácilmente.

Ejecutemos la prueba con `yarn test:unit`.

```
PASS  tests/unit/Emitter.spec.js
● Console

  console.log tests/unit/Emitter.spec.js:10
    { myEvent: [ [ 'name', 'password' ] ] }
```

## Sintaxis de emitted

`emitted` devuelve un objeto. Los eventos emitidos se guardan como propiedades en el objeto. Podemos inspeccionar los eventos utilizando `emitted().[event]`:

```js
emitted().myEvent //=>  [ [ 'name', 'password' ] ]
```

Probemos llamando a `emitEvent` dos veces.

```js
it("emits an event with two arguments", () => {
  const wrapper = mount(Emitter)

  wrapper.vm.emitEvent()
  wrapper.vm.emitEvent()

  console.log(wrapper.emitted().myEvent)
})
```

Ejecutemos la prueba con `yarn test:unit`:

```
console.log tests/unit/Emitter.spec.js:11
  [ [ 'name', 'password' ], [ 'name', 'password' ] ]
```

`emitted().emitEvent` devuelve un array. La primera instancia de `emitEvent` es accesible usando `emitted().emitEvent[0]`. Podemos acceder a los argumentos usando una sintaxis similar: `emitted().emitEvent[0][0]`, etc. 

Creemos una comprobación sobre el evento emitido.


```js
it("emits an event with two arguments", () => {
  const wrapper = mount(Emitter)

  wrapper.vm.emitEvent()

  expect(wrapper.emitted().myEvent[0]).toEqual(["name", "password"])
})
```

La prueba pasa.

## Probando eventos sin montar el componente

A veces podemos querer probar eventos emitidos sin montar el componente. Podemos hacerlo usando `call`. Escribamos otra prueba.

```js
it("emits an event without mounting the component", () => {
  const events = {}
  const $emit = (event, ...args) => { events[event] = [...args] }

  Emitter.methods.emitEvent.call({ $emit })

  expect(events.myEvent).toEqual(["name", "password"])
})
```

Ya que `$emit` es solo un objeto Javascript, podemos mockearlo, y podemos usar `call` para asociarlo al contexto `this` de `emitEvent`. Al usar `call`, podemos llamar a un método sin montar el componente. 

Usar `call` puede ser útil en situaciones en las que tenemos algún procesamiento pesado en métodos del ciclo de vida como `created` o `mounted` que no queremos ejecutar. Ya que no montamos el componente, los métodos del ciclo de vida nunca se llaman. También puede ser útil cuando queremos manipular el contexto de `this` de una forma específica.

## Conclusión

- El API `emitted` de `vue-test-utils` se usa para hacer comprobaciones de eventos emitidos.
- `emitted` es un método. Devuelve un objeto con propiedades que se corresponden con los eventos emitidos.
- Cada propiedad de `emitted` es un arrray. Podemos acceder cada instancia de un evento emitido usando la sintaxis de arrays `[0]`, `[1]`.
- Los argumentos de los eventos emitidos también se guardan como arrays, y se pueden usar mediante la misma sintaxis.
- `$emit` se puede mockear usando `call`, lo que permite hacer comprobaciones sin renderizar el componente.

El código fuente para las pruebas descritas en esta página se puede encontrar [aquí](https://github.com/lmiller1990/vue-testing-handbook/tree/master/demo-app/tests/unit/Emitter.spec.js).
