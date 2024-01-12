(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c09f6"],{4323:function(s,a,t){"use strict";t.r(a);var n=function(){var s=this;s._self._c;return s._m(0)},v=[function(){var s=this,a=s._self._c;return a("div",[a("h1",[s._v("导入和导出")]),a("h2",[s._v("导出")]),a("blockquote",[a("p",[s._v("要使用导出功能需要使用导出插件。")])]),a("p",[s._v("目前支持导出为"),a("code",[s._v(".smm")]),s._v("、"),a("code",[s._v(".json")]),s._v("、"),a("code",[s._v(".svg")]),s._v("、"),a("code",[s._v(".png")]),s._v("、"),a("code",[s._v(".pdf")]),s._v("、"),a("code",[s._v(".md")]),s._v("、"),a("code",[s._v(".xmind")]),s._v("文件。")]),a("p",[a("code",[s._v(".smm")]),s._v("是"),a("code",[s._v("simple-mind-map")]),s._v("自己定义的一种文件，其实就是"),a("code",[s._v("json")]),s._v("文件，换了一个扩展名而已。")]),a("p",[s._v("导出直接调用"),a("code",[s._v("export")]),s._v("方法即可：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("mindMap.export(type, isDownload, fileName, ...)\n")])]),a("p",[a("code",[s._v("type")]),s._v("：文件类型")]),a("p",[a("code",[s._v("isDownload")]),s._v("：传"),a("code",[s._v("true")]),s._v("会触发下载，"),a("code",[s._v("false")]),s._v("则不会，函数会返回导出文件的数据，"),a("code",[s._v("data:url")]),s._v("格式，你可以自行下载，（v0.9.2之前的版本，"),a("code",[s._v("pdf")]),s._v("不支持该参数，默认会直接下载）。")]),a("p",[a("code",[s._v("fileName")]),s._v("：下载的文件名称")]),a("h3",[s._v("导出为smm、json")]),a("p",[s._v("这两种文件的导出是一样的：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("mindMap.export(type, isDownload, fileName, withConfig)\n")])]),a("p",[a("code",[s._v("withConfig")]),s._v("指定导出的数据中是否要包含节点数据外的配置数据，比如使用的布局、主题等，传"),a("code",[s._v("true")]),s._v("，导出的结构如下：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("{\n    layout,\n    root,\n    "),a("span",{staticClass:"hljs-attr"},[s._v("theme")]),s._v(": {\n        template,\n        config\n    },\n    view\n}\n")])]),a("p",[s._v("如果传"),a("code",[s._v("false")]),s._v("，导出的数据只有"),a("code",[s._v("root")]),s._v("部分，也就是纯节点树。")]),a("p",[s._v("示例：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("mindMap.export("),a("span",{staticClass:"hljs-string"},[s._v("'smm'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'文件名'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(")\nmindMap.export("),a("span",{staticClass:"hljs-string"},[s._v("'json'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'文件名'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(")\n")])]),a("h3",[s._v("导出为png、pdf")]),a("p",[s._v("导出这两种文件很简单：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("mindMap.export("),a("span",{staticClass:"hljs-string"},[s._v("'png'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'文件名'")]),s._v(")\nmindMap.export("),a("span",{staticClass:"hljs-string"},[s._v("'pdf'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'文件名'")]),s._v(")\n")])]),a("blockquote",[a("p",[s._v("从v0.6.0+，要导出pdf，需要额外注册一个ExportPDF插件。")])]),a("h3",[s._v("导出为svg")]),a("p",[s._v("导出为"),a("code",[s._v("svg")]),s._v("可以传递的参数如下：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("mindMap.export(type, isDownload, fileName, plusCssText = "),a("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(")\n")])]),a("p",[s._v("如果开启了节点富文本编辑，也就是"),a("code",[s._v("svg")]),s._v("中会存在节点的"),a("code",[s._v("html")]),s._v("结构，这就又存在一个问题，因为浏览器对每个元素默认会设置一些样式，影响最大的就是"),a("code",[s._v("margin")]),s._v("和"),a("code",[s._v("padding")]),s._v("，这就有可能会导致节点中的文字错位，所以可以通过"),a("code",[s._v("plusCssText")]),s._v("参数传入"),a("code",[s._v("css")]),s._v("样式：")]),a("blockquote",[a("p",[s._v("在v0.6.16+版本后，plusCssText参数已被删除，改为在实例化时通过"),a("code",[s._v("resetCss")]),s._v("配置传入。")])]),a("pre",{staticClass:"hljs"},[a("code",[s._v("mindMap.export(\n    "),a("span",{staticClass:"hljs-string"},[s._v("'svg'")]),s._v(", \n    "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", \n    "),a("span",{staticClass:"hljs-string"},[s._v("'文件名'")]),s._v(", \n    "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(", \n    "),a("span",{staticClass:"hljs-string"},[s._v("`* {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }`")]),s._v("\n)\n")])]),a("h3",[s._v("导出为md")]),a("p",[s._v("导出为"),a("code",[s._v("markdown")]),s._v("文件只要传递默认的三个参数即可：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("mindMap.export("),a("span",{staticClass:"hljs-string"},[s._v("'md'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'文件名'")]),s._v(")\n")])]),a("h3",[s._v("导出为xmind")]),a("blockquote",[a("p",[s._v("v0.6.6+")])]),a("blockquote",[a("p",[s._v("需要注册"),a("code",[s._v("ExportXMind")]),s._v("插件")])]),a("p",[s._v("导出为"),a("code",[s._v("Xmind")]),s._v("新版文件。")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("mindMap.export("),a("span",{staticClass:"hljs-string"},[s._v("'xmind'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'文件名'")]),s._v(")\n")])]),a("h2",[s._v("导入")]),a("p",[s._v("目前支持从"),a("code",[s._v(".smm")]),s._v("、"),a("code",[s._v(".json")]),s._v("、"),a("code",[s._v(".xmind")]),s._v("、"),a("code",[s._v(".xlsx")]),s._v("、"),a("code",[s._v(".md")]),s._v("格式的文件导入。")]),a("h3",[s._v("导入smm、json")]),a("p",[s._v("这两个文件导入很简单，直接读取文件内容，转成对象，然后调用相关方法渲染到画布即可。")]),a("p",[s._v("因为导出这两种类型时可以选择是否包含配置数据，所以导入的时候调用的方法也是不一样的：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" data = "),a("span",{staticClass:"hljs-built_in"},[s._v("JSON")]),s._v(".parse("),a("span",{staticClass:"hljs-string"},[s._v("'json数据'")]),s._v(")\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 如果数据中存在root属性，那么代表是包含配置的完整数据，则使用setFullData方法导入数据")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (data.root) {\n    mindMap.setFullData(data)\n} "),a("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 否则使用setData方法导入")]),s._v("\n    mindMap.setData(data)\n}\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 导入数据后有可能新数据渲染在可视区域外了，所以为了更好的体验，可以复位一下视图的变换")]),s._v("\nmindMap.view.reset()\n")])]),a("h3",[s._v("导入xmind")]),a("p",[s._v("要导入"),a("code",[s._v("xmind")]),s._v("文件，需要引入"),a("code",[s._v("xmind")]),s._v("的解析方法：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" xmind "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map/src/parse/xmind.js'")]),s._v("\n")])]),a("p",[s._v("如果使用的是"),a("code",[s._v("umd")]),s._v("文件，可以这样获取：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("MindMap.xmind\n")])]),a("p",[s._v("如果你是通过"),a("code",[s._v("input type=file")]),s._v("等方式获取到的"),a("code",[s._v("File")]),s._v("文件对象，那么可以直接传递给"),a("code",[s._v("parseXmindFile")]),s._v("方法解析，注意返回的是一个"),a("code",[s._v("Promise")]),s._v("实例，会返回解析后的节点树数据，使用"),a("code",[s._v("setData")]),s._v("方法渲染到画布即可。")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" data = "),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" xmind.parseXmindFile(file)\nmindMap.setData(data)\n")])]),a("p",[a("code",[s._v(".xmind")]),s._v("文件本质上是一个压缩包，改成"),a("code",[s._v("zip")]),s._v("后缀可以解压缩，里面存在一个"),a("code",[s._v("content.json")]),s._v("文件，如果你自己解析出了这个文件，那么可以把这个文件内容传递给这个"),a("code",[s._v("transformXmind")]),s._v("方法进行转换：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" data = "),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" xmind.transformXmind(fileContent)\nmindMap.setData(data)\n")])]),a("p",[s._v("另外如果导入的是"),a("code",[s._v("xmind8")]),s._v("版本的数据，需要使用"),a("code",[s._v("transformOldXmind")]),s._v("方法。")]),a("h3",[s._v("导入xlsx")]),a("p",[s._v("这个文件的导入没有内置方法，需要你自己开发，以下是一个使用"),a("code",[s._v("xlsx")]),s._v("库的方式：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { read, utils } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'xlsx'")]),s._v("\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 文件转buffer")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" fileToBuffer = "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("file")]),s._v(" =>")]),s._v(" {\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),a("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v("("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("r")]),s._v(" =>")]),s._v(" {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" reader = "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" FileReader()\n    reader.onload = "),a("span",{staticClass:"hljs-function"},[s._v("() =>")]),s._v(" {\n      r(reader.result)\n    }\n    reader.readAsArrayBuffer(file)\n  })\n}\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// File文件对象")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" transformXLSXToJson = "),a("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" (file) => {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" wb = read("),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" fileToBuffer(file))\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" data = utils.sheet_to_json(wb.Sheets[wb.SheetNames["),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("]], {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("header")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("\n    })\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (data.length <= "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(") {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n    }\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" max = "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n    data.forEach("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("arr")]),s._v(" =>")]),s._v(" {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (arr.length > max) {\n        max = arr.length\n        }\n    })\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" layers = []\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" walk = "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("layer")]),s._v(" =>")]),s._v(" {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!layers[layer]) {\n        layers[layer] = []\n        }\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" i = "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; i < data.length; i++) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (data[i][layer]) {\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" node = {\n            "),a("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": {\n                "),a("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v(": data[i][layer]\n            },\n            "),a("span",{staticClass:"hljs-attr"},[s._v("children")]),s._v(": [],\n            "),a("span",{staticClass:"hljs-attr"},[s._v("_row")]),s._v(": i\n            }\n            layers[layer].push(node)\n        }\n        }\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (layer < max - "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") {\n        walk(layer + "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(")\n        }\n    }\n    walk("),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(")\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" getParent = "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("arr, row")]),s._v(") =>")]),s._v(" {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" i = arr.length - "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("; i >= "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; i--) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (row >= arr[i]._row) {\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" arr[i]\n        }\n        }\n    }\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" i = "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("; i < layers.length; i++) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" arr = layers[i]\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" j = "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; j < arr.length; j++) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" item = arr[j]\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" parent = getParent(layers[i - "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("], item._row)\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (parent) {\n            parent.children.push(item)\n        }\n        }\n    }\n\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" layers["),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("]["),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("]\n}\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" data = transformXLSXToJson("),a("span",{staticClass:"hljs-string"},[s._v("'xlsx文件对象'")]),s._v(")\nmindMap.setData(data)\n")])]),a("h3",[s._v("导入md")]),a("p",[s._v("要导入"),a("code",[s._v("markdown")]),s._v("文件需要引入相应的解析方法：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" markdown "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map/src/parse/markdown.js'")]),s._v("\n")])]),a("p",[s._v("如果使用的是umd格式的文件，那么可以通过如下方式获取：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("MindMap.markdown\n")])]),a("p",[s._v("获取到"),a("code",[s._v("md")]),s._v("文件的内容后调用"),a("code",[s._v("transformMarkdownTo")]),s._v("方法转换即可，返回一个"),a("code",[s._v("Promise")]),s._v("实例：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" data = "),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" markdown.transformMarkdownTo("),a("span",{staticClass:"hljs-string"},[s._v("'md文件内容'")]),s._v(")\nmindMap.setData(data)\n")])]),a("h3",[s._v("完整示例")]),a("iframe",{staticStyle:{width:"100%",height:"455px",border:"none"},attrs:{src:"https://wanglin2.github.io/playground/#eNrFV81u20YQfpUN24JUoVAK0JMrB3YbB0gApYGTQ4EwhzW5kuiQu8TuypJhC0iDJkHaBsglPfXQQ4Oil7intnb7NvVf36KzfxRNUXUuQQ3bImdnvm925tsf7XnrRRHujIm34vVEzNNCIkHkuLge0TQvGJdoD3EyaCNG+2xMJUnaSIxwlrHJJhmgGRpwliMfEPwyop/SpI8LMxR5AswZuZqD9WqOi8iLKEIRzYhEyqY8VxEdZ1lEI9rpoJODv06evjn9/vnxn79FNGZUSGC/RYuxBMeAtNDqdbSnQBTEIM0ImEkoMR8SGap38aD70I1zMoThThSFgcjz/ami3N8WjO5PMzHdz5PWhx3lmw5QcAWcQ0mEDBRKSHFOWi1DhRDOCJeBf37w+z+PX5x++0sIcH8//ipUWOpTI+sHwFWfeWLm4LcMAIe6cpgiQjNHWKalQCCRpeQjTJOM3MtzPagBZ4hkgpQwmv5ShC+V13IMyPxSiI1pTLKlEPnlOfSrCUQUfk3bf/r67NWzalUvSqAsgRKBBljQwSbBCeFKTWSCbpaGQFPNHUIOH+viPpmaLOvDjGYMJ0pUO6A4y4GQ5Lvu0VAmWGLwun3vizthgbkgAQQ4HXIixpm0rTfdlrsFYQMTdmV1Fflsa5vE0i/ro1lGnE30BDY4ZzzwTRVOnj09eXt4+sOL84MDJygrJPUDa/YGwAYK247OUIxlPIIFo3AqHKqcDHqTsaEdswHNDdHCamqF1hLMH4tdGtdbUilWpVR4gtNyfzDIpnIaS3Vs3pCGSS2ZUvOEGmYC8m6aiFb0solA+NnrN3WsHPNHCZs0SrS/tCjvS6eG7N3UerEFbh6h5JiKAeN531rus/9Q83uRm9n2X/96+vKtK6jlUSteU5XzU8tJWULOmCzJ7HESQthNOE/q4tEb1aJrzU39c6M7KZmouROpelPN9PnR8R9HapNyqZKpOvvWxW2wqXxVrprLYRmHwFdBfhv6MyZt5Fb3q5dgGmBIsImnoMM6zV2qjjXNYqZUp4GYJhYHXx7nwSKGFabVSGArRrIVlLB4nBMqQ9DERkbU42e7t5LAt5GfMypxSgn3W20Tpeq6MhdD5ClD5FVMxixB5Moceac/Hp5/8+TsyaG5KGipWDDlGI/SLOGEKucHc4waXCNLnen46Luzo5/rZBcJG0j11WLR73/KwD1am4tLaSo3YW3cYQm5y0QqU0Yh0s/IQIIu/BhaB216qN1nrU9BFiCNXsfcAeH2By+SwMUNSwJvCPWSdAfFGRZiNfJsu2+QnEWeHrYOaTIfLcUALr0OjFYdHZJkLNvCysUMRrKX6pueOixhXG13kYfWtBHe7UWw9Ae4rbGUsObW4iyNH4FLdSWC34XV2usY78ujYYFVg2E51WLnU3JPvU6lYvAq5G5mirdmb8aRF3bMddhtwETkYSxE5EEH1K0YobBSXKeeSZrI0Qq61u1+pP0QKsqecgKM6Q7RA1oO6u+DehMc1DwQb8G+PJYmUJ0RA7mCuvZNsmL+skg/IulwBO6fdLvF1DE3835cbrlwlKTA61ALnCQpHTpDmXpoNfGOGV9zGdiky3cABD3rHnhtz3RAfQHRd0v4vqPhIzsAHSjXauTB1xmzQMMOPIYcdso0J6pZV7fgeibg8N2GCLvWGr7imNjFVqsod+55s38BRuykJA=="}})])}],l={},_=l,e=t("2877"),i=Object(e["a"])(_,n,v,!1,null,null,null);a["default"]=i.exports}}]);