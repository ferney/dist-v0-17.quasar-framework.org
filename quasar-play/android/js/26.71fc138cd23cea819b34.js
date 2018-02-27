webpackJsonp([26,86],{cSth:function(r,a,l){var e=l("t3GF");"string"==typeof e&&(e=[[r.i,e,""]]),e.locals&&(r.exports=e.locals);(0,l("rjj0").default)("4674b73f",e,!1,{})},pQIQ:function(r,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});l("cSth");var e=function(){var r=this,a=r.$createElement,l=r._self._c||a;return l("q-page",{staticClass:"docs-input row justify-center",attrs:{padding:""}},[l("div",{staticStyle:{width:"500px","max-width":"90vw"}},[l("q-alert",{attrs:{type:"warning"}},[r._v("\n      The following examples use a bogus upload URL ("+r._s(r.url)+").\n      As a result, the upload process itself won't actually work for this demo.\n    ")]),r._v(" "),l("p",{staticClass:"caption"},[r._v("Single File Upload")]),r._v(" "),l("q-uploader",{attrs:{url:r.url}}),r._v(" "),l("q-uploader",{attrs:{color:"secondary","stack-label":"Stack Label",url:r.url}}),r._v(" "),l("q-uploader",{attrs:{color:"amber","float-label":"Float Label",url:r.url}}),r._v(" "),l("q-uploader",{attrs:{color:"tertiary",inverted:"","stack-label":"Stack Label",url:r.url}}),r._v(" "),l("p",{staticClass:"caption"},[r._v("Multiple File Upload")]),r._v(" "),l("q-uploader",{attrs:{multiple:"",url:r.url}}),r._v(" "),l("q-uploader",{attrs:{color:"secondary","stack-label":"Stack Label",url:r.url}}),r._v(" "),l("q-uploader",{attrs:{color:"orange",inverted:"","float-label":"Float Label",url:r.url}}),r._v(" "),l("q-uploader",{attrs:{color:"brown-5",inverted:"","stack-label":"Stack Label",url:r.url}}),r._v(" "),l("p",{staticClass:"caption"},[r._v("Accepting only .jpg")]),r._v(" "),l("q-uploader",{attrs:{extensions:".jpg",multiple:"",url:r.url,"auto-expand":""}}),r._v(" "),l("p",{staticClass:"caption"},[r._v("Some of the options")]),r._v(" "),l("q-uploader",{attrs:{color:"secondary",multiple:"","no-thumbnails":"","stack-label":"No thumbnails",url:r.url}}),r._v(" "),l("q-uploader",{attrs:{color:"secondary",multiple:"","auto-expand":"","stack-label":"Auto expand",url:r.url}}),r._v(" "),l("q-uploader",{attrs:{color:"secondary",multiple:"","hide-upload-button":"","stack-label":"Hide Upload Button",url:r.url}}),r._v(" "),l("q-uploader",{attrs:{color:"secondary",multiple:"","hide-upload-progress":"","stack-label":"Hide Upload Progress",url:r.url}}),r._v(" "),l("p",{staticClass:"caption"},[r._v("Hide underline")]),r._v(" "),l("q-uploader",{attrs:{color:"secondary",multiple:"","hide-underline":"",url:r.url}}),r._v(" "),l("p",{staticClass:"caption"},[r._v("Before/after icons")]),r._v(" "),l("q-uploader",{attrs:{url:r.url,inverted:"","float-label":"Icon when files selected",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]}}),r._v(" "),l("q-uploader",{attrs:{url:r.url,inverted:"",color:"secondary",before:[{icon:"arrow_back",handler:function(){}}],after:[{icon:"arrow_forward",handler:function(){}}]}}),r._v(" "),l("p",{staticClass:"caption"},[r._v("Error/warning states")]),r._v(" "),l("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:r.error,callback:function(a){r.error=a},expression:"error"}}),r._v(" "),l("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:r.warning,callback:function(a){r.warning=a},expression:"warning"}}),r._v(" "),l("q-uploader",{attrs:{url:r.url,color:"primary",multiple:"",error:r.error,warning:r.warning,"float-label":"Float label"}}),r._v(" "),l("q-uploader",{attrs:{url:r.url,color:"primary",multiple:"",inverted:"",error:r.error,warning:r.warning,"float-label":"Float label"}}),r._v(" "),l("p",{staticClass:"caption"},[r._v("Read only")]),r._v(" "),l("q-uploader",{attrs:{readonly:"",url:r.url,multiple:"",color:"primary","float-label":"Float label"}}),r._v(" "),l("q-uploader",{attrs:{readonly:"",url:r.url,multiple:"",color:"primary",inverted:"","float-label":"Float label"}}),r._v(" "),l("p",{staticClass:"caption"},[r._v("Disabled")]),r._v(" "),l("q-uploader",{attrs:{disable:"",url:r.url,multiple:"",color:"primary","float-label":"Float label"}}),r._v(" "),l("q-uploader",{attrs:{disable:"",url:r.url,multiple:"",color:"primary",inverted:"","float-label":"Float label"}}),r._v(" "),l("p",{staticClass:"caption"},[r._v("In a Field")]),r._v(" "),l("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:r.error2,callback:function(a){r.error2=a},expression:"error2"}}),r._v(" "),l("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:r.warning2,callback:function(a){r.warning2=a},expression:"warning2"}}),r._v(" "),l("q-field",{attrs:{count:7,helper:"What's your account name?",error:r.error2,"error-label":"Hey, we got an error",warning:r.warning2,"warning-label":"Hey, we got a warning"}},[l("q-uploader",{attrs:{url:r.url,multiple:"",color:"primary","float-label":"Float label"}})],1),r._v(" "),l("q-field",{attrs:{icon:"wifi",helper:"Your awesome helper",error:r.error2,"error-label":"We got an error",warning:r.warning2,"warning-label":"Hey, we got a warning"}},[l("q-uploader",{attrs:{url:r.url,multiple:"",color:"primary",inverted:"","float-label":"Float label"}})],1),r._v(" "),l("p",{staticClass:"caption"},[r._v("On a dark background")]),r._v(" "),l("div",{staticClass:"dark-example"},[l("q-uploader",{attrs:{dark:"",url:r.url,multiple:"",color:"lime","float-label":"Float label"}}),r._v(" "),l("q-field",{attrs:{icon:"wifi",label:"Wifi network",count:10,helper:"We need this for connecting you"}},[l("q-uploader",{attrs:{dark:"",url:r.url,multiple:"",color:"orange","float-label":"Float label"}})],1)],1)],1)])},t=[];e._withStripped=!0;var o=l("XyMi"),n=Object(o.a)({data:function(){return{url:"http://1.1.1.195/upload.php",text:"",textUnderline:"Quasar",upper:"UP",num:5,floatNum:2.34,lazy:"Lazy update - on blur",email:"email",password:"password",area:"Before you begin with Quasar, it is a good idea to get acquainted with ES6 and have a fairly good knowledge about how Vue works.",areaMax:"",texterr:"Quasar rulz",error:!0,warning:!1,error2:!1,warning2:!1,loading:!0}},watch:{error:function(r){r&&(this.warning=!1)},warning:function(r){r&&(this.error=!1)},error2:function(r){r&&(this.warning2=!1)},warning2:function(r){r&&(this.error2=!1)}}},e,t,!1,null,null,null);n.options.__file="src/pages/showcase/forms/uploader.vue";a.default=n.exports},t3GF:function(r,a,l){(r.exports=l("FZ+f")(!1)).push([r.i,".docs-input .q-if,\n.docs-input .q-field,\n.docs-input .q-uploader {\n  margin: 16px 0;\n}\n.docs-input .q-field .q-if,\n.docs-input .q-uploader .q-if {\n  margin: 0;\n}\n.docs-input .q-field .q-uploader {\n  margin: 0;\n}\n.docs-input .caption:not(:first-child) {\n  margin-top: 40px;\n}\n.docs-input .dark-example {\n  padding: 5px 15px 15px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  border-radius: 2px;\n}\n",""])}});