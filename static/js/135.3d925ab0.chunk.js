"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{216:function(e,t,r){r.d(t,{IV:function(){return h},Mc:function(){return o},cu:function(){return s},kN:function(){return f},wH:function(){return p}});var n=r(861),a=r(757),c=r.n(a),i=r(263);function s(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/popular?api_key=b22eeaf20157945591c68d8a5e58dd30&language=en-US&page=1&include_adult=false");case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function o(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=b22eeaf20157945591c68d8a5e58dd30&language=en-US"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=b22eeaf20157945591c68d8a5e58dd30&language=en-US"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=b22eeaf20157945591c68d8a5e58dd30&language=en-US"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=b22eeaf20157945591c68d8a5e58dd30&language=en-US&page=1&include_adult=false&query=".concat(t));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},135:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(439),a=r(791),c=r(216),i=r(87),s=r(689),u="MovieDetails_wrapper_page__w+qfG",o="MovieDetails_genres_list__14ciI",l="MovieDetails_btn_details__LDLxf",p="MovieDetails_link_details__nwHEE",d=r(184);function h(){var e,t,r=(0,a.useState)({}),h=(0,n.Z)(r,2),v=h[0],f=h[1],_=(0,s.UO)().movieId,m=(0,s.TH)();if((0,a.useEffect)((function(){(0,c.Mc)(_).then((function(e){return f(e)}))}),[]),v){var g=v.genres;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.rU,{className:l,to:null!==(e=null===(t=m.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:"Go Back"}),(0,d.jsxs)("div",{className:u,children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:v.poster_path&&"https://image.tmdb.org/t/p/w500".concat(v.poster_path),alt:v.original_title,width:"200px"})}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{children:[v.original_title," (",v.release_date&&v.release_date.slice(0,4),")"]}),(0,d.jsxs)("p",{children:["User Score: ",Math.ceil(100*v.vote_average/10)," %"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:v.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("ul",{className:o,children:g&&g.map((function(e){return(0,d.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:" Additional infomation"}),(0,d.jsxs)(i.rU,{to:"cast",className:p,children:[" ","Cast"," "]}),(0,d.jsxs)(i.rU,{to:"reviews",className:p,children:[" ","Reviews"]}),(0,d.jsx)(s.j3,{})]})]})}}}}]);
//# sourceMappingURL=135.3d925ab0.chunk.js.map