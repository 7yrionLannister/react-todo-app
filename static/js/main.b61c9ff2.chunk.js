(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{102:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(10),r=c.n(s),i=(c(81),c(66)),o=c(50),u=c(26),j=c(6),l=a.a.createContext(),d=function(e){var t=e.children,c=Object(n.useState)([]),a=Object(u.a)(c,2),s=a[0],r=a[1],d={tasks:s,setTasks:r,setTaskStatus:function(e,t){var c=s.map((function(c){return c.id===e?Object(o.a)(Object(o.a)({},c),{},{completed:t}):c}));r(c)},deleteTask:function(e){var t=s.filter((function(t){return t.id!==e}));r(t)},saveTask:function(e){var t=[].concat(Object(i.a)(s),[e]);r(t)}};return Object(j.jsx)(l.Provider,{value:d,displayName:"AppContext",children:t})},b=l,O=c(49),p=c.n(O),x=c(61),f=c(62),m=c.n(f),h=c(141),k=c(149),v=(c(102),c(145)),g=c(65),C=c.n(g),_=c(64),N=c.n(_),y=c(147),S=c(42),T=c.n(S),I=function(e){var t=e.id,c=e.title,a=e.completed,s=Object(n.useState)(!1),r=Object(u.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(c),d=Object(u.a)(l,2),O=d[0],p=d[1],x=Object(n.useContext)(b);return Object(j.jsxs)(h.a,{className:"taskItem",children:[Object(j.jsx)("div",{className:"taskItem__checkbox",children:Object(j.jsx)(k.a,{checked:a,onChange:function(e){x.setTaskStatus(t,e.target.checked)}})}),Object(j.jsx)("div",{className:"taskItem__title",children:i?Object(j.jsx)(y.a,{className:"taskItem__input",label:"task...",value:O,onChange:function(e){p(e.target.value)}}):Object(j.jsx)("p",{children:O})}),Object(j.jsxs)("div",{className:"taskItem__buttons",children:[i?Object(j.jsx)(v.a,{color:"primary",onClick:function(){return o(!1)},disabled:!O.length,children:Object(j.jsx)(T.a,{})}):Object(j.jsx)(v.a,{color:"primary",onClick:function(){return o(!0)},children:Object(j.jsx)(N.a,{})}),Object(j.jsx)(v.a,{color:"secondary",onClick:function(){x.deleteTask(t)},children:Object(j.jsx)(C.a,{})})]})]})},w=(c(107),function(){var e=Object(n.useContext)(b);return Object(j.jsx)("div",{className:"TasksList",children:e.tasks.map((function(e){return Object(j.jsx)(I,{id:e.id,title:e.title,completed:e.completed},e.id)}))})}),F=(c(108),c(146)),A=(c(109),c(148)),E=function(){var e=Object(n.useContext)(b),t=Object(n.useState)(""),c=Object(u.a)(t,2),a=c[0],s=c[1];return Object(j.jsxs)("form",{className:"taskForm",onSubmit:function(t){var c=Object(A.a)();t.preventDefault();var n={id:c,title:a,selected:!1,userId:c};e.saveTask(n),s("")},children:[Object(j.jsx)(y.a,{className:"taskForm__input",required:!0,value:a,onChange:function(e){return s(e.target.value)},id:"taskForm__input",label:"Agrega un titulo a la tarea"}),Object(j.jsx)(F.a,{type:"submit",color:"primary",startIcon:Object(j.jsx)(T.a,{}),disabled:!a.length,children:"Guardar"})]})},J=function(){var e=Object(n.useContext)(b),t=function(){var t=Object(x.a)(p.a.mark((function t(){var c,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("https://jsonplaceholder.typicode.com/todos");case 3:c=t.sent,n=c.data.slice(0,5),console.log(n),e.setTasks(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){t()}),[]),Object(j.jsxs)("div",{className:"tasksScreen",children:[Object(j.jsx)(E,{}),Object(j.jsx)(w,{})]})},q=function(){return Object(j.jsx)(d,{children:Object(j.jsx)(J,{})})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root"))},81:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.b61c9ff2.chunk.js.map