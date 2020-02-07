var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.data!==n&&(t.data=n)}let h;function m(t){h=t}const g=[],$=[],b=[],y=[],_=Promise.resolve();let x=!1;function w(t){b.push(t)}const v=new Set;function j(){do{for(;g.length;){const t=g.shift();m(t),A(t.$$)}for(;$.length;)$.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];v.has(n)||(v.add(n),n())}b.length=0}while(g.length);for(;y.length;)y.pop()();x=!1,v.clear()}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(w)}}const E=new Set;let k;function C(t,n){t&&t.i&&(E.delete(t),t.i(n))}function N(t,n,e,o){if(t&&t.o){if(E.has(t))return;E.add(t),k.c.push(()=>{E.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function B(t){t&&t.c()}function M(t,e,l){const{fragment:c,on_mount:s,on_destroy:u,after_update:i}=t.$$;c&&c.m(e,l),w(()=>{const e=s.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(w)}function O(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function S(t,n){-1===t.$$.dirty[0]&&(g.push(t),x||(x=!0,_.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function T(n,r,l,c,s,u,i=[-1]){const a=h;m(n);const f=r.props||{},d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:e(),dirty:i};let p=!1;d.ctx=l?l(n,f,(t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&S(n,t)),e}):[],d.update(),p=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),r.target&&(r.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):d.fragment&&d.fragment.c(),r.intro&&C(n.$$.fragment),M(n,r.target,r.anchor),j()),m(a)}class q{$destroy(){O(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function H(n){let e,o,r,l,h,m,g,$;return{c(){e=i("main"),o=i("div"),r=a(n[0]),l=f(),h=i("div"),m=a(n[1]),g=f(),$=i("div"),d(o,"class","title"),d(h,"class","description"),d($,"class","table")},m(t,n){s(t,e,n),c(e,o),c(o,r),c(e,l),c(e,h),c(h,m),c(e,g),c(e,$)},p(t,[n]){1&n&&p(r,t[0]),2&n&&p(m,t[1])},i:t,o:t,d(t){t&&u(e)}}}function L(t,n,e){let{label:o}=n,{des:r}=n;return t.$set=t=>{"label"in t&&e(0,o=t.label),"des"in t&&e(1,r=t.des)},[o,r]}class P extends q{constructor(t){super(),T(this,t,L,H,l,{label:0,des:1})}}function V(t,n,e){const o=t.slice();return o[1]=n[e].label,o[2]=n[e].des,o}function z(n){let e,o,r;const l=new P({props:{label:n[1],des:n[2]}});return{c(){e=i("li"),B(l.$$.fragment),o=f(),d(e,"class","city-list__item")},m(t,n){s(t,e,n),M(l,e,null),c(e,o),r=!0},p:t,i(t){r||(C(l.$$.fragment,t),r=!0)},o(t){N(l.$$.fragment,t),r=!1},d(t){t&&u(e),O(l)}}}function D(t){let n,e,r,l=t[0],a=[];for(let n=0;n<l.length;n+=1)a[n]=z(V(t,l,n));const f=t=>N(a[t],1,1,()=>{a[t]=null});return{c(){n=i("main"),e=i("ul");for(let t=0;t<a.length;t+=1)a[t].c();d(e,"class","city-list")},m(t,o){s(t,n,o),c(n,e);for(let t=0;t<a.length;t+=1)a[t].m(e,null);r=!0},p(t,[n]){if(1&n){let r;for(l=t[0],r=0;r<l.length;r+=1){const o=V(t,l,r);a[r]?(a[r].p(o,n),C(a[r],1)):(a[r]=z(o),a[r].c(),C(a[r],1),a[r].m(e,null))}for(k={r:0,c:[],p:k},r=l.length;r<a.length;r+=1)f(r);k.r||o(k.c),k=k.p}},i(t){if(!r){for(let t=0;t<l.length;t+=1)C(a[t]);r=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)N(a[t]);r=!1},d(t){t&&u(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(a,t)}}}function F(t){return[[{label:"孝感市",des:"孝感市的新冠状病毒最新疫情动态"}]]}class G extends q{constructor(t){super(),T(this,t,F,D,l,{})}}function I(n){let e,o,r,l,a;const p=new G({});return{c(){e=i("main"),o=i("header"),o.innerHTML='<h1 class="title svelte-1whoj3j">孝感市辖区新冠状病毒（2019-nCoV）疫情动态</h1>',r=f(),l=i("article"),B(p.$$.fragment),d(o,"class","svelte-1whoj3j"),d(l,"class","svelte-1whoj3j"),d(e,"class","svelte-1whoj3j")},m(t,n){s(t,e,n),c(e,o),c(e,r),c(e,l),M(p,l,null),a=!0},p:t,i(t){a||(C(p.$$.fragment,t),a=!0)},o(t){N(p.$$.fragment,t),a=!1},d(t){t&&u(e),O(p)}}}return new class extends q{constructor(t){super(),T(this,t,null,I,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
