(this["webpackJsonpfm-events"]=this["webpackJsonpfm-events"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('[{"ids":"freeze","event":{"name":"PREFREEZE","timer":"2022-01-17T22:00:00+03:00"},"repeatable":"","note":"","sub_events":[{"name":"snowball stockpile","timer":"2021-12-17T22:00:00+03:00","repeatable":"weekly","note":""},{"name":"now and later","timer":"2021-12-17T22:00:00+03:00","repeatable":"weekly","note":""}]},{"ids":"leagues","event":{"name":"League matchups","timer":"2021-08-16T22:00:00+03:00"},"repeatable":"weekly","note":"","sub_events":[{"name":"players update","timer":"2021-09-20T22:00:00+03:00","repeatable":"monthly","note":""}]},{"ids":"icons","event":{"name":"icons strike","timer":"2021-01-22T22:00:00+03:00"},"repeatable":"weekly","note":"Dont forget to play skill games","sub_events":[]},{"ids":"becks","event":{"name":"beckham quests","timer":"2021-01-08T22:00:00+03:00"},"repeatable":"weekly","note":"Dont forget to get Beckham points from ads","sub_events":[]},{"ids":"rivals","event":{"name":"division rivals","timer":"2021-12-28T22:00:00+03:00"},"repeatable":"monthly","note":"","sub_events":[{"name":"weekly update","timer":"2021-01-27T22:00:00+03:00","repeatable":"weekly","note":""}]},{"ids":"starpass","event":{"name":"starpass","timer":"2021-12-30T22:00:00+03:00"},"repeatable":"monthly","note":"","sub_events":[{"name":"players update","timer":"2021-10-06T22:00:00+03:00","repeatable":"","note":""},{"name":"quests update","timer":"2021-08-25T22:00:00+03:00","repeatable":"weekly","note":""}]}]')},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(21),i=n.n(s),l=n(13),o=n(5),u=n(6),j=(n(50),Object(u.createCn)("events-page")),d=c.memo((function(){return Object(a.jsx)("div",{className:j(),children:"Events"})})),b=n(41),m=n(12),O=n(28),v=n(18),h=n(40),f=(n(51),function(e,t){if(!e||0===e)return"00";var n=t?e+t:e;return n<10?"0"+n:n}),g=r.a.memo((function(e){var t=e.now,n=e.duration,s=Object(c.useState)(""),i=Object(m.a)(s,2),l=i[0],o=i[1];return Object(c.useEffect)((function(){var e=Object(v.a)(n,t),a=Object(h.a)({start:t,end:n});if(e>2){o("".concat(e," days"))}else{var c=a.days&&a.days>0?24:0,r=f(a.hours,c),s=f(a.minutes),i=f(a.seconds);o("".concat(r,":").concat(s,":").concat(i))}}),[t,n]),Object(a.jsx)(r.a.Fragment,{children:l})})),x=(n(52),Object(u.createCn)("sub-event-row")),p=r.a.memo((function(e){var t=e.event,n=t.name,r=t.timer,s=t.expiring,i=Object(c.useState)(new Date),l=Object(m.a)(i,2),o=l[0],u=l[1],j=new Date(r);return Object(c.useEffect)((function(){setInterval((function(){var e=new Date;u(e)}),1e3)}),[]),Object(a.jsxs)("div",{className:x(),children:[Object(a.jsx)("div",{className:x("name"),children:n}),Object(a.jsx)("div",{className:x("timer",{expiring:s}),children:Object(a.jsx)(g,{now:o,duration:j})})]})})),L=(n(53),Object(u.createCn)("event-row")),N=r.a.memo((function(e){var t=e.event,n=t.ids,r=t.event,s=t.note,i=t.sub_events,l=Object(c.useState)(new Date),o=Object(m.a)(l,2),u=o[0],j=o[1],d=new Date(r.timer),b="/fmt/img/programs/"+n+".png";return Object(c.useEffect)((function(){setInterval((function(){var e=new Date;j(e)}),1e3)}),[]),Object(a.jsxs)("div",{className:L(),children:[Object(a.jsx)("div",{className:L("img"),children:Object(a.jsx)("img",{src:b,alt:""})}),Object(a.jsxs)("div",{className:L("content"),children:[Object(a.jsxs)("div",{className:L("main_event"),children:[Object(a.jsx)("div",{className:L("name"),children:r.name}),Object(a.jsx)("div",{className:L("timer",{expiring:r.expiring}),children:Object(a.jsx)(g,{now:u,duration:d})})]}),Object(a.jsx)("div",{className:L("sub_events"),children:i.map((function(e){return Object(a.jsx)(p,{event:e},e.ids)}))}),Object(a.jsx)("div",{className:L("event_note"),children:s})]})]})})),w=n(33),y=n(34);function k(e){var t,n,a=(new Date).getTime(),c=e;if(t=e.event?new Date(e.event.timer).getTime():new Date(e.timer).getTime(),""!==c.repeatable&&t<=a){var r=-1*Object(w.a)(t,a)+1;n=Object(y.a)(t,{weeks:r}),c.event?c.event.timer=n:c.timer=n}var s=c.event?c.event.timer:c.timer,i=new Date(s).getTime()-a<=864e5;return c.event?c.event.expiring=i:c.expiring=i,c}n(54);var S=Object(u.createCn)("timers-page"),C=(new Date).getTime(),E=r.a.memo((function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){for(var e=Object(b.a)(O),t=0;t<O.length;t++){e[t]=k(e[t]);for(var n=e[t].sub_events,a=[],c=0;c<n.length;c++){(new Date(n[c].timer).getTime()>C||""!==n[c].repeatable)&&a.push(k(n[c]))}e[t].sub_events=a}r(e)}),[]),Object(a.jsx)("div",{className:S(),children:n.map((function(e){return console.log(e.event),new Date(e.event.timer).getTime()>C?Object(a.jsx)(N,{event:e},e.ids):null}))})})),T=(n(55),Object(u.createCn)("group")),A=r.a.memo((function(e){var t=e.group,n=t.name,c=t.leagues,r="/fmt/img/groups/"+n.replace(/\s/g,"").toLowerCase()+".png";return Object(a.jsxs)("div",{className:T(),children:[Object(a.jsx)("div",{className:T("img"),children:Object(a.jsx)("img",{src:r,alt:""})}),Object(a.jsxs)("div",{className:T("content"),children:[Object(a.jsx)("div",{className:T("header"),children:Object(a.jsx)("div",{className:T("name"),children:n})}),Object(a.jsx)("div",{className:T("leagues"),children:c.map((function(e){return Object(a.jsx)("div",{className:T("league"),children:e})}))})]})]})})),_=[{name:"England",leagues:["Premier League","EFL Championship","EFL League 1","EFL League 2"]},{name:"France",leagues:["Ligue 1 Uber Eats","Ligue 2 BKT"]},{name:"Italy",leagues:["Serie A TIM","Calcio B"]},{name:"Germany",leagues:["Bundesliga","Bundesliga 2","3. Liga"]},{name:"Spain",leagues:["LaLiga Santander","LaLiga Smartbank"]},{name:"Western Europe",leagues:["Liga NOS (Portugal)","Eredivisie (Netherlands)","1A Pro League (Belgium)","Scottish Prem (Scotland)","SSE Airtricity Lge (Ireland)"]},{name:"Eastern Europe",leagues:["RSL (Switzerland)","O. Bundesliga (Austria)","3F Superliga (Denmark)","Eliteserien (Norway)","Allsvenskan (Sweden)","PKO Ektstraklasa (Poland)","Liga I (Romania)","Super Lig (Turkey)","Finnliga (Finland)","Ceska Liga (Czech Republic)","League of Russia (Russia)","Ukrayina Liha (Ukraine)","Liga Hrvatska (Croatia)","Hellas Liga (Greece)"]},{name:"Rest of World",leagues:["MLS (USA/Canada)","Liga BBVA MX (Mexico)","LPF (Argentina)","CSL (China)","K-League 1 (South Korea)","A-League (Australia/New Zealand)","Hero ISL (India)","MBS Pro League (Saudi Arabia)","United Emirates League (UAE)","South African FL (South Africa)"]}],R=(n(56),Object(u.createCn)("chemistry-groups")),D=c.memo((function(){return Object(a.jsx)("div",{className:R(),children:Object(a.jsx)("div",{className:R("content"),children:_.map((function(e){return Object(a.jsx)(A,{group:e})}))})})})),B=(n(57),Object(u.createCn)("logo")),F=c.memo((function(){return Object(a.jsx)("div",{className:B(),children:Object(a.jsx)("img",{src:"/fmt/img/logo.png",alt:""})})})),I=(n(58),Object(u.createCn)("navbar")),M=c.memo((function(){return Object(a.jsxs)("div",{className:I(),children:[Object(a.jsx)(l.b,{exact:!0,to:"/fmt",children:"Timers"}),Object(a.jsx)(l.b,{exact:!0,to:"/fmt/chemistry",children:"Chemistry Groups"}),Object(a.jsx)(l.b,{exact:!0,to:"/fmt/calculator",children:"OVR Calculator"}),Object(a.jsx)("div",{children:"v2.0.2"})]})})),P=(n(64),n(16)),G=(n(66),n(10));function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return{}},n=function(){return Object(G.a)({type:e},t&&t.apply(void 0,arguments))};return n.type=e,n}var U=H("GLOBAL_SEARCH / changeValue",(function(e,t){return{id:e,value:t}})),V=(H("GLOBAL_SEARCH / countOvr",(function(){return{}})),H("GLOBAL_SEARCH / setTotal",(function(e){return{total:e}}))),K=H("GLOBAL_SEARCH / setNeeds",(function(e){return{needs:e}})),z=n(31),J=n.n(z),X=n(36),q=n(42),W=function(e){return e.calculator},Z=function(e){return W(e).results},Q=function(e){return W(e).total},Y=function(e){return W(e).needs};Object(q.a)(Z,(function(e){return e}));function $(e,t){var n=e;t&&(n-=t);var a=Math.ceil(n/11),c=n/11;console.log(n,a,c);var r=11*(a-c+.1);return Math.round(r)}var ee=Object(u.createCn)("calculator-page"),te=r.a.memo((function(){var e=Object(P.b)(),t=Object(P.c)(Z),n=Object(P.c)(Q),r=Object(P.c)(Y),s=Object(c.useCallback)((function(t,n){console.log(t,n.target.value),e(U(t,n.target.value))}),[e]),i=Object(c.useCallback)((function(){e((console.log("onCount"),function(){var e=Object(X.a)(J.a.mark((function e(t,n){var a,c,r,s,i,l,o,u,j;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=n(),c=W(a).results,console.log(c),r=0,s=0,i=0,l=1;l<=Object.keys(c).length;l++)c["ovr"+l]&&(r+=parseInt(c["ovr"+l])),c["rank"+l]&&(s+=Math.round(parseInt(c["rank"+l])/5)),c["boost"+l]&&(i+=parseInt(c["boost"+l]));o=Math.ceil(s/11),u=Math.ceil(i/11),j=Math.ceil((r-s)/11),t(V(o+u+j)),t(K({ranks:$(s),boosts:$(i),ovr:$(r,s)}));case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))}),[e]);return Object(c.useEffect)((function(){console.log(t)}),[t]),Object(a.jsxs)("div",{className:ee(),children:[Object(a.jsxs)("div",{className:ee("data"),children:[Object(a.jsxs)("div",{className:ee("total"),children:["Total ovr: ",n]}),Object(a.jsx)("div",{className:ee("need"),children:"Next OVR need one of:"}),Object(a.jsxs)("table",{className:ee("need-table"),children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"OVR:"}),Object(a.jsx)("td",{children:r.ovr})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Ranks:"}),Object(a.jsx)("td",{children:r.ranks})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Boosts:"}),Object(a.jsx)("td",{children:r.boosts})]})]})]}),Object(a.jsx)("div",{className:ee("buttons"),children:Object(a.jsx)("div",{className:ee("count"),children:Object(a.jsx)("button",{className:ee("button"),onClick:i,children:"Count"})})}),Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Rating"}),Object(a.jsx)("th",{children:"Tr.Level"}),Object(a.jsx)("th",{children:"Boost"})]})}),Object(a.jsx)("tbody",{children:[1,2,3,4,5,6,7,8,9,10,11].map((function(e){return Object(a.jsx)("tr",{children:["ovr","rank","boost"].map((function(t){return Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"number",id:t+e,onChange:function(n){return s(t+e,n)}})})}))})}))})]})]})})),ne=Object(u.createCn)("App");var ae=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)("div",{className:ne("header"),children:Object(a.jsxs)("div",{className:"inner",children:[Object(a.jsx)(l.b,{exact:!0,to:"/fmt",children:Object(a.jsx)(F,{})}),Object(a.jsx)(M,{})]})}),Object(a.jsx)("div",{className:ne("content"),children:Object(a.jsx)("div",{className:"inner",children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/fmt",children:Object(a.jsx)(E,{})}),Object(a.jsx)(o.a,{exact:!0,path:"/fmt/chemistry",children:Object(a.jsx)(D,{})}),Object(a.jsx)(o.a,{exact:!0,path:"/fmt/events",children:Object(a.jsx)(d,{})}),Object(a.jsx)(o.a,{exact:!0,path:"/fmt/calculator",children:Object(a.jsx)(te,{})})]})})})]})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},re=n(14),se=n(39),ie=n(37),le=n(38),oe=function(){function e(t,n){Object(ie.a)(this,e),this.reducers=void 0,this.store=void 0,this.reducers=Object(G.a)({},t),this.store=n}return Object(le.a)(e,[{key:"add",value:function(e,t){var n;e&&!this.reducers[e]&&(this.reducers[e]=t,null===(n=this.store)||void 0===n||n.replaceReducer(Object(re.b)(this.reducers)))}},{key:"remove",value:function(e){var t;e&&this.reducers[e]&&(delete this.reducers[e],null===(t=this.store)||void 0===t||t.replaceReducer(Object(re.b)(this.reducers)))}}]),e}(),ue=n(25),je={results:{},total:0,needs:{ranks:0,boosts:0,ovr:0}};var de="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.c;var be=function(e,t){var n=Object(re.d)(Object(re.b)(e),t,de(Object(re.a)(se.a)));return n.reducerManager=new oe(e,n),n}({calculator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.type:return Object(G.a)(Object(G.a)({},e),{},{results:Object(G.a)(Object(G.a)({},e.results),{},Object(ue.a)({},t.id,t.value))});case V.type:return Object(G.a)(Object(G.a)({},e),{},{total:t.total});case K.type:return Object(G.a)(Object(G.a)({},e),{},{needs:t.needs});default:return e}}});i.a.render(Object(a.jsx)(P.a,{store:be,children:Object(a.jsx)(ae,{})}),document.getElementById("root")),ce()}},[[68,1,2]]]);
//# sourceMappingURL=main.0f720d37.chunk.js.map