(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),o=n.n(a),c=n(6),r=n.n(c),s=(n(14),n(15),n(8)),l=n(5),d=n(7);var h=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Employee Directory"}),Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light justify-content-center",children:Object(i.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(i.jsx)("input",{value:e.searchState,onChange:e.onChange,className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"})})})]})};var u=function(){var e=Object(a.useState)(d),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),r=Object(l.a)(c,2),u=r[0],g=r[1],b=function(e){var t=Object(s.a)(n);t.sort(function(e){return function(t,n){return t[e]<n[e]?-1:t[e]>n[e]?1:0}}(e)),o(t)};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(h,{searchState:u,onChange:function(e){var t=e.target.value;g(t)}}),Object(i.jsxs)("table",{className:"table table-dark",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsxs)("th",{scope:"col",children:["#",Object(i.jsx)("i",{onClick:function(){return b("id")},children:Object(i.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-arrow-down-short",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{"fill-rule":"evenodd",d:"M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"})})})]}),Object(i.jsxs)("th",{scope:"col",children:["Name",Object(i.jsx)("i",{onClick:function(){return b("name")},children:Object(i.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-arrow-down-short",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{"fill-rule":"evenodd",d:"M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"})})})]}),Object(i.jsxs)("th",{scope:"col",children:["Occupation",Object(i.jsx)("i",{onClick:function(){return b("occupation")},children:Object(i.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-arrow-down-short",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{"fill-rule":"evenodd",d:"M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"})})})]}),Object(i.jsxs)("th",{scope:"col",children:["Location",Object(i.jsx)("i",{onClick:function(){return b("location")},children:Object(i.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-arrow-down-short",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{"fill-rule":"evenodd",d:"M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"})})})]})]})}),Object(i.jsx)("tbody",{children:n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())})).map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:e.id}),Object(i.jsx)("td",{children:e.name}),Object(i.jsx)("td",{children:e.occupation}),Object(i.jsx)("td",{children:e.location})]})}))})]})]})};var g=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(u,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),o(e),c(e)}))};n(16);r.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),b()},7:function(e){e.exports=JSON.parse('[{"id":1,"name":"Bob Deckard","occupation":"Fry Cook","location":"Austin"},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Restaurant Owner","location":"A Giant Anchor"},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Cashier","location":"An Easter Island Head"},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Boy Genius","location":"A Secret Laboratory"},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"A Cowardly Dog","location":"Nowhere, Kansas"},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Student","location":"Bluffington"},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"Looney Toon","location":"A Rabbit Burrow"},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"Ladies Man","location":"Aron City"},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California"},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Cashier","location":"O-Town, California"},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"Superhero","location":"Earth"},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.d71d0fcd.chunk.js.map