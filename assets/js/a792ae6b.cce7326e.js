"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8536],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},56980:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={sidebar_position:10},c=void 0,u={unversionedId:"map",id:"map",isDocsHomePage:!1,title:"map",description:"this part is not finished",source:"@site/docs/map.md",sourceDirName:".",slug:"/map",permalink:"/docs/map",editUrl:"https://github.com/The-Microservice-Dungeon/docs/edit/main/docs/map.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"robot",permalink:"/docs/robot"},next:{title:"gameLog",permalink:"/docs/gameLog"}},p=[{value:"Gameworld Creation",id:"gameworld-creation",children:[]},{value:"Gameworld",id:"gameworld",children:[]},{value:"Planet",id:"planet",children:[]},{value:"Resource Type",id:"resource-type",children:[]},{value:"Resource",id:"resource",children:[]},{value:"Minings",id:"minings",children:[]}],s={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"this part is not finished"))),(0,i.kt)("h1",{id:"map-service-technical-view"},"Map Service Technical View"),(0,i.kt)("h2",{id:"gameworld-creation"},"Gameworld Creation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create new Gameworld (player_amount round_amount)"),(0,i.kt)("li",{parentName:"ul"},"Get all Gameworlds"),(0,i.kt)("li",{parentName:"ul"},'Get the Gameworld with "status": "active" including the Planets'),(0,i.kt)("li",{parentName:"ul"},"Get a single Planet including planet_type"),(0,i.kt)("li",{parentName:"ul"},"Get a planet\u2019s neighbours"),(0,i.kt)("li",{parentName:"ul"},"Get a planet\u2019s specific neighbour (404 when not found)"),(0,i.kt)("li",{parentName:"ul"},"Turn planet into space station / spawn"),(0,i.kt)("li",{parentName:"ul"},"Get all ResourceTypes"),(0,i.kt)("li",{parentName:"ul"},"Get Resources for a given planet including it\u2019s resource_type"),(0,i.kt)("li",{parentName:"ul"},"Mine resources (of a certain resource_type) from a given planet, for one or several robots (with given transaction IDs) ",(0,i.kt)("em",{parentName:"li"},"Actual mined amount is sent via event")),(0,i.kt)("li",{parentName:"ul"},"Replenish resources (of a certain resource_type) on a given planet ",(0,i.kt)("em",{parentName:"li"},"Resource replenishment is sent via event")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Spawn creation is sent via event"))),(0,i.kt)("h2",{id:"gameworld"},"Gameworld"),(0,i.kt)("p",null,"POST /gameworlds"),(0,i.kt)("p",null,"Payload"),(0,i.kt)("p",null,'{\n"gameworld": {\n"player_amount": 100,\n"round_amount": 1000\n}\n}'),(0,i.kt)("p",null,"GET /gameworlds"),(0,i.kt)("p",null,'[\n{\n"id": "19ae9ee7-d790-44cd-b5fc-8d618cf92ed1",\n"status": "active"\n}\n]'),(0,i.kt)("p",null,"GET /gameworlds/:id"),(0,i.kt)("p",null,' {\n"id": "19ae9ee7-d790-44cd-b5fc-8d618cf92ed1",\n"status": "active",\n"planets": []\n}'),(0,i.kt)("h2",{id:"planet"},"Planet"),(0,i.kt)("p",null,"GET /planets/:id"),(0,i.kt)("p",null,' {\n"id": "e0448835-cc2d-40ad-b452-45bd7b7778b7",\n"gameworld_id": "19ae9ee7-d790-44cd-b5fc-8d618cf92ed1",\n"taken_at": "timestamp",\n"planet_type": "spawn",\n"neighbours": [],\n"resources": [],\n"movement_difficulty": 0,\n"recharge_multiplicator": 0\n}'),(0,i.kt)("p",null,"GET /planets/:id/neighbours"),(0,i.kt)("p",null,'{\n"neighbours": [],\n}'),(0,i.kt)("p",null,"GET /planets/:id/neighbours/:neighbour_id"),(0,i.kt)("p",null,'{\n"neighbour": {\n"id": "e0448835-cc2d-40ad-b452-45bd7b7778b7",\n"gameworld_id": "19ae9ee7-d790-44cd-b5fc-8d618cf92ed1",\n"taken_at": "2021-10-27T09:54:55.814Z",\n"planet_type": "spawn",\n"neighbours": [],\n"resources": [],\n"movement_difficulty": 0,\n"recharge_multiplicator": 0\n}\n}'),(0,i.kt)("h2",{id:"resource-type"},"Resource Type"),(0,i.kt)("p",null,"GET /resource_types"),(0,i.kt)("p",null,'{\n"resource_types": []\n}'),(0,i.kt)("h2",{id:"resource"},"Resource"),(0,i.kt)("p",null,"GET /planets/:id/resources"),(0,i.kt)("p",null,'[\n{\n"id": "f5b34539-4bcd-4a3d-b6f2-da2c580eae1c",\n"planet_id": "e0448835-cc2d-40ad-b452-45bd7b7778b7",\n"resource_type": {\n"id": "7014e90e-7f52-481e-8685-304898348a18",\n"name": "iron",\n"difficulty": 4\n},\n"max_amount": 1000,\n"current_amount": 400\n}\n]'),(0,i.kt)("p",null,"GET /planets/:id/resources/:resource_id"),(0,i.kt)("p",null,'{\n"id": "f5b34539-4bcd-4a3d-b6f2-da2c580eae1c",\n"planet_id": "e0448835-cc2d-40ad-b452-45bd7b7778b7",\n"resource_type": {\n"id": "7014e90e-7f52-481e-8685-304898348a18",\n"name": "iron",\n"difficulty": 4\n},\n"max_amount": 1000,\n"current_amount": 400\n}'),(0,i.kt)("h2",{id:"minings"},"Minings"),(0,i.kt)("p",null,"POST /planets/:id/minings"),(0,i.kt)("p",null,"Payload"),(0,i.kt)("p",null,'  {\n"mining": {\n"amount_mined": 1000,\n"resource_type": "iron"\n}\n}'))}d.isMDXComponent=!0}}]);