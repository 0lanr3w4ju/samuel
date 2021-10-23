(this["webpackJsonplanredotcom-fe"]=this["webpackJsonplanredotcom-fe"]||[]).push([[0],{51:function(n,e,t){},54:function(n,e,t){},91:function(n,e,t){"use strict";t.r(e);var a,i,o,r,s,c,l,d,p,b,h,j,m,x,u,g,f,O,w=t(1),v=t.n(w),y=t(27),k=t.n(y),z=(t(51),t(20)),S=t(8),N=t(5),C=t(15),q=t(6),I=q.a.div(a||(a=Object(N.a)(["\n    height: 100vh;\n    ","\n    width: auto;\n    padding-top: 27vh;\n    margin-left: 7%;\n    margin-right: 7%;\n\n    @media (max-width: 425px) {\n        padding-top: 14vh;\n    }\n"])),""),M=t(98),A=t(99),B=q.a.div(i||(i=Object(N.a)(["\n    font-weight: bold;\n    font-size: 22px;\n    color: #f7fbff;\n    font-family: 'Noto Sans Mono', monospace;\n    span {display: none;}\n    &:hover {\n        span {\n            display: initial;\n            color: black;\n        }\n        cursor: pointer;\n    }\n\n    @media (max-width: 425px) {\n        font-size: 13px;\n        margin-left: 3px;\n    }\n"]))),F=q.a.div(o||(o=Object(N.a)(["\n    @media (max-width: 425px) {\n            font-size: 12px;\n            margin-left: 54px;\n            height: 50px;\n        }\n    }\n"]))),D=q.a.button(r||(r=Object(N.a)(["\n    height: 43px;\n    font-family: 'Noto Sans Mono', monospace;\n    font-weight: bold;\n    padding: 0.6em 1.6em;\n    margin: 0.6em;\n    border-style: solid;\n    border-width: 1px;\n    border-color: #f7fbff;\n    transition: all 0.2s ease;\n    background: transparent;\n    color: #f7fbff;\n    z-index: 1;\n    &:hover {\n        color: bisque;\n        text-shadow: 0 0 1px rgb(255 255 255 / 40%);\n        box-shadow: 0 0 0px 1px rgb(255 255 255 / 50%), 2px 2px 6px rgb(49 188 184 / 40%), -2px -2px 6px rgb(251 131 250 / 40%);\n        }\n        @media (max-width: 425px) {\n            height: 32px;\n        }\n"]))),E=(t(54),t(19)),T=t(28),L=t(92),H=t(93),J=t(94),P=t(95),Z=t(96),W=t(97),$=q.a.div(s||(s=Object(N.a)(["\n    text-align: left;\n    width: 750px;\n    padding: 1em;\n    border: 1px solid #d3d3d3;\n    border-radius: .4em;\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: rgba(255, 255, 255, 0.1);\n\n    @media (max-width: 425px) {\n        width: 304px;\n        padding: 2px;\n        margin-top: 15px;\n    }\n"]))),G=q.a.div(c||(c=Object(N.a)(["\n    padding: 1em !important;\n"]))),K=q.a.button(l||(l=Object(N.a)(["\n    display: block;\n    width: 100%;\n    border-radius: .25rem;\n    background: #007bff;\n    padding: .375rem .75rem;\n    font-weight: 400;\n    text-align: center;\n    border: none;\n    color: #fff;\n    -webkit-transition: background .15s ease-out;\n    -moz-transition: background .15s ease-out;\n    -o-transition: background .15s ease-out;\n    transition: background .15s ease-out;\n    &:hover {\n        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);\n        cursor: pointer;\n        opacity: 70%;\n        }\n"]))),Q=q.a.p(d||(d=Object(N.a)(["\n    color: white;\n"]))),R=q.a.div(p||(p=Object(N.a)(["\n    fontFamily: 'Noto Sans Mono, monospace',\n\n    @media (max-width: 425px) {\n        font-size: 13px;\n    }\n"]))),U=t(42),V=t.n(U),X=t(2),Y=function(){var n={fullname:"",email:"",comment:""},e=Object(w.useState)(""),t=Object(C.a)(e,2),a=t[0],i=t[1],o=Object(w.useState)(n),r=Object(C.a)(o,2),s=r[0],c=r[1],l=function(n){var e=n.target,t=e.name,a=e.value;c(Object(T.a)(Object(T.a)({},s),{},Object(E.a)({},t,a))),"email"===n.target.type&&d(n)},d=function(n){/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n.target.value)?i("has-success"):i("has-danger")};return Object(X.jsx)($,{children:Object(X.jsx)(L.a,{onSubmit:function(e){e.preventDefault();var t=s.fullname,a=s.email,o=s.comment;V.a.post("http://localhost:8000/contact/",{fullname:t,email:a,comment:o}).catch((function(n){n.response?(console.log(n.response.data),console.log(n.response.status),console.log(n.response.headers)):n.request?console.log(n.request):console.log("Error",n.message)})),i(""),c(n)},children:Object(X.jsxs)(G,{children:[Object(X.jsx)(H.a,{children:Object(X.jsx)(R,{children:Object(X.jsx)(J.a,{type:"textarea",name:"comment",placeholder:"Hi, what will you like me to do for you? \ud83d\ude07",onChange:l,style:{height:300},value:s.comment})})}),Object(X.jsxs)(P.a,{form:!0,children:[Object(X.jsx)(Z.a,{md:6,children:Object(X.jsx)(H.a,{children:Object(X.jsx)(R,{children:Object(X.jsx)(J.a,{type:"fullname",name:"fullname",placeholder:"please enter your fullname",onChange:l,value:s.fullname})})})}),Object(X.jsx)(Z.a,{md:6,children:Object(X.jsxs)(H.a,{children:[Object(X.jsx)(R,{children:Object(X.jsx)(J.a,{type:"email",name:"email",placeholder:"please enter your email",onChange:l,valid:"has-success"===a,invalid:"has-danger"===a,value:s.email})}),Object(X.jsx)(W.a,{children:Object(X.jsx)(Q,{children:"\ud83d\udc80 seems like there is an issue with your email, please address it."})})]})})]}),Object(X.jsx)(K,{type:"submit",style:{fontFamily:"Noto Sans Mono, monospace",fontWeight:"bold"},children:"Submit"})]})})})},_=q.a.div(b||(b=Object(N.a)(["\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: rgba(255, 255, 255, 0.1);\n    width: 80%;\n    height: 80%;\n    display: flex;\n    z-index: 0;\n    border-radius: 0.9em;\n\n    @media (max-width: 425px) {\n        margin-top: 15px;\n        width: 304px;\n        height: 465px;\n    }\n"]))),nn=q.a.img(h||(h=Object(N.a)(["\n    width: 38%;\n    height: 94%;\n    border-radius: 0.9em;\n    z-index: 1;\n    margin-top: 80px;\n    margin-left: 80px;\n    filter: grayscale(90%) brightness(150%);\n    box-shadow: 0 12px 41px black;\n\n    @media (max-width: 425px) {\n        display: none;\n    }\n"]))),en=q.a.div(j||(j=Object(N.a)(["\n    width: 38%;\n    height: 94%;\n    background-color: transparent;\n    z-index: 1;\n    margin-top: 80px;\n    margin-left: 80px;\n    align-items: left;\n\n    @media (max-width: 425px) {\n        width: 100%;\n        padding: 25px;\n        margin-left: 0px;\n        margin-top: 0px;   \n    }\n"]))),tn=q.a.h1(m||(m=Object(N.a)(["\n    font-family: 'Noto Sans Mono, monospace';\n    font-weight: bold;\n    font-size: 45px;\n    color: powderblue;\n    filter: opacity(81%);\n    border-top: 2px solid bisque;\n    padding-top: 20px;\n    padding-bottom: 12px;\n    span {\n        font-size: 21px;\n        color: bisque;\n        filter: opacity(81%);\n    }\n\n    @media (max-width: 425px) {\n        font-size: 16px;\n        span {\n            font-size: 17px;\n        }\n    }\n"]))),an=q.a.p(x||(x=Object(N.a)(["\n  font-size: 18px;\n  color: powderblue;\n  font-family: 'Noto Sans Mono, monospace';\n  filter: opacity(81%);\n\n  @media (max-width: 425px) {\n      font-size: 15px;\n  }\n"]))),on=q.a.div(u||(u=Object(N.a)(["\n    display: flex;\n    span {\n        padding-right: 30px;\n    };\n    a {\n        color: bisque;\n        filter: opacity(81%);\n    }\n\n    @media (max-width: 425px) {\n        margin-left: 83px;\n        span {\n            padding-right: 11px;\n        }\n        a {\n            font-size: 14px;\n        }\n    }\n"]))),rn=t.p+"static/media/DSC09324.c651f0f2.jpg",sn=t(21),cn=t(22),ln=function(){return Object(X.jsxs)(_,{children:[Object(X.jsx)(nn,{src:rn,alt:"olanrewaju"}),Object(X.jsxs)(en,{children:[Object(X.jsxs)(tn,{children:["Alawode Olanrewaju",Object(X.jsx)("br",{}),Object(X.jsx)("span",{children:"Software Engineer / Designer"})]}),Object(X.jsx)(an,{children:"I am an enthusiastic, nonstop learner, that's what I consider life to be all about, I also love to play chess. I enjoy thinking fast and random when brainstorming or being creative, I love asking questions, especially those that leads to talks of solution processes people would wish was available to get tasks done, this kind of discussions gives me a human-centered software type of design perspective, which I use in my development phases. This and more attributes makes me a better and faster developer of quality and working software programmes."}),Object(X.jsxs)(on,{children:[Object(X.jsx)("a",{href:"https://www.linkedin.com/in/olanrewaju-samuel-alawode-05374516b/",children:Object(X.jsx)(sn.a,{icon:cn.c,size:"lg"})}),Object(X.jsx)("span",{}),Object(X.jsx)("a",{href:"https://github.com/0lanr3w4ju?tab=repositories",children:Object(X.jsx)(sn.a,{icon:cn.b,size:"lg"})}),Object(X.jsx)("span",{}),Object(X.jsx)("a",{href:"https://dribbble.com/OlanrewajuDribble",children:Object(X.jsx)(sn.a,{icon:cn.a,size:"lg",spin:!0})})]})]})]})},dn=function(n){var e=n.setSelectedNavOption,t=function(n){"navbarButton1"===n.target.name&&e(Object(X.jsx)(ln,{})),"navbarButton2"===n.target.name&&e(Object(X.jsx)(Y,{}))};return Object(X.jsx)("div",{children:Object(X.jsxs)(M.a,{fixed:"top",className:"navbarStyle",children:[Object(X.jsx)(A.a,{href:"https://0lanr3w4ju.github.io/samuel/",children:Object(X.jsxs)(B,{children:["[0lanr3w4ju]: Lag05 based Software Engineer",Object(X.jsx)("span",{children:" = Ethical Hacker"})]})}),Object(X.jsxs)(F,{children:[Object(X.jsx)(D,{name:"navbarButton1",type:"button",onClick:t,children:"About me"}),Object(X.jsx)(D,{name:"navbarButton2",type:"button",onClick:t,children:"Contact me"})]})]})})},pn=q.a.footer(g||(g=Object(N.a)(["\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: transparent;\n    text-align: center;\n    color: bisque;\n"]))),bn=q.a.p(f||(f=Object(N.a)(["\n    font-size: 12px;\n    font-weight: bold;\n    font-family: 'Noto Sans Mono, monospace';\n"]))),hn=function(){return Object(X.jsx)(pn,{children:Object(X.jsx)(bn,{children:"\xa9 Olanrewaju Alawode 2021"})})},jn=t(43),mn=t.n(jn),xn=function(){var n=Object(w.useState)(""),e=Object(C.a)(n,2),t=e[0],a=e[1],i="fade",o=q.a.div(O||(O=Object(N.a)(["\n\n        height: 100%;\n\n        @media (max-width: 425px) {\n            height: 97%;\n        }\n\n        &.","-appear {\n            opacity: 0.01;\n        }\n\n        &.","-appear-active {\n            opacity: 1;\n            transition: opacity ","ms ease-out;\n        }\n\n        &.","-enter {\n            opacity: 0.01;\n        }\n\n        &.","-enter-active {\n            opacity: 1;\n            transition: opacity ","ms;\n        }\n\n        &.","-leave {\n            opacity: 1;\n        }\n\n        &.","-leave-active {\n            opacity: 0;\n            transition: opacity ","ms;\n        \n    }"])),i,i,500,i,i,800,i,i,800),r=function(){return Object(X.jsx)(mn.a,{transitionName:i,transitionAppear:!0,transitionAppearTimeout:500,children:Object(X.jsx)(o,{children:t})})};return Object(X.jsxs)(I,{children:[Object(X.jsx)(dn,{setSelectedNavOption:a}),Object(X.jsx)(r,{}),Object(X.jsx)(hn,{})]})},un=function(){return Object(X.jsx)(z.a,{children:Object(X.jsxs)(S.c,{children:[Object(X.jsx)(S.a,{path:"/",children:Object(X.jsx)(xn,{})}),Object(X.jsx)(S.a,{path:"/",children:Object(X.jsx)(xn,{})})]})})},gn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,100)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),a(n),i(n),o(n),r(n)}))};t(90);k.a.render(Object(X.jsx)(v.a.StrictMode,{children:Object(X.jsx)(z.a,{children:Object(X.jsx)(un,{})})}),document.getElementById("root")),gn()}},[[91,1,2]]]);
//# sourceMappingURL=main.fcf160a4.chunk.js.map