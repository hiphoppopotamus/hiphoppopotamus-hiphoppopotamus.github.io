(function(t){function e(e){for(var r,o,s=e[0],l=e[1],u=e[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0eda":function(t,e,a){},4412:function(t,e,a){},"4f99":function(t,e,a){"use strict";var r=a("97b3"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"portfolio"}},[a("NavigationHeader"),a("Home")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navigation-header"}},[a("b-navbar",{attrs:{id:"navbar",fixed:"top",toggleable:"md",type:"dark",variant:"onyx-blue"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("euan widjaja")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{staticClass:"anchor",attrs:{href:"#home"}},[t._v("HOME")]),a("b-nav-item",{staticClass:"anchor",attrs:{href:"https://drive.google.com/file/d/1GU5R77zHob4qKCG8j8nrHy8eljovrDoR/view?usp=sharing",target:"_blank"}},[t._v("RESUME")])],1)],1)],1)],1)},s=[],l={name:"NavigationHeader"},u=l,c=(a("baa5"),a("2877")),f=Object(c["a"])(u,o,s,!1,null,"d259ea30",null),d=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("br"),a("b-jumbotron",{scopedSlots:t._u([{key:"header",fn:function(){return[a("p",{attrs:{id:"header"}},[t._v("Hey, it's Euan")]),a("p",{attrs:{id:"subheader"}},[t._v("Student | Software Engineer | Filmmaker")])]},proxy:!0}])},[a("hr",{staticClass:"my-4"}),a("p",{attrs:{id:"description"}},[t._v(" I am a Software Engineering student based in Wellington that values creativity and diversity in the process of development. "),a("br"),t._v(" I take pride in my passion to write simple software and grounded stories that "),a("b",{attrs:{id:"bolded-description"}},[t._v("“comfort the afflicted and afflict the comfortable”.")])]),a("ul",{attrs:{id:"avatar-list"}},[a("li",{attrs:{id:"github-avatar"}},[a("a",{attrs:{href:"https://github.com/hiphoppopotamus"}},[a("i",{staticClass:"fab fa-github"})])]),a("li",{attrs:{id:"mail-avatar"}},[a("a",{attrs:{href:"mailto:euanwidjaja@yahoo.co.nz"}},[a("i",{staticClass:"far fa-envelope"})])]),a("li",{attrs:{id:"linkedin-avatar"}},[a("a",{attrs:{href:"https://www.linkedin.com/in/euan-widjaja-092952191/"}},[a("i",{staticClass:"fab fa-linkedin-in"})])]),a("li",{attrs:{id:"youtube-avatar"}},[a("a",{attrs:{href:"https://www.youtube.com/channel/UCR-wVSOXH2e9q8qpJmyMaEA/"}},[a("i",{staticClass:"fab fa-youtube"})])])])])],1)},v=[],b={name:"Introduction.vue"},h=b,m=(a("8ccf"),Object(c["a"])(h,p,v,!1,null,"214a971c",null)),g=m.exports,y={name:"App",components:{NavigationHeader:d,Home:g}},w=y,_=(a("4f99"),Object(c["a"])(w,n,i,!1,null,null,null)),j=_.exports,O=a("5f5b"),x=a("b1e0"),k=a("d3a2"),H=a.n(k);r["default"].config.productionTip=!1,r["default"].use(O["a"]),r["default"].use(x["a"]),r["default"].use(H.a),new r["default"]({render:function(t){return t(j)}}).$mount("#portfolio")},"8ccf":function(t,e,a){"use strict";var r=a("0eda"),n=a.n(r);n.a},"97b3":function(t,e,a){},baa5:function(t,e,a){"use strict";var r=a("4412"),n=a.n(r);n.a}});
//# sourceMappingURL=app.21ef0f75.js.map