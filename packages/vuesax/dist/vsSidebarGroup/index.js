/*!
  * Vuesax v4.0.1-alpha.25 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  * Donate: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.vsSidebarGroup=t(require("vue")):e.vsSidebarGroup=t(e.Vue)}("undefined"!=typeof self?self:this,function(n){return(i={},o.m=r={0:function(e,t,n){"use strict";var r=n(4),c=n.n(r),u="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function l(n,r,o){(o?Reflect.getOwnMetadataKeys(r,o):Reflect.getOwnMetadataKeys(r)).forEach(function(e){var t=o?Reflect.getOwnMetadata(e,r,o):Reflect.getOwnMetadata(e,r);o?Reflect.defineMetadata(e,t,n,o):Reflect.defineMetadata(e,t,n)})}var s={__proto__:[]}instanceof Array;function a(o){return function(e,t,n){var r="function"==typeof e?e:e.constructor;r.__decorators__||(r.__decorators__=[]),"number"!=typeof n&&(n=void 0),r.__decorators__.push(function(e){return o(e,t,n)})}}var d=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function o(e,r){void 0===r&&(r={}),r.name=r.name||e._componentTag||e.name;var o=e.prototype;Object.getOwnPropertyNames(o).forEach(function(t){if("constructor"!==t)if(-1<d.indexOf(t))r[t]=o[t];else{var n=Object.getOwnPropertyDescriptor(o,t);void 0!==n.value?"function"==typeof n.value?(r.methods||(r.methods={}))[t]=n.value:(r.mixins||(r.mixins=[])).push({data:function(){var e;return(e={})[t]=n.value,e}}):(n.get||n.set)&&((r.computed||(r.computed={}))[t]={get:n.get,set:n.set})}}),(r.mixins||(r.mixins=[])).push({data:function(){return function(r,e){var t=e.prototype._init;e.prototype._init=function(){var e=this,t=Object.getOwnPropertyNames(r);if(r.$options.props)for(var n in r.$options.props)r.hasOwnProperty(n)||t.push(n);t.forEach(function(t){"_"!==t.charAt(0)&&Object.defineProperty(e,t,{get:function(){return r[t]},set:function(e){r[t]=e},configurable:!0})})};var n=new e;e.prototype._init=t;var o={};return Object.keys(n).forEach(function(e){void 0!==n[e]&&(o[e]=n[e])}),o}(this,e)}});var t=e.__decorators__;t&&(t.forEach(function(e){return e(r)}),delete e.__decorators__);var n=Object.getPrototypeOf(e.prototype),i=n instanceof c.a?n.constructor:c.a,a=i.extend(r);return function(o,i,a){Object.getOwnPropertyNames(i).forEach(function(e){if(!f[e]){var t=Object.getOwnPropertyDescriptor(o,e);if(!t||t.configurable){var n=Object.getOwnPropertyDescriptor(i,e);if(!s){if("cid"===e)return;var r=Object.getOwnPropertyDescriptor(a,e);if(!function(e){var t=typeof e;return null==e||"object"!=t&&"function"!=t}(n.value)&&r&&r.value===n.value)return}0,Object.defineProperty(o,e,n)}}})}(a,e,i),u&&function(t,n){l(t,n),Object.getOwnPropertyNames(n.prototype).forEach(function(e){l(t.prototype,n.prototype,e)}),Object.getOwnPropertyNames(n).forEach(function(e){l(t,n,e)})}(a,e),a}var f={prototype:!0,arguments:!0,callee:!0,caller:!0};function i(t){return"function"==typeof t?o(t):function(e){return o(e,t)}}i.registerHooks=function(e){d.push.apply(d,e)};var p=i;n.d(t,"b",function(){return y}),n.d(t,"c",function(){return h}),n.d(t,"a",function(){return p});var g="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function b(e,t,n){g&&(Array.isArray(e)||"function"==typeof e||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",t,n)))}function y(n){return void 0===n&&(n={}),function(e,t){b(n,e,t),a(function(e,t){(e.props||(e.props={}))[t]=n})(e,t)}}function h(r,e){void 0===e&&(e={});var t=e.deep,o=void 0!==t&&t,n=e.immediate,i=void 0!==n&&n;return a(function(e,t){"object"!=typeof e.watch&&(e.watch=Object.create(null));var n=e.watch;"object"!=typeof n[r]||Array.isArray(n[r])?void 0===n[r]&&(n[r]=[]):n[r]=[n[r]],n[r].push({handler:t,deep:o,immediate:i})})}},1:function(e,t){e.exports=function(n,r,e,t,o){var i={};return Object.keys(t).forEach(function(e){i[e]=t[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=e.slice().reverse().reduce(function(e,t){return t(n,r,e)||e},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(n,r,i),i=null),i}},2:function(e,t){e.exports=function(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}},3:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},4:function(e,t){e.exports=n},42:function(e,t,n){},5:function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}},6:function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},68:function(e,t,n){"use strict";n.r(t);n(42);var r,o,i,a,c,u=n(2),l=n.n(u),s=n(6),d=n.n(s),f=n(3),p=n.n(f),g=n(5),b=n.n(g),y=n(1),h=n.n(y),v=(n(8),n(0)),w=n(9),m=(r=Object(v.b)({type:Boolean}),o=Object(v.c)("open"),Object(v.a)((a=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))||this).group=!0,e.openState=!1,l()(e,"open",c,p()(e)),e}b()(e,o);var t=e.prototype;return t.handleOpen=function(n){var r=this;this.$nextTick(function(){var e=r.$refs.content.scrollHeight,t=r.$parent;t.group&&(t.$refs.content.style.height=n?t.$refs.content.scrollHeight+e-1+"px":t.$refs.content.scrollHeight-e+1+"px")})},t.handleClickItem=function(e){this.$parent.handleClickItem(e)},t.beforeEnter=function(e){e.style.height=0},t.enter=function(e,t){var n=e.scrollHeight;e.style.height=n-1+"px",t()},t.leave=function(e,t){e.style.minHeight="0px",e.style.height="0px"},t.mounted=function(){(this.$el.querySelector(".active")||this.open)&&(this.openState=!0)},t.render=function(e){var t=this,n=e("div",{staticClass:"vs-sidebar__group__header",on:{click:function(){t.openState=!t.openState}}},[this.$slots.header]),r=e("div",{staticClass:"vs-sidebar__group__content",ref:"content",directives:[{name:"show",value:this.openState}]},[this.$slots.default]),o=e("transition",{on:{beforeEnter:this.beforeEnter,enter:this.enter,leave:this.leave}},[r]);return e("div",{staticClass:"vs-sidebar__group",class:{open:this.openState}},[n,o])},d()(e,[{key:"getValue",get:function(){return this.$parent.getValue}}]),e}(w.a),c=h()(a.prototype,"open",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h()(a.prototype,"handleOpen",[o],Object.getOwnPropertyDescriptor(a.prototype,"handleOpen"),a.prototype),i=a))||i);m.install=function(e){e.component("vs-sidebar-group",m)},"undefined"!=typeof window&&window.Vue&&m.install(window.Vue);t.default=m},7:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return c});function s(e){return["primary","secondary","success","danger","warning","dark","light","warn","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(e)}function d(e,t,n){n?"#comment"!==n.nodeName&&n.style.setProperty("--vs-"+e,t):document.documentElement.style.setProperty("--vs-"+e,t)}var r=function(e,t,n,r){var o,i=/^(rgb|rgba)/.test(t),a=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(t),c=/^(#)/.test(t);if("dark"==t&&n&&r&&n.classList.add("vs-component-dark"),i){var u=t.replace(/[rgba()]/g,"").split(",");o=u[0]+","+u[1]+","+u[2],d(e,o,n),r&&n.classList.add("vs-change-color")}else if(c){var l=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(t);o=l.r+","+l.g+","+l.b,d(e,o,n),r&&n.classList.add("vs-change-color")}else if(s(t)){o=window.getComputedStyle(document.body).getPropertyValue("--vs-"+t),d(e,o,n),r&&n.classList.add("vs-change-color")}else a&&(d(e,t,n),r&&n.classList.add("vs-change-color"))},o=function(e){var t,n=/^(rgb|rgba)/.test(e),r=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(e),o=/^(#)/.test(e);if(n){var i=e.replace(/[rgba()]/g,"").split(",");t=i[0]+","+i[1]+","+i[2]}else if(o){var a=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(e);t=a.r+","+a.g+","+a.b}else if(s(e)){t=window.getComputedStyle(document.body).getPropertyValue("--vs-"+e)}else r&&(t=e);return t},i=function(e,t){var n=t||document.body;n.insertBefore(e,n.lastChild)},a=function(e,t){var n=t.getBoundingClientRect(),r=n.x,o=n.y,i=n.width,a=n.height,c=e.style,u=window.pageYOffset,l=e.clientHeight+n.y+u;u+window.innerHeight-l<30?(c.top=o+u-e.clientHeight-4+"px",c.left=r+"px",c.width=i+"px",e.classList.add("top"),t.classList.add("top")):(c.top=o+u+a-4+"px",c.left=r+"px",c.width=i+"px",e.classList.remove("top"),t.classList.remove("top"))},c=function(e,t,n){var r=t.getBoundingClientRect(),o=r.x,i=r.y,a=r.width,c=r.height,u=e.style,l=window.pageYOffset,s=e.clientHeight+r.y+l,d=l+window.innerHeight;if(o+a+10+e.getBoundingClientRect().width>window.innerWidth&&"right"==n&&(n="left",e.classList.remove("right"),e.classList.add("left")),o-10<e.getBoundingClientRect().width&&"left"==n&&(n="top",e.classList.remove("left"),e.classList.add("top")),d-s<30||"top"==n){u.top=i+l-e.clientHeight-8+"px";var f=o+(a-e.getBoundingClientRect().width)/2;f+e.getBoundingClientRect().width<window.innerWidth?0<f?u.left=f+"px":(u.left="10px",e.classList.add("notArrow")):(u.left="auto",u.right="10px",e.classList.add("notArrow"))}else if("bottom"==n){u.top=i+l+c+8+"px";var p=o+(a-e.getBoundingClientRect().width)/2;p+e.getBoundingClientRect().width<window.innerWidth?0<p?u.left=p+"px":(u.left="10px",e.classList.add("notArrow")):(u.left="auto",u.right="10px",e.classList.add("notArrow"))}else"left"==n?(u.top=i+l+(c-e.getBoundingClientRect().height)/2+"px",u.left=o-e.getBoundingClientRect().width-8+"px"):"right"==n&&(u.top=i+l+(c-e.getBoundingClientRect().height)/2+"px",u.left=o+a+8+"px")}},8:function(e,t){e.exports=function(e,t){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},9:function(e,t,n){"use strict";n.d(t,"a",function(){return M});var r,o,i,a,c,u,l,s,d,f,p,g,b,y,h,v,w,m,O=n(2),x=n.n(O),_=n(6),j=n.n(_),P=n(3),C=n.n(P),k=n(5),R=n.n(k),B=n(1),$=n.n(B),z=(n(8),n(4)),L=n.n(z),S=n(0),E=n(7),M=(r=Object(S.b)({type:String,default:null}),o=Object(S.b)({type:Boolean,default:!1}),i=Object(S.b)({type:Boolean,default:!1}),a=Object(S.b)({type:Boolean,default:!1}),c=Object(S.b)({type:Boolean,default:!1}),u=Object(S.b)({type:Boolean,default:!1}),l=Object(S.b)({type:Boolean,default:!1}),Object(S.a)((m=w=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))||this).componentColor=null,e.getColor=null,x()(e,"color",f,C()(e)),x()(e,"danger",p,C()(e)),x()(e,"success",g,C()(e)),x()(e,"warn",b,C()(e)),x()(e,"dark",y,C()(e)),x()(e,"primary",h,C()(e)),x()(e,"active",v,C()(e)),e}return R()(e,o),e.prototype.mounted=function(){this.getColor=Object(E.a)(this.color)},j()(e,[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}},{key:"isColor",get:function(){return!!(this.color||this.primary||this.success||this.warn||this.danger||this.dark)}}]),e}(L.a),w.install=void 0,w.use=void 0,d=m,f=$()(d.prototype,"color",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=$()(d.prototype,"danger",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=$()(d.prototype,"success",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=$()(d.prototype,"warn",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=$()(d.prototype,"dark",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=$()(d.prototype,"primary",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=$()(d.prototype,"active",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=d))||s)}},o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=68)).default;function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,i});