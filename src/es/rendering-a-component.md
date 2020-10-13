## Dos formas de renderizar

`vue-test-utils` proporciona dos formas de renderizar, o montar (__mount__) un componente: `mount` y `shallowMount`. Un componente montado utilizando cualquiera de estos métodos devuelve un `wrapper`, que es un objeto que contiene el componente de Vue, además de algunos métodos útiles para las pruebas.

Empecemos con dos componentes simples:

```js
const Child = Vue.component("Child", {
  name: "Child",

  template: "<div>Child component</div>"
})

const Parent = Vue.component("Parent", {
  name: "Parent",

  template: "<div><child /></div>"
})
```

Empezaremos renderizando `Child` y llamando al método `html` que proporciona `vue-test-utils` para inspeccionar el HTML resultante.

```js
const shallowWrapper = shallowMount(Child)
const mountWrapper = mount(Child)

console.log(shallowWrapper.html())
console.log(mountWrapper.html())
```

Tanto `mountWrapper.html()` como `shallowWrapper.html()` devuelven el siguiente resultado:

```html
<div>Child component</div>
```

No hay ninguna diferencia aquí. ¿Qué hay de `Parent`?

```js
const shallowWrapper = shallowMount(Parent)
const mountWrapper = mount(Parent)

console.log(shallowWrapper.html())
console.log(mountWrapper.html())
```

`mountWrapper.html()` ahora devuelve:

```html
<div><div>Child component</div></div>
```

Que es el HTML de `Parent` y `Child` completamente renderizado. `shallowWrapper.html()`, en cambio, produce esto:

```html
<div><vuecomponent-stub></vuecomponent-stub></div>
```

`<Child />` ha sido reemplazado por `<vuecomponent-stub />`. `shallowMount` renderiza los elementos HTML, pero reemplaza los componentes de Vue con un stub.

> Un stub es un tipo de objeto "fake" que se utiliza para reemplazar uno real.

Esto puede ser útil. Imagine que quiere probar su componente `App.vue`, que se ve así:

```vue
<template>
  <div>
    <h1>My Vue App</h1>
    <fetch-data />
  </div>
</template>
```

Y quiere probar que `<h1>My Vue App</h1>` se renderiza correctamente. También tenemos un componente `<fetch-data>`, que hace una petición a un API externa en su hook de ciclo de vida `mounted`.

Si usamos `mount`, a pesar de que todo lo que queremos es comprobar que cierto texto se renderiza, `<fetch-data />` hará una petición al API. Esto hará que nuestra prueba sea lenta y propensa a errores. Por ese motivo, reemplazamos nuestras dependencias por stubs. Al usar `shallowMount`, `<fetch-data />` será reemplazado por un `<vuecomponent-stub />`, y la llamada al API no se realizará.
