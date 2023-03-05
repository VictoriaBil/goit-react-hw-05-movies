"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[708],{706:function(n,t,e){e.d(t,{TP:function(){return p},kI:function(){return u},q:function(){return l},tx:function(){return f},zv:function(){return d}});var r=e(861),a=e(757),o=e.n(a),i=e(243),c="fa2d81658e7600d0ffe01f5c9f2cea9c",s="https://api.themoviedb.org/3",u=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(c));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),alert("Something went wrong.Try again!"),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"/search/movie?api_key=").concat(c,"&query=").concat(t));case 3:return 0===(e=n.sent).data.results.length&&alert("There are no such movies"),n.abrupt("return",e.data.results);case 8:n.prev=8,n.t0=n.catch(0),alert("Something went wrong.Try again!"),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(c));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),alert("Something went wrong.Try again!"),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(c));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:n.prev=7,n.t0=n.catch(0),alert("Something went wrong.Try again!"),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(c));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),alert("Something went wrong.Try again!"),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},708:function(n,t,e){e.r(t),e.d(t,{default:function(){return V}});var r,a,o,i,c,s,u,l,p,d,f,v,x,h,g,m=e(861),w=e(439),Z=e(757),j=e.n(Z),y=e(689),b=e(461),k=e(168),P=e(444),_=e(87),T=P.ZP.div(r||(r=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),S=P.ZP.p(a||(a=(0,k.Z)(["\n  font-size: 30px;\n  font-weight: 700;\n  color: teal;\n  margin: 0;\n  margin-top: 20px;\n"]))),z=P.ZP.ul(o||(o=(0,k.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 0;\n"]))),I=P.ZP.li(i||(i=(0,k.Z)(["\n  list-style: none;\n"]))),O=(0,P.ZP)(_.OL)(c||(c=(0,k.Z)(["\n  padding: 10px 30px;\n  display: inline-block;\n  width: 50px;\n  text-align: center;\n  border-radius: 5px;\n  border: 2px solid teal;\n  text-decoration: none;\n  color: black;\n  font-weight: 700;\n\n  &.active {\n    color: white;\n    background-color: teal;\n  }\n"]))),C=e(184),q=function(){var n,t,e,r,a=(0,y.TH)();return(0,C.jsxs)(T,{children:[(0,C.jsx)(S,{children:"Additional information"}),(0,C.jsxs)(z,{children:[(0,C.jsx)(I,{children:(0,C.jsx)(O,{to:b.s.cast,state:{from:null!==(n=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/"},children:"Cast"})}),(0,C.jsx)(I,{children:(0,C.jsx)(O,{to:b.s.reviews,state:{from:null!==(e=null===(r=a.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"},children:"Reviews"})})]}),(0,C.jsx)(y.j3,{})]})},G=P.ZP.div(s||(s=(0,k.Z)(["\n  display: flex;\n  margin-top: 20px;\n  gap: 40px;\n"]))),H=P.ZP.div(u||(u=(0,k.Z)(["\n  padding: 15px;\n"]))),L=P.ZP.p(l||(l=(0,k.Z)(["\n  margin: 0;\n  font-size: 45px;\n  font-weight: 700;\n  color: teal;\n"]))),U=P.ZP.div(p||(p=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),A=P.ZP.span(d||(d=(0,k.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-top: 20px;\n  font-size: 20px;\n  font-weight: 700;\n\n  p {\n    margin: 0;\n  }\n"]))),E=P.ZP.p(f||(f=(0,k.Z)(["\n  margin-top: 20px;\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 0;\n"]))),F=P.ZP.p(v||(v=(0,k.Z)(["\n  margin-top: 10px;\n  margin-bottom: 0;\n"]))),M=P.ZP.p(x||(x=(0,k.Z)(["\n  margin-top: 20px;\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 0;\n"]))),R=P.ZP.p(h||(h=(0,k.Z)(["\n  margin-top: 10px;\n  margin-bottom: 0;\n"]))),B=e(655),D=function(n){var t=n.movieInfo,e=t.poster_path,r=t.title,a=t.vote_average,o=t.genres,i=t.overview;return(0,C.jsxs)(G,{children:[(0,C.jsx)(H,{children:(0,C.jsx)("img",{src:null!==e?"https://image.tmdb.org/t/p/w500/".concat(e):B,alt:r})}),(0,C.jsxs)(U,{children:[(0,C.jsx)(L,{children:r}),(0,C.jsxs)(A,{children:["User Score: ",(0,C.jsxs)("p",{children:[Math.round(10*a),"%"]})]}),(0,C.jsx)(E,{children:"Overview"}),(0,C.jsx)(F,{children:i}),(0,C.jsx)(M,{children:"Genres"}),(0,C.jsx)(R,{children:o.map((function(n){return n.name})).join(" , ")})]})]})},J=e(791),K=e(706),N=e(221),Q=(0,P.ZP)(_.OL)(g||(g=(0,k.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 20px;\n  font-weight: 700;\n\n  &:hover {\n    color: teal;\n  }\n"]))),V=function(){var n,t,e,r,a=(0,y.UO)().movieId,o=(0,J.useState)(null),i=(0,w.Z)(o,2),c=i[0],s=i[1],u=(0,y.TH)();return(0,J.useEffect)((function(){var n=function(){var n=(0,m.Z)(j().mark((function n(){var t;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,K.TP)(a);case 2:t=n.sent,s(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[a]),(0,C.jsxs)("div",{children:[c&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Q,{to:null!==(n=null===(t=u.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",children:"Go back"}),(0,C.jsx)(D,{movieInfo:c}),(0,C.jsx)(q,{backPath:null!==(e=null===(r=u.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"})]}),(0,C.jsx)(J.Suspense,{fallback:(0,C.jsx)(N.a,{}),children:(0,C.jsx)(y.j3,{})})]})}},655:function(n,t,e){n.exports=e.p+"static/media/noposter.aa443dc4d5b164f16654.webp"}}]);
//# sourceMappingURL=708.10141be3.chunk.js.map