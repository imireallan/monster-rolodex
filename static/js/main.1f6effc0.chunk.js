(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],{14:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),a=n(6),o=n.n(a),i=(n(14),n(4)),u=n.n(i),j=n(7),h=n(5),l=n(8),d=n.n(l);n(37),n(38);function b(e){var t=e.monster;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180"),alt:"monster",loading:"lazy"}),Object(c.jsx)("h2",{children:t.name}),Object(c.jsx)("p",{children:t.email})]})}n(39);function f(e){var t=e.monsters;return Object(c.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(c.jsx)(b,{monster:e},e.id)}))})}n(40);function m(e){var t=e.searchText,n=e.onInputChange;return Object(c.jsx)("div",{className:"search",children:Object(c.jsx)("input",{type:"search",placeholder:"Search monster....",value:t,onChange:function(e){n(e.target.value)}})})}var p=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(""),o=Object(h.a)(a,2),i=o[0],l=o[1];Object(r.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=n.filter((function(e){return e.name.toLowerCase().includes(i.toLocaleLowerCase())}));return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Monster Rolodex"}),Object(c.jsx)("div",{className:"search",children:Object(c.jsx)(m,{searchText:i,onInputChange:l})}),Object(c.jsx)("div",{children:n.length?Object(c.jsx)(f,{monsters:b}):Object(c.jsx)(d.a,{type:"Bars",color:"rgba(0,0,0,0.7)",width:100,style:{display:"grid",placeItems:"center",minHeight:"100vh"}})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),x()}},[[41,1,2]]]);
//# sourceMappingURL=main.1f6effc0.chunk.js.map