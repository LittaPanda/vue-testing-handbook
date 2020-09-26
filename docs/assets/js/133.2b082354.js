(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{336:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"安装-vue-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-vue-cli"}},[t._v("#")]),t._v(" 安装 vue-cli")]),t._v(" "),a("p",[a("code",[t._v("vue-test-utils")]),t._v(" 是 Vue 官方的测试库，并将在本指南中贯穿始终。它在浏览器和 Node.js 环境中皆可运行，并能配合任何 test runner 使用。在本指南中，我们将在 Node.js 环境运行测试。")]),t._v(" "),a("p",[a("code",[t._v("vue-cli")]),t._v(" 是起步的最简单方式。它将建立一个项目，也会配置 Jest，一个流行的测试框架。其安装方法是：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @vue/cli\n")])])]),a("p",[t._v("或通过 npm：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @vue/cli\n")])])]),a("p",[t._v("通过运行 "),a("code",[t._v("vue create [project-name]")]),t._v(' 来创建一个新项目。选择 "Manually select features" 和 "Unit Testing"，以及 "Jest" 作为 test runner。')]),t._v(" "),a("p",[t._v("一旦安装完成，"),a("code",[t._v("cd")]),t._v(" 进入项目目录中并运行 "),a("code",[t._v("yarn test:unit")]),t._v("。如果一切顺利，你将看到：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" PASS  tests/unit/HelloWorld.spec.js\n  HelloWorld.vue\n    ✓ renders props.msg when passed (26ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        2.074s\n")])])]),a("p",[t._v("恭喜，你已经运行了你的第一个通过的测试！")]),t._v(" "),a("h2",{attrs:{id:"编写你的首个测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写你的首个测试"}},[t._v("#")]),t._v(" 编写你的首个测试")]),t._v(" "),a("p",[t._v("我们已经运行了项目中既有的一个测试。让我们撸起袖子，编写我们自己的组件，以及一个测试吧。以 TDD 方式的传统来说，你先编写一个失败的测试，然后实现代码以使该测试通过。但现在，我们将先编写组件。")]),t._v(" "),a("p",[t._v("我们不再需要 "),a("code",[t._v("src/components/HelloWorld.vue")]),t._v(" 或 "),a("code",[t._v("tests/unit/HelloWorld.spec.js")]),t._v(" 了，所以你可以删掉它们。")]),t._v(" "),a("h2",{attrs:{id:"创建-greeting-组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-greeting-组件"}},[t._v("#")]),t._v(" 创建 "),a("code",[t._v("Greeting")]),t._v(" 组件")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("src/components")]),t._v(" 中创建一个 "),a("code",[t._v("Greeting.vue")]),t._v(" 文件。在 "),a("code",[t._v("Greeting.vue")]),t._v(" 中添加如下代码：")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ greeting }}\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Greeting"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"编写测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写测试"}},[t._v("#")]),t._v(" 编写测试")]),t._v(" "),a("p",[a("code",[t._v("Greeting")]),t._v(" 只有唯一的职责 -- 渲染 "),a("code",[t._v("greeting")]),t._v(" 的值。其测试策略为：")]),t._v(" "),a("ol",[a("li",[t._v("用 "),a("code",[t._v("mount")]),t._v(" 渲染组件")]),t._v(" "),a("li",[t._v('断言组件的文本中包含 "Vue and TDD"')])]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("tests/unit")]),t._v(" 中创建一个 "),a("code",[t._v("Greeting.spec.js")]),t._v("。在其内容中，引入 "),a("code",[t._v("Greeting.vue")]),t._v("，以及 "),a("code",[t._v("mount")]),t._v(" 方法，并添加测试的概要：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { mount } from '@vue/test-utils'\nimport Greeting from '@/components/Greeting.vue'\n\ndescribe('Greeting.vue', () => {\n  it('renders a greeting', () => {\n\n  })\n})\n")])])]),a("p",[t._v("用于 TDD 的由很多不同的语法，我们将使用通常所见的 "),a("code",[t._v("describe")]),t._v(" 和 "),a("code",[t._v("it")]),t._v(" 语法，由 Jest 提供。"),a("code",[t._v("describe")]),t._v(" 一般概述了测试会包含什么，在本例中写的是 "),a("code",[t._v("Greeting.vue")]),t._v("。"),a("code",[t._v("it")]),t._v(" 表示测试应该完成的主题中一段单独的职责。随着我们为组件添加更多特性，在测试中就会添加更多 "),a("code",[t._v("it")]),t._v(" 块。")]),t._v(" "),a("p",[t._v("现在我们应该用 "),a("code",[t._v("mount")]),t._v(" 渲染组件。标准做法是将组件引用赋值给一个叫做 "),a("code",[t._v("wrapper")]),t._v(" 的变量。我们也将输出结果打印出来，以确保一切正常：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"运行测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行测试"}},[t._v("#")]),t._v(" 运行测试")]),t._v(" "),a("p",[t._v("通过在终端中输入 "),a("code",[t._v("yarn test:unit")]),t._v(" 来运行测试。"),a("code",[t._v("tests")]),t._v(" 目录中任何以 "),a("code",[t._v(".spec.js")]),t._v(" 结尾的文件都会被自动执行。如果不出所料，你应该看到：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PASS  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✓ renders a greeting (27ms)\n\nconsole.log tests/unit/Greeting.spec.js:7\n  <div>\n    Vue and TDD\n  </div>\n")])])]),a("p",[t._v("我们可以看到置标语言是正确的，测试也通过了。测试通过是因为并没有失败 -- 这个测试是不可能失败的，所以也没什么用。即便我们更改了 "),a("code",[t._v("Greeting.vue")]),t._v(" 并从模板中删除了 "),a("code",[t._v("greeting")]),t._v("，测试都照样能通过。让我们改变这些。")]),t._v(" "),a("h2",{attrs:{id:"做出断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#做出断言"}},[t._v("#")]),t._v(" 做出断言")]),t._v(" "),a("p",[t._v("我们需要做出断言以确保组件行事正确。我们可以使用 Jest 的 "),a("code",[t._v("expect")]),t._v(" API 做到这点。它看起来会是 "),a("code",[t._v("expect(result).to [matcher] (actual)")]),t._v(" 这样。")]),t._v(" "),a("p",[a("em",[t._v("matchers")]),t._v(" 是用来比较值和对象的一些方法。例如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("一个关于 matchers 的完整列表可以在 "),a("a",{attrs:{href:"http://jestjs.io/docs/en/expect",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest 文档"),a("OutboundLink")],1),t._v(" 中找到。"),a("code",[t._v("vue-test-utils")]),t._v(" 中并不包含任何的 matchers -- Jest 提供的那些就足够了。我们要比较 "),a("code",[t._v("Greeting")]),t._v(" 中的文本。可以这样写：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("但 "),a("code",[t._v("vue-test-utils")]),t._v(" 有一个更好的方式来比较置标 -- "),a("code",[t._v("wrapper.text")]),t._v("。让我们完成测试：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/test-utils'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Greeting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/Greeting.vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Greeting.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'renders a greeting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toMatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("我们不再需要 "),a("code",[t._v("console.log")]),t._v(" 了，所以你可以删除它了。通过 "),a("code",[t._v("yarn unit:test")]),t._v(" 运行测试，如果一切正常将得到：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PASS  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✓ renders a greeting (15ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        1.477s, estimated 2s\n")])])]),a("p",[t._v("看起来不错，但你应该总是看见一个测试失败，再让它通过，以确保它是真实可行的。在传统的 TDD 中，你应该在编写真正的实现之前先写测试，看着它失败，然后使用报错来引导你的编码。让我们来更新 "),a("code",[t._v("Greeting.vue")]),t._v("，确保该测试是真正可行的：")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ greeting }}\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Greeting"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue without TDD"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("现在通过 "),a("code",[t._v("yarn test:unit")]),t._v(" 来运行测试：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('FAIL  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✕ renders a greeting (24ms)\n\n● Greeting.vue › renders a greeting\n\n  expect(received).toMatch(expected)\n\n  Expected value to match:\n    "Vue and TDD"\n  Received:\n    "Vue without TDD"\n\n     6 |     const wrapper = mount(Greeting)\n     7 |\n  >  8 |     expect(wrapper.text()).toMatch("Vue and TDD")\n       |                            ^\n     9 |   })\n    10 | })\n    11 |\n\n    at Object.<anonymous> (tests/unit/Greeting.spec.js:8:28)\n')])])]),a("p",[t._v("Jest 给了我们一个良好的反馈。我们可以看到期望的和实际的结果，也能看到期望是在哪一行失败的。测试如期失败了。回到 "),a("code",[t._v("Greeting.vue")]),t._v(" 做出修改并确保再次的测试能够通过。")]),t._v(" "),a("p",[t._v("下面我们将看到 "),a("code",[t._v("vue-test-utils")]),t._v(" 提供的两个渲染组件的方法： "),a("code",[t._v("mount")]),t._v(" 和 "),a("code",[t._v("shallowMount")]),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);