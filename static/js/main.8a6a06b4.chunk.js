(this["webpackJsonpfm-events"]=this["webpackJsonpfm-events"]||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),i=n.n(s),r=n(19),c=n.n(r),m=n(21),o=n(2),l=n(6),j=(n(31),Object(l.createCn)("events-page")),v=s.memo((function(){return Object(a.jsx)("div",{className:j(),children:"Events"})})),b=n(23),d=n(10),u=[{ids:"toty",note:"",event:{name:"toty",timer:"2021-02-11T22:00:00+03:00"},repeatable:"",sub_events:[{name:"TOTY MID",timer:"2021-01-27T22:00:00+03:00"},{name:"TOTY DEF",timer:"2021-01-29T22:00:00+03:00"}]},{ids:"marquee",note:"",event:{name:"marquee stars",timer:"2021-01-26T22:00:00+03:00"},repeatable:"",sub_events:[]},{ids:"uel",note:"",event:{name:"UEFA Europa League",timer:"2021-01-21T22:00:00+03:00"},repeatable:"",sub_events:[{name:"Energy offer (coins)",timer:"2021-01-21T22:00:00+03:00"}]},{ids:"leagues",note:"",repeatable:"weekly",event:{name:"League matchups",timer:"2021-01-18T22:00:00+03:00"},sub_events:[]},{ids:"icons",note:"Dont forget to play skill games",repeatable:"weekly",event:{name:"icons strike",timer:"2021-01-21T22:00:00+03:00"},sub_events:[]},{ids:"becks",note:"Dont forget to get Beckham points from ads",repeatable:"weekly",event:{name:"beckham quests",timer:"2021-01-07T22:00:00+03:00"},sub_events:[]},{ids:"rivals",note:"",repeatable:"monthly",event:{name:"division rivals",timer:"2021-01-25T22:00:00+03:00"},sub_events:[{name:"weekly update",repeatable:"weekly",timer:"2021-01-13T22:00:00+03:00"}]},{ids:"starpass",note:"",repeatable:"monthly",event:{name:"starpass",timer:"2021-01-27T22:00:00+03:00"},sub_events:[]}],f=n(20),O=n.n(f),p=(n(33),i.a.memo((function(e){var t=e.now,n=e.duration;return Object(a.jsx)(O.a,{duration:t,date:n,format:"D[d.] hh:mm:ss"})}))),x=(n(34),Object(l.createCn)("sub-event-row")),h=i.a.memo((function(e){var t=e.event,n=t.name,i=t.timer,r=t.expiring,c=Object(s.useState)(new Date),m=Object(d.a)(c,2),o=m[0],l=m[1],j=new Date(i);return Object(s.useEffect)((function(){setInterval((function(){var e=new Date;l(e)}),1e3)}),[]),Object(a.jsxs)("div",{className:x(),children:[Object(a.jsx)("div",{className:x("name"),children:n}),Object(a.jsx)("div",{className:x("timer",{expiring:r}),children:Object(a.jsx)(p,{now:o,duration:j})})]})})),g=(n(35),Object(l.createCn)("event-row")),w=i.a.memo((function(e){var t=e.event,n=t.ids,i=t.event,r=t.note,c=t.sub_events,m=Object(s.useState)(new Date),o=Object(d.a)(m,2),l=o[0],j=o[1],v=new Date(i.timer),b="/fmt/img/programs/"+n+".png";return Object(s.useEffect)((function(){setInterval((function(){var e=new Date;j(e)}),1e3)}),[]),Object(a.jsxs)("div",{className:g(),children:[Object(a.jsx)("div",{className:g("img"),children:Object(a.jsx)("img",{src:b,alt:""})}),Object(a.jsxs)("div",{className:g("content"),children:[Object(a.jsxs)("div",{className:g("main_event"),children:[Object(a.jsx)("div",{className:g("name"),children:i.name}),Object(a.jsx)("div",{className:g("timer",{expiring:i.expiring}),children:Object(a.jsx)(p,{now:l,duration:v})})]}),Object(a.jsx)("div",{className:g("sub_events"),children:c.map((function(e){return Object(a.jsx)(h,{event:e},e.ids)}))}),Object(a.jsx)("div",{className:g("event_note"),children:r})]})]})})),T=n(8),D=n.n(T),N="YYYY-MM-DDTHH:mm:ss+03:00";function y(e){var t,n=(new Date).getTime(),a=e;if(t=e.event?new Date(e.event.timer).getTime():new Date(e.timer).getTime(),""!==a.repeatable&&t<=n)if("weekly"===a.repeatable){var s=-1*D()(t).diff(n,"w")+1,i=D()(t).add(s,"w").format(N);a.event?a.event.timer=i:a.timer=i}else if("monthly"===a.repeatable){var r=-1*D()(t).diff(n,"d")+28;console.log(r);var c=D()(t).add(r,"d").format(N);a.event?a.event.timer=c:a.timer=c}var m=a.event?a.event.timer:a.timer,o=new Date(D()(m).format()).getTime()-n<=864e5;return a.event?a.event.expiring=o:a.expiring=o,a}n(36);var _=Object(l.createCn)("timers-page"),k=(new Date).getTime(),C=i.a.memo((function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(s.useEffect)((function(){for(var e=Object(b.a)(u),t=0;t<u.length;t++){e[t]=y(e[t]);for(var n=e[t].sub_events,a=0;a<n.length;a++)n[a]=y(n[a]);e[t].sub_events=n}i(e)}),[]),Object(a.jsx)("div",{className:_(),children:n.map((function(e){return new Date(e.event.timer).getTime()>k?Object(a.jsx)(w,{event:e},e.ids):null}))})})),E=(n(37),Object(l.createCn)("logo")),F=s.memo((function(){return Object(a.jsx)("div",{className:E(),children:Object(a.jsx)("img",{src:"/fmt/img/logo.png",alt:""})})})),Y=(n(38),Object(l.createCn)("App"));var I=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:Y("header"),children:Object(a.jsx)("div",{className:"inner",children:Object(a.jsx)(F,{})})}),Object(a.jsx)("div",{className:Y("content"),children:Object(a.jsx)("div",{className:"inner",children:Object(a.jsx)(m.a,{children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/fmt",children:Object(a.jsx)(C,{})}),Object(a.jsx)(o.a,{exact:!0,path:"/fmt/events",children:Object(a.jsx)(v,{})})]})})})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root")),S()}},[[44,1,2]]]);
//# sourceMappingURL=main.8a6a06b4.chunk.js.map