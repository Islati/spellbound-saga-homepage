if(!self.define){let e,n={};const r=(r,i)=>(r=new URL(r+".js",i).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,u)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let s={};const o=e=>r(e,l),t={module:{uri:l},exports:s,require:o};n[l]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(u(...e),s)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/config.12366342.js",revision:null},{url:"_nuxt/default.11a361e0.css",revision:null},{url:"_nuxt/default.41aa92a1.js",revision:null},{url:"_nuxt/entry.c5e0ea18.css",revision:null},{url:"_nuxt/entry.d961d087.js",revision:null},{url:"_nuxt/error-404.6d72b675.js",revision:null},{url:"_nuxt/error-404.df3fa488.css",revision:null},{url:"_nuxt/error-500.7f453714.js",revision:null},{url:"_nuxt/error-500.8937b2b1.css",revision:null},{url:"_nuxt/Icon.ba6f5275.js",revision:null},{url:"_nuxt/IconCSS.c6d874f2.js",revision:null},{url:"_nuxt/index.421ad7ae.js",revision:null},{url:"_nuxt/index.8d995413.css",revision:null},{url:"_nuxt/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"200",revision:"cdf621462385515ec3145a34e2f2daae"},{url:"404",revision:"cdf621462385515ec3145a34e2f2daae"},{url:"favicon.ico",revision:"2856f61ff089ea6a6f6f5b91283710c5"},{url:"imgs/16bitlogo.png",revision:"4437057f3f34cc1fb04f5f370f993e9c"},{url:"imgs/entry-dungeon.png",revision:"1b442103e6ea9591503e56577f1433fa"},{url:"/",revision:"cdf621462385515ec3145a34e2f2daae"},{url:"manifest.webmanifest",revision:"649d31d21b051c3621f5e9f047632a51"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
