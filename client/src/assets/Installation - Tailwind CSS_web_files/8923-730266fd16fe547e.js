"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8923,9744,8441,5151],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var u=r.createContext({}),c=function(e){var t,n=r.useContext(u),a=n;return e&&(a="function"==typeof(t=e)?e(n):l(l({},n),e)),a},i=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef(function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["components","mdxType","originalType","parentName"]),f=c(n),d=f["".concat(u,".").concat(a)]||f[a]||s[a]||o;return n?r.createElement(d,l(l({ref:t},i),{},{components:n})):r.createElement(d,l({ref:t},i))});function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=Array(o);l[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33594:function(e,t,n){n.d(t,{EL:function(){return i}});var r,a=n(67294),o=["bottom","height","left","right","top","width"],l=new Map,u=function e(){var t=[];l.forEach(function(e,n){var r,a,l=n.getBoundingClientRect();r=l,a=e.rect,void 0===r&&(r={}),void 0===a&&(a={}),o.some(function(e){return r[e]!==a[e]})&&(e.rect=l,t.push(e))}),t.forEach(function(e){e.callbacks.forEach(function(t){return t(e.rect)})}),r=window.requestAnimationFrame(e)},c="undefined"!=typeof window&&window.document&&window.document.createElement?a.useLayoutEffect:a.useEffect;function i(e,t,n){"boolean"==typeof(o=t)?s=t:(s=null==(d=null==t?void 0:t.observe)||d,f=null==t?void 0:t.onChange),(i=n)&&"[object Function]"==({}).toString.call(i)&&(f=n);var o,i,s,f,d,p=(0,a.useState)(e.current),b=p[0],v=p[1],m=(0,a.useRef)(!1),y=(0,a.useRef)(!1),g=(0,a.useState)(null),x=g[0],T=g[1],h=(0,a.useRef)(f);return c(function(){h.current=f,e.current!==b&&v(e.current)}),c(function(){b&&!m.current&&(m.current=!0,T(b.getBoundingClientRect()))},[b]),c(function(){if(s){var t=b;if(y.current||(y.current=!0,t=e.current),t){var n,a,o=(n=t,a=function(e){null==h.current||h.current(e),T(e)},{observe:function(){var e=0===l.size;l.has(n)?l.get(n).callbacks.push(a):l.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[a]}),e&&u()},unobserve:function(){var e=l.get(n);if(e){var t=e.callbacks.indexOf(a);t>=0&&e.callbacks.splice(t,1),e.callbacks.length||l.delete(n),l.size||cancelAnimationFrame(r)}}});return o.observe(),function(){o.unobserve()}}}},[s,b,e]),x}},49808:function(e,t,n){n.d(t,{O:function(){return F}});var r=n(67294),a=n(12351),o=n(19946),l=n(32984),u=n(61363),c=n(84575),i=n(16723),s=n(23784),f=n(14157),d=n(3855),p=n(46045);function b({onFocus:e}){let[t,n]=(0,r.useState)(!0);return t?r.createElement(p._,{as:"button",type:"button",features:p.A.Focusable,onFocus(t){t.preventDefault();let r,a=50;function o(){if(a--<=0){r&&cancelAnimationFrame(r);return}if(e()){n(!1),cancelAnimationFrame(r);return}r=requestAnimationFrame(o)}r=requestAnimationFrame(o)}}):null}var v,m=n(73781),y=n(81021),g=((v=g||{})[v.SetSelectedIndex=0]="SetSelectedIndex",v[v.RegisterTab=1]="RegisterTab",v[v.UnregisterTab=2]="UnregisterTab",v[v.RegisterPanel=3]="RegisterPanel",v[v.UnregisterPanel=4]="UnregisterPanel",v);let x={0(e,t){let n=e.tabs.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))});if(t.index<0)return{...e,selectedIndex:e.tabs.indexOf(n[0])};if(t.index>e.tabs.length)return{...e,selectedIndex:e.tabs.indexOf(n[n.length-1])};let r=e.tabs.slice(0,t.index),a=[...e.tabs.slice(t.index),...r].find(e=>n.includes(e));return a?{...e,selectedIndex:e.tabs.indexOf(a)}:e},1(e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],a=(0,c.z2)([...e.tabs,t.tab],e=>e.current),o=null!=(n=a.indexOf(r))?n:e.selectedIndex;return -1===o&&(o=e.selectedIndex),{...e,tabs:a,selectedIndex:o}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,c.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},T=(0,r.createContext)(null);function h(e){let t=(0,r.useContext)(T);if(null===t){let n=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,h),n}return t}T.displayName="TabsSSRContext";let O=(0,r.createContext)(null);function P(e){let t=(0,r.useContext)(O);if(null===t){let n=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,P),n}return t}O.displayName="TabsDataContext";let E=(0,r.createContext)(null);function w(e){let t=(0,r.useContext)(E);if(null===t){let n=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,w),n}return t}function I(e,t){return(0,l.E)(t.type,x,e,t)}E.displayName="TabsActionsContext";let R=r.Fragment,A=(0,a.yV)(function(e,t){let{defaultIndex:n=0,vertical:o=!1,manual:l=!1,onChange:u,selectedIndex:c=null,...f}=e,p=o?"vertical":"horizontal",v=l?"manual":"auto",m=null!==c,y=(0,s.T)(t),[g,x]=(0,r.useReducer)(I,{selectedIndex:null!=c?c:n,tabs:[],panels:[]}),h=(0,r.useMemo)(()=>({selectedIndex:g.selectedIndex}),[g.selectedIndex]),P=(0,d.E)(u||(()=>{})),w=(0,d.E)(g.tabs),A=(0,r.useMemo)(()=>({orientation:p,activation:v,...g}),[p,v,g]),k=(0,d.E)(m?e.selectedIndex:g.selectedIndex),j=(0,r.useMemo)(()=>({registerTab:e=>(x({type:1,tab:e}),()=>x({type:2,tab:e})),registerPanel:e=>(x({type:3,panel:e}),()=>x({type:4,panel:e})),change(e){k.current!==e&&P.current(e),m||x({type:0,index:e})}}),[x,m]);(0,i.e)(()=>{x({type:0,index:null!=c?c:n})},[c]);let S=(0,r.useRef)({tabs:[],panels:[]});return r.createElement(T.Provider,{value:S},r.createElement(E.Provider,{value:j},r.createElement(O.Provider,{value:A},A.tabs.length<=0&&r.createElement(b,{onFocus(){var e,t;for(let n of w.current)if((null==(e=n.current)?void 0:e.tabIndex)===0)return null==(t=n.current)||t.focus(),!0;return!1}}),(0,a.sY)({ourProps:{ref:y},theirProps:f,slot:h,defaultTag:R,name:"Tabs"}))))}),k=(0,a.yV)(function(e,t){let{orientation:n,selectedIndex:r}=P("Tab.List"),o=(0,s.T)(t);return(0,a.sY)({ourProps:{ref:o,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:"div",name:"Tabs.List"})}),j=(0,a.yV)(function(e,t){var n,d;let p=`headlessui-tabs-tab-${(0,o.M)()}`,{orientation:b,activation:v,selectedIndex:g,tabs:x,panels:T}=P("Tab"),O=w("Tab"),E=h("Tab"),I=(0,r.useRef)(null),R=(0,s.T)(I,t);(0,i.e)(()=>O.registerTab(I),[O,I]);let A=E.current.tabs.indexOf(p);-1===A&&(A=E.current.tabs.push(p)-1);let k=x.indexOf(I);-1===k&&(k=A);let j=k===g,S=(0,m.z)(e=>{let t=x.map(e=>e.current).filter(Boolean);if(e.key===u.R.Space||e.key===u.R.Enter){e.preventDefault(),e.stopPropagation(),O.change(k);return}switch(e.key){case u.R.Home:case u.R.PageUp:return e.preventDefault(),e.stopPropagation(),(0,c.jA)(t,c.TO.First);case u.R.End:case u.R.PageDown:return e.preventDefault(),e.stopPropagation(),(0,c.jA)(t,c.TO.Last)}if((0,l.E)(b,{vertical:()=>e.key===u.R.ArrowUp?(0,c.jA)(t,c.TO.Previous|c.TO.WrapAround):e.key===u.R.ArrowDown?(0,c.jA)(t,c.TO.Next|c.TO.WrapAround):void 0,horizontal:()=>e.key===u.R.ArrowLeft?(0,c.jA)(t,c.TO.Previous|c.TO.WrapAround):e.key===u.R.ArrowRight?(0,c.jA)(t,c.TO.Next|c.TO.WrapAround):void 0}))return e.preventDefault()}),C=(0,m.z)(()=>{var e;null==(e=I.current)||e.focus()}),D=(0,r.useRef)(!1),F=(0,m.z)(()=>{var e;D.current||(D.current=!0,null==(e=I.current)||e.focus(),O.change(k),(0,y.Y)(()=>{D.current=!1}))}),N=(0,m.z)(e=>{e.preventDefault()}),M=(0,r.useMemo)(()=>({selected:j}),[j]),z={ref:R,onKeyDown:S,onFocus:"manual"===v?C:F,onMouseDown:N,onClick:F,id:p,role:"tab",type:(0,f.f)(e,I),"aria-controls":null==(d=null==(n=T[k])?void 0:n.current)?void 0:d.id,"aria-selected":j,tabIndex:j?0:-1};return(0,a.sY)({ourProps:z,theirProps:e,slot:M,defaultTag:"button",name:"Tabs.Tab"})}),S=(0,a.yV)(function(e,t){let{selectedIndex:n}=P("Tab.Panels"),o=(0,s.T)(t),l=(0,r.useMemo)(()=>({selectedIndex:n}),[n]);return(0,a.sY)({ourProps:{ref:o},theirProps:e,slot:l,defaultTag:"div",name:"Tabs.Panels"})}),C=a.AN.RenderStrategy|a.AN.Static,D=(0,a.yV)(function(e,t){var n,l,u,c;let{selectedIndex:f,tabs:d,panels:b}=P("Tab.Panel"),v=w("Tab.Panel"),m=h("Tab.Panel"),y=`headlessui-tabs-panel-${(0,o.M)()}`,g=(0,r.useRef)(null),x=(0,s.T)(g,t);(0,i.e)(()=>v.registerPanel(g),[v,g]);let T=m.current.panels.indexOf(y);-1===T&&(T=m.current.panels.push(y)-1);let O=b.indexOf(g);-1===O&&(O=T);let E=O===f,I=(0,r.useMemo)(()=>({selected:E}),[E]),R={ref:x,id:y,role:"tabpanel","aria-labelledby":null==(l=null==(n=d[O])?void 0:n.current)?void 0:l.id,tabIndex:E?0:-1};return E||null!=(u=e.unmount)&&!u||null!=(c=e.static)&&c?(0,a.sY)({ourProps:R,theirProps:e,slot:I,defaultTag:"div",features:C,visible:E,name:"Tabs.Panel"}):r.createElement(p._,{as:"span",...R})}),F=Object.assign(j,{Group:A,List:k,Panels:S,Panel:D})},29815:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(20943),a=n(13375),o=n(91566);function l(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,a.Z)(e)||(0,o.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);