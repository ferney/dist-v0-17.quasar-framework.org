(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[65],{PnxA:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("q-page",{staticClass:"row justify-center",attrs:{padding:""}},[e("div",{staticStyle:{width:"500px","max-width":"90vw"}},[e("p",{staticClass:"caption",staticStyle:{"margin-top":"120px"}},[t._v("\n      Click on buttons and image below to open Popovers.\n      "),e("br"),e("em",[t._v("This page has intended scroll so you can see multiple scenarios.")])]),e("div",[e("q-btn",{attrs:{color:"primary"}},[e("q-icon",{attrs:{name:"assignment"}}),e("q-popover",[e("q-list",{staticClass:"scroll",staticStyle:{"min-width":"100px"},attrs:{link:"",separator:""}},t._l(20,function(i){return e("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],key:"a-"+i,nativeOn:{click:function(i){return t.notify(i)}}},[e("q-item-main",{attrs:{label:"Label",sublabel:"Click me"}})],1)}))],1)],1),e("q-btn",{ref:"target4",staticClass:"q-ml-sm",attrs:{color:"negative"}},[t._v("\n        Disabled Popover\n\n        "),e("q-popover",{attrs:{disable:""}},[t._v('\n          This Popover content won\'t be shown because of "disable"\n        ')])],1),e("q-card",{staticStyle:{"margin-top":"75px"}},[e("q-card-title",{staticClass:"bg-primary text-center"},[e("q-btn",{attrs:{push:"",color:"orange"}},[t._v("\n            Tap Me\n\n            "),e("q-popover",{attrs:{anchor:t.anchor,self:t.self}},[e("q-list",{staticStyle:{"min-width":"100px"},attrs:{link:""}},t._l(3,function(i){return e("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],key:"b-"+i,nativeOn:{click:function(i){return t.notify(i)}}},[e("q-item-main",{attrs:{label:"Label"}})],1)}))],1)],1)],1),e("p",{staticClass:"caption text-center"},[t._v("Configure the Popover for button above.")]),e("p",{staticClass:"text-center"},[e("q-chip",{attrs:{tag:"",color:"primary"}},[t._v('anchor="'+t._s(t.anchor)+'"')]),e("q-chip",{attrs:{tag:"",color:"primary"}},[t._v('self="'+t._s(t.self)+'"')])],1),e("q-card-main",{staticClass:"row"},[e("div",{staticClass:"column items-center col-6"},[e("p",{staticClass:"caption"},[t._v("Anchor Origin")]),e("div",{staticClass:"flex"},[e("div",{staticClass:"column group"},[e("div",[t._v("Vertical")]),e("q-radio",{attrs:{val:"top",label:"Top"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.$set(t.anchorOrigin,"vertical",i)},expression:"anchorOrigin.vertical"}}),e("q-radio",{attrs:{val:"center",label:"Center"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.$set(t.anchorOrigin,"vertical",i)},expression:"anchorOrigin.vertical"}}),e("q-radio",{attrs:{val:"bottom",label:"Bottom"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.$set(t.anchorOrigin,"vertical",i)},expression:"anchorOrigin.vertical"}})],1),e("div",{staticClass:"column group"},[e("div",[t._v("Horizontal")]),e("q-radio",{attrs:{val:"left",label:"Left"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.$set(t.anchorOrigin,"horizontal",i)},expression:"anchorOrigin.horizontal"}}),e("q-radio",{attrs:{val:"middle",label:"Middle"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.$set(t.anchorOrigin,"horizontal",i)},expression:"anchorOrigin.horizontal"}}),e("q-radio",{attrs:{val:"right",label:"Right"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.$set(t.anchorOrigin,"horizontal",i)},expression:"anchorOrigin.horizontal"}})],1)])]),e("div",{staticClass:"column items-center col-6"},[e("p",{staticClass:"caption"},[t._v("Self Origin")]),e("div",{staticClass:"flex"},[e("div",{staticClass:"column group"},[e("div",[t._v("Vertical")]),e("q-radio",{attrs:{val:"top",label:"Top"},model:{value:t.selfOrigin.vertical,callback:function(i){t.$set(t.selfOrigin,"vertical",i)},expression:"selfOrigin.vertical"}}),e("q-radio",{attrs:{val:"center",label:"Center"},model:{value:t.selfOrigin.vertical,callback:function(i){t.$set(t.selfOrigin,"vertical",i)},expression:"selfOrigin.vertical"}}),e("q-radio",{attrs:{val:"bottom",label:"Bottom"},model:{value:t.selfOrigin.vertical,callback:function(i){t.$set(t.selfOrigin,"vertical",i)},expression:"selfOrigin.vertical"}})],1),e("div",{staticClass:"column group"},[e("div",[t._v("Horizontal")]),e("q-radio",{attrs:{val:"left",label:"Left"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.$set(t.selfOrigin,"horizontal",i)},expression:"selfOrigin.horizontal"}}),e("q-radio",{attrs:{val:"middle",label:"Middle"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.$set(t.selfOrigin,"horizontal",i)},expression:"selfOrigin.horizontal"}}),e("q-radio",{attrs:{val:"right",label:"Right"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.$set(t.selfOrigin,"horizontal",i)},expression:"selfOrigin.horizontal"}})],1)])])])],1),e("div",{staticStyle:{"margin-bottom":"700px"}}),e("q-page-sticky",{attrs:{position:"top-right",offset:[16,16]}},[e("q-btn",{attrs:{color:"secondary"}},[e("q-icon",{attrs:{name:"directions"}}),e("q-popover",{model:{value:t.popover,callback:function(i){t.popover=i},expression:"popover"}},[e("img",{staticStyle:{height:"150px",width:"200px"},attrs:{src:a("i1Va")},on:{click:function(i){t.notify(),t.popover=!1}}})])],1)],1),e("q-page-sticky",{attrs:{position:"bottom-right",offset:[16,16]}},[e("q-btn",{attrs:{color:"tertiary"}},[e("q-icon",{attrs:{name:"plus_one"}}),e("q-popover",[e("div",{staticClass:"group",staticStyle:{width:"220px","text-align":"center"}},[e("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{flat:"",color:"primary"},on:{click:t.notify}},[e("q-icon",{attrs:{name:"thumb_up"}})],1),e("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{flat:"",color:"primary"},on:{click:t.notify}},[e("q-icon",{attrs:{name:"thumb_down"}})],1),e("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{flat:"",color:"secondary"},on:{click:t.notify}},[e("q-icon",{attrs:{name:"share"}})],1)],1)])],1)],1)],1),e("q-page-sticky",{attrs:{position:"bottom-left",offset:[16,16]}},[e("q-btn",{attrs:{color:"primary"}},[e("q-icon",{attrs:{name:"menu"}}),e("q-popover",{ref:"popover"},[e("q-list",{staticClass:"scroll",staticStyle:{"min-width":"200px"},attrs:{link:"",separator:""}},t._l(20,function(i){return e("q-item",{key:"c-"+i,nativeOn:{click:function(i){t.notify(),t.$refs.popover.hide()}}},[e("q-item-main",{attrs:{label:"Label",sublabel:"Click me"}})],1)}))],1)],1)],1)],1)])},o=[];e._withStripped=!0;var r={data:function(){return{anchorOrigin:{vertical:"bottom",horizontal:"left"},selfOrigin:{vertical:"top",horizontal:"left"},popover:!1}},computed:{anchor:function(){return"".concat(this.anchorOrigin.vertical," ").concat(this.anchorOrigin.horizontal)},self:function(){return"".concat(this.selfOrigin.vertical," ").concat(this.selfOrigin.horizontal)}},methods:{notify:function(){this.$q.notify((this.$q.platform.is.desktop?"Clicked":"Tapped")+" on a Popover item")}}},n=r,l=a("KHd+"),s=Object(l["a"])(n,e,o,!1,null,null,null);i["default"]=s.exports},i1Va:function(t,i,a){t.exports=a.p+"img/map.956e5dd.png"}}]);