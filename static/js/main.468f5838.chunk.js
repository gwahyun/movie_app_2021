(this.webpackJsonpmoview_app_2021=this.webpackJsonpmoview_app_2021||[]).push([[0],{49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var a=s(3),r=s.n(a),i=s(15),n=s.n(i),c=s(6),o=s.n(c),m=s(16),l=s(17),d=s(18),u=s(21),j=s(20),v=s(19),h=s.n(v),p=s(2),b=s.n(p),g=s(0);function _(e){var t=e.year,s=e.title,a=e.summary,r=e.poster,i=e.genres;return Object(g.jsxs)("div",{className:"movie",children:[Object(g.jsx)("img",{src:r,alt:s,title:s}),Object(g.jsxs)("div",{className:"movie__data",children:[Object(g.jsx)("h1",{className:"movie__title",children:s}),Object(g.jsx)("h5",{className:"movie__year",children:t}),Object(g.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(g.jsx)("li",{className:"genres__genres",children:e},t)}))}),Object(g.jsxs)("h3",{className:"movie__summary",children:[a.slice(0,100),"..."]})]})]})}_.prototypes={key:b.a.number.isRequired,year:b.a.number.isRequired,title:b.a.string.isRequired,summary:b.a.string.isRequired,poster:b.a.string.isRequired,genres:b.a.arrayOf(b.a.string).isRequired};var y=_,O=(s(49),s(50),function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(g.jsx)("section",{className:"container",children:t?Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(g.jsx)("div",{className:"movies",children:s.map((function(e){return Object(g.jsx)(y,{year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(r.a.Component));n.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(O,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.468f5838.chunk.js.map