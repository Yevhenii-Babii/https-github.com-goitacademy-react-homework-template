"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{216:function(e,t,r){r.d(t,{IV:function(){return f},Mc:function(){return o},cu:function(){return s},kN:function(){return v},wH:function(){return l}});var n=r(861),a=r(757),c=r.n(a),u=r(263);function s(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/popular?api_key=b22eeaf20157945591c68d8a5e58dd30&language=en-US&page=1&include_adult=false");case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=b22eeaf20157945591c68d8a5e58dd30&language=en-US"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=b22eeaf20157945591c68d8a5e58dd30&language=en-US"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=b22eeaf20157945591c68d8a5e58dd30&language=en-US"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=b22eeaf20157945591c68d8a5e58dd30&language=en-US&page=1&include_adult=false&query=".concat(t));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},881:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(439),a=r(791),c="Movies_searchBar__7rhTU",u="Movies_movies_list__6BEzF",s="Movies_btnSubmit__DsGSE",i="Movies_link_list__ZkMFk",o=r(87),p=r(689),l=r(216),h=r(184);function f(){var e,t=(0,a.useState)(""),r=(0,n.Z)(t,2),f=r[0],d=r[1],v=(0,a.useState)([]),m=(0,n.Z)(v,2),g=m[0],_=m[1],b=(0,o.lr)(),k=(0,n.Z)(b,2),x=k[0],w=k[1],y=null!==(e=x.get("resultSearch"))&&void 0!==e?e:"",S=(0,p.TH)();(0,a.useEffect)((function(){y&&(0,l.kN)(y).then((function(e){return _(e.results)}))}),[y]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f&&w({resultSearch:f})},children:[(0,h.jsx)("input",{placeholder:"Search images and photos",className:c,type:"text",value:f,onChange:function(e){d(e.target.value)}}),(0,h.jsx)("button",{className:s,type:"submit",children:"Search"})]}),(0,h.jsx)("ul",{className:u,children:g.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsxs)(o.rU,{to:"".concat(e.id),state:{from:S},className:i,children:[(0,h.jsx)("img",{src:e.poster_path&&"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"".concat(e.original_title),width:"200px"}),(0,h.jsxs)("h3",{children:[" ",e.original_title]})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=910.2ab33457.chunk.js.map