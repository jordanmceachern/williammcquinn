(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{128:function(e,t,a){"use strict";a.r(t);a(66);var n=a(6),o=a.n(n),i=a(0),r=a.n(i),c=(a(162),a(135)),s=a(144),l=a.n(s),u=a(163),d=a.n(u),p=a(164),f=a.n(p),h=a(165),g=a.n(h),m=a(166),v=a.n(m),b=a(167),y=a.n(b),w=a(168),E=a.n(w),A=a(169),x=a.n(A),j=a(170),k=a.n(j),C=a(171),N=a.n(C),S=a(172),R=a.n(S),q=a(173),P=a.n(q),U=a(174),G=a.n(U),L=a(175),T=a.n(L),_=a(176),O=a.n(_),B=a(177),K=a.n(B),Q=a(178),I=a.n(Q),M=a(179),D=a.n(M),W=a(180),V=a.n(W),H=a(181),F=a.n(H),J=a(182),Z=a.n(J),Y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={photos:[I.a,O.a,P.a,G.a,D.a,T.a,Z.a,V.a,F.a,K.a],loaded:!1,jpg:[]},t.changeLeft=function(){var e=t.state.photos,a=e[e.length-1];e.pop(),e.splice(0,0,a),t.setState({photos:e})},t.changeRight=function(){var e=t.state.photos,a=e[0];e.push(a),e.splice(0,1),t.setState({photos:e})},t.changeMain=function(e){return function(){document.getElementById("gallery").classList.toggle("hide");var a=t.state.photos;if(0===e)t.changeLeft();else{if(1===e)return;for(var n=e-2,o=0;o<=n;o++){var i=a[0];a.push(i),a.splice(0,1),t.setState({photos:a})}}}},t.showGallery=function(){document.getElementById("gallery").classList.toggle("hide")},t}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=[E.a,v.a,d.a,f.a,x.a,g.a,R.a,k.a,N.a,y.a],a=this.state.photos,n=0;t.forEach(function(o){var i=new Image;i.src=o,i.onload=function(){a[n]=o,e.setState({jpg:a}),e.state.jpg.length===t.length&&e.setState({loaded:!0}),n++}})},a.render=function(){var e=this,t=-1,a=this.state.photos.map(function(a){return t++,r.a.createElement("img",{key:""+t,src:a,alt:"thumbnail",onClick:e.changeMain(t)})}),n=!0===this.state.loaded?"show all":"load- ing...";return r.a.createElement("div",{className:"Stills"},r.a.createElement(c.a,null),r.a.createElement("div",{id:"photos"},r.a.createElement("img",{id:"leftPic",src:this.state.photos[0],alt:"gallery left"}),r.a.createElement("img",{id:"mainPic",className:"leftBlur rightBlur",src:this.state.photos[1],alt:"gallery center"}),r.a.createElement("img",{id:"rightPic",src:this.state.photos[2],alt:"gallery right"})),r.a.createElement("div",{id:"gallery",className:"outline"},a),r.a.createElement("div",{id:"galleryMenu"},r.a.createElement("div",{className:"arrows",onClick:this.changeLeft},r.a.createElement("img",{src:l.a,alt:"cycle left"})),r.a.createElement("div",{id:"select",onClick:this.showGallery},n),r.a.createElement("div",{className:"arrows",onClick:this.changeRight},r.a.createElement("img",{src:l.a,id:"cycleRight",alt:"cycle right"}))))},t}(r.a.Component);t.default=Y},132:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var o=n(a(136)),i=n(a(137)),r=n(a(6)),c=n(a(47)),s=n(a(48)),l=n(a(4)),u=n(a(0)),d=a(15),p=a(133);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},g=function(e){function t(t){var a;a=e.call(this)||this,(0,s.default)((0,c.default)((0,c.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,c.default)((0,c.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,o=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(o.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,r=void 0===n?this.defaultGetProps:n,c=t.onClick,s=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,g=(0,o.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),m=f(a);return u.default.createElement(d.Link,(0,i.default)({to:m,state:l,getProps:r,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){return c&&c(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(a,{state:l,replace:h})),!0}},g))},t}(u.default.Component);g.propTypes=(0,i.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var m=g;t.default=m;var v=function(e,t){window.___navigate(f(e),t)};t.navigate=v;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},133:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),o=a.n(n),i=a(4),r=a.n(i),c=a(132),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(134),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(28);a.d(t,"parsePath",function(){return d.a});var p=o.a.createContext({}),f=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},134:function(e,t,a){var n;e.exports=(n=a(138))&&n.default||n},135:function(e,t,a){"use strict";a(66),a(71),a(139);var n=a(6),o=a.n(n),i=a(0),r=a.n(i),c=a(133),s=(a(141),a(142)),l=a.n(s),u=a(143),d=a.n(u),p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={logoLoaded:!1},t.toggleHandler=function(){var e=document.getElementsByClassName("mobile");Array.from(e).forEach(function(e){return e.classList.toggle("hideThis")})},t}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=new Image;t.src=d.a,t.onload=function(){e.setState({logoLoaded:!0})}},a.render=function(){var e="William McQuinn";return this.state.logoLoaded&&(e=r.a.createElement("img",{src:d.a,alt:"brand logo"})),r.a.createElement("nav",null,r.a.createElement("div",{id:"hamburger",onClick:this.toggleHandler},r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement("hr",null)),r.a.createElement(c.Link,{id:"home",to:"/"},e),r.a.createElement(c.Link,{className:"heading mobile hideThis",to:"/aboutme"},"about me"),r.a.createElement(c.Link,{className:"heading mobile hideThis",to:"/stills"},"stills"),r.a.createElement(c.Link,{className:"heading mobile hideThis",to:"/videos"},"videos"),r.a.createElement(c.Link,{className:"heading mobile hideThis",to:"/contact"},"contact"),r.a.createElement("div",{id:"facebook",className:"heading mobile hideThis",onClick:this.toggleHandler},r.a.createElement("a",{href:"https://www.facebook.com/williammcquinn7",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{id:"fb",src:l.a,alt:"link to facebook"}),"facebook page")))},t}(i.Component);t.a=p},136:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}},137:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},138:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),o=a.n(n),i=a(4),r=a.n(i),c=a(49),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},139:function(e,t,a){"use strict";var n=a(14),o=a(22),i=a(31),r=a(67),c=a(68),s=a(30),l=a(140),u=a(69);o(o.S+o.F*!a(70)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,o,d,p=i(e),f="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,m=void 0!==g,v=0,b=u(p);if(m&&(g=n(g,h>2?arguments[2]:void 0,2)),null==b||f==Array&&c(b))for(a=new f(t=s(p.length));t>v;v++)l(a,v,m?g(p[v],v):p[v]);else for(d=b.call(p),a=new f;!(o=d.next()).done;v++)l(a,v,m?r(d,g,[o.value,v],!0):o.value);return a.length=v,a}})},140:function(e,t,a){"use strict";var n=a(21),o=a(46);e.exports=function(e,t,a){t in e?n.f(e,t,o(0,a)):e[t]=a}},141:function(e,t,a){},142:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAAAsSAAALEgHS3X78AAAB/klEQVRoge2aS0sCURTHT6biI7TUsggNQoRyEUQQJCTkyp3RY9mqh7h0XS36AH2ANn2DENtLbtq3KCrKkjCwNLM0RenBBdvVzCEdZ+Z0f9v5c8784HrunRm75jYSvQAQB4AA0CQFAGENcUlousU1xCW/CWiUcR/Sw0WpwUWpoVWyz6DdBE67UTBzcllA1VKcKJOLLvty074Bi1arEbZsEowcimYUI9pj0kFkYTwf8rsdAOBsd31FiDLJvc3Ak9NmdEjVQxHDqClpk7KH7KJr82MlqSVBblG2ZBeDo/pO9JJVdHZyqIqdrK0iq2jI7853qpesU9frsqKm7M39a24/ce5kh4PyW+NPvWQVxSxbJrm6c9Tyvirb0vW4LKjcQTKNC4ogm6jZqEPlsg+Vtgwr/phGDS5KDf6GoR2wLeS36epxWVEdxHKVagOu7l5E60gqur0+lRnuN4+0UiO65BO8nn2sZFa2kqI9VL90S+U6ykH1ohe3zx+YnOpFC6Ua6oioetGzdLEPk1O9KJu6GFQvitlaQO2ilWqjiM1Kuo+eXhdZ/cxP1wz6boPdahB9oC6Uarla/b0mUB/1G2X/YfjEBNvNhNcOu7EZ0aqx3WP09xUh+KGeGlyUGlyUGlyUGlyUGlyUGlyUGlyUGlyUGv9KNKWA+5CaFBMNE5dNAUD4C1qOcQQp43iEAAAAAElFTkSuQmCC"},143:function(e,t,a){e.exports=a.p+"static/logo-3489796c611caaddceb100d3e59e7e57.jpg"},144:function(e,t,a){e.exports=a.p+"static/arrow_select-86a7297a348a6fba1edf8b95bd7959c3.png"},162:function(e,t,a){},163:function(e,t,a){e.exports=a.p+"static/car-445af175bb614a3ed6cd0c09c3e7bb3e.jpg"},164:function(e,t,a){e.exports=a.p+"static/canyon-bf7ec4390913d389755a9c422261d2ac.jpg"},165:function(e,t,a){e.exports=a.p+"static/falls-c33eb85f71c7e3fe06867dd8a3489119.jpg"},166:function(e,t,a){e.exports=a.p+"static/girl-ed6a915775bc0f3823c6bd7b6d2c4019.jpg"},167:function(e,t,a){e.exports=a.p+"static/plane-678a5a558e445d15f5865e61d08f637b.jpg"},168:function(e,t,a){e.exports=a.p+"static/bunny-b888aa56969225dcb12db8cc0ed65799.jpg"},169:function(e,t,a){e.exports=a.p+"static/piano-f4835f0f0dba5d4791d199c99a6f0497.jpg"},170:function(e,t,a){e.exports=a.p+"static/building-e00fae3bd47b7f30cb24ac16a6b2e4b5.jpg"},171:function(e,t,a){e.exports=a.p+"static/jet-11384e0b2d1dadbf5f3f04d221fbbedb.jpg"},172:function(e,t,a){e.exports=a.p+"static/rock-80a241063a0a50c712fe7bbd55f5937c.jpg"},173:function(e,t,a){e.exports=a.p+"static/carlight-75149f71365bc8ba08de67e41f79c97e.jpg"},174:function(e,t,a){e.exports=a.p+"static/canyonlight-aabdcbd8731cf3dabd7b79418e378b61.jpg"},175:function(e,t,a){e.exports=a.p+"static/fallslight-7a1d322de8c9536ce95a4893be38cb95.jpg"},176:function(e,t,a){e.exports=a.p+"static/girllight-35a20d2fab57133952cdba682ff24af1.jpg"},177:function(e,t,a){e.exports=a.p+"static/planelight-f32f414a7cb9d12a7514441bde286485.jpg"},178:function(e,t,a){e.exports=a.p+"static/bunnylight-170058501d003448ed6c1938b8770ac5.jpg"},179:function(e,t,a){e.exports=a.p+"static/pianolight-d4f91022774e8ca4287c6bcf03213e77.jpg"},180:function(e,t,a){e.exports=a.p+"static/buildinglight-984643f5e14587e1d51b015ec249be91.jpg"},181:function(e,t,a){e.exports=a.p+"static/jetlight-d7a84f8c1d5a7d450e511626d994dac3.jpg"},182:function(e,t,a){e.exports=a.p+"static/rocklight-d5136ccaf176d2592cfe58576e929496.jpg"}}]);
//# sourceMappingURL=component---src-pages-stills-js-db1747c85524d6228410.js.map