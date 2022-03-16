"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8536],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56980:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"map_entry",sidebar_position:11},p="Map Service Technical View",c={unversionedId:"map_entry",id:"map_entry",isDocsHomePage:!1,title:"Map Service Technical View",description:"This part is not completely finished.",source:"@site/docs/map.md",sourceDirName:".",slug:"/map_entry",permalink:"/docs/map_entry",editUrl:"https://github.com/The-Microservice-Dungeon/docs/edit/main/docs/map.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"map_entry",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Robot Actions",permalink:"/docs/robot/robotActions"},next:{title:"GameLog Service Technical View",permalink:"/docs/gameLog_entry"}},s=[{value:"Service-oriented Functions",id:"service-oriented-functions",children:[{value:"Create Gameworld",id:"create-gameworld",children:[]},{value:"Create Space Station",id:"create-space-station",children:[]},{value:"Get Planet Information",id:"get-planet-information",children:[]},{value:"Minings",id:"minings",children:[]}]},{value:"Player Relevant Events",id:"player-relevant-events",children:[]},{value:"Repository Link Map",id:"repository-link-map",children:[]}],d={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"map-service-technical-view"},"Map Service Technical View"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This part is not completely finished."),(0,o.kt)("p",{parentName:"div"},"Here are the most important REST calls and events that are used by other services. Some events are used by the player. these will be marked as ",(0,o.kt)("strong",{parentName:"p"},"player relevant events"),"."),(0,o.kt)("p",{parentName:"div"},"The complete list is here",(0,o.kt)("a",{parentName:"p",href:"/docs/openapi/map"},"OpenAPI")," and here",(0,o.kt)("a",{parentName:"p",href:"/docs/asyncapi/map"},"AsyncAPI"),"."))),(0,o.kt)("h2",{id:"service-oriented-functions"},"Service-oriented Functions"),(0,o.kt)("h3",{id:"create-gameworld"},"Create Gameworld"),(0,o.kt)("p",null,"Create new Gameworld (size is in correlation to player_amount). This REST call is used by the game service when a new game is created."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"POST")," ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://{defaultHost}/gameworlds\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Payload"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  {\n    "gameworld": {\n      "player_amount": 100,\n      "round_amount": 1000\n    }\n  }\n')),(0,o.kt)("p",null,"Gameworld creation ",(0,o.kt)("strong",{parentName:"p"},"response")," is sent via event in the channel: ",(0,o.kt)("strong",{parentName:"p"},"gameworld-created")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Example Event payload"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\n  "spacestation_ids": [\n    "497f6eca-6276-4993-bfeb-53cbbbba6f08"\n  ],\n  "status": "active"\n}\n')),(0,o.kt)("h3",{id:"create-space-station"},"Create Space Station"),(0,o.kt)("p",null,"Automatically another event, that is saved by the trading service, is produced by the map service. In the channel ",(0,o.kt)("strong",{parentName:"p"},"spacestation-created")," every planetId is published, where you can find a space station. This information is used by the trading service to double check the trade commands that can be only placed on space stations and the robot service spawns the new bought robots according to this information only on space stations."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Example Event payload"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "planet_id": "fe9732a9-b905-4934-8835-ed5a93494397"\n}\n')),(0,o.kt)("h3",{id:"get-planet-information"},"Get Planet Information"),(0,o.kt)("p",null,"Get a single Planet including planet_type by id including the neighbours. This REST call the robot service is using for the movement action to get the information for the new planet the robot moved to. It also includes the neighbours for the ",(0,o.kt)("strong",{parentName:"p"},"neighbours event")," of the robot."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"GET"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://{defaultHost}/planets/{planet_id}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Example Response"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n\n  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\n  "movement_difficulty": 0,\n  "recharge_multiplicator": 0,\n  "gameworld_id": "5bd7c16e-97a9-49f5-974e-307be5fc576d",\n  "planet_type": "default",\n  "neighbours": \n\n[\n\n  {\n      "planet_id": "fe9732a9-b905-4934-8835-ed5a93494397",\n      "movement_difficulty": 0,\n      "direction": "north"\n  }\n],\n"created_at": "2019-08-24T14:15:22Z",\n"updated_at": "2019-08-24T14:15:22Z",\n"resource":\n\n  {\n      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\n      "planet_id": "fe9732a9-b905-4934-8835-ed5a93494397",\n      "max_amount": 0,\n      "current_amount": 0,\n      "created_at": "2019-08-24T14:15:22Z",\n      "updated_at": "2019-08-24T14:15:22Z",\n      "resource_type": "coal"\n  }\n\n}\n')),(0,o.kt)("h3",{id:"minings"},"Minings"),(0,o.kt)("p",null,"The robot service is using this REST call to translate a mining command into a mining action. the amount requested is calculated by the robot service based on the robots mining upgrade level."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"POST"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://{defaultHost}/planets/{planet_id}/minings\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Request Payload"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "mining":\n    {\n        "amount_requested": 1\n    }\n}\n')),(0,o.kt)("h2",{id:"player-relevant-events"},"Player Relevant Events"),(0,o.kt)("p",null,"The player should be listening to two events:"),(0,o.kt)("p",null,"First the result of a mining command to a robot is produced by the map service as an event in the channel: ",(0,o.kt)("strong",{parentName:"p"},"resource-mined"),". It contains the\nmined resource (of a certain resource_type) from a given planet, for one robot (with given transaction IDs which you can link to your commands), the actual mined amount and how much of that resource left on that planet."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Example Event Payload"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "planet_id": "fe9732a9-b905-4934-8835-ed5a93494397",\n  "resource_id": "4d5215ed-38bb-48ed-879a-fdb9ca58522f",\n  "resource_type": "coal",\n  "amount_mined": 0,\n  "amount_left": 0\n}\n')),(0,o.kt)("p",null,"Secondly the resources are being automatically generated by the map service on random planets. These replenish resources (of a certain resource_type) on a given planet is sent via event. There is no information on how much of a resource has been generated. You can find this in the channel: ",(0,o.kt)("strong",{parentName:"p"},"resource-replenished"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Example Event Payload"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "planet_id": "fe9732a9-b905-4934-8835-ed5a93494397",\n  "resource": "d008879e-b5d9-47da-af4e-3c8f40b7c9ee",\n  "resource_type": "coal"\n}\n')),(0,o.kt)("h2",{id:"repository-link-map"},"Repository Link Map"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/The-Microservice-Dungeon/map"},"Repository Link Map")))}u.isMDXComponent=!0}}]);