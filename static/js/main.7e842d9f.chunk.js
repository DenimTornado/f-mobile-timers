(this["webpackJsonpfm-events"]=this["webpackJsonpfm-events"]||[]).push([[0],{29:function(e){e.exports=JSON.parse('[{"ids":"begin","name":"NEW BEGINNINGS","end_timer":"02/04/2022 22:00:00","repeatable":{"date":"01/26/2022 22:00:00","value":"1","type":"d"},"note":"Don\'t forget to take targets","sub_events":[]},{"ids":"league","name":"LEAGUE TOUR","end_timer":"","repeatable":{"date":"01/26/2022 22:00:00","value":"1","type":"d"},"note":"","sub_events":[]},{"ids":"challenge","name":"CHALLENGE MODE","end_timer":"","repeatable":{"date":"01/26/2022 22:00:00","value":"1","type":"d"},"note":"","sub_events":[]},{"ids":"starpass","name":"starpass","end_timer":"","repeatable":{"date":"01/21/2022 22:00:00","value":"30","type":"d"},"note":"","sub_events":[]},{"ids":"rivals","name":"division rivals","end_timer":"","repeatable":{"date":"01/10/2022 22:00:00","value":"28","type":"d"},"note":"","sub_events":[]},{"ids":"daily","name":"DAILY TRAINING","end_timer":"","repeatable":{"date":"01/26/2022 22:00:00","value":"1","type":"d"},"note":"","sub_events":[{"ids":"","name":"skill training","end_timer":"","repeatable":{"date":"01/26/2022 22:00:00","value":"3","type":"d"},"note":"","sub_events":[]},{"ids":"","name":"match training","end_timer":"","repeatable":{"date":"01/27/2022 22:00:00","value":"3","type":"d"},"note":"","sub_events":[]},{"ids":"","name":"special training","end_timer":"","repeatable":{"date":"01/25/2022 22:00:00","value":"3","type":"d"},"note":"","sub_events":[]}]},{"ids":"market","name":"Market update","end_timer":"","repeatable":{"date":"01/26/2022 20:35:10","value":"2","type":"h"},"note":"","sub_events":[]},{"ids":"icon","name":"ICON JOURNEYS","end_timer":"","repeatable":{},"note":"","sub_events":[]}]')},51:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),s=a(24),i=a.n(s),u=a(13),l=a(5),o=a(6),d=(a(51),Object(o.createCn)("logo")),j=c.memo((function(){return Object(n.jsx)("div",{className:d(),children:Object(n.jsx)("img",{src:"/fmt/img/logo.png",alt:""})})})),b=a(25),m=a.n(b),v=(a(66),Object(o.createCn)("navbar"));function O(e,t){return e===t?"active":""}var h=c.memo((function(){var e,t=Object(l.f)(),a=(null===(e=m.a.parse(t.search).router)||void 0===e?void 0:e.toString())||"";return Object(n.jsxs)("div",{className:v(),children:[Object(n.jsx)(u.b,{activeClassName:O(a,"calculator"),to:"/fmt?router=calculator",children:"OVR Calculator"}),Object(n.jsx)(u.b,{activeClassName:O(a,"timers"),to:"/fmt?router=timers",children:"Timers"}),Object(n.jsx)(u.b,{activeClassName:O(a,"chemistry"),to:"/fmt?router=chemistry",children:"Chemistry Groups"}),Object(n.jsx)(u.b,{activeClassName:O(a,"changelog"),exact:!0,to:"/fmt?router=changelog",children:"Changelog"})]})})),f=(a(72),a(11)),g=a(29),p=a(21),x=a(42),N=(a(73),function(e,t){if(!e||0===e)return"00";var a=t?e+t:e;return a<10?"0"+a:a}),_=r.a.memo((function(e){var t=e.now,a=e.duration,s=Object(c.useState)(""),i=Object(f.a)(s,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){var e=new Date(a),n=Object(p.a)(e,t),c=Object(x.a)({start:t,end:e});if(n>2)l("".concat(n," days"));else{var r=c.days&&c.days>0?24:0,s=N(c.hours,r),i=N(c.minutes),u=N(c.seconds);l("".concat(s,":").concat(i,":").concat(u))}}),[t,a]),Object(n.jsx)(r.a.Fragment,{children:u})})),L=(a(74),Object(o.createCn)("sub-event-row")),S=r.a.memo((function(e){var t=e.event,a=Object(c.useState)(new Date),r=Object(f.a)(a,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){setInterval((function(){var e=new Date;i(e)}),1e3)}),[]),Object(n.jsxs)("div",{className:L(),children:[Object(n.jsx)("div",{className:L("name"),children:t.name}),Object(n.jsx)("div",{className:L("timer",{expiring:t.expiring}),children:t.end_timer&&Object(n.jsx)(_,{now:s,duration:t.end_timer})}),Object(n.jsx)("div",{className:L("update"),children:t.update_timer&&Object(n.jsx)(_,{now:s,duration:t.update_timer})})]})})),y=(a(75),Object(o.createCn)("event-row")),C=r.a.memo((function(e){var t=e.event,a=Object(c.useState)(new Date),r=Object(f.a)(a,2),s=r[0],i=r[1],u="/fmt/img/programs/"+t.ids+".png";return Object(c.useEffect)((function(){setInterval((function(){var e=new Date;i(e)}),1e3)}),[]),Object(n.jsxs)("div",{className:y(),children:[Object(n.jsx)("div",{className:y("img"),children:Object(n.jsx)("img",{src:u,alt:""})}),Object(n.jsxs)("div",{className:y("content"),children:[Object(n.jsxs)("div",{className:y("main_event"),children:[Object(n.jsx)("div",{className:y("name"),children:t.name}),Object(n.jsx)("div",{className:y("timer",{expiring:t.expiring}),children:t.end_timer&&Object(n.jsx)(_,{now:s,duration:t.end_timer})}),Object(n.jsx)("div",{className:y("update"),children:t.update_timer&&Object(n.jsx)(_,{now:s,duration:t.update_timer})})]}),Object(n.jsx)("div",{className:y("sub_events"),children:t.sub_events.map((function(e){return Object(n.jsx)(S,{event:e},e.ids)}))}),Object(n.jsx)("div",{className:y("event_note"),children:t.note})]})]})})),w=a(14),E=a(28),k=a(37);function A(e){var t,a=(new Date).getTime(),n=e;if(n.expiring=!1,n.end_timer){var c=n.end_timer,r=new Date(c).getTime();n.expiring=r-a<=864e5,n.timer=r}if(null===n||void 0===n||null===(t=n.repeatable)||void 0===t?void 0:t.date){var s=null===n||void 0===n?void 0:n.repeatable,i=s.date,u=s.type,l=s.value,o=new Date(i),d="days",j=p.a,b=1*l;"h"===u&&(d="hours",j=E.a);var m=j(a,o)+1,v=m%b;1===v&&(v=b);var O=Object(k.a)(o,Object(w.a)({},d,m+v));n.update_timer=new Date(O).getTime()}return n}a(76);localStorage.setItem("evts",JSON.stringify(g));var I=Object(o.createCn)("timers-page"),R=(new Date).getTime(),B=r.a.memo((function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1];return Object(c.useEffect)((function(){for(var e=g,t=0;t<g.length;t++){e[t]=A(e[t]);var a=e[t].sub_events;if(a.length>0){for(var n=[],c=0;c<a.length;c++){if(a[c].end_timer)new Date(a[c].end_timer).getTime()>R&&n.push(A(a[c]));else n.push(A(a[c]))}e[t].sub_events=n}}r(e)}),[]),Object(n.jsxs)("div",{className:I(),children:[Object(n.jsxs)("div",{className:I("header-row"),children:[Object(n.jsx)("div",{className:I("ending"),children:"Ending"}),Object(n.jsx)("div",{className:I("update"),children:"Update"})]}),a.map((function(e){return Object(n.jsx)(C,{event:e},e.ids)}))]})})),D=a(16),T=(a(78),a(8));function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return{}},a=function(){return Object(T.a)({type:e},t&&t.apply(void 0,arguments))};return a.type=e,a}var M=F("GLOBAL_SEARCH / changeValue",(function(e,t){return{id:e,value:t}})),G=(F("GLOBAL_SEARCH / countOvr",(function(){return{}})),F("GLOBAL_SEARCH / setTotal",(function(e){return{total:e}}))),P=F("GLOBAL_SEARCH / setNeeds",(function(e){return{needs:e}})),U=F("GLOBAL_SEARCH / setResults",(function(e){return{results:e}})),H=F("GLOBAL_SEARCH / setScheme",(function(e){return{scheme:e}})),J=a(15),V=a.n(J),K=a(23),W=a(43),X=function(e){return e.calculator},z=function(e){return X(e).results},Y=function(e){return X(e).total},Z=function(e){return X(e).needs},q=function(e){return X(e).scheme};Object(W.a)(z,(function(e){return e}));function Q(e,t){var a=e;t&&(a-=t);var n=11*(Math.ceil(a/11)-a/11+.1);return Math.round(n)}function $(){return function(){var e=Object(K.a)(V.a.mark((function e(t,a){var n,c,r,s,i,u,l,o,d;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=a(),c=X(n).results,r=0,s=0,i=0,u=1;u<=Object.keys(c).length;u++)c["ovr"+u]&&(r+=parseInt(c["ovr"+u])),c["rank"+u]&&(s+=Math.round(parseInt(c["rank"+u])/5)),c["boost"+u]&&(i+=parseInt(c["boost"+u]));l=Math.ceil(s/11),o=Math.ceil(i/11),d=Math.ceil((r-s)/11),t(G(l+o+d)),t(P({ranks:Q(s),boosts:Q(i),ovr:Q(r,s)}));case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}var ee=["41212","4222","4141","4231","424","4312","4321","433","4411","442","451","3412","3421","343","3511","352","5212","5221","532","541"],te=Object(o.createCn)("calculator-page"),ae=r.a.memo((function(){var e=Object(D.b)(),t=Object(D.c)(z),a=Object(D.c)(Y),r=Object(D.c)(Z),s=Object(D.c)(q),i=Object(c.useState)("41212"),u=Object(f.a)(i,2),l=u[0],o=u[1],d=Object(c.useCallback)((function(t,a){e(M(t,a.target.value)),e($())}),[e]),j=Object(c.useCallback)((function(){e(function(){var e=Object(K.a)(V.a.mark((function e(t,a){var n,c,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a(),c=X(n).results,r=X(n).scheme,localStorage.setItem("scheme",r),localStorage.setItem("results",JSON.stringify(c));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}),[e]),b=Object(c.useCallback)((function(){e(function(){var e=Object(K.a)(V.a.mark((function e(t){var a,n,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("results")&&(a=localStorage.getItem("scheme")||"41212",t(H(a)),n=localStorage.getItem("results")||"",c=JSON.parse(n),t(U(c)),t($()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),m=Object(c.useCallback)((function(t){o(t.target.value),e(function(e){return function(){var t=Object(K.a)(V.a.mark((function t(a){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(H(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t.target.value))}),[]);return Object(c.useEffect)((function(){o(s)}),[s]),Object(n.jsxs)("div",{className:te(),children:[Object(n.jsxs)("div",{className:te("data"),children:[Object(n.jsxs)("div",{className:te("total"),children:["Total ovr: ",a]}),Object(n.jsxs)("div",{className:te("buttons"),children:[Object(n.jsx)("button",{className:"button_load",onClick:b,children:"Load"}),Object(n.jsx)("button",{className:"button_save",onClick:j,children:"Save"})]})]}),Object(n.jsxs)("div",{className:te("need-content"),children:[Object(n.jsx)("div",{className:te("need"),children:"Next OVR:"}),Object(n.jsxs)("table",{className:te("need-table"),children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"OVR:"}),Object(n.jsx)("td",{children:r.ovr})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Ranks:"}),Object(n.jsx)("td",{children:r.ranks})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Boosts:"}),Object(n.jsx)("td",{children:r.boosts})]})]})]}),Object(n.jsxs)("div",{className:te("scheme"),children:[Object(n.jsx)("div",{children:"Formation:"}),Object(n.jsx)("select",{id:"scheme",value:l,onChange:m,children:ee.map((function(e){return Object(n.jsx)("option",{selected:l===e,value:e,children:e})}))})]}),Object(n.jsx)("div",{className:te("field"),children:[1,2,3,4,5,6,7,8,9,10,11].map((function(e){var a;return Object(n.jsx)("div",{className:te("position",(a={master:t["ovr"+e]>=90},Object(w.a)(a,"position_"+e,!0),Object(w.a)(a,s,!0),a)),children:["boost","ovr","rank"].map((function(a){return Object(n.jsx)("div",{className:te(a),children:Object(n.jsx)("input",{id:a+e,onChange:function(t){return d(a+e,t)},value:t[a+e]})})}))})}))})]})})),ne=(a(80),Object(o.createCn)("group")),ce=r.a.memo((function(e){var t=e.group,a=t.name,c=t.leagues,r="/fmt/img/groups/"+a.replace(/\s/g,"").toLowerCase()+".png";return Object(n.jsxs)("div",{className:ne(),children:[Object(n.jsx)("div",{className:ne("img"),children:Object(n.jsx)("img",{src:r,alt:""})}),Object(n.jsxs)("div",{className:ne("content"),children:[Object(n.jsx)("div",{className:ne("header"),children:Object(n.jsx)("div",{className:ne("name"),children:a})}),Object(n.jsx)("div",{className:ne("leagues"),children:c.map((function(e){return Object(n.jsx)("div",{className:ne("league"),children:e})}))})]})]})})),re=[{name:"England",leagues:["Premier League","EFL Championship","EFL League 1","EFL League 2"]},{name:"France",leagues:["Ligue 1 Uber Eats","Ligue 2 BKT"]},{name:"Italy",leagues:["Serie A TIM","Calcio B"]},{name:"Germany",leagues:["Bundesliga","Bundesliga 2","3. Liga"]},{name:"Spain",leagues:["LaLiga Santander","LaLiga Smartbank"]},{name:"Western Europe",leagues:["Liga NOS (Portugal)","Eredivisie (Netherlands)","1A Pro League (Belgium)","Scottish Prem (Scotland)","SSE Airtricity Lge (Ireland)"]},{name:"Eastern Europe",leagues:["RSL (Switzerland)","O. Bundesliga (Austria)","3F Superliga (Denmark)","Eliteserien (Norway)","Allsvenskan (Sweden)","PKO Ektstraklasa (Poland)","Liga I (Romania)","Super Lig (Turkey)","Finnliga (Finland)","Ceska Liga (Czech Republic)","League of Russia (Russia)","Ukrayina Liha (Ukraine)","Liga Hrvatska (Croatia)","Hellas Liga (Greece)"]},{name:"Rest of World",leagues:["MLS (USA/Canada)","Liga BBVA MX (Mexico)","LPF (Argentina)","CSL (China)","K-League 1 (South Korea)","A-League (Australia/New Zealand)","Hero ISL (India)","MBS Pro League (Saudi Arabia)","United Emirates League (UAE)","South African FL (South Africa)"]}],se=(a(81),Object(o.createCn)("chemistry-groups")),ie=c.memo((function(){return Object(n.jsx)("div",{className:se(),children:Object(n.jsx)("div",{className:se("content"),children:re.map((function(e){return Object(n.jsx)(ce,{group:e})}))})})})),ue=(a(82),[{version:"3.6.2",changes:["\u041f\u0435\u0440\u0435\u043f\u0438\u0441\u0430\u043d\u0430 \u043b\u043e\u0433\u0438\u043a\u0430 \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432","\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0442\u0430\u0439\u043c\u0435\u0440\u044b \u0430\u043f\u0434\u0435\u0439\u0442\u043e\u0432"]},{version:"2.6.2",changes:["\u041f\u0435\u0440\u0435\u0441\u0447\u0435\u0442 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"]},{version:"2.5.2",changes:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0441\u0445\u0435\u043c\u0443"]},{version:"2.4.2",changes:["\u041f\u0435\u0440\u0435\u0434\u0435\u043b\u0430\u043d\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0442\u043a\u0430 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0430"]},{version:"2.3.2",changes:["\u0420\u0435\u043b\u0438\u0437 \u0434\u043b\u044f \u0421\u0435\u0440\u0435\u0433\u0438","\u041f\u043e\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f, \u043b\u044e\u0431\u0443\u044e \u0432\u043a\u043b\u0430\u0434\u043a\u0443 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u043e \u043f\u0440\u044f\u043c\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435"]},{version:"2.2.2",changes:["\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"]},{version:"2.1.2",changes:["\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u043e\u0441\u0432\u044f\u0449\u0435\u043d\u043d\u0430\u044f \u041b\u0438\u0437\u0435","\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"]}]),le=Object(o.createCn)("changelog-page"),oe=r.a.memo((function(){return Object(n.jsxs)("div",{className:le(),children:[Object(n.jsx)("div",{className:le("version"),children:"Changelog"}),Object(n.jsx)("div",{className:le("changes"),children:ue.map((function(e){return Object(n.jsxs)("div",{className:le("row"),children:[Object(n.jsx)("div",{className:le("small-version"),children:e.version}),Object(n.jsx)("div",{className:le("description"),children:Object(n.jsx)("ul",{children:e.changes.map((function(e){return Object(n.jsxs)("li",{children:["- ",e]})}))})})]})}))})]})})),de=r.a.memo((function(){var e=Object(c.useState)(Object(n.jsx)(ae,{})),t=Object(f.a)(e,2),a=t[0],s=t[1],i=Object(l.f)();return Object(c.useEffect)((function(){switch(m.a.parse(i.search).router){case"chemistry":s(Object(n.jsx)(ie,{}));break;case"timers":s(Object(n.jsx)(B,{}));break;case"calculator":s(Object(n.jsx)(ae,{}));break;case"changelog":s(Object(n.jsx)(oe,{}));break;default:s(Object(n.jsx)(ae,{}))}}),[i]),Object(n.jsx)(r.a.Fragment,{children:a})})),je=Object(o.createCn)("App");var be=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)("div",{className:je("header"),children:Object(n.jsxs)("div",{className:"inner",children:[Object(n.jsx)(u.b,{exact:!0,to:"/fmt?",children:Object(n.jsx)(j,{})}),Object(n.jsx)(h,{})]})}),Object(n.jsx)("div",{className:je("content"),children:Object(n.jsx)("div",{className:"inner",children:Object(n.jsx)(l.c,{children:Object(n.jsx)(l.a,{path:"/fmt",children:Object(n.jsx)(de,{})})})})})]})})},me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},ve=a(17),Oe=a(41),he=a(39),fe=a(40),ge=function(){function e(t,a){Object(he.a)(this,e),this.reducers=void 0,this.store=void 0,this.reducers=Object(T.a)({},t),this.store=a}return Object(fe.a)(e,[{key:"add",value:function(e,t){var a;e&&!this.reducers[e]&&(this.reducers[e]=t,null===(a=this.store)||void 0===a||a.replaceReducer(Object(ve.b)(this.reducers)))}},{key:"remove",value:function(e){var t;e&&this.reducers[e]&&(delete this.reducers[e],null===(t=this.store)||void 0===t||t.replaceReducer(Object(ve.b)(this.reducers)))}}]),e}(),pe={results:{},total:0,needs:{ranks:0,boosts:0,ovr:0},scheme:"41212"};var xe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.c;var Ne=function(e,t){var a=Object(ve.d)(Object(ve.b)(e),t,xe(Object(ve.a)(Oe.a)));return a.reducerManager=new ge(e,a),a}({calculator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.type:return Object(T.a)(Object(T.a)({},e),{},{results:Object(T.a)(Object(T.a)({},e.results),{},Object(w.a)({},t.id,t.value))});case G.type:return Object(T.a)(Object(T.a)({},e),{},{total:t.total});case U.type:return Object(T.a)(Object(T.a)({},e),{},{results:t.results});case P.type:return Object(T.a)(Object(T.a)({},e),{},{needs:t.needs});case H.type:return console.log(t.scheme),Object(T.a)(Object(T.a)({},e),{},{scheme:t.scheme});default:return e}}});i.a.render(Object(n.jsx)(D.a,{store:Ne,children:Object(n.jsx)(be,{})}),document.getElementById("root")),me()}},[[83,1,2]]]);
//# sourceMappingURL=main.7e842d9f.chunk.js.map