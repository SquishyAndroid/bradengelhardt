(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{114:function(e,t){e.exports=[{name:"Javascript",class:"devicon-javascript-plain colored"},{name:"PHP",class:"devicon-php-plain colored"},{name:"Ruby on Rails",class:"devicon-rails-plain-wordmark colored"},{name:"React",class:"devicon-react-plain colored"},{name:"HTML5",class:"devicon-html5-plain colored"},{name:"Bootstrap",class:"devicon-bootstrap-plain colored"},{name:"Node.js",class:"devicon-nodejs-plain colored"},{name:"CSS3",class:"devicon-css3-plain-wordmark colored"},{name:"SASS",class:"devicon-sass-plain colored"},{name:"Webpack",class:"devicon-webpack-plain colored"},{name:"Wordpress",class:"devicon-wordpress-plain colored"},{name:"Git",class:"devicon-git-plain colored"}]},450:function(e,t,s){},451:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(12),i=s.n(n),o=s(29),c=s(112),r=s.n(c),l=s(113),d=s.n(l),h=s(2);const m={color:"white"},j={color:"#FF6363"},p={marginTop:"12px"};class b extends a.Component{constructor(e){super(e),this.state={text:""}}componentDidMount(){new d.a.WOW({live:!1}).init(),setTimeout((()=>{this.writeText("FULL STACK WEB DEVELOPER")}),1e3),setTimeout((()=>{0===this.props.fullpageApi.getActiveSection().index&&this.props.moveDown()}),4400)}writeText(e){let t=0,s=e.split(""),a="";setInterval((()=>{t<s.length&&(a+=s[t],this.setState({text:a}),t++)}),100)}render(){return Object(h.jsxs)("div",{className:"section first",children:[Object(h.jsxs)("div",{className:"text-container wow fadeInDown","data-wow-delay":"100ms",children:[Object(h.jsxs)("h1",{style:m,children:["BRAD",Object(h.jsx)("span",{style:j,children:"/"}),"ENGELHARDT"]}),Object(h.jsxs)("p",{style:p,children:[this.state.text,Object(h.jsx)("span",{id:"holder"}),Object(h.jsx)("span",{className:"blinking-cursor",children:"|"})]})]}),Object(h.jsx)("i",{id:"moveDown",className:"fas fa-chevron-down fa-3x bounce",onClick:()=>this.props.moveDown()})]})}}var g=s(454),x=s(11),u=s(114),f=s.n(u);class A extends a.Component{renderIcons(e){let t=500;return e.map((e=>(t+=90,Object(h.jsx)("div",{className:"dev-icon",children:Object(h.jsx)(g.e,{content:e.name,position:x.a.RIGHT,children:Object(h.jsx)("i",{className:e.class+" wow fadeInUp","data-wow-delay":t+"ms"})})},e.name))))}render(){return Object(h.jsxs)("div",{className:"section second",children:[Object(h.jsxs)("p",{className:"wow fadeInDown","data-wow-delay":"400ms",children:["Hi, I'm ",Object(h.jsx)("strong",{children:"Brad Engelhardt!"})," I'm a Silicon Valley based Full Stack Web Developer focused on creating clean, responsive websites & applications. Here are some of the tools I've used:"]}),Object(h.jsx)("br",{}),Object(h.jsx)("ul",{className:"dev-icons",children:this.renderIcons(f.a)})]})}}var w=[{name:"After School App",description:"A private social network for teens to connect and share with their peers at their school",image:s.p+"static/media/after_school.621892c1.png",url:"https://en.wikipedia.org/wiki/After_School_(app)"},{name:"NotifyMe",description:"Node.js & Express application for monitoring real time Twitter stream for caltrain delay alerts",image:s.p+"static/media/notify_me.f4b4115e.png",url:"http://textmeif.com/"},{name:"Eggplant Invaders",description:"Space Invaders style game created for sex awareness month using Phaser.js & Slim PHP",image:s.p+"static/media/eggplant_invaders.c3821af0.png",url:"https://squishyandroid.github.io/eggplantinvaders"},{name:"TinyMessage",description:"React based chat application utilizing Socket.io",image:s.p+"static/media/tinymessage.9d967964.png",url:"https://tinymessage.herokuapp.com/"},{name:"Machete Energy Drink",description:"Hollister, CA based Energy drink company",image:s.p+"static/media/machete.ab8950f4.png",url:"http://www.macheteenergy.com/"},{name:"xFaire",description:"A proof of concept video streaming service offering 4K-Ready Live TV",image:s.p+"static/media/xfaire.7d7d7719.png",url:"http://www.xfaire.com/"}],O=s(55),v=s.n(O),y=s(120),N=s(20);const B=y.a.div({hidden:{opacity:0},visible:{opacity:1,transition:{duration:300}}});class R extends a.Component{constructor(e){super(e),this.state={isOpen:!1,width:0,height:0,index:null}}handleMouseEnter(e,t){let s=t.target,a=s.offsetWidth,n=s.offsetHeight;this.setState({width:a,height:n,index:e})}handleMouseLeave(e,t){this.setState({index:null})}learnMore(e){if(e){window.open(e,"_blank").focus()}}renderProjects(e){let t=100;return e.map(((e,s)=>(t+=90,Object(h.jsxs)("div",{className:"project wow fadeInUp","data-wow-delay":t+"ms",onMouseEnter:this.handleMouseEnter.bind(this,s),onMouseLeave:this.handleMouseLeave.bind(this,s),children:[Object(h.jsxs)(B,{className:"project-description",pose:s===this.state.index?"visible":"hidden",style:{display:s===this.state.index?"flex":"none",width:this.state.width,height:this.state.height},children:[Object(h.jsx)("p",{children:e.description}),Object(h.jsx)(g.a,{className:"learn-more",intent:N.a.PRIMARY,onClick:()=>this.learnMore(e.url),children:"View more"})]}),Object(h.jsx)("img",{src:e.image,alt:e.description},s)]},s))))}render(){return Object(h.jsx)("div",{className:"section third",children:Object(h.jsx)(O.ResponsiveMasonry,{columnsCountBreakPoints:{100:2,480:3,1200:4},children:Object(h.jsx)(v.a,{columnsCount:3,gutter:"6px",children:this.renderProjects(w)})})})}}var E=s(118),I=s.n(E);const T=g.d.create({position:x.a.TOP});class k extends a.Component{constructor(e){super(e),this.state={name:"",email:"",message:"",sent:!1,buttonIcon:"fas fa-paper-plane"},this.handleForm=this.handleForm.bind(this),this.handleFields=this.handleFields.bind(this)}showToast(e,t){T.show({message:e,intent:t,timeout:3e3})}handleForm(e){e.preventDefault(),this.state.name&&this.state.email&&this.state.message&&!this.state.sent?I.a.post("https://formspree.io/f/mvovybao",{name:this.state.name,email:this.state.email,message:this.state.message},{headers:{Accept:"application/json"}}).then((e=>{console.log(e),200===e.status&&(this.showToast("Message sent!",N.a.SUCCESS),this.setState({buttonIcon:"fas fa-check-circle",sent:!0}))})).catch((e=>{console.log(e),this.showToast("There was an issue.",N.a.DANGER)})):this.showToast("Please complete all the fields and try again.",N.a.DANGER)}handleFields(e){this.setState({[e.target.name]:e.target.value})}render(){let e;return this.state.name&&this.state.email&&this.state.message.length>5?(e="submit-button",this.state.sent&&(e="submit-button sent disabled")):e="submit-button disabled",Object(h.jsxs)("div",{className:"section fourth",children:[Object(h.jsx)("p",{children:"Whether you're interested in working with me or just want to say hello, I'd love to hear from you!"}),Object(h.jsxs)("form",{onSubmit:this.handleForm,children:[Object(h.jsx)(g.b,{id:"name",name:"name",type:"text",className:"wow fadeInLeft",placeholder:"Name",large:"true",fill:"true",rounded:"true","data-wow-delay":"400ms",onChange:this.handleFields}),Object(h.jsx)(g.b,{id:"email",name:"email",type:"email",className:"wow fadeInRight",placeholder:"Email Address",large:"true",fill:"true",rounded:"true","data-wow-delay":"550ms",onChange:this.handleFields}),Object(h.jsx)(g.c,{id:"message",name:"message",className:"bp3-input wow fadeInLeft",placeholder:"Write a message",fill:"true",large:"true",rounded:"true","data-wow-delay":"300ms",onChange:this.handleFields}),Object(h.jsxs)("button",{className:e,type:"submit",children:["Submit",Object(h.jsxs)("span",{children:[" ",Object(h.jsx)("i",{className:this.state.buttonIcon})]})]})]})]})}}var D=()=>Object(h.jsx)("div",{className:"section fifth fp-auto-height",children:Object(h.jsxs)("div",{className:"footer social-links",children:[Object(h.jsx)("p",{children:"CONNECT WITH ME"}),Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"https://www.linkedin.com/in/bradleyengelhardt",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("i",{className:"fab fa-linkedin fa-2x"})})}),Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"https://twitter.com/bradengelhardt",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("i",{className:"fab fa-twitter fa-2x"})})}),Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"https://github.com/SquishyAndroid",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("i",{className:"fab fa-github fa-2x"})})}),Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"http://codepen.io/SquishyAndroid/pens/public/",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("i",{className:"fab fa-codepen fa-2x"})})})]})});var C=({moveToIntro:e,moveToAbout:t,moveToPortfolio:s,moveToContact:a})=>Object(h.jsxs)("div",{className:"nav-header",children:[Object(h.jsx)("div",{className:"nav-brand",children:Object(h.jsx)("img",{src:"data:image/png;base64,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",onClick:()=>e(),alt:"brand logo"})}),Object(h.jsx)("i",{className:"fa fa-bars fa-3x"}),Object(h.jsx)("div",{className:"header-links",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{"data-menuanchor":"fourthPage",children:Object(h.jsx)("a",{href:"#contact",id:"contact",onClick:()=>a(),children:"CONTACT"})}),Object(h.jsx)("li",{"data-menuanchor":"thirdPage",children:Object(h.jsx)("a",{href:"#portfolio",id:"projects",onClick:()=>s(),children:"PROJECTS"})}),Object(h.jsx)("li",{"data-menuanchor":"secondPage",children:Object(h.jsx)("a",{href:"#about",id:"about",onClick:()=>t(),children:"ABOUT"})})]})})]});var H=e=>Object(h.jsx)(r.a,Object(o.a)(Object(o.a)({},e),{},{render:({state:e,fullpageApi:t})=>{const s=()=>{t.moveTo(2)};return Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(C,{moveToIntro:()=>{t.moveTo(1)},moveToAbout:s,moveToPortfolio:()=>{t.moveTo(3)},moveToContact:()=>{t.moveTo(4)}}),Object(h.jsx)(b,{fullpageApi:t,moveDown:s}),Object(h.jsx)(A,{}),Object(h.jsx)(R,{}),Object(h.jsx)(k,{}),Object(h.jsx)(D,{})]})}})),F=s(119),M=s.n(F);const S=(e,t)=>{setTimeout((()=>{e.forEach((function(e){e.id===t?e.style.color="#FF6363":e.style.color="#757575"}))}),450)},J={scrollBar:!0,controlArrows:!1,licenseKey:"89192CAC-D37443B6-88C0505A-540BF775",onLeave:function(e,t,s){let a=document.querySelectorAll(".header-links a");switch(t.index){case 0:a.forEach((function(e){e.style.color="white"}));break;case 1:S(a,"about");break;case 2:S(a,"projects");break;case 3:S(a,"contact");break;default:a.forEach((function(e){e.style.color="#757575"}))}}};var V=()=>Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(M.a,{}),Object(h.jsx)(H,Object(o.a)({},J))]});s(450);i.a.render(Object(h.jsx)(V,{}),document.getElementById("root"))}},[[451,1,2]]]);
//# sourceMappingURL=main.7e4d56d9.chunk.js.map