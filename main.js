!function(e){function t(t){for(var r,l,i=t[0],c=t[1],u=t[2],f=0,p=[];f<i.length;f++)l=i[f],a[l]&&p.push(a[l][0]),a[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={1:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=c;o.push([353,0]),n()}({100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=c(a),l=c(n(5)),i=c(n(51));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"client",value:function(){if(this.props.client)return o.default.createElement("div",{className:"col-xs-12 col-sm-12 subsection"},o.default.createElement(i.default,{title:"Client"}),o.default.createElement("p",null,this.props.client))}},{key:"role",value:function(){if(this.props.role)return o.default.createElement("div",{className:"col-xs-12 col-sm-12 subsection"},o.default.createElement(i.default,{title:"Role"}),o.default.createElement("p",null,this.props.role))}},{key:"team",value:function(){if(this.props.team)return o.default.createElement("div",{className:"col-xs-12 col-sm-12 subsection"},o.default.createElement(i.default,{title:"Team"}),o.default.createElement("p",null,this.props.team))}},{key:"year",value:function(){if(this.props.team)return o.default.createElement("div",{className:"col-xs-12 col-sm-12 subsection"},o.default.createElement(i.default,{title:"Year"}),o.default.createElement("p",null,this.props.year))}},{key:"render",value:function(){return o.default.createElement("div",{className:""},o.default.createElement("div",{className:"row setup"},this.client(),this.year(),this.role(),this.team()))}}]),t}();u.propTypes={client:l.default.string,role:l.default.string,team:l.default.string,year:l.default.number},t.default=u},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=s(a),l=s(n(5)),i=s(n(51)),c=s(n(165)),u=s(n(80));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"title",value:function(){if(this.props.title)return o.default.createElement(i.default,{title:this.props.title})}},{key:"text",value:function(){if(this.props.text)return o.default.createElement("p",null,this.props.text)}},{key:"quote",value:function(){if(this.props.quote)return o.default.createElement(c.default,{quote:this.props.quote})}},{key:"img",value:function(){if(this.props.img)return o.default.createElement(u.default,{img:this.props.img})}},{key:"render",value:function(){return o.default.createElement("div",{className:"section row"},o.default.createElement("div",{className:"col-xs-12 col-sm-12 section__title"},this.title()),o.default.createElement("div",{className:"col-xs-12 col-sm-12 section__text"},this.text()),o.default.createElement("div",{className:"col-xs-12 col-sm-12 section__quote"},this.quote()),o.default.createElement("div",{className:"col-xs-12 col-sm-12 section__img"},this.img()))}}]),t}();f.propTypes={title:l.default.string,text:l.default.string,quote:l.default.string,img:l.default.string},t.default=f},102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=c(a),l=c(n(5)),i=c(n(51));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"problem",value:function(){if(this.props.problem)return o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-xs-12 col-sm-12 section"},o.default.createElement(i.default,{title:"The Problem"}),o.default.createElement("p",null,this.props.problem)))}},{key:"solution",value:function(){if(this.props.solution)return o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-xs-12 col-sm-12 section"},o.default.createElement(i.default,{title:"The Solution"}),o.default.createElement("p",{className:"section-quote"},this.props.solution)))}},{key:"render",value:function(){return o.default.createElement("div",{className:"header"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-xs-12 col-sm-12"},o.default.createElement("div",{className:"header__title title"},this.props.title),o.default.createElement("div",{className:"header__tags"},this.props.tags.map(function(e){return o.default.createElement("span",{key:e.toString(),value:e,className:"badge"},e)})))),o.default.createElement("div",{className:"header__splash",style:{backgroundImage:"url("+this.props.splash+")"}}),this.problem(),this.solution())}}]),t}();u.propTypes={tags:l.default.array,title:l.default.string,splash:l.default.string,problem:l.default.string,solution:l.default.string},t.default=u},103:function(e,t,n){e.exports=n.p+"images/hosp.jpg"},104:function(e,t,n){e.exports=n.p+"images/dci.jpg"},154:function(e,t,n){e.exports=n.p+"images/dtbar.svg"},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=p(a),l=p(n(102)),i=p(n(103)),c=p(n(101)),u=p(n(100)),s=p(n(99)),f=p(n(154));function p(e){return e&&e.__esModule?e:{default:e}}var d=["UX Research","Dev"],m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"portfolio-page dev"},o.default.createElement(l.default,{title:"Environmental Design Research & Development",tags:d,splash:i.default,problem:"After the 2017.3 upgrade, TeleTracking customers were experiencing eye fatigue when using the IQ platform.",solution:"Using the design thinking framework, we uncovered a surprising myriad of factors contributing to this problem, and addressed each of them. Key changes included increased contrast, text rendering improvements, and a “night” color theme."}),o.default.createElement("div",{className:"row section"},o.default.createElement("div",{className:"col-xs-12 col-sm-6"},o.default.createElement(u.default,{client:"TeleTracking",role:"UX Researcher, UI Designer, UI Developer",team:"Jamie Slater, Jason Spector",year:2018})),o.default.createElement("div",{className:"col-xs-12 col-sm-6 subsection"})),o.default.createElement(c.default,{title:"Process",img:f.default}),o.default.createElement(s.default,null))}}]),t}();t.default=m},156:function(e,t,n){e.exports=n.p+"images/proposal3.jpg"},157:function(e,t,n){e.exports=n.p+"images/proposal2.jpg"},158:function(e,t,n){e.exports=n.p+"images/proposal1.jpg"},159:function(e,t,n){e.exports=n.p+"images/guide.jpg"},160:function(e,t,n){e.exports=n.p+"images/document.jpg"},161:function(e,t,n){e.exports=n.p+"images/brochure.jpg"},162:function(e,t,n){e.exports=n.p+"images/banners.jpg"},163:function(e,t,n){e.exports=n.p+"images/logo_after.png"},164:function(e,t,n){e.exports=n.p+"images/logo_before.png"},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=i(a),l=i(n(5));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"section-quote"},this.props.quote)}}]),t}();c.propTypes={quote:l.default.object},t.default=c},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=w(a),l=w(n(102)),i=w(n(104)),c=w(n(51)),u=w(n(101)),s=w(n(80)),f=w(n(100)),p=w(n(99)),d=w(n(164)),m=w(n(163)),h=w(n(162)),y=w(n(161)),b=w(n(160)),g=w(n(159)),v=w(n(158)),_=w(n(157)),E=w(n(156));function w(e){return e&&e.__esModule?e:{default:e}}var O=["Branding"],k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"portfolio-page des"},o.default.createElement(l.default,{title:"Diverse Computing Rebrand",tags:O,splash:i.default,problem:"Diverse Computing’s flagship product, eAgent, had overshadowed its parent company. The strength of the eAgent brand made it tricky for DCI to branch out beyond the NCIC access domain, and position itself in the criminal justice community as, well, diverse.",solution:"A new identity for Diverse Computing that complements the eAgent brand and sets the foundation for a comprehensive platform of solutions form the criminal justice community."}),o.default.createElement("div",{className:"row section"},o.default.createElement("div",{className:"col-xs-12 col-sm-6"},o.default.createElement(f.default,{client:"Diverse Computing, Inc",role:"I was completely accountable for this rebrand from logo design, to website overhaul, to updating document designs and other print materials, to corporate education and enforcement.",team:"Consulting and executive decisions from senior leadership: Lester Hutt, Andrew Rawling, Dan Percy, and Tony Pun. Support from interns: Christopher Hill and Brooke Winston.",year:2016})),o.default.createElement("div",{className:"col-xs-12 col-sm-6 subsection"},o.default.createElement(c.default,{title:"Logo Before"}),o.default.createElement("img",{src:d.default,className:"img img-responsive section-img"})),o.default.createElement("div",{className:"col-xs-12 col-sm-6 subsection"},o.default.createElement(c.default,{title:"Logo After"}),o.default.createElement("img",{src:m.default,className:"img img-responsive section-img"}))),o.default.createElement(u.default,{title:"The Former Brand",text:"DCI has always positioned itself as a software company serving Law Enforcement agencies. DCI’s collateral featured lots of “badge and gun” imagery, and often leveraged fear as a method of persuasion (“will your software be there for your officers in a life-or-death situation?”). Black, grey, and gold were used heavily, and both visual design and written copy were quite serious and formal."}),o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-xs-12 col-sm-6"},o.default.createElement(u.default,{title:"Before",quote:"A software company serving law enforcement agencies"})),o.default.createElement("div",{className:"col-xs-12 col-sm-6"},o.default.createElement(u.default,{title:"After",quote:"A services company partnering with the criminal justice community"}))),o.default.createElement("div",{className:"row section"},o.default.createElement("div",{className:"col-xs-12"},o.default.createElement(c.default,{title:"The New Brand"}),o.default.createElement("p",null,"Key selling points:"),o.default.createElement("ul",null,o.default.createElement("li",null,"Next-generation open-source technology."),o.default.createElement("li",null,"“By CJI professionals, for CJI professionals”: many employees with experience working as a officers."),o.default.createElement("li",null,"Expertise in CJIS compliance.")))),o.default.createElement(u.default,{title:"7 Foot Conference Banners",img:h.default}),o.default.createElement(u.default,{title:"Marketing Collateral",img:y.default}),o.default.createElement(u.default,{title:"guide",img:g.default}),o.default.createElement("div",{className:"row section"},o.default.createElement("div",{className:"col-xs-12 col-sm-12"},o.default.createElement(c.default,{title:"RFP Presentation"})),o.default.createElement("div",{className:"col-xs-12 col-sm-4"},o.default.createElement(s.default,{img:v.default})),o.default.createElement("div",{className:"col-xs-12 col-sm-4"},o.default.createElement(s.default,{img:_.default})),o.default.createElement("div",{className:"col-xs-12 col-sm-4"},o.default.createElement(s.default,{img:E.default}))),o.default.createElement(u.default,{title:"Document Design",img:b.default}),o.default.createElement(p.default,null))}}]),t}();t.default=k},167:function(e,t,n){e.exports=n.p+"images/thor.jpg"},168:function(e,t,n){e.exports=n.p+"images/toy.jpg"},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=f(a),l=n(45),i=f(n(168)),c=f(n(104)),u=f(n(167)),s=f(n(103));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={filter:"work"},n.changeModeFilter=n.changeModeFilter.bind(n),n.works=[{id:2,title:"Playsmart RFID Toys Concept",tags:["instructional design","physical computing"],img:i.default,class:"des",path:""},{id:1,title:"Tennessee Homeland Online Records",tags:["angular2","dev","branding"],img:u.default,class:"dev",path:""},{id:0,title:"Diverse Computing Rebrand",tags:["branding"],img:c.default,class:"des",path:"dci-brand"},{id:3,title:"Environmental Design Research",tags:["ux research","dev"],img:s.default,class:"dev",path:"environmental-design"}],n.plays=[{id:0,title:"Women Drowning Photo Series",tags:[],img:"",class:"des"},{id:1,title:"The Shining Hotel Project",tags:[],img:"",class:"dev"}],n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"changeModeFilter",value:function(e){this.setState({filter:e})}},{key:"renderTag",value:function(e){return o.default.createElement("span",{className:"badge"},e)}},{key:"renderPreview",value:function(e){return o.default.createElement("div",{className:"col-xs-12 col-sm-6",key:e.id},o.default.createElement("div",{className:"item-preview"},o.default.createElement(l.Link,{to:"/portfolio/"+e.path,className:"item-preview__content item-preview__content--"+e.class},o.default.createElement("div",{className:"item-preview__content__img",style:{backgroundImage:"url("+e.img+")"}}),o.default.createElement("div",{className:"item-preview__content__desc"},o.default.createElement("div",{className:"item-preview__content__desc__title item-preview__content__desc__title--"+e.class},e.title),o.default.createElement("div",{className:"item-preview__content__desc__desc"},e.tags.map(function(e){return o.default.createElement("span",{key:e.toString(),value:e,className:"badge"},e)}))))))}},{key:"render",value:function(){var e;return e="play"==this.state.filter?o.default.createElement("div",{className:"row"},this.plays.map(this.renderPreview)):o.default.createElement("div",{className:"row"},this.works.map(this.renderPreview)),o.default.createElement("div",{className:"portfolio text-center"},o.default.createElement(l.Link,{to:"/",className:"logo"}),o.default.createElement("div",{className:"title"},o.default.createElement("span",{className:"title__des"},"UX Designer & "),o.default.createElement("br",{className:"hidden-sm hidden-md hidden-lg"}),o.default.createElement("span",{className:"title__dev"},"UI Developer")),o.default.createElement("div",{className:"portfolio__intro mx-auto text-center"},o.default.createElement("p",null,"Bonafide unicorn specializing in design systems and coffee consumption. Currently finishing up my Masters in HCI at Carnegie Mellon University while working as a product designer at TeleTracking. I like writing pixel-perfect css, and asking questions that other people are afraid to ask.")),o.default.createElement("div",{className:"portfolio__body"},o.default.createElement("div",{className:"portfolio__body__links"},o.default.createElement("div",{className:"link "+("work"==this.state.filter?"active":""),onClick:this.changeModeFilter.bind(this,"work")},"Work"),o.default.createElement("div",{className:"link "+("play"==this.state.filter?"active":""),onClick:this.changeModeFilter.bind(this,"play")},"Play")),o.default.createElement("div",{className:"portfolio__body__items"},e)))}}]),t}();t.default=p},170:function(e,t,n){e.exports=n.p+"images/mctigue_resume.pdf"},210:function(e,t){},211:function(e,t){},212:function(e,t){},213:function(e,t){},218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=u(a),l=n(217),i=n(81),c=u(n(170));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"resume"},o.default.createElement(l.Document,{file:c.default},o.default.createElement(l.Page,{width:1100,pageNumber:1})),o.default.createElement("div",{className:"resume__actions"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-xs-12 col-md-6"},o.default.createElement("a",{href:"https://kaitlinmctigue.github.io/images/mctigue_resume.pdf",target:"_blank",className:"link"},o.default.createElement(i.FontAwesomeIcon,{icon:"arrow-circle-down"}),"Download PDF Resume")),o.default.createElement("div",{className:"col-xs-12 col-md-6"},o.default.createElement("a",{href:"https://www.linkedin.com/in/katiemctigue",target:"_blank",className:"link"},"View My LinkedIn Profile",o.default.createElement(i.FontAwesomeIcon,{icon:"arrow-right"}))))))}}]),t}();t.default=s},219:function(e,t,n){e.exports=n.p+"images/headshot.jpg"},254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=u(a),l=u(n(80)),i=n(253),c=u(n(219));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"contact"},o.default.createElement("div",{className:"contact__img"},o.default.createElement(l.default,{img:c.default})),o.default.createElement("div",{className:"contact__text"},o.default.createElement("h1",{className:"title contact__text__title"},"looking for help on a project, or just a cup of coffee?"),o.default.createElement("div",{className:"contact__text__body"},o.default.createElement("p",null,"kaitlinmctigue at gmail dot com"),o.default.createElement("p",null,o.default.createElement("a",{className:"link",href:"https://www.linkedin.com/in/katiemctigue",target:"_blank"},"linkedin.com/in/katiemctigue")),o.default.createElement(i.SocialIcon,{url:"https://www.linkedin.com/in/katiemctigue"}),o.default.createElement(i.SocialIcon,{url:"https://github.com/kaitlinmctigue"}),o.default.createElement(i.SocialIcon,{url:"https://medium.com/@katiemctigue"}),o.default.createElement(i.SocialIcon,{url:"https://twitter.com/MctigueKatie?lang=en"}),o.default.createElement(i.SocialIcon,{url:"https://www.instagram.com/katiemctigue/"}),o.default.createElement(i.SocialIcon,{url:"https://open.spotify.com/user/kaitlinmctigue"}))))}}]),t}();t.default=s},338:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=b(a),l=n(45),i=n(337),c=n(148),u=n(67),s=n(81),f=n(255),p=b(n(254)),d=b(n(218)),m=b(n(169)),h=b(n(166)),y=b(n(155));function b(e){return e&&e.__esModule?e:{default:e}}u.library.add(f.faMoon,f.faSun,f.faArrowCircleDown,f.faArrowRight,f.faArrowLeft);var g=[{path:"dci-brand",comp:h.default},{path:"environmental-design",comp:y.default}],v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={dark:!1},n.changeTheme=n.changeTheme.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"changeTheme",value:function(){this.setState({dark:!this.state.dark})}},{key:"render",value:function(){return o.default.createElement("div",{className:"theme "+(this.state.dark?"theme-dark":"theme-light")},o.default.createElement("div",{className:"base"},o.default.createElement(l.HashRouter,null,o.default.createElement("div",null,o.default.createElement(c.Navbar,{collapseOnSelect:!0,className:"header"},o.default.createElement(l.Link,{to:"/",className:"logo"}),o.default.createElement(c.Navbar.Header,null,o.default.createElement(c.Navbar.Toggle,null)),o.default.createElement(c.Navbar.Collapse,null,o.default.createElement(c.Nav,{pullRight:!0,className:"header__utility"},o.default.createElement(c.NavItem,{className:"theme-toggle link",onClick:this.changeTheme},o.default.createElement(s.FontAwesomeIcon,{icon:this.state.dark?"sun":"moon"}))),o.default.createElement("div",{className:"header__links"},o.default.createElement(c.Nav,null,o.default.createElement(i.LinkContainer,{to:"/",exact:!0},o.default.createElement(c.NavItem,{eventKey:1,className:"link"},"Portfolio")),o.default.createElement(i.LinkContainer,{to:"/resume"},o.default.createElement(c.NavItem,{eventKey:2,className:"link"},"Resume")),o.default.createElement(i.LinkContainer,{to:"/contact"},o.default.createElement(c.NavItem,{eventKey:3,className:"link"},"Contact")))))),o.default.createElement("div",{className:"body text-center"},o.default.createElement(l.Route,{exact:!0,path:"/",component:m.default}),o.default.createElement(l.Route,{path:"/home",component:m.default,routes:g}),o.default.createElement(l.Route,{path:"/resume",component:d.default}),o.default.createElement(l.Route,{path:"/contact",component:p.default}),g.map(function(e){return o.default.createElement(l.Route,{key:e.path,path:"/portfolio/"+e.path,component:e.comp})}))))))}}]),t}();t.default=v},352:function(e,t,n){"use strict";(function(e){var t=l(n(1)),r=l(n(9)),a=n(45),o=l(n(338));function l(e){return e&&e.__esModule?e:{default:e}}n(153),n(358),r.default.render(t.default.createElement(a.HashRouter,{basename:e.env.PUBLIC_URL},t.default.createElement(o.default,null,"loading")),document.getElementById("app"))}).call(this,n(92))},353:function(e,t,n){e.exports=n(352)},358:function(e,t){},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=i(a),l=i(n(5));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return o.default.createElement("h2",{className:"section-header"},this.props.title)}}]),t}();c.propTypes={title:l.default.string},t.default=c},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=i(a),l=i(n(5));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return o.default.createElement("img",{className:"img img-responsive",src:this.props.img})}}]),t}();c.propTypes={img:l.default.string},t.default=c},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),l=(r=o)&&r.__esModule?r:{default:r},i=n(45),c=n(81),u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"section"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-xs-12 col-sm-12"},l.default.createElement(i.Link,{to:"/",className:"link"},l.default.createElement(c.FontAwesomeIcon,{icon:"arrow-left"}),"Back to All Projects"))))}}]),t}();t.default=u}});
//# sourceMappingURL=main.js.map