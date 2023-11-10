"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[859],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const o={},i="Event authorization",l={unversionedId:"Authorization/authorisation",id:"Authorization/authorisation",title:"Event authorization",description:"Access to the REST endpoint is controlled by an event code. The REST endpoint is accessible when the current UTC is between the StartUTC and the EndUTC times and the event is active. The event code is passed in the openai-event-code header. If the event code is not passed, or the event code is not active, or the current UTC is not between the StartUTC and the EndUTC times, the REST endpoint will return a 401 unauthorized error.",source:"@site/docs/30-Authorization/10-authorisation.md",sourceDirName:"30-Authorization",slug:"/Authorization/authorisation",permalink:"/azure-openai-service-proxy/Authorization/authorisation",draft:!1,editUrl:"https://github.com/gloveboxes/azure-openai-service-proxy/tree/master/docs/docs/30-Authorization/10-authorisation.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authorisation",permalink:"/azure-openai-service-proxy/category/authorisation"},next:{title:"Adding an event code",permalink:"/azure-openai-service-proxy/Authorization/adding-event"}},d={},p=[],s={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"event-authorization"},"Event authorization"),(0,a.kt)("p",null,"Access to the REST endpoint is controlled by an event code. The REST endpoint is accessible when the current UTC is between the StartUTC and the EndUTC times and the event is active. The event code is passed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"openai-event-code")," header. If the event code is not passed, or the event code is not active, or the current UTC is not between the StartUTC and the EndUTC times, the REST endpoint will return a ",(0,a.kt)("inlineCode",{parentName:"p"},"401")," unauthorized error."),(0,a.kt)("p",null,"Event code details are stored in an Azure Storage account table named ",(0,a.kt)("inlineCode",{parentName:"p"},"playgroundauthorization"),". This table is created when the app is deployed and starts. The table has the following schema:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PartitionKey"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be 'playground'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RowKey"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The event code must be between 6 and 20 characters long. For example myevent2022. Note, you can't use the following characters in the event name: 'The forward slash (/), backslash (","\\","), number sign (#), and question mark (?) characters' as they aren't allowed for an Azure Storage Table RowKey property name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Active"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Is the event active, true, or false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MaxTokenCap"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum number of tokens per request. This overrides the user set Max Token value for load balancing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"StartUTC"),(0,a.kt)("td",{parentName:"tr",align:null},"datetime"),(0,a.kt)("td",{parentName:"tr",align:null},"The start date and time of the event in UTC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EndUTC"),(0,a.kt)("td",{parentName:"tr",align:null},"datetime"),(0,a.kt)("td",{parentName:"tr",align:null},"The end date and time of the event in UTC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EventName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ContactName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the event contact")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ContactEmail"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The email address of the event contact")))))}c.isMDXComponent=!0}}]);