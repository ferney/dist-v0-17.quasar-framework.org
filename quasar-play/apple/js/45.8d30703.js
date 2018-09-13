(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"aUZ/":function(s,t,a){"use strict";a.r(t);var i=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("q-page",{staticClass:"docs-carousel",staticStyle:{"max-width":"700px"},attrs:{padding:""}},[a("p",{staticClass:"caption"},[s._v("\n    Basic Carousel. No controls. Just swipe between slides or\n    use you mouse to drag slides to left or right.\n  ")]),a("q-carousel",{staticClass:"text-white"},[a("q-carousel-slide",{staticClass:"bg-primary"},[s._v("\n      "+s._s(s.lorem)+"\n    ")]),a("q-carousel-slide",{staticClass:"bg-secondary"},[s._v("\n      Slide 2\n    ")]),a("q-carousel-slide",{staticClass:"bg-tertiary"},[s._v("\n      Slide 3\n    ")])],1),a("p",{staticClass:"caption"},[s._v("Carousel with a base color, Arrows, Quick Navigation, and slides with images.")]),a("q-carousel",{attrs:{color:"white",arrows:"","quick-nav":"",height:"300px"}},[a("q-carousel-slide",{attrs:{"img-src":"statics/mountains.jpg"}}),a("q-carousel-slide",{attrs:{"img-src":"statics/parallax1.jpg"}}),a("q-carousel-slide",{attrs:{"img-src":"statics/parallax2.jpg"}})],1),a("p",{staticClass:"caption"},[s._v("Carousel with image slides and thumbnails")]),a("q-toggle",{staticClass:"q-mb-md",attrs:{label:"Horizontal thumbnails"},model:{value:s.thumbnailsHorizontal,callback:function(t){s.thumbnailsHorizontal=t},expression:"thumbnailsHorizontal"}}),a("q-carousel",{attrs:{color:"white",arrows:"",height:"300px",thumbnails:["statics/mountains.jpg","statics/parallax1.jpg","statics/parallax2.jpg","statics/mountains.jpg","statics/parallax1.jpg","statics/parallax2.jpg","statics/mountains.jpg","statics/parallax1.jpg","statics/parallax2.jpg"],"thumbnails-horizontal":s.thumbnailsHorizontal}},[a("q-carousel-slide",{attrs:{"img-src":"statics/mountains.jpg"}}),a("q-carousel-slide",{attrs:{"img-src":"statics/parallax1.jpg"}}),a("q-carousel-slide",{attrs:{"img-src":"statics/parallax2.jpg"}}),a("q-carousel-slide",{attrs:{"img-src":"statics/mountains.jpg"}}),a("q-carousel-slide",{attrs:{"img-src":"statics/parallax1.jpg"}}),a("q-carousel-slide",{attrs:{"img-src":"statics/parallax2.jpg"}}),a("q-carousel-slide",{attrs:{"img-src":"statics/mountains.jpg"}}),a("q-carousel-slide",{attrs:{"img-src":"statics/parallax1.jpg"}}),a("q-carousel-slide",{attrs:{"img-src":"statics/parallax2.jpg"}})],1),a("p",{staticClass:"caption"},[s._v("Example creating custom captions for each slide.")]),a("q-carousel",{attrs:{color:"white",arrows:"",height:"400px"}},[a("q-carousel-slide",{attrs:{"img-src":"statics/mountains.jpg"}},[a("div",{staticClass:"absolute-bottom custom-caption"},[a("div",{staticClass:"q-display-1"},[s._v("First stop")]),a("div",{staticClass:"q-headline"},[s._v("Mountains")])])]),a("q-carousel-slide",{attrs:{"img-src":"statics/parallax1.jpg"}},[a("div",{staticClass:"absolute-bottom custom-caption"},[a("div",{staticClass:"q-display-1"},[s._v("Second stop")]),a("div",{staticClass:"q-headline"},[s._v("Famous City")])])]),a("q-carousel-slide",{attrs:{"img-src":"statics/parallax2.jpg"}},[a("div",{staticClass:"absolute-bottom custom-caption"},[a("div",{staticClass:"q-display-1"},[s._v("Third stop")]),a("div",{staticClass:"q-headline"},[s._v("Famous Bridge")])])])],1),a("p",{staticClass:"caption"},[s._v("Carousel with infinite scroll, auto-play and custom Quick Navigation icon. Second slide has a Youtube video.")]),a("q-carousel",{attrs:{color:"white",arrows:"","quick-nav":"","quick-nav-icon":"favorite",infinite:"",autoplay:"",height:"300px"}},[a("q-carousel-slide",{attrs:{"img-src":"statics/mountains.jpg"}}),a("q-carousel-slide",[a("q-video",{staticClass:"absolute-full",attrs:{src:"https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"}})],1),a("q-carousel-slide",{attrs:{"img-src":"statics/parallax1.jpg"}}),a("q-carousel-slide",{attrs:{"img-src":"statics/parallax2.jpg"}})],1),a("p",{staticClass:"caption"},[s._v("\n    Carousel with custom Quick Navigation and different type of slides content,\n    including a vertical scrolling slide (third one).\n  ")]),a("q-carousel",{attrs:{color:"white","quick-nav":"",height:"300px"},scopedSlots:s._u([{key:"control-nav",fn:function(s){return a("q-carousel-control",{attrs:{offset:[18,52]}},[a("q-btn",{staticClass:"q-mr-sm",attrs:{disable:!s.canGoToPrevious,color:"amber","text-color":"black",icon:"keyboard_arrow_left",round:"",dense:""},on:{click:s.previous}}),a("q-btn",{attrs:{disable:!s.canGoToNext,color:"amber","text-color":"black",icon:"keyboard_arrow_right",round:"",dense:""},on:{click:s.next}})],1)}},{key:"quick-nav",fn:function(s){return a("q-btn",{class:{inactive:!s.current},attrs:{color:"white",flat:"",dense:"",label:""+(s.slide+1)},on:{click:function(t){s.goToSlide()}}})}}])},[a("q-carousel-slide",{staticClass:"text-white bg-primary row flex-center"},[a("div",{staticClass:"q-display-2"},[s._v("First Slide")])]),a("q-carousel-slide",{staticClass:"text-white bg-secondary row flex-center"},[a("div",{staticClass:"q-display-2"},[s._v("Second Slide")])]),a("q-carousel-slide",{staticClass:"text-white bg-primary"},s._l(7,function(t){return a("div",{key:"custom-"+t,staticClass:"q-ma-sm"},[s._v("\n        "+s._s(s.lorem)+"\n      ")])})),a("q-carousel-slide",{attrs:{"img-src":"statics/mountains.jpg"}}),a("q-carousel-slide",[a("q-video",{staticClass:"absolute-full",attrs:{src:"https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"}})],1),a("q-carousel-slide",{attrs:{"img-src":"statics/parallax1.jpg"}}),a("q-carousel-slide",{attrs:{"img-src":"statics/parallax2.jpg"}})],1),a("p",{staticClass:"caption"},[s._v("\n    Carousel with a model ("),a("q-chip",{attrs:{small:"",color:"primary"}},[s._v(s._s(s.slide))]),s._v(")\n    and some custom controls: an autoplay button, a progressbar showing Carousel progress\n    and a fullscreen toggle button.\n    "),a("br"),s._v("\n    Controlling from outside of Carousel:\n    "),a("q-btn",{staticClass:"q-ml-sm",attrs:{rounded:"",color:"primary",icon:"arrow_downward",label:"Navigate to second slide"},on:{click:function(t){s.slide=1}}})],1),a("q-carousel",{attrs:{color:"amber","quick-nav":"",infinite:"",autoplay:s.autoplay,height:"400px"},scopedSlots:s._u([{key:"control-button",fn:function(s){return a("q-carousel-control",{attrs:{position:"bottom-right",offset:[18,22]}},[a("q-btn",{attrs:{round:"",dense:"",push:"",color:"amber",icon:s.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:function(t){s.toggleFullscreen()}}})],1)}},{key:"control-progress",fn:function(t){return a("q-carousel-control",{attrs:{position:"bottom",offset:[42,100]}},[a("q-progress",{attrs:{percentage:t.percentage,stripe:"",color:"amber",animate:s.autoplay}})],1)}}]),model:{value:s.slide,callback:function(t){s.slide=t},expression:"slide"}},[s._l(7,function(t){return a("q-carousel-slide",{key:"car-"+t,staticClass:"flex flex-center",class:"bg-"+s.colors[t%5]},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"q-display-3"},[s._v("Slide "+s._s(t))]),a("div",[s._v("Slides can contain any content.")])])])}),a("q-carousel-control",{staticClass:"text-white",staticStyle:{background:"rgba(0, 0, 0, .3)",padding:"4px","border-radius":"4px"},attrs:{slot:"control",position:"top-right",offset:[18,18]},slot:"control"},[a("q-toggle",{attrs:{dark:"",color:"amber",label:"Auto Play"},model:{value:s.autoplay,callback:function(t){s.autoplay=t},expression:"autoplay"}})],1)],2),a("p",{staticClass:"caption"},[s._v("\n    Custom easing animation.\n  ")]),a("q-carousel",{staticClass:"text-white",attrs:{easing:s.overshoot,infinite:"",autoplay:"",arrows:"",color:"white",height:"250px"}},s._l(7,function(t){return a("q-carousel-slide",{key:"anim-"+t,staticClass:"flex flex-center",class:"bg-"+s.colors[t%5]},[a("div",{staticClass:"q-display-3"},[s._v("Slide "+s._s(t))])])})),a("p",{staticClass:"caption"},[s._v("\n    Launch Carousel on Fullscreen. Useful for creating Wizards.\n  ")]),a("q-btn",{staticClass:"glossy",attrs:{color:"primary"},on:{click:function(t){s.modal=!0}}},[s._v("\n    Launch\n  ")]),a("q-modal",{attrs:{maximized:""},model:{value:s.modal,callback:function(t){s.modal=t},expression:"modal"}},[a("q-carousel",{staticClass:"text-white full-height",attrs:{color:"white",arrows:"","quick-nav":""},scopedSlots:s._u([{key:"control-full",fn:function(t){return a("q-carousel-control",{attrs:{position:"bottom-right",offset:[18,22]}},[a("q-btn",{attrs:{rounded:"",push:"",color:"amber",icon:"close",label:"Close me"},on:{click:function(t){s.modal=!1}}})],1)}}])},s._l(7,function(t){return a("q-carousel-slide",{key:"full-"+t,staticClass:"flex flex-center",class:"bg-"+s.colors[t%5]},[a("div",{staticClass:"q-display-3"},[s._v("Step "+s._s(t))])])}))],1)],1)},l=[];i._withStripped=!0;var o=a("K405"),e={data:function(){return{slide:0,autoplay:!0,lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum! Repellendus sed totam earum exercitationem, veritatis rerum? Aliquid.",overshoot:o["g"].overshoot,colors:["primary","secondary","yellow","red","orange","grey-2"],modal:!1,thumbnailsHorizontal:!1}}},r=e,c=(a("kRUk"),a("KHd+")),n=Object(c["a"])(r,i,l,!1,null,null,null);n.options.__file="carousel.vue";t["default"]=n.exports},kRUk:function(s,t,a){"use strict";var i=a("nIds"),l=a.n(i);l.a},nIds:function(s,t,a){}}]);