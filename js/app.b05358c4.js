(function(e){function t(t){for(var a,r,i=t[0],l=t[1],s=t[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4c346706"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"c5d9ddbb"}[e]+".css",o=l.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],u=s.getAttribute("data-href");if(u===a||u===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],b.parentNode.removeChild(b),n(c)},b.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/test-0319/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var b=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1344:function(e,t,n){"use strict";n("f8f3")},"169f":function(e,t,n){e.exports=n.p+"img/home-2.b6848ac8.jpeg"},"1d46":function(e,t,n){e.exports=n.p+"img/home-1.1655932e.jpeg"},"215a":function(e,t){e.exports="data:image/png;base64,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"},"281b":function(e,t,n){"use strict";n("a936")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");n("7b17");function r(e,t,n,r,o,c){var i=Object(a["C"])("NavBar"),l=Object(a["C"])("router-view"),s=Object(a["C"])("Footer");return Object(a["v"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(i),Object(a["k"])(l,null,{default:Object(a["I"])((function(e){var t=e.Component;return[Object(a["k"])(a["b"],{name:"fade-transform",mode:"out-in","enter-from-class":"fade-transform-enter"},{default:Object(a["I"])((function(){return[(Object(a["v"])(),Object(a["e"])(Object(a["D"])(t)))]})),_:2},1024)]})),_:1}),Object(a["k"])(s)],64)}var o=n("215a"),c=n.n(o),i={class:"navbar fixed-top navbar-expand-lg navbar-light bg-light",style:{"background-color":"#e3f2fd"}},l={class:"container-fluid"},s=Object(a["h"])("img",{src:c.a,alt:"",width:"120",height:"40",style:{"object-fit":"cover"},class:"d-inline-block align-text-top"},null,-1),u={class:"navbar-toggler ms-auto",ref:"toggleBtn",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},d=Object(a["h"])("span",{class:"navbar-toggler-icon"},null,-1),b=[d],f={class:"collapse navbar-collapse",id:"navbarNavDropdown"},p={class:"navbar-nav mx-auto"},m={class:"nav-item"},v=Object(a["j"])("首页"),h={class:"nav-item dropdown"},A=Object(a["h"])("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," 学情报告 ",-1),g={class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},j=Object(a["j"])("2021年10月份"),O=Object(a["j"])("2021年11月份"),D=Object(a["j"])("2021年12月份"),B={class:"nav-item"},C=Object(a["j"])("關於我們");function y(e,t,n,r,o,c){var d=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["g"])("nav",i,[Object(a["h"])("div",l,[Object(a["k"])(d,{class:"navbar-brand",to:"/"},{default:Object(a["I"])((function(){return[s]})),_:1}),Object(a["h"])("button",u,b,512),Object(a["h"])("div",f,[Object(a["h"])("ul",p,[Object(a["h"])("li",m,[Object(a["k"])(d,{class:"nav-link cancel",to:"/"},{default:Object(a["I"])((function(){return[v]})),_:1})]),Object(a["h"])("li",h,[A,Object(a["h"])("ul",g,[Object(a["h"])("li",null,[Object(a["k"])(d,{class:"dropdown-item cancel",to:"/reporter-oct/"},{default:Object(a["I"])((function(){return[j]})),_:1})]),Object(a["h"])("li",null,[Object(a["k"])(d,{class:"dropdown-item cancel",to:"/reporter-nov/"},{default:Object(a["I"])((function(){return[O]})),_:1})]),Object(a["h"])("li",null,[Object(a["k"])(d,{class:"dropdown-item cancel",to:"/reporter-dec/"},{default:Object(a["I"])((function(){return[D]})),_:1})])])]),Object(a["h"])("li",B,[Object(a["k"])(d,{class:"nav-link cancel",to:"/about/"},{default:Object(a["I"])((function(){return[C]})),_:1})])])])])])}n("d3b7"),n("159b");var E={data:function(){return{tmpdata:"hahaha"}},methods:{test:function(){console.log(this.$refs.toggleBtn),this.$refs.toggleBtn.click()}},mounted:function(){var e=this;console.log(window.innerWidth);var t=document.querySelectorAll(".cancel");console.log(t),t.forEach((function(t){t.addEventListener("click",(function(){window.innerWidth<1e3&&e.$refs.toggleBtn.click()}))}))}},G=(n("1344"),n("6b0d")),w=n.n(G);const k=w()(E,[["render",y]]);var x=k,I={class:"footer"},H=Object(a["h"])("footer",{class:"text-white text-center",style:{"background-color":"rgba(10, 66, 117, 0.6)"}},[Object(a["h"])("div",{class:"text-center p-3",style:{"background-color":"rgba(10, 66, 117, 0)"}}," © 2022 Copyright: 富士康大学 ")],-1),T=[H];function q(e,t,n,r,o,c){return Object(a["v"])(),Object(a["g"])("div",I,T)}var P={};n("d30d");const W=w()(P,[["render",q]]);var z=W,L={components:{NavBar:x,Footer:z},data:function(){},methods:{},mounted:function(){}};n("281b");const N=w()(L,[["render",r]]);var F=N,J=(n("3ca3"),n("ddb0"),n("6c02")),X=n("1d46"),Z=n.n(X),Y=n("169f"),S=n.n(Y),R={id:"app"},M=Object(a["i"])('<div class="cover"><h1>富士康大学</h1><br><h3>成为卓越的企业大学</h3></div><div class="container"><div class="introduction"><h2 class="mb-5">富士康大学简介</h2><div class="row mt-md-5"><div class="col-md-4" data-aos="fade-up" data-aos-delay="200"><img src="'+Z.a+'" alt="" srcset=""><h3 class="mt-3">企业大学</h3><p class="mt-2"> 富士康大学是富士康科技集团在国内举办并面向全球各厂区的企业大学。 是将为企业培养输送有创新（Innovation）意识和创业（Entrepreneur） 企图心的人才作为学院的使命，同时将富士康先进的制造技术、科研成果和前沿管理理念转化为现实生产力 （Impactability Engineering）。 </p></div><div class="col-md-4" data-aos="fade-up"><img src="'+S.a+'" alt="" srcset=""><h3 class="mt-3">学历教育</h3><p class="mt-2"> 学院先后与清华大学、北京大学、浙江大学、西安交通大学、哈尔滨工业大学等知名院校及国内外著名专业咨询机构合作﹐ 开办150多个学历教育班﹐专业涵盖工业工程、电子与通信工程、机械工程、软体工程材料、电脑科学与技术、人力资源管理等， 员工进校不离岗﹐不出门就能念完国内名牌大学的博士、硕士或本科、大专课程。为统筹共用教学资源﹐实现集团各厂区同步学习﹐ 自2007年开始在北京、烟台、松江、太原、昆山、杭州等19个厂区建立工业互联网学院分院。 </p></div><div class="col-md-4" data-aos="fade-up" data-aos-delay="400"><img src="https://learn.foxconnedu.com/img/img-444-1076x717.3dad680b.jpg" alt="" srcset=""><h3 class="mt-3">管理知识与技能培训</h3><p class="mt-2"> 学院定期对各级干部由上而下分层级实施集中封闭与拓展训练﹐利用长假为干部“充电”﹐ 规划干部学习新的观念、方法、技能﹐促进干部之间的了解、交流、融合﹐使新提拔干部从技术走向管理﹐增强团队建设、 人际沟通能力﹐使资深干部增强团队战斗力、业务开创力及经营管制力﹐使高阶主管增强策略规划力、预算与危机管理力。 </p></div></div></div></div><div class="fullSection"><h3 class="mb-4">IE技术和手法培训</h3><p> IE (Industrial Engineering)知识与手法学习是富士康人的必修课﹐从干部到一线员工均参加学习﹐ 从基本改善技能和管理理念上提升学员的改善能力﹐然后辅导学员回到本职岗位进行工作改善﹐使全员在设计、制造、品管、 物流等各方面运用IE思想去发掘、分析问题﹐运用IE手法去解决问题。其中如开展“快马加鞭”专案，对集团25,000位线组长及近200,000万现场作业人员进行IE手法培训，将IE及改善理念扎根到员工心中，运用到每个角落。 学院建有E-learning网上学习平台﹐该平台拥有网路学院和VOD随选式两套系统，充分利用其低成本的优势﹐通过IT及数位技术﹐为学员提供“多元化”学习资源、“弹性化”学习时间、“简易化”学习介面、“人性化”学习环境。 </p></div><div class="container mt-5"><div class="row d-flex"><div class="col-md-5"><img src="https://learn.foxconnedu.com/img/268283098-3070715976588314-4600483778913783228-n-1076x717.b0d5133f.jpg" alt="" srcset="" width="100%"></div><div class="col-md-6 d-flex flex-column justify-content-center" data-aos="fade-left" data-aos-duration="700"><h4 class="mt-3 mb-2">富士康大学功能</h4><p> 具创新思维及创业企图心之人才养成 配合留才开展学历教育，指导毕业生结合研发、生产及相关专业岗位开展研究与实验，撰写高品质论文 关键人才管理技能及技术提升训练。干部管理技能提升训练 配合技委会之应知应会训练 申报建立博士后工作站，开展校企交流与合作，以暑期实习、奖教助学吸引优秀人才加入集团 新产品/新制程/错误工程示范/提案改善摄影纪录及教育训练 </p></div></div></div>',4),U=[M];function K(e,t,n,r,o,c){return Object(a["v"])(),Object(a["g"])("div",R,U)}var Q=n("f5af"),V=n.n(Q),_=(n("e829"),{data:function(){return{imgUrl:"https://learn.foxconnedu.com/img/06.6fb3d218.jpg",imgUrl2:n("cf05")}},methods:{},mounted:function(){V.a.init()}});n("77a7");const $=w()(_,[["render",K]]);var ee=$,te=[{path:"/",name:"Home",component:ee},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/reporter-oct/",name:"oct",component:function(){return n.e("about").then(n.bind(null,"0630"))}},{path:"/reporter-nov/",name:"nov",component:function(){return n.e("about").then(n.bind(null,"2ef8"))}},{path:"/reporter-dec/",name:"dec",component:function(){return n.e("about").then(n.bind(null,"b935"))}}],ne=Object(J["a"])({history:Object(J["b"])(),routes:te}),ae=ne;Object(a["d"])(F).use(ae).mount("#app")},"73ed":function(e,t,n){},"75af":function(e,t,n){},"77a7":function(e,t,n){"use strict";n("73ed")},a936:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d30d:function(e,t,n){"use strict";n("75af")},f8f3:function(e,t,n){}});
//# sourceMappingURL=app.b05358c4.js.map