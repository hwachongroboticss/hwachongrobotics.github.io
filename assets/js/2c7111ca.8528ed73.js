(self.webpackChunkhwachongrobotics_github_io=self.webpackChunkhwachongrobotics_github_io||[]).push([[764],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return y}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=s(o),y=r,m=h["".concat(l,".").concat(y)]||h[y]||u[y]||a;return o?n.createElement(m,c(c({ref:t},p),{},{components:o})):n.createElement(m,c({ref:t},p))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=o[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3964:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return h}});var n=o(2122),r=o(9756),a=(o(7294),o(3905)),c=["components"],i={},l="Chocolatey",s={unversionedId:"others/chocolatey",id:"others/chocolatey",isDocsHomePage:!1,title:"Chocolatey",description:"Package Manager For Windows",source:"@site/docs/others/03-chocolatey.mdx",sourceDirName:"others",slug:"/others/chocolatey",permalink:"/others/chocolatey",editUrl:"https://github.com/hwachongrobotics/hwachongrobotics.github.io/edit/main/docs/others/03-chocolatey.mdx",version:"current",lastUpdatedAt:1628340369,formattedLastUpdatedAt:"8/7/2021",sidebarPosition:3,frontMatter:{},sidebar:"others",previous:{title:"Visual Studio Code Extensions",permalink:"/others/vscode-extensions"}},p=[],u={toc:p};function h(e){var t=e.components,o=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chocolatey"},"Chocolatey"),(0,a.kt)("p",null,"Package Manager For Windows"),(0,a.kt)("p",null,"As all of you may know Im lazy. So after every clean install of Windows, its a pain to have to redownload everything. Going to their respective websites and download their install files. Therefore, I use Chocolatey - a windows package manager."),(0,a.kt)("h1",{id:"chocolatey-install"},"Chocolatey install"),(0,a.kt)("p",null,"Open up power shell and paste this line in"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))\n")),(0,a.kt)("p",null,"What it does I dont really know \ud83d\ude15"),(0,a.kt)("p",null,"After this you can just type ",(0,a.kt)("inlineCode",{parentName:"p"},"choco install <package name>")," into your powershell terminal and boom it will be automatically installed"),(0,a.kt)("p",null,"If you want to get some reference, this is what I install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"choco install googlechrome brave 7zip vlc python3 git vscode audacity autocad eagle mongodb-compass obs-studio obs-virtualcam qbittorrent winfetch whatsapp steam epicgameslauncher geforce-experience hwmonitor chrome-remote-desktop-host nodejs-lts -y\n")),(0,a.kt)("p",null,"For more information visit ",(0,a.kt)("a",{parentName:"p",href:"https://community.chocolatey.org/packages"},"their website")," where you can find the packages to install"))}h.isMDXComponent=!0}}]);