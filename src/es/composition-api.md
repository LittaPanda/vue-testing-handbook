## Composition API (API de composición)

Vue 3 introducirá una nueva API para crear componentes - el API de composición o [Composition API](https://vue-composition-api-rfc.netlify.com/#basic-example). Para permitir a los usuarios probarla y obtener feedback, el equipo de Vue ha publicado un plugin que nos permite probarla en Vue 2. Lo puedes encontrar [aquí](https://github.com/vuejs/composition-api). 

Probar la construcción de un componente con la Composition API no debería ser diferente a probar un componente estándar, ya que no estamos probando la implementación, sino la salida (*qué* hace el componente, no *cómo* lo hace). Este artículo muestra un ejemplo simple de un componente que utiliza la Composition API en Vue 2, y cómo las estrategias para las pruebas son las mismas que en cualquier otro componente.

El código fuente para las pruebas descritas en esta página se puede obtener [aquí](https://github.com/lmiller1990/vue-testing-handbook/tree/master/demo-app/tests/unit/CompositionApi.spec.js).

## El componente

A continuación vemos lo que sería más o menos el "Hola Mundo" de la Composition API. Si no entiendes algo, [lee el RFC](https://vue-composition-api-rfc.netlify.com/) o busca en Google. Hay montones de recursos sobre la Composition API.

```html
<template>
  <div>
    <div class="message">{{ uppercasedMessage }}</div>
    <div class="count">
      Count: {{ state.count }}
    </div>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

import { 
  reactive,
  computed
} from '@vue/composition-api'

export default {
  name: 'CompositionApi',

  props: {
    message: {
      type: String
    }
  },

  setup(props) {
    const state = reactive({
      count: 0
    })

    const increment = () => {
      state.count += 1
    }

    return {
      state,
      increment,
      uppercasedMessage: computed(() => props.message.toUpperCase())
    }
  }
}
</script>
```

Las dos cosas que necesitaremos probar aquí son:

1. ¿Hacer clic sobre el botón "Increment" aumenta `state.count` en 1?

2. ¿El mensaje recibido en las props se renderiza correctamente (transformado a mayúsculas)?

## Probando el mensaje en las props

Probar que el mensaje se renderiza correctamente es trivial. Simplemente usamos `propsData` para darle un valor a la prop, como se describe [aquí](/components-with-props.html).

```js
import { mount } from "@vue/test-utils"

import CompositionApi from "@/components/CompositionApi.vue"

describe("CompositionApi", () => {
  it("renders a message", () => {
    const wrapper = mount(CompositionApi, {
      propsData: {
        message: "Testing the composition API"
      }
    })

    expect(wrapper.find(".message").text()).toBe("TESTING THE COMPOSITION API")
  })
})
```

Como es de esperar, esto es muy simple – independientemente de cómo componemos los componentes, usamos la misma API y las mismas estrategias para las pruebas. Deberías ser capaz de cambiar la implementación completamente sin necesidad de tocar las pruebas. Recuerda probar las salidas (el HTML renderizado normalmente) a partir de entradas determinadas (props, eventos lanzados), no la implementación.

## Probando el clic en el botón

Escribir una prueba para asegurarnos de que pulsar el botón incrementa `state.count` es igual de simple. Nótese que la prueba está marcado como `async`; puedes leer más sobre por qué esto es necesario en [Simulando entradas del usuario](simulating-user-input.html#writing-the-test).

```js
import { mount } from "@vue/test-utils"

import CompositionApi from "@/components/CompositionApi.vue"

describe("CompositionApi", () => {
  it("increments a count when button is clicked", async () => {
    const wrapper = mount(CompositionApi, {
      propsData: { message: '' }
    })

    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.find(".count").text()).toBe("Count: 1")
  })
})
```

De nuevo, muy poco interesante. Lanzamos el evento `click` mediante `trigger`, y comprobamos que el `count` que se renderiza ha aumentado.

## Conclusión

Este artículo demuestra cómo probar un componente que usa la Composition API es idéntico a probar uno que utiliza el API de opciones tradicional. Las ideas y conceptos son los mismos. El punto principal a aprender es que cuando hacemos tests debemos hacer las comprobaciones a partir de entradas y salidas.

Debería ser posible refactorizar cualquier componente tradicional de Vue para que utilice la Composition API sin necesidad de cambiar las pruebas unitarias. Si te encuentras con la necesidad de cambiar las pruebas al refactorizar, probablemente estés probando la *implementación*, no la salida.

Aunque es una nueva funcionalidad atractiva, la Composition API es totalmente aditiva, por lo que no hay una necesidad inmediata de usarla. Sin embargo, independientemente de tu elección, recuerda que una buena prueba unitaria comprueba el estado final del componente, sin tener en cuenta los detalles de implementación.
