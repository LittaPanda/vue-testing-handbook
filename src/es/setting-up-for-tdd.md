## Instalación de vue-cli

`vue-test-utils` es la biblioteca oficial de pruebas para Vue, y se utilizará en toda la guía. `vue-test-utils` se ejecuta tanto en un navegador como en un entorno de Node.js, y funciona con cualquier framework de prueba. A lo largo de esta guía, realizaremos nuestras pruebas en un entorno Node.js.

La forma más fácil de comenzar es utilizando `vue-cli`. Este creará un proyecto, así como también configurará Jest, un framework de pruebas popular. Instale `vue-cli` ejecutando:

```sh
yarn global add @vue/cli
```

o con npm:

```sh
npm install -g @vue/cli
```

Cree un nuevo proyecto con `vue-cli` ejecutando `vue create [nombre-del-proyecto]`. En las opciones de instalación de `vue-cli`, elija "Manually select features (Seleccionar funciones manualmente)", "Unit Testing (Prueba Unitaria)" y "Jest" para el framework de pruebas.

Una vez que finalice la instalación, `cd` en el proyecto y ejecute el comando `yarn test:unit`. Si todo salió bien, debería ver:

```
 PASS  tests/unit/HelloWorld.spec.js
  HelloWorld.vue
    ✓ renders props.msg when passed (26ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.074s
```
¡Felicitaciones, acaba de realizar su primera prueba satisfactoria!

## Escribiendo su primera prueba

Realizamos una prueba existente que venia con el proyecto. Vamos a ensuciarnos las manos y escribir nuestro propio componente junto con una prueba. Tradicionalmente, al hacer TDD (Desarrollo Impulsado por Pruebas, por sus siglas en inglés), primero se escribe la prueba fallida, luego se implementa el código que permite que la prueba pase. Por ahora, escribiremos el componente primero.

Ya no necesitamos `src/components/HelloWorld.vue` ni `tests/unit/HelloWorld.spec.js`, por lo que puede eliminarlos.

## Crear el componente `Saludo`

Cree un archivo `Greeting.vue` en` src/components`. Dentro de `Greeting.vue`, agregue lo siguiente:

```vue
<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script>
export default {
  name: "Greeting",

  data() {
    return {
      greeting: "Vue y TDD"
    }
  }
}
</script>
```

## Escribiendo la prueba

`Greeting` (saludo en inglés) solo tiene una responsabilidad: representar el valor de `greeting` (`Vue y TDD` en este caso). La estrategia que utilizaremos será la siguiente:

1. Interpretar el componente con `mount`
2. Afirmar que el texto del componente contiene "Vue y TDD"

Cree un `Greeting.spec.js` dentro de` tests/unit`. En el interior, importe el componente `Greeting.vue`, así como `mount`, y agregue el esquema de la prueba:

```
import { mount } from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'

describe('Greeting.vue', () => {
  it('renders a greeting', () => {

  })
})
```

Existen diferentes sintaxis utilizadas para TDD, utilizaremos la sintaxis comúnmente vista `describe` e `it` que vienen incluidas con Jest. `describe` generalmente describe de qué se trata la prueba, en este caso describe el componente `Greeting.vue`. `it` representa una única responsabilidad que la prueba debe cumplir. A medida que agregamos más funciones al componente, agregamos más bloques `it`.

Ahora deberíamos interpretar el componente con `mount`. La práctica estándar es asignar el componente a una variable llamada `wrapper`. También imprimiremos el marcado html del componente para asegurarnos de que todo esté funcionando correctamente:

```js
const wrapper = mount(Greeting)

console.log(wrapper.html())
```

## Ejecutando la prueba

Ejecute la prueba escribiendo `yarn test:unit` en su terminal. Cualquier archivo en el directorio `tests` que termine con `.spec.js` se ejecuta automáticamente gracias a `vue-cli`. Si todo salió bien, debería ver:

```
PASS  tests/unit/Greeting.spec.js
Greeting.vue
  ✓ renders a greeting (27ms)

console.log tests/unit/Greeting.spec.js:7
  <div>
    Vue y TDD
  </div>
```

Podemos ver que el marcado html es correcto y la prueba pasa. La prueba está pasando porque no hubo falla; esta prueba nunca puede fallar, por lo que aún no es muy útil. Incluso si cambiamos `Greeting.vue` y eliminamos `greeting` de la plantilla, la prueba todavía pasará. Arreglemos eso.

## Hacer afirmaciones

Necesitamos hacer una afirmación para asegurar que el componente se esté comportando correctamente. Podemos hacer eso utilizando la API de Jest usando `expect` (esperar en inglés). Lo anterior lo podemos escribir de la siguiente manera: `expect(resultado) .to [matcher] (actual)`.

_Matchers_ (en inglés) son métodos para comparar valores y objetos. Por ejemplo:

```js
expect(1).toBe(1)
```

Una lista completa de matchers está disponible en la [documentación de Jest] (http://jestjs.io/docs/en/expect). `vue-test-utils` no incluye ningún matcher, los que Jest proporciona son más que suficientes. En este caso, queremos comparar el texto de el componente `Greeting`. Podríamos escribir:

```js
expect(wrapper.html().includes("Vue y TDD")).toBe(true)
```

Lo anterior funciona, pero `vue-test-utils` tiene una forma aún mejor de obtener y comparar las marcas de html, o el texto en este caso: `wrapper.text`. Ahora terminemos la prueba:

```js
import { mount } from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'

describe('Greeting.vue', () => {
  it('renders a greeting', () => {
    const wrapper = mount(Greeting)

    expect(wrapper.text()).toMatch("Vue y TDD")
  })
})
```

Ya no necesitamos imprimir el marcado a la consola con `console.log`, por lo que puede eliminarlo. Ejecute las pruebas con `yarn unit:test`, y si todo salió bien debería obtener:

```
PASS  tests/unit/Greeting.spec.js
Greeting.vue
  ✓ renders a greeting (15ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.477s, estimated 2s
```

Por el momento todo se ve bien. Pero siempre debe ver que una prueba falle, y luego hacerla pasar para asegurarse de que esta realmente funcione. En el TDD tradicional, se debe escribir la prueba antes de escribir el código de implementación; debe ver que la prueba falle para luego usar los errores de la falla para guiar la implementación de su código. Asegurémonos de que ésta prueba realmente funcione. Actualice `Greeting.vue`:

```vue
<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script>
export default {
  name: "Greeting",

  data() {
    return {
      greeting: "Vue sin TDD"
    }
  }
}
</script>
``` 

Y ahora ejecute la prueba con `yarn test:unit`:

```
FAIL  tests/unit/Greeting.spec.js
Greeting.vue
  ✕ renders a greeting (24ms)

● Greeting.vue › renders a greeting

  expect(received).toMatch(expected)

  Expected value to match:
    "Vue y TDD"
  Received:
    "Vue sin TDD"

     6 |     const wrapper = mount(Greeting)
     7 |
  >  8 |     expect(wrapper.text()).toMatch("Vue y TDD")
       |                            ^
     9 |   })
    10 | })
    11 |

    at Object.<anonymous> (tests/unit/Greeting.spec.js:8:28)
```

Jest nos da buena retroalimentación. Podemos ver el resultado esperado y el resultado actual, así como en qué línea falló la afirmación. En este caso, la prueba falló, tal y como se esperaba. Revierta `Greeting.vue` a su estado anterior y asegúrese de que la prueba esté pasando nuevamente.

A continuación, veremos los dos métodos que `vue-test-utils` proporciona para interpretar componentes: `mount` y `shallowMount`.
