(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{286:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("This book is written for Vue.js 3 and Vue Test Utils v2.")]),t._v(" "),e("p",[t._v("Find the Vue.js 2 version "),e("router-link",{attrs:{to:"/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"testing-computed-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing-computed-properties"}},[t._v("#")]),t._v(" Testing Computed Properties")]),t._v(" "),e("p",[t._v("You can find the test described on this page "),e("a",{attrs:{href:"https://github.com/lmiller1990/vue-testing-handbook/tree/master/demo-app-vue-3/tests/unit/NumberRenderer.spec.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Testing computed properties are especially simple, since they are just plain old JavaScript functions.")]),t._v(" "),e("p",[t._v("Let's start with looking at two different ways to test a "),e("code",[t._v("computed")]),t._v(" property. We will develop a "),e("code",[t._v("<NumberRenderer>")]),t._v(" component, that renders either odd or even numbers, based on a "),e("code",[t._v("numbers")]),t._v(" computed property.")]),t._v(" "),e("h2",{attrs:{id:"writing-the-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-the-test"}},[t._v("#")]),t._v(" Writing the test")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("<NumberRenderer>")]),t._v(" component will receive an "),e("code",[t._v("even")]),t._v(" prop, that is a boolean. If "),e("code",[t._v("even")]),t._v(" is "),e("code",[t._v("true")]),t._v(", the component should render 2, 4, 6, and 8. If "),e("code",[t._v("false")]),t._v(", it should render 1, 3, 5, 7 and 9. The list of values will be calculated in a "),e("code",[t._v("computed")]),t._v(" property called "),e("code",[t._v("numbers")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"testing-by-rendering-the-value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing-by-rendering-the-value"}},[t._v("#")]),t._v(" Testing by rendering the value")]),t._v(" "),e("p",[t._v("The test:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mount "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vue/test-utils"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" NumberRenderer "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@/components/NumberRenderer.vue"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NumberRenderer"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"renders even numbers"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NumberRenderer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        even"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2, 4, 6, 8"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Before running the test, let's set up "),e("code",[t._v("<NumberRenderer>")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NumberRenderer"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    even"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      required"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("Now we start development, and let the error messages guide our implementation. "),e("code",[t._v("yarn test:unit")]),t._v(" yields:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('● NumberRenderer › renders even numbers\n\n  expect(received).toBe(expected) // Object.is equality\n\n  Expected: "2, 4, 6, 8"\n  Received: ""\n')])])]),e("p",[t._v("It looks like everything is hooked up correctly. Let's start implementing "),e("code",[t._v("numbers")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("computed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("numbers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" evens "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        evens"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" evens\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("And update the template to use the new computed property:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ numbers }}\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[e("code",[t._v("yarn test:unit")]),t._v(" now yields:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('FAIL  tests/unit/NumberRenderer.spec.js\n● NumberRenderer › renders even numbers\n\n  expect(received).toBe(expected) // Object.is equality\n\n  Expected: "2, 4, 6, 8"\n  Received: "[\n    2,\n    4,\n    6,\n    8\n  ]"\n')])])]),e("p",[t._v("The numbers are correct, but we want to render the list formatted nicely. Let's update the "),e("code",[t._v("return")]),t._v(" value:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" evens"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('", "')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Now "),e("code",[t._v("yarn test:unit")]),t._v(" passes!")]),t._v(" "),e("h2",{attrs:{id:"testing-with-call"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing-with-call"}},[t._v("#")]),t._v(" Testing with "),e("code",[t._v("call")])]),t._v(" "),e("p",[t._v("We will now add a test for the case of "),e("code",[t._v("even: false")]),t._v(". This time, we will see an alternative way to test a computed property, without actually rendering the component.")]),t._v(" "),e("p",[t._v("The test, first:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"renders odd numbers"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" localThis "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" even"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NumberRenderer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("computed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("numbers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localThis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1, 3, 5, 7, 9"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Instead of rendering the component and making an assertion on "),e("code",[t._v("wrapper.text()")]),t._v(", we are using "),e("code",[t._v("call")]),t._v(" to provide alternative "),e("code",[t._v("this")]),t._v(" context to "),e("code",[t._v("numbers")]),t._v(". We will see what happens if we don't use "),e("code",[t._v("call")]),t._v(" after we get the test to pass.")]),t._v(" "),e("p",[t._v("Running the current test yields:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('FAIL  tests/unit/NumberRenderer.spec.js\n● NumberRenderer › renders odd numbers\n\n  expect(received).toBe(expected) // Object.is equality\n\n  Expected: "1, 3, 5, 7, 9"\n  Received: "2, 4, 6, 8"\n')])])]),e("p",[t._v("Update "),e("code",[t._v("numbers")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("numbers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" evens "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" odds "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      evens"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      odds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("even "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" evens"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('", "')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" odds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('", "')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Now both tests pass! But what if we hadn't used "),e("code",[t._v("call")]),t._v(" in the second test? Try updating it like so:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"renders odd numbers"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" localThis "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" even"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NumberRenderer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("computed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("numbers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1, 3, 5, 7, 9"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("The test now fails:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('FAIL  tests/unit/NumberRenderer.spec.js\n● NumberRenderer › renders odd numbers\n\n  expect(received).toBe(expected) // Object.is equality\n\n  Expected: "1, 3, 5, 7, 9"\n  Received: "2, 4, 6, 8"\n')])])]),e("p",[e("code",[t._v("vue")]),t._v(" automatically binds "),e("code",[t._v("props")]),t._v(" to "),e("code",[t._v("this")]),t._v(". We are not rendering the component with "),e("code",[t._v("mount")]),t._v(", though, so Vue isn't binding anything to "),e("code",[t._v("this")]),t._v(". If you do "),e("code",[t._v("console.log(this)")]),t._v(", you can see the context is simply the "),e("code",[t._v("computed")]),t._v(" object:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{ numbers: [Function: numbers] }\n")])])]),e("p",[t._v("So we need to use "),e("code",[t._v("call")]),t._v(", which lets us bind an alternative "),e("code",[t._v("this")]),t._v(" object, in our case, one with a "),e("code",[t._v("even")]),t._v(" property.")]),t._v(" "),e("h2",{attrs:{id:"to-call-or-to-mount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#to-call-or-to-mount"}},[t._v("#")]),t._v(" To "),e("code",[t._v("call")]),t._v(" or to "),e("code",[t._v("mount")]),t._v("?")]),t._v(" "),e("p",[t._v("Both techniques presented are useful for testing computed properties. Call can be useful when:")]),t._v(" "),e("ul",[e("li",[t._v("You are testing a component that does some time consuming operations in a lifecycle methods you would like to avoid executing in your computed unit test.")]),t._v(" "),e("li",[t._v("You want to stub out some values on "),e("code",[t._v("this")]),t._v(". Using "),e("code",[t._v("call")]),t._v(" and passing a custom context can be useful.")])]),t._v(" "),e("p",[t._v("Of course, you want to make sure the value is correctly rendered as well, so make sure you choose the correct technique when testing your computed properties, and test all the edge cases.")]),t._v(" "),e("h2",{attrs:{id:"conclusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),e("ul",[e("li",[t._v("computed properties can be using "),e("code",[t._v("mount")]),t._v(" making assertions on the rendered markup")]),t._v(" "),e("li",[t._v("complex computed properties can be independently tested by using "),e("code",[t._v("call")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);