(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),u=a(7),m=(a(25),a(1)),o=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg bg-light justify-content-center"},l.a.createElement("ul",{className:"nav justify-content-center"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/",className:"nav-link"},"HOME")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/people",className:"nav-link"},"PEOPLE"))))},s=a(19),E=function(e){var t=e.person;return l.a.createElement("tr",null,l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.sex),l.a.createElement("td",null,t.born),l.a.createElement("td",null,t.died),l.a.createElement("td",null,t.fatherName),l.a.createElement("td",null,t.motherName))},p=function(e){var t=e.people;return l.a.createElement("div",null,l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"NAME"),l.a.createElement("th",null,"SEX"),l.a.createElement("th",null,"BORN"),l.a.createElement("th",null,"DIED"),l.a.createElement("th",null,"MOTHER"),l.a.createElement("th",null,"FATHER"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement(E,{person:e,key:e.slug})})))))},i=a(12),h=a.n(i),d=a(18),f=function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){f().then(r)}),[]),l.a.createElement("div",null,l.a.createElement("h1",{className:"display-3"},"People table"),l.a.createElement(p,{people:a}))},v=function(){return l.a.createElement("h1",{className:"display-3"},"Home Page")},N=function(){return l.a.createElement("h1",{className:"display-3 text-danger"},"Page not found")},g=(a(32),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement(o,null)),l.a.createElement("div",{className:"App"},l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/people",component:b}),l.a.createElement(m.b,{exact:!0,path:"/",component:v}),l.a.createElement(m.a,{path:"/home",to:"/"}),l.a.createElement(N,null))))});c.a.render(l.a.createElement(u.a,null,l.a.createElement(g,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3b49ac3a.chunk.js.map