(this["webpackJsonpfm-events"]=this["webpackJsonpfm-events"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('[{"ids":"carniball","name":"CARNIBALL","end_timer":"2022-03-03T22:00:00+03:00","repeatable":{},"note":"","sub_events":[{"ids":"","name":"Roulette update","end_timer":"","repeatable":{"date":"2022-02-17T22:00:00+03:00","value":"7","type":"d"},"note":"","sub_events":[]}]},{"ids":"toty","name":"TOTY","end_timer":"2022-03-17T22:00:00+03:00","repeatable":{"date":"2022-02-03T22:00:00+03:00","value":"12","type":"h"},"note":"","sub_events":[{"ids":"","name":"TOTY  Mid Start","end_timer":"2022-02-10T22:00:00+03:00","repeatable":{},"note":"","sub_events":[]},{"ids":"","name":"TOTY  Def Start","end_timer":"2022-02-17T22:00:00+03:00","repeatable":{},"note":"","sub_events":[]},{"ids":"","name":"UTOTY Start","end_timer":"2022-03-03T22:00:00+03:00","repeatable":{},"note":"","sub_events":[]}]},{"ids":"begin","name":"NEW BEGINNINGS","end_timer":"2022-02-03T22:00:00+03:00","repeatable":{"date":"2022-01-26T22:00:00+03:00","value":"1","type":"d"},"note":"Don\'t forget to take targets","sub_events":[]},{"ids":"league","name":"LEAGUE TOUR","end_timer":"","repeatable":{"date":"2022-01-26T22:00:00+03:00","value":"1","type":"d"},"note":"","sub_events":[]},{"ids":"challenge","name":"CHALLENGE MODE","end_timer":"","repeatable":{"date":"2022-01-26T22:00:00+03:00","value":"1","type":"d"},"note":"","sub_events":[]},{"ids":"starpass","name":"starpass","end_timer":"","repeatable":{"date":"2022-02-03T22:00:00+03:00","value":"42","type":"d"},"note":"","sub_events":[]},{"ids":"rivals","name":"division rivals","end_timer":"","repeatable":{"date":"2022-01-17T19:00:00+03:00","value":"28","type":"d"},"note":"","sub_events":[]},{"ids":"daily","name":"DAILY TRAINING","end_timer":"","repeatable":{"date":"2022-01-26T22:00:00+03:00","value":"1","type":"d"},"note":"","sub_events":[{"ids":"","name":"skill training","end_timer":"","repeatable":{"date":"2022-01-26T22:00:00+03:00","value":"3","type":"d"},"note":"","sub_events":[]},{"ids":"","name":"match training","end_timer":"","repeatable":{"date":"2022-01-30T22:00:00+03:00","value":"3","type":"d"},"note":"","sub_events":[]},{"ids":"","name":"special training","end_timer":"","repeatable":{"date":"2022-01-28T22:00:00+03:00","value":"3","type":"d"},"note":"","sub_events":[]}]},{"ids":"market","name":"Market update","end_timer":"","repeatable":{"date":"2022-01-26T20:35:25+03:00","value":"2","type":"h"},"note":"","sub_events":[]},{"ids":"icon","name":"ICON JOURNEYS","end_timer":"","repeatable":{},"note":"","sub_events":[]}]')},51:function(e,t,n){},66:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(23),i=n.n(s),l=n(15),u=n(6),o=n(5),d=(n(51),Object(o.createCn)("logo")),j=c.memo((function(){return Object(a.jsx)("div",{className:d(),children:Object(a.jsx)("img",{src:"/fmt/img/logo.png",alt:""})})})),b=n(24),m=n.n(b),v=(n(66),Object(o.createCn)("navbar"));function O(e,t){return e===t?"active":""}var h=c.memo((function(){var e,t=Object(u.f)(),n=(null===(e=m.a.parse(t.search).router)||void 0===e?void 0:e.toString())||"";return Object(a.jsxs)("div",{className:v(),children:[Object(a.jsx)(l.b,{activeClassName:O(n,"calculator"),to:"/fmt?router=calculator",children:"OVR Calculator"}),Object(a.jsx)(l.b,{activeClassName:O(n,"timers"),to:"/fmt?router=timers",children:"Timers"}),Object(a.jsx)(l.b,{activeClassName:O(n,"changelog"),exact:!0,to:"/fmt?router=changelog",children:"Changelog"})]})})),f=(n(72),n(9)),g=n(28),p=n(27),x=n(42),N=n(36);function _(e,t){if("undefined"===typeof e||0===e&&!t)return"00";var n=t?e+t:e;return n<10?"0"+n:n}n(73);var L=r.a.memo((function(e){var t=e.now,n=e.duration,s=Object(c.useState)(""),i=Object(f.a)(s,2),l=i[0],u=i[1];return Object(c.useEffect)((function(){var e=new Date(n),a=Object(N.a)(e,t),c=Object(x.a)({start:t,end:e});if(a>=48)u("".concat(Object(p.a)(e,t)+1," days"));else{var r=c.days&&c.days>0?24:0,s=_(c.hours,r),i=_(c.minutes),l=_(c.seconds);u("".concat(s,":").concat(i,":").concat(l))}}),[t,n]),Object(a.jsx)(r.a.Fragment,{children:l})})),S=(n(74),Object(o.createCn)("sub-event-row")),k=r.a.memo((function(e){var t=e.event,n=Object(c.useState)(new Date),r=Object(f.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){setInterval((function(){var e=new Date;i(e)}),5e3)}),[]),Object(a.jsxs)("div",{className:S(),children:[Object(a.jsx)("div",{className:S("name"),children:t.name}),Object(a.jsx)("div",{className:S("timer",{expiring:t.expiring}),children:t.end_timer&&Object(a.jsx)(L,{now:s,duration:t.end_timer})}),Object(a.jsx)("div",{className:S("update"),children:t.update_timer&&Object(a.jsx)(L,{now:s,duration:t.update_timer})})]})})),C=(n(75),Object(o.createCn)("event-row")),T=r.a.memo((function(e){var t=e.event,n=Object(c.useState)(new Date),r=Object(f.a)(n,2),s=r[0],i=r[1],l="/fmt/img/programs/"+t.ids+".png";return Object(c.useEffect)((function(){setInterval((function(){var e=new Date;i(e)}),1e3)}),[]),Object(a.jsxs)("div",{className:C(),children:[Object(a.jsx)("div",{className:C("img"),children:Object(a.jsx)("img",{src:l,alt:""})}),Object(a.jsxs)("div",{className:C("content"),children:[Object(a.jsxs)("div",{className:C("main_event"),children:[Object(a.jsx)("div",{className:C("name"),children:t.name}),Object(a.jsx)("div",{className:C("timer",{expiring:t.expiring}),children:t.end_timer&&Object(a.jsx)(L,{now:s,duration:t.end_timer})}),Object(a.jsx)("div",{className:C("update"),children:t.update_timer&&Object(a.jsx)(L,{now:s,duration:t.update_timer})})]}),Object(a.jsx)("div",{className:C("sub_events"),children:t.sub_events.map((function(e){return Object(a.jsx)(k,{event:e})}))}),Object(a.jsx)("div",{className:C("event_note"),children:t.note})]})]})})),y=n(13),w=n(37);function E(e){var t,n=(new Date).getTime(),a=e;if(a.expiring=!1,a.end_timer){var c=a.end_timer,r=new Date(c).getTime();a.expiring=r-n<=864e5,a.timer=r}if(null===a||void 0===a||null===(t=a.repeatable)||void 0===t?void 0:t.date){var s=null===a||void 0===a?void 0:a.repeatable,i=s.date,l=s.type,u=s.value,o="days",d=new Date(i),j=u;for("h"===l&&(o="hours");d.getTime()<n;)d=Object(w.a)(d,Object(y.a)({},o,j));a.update_timer=new Date(d).getTime()}return a}n(76);localStorage.setItem("evts",JSON.stringify(g));var A=Object(o.createCn)("timers-page"),I=(new Date).getTime(),R=r.a.memo((function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){for(var e=g,t=0;t<g.length;t++){e[t]=E(e[t]);var n=e[t].sub_events;if(n.length>0){for(var a=[],c=0;c<n.length;c++){if(n[c].end_timer)new Date(n[c].end_timer).getTime()>I&&a.push(E(n[c]));else a.push(E(n[c]))}e[t].sub_events=a}}var s=e.filter((function(e){return!e.end_timer||new Date(e.end_timer).getTime()>I}));r(s)}),[]),Object(a.jsxs)("div",{className:A(),children:[Object(a.jsxs)("div",{className:A("header-row"),children:[Object(a.jsx)("div",{className:A("ending"),children:"Ending"}),Object(a.jsx)("div",{className:A("update"),children:"Update"})]}),n.map((function(e){return Object(a.jsx)(T,{event:e},e.ids)}))]})})),D=n(14),B=(n(78),n(8));function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return{}},n=function(){return Object(B.a)({type:e},t&&t.apply(void 0,arguments))};return n.type=e,n}var F=M("GLOBAL_SEARCH / changeValue",(function(e,t){return{id:e,value:t}})),G=(M("GLOBAL_SEARCH / countOvr",(function(){return{}})),M("GLOBAL_SEARCH / setTotal",(function(e){return{total:e}}))),U=M("GLOBAL_SEARCH / setNeeds",(function(e){return{needs:e}})),P=M("GLOBAL_SEARCH / setResults",(function(e){return{results:e}})),H=M("GLOBAL_SEARCH / setScheme",(function(e){return{scheme:e}})),Y=n(16),J=n.n(Y),V=n(22),K=n(43),W=function(e){return e.calculator},X=function(e){return W(e).results},z=function(e){return W(e).total},Z=function(e){return W(e).needs},q=function(e){return W(e).scheme};Object(K.a)(X,(function(e){return e}));function Q(e,t){var n=e;t&&(n-=t);var a=11*Math.ceil(n/11)+.01,c=Math.ceil(a-n);return Math.round(c)}function $(){return function(){var e=Object(V.a)(J.a.mark((function e(t,n){var a,c,r,s,i,l,u,o,d;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=n(),c=W(a).results,r=0,s=0,i=0,l=1;l<=Object.keys(c).length;l++)c["ovr"+l]&&(r+=parseInt(c["ovr"+l])),c["rank"+l]&&(s+=parseInt(c["rank"+l])),c["boost"+l]&&(i+=parseInt(c["boost"+l]));u=Math.ceil(s/11),o=Math.ceil(i/11),d=Math.ceil((r-s)/11),t(G(u+o+d)),t(U({ranks:Q(s),boosts:Q(i),ovr:Q(r,s)}));case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}var ee=["41212","4222","4141","4231","424","4312","4321","433","4411","442","451","3412","3421","343","3511","352","5212","5221","532","541"];n(80);var te=Object(o.createCn)("rank-select"),ne=function(e){var t=e.id,n=Object(D.c)(X),r=Object(D.b)(),s=Object(c.useRef)(null),i=Object(c.useState)(!1),l=Object(f.a)(i,2),u=l[0],o=l[1],d=Object(c.useCallback)((function(e){s.current&&!s.current.contains(e.target)&&o(!1)}),[]),j=Object(c.useCallback)((function(){o(!0)}),[]),b=Object(c.useCallback)((function(e){o(!1),r(F(t,e.toString())),r($())}),[o]);return Object(c.useEffect)((function(){return document.addEventListener("click",d),function(){document.removeEventListener("click",d)}}),[]),Object(a.jsx)("div",{className:te(),ref:s,children:Object(a.jsxs)("div",{className:te("rank"),children:[Object(a.jsx)("div",{className:te("result"),onClick:function(){return j()},children:n[t]||0}),Object(a.jsx)("div",{className:te("dropdown",{visible:u}),children:[1,2,3,4,5].map((function(e){return Object(a.jsx)("div",{className:te("rank-item",Object(y.a)({},e,!0)),onClick:function(){return b(e)},children:e})}))})]})})},ae=Object(o.createCn)("calculator-page"),ce=function(){var e=Object(D.b)(),t=Object(D.c)(X),n=Object(D.c)(z),r=Object(D.c)(Z),s=Object(D.c)(q),i=Object(c.useState)("41212"),l=Object(f.a)(i,2),u=l[0],o=l[1],d=Object(c.useCallback)((function(t,n){console.log(t),e(F(t,n.target.value)),e($())}),[e]),j=Object(c.useCallback)((function(){e(function(){var e=Object(V.a)(J.a.mark((function e(t,n){var a,c,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n(),c=W(a).results,r=W(a).scheme,localStorage.setItem("scheme",r),localStorage.setItem("results",JSON.stringify(c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}),[e]),b=Object(c.useCallback)((function(){e(function(){var e=Object(V.a)(J.a.mark((function e(t){var n,a,c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("results")&&(n=localStorage.getItem("scheme")||"41212",t(H(n)),a=localStorage.getItem("results")||"",c=JSON.parse(a),t(P(c)),t($()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),m=Object(c.useCallback)((function(t){o(t.target.value),e(function(e){return function(){var t=Object(V.a)(J.a.mark((function t(n){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(H(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t.target.value))}),[]);return Object(c.useEffect)((function(){o(s)}),[s]),Object(a.jsxs)("div",{className:ae(),children:[Object(a.jsx)("div",{className:ae("data"),children:Object(a.jsxs)("div",{className:ae("buttons"),children:[Object(a.jsx)("button",{className:"button_load",onClick:b,children:"Load"}),Object(a.jsx)("button",{className:"button_save",onClick:j,children:"Save"})]})}),Object(a.jsxs)("div",{className:ae("need-content"),children:[Object(a.jsxs)("div",{className:ae("total"),children:["Total OVR: ",n]}),Object(a.jsx)("div",{className:ae("hr")}),Object(a.jsx)("div",{className:ae("need"),children:"Next OVR"}),Object(a.jsxs)("table",{className:ae("need-table"),children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"OVR:"}),Object(a.jsx)("td",{children:r.ovr})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Ranks:"}),Object(a.jsx)("td",{children:r.ranks})]})]}),Object(a.jsx)("div",{className:ae("scheme"),children:Object(a.jsx)("select",{id:"scheme",value:u,onChange:m,children:ee.map((function(e){return Object(a.jsx)("option",{selected:u===e,value:e,children:e})}))})})]}),Object(a.jsx)("div",{className:ae("field"),children:[1,2,3,4,5,6,7,8,9,10,11].map((function(e){var n,c,r;return Object(a.jsxs)("div",{className:ae("position",(n={master:t["ovr"+e]>=90},Object(y.a)(n,"position_"+e,!0),Object(y.a)(n,s,!0),n)),children:[Object(a.jsx)("div",{className:ae("stone",{emerald:"1"===t["rank"+e],saphire:"2"===t["rank"+e],ametyst:"3"===t["rank"+e],ruby:"4"===t["rank"+e],ember:"5"===t["rank"+e]})}),["ovr"].map((function(n){return Object(a.jsx)("div",{className:ae(n),children:Object(a.jsx)("input",{id:n+e,onChange:function(t){return d(n+e,t)},value:t[n+e]||0})})})),["rank"].map((function(t){return Object(a.jsx)(ne,{id:t+e})})),Object(a.jsx)("div",{className:ae("base_ovr"),children:(c=t["ovr"+e],r=t["rank"+e],c&&r?parseInt(c,10)-parseInt(r,10):!c&&r?r:c&&!r?c:0)})]})}))})]})},re=(n(81),Object(o.createCn)("group")),se=r.a.memo((function(e){var t=e.group,n=t.name,c=t.leagues,r="/fmt/img/groups/"+n.replace(/\s/g,"").toLowerCase()+".png";return Object(a.jsxs)("div",{className:re(),children:[Object(a.jsx)("div",{className:re("img"),children:Object(a.jsx)("img",{src:r,alt:""})}),Object(a.jsxs)("div",{className:re("content"),children:[Object(a.jsx)("div",{className:re("header"),children:Object(a.jsx)("div",{className:re("name"),children:n})}),Object(a.jsx)("div",{className:re("leagues"),children:c.map((function(e){return Object(a.jsx)("div",{className:re("league"),children:e})}))})]})]})})),ie=[{name:"England",leagues:["Premier League","EFL Championship","EFL League 1","EFL League 2"]},{name:"France",leagues:["Ligue 1 Uber Eats","Ligue 2 BKT"]},{name:"Italy",leagues:["Serie A TIM","Calcio B"]},{name:"Germany",leagues:["Bundesliga","Bundesliga 2","3. Liga"]},{name:"Spain",leagues:["LaLiga Santander","LaLiga Smartbank"]},{name:"Western Europe",leagues:["Liga NOS (Portugal)","Eredivisie (Netherlands)","1A Pro League (Belgium)","Scottish Prem (Scotland)","SSE Airtricity Lge (Ireland)"]},{name:"Eastern Europe",leagues:["RSL (Switzerland)","O. Bundesliga (Austria)","3F Superliga (Denmark)","Eliteserien (Norway)","Allsvenskan (Sweden)","PKO Ektstraklasa (Poland)","Liga I (Romania)","Super Lig (Turkey)","Finnliga (Finland)","Ceska Liga (Czech Republic)","League of Russia (Russia)","Ukrayina Liha (Ukraine)","Liga Hrvatska (Croatia)","Hellas Liga (Greece)"]},{name:"Rest of World",leagues:["MLS (USA/Canada)","Liga BBVA MX (Mexico)","LPF (Argentina)","CSL (China)","K-League 1 (South Korea)","A-League (Australia/New Zealand)","Hero ISL (India)","MBS Pro League (Saudi Arabia)","United Emirates League (UAE)","South African FL (South Africa)"]}],le=(n(82),Object(o.createCn)("chemistry-groups")),ue=c.memo((function(){return Object(a.jsx)("div",{className:le(),children:Object(a.jsx)("div",{className:le("content"),children:ie.map((function(e){return Object(a.jsx)(se,{group:e})}))})})})),oe=(n(83),[{version:"4.0.0",changes:["\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u0435\u0437\u043e\u043d\u0430"]},{version:"3.11.3",changes:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0442\u0430\u0439\u043c\u0435\u0440\u044b Carniball"]},{version:"3.10.3",changes:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0442\u0430\u0439\u043c\u0435\u0440\u044b \u0441\u0442\u0430\u0440\u0442\u0430 \u0433\u043b\u0430\u0432 TOTY"]},{version:"3.9.3",changes:["\u041f\u043e\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0438 \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u0435 \u0440\u0430\u043d\u043a\u043e\u0432"]},{version:"3.9.2",changes:["\u0414\u043e\u0431\u0430\u0432\u0438\u043b TOTY"]},{version:"3.8.2",changes:["\u0422\u0430\u0439\u043c\u0435\u0440\u044b \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442 \u0442\u0430\u0439\u043c\u0437\u043e\u043d\u0443 \u0438 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432\u0435\u0440\u043d\u043e"]},{version:"3.7.2",changes:["\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u0438\u0434 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0430"]},{version:"3.6.2",changes:["\u041f\u0435\u0440\u0435\u043f\u0438\u0441\u0430\u043d\u0430 \u043b\u043e\u0433\u0438\u043a\u0430 \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432","\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0442\u0430\u0439\u043c\u0435\u0440\u044b \u0430\u043f\u0434\u0435\u0439\u0442\u043e\u0432"]},{version:"2.6.2",changes:["\u041f\u0435\u0440\u0435\u0441\u0447\u0435\u0442 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"]},{version:"2.5.2",changes:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0441\u0445\u0435\u043c\u0443"]},{version:"2.4.2",changes:["\u041f\u0435\u0440\u0435\u0434\u0435\u043b\u0430\u043d\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0442\u043a\u0430 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0430"]},{version:"2.3.2",changes:["\u0420\u0435\u043b\u0438\u0437 \u0434\u043b\u044f \u0421\u0435\u0440\u0435\u0433\u0438","\u041f\u043e\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f, \u043b\u044e\u0431\u0443\u044e \u0432\u043a\u043b\u0430\u0434\u043a\u0443 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u043e \u043f\u0440\u044f\u043c\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435"]},{version:"2.2.2",changes:["\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"]},{version:"2.1.2",changes:["\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u043e\u0441\u0432\u044f\u0449\u0435\u043d\u043d\u0430\u044f \u041b\u0438\u0437\u0435","\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"]}]),de=Object(o.createCn)("changelog-page"),je=r.a.memo((function(){return Object(a.jsxs)("div",{className:de(),children:[Object(a.jsx)("div",{className:de("version"),children:"Changelog"}),Object(a.jsxs)("div",{className:de("contacts"),children:[Object(a.jsx)("div",{children:"Contacts:"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"/fmt/img/twitter.png",alt:""}),Object(a.jsx)("a",{href:"https://twitter.com/DenimTornada",children:"@DenimTornada"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"/fmt/img/discord.png",alt:""}),"denim3000#0908"]})]}),Object(a.jsx)("div",{className:de("changes"),children:oe.map((function(e){return Object(a.jsxs)("div",{className:de("row"),children:[Object(a.jsx)("div",{className:de("small-version"),children:e.version}),Object(a.jsx)("div",{className:de("description"),children:Object(a.jsx)("ul",{children:e.changes.map((function(e){return Object(a.jsxs)("li",{children:["- ",e]})}))})})]})}))})]})})),be=r.a.memo((function(){var e=Object(c.useState)(Object(a.jsx)(ce,{})),t=Object(f.a)(e,2),n=t[0],s=t[1],i=Object(u.f)();return Object(c.useEffect)((function(){switch(m.a.parse(i.search).router){case"chemistry":s(Object(a.jsx)(ue,{}));break;case"timers":s(Object(a.jsx)(R,{}));break;case"calculator":s(Object(a.jsx)(ce,{}));break;case"changelog":s(Object(a.jsx)(je,{}));break;default:s(Object(a.jsx)(ce,{}))}}),[i]),Object(a.jsx)(r.a.Fragment,{children:n})})),me=Object(o.createCn)("App");var ve=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)("div",{className:me("header"),children:Object(a.jsxs)("div",{className:"inner",children:[Object(a.jsx)(l.b,{exact:!0,to:"/fmt?",children:Object(a.jsx)(j,{})}),Object(a.jsx)(h,{})]})}),Object(a.jsx)("div",{className:me("content"),children:Object(a.jsx)("div",{className:"inner",children:Object(a.jsx)(u.c,{children:Object(a.jsx)(u.a,{path:"/fmt",children:Object(a.jsx)(be,{})})})})})]})})},Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},he=n(17),fe=n(41),ge=n(39),pe=n(40),xe=function(){function e(t,n){Object(ge.a)(this,e),this.reducers=void 0,this.store=void 0,this.reducers=Object(B.a)({},t),this.store=n}return Object(pe.a)(e,[{key:"add",value:function(e,t){var n;e&&!this.reducers[e]&&(this.reducers[e]=t,null===(n=this.store)||void 0===n||n.replaceReducer(Object(he.b)(this.reducers)))}},{key:"remove",value:function(e){var t;e&&this.reducers[e]&&(delete this.reducers[e],null===(t=this.store)||void 0===t||t.replaceReducer(Object(he.b)(this.reducers)))}}]),e}(),Ne={results:{},total:0,needs:{ranks:0,boosts:0,ovr:0},scheme:"41212"};var _e="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.c;var Le=function(e,t){var n=Object(he.d)(Object(he.b)(e),t,_e(Object(he.a)(fe.a)));return n.reducerManager=new xe(e,n),n}({calculator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.type:return console.log(t),Object(B.a)(Object(B.a)({},e),{},{results:Object(B.a)(Object(B.a)({},e.results),{},Object(y.a)({},t.id,t.value))});case G.type:return Object(B.a)(Object(B.a)({},e),{},{total:t.total});case P.type:return Object(B.a)(Object(B.a)({},e),{},{results:t.results});case U.type:return Object(B.a)(Object(B.a)({},e),{},{needs:t.needs});case H.type:return console.log(t.scheme),Object(B.a)(Object(B.a)({},e),{},{scheme:t.scheme});default:return e}}});i.a.render(Object(a.jsx)(D.a,{store:Le,children:Object(a.jsx)(ve,{})}),document.getElementById("root")),Oe()}},[[84,1,2]]]);
//# sourceMappingURL=main.5de6ebd4.chunk.js.map