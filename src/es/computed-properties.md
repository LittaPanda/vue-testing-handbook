## Probando Computed Properties

Puedes encontrar la prueba descrita en esta página [aquí](https://github.com/lmiller1990/vue-testing-handbook/tree/master/demo-app/tests/unit/NumberRenderer.spec.js).

Probar computed properties es especialmente sencillo, ya que no son más que funciones Javascript.

Empecemos viendo dos formas diferentes de probar una `computed` property. Vamos a desarrollar un componente `<NomberRenderer>`, que renderiza números pares o impares, basándose en una computed property llamada `numbers`.

## Escribiendo la prueba

El componente `<NumberRenderer>` recibirá una prop `even`, que es un booleano. Si `even` es `true`, el componente debería mostrar 2, 4, 6 y 8. Si es `false` debería mostrar 1, 3, 5, 7 y 9. La lista de valores se calculará en una `computed` property llamada `numbers`.

## Probando renderizar el valor

La prueba:

```js
import { mount } from "@vue/test-utils"
import NumberRenderer from "@/components/NumberRenderer.vue"

describe("NumberRenderer", () => {
  it("renders even numbers", () => {
    const wrapper = mount(NumberRenderer, {
      propsData: {
        even: true
      }
    })

    expect(wrapper.text()).toBe("2, 4, 6, 8")
  })
})
```

Antes de lanzar el test, vamos a crear `<NumberRenderer>`:

```html
<template>
  <div>
  </div>
</template>

<script>
export default {
  name: "NumberRenderer",

  props: {
    even: {
      type: Boolean,
      required: true
    }
  }
}
</script>
```

Ahora iniciamos el desarrollo, y dejamos que los errores guíen nuestra implementación. `yarn test:unit` devuelve:

```
● NumberRenderer › renders even numbers

  expect(received).toBe(expected) // Object.is equality

  Expected: "2, 4, 6, 8"
  Received: ""
```

Parece que todo está montado correctamente. Empecemos por implementar `numbers`:

```js
computed: {
  numbers() {
    const evens = []

    for (let i = 1; i < 10; i++) {
      if (i % 2 === 0) {
        evens.push(i)
      }
    }

    return evens
  }
}
```

Y actualicemos la plantilla para que utilice la nueva `computed` property:

```html
<template>
  <div>
    {{ numbers }}
  </div>
</template>
```

`yarn test:unit` ahora devuelve:

```
FAIL  tests/unit/NumberRenderer.spec.js
● NumberRenderer › renders even numbers

  expect(received).toBe(expected) // Object.is equality

  Expected: "2, 4, 6, 8"
  Received: "[
    2,
    4,
    6,
    8
  ]"
```

Los números son correctos, pero queremos mostrar la lista con el formato correcto. Vamos a actualizar el valor a devolver:

```js
return evens.join(", ")
```

Ahora `yarn test:unit` pasa! 

## Probando con `call` 

Ahora añadiremos una prueba para el caso de `even: false`. Esta vez, veremos una forma alternativa de probar una computed property, sin renderizar el componente.

La prueba primero:

```js
it("renders odd numbers", () => {
  const localThis = { even: false }

  expect(NumberRenderer.computed.numbers.call(localThis)).toBe("1, 3, 5, 7, 9")
})
```

En lugar de renderizar el componente y hacer la comprobación sobre `wrapper.text()`, utilizamos `call` para proporcionar un contexto `this` alternativo a `numbers`. Veremos qué sucede si no usamos `call` después de que hagamos que la prueba pase.

Lanzar la prueba actual devuelve:

```
FAIL  tests/unit/NumberRenderer.spec.js
● NumberRenderer › renders odd numbers

  expect(received).toBe(expected) // Object.is equality

  Expected: "1, 3, 5, 7, 9"
  Received: "2, 4, 6, 8"
```

Actualizamos `numbers`:


```js
numbers() {
  const evens = []
  const odds = []

  for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
      evens.push(i)
    } else {
      odds.push(i)
    }
  }

  return this.even === true ? evens.join(", ") : odds.join(", ")
}
```

Ahora ambas pruebas pasan! Pero, ¿qué habría pasado si no hubiésemos usado `call` en la segunda prueba? Intentemos actualizarla así:

```js
it("renders odd numbers", () => {
  const localThis = { even: false }

  expect(NumberRenderer.computed.numbers()).toBe("1, 3, 5, 7, 9")
})
```

La prueba ahora falla:

```
FAIL  tests/unit/NumberRenderer.spec.js
● NumberRenderer › renders odd numbers

  expect(received).toBe(expected) // Object.is equality

  Expected: "1, 3, 5, 7, 9"
  Received: "2, 4, 6, 8"
```

`vue` enlaza automáticamente las `props` con `this`. Sin embargo, no estamos renderizando el componente con `mount`, por lo que Vue no está enlazando nada con `this`. Si hacemos `console.log(this)`, podemos ver que el contexto es simplemente el objeto `computed`:

```
{ numbers: [Function: numbers] }
```

Por lo que necesitamos usar `call`, que nos permite enlazar un `this` alternativo, en nuestro caso, uno con la prop `even`.

## ¿Usar `call` o `mount`?

Las dos técnicas presentadas son útiles para probar computed properties. `call` puede ser ser de utilidad cuando:

- Estamos probando un componente que realiza operaciones que consuman mucho tiempo en los métodos de ciclo de vida que queramos evitar ejecutar en nuestra prueba.
- Queremos usar stubs para algunos valores de `this`. Usar `call` y pasar un contexto personalizado puede ser útil.

Por supuesto, también queremos estar seguros de que el valor se renderiza correctamente, así que debemos asegurarnos de elegir la técnica correcta para probar las computed properties, y probar todos los casos extremos.

## Conclusión

- Las computed properties se pueden probar usando `mount` y haciendo comprobaciones sobre el HTML renderizad.
- Las computed properties complejas se pueden probar independientemente usando `call`.
