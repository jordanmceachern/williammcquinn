(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(135),i=(a(66),a(6)),c=a.n(i),s=(a(147),a(148)),l=a.n(s),u=a(149),d=a.n(u),p=a(150),f=a.n(p),h=a(151),g=a.n(h),m=a(152),v=a.n(m),b=a(153),y=a.n(b),w=a(154),E=a.n(w),A=a(155),x=a.n(A),j=a(156),k=a.n(j),C=a(157),_=a.n(C),N=a(158),q=a.n(N),P=a(159),U=a.n(P),S=a(160),R=a.n(S),G=a(161),T=a.n(G),O=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={photos:[d.a,l.a,f.a,g.a,v.a,y.a,E.a],jpg:[k.a,x.a,_.a,q.a,U.a,R.a,T.a]},t.carousel=function(){setInterval(function(){var e=t.state.photos,a=t.state.jpg,n=a[0];e.splice(0,1),a.splice(0,1),e.push(n),a.push(n),t.setState({photos:e,jpg:a})},2500)},t}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=this.state.jpg,a=this.state.photos,n=0;t.forEach(function(t){var r=new Image;r.src=t,r.onload=function(){a[n]=t,e.setState({photos:a}),n++}}),this.carousel()},a.render=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null),r.a.createElement("div",{id:"landing"},r.a.createElement("img",{id:"leftPicture",src:this.state.photos[0],alt:"gallery left"}),r.a.createElement("img",{id:"mainPicture",className:"leftBlurr rightBlurr",src:this.state.photos[1],alt:"gallery center"}),r.a.createElement("img",{id:"rightPicture",src:this.state.photos[2],alt:"gallery right"})))},t}(r.a.Component);t.default=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(o.a,null))}},132:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(136)),o=n(a(137)),i=n(a(6)),c=n(a(47)),s=n(a(48)),l=n(a(4)),u=n(a(0)),d=a(15),p=a(133);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},g=function(e){function t(t){var a;a=e.call(this)||this,(0,s.default)((0,c.default)((0,c.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,c.default)((0,c.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,i=void 0===n?this.defaultGetProps:n,c=t.onClick,s=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,g=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),m=f(a);return u.default.createElement(d.Link,(0,o.default)({to:m,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){return c&&c(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(a,{state:l,replace:h})),!0}},g))},t}(u.default.Component);g.propTypes=(0,o.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var m=g;t.default=m;var v=function(e,t){window.___navigate(f(e),t)};t.navigate=v;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},133:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(132),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(134),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(28);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},134:function(e,t,a){var n;e.exports=(n=a(138))&&n.default||n},135:function(e,t,a){"use strict";a(66),a(71),a(139);var n=a(6),r=a.n(n),o=a(0),i=a.n(o),c=a(133),s=(a(141),a(142)),l=a.n(s),u=a(143),d=a.n(u),p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={logoLoaded:!1},t.toggleHandler=function(){var e=document.getElementsByClassName("mobile");Array.from(e).forEach(function(e){return e.classList.toggle("hideThis")})},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=new Image;t.src=d.a,t.onload=function(){e.setState({logoLoaded:!0})}},a.render=function(){var e="William McQuinn";return this.state.logoLoaded&&(e=i.a.createElement("img",{src:d.a,alt:"brand logo"})),i.a.createElement("nav",null,i.a.createElement("div",{id:"hamburger",onClick:this.toggleHandler},i.a.createElement("hr",null),i.a.createElement("hr",null),i.a.createElement("hr",null)),i.a.createElement(c.Link,{id:"home",to:"/"},e),i.a.createElement(c.Link,{className:"heading mobile hideThis",to:"/aboutme"},"about me"),i.a.createElement(c.Link,{className:"heading mobile hideThis",to:"/photos"},"stills"),i.a.createElement(c.Link,{className:"heading mobile hideThis",to:"/videos"},"videos"),i.a.createElement(c.Link,{className:"heading mobile hideThis",to:"/contact"},"contact"),i.a.createElement("div",{id:"facebook",className:"heading mobile hideThis",onClick:this.toggleHandler},i.a.createElement("a",{href:"https://www.facebook.com/williammcquinn7",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{id:"fb",src:l.a,alt:"link to facebook"}),"facebook page")))},t}(o.Component);t.a=p},136:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},137:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},138:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(49),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},139:function(e,t,a){"use strict";var n=a(14),r=a(22),o=a(31),i=a(67),c=a(68),s=a(30),l=a(140),u=a(69);r(r.S+r.F*!a(70)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,d,p=o(e),f="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,m=void 0!==g,v=0,b=u(p);if(m&&(g=n(g,h>2?arguments[2]:void 0,2)),null==b||f==Array&&c(b))for(a=new f(t=s(p.length));t>v;v++)l(a,v,m?g(p[v],v):p[v]);else for(d=b.call(p),a=new f;!(r=d.next()).done;v++)l(a,v,m?i(d,g,[r.value,v],!0):r.value);return a.length=v,a}})},140:function(e,t,a){"use strict";var n=a(21),r=a(46);e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},141:function(e,t,a){},142:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAAAsSAAALEgHS3X78AAAB/klEQVRoge2aS0sCURTHT6biI7TUsggNQoRyEUQQJCTkyp3RY9mqh7h0XS36AH2ANn2DENtLbtq3KCrKkjCwNLM0RenBBdvVzCEdZ+Z0f9v5c8784HrunRm75jYSvQAQB4AA0CQFAGENcUlousU1xCW/CWiUcR/Sw0WpwUWpoVWyz6DdBE67UTBzcllA1VKcKJOLLvty074Bi1arEbZsEowcimYUI9pj0kFkYTwf8rsdAOBsd31FiDLJvc3Ak9NmdEjVQxHDqClpk7KH7KJr82MlqSVBblG2ZBeDo/pO9JJVdHZyqIqdrK0iq2jI7853qpesU9frsqKm7M39a24/ce5kh4PyW+NPvWQVxSxbJrm6c9Tyvirb0vW4LKjcQTKNC4ogm6jZqEPlsg+Vtgwr/phGDS5KDf6GoR2wLeS36epxWVEdxHKVagOu7l5E60gqur0+lRnuN4+0UiO65BO8nn2sZFa2kqI9VL90S+U6ykH1ohe3zx+YnOpFC6Ua6oioetGzdLEPk1O9KJu6GFQvitlaQO2ilWqjiM1Kuo+eXhdZ/cxP1wz6boPdahB9oC6Uarla/b0mUB/1G2X/YfjEBNvNhNcOu7EZ0aqx3WP09xUh+KGeGlyUGlyUGlyUGlyUGlyUGlyUGlyUGlyUGv9KNKWA+5CaFBMNE5dNAUD4C1qOcQQp43iEAAAAAElFTkSuQmCC"},143:function(e,t,a){e.exports=a.p+"static/logo-3489796c611caaddceb100d3e59e7e57.jpg"},147:function(e,t,a){},148:function(e,t,a){e.exports=a.p+"static/filminglight-04722c8288ecf66d9383da16a20c2e20.jpg"},149:function(e,t,a){e.exports=a.p+"static/carousel_2light-753daa44fa2427ff52ad49755536397b.jpg"},150:function(e,t,a){e.exports=a.p+"static/carousel_3light-a03b87a066caabebf22ccf86569d3cb4.jpg"},151:function(e,t,a){e.exports=a.p+"static/carousel_4light-f368cdfcc59654cdc996ee40bc333fe8.jpg"},152:function(e,t,a){e.exports=a.p+"static/carousel_5light-619989b9df6df20d5106f4788ce1826c.jpg"},153:function(e,t,a){e.exports=a.p+"static/carousel_6light-e7d7877dee43da67779b94a9201b78e4.jpg"},154:function(e,t,a){e.exports=a.p+"static/carousel_7light-05d685d7e405074596cb11b9b7072c5e.jpg"},155:function(e,t,a){e.exports=a.p+"static/filming-a9073b81a54a1e4f0b4a35221a7067d3.jpg"},156:function(e,t,a){e.exports=a.p+"static/carousel_2-63ce4992d2a2adae80939ef71c838528.jpg"},157:function(e,t,a){e.exports=a.p+"static/carousel_3-f9440650ed35fe66077baf614edae9df.jpg"},158:function(e,t,a){e.exports=a.p+"static/carousel_4-2b1ea338268719837f8080580849dc79.jpg"},159:function(e,t,a){e.exports=a.p+"static/carousel_5-b5f3a8713347697efb3ff2f6b0ffe8e7.jpg"},160:function(e,t,a){e.exports=a.p+"static/carousel_6-2ced88ca8f24be0bd27df438885b646b.jpg"},161:function(e,t,a){e.exports=a.p+"static/carousel_7-e06d7c5375f612cca0c9e5a51b40a573.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-d910eb7cea3cba683650.js.map