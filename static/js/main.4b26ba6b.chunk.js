(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),i=n.n(a),r=n(3),l=n(2),s=["Paris","London","Rome","Florence","Barcelona","Prague","Amsterdam","Santorini","Zurich","Venice","Athens","Vienna","Madrid","Stockholm","Dublin","Budapest","Berlin","Intanbul","Lisbon","Edinburgh","Munich","St. Petersburg","Lake Como","Cyprus","Crete","Granada","Seville","Reykjavik","Tallinn"],u=[[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[0,6,12,18,24],[4,8,12,16,20]],o=function(){for(var e=Object(r.a)(s),t=[],n=0;n<25;++n){var c=Math.floor(Math.random()*e.length);t.push(e[c]),e.splice(c,1)}return e=[],t},j=n.p+"static/media/bingo.e5457bdf.jfif",d=(n(12),n(0)),b=Array(25).fill(!1);b[12]=!0;var h=function(e){var t=e.ticketElements,n=e.calledCities,a=Object(c.useState)([]),i=Object(l.a)(a,2),s=i[0],o=i[1],h=Object(c.useState)(b),f=Object(l.a)(h,2),O=f[0],m=f[1],x=function(e,t){if(t){var n=Object(r.a)(O);n[e]=!0,m(n);var c=function(e,t){for(var n=0;n<u.length;++n)if(u[n].includes(t)){var c=Object(l.a)(u[n],5),a=c[0],i=c[1],r=c[2],s=c[3],o=c[4];if(e[a]&&e[i]&&e[r]&&e[s]&&e[o])return u[n];if(!e[a]&&e[i]&&e[r]&&e[s]&&e[o])return[a];if(!e[i]&&e[a]&&e[r]&&e[s]&&e[o])return[i];if(!e[r]&&e[a]&&e[i]&&e[s]&&e[o])return[r];if(!e[s]&&e[a]&&e[i]&&e[r]&&e[s])return[s];if(!e[o]&&e[i]&&e[r]&&e[s]&&e[a])return[o]}return null}(n,e);o(c)}},v=function(e){return!(null==s||1===s.length||!s.includes(e))},g=function(e){return!(null==s||1!==s.length||!s.includes(e))};return Object(d.jsx)("div",{className:"grid container",children:t.map((function(e,c){var a=n.includes(t[c]);return 12===c?Object(d.jsx)("div",{className:"element",children:Object(d.jsx)("img",{className:"fittedImage",src:j,alt:"Bingo"})},c):Object(d.jsx)("div",{className:"element ".concat(a?"generated":""," ").concat(O[c]?"clicked":""," ").concat(v(c)?"shake":""," ").concat(g(c)?"change-color":""),onClick:function(){return x(c,a)},children:e},c)}))})},f=(n(14),function(e){var t=e.changeTotalPlayers,n=Object(c.useState)(1),a=Object(l.a)(n,2),i=a[0],r=a[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{children:[Object(d.jsx)("div",{className:"margined",children:Object(d.jsx)("label",{className:"text gray-text",children:"Number of players: "})}),Object(d.jsx)("input",{className:"inputText",type:"number",min:1,value:i,onChange:function(e){r(e.target.value)},"data-testid":"numberInput"}),Object(d.jsx)("button",{className:"button text gray-text bold",onClick:function(e){e.preventDefault(),t(i)},children:"Show Tickets"}),Object(d.jsx)("hr",{})]})})}),O=function(e){var t=e.updateCalledCities,n=Object(c.useState)(Object(r.a)(s)),a=Object(l.a)(n,2),i=a[0],u=a[1];return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("button",{className:"button text bold",onClick:function(){if(0===i.length)t("That was all we had...");else{var e=Object(r.a)(i),n=Math.floor(Math.random()*e.length);t(e[n]),e.splice(n,1),u(e)}},children:"Pick a City"})})},m=(n(15),function(e){var t=e.calledCityNames,n=t[t.length-1],c=t.slice(0,t.length-1);return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("label",{className:"container text gray-text bold",children:n})}),Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:"noBullets",children:c.map((function(e){return"That was all we had..."===e?null:Object(d.jsx)("li",{className:"list-elements text light-gray-text",children:e},e)}))})})]})}),x=(n(16),function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),s=Object(l.a)(i,2),u=s[0],j=s[1],b=Object(c.useState)([]),x=Object(l.a)(b,2),v=x[0],g=x[1];Object(c.useEffect)((function(){for(var e=[],t=0;t<n;t++){var c=o();e.push(c)}j([].concat(e))}),[n]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"heading",children:"Traveller's Bingo!"}),Object(d.jsxs)("div",{className:"flex-container",children:[Object(d.jsxs)("div",{className:"flex-item-left container colored margined",children:[Object(d.jsx)(f,{changeTotalPlayers:a}),Object(d.jsx)(O,{updateCalledCities:function(e){g([].concat(Object(r.a)(v),[e]))}}),Object(d.jsx)(m,{calledCityNames:v})]}),Object(d.jsx)("div",{className:"flex-item-right",children:u.map((function(e,t){return Object(d.jsx)(h,{ticketElements:e,calledCities:v},t)}))})]})]})});n(17);i.a.render(Object(d.jsx)(x,{}),document.querySelector("#root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.4b26ba6b.chunk.js.map