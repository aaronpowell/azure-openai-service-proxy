"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[996],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=d(t),m=a,h=l["".concat(p,".").concat(m)]||l[m]||u[m]||o;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(7462),a=(t(7294),t(4137));const o={},i="Embeddings API",s={unversionedId:"raw-api-access/embedding",id:"raw-api-access/embedding",title:"Embeddings API",description:"The OpenAI proxy service also supports the OpenAI Embeddings API. The Embeddings API is a REST API that generates embeddings for a given text. Requests are forwarded to the Azure OpenAI service and the response is returned to the caller.",source:"@site/docs/80-raw-api-access/30-embedding.md",sourceDirName:"80-raw-api-access",slug:"/raw-api-access/embedding",permalink:"/azure-openai-service-proxy/raw-api-access/embedding",draft:!1,editUrl:"https://github.com/gloveboxes/azure-openai-service-proxy/tree/master/docs/docs/80-raw-api-access/30-embedding.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Completions API",permalink:"/azure-openai-service-proxy/raw-api-access/completions"}},p={},d=[{value:"Using the OpenAI SDK",id:"using-the-openai-sdk",level:2},{value:"OpenAI Embeddings with Curl",id:"openai-embeddings-with-curl",level:2}],c={toc:d},l="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"embeddings-api"},"Embeddings API"),(0,a.kt)("p",null,"The OpenAI proxy service also supports the OpenAI Embeddings API. The Embeddings API is a REST API that generates embeddings for a given text. Requests are forwarded to the Azure OpenAI service and the response is returned to the caller."),(0,a.kt)("h2",{id:"using-the-openai-sdk"},"Using the OpenAI SDK"),(0,a.kt)("p",null,"The following example is from the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/examples")," folder and demonstrates how to use the OpenAI Python SDK version 1.2.x to access the embeddings API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'""" Test Azure OpenAI Embeddings API """\n\nimport os\nfrom dotenv import load_dotenv\nfrom openai import AzureOpenAI\n\nload_dotenv()\n\nENDPOINT_URL = os.environ.get("PROXY_ENDPOINT_URL")\nAPI_KEY = os.environ.get("EVENT_TOKEN")\nAPI_VERSION = "2023-09-01-preview"\nOPENAI_EMBEDDING_ENGINE = "text-embedding-ada-002"\n\n\nclient = AzureOpenAI(\n    azure_endpoint=ENDPOINT_URL,\n    api_key=API_KEY,\n    api_version=API_VERSION,\n)\n\n\ncontent = (\n    "This stunning leather wrap bracelet will add a touch of bohemian flair to your outfit."\n    "The bracelet features a braided leather band in a rich brown color, adorned with turquoise beads and silver charms. "\n    "The bracelet wraps around your wrist multiple times, creating a layered look that is eye-catching and stylish. "\n    "The bracelet is adjustable and has a button closure for a secure fit. "\n    "This leather wrap bracelet is the perfect accessory for any occasion, "\n    "whether you want to dress up a casual outfit or add some color to a formal one."\n)\n\n\nquery_embeddings = client.embeddings.create(\n    model=OPENAI_EMBEDDING_ENGINE, input=str(content), encoding_format="float"\n)\n\n# print(query_embeddings.model_dump_json(indent=2))\nprint(query_embeddings.data[0].embedding)\n')),(0,a.kt)("h2",{id:"openai-embeddings-with-curl"},"OpenAI Embeddings with Curl"),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," to access the OpenAI embeddings API. Remember, the ",(0,a.kt)("inlineCode",{parentName:"p"},"API_KEY")," is the EventCode/GitHubUserName, eg ",(0,a.kt)("inlineCode",{parentName:"p"},"hackathon/gloveboxes"),", and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ENDPOINT_URL")," is proxy url provided by the event administrator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl https://ENDPOINT_URL/v1/embeddings \\\n  -H "Content-Type: application/json" \\\n  -H "openai-event-code: API_KEY" \\\n  -d \'{\n    "input": "Your text string goes here"\n  }\'\n')),(0,a.kt)("p",null,"or pretty print the JSON response with ",(0,a.kt)("inlineCode",{parentName:"p"},"jq")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl https://ENDPOINT_URL/v1/embeddings \\\n  -H "Content-Type: application/json" \\\n  -H "openai-event-code: API_KEY" \\\n  -d \'{\n    "input": "Your text string goes here"\n  }\' | jq\n')))}u.isMDXComponent=!0}}]);