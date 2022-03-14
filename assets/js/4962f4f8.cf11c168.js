"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7047],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,h=s["".concat(m,".").concat(u)]||s[u]||c[u]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},39400:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:2},m="Commands",p={unversionedId:"game/commands",id:"game/commands",isDocsHomePage:!1,title:"Commands",description:"The game service must manage the commands from the player, because it owns the information about the round timer and can send the commands at the right time to the right services.",source:"@site/docs/game/commands.md",sourceDirName:"game",slug:"/game/commands",permalink:"/docs/game/commands",editUrl:"https://github.com/The-Microservice-Dungeon/docs/edit/main/docs/game/commands.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Game Loop",permalink:"/docs/game/game"},next:{title:"Trading Service Overview",permalink:"/docs/trading_entry"}},d=[{value:"Wrapper",id:"wrapper",children:[]},{value:"commandObject",id:"commandobject",children:[]}],c={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"commands"},"Commands"),(0,o.kt)("p",null,"The game service must manage the commands from the player, because it owns the information about the round timer and can send the commands at the right time to the right services."),(0,o.kt)("p",null,"It ownes a list of all robots, to verify, that players dont sent commands for robots of other players."),(0,o.kt)("p",null,"The list is created by the information of the robot-create-events, so the service knows all the robots, that are owned by the players."),(0,o.kt)("p",null,"The commands from the players are stored in the game service and are sent to the other services, that fit the command-type during the execution phase."),(0,o.kt)("p",null,"The players recieves an id, to find the right event, that informs him of the outcome of his command."),(0,o.kt)("p",null,"How does a command look like?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n\n    "gameId": "d290f1ee-6c54-4b01-90e6-d701748f0851",\n    "playerToken": "d290f1ee-6c54-4b01-90e6-d701748f0851",\n    "robotId": "d290f1ee-6c54-4b01-90e6-d701748f0851",\n    "commandType": "blocking",\n    "commandObject": \n\n    {\n        "commandType": "blocking",\n        "planetId": "d290f1ee-6c54-4b01-90e6-d701748f0851",\n        "targetId": "d290f1ee-6c54-4b01-90e6-d701748f0851",\n        "itemName": "string",\n        "itemQuantity": 5\n    }\n\n}\n')),(0,o.kt)("h2",{id:"wrapper"},"Wrapper"),(0,o.kt)("p",null,"The First part of the command is a wrapper, for the game service.\nWith that it can confirm, the command is for the right game ",(0,o.kt)("inlineCode",{parentName:"p"},"gameId"),", it confirms that if a robot is involved, that the robot belong to the player by checking the robots, which are regeistert to the playerToken.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"commandType")," is necessary for the game in the 'wraper' to be able to send the right command to the rigt service in the rigt round phase."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"commandType"),(0,o.kt)("th",{parentName:"tr",align:null},"receiving Service"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"blocking"'),(0,o.kt)("td",{parentName:"tr",align:null},"robot")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"movement"'),(0,o.kt)("td",{parentName:"tr",align:null},"robot")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"battle"'),(0,o.kt)("td",{parentName:"tr",align:null},"robot")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"mining"'),(0,o.kt)("td",{parentName:"tr",align:null},"robot")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"regeneration"'),(0,o.kt)("td",{parentName:"tr",align:null},"robot")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"battleItemUse"'),(0,o.kt)("td",{parentName:"tr",align:null},"robot")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"repairItemUse"'),(0,o.kt)("td",{parentName:"tr",align:null},"robot")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"moveItemUse"'),(0,o.kt)("td",{parentName:"tr",align:null},"robot")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"---"),(0,o.kt)("td",{parentName:"tr",align:null},"---")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"buying"'),(0,o.kt)("td",{parentName:"tr",align:null},"trading")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"selling"'),(0,o.kt)("td",{parentName:"tr",align:null},"trading")))),(0,o.kt)("p",null,"More information on the sequence of these commands you can find further down in the Gameloop."),(0,o.kt)("h2",{id:"commandobject"},"commandObject"),(0,o.kt)("p",null,"By seperating the wrapper from the object, the game service does not need to know about the contents of a command."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"the object:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    {\n        "commandType": "blocking",\n        "planetId": "d290f1ee-6c54-4b01-90e6-d701748f0851",\n        "targetId": "d290f1ee-6c54-4b01-90e6-d701748f0851",\n        "itemName": "string",\n        "itemQuantity": 5\n    }\n')),(0,o.kt)("p",null,"One thing to consider is that ",(0,o.kt)("inlineCode",{parentName:"p"},"planetId")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"targetId")," is chosen depending on the target Type for example of an item or an action of the robot. For example for mining you would use ",(0,o.kt)("inlineCode",{parentName:"p"},"planetId")," and for attacking another robot it would be ",(0,o.kt)("inlineCode",{parentName:"p"},"targetId"),"."),(0,o.kt)("p",null,"The response is always a ",(0,o.kt)("inlineCode",{parentName:"p"},"transactionId")," with which by listening to the rigt service you can recive the coresponding resolution of your command as an event."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"response example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "transactionId": "d290f1ee-6c54-4b01-90e6-d701748f0851"\n}\n')))}s.isMDXComponent=!0}}]);