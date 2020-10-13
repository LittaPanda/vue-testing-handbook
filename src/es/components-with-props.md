## Definiendo props con propsData

Podemos usar `propsData` tanto con `mount` como con `shallowMount`. A menudo se utiliza para probar componentes que reciben props de su componente padre.

`propsData` se pasa como segundo argumento de `shallowMount` o `mount`, de la siguiente forma:

```js
const wrapper = shallowMount(Foo, {
  propsData: {
    foo: 'bar'
  }
})
```

## Creando el componente

Creamos un componente simple `<SubmitButton>` que tiene dos `props`: `msg` y `isAdmin`. Dependiendo de los valores de la prop `isAdmin`, este componente contendrá un `<span>` en uno de estos dos estados:

* `No autorizado` si `isAdmin` es `false` (o no se ha pasado la prop)
* `Admin Privileges` si `isAdmin` es `true`

```html
<template>
  <div>
    <span v-if="isAdmin">Admin Privileges</span>
    <span v-else>Not Authorized</span>
    <button>
      {{ msg }}
    </button>
  </div>
</template>

<script>
export default {
  name: "SubmitButton",

  props: {
    msg: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>
```

## La primera prueba

Haremos una comprobación del mensaje en el caso de que el usuario no tenga privilegios de administrador.

```js
import { mount } from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'

describe('SubmitButton.vue', () => {
  it("displays a non authorized message", () => {
    const msg = "submit"
    const wrapper = mount(SubmitButton,{
      propsData: {
        msg: msg
      }
    })

    console.log(wrapper.html())

    expect(wrapper.find("span").text()).toBe("Not Authorized")
    expect(wrapper.find("button").text()).toBe("submit")
  })
})
```

Lancemos las pruebas con `yarn test:unit`. El resultado es:

```
PASS  tests/unit/SubmitButton.spec.js
  SubmitButton.vue
    ✓ displays a non authorized message (15ms)
```

El resultado de `console.log(wrapper.html())` también se muestra:

```html
<div>
  <span>Not Authorized</span>
  <button>
    submit
  </button>
</div>
```

Podemos ver que la prop `msg` se procesa y el HTML resultante se renderiza correctamente.

## Una segunda prueba

Hagamos una comprobación del otro estado posible: cuando `isAdmin` sea `true`:

```js
import { mount } from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'

describe('SubmitButton.vue', () => {
  it('displays a admin privileges message', () => {
    const msg = "submit"
    const isAdmin = true
    const wrapper = mount(SubmitButton,{
      propsData: {
        msg,
        isAdmin
      }
    })

    console.log(wrapper.html())
    
    expect(wrapper.find("span").text()).toBe("Admin Privileges")
    expect(wrapper.find("button").text()).toBe("submit")
  })
})
```

Lancemos el test con `yarn test:unit` y comprobemos el resultado:

```shell
PASS  tests/unit/SubmitButton.spec.js
  SubmitButton.vue
    ✓ displays a admin privileges message (4ms)
```

También hemos mostrado el HTML con `console.log(wrapper.html())`:

```html
<div>
  <span>Admin Privileges</span>
  <button>
    submit
  </button>
</div>
```

Podemos ver que la prop `isAdmin` se ha usado para renderizar el `<span>` correcto.

## Refactorizando las pruebas

Vamos a refactorizar las pruebas adheriéndonos al principio "Don't Repeat Yourself" (DRY, "no te repitas" en español). Ya que todas las pruebas están pasando, podemos refactorizar con confianza. Mientras todas las pruebas sigan pasando tras la refactorización, podemos estar seguros de que no hemos roto nada.

## Refactorizar con una función factoría

En ambas pruebas llamamos `mount` y luego pasamos un objeto `propsData` similar. Podemos refactorizar esto usando una factoría. Una factoría es una función que devuelve un objeto (_produce_ objetos, de ahí el nombre factoría).

```js
const msg = "submit"
const factory = (propsData) => {
  return mount(SubmitButton, {
    propsData: {
      msg,
      ...propsData
    }
  })
}
```

La función de arriba montará (`mount`) un componente `SubmitButton`. Podemos pasar cualquier prop a cambiar como el primer argumento de `factory`. Vamos a eliminar la repetición en las pruebas con la factoría.

```js
describe("SubmitButton", () => {
  describe("does not have admin privileges", ()=> {
    it("renders a message", () => {
      const wrapper = factory()

      expect(wrapper.find("span").text()).toBe("Not Authorized")
      expect(wrapper.find("button").text()).toBe("submit")
    })
  })

  describe("has admin privileges", ()=> {
    it("renders a message", () => {
      const wrapper = factory({ isAdmin: true })

      expect(wrapper.find("span").text()).toBe("Admin Privileges")
      expect(wrapper.find("button").text()).toBe("submit")
    })
  })
})
```

Lanzamos las pruebas de nuevo y todo sigue pasando.

```sh
PASS  tests/unit/SubmitButton.spec.js
 SubmitButton
   has admin privileges
     ✓ renders a message (26ms)
   does not have admin privileges
     ✓ renders a message (3ms)
```

Dado que tenemos una buena suite de pruebas, ahora podemos refactorizar fácilmente y con confianza.

## Conclusión

- Al pasar `propsData` al montar un componente, podemos definir las `props` que se utilizarán en el test.
- Las factorías se pueden usar para eliminar repetición en nuestras pruebas.
- En lugar de `propsData`, también podemos usar [`setProps`](https://vue-test-utils.vuejs.org/api/wrapper-array/#setprops-props) para definir valores de las props durante las pruebas.
