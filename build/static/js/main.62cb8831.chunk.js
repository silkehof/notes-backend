(this.webpackJsonpfs_test_2=this.webpackJsonpfs_test_2||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(2),o=n(15),i=n.n(o),a=n(6),u=n(3),s=function(t){var e=t.note,n=t.toggleImportance,r=e.important?"make not important":"make important";return Object(c.jsxs)("li",{className:"note",children:[e.content,Object(c.jsx)("button",{onClick:n,children:r})]})},j=function(t){var e=t.message;return null===e?null:Object(c.jsx)("div",{className:"error",children:e})},l=n(4),f=n.n(l),b="https://nameless-shore-32578.herokuapp.com/",d=function(){return f.a.get(b).then((function(t){return t.data}))},m=function(t){return f.a.post(b,t).then((function(t){return t.data}))},h=function(t,e){return f.a.put("".concat(b,"/").concat(t),e).then((function(t){return t.data}))},O=function(){return Object(c.jsxs)("div",{style:{color:"green",fontWeight:"bold",fontSize:16},children:[Object(c.jsx)("br",{}),Object(c.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2020"})]})},p=function(){var t=Object(r.useState)([]),e=Object(u.a)(t,2),n=e[0],o=e[1],i=Object(r.useState)(""),l=Object(u.a)(i,2),f=l[0],b=l[1],p=Object(r.useState)(!0),v=Object(u.a)(p,2),x=v[0],g=v[1],S=Object(r.useState)(null),k=Object(u.a)(S,2),w=k[0],y=k[1];Object(r.useEffect)((function(){d().then((function(t){o(t)}))}),[]);var N=x?n:n.filter((function(t){return!0===t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)(j,{message:w}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return g(!x)},children:["Show ",x?"important":"all"]})}),Object(c.jsx)("ul",{children:N.map((function(t,e){return Object(c.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),c=Object(a.a)(Object(a.a)({},e),{},{important:!e.important});h(t,c).then((function(e){o(n.map((function(n){return n.id!==t?n:e})))})).catch((function(c){y("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){y(null)}),5e3),o(n.filter((function(e){return e.id!==t})))}))}(t.id)}},e)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:f,date:(new Date).toISOString(),important:Math.random()>.5};m(e).then((function(t){o(n.concat(t)),b("")}))},children:[Object(c.jsx)("input",{value:f,onChange:function(t){console.log(t.target.value),b(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"Save"})]}),Object(c.jsx)(O,{})]})};n(39);i.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.62cb8831.chunk.js.map