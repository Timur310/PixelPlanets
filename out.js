(()=>{function Qh(r){if(!!r&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function pi(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),o=r.a,a=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=r.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+o+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var Zl=Array.prototype.forEach,lr=Array.prototype.slice,J={BREAK:{},extend:function(e){return this.each(lr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(lr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=lr.call(arguments);return function(){for(var t=lr.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(!!e){if(Zl&&e.forEach&&e.forEach===Zl)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var s=this,o=arguments;function a(){i=null,n||e.apply(s,o)}var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():lr.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},ed=[{litmus:J.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:pi},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:pi},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:pi},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:pi}}},{litmus:J.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:J.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:J.isObject,conversions:{RGBA_OBJ:{read:function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)&&J.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)&&J.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],cr=void 0,ss=void 0,No=function(){ss=!1;var e=arguments.length>1?J.toArray(arguments):arguments[0];return J.each(ed,function(t){if(t.litmus(e))return J.each(t.conversions,function(n,i){if(cr=n.read(e),ss===!1&&cr!==!1)return ss=cr,cr.conversionName=i,cr.conversion=n,J.BREAK}),J.BREAK}),ss},$l=void 0,as={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-s*t),l=n*(1-(1-s)*t),c=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),s=Math.max(e,t,n),o=s-i,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-n)/o:t===s?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<($l=t*8)|e&~(255<<$l)}},td=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ut=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},kt=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),bn=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},wn=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},Mn=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},_t=function(){function r(){if(Ut(this,r),this.__state=No.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return kt(r,[{key:"toString",value:function(){return pi(this)}},{key:"toHexString",value:function(){return pi(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function Go(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(_t.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(_t.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Wo(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(_t.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(_t.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}_t.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=as.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")J.extend(r.__state,as.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};_t.recalculateHSV=function(r){var e=as.rgb_to_hsv(r.r,r.g,r.b);J.extend(r.__state,{s:e.s,v:e.v}),J.isNaN(e.h)?J.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};_t.COMPONENTS=["r","g","b","h","s","v","hex","a"];Go(_t.prototype,"r",2);Go(_t.prototype,"g",1);Go(_t.prototype,"b",0);Wo(_t.prototype,"h");Wo(_t.prototype,"s");Wo(_t.prototype,"v");Object.defineProperty(_t.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(_t.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=as.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Gn=function(){function r(e,t){Ut(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return kt(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),nd={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},oc={};J.each(nd,function(r,e){J.each(r,function(t){oc[t]=e})});var id=/(\d+(\.\d+)?)px/;function tn(r){if(r==="0"||J.isUndefined(r))return 0;var e=r.match(id);return J.isNull(e)?0:parseFloat(e[1])}var F={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,s=t;J.isUndefined(s)&&(s=!0),J.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var s=n||{},o=oc[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;J.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}J.defaults(a,i),e.dispatchEvent(a)},bind:function(e,t,n,i){var s=i||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),F},unbind:function(e,t,n,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),F},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return F},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return F},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return tn(t["border-left-width"])+tn(t["border-right-width"])+tn(t["padding-left"])+tn(t["padding-right"])+tn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return tn(t["border-top-width"])+tn(t["border-bottom-width"])+tn(t["padding-top"])+tn(t["padding-bottom"])+tn(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},ac=function(r){wn(e,r);function e(t,n){Ut(this,e);var i=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return F.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return kt(e,[{key:"setValue",value:function(n){var i=bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Gn),rd=function(r){wn(e,r);function e(t,n,i){Ut(this,e);var s=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=s;if(s.__select=document.createElement("select"),J.isArray(o)){var l={};J.each(o,function(c){l[c]=c}),o=l}return J.each(o,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),a.__select.appendChild(h)}),s.updateDisplay(),F.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),s.domElement.appendChild(s.__select),s}return kt(e,[{key:"setValue",value:function(n){var i=bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return F.isActive(this.__select)?this:(this.__select.value=this.getValue(),bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Gn),sd=function(r){wn(e,r);function e(t,n){Ut(this,e);var i=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),F.bind(i.__input,"keyup",o),F.bind(i.__input,"change",o),F.bind(i.__input,"blur",a),F.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return kt(e,[{key:"updateDisplay",value:function(){return F.isActive(this.__input)||(this.__input.value=this.getValue()),bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Gn);function jl(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var lc=function(r){wn(e,r);function e(t,n,i){Ut(this,e);var s=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,J.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=jl(s.__impliedStep),s}return kt(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=jl(n),this}}]),e}(Gn);function od(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var ls=function(r){wn(e,r);function e(t,n,i){Ut(this,e);var s=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var g=parseFloat(o.__input.value);J.isNaN(g)||o.setValue(g)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){c()}function h(g){var f=a-g.clientY;o.setValue(o.getValue()+f*o.__impliedStep),a=g.clientY}function d(){F.unbind(window,"mousemove",h),F.unbind(window,"mouseup",d),c()}function m(g){F.bind(window,"mousemove",h),F.bind(window,"mouseup",d),a=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),F.bind(s.__input,"change",l),F.bind(s.__input,"blur",u),F.bind(s.__input,"mousedown",m),F.bind(s.__input,"keydown",function(g){g.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return kt(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():od(this.getValue(),this.__precision),bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(lc);function Kl(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var Bo=function(r){wn(e,r);function e(t,n,i,s,o){Ut(this,e);var a=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),F.bind(a.__background,"mousedown",c),F.bind(a.__background,"touchstart",d),F.addClass(a.__background,"slider"),F.addClass(a.__foreground,"slider-fg");function c(f){document.activeElement.blur(),F.bind(window,"mousemove",u),F.bind(window,"mouseup",h),u(f)}function u(f){f.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(Kl(f.clientX,p.left,p.right,l.__min,l.__max)),!1}function h(){F.unbind(window,"mousemove",u),F.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(f){f.touches.length===1&&(F.bind(window,"touchmove",m),F.bind(window,"touchend",g),m(f))}function m(f){var p=f.touches[0].clientX,v=l.__background.getBoundingClientRect();l.setValue(Kl(p,v.left,v.right,l.__min,l.__max))}function g(){F.unbind(window,"touchmove",m),F.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return kt(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(lc),cc=function(r){wn(e,r);function e(t,n,i){Ut(this,e);var s=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,F.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),F.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return kt(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Gn),Uo=function(r){wn(e,r);function e(t,n){Ut(this,e);var i=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new _t(i.getValue()),i.__temp=new _t(0);var s=i;i.domElement=document.createElement("div"),F.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",F.bind(i.__input,"keydown",function(f){f.keyCode===13&&h.call(this)}),F.bind(i.__input,"blur",h),F.bind(i.__selector,"mousedown",function(){F.addClass(this,"drag").bind(window,"mouseup",function(){F.removeClass(s.__selector,"drag")})}),F.bind(i.__selector,"touchstart",function(){F.addClass(this,"drag").bind(window,"touchend",function(){F.removeClass(s.__selector,"drag")})});var o=document.createElement("div");J.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),J.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),J.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),J.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),J.extend(o.style,{width:"100%",height:"100%",background:"none"}),Ql(o,"top","rgba(0,0,0,0)","#000"),J.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),ld(i.__hue_field),J.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),F.bind(i.__saturation_field,"mousedown",a),F.bind(i.__saturation_field,"touchstart",a),F.bind(i.__field_knob,"mousedown",a),F.bind(i.__field_knob,"touchstart",a),F.bind(i.__hue_field,"mousedown",l),F.bind(i.__hue_field,"touchstart",l);function a(f){m(f),F.bind(window,"mousemove",m),F.bind(window,"touchmove",m),F.bind(window,"mouseup",c),F.bind(window,"touchend",c)}function l(f){g(f),F.bind(window,"mousemove",g),F.bind(window,"touchmove",g),F.bind(window,"mouseup",u),F.bind(window,"touchend",u)}function c(){F.unbind(window,"mousemove",m),F.unbind(window,"touchmove",m),F.unbind(window,"mouseup",c),F.unbind(window,"touchend",c),d()}function u(){F.unbind(window,"mousemove",g),F.unbind(window,"touchmove",g),F.unbind(window,"mouseup",u),F.unbind(window,"touchend",u),d()}function h(){var f=No(this.value);f!==!1?(s.__color.__state=f,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function m(f){f.type.indexOf("touch")===-1&&f.preventDefault();var p=s.__saturation_field.getBoundingClientRect(),v=f.touches&&f.touches[0]||f,M=v.clientX,A=v.clientY,E=(M-p.left)/(p.right-p.left),y=1-(A-p.top)/(p.bottom-p.top);return y>1?y=1:y<0&&(y=0),E>1?E=1:E<0&&(E=0),s.__color.v=y,s.__color.s=E,s.setValue(s.__color.toOriginal()),!1}function g(f){f.type.indexOf("touch")===-1&&f.preventDefault();var p=s.__hue_field.getBoundingClientRect(),v=f.touches&&f.touches[0]||f,M=v.clientY,A=1-(M-p.top)/(p.bottom-p.top);return A>1?A=1:A<0&&(A=0),s.__color.h=A*360,s.setValue(s.__color.toOriginal()),!1}return i}return kt(e,[{key:"updateDisplay",value:function(){var n=No(this.getValue());if(n!==!1){var i=!1;J.each(_t.COMPONENTS,function(a){if(!J.isUndefined(n[a])&&!J.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&J.extend(this.__color.__state,n)}J.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;J.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Ql(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),J.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(Gn),ad=["-moz-","-o-","-webkit-","-ms-",""];function Ql(r,e,t,n){r.style.background="",J.each(ad,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function ld(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var cd={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},ud=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,hd=function(e,t){var n=e[t];return J.isArray(arguments[2])||J.isObject(arguments[2])?new rd(e,t,arguments[2]):J.isNumber(n)?J.isNumber(arguments[2])&&J.isNumber(arguments[3])?J.isNumber(arguments[4])?new Bo(e,t,arguments[2],arguments[3],arguments[4]):new Bo(e,t,arguments[2],arguments[3]):J.isNumber(arguments[4])?new ls(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new ls(e,t,{min:arguments[2],max:arguments[3]}):J.isString(n)?new sd(e,t):J.isFunction(n)?new cc(e,t,""):J.isBoolean(n)?new ac(e,t):null};function dd(r){setTimeout(r,1e3/60)}var fd=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||dd,pd=function(){function r(){Ut(this,r),this.backgroundElement=document.createElement("div"),J.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),F.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),J.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;F.bind(this.backgroundElement,"click",function(){e.hide()})}return kt(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),J.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",F.unbind(t.domElement,"webkitTransitionEnd",i),F.unbind(t.domElement,"transitionend",i),F.unbind(t.domElement,"oTransitionEnd",i)};F.bind(this.domElement,"webkitTransitionEnd",n),F.bind(this.domElement,"transitionend",n),F.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-F.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-F.getHeight(this.domElement)/2+"px"}}]),r}(),md=Qh(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);cd.inject(md);var ec="dg",tc=72,nc=20,fr="Default",ur=function(){try{return!!window.localStorage}catch{return!1}}(),hr=void 0,ic=!0,di=void 0,zo=!1,uc=[],tt=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),F.addClass(this.domElement,ec),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=J.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=J.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),J.isUndefined(n.load)?n.load={preset:fr}:n.preset&&(n.load.preset=n.preset),J.isUndefined(n.parent)&&n.hideable&&uc.push(this),n.resizable=J.isUndefined(n.parent)&&n.resizable,n.autoPlace&&J.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=ur&&localStorage.getItem(fi(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(d){t.parent?t.getRoot().preset=d:n.load.preset=d,xd(this),t.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,Vo(t,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?F.addClass(t.__ul,r.CLASS_CLOSED):F.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(d){ur&&(i=d,d?F.bind(window,"unload",s):F.unbind(window,"unload",s),localStorage.setItem(fi(t,"isLocal"),d))}}}),J.isUndefined(n.parent)){if(this.closed=n.closed||!1,F.addClass(this.domElement,r.CLASS_MAIN),F.makeSelectable(this.domElement,!1),ur&&i){t.useLocalStorage=!0;var a=localStorage.getItem(fi(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,F.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(F.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(F.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),F.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);F.addClass(l,"controller-name"),o=qo(t,l);var c=function(d){return d.preventDefault(),t.closed=!t.closed,!1};F.addClass(this.__ul,r.CLASS_CLOSED),F.addClass(o,"title"),F.bind(o,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(J.isUndefined(n.parent)&&(ic&&(di=document.createElement("div"),F.addClass(di,ec),F.addClass(di,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(di),ic=!1),di.appendChild(this.domElement),F.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||Vo(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},F.bind(window,"resize",this.__resizeHandler),F.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),F.bind(this.__ul,"transitionend",this.__resizeHandler),F.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&_d(this),s=function(){ur&&localStorage.getItem(fi(t,"isLocal"))==="true"&&localStorage.setItem(fi(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=t.getRoot();h.width+=1,J.defer(function(){h.width-=1})}n.parent||u()};tt.toggleHide=function(){zo=!zo,J.each(uc,function(r){r.domElement.style.display=zo?"none":""})};tt.CLASS_AUTO_PLACE="a";tt.CLASS_AUTO_PLACE_CONTAINER="ac";tt.CLASS_MAIN="main";tt.CLASS_CONTROLLER_ROW="cr";tt.CLASS_TOO_TALL="taller-than-window";tt.CLASS_CLOSED="closed";tt.CLASS_CLOSE_BUTTON="close-button";tt.CLASS_CLOSE_TOP="close-top";tt.CLASS_CLOSE_BOTTOM="close-bottom";tt.CLASS_DRAG="drag";tt.DEFAULT_WIDTH=245;tt.TEXT_CLOSED="Close Controls";tt.TEXT_OPEN="Open Controls";tt._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===tc||r.keyCode===tc)&&tt.toggleHide()};F.bind(window,"keydown",tt._keydownHandler,!1);J.extend(tt.prototype,{add:function(e,t){return dr(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return dr(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;J.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&di.removeChild(this.domElement);var e=this;J.each(this.__folders,function(t){e.removeFolder(t)}),F.unbind(window,"keydown",tt._keydownHandler,!1),rc(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new tt(t);this.__folders[e]=n;var i=qo(this,n.domElement);return F.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],rc(e);var t=this;J.each(e.__folders,function(n){e.removeFolder(n)}),J.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=F.getOffset(e.__ul).top,n=0;J.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=F.getHeight(i))}),window.innerHeight-t-nc<n?(F.addClass(e.domElement,tt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-nc+"px"):(F.removeClass(e.domElement,tt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&J.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:J.debounce(function(){this.onResize()},50),remember:function(){if(J.isUndefined(hr)&&(hr=new pd,hr.domElement.innerHTML=ud),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;J.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&vd(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Vo(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=os(this)),e.folders={},J.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=os(this),ko(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[fr]=os(this,!0)),this.load.remembered[e]=os(this),this.preset=e,Ho(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){J.each(this.__controllers,function(t){this.getRoot().load.remembered?hc(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),J.each(this.__folders,function(t){t.revert(t)}),e||ko(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&dc(this.__listening)},updateDisplay:function(){J.each(this.__controllers,function(e){e.updateDisplay()}),J.each(this.__folders,function(e){e.updateDisplay()})}});function qo(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function rc(r){F.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&F.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function ko(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function gd(r,e,t){if(t.__li=e,t.__gui=r,J.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),dr(r,t.object,t.property,{before:a,factoryArgs:[J.toArray(arguments)]})}if(J.isArray(o)||J.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),dr(r,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Bo){var n=new ls(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});J.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=n[s];t[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),F.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof ls){var i=function(o){if(J.isNumber(t.__min)&&J.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=dr(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=J.compose(i,t.min),t.max=J.compose(i,t.max)}else t instanceof ac?(F.bind(e,"click",function(){F.fakeEvent(t.__checkbox,"click")}),F.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof cc?(F.bind(e,"click",function(){F.fakeEvent(t.__button,"click")}),F.bind(e,"mouseover",function(){F.addClass(t.__button,"hover")}),F.bind(e,"mouseout",function(){F.removeClass(t.__button,"hover")})):t instanceof Uo&&(F.addClass(e,"color"),t.updateDisplay=J.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=J.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&ko(r.getRoot(),!0),s},t.setValue)}function hc(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[r.preset])o=s[r.preset];else if(s[fr])o=s[fr];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}function dr(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new Uo(e,t);else{var s=[e,t].concat(n.factoryArgs);i=hd.apply(r,s)}n.before instanceof Gn&&(n.before=n.before.__li),hc(r,i),F.addClass(i.domElement,"c");var o=document.createElement("span");F.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=qo(r,a,n.before);return F.addClass(l,tt.CLASS_CONTROLLER_ROW),i instanceof Uo?F.addClass(l,"color"):F.addClass(l,td(i.getValue())),gd(r,l,i),r.__controllers.push(i),i}function fi(r,e){return document.location.href+"."+e}function Ho(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function sc(r,e){e.style.display=r.useLocalStorage?"block":"none"}function vd(r){var e=r.__save_row=document.createElement("li");F.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),F.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",F.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",F.addClass(n,"button"),F.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",F.addClass(i,"button"),F.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",F.addClass(s,"button"),F.addClass(s,"revert");var o=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?J.each(r.load.remembered,function(h,d){Ho(r,d,d===r.preset)}):Ho(r,fr,!1),F.bind(o,"change",function(){for(var h=0;h<r.__preset_select.length;h++)r.__preset_select[h].innerHTML=r.__preset_select[h].value;r.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(s),ur){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(fi(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),sc(r,a),F.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,sc(r,a)})}var u=document.getElementById("dg-new-constructor");F.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&hr.hide()}),F.bind(t,"click",function(){u.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),hr.show(),u.focus(),u.select()}),F.bind(n,"click",function(){r.save()}),F.bind(i,"click",function(){var h=prompt("Enter a new preset name.");h&&r.saveAs(h)}),F.bind(s,"click",function(){r.revert()})}function _d(r){var e=void 0;r.__resize_handle=document.createElement("div"),J.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function n(){F.removeClass(r.__closeButton,tt.CLASS_DRAG),F.unbind(window,"mousemove",t),F.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),e=s.clientX,F.addClass(r.__closeButton,tt.CLASS_DRAG),F.bind(window,"mousemove",t),F.bind(window,"mouseup",n),!1}F.bind(r.__resize_handle,"mousedown",i),F.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function Vo(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function os(r,e){var t={};return J.each(r.__rememberedObjects,function(n,i){var s={},o=r.__rememberedObjectIndecesToControllers[i];J.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[i]=s}),t}function xd(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function dc(r){r.length!==0&&fd.call(window,function(){dc(r)}),J.each(r,function(e){e.updateDisplay()})}var fc=tt;var Ul="139",oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yd=0,pc=1,bd=2;var Zu=1,wd=2,wr=3,Ar=0,Jt=1,Hi=2,$u=1;var Dn=0,Bi=1,mc=2,gc=3,vc=4,Md=5,Ii=100,Sd=101,Ed=102,_c=103,xc=104,Td=200,Ad=201,Cd=202,Rd=203,ju=204,Ku=205,Ld=206,Pd=207,Dd=208,Id=209,Fd=210,Od=0,zd=1,Nd=2,Da=3,Bd=4,Ud=5,kd=6,Hd=7,To=0,Vd=1,Gd=2,gn=0,Wd=1,qd=2,Xd=3,Yd=4,Jd=5,Qu=300,Vi=301,Gi=302,Ia=303,Fa=304,Ao=306,Oa=1e3,Xt=1001,za=1002,Ie=1003,yc=1004;var bc=1005;var Lt=1006,Zd=1007;var Co=1008;var Qn=1009,$d=1010,jd=1011,Cr=1012,Kd=1013,Vs=1014,Zn=1015,Ui=1016,Qd=1017,ef=1018,ki=1020,tf=1021,nf=1022,Yt=1023,rf=1024,sf=1025,jn=1026,Wi=1027,of=1028,af=1029,lf=1030,cf=1031,uf=1033,Xo=33776,Yo=33777,Jo=33778,Zo=33779,wc=35840,Mc=35841,Sc=35842,Ec=35843,hf=36196,Tc=37492,Ac=37496,Cc=37808,Rc=37809,Lc=37810,Pc=37811,Dc=37812,Ic=37813,Fc=37814,Oc=37815,zc=37816,Nc=37817,Bc=37818,Uc=37819,kc=37820,Hc=37821,Vc=36492,df=2200,ff=2201,pf=2202,Ws=2300,qs=2301,$o=2302,Fi=2400,Oi=2401,Xs=2402,kl=2500,eh=2501,mf=0;var vn=3e3,rt=3001,gf=3200,vf=3201,ir=0,_f=1;var mn="srgb",$n="srgb-linear";var jo=7680;var xf=519,Rr=35044,Ys=35048;var Gc="300 es",Na=1035,$t=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Mt=[];for(let r=0;r<256;r++)Mt[r]=(r<16?"0":"")+r.toString(16);var Ko=Math.PI/180,Ba=180/Math.PI;function Zt(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[r&255]+Mt[r>>8&255]+Mt[r>>16&255]+Mt[r>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function yt(r,e,t){return Math.max(e,Math.min(t,r))}function yf(r,e){return(r%e+e)%e}function Qo(r,e,t){return(1-t)*r+t*e}function Wc(r){return(r&r-1)===0&&r!==0}function Ua(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}var B=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};B.prototype.isVector2=!0;var gt=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],f=i[0],p=i[3],v=i[6],M=i[1],A=i[4],E=i[7],y=i[2],P=i[5],O=i[8];return s[0]=o*f+a*M+l*y,s[3]=o*p+a*A+l*P,s[6]=o*v+a*E+l*O,s[1]=c*f+u*M+h*y,s[4]=c*p+u*A+h*P,s[7]=c*v+u*E+h*O,s[2]=d*f+m*M+g*y,s[5]=d*p+m*A+g*P,s[8]=d*v+m*E+g*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,m=c*s-o*l,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/g;return e[0]=h*f,e[1]=(i*c-u*n)*f,e[2]=(a*n-i*o)*f,e[3]=d*f,e[4]=(u*t-i*l)*f,e[5]=(i*s-a*t)*f,e[6]=m*f,e[7]=(n*l-c*t)*f,e[8]=(o*t-n*s)*f,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*u,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*u,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gt.prototype.isMatrix3=!0;function th(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function Lr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ea={[mn]:{[$n]:Kn},[$n]:{[mn]:Gs}},Ht={legacyMode:!0,get workingColorSpace(){return $n},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(ea[e]&&ea[e][t]!==void 0){let n=ea[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mt={r:0,g:0,b:0},Vt={h:0,s:0,l:0},cs={h:0,s:0,l:0};function ta(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function us(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}var ve=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$n){return this.r=e,this.g=t,this.b=n,Ht.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$n){if(e=yf(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ta(o,s,e+1/3),this.g=ta(o,s,e),this.b=ta(o,s,e-1/3)}return Ht.toWorkingColorSpace(this,i),this}setStyle(e,t=mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ht.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ht.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ht.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ht.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=mn){let n=nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return Ht.fromWorkingColorSpace(us(this,mt),e),yt(mt.r*255,0,255)<<16^yt(mt.g*255,0,255)<<8^yt(mt.b*255,0,255)<<0}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$n){Ht.fromWorkingColorSpace(us(this,mt),t);let n=mt.r,i=mt.g,s=mt.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$n){return Ht.fromWorkingColorSpace(us(this,mt),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=mn){return Ht.fromWorkingColorSpace(us(this,mt),e),e!==mn?`color(${e} ${mt.r} ${mt.g} ${mt.b})`:`rgb(${mt.r*255|0},${mt.g*255|0},${mt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=n,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(cs);let n=Qo(Vt.h,cs.h,t),i=Qo(Vt.s,cs.s,t),s=Qo(Vt.l,cs.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};ve.NAMES=nh;ve.prototype.isColor=!0;ve.prototype.r=1;ve.prototype.g=1;ve.prototype.b=1;var mi,_n=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=Lr("canvas")),mi.width=e.width,mi.height=e.height;let n=mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Kn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Js=class{constructor(e=null){this.uuid=Zt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(na(i[o].image)):s.push(na(i[o]))}else s=na(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function na(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_n.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Js.prototype.isSource=!0;var bf=0,pt=class extends $t{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=Xt,i=Xt,s=Lt,o=Co,a=Yt,l=Qn,c=1,u=vn){super(),Object.defineProperty(this,"id",{value:bf++}),this.uuid=Zt(),this.name="",this.source=new Js(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oa:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oa:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=Qu;pt.prototype.isTexture=!0;var ae=class{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],f=l[2],p=l[6],v=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+f)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,E=(m+1)/2,y=(v+1)/2,P=(u+d)/4,O=(h+f)/4,Z=(g+p)/4;return A>E&&A>y?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=P/n,s=O/n):E>y?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=P/i,s=Z/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=O/s,i=Z/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-f)*(h-f)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-f)/M,this.z=(d-u)/M,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ae.prototype.isVector4=!0;var Ct=class extends $t{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new ae(0,0,e,t),this.scissorTest=!1,this.viewport=new ae(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Lt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0,this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};Ct.prototype.isWebGLRenderTarget=!0;var qi=class extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};qi.prototype.isDataArrayTexture=!0;var ka=class extends Ct{constructor(e,t,n){super(e,t),this.depth=n,this.texture=new qi(null,e,t,n),this.texture.isRenderTargetTexture=!0}};ka.prototype.isWebGLArrayRenderTarget=!0;var Pr=class extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};Pr.prototype.isData3DTexture=!0;var Ha=class extends Ct{constructor(e,t,n){super(e,t),this.depth=n,this.texture=new Pr(null,e,t,n),this.texture.isRenderTargetTexture=!0}};Ha.prototype.isWebGL3DRenderTarget=!0;var Va=class extends Ct{constructor(e,t,n,i={}){super(e,t,i);let s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}};Va.prototype.isWebGLMultipleRenderTargets=!0;var vt=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[o+0],m=s[o+1],g=s[o+2],f=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=f;return}if(h!==f||l!==d||c!==m||u!==g){let p=1-a,v=l*d+c*m+u*g+h*f,M=v>=0?1:-1,A=1-v*v;if(A>Number.EPSILON){let y=Math.sqrt(A),P=Math.atan2(y,v*M);p=Math.sin(p*P)/y,a=Math.sin(a*P)/y}let E=a*M;if(l=l*p+d*E,c=c*p+m*E,u=u*p+g*E,h=h*p+f*E,p===1-a){let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-a*m,e[t+2]=c*g+u*m+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){let m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};vt.prototype.isQuaternion=!0;var T=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};T.prototype.isVector3=!0;var ia=new T,qc=new vt,Ft=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){let u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){let u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Wn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Wn)}else n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox),ra.applyMatrix4(e.matrixWorld),this.union(ra);let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),hs.subVectors(this.max,pr),gi.subVectors(e.a,pr),vi.subVectors(e.b,pr),_i.subVectors(e.c,pr),Sn.subVectors(vi,gi),En.subVectors(_i,vi),qn.subVectors(gi,_i);let t=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-qn.z,qn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,qn.z,0,-qn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-qn.y,qn.x,0];return!sa(t,gi,vi,_i,hs)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,gi,vi,_i,hs))?!1:(ds.crossVectors(Sn,En),t=[ds.x,ds.y,ds.z],sa(t,gi,vi,_i,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Wn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Ft.prototype.isBox3=!0;var cn=[new T,new T,new T,new T,new T,new T,new T,new T],Wn=new T,ra=new Ft,gi=new T,vi=new T,_i=new T,Sn=new T,En=new T,qn=new T,pr=new T,hs=new T,ds=new T,Xn=new T;function sa(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Xn.fromArray(r,s);let a=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),u=n.dot(Xn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var wf=new Ft,Xc=new T,fs=new T,oa=new T,Fn=class{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){oa.subVectors(e,this.center);let t=oa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(oa.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?fs.set(0,0,1).multiplyScalar(e.radius):fs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Xc.copy(e.center).add(fs)),this.expandByPoint(Xc.copy(e.center).sub(fs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},un=new T,aa=new T,ps=new T,Tn=new T,la=new T,ms=new T,ca=new T,On=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.direction).multiplyScalar(t).add(this.origin),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){aa.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(aa);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ps),a=Tn.dot(this.direction),l=-Tn.dot(ps),c=Tn.lengthSq(),u=Math.abs(1-o*o),h,d,m,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){let f=1/u;h*=f,d*=f,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(ps).multiplyScalar(d).add(aa),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);let n=un.dot(this.direction),i=un.dot(un)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,i,s){la.subVectors(t,e),ms.subVectors(n,e),ca.crossVectors(la,ms);let o=this.direction.dot(ca),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,e);let l=a*this.direction.dot(ms.crossVectors(Tn,ms));if(l<0)return null;let c=a*this.direction.dot(la.cross(Tn));if(c<0||l+c>o)return null;let u=-a*Tn.dot(ca);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c,u,h,d,m,g,f,p){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=d,v[3]=m,v[7]=g,v[11]=f,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/xi.setFromMatrixColumn(e,0).length(),s=1/xi.setFromMatrixColumn(e,1).length(),o=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,m=o*h,g=a*u,f=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-f*c,t[9]=-a*l,t[2]=f-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,m=l*h,g=c*u,f=c*h;t[0]=d+f*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=f+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,m=l*h,g=c*u,f=c*h;t[0]=d-f*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=f-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,m=o*h,g=a*u,f=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+f,t[1]=l*h,t[5]=f*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,g=a*l,f=a*c;t[0]=l*u,t[4]=f-d*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-f*h}else if(e.order==="XZY"){let d=o*l,m=o*c,g=a*l,f=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+f,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=f*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mf,e,Sf)}lookAt(e,t,n){let i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),An.crossVectors(n,Dt),An.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),An.crossVectors(n,Dt)),An.normalize(),gs.crossVectors(Dt,An),i[0]=An.x,i[4]=gs.x,i[8]=Dt.x,i[1]=An.y,i[5]=gs.y,i[9]=Dt.y,i[2]=An.z,i[6]=gs.z,i[10]=Dt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],f=n[6],p=n[10],v=n[14],M=n[3],A=n[7],E=n[11],y=n[15],P=i[0],O=i[4],Z=i[8],fe=i[12],G=i[1],_=i[5],R=i[9],K=i[13],D=i[2],H=i[6],N=i[10],V=i[14],L=i[3],X=i[7],j=i[11],ie=i[15];return s[0]=o*P+a*G+l*D+c*L,s[4]=o*O+a*_+l*H+c*X,s[8]=o*Z+a*R+l*N+c*j,s[12]=o*fe+a*K+l*V+c*ie,s[1]=u*P+h*G+d*D+m*L,s[5]=u*O+h*_+d*H+m*X,s[9]=u*Z+h*R+d*N+m*j,s[13]=u*fe+h*K+d*V+m*ie,s[2]=g*P+f*G+p*D+v*L,s[6]=g*O+f*_+p*H+v*X,s[10]=g*Z+f*R+p*N+v*j,s[14]=g*fe+f*K+p*V+v*ie,s[3]=M*P+A*G+E*D+y*L,s[7]=M*O+A*_+E*H+y*X,s[11]=M*Z+A*R+E*N+y*j,s[15]=M*fe+A*K+E*V+y*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],f=e[7],p=e[11],v=e[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*m-n*l*m)+f*(+t*l*m-t*c*d+s*o*d-i*o*m+i*c*u-s*l*u)+p*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+v*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],f=e[13],p=e[14],v=e[15],M=h*p*c-f*d*c+f*l*m-a*p*m-h*l*v+a*d*v,A=g*d*c-u*p*c-g*l*m+o*p*m+u*l*v-o*d*v,E=u*f*c-g*h*c+g*a*m-o*f*m-u*a*v+o*h*v,y=g*h*l-u*f*l-g*a*d+o*f*d+u*a*p-o*h*p,P=t*M+n*A+i*E+s*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/P;return e[0]=M*O,e[1]=(f*d*s-h*p*s-f*i*m+n*p*m+h*i*v-n*d*v)*O,e[2]=(a*p*s-f*l*s+f*i*c-n*p*c-a*i*v+n*l*v)*O,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*m-n*l*m)*O,e[4]=A*O,e[5]=(u*p*s-g*d*s+g*i*m-t*p*m-u*i*v+t*d*v)*O,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*v-t*l*v)*O,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*m+t*l*m)*O,e[8]=E*O,e[9]=(g*h*s-u*f*s-g*n*m+t*f*m+u*n*v-t*h*v)*O,e[10]=(o*f*s-g*a*s+g*n*c-t*f*c-o*n*v+t*a*v)*O,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*O,e[12]=y*O,e[13]=(u*f*i-g*h*i+g*n*d-t*f*d-u*n*p+t*h*p)*O,e[14]=(g*a*i-o*f*i-g*n*l+t*f*l+o*n*p-t*a*p)*O,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*O,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,m=s*u,g=s*h,f=o*u,p=o*h,v=a*h,M=l*c,A=l*u,E=l*h,y=n.x,P=n.y,O=n.z;return i[0]=(1-(f+v))*y,i[1]=(m+E)*y,i[2]=(g-A)*y,i[3]=0,i[4]=(m-E)*P,i[5]=(1-(d+v))*P,i[6]=(p+M)*P,i[7]=0,i[8]=(g+A)*O,i[9]=(p-M)*O,i[10]=(1-(d+f))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=xi.set(i[0],i[1],i[2]).length(),o=xi.set(i[4],i[5],i[6]).length(),a=xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Gt.copy(this);let c=1/s,u=1/o,h=1/a;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=u,Gt.elements[5]*=u,Gt.elements[6]*=u,Gt.elements[8]*=h,Gt.elements[9]*=h,Gt.elements[10]*=h,t.setFromRotationMatrix(Gt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){let a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),h=(t+e)*l,d=(n+i)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Me.prototype.isMatrix4=!0;var xi=new T,Gt=new Me,Mf=new T(0,0,0),Sf=new T(1,1,1),An=new T,gs=new T,Dt=new T,Yc=new Me,Jc=new vt,xn=class{constructor(e=0,t=0,n=0,i=xn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};xn.prototype.isEuler=!0;xn.DefaultOrder="XYZ";xn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Zs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ef=0,Zc=new T,yi=new vt,hn=new Me,vs=new T,mr=new T,Tf=new T,Af=new vt,$c=new T(1,0,0),jc=new T(0,1,0),Kc=new T(0,0,1),Cf={type:"added"},Qc={type:"removed"},Je=class extends $t{constructor(){super(),Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Zt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DefaultUp.clone();let e=new T,t=new xn,n=new vt,i=new T(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new gt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Je.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return Zc.copy(e).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vs.copy(e):vs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(mr,vs,this.up):hn.lookAt(vs,mr,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(hn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qc)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Qc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Je.DefaultUp=new T(0,1,0);Je.DefaultMatrixAutoUpdate=!0;Je.prototype.isObject3D=!0;var Wt=new T,dn=new T,ua=new T,fn=new T,bi=new T,wi=new T,eu=new T,ha=new T,da=new T,fa=new T,lt=class{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wt.subVectors(e,t),i.cross(Wt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Wt.subVectors(i,t),dn.subVectors(n,t),ua.subVectors(e,t);let o=Wt.dot(Wt),a=Wt.dot(dn),l=Wt.dot(ua),c=dn.dot(dn),u=dn.dot(ua),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);let d=1/h,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,fn),l.set(0,0),l.addScaledVector(s,fn.x),l.addScaledVector(o,fn.y),l.addScaledVector(a,fn.z),l}static isFrontFacing(e,t,n,i){return Wt.subVectors(n,t),dn.subVectors(e,t),Wt.cross(dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Wt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return lt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return lt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;bi.subVectors(i,n),wi.subVectors(s,n),ha.subVectors(e,n);let l=bi.dot(ha),c=wi.dot(ha);if(l<=0&&c<=0)return t.copy(n);da.subVectors(e,i);let u=bi.dot(da),h=wi.dot(da);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(bi,o);fa.subVectors(e,s);let m=bi.dot(fa),g=wi.dot(fa);if(g>=0&&m<=g)return t.copy(s);let f=m*c-l*g;if(f<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(wi,a);let p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return eu.subVectors(s,i),a=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(eu,a);let v=1/(p+f+d);return o=f*v,a=d*v,t.copy(n).addScaledVector(bi,o).addScaledVector(wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rf=0,ut=class extends $t{constructor(){super(),Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Zt(),this.name="",this.type="Material",this.fog=!0,this.blending=Bi,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ju,this.blendDst=Ku,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===$u;continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Ar&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};ut.prototype.isMaterial=!0;ut.fromType=function(){return null};var Xi=class extends ut{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};Xi.prototype.isMeshBasicMaterial=!0;var dt=new T,_s=new B,ct=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Rr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new ve),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new B),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new T),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new ae),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};ct.prototype.isBufferAttribute=!0;var $s=class extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var js=class extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ga=class extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};Ga.prototype.isFloat16BufferAttribute=!0;var ft=class extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Lf=0,Ot=new Me,pa=new Je,Mi=new T,It=new Ft,gr=new Ft,xt=new T,nt=class extends $t{constructor(){super(),Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Zt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(th(e)?js:$s)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new gt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return pa.lookAt(e),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(It.min,gr.min),It.expandByPoint(xt),xt.addVectors(It.max,gr.max),It.expandByPoint(xt)):(It.expandByPoint(gr.min),It.expandByPoint(gr.max))}It.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(xt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xt.fromBufferAttribute(a,c),l&&(Mi.fromBufferAttribute(e,c),xt.add(Mi)),i=Math.max(i,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let G=0;G<a;G++)c[G]=new T,u[G]=new T;let h=new T,d=new T,m=new T,g=new B,f=new B,p=new B,v=new T,M=new T;function A(G,_,R){h.fromArray(i,G*3),d.fromArray(i,_*3),m.fromArray(i,R*3),g.fromArray(o,G*2),f.fromArray(o,_*2),p.fromArray(o,R*2),d.sub(h),m.sub(h),f.sub(g),p.sub(g);let K=1/(f.x*p.y-p.x*f.y);!isFinite(K)||(v.copy(d).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(K),M.copy(m).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(K),c[G].add(v),c[_].add(v),c[R].add(v),u[G].add(M),u[_].add(M),u[R].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let G=0,_=E.length;G<_;++G){let R=E[G],K=R.start,D=R.count;for(let H=K,N=K+D;H<N;H+=3)A(n[H+0],n[H+1],n[H+2])}let y=new T,P=new T,O=new T,Z=new T;function fe(G){O.fromArray(s,G*3),Z.copy(O);let _=c[G];y.copy(_),y.sub(O.multiplyScalar(O.dot(_))).normalize(),P.crossVectors(Z,_);let K=P.dot(u[G])<0?-1:1;l[G*4]=y.x,l[G*4+1]=y.y,l[G*4+2]=y.z,l[G*4+3]=K}for(let G=0,_=E.length;G<_;++G){let R=E[G],K=R.start,D=R.count;for(let H=K,N=K+D;H<N;H+=3)fe(n[H+0]),fe(n[H+1]),fe(n[H+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new T,s=new T,o=new T,a=new T,l=new T,c=new T,u=new T,h=new T;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),f=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,f),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,d=c;h<u;h++,d++)o[d]=l[h]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),m=0,g=0;for(let f=0,p=l.length;f<p;f++){a.isInterleavedBufferAttribute?m=l[f]*a.data.stride+a.offset:m=l[f]*u;for(let v=0;v<u;v++)d[g++]=c[m++]}return new ct(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new nt,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}};nt.prototype.isBufferGeometry=!0;var tu=new Me,Si=new On,ma=new Fn,Cn=new T,Rn=new T,Ln=new T,ga=new T,va=new T,_a=new T,xs=new T,ys=new T,bs=new T,ws=new B,Ms=new B,Ss=new B,xa=new T,Es=new T,Re=class extends Je{constructor(e=new nt,t=new Xi){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),e.ray.intersectsSphere(ma)===!1)||(tu.copy(s).invert(),Si.copy(e.ray).applyMatrix4(tu),n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){let a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let f=0,p=m.length;f<p;f++){let v=m[f],M=i[v.materialIndex],A=Math.max(v.start,g.start),E=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let y=A,P=E;y<P;y+=3){let O=a.getX(y),Z=a.getX(y+1),fe=a.getX(y+2);o=Ts(this,M,e,Si,l,c,u,h,d,O,Z,fe),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{let f=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let v=f,M=p;v<M;v+=3){let A=a.getX(v),E=a.getX(v+1),y=a.getX(v+2);o=Ts(this,i,e,Si,l,c,u,h,d,A,E,y),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let f=0,p=m.length;f<p;f++){let v=m[f],M=i[v.materialIndex],A=Math.max(v.start,g.start),E=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let y=A,P=E;y<P;y+=3){let O=y,Z=y+1,fe=y+2;o=Ts(this,M,e,Si,l,c,u,h,d,O,Z,fe),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{let f=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let v=f,M=p;v<M;v+=3){let A=v,E=v+1,y=v+2;o=Ts(this,i,e,Si,l,c,u,h,d,A,E,y),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};Re.prototype.isMesh=!0;function Pf(r,e,t,n,i,s,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==Hi,a),l===null)return null;Es.copy(a),Es.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Es);return c<t.near||c>t.far?null:{distance:c,point:Es.clone(),object:r}}function Ts(r,e,t,n,i,s,o,a,l,c,u,h){Cn.fromBufferAttribute(i,c),Rn.fromBufferAttribute(i,u),Ln.fromBufferAttribute(i,h);let d=r.morphTargetInfluences;if(s&&d){xs.set(0,0,0),ys.set(0,0,0),bs.set(0,0,0);for(let g=0,f=s.length;g<f;g++){let p=d[g],v=s[g];p!==0&&(ga.fromBufferAttribute(v,c),va.fromBufferAttribute(v,u),_a.fromBufferAttribute(v,h),o?(xs.addScaledVector(ga,p),ys.addScaledVector(va,p),bs.addScaledVector(_a,p)):(xs.addScaledVector(ga.sub(Cn),p),ys.addScaledVector(va.sub(Rn),p),bs.addScaledVector(_a.sub(Ln),p)))}Cn.add(xs),Rn.add(ys),Ln.add(bs)}r.isSkinnedMesh&&(r.boneTransform(c,Cn),r.boneTransform(u,Rn),r.boneTransform(h,Ln));let m=Pf(r,e,t,n,Cn,Rn,Ln,xa);if(m){a&&(ws.fromBufferAttribute(a,c),Ms.fromBufferAttribute(a,u),Ss.fromBufferAttribute(a,h),m.uv=lt.getUV(xa,Cn,Rn,Ln,ws,Ms,Ss,new B)),l&&(ws.fromBufferAttribute(l,c),Ms.fromBufferAttribute(l,u),Ss.fromBufferAttribute(l,h),m.uv2=lt.getUV(xa,Cn,Rn,Ln,ws,Ms,Ss,new B));let g={a:c,b:u,c:h,normal:new T,materialIndex:0};lt.getNormal(Cn,Rn,Ln,g.normal),m.face=g}return m}var ei=class extends nt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(h,2));function g(f,p,v,M,A,E,y,P,O,Z,fe){let G=E/O,_=y/Z,R=E/2,K=y/2,D=P/2,H=O+1,N=Z+1,V=0,L=0,X=new T;for(let j=0;j<N;j++){let ie=j*_-K;for(let Q=0;Q<H;Q++){let xe=Q*G-R;X[f]=xe*M,X[p]=ie*A,X[v]=D,c.push(X.x,X.y,X.z),X[f]=0,X[p]=0,X[v]=P>0?1:-1,u.push(X.x,X.y,X.z),h.push(Q/O),h.push(1-j/Z),V+=1}}for(let j=0;j<Z;j++)for(let ie=0;ie<O;ie++){let Q=d+ie+H*j,xe=d+ie+H*(j+1),Ne=d+(ie+1)+H*(j+1),Te=d+(ie+1)+H*j;l.push(Q,xe,Te),l.push(xe,Ne,Te),L+=6}a.addGroup(m,L,fe),m+=L,d+=V}}static fromJSON(e){return new ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Yi(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Et(r){let e={};for(let t=0;t<r.length;t++){let n=Yi(r[t]);for(let i in n)e[i]=n[i]}return e}var Df={clone:Yi,merge:Et},If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fe=class extends ut{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=If,this.fragmentShader=Ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};Fe.prototype.isShaderMaterial=!0;var Dr=class extends Je{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};Dr.prototype.isCamera=!0;var bt=class extends Dr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ko*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};bt.prototype.isPerspectiveCamera=!0;var Ei=90,Ti=1,Ir=class extends Je{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new bt(Ei,Ti,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new T(1,0,0)),this.add(i);let s=new bt(Ei,Ti,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new T(-1,0,0)),this.add(s);let o=new bt(Ei,Ti,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new T(0,1,0)),this.add(o);let a=new bt(Ei,Ti,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new T(0,-1,0)),this.add(a);let l=new bt(Ei,Ti,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new T(0,0,1)),this.add(l);let c=new bt(Ei,Ti,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new T(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.outputEncoding,d=e.toneMapping,m=e.xr.enabled;e.outputEncoding=vn,e.toneMapping=gn,e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.outputEncoding=h,e.toneMapping=d,e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ji=class extends pt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Vi,super(e,t,n,i,s,o,a,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Ji.prototype.isCubeTexture=!0;var Ks=class extends Ct{constructor(e,t={}){super(e,e,t);let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ji(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ei(5,5,5),s=new Fe({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Dn});s.uniforms.tEquirect.value=t;let o=new Re(i,s),a=t.minFilter;return t.minFilter===Co&&(t.minFilter=Lt),new Ir(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}};Ks.prototype.isWebGLCubeRenderTarget=!0;var ya=new T,Of=new T,zf=new gt,qt=class{constructor(e=new T(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ya.subVectors(n,t).cross(Of.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(ya),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zf.getNormalMatrix(e),i=this.coplanarPoint(ya).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};qt.prototype.isPlane=!0;var Ai=new Fn,As=new T,Zi=class{constructor(e=new qt,t=new qt,n=new qt,i=new qt,s=new qt,o=new qt){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],f=n[11],p=n[12],v=n[13],M=n[14],A=n[15];return t[0].setComponents(a-i,h-l,f-d,A-p).normalize(),t[1].setComponents(a+i,h+l,f+d,A+p).normalize(),t[2].setComponents(a+s,h+c,f+m,A+v).normalize(),t[3].setComponents(a-s,h-c,f-m,A-v).normalize(),t[4].setComponents(a-o,h-u,f-g,A-M).normalize(),t[5].setComponents(a+o,h+u,f+g,A+M).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(As.x=i.normal.x>0?e.max.x:e.min.x,As.y=i.normal.y>0?e.max.y:e.min.y,As.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ih(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Nf(r,e){let t=e.isWebGL2,n=new WeakMap;function i(c,u){let h=c.array,d=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){let d=u.array,m=u.updateRange;r.bindBuffer(h,c),m.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}var Ge=class extends nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,m=[],g=[],f=[],p=[];for(let v=0;v<u;v++){let M=v*d-o;for(let A=0;A<c;A++){let E=A*h-s;g.push(E,-M,0),f.push(0,0,1),p.push(A/a),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let M=0;M<a;M++){let A=M+c*v,E=M+c*(v+1),y=M+1+c*(v+1),P=M+1+c*v;m.push(A,E,P),m.push(E,y,P)}this.setIndex(m),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(p,2))}static fromJSON(e){return new Ge(e.width,e.height,e.widthSegments,e.heightSegments)}},Bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wf="vec3 transformed = vec3( position );",qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Yf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,np=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",up=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,bp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Sp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ep=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ap=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Lp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Pp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,$p=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,mm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,_m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Em=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Tm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Am=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Cm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Rm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Lm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Pm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,km=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ng=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ag=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,cg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ke={alphamap_fragment:Bf,alphamap_pars_fragment:Uf,alphatest_fragment:kf,alphatest_pars_fragment:Hf,aomap_fragment:Vf,aomap_pars_fragment:Gf,begin_vertex:Wf,beginnormal_vertex:qf,bsdfs:Xf,bumpmap_pars_fragment:Yf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:$f,clipping_planes_vertex:jf,color_fragment:Kf,color_pars_fragment:Qf,color_pars_vertex:ep,color_vertex:tp,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:rp,displacementmap_pars_vertex:sp,displacementmap_vertex:op,emissivemap_fragment:ap,emissivemap_pars_fragment:lp,encodings_fragment:cp,encodings_pars_fragment:up,envmap_fragment:hp,envmap_common_pars_fragment:dp,envmap_pars_fragment:fp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:Ep,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:vp,fog_fragment:_p,fog_pars_fragment:xp,gradientmap_pars_fragment:yp,lightmap_fragment:bp,lightmap_pars_fragment:wp,lights_lambert_vertex:Mp,lights_pars_begin:Sp,lights_toon_fragment:Tp,lights_toon_pars_fragment:Ap,lights_phong_fragment:Cp,lights_phong_pars_fragment:Rp,lights_physical_fragment:Lp,lights_physical_pars_fragment:Pp,lights_fragment_begin:Dp,lights_fragment_maps:Ip,lights_fragment_end:Fp,logdepthbuf_fragment:Op,logdepthbuf_pars_fragment:zp,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:Bp,map_fragment:Up,map_pars_fragment:kp,map_particle_fragment:Hp,map_particle_pars_fragment:Vp,metalnessmap_fragment:Gp,metalnessmap_pars_fragment:Wp,morphcolor_vertex:qp,morphnormal_vertex:Xp,morphtarget_pars_vertex:Yp,morphtarget_vertex:Jp,normal_fragment_begin:Zp,normal_fragment_maps:$p,normal_pars_fragment:jp,normal_pars_vertex:Kp,normal_vertex:Qp,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:tm,clearcoat_normal_fragment_maps:nm,clearcoat_pars_fragment:im,output_fragment:rm,packing:sm,premultiplied_alpha_fragment:om,project_vertex:am,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:um,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:fm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:vm,skinning_vertex:_m,skinnormal_vertex:xm,specularmap_fragment:ym,specularmap_pars_fragment:bm,tonemapping_fragment:wm,tonemapping_pars_fragment:Mm,transmission_fragment:Sm,transmission_pars_fragment:Em,uv_pars_fragment:Tm,uv_pars_vertex:Am,uv_vertex:Cm,uv2_pars_fragment:Rm,uv2_pars_vertex:Lm,uv2_vertex:Pm,worldpos_vertex:Dm,background_vert:Im,background_frag:Fm,cube_vert:Om,cube_frag:zm,depth_vert:Nm,depth_frag:Bm,distanceRGBA_vert:Um,distanceRGBA_frag:km,equirect_vert:Hm,equirect_frag:Vm,linedashed_vert:Gm,linedashed_frag:Wm,meshbasic_vert:qm,meshbasic_frag:Xm,meshlambert_vert:Ym,meshlambert_frag:Jm,meshmatcap_vert:Zm,meshmatcap_frag:$m,meshnormal_vert:jm,meshnormal_frag:Km,meshphong_vert:Qm,meshphong_frag:eg,meshphysical_vert:tg,meshphysical_frag:ng,meshtoon_vert:ig,meshtoon_frag:rg,points_vert:sg,points_frag:og,shadow_vert:ag,shadow_frag:lg,sprite_vert:cg,sprite_frag:ug},ue={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new gt},uv2Transform:{value:new gt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gt}}},sn={basic:{uniforms:Et([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Et([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.fog,ue.lights,{emissive:{value:new ve(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Et([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Et([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Et([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ve(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Et([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Et([ue.points,ue.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Et([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Et([ue.common,ue.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Et([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Et([ue.sprite,ue.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},cube:{uniforms:Et([ue.envmap,{opacity:{value:1}}]),vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Et([ue.common,ue.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Et([ue.lights,ue.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};sn.physical={uniforms:Et([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new B(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};function hg(r,e,t,n,i,s){let o=new ve(0),a=i===!0?0:1,l,c,u=null,h=0,d=null;function m(f,p){let v=!1,M=p.isScene===!0?p.background:null;M&&M.isTexture&&(M=e.get(M));let A=r.xr,E=A.getSession&&A.getSession();E&&E.environmentBlendMode==="additive"&&(M=null),M===null?g(o,a):M&&M.isColor&&(g(M,1),v=!0),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ao)?(c===void 0&&(c=new Re(new ei(1,1,1),new Fe({name:"BackgroundCubeMaterial",uniforms:Yi(sn.cube.uniforms),vertexShader:sn.cube.vertexShader,fragmentShader:sn.cube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,(u!==M||h!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=r.toneMapping),f.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Re(new Ge(2,2),new Fe({name:"BackgroundMaterial",uniforms:Yi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=r.toneMapping),f.unshift(l,l.geometry,l.material,0,0,null))}function g(f,p){t.buffers.color.setClear(f.r,f.g,f.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(f){a=f,g(o,a)},render:m}}function dg(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null),c=l,u=!1;function h(D,H,N,V,L){let X=!1;if(o){let j=f(V,N,H);c!==j&&(c=j,m(c.object)),X=v(V,L),X&&M(V,L)}else{let j=H.wireframe===!0;(c.geometry!==V.id||c.program!==N.id||c.wireframe!==j)&&(c.geometry=V.id,c.program=N.id,c.wireframe=j,X=!0)}D.isInstancedMesh===!0&&(X=!0),L!==null&&t.update(L,34963),(X||u)&&(u=!1,Z(D,H,N,V),L!==null&&r.bindBuffer(34963,t.get(L).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function f(D,H,N){let V=N.wireframe===!0,L=a[D.id];L===void 0&&(L={},a[D.id]=L);let X=L[H.id];X===void 0&&(X={},L[H.id]=X);let j=X[V];return j===void 0&&(j=p(d()),X[V]=j),j}function p(D){let H=[],N=[],V=[];for(let L=0;L<i;L++)H[L]=0,N[L]=0,V[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:N,attributeDivisors:V,object:D,attributes:{},index:null}}function v(D,H){let N=c.attributes,V=D.attributes,L=0;for(let X in V){let j=N[X],ie=V[X];if(j===void 0||j.attribute!==ie||j.data!==ie.data)return!0;L++}return c.attributesNum!==L||c.index!==H}function M(D,H){let N={},V=D.attributes,L=0;for(let X in V){let j=V[X],ie={};ie.attribute=j,j.data&&(ie.data=j.data),N[X]=ie,L++}c.attributes=N,c.attributesNum=L,c.index=H}function A(){let D=c.newAttributes;for(let H=0,N=D.length;H<N;H++)D[H]=0}function E(D){y(D,0)}function y(D,H){let N=c.newAttributes,V=c.enabledAttributes,L=c.attributeDivisors;N[D]=1,V[D]===0&&(r.enableVertexAttribArray(D),V[D]=1),L[D]!==H&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),L[D]=H)}function P(){let D=c.newAttributes,H=c.enabledAttributes;for(let N=0,V=H.length;N<V;N++)H[N]!==D[N]&&(r.disableVertexAttribArray(N),H[N]=0)}function O(D,H,N,V,L,X){n.isWebGL2===!0&&(N===5124||N===5125)?r.vertexAttribIPointer(D,H,N,L,X):r.vertexAttribPointer(D,H,N,V,L,X)}function Z(D,H,N,V){if(n.isWebGL2===!1&&(D.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();let L=V.attributes,X=N.getAttributes(),j=H.defaultAttributeValues;for(let ie in X){let Q=X[ie];if(Q.location>=0){let xe=L[ie];if(xe===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),xe!==void 0){let Ne=xe.normalized,Te=xe.itemSize,q=t.get(xe);if(q===void 0)continue;let Xe=q.buffer,Pe=q.type,Le=q.bytesPerElement;if(xe.isInterleavedBufferAttribute){let se=xe.data,ze=se.stride,W=xe.offset;if(se.isInstancedInterleavedBuffer){for(let Y=0;Y<Q.locationSize;Y++)y(Q.location+Y,se.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Y=0;Y<Q.locationSize;Y++)E(Q.location+Y);r.bindBuffer(34962,Xe);for(let Y=0;Y<Q.locationSize;Y++)O(Q.location+Y,Te/Q.locationSize,Pe,Ne,ze*Le,(W+Te/Q.locationSize*Y)*Le)}else{if(xe.isInstancedBufferAttribute){for(let se=0;se<Q.locationSize;se++)y(Q.location+se,xe.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let se=0;se<Q.locationSize;se++)E(Q.location+se);r.bindBuffer(34962,Xe);for(let se=0;se<Q.locationSize;se++)O(Q.location+se,Te/Q.locationSize,Pe,Ne,Te*Le,Te/Q.locationSize*se*Le)}}else if(j!==void 0){let Ne=j[ie];if(Ne!==void 0)switch(Ne.length){case 2:r.vertexAttrib2fv(Q.location,Ne);break;case 3:r.vertexAttrib3fv(Q.location,Ne);break;case 4:r.vertexAttrib4fv(Q.location,Ne);break;default:r.vertexAttrib1fv(Q.location,Ne)}}}}P()}function fe(){R();for(let D in a){let H=a[D];for(let N in H){let V=H[N];for(let L in V)g(V[L].object),delete V[L];delete H[N]}delete a[D]}}function G(D){if(a[D.id]===void 0)return;let H=a[D.id];for(let N in H){let V=H[N];for(let L in V)g(V[L].object),delete V[L];delete H[N]}delete a[D.id]}function _(D){for(let H in a){let N=a[H];if(N[D.id]===void 0)continue;let V=N[D.id];for(let L in V)g(V[L].object),delete V[L];delete N[D.id]}}function R(){K(),u=!0,c!==l&&(c=l,m(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:R,resetDefaultState:K,dispose:fe,releaseStatesOfGeometry:G,releaseStatesOfProgram:_,initAttributes:A,enableAttribute:E,disableUnusedAttributes:P}}function fg(r,e,t,n){let i=n.isWebGL2,s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function pg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(O){if(O==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),f=r.getParameter(34921),p=r.getParameter(36347),v=r.getParameter(36348),M=r.getParameter(36349),A=d>0,E=o||e.has("OES_texture_float"),y=A&&E,P=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:A,floatFragmentTextures:E,floatVertexTextures:y,maxSamples:P}}function mg(r){let e=this,t=null,n=0,i=!1,s=!1,o=new qt,a=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){let g=h.length!==0||d||n!==0||i;return i=d,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,m){let g=h.clippingPlanes,f=h.clipIntersection,p=h.clipShadows,v=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{let M=s?0:n,A=M*4,E=v.clippingState||null;l.value=E,E=u(g,d,A,m);for(let y=0;y!==A;++y)E[y]=t[y];v.clippingState=E,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){let f=h!==null?h.length:0,p=null;if(f!==0){if(p=l.value,g!==!0||p===null){let v=m+f*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<v)&&(p=new Float32Array(v));for(let A=0,E=m;A!==f;++A,E+=4)o.copy(h[A]).applyMatrix4(M,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,p}}function gg(r){let e=new WeakMap;function t(o,a){return a===Ia?o.mapping=Vi:a===Fa&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===Ia||a===Fa)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ks(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Fr=class extends Dr{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};Fr.prototype.isOrthographicCamera=!0;var zi=4,nu=[.125,.215,.35,.446,.526,.582],Jn=20,ba=new Fr,iu=new ve,wa=null,Yn=(1+Math.sqrt(5))/2,Ci=1/Yn,ru=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Yn,Ci),new T(0,Yn,-Ci),new T(Ci,0,Yn),new T(-Ci,0,Yn),new T(Yn,Ci,0),new T(-Yn,Ci,0)],Qs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){wa=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wa),e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize-32,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Ui,format:Yt,encoding:vn,depthBuffer:!1},i=su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vg(s)),this._blurMaterial=_g(s,e,t)}return i}_compileMaterial(e){let t=new Re(this._lodPlanes[0],e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,n,i){let a=new bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(iu),u.toneMapping=gn,u.autoClear=!1;let m=new Xi({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new Re(new ei,m),f=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,f=!0):(m.color.copy(iu),f=!0);for(let v=0;v<6;v++){let M=v%3;M===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):M===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));let A=this._cubeSize;Cs(i,M*A,v>2?A:0,A,A),u.setRenderTarget(i),f&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Vi||e.mapping===Gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ba)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ru[(i-1)%ru.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Re(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),f=s/g,p=isFinite(s)?1+Math.floor(u*f):Jn;p>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Jn}`);let v=[],M=0;for(let O=0;O<Jn;++O){let Z=O/f,fe=Math.exp(-Z*Z/2);v.push(fe),O===0?M+=fe:O<p&&(M+=2*fe)}for(let O=0;O<v.length;O++)v[O]=v[O]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-n;let E=this._sizeLods[i],y=3*E*(i>A-zi?i-A+zi:0),P=4*(this._cubeSize-E);Cs(t,y,P,3*E,2*E),l.setRenderTarget(t),l.render(h,ba)}};function vg(r){let e=[],t=[],n=[],i=r,s=r-zi+1+nu.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-zi?l=nu[o-r+zi-1]:o===0&&(l=0),n.push(l);let c=1/(a-1),u=-c/2,h=1+c/2,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,f=3,p=2,v=1,M=new Float32Array(f*g*m),A=new Float32Array(p*g*m),E=new Float32Array(v*g*m);for(let P=0;P<m;P++){let O=P%3*2/3-1,Z=P>2?0:-1,fe=[O,Z,0,O+2/3,Z,0,O+2/3,Z+1,0,O,Z,0,O+2/3,Z+1,0,O,Z+1,0];M.set(fe,f*g*P),A.set(d,p*g*P);let G=[P,P,P,P,P,P];E.set(G,v*g*P)}let y=new nt;y.setAttribute("position",new ct(M,f)),y.setAttribute("uv",new ct(A,p)),y.setAttribute("faceIndex",new ct(E,v)),e.push(y),i>zi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function su(r,e,t){let n=new Ct(r,e,t);return n.texture.mapping=Ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function _g(r,e,t){let n=new Float32Array(Jn),i=new T(0,1,0);return new Fe({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ou(){return new Fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function au(){return new Fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xg(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ia||l===Fa,u=l===Vi||l===Gi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Qs(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Qs(r));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function yg(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bg(r,e,t,n){let i={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],34962);let m=h.morphAttributes;for(let g in m){let f=m[g];for(let p=0,v=f.length;p<v;p++)e.update(f[p],34962)}}function c(h){let d=[],m=h.index,g=h.attributes.position,f=0;if(m!==null){let M=m.array;f=m.version;for(let A=0,E=M.length;A<E;A+=3){let y=M[A+0],P=M[A+1],O=M[A+2];d.push(y,P,P,O,O,y)}}else{let M=g.array;f=g.version;for(let A=0,E=M.length/3-1;A<E;A+=3){let y=A+0,P=A+1,O=A+2;d.push(y,P,P,O,O,y)}}let p=new(th(d)?js:$s)(d,1);p.version=f;let v=s.get(h);v&&e.remove(v),s.set(h,p)}function u(h){let d=s.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function wg(r,e,t,n){let i=n.isWebGL2,s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,m){r.drawElements(s,m,a,d*l),t.update(m,s,1)}function h(d,m,g){if(g===0)return;let f,p;if(i)f=r,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,m,a,d*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Mg(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Sg(r,e){return r[0]-e[0]}function Eg(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Ma(r,e){let t=1,n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function Tg(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,o=new ae,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){let m=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=g!==void 0?g.length:0,p=s.get(u);if(p===void 0||p.count!==f){let H=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",H)};p!==void 0&&p.texture.dispose();let A=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],O=u.morphAttributes.normal||[],Z=u.morphAttributes.color||[],fe=0;A===!0&&(fe=1),E===!0&&(fe=2),y===!0&&(fe=3);let G=u.attributes.position.count*fe,_=1;G>e.maxTextureSize&&(_=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);let R=new Float32Array(G*_*4*f),K=new qi(R,G,_,f);K.type=Zn,K.needsUpdate=!0;let D=fe*4;for(let N=0;N<f;N++){let V=P[N],L=O[N],X=Z[N],j=G*_*4*N;for(let ie=0;ie<V.count;ie++){let Q=ie*D;A===!0&&(o.fromBufferAttribute(V,ie),V.normalized===!0&&Ma(o,V),R[j+Q+0]=o.x,R[j+Q+1]=o.y,R[j+Q+2]=o.z,R[j+Q+3]=0),E===!0&&(o.fromBufferAttribute(L,ie),L.normalized===!0&&Ma(o,L),R[j+Q+4]=o.x,R[j+Q+5]=o.y,R[j+Q+6]=o.z,R[j+Q+7]=0),y===!0&&(o.fromBufferAttribute(X,ie),X.normalized===!0&&Ma(o,X),R[j+Q+8]=o.x,R[j+Q+9]=o.y,R[j+Q+10]=o.z,R[j+Q+11]=X.itemSize===4?o.w:1)}}p={count:f,texture:K,size:new B(G,_)},s.set(u,p),u.addEventListener("dispose",H)}let v=0;for(let A=0;A<m.length;A++)v+=m[A];let M=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{let g=m===void 0?0:m.length,f=n[u.id];if(f===void 0||f.length!==g){f=[];for(let E=0;E<g;E++)f[E]=[E,0];n[u.id]=f}for(let E=0;E<g;E++){let y=f[E];y[0]=E,y[1]=m[E]}f.sort(Eg);for(let E=0;E<8;E++)E<g&&f[E][1]?(a[E][0]=f[E][0],a[E][1]=f[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(Sg);let p=u.morphAttributes.position,v=u.morphAttributes.normal,M=0;for(let E=0;E<8;E++){let y=a[E],P=y[0],O=y[1];P!==Number.MAX_SAFE_INTEGER&&O?(p&&u.getAttribute("morphTarget"+E)!==p[P]&&u.setAttribute("morphTarget"+E,p[P]),v&&u.getAttribute("morphNormal"+E)!==v[P]&&u.setAttribute("morphNormal"+E,v[P]),i[E]=O,M+=O):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),v&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),i[E]=0)}let A=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(r,"morphTargetBaseInfluence",A),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Ag(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var rh=new pt,sh=new qi,oh=new Pr,ah=new Ji,lu=[],cu=[],uu=new Float32Array(16),hu=new Float32Array(9),du=new Float32Array(4);function rr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=lu[i];if(s===void 0&&(s=new Float32Array(i),lu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Rt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Tt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ro(r,e){let t=cu[e];t===void 0&&(t=new Int32Array(e),cu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Cg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Rg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2fv(this.addr,e),Tt(t,e)}}function Lg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;r.uniform3fv(this.addr,e),Tt(t,e)}}function Pg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4fv(this.addr,e),Tt(t,e)}}function Dg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Rt(t,n))return;du.set(n),r.uniformMatrix2fv(this.addr,!1,du),Tt(t,n)}}function Ig(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Rt(t,n))return;hu.set(n),r.uniformMatrix3fv(this.addr,!1,hu),Tt(t,n)}}function Fg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Rt(t,n))return;uu.set(n),r.uniformMatrix4fv(this.addr,!1,uu),Tt(t,n)}}function Og(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function zg(r,e){let t=this.cache;Rt(t,e)||(r.uniform2iv(this.addr,e),Tt(t,e))}function Ng(r,e){let t=this.cache;Rt(t,e)||(r.uniform3iv(this.addr,e),Tt(t,e))}function Bg(r,e){let t=this.cache;Rt(t,e)||(r.uniform4iv(this.addr,e),Tt(t,e))}function Ug(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function kg(r,e){let t=this.cache;Rt(t,e)||(r.uniform2uiv(this.addr,e),Tt(t,e))}function Hg(r,e){let t=this.cache;Rt(t,e)||(r.uniform3uiv(this.addr,e),Tt(t,e))}function Vg(r,e){let t=this.cache;Rt(t,e)||(r.uniform4uiv(this.addr,e),Tt(t,e))}function Gg(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||rh,i)}function Wg(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||oh,i)}function qg(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ah,i)}function Xg(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||sh,i)}function Yg(r){switch(r){case 5126:return Cg;case 35664:return Rg;case 35665:return Lg;case 35666:return Pg;case 35674:return Dg;case 35675:return Ig;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return zg;case 35668:case 35672:return Ng;case 35669:case 35673:return Bg;case 5125:return Ug;case 36294:return kg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Xg}}function Jg(r,e){r.uniform1fv(this.addr,e)}function Zg(r,e){let t=rr(e,this.size,2);r.uniform2fv(this.addr,t)}function $g(r,e){let t=rr(e,this.size,3);r.uniform3fv(this.addr,t)}function jg(r,e){let t=rr(e,this.size,4);r.uniform4fv(this.addr,t)}function Kg(r,e){let t=rr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Qg(r,e){let t=rr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function e0(r,e){let t=rr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function t0(r,e){r.uniform1iv(this.addr,e)}function n0(r,e){r.uniform2iv(this.addr,e)}function i0(r,e){r.uniform3iv(this.addr,e)}function r0(r,e){r.uniform4iv(this.addr,e)}function s0(r,e){r.uniform1uiv(this.addr,e)}function o0(r,e){r.uniform2uiv(this.addr,e)}function a0(r,e){r.uniform3uiv(this.addr,e)}function l0(r,e){r.uniform4uiv(this.addr,e)}function c0(r,e,t){let n=e.length,i=Ro(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||rh,i[s])}function u0(r,e,t){let n=e.length,i=Ro(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||oh,i[s])}function h0(r,e,t){let n=e.length,i=Ro(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||ah,i[s])}function d0(r,e,t){let n=e.length,i=Ro(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||sh,i[s])}function f0(r){switch(r){case 5126:return Jg;case 35664:return Zg;case 35665:return $g;case 35666:return jg;case 35674:return Kg;case 35675:return Qg;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return r0;case 5125:return s0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return d0}}function p0(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=Yg(e.type)}function lh(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=f0(e.type)}lh.prototype.updateCache=function(r){let e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),Tt(e,r)};function ch(r){this.id=r,this.seq=[],this.map={}}ch.prototype.setValue=function(r,e,t){let n=this.seq;for(let i=0,s=n.length;i!==s;++i){let o=n[i];o.setValue(r,e[o.id],t)}};var Sa=/(\w+)(\])?(\[|\.)?/g;function fu(r,e){r.seq.push(e),r.map[e.id]=e}function m0(r,e,t){let n=r.name,i=n.length;for(Sa.lastIndex=0;;){let s=Sa.exec(n),o=Sa.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){fu(t,c===void 0?new p0(a,r,e):new lh(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new ch(a),fu(t,h)),t=h}}}function In(r,e){this.seq=[],this.map={};let t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){let i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);m0(i,s,this)}}In.prototype.setValue=function(r,e,t,n){let i=this.map[e];i!==void 0&&i.setValue(r,t,n)};In.prototype.setOptional=function(r,e,t){let n=e[t];n!==void 0&&this.setValue(r,t,n)};In.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){let o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}};In.seqWithValue=function(r,e){let t=[];for(let n=0,i=r.length;n!==i;++n){let s=r[n];s.id in e&&t.push(s)}return t};function pu(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var g0=0;function v0(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++)n.push(o+1+": "+t[o]);return n.join(`
`)}function _0(r){switch(r){case vn:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function mu(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=parseInt(/ERROR: 0:(\d+)/.exec(i)[1]);return t.toUpperCase()+`

`+i+`

`+v0(r.getShaderSource(e),s)}function x0(r,e){let t=_0(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function y0(r,e){let t;switch(e){case Wd:t="Linear";break;case qd:t="Reinhard";break;case Xd:t="OptimizedCineon";break;case Yd:t="ACESFilmic";break;case Jd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function b0(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mr).join(`
`)}function w0(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M0(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Mr(r){return r!==""}function gu(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(r){return r.replace(S0,E0)}function E0(r,e){let t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Wa(t)}var T0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(r){return r.replace(A0,uh).replace(T0,C0)}function C0(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),uh(r,e,t,n)}function uh(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xu(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function R0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===wd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wr&&(e="SHADOWMAP_TYPE_VSM"),e}function L0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vi:case Gi:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function P0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function D0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case To:e="ENVMAP_BLENDING_MULTIPLY";break;case Vd:e="ENVMAP_BLENDING_MIX";break;case Gd:e="ENVMAP_BLENDING_ADD";break}return e}function I0(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e/32+1)+3,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function F0(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=R0(t),c=L0(t),u=P0(t),h=D0(t),d=I0(t),m=t.isWebGL2?"":b0(t),g=w0(s),f=i.createProgram(),p,v,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Mr).join(`
`),p.length>0&&(p+=`
`),v=[m,g].filter(Mr).join(`
`),v.length>0&&(v+=`
`)):(p=[xu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),v=[m,xu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?ke.tonemapping_pars_fragment:"",t.toneMapping!==gn?y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,x0("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),o=Wa(o),o=gu(o,t),o=vu(o,t),a=Wa(a),a=gu(a,t),a=vu(a,t),o=_u(o),a=_u(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let A=M+p+o,E=M+v+a,y=pu(i,35633,A),P=pu(i,35632,E);if(i.attachShader(f,y),i.attachShader(f,P),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),r.debug.checkShaderErrors){let fe=i.getProgramInfoLog(f).trim(),G=i.getShaderInfoLog(y).trim(),_=i.getShaderInfoLog(P).trim(),R=!0,K=!0;if(i.getProgramParameter(f,35714)===!1){R=!1;let D=mu(i,y,"vertex"),H=mu(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+fe+`
`+D+`
`+H)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(G===""||_==="")&&(K=!1);K&&(this.diagnostics={runnable:R,programLog:fe,vertexShader:{log:G,prefix:p},fragmentShader:{log:_,prefix:v}})}i.deleteShader(y),i.deleteShader(P);let O;this.getUniforms=function(){return O===void 0&&(O=new In(i,f)),O};let Z;return this.getAttributes=function(){return Z===void 0&&(Z=M0(i,f)),Z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=g0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=y,this.fragmentShader=P,this}var O0=0,qa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){let t=this.shaderCache;if(t.has(e)===!1){let n=new Xa(e);t.set(e,n)}return t.get(e)}},Xa=class{constructor(e){this.id=O0++,this.code=e,this.usedTimes=0}};function z0(r,e,t,n,i,s,o){let a=new Zs,l=new qa,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.floatVertexTextures,m=i.maxVertexUniforms,g=i.vertexTextures,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){let K=_.skeleton.bones;if(d)return 1024;{let H=Math.floor((m-20)/4),N=Math.min(H,K.length);return N<K.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+K.length+" bones. This GPU supports "+N+"."),0):N}}function M(_,R,K,D,H){let N=D.fog,V=H.geometry,L=_.isMeshStandardMaterial?D.environment:null,X=(_.isMeshStandardMaterial?t:e).get(_.envMap||L),j=!!X&&X.mapping===Ao?X.image.height:null,ie=p[_.type],Q=H.isSkinnedMesh?v(H):0;_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let xe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ne=xe!==void 0?xe.length:0,Te=0;V.morphAttributes.position!==void 0&&(Te=1),V.morphAttributes.normal!==void 0&&(Te=2),V.morphAttributes.color!==void 0&&(Te=3);let q,Xe,Pe,Le;if(ie){let ne=sn[ie];q=ne.vertexShader,Xe=ne.fragmentShader}else q=_.vertexShader,Xe=_.fragmentShader,l.update(_),Pe=l.getVertexShaderID(_),Le=l.getFragmentShaderID(_);let se=r.getRenderTarget(),ze=_.alphaTest>0,W=_.clearcoat>0;return{isWebGL2:u,shaderID:ie,shaderName:_.type,vertexShader:q,fragmentShader:Xe,defines:_.defines,customVertexShaderID:Pe,customFragmentShaderID:Le,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:g,outputEncoding:se===null?r.outputEncoding:se.isXRRenderTarget===!0?se.texture.encoding:vn,map:!!_.map,matcap:!!_.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:j,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===_f,tangentSpaceNormalMap:_.normalMapType===ir,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===rt,clearcoat:W,clearcoatMap:W&&!!_.clearcoatMap,clearcoatRoughnessMap:W&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:W&&!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Bi,alphaMap:!!_.alphaMap,alphaTest:ze,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!V.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!N,useFog:_.fog,fogExp2:N&&N.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0&&Q>0,maxBones:Q,useVertexTexture:d,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&K.length>0,shadowMapType:r.shadowMap.type,toneMapping:_.toneMapped?r.toneMapping:gn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Hi,flipSided:_.side===Jt,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function A(_){let R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(let K in _.defines)R.push(K),R.push(_.defines[K]);return _.isRawShaderMaterial===!1&&(E(R,_),y(R,_),R.push(r.outputEncoding)),R.push(_.customProgramCacheKey),R.join()}function E(_,R){_.push(R.precision),_.push(R.outputEncoding),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.combine),_.push(R.vertexUvs),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.maxBones),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection)}function y(_,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.map&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.lightMap&&a.enable(7),R.aoMap&&a.enable(8),R.emissiveMap&&a.enable(9),R.bumpMap&&a.enable(10),R.normalMap&&a.enable(11),R.objectSpaceNormalMap&&a.enable(12),R.tangentSpaceNormalMap&&a.enable(13),R.clearcoat&&a.enable(14),R.clearcoatMap&&a.enable(15),R.clearcoatRoughnessMap&&a.enable(16),R.clearcoatNormalMap&&a.enable(17),R.displacementMap&&a.enable(18),R.specularMap&&a.enable(19),R.roughnessMap&&a.enable(20),R.metalnessMap&&a.enable(21),R.gradientMap&&a.enable(22),R.alphaMap&&a.enable(23),R.alphaTest&&a.enable(24),R.vertexColors&&a.enable(25),R.vertexAlphas&&a.enable(26),R.vertexUvs&&a.enable(27),R.vertexTangents&&a.enable(28),R.uvsVertexOnly&&a.enable(29),R.fog&&a.enable(30),_.push(a.mask),a.disableAll(),R.useFog&&a.enable(0),R.flatShading&&a.enable(1),R.logarithmicDepthBuffer&&a.enable(2),R.skinning&&a.enable(3),R.useVertexTexture&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.physicallyCorrectLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.depthPacking&&a.enable(13),R.dithering&&a.enable(14),R.specularIntensityMap&&a.enable(15),R.specularColorMap&&a.enable(16),R.transmission&&a.enable(17),R.transmissionMap&&a.enable(18),R.thicknessMap&&a.enable(19),R.sheen&&a.enable(20),R.sheenColorMap&&a.enable(21),R.sheenRoughnessMap&&a.enable(22),R.decodeVideoTexture&&a.enable(23),R.opaque&&a.enable(24),_.push(a.mask)}function P(_){let R=p[_.type],K;if(R){let D=sn[R];K=Df.clone(D.uniforms)}else K=_.uniforms;return K}function O(_,R){let K;for(let D=0,H=c.length;D<H;D++){let N=c[D];if(N.cacheKey===R){K=N,++K.usedTimes;break}}return K===void 0&&(K=new F0(r,R,_,s),c.push(K)),K}function Z(_){if(--_.usedTimes===0){let R=c.indexOf(_);c[R]=c[c.length-1],c.pop(),_.destroy()}}function fe(_){l.remove(_)}function G(){l.dispose()}return{getParameters:M,getProgramCacheKey:A,getUniforms:P,acquireProgram:O,releaseProgram:Z,releaseShaderCache:fe,programs:c,dispose:G}}function N0(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function B0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function yu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bu(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,m,g,f,p){let v=r[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:f,group:p},r[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=m,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=f,v.group=p),e++,v}function a(h,d,m,g,f,p){let v=o(h,d,m,g,f,p);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}function l(h,d,m,g,f,p){let v=o(h,d,m,g,f,p);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function c(h,d){t.length>1&&t.sort(h||B0),n.length>1&&n.sort(d||yu),i.length>1&&i.sort(d||yu)}function u(){for(let h=e,d=r.length;h<d;h++){let m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function U0(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new bu,r.set(n,[s])):i>=r.get(n).length?(s=new bu,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function k0(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new ve};break;case"SpotLight":t={position:new T,direction:new T,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new T,halfWidth:new T,halfHeight:new T};break}return r[e.id]=t,t}}}function H0(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var V0=0;function G0(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function W0(r,e){let t=new k0,n=H0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new T);let s=new T,o=new Me,a=new Me;function l(u,h){let d=0,m=0,g=0;for(let fe=0;fe<9;fe++)i.probe[fe].set(0,0,0);let f=0,p=0,v=0,M=0,A=0,E=0,y=0,P=0;u.sort(G0);let O=h!==!0?Math.PI:1;for(let fe=0,G=u.length;fe<G;fe++){let _=u[fe],R=_.color,K=_.intensity,D=_.distance,H=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)d+=R.r*K*O,m+=R.g*K*O,g+=R.b*K*O;else if(_.isLightProbe)for(let N=0;N<9;N++)i.probe[N].addScaledVector(_.sh.coefficients[N],K);else if(_.isDirectionalLight){let N=t.get(_);if(N.color.copy(_.color).multiplyScalar(_.intensity*O),_.castShadow){let V=_.shadow,L=n.get(_);L.shadowBias=V.bias,L.shadowNormalBias=V.normalBias,L.shadowRadius=V.radius,L.shadowMapSize=V.mapSize,i.directionalShadow[f]=L,i.directionalShadowMap[f]=H,i.directionalShadowMatrix[f]=_.shadow.matrix,E++}i.directional[f]=N,f++}else if(_.isSpotLight){let N=t.get(_);if(N.position.setFromMatrixPosition(_.matrixWorld),N.color.copy(R).multiplyScalar(K*O),N.distance=D,N.coneCos=Math.cos(_.angle),N.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),N.decay=_.decay,_.castShadow){let V=_.shadow,L=n.get(_);L.shadowBias=V.bias,L.shadowNormalBias=V.normalBias,L.shadowRadius=V.radius,L.shadowMapSize=V.mapSize,i.spotShadow[v]=L,i.spotShadowMap[v]=H,i.spotShadowMatrix[v]=_.shadow.matrix,P++}i.spot[v]=N,v++}else if(_.isRectAreaLight){let N=t.get(_);N.color.copy(R).multiplyScalar(K),N.halfWidth.set(_.width*.5,0,0),N.halfHeight.set(0,_.height*.5,0),i.rectArea[M]=N,M++}else if(_.isPointLight){let N=t.get(_);if(N.color.copy(_.color).multiplyScalar(_.intensity*O),N.distance=_.distance,N.decay=_.decay,_.castShadow){let V=_.shadow,L=n.get(_);L.shadowBias=V.bias,L.shadowNormalBias=V.normalBias,L.shadowRadius=V.radius,L.shadowMapSize=V.mapSize,L.shadowCameraNear=V.camera.near,L.shadowCameraFar=V.camera.far,i.pointShadow[p]=L,i.pointShadowMap[p]=H,i.pointShadowMatrix[p]=_.shadow.matrix,y++}i.point[p]=N,p++}else if(_.isHemisphereLight){let N=t.get(_);N.skyColor.copy(_.color).multiplyScalar(K*O),N.groundColor.copy(_.groundColor).multiplyScalar(K*O),i.hemi[A]=N,A++}}M>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;let Z=i.hash;(Z.directionalLength!==f||Z.pointLength!==p||Z.spotLength!==v||Z.rectAreaLength!==M||Z.hemiLength!==A||Z.numDirectionalShadows!==E||Z.numPointShadows!==y||Z.numSpotShadows!==P)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=M,i.point.length=p,i.hemi.length=A,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotShadowMatrix.length=P,Z.directionalLength=f,Z.pointLength=p,Z.spotLength=v,Z.rectAreaLength=M,Z.hemiLength=A,Z.numDirectionalShadows=E,Z.numPointShadows=y,Z.numSpotShadows=P,i.version=V0++)}function c(u,h){let d=0,m=0,g=0,f=0,p=0,v=h.matrixWorldInverse;for(let M=0,A=u.length;M<A;M++){let E=u[M];if(E.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),d++}else if(E.isSpotLight){let y=i.spot[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),g++}else if(E.isRectAreaLight){let y=i.rectArea[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(v),a.identity(),o.copy(E.matrixWorld),o.premultiply(v),a.extractRotation(o),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),f++}else if(E.isPointLight){let y=i.point[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(v),m++}else if(E.isHemisphereLight){let y=i.hemi[p];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(v),y.direction.normalize(),p++}}}return{setup:l,setupView:c,state:i}}function wu(r,e){let t=new W0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function q0(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new wu(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new wu(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var Or=class extends ut{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};Or.prototype.isMeshDepthMaterial=!0;var zr=class extends ut{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};zr.prototype.isMeshDistanceMaterial=!0;var X0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hh(r,e,t){let n=new Zi,i=new B,s=new B,o=new ae,a=new Or({depthPacking:vf}),l=new zr,c={},u=t.maxTextureSize,h={0:Jt,1:Ar,2:Hi},d=new Fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:X0,fragmentShader:Y0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new nt;g.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new Re(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu,this.render=function(E,y,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let O=r.getRenderTarget(),Z=r.getActiveCubeFace(),fe=r.getActiveMipmapLevel(),G=r.state;G.setBlending(Dn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);for(let _=0,R=E.length;_<R;_++){let K=E[_],D=K.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);let H=D.getFrameExtents();if(i.multiply(H),s.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/H.x),i.x=s.x*H.x,D.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/H.y),i.y=s.y*H.y,D.mapSize.y=s.y)),D.map===null&&!D.isPointLightShadow&&this.type===wr&&(D.map=new Ct(i.x,i.y),D.map.texture.name=K.name+".shadowMap",D.mapPass=new Ct(i.x,i.y),D.camera.updateProjectionMatrix()),D.map===null){let V={minFilter:Ie,magFilter:Ie,format:Yt};D.map=new Ct(i.x,i.y,V),D.map.texture.name=K.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();let N=D.getViewportCount();for(let V=0;V<N;V++){let L=D.getViewport(V);o.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),G.viewport(o),D.updateMatrices(K,V),n=D.getFrustum(),A(y,P,D.camera,K,this.type)}!D.isPointLightShadow&&this.type===wr&&v(D,P),D.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(O,Z,fe)};function v(E,y){let P=e.update(f);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(y,null,P,d,f,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(y,null,P,m,f,null)}function M(E,y,P,O,Z,fe){let G=null,_=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(_!==void 0?G=_:G=P.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){let R=G.uuid,K=y.uuid,D=c[R];D===void 0&&(D={},c[R]=D);let H=D[K];H===void 0&&(H=G.clone(),D[K]=H),G=H}return G.visible=y.visible,G.wireframe=y.wireframe,fe===wr?G.side=y.shadowSide!==null?y.shadowSide:y.side:G.side=y.shadowSide!==null?y.shadowSide:h[y.side],G.alphaMap=y.alphaMap,G.alphaTest=y.alphaTest,G.clipShadows=y.clipShadows,G.clippingPlanes=y.clippingPlanes,G.clipIntersection=y.clipIntersection,G.displacementMap=y.displacementMap,G.displacementScale=y.displacementScale,G.displacementBias=y.displacementBias,G.wireframeLinewidth=y.wireframeLinewidth,G.linewidth=y.linewidth,P.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(G.referencePosition.setFromMatrixPosition(P.matrixWorld),G.nearDistance=O,G.farDistance=Z),G}function A(E,y,P,O,Z){if(E.visible===!1)return;if(E.layers.test(y.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&Z===wr)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let _=e.update(E),R=E.material;if(Array.isArray(R)){let K=_.groups;for(let D=0,H=K.length;D<H;D++){let N=K[D],V=R[N.materialIndex];if(V&&V.visible){let L=M(E,V,O,P.near,P.far,Z);r.renderBufferDirect(P,null,_,L,E,N)}}}else if(R.visible){let K=M(E,R,O,P.near,P.far,Z);r.renderBufferDirect(P,null,_,K,E,null)}}let G=E.children;for(let _=0,R=G.length;_<R;_++)A(G[_],y,P,O,Z)}}function J0(r,e,t){let n=t.isWebGL2;function i(){let C=!1,oe=new ae,re=null,Ee=new ae(0,0,0,0);return{setMask:function(pe){re!==pe&&!C&&(r.colorMask(pe,pe,pe,pe),re=pe)},setLocked:function(pe){C=pe},setClear:function(pe,ye,ce,De,it){it===!0&&(pe*=De,ye*=De,ce*=De),oe.set(pe,ye,ce,De),Ee.equals(oe)===!1&&(r.clearColor(pe,ye,ce,De),Ee.copy(oe))},reset:function(){C=!1,re=null,Ee.set(-1,0,0,0)}}}function s(){let C=!1,oe=null,re=null,Ee=null;return{setTest:function(pe){pe?Te(2929):q(2929)},setMask:function(pe){oe!==pe&&!C&&(r.depthMask(pe),oe=pe)},setFunc:function(pe){if(re!==pe){if(pe)switch(pe){case Od:r.depthFunc(512);break;case zd:r.depthFunc(519);break;case Nd:r.depthFunc(513);break;case Da:r.depthFunc(515);break;case Bd:r.depthFunc(514);break;case Ud:r.depthFunc(518);break;case kd:r.depthFunc(516);break;case Hd:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);re=pe}},setLocked:function(pe){C=pe},setClear:function(pe){Ee!==pe&&(r.clearDepth(pe),Ee=pe)},reset:function(){C=!1,oe=null,re=null,Ee=null}}}function o(){let C=!1,oe=null,re=null,Ee=null,pe=null,ye=null,ce=null,De=null,it=null;return{setTest:function(He){C||(He?Te(2960):q(2960))},setMask:function(He){oe!==He&&!C&&(r.stencilMask(He),oe=He)},setFunc:function(He,jt,Kt){(re!==He||Ee!==jt||pe!==Kt)&&(r.stencilFunc(He,jt,Kt),re=He,Ee=jt,pe=Kt)},setOp:function(He,jt,Kt){(ye!==He||ce!==jt||De!==Kt)&&(r.stencilOp(He,jt,Kt),ye=He,ce=jt,De=Kt)},setLocked:function(He){C=He},setClear:function(He){it!==He&&(r.clearStencil(He),it=He)},reset:function(){C=!1,oe=null,re=null,Ee=null,pe=null,ye=null,ce=null,De=null,it=null}}}let a=new i,l=new s,c=new o,u={},h={},d=new WeakMap,m=[],g=null,f=!1,p=null,v=null,M=null,A=null,E=null,y=null,P=null,O=!1,Z=null,fe=null,G=null,_=null,R=null,K=r.getParameter(35661),D=!1,H=0,N=r.getParameter(7938);N.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(N)[1]),D=H>=1):N.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),D=H>=2);let V=null,L={},X=r.getParameter(3088),j=r.getParameter(2978),ie=new ae().fromArray(X),Q=new ae().fromArray(j);function xe(C,oe,re){let Ee=new Uint8Array(4),pe=r.createTexture();r.bindTexture(C,pe),r.texParameteri(C,10241,9728),r.texParameteri(C,10240,9728);for(let ye=0;ye<re;ye++)r.texImage2D(oe+ye,0,6408,1,1,0,6408,5121,Ee);return pe}let Ne={};Ne[3553]=xe(3553,3553,1),Ne[34067]=xe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(2929),l.setFunc(Da),ne(!1),ge(pc),Te(2884),W(Dn);function Te(C){u[C]!==!0&&(r.enable(C),u[C]=!0)}function q(C){u[C]!==!1&&(r.disable(C),u[C]=!1)}function Xe(C,oe){return h[C]!==oe?(r.bindFramebuffer(C,oe),h[C]=oe,n&&(C===36009&&(h[36160]=oe),C===36160&&(h[36009]=oe)),!0):!1}function Pe(C,oe){let re=m,Ee=!1;if(C)if(re=d.get(oe),re===void 0&&(re=[],d.set(oe,re)),C.isWebGLMultipleRenderTargets){let pe=C.texture;if(re.length!==pe.length||re[0]!==36064){for(let ye=0,ce=pe.length;ye<ce;ye++)re[ye]=36064+ye;re.length=pe.length,Ee=!0}}else re[0]!==36064&&(re[0]=36064,Ee=!0);else re[0]!==1029&&(re[0]=1029,Ee=!0);Ee&&(t.isWebGL2?r.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Le(C){return g!==C?(r.useProgram(C),g=C,!0):!1}let se={[Ii]:32774,[Sd]:32778,[Ed]:32779};if(n)se[_c]=32775,se[xc]=32776;else{let C=e.get("EXT_blend_minmax");C!==null&&(se[_c]=C.MIN_EXT,se[xc]=C.MAX_EXT)}let ze={[Td]:0,[Ad]:1,[Cd]:768,[ju]:770,[Fd]:776,[Dd]:774,[Ld]:772,[Rd]:769,[Ku]:771,[Id]:775,[Pd]:773};function W(C,oe,re,Ee,pe,ye,ce,De){if(C===Dn){f===!0&&(q(3042),f=!1);return}if(f===!1&&(Te(3042),f=!0),C!==Md){if(C!==p||De!==O){if((v!==Ii||E!==Ii)&&(r.blendEquation(32774),v=Ii,E=Ii),De)switch(C){case Bi:r.blendFuncSeparate(1,771,1,771);break;case mc:r.blendFunc(1,1);break;case gc:r.blendFuncSeparate(0,769,0,1);break;case vc:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Bi:r.blendFuncSeparate(770,771,1,771);break;case mc:r.blendFunc(770,1);break;case gc:r.blendFuncSeparate(0,769,0,1);break;case vc:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}M=null,A=null,y=null,P=null,p=C,O=De}return}pe=pe||oe,ye=ye||re,ce=ce||Ee,(oe!==v||pe!==E)&&(r.blendEquationSeparate(se[oe],se[pe]),v=oe,E=pe),(re!==M||Ee!==A||ye!==y||ce!==P)&&(r.blendFuncSeparate(ze[re],ze[Ee],ze[ye],ze[ce]),M=re,A=Ee,y=ye,P=ce),p=C,O=null}function Y(C,oe){C.side===Hi?q(2884):Te(2884);let re=C.side===Jt;oe&&(re=!re),ne(re),C.blending===Bi&&C.transparent===!1?W(Dn):W(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);let Ee=C.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ce(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Te(32926):q(32926)}function ne(C){Z!==C&&(C?r.frontFace(2304):r.frontFace(2305),Z=C)}function ge(C){C!==yd?(Te(2884),C!==fe&&(C===pc?r.cullFace(1029):C===bd?r.cullFace(1028):r.cullFace(1032))):q(2884),fe=C}function de(C){C!==G&&(D&&r.lineWidth(C),G=C)}function Ce(C,oe,re){C?(Te(32823),(_!==oe||R!==re)&&(r.polygonOffset(oe,re),_=oe,R=re)):q(32823)}function Se(C){C?Te(3089):q(3089)}function be(C){C===void 0&&(C=33984+K-1),V!==C&&(r.activeTexture(C),V=C)}function et(C,oe){V===null&&be();let re=L[V];re===void 0&&(re={type:void 0,texture:void 0},L[V]=re),(re.type!==C||re.texture!==oe)&&(r.bindTexture(C,oe||Ne[C]),re.type=C,re.texture=oe)}function Ze(){let C=L[V];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function S(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function x(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function U(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function b(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(C){ie.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),ie.copy(C))}function _e(C){Q.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),Q.copy(C))}function le(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},V=null,L={},h={},d=new WeakMap,m=[],g=null,f=!1,p=null,v=null,M=null,A=null,E=null,y=null,P=null,O=!1,Z=null,fe=null,G=null,_=null,R=null,ie.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Te,disable:q,bindFramebuffer:Xe,drawBuffers:Pe,useProgram:Le,setBlending:W,setMaterial:Y,setFlipSided:ne,setCullFace:ge,setLineWidth:de,setPolygonOffset:Ce,setScissorTest:Se,activeTexture:be,bindTexture:et,unbindTexture:Ze,compressedTexImage2D:S,texImage2D:we,texImage3D:b,texStorage2D:he,texStorage3D:me,texSubImage2D:x,texSubImage3D:U,compressedTexSubImage2D:ee,scissor:te,viewport:_e,reset:le}}function Z0(r,e,t,n,i,s,o){let a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,f,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(S,x){return v?new OffscreenCanvas(S,x):Lr("canvas")}function A(S,x,U,ee){let he=1;if((S.width>ee||S.height>ee)&&(he=ee/Math.max(S.width,S.height)),he<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let me=x?Ua:Math.floor,we=me(he*S.width),b=me(he*S.height);f===void 0&&(f=M(we,b));let te=U?M(we,b):f;return te.width=we,te.height=b,te.getContext("2d").drawImage(S,0,0,we,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+we+"x"+b+")."),te}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function E(S){return Wc(S.width)&&Wc(S.height)}function y(S){return a?!1:S.wrapS!==Xt||S.wrapT!==Xt||S.minFilter!==Ie&&S.minFilter!==Lt}function P(S,x){return S.generateMipmaps&&x&&S.minFilter!==Ie&&S.minFilter!==Lt}function O(S){r.generateMipmap(S)}function Z(S,x,U,ee,he=!1){if(a===!1)return x;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let me=x;return x===6403&&(U===5126&&(me=33326),U===5131&&(me=33325),U===5121&&(me=33321)),x===33319&&(U===5126&&(me=33328),U===5131&&(me=33327),U===5121&&(me=33323)),x===6408&&(U===5126&&(me=34836),U===5131&&(me=34842),U===5121&&(me=ee===rt&&he===!1?35907:32856),U===32819&&(me=32854),U===32820&&(me=32855)),(me===33325||me===33326||me===33327||me===33328||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function fe(S,x,U){return P(S,U)===!0||S.isFramebufferTexture&&S.minFilter!==Ie&&S.minFilter!==Lt?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function G(S){return S===Ie||S===yc||S===bc?9728:9729}function _(S){let x=S.target;x.removeEventListener("dispose",_),K(x),x.isVideoTexture&&g.delete(x)}function R(S){let x=S.target;x.removeEventListener("dispose",R),H(x)}function K(S){let x=n.get(S);if(x.__webglInit===void 0)return;let U=S.source,ee=p.get(U);if(ee){let he=ee[x.__cacheKey];he.usedTimes--,he.usedTimes===0&&D(S),Object.keys(ee).length===0&&p.delete(U)}n.remove(S)}function D(S){let x=n.get(S);r.deleteTexture(x.__webglTexture);let U=S.source,ee=p.get(U);delete ee[x.__cacheKey],o.memory.textures--}function H(S){let x=S.texture,U=n.get(S),ee=n.get(x);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let he=0;he<6;he++)r.deleteFramebuffer(U.__webglFramebuffer[he]),U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[he]);else r.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer&&r.deleteRenderbuffer(U.__webglColorRenderbuffer),U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer);if(S.isWebGLMultipleRenderTargets)for(let he=0,me=x.length;he<me;he++){let we=n.get(x[he]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(x[he])}n.remove(x),n.remove(S)}let N=0;function V(){N=0}function L(){let S=N;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),N+=1,S}function X(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.encoding),x.join()}function j(S,x){let U=n.get(S);if(S.isVideoTexture&&et(S),S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){let ee=S.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(U,S,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,U.__webglTexture)}function ie(S,x){let U=n.get(S);if(S.version>0&&U.__version!==S.version){Pe(U,S,x);return}t.activeTexture(33984+x),t.bindTexture(35866,U.__webglTexture)}function Q(S,x){let U=n.get(S);if(S.version>0&&U.__version!==S.version){Pe(U,S,x);return}t.activeTexture(33984+x),t.bindTexture(32879,U.__webglTexture)}function xe(S,x){let U=n.get(S);if(S.version>0&&U.__version!==S.version){Le(U,S,x);return}t.activeTexture(33984+x),t.bindTexture(34067,U.__webglTexture)}let Ne={[Oa]:10497,[Xt]:33071,[za]:33648},Te={[Ie]:9728,[yc]:9984,[bc]:9986,[Lt]:9729,[Zd]:9985,[Co]:9987};function q(S,x,U){if(U?(r.texParameteri(S,10242,Ne[x.wrapS]),r.texParameteri(S,10243,Ne[x.wrapT]),(S===32879||S===35866)&&r.texParameteri(S,32882,Ne[x.wrapR]),r.texParameteri(S,10240,Te[x.magFilter]),r.texParameteri(S,10241,Te[x.minFilter])):(r.texParameteri(S,10242,33071),r.texParameteri(S,10243,33071),(S===32879||S===35866)&&r.texParameteri(S,32882,33071),(x.wrapS!==Xt||x.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,10240,G(x.magFilter)),r.texParameteri(S,10241,G(x.minFilter)),x.minFilter!==Ie&&x.minFilter!==Lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(x.type===Zn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Ui&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(S,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Xe(S,x){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",_));let ee=x.source,he=p.get(ee);he===void 0&&(he={},p.set(ee,he));let me=X(x);if(me!==S.__cacheKey){he[me]===void 0&&(he[me]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,U=!0),he[me].usedTimes++;let we=he[S.__cacheKey];we!==void 0&&(he[S.__cacheKey].usedTimes--,we.usedTimes===0&&D(x)),S.__cacheKey=me,S.__webglTexture=he[me].texture}return U}function Pe(S,x,U){let ee=3553;x.isDataArrayTexture&&(ee=35866),x.isData3DTexture&&(ee=32879);let he=Xe(S,x),me=x.source;if(t.activeTexture(33984+U),t.bindTexture(ee,S.__webglTexture),me.version!==me.__currentVersion||he===!0){r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);let we=y(x)&&E(x.image)===!1,b=A(x.image,we,!1,u);b=Ze(x,b);let te=E(b)||a,_e=s.convert(x.format,x.encoding),le=s.convert(x.type),C=Z(x.internalFormat,_e,le,x.encoding,x.isVideoTexture);q(ee,x,te);let oe,re=x.mipmaps,Ee=a&&x.isVideoTexture!==!0,pe=S.__version===void 0,ye=fe(x,b,te);if(x.isDepthTexture)C=6402,a?x.type===Zn?C=36012:x.type===Vs?C=33190:x.type===ki?C=35056:C=33189:x.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===jn&&C===6402&&x.type!==Cr&&x.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Cr,le=s.convert(x.type)),x.format===Wi&&C===6402&&(C=34041,x.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ki,le=s.convert(x.type))),Ee&&pe?t.texStorage2D(3553,1,C,b.width,b.height):t.texImage2D(3553,0,C,b.width,b.height,0,_e,le,null);else if(x.isDataTexture)if(re.length>0&&te){Ee&&pe&&t.texStorage2D(3553,ye,C,re[0].width,re[0].height);for(let ce=0,De=re.length;ce<De;ce++)oe=re[ce],Ee?t.texSubImage2D(3553,ce,0,0,oe.width,oe.height,_e,le,oe.data):t.texImage2D(3553,ce,C,oe.width,oe.height,0,_e,le,oe.data);x.generateMipmaps=!1}else Ee?(pe&&t.texStorage2D(3553,ye,C,b.width,b.height),t.texSubImage2D(3553,0,0,0,b.width,b.height,_e,le,b.data)):t.texImage2D(3553,0,C,b.width,b.height,0,_e,le,b.data);else if(x.isCompressedTexture){Ee&&pe&&t.texStorage2D(3553,ye,C,re[0].width,re[0].height);for(let ce=0,De=re.length;ce<De;ce++)oe=re[ce],x.format!==Yt?_e!==null?Ee?t.compressedTexSubImage2D(3553,ce,0,0,oe.width,oe.height,_e,oe.data):t.compressedTexImage2D(3553,ce,C,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?t.texSubImage2D(3553,ce,0,0,oe.width,oe.height,_e,le,oe.data):t.texImage2D(3553,ce,C,oe.width,oe.height,0,_e,le,oe.data)}else if(x.isDataArrayTexture)Ee?(pe&&t.texStorage3D(35866,ye,C,b.width,b.height,b.depth),t.texSubImage3D(35866,0,0,0,0,b.width,b.height,b.depth,_e,le,b.data)):t.texImage3D(35866,0,C,b.width,b.height,b.depth,0,_e,le,b.data);else if(x.isData3DTexture)Ee?(pe&&t.texStorage3D(32879,ye,C,b.width,b.height,b.depth),t.texSubImage3D(32879,0,0,0,0,b.width,b.height,b.depth,_e,le,b.data)):t.texImage3D(32879,0,C,b.width,b.height,b.depth,0,_e,le,b.data);else if(x.isFramebufferTexture)Ee&&pe?t.texStorage2D(3553,ye,C,b.width,b.height):t.texImage2D(3553,0,C,b.width,b.height,0,_e,le,null);else if(re.length>0&&te){Ee&&pe&&t.texStorage2D(3553,ye,C,re[0].width,re[0].height);for(let ce=0,De=re.length;ce<De;ce++)oe=re[ce],Ee?t.texSubImage2D(3553,ce,0,0,_e,le,oe):t.texImage2D(3553,ce,C,_e,le,oe);x.generateMipmaps=!1}else Ee?(pe&&t.texStorage2D(3553,ye,C,b.width,b.height),t.texSubImage2D(3553,0,0,0,_e,le,b)):t.texImage2D(3553,0,C,_e,le,b);P(x,te)&&O(ee),me.__currentVersion=me.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Le(S,x,U){if(x.image.length!==6)return;let ee=Xe(S,x),he=x.source;if(t.activeTexture(33984+U),t.bindTexture(34067,S.__webglTexture),he.version!==he.__currentVersion||ee===!0){r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);let me=x.isCompressedTexture||x.image[0].isCompressedTexture,we=x.image[0]&&x.image[0].isDataTexture,b=[];for(let ce=0;ce<6;ce++)!me&&!we?b[ce]=A(x.image[ce],!1,!0,c):b[ce]=we?x.image[ce].image:x.image[ce],b[ce]=Ze(x,b[ce]);let te=b[0],_e=E(te)||a,le=s.convert(x.format,x.encoding),C=s.convert(x.type),oe=Z(x.internalFormat,le,C,x.encoding),re=a&&x.isVideoTexture!==!0,Ee=S.__version===void 0,pe=fe(x,te,_e);q(34067,x,_e);let ye;if(me){re&&Ee&&t.texStorage2D(34067,pe,oe,te.width,te.height);for(let ce=0;ce<6;ce++){ye=b[ce].mipmaps;for(let De=0;De<ye.length;De++){let it=ye[De];x.format!==Yt?le!==null?re?t.compressedTexSubImage2D(34069+ce,De,0,0,it.width,it.height,le,it.data):t.compressedTexImage2D(34069+ce,De,oe,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?t.texSubImage2D(34069+ce,De,0,0,it.width,it.height,le,C,it.data):t.texImage2D(34069+ce,De,oe,it.width,it.height,0,le,C,it.data)}}}else{ye=x.mipmaps,re&&Ee&&(ye.length>0&&pe++,t.texStorage2D(34067,pe,oe,b[0].width,b[0].height));for(let ce=0;ce<6;ce++)if(we){re?t.texSubImage2D(34069+ce,0,0,0,b[ce].width,b[ce].height,le,C,b[ce].data):t.texImage2D(34069+ce,0,oe,b[ce].width,b[ce].height,0,le,C,b[ce].data);for(let De=0;De<ye.length;De++){let He=ye[De].image[ce].image;re?t.texSubImage2D(34069+ce,De+1,0,0,He.width,He.height,le,C,He.data):t.texImage2D(34069+ce,De+1,oe,He.width,He.height,0,le,C,He.data)}}else{re?t.texSubImage2D(34069+ce,0,0,0,le,C,b[ce]):t.texImage2D(34069+ce,0,oe,le,C,b[ce]);for(let De=0;De<ye.length;De++){let it=ye[De];re?t.texSubImage2D(34069+ce,De+1,0,0,le,C,it.image[ce]):t.texImage2D(34069+ce,De+1,oe,le,C,it.image[ce])}}}P(x,_e)&&O(34067),he.__currentVersion=he.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function se(S,x,U,ee,he){let me=s.convert(U.format,U.encoding),we=s.convert(U.type),b=Z(U.internalFormat,me,we,U.encoding);n.get(x).__hasExternalTextures||(he===32879||he===35866?t.texImage3D(he,0,b,x.width,x.height,x.depth,0,me,we,null):t.texImage2D(he,0,b,x.width,x.height,0,me,we,null)),t.bindFramebuffer(36160,S),be(x)?d.framebufferTexture2DMultisampleEXT(36160,ee,he,n.get(U).__webglTexture,0,Se(x)):r.framebufferTexture2D(36160,ee,he,n.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(S,x,U){if(r.bindRenderbuffer(36161,S),x.depthBuffer&&!x.stencilBuffer){let ee=33189;if(U||be(x)){let he=x.depthTexture;he&&he.isDepthTexture&&(he.type===Zn?ee=36012:he.type===Vs&&(ee=33190));let me=Se(x);be(x)?d.renderbufferStorageMultisampleEXT(36161,me,ee,x.width,x.height):r.renderbufferStorageMultisample(36161,me,ee,x.width,x.height)}else r.renderbufferStorage(36161,ee,x.width,x.height);r.framebufferRenderbuffer(36160,36096,36161,S)}else if(x.depthBuffer&&x.stencilBuffer){let ee=Se(x);U&&be(x)===!1?r.renderbufferStorageMultisample(36161,ee,35056,x.width,x.height):be(x)?d.renderbufferStorageMultisampleEXT(36161,ee,35056,x.width,x.height):r.renderbufferStorage(36161,34041,x.width,x.height),r.framebufferRenderbuffer(36160,33306,36161,S)}else{let ee=x.isWebGLMultipleRenderTargets===!0?x.texture[0]:x.texture,he=s.convert(ee.format,ee.encoding),me=s.convert(ee.type),we=Z(ee.internalFormat,he,me,ee.encoding),b=Se(x);U&&be(x)===!1?r.renderbufferStorageMultisample(36161,b,we,x.width,x.height):be(x)?d.renderbufferStorageMultisampleEXT(36161,b,we,x.width,x.height):r.renderbufferStorage(36161,we,x.width,x.height)}r.bindRenderbuffer(36161,null)}function W(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);let ee=n.get(x.depthTexture).__webglTexture,he=Se(x);if(x.depthTexture.format===jn)be(x)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,he):r.framebufferTexture2D(36160,36096,3553,ee,0);else if(x.depthTexture.format===Wi)be(x)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,he):r.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function Y(S){let x=n.get(S),U=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");W(x.__webglFramebuffer,S)}else if(U){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]=r.createRenderbuffer(),ze(x.__webglDepthbuffer[ee],S,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),ze(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function ne(S,x,U){let ee=n.get(S);x!==void 0&&se(ee.__webglFramebuffer,S,S.texture,36064,3553),U!==void 0&&Y(S)}function ge(S){let x=S.texture,U=n.get(S),ee=n.get(x);S.addEventListener("dispose",R),S.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=x.version,o.memory.textures++);let he=S.isWebGLCubeRenderTarget===!0,me=S.isWebGLMultipleRenderTargets===!0,we=E(S)||a;if(he){U.__webglFramebuffer=[];for(let b=0;b<6;b++)U.__webglFramebuffer[b]=r.createFramebuffer()}else if(U.__webglFramebuffer=r.createFramebuffer(),me)if(i.drawBuffers){let b=S.texture;for(let te=0,_e=b.length;te<_e;te++){let le=n.get(b[te]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&S.samples>0&&be(S)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,U.__webglColorRenderbuffer);let b=s.convert(x.format,x.encoding),te=s.convert(x.type),_e=Z(x.internalFormat,b,te,x.encoding),le=Se(S);r.renderbufferStorageMultisample(36161,le,_e,S.width,S.height),t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,U.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}if(he){t.bindTexture(34067,ee.__webglTexture),q(34067,x,we);for(let b=0;b<6;b++)se(U.__webglFramebuffer[b],S,x,36064,34069+b);P(x,we)&&O(34067),t.unbindTexture()}else if(me){let b=S.texture;for(let te=0,_e=b.length;te<_e;te++){let le=b[te],C=n.get(le);t.bindTexture(3553,C.__webglTexture),q(3553,le,we),se(U.__webglFramebuffer,S,le,36064+te,3553),P(le,we)&&O(3553)}t.unbindTexture()}else{let b=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?b=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(b,ee.__webglTexture),q(b,x,we),se(U.__webglFramebuffer,S,x,36064,b),P(x,we)&&O(b),t.unbindTexture()}S.depthBuffer&&Y(S)}function de(S){let x=E(S)||a,U=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0,he=U.length;ee<he;ee++){let me=U[ee];if(P(me,x)){let we=S.isWebGLCubeRenderTarget?34067:3553,b=n.get(me).__webglTexture;t.bindTexture(we,b),O(we),t.unbindTexture()}}}function Ce(S){if(a&&S.samples>0&&be(S)===!1){let x=S.width,U=S.height,ee=16384,he=[36064],me=S.stencilBuffer?33306:36096;S.depthBuffer&&he.push(me);let we=n.get(S),b=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;b===!1&&(S.depthBuffer&&(ee|=256),S.stencilBuffer&&(ee|=1024)),t.bindFramebuffer(36008,we.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,we.__webglFramebuffer),b===!0&&(r.invalidateFramebuffer(36008,[me]),r.invalidateFramebuffer(36009,[me])),r.blitFramebuffer(0,0,x,U,0,0,x,U,ee,9728),m&&r.invalidateFramebuffer(36008,he),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,we.__webglMultisampledFramebuffer)}}function Se(S){return Math.min(h,S.samples)}function be(S){let x=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function et(S){let x=o.render.frame;g.get(S)!==x&&(g.set(S,x),S.update())}function Ze(S,x){let U=S.encoding,ee=S.format,he=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Na||U!==vn&&(U===rt?a===!1?e.has("EXT_sRGB")===!0&&ee===Yt?(S.format=Na,S.minFilter=Lt,S.generateMipmaps=!1):x=_n.sRGBToLinear(x):(ee!==Yt||he!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),x}this.allocateTextureUnit=L,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=ie,this.setTexture3D=Q,this.setTextureCube=xe,this.rebindTextures=ne,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=se,this.useMultisampledRTT=be}function $0(r,e,t){let n=t.isWebGL2;function i(s,o=null){let a;if(s===Qn)return 5121;if(s===Qd)return 32819;if(s===ef)return 32820;if(s===$d)return 5120;if(s===jd)return 5122;if(s===Cr)return 5123;if(s===Kd)return 5124;if(s===Vs)return 5125;if(s===Zn)return 5126;if(s===Ui)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===tf)return 6406;if(s===Yt)return 6408;if(s===rf)return 6409;if(s===sf)return 6410;if(s===jn)return 6402;if(s===Wi)return 34041;if(s===of)return 6403;if(s===nf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Na)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===af)return 36244;if(s===lf)return 33319;if(s===cf)return 33320;if(s===uf)return 36249;if(s===Xo||s===Yo||s===Jo||s===Zo)if(o===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wc||s===Mc||s===Sc||s===Ec)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===wc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Sc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ec)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Tc||s===Ac)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Tc)return o===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ac)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Cc||s===Rc||s===Lc||s===Pc||s===Dc||s===Ic||s===Fc||s===Oc||s===zc||s===Nc||s===Bc||s===Uc||s===kc||s===Hc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Cc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ic)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Oc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Uc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Vc)return o===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ki)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}var eo=class extends bt{constructor(e=[]){super(),this.cameras=e}};eo.prototype.isArrayCamera=!0;var Qe=class extends Je{constructor(){super(),this.type="Group"}};Qe.prototype.isGroup=!0;var j0={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j0))),c&&e.hand){o=!0;for(let f of e.hand.values()){let p=t.getJointPose(f,n);if(c.joints[f.jointName]===void 0){let M=new Qe;M.matrixAutoUpdate=!1,M.visible=!1,c.joints[f.jointName]=M,c.add(M)}let v=c.joints[f.jointName];p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}},to=class extends pt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:jn,u!==jn&&u!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===jn&&(n=Cr),n===void 0&&u===Wi&&(n=ki),super(null,i,s,o,a,l,u,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ie,this.minFilter=l!==void 0?l:Ie,this.flipY=!1,this.generateMipmaps=!1}};to.prototype.isDepthTexture=!0;var Ya=class extends $t{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,d=null,m=t.getContextAttributes(),g=null,f=null,p=[],v=new Map,M=new bt;M.layers.enable(1),M.viewport=new ae;let A=new bt;A.layers.enable(2),A.viewport=new ae;let E=[M,A],y=new eo;y.layers.enable(1),y.layers.enable(2);let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let X=p[L];return X===void 0&&(X=new Sr,p[L]=X),X.getTargetRaySpace()},this.getControllerGrip=function(L){let X=p[L];return X===void 0&&(X=new Sr,p[L]=X),X.getGripSpace()},this.getHand=function(L){let X=p[L];return X===void 0&&(X=new Sr,p[L]=X),X.getHandSpace()};function Z(L){let X=v.get(L.inputSource);X&&X.dispatchEvent({type:L.type,data:L.inputSource})}function fe(){v.forEach(function(L,X){L.disconnect(X)}),v.clear(),P=null,O=null,e.setRenderTarget(g),h=null,u=null,c=null,i=null,f=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return c},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",fe),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:h}),f=new Ct(h.framebufferWidth,h.framebufferHeight,{format:Yt,type:Qn,encoding:e.outputEncoding})}else{let X=null,j=null,ie=null;m.depth&&(ie=m.stencil?35056:33190,X=m.stencil?Wi:jn,j=m.stencil?ki:Cr);let Q={colorFormat:e.outputEncoding===rt?35907:32856,depthFormat:ie,scaleFactor:s};c=new XRWebGLBinding(i,t),u=c.createProjectionLayer(Q),i.updateRenderState({layers:[u]}),f=new Ct(u.textureWidth,u.textureHeight,{format:Yt,type:Qn,depthTexture:new to(u.textureWidth,u.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});let xe=e.properties.get(f);xe.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),o=await i.requestReferenceSpace(a),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function G(L){let X=i.inputSources;for(let j=0;j<p.length;j++)v.set(X[j],p[j]);for(let j=0;j<L.removed.length;j++){let ie=L.removed[j],Q=v.get(ie);Q&&(Q.dispatchEvent({type:"disconnected",data:ie}),v.delete(ie))}for(let j=0;j<L.added.length;j++){let ie=L.added[j],Q=v.get(ie);Q&&Q.dispatchEvent({type:"connected",data:ie})}}let _=new T,R=new T;function K(L,X,j){_.setFromMatrixPosition(X.matrixWorld),R.setFromMatrixPosition(j.matrixWorld);let ie=_.distanceTo(R),Q=X.projectionMatrix.elements,xe=j.projectionMatrix.elements,Ne=Q[14]/(Q[10]-1),Te=Q[14]/(Q[10]+1),q=(Q[9]+1)/Q[5],Xe=(Q[9]-1)/Q[5],Pe=(Q[8]-1)/Q[0],Le=(xe[8]+1)/xe[0],se=Ne*Pe,ze=Ne*Le,W=ie/(-Pe+Le),Y=W*-Pe;X.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Y),L.translateZ(W),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();let ne=Ne+W,ge=Te+W,de=se-Y,Ce=ze+(ie-Y),Se=q*Te/ge*ne,be=Xe*Te/ge*ne;L.projectionMatrix.makePerspective(de,Ce,Se,be,ne,ge)}function D(L,X){X===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(X.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;y.near=A.near=M.near=L.near,y.far=A.far=M.far=L.far,(P!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,O=y.far);let X=L.parent,j=y.cameras;D(y,X);for(let Q=0;Q<j.length;Q++)D(j[Q],X);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),L.position.copy(y.position),L.quaternion.copy(y.quaternion),L.scale.copy(y.scale),L.matrix.copy(y.matrix),L.matrixWorld.copy(y.matrixWorld);let ie=L.children;for(let Q=0,xe=ie.length;Q<xe;Q++)ie[Q].updateMatrixWorld(!0);j.length===2?K(y,M,A):y.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(L){u!==null&&(u.fixedFoveation=L),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=L)};let H=null;function N(L,X){if(l=X.getViewerPose(o),d=X,l!==null){let ie=l.views;h!==null&&(e.setRenderTargetFramebuffer(f,h.framebuffer),e.setRenderTarget(f));let Q=!1;ie.length!==y.cameras.length&&(y.cameras.length=0,Q=!0);for(let xe=0;xe<ie.length;xe++){let Ne=ie[xe],Te=null;if(h!==null)Te=h.getViewport(Ne);else{let Xe=c.getViewSubImage(u,Ne);Te=Xe.viewport,xe===0&&(e.setRenderTargetTextures(f,Xe.colorTexture,u.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(f))}let q=E[xe];q.matrix.fromArray(Ne.transform.matrix),q.projectionMatrix.fromArray(Ne.projectionMatrix),q.viewport.set(Te.x,Te.y,Te.width,Te.height),xe===0&&y.matrix.copy(q.matrix),Q===!0&&y.cameras.push(q)}}let j=i.inputSources;for(let ie=0;ie<p.length;ie++){let Q=p[ie],xe=j[ie];Q.update(xe,X,o)}H&&H(L,X),d=null}let V=new ih;V.setAnimationLoop(N),this.setAnimationLoop=function(L){H=L},this.dispose=function(){}}};function K0(r,e){function t(f,p){f.fogColor.value.copy(p.color),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,v,M,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),u(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),h(f,p),p.isMeshPhysicalMaterial&&d(f,p,A)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?a(f,p,v,M):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===Jt&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===Jt&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let v=e.get(p).envMap;if(v&&(f.envMap.value=v,f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;let E=r.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*E}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uvTransform.value.copy(M.matrix));let A;p.aoMap?A=p.aoMap:p.lightMap&&(A=p.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),f.uv2Transform.value.copy(A.matrix))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function a(f,p,v,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*v,f.scale.value=M*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let A;p.map?A=p.map:p.alphaMap&&(A=p.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),f.uvTransform.value.copy(A.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,v){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Jt&&f.clearcoatNormalScale.value.negate())),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Q0(){let r=Lr("canvas");return r.style.display="block",r}function je(r={}){let e=r.canvas!==void 0?r.canvas:Q0(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,u;r.context!==void 0?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,d=null,m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vn,this.physicallyCorrectLights=!1,this.toneMapping=gn,this.toneMappingExposure=1;let f=this,p=!1,v=0,M=0,A=null,E=-1,y=null,P=new ae,O=new ae,Z=null,fe=e.width,G=e.height,_=1,R=null,K=null,D=new ae(0,0,fe,G),H=new ae(0,0,fe,G),N=!1,V=new Zi,L=!1,X=!1,j=null,ie=new Me,Q=new B,xe=new T,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return A===null?_:1}let q=t;function Xe(w,I){for(let k=0;k<w.length;k++){let z=w[k],$=e.getContext(z,I);if($!==null)return $}return null}try{let w={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ul}`),e.addEventListener("webglcontextlost",C,!1),e.addEventListener("webglcontextrestored",oe,!1),q===null){let I=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&I.shift(),q=Xe(I,w),q===null)throw Xe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Pe,Le,se,ze,W,Y,ne,ge,de,Ce,Se,be,et,Ze,S,x,U,ee,he,me,we,b,te;function _e(){Pe=new yg(q),Le=new pg(q,Pe,r),Pe.init(Le),b=new $0(q,Pe,Le),se=new J0(q,Pe,Le),ze=new Mg(q),W=new N0,Y=new Z0(q,Pe,se,W,Le,b,ze),ne=new gg(f),ge=new xg(f),de=new Nf(q,Le),te=new dg(q,Pe,de,Le),Ce=new bg(q,de,ze,te),Se=new Ag(q,Ce,de,ze),he=new Tg(q,Le,Y),x=new mg(W),be=new z0(f,ne,ge,Pe,Le,te,x),et=new K0(f,W),Ze=new U0,S=new q0(Pe,Le),ee=new hg(f,ne,se,Se,u,o),U=new hh(f,Se,Le),me=new fg(q,Pe,ze,Le),we=new wg(q,Pe,ze,Le),ze.programs=be.programs,f.capabilities=Le,f.extensions=Pe,f.properties=W,f.renderLists=Ze,f.shadowMap=U,f.state=se,f.info=ze}_e();let le=new Ya(f,q);this.xr=le,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let w=Pe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Pe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _},this.setPixelRatio=function(w){w!==void 0&&(_=w,this.setSize(fe,G,!1))},this.getSize=function(w){return w.set(fe,G)},this.setSize=function(w,I,k){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=w,G=I,e.width=Math.floor(w*_),e.height=Math.floor(I*_),k!==!1&&(e.style.width=w+"px",e.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(fe*_,G*_).floor()},this.setDrawingBufferSize=function(w,I,k){fe=w,G=I,_=k,e.width=Math.floor(w*k),e.height=Math.floor(I*k),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(D)},this.setViewport=function(w,I,k,z){w.isVector4?D.set(w.x,w.y,w.z,w.w):D.set(w,I,k,z),se.viewport(P.copy(D).multiplyScalar(_).floor())},this.getScissor=function(w){return w.copy(H)},this.setScissor=function(w,I,k,z){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,I,k,z),se.scissor(O.copy(H).multiplyScalar(_).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(w){se.setScissorTest(N=w)},this.setOpaqueSort=function(w){R=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(w=!0,I=!0,k=!0){let z=0;w&&(z|=16384),I&&(z|=256),k&&(z|=1024),q.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",C,!1),e.removeEventListener("webglcontextrestored",oe,!1),Ze.dispose(),S.dispose(),W.dispose(),ne.dispose(),ge.dispose(),Se.dispose(),te.dispose(),be.dispose(),le.dispose(),le.removeEventListener("sessionstart",De),le.removeEventListener("sessionend",it),j&&(j.dispose(),j=null),He.stop()};function C(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let w=ze.autoReset,I=U.enabled,k=U.autoUpdate,z=U.needsUpdate,$=U.type;_e(),ze.autoReset=w,U.enabled=I,U.autoUpdate=k,U.needsUpdate=z,U.type=$}function re(w){let I=w.target;I.removeEventListener("dispose",re),Ee(I)}function Ee(w){pe(w),W.remove(w)}function pe(w){let I=W.get(w).programs;I!==void 0&&(I.forEach(function(k){be.releaseProgram(k)}),w.isShaderMaterial&&be.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,k,z,$,Ae){I===null&&(I=Ne);let Oe=$.isMesh&&$.matrixWorld.determinant()<0,Ue=$h(w,I,k,z,$);se.setMaterial(z,Oe);let Be=k.index,Ke=k.attributes.position;if(Be===null){if(Ke===void 0||Ke.count===0)return}else if(Be.count===0)return;let qe=1;z.wireframe===!0&&(Be=Ce.getWireframeAttribute(k),qe=2),te.setup($,z,Ue,k,Be);let Ye,at=me;Be!==null&&(Ye=de.get(Be),at=we,at.setIndex(Ye));let Vn=Be!==null?Be.count:Ke.count,ci=k.drawRange.start*qe,ui=k.drawRange.count*qe,Qt=Ae!==null?Ae.start*qe:0,$e=Ae!==null?Ae.count*qe:1/0,hi=Math.max(ci,Qt),ht=Math.min(Vn,ci+ui,Qt+$e)-1,en=Math.max(0,ht-hi+1);if(en!==0){if($.isMesh)z.wireframe===!0?(se.setLineWidth(z.wireframeLinewidth*Te()),at.setMode(1)):at.setMode(4);else if($.isLine){let yn=z.linewidth;yn===void 0&&(yn=1),se.setLineWidth(yn*Te()),$.isLineSegments?at.setMode(1):$.isLineLoop?at.setMode(2):at.setMode(3)}else $.isPoints?at.setMode(0):$.isSprite&&at.setMode(4);if($.isInstancedMesh)at.renderInstances(hi,en,$.count);else if(k.isInstancedBufferGeometry){let yn=Math.min(k.instanceCount,k._maxInstanceCount);at.renderInstances(hi,en,yn)}else at.render(hi,en)}},this.compile=function(w,I){d=S.get(w),d.init(),g.push(d),w.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(f.physicallyCorrectLights),w.traverse(function(k){let z=k.material;if(z)if(Array.isArray(z))for(let $=0;$<z.length;$++){let Ae=z[$];Io(Ae,w,k)}else Io(z,w,k)}),g.pop(),d=null};let ye=null;function ce(w){ye&&ye(w)}function De(){He.stop()}function it(){He.start()}let He=new ih;He.setAnimationLoop(ce),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(w){ye=w,le.setAnimationLoop(w),w===null?He.stop():He.start()},le.addEventListener("sessionstart",De),le.addEventListener("sessionend",it),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;w.autoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(I),I=le.getCamera()),w.isScene===!0&&w.onBeforeRender(f,w,I,A),d=S.get(w,g.length),d.init(),g.push(d),ie.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V.setFromProjectionMatrix(ie),X=this.localClippingEnabled,L=x.init(this.clippingPlanes,X,I),h=Ze.get(w,m.length),h.init(),m.push(h),jt(w,I,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(R,K),L===!0&&x.beginShadows();let k=d.state.shadowsArray;if(U.render(k,w,I),L===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(h,w),d.setupLights(f.physicallyCorrectLights),I.isArrayCamera){let z=I.cameras;for(let $=0,Ae=z.length;$<Ae;$++){let Oe=z[$];Kt(h,w,Oe,Oe.viewport)}}else Kt(h,w,I);A!==null&&(Y.updateMultisampleRenderTarget(A),Y.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(f,w,I),te.resetDefaultState(),E=-1,y=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function jt(w,I,k,z){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||V.intersectsSprite(w)){z&&xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ie);let Oe=Se.update(w),Ue=w.material;Ue.visible&&h.push(w,Oe,Ue,k,xe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==ze.render.frame&&(w.skeleton.update(),w.skeleton.frame=ze.render.frame),!w.frustumCulled||V.intersectsObject(w))){z&&xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ie);let Oe=Se.update(w),Ue=w.material;if(Array.isArray(Ue)){let Be=Oe.groups;for(let Ke=0,qe=Be.length;Ke<qe;Ke++){let Ye=Be[Ke],at=Ue[Ye.materialIndex];at&&at.visible&&h.push(w,Oe,at,k,xe.z,Ye)}}else Ue.visible&&h.push(w,Oe,Ue,k,xe.z,null)}}let Ae=w.children;for(let Oe=0,Ue=Ae.length;Oe<Ue;Oe++)jt(Ae[Oe],I,k,z)}function Kt(w,I,k,z){let $=w.opaque,Ae=w.transmissive,Oe=w.transparent;d.setupLightsView(k),Ae.length>0&&Jh($,I,k),z&&se.viewport(P.copy(z)),$.length>0&&rs($,I,k),Ae.length>0&&rs(Ae,I,k),Oe.length>0&&rs(Oe,I,k),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Jh(w,I,k){let z=Le.isWebGL2;j===null&&(j=new Ct(1,1,{generateMipmaps:!0,type:b.convert(Ui)!==null?Ui:Qn,minFilter:Co,samples:z&&s===!0?4:0})),f.getDrawingBufferSize(Q),z?j.setSize(Q.x,Q.y):j.setSize(Ua(Q.x),Ua(Q.y));let $=f.getRenderTarget();f.setRenderTarget(j),f.clear();let Ae=f.toneMapping;f.toneMapping=gn,rs(w,I,k),f.toneMapping=Ae,Y.updateMultisampleRenderTarget(j),Y.updateRenderTargetMipmap(j),f.setRenderTarget($)}function rs(w,I,k){let z=I.isScene===!0?I.overrideMaterial:null;for(let $=0,Ae=w.length;$<Ae;$++){let Oe=w[$],Ue=Oe.object,Be=Oe.geometry,Ke=z===null?Oe.material:z,qe=Oe.group;Ue.layers.test(k.layers)&&Zh(Ue,I,k,Be,Ke,qe)}}function Zh(w,I,k,z,$,Ae){w.onBeforeRender(f,I,k,z,$,Ae),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(f,I,k,z,w,Ae),$.transparent===!0&&$.side===Hi?($.side=Jt,$.needsUpdate=!0,f.renderBufferDirect(k,I,z,$,w,Ae),$.side=Ar,$.needsUpdate=!0,f.renderBufferDirect(k,I,z,$,w,Ae),$.side=Hi):f.renderBufferDirect(k,I,z,$,w,Ae),w.onAfterRender(f,I,k,z,$,Ae)}function Io(w,I,k){I.isScene!==!0&&(I=Ne);let z=W.get(w),$=d.state.lights,Ae=d.state.shadowsArray,Oe=$.state.version,Ue=be.getParameters(w,$.state,Ae,I,k),Be=be.getProgramCacheKey(Ue),Ke=z.programs;z.environment=w.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(w.isMeshStandardMaterial?ge:ne).get(w.envMap||z.environment),Ke===void 0&&(w.addEventListener("dispose",re),Ke=new Map,z.programs=Ke);let qe=Ke.get(Be);if(qe!==void 0){if(z.currentProgram===qe&&z.lightsStateVersion===Oe)return Jl(w,Ue),qe}else Ue.uniforms=be.getUniforms(w),w.onBuild(k,Ue,f),w.onBeforeCompile(Ue,f),qe=be.acquireProgram(Ue,Be),Ke.set(Be,qe),z.uniforms=Ue.uniforms;let Ye=z.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ye.clippingPlanes=x.uniform),Jl(w,Ue),z.needsLights=Kh(w),z.lightsStateVersion=Oe,z.needsLights&&(Ye.ambientLightColor.value=$.state.ambient,Ye.lightProbe.value=$.state.probe,Ye.directionalLights.value=$.state.directional,Ye.directionalLightShadows.value=$.state.directionalShadow,Ye.spotLights.value=$.state.spot,Ye.spotLightShadows.value=$.state.spotShadow,Ye.rectAreaLights.value=$.state.rectArea,Ye.ltc_1.value=$.state.rectAreaLTC1,Ye.ltc_2.value=$.state.rectAreaLTC2,Ye.pointLights.value=$.state.point,Ye.pointLightShadows.value=$.state.pointShadow,Ye.hemisphereLights.value=$.state.hemi,Ye.directionalShadowMap.value=$.state.directionalShadowMap,Ye.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ye.spotShadowMap.value=$.state.spotShadowMap,Ye.spotShadowMatrix.value=$.state.spotShadowMatrix,Ye.pointShadowMap.value=$.state.pointShadowMap,Ye.pointShadowMatrix.value=$.state.pointShadowMatrix);let at=qe.getUniforms(),Vn=In.seqWithValue(at.seq,Ye);return z.currentProgram=qe,z.uniformsList=Vn,qe}function Jl(w,I){let k=W.get(w);k.outputEncoding=I.outputEncoding,k.instancing=I.instancing,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function $h(w,I,k,z,$){I.isScene!==!0&&(I=Ne),Y.resetTextureUnits();let Ae=I.fog,Oe=z.isMeshStandardMaterial?I.environment:null,Ue=A===null?f.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:vn,Be=(z.isMeshStandardMaterial?ge:ne).get(z.envMap||Oe),Ke=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,qe=!!z.normalMap&&!!k.attributes.tangent,Ye=!!k.morphAttributes.position,at=!!k.morphAttributes.normal,Vn=!!k.morphAttributes.color,ci=z.toneMapped?f.toneMapping:gn,ui=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Qt=ui!==void 0?ui.length:0,$e=W.get(z),hi=d.state.lights;if(L===!0&&(X===!0||w!==y)){let Bt=w===y&&z.id===E;x.setState(z,w,Bt)}let ht=!1;z.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==hi.state.version||$e.outputEncoding!==Ue||$.isInstancedMesh&&$e.instancing===!1||!$.isInstancedMesh&&$e.instancing===!0||$.isSkinnedMesh&&$e.skinning===!1||!$.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Be||z.fog&&$e.fog!==Ae||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==x.numPlanes||$e.numIntersection!==x.numIntersection)||$e.vertexAlphas!==Ke||$e.vertexTangents!==qe||$e.morphTargets!==Ye||$e.morphNormals!==at||$e.morphColors!==Vn||$e.toneMapping!==ci||Le.isWebGL2===!0&&$e.morphTargetsCount!==Qt)&&(ht=!0):(ht=!0,$e.__version=z.version);let en=$e.currentProgram;ht===!0&&(en=Io(z,I,$));let yn=!1,or=!1,Fo=!1,St=en.getUniforms(),ar=$e.uniforms;if(se.useProgram(en.program)&&(yn=!0,or=!0,Fo=!0),z.id!==E&&(E=z.id,or=!0),yn||y!==w){if(St.setValue(q,"projectionMatrix",w.projectionMatrix),Le.logarithmicDepthBuffer&&St.setValue(q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),y!==w&&(y=w,or=!0,Fo=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){let Bt=St.map.cameraPosition;Bt!==void 0&&Bt.setValue(q,xe.setFromMatrixPosition(w.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&St.setValue(q,"isOrthographic",w.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||$.isSkinnedMesh)&&St.setValue(q,"viewMatrix",w.matrixWorldInverse)}if($.isSkinnedMesh){St.setOptional(q,$,"bindMatrix"),St.setOptional(q,$,"bindMatrixInverse");let Bt=$.skeleton;Bt&&(Le.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),St.setValue(q,"boneTexture",Bt.boneTexture,Y),St.setValue(q,"boneTextureSize",Bt.boneTextureSize)):St.setOptional(q,Bt,"boneMatrices"))}let Oo=k.morphAttributes;return(Oo.position!==void 0||Oo.normal!==void 0||Oo.color!==void 0&&Le.isWebGL2===!0)&&he.update($,k,z,en),(or||$e.receiveShadow!==$.receiveShadow)&&($e.receiveShadow=$.receiveShadow,St.setValue(q,"receiveShadow",$.receiveShadow)),or&&(St.setValue(q,"toneMappingExposure",f.toneMappingExposure),$e.needsLights&&jh(ar,Fo),Ae&&z.fog&&et.refreshFogUniforms(ar,Ae),et.refreshMaterialUniforms(ar,z,_,G,j),In.upload(q,$e.uniformsList,ar,Y)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(In.upload(q,$e.uniformsList,ar,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&St.setValue(q,"center",$.center),St.setValue(q,"modelViewMatrix",$.modelViewMatrix),St.setValue(q,"normalMatrix",$.normalMatrix),St.setValue(q,"modelMatrix",$.matrixWorld),en}function jh(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function Kh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,I,k){W.get(w.texture).__webglTexture=I,W.get(w.depthTexture).__webglTexture=k;let z=W.get(w);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,I){let k=W.get(w);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,k=0){A=w,v=I,M=k;let z=!0;if(w){let Be=W.get(w);Be.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),z=!1):Be.__webglFramebuffer===void 0?Y.setupRenderTarget(w):Be.__hasExternalTextures&&Y.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture)}let $=null,Ae=!1,Oe=!1;if(w){let Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture)&&(Oe=!0);let Ke=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?($=Ke[I],Ae=!0):Le.isWebGL2&&w.samples>0&&Y.useMultisampledRTT(w)===!1?$=W.get(w).__webglMultisampledFramebuffer:$=Ke,P.copy(w.viewport),O.copy(w.scissor),Z=w.scissorTest}else P.copy(D).multiplyScalar(_).floor(),O.copy(H).multiplyScalar(_).floor(),Z=N;if(se.bindFramebuffer(36160,$)&&Le.drawBuffers&&z&&se.drawBuffers(w,$),se.viewport(P),se.scissor(O),se.setScissorTest(Z),Ae){let Be=W.get(w.texture);q.framebufferTexture2D(36160,36064,34069+I,Be.__webglTexture,k)}else if(Oe){let Be=W.get(w.texture),Ke=I||0;q.framebufferTextureLayer(36160,36064,Be.__webglTexture,k||0,Ke)}E=-1},this.readRenderTargetPixels=function(w,I,k,z,$,Ae,Oe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ue=Ue[Oe]),Ue){se.bindFramebuffer(36160,Ue);try{let Be=w.texture,Ke=Be.format,qe=Be.type;if(Ke!==Yt&&b.convert(Ke)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ye=qe===Ui&&(Pe.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(qe!==Qn&&b.convert(qe)!==q.getParameter(35738)&&!(qe===Zn&&(Le.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-z&&k>=0&&k<=w.height-$&&q.readPixels(I,k,z,$,b.convert(Ke),b.convert(qe),Ae)}finally{let Be=A!==null?W.get(A).__webglFramebuffer:null;se.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(w,I,k=0){if(I.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}let z=Math.pow(2,-k),$=Math.floor(I.image.width*z),Ae=Math.floor(I.image.height*z);Y.setTexture2D(I,0),q.copyTexSubImage2D(3553,k,0,0,w.x,w.y,$,Ae),se.unbindTexture()},this.copyTextureToTexture=function(w,I,k,z=0){let $=I.image.width,Ae=I.image.height,Oe=b.convert(k.format),Ue=b.convert(k.type);Y.setTexture2D(k,0),q.pixelStorei(37440,k.flipY),q.pixelStorei(37441,k.premultiplyAlpha),q.pixelStorei(3317,k.unpackAlignment),I.isDataTexture?q.texSubImage2D(3553,z,w.x,w.y,$,Ae,Oe,Ue,I.image.data):I.isCompressedTexture?q.compressedTexSubImage2D(3553,z,w.x,w.y,I.mipmaps[0].width,I.mipmaps[0].height,Oe,I.mipmaps[0].data):q.texSubImage2D(3553,z,w.x,w.y,Oe,Ue,I.image),z===0&&k.generateMipmaps&&q.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(w,I,k,z,$=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ae=w.max.x-w.min.x+1,Oe=w.max.y-w.min.y+1,Ue=w.max.z-w.min.z+1,Be=b.convert(z.format),Ke=b.convert(z.type),qe;if(z.isData3DTexture)Y.setTexture3D(z,0),qe=32879;else if(z.isDataArrayTexture)Y.setTexture2DArray(z,0),qe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,z.flipY),q.pixelStorei(37441,z.premultiplyAlpha),q.pixelStorei(3317,z.unpackAlignment);let Ye=q.getParameter(3314),at=q.getParameter(32878),Vn=q.getParameter(3316),ci=q.getParameter(3315),ui=q.getParameter(32877),Qt=k.isCompressedTexture?k.mipmaps[0]:k.image;q.pixelStorei(3314,Qt.width),q.pixelStorei(32878,Qt.height),q.pixelStorei(3316,w.min.x),q.pixelStorei(3315,w.min.y),q.pixelStorei(32877,w.min.z),k.isDataTexture||k.isData3DTexture?q.texSubImage3D(qe,$,I.x,I.y,I.z,Ae,Oe,Ue,Be,Ke,Qt.data):k.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(qe,$,I.x,I.y,I.z,Ae,Oe,Ue,Be,Qt.data)):q.texSubImage3D(qe,$,I.x,I.y,I.z,Ae,Oe,Ue,Be,Ke,Qt),q.pixelStorei(3314,Ye),q.pixelStorei(32878,at),q.pixelStorei(3316,Vn),q.pixelStorei(3315,ci),q.pixelStorei(32877,ui),$===0&&z.generateMipmaps&&q.generateMipmap(qe),se.unbindTexture()},this.initTexture=function(w){Y.setTexture2D(w,0),se.unbindTexture()},this.resetState=function(){v=0,M=0,A=null,se.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}je.prototype.isWebGLRenderer=!0;var Ja=class extends je{};Ja.prototype.isWebGL1Renderer=!0;var Nr=class{constructor(e,t=25e-5){this.name="",this.color=new ve(e),this.density=t}clone(){return new Nr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};Nr.prototype.isFogExp2=!0;var Br=class{constructor(e,t=1,n=1e3){this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new Br(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};Br.prototype.isFog=!0;var $i=class extends Je{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};$i.prototype.isScene=!0;var ti=class{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Zt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};ti.prototype.isInterleavedBuffer=!0;var At=new T,ni=class{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ni(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};ni.prototype.isInterleavedBufferAttribute=!0;var zn=class extends ut{constructor(e){super(),this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};zn.prototype.isSpriteMaterial=!0;var Ri,vr=new T,Li=new T,Pi=new T,Di=new B,_r=new B,dh=new Me,Rs=new T,xr=new T,Ls=new T,Mu=new B,Ea=new B,Su=new B,ji=class extends Je{constructor(e){if(super(),this.type="Sprite",Ri===void 0){Ri=new nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ti(t,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new ni(n,3,0,!1)),Ri.setAttribute("uv",new ni(n,2,3,!1))}this.geometry=Ri,this.material=e!==void 0?e:new zn,this.center=new B(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),dh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Pi.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;Ps(Rs.set(-.5,-.5,0),Pi,o,Li,i,s),Ps(xr.set(.5,-.5,0),Pi,o,Li,i,s),Ps(Ls.set(.5,.5,0),Pi,o,Li,i,s),Mu.set(0,0),Ea.set(1,0),Su.set(1,1);let a=e.ray.intersectTriangle(Rs,xr,Ls,!1,vr);if(a===null&&(Ps(xr.set(-.5,.5,0),Pi,o,Li,i,s),Ea.set(0,1),a=e.ray.intersectTriangle(Rs,Ls,xr,!1,vr),a===null))return;let l=e.ray.origin.distanceTo(vr);l<e.near||l>e.far||t.push({distance:l,point:vr.clone(),uv:lt.getUV(vr,Rs,xr,Ls,Mu,Ea,Su,new B),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};ji.prototype.isSprite=!0;function Ps(r,e,t,n,i,s){Di.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(_r.x=s*Di.x-i*Di.y,_r.y=i*Di.x+s*Di.y):_r.copy(Di),r.copy(e),r.x+=_r.x,r.y+=_r.y,r.applyMatrix4(dh)}var Eu=new T,Tu=new ae,Au=new ae,ev=new T,Cu=new Me,no=class extends Re{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Me,this.bindMatrixInverse=new Me}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ae,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;Tu.fromBufferAttribute(i.attributes.skinIndex,e),Au.fromBufferAttribute(i.attributes.skinWeight,e),Eu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=Au.getComponent(s);if(o!==0){let a=Tu.getComponent(s);Cu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ev.copy(Eu).applyMatrix4(Cu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};no.prototype.isSkinnedMesh=!0;var Za=class extends Je{constructor(){super(),this.type="Bone"}};Za.prototype.isBone=!0;var $a=class extends pt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Ie,u=Ie,h,d){super(null,o,a,l,c,u,i,s,h,d),this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};$a.prototype.isDataTexture=!0;var Ur=class extends ct{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};Ur.prototype.isInstancedBufferAttribute=!0;var Ru=new Me,Lu=new Me,Ds=[],yr=new Re,ja=class extends Re{constructor(e,t,n){super(e,t),this.instanceMatrix=new Ur(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Ru),Lu.multiplyMatrices(n,Ru),yr.matrixWorld=Lu,yr.raycast(e,Ds);for(let o=0,a=Ds.length;o<a;o++){let l=Ds[o];l.instanceId=s,l.object=this,t.push(l)}Ds.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ur(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};ja.prototype.isInstancedMesh=!0;var Nn=class extends ut{constructor(e){super(),this.type="LineBasicMaterial",this.color=new ve(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}};Nn.prototype.isLineBasicMaterial=!0;var Pu=new T,Du=new T,Iu=new Me,Ta=new On,Is=new Fn,kr=class extends Je{constructor(e=new nt,t=new Nn){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Pu.fromBufferAttribute(t,i-1),Du.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Pu.distanceTo(Du);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(i),Is.radius+=s,e.ray.intersectsSphere(Is)===!1)return;Iu.copy(i).invert(),Ta.copy(e.ray).applyMatrix4(Iu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new T,u=new T,h=new T,d=new T,m=this.isLineSegments?2:1;if(n.isBufferGeometry){let g=n.index,p=n.attributes.position;if(g!==null){let v=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let A=v,E=M-1;A<E;A+=m){let y=g.getX(A),P=g.getX(A+1);if(c.fromBufferAttribute(p,y),u.fromBufferAttribute(p,P),Ta.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let Z=e.ray.origin.distanceTo(d);Z<e.near||Z>e.far||t.push({distance:Z,point:h.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{let v=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let A=v,E=M-1;A<E;A+=m){if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,A+1),Ta.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};kr.prototype.isLine=!0;var Fu=new T,Ou=new T,Hr=class extends kr{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Fu.fromBufferAttribute(t,i),Ou.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fu.distanceTo(Ou);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}};Hr.prototype.isLineSegments=!0;var Ka=class extends kr{constructor(e,t){super(e,t),this.type="LineLoop"}};Ka.prototype.isLineLoop=!0;var Vr=class extends ut{constructor(e){super(),this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}};Vr.prototype.isPointsMaterial=!0;var zu=new Me,Qa=new On,Fs=new Fn,Os=new T,el=class extends Je{constructor(e=new nt,t=new Vr){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(i),Fs.radius+=s,e.ray.intersectsSphere(Fs)===!1)return;zu.copy(i).invert(),Qa.copy(e.ray).applyMatrix4(zu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){let c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,f=m;g<f;g++){let p=c.getX(g);Os.fromBufferAttribute(h,p),Nu(Os,p,l,i,e,t,this)}}else{let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=d,f=m;g<f;g++)Os.fromBufferAttribute(h,g),Nu(Os,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};el.prototype.isPoints=!0;function Nu(r,e,t,n,i,s,o){let a=Qa.distanceSqToPoint(r);if(a<t){let l=new T;Qa.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var tl=class extends pt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.minFilter=o!==void 0?o:Lt,this.magFilter=s!==void 0?s:Lt,this.generateMipmaps=!1;let u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};tl.prototype.isVideoTexture=!0;var nl=class extends pt{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=Ie,this.minFilter=Ie,this.generateMipmaps=!1,this.needsUpdate=!0}};nl.prototype.isFramebufferTexture=!0;var il=class extends pt{constructor(e,t,n,i,s,o,a,l,c,u,h,d){super(null,o,a,l,c,u,i,s,h,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};il.prototype.isCompressedTexture=!0;var rl=class extends pt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.needsUpdate=!0}};rl.prototype.isCanvasTexture=!0;var Pt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let u=n[i],d=n[i+1]-u,m=(o-u)/d;return(i+m)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new B:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new T,i=[],s=[],o=[],a=new T,l=new Me;for(let m=0;m<=e;m++){let g=m/e;i[m]=this.getTangentAt(g,new T)}s[0]=new T,o[0]=new T;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(yt(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(i[m],s[m])}if(t===!0){let m=Math.acos(yt(s[0].dot(s[e]),-1,1));m/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ki=class extends Pt{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new B,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*u-m*h+this.aX,c=d*h+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};Ki.prototype.isEllipseCurve=!0;var io=class extends Ki{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.type="ArcCurve"}};io.prototype.isArcCurve=!0;function Vl(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,m*=u,i(o,a,d,m)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var zs=new T,Aa=new Vl,Ca=new Vl,Ra=new Vl,ro=class extends Pt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(zs.subVectors(i[0],i[1]).add(i[0]),c=zs);let h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(zs.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=zs),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),m),f=Math.pow(h.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(u),m);f<1e-4&&(f=1),g<1e-4&&(g=f),p<1e-4&&(p=f),Aa.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,f,p),Ca.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,f,p),Ra.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,f,p)}else this.curveType==="catmullrom"&&(Aa.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ca.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Ra.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Aa.calc(l),Ca.calc(l),Ra.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ro.prototype.isCatmullRomCurve3=!0;function Bu(r,e,t,n,i){let s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function tv(r,e){let t=1-r;return t*t*e}function nv(r,e){return 2*(1-r)*r*e}function iv(r,e){return r*r*e}function Er(r,e,t,n){return tv(r,e)+nv(r,t)+iv(r,n)}function rv(r,e){let t=1-r;return t*t*t*e}function sv(r,e){let t=1-r;return 3*t*t*r*e}function ov(r,e){return 3*(1-r)*r*r*e}function av(r,e){return r*r*r*e}function Tr(r,e,t,n,i){return rv(r,e)+sv(r,t)+ov(r,n)+av(r,i)}var Gr=class extends Pt{constructor(e=new B,t=new B,n=new B,i=new B){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new B){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Tr(e,i.x,s.x,o.x,a.x),Tr(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Gr.prototype.isCubicBezierCurve=!0;var so=class extends Pt{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Tr(e,i.x,s.x,o.x,a.x),Tr(e,i.y,s.y,o.y,a.y),Tr(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};so.prototype.isCubicBezierCurve3=!0;var Qi=class extends Pt{constructor(e=new B,t=new B){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new B;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Qi.prototype.isLineCurve=!0;var sl=class extends Pt{constructor(e=new T,t=new T){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends Pt{constructor(e=new B,t=new B,n=new B){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Er(e,i.x,s.x,o.x),Er(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Wr.prototype.isQuadraticBezierCurve=!0;var oo=class extends Pt{constructor(e=new T,t=new T,n=new T){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Er(e,i.x,s.x,o.x),Er(e,i.y,s.y,o.y),Er(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};oo.prototype.isQuadraticBezierCurve3=!0;var qr=class extends Pt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new B){let n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Bu(a,l.x,c.x,u.x,h.x),Bu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new B().fromArray(i))}return this}};qr.prototype.isSplineCurve=!0;var fh=Object.freeze({__proto__:null,ArcCurve:io,CatmullRomCurve3:ro,CubicBezierCurve:Gr,CubicBezierCurve3:so,EllipseCurve:Ki,LineCurve:Qi,LineCurve3:sl,QuadraticBezierCurve:Wr,QuadraticBezierCurve3:oo,SplineCurve:qr}),ol=class extends Pt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Qi(t,e))}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new fh[i.type]().fromJSON(i))}return this}},Xr=class extends ol{constructor(e){super(),this.type="Path",this.currentPoint=new B,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qi(this.currentPoint.clone(),new B(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Wr(this.currentPoint.clone(),new B(e,t),new B(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){let a=new Gr(this.currentPoint.clone(),new B(e,t),new B(n,i),new B(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){let c=new Ki(e,t,n,i,s,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var g_=new T,v_=new T,__=new T,x_=new lt;var ii=class extends Xr{constructor(e){super(e),this.uuid=Zt(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Xr().fromJSON(i))}return this}},lv={triangulate:function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=ph(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,m;if(n&&(s=fv(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(let g=t;g<i;g+=t)h=r[g],d=r[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);m=Math.max(c-a,u-l),m=m!==0?1/m:0}return Yr(s,o,t,a,l,m),o}};function ph(r,e,t,n,i){let s,o;if(i===Sv(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Uu(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Uu(s,r[s],r[s+1],o);return o&&Lo(o,o.next)&&(Zr(o),o=o.next),o}function Bn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Lo(t,t.next)||ot(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yr(r,e,t,n,i,s,o){if(!r)return;!o&&s&&_v(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?uv(r,n,i,s):cv(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),Zr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=hv(Bn(r),e,t),Yr(r,e,t,n,i,s,2)):o===2&&dv(r,e,t,n,i,s):Yr(Bn(r),e,t,n,i,s,1);break}}}function cv(r){let e=r.prev,t=r,n=r.next;if(ot(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Ni(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&ot(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function uv(r,e,t,n){let i=r.prev,s=r,o=r.next;if(ot(i,s,o)>=0)return!1;let a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,u=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,h=al(a,l,e,t,n),d=al(c,u,e,t,n),m=r.prevZ,g=r.nextZ;for(;m&&m.z>=h&&g&&g.z<=d;){if(m!==r.prev&&m!==r.next&&Ni(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&ot(m.prev,m,m.next)>=0||(m=m.prevZ,g!==r.prev&&g!==r.next&&Ni(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&ot(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;m&&m.z>=h;){if(m!==r.prev&&m!==r.next&&Ni(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&ot(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;g&&g.z<=d;){if(g!==r.prev&&g!==r.next&&Ni(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&ot(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function hv(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!Lo(i,s)&&mh(i,n,n.next,s)&&Jr(i,s)&&Jr(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Zr(n),Zr(n.next),n=r=s),n=n.next}while(n!==r);return Bn(n)}function dv(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bv(o,a)){let l=gh(o,a);o=Bn(o,o.next),l=Bn(l,l.next),Yr(o,e,t,n,i,s),Yr(l,e,t,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function fv(r,e,t,n){let i=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=ph(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(yv(c));for(i.sort(pv),s=0;s<i.length;s++)mv(i[s],t),t=Bn(t,t.next);return t}function pv(r,e){return r.x-e.x}function mv(r,e){if(e=gv(r,e),e){let t=gh(e,r);Bn(e,e.next),Bn(t,t.next)}}function gv(r,e){let t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;let a=o,l=o.x,c=o.y,u=1/0,h;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Ni(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),Jr(t,r)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&vv(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function vv(r,e){return ot(r.prev,r,e.prev)<0&&ot(e.next,r,r.next)<0}function _v(r,e,t,n){let i=r;do i.z===null&&(i.z=al(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,xv(i)}function xv(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function al(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function yv(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ni(r,e,t,n,i,s,o,a){return(i-o)*(e-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(i-o)*(n-a)>=0}function bv(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!wv(r,e)&&(Jr(r,e)&&Jr(e,r)&&Mv(r,e)&&(ot(r.prev,r,e.prev)||ot(r,e.prev,e))||Lo(r,e)&&ot(r.prev,r,r.next)>0&&ot(e.prev,e,e.next)>0)}function ot(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Lo(r,e){return r.x===e.x&&r.y===e.y}function mh(r,e,t,n){let i=Bs(ot(r,e,t)),s=Bs(ot(r,e,n)),o=Bs(ot(t,n,r)),a=Bs(ot(t,n,e));return!!(i!==s&&o!==a||i===0&&Ns(r,t,e)||s===0&&Ns(r,n,e)||o===0&&Ns(t,r,n)||a===0&&Ns(t,e,n))}function Ns(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Bs(r){return r>0?1:r<0?-1:0}function wv(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&mh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Jr(r,e){return ot(r.prev,r,r.next)<0?ot(r,e,r.next)>=0&&ot(r,r.prev,e)>=0:ot(r,e,r.prev)<0||ot(r,r.next,e)<0}function Mv(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function gh(r,e){let t=new ll(r.i,r.x,r.y),n=new ll(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Uu(r,e,t,n){let i=new ll(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ll(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sv(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var on=class{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return on.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];ku(e),Hu(n,e);let o=e.length;t.forEach(ku);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Hu(n,t[l]);let a=lv.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function ku(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Hu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Un=class extends nt{constructor(e=new ii([new B(.5,.5),new B(-.5,.5),new B(-.5,-.5),new B(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ft(i,3)),this.setAttribute("uv",new ft(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,f=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Ev;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let A,E=!1,y,P,O,Z;v&&(A=v.getSpacedPoints(u),E=!0,d=!1,y=v.computeFrenetFrames(u,!1),P=new T,O=new T,Z=new T),d||(p=0,m=0,g=0,f=0);let fe=a.extractPoints(c),G=fe.shape,_=fe.holes;if(!on.isClockWise(G)){G=G.reverse();for(let W=0,Y=_.length;W<Y;W++){let ne=_[W];on.isClockWise(ne)&&(_[W]=ne.reverse())}}let K=on.triangulateShape(G,_),D=G;for(let W=0,Y=_.length;W<Y;W++){let ne=_[W];G=G.concat(ne)}function H(W,Y,ne){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().multiplyScalar(ne).add(W)}let N=G.length,V=K.length;function L(W,Y,ne){let ge,de,Ce,Se=W.x-Y.x,be=W.y-Y.y,et=ne.x-W.x,Ze=ne.y-W.y,S=Se*Se+be*be,x=Se*Ze-be*et;if(Math.abs(x)>Number.EPSILON){let U=Math.sqrt(S),ee=Math.sqrt(et*et+Ze*Ze),he=Y.x-be/U,me=Y.y+Se/U,we=ne.x-Ze/ee,b=ne.y+et/ee,te=((we-he)*Ze-(b-me)*et)/(Se*Ze-be*et);ge=he+Se*te-W.x,de=me+be*te-W.y;let _e=ge*ge+de*de;if(_e<=2)return new B(ge,de);Ce=Math.sqrt(_e/2)}else{let U=!1;Se>Number.EPSILON?et>Number.EPSILON&&(U=!0):Se<-Number.EPSILON?et<-Number.EPSILON&&(U=!0):Math.sign(be)===Math.sign(Ze)&&(U=!0),U?(ge=-be,de=Se,Ce=Math.sqrt(S)):(ge=Se,de=be,Ce=Math.sqrt(S/2))}return new B(ge/Ce,de/Ce)}let X=[];for(let W=0,Y=D.length,ne=Y-1,ge=W+1;W<Y;W++,ne++,ge++)ne===Y&&(ne=0),ge===Y&&(ge=0),X[W]=L(D[W],D[ne],D[ge]);let j=[],ie,Q=X.concat();for(let W=0,Y=_.length;W<Y;W++){let ne=_[W];ie=[];for(let ge=0,de=ne.length,Ce=de-1,Se=ge+1;ge<de;ge++,Ce++,Se++)Ce===de&&(Ce=0),Se===de&&(Se=0),ie[ge]=L(ne[ge],ne[Ce],ne[Se]);j.push(ie),Q=Q.concat(ie)}for(let W=0;W<p;W++){let Y=W/p,ne=m*Math.cos(Y*Math.PI/2),ge=g*Math.sin(Y*Math.PI/2)+f;for(let de=0,Ce=D.length;de<Ce;de++){let Se=H(D[de],X[de],ge);Xe(Se.x,Se.y,-ne)}for(let de=0,Ce=_.length;de<Ce;de++){let Se=_[de];ie=j[de];for(let be=0,et=Se.length;be<et;be++){let Ze=H(Se[be],ie[be],ge);Xe(Ze.x,Ze.y,-ne)}}}let xe=g+f;for(let W=0;W<N;W++){let Y=d?H(G[W],Q[W],xe):G[W];E?(O.copy(y.normals[0]).multiplyScalar(Y.x),P.copy(y.binormals[0]).multiplyScalar(Y.y),Z.copy(A[0]).add(O).add(P),Xe(Z.x,Z.y,Z.z)):Xe(Y.x,Y.y,0)}for(let W=1;W<=u;W++)for(let Y=0;Y<N;Y++){let ne=d?H(G[Y],Q[Y],xe):G[Y];E?(O.copy(y.normals[W]).multiplyScalar(ne.x),P.copy(y.binormals[W]).multiplyScalar(ne.y),Z.copy(A[W]).add(O).add(P),Xe(Z.x,Z.y,Z.z)):Xe(ne.x,ne.y,h/u*W)}for(let W=p-1;W>=0;W--){let Y=W/p,ne=m*Math.cos(Y*Math.PI/2),ge=g*Math.sin(Y*Math.PI/2)+f;for(let de=0,Ce=D.length;de<Ce;de++){let Se=H(D[de],X[de],ge);Xe(Se.x,Se.y,h+ne)}for(let de=0,Ce=_.length;de<Ce;de++){let Se=_[de];ie=j[de];for(let be=0,et=Se.length;be<et;be++){let Ze=H(Se[be],ie[be],ge);E?Xe(Ze.x,Ze.y+A[u-1].y,A[u-1].x+ne):Xe(Ze.x,Ze.y,h+ne)}}}Ne(),Te();function Ne(){let W=i.length/3;if(d){let Y=0,ne=N*Y;for(let ge=0;ge<V;ge++){let de=K[ge];Pe(de[2]+ne,de[1]+ne,de[0]+ne)}Y=u+p*2,ne=N*Y;for(let ge=0;ge<V;ge++){let de=K[ge];Pe(de[0]+ne,de[1]+ne,de[2]+ne)}}else{for(let Y=0;Y<V;Y++){let ne=K[Y];Pe(ne[2],ne[1],ne[0])}for(let Y=0;Y<V;Y++){let ne=K[Y];Pe(ne[0]+N*u,ne[1]+N*u,ne[2]+N*u)}}n.addGroup(W,i.length/3-W,0)}function Te(){let W=i.length/3,Y=0;q(D,Y),Y+=D.length;for(let ne=0,ge=_.length;ne<ge;ne++){let de=_[ne];q(de,Y),Y+=de.length}n.addGroup(W,i.length/3-W,1)}function q(W,Y){let ne=W.length;for(;--ne>=0;){let ge=ne,de=ne-1;de<0&&(de=W.length-1);for(let Ce=0,Se=u+p*2;Ce<Se;Ce++){let be=N*Ce,et=N*(Ce+1),Ze=Y+ge+be,S=Y+de+be,x=Y+de+et,U=Y+ge+et;Le(Ze,S,x,U)}}}function Xe(W,Y,ne){l.push(W),l.push(Y),l.push(ne)}function Pe(W,Y,ne){se(W),se(Y),se(ne);let ge=i.length/3,de=M.generateTopUV(n,i,ge-3,ge-2,ge-1);ze(de[0]),ze(de[1]),ze(de[2])}function Le(W,Y,ne,ge){se(W),se(Y),se(ge),se(Y),se(ne),se(ge);let de=i.length/3,Ce=M.generateSideWallUV(n,i,de-6,de-3,de-2,de-1);ze(Ce[0]),ze(Ce[1]),ze(Ce[3]),ze(Ce[1]),ze(Ce[2]),ze(Ce[3])}function se(W){i.push(l[W*3+0]),i.push(l[W*3+1]),i.push(l[W*3+2])}function ze(W){s.push(W.x),s.push(W.y)}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tv(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new fh[i.type]().fromJSON(i)),new Un(n,e.options)}},Ev={generateTopUV:function(r,e,t,n,i){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new B(s,o),new B(a,l),new B(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],m=e[i*3+1],g=e[i*3+2],f=e[s*3],p=e[s*3+1],v=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new B(o,1-l),new B(c,1-h),new B(d,1-g),new B(f,1-v)]:[new B(a,1-l),new B(u,1-h),new B(m,1-g),new B(p,1-v)]}};function Tv(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var $r=class extends nt{constructor(e=new ii([new B(0,.5),new B(-.5,-.5),new B(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ft(i,3)),this.setAttribute("normal",new ft(s,3)),this.setAttribute("uv",new ft(o,2));function c(u){let h=i.length/3,d=u.extractPoints(t),m=d.shape,g=d.holes;on.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,v=g.length;p<v;p++){let M=g[p];on.isClockWise(M)===!0&&(g[p]=M.reverse())}let f=on.triangulateShape(m,g);for(let p=0,v=g.length;p<v;p++){let M=g[p];m=m.concat(M)}for(let p=0,v=m.length;p<v;p++){let M=m[p];i.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let p=0,v=f.length;p<v;p++){let M=f[p],A=M[0]+h,E=M[1]+h,y=M[2]+h;n.push(A,E,y),l+=3}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Av(t,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let o=t[e.shapes[i]];n.push(o)}return new $r(n,e.curveSegments)}};function Av(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}var ao=class extends ut{constructor(e){super(),this.type="ShadowMaterial",this.color=new ve(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}};ao.prototype.isShadowMaterial=!0;var lo=class extends Fe{constructor(e){super(e),this.type="RawShaderMaterial"}};lo.prototype.isRawShaderMaterial=!0;var jr=class extends ut{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}};jr.prototype.isMeshStandardMaterial=!0;var co=class extends jr{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new B(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};co.prototype.isMeshPhysicalMaterial=!0;var uo=class extends ut{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}};uo.prototype.isMeshPhongMaterial=!0;var ho=class extends ut{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};ho.prototype.isMeshToonMaterial=!0;var fo=class extends ut{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};fo.prototype.isMeshNormalMaterial=!0;var po=class extends ut{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};po.prototype.isMeshLambertMaterial=!0;var mo=class extends ut{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}};mo.prototype.isMeshMatcapMaterial=!0;var go=class extends Nn{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};go.prototype.isLineDashedMaterial=!0;var Cv={ShadowMaterial:ao,SpriteMaterial:zn,RawShaderMaterial:lo,ShaderMaterial:Fe,PointsMaterial:Vr,MeshPhysicalMaterial:co,MeshStandardMaterial:jr,MeshPhongMaterial:uo,MeshToonMaterial:ho,MeshNormalMaterial:fo,MeshLambertMaterial:po,MeshDepthMaterial:Or,MeshDistanceMaterial:zr,MeshBasicMaterial:Xi,MeshMatcapMaterial:mo,LineDashedMaterial:go,LineBasicMaterial:Nn,Material:ut};ut.fromType=function(r){return new Cv[r]};var st={arraySlice:function(r,e,t){return st.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){let s=r.clone();s.name=e;let o=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let m=0;m<c.times.length;++m){let g=c.times[m]*i;if(!(g<t||g>=n)){h.push(c.times[m]);for(let f=0;f<u;++f)d.push(c.values[m*u+f])}}h.length!==0&&(c.times=st.convertArray(h,c.times.constructor),c.values=st.convertArray(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);let i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=r.tracks.find(function(v){return v.name===a.name&&v.ValueTypeName===l});if(c===void 0)continue;let u=0,h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0,m=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=m/3);let g=a.times.length-1,f;if(s<=a.times[0]){let v=u,M=h-u;f=st.arraySlice(a.values,v,M)}else if(s>=a.times[g]){let v=g*h+u,M=v+h-u;f=st.arraySlice(a.values,v,M)}else{let v=a.createInterpolant(),M=u,A=h-u;v.evaluate(s),f=st.arraySlice(v.resultBuffer,M,A)}l==="quaternion"&&new vt().fromArray(f).normalize().conjugate().toArray(f);let p=c.times.length;for(let v=0;v<p;++v){let M=v*m+d;if(l==="quaternion")vt.multiplyQuaternionsFlat(c.values,M,f,0,c.values,M);else{let A=m-d*2;for(let E=0;E<A;++E)c.values[M+E]-=f[E]}}}return r.blendMode=eh,r}},an=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};an.prototype.beforeStart_=an.prototype.copySampleValue_;an.prototype.afterEnd_=an.prototype.copySampleValue_;var cl=class extends an{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fi,endingEnd:Fi}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Oi:s=e,a=2*t-n;break;case Xs:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oi:o=e,l=2*n-t;break;case Xs:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),f=g*g,p=f*g,v=-d*p+2*d*f-d*g,M=(1+d)*p+(-1.5-2*d)*f+(-.5+d)*g+1,A=(-1-m)*p+(1.5+m)*f+.5*g,E=m*p-m*f;for(let y=0;y!==a;++y)s[y]=v*o[u+y]+M*o[c+y]+A*o[l+y]+E*o[h+y];return s}},vo=class extends an{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},ul=class extends an{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},zt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=st.convertArray(t,this.TimeBufferType),this.values=st.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:st.convertArray(e.times,Array),values:st.convertArray(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ws:t=this.InterpolantFactoryMethodDiscrete;break;case qs:t=this.InterpolantFactoryMethodLinear;break;case $o:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return qs;case this.InterpolantFactoryMethodSmooth:return $o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=st.arraySlice(n,s,o),this.values=st.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&st.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=st.arraySlice(this.times),t=st.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===$o,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){let f=t[h+g];if(f!==t[d+g]||f!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=st.arraySlice(e,0,o),this.values=st.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=st.arraySlice(this.times,0),t=st.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};zt.prototype.TimeBufferType=Float32Array;zt.prototype.ValueBufferType=Float32Array;zt.prototype.DefaultInterpolation=qs;var kn=class extends zt{};kn.prototype.ValueTypeName="bool";kn.prototype.ValueBufferType=Array;kn.prototype.DefaultInterpolation=Ws;kn.prototype.InterpolantFactoryMethodLinear=void 0;kn.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends zt{};_o.prototype.ValueTypeName="color";var er=class extends zt{};er.prototype.ValueTypeName="number";var hl=class extends an{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)vt.slerpFlat(s,0,o,c-a,o,c,l);return s}},ri=class extends zt{InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}};ri.prototype.ValueTypeName="quaternion";ri.prototype.DefaultInterpolation=qs;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Hn=class extends zt{};Hn.prototype.ValueTypeName="string";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=Ws;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var tr=class extends zt{};tr.prototype.ValueTypeName="vector";var xo=class{constructor(e,t=-1,n,i=kl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Zt(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Lv(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(zt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=st.getKeyframeOrder(l);l=st.sortedArray(l,1,u),c=st.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new er(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,m,g,f){if(m.length!==0){let p=[],v=[];st.flattenJSON(m,p,v,g),p.length!==0&&f.push(new h(d,p,v))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let f=0;f<d[g].morphTargets.length;f++)m[d[g].morphTargets[f]]=-1;for(let f in m){let p=[],v=[];for(let M=0;M!==d[g].morphTargets.length;++M){let A=d[g];p.push(A.time),v.push(A.morphTarget===f?1:0)}i.push(new er(".morphTargetInfluence["+f+"]",p,v))}l=m.length*o}else{let m=".bones["+t[h].name+"]";n(tr,m+".position",d,"pos",i),n(ri,m+".quaternion",d,"rot",i),n(tr,m+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Rv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return er;case"vector":case"vector2":case"vector3":case"vector4":return tr;case"color":return _o;case"quaternion":return ri;case"bool":case"boolean":return kn;case"string":return Hn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Lv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Rv(r.type);if(r.times===void 0){let t=[],n=[];st.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var nr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},dl=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},Pv=new dl,ln=class{constructor(e){this.manager=e!==void 0?e:Pv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},pn={},fl=class extends ln{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=nr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(pn[e]!==void 0){pn[e].push({onLoad:t,onProgress:n,onError:i});return}pn[e]=[],pn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=pn[e],h=c.body.getReader(),d=c.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0,f=0,p=new ReadableStream({start(v){M();function M(){h.read().then(({done:A,value:E})=>{if(A)v.close();else{f+=E.byteLength;let y=new ProgressEvent("progress",{lengthComputable:g,loaded:f,total:m});for(let P=0,O=u.length;P<O;P++){let Z=u[P];Z.onProgress&&Z.onProgress(y)}v.enqueue(E),M()}})}}});return new Response(p)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{nr.add(e,c);let u=pn[e];delete pn[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{let u=pn[e];if(u===void 0)throw this.manager.itemError(e),c;delete pn[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var yo=class extends ln{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=nr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Lr("img");function l(){u(),nr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},pl=class extends ln{constructor(e){super(e)}load(e,t,n,i){let s=new Ji,o=new yo(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}};var wt=class extends ln{constructor(e){super(e)}load(e,t,n,i){let s=new pt,o=new yo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Nt=class extends Je{constructor(e,t=1){super(),this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};Nt.prototype.isLight=!0;var ml=class extends Nt{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Je.DefaultUp),this.updateMatrix(),this.groundColor=new ve(t)}copy(e){return Nt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};ml.prototype.isHemisphereLight=!0;var Vu=new Me,Gu=new T,Wu=new T,Kr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zi,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gu),Wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wu),t.updateMatrixWorld(),Vu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bo=class extends Kr{constructor(){super(new bt(50,1,.5,500)),this.focus=1}updateMatrices(e){let t=this.camera,n=Ba*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};bo.prototype.isSpotLightShadow=!0;var gl=class extends Nt{constructor(e,t,n=0,i=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(Je.DefaultUp),this.updateMatrix(),this.target=new Je,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new bo}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};gl.prototype.isSpotLight=!0;var qu=new Me,br=new T,La=new T,wo=class extends Kr{constructor(){super(new bt(90,1,.5,500)),this._frameExtents=new B(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),br.setFromMatrixPosition(e.matrixWorld),n.position.copy(br),La.copy(n.position),La.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(La),n.updateMatrixWorld(),i.makeTranslation(-br.x,-br.y,-br.z),qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu)}};wo.prototype.isPointLightShadow=!0;var vl=class extends Nt{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};vl.prototype.isPointLight=!0;var Mo=class extends Kr{constructor(){super(new Fr(-5,5,5,-5,.5,500))}};Mo.prototype.isDirectionalLightShadow=!0;var _l=class extends Nt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Je.DefaultUp),this.updateMatrix(),this.target=new Je,this.shadow=new Mo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};_l.prototype.isDirectionalLight=!0;var xl=class extends Nt{constructor(e,t){super(e,t),this.type="AmbientLight"}};xl.prototype.isAmbientLight=!0;var yl=class extends Nt{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};yl.prototype.isRectAreaLight=!0;var So=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}};So.prototype.isSphericalHarmonics3=!0;var Qr=class extends Nt{constructor(e=new So,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};Qr.prototype.isLightProbe=!0;var bl=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},wl=class extends nt{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};wl.prototype.isInstancedBufferGeometry=!0;var Ml=class extends ln{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=nr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){nr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};Ml.prototype.isImageBitmapLoader=!0;var Us,Dv={getContext:function(){return Us===void 0&&(Us=new(window.AudioContext||window.webkitAudioContext)),Us},setContext:function(r){Us=r}},Sl=class extends ln{constructor(e){super(e)}load(e,t,n,i){let s=this,o=new fl(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{let l=a.slice(0);Dv.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}},El=class extends Qr{constructor(e,t,n=1){super(void 0,n);let i=new ve().set(e),s=new ve().set(t),o=new T(i.r,i.g,i.b),a=new T(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}};El.prototype.isHemisphereLightProbe=!0;var Tl=class extends Qr{constructor(e,t=1){super(void 0,t);let n=new ve().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}};Tl.prototype.isAmbientLightProbe=!0;var Eo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Xu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Xu(){return(typeof performance>"u"?Date:performance).now()}var Al=class extends Je{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var Cl=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},Rl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){vt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let o=this._workIndex*s;vt.multiplyQuaternionsFlat(e,o,e,t,e,n),vt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Gl="\\[\\]\\.:\\/",Iv=new RegExp("["+Gl+"]","g"),Wl="[^"+Gl+"]",Fv="[^"+Gl.replace("\\.","")+"]",Ov=/((?:WC+[\/:])*)/.source.replace("WC",Wl),zv=/(WCOD+)?/.source.replace("WCOD",Fv),Nv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wl),Bv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wl),Uv=new RegExp("^"+Ov+zv+Nv+Bv+"$"),kv=["material","materials","bones"],Ll=class{constructor(e,t,n){let i=n||Ve.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ve=class{constructor(e,t,n){this.path=t,this.parsedPath=n||Ve.parseTrackName(t),this.node=Ve.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ve.Composite(e,t,n):new Ve(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Iv,"")}static parseTrackName(e){let t=Uv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);kv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=Ve.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=Ll;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pl=class{constructor(){this.uuid=Zt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length,a,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){let d=arguments[u],m=d.uuid,g=t[m];if(g===void 0){g=l++,t[m]=g,e.push(d);for(let f=0,p=o;f!==p;++f)s[f].push(new Ve(d,n[f],i[f]))}else if(g<c){a=e[g];let f=--c,p=e[f];t[p.uuid]=g,e[g]=p,t[m]=f,e[f]=d;for(let v=0,M=o;v!==M;++v){let A=s[v],E=A[f],y=A[g];A[g]=E,y===void 0&&(y=new Ve(d,n[v],i[v])),A[f]=y}}else e[g]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){let h=s++,d=e[h];t[d.uuid]=u,e[u]=d,t[c]=h,e[h]=l;for(let m=0,g=i;m!==g;++m){let f=n[m],p=f[h],v=f[u];f[u]=p,f[h]=v}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],u=c.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){let d=--s,m=e[d],g=--o,f=e[g];t[m.uuid]=h,e[h]=m,t[f.uuid]=d,e[d]=f,e.pop();for(let p=0,v=i;p!==v;++p){let M=n[p],A=M[d],E=M[g];M[h]=A,M[d]=E,M.pop()}}else{let d=--o,m=e[d];d>0&&(t[m.uuid]=h),e[h]=m,e.pop();for(let g=0,f=i;g!==f;++g){let p=n[g];p[h]=p[d],p.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],s=this._bindings;if(i!==void 0)return s[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(h);for(let d=u,m=l.length;d!==m;++d){let g=l[d];h[d]=new Ve(g,e,t)}return h}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}};Pl.prototype.isAnimationObjectGroup=!0;var Dl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Fi,endingEnd:Fi};for(let c=0;c!==o;++c){let u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ff,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case eh:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case kl:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,o=n===pf;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===df){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Oi,i.endingEnd=Oi):(e?i.endingStart=this.zeroSlopeAtStart?Oi:Fi:i.endingStart=Xs,t?i.endingEnd=this.zeroSlopeAtEnd?Oi:Fi:i.endingEnd=Xs)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}},Il=class extends $t{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){let d=i[h],m=d.name,g=u[m];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}let f=t&&t._propertyBindings[h].binding.parsedPath;g=new Rl(Ve.create(n,m,f),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new vo(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,o=typeof e=="string"?xo.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=kl),l!==void 0){let h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Dl(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?xo.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};Il.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var es=class{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new es(this.value.clone===void 0?this.value:this.value.clone())}},Fl=class extends ti{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};Fl.prototype.isInstancedInterleavedBuffer=!0;var Ol=class{constructor(e,t,n,i,s){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};Ol.prototype.isGLBufferAttribute=!0;var ts=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Yu=new B,si=class{constructor(e=new B(1/0,1/0),t=new B(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Yu.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};si.prototype.isBox2=!0;var Ju=new T,ks=new T,zl=class{constructor(e=new T,t=new T){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ju.subVectors(e,this.start),ks.subVectors(this.end,this.start);let n=ks.dot(ks),s=ks.dot(Ju)/n;return t&&(s=yt(s,0,1)),s}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Pn=new T,Hs=new Me,Pa=new Me,Nl=class extends Hr{constructor(e){let t=vh(e),n=new nt,i=[],s=[],o=new ve(0,0,1),a=new ve(0,1,0);for(let c=0;c<t.length;c++){let u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new ft(i,3)),n.setAttribute("color",new ft(s,3));let l=new Nn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");Pa.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){let a=t[s];a.parent&&a.parent.isBone&&(Hs.multiplyMatrices(Pa,a.matrixWorld),Pn.setFromMatrixPosition(Hs),i.setXYZ(o,Pn.x,Pn.y,Pn.z),Hs.multiplyMatrices(Pa,a.parent.matrixWorld),Pn.setFromMatrixPosition(Hs),i.setXYZ(o+1,Pn.x,Pn.y,Pn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function vh(r){let e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,vh(r.children[t]));return e}var Bl=class extends Hr{constructor(e=10,t=10,n=4473924,i=8947848){n=new ve(n),i=new ve(i);let s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,m=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let f=d===s?n:i;f.toArray(c,m),m+=3,f.toArray(c,m),m+=3,f.toArray(c,m),m+=3,f.toArray(c,m),m+=3}let u=new nt;u.setAttribute("position",new ft(l,3)),u.setAttribute("color",new ft(c,3));let h=new Nn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}};var _h=new ArrayBuffer(4),y_=new Float32Array(_h),b_=new Uint32Array(_h),nn=new Uint32Array(512),rn=new Uint32Array(512);for(let r=0;r<256;++r){let e=r-127;e<-27?(nn[r]=0,nn[r|256]=32768,rn[r]=24,rn[r|256]=24):e<-14?(nn[r]=1024>>-e-14,nn[r|256]=1024>>-e-14|32768,rn[r]=-e-1,rn[r|256]=-e-1):e<=15?(nn[r]=e+15<<10,nn[r|256]=e+15<<10|32768,rn[r]=13,rn[r|256]=13):e<128?(nn[r]=31744,nn[r|256]=64512,rn[r]=24,rn[r|256]=24):(nn[r]=31744,nn[r|256]=64512,rn[r]=13,rn[r|256]=13)}var xh=new Uint32Array(2048),ns=new Uint32Array(64),Hv=new Uint32Array(64);for(let r=1;r<1024;++r){let e=r<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,xh[r]=e|t}for(let r=1024;r<2048;++r)xh[r]=939524096+(r-1024<<13);for(let r=1;r<31;++r)ns[r]=r<<23;ns[31]=1199570944;ns[32]=2147483648;for(let r=33;r<63;++r)ns[r]=2147483648+(r-32<<23);ns[63]=3347054592;for(let r=1;r<64;++r)r!==32&&(Hv[r]=1024);Pt.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Pt.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};Xr.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};Bl.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Nl.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};ln.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),bl.extractUrlBase(r)};ln.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};si.prototype.center=function(r){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(r)};si.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};si.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};si.prototype.size=function(r){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(r)};Ft.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};Ft.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ft.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Ft.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Ft.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};xn.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};Fn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Zi.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};zl.prototype.center=function(r){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(r)};gt.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};gt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};gt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};gt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};gt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};gt.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Me.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};Me.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};Me.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new T().setFromMatrixColumn(this,3)};Me.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};Me.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Me.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Me.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Me.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Me.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};Me.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Me.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Me.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Me.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Me.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Me.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Me.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Me.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Me.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};Me.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};qt.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};vt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};vt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};On.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};On.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};On.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};lt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};lt.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};lt.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};lt.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};lt.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};lt.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),lt.getBarycoord(r,e,t,n,i)};lt.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),lt.getNormal(r,e,t,n)};ii.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};ii.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Un(this,r)};ii.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new $r(this,r)};B.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};B.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};B.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};T.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};T.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};T.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};T.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};T.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};T.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};T.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};T.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};T.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ae.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};ae.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Je.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Je.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Je.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};Je.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Je.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Je.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Re.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Re.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),mf},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});no.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};bt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(Nt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(ct.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Ys},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Ys)}}});ct.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Ys:Rr),this};ct.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},ct.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};nt.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};nt.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new ct(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};nt.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};nt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};nt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};nt.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};nt.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(nt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});ti.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Ys:Rr),this};ti.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Un.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Un.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Un.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};$i.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};es.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(ut.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ve}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===$u}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Fe.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});je.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};je.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};je.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};je.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};je.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};je.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};je.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};je.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};je.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};je.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};je.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};je.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};je.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};je.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};je.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};je.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};je.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};je.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};je.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};je.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};je.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};je.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};je.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};je.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};je.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(je.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?rt:vn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(hh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Ct.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});Al.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new Sl().load(r,function(n){e.setBuffer(n)}),this};Cl.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Ir.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};Ir.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};_n.crossOrigin=void 0;_n.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let i=new wt;i.setCrossOrigin(this.crossOrigin);let s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};_n.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let i=new pl;i.setCrossOrigin(this.crossOrigin);let s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};_n.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};_n.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);var Vv=()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,Gv=()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform vec4 color1;
        uniform vec4 color2;
        uniform vec4 color3;
        uniform float size;
        int OCTAVES = 4;
        uniform float seed;
        uniform float time;
        bool should_dither = true;

        float rand(vec2 coord) {
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        bool dither(vec2 uv1, vec2 uv2) {
            return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }
        
        // by Leukbaars from https://www.shadertoy.com/view/4tK3zR
        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return m = smoothstep(r-.10*r,r,m);
        }
        
        float crater(vec2 uv) {
            float c = 1.0;
            for (int i = 0; i < 2; i++) {
                c *= circleNoise((uv * size) + (float(i+1)+10.));
            }
            return 1.0 - c;
        }

        void main() {
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            // we use this val later to interpolate between shades
            bool dith = dither(uv, vUv.xy);
            
            // distance from center
            float d = distance(uv, vec2(0.5));
            
            // optional rotation, do this after the dither or the dither will look very messed up
            uv = rotate(uv, time*0.1);
            
            // two noise values with one slightly offset according to light source, to create shadows later
            float n = fbm(uv * size);
            float n2 = fbm(uv * size + (rotate(light_origin, rotation)-0.5) * 0.5);
            
            // step noise values to determine where the edge of the asteroid is
            // step cutoff value depends on distance from center
            float n_step = step(0.2, n - d);
            float n2_step = step(0.2, n2 - d);
            
            // with this val we can determine where the shadows should be
            float noise_rel = (n2_step + n2) - (n_step + n);
            
            // two crater values, again one extra for the shadows
            float c1 = crater(uv );
            float c2 = crater(uv + (light_origin-0.5)*0.03);
        
            // now we just assign colors depending on noise values and crater values
            // base
            vec4 col = color2;
            
            // noise
            if (noise_rel < -0.06 || (noise_rel < -0.04 && (dith || !should_dither))) {
                col = color1;
            }
            if (noise_rel > 0.05 || (noise_rel > 0.03 && (dith || !should_dither))) {
                col = color3;
            }
            
            // crater
            if (c1 > 0.4)  {
                col = color2;
            }
            if (c2<c1) {
                col = color3;
            }
            
            gl_FragColor = vec4(col.rgb, n_step * col.a);
        }
    `,yh=(r=new B(.39,.7),e=null,t=0)=>{let n=e||[new ae(.6078431372549019,.6196078431372549,.7215686274509804,1),new ae(.2784313725490196,.3803921568627451,.48627450980392156,1),new ae(.20784313725490197,.2235294117647059,.3333333333333333,1)],i=new Ge(1.5,1.5),s=new Fe({uniforms:{pixels:{value:100},color1:{value:n[0]},size:{value:Math.random()*10},color2:{value:n[1]},color3:{value:n[2]},light_origin:{value:r},rotation:{value:t},seed:{value:We()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:Vv(),fragmentShader:Gv(),transparent:!0}),o=new Re(i,s);return new Qe().add(o)};var Wv=()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,qv=()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        float light_distance1 = 0.362;
        float light_distance2 = 0.525;
        uniform float time_speed;
        float dither_size = 2.0;
        uniform sampler2D colors;
        float size = 10.0;
        int OCTAVES = 4;
        uniform float seed;
        uniform float time;
        bool should_dither = true;

        float rand(vec2 coord) {
            coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        bool dither(vec2 uv1, vec2 uv2) {
            return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        
        void main() {
            //pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            bool dith = dither(uv, vUv.xy);
            
            // cut out a circle
            float d_circle = distance(uv, vec2(0.5));
            float a = step(d_circle, 0.49999);
            
            uv = spherify(uv);
            
            // check distance distance to light
            float d_light = distance(uv , vec2(light_origin));
            
            uv = rotate(uv, rotation);
            
            // noise
            float f = fbm(uv*size+vec2(time*time_speed, 0.0));
            
            // remap light
            d_light = smoothstep(-0.3, 1.2, d_light);
            
            if (d_light < light_distance1) {
                d_light *= 0.9;
            }
            if (d_light < light_distance2) {
                d_light *= 0.9;
            }
            
            
            float c = d_light*pow(f,0.8)*3.5; // change the magic nums here for different light strengths
            
            // apply dithering
            if (dith || !should_dither) {
                c += 0.02;
                c *= 1.05;
            }
            
            // now we can assign colors based on distance to light origin
            float posterize = floor(c*4.0)/4.0;
            vec4 col = texture(colors, vec2(posterize, 0.0));
            
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `;function bh(r=new B(.39,.7),e=null,t=.1,n=0){let i=new wt().load("src/colorScheme/colorScheme2.png");i.magFilter=Ie,i.minFilter=Ie;let s=new Ge(1,1),o=new Fe({uniforms:{pixels:{value:100},colors:{value:i},light_origin:{value:r},time_speed:{value:t},rotation:{value:n},seed:{value:We()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:Wv(),fragmentShader:qv(),transparent:!0}),a=new Re(s,o);return new Qe().add(a)}var wh=()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,Mh=()=>`
        varying vec3 vUv;
        float pixels = 100.0;
        uniform float cloud_cover;
        uniform vec2 light_origin;
        uniform float time_speed;
        uniform float stretch;
        uniform float cloud_curve;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        uniform float rotation;

        uniform vec4 base_color;
        uniform vec4 outline_color;
        uniform vec4 shadow_base_color;
        uniform vec4 shadow_outline_color;

        float size = 9.0;
        int OCTAVES = 5;
        uniform float seed;
        uniform float time;


        float rand(vec2 coord) {
            coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }

        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }

        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return smoothstep(0.0, r, m*0.75);
        }

        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }

        float cloud_alpha(vec2 uv) {
            float c_noise = 0.0;
            
            // more iterations for more turbulence
            for (int i = 0; i < 9; i++) {
                c_noise += circleNoise((uv * size * 0.3) + (float(i+1)+10.) + (vec2(time*time_speed, 0.0)));
            }
            float fbm = fbm(uv*size+c_noise + vec2(time*time_speed, 0.0));
            
            return fbm;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }

        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            // distance to light source
            float d_light = distance(uv , light_origin);
            
            // cut out a circle
            float d_circle = distance(uv, vec2(0.5));
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(d_circle, 0.49999);
            
            uv = rotate(uv, rotation);
            
            // map to sphere
            uv = spherify(uv);
            
            // slightly make uv go down on the right, and up in the left
            uv.y += smoothstep(0.0, cloud_curve, abs(uv.x-0.4));
            
            float c = cloud_alpha(uv*vec2(1.0, stretch));
            
            // assign some colors based on cloud depth & distance from light
            vec4 col = base_color;
            if (c < cloud_cover + 0.03) {
                col = outline_color;
            }
            if (d_light + c*0.2 > light_border_1) {
                col = shadow_base_color;
        
            }
            if (d_light + c*0.2 > light_border_2) {
                col = shadow_outline_color;
            }
            gl_FragColor = vec4(col.rgb, step(cloud_cover, c) * a * col.a);
        }
    `;function Sh(r=new B(.39,.7),e=.538,t,n=1,i=.1,s=0,o=1.3){let a=t||[new ae(.941176,.709804,.254902,1),new ae(.811765,.458824,.168627,1),new ae(.670588,.317647,.188235,1),new ae(.490196,.219608,.2,1)],l=new Ge(1,1),c=new Fe({uniforms:{base_color:{value:a[0]},outline_color:{value:a[1]},shadow_base_color:{value:a[2]},shadow_outline_color:{value:a[3]},cloud_cover:{value:e},stretch:{value:n},cloud_curve:{value:o},time_speed:{value:i},rotation:{value:s},light_origin:{value:r},seed:{value:1},time:{value:0}},vertexShader:wh(),fragmentShader:Mh(),transparent:!0}),u=new Ge(1,1),h=new Fe({uniforms:{base_color:{value:a[0]},outline_color:{value:a[1]},shadow_base_color:{value:a[2]},shadow_outline_color:{value:a[3]},cloud_cover:{value:0},stretch:{value:n},cloud_curve:{value:0},time_speed:{value:i},rotation:{value:s},light_origin:{value:r},seed:{value:We()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:wh(),fragmentShader:Mh(),transparent:!0});return new Re(u,h)}var Xv=()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,Yv=()=>`
        varying vec3 vUv;
        float pixels = 100.0;
        uniform float cloud_cover;
        uniform vec2 light_origin;
        uniform float time_speed;
        uniform float stretch;
        uniform float cloud_curve;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        uniform float rotation;

        uniform vec4 base_color;
        uniform vec4 outline_color;
        uniform vec4 shadow_base_color;
        uniform vec4 shadow_outline_color;

        float size = 9.0;
        int OCTAVES = 5;
        uniform float seed;
        uniform float time;


        float rand(vec2 coord) {
            coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }

        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }

        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return smoothstep(0.0, r, m*0.75);
        }

        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }

        float cloud_alpha(vec2 uv) {
            float c_noise = 0.0;
            
            // more iterations for more turbulence
            for (int i = 0; i < 9; i++) {
                c_noise += circleNoise((uv * size * 0.3) + (float(i+1)+10.) + (vec2(time*time_speed, 0.0)));
            }
            float fbm = fbm(uv*size+c_noise + vec2(time*time_speed, 0.0));
            
            return fbm;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }

        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            // distance to light source
            float d_light = distance(uv , light_origin);
            
            // cut out a circle
            float d_circle = distance(uv, vec2(0.5));
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(d_circle, 0.49999);
            
            uv = rotate(uv, rotation);
            
            // map to sphere
            uv = spherify(uv);
            
            // slightly make uv go down on the right, and up in the left
            uv.y += smoothstep(0.0, cloud_curve, abs(uv.x-0.4));
            
            float c = cloud_alpha(uv*vec2(1.0, stretch));
            
            // assign some colors based on cloud depth & distance from light
            vec4 col = base_color;
            if (c < cloud_cover + 0.03) {
                col = outline_color;
            }
            if (d_light + c*0.2 > light_border_1) {
                col = shadow_base_color;
        
            }
            if (d_light + c*0.2 > light_border_2) {
                col = shadow_outline_color;
            }
            gl_FragColor = vec4(col.rgb, step(cloud_cover, c) * a * col.a);
        }
    `;function Eh(r=new B(.39,.7),e=.538,t,n=1,i=.1,s=0,o=1.3){let a=t||[new ae(.231373,.12549,.152941,1),new ae(.231373,.12549,.152941,1),new ae(.129412,.0941176,.105882,1),new ae(.129412,.0941176,.105882,1)],l=new Ge(1,1),c=new Fe({uniforms:{base_color:{value:a[0]},outline_color:{value:a[1]},shadow_base_color:{value:a[2]},shadow_outline_color:{value:a[3]},cloud_cover:{value:e},stretch:{value:n},cloud_curve:{value:o},time_speed:{value:i},rotation:{value:s},light_origin:{value:r},seed:{value:We()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:Xv(),fragmentShader:Yv(),transparent:!0});return new Re(l,c)}var Th=()=>{let r=new Qe,e=Sh(),t=Eh();return r.add(e),r.add(t),r};var Jv=()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,Zv=()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform float time_speed;
        uniform float cloud_cover;
        float stretch = 2.0;
        float cloud_curve = 1.3;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        float bands = 1.0;
        bool should_dither = true;
        
        uniform sampler2D colorscheme;
        uniform sampler2D dark_colorscheme;
        
        float size = 15.0;
        int OCTAVES = 6;
        uniform float seed;
        uniform float time;

        float rand(vec2 coord) {
            coord = mod(coord, vec2(2.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return smoothstep(0.0, r, m*0.75);
        }
        
        float turbulence(vec2 uv) {
            float c_noise = 0.0;
            
            
            // more iterations for more turbulence
            for (int i = 0; i < 10; i++) {
                c_noise += circleNoise((uv * size *0.3) + (float(i+1)+10.) + (vec2(time * time_speed, 0.0)));
            }
            return c_noise;
        }
        
        bool dither(vec2 uv_pixel, vec2 uv_real) {
            return mod(uv_pixel.x+uv_real.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }
        

        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            float light_d = distance(uv, light_origin);
	
            // we use this value later to dither between colors
            bool dith = dither(uv, vUv.xy);
            
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(length(uv-vec2(0.5)), 0.49999);
            
            // rotate planet
            uv = rotate(uv, rotation);
            
            // map to sphere
            uv = spherify(uv);
        
            // a band is just one dimensional noise
            float band = fbm(vec2(0.0, uv.y*size*bands));
            
            // turbulence value is circles on top of each other
            float turb = turbulence(uv);
        
            // by layering multiple noise values & combining with turbulence and bands
            // we get some dynamic looking shape	
            float fbm1 = fbm(uv*size);
            float fbm2 = fbm(uv*vec2(1.0, 2.0)*size+fbm1+vec2(-time*time_speed,0.0)+turb);
            
            // all of this is just increasing some contrast & applying light
            fbm2 *= pow(band,2.0)*7.0;
            float light = fbm2 + light_d*1.8;
            fbm2 += pow(light_d, 1.0)-0.3;
            fbm2 = smoothstep(-0.2, 4.0-fbm2, light);
            
            // apply the dither value
            if (dith && should_dither) {
                fbm2 *= 1.1;
            }
            
            // finally add colors
            float posterized = floor(fbm2*4.0)/2.0;
            vec4 col;
            if (fbm2 < 0.625) {
                col = texture(colorscheme, vec2(posterized, uv.y));
            } else {
                col = texture(dark_colorscheme, vec2(posterized-1.0, uv.y));
            }

            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `;function Ah(r=new B(.39,.7),e=.1){let t=new wt().load("src/colorScheme/colorScheme1.png");t.magFilter=Ie,t.minFilter=Ie;let n=new wt().load("src/colorScheme/colorScheme2.png");n.magFilter=Ie,n.minFilter=Ie;let i=new Ge(1,1),s=new Fe({uniforms:{colorscheme:{value:t},dark_colorscheme:{value:n},pixels:{value:150},light_origin:{value:r},time_speed:{value:e},rotation:{value:Math.random()},seed:{value:We()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:Jv(),fragmentShader:Zv(),transparent:!0});return new Re(i,s)}var $v=()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,jv=()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform float time_speed;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        uniform float ring_width;
        uniform float ring_perspective;
        uniform float scale_rel_to_planet;
        
        uniform sampler2D colorscheme;
        uniform sampler2D dark_colorscheme;
        
        float size = 25.0;
        int OCTAVES = 8;
        uniform float seed;
        uniform float time;

        float rand(vec2 coord) {
            coord = mod(coord, vec2(2.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return smoothstep(0.0, r, m*0.75);
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }

        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            float light_d = distance(uv, light_origin);
            uv = rotate(uv, rotation);
            
            // center is used to determine ring position
            vec2 uv_center = uv - vec2(0.0, 0.5);
            
            // tilt ring
            uv_center *= vec2(1.0, ring_perspective);
            float center_d = distance(uv_center,vec2(0.5, 0.0));
            
            
            // cut out 2 circles of different sizes and only intersection of the 2.
            float ring = smoothstep(0.5-ring_width*2.0, 0.5-ring_width, center_d);
            ring *= smoothstep(center_d-ring_width, center_d, 0.4);
            
            // pretend like the ring goes behind the planet by removing it if it's in the upper half.
            if (uv.y < 0.5) {
                ring *= step(1.0/scale_rel_to_planet, distance(uv,vec2(0.5)));
            }
            
            // rotate material in the ring
            uv_center = rotate(uv_center+vec2(0, 0.5), time*time_speed);
            // some noise
            ring *= fbm(uv_center*size);
            
            // apply some colors based on final value
            float posterized = floor((ring+pow(light_d, 2.0)*2.0)*4.0)/4.0;
            vec4 col;
            if (posterized <= 1.0) {
                col = texture(colorscheme, vec2(posterized, uv.y));
            } else {
                col = texture(dark_colorscheme, vec2(posterized-1.0, uv.y));
            }
            float ring_a = step(0.28, ring);

            gl_FragColor = vec4(col.rgb, ring_a * col.a);
        }
    `;function Ch(r=new B(.39,.7),e=.1,t=.143,n=6,i=4){let s=new wt().load("src/colorScheme/colorScheme1.png");s.magFilter=Ie,s.minFilter=Ie;let o=new wt().load("src/colorScheme/colorScheme2.png");o.magFilter=Ie,o.minFilter=Ie;let a=new Ge(1,1),l=new Fe({uniforms:{colorscheme:{value:s},dark_colorscheme:{value:o},ring_width:{value:t},ring_perspective:{value:n},scale_rel_to_planet:{value:i},pixels:{value:250},light_origin:{value:r},time_speed:{value:e},rotation:{value:Math.random()},seed:{value:We()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:$v(),fragmentShader:jv(),transparent:!0});return new Re(a,l)}var Rh=()=>{let r=new Qe,e=Ch(),t=Ah();return e.position.z=.01,e.scale.set(2,2),r.add(t),r.add(e),r};var Kv=()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,Qv=()=>`
        varying vec3 vUv;
        uniform float lightIntensity;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform float time_speed;
        float dither_size = 2.0;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        uniform vec4 color1;
        uniform vec4 color2;
        uniform vec4 color3;
        float size = 10.0;
        int OCTAVES = 20;
        uniform float seed;
        uniform float time;
        bool should_dither = true;

        float rand(vec2 coord) {
            coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }

        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }

        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        bool dither(vec2 uv1, vec2 uv2) {
            return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }

        void main() {
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            // check distance from center & distance to light
            float d_circle = distance(uv, vec2(0.5));
            float d_light = distance(uv , vec2(light_origin));
            // cut out a circle
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(d_circle, 0.49999);
            
            bool dith = dither(uv ,vUv.xy);
            uv = rotate(uv, rotation);

            // get a noise value with light distance added
            // this creates a moving dynamic shape
            float fbm1 = fbm(uv);
            d_light += fbm(uv*size+fbm1+vec2(time*time_speed, 0.0))*lightIntensity;
            
            // size of edge in which colors should be dithered
            float dither_border = (1.0/pixels)*dither_size;

            // now we can assign colors based on distance to light origin
            vec4 col = color1;
            if (d_light > light_border_1) {
                col = color2;
                if (d_light < light_border_1 + dither_border && (dith || !should_dither)) {
                    col = color1;
                }
            }
            if (d_light > light_border_2) {
                col = color3;
                if (d_light < light_border_2 + dither_border && (dith || !should_dither)) {
                    col = color2;
                }
            }
            
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `;function sr(r=new B(.39,.7),e=.1,t=null,n=.1,i=0){let s=t||[new ae(.6078431372549019,.6196078431372549,.7215686274509804,1),new ae(.2784313725490196,.3803921568627451,.48627450980392156,1),new ae(.20784313725490197,.2235294117647059,.3333333333333333,1)],o=new Ge(1,1),a=new Fe({uniforms:{pixels:{value:100},color1:{value:s[0]},color2:{value:s[1]},color3:{value:s[2]},lightIntensity:{value:e},light_origin:{value:r},time_speed:{value:n},rotation:{value:i},seed:{value:We()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:Kv(),fragmentShader:Qv(),transparent:!0});return new Re(o,a)}var e_=()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,t_=()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float rotation;
        uniform float cloud_cover;
        uniform vec2 light_origin;
        uniform float time_speed;
        uniform float stretch;
        float cloud_curve = 1.3;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        
        uniform vec4 base_color;
        uniform vec4 outline_color;
        uniform vec4 shadow_base_color;
        uniform vec4 shadow_outline_color;
        
        float size = 4.0;
        int OCTAVES = 4;
        uniform float seed;
        
        uniform float time;
        
        float rand(vec2 coord) {
            coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return smoothstep(0.0, r, m*0.75);
        }
        
        float cloud_alpha(vec2 uv) {
            float c_noise = 0.0;
            
            // more iterations for more turbulence
            for (int i = 0; i < 9; i++) {
                c_noise += circleNoise((uv * size * 0.3) + (float(i+1)+10.) + (vec2(time*time_speed, 0.0)));
            }
            float fbm = fbm(uv*size+c_noise + vec2(time*time_speed, 0.0));
            
            return fbm;//step(a_cutoff, fbm);
        }
        
        bool dither(vec2 uv_pixel, vec2 uv_real) {
            return mod(uv_pixel.x+uv_real.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }
        
        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            // distance to light source
            float d_light = distance(uv , light_origin);
            
            // cut out a circle
            float d_circle = distance(uv, vec2(0.5));
            float a = step(d_circle, 0.5);
            
            float d_to_center = distance(uv, vec2(0.5));
            
            uv = rotate(uv, rotation);
            
            // map to sphere
            uv = spherify(uv);
            // slightly make uv go down on the right, and up in the left
            uv.y += smoothstep(0.0, cloud_curve, abs(uv.x-0.4));
            
            
            float c = cloud_alpha(uv*vec2(1.0, stretch));
            
            // assign some colors based on cloud depth & distance from light
            vec4 col = base_color;
            if (c < cloud_cover + 0.03) {
                col = outline_color;
            }
            if (d_light + c*0.2 > light_border_1) {
                col = shadow_base_color;
        
            }
            if (d_light + c*0.2 > light_border_2) {
                col = shadow_outline_color;
            }
            
            c *= step(d_to_center, 0.5);
            gl_FragColor = vec4(col.rgb, step(cloud_cover, c) * a * col.a);
        }
    `;function Lh(r,e=new B(.39,.7),t=.1,n=0,i=.546,s=2.5){let o=r||[new ae(.882353,.94902,1,1),new ae(.752941,.890196,1,1),new ae(.368627,.439216,.647059,1),new ae(.25098,.286275,.45098,1)],a=new Ge(1,1),l=new Fe({uniforms:{light_origin:{value:e},pixels:{value:100},seed:{value:We()?Math.random()*10:Math.random()*100},time_speed:{value:t},base_color:{value:o[0]},outline_color:{value:o[1]},shadow_base_color:{value:o[2]},shadow_outline_color:{value:o[3]},cloud_cover:{value:i},rotation:{value:n},stretch:{value:s},time:{value:0}},vertexShader:e_(),fragmentShader:t_(),transparent:!0});return new Re(a,l)}var n_=()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,i_=()=>`
        varying vec3 vUv;
        uniform float lightIntensity;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform float time_speed;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        uniform float lake_cutoff;
        
        uniform vec4 color1;
        uniform vec4 color2;
        uniform vec4 color3;
        
        float size = 10.0;
        int OCTAVES = 4;
        uniform float seed;
        uniform float time;
        
        float rand(vec2 coord) {
            coord = mod(coord, vec2(2.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
                
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        bool dither(vec2 uv1, vec2 uv2) {
            return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        
        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            float d_light = distance(uv , vec2(light_origin));
            
            // give planet a tilt
            uv = rotate(uv, rotation);
        
            // map to sphere
            uv = spherify(uv);
            
            // some scrolling noise for landmasses
            float lake = fbm(uv*size+vec2(time*time_speed,0.0));
        
            vec4 col = color1;
            if (d_light > light_border_1) {
                col = color2;
            }
            if (d_light > light_border_2) {
                col = color3;
            }
            
            float a = step(lake_cutoff, lake);
            a *= step(distance(vec2(0.5), uv), 0.5);
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `;function Ph(r=new B(.39,.7),e=.1,t=.6,n,i=0){let s=n||[new ae(.30980392156862746,.6431372549019608,.7215686274509804,1),new ae(.2980392156862745,.40784313725490196,.5215686274509804,1),new ae(.22745098039215686,.24705882352941178,.3686274509803922,1)],o=new Ge(1,1),a=new Fe({uniforms:{pixels:{value:100},light_origin:{value:r},seed:{value:We()?Math.random()*10:Math.random()*100},time_speed:{value:e},lake_cutoff:{value:t},rotation:{value:i},color1:{value:s[0]},color2:{value:s[1]},color3:{value:s[2]},time:{value:0}},vertexShader:n_(),fragmentShader:i_(),transparent:!0});return new Re(o,a)}var Dh=()=>{let r=new Qe;baseColorPalette=[new ae(250/255,255/255,255/255,1),new ae(199/255,212/255,255/255,1),new ae(146/255,143/255,184/255,1)];let e=sr(void 0,void 0,baseColorPalette),t=Ph(),n=Lh();return r.add(e),r.add(t),r.add(n),r};var r_=()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,s_=()=>`
        varying vec3 vUv;
        float pixels = 100.0;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform float time_speed;
        float dither_size = 2.0;
        float light_border = 0.4;
        uniform vec4 color1;
        uniform vec4 color2;
        float size = 5.0;
        int OCTAVES = 20;
        uniform float seed;
        uniform float time;
        bool should_dither = true;

        float rand(vec2 coord) {
            coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }

        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return m = smoothstep(r-.10*r,r,m);
        }

        float crater(vec2 uv) {
            float c = 1.0;
            for (int i = 0; i < 2; i++) {
                c *= circleNoise((uv * size) + (float(i+1)+10.) + vec2(time*time_speed,0.0));
            }
            return 1.0 - c;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }

        void main() {
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            // check distance from center & distance to light
            float d_circle = distance(uv, vec2(0.5));
            float d_light = distance(uv , vec2(light_origin));
            // cut out a circle
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(d_circle, 0.49999);
            
            uv = rotate(uv, rotation);
            uv = spherify(uv);
                
            float c1 = crater(uv );
            float c2 = crater(uv +(light_origin-0.5)*0.04);
            vec4 col = color1;
            
            a *= step(0.5, c1);
            if (c2<c1-(0.5-d_light)*2.0) {
                col = color2;
            }
            if (d_light > light_border) {
                col = color2;
            } 
        
            // cut out a circle
            a*= step(d_circle, 0.5);
            
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `;function Po(r=new B(.39,.7),e,t=.1,n=0){let i=e||[new ae(.2784313725490196,.3803921568627451,.48627450980392156,1),new ae(.20784313725490197,.2235294117647059,.3333333333333333,1)],s=new Ge(1,1),o=new Fe({uniforms:{color1:{value:i[0]},color2:{value:i[1]},light_origin:{value:r},time_speed:{value:t},rotation:{value:n},seed:{value:We()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:r_(),fragmentShader:s_(),depthTest:!0,transparent:!0});return new Re(s,o)}var o_=()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,a_=()=>`
        varying vec3 vUv;
        float pixels = 100.0;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform float time_speed;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        uniform float river_cutoff;
        
        uniform vec4 color1;
        uniform vec4 color2;
        uniform vec4 color3;
        
        float size = 10.0;
        int OCTAVES = 5;
        uniform float seed;
        uniform float time;
        
        float rand(vec2 coord) {
            coord = mod(coord, vec2(2.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
                
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }

        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }

        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            float d_light = distance(uv , light_origin);
            
            // cut out a circle
            float d_circle = distance(uv, vec2(0.5));
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(d_circle, 0.49999);
            
            // give planet a tilt
            uv = rotate(uv, rotation);
            
            // map to sphere
            uv = spherify(uv);
            
            // some scrolling noise for landmasses
            float fbm1 = fbm(uv*size+vec2(time*time_speed,0.0));
            float river_fbm = fbm(uv + fbm1*2.5);
            
            river_fbm = step(river_cutoff, river_fbm);
            
            // apply colors
            vec4 col = color1;
            if (d_light > light_border_1) {
                col = color2;
            }
            if (d_light > light_border_2) {
                col = color3;
            }
            
            a *= step(river_cutoff, river_fbm);
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `;function Ih(r=new B(.39,.7),e=.1,t=.6,n,i=0){let s=n||[new ae(.30980392156862746,.6431372549019608,.7215686274509804,1),new ae(.2980392156862745,.40784313725490196,.5215686274509804,1),new ae(.22745098039215686,.24705882352941178,.3686274509803922,1)],o=new Ge(1,1),a=new Fe({uniforms:{light_origin:{value:r},seed:{value:We()?Math.random()*10:Math.random()*100},time_speed:{value:e},river_cutoff:{value:t},rotation:{value:i},color1:{value:s[0]},color2:{value:s[1]},color3:{value:s[2]},time:{value:0}},vertexShader:o_(),fragmentShader:a_(),transparent:!0});return new Re(o,a)}function Fh(){return new $i}function Oh(){return new Eo}function zh(){return new je}function Nh(){return new Qe}var Bh=()=>{let r=[new ae(.560784,.301961,.341176,1),new ae(.321569,.2,.247059,1),new ae(.239216,.160784,.211765,1)],e=[new ae(.321569,.2,.247059,1),new ae(.239216,.160784,.211765,1)],t=[new ae(1,.537255,.2,1),new ae(.901961,.270588,.223529,1),new ae(.678431,.184314,.270588,1)],n=Nh(),i=sr(void 0,void 0,r),s=Po(void 0,e),o=Ih(void 0,void 0,void 0,t);return n.add(i),n.add(s),n.add(o),n};var Uh=()=>{let r=new Qe,e=sr(),t=Po();return r.add(e),r.add(t),r};var l_=()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,c_=()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float time_speed;
        uniform float time;
        uniform float rotation;
        uniform sampler2D colorramp;
        bool should_dither = true;

        uniform float seed;
        float size = 15.0;
        int OCTAVES = 5;
        float TILES = 2.0;


        float rand(vec2 co) {
            co = mod(co, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        vec2 rotate(vec2 vec, float angle) {
            vec -=vec2(0.5);
            vec *= mat2(vec2(cos(angle),-sin(angle)), vec2(sin(angle),cos(angle)));
            vec += vec2(0.5);
            return vec;
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
                
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        vec2 Hash2(vec2 p) {
            float r = 523.0*sin(dot(p, vec2(53.3158, 43.6143)));
            return vec2(fract(15.32354 * r), fract(17.25865 * r));
            
        }
        
        float cells(in vec2 p, in float numCells) {
            p *= numCells;
            float d = 1.0e10;
            for (int xo = -1; xo <= 1; xo++)
            {
                for (int yo = -1; yo <= 1; yo++)
                {
                    vec2 tp = floor(p) + vec2(float(xo), float(yo));
                    tp = p - tp - Hash2(mod(tp, numCells / TILES));
                    d = min(d, dot(tp, tp));
                }
            }
            return sqrt(d);
        }
        
        bool dither(vec2 uv1, vec2 uv2) {
            return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        

        void main() {
            vec2 pixelized = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            // cut out a circle
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(distance(pixelized, vec2(0.5)), .49999);
            
            // use dither val later to mix between colors
            bool dith = dither(vUv.xy, pixelized);
            
            pixelized = rotate(pixelized, rotation);
            
            // spherify has to go after dither
            pixelized = spherify(pixelized);
            
            // use two different sized cells for some variation
            float n = cells(pixelized - vec2(time * time_speed * 2.0, 0), 10.0);
            n *= cells(pixelized - vec2(time * time_speed * 1.0, 0), 20.0);
        
            
            // adjust cell value to get better looking stuff
            n*= 2.;
            n = clamp(n, 0.0, 1.0);
            if (dith || !should_dither) { // here we dither
                n *= 1.3;
            }
            
            // constrain values 4 possibilities and then choose color based on those
            float interpolate = floor(n * 3.0) / 3.0;
            vec4 col = texture(colorramp, vec2(interpolate, 0.0));
            
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `;function kh(r=new B(.39,.7),e=.1,t=.01,n=0,i=null){let s=i?`src/colorScheme/starPalette/${i}Palette.png`:"src/colorScheme/starPalette/orangePalette.png",o=new wt().load(s);o.magFilter=Ie,o.minFilter=Ie;let a=new Ge(1,1),l=new Fe({uniforms:{pixels:{value:100},colorramp:{value:o},lightIntensity:{value:e},light_origin:{value:r},time_speed:{value:t},rotation:{value:Math.random()},seed:{value:We()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:l_(),fragmentShader:c_(),transparent:!0});return new Re(a,l)}var u_=()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,h_=()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float time_speed;
        uniform float time;
        uniform float rotation;
        uniform vec4 color;
        bool should_dither = true;

        uniform float circle_amount;
        uniform float circle_size;
        uniform float scale;

        uniform float seed;
        float size = 4.0;
        int OCTAVES = 4;
        float TILES = 1.0;


        float rand(vec2 co){
            co = mod(co, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        
        vec2 rotate(vec2 vec, float angle) {
            vec -=vec2(0.5);
            vec *= mat2(vec2(cos(angle),-sin(angle)), vec2(sin(angle),cos(angle)));
            vec += vec2(0.5);
            return vec;
        }
        
        float circle(vec2 uv) {
            float invert = 1.0 / circle_amount;
            
            if (mod(uv.y, invert*2.0) < invert) {
                uv.x += invert*0.5;
            }
            vec2 rand_co = floor(uv*circle_amount)/circle_amount;
            uv = mod(uv, invert)*circle_amount;
            
            float r = rand(rand_co);
            r = clamp(r, invert, 1.0 - invert);
            float circle = distance(uv, vec2(r));
            return smoothstep(circle, circle+0.5, invert * circle_size * rand(rand_co*1.5));
        }
        
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
                
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scl = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scl;
                coord *= 2.0;
                scl *= 0.5;
            }
            return value;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        

        void main() {
            vec2 pixelized = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            vec2 uv = rotate(pixelized, rotation);

            // angle from centered uv's
            float angle = atan(uv.x - 0.5, uv.y - 0.5);
            float d = distance(pixelized, vec2(0.5));
            
            
            float c = 0.0;
            for(int i = 0; i < 15; i++) {
                float r = rand(vec2(float(i)));
                vec2 circleUV = vec2(d, angle);
                c += circle(circleUV*size -time * time_speed - (1.0/d) * 0.1 + r);
            }
            
            c *= 0.37 - d;
            c = step(0.07, c - d);
            
            gl_FragColor = vec4(color.rgb, c * color.a);
        }
    `;function Hh(r=.1,e=null){let t=e||new ae(1,.6470588235294118,0,1),n=new Ge(1.3,1.3),i=new Fe({uniforms:{pixels:{value:200},color:{value:t},time_speed:{value:r},rotation:{value:Math.random()},seed:{value:We()?Math.random()*10:Math.random()*100},time:{value:0},circle_amount:{value:3},circle_size:{value:1.5},scale:{value:1}},vertexShader:u_(),fragmentShader:h_(),transparent:!0});return new Re(n,i)}var d_=()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,f_=()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float time_speed;
        uniform float time;
        uniform float rotation;
        uniform sampler2D colorramp;
        bool should_dither = true;

        uniform float storm_width;
        uniform float storm_dither_width;
        uniform float circle_amount;
        uniform float circle_scale;
        uniform float scale;

        uniform float seed;
        float size = 2.0;
        int OCTAVES = 4;
        float TILES = 1.0;


        float rand(vec2 co){
            co = mod(co, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        
        vec2 rotate(vec2 vec, float angle) {
            vec -=vec2(0.5);
            vec *= mat2(vec2(cos(angle),-sin(angle)), vec2(sin(angle),cos(angle)));
            vec += vec2(0.5);
            return vec;
        }
        
        float circle(vec2 uv) {
            float invert = 1.0 / circle_amount;
            
            if (mod(uv.y, invert*2.0) < invert) {
                uv.x += invert*0.5;
            }
            vec2 rand_co = floor(uv*circle_amount)/circle_amount;
            uv = mod(uv, invert)*circle_amount;
            
            float r = rand(rand_co);
            r = clamp(r, invert, 1.0 - invert);
            float circle = distance(uv, vec2(r));
            return smoothstep(circle, circle+0.5, invert * circle_scale * rand(rand_co*1.5));
        }
        
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
                
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scl = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scl;
                coord *= 2.0;
                scl *= 0.5;
            }
            return value;
        }
        
        bool dither(vec2 uv1, vec2 uv2) {
            return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        

        void main() {
            vec2 pixelized = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            bool dith = dither(vUv.xy, pixelized);
	
            pixelized = rotate(pixelized, rotation);
            
            // counter rotation against rotation caused by the way uv's are made later
            vec2 uv = pixelized;//rotate(pixelized, -time  * time_speed);
            
            // angle from centered uv's
            float angle = atan(uv.x - 0.5, uv.y - 0.5) * 0.4;
            // distance from center
            float d = distance(pixelized, vec2(0.5));
            
            // we make uv circular here to have eternally outward moving stuff
            vec2 circleUV = vec2(d, angle);
            
            // two types of noise values
            float n = fbm(circleUV*size -time * time_speed);
            float nc = circle(circleUV*scale -time * time_speed + n);
            
            nc *= 1.5;
            float n2 = fbm(circleUV*size -time + vec2(100, 100));
            nc -= n2 * 0.1;
            
            // our alpha, default 0
            float a = 0.0;
            if (1.0 - d > nc) {
                // now we generate very thin strips of positive alpha if our noise has certain values and is close enough to center
                if (nc > storm_width - storm_dither_width + d && (dith || !should_dither)) {
                    a = 1.0;
                } else if (nc > storm_width + d) { // could use an or statement instead, but this looks more clear to me
                    a = 1.0;
                }
            }
            
            // use our two noise values to assign colors
            float interpolate = floor(n2 + nc);
            vec4 col = texture(colorramp, vec2(interpolate, 0.0));
            
            // final step to not have everything appear from the center
            a *= step(n2 * 0.25, d);
            
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `;function Vh(r=.05,e=.2,t=.07,n=null){let i=n?`src/colorScheme/starPalette/${n}Palette.png`:"src/colorScheme/starPalette/orangePalette.png",s=new wt().load(i);s.magFilter=Ie,s.minFilter=Ie;let o=new Ge(1.5,1.5),a=new Fe({uniforms:{pixels:{value:200},colorramp:{value:s},time_speed:{value:r},rotation:{value:Math.random()},seed:{value:We()?Math.random()*10:Math.random()*100},time:{value:0},storm_width:{value:e},storm_dither_width:{value:t},circle_amount:{value:2},circle_scale:{value:1},scale:{value:1}},vertexShader:d_(),fragmentShader:f_(),transparent:!0});return new Re(o,a)}var Gh=()=>{let r=new Qe,e=kh(),t=Vh(),n=Hh();return t.position.z=.01,t.scale.set(1.2,1.2),n.position.z=-.01,n.scale.set(1.9,1.9),r.add(e),r.add(t),r.add(n),r};function is(r,e){return Math.floor(Math.random()*(e-r+1)+r)}function We(){return Math.random()>.5}function ql(){var r=Math.random(),e=Math.random(),t=2*Math.PI*r,n=Math.acos(2*e-1),i=0+1*Math.sin(n)*Math.cos(t),s=0+1*Math.sin(n)*Math.sin(t),o=0+1*Math.cos(n);return{x:i,y:s,z:o}}function Xl(r){switch(r){case"No atmosphere":return Uh();case"Ice Planet":return Dh();case"Gas giant 1":return Th();case"Gas giant 2":return Rh();case"Asteroid":return yh();case"Star":return Gh();case"Lava Planet":return Bh();case"Dry Planet":return bh()}}var li={seedValue:1,planetTypes:"No atmosphere",planetOptions:["No atmosphere","Ice Planet","Gas giant 1","Gas giant 2","Asteroid","Star","Lava Planet","Dry Planet"],seed:()=>{li.seedValue=We()?Math.random()*10:Math.random()*100}};var Wh=(r,e,t,n)=>new bt(r,e,t,n);function qh(r){let e=new Qe,t;for(let n=0;n<r;n++)if(We()){texture=new wt().load("src/stars/stars-special.png"),texture.magFilter=Ie,texture.minFilter=Ie,texture.repeat.x=1/6,texture.offset.x=Math.floor(is(1,6)%6)*25/150;let s=new zn({map:texture,color:We()?"#ffef9e":"#ffffff",transparent:!0,opacity:is(.1,1)}),o=new ji(s);o.scale.set(.05,.05);let a=ql();o.position.z=a.z,o.position.y=a.y,o.position.x=a.x,e.add(o)}else{texture=new wt().load("src/stars/stars.png"),texture.magFilter=Ie,texture.minFilter=Ie,texture.repeat.x=1/17,texture.offset.x=Math.floor(is(1,17)%9)*9/144;let s=new zn({map:texture,color:We()?"#ffef9e":"#ffffff",transparent:!0,opacity:is(.1,1)}),o=new ji(s);o.scale.set(.03,.03);let a=ql();o.position.z=a.z,o.position.y=a.y,o.position.x=a.x,e.add(o)}return e}var Xh={type:"change"},Yl={type:"start"},Yh={type:"end"},Do=class extends $t{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oi.ROTATE,MIDDLE:oi.DOLLY,RIGHT:oi.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",Ze),this._domElementKeyEvents=b},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xh),n.update(),s=i.NONE},this.update=function(){let b=new T,te=new vt().setFromUnitVectors(e.up,new T(0,1,0)),_e=te.clone().invert(),le=new T,C=new vt,oe=2*Math.PI;return function(){let Ee=n.object.position;b.copy(Ee).sub(n.target),b.applyQuaternion(te),a.setFromVector3(b),n.autoRotate&&s===i.NONE&&fe(O()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let pe=n.minAzimuthAngle,ye=n.maxAzimuthAngle;return isFinite(pe)&&isFinite(ye)&&(pe<-Math.PI?pe+=oe:pe>Math.PI&&(pe-=oe),ye<-Math.PI?ye+=oe:ye>Math.PI&&(ye-=oe),pe<=ye?a.theta=Math.max(pe,Math.min(ye,a.theta)):a.theta=a.theta>(pe+ye)/2?Math.max(pe,a.theta):Math.min(ye,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),b.setFromSpherical(a),b.applyQuaternion(_e),Ee.copy(n.target).add(b),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||le.distanceToSquared(n.object.position)>o||8*(1-C.dot(n.object.quaternion))>o?(n.dispatchEvent(Xh),le.copy(n.object.position),C.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",U),n.domElement.removeEventListener("pointerdown",ne),n.domElement.removeEventListener("pointercancel",Ce),n.domElement.removeEventListener("wheel",et),n.domElement.removeEventListener("pointermove",ge),n.domElement.removeEventListener("pointerup",de),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Ze)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,o=1e-6,a=new ts,l=new ts,c=1,u=new T,h=!1,d=new B,m=new B,g=new B,f=new B,p=new B,v=new B,M=new B,A=new B,E=new B,y=[],P={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function Z(){return Math.pow(.95,n.zoomSpeed)}function fe(b){l.theta-=b}function G(b){l.phi-=b}let _=function(){let b=new T;return function(_e,le){b.setFromMatrixColumn(le,0),b.multiplyScalar(-_e),u.add(b)}}(),R=function(){let b=new T;return function(_e,le){n.screenSpacePanning===!0?b.setFromMatrixColumn(le,1):(b.setFromMatrixColumn(le,0),b.crossVectors(n.object.up,b)),b.multiplyScalar(_e),u.add(b)}}(),K=function(){let b=new T;return function(_e,le){let C=n.domElement;if(n.object.isPerspectiveCamera){let oe=n.object.position;b.copy(oe).sub(n.target);let re=b.length();re*=Math.tan(n.object.fov/2*Math.PI/180),_(2*_e*re/C.clientHeight,n.object.matrix),R(2*le*re/C.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(_(_e*(n.object.right-n.object.left)/n.object.zoom/C.clientWidth,n.object.matrix),R(le*(n.object.top-n.object.bottom)/n.object.zoom/C.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(b){n.object.isPerspectiveCamera?c/=b:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*b)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(b){n.object.isPerspectiveCamera?c*=b:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/b)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(b){d.set(b.clientX,b.clientY)}function V(b){M.set(b.clientX,b.clientY)}function L(b){f.set(b.clientX,b.clientY)}function X(b){m.set(b.clientX,b.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);let te=n.domElement;fe(2*Math.PI*g.x/te.clientHeight),G(2*Math.PI*g.y/te.clientHeight),d.copy(m),n.update()}function j(b){A.set(b.clientX,b.clientY),E.subVectors(A,M),E.y>0?D(Z()):E.y<0&&H(Z()),M.copy(A),n.update()}function ie(b){p.set(b.clientX,b.clientY),v.subVectors(p,f).multiplyScalar(n.panSpeed),K(v.x,v.y),f.copy(p),n.update()}function Q(b){b.deltaY<0?H(Z()):b.deltaY>0&&D(Z()),n.update()}function xe(b){let te=!1;switch(b.code){case n.keys.UP:K(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:K(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:K(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:K(-n.keyPanSpeed,0),te=!0;break}te&&(b.preventDefault(),n.update())}function Ne(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{let b=.5*(y[0].pageX+y[1].pageX),te=.5*(y[0].pageY+y[1].pageY);d.set(b,te)}}function Te(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{let b=.5*(y[0].pageX+y[1].pageX),te=.5*(y[0].pageY+y[1].pageY);f.set(b,te)}}function q(){let b=y[0].pageX-y[1].pageX,te=y[0].pageY-y[1].pageY,_e=Math.sqrt(b*b+te*te);M.set(0,_e)}function Xe(){n.enableZoom&&q(),n.enablePan&&Te()}function Pe(){n.enableZoom&&q(),n.enableRotate&&Ne()}function Le(b){if(y.length==1)m.set(b.pageX,b.pageY);else{let _e=we(b),le=.5*(b.pageX+_e.x),C=.5*(b.pageY+_e.y);m.set(le,C)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);let te=n.domElement;fe(2*Math.PI*g.x/te.clientHeight),G(2*Math.PI*g.y/te.clientHeight),d.copy(m)}function se(b){if(y.length===1)p.set(b.pageX,b.pageY);else{let te=we(b),_e=.5*(b.pageX+te.x),le=.5*(b.pageY+te.y);p.set(_e,le)}v.subVectors(p,f).multiplyScalar(n.panSpeed),K(v.x,v.y),f.copy(p)}function ze(b){let te=we(b),_e=b.pageX-te.x,le=b.pageY-te.y,C=Math.sqrt(_e*_e+le*le);A.set(0,C),E.set(0,Math.pow(A.y/M.y,n.zoomSpeed)),D(E.y),M.copy(A)}function W(b){n.enableZoom&&ze(b),n.enablePan&&se(b)}function Y(b){n.enableZoom&&ze(b),n.enableRotate&&Le(b)}function ne(b){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(b.pointerId),n.domElement.addEventListener("pointermove",ge),n.domElement.addEventListener("pointerup",de)),ee(b),b.pointerType==="touch"?S(b):Se(b))}function ge(b){n.enabled!==!1&&(b.pointerType==="touch"?x(b):be(b))}function de(b){he(b),y.length===0&&(n.domElement.releasePointerCapture(b.pointerId),n.domElement.removeEventListener("pointermove",ge),n.domElement.removeEventListener("pointerup",de)),n.dispatchEvent(Yh),s=i.NONE}function Ce(b){he(b)}function Se(b){let te;switch(b.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case oi.DOLLY:if(n.enableZoom===!1)return;V(b),s=i.DOLLY;break;case oi.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enablePan===!1)return;L(b),s=i.PAN}else{if(n.enableRotate===!1)return;N(b),s=i.ROTATE}break;case oi.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enableRotate===!1)return;N(b),s=i.ROTATE}else{if(n.enablePan===!1)return;L(b),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Yl)}function be(b){if(n.enabled!==!1)switch(s){case i.ROTATE:if(n.enableRotate===!1)return;X(b);break;case i.DOLLY:if(n.enableZoom===!1)return;j(b);break;case i.PAN:if(n.enablePan===!1)return;ie(b);break}}function et(b){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(b.preventDefault(),n.dispatchEvent(Yl),Q(b),n.dispatchEvent(Yh))}function Ze(b){n.enabled===!1||n.enablePan===!1||xe(b)}function S(b){switch(me(b),y.length){case 1:switch(n.touches.ONE){case ai.ROTATE:if(n.enableRotate===!1)return;Ne(),s=i.TOUCH_ROTATE;break;case ai.PAN:if(n.enablePan===!1)return;Te(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ai.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Xe(),s=i.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Yl)}function x(b){switch(me(b),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Le(b),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;se(b),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;W(b),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Y(b),n.update();break;default:s=i.NONE}}function U(b){n.enabled!==!1&&b.preventDefault()}function ee(b){y.push(b)}function he(b){delete P[b.pointerId];for(let te=0;te<y.length;te++)if(y[te].pointerId==b.pointerId){y.splice(te,1);return}}function me(b){let te=P[b.pointerId];te===void 0&&(te=new B,P[b.pointerId]=te),te.set(b.pageX,b.pageY)}function we(b){let te=b.pointerId===y[0].pointerId?y[1]:y[0];return P[te.pointerId]}n.domElement.addEventListener("contextmenu",U),n.domElement.addEventListener("pointerdown",ne),n.domElement.addEventListener("pointercancel",Ce),n.domElement.addEventListener("wheel",et,{passive:!1}),this.update()}};function p_(){let r=document.querySelector("#root"),e=r.clientWidth/r.clientHeight,t=Fh(),n=Oh(),i=Wh(75,e,.1,1e5),s=new Qe;s.add(Xl(li.planetOptions[0])),t.add(s);let o=new fc({name:"Pixel planets"});o.add(li,"planetTypes",li.planetOptions).onChange(d=>{s.children.planetGroup.add(Xl(d))}),o.add(li,"seed").onChange(()=>{s.children.forEach(d=>{d.children.forEach(m=>{m.material.uniforms.seed.value=li.seedValue,m.material.uniforms.size&&(m.material.uniforms.size.value=Math.random()*10)})})});let a=1e-5,l=zh();l.setSize(r.clientWidth,r.clientHeight),l.setPixelRatio(window.devicePixelRatio);let c=new Do(i,l.domElement),u=qh(1e3);t.add(u),document.getElementById("root").appendChild(l.domElement),i.position.z=1;function h(){requestAnimationFrame(h),s.children.forEach(d=>{d.lookAt(i.position),d.children.forEach(m=>{m.material.uniforms.time.value=n.getElapsedTime()})}),i.updateProjectionMatrix(),u.rotateY(a),u.rotateX(a),u.rotateZ(a),l.render(t,i)}h()}window.onload=()=>{p_()};})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
