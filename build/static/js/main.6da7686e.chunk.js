(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[0],{304:function(e,n,t){e.exports=t(632)},309:function(e,n,t){},310:function(e,n,t){},336:function(e,n){},352:function(e,n){},354:function(e,n){},370:function(e,n){},372:function(e,n){},562:function(e,n){},632:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),s=t(16),c=t.n(s),o=t(294),i=(t(309),t(67)),l=(t(310),t(663)),m=t(666),u=t(139),p=t(668),g=t(669),h=t(670),d=t(672),f=t(671),b=t(673),v=t(295),E=t(189),O=t(292),j=t.n(O);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var S,w=Object(a.createContext)(),k={general:[{from:"ehalsmer",message:"Hello!",channel:"general"},{from:"lonavarro",message:"asdf",channel:"general"},{from:"anmoore",message:"Test test test!",channel:"general"}],questions:[{from:"ehalsmer",message:";oij3rn34n142,r v wer l342",channel:"questions"},{from:"user982",message:"What?",channel:"questions"},{from:"pumpkin",message:"Hi everyone",channel:"questions"},{from:"ehalsmer",message:"Stuff and things",channel:"questions"}],off_topic:[{from:"anmoore",message:"24kj4hlknsd !",channel:"off_topic"},{from:"lonavarro",message:"What lovely weather we're having",channel:"off_topic"},{from:"anmoore",message:"...",channel:"off_topic"}]},N=function(e,n){var t=n.payload,a=t.from,r=t.message,s=t.channel;switch(n.type){case"RECEIVE_MESSAGE":return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){Object(E.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,Object(E.a)({},s,[].concat(Object(v.a)(e[s]),[{from:a,message:r,channel:s}])));default:return e}},x=function(e){S.emit("chat message",e)},I="user"+(100*Math.random()).toFixed(0),P=function(e){var n=Object(a.useReducer)(N,k),t=Object(i.a)(n,2),s=t[0],c=t[1];return S||(S=j()()).on("chat message",(function(e){c({type:"RECEIVE_MESSAGE",payload:e})})),r.a.createElement(w.Provider,{value:{allMessages:s,sendMessageAction:x,user:I}},e.children)},C=Object(l.a)((function(e){return{root:{margin:"50px",padding:e.spacing(3,2)},flex:{display:"flex",alignItems:"center"},channelsWindow:{width:"30%",height:"300px",borderRight:"1px solid grey"},chatWindow:{width:"70%",height:"300px",padding:"20px"},chatBox:{width:"85%"},chatButton:{width:"15%"},chip:{margin:"4px"}}})),U=function(){var e=Object(a.useContext)(w),n=e.allMessages,t=e.sendMessageAction,s=e.user,c=Object.keys(n),o=Object(a.useState)(c[0]),l=Object(i.a)(o,2),v=l[0],E=l[1],O=Object(a.useState)(""),j=Object(i.a)(O,2),y=j[0],S=j[1],k=C();return r.a.createElement(m.a,{className:k.root},r.a.createElement(u.a,{variant:"h4",component:"h4"},"Blockchat"),r.a.createElement(u.a,{variant:"h5",component:"h5"},v),r.a.createElement("div",{className:k.flex},r.a.createElement("div",{className:k.channelsWindow},r.a.createElement(p.a,null,c.map((function(e){return r.a.createElement(g.a,{onClick:function(e){return E(e.target.innerText)},key:e,button:!0},r.a.createElement(h.a,{primary:e}))})))),r.a.createElement("div",{className:k.chatWindow},n[v].map((function(e,n){return r.a.createElement("div",{className:k.flex,key:n},r.a.createElement(b.a,{size:"small",label:e.from,className:k.chip}),r.a.createElement(u.a,{variant:"body1"},e.message))})))),r.a.createElement("div",{className:k.flex},r.a.createElement(d.a,{margin:"normal",label:"Type message here",className:k.chatBox,value:y,onChange:function(e){return S(e.target.value)}}),r.a.createElement(f.a,{type:"submit",variant:"contained",color:"primary",className:k.button,onClick:function(){t({from:s,message:y,channel:v}),S("")}},"Send")))},M=t(133),A=t(134),B=t(136),D=t(135),W=t(137),_=t(100),q="https://s3.amazonaws.com/onename/avatar-placeholder.png",H=function(e){function n(e){var t;return Object(M.a)(this,n),(t=Object(B.a)(this,Object(D.a)(n).call(this,e))).state={person:{name:function(){return"Anonymous"},avatarUrl:function(){return q}}},t}return Object(W.a)(n,e),Object(A.a)(n,[{key:"render",value:function(){var e=this.props,n=e.handleSignOut,t=e.userSession,a=this.state.person;return t.isSignInPending()?null:r.a.createElement("div",{className:"panel-welcome",id:"section-2"},r.a.createElement("div",{className:"avatar-section"},r.a.createElement("img",{src:a.avatarUrl()?a.avatarUrl():q,className:"img-rounded avatar",id:"avatar-image",alt:""})),r.a.createElement("h1",null,"Hello, ",r.a.createElement("span",{id:"heading-name"},a.name()?a.name():"Nameless Person"),"!"),r.a.createElement("p",{className:"lead"},r.a.createElement("button",{className:"btn btn-primary btn-lg",id:"signout-button",onClick:n.bind(this)},"Logout")))}},{key:"componentWillMount",value:function(){var e=this.props.userSession;this.setState({person:new _.Person(e.loadUserData().profile)})}}]),n}(a.Component),R=function(e){function n(){return Object(M.a)(this,n),Object(B.a)(this,Object(D.a)(n).apply(this,arguments))}return Object(W.a)(n,e),Object(A.a)(n,[{key:"render",value:function(){var e=this.props.handleSignIn;return r.a.createElement("div",{className:"panel-landing",id:"section-1"},r.a.createElement("h1",{className:"landing-heading"},"Hello, Blockstack!"),r.a.createElement("p",{className:"lead"},r.a.createElement("button",{className:"btn btn-primary btn-lg",id:"signin-button",onClick:e.bind(this)},"Sign In with Blockstack")))}}]),n}(a.Component);var T=function(){var e=new _.AppConfig,n=new _.UserSession({appConfig:e,redirectPath:"https://react-node-eg.herokuapp.com/"});console.log("userSession",n),console.log("isLoggedIn()",n.isUserSignedIn());var t=Object(a.useState)(),s=Object(i.a)(t,2),c=s[0],o=s[1];return Object(a.useEffect)((function(){n.isSignInPending()&&n.handlePendingSignIn().then((function(e){window.history.replaceState({},document.title,"/"),o(e)}))}),[c]),r.a.createElement(P,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",null,"Signed in: ",n.isUserSignedIn().toString()),n.isUserSignedIn()?r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{userSession:n,handleSignOut:function(e){e.preventDefault(),n.signUserOut(window.location.origin)}})):r.a.createElement(R,{userSession:n,handleSignIn:function(e){e.preventDefault(),n.redirectToSignIn()}}),r.a.createElement(U,null)))};c.a.render(r.a.createElement(o.a,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[304,1,2]]]);
//# sourceMappingURL=main.6da7686e.chunk.js.map