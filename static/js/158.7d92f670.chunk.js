"use strict";(self.webpackChunkseal_feel=self.webpackChunkseal_feel||[]).push([[158,787],{7158:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var i=t(1413),r="Messages_dialogs__n0pJ5",a="Messages_messages__8r9mg",s="Messages_newMessage__iEX3w",o="Messages_noDialogsElement__Hl0w8",c="Messages_noMessagesElement__rINvx",u=t(5927),d=t(8687),f="Dialog_dialog__XYJhc",m="Dialog_activeDialog__dwMbY",l="Dialog_userPhoto__qdtOa",v="Dialog_userName__h-yEF",p=t(3504),g=t(3235),h=t(184),_=function(e){var n=(0,d.I0)(),t=f;return e.activeRecipientId===e.id&&(t+=" "+m),(0,h.jsxs)("div",{className:t,onClick:function(){return n((0,g.He)(e.id))},children:[(0,h.jsx)(p.OL,{to:"/profile/"+e.id,children:(0,h.jsx)("img",{className:l,src:e.photo,alt:"\u0424\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})}),(0,h.jsxs)("span",{className:v,children:[" ",e.name]})]})},y="Message_message__ZFsXl",x="Message_senderPhoto__5btvE",T="Message_infoBar__oZCTu",E="Message_senderName__f5-wS",w="Message_sendTime__yty+l",j="Message_messageText__664Mm",M=function(e){return(0,h.jsxs)("div",{className:y,children:[(0,h.jsx)(p.OL,{to:"/profile/"+e.senderId,children:(0,h.jsx)("img",{className:x,src:e.senderPhoto,alt:"\u0424\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})}),(0,h.jsxs)("div",{className:T,children:[(0,h.jsxs)("span",{className:E,children:[" ",e.senderName]}),(0,h.jsx)("span",{className:w,children:e.createTime.toTimeString().slice(0,5)}),(0,h.jsx)("div",{className:j,children:e.message})]})]})},S=t(4261),L="AddMessageForm_addMessageArea__381Px",N="AddMessageForm_addMessageButton__MZKtL",b=t(3896),D=(t(787),function(e){var n=(0,b.cI)(),t=n.register,r=n.handleSubmit,a=n.reset,s=(0,d.v9)((function(e){return e.auth.currentUser})),o=(0,d.v9)((function(e){return e.messagesPage.activeRecipientId})),c=(0,d.I0)();return(0,h.jsxs)("form",{onSubmit:r((function(e){c((0,g.Hz)(e.messageText,s,o)),a()})),children:[(0,h.jsx)("textarea",(0,i.Z)((0,i.Z)({className:L},t("messageText",{required:!0,maxLength:1e3})),{},{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",onKeyDown:function(e){"Enter"!==e.key&&"NumpadEnter"!==e.code||e.shiftKey||(e.preventDefault(),document.getElementById("addMessageButton").click())}})),(0,h.jsx)("div",{children:(0,h.jsx)("button",{id:"addMessageButton",className:N,type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})}),I=(0,u.Z)((function(e){var n=(0,d.v9)((function(e){return e.messagesPage.dialogs})),t=(0,d.v9)((function(e){return e.messagesPage.messages})),u=(0,d.v9)((function(e){return e.messagesPage.activeRecipientId})),f=(0,h.jsx)("div",{className:o,children:"\u0414\u0438\u0430\u043b\u043e\u0433\u0438 \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"}),m=(0,h.jsx)("div",{className:c,children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"}),l=n.map((function(e){return(0,h.jsx)(_,(0,i.Z)((0,i.Z)({},e),{},{activeRecipientId:u}),(0,S.Z)())})),v=t.reduce((function(e,n){return u===n.recipientId&&e.push((0,h.jsx)(M,(0,i.Z)({},n),(0,S.Z)())),e}),[]),p=(0,h.jsxs)("div",{className:r,children:[(0,h.jsx)("div",{children:l}),(0,h.jsx)("div",{className:a,children:v.length?v:m}),(0,h.jsx)("div",{className:s,children:(0,h.jsx)(D,{})})]});return n.length?p:f}))},5927:function(e,n,t){var i=t(1413),r=(t(2791),t(8687)),a=t(6871),s=t(184),o=function(e){return{isAuth:e.auth.isAuth}};n.Z=function(e){return(0,r.$j)(o)((function(n){return n.isAuth?(0,s.jsx)(e,(0,i.Z)({},n)):(0,s.jsx)(a.Fg,{to:"/login"})}))}},4261:function(e,n,t){t.d(n,{Z:function(){return d}});var i,r={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},a=new Uint8Array(16);function s(){if(!i&&!(i="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(a)}for(var o=[],c=0;c<256;++c)o.push((c+256).toString(16).slice(1));function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(o[e[n+0]]+o[e[n+1]]+o[e[n+2]]+o[e[n+3]]+"-"+o[e[n+4]]+o[e[n+5]]+"-"+o[e[n+6]]+o[e[n+7]]+"-"+o[e[n+8]]+o[e[n+9]]+"-"+o[e[n+10]]+o[e[n+11]]+o[e[n+12]]+o[e[n+13]]+o[e[n+14]]+o[e[n+15]]).toLowerCase()}var d=function(e,n,t){if(r.randomUUID&&!n&&!e)return r.randomUUID();var i=(e=e||{}).random||(e.rng||s)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n){t=t||0;for(var a=0;a<16;++a)n[t+a]=i[a];return n}return u(i)}},787:function(e,n,t){t.r(n),t.d(n,{getCLS:function(){return y},getFCP:function(){return g},getFID:function(){return S},getLCP:function(){return N},getTTFB:function(){return b}});var i,r,a,s,o=function(e,n){return{name:e,value:void 0===n?-1:n,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var t=new PerformanceObserver((function(e){return e.getEntries().map(n)}));return t.observe({type:e,buffered:!0}),t}}catch(e){}},u=function(e,n){var t=function t(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),n&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},d=function(e){addEventListener("pageshow",(function(n){n.persisted&&e(n)}),!0)},f=function(e,n,t){var i;return function(r){n.value>=0&&(r||t)&&(n.delta=n.value-(i||0),(n.delta||void 0===i)&&(i=n.value,e(n)))}},m=-1,l=function(){return"hidden"===document.visibilityState?0:1/0},v=function(){u((function(e){var n=e.timeStamp;m=n}),!0)},p=function(){return m<0&&(m=l(),v(),d((function(){setTimeout((function(){m=l(),v()}),0)}))),{get firstHiddenTime(){return m}}},g=function(e,n){var t,i=p(),r=o("FCP"),a=function(e){"first-contentful-paint"===e.name&&(u&&u.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),t(!0)))},s=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],u=s?null:c("paint",a);(s||u)&&(t=f(e,r,n),s&&a(s),d((function(i){r=o("FCP"),t=f(e,r,n),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,t(!0)}))}))})))},h=!1,_=-1,y=function(e,n){h||(g((function(e){_=e.value})),h=!0);var t,i=function(n){_>-1&&e(n)},r=o("CLS",0),a=0,s=[],m=function(e){if(!e.hadRecentInput){var n=s[0],i=s[s.length-1];a&&e.startTime-i.startTime<1e3&&e.startTime-n.startTime<5e3?(a+=e.value,s.push(e)):(a=e.value,s=[e]),a>r.value&&(r.value=a,r.entries=s,t())}},l=c("layout-shift",m);l&&(t=f(i,r,n),u((function(){l.takeRecords().map(m),t(!0)})),d((function(){a=0,_=-1,r=o("CLS",0),t=f(i,r,n)})))},x={passive:!0,capture:!0},T=new Date,E=function(e,n){i||(i=n,r=e,a=new Date,M(removeEventListener),w())},w=function(){if(r>=0&&r<a-T){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};s.forEach((function(n){n(e)})),s=[]}},j=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){E(e,n),r()},i=function(){r()},r=function(){removeEventListener("pointerup",t,x),removeEventListener("pointercancel",i,x)};addEventListener("pointerup",t,x),addEventListener("pointercancel",i,x)}(n,e):E(n,e)}},M=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,j,x)}))},S=function(e,n){var t,a=p(),m=o("FID"),l=function(e){e.startTime<a.firstHiddenTime&&(m.value=e.processingStart-e.startTime,m.entries.push(e),t(!0))},v=c("first-input",l);t=f(e,m,n),v&&u((function(){v.takeRecords().map(l),v.disconnect()}),!0),v&&d((function(){var a;m=o("FID"),t=f(e,m,n),s=[],r=-1,i=null,M(addEventListener),a=l,s.push(a),w()}))},L={},N=function(e,n){var t,i=p(),r=o("LCP"),a=function(e){var n=e.startTime;n<i.firstHiddenTime&&(r.value=n,r.entries.push(e),t())},s=c("largest-contentful-paint",a);if(s){t=f(e,r,n);var m=function(){L[r.id]||(s.takeRecords().map(a),s.disconnect(),L[r.id]=!0,t(!0))};["keydown","click"].forEach((function(e){addEventListener(e,m,{once:!0,capture:!0})})),u(m,!0),d((function(i){r=o("LCP"),t=f(e,r,n),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,L[r.id]=!0,t(!0)}))}))}))}},b=function(e){var n,t=o("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,n={entryType:"navigation",startTime:0};for(var t in e)"navigationStart"!==t&&"toJSON"!==t&&(n[t]=Math.max(e[t]-e.navigationStart,0));return n}();if(t.value=t.delta=n.responseStart,t.value<0||t.value>performance.now())return;t.entries=[n],e(t)}catch(e){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("load",(function(){return setTimeout(n,0)}))}}}]);
//# sourceMappingURL=158.7d92f670.chunk.js.map