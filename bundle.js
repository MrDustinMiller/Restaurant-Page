(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);"]),i.push([n.id,":root {\n --main-font: 'Pacifico';\n}\n\n.content {\n    height: 100vh;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    width: 100%; \n    height: 100%;\n    box-sizing: border-box;\n    background-position: bottom;\n    background-size:cover; \n    background-repeat: no-repeat; \n    font-family: var(--main-font);\n}\n\n.html {\n    height: 100%;\n}\n\n.header {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.header-title {\n    font-weight: bold;\n    font-size: 3rem;\n    color:#548e9d;\n    margin-left: 1rem;\n}\n\n.nav-div{  \n    display: flex;\n    justify-content: center; \n    gap: 1em;\n    margin-right: 1rem;\n}\n\n.nav-div > button {\n    cursor: pointer;\n    background: none;\n    font-family: var(--main-font);\n    border: none;\n    color: rgb(0, 0, 0);\n    font-size: 1.5rem;\n    transition: 0.2s all;\n}\n\n.nav-div > button:active {\n    transform: scale(0.95);\n}\n\n.nav-div > button:hover {\n    color: rgba(0, 0, 0, 0.626);\n\n}\n\n\n.home-nav-content{ \n    display: flex;\n    align-items: center;\n    height: 100vh;\n    width: 100%;\n    background-position: center;\n}\n\n.home-text{\n    background-color: rgb(0, 0, 0,0.3);\n    height: 30vh;\n    font-size: 3rem;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    border-radius: 8px ;\n    color: white;\n}\n\n.menu-images{\n    background-repeat: no-repeat;\n    background-size: contain;\n    padding: 5rem;\n    text-align: right;\n  }\n\n\n.menu {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.contact-form{\n    width: 50%;\n    opacity: 90%;\n    border-radius: 8px;\n}\n\n.contact-message{\n    height: 30vh;\n    width: 50%;\n    resize: none;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n.buttonDiv {\n    display: flex;\n    gap: 2rem;\n}\n\n.contact-nav-content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\ninput, textarea {\n    border: 1.5px solid black;\n}\n\ninput[id~='email'] {\n    margin-right: 1em;\n}\n\nlabel {\n    margin-right: 1rem;\n}\n\nfieldset {\n    border: none;\n}\n\n.form-left {\n    display: flex;\n    justify-content: center;\n}\n\n.dialog-btn {\n    align-self: center;\n    height: 10vh;\n    font-family: var(--main-font);\n    width: 30%;\n    border-radius: 8px;\n    background-color: rgb(0, 0, 0, 0.7);\n    color: white;\n    cursor: pointer;\n    font-size: 1.5rem;\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-name: bounce-4;\n    animation-timing-function: ease;\n}\n\n.confirm-btn, .cancel-btn{\n    height: 5vh;\n    /* width: 5vw; */\n    background-color: #e0c4c8;\n    border: 2px solid black;\n    border-radius: 8px;\n    cursor: pointer;\n    font-size: 1rem;\n    transition: 0.2s all;\n}\n\n.confirm-btn, .cancel-btn > .confirm-btn:active, .cancel-btn:active {\n    transform: scale(0.95);\n}\n\n.menu-nav-content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n.food-details {\n    /* margin-right: 3rem; */\n}\n\n@keyframes bounce-4 {\n    0%   { transform: scale(1,1)    translateY(0); }\n    10%  { transform: scale(1.1,.9) translateY(0); }\n    30%  { transform: scale(.9,1.1) translateY(-100px); }\n    50%  { transform: scale(1,1)    translateY(0); }\n    100% { transform: scale(1,1)    translateY(0); }\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=a(p,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var s=o(n,a),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!n;)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),a=t.n(o),r=t(569),i=t.n(r),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),m=t.n(u),p=t(426),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const h=function(n){return!!document.querySelector(`.${n}`)||(function(){const n=document.querySelector(".content");n.hasChildNodes()&&(n.textContent="")}(),!1)},g=t.p+"1c829c6f3d3595481fcc.jpeg",v=function(){const n=document.querySelector(".content");if(!1===h("home-nav-content")){const e=document.createElement("div");e.classList.add("home-nav-content"),n.appendChild(e),document.body.style.backgroundImage=`url(${g})`}};function b(){!1===h("contact-nav-content")&&function(){document.body.style.backgroundImage=`url(${g})`;const n=document.querySelector(".content"),e=document.createElement("div");e.classList.add("contact-nav-content"),n.appendChild(e);const t=document.createElement("dialog");t.classList.add("contact-form"),e.appendChild(t),function(n,e){const t=document.createElement("button");t.classList.add("dialog-btn"),t.textContent="Let's Talk",e.appendChild(t),t.addEventListener("click",(()=>{n.showModal(),e.removeChild(t)})),n.addEventListener("close",(()=>{e.appendChild(t)})),function(n){const e=document.createElement("form"),t=document.createElement("fieldset");t.classList.add("form-left"),e.appendChild(t);const o=document.createElement("input"),a=document.createElement("label");a.textContent="Email:",o.setAttribute("id","email"),o.setAttribute("for","email"),t.appendChild(a),t.appendChild(o);const r=document.createElement("input"),i=document.createElement("label");i.textContent="Name:",r.setAttribute("id","name"),r.setAttribute("for","name"),t.appendChild(i),t.appendChild(r);const c=document.createElement("textarea");c.classList.add("contact-message");const s=document.createElement("label");s.textContent="Message:",c.setAttribute("id","message"),c.setAttribute("for","message"),e.appendChild(s),e.appendChild(c);const d=document.createElement("div");d.classList.add("buttonDiv"),e.appendChild(d);const l=document.createElement("button");l.classList.add("cancel-btn"),l.textContent="Cancel",l.setAttribute("formmethod","dialog");const u=document.createElement("button");u.classList.add("confirm-btn"),u.textContent="Confirm",u.setAttribute("value","default"),d.appendChild(u),d.appendChild(l),n.appendChild(e)}(n)}(t,e)}()}const y=t.p+"95be6017861e228766d6.png",C=t.p+"1b1da92f444583d03b6b.png",x=t.p+"2b997fa23638351feab8.png",E=t.p+"3e11c8379acddeb528bd.png",w=t.p+"ec5d33fb05fa916e2f14.png",k=t.p+"3681fc2b8ac9d6b9039e.png";(function(){const n=document.querySelector("body"),e=document.createElement("div");e.setAttribute("class","content");const t=document.createElement("div");t.setAttribute("class","nav-div");const o=document.createElement("button");o.setAttribute("class","nav home-nav"),o.textContent="Home";const a=document.createElement("button");a.setAttribute("class","nav contact-nav"),a.textContent="Contact";const r=document.createElement("button");r.setAttribute("class","nav menu-nav"),r.textContent="Menu",t.appendChild(o),t.appendChild(a),t.appendChild(r),function(n,...e){const[{homeNav:t,contactNav:o,menuNav:a}]=e;t.addEventListener("click",(()=>{v()})),o.addEventListener("click",(()=>{b()})),a.addEventListener("click",(()=>{!function(){const n=[{image:y,title:"Steak",description:"Juicy, tender, grilled delight for meat lovers."},{image:C,title:"Bread Pudding",description:"Sweet, creamy, and comforting dessert with caramelized edges"},{image:x,title:"Cheeseburger",description:"Classic combo of juicy beef and melted cheese."},{image:w,title:"Shrimp and Grits",description:"Savory blend of succulent shrimp and creamy grits."},{image:E,title:"Pizza",description:"Deliciously cheesy, saucy, and endlessly customizable delight."},{image:k,title:"Cheesecake",description:"Rich, creamy, and indulgent dessert with smooth texture."}],e=h("menu-nav-content");if(document.body.style.backgroundImage=`url(${g})`,!1===e){const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("menu-nav-content"),e.appendChild(t);const o=document.createElement("div");o.classList.add("menu"),o.style.backgroundColor="rgba(19, 20, 20, 0.7)",t.appendChild(o);for(let e=0;e<n.length;e+=1){const t=document.createElement("div");t.classList.add("menu-images"),t.style.backgroundImage=`url(${n[e].image})`;const a=document.createElement("div");a.classList.add("food-details");const r=document.createElement("div");r.classList.add("food-title"),r.textContent=`${n[e].title}`,r.style.color="white";const i=document.createElement("div");i.classList.add("food-description"),i.textContent=`${n[e].description}`,i.style.color="white",o.appendChild(t),o.appendChild(a),a.appendChild(r),a.appendChild(i)}}}()}))}(0,{menuNav:r,homeNav:o,contactNav:a}),function(n,e){const t=document.createElement("div");t.setAttribute("class","header"),n.appendChild(t);const o=document.createElement("div");o.classList.add("header-title"),o.textContent="Breezy Bites",t.appendChild(o),t.appendChild(e)}(n,t),n.appendChild(e)})(),v()})()})();