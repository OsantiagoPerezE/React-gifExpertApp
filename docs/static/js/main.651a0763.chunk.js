(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=(n(15),n(2)),s=n(10),u=n(6),o=n.n(u),j=n(8),d=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,a,c,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=lboLtNEMYgvfEcfk5EyiGCX7f6SPWP21"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=n(0),f=function(e){e.id;var t=e.title,n=e.url;return Object(l.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(l.jsx)("img",{src:n,alt:t}),Object(l.jsx)("p",{children:t})]})},b=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){d(e).then((function(e){console.log(e),r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(l.jsx)("p",{className:"animate__animated animate__flash",children:"loading"}),Object(l.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(l.jsx)(f,Object(s.a)({},e),e.id)}))})]})},p=n(9),m=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(p.a)(e))})),s(""))},children:Object(l.jsx)("input",{type:"text",value:r,onChange:function(e){s(e.target.value)}})})})},O=function(){var e=Object(a.useState)(["Dragon Ball"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"GifExpertApp"}),Object(l.jsx)(m,{setCategories:c}),Object(l.jsx)("hr",{}),Object(l.jsx)("ol",{children:n.map((function(e,t){return Object(l.jsx)(b,{category:e},e)}))})]})};r.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.651a0763.chunk.js.map