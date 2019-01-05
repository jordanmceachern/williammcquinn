(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(133),i=(n(145),n(135));t.default=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null),r.a.createElement("div",{id:"about"},r.a.createElement("p",null,"William is an event videographer trained by director David McQuinn, and resides in Fredericton NB. Working alongside McQuinn Media for over 5 years and educated by Hollywood professionals, William knows how to capture a moment through the eye of the lens."),r.a.createElement("p",null,"William keeps up to date and on trend by regularly practicing alongside Hollywood directors and world leaders in the industries of Editing, Videography, and Aerial Drone Videography."),r.a.createElement("p",null,"William is also a part of the McQuinn Media team run by David McQuinn, offering the finest quality of video production for over 30 years. You can find a link to the team here:",r.a.createElement("a",{href:"https://www.mcquinnmedia.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",null,"(mcquinnmedia.com)"))),r.a.createElement("p",{id:"seewhat"},"Ask us what we can do for you today, we'd love to hear from you!",r.a.createElement(o.Link,{to:"/contact"},r.a.createElement("div",null,"(contact)")))))}},132:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(136)),o=a(n(137)),i=a(n(6)),l=a(n(47)),s=a(n(48)),c=a(n(4)),u=a(n(0)),d=n(15),f=n(133);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,l=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=p(n);return u.default.createElement(d.Link,(0,o.default)({to:v,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:c,replace:h})),!0}},m))},t}(u.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=m;t.default=v;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},133:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(132),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(134),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},134:function(e,t,n){var a;e.exports=(a=n(138))&&a.default||a},135:function(e,t,n){"use strict";n(66),n(71),n(139);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),l=n(133),s=(n(141),n(142)),c=n.n(s),u=n(143),d=n.n(u),f=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={logoLoaded:!1},t.toggleHandler=function(){var e=document.getElementsByClassName("mobile");Array.from(e).forEach(function(e){return e.classList.toggle("hideThis")})},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t=new Image;t.src=d.a,t.onload=function(){e.setState({logoLoaded:!0})}},n.render=function(){var e="William McQuinn";return this.state.logoLoaded&&(e=i.a.createElement("img",{src:d.a,alt:"brand logo"})),i.a.createElement("nav",null,i.a.createElement("div",{id:"hamburger",onClick:this.toggleHandler},i.a.createElement("hr",null),i.a.createElement("hr",null),i.a.createElement("hr",null)),i.a.createElement(l.Link,{id:"home",to:"/"},e),i.a.createElement(l.Link,{className:"heading mobile hideThis",to:"/aboutme"},"about me"),i.a.createElement(l.Link,{className:"heading mobile hideThis",to:"/photos"},"photos"),i.a.createElement(l.Link,{className:"heading mobile hideThis",to:"/videos"},"videos"),i.a.createElement(l.Link,{className:"heading mobile hideThis",to:"/contact"},"contact"),i.a.createElement("div",{id:"facebook",className:"heading mobile hideThis",onClick:this.toggleHandler},i.a.createElement("a",{href:"https://www.facebook.com/williammcquinn7",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{id:"fb",src:c.a,alt:"link to facebook"}),"facebook page")))},t}(o.Component);t.a=f},136:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},137:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},138:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(49),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},139:function(e,t,n){"use strict";var a=n(14),r=n(22),o=n(31),i=n(67),l=n(68),s=n(30),c=n(140),u=n(69);r(r.S+r.F*!n(70)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,r,d,f=o(e),p="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,v=void 0!==m,g=0,y=u(f);if(v&&(m=a(m,h>2?arguments[2]:void 0,2)),null==y||p==Array&&l(y))for(n=new p(t=s(f.length));t>g;g++)c(n,g,v?m(f[g],g):f[g]);else for(d=y.call(f),n=new p;!(r=d.next()).done;g++)c(n,g,v?i(d,m,[r.value,g],!0):r.value);return n.length=g,n}})},140:function(e,t,n){"use strict";var a=n(21),r=n(46);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},141:function(e,t,n){},142:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAAAsSAAALEgHS3X78AAAB/klEQVRoge2aS0sCURTHT6biI7TUsggNQoRyEUQQJCTkyp3RY9mqh7h0XS36AH2ANn2DENtLbtq3KCrKkjCwNLM0RenBBdvVzCEdZ+Z0f9v5c8784HrunRm75jYSvQAQB4AA0CQFAGENcUlousU1xCW/CWiUcR/Sw0WpwUWpoVWyz6DdBE67UTBzcllA1VKcKJOLLvty074Bi1arEbZsEowcimYUI9pj0kFkYTwf8rsdAOBsd31FiDLJvc3Ak9NmdEjVQxHDqClpk7KH7KJr82MlqSVBblG2ZBeDo/pO9JJVdHZyqIqdrK0iq2jI7853qpesU9frsqKm7M39a24/ce5kh4PyW+NPvWQVxSxbJrm6c9Tyvirb0vW4LKjcQTKNC4ogm6jZqEPlsg+Vtgwr/phGDS5KDf6GoR2wLeS36epxWVEdxHKVagOu7l5E60gqur0+lRnuN4+0UiO65BO8nn2sZFa2kqI9VL90S+U6ykH1ohe3zx+YnOpFC6Ua6oioetGzdLEPk1O9KJu6GFQvitlaQO2ilWqjiM1Kuo+eXhdZ/cxP1wz6boPdahB9oC6Uarla/b0mUB/1G2X/YfjEBNvNhNcOu7EZ0aqx3WP09xUh+KGeGlyUGlyUGlyUGlyUGlyUGlyUGlyUGlyUGv9KNKWA+5CaFBMNE5dNAUD4C1qOcQQp43iEAAAAAElFTkSuQmCC"},143:function(e,t,n){e.exports=n.p+"static/logo-3489796c611caaddceb100d3e59e7e57.jpg"},145:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-aboutme-js-740238b2b4f75d00dcea.js.map