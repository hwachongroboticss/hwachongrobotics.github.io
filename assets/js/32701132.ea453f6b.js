(self.webpackChunkhwachongrobo_github_io=self.webpackChunkhwachongrobo_github_io||[]).push([[651],{3905:function(A,e,t){"use strict";t.d(e,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function o(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function a(A,e){if(null==A)return{};var t,r,n=function(A,e){if(null==A)return{};var t,r,n={},o=Object.keys(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var l=r.createContext({}),c=function(A){var e=r.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},u=function(A){var e=c(A.components);return r.createElement(l.Provider,{value:e},A.children)},s={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(A,e){var t=A.components,n=A.mdxType,o=A.originalType,l=A.parentName,u=a(A,["components","mdxType","originalType","parentName"]),g=c(t),p=n,E=g["".concat(l,".").concat(p)]||g[p]||s[p]||o;return t?r.createElement(E,i(i({ref:e},u),{},{components:t})):r.createElement(E,i({ref:e},u))}));function p(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var o=t.length,i=new Array(o);i[0]=g;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=A,a.mdxType="string"==typeof A?A:n,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8215:function(A,e,t){"use strict";var r=t(7294);e.Z=function(A){var e=A.children,t=A.hidden,n=A.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},5064:function(A,e,t){"use strict";t.d(e,{Z:function(){return s}});var r=t(7294),n=t(9443);var o=function(){var A=(0,r.useContext)(n.Z);if(null==A)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return A},i=t(6010),a="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var s=function(A){var e=A.lazy,t=A.block,n=A.defaultValue,s=A.values,g=A.groupId,p=A.className,E=o(),d=E.tabGroupChoices,C=E.setTabGroupChoices,m=(0,r.useState)(n),B=m[0],y=m[1],h=r.Children.toArray(A.children),v=[];if(null!=g){var f=d[g];null!=f&&f!==B&&s.some((function(A){return A.value===f}))&&y(f)}var b=function(A){var e=A.currentTarget,t=v.indexOf(e),r=s[t].value;y(r),null!=g&&(C(g,r),setTimeout((function(){var A,t,r,n,o,i,a,c;(A=e.getBoundingClientRect(),t=A.top,r=A.left,n=A.bottom,o=A.right,i=window,a=i.innerHeight,c=i.innerWidth,t>=0&&o<=c&&n<=a&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(l),setTimeout((function(){return e.classList.remove(l)}),2e3))}),150))},Q=function(A){var e,t;switch(A.keyCode){case u:var r=v.indexOf(A.target)+1;t=v[r]||v[0];break;case c:var n=v.indexOf(A.target)-1;t=v[n]||v[v.length-1]}null==(e=t)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},p)},s.map((function(A){var e=A.value,t=A.label;return r.createElement("li",{role:"tab",tabIndex:B===e?0:-1,"aria-selected":B===e,className:(0,i.Z)("tabs__item",a,{"tabs__item--active":B===e}),key:e,ref:function(A){return v.push(A)},onKeyDown:Q,onFocus:b,onClick:b},t)}))),e?(0,r.cloneElement)(h.filter((function(A){return A.props.value===B}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(A,e){return(0,r.cloneElement)(A,{key:e,hidden:A.props.value!==B})}))))}},9443:function(A,e,t){"use strict";var r=(0,t(7294).createContext)(void 0);e.Z=r},3570:function(A,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return g},default:function(){return E}});var r=t(2122),n=t(9756),o=(t(7294),t(3905)),i=t(5064),a=t(8215),l=["components"],c={sidebar_position:2},u="PID Controller",s={unversionedId:"lego/programming/pid-controller",id:"lego/programming/pid-controller",isDocsHomePage:!1,title:"PID Controller",description:"PID. Proportional\u2013Integral\u2013Derivative.",source:"@site/docs/lego/programming/pid-controller.mdx",sourceDirName:"lego/programming",slug:"/lego/programming/pid-controller",permalink:"/lego/programming/pid-controller",editUrl:"https://github.com/hwachongrobo/hwachongrobo.github.io/edit/main/docs/lego/programming/pid-controller.mdx",version:"current",lastUpdatedBy:"Vincent Cayadi",lastUpdatedAt:1626591458,formattedLastUpdatedAt:"7/18/2021",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Pybricks",permalink:"/lego/programming/pybricks"},next:{title:"Introduction",permalink:"/soccer-lightweight/introduction"}},g=[],p={toc:g};function E(A){var e=A.components,c=(0,n.Z)(A,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,c,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pid-controller"},"PID Controller"),(0,o.kt)("p",null,"PID. Proportional\u2013Integral\u2013Derivative.",(0,o.kt)("br",{parentName:"p"}),"\n","In Lego, it is commonly used for insane and accurate line tracking.  "),(0,o.kt)("p",null,"PID Math:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"PID Formula",src:t(8906).Z}),"  "),(0,o.kt)("h1",{id:"what-does-pid-mean"},"What does PID mean?"),(0,o.kt)("p",null,"P -   "),(0,o.kt)("p",null,"I -   "),(0,o.kt)("p",null,"D -   "),(0,o.kt)("p",null,'So this is how you should program PID in all three "programming languages"'),(0,o.kt)(i.Z,{defaultValue:"ev3-g",values:[{label:"EV3-G",value:"ev3-g"},{label:"Pybricks",value:"pybricks"},{label:"Small Basic EV3",value:"sbev3"}],mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"ev3-g",mdxType:"TabItem"},(0,o.kt)("p",null,"  ","![Screenshot of EV3-G-PID][]")),(0,o.kt)(a.Z,{value:"pybricks",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"  \n"))),(0,o.kt)(a.Z,{value:"sbev3",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'for i = 1 to 4\n    Motor.Move("BC", 50, 720, "True")\n    Motor.MoveSync("BC", 30, 0, 320, "True") \nEndFor\n')))))}E.isMDXComponent=!0},6010:function(A,e,t){"use strict";function r(A){var e,t,n="";if("string"==typeof A||"number"==typeof A)n+=A;else if("object"==typeof A)if(Array.isArray(A))for(e=0;e<A.length;e++)A[e]&&(t=r(A[e]))&&(n&&(n+=" "),n+=t);else for(e in A)A[e]&&(n&&(n+=" "),n+=e);return n}function n(){for(var A,e,t=0,n="";t<arguments.length;)(A=arguments[t++])&&(e=r(A))&&(n&&(n+=" "),n+=e);return n}t.d(e,{Z:function(){return n}})},8906:function(A,e){"use strict";e.Z="data:image/jpeg;base64,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"}}]);