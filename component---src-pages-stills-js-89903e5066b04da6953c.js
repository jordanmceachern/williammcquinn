(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{136:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a.n(n),i=a(0),o=a.n(i),r=(a(185),a(142)),l=a(149),s=a.n(l),d=a(186),p=a.n(d),f=a(187),u=a.n(f),g=a(188),h=a.n(g),m=a(189),b=a.n(m),E=a(190),v=a.n(E),A=a(191),y=a.n(A),j=a(192),x=a.n(j),w=a(193),k=a.n(w),C=a(194),N=a.n(C),U=a(195),B=a.n(U),S=a(196),G=a.n(S),q=a(197),L=a.n(q),K=a(198),R=a.n(K),Q=a(199),T=a.n(Q),W=a(200),O=a.n(W),V=a(201),D=a.n(V),H=a(202),M=a.n(H),P=a(203),F=a.n(P),I=a(204),J=a.n(I),Z=a(205),Y=a.n(Z),z=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).state={photos:[D.a,T.a,G.a,L.a,M.a,R.a,Y.a,F.a,J.a,O.a],loaded:!1,jpg:[]},t.changeLeft=function(){var e=t.state.photos,a=e[e.length-1];e.pop(),e.splice(0,0,a),t.setState({photos:e})},t.changeRight=function(){var e=t.state.photos,a=e[0];e.push(a),e.splice(0,1),t.setState({photos:e})},t.changeMain=function(e){return function(){document.getElementById("gallery").classList.toggle("hide");var a=t.state.photos;if(0===e)t.changeLeft();else{if(1===e)return;for(var n=e-2,c=0;c<=n;c++){var i=a[0];a.push(i),a.splice(0,1),t.setState({photos:a})}}}},t.showGallery=function(){document.getElementById("gallery").classList.toggle("hide")},t}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=[y.a,b.a,p.a,u.a,x.a,h.a,B.a,k.a,N.a,v.a],a=this.state.photos,n=0;t.forEach(function(c){var i=new Image;i.src=c,i.onload=function(){a[n]=c,e.setState({jpg:a}),e.state.jpg.length===t.length&&e.setState({loaded:!0}),n++}})},a.render=function(){var e=this,t=-1,a=this.state.photos.map(function(a){return t++,o.a.createElement("img",{key:""+t,src:a,alt:"thumbnail",onClick:e.changeMain(t)})}),n=!0===this.state.loaded?"show all":"load- ing...";return o.a.createElement("div",{className:"Stills"},o.a.createElement(r.a,null),o.a.createElement("div",{id:"photos"},o.a.createElement("img",{id:"leftPic",src:this.state.photos[0],alt:"gallery left"}),o.a.createElement("img",{id:"mainPic",className:"leftBlur rightBlur",src:this.state.photos[1],alt:"gallery center"}),o.a.createElement("img",{id:"rightPic",src:this.state.photos[2],alt:"gallery right"})),o.a.createElement("div",{id:"gallery",className:"outline"},a),o.a.createElement("div",{id:"galleryMenu"},o.a.createElement("div",{className:"arrows",onClick:this.changeLeft},o.a.createElement("img",{src:s.a,alt:"cycle left"})),o.a.createElement("div",{id:"select",onClick:this.showGallery},n),o.a.createElement("div",{className:"arrows",onClick:this.changeRight},o.a.createElement("img",{src:s.a,id:"cycleRight",alt:"cycle right"}))))},t}(o.a.Component);t.default=z},140:function(e,t,a){var n;e.exports=(n=a(143))&&n.default||n},141:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(4),o=a.n(i),r=a(28),l=a.n(r);a.d(t,"a",function(){return l.a});a(140),c.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},142:function(e,t,a){"use strict";a(73),a(144);var n=a(6),c=a.n(n),i=a(0),o=a.n(i),r=a(141),l=(a(148),a(146)),s=a.n(l),d=a(147),p=a.n(d),f=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).state={logoLoaded:!1},t.toggleHandler=function(){var e=document.getElementsByClassName("mobile");Array.from(e).forEach(function(e){return e.classList.toggle("hideThis")})},t}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=new Image;t.src=p.a,t.onload=function(){e.setState({logoLoaded:!0})}},a.render=function(){var e="William McQuinn";return this.state.logoLoaded&&(e=o.a.createElement("img",{src:p.a,alt:"brand logo"})),o.a.createElement("nav",null,o.a.createElement("div",{id:"hamburger",onClick:this.toggleHandler},o.a.createElement("hr",null),o.a.createElement("hr",null),o.a.createElement("hr",null)),o.a.createElement(r.a,{id:"home",to:"/"},e),o.a.createElement(r.a,{className:"heading mobile hideThis",to:"/aboutme"},"about me"),o.a.createElement(r.a,{className:"heading mobile hideThis",to:"/stills"},"stills"),o.a.createElement(r.a,{className:"heading mobile hideThis",to:"/videos"},"videos"),o.a.createElement(r.a,{className:"heading mobile hideThis",to:"/contact"},"contact"),o.a.createElement("div",{id:"facebook",className:"heading mobile hideThis",onClick:this.toggleHandler},o.a.createElement("a",{href:"https://www.facebook.com/williammcquinn7",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{id:"fb",src:s.a,alt:"link to facebook"}),"facebook page")))},t}(i.Component);t.a=f},143:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),c=a.n(n),i=a(4),o=a.n(i),r=a(52),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?c.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},144:function(e,t,a){"use strict";var n=a(17),c=a(13),i=a(31),o=a(69),r=a(70),l=a(30),s=a(145),d=a(71);c(c.S+c.F*!a(72)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,c,p,f=i(e),u="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,m=void 0!==h,b=0,E=d(f);if(m&&(h=n(h,g>2?arguments[2]:void 0,2)),null==E||u==Array&&r(E))for(a=new u(t=l(f.length));t>b;b++)s(a,b,m?h(f[b],b):f[b]);else for(p=E.call(f),a=new u;!(c=p.next()).done;b++)s(a,b,m?o(p,h,[c.value,b],!0):c.value);return a.length=b,a}})},145:function(e,t,a){"use strict";var n=a(23),c=a(51);e.exports=function(e,t,a){t in e?n.f(e,t,c(0,a)):e[t]=a}},146:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAAAsSAAALEgHS3X78AAAB/klEQVRoge2aS0sCURTHT6biI7TUsggNQoRyEUQQJCTkyp3RY9mqh7h0XS36AH2ANn2DENtLbtq3KCrKkjCwNLM0RenBBdvVzCEdZ+Z0f9v5c8784HrunRm75jYSvQAQB4AA0CQFAGENcUlousU1xCW/CWiUcR/Sw0WpwUWpoVWyz6DdBE67UTBzcllA1VKcKJOLLvty074Bi1arEbZsEowcimYUI9pj0kFkYTwf8rsdAOBsd31FiDLJvc3Ak9NmdEjVQxHDqClpk7KH7KJr82MlqSVBblG2ZBeDo/pO9JJVdHZyqIqdrK0iq2jI7853qpesU9frsqKm7M39a24/ce5kh4PyW+NPvWQVxSxbJrm6c9Tyvirb0vW4LKjcQTKNC4ogm6jZqEPlsg+Vtgwr/phGDS5KDf6GoR2wLeS36epxWVEdxHKVagOu7l5E60gqur0+lRnuN4+0UiO65BO8nn2sZFa2kqI9VL90S+U6ykH1ohe3zx+YnOpFC6Ua6oioetGzdLEPk1O9KJu6GFQvitlaQO2ilWqjiM1Kuo+eXhdZ/cxP1wz6boPdahB9oC6Uarla/b0mUB/1G2X/YfjEBNvNhNcOu7EZ0aqx3WP09xUh+KGeGlyUGlyUGlyUGlyUGlyUGlyUGlyUGlyUGv9KNKWA+5CaFBMNE5dNAUD4C1qOcQQp43iEAAAAAElFTkSuQmCC"},147:function(e,t,a){e.exports=a.p+"static/logo-3489796c611caaddceb100d3e59e7e57.jpg"},149:function(e,t,a){e.exports=a.p+"static/arrow_select-86a7297a348a6fba1edf8b95bd7959c3.png"},186:function(e,t,a){e.exports=a.p+"static/car-445af175bb614a3ed6cd0c09c3e7bb3e.jpg"},187:function(e,t,a){e.exports=a.p+"static/canyon-bf7ec4390913d389755a9c422261d2ac.jpg"},188:function(e,t,a){e.exports=a.p+"static/falls-c33eb85f71c7e3fe06867dd8a3489119.jpg"},189:function(e,t,a){e.exports=a.p+"static/girl-ed6a915775bc0f3823c6bd7b6d2c4019.jpg"},190:function(e,t,a){e.exports=a.p+"static/plane-678a5a558e445d15f5865e61d08f637b.jpg"},191:function(e,t,a){e.exports=a.p+"static/bunny-b888aa56969225dcb12db8cc0ed65799.jpg"},192:function(e,t,a){e.exports=a.p+"static/piano-f4835f0f0dba5d4791d199c99a6f0497.jpg"},193:function(e,t,a){e.exports=a.p+"static/building-e00fae3bd47b7f30cb24ac16a6b2e4b5.jpg"},194:function(e,t,a){e.exports=a.p+"static/jet-11384e0b2d1dadbf5f3f04d221fbbedb.jpg"},195:function(e,t,a){e.exports=a.p+"static/rock-80a241063a0a50c712fe7bbd55f5937c.jpg"},196:function(e,t,a){e.exports=a.p+"static/carlight-75149f71365bc8ba08de67e41f79c97e.jpg"},197:function(e,t,a){e.exports=a.p+"static/canyonlight-aabdcbd8731cf3dabd7b79418e378b61.jpg"},198:function(e,t,a){e.exports=a.p+"static/fallslight-7a1d322de8c9536ce95a4893be38cb95.jpg"},199:function(e,t,a){e.exports=a.p+"static/girllight-35a20d2fab57133952cdba682ff24af1.jpg"},200:function(e,t,a){e.exports=a.p+"static/planelight-f32f414a7cb9d12a7514441bde286485.jpg"},201:function(e,t,a){e.exports=a.p+"static/bunnylight-170058501d003448ed6c1938b8770ac5.jpg"},202:function(e,t,a){e.exports=a.p+"static/pianolight-d4f91022774e8ca4287c6bcf03213e77.jpg"},203:function(e,t,a){e.exports=a.p+"static/buildinglight-984643f5e14587e1d51b015ec249be91.jpg"},204:function(e,t,a){e.exports=a.p+"static/jetlight-d7a84f8c1d5a7d450e511626d994dac3.jpg"},205:function(e,t,a){e.exports=a.p+"static/rocklight-d5136ccaf176d2592cfe58576e929496.jpg"}}]);
//# sourceMappingURL=component---src-pages-stills-js-89903e5066b04da6953c.js.map