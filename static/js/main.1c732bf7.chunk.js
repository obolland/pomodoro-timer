(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),o=n(5),a=n.n(o),b=(n(12),n(2));n(13),n(4);var l=function(e){var t=e.secsLeft,n=e.minsLeft,s=e.currentSeshType,c=e.isStarted,o=e.handleStartStopClick;return Object(r.jsxs)("div",{className:"flex flex-col items-center",children:[Object(r.jsx)("p",{children:s}),Object(r.jsxs)("p",{className:"text-5xl",children:[n,":",t<10?"0".concat(t):t]}),Object(r.jsx)("button",{onClick:o,className:"button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",children:c?"Stop":"Start"})]})};var i=function(e){var t=e.decBreakLengthOneMin,n=e.incBreakLengthOneMin,s=e.breakMinutes,c=e.breakSeconds;return Object(r.jsxs)("div",{className:"flex flex-col items-center",children:[Object(r.jsx)("p",{className:"text-2xl",children:"Break"}),Object(r.jsxs)("p",{className:"text-2xl",children:[s,":",c<10?"0".concat(c):c]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:n,className:"button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",children:"\u2191"}),Object(r.jsx)("button",{onClick:t,className:"button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",children:"\u2193"})]})]})};var u=function(e){var t=e.decSeshLengthOneMin,n=e.incSeshLengthOneMin,s=e.seshMinutes,c=e.seshSeconds;return Object(r.jsxs)("div",{className:"flex flex-col items-center",children:[Object(r.jsx)("p",{className:"text-2xl",children:"Session"}),Object(r.jsxs)("p",{className:"text-2xl",children:[s,":",c<10?"0".concat(c):c]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:n,className:"button bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",children:"\u2191"}),Object(r.jsx)("button",{onClick:t,className:"button bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",children:"\u2193"})]})]})},d=n(6);function h(){var e=Object(s.useState)(1500),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Math.floor(n/60),a=n-60*o,h=Object(s.useState)(300),j=Object(b.a)(h,2),x=j[0],f=j[1],v=Math.floor(x/60),p=x-60*v,O=Object(s.useState)("session"),m=Object(b.a)(O,2),g=m[0],S=m[1],k=Object(s.useState)(null),L=Object(b.a)(k,2),M=L[0],N=L[1],y=Object(s.useState)(n),w=Object(b.a)(y,2),C=w[0],B=w[1],I=Math.floor(C/60),F=C-60*I,T=null!=M;Object(s.useEffect)((function(){B(n)}),[n]),Object(s.useEffect)((function(){var e=new Audio("https://freesound.org/data/previews/250/250629_4486188-lq.mp3");0===C&&(e.play(),"session"===g?(S("break"),B(x)):"break"===g&&(S("session"),B(n)))}),[C,g,x,n]);var E=C/n*100,J=C/x*100;return Object(r.jsx)("div",{className:"flex flex-col h-screen items-center justify-center bg-gray-100",children:Object(r.jsxs)("div",{className:"flex w-full justify-around",children:[Object(r.jsx)(u,{decSeshLengthOneMin:function(){var e=n-60;e>0&&c(e)},incSeshLengthOneMin:function(){var e=n+60;e<=3600&&c(e)},seshMinutes:o,seshSeconds:a}),Object(r.jsxs)(d.a,{value:"session"===g?E:"break"===g?J:void 0,children:[Object(r.jsx)(l,{seshLength:n,breakLength:x,secsLeft:F,minsLeft:I,currentSeshType:g,isStarted:T,handleStartStopClick:function(){if(T)clearInterval(M),N(null);else{var e=setInterval((function(){B((function(e){return e-1}))}),1e3);N(e)}}}),Object(r.jsx)("button",{onClick:function(){clearInterval(M),N(null),S("session"),c(1500),f(300),B(1500)},className:"button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",children:"Reset"})]}),Object(r.jsx)(i,{decBreakLengthOneMin:function(){var e=x-60;e>0&&f(e)},incBreakLengthOneMin:function(){var e=x+60;e<=3600&&f(e)},breakMinutes:v,breakSeconds:p})]})})}var j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.1c732bf7.chunk.js.map