(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{114:function(A,e,t){},191:function(A,e,t){"use strict";t.r(e);var n=t(0),i=t.n(n),r=t(16),a=t.n(r),c=(t(114),t(198)),s=t(10),o=t(11),l=t(104),g=t.n(l),j=t(21),d=t.n(j),b=t(36),I=t.n(b),V=t(12),u=t(14),x=t.n(u),m="#1D3557",C="#457B9D",B="#F2F2F2",h="#858585",O="#FFFFFF",f=t(105),p=t(102),E=t.n(p),w=t(1),D=Object(V.makeStyles)({button:{borderRadius:5,marginRight:15},menu:{"& .MuiPaper-root":{backgroundColor:C}}}),v=function(A){var e=Object(o.a)({},A),t=e.title,i=e.children,r=D(),a=Object(n.useState)(!1),c=Object(f.a)(a,2),s=c[0],l=c[1],g=Object(n.useRef)(null);return Object(w.jsxs)(I.a,{ref:g,className:r.button,onClick:function(){l(!s)},children:[Object(w.jsx)(x.a,{variant:"h6",children:t}),Object(w.jsx)(E.a,{className:r.menu,id:"".concat(t,"-menu"),anchorEl:g.current,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},open:s,children:i})]},t)},Q=t(103),S=t.n(Q),k=Object(V.makeStyles)({menuOption:{color:O}}),y=function(A){var e=Object(o.a)({},A),t=e.title,n=e.route,i=k(),r=Object(s.f)();return Object(w.jsx)(S.a,{className:i.menuOption,onClick:function(){!function(A){r.push(A)}(n)},children:Object(w.jsx)(x.a,{variant:"h6",children:t})},n)},H=Object(V.makeStyles)({appBar:{backgroundColor:m,height:50},box:{display:"flex",flexDirection:"row",flexGrow:1,alignItems:"center",marginLeft:15},button:{borderRadius:5,marginRight:15}}),P=function(A){var e=Object(o.a)({},A).options,t=H(),n=Object(s.f)();return Object(w.jsx)(g.a,{className:t.appBar,children:Object(w.jsx)(d.a,{className:t.box,children:e.map((function(A){return A.subRoutes?Object(w.jsx)(v,{title:A.title,children:A.subRoutes.map((function(e){var t="".concat(A.route).concat(e.route);return Object(w.jsx)(y,{title:e.title,route:t},t)}))}):Object(w.jsx)(I.a,{className:t.button,onClick:function(){return e=A.route,void n.push(e);var e},children:Object(w.jsx)(x.a,{variant:"h6",children:A.title})},A.route)}))})})},U=t(55),F=t.n(U),N=t(56),T=t.n(N),R=t(54),L=t.n(R),Y=Object(V.makeStyles)({info:{color:h}}),q=function(A){var e=Object(o.a)({},A),t=e.children,n=e.link,i=Y();return Object(w.jsx)(L.a,{className:i.info,onClick:function(){return window.open(n,"_blank")},children:t})},W=Object(V.makeStyles)({box:{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"},buttonBox:{display:"flex",justifyContent:"center"},text:{color:h}}),M=function(A){var e=W();return Object(w.jsxs)(d.a,{className:e.box,children:[Object(w.jsx)(x.a,{className:e.text,children:"Contact Me"}),Object(w.jsxs)(d.a,{className:e.buttonBox,children:[Object(w.jsx)(q,{link:"https://github.com/therealkylepacheco",children:Object(w.jsx)(F.a,{})}),Object(w.jsx)(q,{link:"https://linkedin.com/in/kyle-pacheco",children:Object(w.jsx)(T.a,{})})]})]})},X=t(18),J=t.n(X),z=Object(V.makeStyles)({title:{color:m,maxWidth:450},content:{display:"flex",alignItems:"center",justifyContent:"flex-start",width:"100%"},body:{maxWidth:450},image:{maxWidth:315,maxHeight:280}}),G={imgPosition:"right"},Z=function(A){var e=Object(o.a)(Object(o.a)({},G),A),t=e.title,n=e.body,i=e.img,r=e.alt,a=e.imgPosition,c=z();return Object(w.jsxs)(J.a,{item:!0,container:!0,alignItems:"center",xs:12,spacing:3,children:[i&&"left"===a&&Object(w.jsx)(J.a,{item:!0,children:Object(w.jsx)("img",{src:i,alt:r,className:c.image})}),Object(w.jsx)(J.a,{item:!0,children:Object(w.jsxs)(d.a,{children:[t&&Object(w.jsx)(x.a,{className:c.title,variant:"h5",children:t}),n&&Object(w.jsx)(x.a,{className:c.body,variant:"body1",children:n})]})}),i&&"right"===a&&Object(w.jsx)(J.a,{item:!0,children:Object(w.jsx)("img",{src:i,alt:r,className:c.image})})]})},K=Object(V.makeStyles)({title:{color:m,marginTop:15}}),_=function(A){var e=Object(o.a)({},A).text,t=K();return Object(w.jsx)(x.a,{variant:"h2",className:t.title,children:e})},$=Object(V.makeStyles)({title:{color:m,marginTop:25}}),AA=function(A){var e=Object(o.a)({},A).title,t=$();return Object(w.jsx)(x.a,{className:t.title,variant:"h4",children:e})},eA=function(A){var e=Object(o.a)({},A),t=e.children,n=e.sectionTitle;return Object(w.jsxs)(w.Fragment,{children:[n&&Object(w.jsx)(AA,{title:n}),Object(w.jsx)(J.a,{item:!0,container:!0,spacing:3,justifyContent:"flex-start",alignItems:"center",children:t})]})},tA=t.p+"static/media/me.0e3312a3.png",nA=Object(V.makeStyles)({title:{color:m},content:{display:"flex",alignItems:"center",flexDirection:"column"},image:{maxWidth:250,maxHeight:100}}),iA=function(A){var e=Object(o.a)({},A),t=e.title,n=e.img,i=e.alt,r=nA();return Object(w.jsx)(J.a,{item:!0,xs:12,sm:4,children:Object(w.jsxs)(d.a,{className:r.content,children:[Object(w.jsx)("img",{src:n,alt:i,className:r.image}),Object(w.jsx)(d.a,{children:Object(w.jsx)(x.a,{className:r.title,variant:"h5",children:t})})]})})},rA=t.p+"static/media/agile.7d7a6673.png",aA=t.p+"static/media/c.da6ce098.png",cA=t.p+"static/media/cPlusPlus.018a61ee.png",sA=t.p+"static/media/go.4482ddc7.png",oA=t.p+"static/media/isu.e778ddf5.png",lA=t.p+"static/media/java.c2d9a0f7.png",gA=t.p+"static/media/kount.f92f4340.png",jA=t.p+"static/media/liiingo.7d60b73a.png",dA=t.p+"static/media/nnu.0d4d53a2.png",bA=t.p+"static/media/php.9e4fe8e6.png",IA=t.p+"static/media/reactJs.396d3bf9.png",VA=t.p+"static/media/redux.1b4bb5fc.png",uA=t(199),xA=Object(V.makeStyles)({info:{color:m},box:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}),mA=function(A){var e=Object(o.a)({},A),t=e.children,n=e.link,i=e.title,r=xA();return Object(w.jsxs)(d.a,{className:r.box,children:[Object(w.jsx)(L.a,{className:r.info,onClick:function(){return window.open(n,"_blank")},children:t}),Object(w.jsx)(x.a,{className:r.info,variant:"h4",children:i})]})},CA=Object(c.a)({icon:{fontSize:120}}),BA=[{comp:function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(_,{text:"Kyle Pacheco"}),Object(w.jsx)(eA,{children:Object(w.jsx)(Z,{body:" Hi! My name is Kyle Pacheco, and I'm a software developer in Boise, ID. Software development is an incredibly interesting career so far. Building out new products and solving complex problems while collaborating with my teammates are the highlights of my  day to day. Both frontend and backend development interest me and I have experience in both. Outside of work, I enjoy reading and trying new things with my friends.  ",img:tA,alt:"Kyle Pacheco",imgPosition:"left"})})]})},title:"Home",route:"/"},{comp:function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(_,{text:"About"}),Object(w.jsxs)(eA,{sectionTitle:"Experience",children:[Object(w.jsx)(Z,{title:"Software Developer, Liiingo (2021-Present)",body:"I currently work as a software developer at Liiingo. The majority of my work is on the front end of a web app in ReactJS. I build custom components based on feature requests, implement UX designs, and interact with a Redux state store.",img:jA,alt:"Liiingo"}),Object(w.jsx)(Z,{title:"Software Engineer, In Time Tec (2020-2021)",body:"At In Time Tec, I worked contracted out to Kount where I was a software developer on the CPE team. I worked improving the current product through bug fixes, adding features, and improving the user experience.",img:"data:image/png;base64,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",alt:"In Time Tec"}),Object(w.jsx)(Z,{title:"Software Development Engineer in Test Intern, Kount (Summer 2019)",body:"This was a summer internship with the Boise, ID based company Kount. My summer project was to design a command line interface for internal use. Upon completion, I worked on cross-project triggering and status attribution in GitLab.",img:gA,alt:"Kount"})]}),Object(w.jsxs)(eA,{sectionTitle:"Education",children:[Object(w.jsx)(Z,{title:"Northwest Nazarene University, BS Computer Science",body:"I attended NNU and earned my BS in Computer Science over the course of 2.5 years. During my time here, I served as the Computer Club Treasurer and IEEE Chapter secretary. I graduated in December 2019 Magna Cum Laude.",img:dA,alt:"NNU",imgPosition:"left"}),Object(w.jsx)(Z,{title:"Idaho State University, AA General Studies",body:"I earned my associate's degree concurrently in high school. This allowed me to complete my gen ed requirements rapidly and graduate ahead of schedule.",img:oA,alt:"ISU",imgPosition:"left"})]}),Object(w.jsx)(AA,{title:"Skills"}),Object(w.jsxs)(J.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:3,children:[Object(w.jsx)(iA,{title:"ReactJS",img:IA}),Object(w.jsx)(iA,{title:"Typescript",img:"data:image/png;base64,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"}),Object(w.jsx)(iA,{title:"PHP",img:bA}),Object(w.jsx)(iA,{title:"Go",img:sA}),Object(w.jsx)(iA,{title:"Java",img:lA}),Object(w.jsx)(iA,{title:"Redux",img:VA}),Object(w.jsx)(iA,{title:"Agile",img:rA}),Object(w.jsx)(iA,{title:"C++",img:cA}),Object(w.jsx)(iA,{title:"C",img:aA})]})]})},title:"About",route:"/about"},{title:"Projects",route:"/projects",subRoutes:[{comp:function(){return Object(w.jsx)(_,{text:"Prime Number Generator"})},title:"Prime",route:"/prime"},{comp:function(){return Object(w.jsx)(uA.a,{variant:"h1",children:"Chess"})},title:"Chess",route:"/chess"}]},{comp:function(){var A=CA();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(_,{text:"Contact Me"}),Object(w.jsxs)(J.a,{container:!0,justifyContent:"center",children:[Object(w.jsx)(J.a,{item:!0,xs:12,sm:6,children:Object(w.jsx)(mA,{title:"Github",link:"https://github.com/therealkylepacheco",children:Object(w.jsx)(F.a,{className:A.icon})})}),Object(w.jsx)(J.a,{item:!0,xs:12,sm:6,children:Object(w.jsx)(mA,{title:"LinkedIn",link:"https://linkedin.com/in/kyle-pacheco",children:Object(w.jsx)(T.a,{className:A.icon})})})]})]})},title:"Contact",route:"/contact"}],hA=Object(c.a)({app:{minHeight:"100vh",backgroundColor:B},content:{padding:50}});var OA=function(){var A=hA();return Object(w.jsxs)("div",{className:A.app,children:[Object(w.jsx)(P,{options:BA}),Object(w.jsx)("div",{className:A.content,children:Object(w.jsx)(s.c,{children:BA.map((function(A){return A.subRoutes?A.subRoutes.map((function(e){var t="".concat(A.route).concat(e.route);return Object(w.jsx)(s.a,{path:t,component:e.comp},t)})):Object(w.jsx)(s.a,{exact:"Home"===A.title,path:A.route,component:A.comp},A.route)}))})}),Object(w.jsx)(M,{})]})},fA=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,200)).then((function(e){var t=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;t(A),n(A),i(A),r(A),a(A)}))},pA=t(42);a.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(pA.a,{children:Object(w.jsx)(OA,{})})}),document.getElementById("root")),fA()}},[[191,1,2]]]);
//# sourceMappingURL=main.f63cd12e.chunk.js.map