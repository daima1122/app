(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{1893:function(e,t,i){e.exports=i.p+"static/img/icon.b7505942.png"},"1de5":function(e,t,i){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},3990:function(e,t,i){e.exports=i.p+"static/img/icon_chahua@3x.066e07b5.png"},"680b":function(e,t,i){"use strict";i("ac1f"),i("466d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{flag:!0,isWX:!0}},onLoad:function(){this.getisweixing()},methods:{open:function(){this.flag=!1},toDownload:function(){this.isWX?this.flag||(this.flag=!0):uni.navigateTo({url:"http"})},toDownload1:function(){this.isWX?this.flag||(this.flag=!0):uni.navigateTo({url:"httpp"})},toDownload2:function(){this.isWX?this.flag||(this.flag=!0):uni.navigateTo({url:"http2"})},getisweixing:function(){var e=window.navigator.userAgent.toLowerCase();"micromessenger"==e.match(/MicroMessenger/i)?(this.isWX=!0,this.flag=!1):(this.isWX=!1,this.flag=!1)}}};t.default=n},"79db":function(e,t,i){e.exports=i.p+"static/img/wx.60b47565.png"},8188:function(e,t,i){"use strict";i.r(t);var n=i("680b"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},9317:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"index"},[n("v-uni-view",{staticClass:"logo"},[n("v-uni-image",{staticStyle:{width:"60px",height:"60px","vertical-align":"middle","margin-top":"-9px"},attrs:{src:i("1893"),mode:""}}),e._v("UCC版权链")],1),n("h2",{staticClass:"title"},[e._v("上传资源获得版权  拥有版权享受收益")]),n("h2",{staticClass:"eng"},[e._v("UPLOAD RESOURCES, GET COPYRIGHT, OWN COPYRIGHT, ENJOY INCOME")]),n("v-uni-view",{staticClass:"main"},[n("p",[e._v("UCC版权链上搜索不到的资源，您上传后会获得该资源版权。"),n("br"),e._v("其他用户在购买观看您拥有版权的资源将得到收益。快去下载体验吧！")]),n("v-uni-view",{staticClass:"download"},[n("v-uni-text",{staticStyle:{"margin-bottom":"8px","margin-right":"10px",cursor:"pointer"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toDownload2.apply(void 0,arguments)}}},[e._v("安卓端下载01")]),n("v-uni-text",{staticStyle:{"margin-bottom":"8px",left:"10px",cursor:"pointer"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toDownload2.apply(void 0,arguments)}}},[e._v("安卓端下载02")]),n("v-uni-text",{staticStyle:{"margin-top":"8px","margin-right":"10px",cursor:"pointer"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toDownload1.apply(void 0,arguments)}}},[e._v("PC端下载01")]),n("v-uni-text",{staticStyle:{"margin-top":"8px",left:"10px",cursor:"pointer"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toDownload.apply(void 0,arguments)}}},[e._v("PC端下载02")])],1),n("v-uni-view",{staticClass:"pic"},[n("v-uni-image",{attrs:{src:i("3990"),mode:""}})],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}],staticClass:"wx",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.open.apply(void 0,arguments)}}})],1)},o=[]},a2c7:function(e,t,i){var n=i("bc51");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("00d56267",n,!0,{sourceMap:!1,shadowMode:!1})},bc51:function(e,t,i){var n=i("24fb"),a=i("1de5"),o=i("79db");t=n(!1);var r=a(o);t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-55e9e7c4]{background-image:-webkit-gradient(linear,left top,right top,from(#b0d0ff),to(#797efe));background-image:-webkit-linear-gradient(left,#b0d0ff,#797efe);background-image:linear-gradient(90deg,#b0d0ff,#797efe)}.index[data-v-55e9e7c4]{-webkit-box-sizing:border-box;box-sizing:border-box;width:2880px;height:1050px;padding-left:26%;color:#fff;padding-top:175px}.index .logo[data-v-55e9e7c4]{font-size:26px;font-weight:700}.index .title[data-v-55e9e7c4]{font-size:60px;font-weight:500;margin-top:80px}.index .eng[data-v-55e9e7c4]{font-size:28px;font-weight:400;margin-bottom:32px}.index .main[data-v-55e9e7c4]{position:relative}.index .main .download[data-v-55e9e7c4]{width:420px;height:136px;margin-top:90px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.index .main .download uni-text[data-v-55e9e7c4]{background-color:#8f8ef8;-webkit-box-flex:48%;-webkit-flex:48%;flex:48%;text-align:center;text-align:center;line-height:60px;border:.5px solid #fff;border-radius:5px}.index .main p[data-v-55e9e7c4]{font-size:23px;line-height:35px}.index .main .pic[data-v-55e9e7c4]{width:411px;height:364px;position:absolute;top:0;left:649px}.index .main .pic uni-image[data-v-55e9e7c4]{width:100%;height:100%}@media screen and (max-width:500px){.index[data-v-55e9e7c4]{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;padding-left:10px;color:#fff;padding-top:10px}.index .logo[data-v-55e9e7c4]{font-size:13px;font-weight:700}.index .logo uni-image[data-v-55e9e7c4]{width:30px;height:30px;vertical-align:middle;margin-top:-9px}.index .title[data-v-55e9e7c4]{font-size:20px;font-weight:500;margin-top:20px}.index .eng[data-v-55e9e7c4]{font-size:14px;font-weight:400;margin-bottom:16px}.index .main[data-v-55e9e7c4]{position:relative;padding-right:10px}.index .main p[data-v-55e9e7c4]{font-size:20px}.index .main .download[data-v-55e9e7c4]{width:100%;height:100%;margin-top:45px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.index .main .download uni-text[data-v-55e9e7c4]{background-color:#8f8ef8;-webkit-box-flex:47%;-webkit-flex:47%;flex:47%;text-align:center;text-align:center;line-height:60px;border:.5px solid #fff;border-radius:5px}.index .main .pic[data-v-55e9e7c4]{width:411px;height:364px;position:absolute;top:0;left:649px}.index .main .pic uni-image[data-v-55e9e7c4]{width:100%;height:100%}}.wx[data-v-55e9e7c4]{position:fixed;left:0;top:0;background-color:rgba(0,0,0,.7);width:100vw;height:100vh;background-image:url('+r+");background-size:100%;background-position:50% %?100?%;background-repeat:no-repeat}body.?%PAGE?%[data-v-55e9e7c4]{background-image:-webkit-gradient(linear,left top,right top,from(#b0d0ff),to(#797efe));background-image:-webkit-linear-gradient(left,#b0d0ff,#797efe);background-image:linear-gradient(90deg,#b0d0ff,#797efe)}",""]),e.exports=t},cee5:function(e,t,i){"use strict";var n=i("a2c7"),a=i.n(n);a.a},da1a:function(e,t,i){"use strict";i.r(t);var n=i("9317"),a=i("8188");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("cee5");var r,d=i("f0c5"),c=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"55e9e7c4",null,!1,n["a"],r);t["default"]=c.exports}}]);