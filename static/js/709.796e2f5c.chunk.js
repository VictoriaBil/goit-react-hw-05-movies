"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[709],{706:function(t,n,e){e.d(n,{TP:function(){return f},kI:function(){return s},q:function(){return p},tx:function(){return v},zv:function(){return l}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="fa2d81658e7600d0ffe01f5c9f2cea9c",i="https://api.themoviedb.org/3",s=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),alert("Something went wrong.Try again!"),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(n));case 3:return 0===(e=t.sent).data.results.length&&alert("There are no such movies"),t.abrupt("return",e.data.results);case 8:t.prev=8,t.t0=t.catch(0),alert("Something went wrong.Try again!"),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),alert("Something went wrong.Try again!"),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data.cast);case 7:t.prev=7,t.t0=t.catch(0),alert("Something went wrong.Try again!"),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),alert("Something went wrong.Try again!"),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()},709:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(861),a=e(439),c=e(757),u=e.n(c),o=e(689),i=e(791),s=e(706),p=e(184),f=function(t){var n=t.reviews;return n&&n.length?(0,p.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{children:["Author: ",e]}),(0,p.jsx)("p",{children:r})]},n)}))}):(0,p.jsx)("p",{children:"No information about reviews is available"})},l=function(){var t=(0,o.UO)().movieId,n=(0,i.useState)(),e=(0,a.Z)(n,2),c=e[0],l=e[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.tx)(t);case 2:e=n.sent,l(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,p.jsx)(p.Fragment,{children:c&&(0,p.jsx)(f,{reviews:c})})}}}]);
//# sourceMappingURL=709.796e2f5c.chunk.js.map