(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,"body {\n  display: flex;\n  justify-content: center;\n}\n\np {\n  margin: 0;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#container {\n  background-color: lightgrey;\n  border-radius: 50px;\n\n  width: 95%;\n  min-height: 100vh;\n  height: auto;\n  margin: 30px 0;\n}\n\n#top-div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2em 5em;\n}\n\n#welcome-div {\n  font-size: 2em;\n}\n\n#button-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.5em;\n}\n\n#show-dialog-button {\n  border-radius: 30px;\n  border: 2px solid black;\n  background-color: rgb(122, 126, 129);\n  font-size: 1.5em;\n  padding: 0.3em 0.7em;\n}\n\n#container-grid {\n  display: grid;\n  gap: 1em;\n  padding: 0 5em 2em 5em;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.grid-element {\n  width: auto;\n  min-height: 10em;\n  height: auto;\n  background-color: white;\n  border-radius: 30px;\n  padding: 15px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.top-section {\n  margin-left: auto;\n}\n\n.top-section p {\n  font-size: 2em;\n  padding: 0 5px 3px 5px;\n  border-radius: 20px;\n}\n\n.bottom-section p {\n  margin: 0 0 5px 5px;\n  font-size: 1.6em;\n  font-weight: bold;\n}\n",""]);const c=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var u=t(i[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),s=t.n(c),d=t(540),u=t.n(d),l=t(113),p=t.n(l),f=t(365),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),n()(f.A,m),f.A&&f.A.locals&&f.A.locals;class h{constructor(e,n,t,r){this.id=e,this.title=n,this.emoji=t,this.bgc=r}addSetToArray=e=>{e.push(this)}}const v=[],g=document.querySelector("dialog"),y=document.querySelector("#show-dialog-button"),b=document.querySelector("#close-button"),x=document.querySelector("#add-set-button");y.addEventListener("click",(()=>{g.showModal()})),b.addEventListener("click",(()=>{g.close()})),x.addEventListener("click",(()=>{})),new class{constructor(e,n,t,r,o){this.id=e,this.title=n,this.description=t,this.dueDate=r,this.priority=o}}("1","2","3","4");const w=new h(1,"Fitness","⚽️","red"),C=new h(2,"Study","📖","blue");w.addSetToArray(v),C.addSetToArray(v),function(e){const n=document.querySelector("#container-grid");e.forEach((e=>{const t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("p"),a=document.createElement("p");i.textContent=e.title,a.textContent=e.emoji,a.style.backgroundColor=e.bgc,o.appendChild(i),r.appendChild(a),t.appendChild(r),t.appendChild(o),r.classList.add("top-section"),o.classList.add("bottom-section"),t.classList.add("grid-element"),n.appendChild(t)}))}(v),console.log(v)})()})();