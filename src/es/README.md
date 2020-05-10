## ¿Qué es esta guía?

¡Bienvenido al manual de pruebas unitarias de Vue.js!

Esta es una colección de ejemplos breves y centrados sobre cómo probar los componentes de Vue. Utiliza `vue-test-utils`, la biblioteca oficial para probar los componentes de Vue, y Jest, un framework moderno de pruebas. Cubre la API `vue-test-utils`, así como las mejores prácticas para probar componentes.

Cada sección es independiente de las demás. Comenzamos configurando un entorno con `vue-cli` y escribiendo una prueba simple. Despues, se plantean dos formas de representar un componente: `mount` y `shallowMount`. Las diferencias serán demostradas y explicadas.

A partir de entonces, cubrimos cómo ejecutar varios escenarios que surgen al probar componentes, como probar componentes que:

- Reciben props
- Usan propiedades computadas (computed properties)
- Renderizan otros componentes
- Emiten eventos

y demás. Luego pasamos a casos más interesantes, como:

- Mejores prácticas para probar Vuex (en componentes e independientemente)
- Probar Vue router
- Pruebas que involucran componentes de terceros

También exploraremos cómo usar la API de Jest para hacer que nuestras pruebas sean más robustas, como:

- Simular (mocking) respuestas de API
- Simulación (mocking) y espionaje de módulos
- Utilizar snapshots

## Otras lecturas

Otros recursos útiles incluyen:

- [Documentación oficial](https://vue-test-utils.vuejs.org/)
- [Libro](https://www.manning.com/books/testing-vue-js-applications) escrito por el autor de `vue-test-utils`
- [Vue.js 3 + Curso de pruebas unitarias](https://vuejs-course.com) (principios de 2020, opinión previa y revisión temprana disponible)
- [Este increíble curso en VueSchool](https://vueschool.io/courses/learn-how-to-test-vuejs-components?friend=vth) por varios contribuyentes principales de Vue
