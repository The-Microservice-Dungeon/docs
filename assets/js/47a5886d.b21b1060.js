"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9020],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,g=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35311:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={sidebar_position:2},p="Tradeables (Recources/Items/Upgrades)",d={unversionedId:"trading/tradeables",id:"trading/tradeables",isDocsHomePage:!1,title:"Tradeables (Recources/Items/Upgrades)",description:"Tradeables are Item, Upgrade or Regeneration (this is not to be mixed up with the energy regeneration of the robot). They have an ID, Name, Description, Price, Type and Original Price. Name and Description are needed to make it readable by humans if a player asks the trading service for a list of all items and their prices. All Item have an adjustable price which will be changed be the economy algorithm of the trading service, based on multiple factors such as demand, current round, etc.",source:"@site/docs/trading/tradeables.md",sourceDirName:"trading",slug:"/trading/tradeables",permalink:"/docs/trading/tradeables",editUrl:"https://github.com/The-Microservice-Dungeon/docs/edit/main/docs/trading/tradeables.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Trading Service Technical View",permalink:"/docs/trading/trading_entry"},next:{title:"Economy",permalink:"/docs/trading/economy"}},u=[{value:"Resources",id:"resources",children:[{value:"Resources types",id:"resources-types",children:[]}]},{value:"Items",id:"items",children:[{value:"Special Items",id:"special-items",children:[]},{value:"Item restrictions",id:"item-restrictions",children:[]}]},{value:"Upgrades",id:"upgrades",children:[{value:"Upgrade types",id:"upgrade-types",children:[]},{value:"Upgrade Prices",id:"upgrade-prices",children:[]},{value:"Upgrade Restriktion",id:"upgrade-restriktion",children:[]}]}],s={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tradeables-recourcesitemsupgrades"},"Tradeables (Recources/Items/Upgrades)"),(0,l.kt)("p",null,"Tradeables are Item, Upgrade or Regeneration (this is not to be mixed up with the energy regeneration of the robot). They have an ID, Name, Description, Price, Type and Original Price. Name and Description are needed to make it readable by humans if a player asks the trading service for a list of all items and their prices. All Item have an adjustable price which will be changed be the economy algorithm of the trading service, based on multiple factors such as demand, current round, etc.\nResources"),(0,l.kt)("p",null,"Resources can be sold via the trading service. A Resource has ID, Price, Type and OriginalPrice."),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("h3",{id:"resources-types"},"Resources types"),(0,l.kt)("p",null,"Before you will be able to afford more than just your starting robot you will have to mine resources."),(0,l.kt)("p",null,"There are five resource types, which can be found on the planets.\nThese are the starting selling prices for the resources. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Price"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Coal"),(0,l.kt)("td",{parentName:"tr",align:null},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRON"),(0,l.kt)("td",{parentName:"tr",align:null},"Iron"),(0,l.kt)("td",{parentName:"tr",align:null},"15")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GEM"),(0,l.kt)("td",{parentName:"tr",align:null},"Gem"),(0,l.kt)("td",{parentName:"tr",align:null},"30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GOLD"),(0,l.kt)("td",{parentName:"tr",align:null},"Gold"),(0,l.kt)("td",{parentName:"tr",align:null},"50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PLATIN"),(0,l.kt)("td",{parentName:"tr",align:null},"Platin"),(0,l.kt)("td",{parentName:"tr",align:null},"60")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/resources/resources.json"},"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/resources/resources.json"),")"),(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/resource/ResourceRestController.java"},"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/resource/ResourceRestController.java"),")")),(0,l.kt)("h2",{id:"items"},"Items"),(0,l.kt)("h3",{id:"special-items"},"Special Items"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Price"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ROBOT"),(0,l.kt)("td",{parentName:"tr",align:null},"Robot"),(0,l.kt)("td",{parentName:"tr",align:null},"Buys another Robot"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEALTH"),(0,l.kt)("td",{parentName:"tr",align:null},"Health Regeneration"),(0,l.kt)("td",{parentName:"tr",align:null},"Heals the robot to full HP"),(0,l.kt)("td",{parentName:"tr",align:null},"50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ENERGY"),(0,l.kt)("td",{parentName:"tr",align:null},"Energy Regeneration"),(0,l.kt)("td",{parentName:"tr",align:null},"Restores all energy"),(0,l.kt)("td",{parentName:"tr",align:null},"75")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ROCKET"),(0,l.kt)("td",{parentName:"tr",align:null},"Rocket Item"),(0,l.kt)("td",{parentName:"tr",align:null},"5 Damage on a single target"),(0,l.kt)("td",{parentName:"tr",align:null},"40")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WORMHOLE"),(0,l.kt)("td",{parentName:"tr",align:null},"Wormhole Item"),(0,l.kt)("td",{parentName:"tr",align:null},"Teleport to random planet"),(0,l.kt)("td",{parentName:"tr",align:null},"80")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LONG_RANGE_BOMBARDMENT"),(0,l.kt)("td",{parentName:"tr",align:null},"Long range Bombardment Item"),(0,l.kt)("td",{parentName:"tr",align:null},"10 Damage to all robots on a specific planet"),(0,l.kt)("td",{parentName:"tr",align:null},"60")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SELF_DESTRUCTION"),(0,l.kt)("td",{parentName:"tr",align:null},"Self Destruction Item"),(0,l.kt)("td",{parentName:"tr",align:null},"Self-destruct a robot and damage all robots on the planet by 20"),(0,l.kt)("td",{parentName:"tr",align:null},"80")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REPAIR_SWARM"),(0,l.kt)("td",{parentName:"tr",align:null},"Repair Swarm Item"),(0,l.kt)("td",{parentName:"tr",align:null},"Heal all your robots on the planet by 20"),(0,l.kt)("td",{parentName:"tr",align:null},"90")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUKE"),(0,l.kt)("td",{parentName:"tr",align:null},"Nuke Item"),(0,l.kt)("td",{parentName:"tr",align:null},"100 damage on all robots on a specific planet"),(0,l.kt)("td",{parentName:"tr",align:null},"210")))),(0,l.kt)("p",null,"(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/resources/items.json"},"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/resources/items.json"),")"),(0,l.kt)("h3",{id:"item-restrictions"},"Item restrictions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can only buy one special Item per robot per round. This is to reduce price manipulation by a single player. this also includes the max health/energy item.")),(0,l.kt)("p",null,"Robots are being listed as items but there are no limits on how many robots can be bought per round per player. You can buy as many robots as you have money, because the player is purchasing the robot directly and not through a robot."),(0,l.kt)("h2",{id:"upgrades"},"Upgrades"),(0,l.kt)("p",null,"Upgrades improve the variables of your robot. For example, a bigger health pool. "),(0,l.kt)("h3",{id:"upgrade-types"},"Upgrade types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STORAGE_N"),(0,l.kt)("td",{parentName:"tr",align:null},"Storage Level N=1-5 Upgrade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEALTH_N"),(0,l.kt)("td",{parentName:"tr",align:null},"Health Points Level N=1-5 Upgrade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DAMAGE_N"),(0,l.kt)("td",{parentName:"tr",align:null},"Damage Points Level N=1-5 Upgrade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MINING_SPEED_N"),(0,l.kt)("td",{parentName:"tr",align:null},"Mining Speed Level N=1-5 Upgrade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MINING_N"),(0,l.kt)("td",{parentName:"tr",align:null},"Mining Strength Level N=1-5 Upgrade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MAX_ENERGY_N"),(0,l.kt)("td",{parentName:"tr",align:null},"Energy Capacity Level N=1-5 Upgrade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ENERGY_REGEN_N"),(0,l.kt)("td",{parentName:"tr",align:null},"Energy Regen Level N=1-5 Upgrade")))),(0,l.kt)("h3",{id:"upgrade-prices"},"Upgrade Prices"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Level"),(0,l.kt)("th",{parentName:"tr",align:null},"Price"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"1500")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"4000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"15000")))),(0,l.kt)("h3",{id:"upgrade-restriktion"},"Upgrade Restriktion"),(0,l.kt)("p",null,"There are two restrictions, when it comes to buying ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrades"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You can only buy ",(0,l.kt)("strong",{parentName:"p"},"one")," ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrade")," per robot in one round. The reason for this is that an upgrade is seen as a single action. Just imagine it as giving your car to the shop for a tuning.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You can only buy an upgrade to the next level of the variable, you want to improve. For example, you only can upgrade your ",(0,l.kt)("strong",{parentName:"p"},"HEALTH_1 to HEALTH_2"),"."))))}m.isMDXComponent=!0}}]);