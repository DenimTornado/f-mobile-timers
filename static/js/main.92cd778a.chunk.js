(this["webpackJsonpfm-events"]=this["webpackJsonpfm-events"]||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),r=a.n(s),i=a(25),c=a.n(i),m=a(12),l=a(5),u=a(7),o=(a(38),Object(u.createCn)("events-page")),b=s.memo((function(){return Object(n.jsx)("div",{className:o(),children:"Events"})})),j=a(30),d=a(11),v=[{ids:"summer",note:"",event:{name:"summer celebration",timer:"2021-08-26T22:00:00+03:00"},repeatable:"",sub_events:[{repeatable:"weekly",name:"Energy offer (coins)",timer:"2021-08-12T22:00:00+03:00"},{repeatable:"weekly",name:"Roulette update",timer:"2021-08-12T22:00:00+03:00"}]},{ids:"flashbacks",note:"",event:{name:"flashbacks memories",timer:"2021-08-05T22:00:00+03:00"},repeatable:"",sub_events:[]},{ids:"toty",note:"",event:{name:"toty",timer:"2021-02-11T22:00:00+03:00"},repeatable:"",sub_events:[{repeatable:"",name:"TOTY MID",timer:"2021-01-27T22:00:00+03:00"},{repeatable:"",name:"TOTY MID Energy Deadend",timer:"2021-01-27T04:00:00+03:00"},{repeatable:"",name:"TOTY DEF",timer:"2021-01-29T22:00:00+03:00"}]},{ids:"marquee",note:"",event:{name:"marquee stars",timer:"2021-01-26T22:00:00+03:00"},repeatable:"",sub_events:[]},{ids:"uel",note:"",event:{name:"UEFA Europa League",timer:"2021-01-21T22:00:00+03:00"},repeatable:"",sub_events:[{repeatable:"",name:"Energy offer (coins)",timer:"2021-01-21T22:00:00+03:00"}]},{ids:"leagues",note:"",repeatable:"weekly",event:{name:"League matchups",timer:"2021-08-16T22:00:00+03:00"},sub_events:[{name:"players update",repeatable:"monthly",timer:"2021-09-20T22:00:00+03:00"}]},{ids:"icons",note:"Dont forget to play skill games",repeatable:"weekly",event:{name:"icons strike",timer:"2021-01-21T22:00:00+03:00"},sub_events:[]},{ids:"becks",note:"Dont forget to get Beckham points from ads",repeatable:"weekly",event:{name:"beckham quests",timer:"2021-01-07T22:00:00+03:00"},sub_events:[]},{ids:"rivals",note:"",repeatable:"monthly",event:{name:"division rivals",timer:"2021-09-06T22:00:00+03:00"},sub_events:[{name:"weekly update",repeatable:"weekly",timer:"2021-01-27T22:00:00+03:00"}]},{ids:"starpass",note:"",repeatable:"monthly",event:{name:"starpass",timer:"2021-02-24T22:00:00+03:00"},sub_events:[{repeatable:"",name:"players update",timer:"2021-10-06T22:00:00+03:00"},{name:"quests update",repeatable:"weekly",timer:"2021-08-25T22:00:00+03:00"}]}],g=a(14),O=a(29),p=(a(39),function(e,t){if(!e||0===e)return"00";var a=t?e+t:e;return a<10?"0"+a:a}),h=r.a.memo((function(e){var t=e.now,a=e.duration,i=Object(s.useState)(""),c=Object(d.a)(i,2),m=c[0],l=c[1];return Object(s.useEffect)((function(){var e=Object(g.a)(a,t),n=Object(O.a)({start:t,end:a});if(e>2){l("".concat(e+1," days"))}else{var s=n.days&&n.days>0?24:0,r=p(n.hours,s),i=p(n.minutes),c=p(n.seconds);l("".concat(r,":").concat(i,":").concat(c))}}),[t,a]),Object(n.jsx)(r.a.Fragment,{children:m})})),f=(a(40),Object(u.createCn)("sub-event-row")),x=r.a.memo((function(e){var t=e.event,a=t.name,r=t.timer,i=t.expiring,c=Object(s.useState)(new Date),m=Object(d.a)(c,2),l=m[0],u=m[1],o=new Date(r);return Object(s.useEffect)((function(){setInterval((function(){var e=new Date;u(e)}),1e3)}),[]),Object(n.jsxs)("div",{className:f(),children:[Object(n.jsx)("div",{className:f("name"),children:a}),Object(n.jsx)("div",{className:f("timer",{expiring:i}),children:Object(n.jsx)(h,{now:l,duration:o})})]})})),L=(a(41),Object(u.createCn)("event-row")),T=r.a.memo((function(e){var t=e.event,a=t.ids,r=t.event,i=t.note,c=t.sub_events,m=Object(s.useState)(new Date),l=Object(d.a)(m,2),u=l[0],o=l[1],b=new Date(r.timer),j="/fmt/img/programs/"+a+".png";return Object(s.useEffect)((function(){setInterval((function(){var e=new Date;o(e)}),1e3)}),[]),Object(n.jsxs)("div",{className:L(),children:[Object(n.jsx)("div",{className:L("img"),children:Object(n.jsx)("img",{src:j,alt:""})}),Object(n.jsxs)("div",{className:L("content"),children:[Object(n.jsxs)("div",{className:L("main_event"),children:[Object(n.jsx)("div",{className:L("name"),children:r.name}),Object(n.jsx)("div",{className:L("timer",{expiring:r.expiring}),children:Object(n.jsx)(h,{now:u,duration:b})})]}),Object(n.jsx)("div",{className:L("sub_events"),children:c.map((function(e){return Object(n.jsx)(x,{event:e},e.ids)}))}),Object(n.jsx)("div",{className:L("event_note"),children:i})]})]})})),w=a(26),y=a(27);function N(e){var t,a,n=(new Date).getTime(),s=e;if(t=e.event?new Date(e.event.timer).getTime():new Date(e.timer).getTime(),""!==s.repeatable&&t<=n){var r=-1*Object(w.a)(t,n)+1;a=Object(y.a)(t,{weeks:r}),s.event?s.event.timer=a:s.timer=a}var i=s.event?s.event.timer:s.timer,c=new Date(i).getTime()-n<=864e5;return s.event?s.event.expiring=c:s.expiring=c,s}a(42);var S=Object(u.createCn)("timers-page"),k=(new Date).getTime(),E=r.a.memo((function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(s.useEffect)((function(){for(var e=Object(j.a)(v),t=0;t<v.length;t++){e[t]=N(e[t]);for(var a=e[t].sub_events,n=[],s=0;s<a.length;s++){(new Date(a[s].timer).getTime()>k||""!==a[s].repeatable)&&n.push(N(a[s]))}e[t].sub_events=n}r(e)}),[]),Object(n.jsx)("div",{className:S(),children:a.map((function(e){return new Date(e.event.timer).getTime()>k?Object(n.jsx)(T,{event:e},e.ids):null}))})})),C=(a(43),Object(u.createCn)("group")),D=r.a.memo((function(e){var t=e.group,a=t.name,s=t.leagues,r="/fmt/img/groups/"+a.replace(/\s/g,"").toLowerCase()+".png";return Object(n.jsxs)("div",{className:C(),children:[Object(n.jsx)("div",{className:C("img"),children:Object(n.jsx)("img",{src:r,alt:""})}),Object(n.jsxs)("div",{className:C("content"),children:[Object(n.jsx)("div",{className:C("header"),children:Object(n.jsx)("div",{className:C("name"),children:a})}),Object(n.jsx)("div",{className:C("leagues"),children:s.map((function(e){return Object(n.jsx)("div",{className:C("league"),children:e})}))})]})]})})),A=[{name:"England",leagues:["Premier League","EFL Championship","EFL League 1","EFL League 2"]},{name:"France",leagues:["Ligue 1 Uber Eats","Ligue 2 BKT"]},{name:"Italy",leagues:["Serie A TIM","Calcio B"]},{name:"Germany",leagues:["Bundesliga","Bundesliga 2","3. Liga"]},{name:"Spain",leagues:["LaLiga Santander","LaLiga Smartbank"]},{name:"Western Europe",leagues:["Liga NOS (Portugal)","Eredivisie (Netherlands)","1A Pro League (Belgium)","Scottish Prem (Scotland)","SSE Airtricity Lge (Ireland)"]},{name:"Eastern Europe",leagues:["RSL (Switzerland)","O. Bundesliga (Austria)","3F Superliga (Denmark)","Eliteserien (Norway)","Allsvenskan (Sweden)","PKO Ektstraklasa (Poland)","Liga I (Romania)","Super Lig (Turkey)","Finnliga (Finland)","Ceska Liga (Czech Republic)","League of Russia (Russia)","Ukrayina Liha (Ukraine)","Liga Hrvatska (Croatia)","Hellas Liga (Greece)"]},{name:"Rest of World",leagues:["MLS (USA/Canada)","Liga BBVA MX (Mexico)","LPF (Argentina)","CSL (China)","K-League 1 (South Korea)","A-League (Australia/New Zealand)","Hero ISL (India)","MBS Pro League (Saudi Arabia)","United Emirates League (UAE)","South African FL (South Africa)"]}],F=(a(44),Object(u.createCn)("chemistry-groups")),_=s.memo((function(){return Object(n.jsx)("div",{className:F(),children:Object(n.jsx)("div",{className:F("content"),children:A.map((function(e){return Object(n.jsx)(D,{group:e})}))})})})),B=(a(45),Object(u.createCn)("logo")),I=s.memo((function(){return Object(n.jsx)("div",{className:B(),children:Object(n.jsx)("img",{src:"/fmt/img/logo.png",alt:""})})})),P=(a(46),Object(u.createCn)("navbar")),M=s.memo((function(){return Object(n.jsxs)("div",{className:P(),children:[Object(n.jsx)(m.b,{exact:!0,to:"/fmt",children:"Timers"}),Object(n.jsx)(m.b,{exact:!0,to:"/fmt/chemistry",children:"Chemistry Groups"})]})})),R=(a(52),Object(u.createCn)("App"));var U=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)("div",{className:R("header"),children:Object(n.jsxs)("div",{className:"inner",children:[Object(n.jsx)(m.b,{exact:!0,to:"/fmt",children:Object(n.jsx)(I,{})}),Object(n.jsx)(M,{})]})}),Object(n.jsx)("div",{className:R("content"),children:Object(n.jsx)("div",{className:"inner",children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/fmt",children:Object(n.jsx)(E,{})}),Object(n.jsx)(l.a,{exact:!0,path:"/fmt/chemistry",children:Object(n.jsx)(_,{})}),Object(n.jsx)(l.a,{exact:!0,path:"/fmt/events",children:Object(n.jsx)(b,{})})]})})})]})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root")),q()}},[[53,1,2]]]);
//# sourceMappingURL=main.92cd778a.chunk.js.map