"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[703],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const i={},o="Testing with Postman",s={unversionedId:"Testing/Whisper-Postman",id:"Testing/Whisper-Postman",title:"Testing with Postman",description:"The easiest way to test the Whisper Transcriber Service is with Postman.",source:"@site/docs/60-Testing/34-Whisper-Postman.md",sourceDirName:"60-Testing",slug:"/Testing/Whisper-Postman",permalink:"/azure-openai-service-proxy/Testing/Whisper-Postman",draft:!1,editUrl:"https://github.com/gloveboxes/azure-openai-service-proxy/tree/master/docs/docs/60-Testing/34-Whisper-Postman.md",tags:[],version:"current",sidebarPosition:34,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Whisper Anywhere Access",permalink:"/azure-openai-service-proxy/Proxies/Whisper-ngrok"},next:{title:"Finished",permalink:"/azure-openai-service-proxy/Summary"}},l={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing-with-postman"},"Testing with Postman"),(0,a.kt)("p",null,"The easiest way to test the Whisper Transcriber Service is with ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman"),"."),(0,a.kt)("p",null,"Start Postman and create a new HTTP request."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new HTTP request"),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"POST")),(0,a.kt)("li",{parentName:"ol"},"Enter the endpoint of your flask server. Eg, ",(0,a.kt)("inlineCode",{parentName:"li"},"http://<HOST ADDRESS>:5500/transcribe")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Body"),", then select ",(0,a.kt)("inlineCode",{parentName:"li"},"binary")),(0,a.kt)("li",{parentName:"ol"},"Select the audio file you wish to transcribe"),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Send"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The image is a screenshot of Postman for sending an audio file",src:n(7132).Z,width:"1269",height:"607"})),(0,a.kt)("p",null,"The audio file will be transcribed and when complete, will return a JSON document with the transcription. Here's an example of a transcription that was a mix of English questions with Tagalog replies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "transcription": " Hi, so how was the gym today? Mabuti. Madaming tao. So what did you do? Ginamit ko yung treadmill. Did you do any stretching? Hindi. Not today? Hindi ngayong araw."\n}\n')))}u.isMDXComponent=!0},7132:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/postman-55161a47aa9af0e9d643c56d62381f0a.png"}}]);