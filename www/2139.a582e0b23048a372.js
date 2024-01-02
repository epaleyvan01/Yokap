"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2139],{2139:(wr,ve,E)=>{E.r(ve),E.d(ve,{FirstPageModule:()=>Pr});var de=E(6814),$=E(95),j=E(3800),ge=E(3044),Ue=E(5861),he={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},G={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},He=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],H={CSS:{},springs:{}};function O(e,r,t){return Math.min(Math.max(e,r),t)}function z(e,r){return e.indexOf(r)>-1}function Y(e,r){return e.apply(null,r)}var f={arr:function(e){return Array.isArray(e)},obj:function(e){return z(Object.prototype.toString.call(e),"Object")},pth:function(e){return f.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||f.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return typeof e>"u"},nil:function(e){return f.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return f.hex(e)||f.rgb(e)||f.hsl(e)},key:function(e){return!he.hasOwnProperty(e)&&!G.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function me(e){var r=/\(([^)]+)\)/.exec(e);return r?r[1].split(",").map(function(t){return parseFloat(t)}):[]}function pe(e,r){var t=me(e),n=O(f.und(t[0])?1:t[0],.1,100),a=O(f.und(t[1])?100:t[1],.1,100),o=O(f.und(t[2])?10:t[2],.1,100),u=O(f.und(t[3])?0:t[3],.1,100),s=Math.sqrt(a/n),i=o/(2*Math.sqrt(a*n)),m=i<1?s*Math.sqrt(1-i*i):0,l=i<1?(i*s-u)/m:-u+s;function d(p){var h=r?r*p/1e3:p;return h=i<1?Math.exp(-h*i*s)*(1*Math.cos(m*h)+l*Math.sin(m*h)):(1+l*h)*Math.exp(-h*s),0===p||1===p?p:1-h}return r?d:function T(){var p=H.springs[e];if(p)return p;for(var h=1/6,x=0,w=0;;)if(1===d(x+=h)){if(++w>=16)break}else w=0;var C=x*h*1e3;return H.springs[e]=C,C}}function Ze(e){return void 0===e&&(e=10),function(r){return Math.ceil(O(r,1e-6,1)*e)*(1/e)}}var e,r,We=function(){var r=.1;function t(c,l){return 1-3*l+3*c}function n(c,l){return 3*l-6*c}function a(c){return 3*c}function o(c,l,d){return((t(l,d)*c+n(l,d))*c+a(l))*c}function u(c,l,d){return 3*t(l,d)*c*c+2*n(l,d)*c+a(l)}return function m(c,l,d,T){if(0<=c&&c<=1&&0<=d&&d<=1){var p=new Float32Array(11);if(c!==l||d!==T)for(var h=0;h<11;++h)p[h]=o(h*r,c,d);return function(w){return c===l&&d===T||0===w||1===w?w:o(function x(w){for(var C=0,v=1;10!==v&&p[v]<=w;++v)C+=r;--v;var D=C+(w-p[v])/(p[v+1]-p[v])*r,P=u(D,c,d);return P>=.001?function i(c,l,d,T){for(var p=0;p<4;++p){var h=u(l,d,T);if(0===h)return l;l-=(o(l,d,T)-c)/h}return l}(w,D,c,d):0===P?D:function s(c,l,d,T,p){var h,x,w=0;do{(h=o(x=l+(d-l)/2,T,p)-c)>0?d=x:l=x}while(Math.abs(h)>1e-7&&++w<10);return x}(w,C,C+r,c,d)}(w),l,T)}}}}(),ye=(e={linear:function(){return function(n){return n}}},r={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Expo:function(){return function(n){return n?Math.pow(2,10*n-10):0}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var a,o=4;n<((a=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((3*a-2)/22-n,2)}},Elastic:function(n,a){void 0===n&&(n=1),void 0===a&&(a=.5);var o=O(n,1,10),u=O(a,.1,2);return function(s){return 0===s||1===s?s:-o*Math.pow(2,10*(s-1))*Math.sin((s-1-u/(2*Math.PI)*Math.asin(1/o))*(2*Math.PI)/u)}}},["Quad","Cubic","Quart","Quint"].forEach(function(n,a){r[n]=function(){return function(o){return Math.pow(o,a+2)}}}),Object.keys(r).forEach(function(n){var a=r[n];e["easeIn"+n]=a,e["easeOut"+n]=function(o,u){return function(s){return 1-a(o,u)(1-s)}},e["easeInOut"+n]=function(o,u){return function(s){return s<.5?a(o,u)(2*s)/2:1-a(o,u)(-2*s+2)/2}},e["easeOutIn"+n]=function(o,u){return function(s){return s<.5?(1-a(o,u)(1-2*s))/2:(a(o,u)(2*s-1)+1)/2}}}),e);function q(e,r){if(f.fnc(e))return e;var t=e.split("(")[0],n=ye[t],a=me(e);switch(t){case"spring":return pe(e,r);case"cubicBezier":return Y(We,a);case"steps":return Y(Ze,a);default:return Y(n,a)}}function xe(e){try{return document.querySelectorAll(e)}catch{return}}function Z(e,r){for(var t=e.length,n=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<t;o++)if(o in e){var u=e[o];r.call(n,u,o,e)&&a.push(u)}return a}function W(e){return e.reduce(function(r,t){return r.concat(f.arr(t)?W(t):t)},[])}function Me(e){return f.arr(e)?e:(f.str(e)&&(e=xe(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function X(e,r){return e.some(function(t){return t===r})}function ee(e){var r={};for(var t in e)r[t]=e[t];return r}function re(e,r){var t=ee(e);for(var n in e)t[n]=r.hasOwnProperty(n)?r[n]:e[n];return t}function J(e,r){var t=ee(e);for(var n in r)t[n]=f.und(e[n])?r[n]:e[n];return t}function L(e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(r)return r[1]}function ne(e,r){return f.fnc(e)?e(r.target,r.id,r.total):e}function A(e,r){return e.getAttribute(r)}function te(e,r,t){if(X([t,"deg","rad","turn"],L(r)))return r;var a=H.CSS[r+t];if(!f.und(a))return a;var u=document.createElement(e.tagName),s=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;s.appendChild(u),u.style.position="absolute",u.style.width=100+t;var i=100/u.offsetWidth;s.removeChild(u);var m=i*parseFloat(r);return H.CSS[r+t]=m,m}function Pe(e,r,t){if(r in e.style){var n=r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[r]||getComputedStyle(e).getPropertyValue(n)||"0";return t?te(e,a,t):a}}function ae(e,r){return f.dom(e)&&!f.inp(e)&&(!f.nil(A(e,r))||f.svg(e)&&e[r])?"attribute":f.dom(e)&&X(He,r)?"transform":f.dom(e)&&"transform"!==r&&Pe(e,r)?"css":null!=e[r]?"object":void 0}function be(e){if(f.dom(e)){for(var a,r=e.style.transform||"",t=/(\w+)\(([^)]*)\)/g,n=new Map;a=t.exec(r);)n.set(a[1],a[2]);return n}}function ie(e,r,t,n){switch(ae(e,r)){case"transform":return function Ge(e,r,t,n){var a=z(r,"scale")?1:0+function $e(e){return z(e,"translate")||"perspective"===e?"px":z(e,"rotate")||z(e,"skew")?"deg":void 0}(r),o=be(e).get(r)||a;return t&&(t.transforms.list.set(r,o),t.transforms.last=r),n?te(e,o,n):o}(e,r,n,t);case"css":return Pe(e,r,t);case"attribute":return A(e,r);default:return e[r]||0}}function oe(e,r){var t=/^(\*=|\+=|-=)/.exec(e);if(!t)return e;var n=L(e)||0,a=parseFloat(r),o=parseFloat(e.replace(t[0],""));switch(t[0][0]){case"+":return a+o+n;case"-":return a-o+n;case"*":return a*o+n}}function Te(e,r){if(f.col(e))return function Ne(e){return f.rgb(e)?function Je(e){var r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return r?"rgba("+r[1]+",1)":e}(e):f.hex(e)?function Qe(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(s,i,m,c){return i+i+m+m+c+c}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):f.hsl(e)?function Ke(e){var s,i,m,r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),t=parseInt(r[1],10)/360,n=parseInt(r[2],10)/100,a=parseInt(r[3],10)/100,o=r[4]||1;function u(d,T,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?d+6*(T-d)*p:p<.5?T:p<2/3?d+(T-d)*(2/3-p)*6:d}if(0==n)s=i=m=a;else{var c=a<.5?a*(1+n):a+n-a*n,l=2*a-c;s=u(l,c,t+1/3),i=u(l,c,t),m=u(l,c,t-1/3)}return"rgba("+255*s+","+255*i+","+255*m+","+o+")"}(e):void 0}(e);if(/\s/g.test(e))return e;var t=L(e),n=t?e.substr(0,e.length-t.length):e;return r?n+r:n}function ue(e,r){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}function we(e){for(var n,r=e.points,t=0,a=0;a<r.numberOfItems;a++){var o=r.getItem(a);a>0&&(t+=ue(n,o)),n=o}return t}function Fe(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function Ye(e){return 2*Math.PI*A(e,"r")}(e);case"rect":return function qe(e){return 2*A(e,"width")+2*A(e,"height")}(e);case"line":return function Xe(e){return ue({x:A(e,"x1"),y:A(e,"y1")},{x:A(e,"x2"),y:A(e,"y2")})}(e);case"polyline":return we(e);case"polygon":return function er(e){var r=e.points;return we(e)+ue(r.getItem(r.numberOfItems-1),r.getItem(0))}(e)}}function Ce(e,r){var t=r||{},n=t.el||function nr(e){for(var r=e.parentNode;f.svg(r)&&f.svg(r.parentNode);)r=r.parentNode;return r}(e),a=n.getBoundingClientRect(),o=A(n,"viewBox"),u=a.width,s=a.height,i=t.viewBox||(o?o.split(" "):[0,0,u,s]);return{el:n,viewBox:i,x:i[0]/1,y:i[1]/1,w:u,h:s,vW:i[2],vH:i[3]}}function ar(e,r,t){function n(c){return void 0===c&&(c=0),e.el.getPointAtLength(r+c>=1?r+c:0)}var a=Ce(e.el,e.svg),o=n(),u=n(-1),s=n(1),i=t?1:a.w/a.vW,m=t?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*i;case"y":return(o.y-a.y)*m;case"angle":return 180*Math.atan2(s.y-u.y,s.x-u.x)/Math.PI}}function Ie(e,r){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=Te(f.pth(e)?e.totalLength:e,r)+"";return{original:n,numbers:n.match(t)?n.match(t).map(Number):[0],strings:f.str(e)||r?n.split(t):[]}}function se(e){return Z(e?W(f.arr(e)?e.map(Me):Me(e)):[],function(t,n,a){return a.indexOf(t)===n})}function Oe(e){var r=se(e);return r.map(function(t,n){return{target:t,id:n,total:r.length,transforms:{list:be(t)}}})}function ir(e,r){var t=ee(r);if(/^spring/.test(t.easing)&&(t.duration=pe(t.easing)),f.arr(e)){var n=e.length;2!==n||f.obj(e[0])?f.fnc(r.duration)||(t.duration=r.duration/n):e={value:e}}var o=f.arr(e)?e:[e];return o.map(function(u,s){var i=f.obj(u)&&!f.pth(u)?u:{value:u};return f.und(i.delay)&&(i.delay=s?0:r.delay),f.und(i.endDelay)&&(i.endDelay=s===o.length-1?r.endDelay:0),i}).map(function(u){return J(u,t)})}var Ae={css:function(e,r,t){return e.style[r]=t},attribute:function(e,r,t){return e.setAttribute(r,t)},object:function(e,r,t){return e[r]=t},transform:function(e,r,t,n,a){if(n.list.set(r,t),r===n.last||a){var o="";n.list.forEach(function(u,s){o+=s+"("+u+") "}),e.style.transform=o}}};function De(e,r){Oe(e).forEach(function(n){for(var a in r){var o=ne(r[a],n),u=n.target,s=L(o),i=ie(u,a,s,n),c=oe(Te(o,s||L(i)),i),l=ae(u,a);Ae[l](u,a,c,n.transforms,!0)}})}function lr(e,r){return Z(W(e.map(function(t){return r.map(function(n){return function fr(e,r){var t=ae(e.target,r.name);if(t){var n=function cr(e,r){var t;return e.tweens.map(function(n){var a=function sr(e,r){var t={};for(var n in e){var a=ne(e[n],r);f.arr(a)&&1===(a=a.map(function(o){return ne(o,r)})).length&&(a=a[0]),t[n]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(n,r),o=a.value,u=f.arr(o)?o[1]:o,s=L(u),i=ie(r.target,e.name,s,r),m=t?t.to.original:i,c=f.arr(o)?o[0]:m,l=L(c)||L(i),d=s||l;return f.und(u)&&(u=m),a.from=Ie(c,d),a.to=Ie(oe(u,c),d),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=q(a.easing,a.duration),a.isPath=f.pth(o),a.isPathTargetInsideSVG=a.isPath&&f.svg(r.target),a.isColor=f.col(a.from.original),a.isColor&&(a.round=1),t=a,a})}(r,e),a=n[n.length-1];return{type:t,property:r.name,animatable:e,tweens:n,duration:a.end,delay:n[0].delay,endDelay:a.endDelay}}}(t,n)})})),function(t){return!f.und(t)})}function Ee(e,r){var t=e.length,n=function(o){return o.timelineOffset?o.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,e.map(function(o){return n(o)+o.duration})):r.duration,a.delay=t?Math.min.apply(Math,e.map(function(o){return n(o)+o.delay})):r.delay,a.endDelay=t?a.duration-Math.max.apply(Math,e.map(function(o){return n(o)+o.duration-o.endDelay})):r.endDelay,a}var Le=0,I=[],ke=function(){var e;function t(a){for(var o=I.length,u=0;u<o;){var s=I[u];s.paused?(I.splice(u,1),o--):(s.tick(a),u++)}e=u>0?requestAnimationFrame(t):void 0}return typeof document<"u"&&document.addEventListener("visibilitychange",function n(){M.suspendWhenDocumentHidden&&(Be()?e=cancelAnimationFrame(e):(I.forEach(function(a){return a._onDocumentVisibility()}),ke()))}),function r(){!e&&(!Be()||!M.suspendWhenDocumentHidden)&&I.length>0&&(e=requestAnimationFrame(t))}}();function Be(){return!!document&&document.hidden}function M(e){void 0===e&&(e={});var a,r=0,t=0,n=0,o=0,u=null;function s(v){var g=window.Promise&&new Promise(function(F){return u=F});return v.finished=g,g}var i=function vr(e){var r=re(he,e),t=re(G,e),n=function ur(e,r){var t=[],n=r.keyframes;for(var a in n&&(r=J(function or(e){for(var r=Z(W(e.map(function(o){return Object.keys(o)})),function(o){return f.key(o)}).reduce(function(o,u){return o.indexOf(u)<0&&o.push(u),o},[]),t={},n=function(o){var u=r[o];t[u]=e.map(function(s){var i={};for(var m in s)f.key(m)?m==u&&(i.value=s[m]):i[m]=s[m];return i})},a=0;a<r.length;a++)n(a);return t}(n),r)),r)f.key(a)&&t.push({name:a,tweens:ir(r[a],e)});return t}(t,e),a=Oe(e.targets),o=lr(a,n),u=Ee(o,t),s=Le;return Le++,J(r,{id:s,children:[],animatables:a,animations:o,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}(e);function c(){var v=i.direction;"alternate"!==v&&(i.direction="normal"!==v?"normal":"reverse"),i.reversed=!i.reversed,a.forEach(function(g){return g.reversed=i.reversed})}function l(v){return i.reversed?i.duration-v:v}function d(){r=0,t=l(i.currentTime)*(1/M.speed)}function T(v,g){g&&g.seek(v-g.timelineOffset)}function h(v){for(var g=0,F=i.animations,D=F.length;g<D;){var P=F[g],Q=P.animatable,B=P.tweens,S=B.length-1,b=B[S];S&&(b=Z(B,function(Tr){return v<Tr.end})[0]||b);for(var K=O(v-b.start-b.delay,0,b.duration)/b.duration,k=isNaN(K)?1:b.easing(K),N=b.to.strings,ce=b.round,fe=[],br=b.to.numbers.length,V=void 0,_=0;_<br;_++){var R=void 0,je=b.to.numbers[_],ze=b.from.numbers[_]||0;R=b.isPath?ar(b.value,k*je,b.isPathTargetInsideSVG):ze+k*(je-ze),ce&&(b.isColor&&_>2||(R=Math.round(R*ce)/ce)),fe.push(R)}var _e=N.length;if(_e){V=N[0];for(var U=0;U<_e;U++){var Re=N[U+1],le=fe[U];isNaN(le)||(V+=Re?le+Re:le+" ")}}else V=fe[0];Ae[P.type](Q.target,P.property,V,Q.transforms),P.currentValue=V,g++}}function x(v){i[v]&&!i.passThrough&&i[v](i)}function C(v){var g=i.duration,F=i.delay,D=g-i.endDelay,P=l(v);i.progress=O(P/g*100,0,100),i.reversePlayback=P<i.currentTime,a&&function p(v){if(i.reversePlayback)for(var F=o;F--;)T(v,a[F]);else for(var g=0;g<o;g++)T(v,a[g])}(P),!i.began&&i.currentTime>0&&(i.began=!0,x("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,x("loopBegin")),P<=F&&0!==i.currentTime&&h(0),(P>=D&&i.currentTime!==g||!g)&&h(g),P>F&&P<D?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,x("changeBegin")),x("change"),h(P)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,x("changeComplete")),i.currentTime=O(P,0,g),i.began&&x("update"),v>=g&&(t=0,function w(){i.remaining&&!0!==i.remaining&&i.remaining--}(),i.remaining?(r=n,x("loopComplete"),i.loopBegan=!1,"alternate"===i.direction&&c()):(i.paused=!0,i.completed||(i.completed=!0,x("loopComplete"),x("complete"),!i.passThrough&&"Promise"in window&&(u(),s(i)))))}return s(i),i.reset=function(){var v=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed="reverse"===v,i.remaining=i.loop;for(var g=o=(a=i.children).length;g--;)i.children[g].reset();(i.reversed&&!0!==i.loop||"alternate"===v&&1===i.loop)&&i.remaining++,h(i.reversed?i.duration:0)},i._onDocumentVisibility=d,i.set=function(v,g){return De(v,g),i},i.tick=function(v){n=v,r||(r=n),C((n+(t-r))*M.speed)},i.seek=function(v){C(l(v))},i.pause=function(){i.paused=!0,d()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,I.push(i),d(),ke())},i.reverse=function(){c(),i.completed=!i.reversed,d()},i.restart=function(){i.reset(),i.play()},i.remove=function(v){Ve(se(v),i)},i.reset(),i.autoplay&&i.play(),i}function Se(e,r){for(var t=r.length;t--;)X(e,r[t].animatable.target)&&r.splice(t,1)}function Ve(e,r){var t=r.animations,n=r.children;Se(e,t);for(var a=n.length;a--;){var o=n[a],u=o.animations;Se(e,u),!u.length&&!o.children.length&&n.splice(a,1)}!t.length&&!n.length&&r.pause()}M.version="3.2.1",M.speed=1,M.suspendWhenDocumentHidden=!0,M.running=I,M.remove=function dr(e){for(var r=se(e),t=I.length;t--;)Ve(r,I[t])},M.get=ie,M.set=De,M.convertPx=te,M.path=function tr(e,r){var t=f.str(e)?xe(e)[0]:e,n=r||100;return function(a){return{property:a,el:t,svg:Ce(t),totalLength:Fe(t)*(n/100)}}},M.setDashoffset=function rr(e){var r=Fe(e);return e.setAttribute("stroke-dasharray",r),r},M.stagger=function gr(e,r){void 0===r&&(r={});var t=r.direction||"normal",n=r.easing?q(r.easing):null,a=r.grid,o=r.axis,u=r.from||0,s="first"===u,i="center"===u,m="last"===u,c=f.arr(e),l=parseFloat(c?e[0]:e),d=c?parseFloat(e[1]):0,T=L(c?e[1]:e)||0,p=r.start||0+(c?l:0),h=[],x=0;return function(w,C,v){if(s&&(u=0),i&&(u=(v-1)/2),m&&(u=v-1),!h.length){for(var g=0;g<v;g++){if(a){var F=i?(a[0]-1)/2:u%a[0],D=i?(a[1]-1)/2:Math.floor(u/a[0]),B=F-g%a[0],S=D-Math.floor(g/a[0]),b=Math.sqrt(B*B+S*S);"x"===o&&(b=-B),"y"===o&&(b=-S),h.push(b)}else h.push(Math.abs(u-g));x=Math.max.apply(Math,h)}n&&(h=h.map(function(k){return n(k/x)*x})),"reverse"===t&&(h=h.map(function(k){return o?k<0?-1*k:-k:Math.abs(x-k)}))}return p+(c?(d-l)/x:l)*(Math.round(100*h[C])/100)+T}},M.timeline=function hr(e){void 0===e&&(e={});var r=M(e);return r.duration=0,r.add=function(t,n){var a=I.indexOf(r),o=r.children;function u(d){d.passThrough=!0}a>-1&&I.splice(a,1);for(var s=0;s<o.length;s++)u(o[s]);var i=J(t,re(G,e));i.targets=i.targets||e.targets;var m=r.duration;i.autoplay=!1,i.direction=r.direction,i.timelineOffset=f.und(n)?m:oe(n,m),u(r),r.seek(i.timelineOffset);var c=M(i);u(c),o.push(c);var l=Ee(o,e);return r.delay=l.delay,r.endDelay=l.endDelay,r.duration=l.duration,r.seek(0),r.reset(),r.autoplay&&r.play(),r},r},M.easing=q,M.penner=ye,M.random=function(e,r){return Math.floor(Math.random()*(r-e+1))+e};const mr=M;var y=E(6242),pr=E(2014);function yr(e,r){if(1&e){const t=y.EpF();y.TgZ(0,"ion-content",1)(1,"div",2)(2,"h1"),y._uU(3,"Bienvenue dans l'application"),y.qZA()(),y.TgZ(4,"ion-input",3),y.NdJ("ngModelChange",function(a){y.CHM(t);const o=y.oxw();return y.KtG(o.username=a)})("keyup.enter",function(){y.CHM(t);const a=y.oxw();return y.KtG(a.saveUsername())}),y.qZA(),y.TgZ(5,"ion-button",4),y.NdJ("click",function(){y.CHM(t);const a=y.oxw();return y.KtG(a.saveUsername())}),y._uU(6,"Continuer"),y.qZA()()}if(2&e){const t=y.oxw();y.xp6(4),y.Q6J("ngModel",t.username)}}const xr=[{path:"",component:(()=>{var e;class r{constructor(n){this.storage1=n,this.isFirstLaunch=!0}ngOnInit(){var n=this;return(0,Ue.Z)(function*(){yield n.storage1.create(),n.storage1.get("isFirstLaunch").then(a=>{n.isFirstLaunch=null===a,n.isFirstLaunch&&n.runWelcomeAnimation()})})()}runWelcomeAnimation(){const n=mr.timeline({loop:!1});n.add({targets:".welcome-text",opacity:[0,1],duration:1e3,easing:"easeInOutQuad"}).add({targets:".welcome-text",delay:1e3,opacity:0,duration:1e3,easing:"easeInOutQuad"}).add({targets:".username-input",opacity:[0,1],duration:1e3,easing:"easeInOutQuad"}),n.finished.then(()=>{document.getElementById("username-input").focus()})}saveUsername(){this.username&&(this.storage1.set("isFirstLaunch",!1),this.storage1.set("username",this.username))}}return(e=r).\u0275fac=function(n){return new(n||e)(y.Y36(pr.K))},e.\u0275cmp=y.Xpm({type:e,selectors:[["app-first"]],decls:1,vars:1,consts:[["class","welcome-container",4,"ngIf"],[1,"welcome-container"],[1,"welcome-text"],["type","text","id","username-input","placeholder","Votre nom d'utilisateur",1,"username-input",3,"ngModel","ngModelChange","keyup.enter"],["expand","full",3,"click"]],template:function(n,a){1&n&&y.YNc(0,yr,7,1,"ion-content",0),2&n&&y.Q6J("ngIf",a.isFirstLaunch)},dependencies:[de.O5,$.JJ,$.On,j.YG,j.W2,j.pK,j.j9],styles:[".welcome-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh}.welcome-text[_ngcontent-%COMP%]{text-align:center;opacity:0}.username-input[_ngcontent-%COMP%]{opacity:0;margin-top:16px}"]}),r})()}];let Mr=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=y.oAB({type:e}),e.\u0275inj=y.cJS({imports:[ge.Bz.forChild(xr),ge.Bz]}),r})(),Pr=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=y.oAB({type:e}),e.\u0275inj=y.cJS({imports:[de.ez,$.u5,j.Pc,Mr]}),r})()}}]);