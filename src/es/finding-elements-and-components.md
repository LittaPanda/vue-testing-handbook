## Localizando elementos

`vue-test-utils` proporciona varias formas de encontrar y comprobar la presencia de elementos HTML u otros componentes de Vue mediante el uso del método `find`. La función principal de `find` es comprobar que un componente renderiza correctamente un elemento o un componente hijo.

El código fuente para la prueba descrita en esta página se puede encontrar [aquí](https://github.com/lmiller1990/vue-testing-handbook/tree/master/demo-app/tests/unit/Parent.spec.js).

## Creando los componentes

Para este ejemplo, crearemos un componente `<Child>` (hijo) y `<Parent>` (padre).

`Child`: 

```vue
<template>
  <div>Child</div>
</template>

<script>
export default {
  name: "Child"
}
</script>
```

`Parent`:

```vue
<template>
  <div>
    <span v-show="showSpan">
      Parent Component
    </span>
    <Child v-if="showChild" />
  </div>
</template>

<script>
import Child from "./Child.vue"

export default {
  name: "Parent",

  components: { Child },

  data() {
    return {
      showSpan: false,
      showChild: false
    }
  }
}
</script>
```

## `find` con sintaxis `querySelector`

Los elementos normales se pueden seleccionar fácilmente usando la sintaxis usada con `document.querySelector`. `vue-test-utils` también proporciona un método `isVisible` para comprobar si elementos renderizados condicionalmente con `v-show` son visibles. Crea un archivo `Parent.spec.js`, y dentro añade el siguiente test:

```js
import { mount } from "@vue/test-utils"
import Parent from "@/components/Parent.vue"

describe("Parent", () => {
  it("does not render a span", () => {
    const wrapper = mount(Parent)

    expect(wrapper.find("span").isVisible()).toBe(false)
  })
})
```

Como `v-show="showSpan"` es `false` por defecto, esperamos que el método `isVisible` para el elemento `<span>` devuelva `false`. La prueba pasa cuando la lanzamos con `yarn test:unit`. A continuación veremos una prueba para cuando `showSpan` es `true`.

```js
it("does render a span", () => {
  const wrapper = mount(Parent, {
    data() {
      return { showSpan: true }
    }
  })

  expect(wrapper.find("span").isVisible()).toBe(true)
})
```

Y pasa! De modo muy similar a `isVisible` para `v-show`, `vue-test-utils` proporciona un método `exists` para ser usado cuando probamos elementos renderizados condicionalmente usando `v-if`.

## Encontrando componentes con `name` y `Component`

Encontrar componentes hijos es un poco diferente a encontrar elementos HTML normales. Existen dos formas principales de comprobar la presencia de componentes de Vue hijos:

1. `find(Component)`
2. `find({ name: "ComponentName" })`

Estos son un poco más fáciles de entender en el contexto de una prueba de ejemplo. Empecemos con la sintaxis `find(Component)`. Esto requiere que importemos el componente, y que lo pasemos a la función `find`.

```js
import Child from "@/components/Child.vue"

it("does not render a Child component", () => {
  const wrapper = mount(Parent)

  expect(wrapper.find(Child).exists()).toBe(false)
})
```

La implementación de `find` es bastante compleja, ya que funciona con la sintaxis de `querySelector`, así como con varias sintaxis más. Puedes ver parte del código fuente que encuentra comonentes de Vue hijos [aquí](https://github.com/vuejs/vue-test-utils/blob/dev/packages/test-utils/src/find.js). Básicamente comprueba el nombre (`name`) del componente contra cualquier hijo renderizado, y luego comprueba el `constructor`, y algunas otras propiedades.

Como se menciona en el párrafo anterior, la propiedad `name` es una de las comprobaciones hechas por `find` cuando pasas un componente. En lugar de pasar el componente, puedes símplemente pasar un objeto con la propiedad `name` correcta. De este modo no necesitas importar el componente. Vamos a probar el caso en el que `<Child>` debería ser renderizado:

```js
it("renders a Child component", () => {
  const wrapper = mount(Parent, {
    data() {
      return { showChild: true }
    }
  })

  expect(wrapper.find({ name: "Child" }).exists()).toBe(true)
})
```

Pasa! Usar la propiedad `name` puede ser poco intuitivo, por lo que importar el propio componente es una alternativa. Otra opción es símplemente añadir una `class` o `id` y buscar usando la sintaxis tipo `querySelector` presentada en los dos primeros ejemplos.

## `findAll`

A menudo, hay caso en los que queremos comprobar que una cierta cantidad de elementos se renderizan. Un ejemplo común es una lista de elementos renderizados con `v-for`. A continuación tenemos un `<ParentWithManyChildren>` (padre con varios hijos) que renderiza varios componentes `<Child>` (hijo).

```vue
<template>
  <div>
    <Child v-for="id in [1, 2 ,3]" :key="id" />
  </div>
</template>

<script>
import Child from "./Child.vue"

export default {
  name: "ParentWithManyChildren",

  components: { Child }
}
</script>
```

Podemos escribir una prueba usando `findAll` para comprobar que tres componentes `<Child>` se han renderizado de la siguiente forma:

```js
it("renders many children", () => {
  const wrapper = mount(ParentWithManyChildren)

  expect(wrapper.findAll(Child).length).toBe(3)
})
```

Ejecutar `yarn test:unit` muestra que la prueba pasa. Puedes usar la sintaxis `querySelector` con `findAll` también.

## Conclusión

Esta página cubre:

- usar `find` y `findAll` con la sintaxis de `querySelector`
- `isVisible` y `exists`
- usar `find` y `findAll` con un componente o su nombre como selector

El código fuente para las pruebas descritas en esta página se encuentra [aquí](https://github.com/lmiller1990/vue-testing-handbook/tree/master/demo-app/tests/unit/Parent.spec.js).
