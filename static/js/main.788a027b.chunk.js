(this["webpackJsonpfm-events"]=this["webpackJsonpfm-events"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('[{"ids":"rivals","name":"division rivals","start_timer":"2024-03-10T18:00:00","end_timer":"","repeatable":{"value":"28","type":"d"},"note":"","sub_events":[]},{"ids":"starpass","name":"starpass","start_timer":"2024-02-29T04:00:00","end_timer":"2024-04-04T04:00:00","repeatable":{},"note":"","sub_events":[]},{"ids":"heroes","name":"Heroes","start_timer":"2024-02-29T04:00:00","end_timer":"2024-04-04T04:00:00","repeatable":{},"note":"","sub_events":[{"ids":"","name":"The Conductor","start_timer":"2024-03-14T04:00:00","end_timer":"","repeatable":{},"note":"","sub_events":[]},{"ids":"","name":"Flash Freeze","start_timer":"2024-03-21T04:00:00","end_timer":"","repeatable":{},"note":"","sub_events":[]},{"ids":"","name":"The Arctic Soldier","start_timer":"2024-03-21T04:00:00","end_timer":"","repeatable":{},"note":"","sub_events":[]}]}]')},32:function(e,t,n){},52:function(e,t,n){},67:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(24),i=n.n(s),o=n(16),l=n(7),u=n(4),j=(n(52),Object(u.createCn)("logo")),d=r.memo((function(){return Object(a.jsx)("div",{className:j(),children:Object(a.jsx)("img",{src:"/f-mobile-timers/img/logo.png",alt:""})})})),b=n(25),m=n.n(b),O=(n(67),Object(u.createCn)("navbar"));function v(e,t){return e===t?"active":""}var h=r.memo((function(){var e,t=Object(l.f)(),n=(null===(e=m.a.parse(t.search).router)||void 0===e?void 0:e.toString())||"";return Object(a.jsxs)("div",{className:O(),children:[Object(a.jsx)(o.b,{activeClassName:v(n,"calculator"),to:"/f-mobile-timers?router=calculator",children:"OVR Calculator"}),Object(a.jsx)(o.b,{activeClassName:v(n,"timers"),to:"/f-mobile-timers?router=timers",children:"Timers"}),Object(a.jsx)(o.b,{activeClassName:v(n,"changelog"),exact:!0,to:"/f-mobile-timers?router=changelog",children:"Changelog"})]})})),f=(n(73),n(9)),g=n(28),p=n(22),x=n(38);function N(e,t){if("undefined"===typeof e||0===e&&!t)return"00";var n=t?e+t:e;return n<10?"0"+n:n}n(32);var C=c.a.memo((function(e){var t=e.now,n=e.duration,r=new Date(n),s=Object(p.a)({start:t,end:r});return Object(a.jsx)(c.a.Fragment,{children:function(e){var t=Math.floor(e/24)+1;if(e<0)return"";if(t<2){var n=s.days&&s.days>0?24:0,a=N(s.hours,n),r=N(s.minutes),c=N(s.seconds);return"".concat(a,":").concat(r,":").concat(c)}return"".concat(t," Days")}(Object(x.a)(r,t))})})),S=c.a.memo((function(e){var t=e.now,n=e.start,r=new Date(n),s=Object(p.a)({start:r,end:t});return Object(a.jsx)(c.a.Fragment,{children:function(e){var t=Math.floor(e/24)+1;if(e<0)return"";if(t<2){var n=s.days&&s.days>0?24:0,a=N(s.hours,n),r=N(s.minutes),c=N(s.seconds);return"".concat(a,":").concat(r,":").concat(c)}return"".concat(t," Days")}(Object(x.a)(r,t))})})),_=c.a.memo((function(e){var t=e.now,n=e.repeatable,r=e.start,s=new Date(r),i=parseInt(n.value),o=Object(p.a)({start:s,end:t});return Object(a.jsx)(c.a.Fragment,{children:function(e){var t=Math.floor(e/24)+1;if(t<2){var n=o.days&&o.days>0?24:0,a=N(o.hours,n),r=N(o.minutes),c=N(o.seconds);return"".concat(a,":").concat(r,":").concat(c)}return"".concat(t," Days")}(function(){var e=Math.abs(Object(x.a)(s,t));return"d"===n.type?24*i-e%(24*i):i-e%i}())})})),k=(n(74),Object(u.createCn)("sub-event-row")),w=c.a.memo((function(e){var t,n=e.event,c=Object(r.useState)(new Date),s=Object(f.a)(c,2),i=s[0],o=s[1];return Object(r.useEffect)((function(){setInterval((function(){var e=new Date;o(e)}),5e3)}),[]),Object(a.jsxs)("div",{className:k(),children:[Object(a.jsx)("div",{className:k("name"),children:n.name}),Object(a.jsx)("div",{className:k("update"),children:n.start_timer&&Object(a.jsx)(S,{now:i,start:n.start_timer})}),Object(a.jsx)("div",{className:k("timer",{expiring:n.expiring}),children:n.end_timer&&Object(a.jsx)(C,{now:i,duration:n.end_timer})}),Object(a.jsx)("div",{className:k("update"),children:(null===(t=n.repeatable)||void 0===t?void 0:t.value)&&Object(a.jsx)(_,{now:i,repeatable:n.repeatable,start:n.start_timer})})]})})),L=(n(75),Object(u.createCn)("event-row")),y=c.a.memo((function(e){var t,n=e.event,c=Object(r.useState)(new Date),s=Object(f.a)(c,2),i=s[0],o=s[1],l="/f-mobile-timers/img/programs/"+n.ids+".png";return Object(r.useEffect)((function(){setInterval((function(){var e=new Date;o(e)}),1e3)}),[]),Object(a.jsxs)("div",{className:L(),children:[Object(a.jsx)("div",{className:L("img"),children:Object(a.jsx)("img",{src:l,alt:""})}),Object(a.jsxs)("div",{className:L("content"),children:[Object(a.jsxs)("div",{className:L("main_event"),children:[Object(a.jsx)("div",{className:L("name"),children:n.name}),Object(a.jsx)("div",{className:L("update"),children:n.start_timer?Object(a.jsx)(S,{now:i,start:n.start_timer}):""}),Object(a.jsx)("div",{className:L("timer",{expiring:n.expiring}),children:n.end_timer?Object(a.jsx)(C,{now:i,duration:n.end_timer}):""}),Object(a.jsx)("div",{className:L("update"),children:(null===(t=n.repeatable)||void 0===t?void 0:t.value)?Object(a.jsx)(_,{now:i,repeatable:n.repeatable,start:n.start_timer}):""})]}),Object(a.jsx)("div",{className:L("sub_events"),children:n.sub_events.map((function(e){return Object(a.jsx)(w,{event:e})}))}),Object(a.jsx)("div",{className:L("event_note"),children:n.note})]})]})})),T=n(12),E=n(39);function I(e){var t,n=(new Date).getTime(),a=e;if(a.expiring=!1,a.start_timer){var r=a.start_timer,c=new Date(r).getTime();a.starting=c-n<=864e5,a.stimer=c}if(a.end_timer){var s=a.end_timer,i=new Date(s).getTime();a.expiring=i-n<=864e5,a.timer=i}if(null===a||void 0===a||null===(t=a.repeatable)||void 0===t?void 0:t.date){var o=null===a||void 0===a?void 0:a.repeatable,l=o.date,u=o.type,j=o.value,d="days",b=new Date(l),m=j;for("h"===u&&(d="hours");b.getTime()<n;)b=Object(E.a)(b,Object(T.a)({},d,m));a.update_timer=new Date(b).getTime()}return a}n(76);localStorage.setItem("evts",JSON.stringify(g));var A=Object(u.createCn)("timers-page"),R=(new Date).getTime(),M=c.a.memo((function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){for(var e=g,t=0;t<g.length;t++){e[t]=I(e[t]);var n=e[t].sub_events;if(n.length>0){for(var a=[],r=0;r<n.length;r++){if(n[r].end_timer)new Date(n[r].end_timer).getTime()>R&&a.push(I(n[r]));else a.push(I(n[r]))}e[t].sub_events=a}}var s=e.filter((function(e){if(e.end_timer){var t=e.end_timer.split("T"),n=Object(f.a)(t,2),a=n[0],r=n[1],c=a.split("-").map(Number),s=Object(f.a)(c,3),i=s[0],o=s[1],l=s[2],u=r.split(":").map(Number),j=Object(f.a)(u,3),d=j[0],b=j[1],m=j[2];return new Date(i,o-1,l,d,b,m).getTime()>R}return!0}));c(s)}),[]),Object(a.jsxs)("div",{className:A(),children:[Object(a.jsxs)("div",{className:A("header-row"),children:[Object(a.jsx)("div",{className:A("starting"),children:"Starting"}),Object(a.jsx)("div",{className:A("ending"),children:"Ending"}),Object(a.jsx)("div",{className:A("update"),children:"Update"})]}),n.map((function(e){return Object(a.jsx)(y,{event:e},e.ids)}))]})})),D=n(11),F=(n(78),n(6));function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return{}},n=function(){return Object(F.a)({type:e},t&&t.apply(void 0,arguments))};return n.type=e,n}var B=U("TIMERS_CALCULATOR / changeValue",(function(e,t){return{id:e,value:t}})),P=(U("TIMERS_CALCULATOR / countOvr",(function(){return{}})),U("TIMERS_CALCULATOR / setTotal",(function(e){return{total:e}}))),J=U("TIMERS_CALCULATOR / setNeeds",(function(e){return{needs:e}})),V=U("TIMERS_CALCULATOR / setResults",(function(e){return{results:e}})),H=U("TIMERS_CALCULATOR / setScheme",(function(e){return{scheme:e}})),K=U("TIMERS_CALCULATOR / setTeams",(function(e){return{teams:e}})),z=n(10),X=n.n(z),G=n(18),W=n(44),Y=function(e){return e.calculator},Z=function(e){return Y(e).results},q=function(e){return Y(e).teams},Q=function(e){return Y(e).total},$=function(e){return Y(e).needs},ee=function(e){return Y(e).scheme};Object(W.a)(Z,(function(e){return e}));function te(e,t){var n=e;t&&(n-=t);var a=11*Math.ceil(n/11)+.01,r=Math.ceil(a-n);return Math.round(r)}function ne(){return function(){var e=Object(G.a)(X.a.mark((function e(t,n){var a,r,c,s,i,o,l,u,j;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=n(),r=Y(a).results,c=0,s=0,i=0,o=1;o<=Object.keys(r).length;o++)r["ovr"+o]&&(c+=parseInt(r["ovr"+o])),r["rank"+o]&&(s+=parseInt(r["rank"+o])),r["boost"+o]&&(i+=parseInt(r["boost"+o]));l=Math.ceil(s/11),u=Math.ceil(i/11),j=Math.ceil((c-s)/11),t(P(l+u+j)),t(J({ranks:te(s),boosts:te(i),ovr:te(c,s)}));case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function ae(e){return function(){var t=Object(G.a)(X.a.mark((function t(n,a){var r,c,s,i,o,l;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=a(),c=Y(r).results,s=Y(r).scheme,i=localStorage.getItem("teams"),o=i?JSON.parse(i):{},l={scheme:s,results:c},i?localStorage.setItem("teams",JSON.stringify(Object(F.a)(Object(F.a)({},o),{},{team:l}))):localStorage.setItem("teams",JSON.stringify(Object(T.a)({},e,l)));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}function re(e){return function(){var t=Object(G.a)(X.a.mark((function t(n){var a,r,c,s,i;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.getItem("results")?(a=localStorage.getItem("scheme")||"41212",n(H(a)),r=localStorage.getItem("results")||"",c=JSON.parse(r),n(V(c)),n(ne())):e&&(s=e.scheme,n(H(s)),i=e.results,n(V(i)),n(ne()));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var ce=["41212","4222","4141","4231","424","4312","4321","433","4411","442","451","3412","3421","343","3511","352","5212","5221","532","541"];n(80);var se=Object(u.createCn)("rank-select"),ie=function(e){var t=e.id,n=Object(D.c)(Z),c=Object(D.b)(),s=Object(r.useRef)(null),i=Object(r.useState)(!1),o=Object(f.a)(i,2),l=o[0],u=o[1],j=Object(r.useCallback)((function(e){s.current&&!s.current.contains(e.target)&&u(!1)}),[]),d=Object(r.useCallback)((function(){u(!0)}),[]),b=Object(r.useCallback)((function(e){u(!1),c(B(t,e.toString())),c(ne())}),[u]);return Object(r.useEffect)((function(){return document.addEventListener("click",j),function(){document.removeEventListener("click",j)}}),[]),Object(a.jsx)("div",{className:se(),ref:s,children:Object(a.jsxs)("div",{className:se("rank"),children:[Object(a.jsx)("div",{className:se("result"),onClick:function(){return d()},children:n[t]||0}),Object(a.jsx)("div",{className:se("dropdown",{visible:l}),children:[0,1,2,3,4,5].map((function(e){return Object(a.jsx)("div",{className:se("rank-item",Object(T.a)({},e,!0)),onClick:function(){return b(e)},children:e})}))})]})})},oe=(n(81),Object(u.createCn)("my-teams"));function le(e){return 0===Object.keys(e).length}var ue=function(){var e=Object(D.b)(),t=Object(D.c)(q),n=le(t)?[]:Object.keys(t),c=Object(r.useRef)(null);console.log(Object.keys(t));var s=Object(r.useCallback)((function(){if(null!==c.current){var t=c.current.value;console.log(t);var n=t.replace(/\s/g,"").toLowerCase();e(ae(n))}}),[e]),i=Object(r.useCallback)((function(){if(null!==c.current){var t=c.current.value;console.log(t);var n=t.replace(/\s/g,"").toLowerCase();e(ae(n))}}),[e]);return Object(r.useEffect)((function(){}),[]),Object(a.jsxs)("div",{className:oe(),children:[Object(a.jsx)("div",{className:oe("input"),children:Object(a.jsx)("input",{type:"text",name:"new_team",placeholder:"Team name",ref:c})}),Object(a.jsx)("div",{className:oe("save"),children:Object(a.jsx)("button",{onClick:s,children:"Save"})}),!le(t)&&Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("div",{className:oe("hr")}),Object(a.jsx)("div",{className:oe("teams"),children:Object(a.jsx)("select",{name:"teams",id:"teams",children:n.map((function(e){return Object(a.jsx)("option",{value:e,children:e})}))})}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:oe("load"),children:Object(a.jsx)("button",{onClick:i,children:"Load"})})]})]})},je=Object(u.createCn)("calculator-page"),de=function(){var e=Object(D.b)(),t=Object(D.c)(Z),n=Object(D.c)(Q),c=Object(D.c)($),s=Object(D.c)(ee),i=Object(r.useState)("41212"),o=Object(f.a)(i,2),l=o[0],u=o[1],j=Object(r.useCallback)((function(t,n){console.log(t),e(B(t,n.target.value)),e(ne())}),[e]),d=Object(r.useCallback)((function(){e(function(){var e=Object(G.a)(X.a.mark((function e(t,n){var a,r,c;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n(),r=Y(a).results,c=Y(a).scheme,localStorage.setItem("scheme",c),localStorage.setItem("results",JSON.stringify(r));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}),[e]),b=Object(r.useCallback)((function(){e(re())}),[e]),m=Object(r.useCallback)((function(t){u(t.target.value),e(function(e){return function(){var t=Object(G.a)(X.a.mark((function t(n){return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(H(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t.target.value))}),[]);return Object(r.useEffect)((function(){u(s)}),[s]),Object(r.useEffect)((function(){e(re()),e(function(){var e=Object(G.a)(X.a.mark((function e(t){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("teams")&&t(K(JSON.parse(localStorage.getItem("teams"))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(a.jsxs)("div",{className:je(),children:[Object(a.jsx)("div",{className:je("data"),children:Object(a.jsxs)("div",{className:je("buttons"),children:[Object(a.jsx)("button",{className:"button_load",onClick:b,children:"Load"}),Object(a.jsx)("button",{className:"button_save",onClick:d,children:"Save"})]})}),Object(a.jsxs)("div",{className:je("need-content"),children:[Object(a.jsxs)("div",{className:je("total"),children:["Total OVR: ",n]}),Object(a.jsx)("div",{className:je("hr")}),Object(a.jsx)("div",{className:je("need"),children:"Next OVR"}),Object(a.jsxs)("table",{className:je("need-table"),children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"OVR:"}),Object(a.jsx)("td",{children:c.ovr})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Ranks:"}),Object(a.jsx)("td",{children:c.ranks})]})]}),Object(a.jsx)("div",{className:je("scheme"),children:Object(a.jsx)("select",{id:"scheme",value:l,onChange:m,children:ce.map((function(e){return Object(a.jsx)("option",{selected:l===e,value:e,children:e})}))})}),Object(a.jsx)("div",{className:je("hr",{hidden:!0})}),Object(a.jsx)(ue,{})]}),Object(a.jsx)("div",{className:je("field"),children:[1,2,3,4,5,6,7,8,9,10,11].map((function(e){var n,r,c;return Object(a.jsxs)("div",{className:je("position",(n={master:t["ovr"+e]>=90},Object(T.a)(n,"position_"+e,!0),Object(T.a)(n,s,!0),n)),children:[Object(a.jsx)("div",{className:je("stone",{emerald:"1"===t["rank"+e],saphire:"2"===t["rank"+e],ametyst:"3"===t["rank"+e],ruby:"4"===t["rank"+e],ember:"5"===t["rank"+e]})}),["ovr"].map((function(n){return Object(a.jsx)("div",{className:je(n),children:Object(a.jsx)("input",{id:n+e,onChange:function(t){return j(n+e,t)},value:t[n+e],type:"number"})})})),["rank"].map((function(t){return Object(a.jsx)(ie,{id:t+e})})),Object(a.jsx)("div",{className:je("base_ovr"),children:(r=t["ovr"+e],c=t["rank"+e],r&&c?parseInt(r,10)-parseInt(c,10):!r&&c?c:r&&!c?r:0)})]})}))})]})},be=(n(82),Object(u.createCn)("group")),me=c.a.memo((function(e){var t=e.group,n=t.name,r=t.leagues,c="/f-mobile-timers/img/groups/"+n.replace(/\s/g,"").toLowerCase()+".png";return Object(a.jsxs)("div",{className:be(),children:[Object(a.jsx)("div",{className:be("img"),children:Object(a.jsx)("img",{src:c,alt:""})}),Object(a.jsxs)("div",{className:be("content"),children:[Object(a.jsx)("div",{className:be("header"),children:Object(a.jsx)("div",{className:be("name"),children:n})}),Object(a.jsx)("div",{className:be("leagues"),children:r.map((function(e){return Object(a.jsx)("div",{className:be("league"),children:e})}))})]})]})})),Oe=[{name:"England",leagues:["Premier League","EFL Championship","EFL League 1","EFL League 2"]},{name:"France",leagues:["Ligue 1 Uber Eats","Ligue 2 BKT"]},{name:"Italy",leagues:["Serie A TIM","Calcio B"]},{name:"Germany",leagues:["Bundesliga","Bundesliga 2","3. Liga"]},{name:"Spain",leagues:["LaLiga Santander","LaLiga Smartbank"]},{name:"Western Europe",leagues:["Liga NOS (Portugal)","Eredivisie (Netherlands)","1A Pro League (Belgium)","Scottish Prem (Scotland)","SSE Airtricity Lge (Ireland)"]},{name:"Eastern Europe",leagues:["RSL (Switzerland)","O. Bundesliga (Austria)","3F Superliga (Denmark)","Eliteserien (Norway)","Allsvenskan (Sweden)","PKO Ektstraklasa (Poland)","Liga I (Romania)","Super Lig (Turkey)","Finnliga (Finland)","Ceska Liga (Czech Republic)","League of Russia (Russia)","Ukrayina Liha (Ukraine)","Liga Hrvatska (Croatia)","Hellas Liga (Greece)"]},{name:"Rest of World",leagues:["MLS (USA/Canada)","Liga BBVA MX (Mexico)","LPF (Argentina)","CSL (China)","K-League 1 (South Korea)","A-League (Australia/New Zealand)","Hero ISL (India)","MBS Pro League (Saudi Arabia)","United Emirates League (UAE)","South African FL (South Africa)"]}],ve=(n(83),Object(u.createCn)("chemistry-groups")),he=r.memo((function(){return Object(a.jsx)("div",{className:ve(),children:Object(a.jsx)("div",{className:ve("content"),children:Oe.map((function(e){return Object(a.jsx)(me,{group:e})}))})})})),fe=(n(84),[{version:"4.1.0",changes:["\u0410\u043a\u0442\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0442\u0430\u0439\u043c\u0435\u0440\u044b"]},{version:"4.0.0",changes:["\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u0435\u0437\u043e\u043d\u0430"]},{version:"3.11.3",changes:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0442\u0430\u0439\u043c\u0435\u0440\u044b Carniball"]},{version:"3.10.3",changes:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0442\u0430\u0439\u043c\u0435\u0440\u044b \u0441\u0442\u0430\u0440\u0442\u0430 \u0433\u043b\u0430\u0432 TOTY"]},{version:"3.9.3",changes:["\u041f\u043e\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0438 \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u0435 \u0440\u0430\u043d\u043a\u043e\u0432"]},{version:"3.9.2",changes:["\u0414\u043e\u0431\u0430\u0432\u0438\u043b TOTY"]},{version:"3.8.2",changes:["\u0422\u0430\u0439\u043c\u0435\u0440\u044b \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442 \u0442\u0430\u0439\u043c\u0437\u043e\u043d\u0443 \u0438 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432\u0435\u0440\u043d\u043e"]},{version:"3.7.2",changes:["\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u0438\u0434 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0430"]},{version:"3.6.2",changes:["\u041f\u0435\u0440\u0435\u043f\u0438\u0441\u0430\u043d\u0430 \u043b\u043e\u0433\u0438\u043a\u0430 \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432","\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0442\u0430\u0439\u043c\u0435\u0440\u044b \u0430\u043f\u0434\u0435\u0439\u0442\u043e\u0432"]},{version:"2.6.2",changes:["\u041f\u0435\u0440\u0435\u0441\u0447\u0435\u0442 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"]},{version:"2.5.2",changes:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0441\u0445\u0435\u043c\u0443"]},{version:"2.4.2",changes:["\u041f\u0435\u0440\u0435\u0434\u0435\u043b\u0430\u043d\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0442\u043a\u0430 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0430"]},{version:"2.3.2",changes:["\u0420\u0435\u043b\u0438\u0437 \u0434\u043b\u044f \u0421\u0435\u0440\u0435\u0433\u0438","\u041f\u043e\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f, \u043b\u044e\u0431\u0443\u044e \u0432\u043a\u043b\u0430\u0434\u043a\u0443 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u043e \u043f\u0440\u044f\u043c\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435"]},{version:"2.2.2",changes:["\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"]},{version:"2.1.2",changes:["\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u043e\u0441\u0432\u044f\u0449\u0435\u043d\u043d\u0430\u044f \u041b\u0438\u0437\u0435","\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"]}]),ge=Object(u.createCn)("changelog-page"),pe=c.a.memo((function(){return Object(a.jsxs)("div",{className:ge(),children:[Object(a.jsx)("div",{className:ge("version"),children:"Changelog"}),Object(a.jsxs)("div",{className:ge("contacts"),children:[Object(a.jsx)("div",{children:"Contacts:"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"/f-mobile-timers/img/discord.png",alt:""}),"denim3000#0908"]})]}),Object(a.jsx)("div",{className:ge("changes"),children:fe.map((function(e){return Object(a.jsxs)("div",{className:ge("row"),children:[Object(a.jsx)("div",{className:ge("small-version"),children:e.version}),Object(a.jsx)("div",{className:ge("description"),children:Object(a.jsx)("ul",{children:e.changes.map((function(e){return Object(a.jsxs)("li",{children:["- ",e]})}))})})]})}))})]})})),xe=c.a.memo((function(){var e=Object(r.useState)(Object(a.jsx)(de,{})),t=Object(f.a)(e,2),n=t[0],s=t[1],i=Object(l.f)();return Object(r.useEffect)((function(){switch(m.a.parse(i.search).router){case"chemistry":s(Object(a.jsx)(he,{}));break;case"timers":s(Object(a.jsx)(M,{}));break;case"calculator":s(Object(a.jsx)(de,{}));break;case"changelog":s(Object(a.jsx)(pe,{}));break;default:s(Object(a.jsx)(de,{}))}}),[i]),Object(a.jsx)(c.a.Fragment,{children:n})})),Ne=Object(u.createCn)("App");var Ce=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)("div",{className:Ne("header"),children:Object(a.jsxs)("div",{className:"inner",children:[Object(a.jsx)(o.b,{exact:!0,to:"/f-mobile-timers?",children:Object(a.jsx)(d,{})}),Object(a.jsx)(h,{})]})}),Object(a.jsx)("div",{className:Ne("content"),children:Object(a.jsx)("div",{className:"inner",children:Object(a.jsx)(l.c,{children:Object(a.jsx)(l.a,{path:"/f-mobile-timers",children:Object(a.jsx)(xe,{})})})})})]})})},Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},_e=n(17),ke=n(43),we=n(41),Le=n(42),ye=function(){function e(t,n){Object(we.a)(this,e),this.reducers=void 0,this.store=void 0,this.reducers=Object(F.a)({},t),this.store=n}return Object(Le.a)(e,[{key:"add",value:function(e,t){var n;e&&!this.reducers[e]&&(this.reducers[e]=t,null===(n=this.store)||void 0===n||n.replaceReducer(Object(_e.b)(this.reducers)))}},{key:"remove",value:function(e){var t;e&&this.reducers[e]&&(delete this.reducers[e],null===(t=this.store)||void 0===t||t.replaceReducer(Object(_e.b)(this.reducers)))}}]),e}(),Te={teams:{},results:{},total:0,needs:{ranks:0,boosts:0,ovr:0},scheme:"41212"};var Ee="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_e.c;var Ie=function(e,t){var n=Object(_e.d)(Object(_e.b)(e),t,Ee(Object(_e.a)(ke.a)));return n.reducerManager=new ye(e,n),n}({calculator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.type:return console.log(t),Object(F.a)(Object(F.a)({},e),{},{results:Object(F.a)(Object(F.a)({},e.results),{},Object(T.a)({},t.id,t.value))});case P.type:return Object(F.a)(Object(F.a)({},e),{},{total:t.total});case V.type:return Object(F.a)(Object(F.a)({},e),{},{results:t.results});case J.type:return Object(F.a)(Object(F.a)({},e),{},{needs:t.needs});case H.type:return console.log(t.scheme),Object(F.a)(Object(F.a)({},e),{},{scheme:t.scheme});case K.type:return console.log(t.teams),Object(F.a)(Object(F.a)({},e),{},{teams:t.teams});default:return e}}});i.a.render(Object(a.jsx)(D.a,{store:Ie,children:Object(a.jsx)(Ce,{})}),document.getElementById("root")),Se()}},[[85,1,2]]]);
//# sourceMappingURL=main.788a027b.chunk.js.map