function $v(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Yv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Im={exports:{}},Bl={},Nm={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),qv=Symbol.for("react.portal"),jv=Symbol.for("react.fragment"),Kv=Symbol.for("react.strict_mode"),Zv=Symbol.for("react.profiler"),Qv=Symbol.for("react.provider"),Jv=Symbol.for("react.context"),e0=Symbol.for("react.forward_ref"),t0=Symbol.for("react.suspense"),n0=Symbol.for("react.memo"),i0=Symbol.for("react.lazy"),Mh=Symbol.iterator;function r0(t){return t===null||typeof t!="object"?null:(t=Mh&&t[Mh]||t["@@iterator"],typeof t=="function"?t:null)}var Fm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Om=Object.assign,km={};function Os(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Fm}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zm(){}zm.prototype=Os.prototype;function rd(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Fm}var sd=rd.prototype=new zm;sd.constructor=rd;Om(sd,Os.prototype);sd.isPureReactComponent=!0;var Eh=Array.isArray,Bm=Object.prototype.hasOwnProperty,od={current:null},Hm={key:!0,ref:!0,__self:!0,__source:!0};function Vm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bm.call(e,i)&&!Hm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Vo,type:t,key:s,ref:o,props:r,_owner:od.current}}function s0(t,e){return{$$typeof:Vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function o0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Th=/\/+/g;function Tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?o0(""+t.key):e.toString(36)}function Va(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vo:case qv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Tu(o,0):i,Eh(r)?(n="",t!=null&&(n=t.replace(Th,"$&/")+"/"),Va(r,e,n,"",function(u){return u})):r!=null&&(ad(r)&&(r=s0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Th,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Eh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Tu(s,a);o+=Va(s,e,n,l,r)}else if(l=r0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Tu(s,a++),o+=Va(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ta(t,e,n){if(t==null)return t;var i=[],r=0;return Va(t,i,"","",function(s){return e.call(n,s,r++)}),i}function a0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Ga={transition:null},l0={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Ga,ReactCurrentOwner:od};function Gm(){throw Error("act(...) is not supported in production builds of React.")}Fe.Children={map:ta,forEach:function(t,e,n){ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ta(t,function(){e++}),e},toArray:function(t){return ta(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Fe.Component=Os;Fe.Fragment=jv;Fe.Profiler=Zv;Fe.PureComponent=rd;Fe.StrictMode=Kv;Fe.Suspense=t0;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l0;Fe.act=Gm;Fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Om({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=od.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Bm.call(e,l)&&!Hm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Vo,type:t.type,key:r,ref:s,props:i,_owner:o}};Fe.createContext=function(t){return t={$$typeof:Jv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Qv,_context:t},t.Consumer=t};Fe.createElement=Vm;Fe.createFactory=function(t){var e=Vm.bind(null,t);return e.type=t,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(t){return{$$typeof:e0,render:t}};Fe.isValidElement=ad;Fe.lazy=function(t){return{$$typeof:i0,_payload:{_status:-1,_result:t},_init:a0}};Fe.memo=function(t,e){return{$$typeof:n0,type:t,compare:e===void 0?null:e}};Fe.startTransition=function(t){var e=Ga.transition;Ga.transition={};try{t()}finally{Ga.transition=e}};Fe.unstable_act=Gm;Fe.useCallback=function(t,e){return qt.current.useCallback(t,e)};Fe.useContext=function(t){return qt.current.useContext(t)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};Fe.useEffect=function(t,e){return qt.current.useEffect(t,e)};Fe.useId=function(){return qt.current.useId()};Fe.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};Fe.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};Fe.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};Fe.useMemo=function(t,e){return qt.current.useMemo(t,e)};Fe.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};Fe.useRef=function(t){return qt.current.useRef(t)};Fe.useState=function(t){return qt.current.useState(t)};Fe.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};Fe.useTransition=function(){return qt.current.useTransition()};Fe.version="18.3.1";Nm.exports=Fe;var Jt=Nm.exports;const u0=Yv(Jt),wh=$v({__proto__:null,default:u0},[Jt]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0=Jt,f0=Symbol.for("react.element"),d0=Symbol.for("react.fragment"),h0=Object.prototype.hasOwnProperty,p0=c0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m0={key:!0,ref:!0,__self:!0,__source:!0};function Wm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)h0.call(e,i)&&!m0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:f0,type:t,key:s,ref:o,props:r,_owner:p0.current}}Bl.Fragment=d0;Bl.jsx=Wm;Bl.jsxs=Wm;Im.exports=Bl;var wc=Im.exports,g0=!1;function _0(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function v0(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var x0=function(){function t(n){var i=this;this._insertTag=function(r){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,s),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!g0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(v0(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var s=_0(r);try{s.insertRule(i,s.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},t}(),Vt="-ms-",ul="-moz-",Ve="-webkit-",Xm="comm",ld="rule",ud="decl",S0="@import",$m="@keyframes",y0="@layer",M0=Math.abs,Hl=String.fromCharCode,E0=Object.assign;function T0(t,e){return Nt(t,0)^45?(((e<<2^Nt(t,0))<<2^Nt(t,1))<<2^Nt(t,2))<<2^Nt(t,3):0}function Ym(t){return t.trim()}function w0(t,e){return(t=e.exec(t))?t[0]:t}function Ge(t,e,n){return t.replace(e,n)}function Ac(t,e){return t.indexOf(e)}function Nt(t,e){return t.charCodeAt(e)|0}function yo(t,e,n){return t.slice(e,n)}function qn(t){return t.length}function cd(t){return t.length}function na(t,e){return e.push(t),t}function A0(t,e){return t.map(e).join("")}var Vl=1,Ts=1,qm=0,an=0,St=0,ks="";function Gl(t,e,n,i,r,s,o){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:Vl,column:Ts,length:o,return:""}}function Ws(t,e){return E0(Gl("",null,null,"",null,null,0),t,{length:-t.length},e)}function C0(){return St}function R0(){return St=an>0?Nt(ks,--an):0,Ts--,St===10&&(Ts=1,Vl--),St}function pn(){return St=an<qm?Nt(ks,an++):0,Ts++,St===10&&(Ts=1,Vl++),St}function ei(){return Nt(ks,an)}function Wa(){return an}function Go(t,e){return yo(ks,t,e)}function Mo(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jm(t){return Vl=Ts=1,qm=qn(ks=t),an=0,[]}function Km(t){return ks="",t}function Xa(t){return Ym(Go(an-1,Cc(t===91?t+2:t===40?t+1:t)))}function P0(t){for(;(St=ei())&&St<33;)pn();return Mo(t)>2||Mo(St)>3?"":" "}function L0(t,e){for(;--e&&pn()&&!(St<48||St>102||St>57&&St<65||St>70&&St<97););return Go(t,Wa()+(e<6&&ei()==32&&pn()==32))}function Cc(t){for(;pn();)switch(St){case t:return an;case 34:case 39:t!==34&&t!==39&&Cc(St);break;case 40:t===41&&Cc(t);break;case 92:pn();break}return an}function b0(t,e){for(;pn()&&t+St!==57;)if(t+St===84&&ei()===47)break;return"/*"+Go(e,an-1)+"*"+Hl(t===47?t:pn())}function D0(t){for(;!Mo(ei());)pn();return Go(t,an)}function U0(t){return Km($a("",null,null,null,[""],t=jm(t),0,[0],t))}function $a(t,e,n,i,r,s,o,a,l){for(var u=0,f=0,h=o,d=0,m=0,v=0,x=1,p=1,c=1,g=0,_="",M=r,P=s,A=i,T=_;p;)switch(v=g,g=pn()){case 40:if(v!=108&&Nt(T,h-1)==58){Ac(T+=Ge(Xa(g),"&","&\f"),"&\f")!=-1&&(c=-1);break}case 34:case 39:case 91:T+=Xa(g);break;case 9:case 10:case 13:case 32:T+=P0(v);break;case 92:T+=L0(Wa()-1,7);continue;case 47:switch(ei()){case 42:case 47:na(I0(b0(pn(),Wa()),e,n),l);break;default:T+="/"}break;case 123*x:a[u++]=qn(T)*c;case 125*x:case 59:case 0:switch(g){case 0:case 125:p=0;case 59+f:c==-1&&(T=Ge(T,/\f/g,"")),m>0&&qn(T)-h&&na(m>32?Ch(T+";",i,n,h-1):Ch(Ge(T," ","")+";",i,n,h-2),l);break;case 59:T+=";";default:if(na(A=Ah(T,e,n,u,f,r,a,_,M=[],P=[],h),s),g===123)if(f===0)$a(T,e,A,A,M,s,h,a,P);else switch(d===99&&Nt(T,3)===110?100:d){case 100:case 108:case 109:case 115:$a(t,A,A,i&&na(Ah(t,A,A,0,0,r,a,_,r,M=[],h),P),r,P,h,a,i?M:P);break;default:$a(T,A,A,A,[""],P,0,a,P)}}u=f=m=0,x=c=1,_=T="",h=o;break;case 58:h=1+qn(T),m=v;default:if(x<1){if(g==123)--x;else if(g==125&&x++==0&&R0()==125)continue}switch(T+=Hl(g),g*x){case 38:c=f>0?1:(T+="\f",-1);break;case 44:a[u++]=(qn(T)-1)*c,c=1;break;case 64:ei()===45&&(T+=Xa(pn())),d=ei(),f=h=qn(_=T+=D0(Wa())),g++;break;case 45:v===45&&qn(T)==2&&(x=0)}}return s}function Ah(t,e,n,i,r,s,o,a,l,u,f){for(var h=r-1,d=r===0?s:[""],m=cd(d),v=0,x=0,p=0;v<i;++v)for(var c=0,g=yo(t,h+1,h=M0(x=o[v])),_=t;c<m;++c)(_=Ym(x>0?d[c]+" "+g:Ge(g,/&\f/g,d[c])))&&(l[p++]=_);return Gl(t,e,n,r===0?ld:a,l,u,f)}function I0(t,e,n){return Gl(t,e,n,Xm,Hl(C0()),yo(t,2,-2),0)}function Ch(t,e,n,i){return Gl(t,e,n,ud,yo(t,0,i),yo(t,i+1,-1),i)}function ps(t,e){for(var n="",i=cd(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function N0(t,e,n,i){switch(t.type){case y0:if(t.children.length)break;case S0:case ud:return t.return=t.return||t.value;case Xm:return"";case $m:return t.return=t.value+"{"+ps(t.children,i)+"}";case ld:t.value=t.props.join(",")}return qn(n=ps(t.children,i))?t.return=t.value+"{"+n+"}":""}function F0(t){var e=cd(t);return function(n,i,r,s){for(var o="",a=0;a<e;a++)o+=t[a](n,i,r,s)||"";return o}}function O0(t){return function(e){e.root||(e=e.return)&&t(e)}}function k0(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var z0=function(e,n,i){for(var r=0,s=0;r=s,s=ei(),r===38&&s===12&&(n[i]=1),!Mo(s);)pn();return Go(e,an)},B0=function(e,n){var i=-1,r=44;do switch(Mo(r)){case 0:r===38&&ei()===12&&(n[i]=1),e[i]+=z0(an-1,n,i);break;case 2:e[i]+=Xa(r);break;case 4:if(r===44){e[++i]=ei()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=Hl(r)}while(r=pn());return e},H0=function(e,n){return Km(B0(jm(e),n))},Rh=new WeakMap,V0=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Rh.get(i))&&!r){Rh.set(e,!0);for(var s=[],o=H0(n,s),a=i.props,l=0,u=0;l<o.length;l++)for(var f=0;f<a.length;f++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[f]):a[f]+" "+o[l]}}},G0=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Zm(t,e){switch(T0(t,e)){case 5103:return Ve+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ve+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ve+t+ul+t+Vt+t+t;case 6828:case 4268:return Ve+t+Vt+t+t;case 6165:return Ve+t+Vt+"flex-"+t+t;case 5187:return Ve+t+Ge(t,/(\w+).+(:[^]+)/,Ve+"box-$1$2"+Vt+"flex-$1$2")+t;case 5443:return Ve+t+Vt+"flex-item-"+Ge(t,/flex-|-self/,"")+t;case 4675:return Ve+t+Vt+"flex-line-pack"+Ge(t,/align-content|flex-|-self/,"")+t;case 5548:return Ve+t+Vt+Ge(t,"shrink","negative")+t;case 5292:return Ve+t+Vt+Ge(t,"basis","preferred-size")+t;case 6060:return Ve+"box-"+Ge(t,"-grow","")+Ve+t+Vt+Ge(t,"grow","positive")+t;case 4554:return Ve+Ge(t,/([^-])(transform)/g,"$1"+Ve+"$2")+t;case 6187:return Ge(Ge(Ge(t,/(zoom-|grab)/,Ve+"$1"),/(image-set)/,Ve+"$1"),t,"")+t;case 5495:case 3959:return Ge(t,/(image-set\([^]*)/,Ve+"$1$`$1");case 4968:return Ge(Ge(t,/(.+:)(flex-)?(.*)/,Ve+"box-pack:$3"+Vt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ve+t+t;case 4095:case 3583:case 4068:case 2532:return Ge(t,/(.+)-inline(.+)/,Ve+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qn(t)-1-e>6)switch(Nt(t,e+1)){case 109:if(Nt(t,e+4)!==45)break;case 102:return Ge(t,/(.+:)(.+)-([^]+)/,"$1"+Ve+"$2-$3$1"+ul+(Nt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ac(t,"stretch")?Zm(Ge(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Nt(t,e+1)!==115)break;case 6444:switch(Nt(t,qn(t)-3-(~Ac(t,"!important")&&10))){case 107:return Ge(t,":",":"+Ve)+t;case 101:return Ge(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ve+(Nt(t,14)===45?"inline-":"")+"box$3$1"+Ve+"$2$3$1"+Vt+"$2box$3")+t}break;case 5936:switch(Nt(t,e+11)){case 114:return Ve+t+Vt+Ge(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ve+t+Vt+Ge(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ve+t+Vt+Ge(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Ve+t+Vt+t+t}return t}var W0=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case ud:e.return=Zm(e.value,e.length);break;case $m:return ps([Ws(e,{value:Ge(e.value,"@","@"+Ve)})],r);case ld:if(e.length)return A0(e.props,function(s){switch(w0(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ps([Ws(e,{props:[Ge(s,/:(read-\w+)/,":"+ul+"$1")]})],r);case"::placeholder":return ps([Ws(e,{props:[Ge(s,/:(plac\w+)/,":"+Ve+"input-$1")]}),Ws(e,{props:[Ge(s,/:(plac\w+)/,":"+ul+"$1")]}),Ws(e,{props:[Ge(s,/:(plac\w+)/,Vt+"input-$1")]})],r)}return""})}},X0=[W0],$0=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(x){var p=x.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var r=e.stylisPlugins||X0,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var p=x.getAttribute("data-emotion").split(" "),c=1;c<p.length;c++)s[p[c]]=!0;a.push(x)});var l,u=[V0,G0];{var f,h=[N0,O0(function(x){f.insert(x)})],d=F0(u.concat(r,h)),m=function(p){return ps(U0(p),d)};l=function(p,c,g,_){f=g,m(p?p+"{"+c.styles+"}":c.styles),_&&(v.inserted[c.name]=!0)}}var v={key:n,sheet:new x0({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return v.sheet.hydrate(a),v},Qm={exports:{}},Qe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bt=typeof Symbol=="function"&&Symbol.for,fd=bt?Symbol.for("react.element"):60103,dd=bt?Symbol.for("react.portal"):60106,Wl=bt?Symbol.for("react.fragment"):60107,Xl=bt?Symbol.for("react.strict_mode"):60108,$l=bt?Symbol.for("react.profiler"):60114,Yl=bt?Symbol.for("react.provider"):60109,ql=bt?Symbol.for("react.context"):60110,hd=bt?Symbol.for("react.async_mode"):60111,jl=bt?Symbol.for("react.concurrent_mode"):60111,Kl=bt?Symbol.for("react.forward_ref"):60112,Zl=bt?Symbol.for("react.suspense"):60113,Y0=bt?Symbol.for("react.suspense_list"):60120,Ql=bt?Symbol.for("react.memo"):60115,Jl=bt?Symbol.for("react.lazy"):60116,q0=bt?Symbol.for("react.block"):60121,j0=bt?Symbol.for("react.fundamental"):60117,K0=bt?Symbol.for("react.responder"):60118,Z0=bt?Symbol.for("react.scope"):60119;function vn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case fd:switch(t=t.type,t){case hd:case jl:case Wl:case $l:case Xl:case Zl:return t;default:switch(t=t&&t.$$typeof,t){case ql:case Kl:case Jl:case Ql:case Yl:return t;default:return e}}case dd:return e}}}function Jm(t){return vn(t)===jl}Qe.AsyncMode=hd;Qe.ConcurrentMode=jl;Qe.ContextConsumer=ql;Qe.ContextProvider=Yl;Qe.Element=fd;Qe.ForwardRef=Kl;Qe.Fragment=Wl;Qe.Lazy=Jl;Qe.Memo=Ql;Qe.Portal=dd;Qe.Profiler=$l;Qe.StrictMode=Xl;Qe.Suspense=Zl;Qe.isAsyncMode=function(t){return Jm(t)||vn(t)===hd};Qe.isConcurrentMode=Jm;Qe.isContextConsumer=function(t){return vn(t)===ql};Qe.isContextProvider=function(t){return vn(t)===Yl};Qe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===fd};Qe.isForwardRef=function(t){return vn(t)===Kl};Qe.isFragment=function(t){return vn(t)===Wl};Qe.isLazy=function(t){return vn(t)===Jl};Qe.isMemo=function(t){return vn(t)===Ql};Qe.isPortal=function(t){return vn(t)===dd};Qe.isProfiler=function(t){return vn(t)===$l};Qe.isStrictMode=function(t){return vn(t)===Xl};Qe.isSuspense=function(t){return vn(t)===Zl};Qe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Wl||t===jl||t===$l||t===Xl||t===Zl||t===Y0||typeof t=="object"&&t!==null&&(t.$$typeof===Jl||t.$$typeof===Ql||t.$$typeof===Yl||t.$$typeof===ql||t.$$typeof===Kl||t.$$typeof===j0||t.$$typeof===K0||t.$$typeof===Z0||t.$$typeof===q0)};Qe.typeOf=vn;Qm.exports=Qe;var Q0=Qm.exports,eg=Q0,J0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ex={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tg={};tg[eg.ForwardRef]=J0;tg[eg.Memo]=ex;var tx=!0;function nx(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):i+=r+" "}),i}var ng=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||tx===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},ix=function(e,n,i){ng(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+r:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function rx(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var sx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ox=!1,ax=/[A-Z]|^ms/g,lx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ig=function(e){return e.charCodeAt(1)===45},Ph=function(e){return e!=null&&typeof e!="boolean"},wu=k0(function(t){return ig(t)?t:t.replace(ax,"-$&").toLowerCase()}),Lh=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(lx,function(i,r,s){return jn={name:r,styles:s,next:jn},r})}return sx[e]!==1&&!ig(e)&&typeof n=="number"&&n!==0?n+"px":n},ux="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Eo(t,e,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var r=n;if(r.anim===1)return jn={name:r.name,styles:r.styles,next:jn},r.name;var s=n;if(s.styles!==void 0){var o=s.next;if(o!==void 0)for(;o!==void 0;)jn={name:o.name,styles:o.styles,next:jn},o=o.next;var a=s.styles+";";return a}return cx(t,e,n)}case"function":{if(t!==void 0){var l=jn,u=n(t);return jn=l,Eo(t,e,u)}break}}var f=n;return f}function cx(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=Eo(t,e,n[r])+";";else for(var s in n){var o=n[s];if(typeof o!="object"){var a=o;Ph(a)&&(i+=wu(s)+":"+Lh(s,a)+";")}else{if(s==="NO_COMPONENT_SELECTOR"&&ox)throw new Error(ux);if(Array.isArray(o)&&typeof o[0]=="string"&&e==null)for(var l=0;l<o.length;l++)Ph(o[l])&&(i+=wu(s)+":"+Lh(s,o[l])+";");else{var u=Eo(t,e,o);switch(s){case"animation":case"animationName":{i+=wu(s)+":"+u+";";break}default:i+=s+"{"+u+"}"}}}}return i}var bh=/label:\s*([^\s;\n{]+)\s*(;|$)/g,jn;function fx(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,r="";jn=void 0;var s=t[0];if(s==null||s.raw===void 0)i=!1,r+=Eo(n,e,s);else{var o=s;r+=o[0]}for(var a=1;a<t.length;a++)if(r+=Eo(n,e,t[a]),i){var l=s;r+=l[a]}bh.lastIndex=0;for(var u="",f;(f=bh.exec(r))!==null;)u+="-"+f[1];var h=rx(r)+u;return{name:h,styles:r,next:jn}}var dx=function(e){return e()},hx=wh.useInsertionEffect?wh.useInsertionEffect:!1,px=hx||dx,mx=!1,rg=Jt.createContext(typeof HTMLElement<"u"?$0({key:"css"}):null);rg.Provider;var gx=function(e){return Jt.forwardRef(function(n,i){var r=Jt.useContext(rg);return e(n,r,i)})},_x=Jt.createContext({}),pd={}.hasOwnProperty,Rc="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",vx=function(e,n){var i={};for(var r in n)pd.call(n,r)&&(i[r]=n[r]);return i[Rc]=e,i},xx=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return ng(n,i,r),px(function(){return ix(n,i,r)}),null},Sx=gx(function(t,e,n){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var r=t[Rc],s=[i],o="";typeof t.className=="string"?o=nx(e.registered,s,t.className):t.className!=null&&(o=t.className+" ");var a=fx(s,void 0,Jt.useContext(_x));o+=e.key+"-"+a.name;var l={};for(var u in t)pd.call(t,u)&&u!=="css"&&u!==Rc&&!mx&&(l[u]=t[u]);return l.className=o,n&&(l.ref=n),Jt.createElement(Jt.Fragment,null,Jt.createElement(xx,{cache:e,serialized:a,isStringTag:typeof r=="string"}),Jt.createElement(r,l))}),yx=Sx,Mx=wc.Fragment;function Pc(t,e,n){return pd.call(e,"css")?wc.jsx(yx,vx(t,e),n):wc.jsx(t,e,n)}var sg={exports:{}},xn={},og={exports:{}},ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,X){var K=D.length;D.push(X);e:for(;0<K;){var se=K-1>>>1,xe=D[se];if(0<r(xe,X))D[se]=X,D[K]=xe,K=se;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var X=D[0],K=D.pop();if(K!==X){D[0]=K;e:for(var se=0,xe=D.length,ze=xe>>>1;se<ze;){var H=2*(se+1)-1,te=D[H],ue=H+1,ce=D[ue];if(0>r(te,K))ue<xe&&0>r(ce,te)?(D[se]=ce,D[ue]=K,se=ue):(D[se]=te,D[H]=K,se=H);else if(ue<xe&&0>r(ce,K))D[se]=ce,D[ue]=K,se=ue;else break e}}return X}function r(D,X){var K=D.sortIndex-X.sortIndex;return K!==0?K:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,d=3,m=!1,v=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var X=n(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=D)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function M(D){if(x=!1,_(D),!v)if(n(l)!==null)v=!0,G(P);else{var X=n(u);X!==null&&j(M,X.startTime-D)}}function P(D,X){v=!1,x&&(x=!1,c(b),b=-1),m=!0;var K=d;try{for(_(X),h=n(l);h!==null&&(!(h.expirationTime>X)||D&&!L());){var se=h.callback;if(typeof se=="function"){h.callback=null,d=h.priorityLevel;var xe=se(h.expirationTime<=X);X=t.unstable_now(),typeof xe=="function"?h.callback=xe:h===n(l)&&i(l),_(X)}else i(l);h=n(l)}if(h!==null)var ze=!0;else{var H=n(u);H!==null&&j(M,H.startTime-X),ze=!1}return ze}finally{h=null,d=K,m=!1}}var A=!1,T=null,b=-1,w=5,S=-1;function L(){return!(t.unstable_now()-S<w)}function V(){if(T!==null){var D=t.unstable_now();S=D;var X=!0;try{X=T(!0,D)}finally{X?B():(A=!1,T=null)}}else A=!1}var B;if(typeof g=="function")B=function(){g(V)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,q=Y.port2;Y.port1.onmessage=V,B=function(){q.postMessage(null)}}else B=function(){p(V,0)};function G(D){T=D,A||(A=!0,B())}function j(D,X){b=p(function(){D(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,G(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var K=d;d=X;try{return D()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=d;d=D;try{return X()}finally{d=K}},t.unstable_scheduleCallback=function(D,X,K){var se=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?se+K:se):K=se,D){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=K+xe,D={id:f++,callback:X,priorityLevel:D,startTime:K,expirationTime:xe,sortIndex:-1},K>se?(D.sortIndex=K,e(u,D),n(l)===null&&D===n(u)&&(x?(c(b),b=-1):x=!0,j(M,K-se))):(D.sortIndex=xe,e(l,D),v||m||(v=!0,G(P))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var X=d;return function(){var K=d;d=X;try{return D.apply(this,arguments)}finally{d=K}}}})(ag);og.exports=ag;var Ex=og.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tx=Jt,_n=Ex;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lg=new Set,To={};function Ur(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(To[t]=e,t=0;t<e.length;t++)lg.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lc=Object.prototype.hasOwnProperty,wx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dh={},Uh={};function Ax(t){return Lc.call(Uh,t)?!0:Lc.call(Dh,t)?!1:wx.test(t)?Uh[t]=!0:(Dh[t]=!0,!1)}function Cx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Rx(t,e,n,i){if(e===null||typeof e>"u"||Cx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(md,gd);Ot[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(md,gd);Ot[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(md,gd);Ot[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _d(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Rx(e,n,r,i)&&(n=null),i||r===null?Ax(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=Tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ia=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),bc=Symbol.for("react.profiler"),ug=Symbol.for("react.provider"),cg=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),Dc=Symbol.for("react.suspense"),Uc=Symbol.for("react.suspense_list"),Sd=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),fg=Symbol.for("react.offscreen"),Ih=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=Ih&&t[Ih]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,Au;function so(t){if(Au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Au=e&&e[1]||""}return`
`+Au+t}var Cu=!1;function Ru(t,e){if(!t||Cu)return"";Cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?so(t):""}function Px(t){switch(t.tag){case 5:return so(t.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return t=Ru(t.type,!1),t;case 11:return t=Ru(t.type.render,!1),t;case 1:return t=Ru(t.type,!0),t;default:return""}}function Ic(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case bc:return"Profiler";case vd:return"StrictMode";case Dc:return"Suspense";case Uc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cg:return(t.displayName||"Context")+".Consumer";case ug:return(t._context.displayName||"Context")+".Provider";case xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sd:return e=t.displayName||null,e!==null?e:Ic(t.type)||"Memo";case Ii:e=t._payload,t=t._init;try{return Ic(t(e))}catch{}}return null}function Lx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ic(e);case 8:return e===vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bx(t){var e=dg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ra(t){t._valueTracker||(t._valueTracker=bx(t))}function hg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=dg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nc(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pg(t,e){e=e.checked,e!=null&&_d(t,"checked",e,!1)}function Fc(t,e){pg(t,e);var n=Zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Oc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Oc(t,e.type,Zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Oc(t,e,n){(e!=="number"||cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oo=Array.isArray;function ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function kc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Oh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(oo(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zi(n)}}function mg(t,e){var n=Zi(e.value),i=Zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sa,_g=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dx=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){Dx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function vg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function xg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=vg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ux=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bc(t,e){if(e){if(Ux[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function Hc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vc=null;function yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gc=null,gs=null,_s=null;function zh(t){if(t=$o(t)){if(typeof Gc!="function")throw Error(J(280));var e=t.stateNode;e&&(e=ru(e),Gc(t.stateNode,t.type,e))}}function Sg(t){gs?_s?_s.push(t):_s=[t]:gs=t}function yg(){if(gs){var t=gs,e=_s;if(_s=gs=null,zh(t),e)for(t=0;t<e.length;t++)zh(e[t])}}function Mg(t,e){return t(e)}function Eg(){}var Pu=!1;function Tg(t,e,n){if(Pu)return t(e,n);Pu=!0;try{return Mg(t,e,n)}finally{Pu=!1,(gs!==null||_s!==null)&&(Eg(),yg())}}function Ao(t,e){var n=t.stateNode;if(n===null)return null;var i=ru(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var Wc=!1;if(xi)try{var $s={};Object.defineProperty($s,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{Wc=!1}function Ix(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var fo=!1,fl=null,dl=!1,Xc=null,Nx={onError:function(t){fo=!0,fl=t}};function Fx(t,e,n,i,r,s,o,a,l){fo=!1,fl=null,Ix.apply(Nx,arguments)}function Ox(t,e,n,i,r,s,o,a,l){if(Fx.apply(this,arguments),fo){if(fo){var u=fl;fo=!1,fl=null}else throw Error(J(198));dl||(dl=!0,Xc=u)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bh(t){if(Ir(t)!==t)throw Error(J(188))}function kx(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bh(r),t;if(s===i)return Bh(r),e;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function Ag(t){return t=kx(t),t!==null?Cg(t):null}function Cg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cg(t);if(e!==null)return e;t=t.sibling}return null}var Rg=_n.unstable_scheduleCallback,Hh=_n.unstable_cancelCallback,zx=_n.unstable_shouldYield,Bx=_n.unstable_requestPaint,pt=_n.unstable_now,Hx=_n.unstable_getCurrentPriorityLevel,Md=_n.unstable_ImmediatePriority,Pg=_n.unstable_UserBlockingPriority,hl=_n.unstable_NormalPriority,Vx=_n.unstable_LowPriority,Lg=_n.unstable_IdlePriority,eu=null,ti=null;function Gx(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(eu,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:$x,Wx=Math.log,Xx=Math.LN2;function $x(t){return t>>>=0,t===0?32:31-(Wx(t)/Xx|0)|0}var oa=64,aa=4194304;function ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ao(a):(s&=o,s!==0&&(i=ao(s)))}else o=n&~r,o!==0?i=ao(o):s!==0&&(i=ao(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Hn(e),r=1<<n,i|=t[n],e&=~r;return i}function Yx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Hn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Yx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $c(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bg(){var t=oa;return oa<<=1,!(oa&4194240)&&(oa=64),t}function Lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function jx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Hn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Hn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function Dg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ug,Td,Ig,Ng,Fg,Yc=!1,la=[],Hi=null,Vi=null,Gi=null,Co=new Map,Ro=new Map,Fi=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vh(t,e){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":Co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(e.pointerId)}}function Ys(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=$o(e),e!==null&&Td(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Zx(t,e,n,i,r){switch(e){case"focusin":return Hi=Ys(Hi,t,e,n,i,r),!0;case"dragenter":return Vi=Ys(Vi,t,e,n,i,r),!0;case"mouseover":return Gi=Ys(Gi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Co.set(s,Ys(Co.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ro.set(s,Ys(Ro.get(s)||null,t,e,n,i,r)),!0}return!1}function Og(t){var e=vr(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=wg(n),e!==null){t.blockedOn=e,Fg(t.priority,function(){Ig(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Vc=i,n.target.dispatchEvent(i),Vc=null}else return e=$o(n),e!==null&&Td(e),t.blockedOn=n,!1;e.shift()}return!0}function Gh(t,e,n){Ya(t)&&n.delete(e)}function Qx(){Yc=!1,Hi!==null&&Ya(Hi)&&(Hi=null),Vi!==null&&Ya(Vi)&&(Vi=null),Gi!==null&&Ya(Gi)&&(Gi=null),Co.forEach(Gh),Ro.forEach(Gh)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Yc||(Yc=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,Qx)))}function Po(t){function e(r){return qs(r,t)}if(0<la.length){qs(la[0],t);for(var n=1;n<la.length;n++){var i=la[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hi!==null&&qs(Hi,t),Vi!==null&&qs(Vi,t),Gi!==null&&qs(Gi,t),Co.forEach(e),Ro.forEach(e),n=0;n<Fi.length;n++)i=Fi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Fi.length&&(n=Fi[0],n.blockedOn===null);)Og(n),n.blockedOn===null&&Fi.shift()}var vs=wi.ReactCurrentBatchConfig,ml=!0;function Jx(t,e,n,i){var r=Ze,s=vs.transition;vs.transition=null;try{Ze=1,wd(t,e,n,i)}finally{Ze=r,vs.transition=s}}function eS(t,e,n,i){var r=Ze,s=vs.transition;vs.transition=null;try{Ze=4,wd(t,e,n,i)}finally{Ze=r,vs.transition=s}}function wd(t,e,n,i){if(ml){var r=qc(t,e,n,i);if(r===null)Bu(t,e,i,gl,n),Vh(t,i);else if(Zx(r,t,e,n,i))i.stopPropagation();else if(Vh(t,i),e&4&&-1<Kx.indexOf(t)){for(;r!==null;){var s=$o(r);if(s!==null&&Ug(s),s=qc(t,e,n,i),s===null&&Bu(t,e,i,gl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Bu(t,e,i,null,n)}}var gl=null;function qc(t,e,n,i){if(gl=null,t=yd(i),t=vr(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gl=t,null}function kg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hx()){case Md:return 1;case Pg:return 4;case hl:case Vx:return 16;case Lg:return 536870912;default:return 16}default:return 16}}var zi=null,Ad=null,qa=null;function zg(){if(qa)return qa;var t,e=Ad,n=e.length,i,r="value"in zi?zi.value:zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return qa=r.slice(t,1<i?1-i:void 0)}function ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ua(){return!0}function Wh(){return!1}function Sn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ua:Wh,this.isPropagationStopped=Wh,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),e}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cd=Sn(zs),Xo=ut({},zs,{view:0,detail:0}),tS=Sn(Xo),bu,Du,js,tu=ut({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(bu=t.screenX-js.screenX,Du=t.screenY-js.screenY):Du=bu=0,js=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Du}}),Xh=Sn(tu),nS=ut({},tu,{dataTransfer:0}),iS=Sn(nS),rS=ut({},Xo,{relatedTarget:0}),Uu=Sn(rS),sS=ut({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),oS=Sn(sS),aS=ut({},zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lS=Sn(aS),uS=ut({},zs,{data:0}),$h=Sn(uS),cS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dS[t])?!!e[t]:!1}function Rd(){return hS}var pS=ut({},Xo,{key:function(t){if(t.key){var e=cS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rd,charCode:function(t){return t.type==="keypress"?ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mS=Sn(pS),gS=ut({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=Sn(gS),_S=ut({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rd}),vS=Sn(_S),xS=ut({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),SS=Sn(xS),yS=ut({},tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MS=Sn(yS),ES=[9,13,27,32],Pd=xi&&"CompositionEvent"in window,ho=null;xi&&"documentMode"in document&&(ho=document.documentMode);var TS=xi&&"TextEvent"in window&&!ho,Bg=xi&&(!Pd||ho&&8<ho&&11>=ho),qh=" ",jh=!1;function Hg(t,e){switch(t){case"keyup":return ES.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function wS(t,e){switch(t){case"compositionend":return Vg(e);case"keypress":return e.which!==32?null:(jh=!0,qh);case"textInput":return t=e.data,t===qh&&jh?null:t;default:return null}}function AS(t,e){if(is)return t==="compositionend"||!Pd&&Hg(t,e)?(t=zg(),qa=Ad=zi=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bg&&e.locale!=="ko"?null:e.data;default:return null}}var CS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CS[t.type]:e==="textarea"}function Gg(t,e,n,i){Sg(i),e=_l(e,"onChange"),0<e.length&&(n=new Cd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var po=null,Lo=null;function RS(t){e_(t,0)}function nu(t){var e=os(t);if(hg(e))return t}function PS(t,e){if(t==="change")return e}var Wg=!1;if(xi){var Iu;if(xi){var Nu="oninput"in document;if(!Nu){var Zh=document.createElement("div");Zh.setAttribute("oninput","return;"),Nu=typeof Zh.oninput=="function"}Iu=Nu}else Iu=!1;Wg=Iu&&(!document.documentMode||9<document.documentMode)}function Qh(){po&&(po.detachEvent("onpropertychange",Xg),Lo=po=null)}function Xg(t){if(t.propertyName==="value"&&nu(Lo)){var e=[];Gg(e,Lo,t,yd(t)),Tg(RS,e)}}function LS(t,e,n){t==="focusin"?(Qh(),po=e,Lo=n,po.attachEvent("onpropertychange",Xg)):t==="focusout"&&Qh()}function bS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nu(Lo)}function DS(t,e){if(t==="click")return nu(e)}function US(t,e){if(t==="input"||t==="change")return nu(e)}function IS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:IS;function bo(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Lc.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function Jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ep(t,e){var n=Jh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jh(n)}}function $g(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$g(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yg(){for(var t=window,e=cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cl(t.document)}return e}function Ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NS(t){var e=Yg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$g(n.ownerDocument.documentElement,n)){if(i!==null&&Ld(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ep(n,s);var o=ep(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FS=xi&&"documentMode"in document&&11>=document.documentMode,rs=null,jc=null,mo=null,Kc=!1;function tp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kc||rs==null||rs!==cl(i)||(i=rs,"selectionStart"in i&&Ld(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),mo&&bo(mo,i)||(mo=i,i=_l(jc,"onSelect"),0<i.length&&(e=new Cd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=rs)))}function ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},Fu={},qg={};xi&&(qg=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function iu(t){if(Fu[t])return Fu[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qg)return Fu[t]=e[n];return t}var jg=iu("animationend"),Kg=iu("animationiteration"),Zg=iu("animationstart"),Qg=iu("transitionend"),Jg=new Map,np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,e){Jg.set(t,e),Ur(e,[t])}for(var Ou=0;Ou<np.length;Ou++){var ku=np[Ou],OS=ku.toLowerCase(),kS=ku[0].toUpperCase()+ku.slice(1);tr(OS,"on"+kS)}tr(jg,"onAnimationEnd");tr(Kg,"onAnimationIteration");tr(Zg,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(Qg,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function ip(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ox(i,e,void 0,t),t.currentTarget=null}function e_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ip(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ip(r,a,u),s=l}}}if(dl)throw t=Xc,dl=!1,Xc=null,t}function nt(t,e){var n=e[tf];n===void 0&&(n=e[tf]=new Set);var i=t+"__bubble";n.has(i)||(t_(e,t,2,!1),n.add(i))}function zu(t,e,n){var i=0;e&&(i|=4),t_(n,t,i,e)}var fa="_reactListening"+Math.random().toString(36).slice(2);function Do(t){if(!t[fa]){t[fa]=!0,lg.forEach(function(n){n!=="selectionchange"&&(zS.has(n)||zu(n,!1,t),zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fa]||(e[fa]=!0,zu("selectionchange",!1,e))}}function t_(t,e,n,i){switch(kg(e)){case 1:var r=Jx;break;case 4:r=eS;break;default:r=wd}n=r.bind(null,e,n,t),r=void 0,!Wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Bu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=vr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Tg(function(){var u=s,f=yd(n),h=[];e:{var d=Jg.get(t);if(d!==void 0){var m=Cd,v=t;switch(t){case"keypress":if(ja(n)===0)break e;case"keydown":case"keyup":m=mS;break;case"focusin":v="focus",m=Uu;break;case"focusout":v="blur",m=Uu;break;case"beforeblur":case"afterblur":m=Uu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=iS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=vS;break;case jg:case Kg:case Zg:m=oS;break;case Qg:m=SS;break;case"scroll":m=tS;break;case"wheel":m=MS;break;case"copy":case"cut":case"paste":m=lS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Yh}var x=(e&4)!==0,p=!x&&t==="scroll",c=x?d!==null?d+"Capture":null:d;x=[];for(var g=u,_;g!==null;){_=g;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,c!==null&&(M=Ao(g,c),M!=null&&x.push(Uo(g,M,_)))),p)break;g=g.return}0<x.length&&(d=new m(d,v,null,n,f),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Vc&&(v=n.relatedTarget||n.fromElement)&&(vr(v)||v[Si]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?vr(v):null,v!==null&&(p=Ir(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(x=Xh,M="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Yh,M="onPointerLeave",c="onPointerEnter",g="pointer"),p=m==null?d:os(m),_=v==null?d:os(v),d=new x(M,g+"leave",m,n,f),d.target=p,d.relatedTarget=_,M=null,vr(f)===u&&(x=new x(c,g+"enter",v,n,f),x.target=_,x.relatedTarget=p,M=x),p=M,m&&v)t:{for(x=m,c=v,g=0,_=x;_;_=Or(_))g++;for(_=0,M=c;M;M=Or(M))_++;for(;0<g-_;)x=Or(x),g--;for(;0<_-g;)c=Or(c),_--;for(;g--;){if(x===c||c!==null&&x===c.alternate)break t;x=Or(x),c=Or(c)}x=null}else x=null;m!==null&&rp(h,d,m,x,!1),v!==null&&p!==null&&rp(h,p,v,x,!0)}}e:{if(d=u?os(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var P=PS;else if(Kh(d))if(Wg)P=US;else{P=bS;var A=LS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=DS);if(P&&(P=P(t,u))){Gg(h,P,n,f);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Oc(d,"number",d.value)}switch(A=u?os(u):window,t){case"focusin":(Kh(A)||A.contentEditable==="true")&&(rs=A,jc=u,mo=null);break;case"focusout":mo=jc=rs=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,tp(h,n,f);break;case"selectionchange":if(FS)break;case"keydown":case"keyup":tp(h,n,f)}var T;if(Pd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else is?Hg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Bg&&n.locale!=="ko"&&(is||b!=="onCompositionStart"?b==="onCompositionEnd"&&is&&(T=zg()):(zi=f,Ad="value"in zi?zi.value:zi.textContent,is=!0)),A=_l(u,b),0<A.length&&(b=new $h(b,t,null,n,f),h.push({event:b,listeners:A}),T?b.data=T:(T=Vg(n),T!==null&&(b.data=T)))),(T=TS?wS(t,n):AS(t,n))&&(u=_l(u,"onBeforeInput"),0<u.length&&(f=new $h("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=T))}e_(h,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ao(t,n),s!=null&&i.unshift(Uo(t,s,r)),s=Ao(t,e),s!=null&&i.push(Uo(t,s,r))),t=t.return}return i}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ao(n,s),l!=null&&o.unshift(Uo(n,l,a))):r||(l=Ao(n,s),l!=null&&o.push(Uo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BS=/\r\n?/g,HS=/\u0000|\uFFFD/g;function sp(t){return(typeof t=="string"?t:""+t).replace(BS,`
`).replace(HS,"")}function da(t,e,n){if(e=sp(e),sp(t)!==e&&n)throw Error(J(425))}function vl(){}var Zc=null,Qc=null;function Jc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ef=typeof setTimeout=="function"?setTimeout:void 0,VS=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,GS=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(t){return op.resolve(null).then(t).catch(WS)}:ef;function WS(t){setTimeout(function(){throw t})}function Hu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Po(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Po(e)}function Wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ap(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Bs,Io="__reactProps$"+Bs,Si="__reactContainer$"+Bs,tf="__reactEvents$"+Bs,XS="__reactListeners$"+Bs,$S="__reactHandles$"+Bs;function vr(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ap(t);t!==null;){if(n=t[Zn])return n;t=ap(t)}return e}t=n,n=t.parentNode}return null}function $o(t){return t=t[Zn]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function ru(t){return t[Io]||null}var nf=[],as=-1;function nr(t){return{current:t}}function rt(t){0>as||(t.current=nf[as],nf[as]=null,as--)}function tt(t,e){as++,nf[as]=t.current,t.current=e}var Qi={},Wt=nr(Qi),tn=nr(!1),Ar=Qi;function As(t,e){var n=t.type.contextTypes;if(!n)return Qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function xl(){rt(tn),rt(Wt)}function lp(t,e,n){if(Wt.current!==Qi)throw Error(J(168));tt(Wt,e),tt(tn,n)}function n_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,Lx(t)||"Unknown",r));return ut({},n,i)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Ar=Wt.current,tt(Wt,t),tt(tn,tn.current),!0}function up(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=n_(t,e,Ar),i.__reactInternalMemoizedMergedChildContext=t,rt(tn),rt(Wt),tt(Wt,t)):rt(tn),tt(tn,n)}var di=null,su=!1,Vu=!1;function i_(t){di===null?di=[t]:di.push(t)}function YS(t){su=!0,i_(t)}function ir(){if(!Vu&&di!==null){Vu=!0;var t=0,e=Ze;try{var n=di;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}di=null,su=!1}catch(r){throw di!==null&&(di=di.slice(t+1)),Rg(Md,ir),r}finally{Ze=e,Vu=!1}}return null}var ls=[],us=0,yl=null,Ml=0,En=[],Tn=0,Cr=null,pi=1,mi="";function dr(t,e){ls[us++]=Ml,ls[us++]=yl,yl=t,Ml=e}function r_(t,e,n){En[Tn++]=pi,En[Tn++]=mi,En[Tn++]=Cr,Cr=t;var i=pi;t=mi;var r=32-Hn(i)-1;i&=~(1<<r),n+=1;var s=32-Hn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,pi=1<<32-Hn(e)+r|n<<r|i,mi=s+t}else pi=1<<s|n<<r|i,mi=t}function bd(t){t.return!==null&&(dr(t,1),r_(t,1,0))}function Dd(t){for(;t===yl;)yl=ls[--us],ls[us]=null,Ml=ls[--us],ls[us]=null;for(;t===Cr;)Cr=En[--Tn],En[Tn]=null,mi=En[--Tn],En[Tn]=null,pi=En[--Tn],En[Tn]=null}var mn=null,hn=null,st=!1,kn=null;function s_(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,hn=Wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:pi,overflow:mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,hn=null,!0):!1;default:return!1}}function rf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sf(t){if(st){var e=hn;if(e){var n=e;if(!cp(t,e)){if(rf(t))throw Error(J(418));e=Wi(n.nextSibling);var i=mn;e&&cp(t,e)?s_(i,n):(t.flags=t.flags&-4097|2,st=!1,mn=t)}}else{if(rf(t))throw Error(J(418));t.flags=t.flags&-4097|2,st=!1,mn=t}}}function fp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function ha(t){if(t!==mn)return!1;if(!st)return fp(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jc(t.type,t.memoizedProps)),e&&(e=hn)){if(rf(t))throw o_(),Error(J(418));for(;e;)s_(t,e),e=Wi(e.nextSibling)}if(fp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=mn?Wi(t.stateNode.nextSibling):null;return!0}function o_(){for(var t=hn;t;)t=Wi(t.nextSibling)}function Cs(){hn=mn=null,st=!1}function Ud(t){kn===null?kn=[t]:kn.push(t)}var qS=wi.ReactCurrentBatchConfig;function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function pa(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dp(t){var e=t._init;return e(t._payload)}function a_(t){function e(c,g){if(t){var _=c.deletions;_===null?(c.deletions=[g],c.flags|=16):_.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=qi(c,g),c.index=0,c.sibling=null,c}function s(c,g,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<g?(c.flags|=2,g):_):(c.flags|=2,g)):(c.flags|=1048576,g)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,_,M){return g===null||g.tag!==6?(g=ju(_,c.mode,M),g.return=c,g):(g=r(g,_),g.return=c,g)}function l(c,g,_,M){var P=_.type;return P===ns?f(c,g,_.props.children,M,_.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ii&&dp(P)===g.type)?(M=r(g,_.props),M.ref=Ks(c,g,_),M.return=c,M):(M=nl(_.type,_.key,_.props,null,c.mode,M),M.ref=Ks(c,g,_),M.return=c,M)}function u(c,g,_,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Ku(_,c.mode,M),g.return=c,g):(g=r(g,_.children||[]),g.return=c,g)}function f(c,g,_,M,P){return g===null||g.tag!==7?(g=Tr(_,c.mode,M,P),g.return=c,g):(g=r(g,_),g.return=c,g)}function h(c,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ju(""+g,c.mode,_),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ia:return _=nl(g.type,g.key,g.props,null,c.mode,_),_.ref=Ks(c,null,g),_.return=c,_;case ts:return g=Ku(g,c.mode,_),g.return=c,g;case Ii:var M=g._init;return h(c,M(g._payload),_)}if(oo(g)||Xs(g))return g=Tr(g,c.mode,_,null),g.return=c,g;pa(c,g)}return null}function d(c,g,_,M){var P=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return P!==null?null:a(c,g,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ia:return _.key===P?l(c,g,_,M):null;case ts:return _.key===P?u(c,g,_,M):null;case Ii:return P=_._init,d(c,g,P(_._payload),M)}if(oo(_)||Xs(_))return P!==null?null:f(c,g,_,M,null);pa(c,_)}return null}function m(c,g,_,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return c=c.get(_)||null,a(g,c,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ia:return c=c.get(M.key===null?_:M.key)||null,l(g,c,M,P);case ts:return c=c.get(M.key===null?_:M.key)||null,u(g,c,M,P);case Ii:var A=M._init;return m(c,g,_,A(M._payload),P)}if(oo(M)||Xs(M))return c=c.get(_)||null,f(g,c,M,P,null);pa(g,M)}return null}function v(c,g,_,M){for(var P=null,A=null,T=g,b=g=0,w=null;T!==null&&b<_.length;b++){T.index>b?(w=T,T=null):w=T.sibling;var S=d(c,T,_[b],M);if(S===null){T===null&&(T=w);break}t&&T&&S.alternate===null&&e(c,T),g=s(S,g,b),A===null?P=S:A.sibling=S,A=S,T=w}if(b===_.length)return n(c,T),st&&dr(c,b),P;if(T===null){for(;b<_.length;b++)T=h(c,_[b],M),T!==null&&(g=s(T,g,b),A===null?P=T:A.sibling=T,A=T);return st&&dr(c,b),P}for(T=i(c,T);b<_.length;b++)w=m(T,c,b,_[b],M),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?b:w.key),g=s(w,g,b),A===null?P=w:A.sibling=w,A=w);return t&&T.forEach(function(L){return e(c,L)}),st&&dr(c,b),P}function x(c,g,_,M){var P=Xs(_);if(typeof P!="function")throw Error(J(150));if(_=P.call(_),_==null)throw Error(J(151));for(var A=P=null,T=g,b=g=0,w=null,S=_.next();T!==null&&!S.done;b++,S=_.next()){T.index>b?(w=T,T=null):w=T.sibling;var L=d(c,T,S.value,M);if(L===null){T===null&&(T=w);break}t&&T&&L.alternate===null&&e(c,T),g=s(L,g,b),A===null?P=L:A.sibling=L,A=L,T=w}if(S.done)return n(c,T),st&&dr(c,b),P;if(T===null){for(;!S.done;b++,S=_.next())S=h(c,S.value,M),S!==null&&(g=s(S,g,b),A===null?P=S:A.sibling=S,A=S);return st&&dr(c,b),P}for(T=i(c,T);!S.done;b++,S=_.next())S=m(T,c,b,S.value,M),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?b:S.key),g=s(S,g,b),A===null?P=S:A.sibling=S,A=S);return t&&T.forEach(function(V){return e(c,V)}),st&&dr(c,b),P}function p(c,g,_,M){if(typeof _=="object"&&_!==null&&_.type===ns&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ia:e:{for(var P=_.key,A=g;A!==null;){if(A.key===P){if(P=_.type,P===ns){if(A.tag===7){n(c,A.sibling),g=r(A,_.props.children),g.return=c,c=g;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ii&&dp(P)===A.type){n(c,A.sibling),g=r(A,_.props),g.ref=Ks(c,A,_),g.return=c,c=g;break e}n(c,A);break}else e(c,A);A=A.sibling}_.type===ns?(g=Tr(_.props.children,c.mode,M,_.key),g.return=c,c=g):(M=nl(_.type,_.key,_.props,null,c.mode,M),M.ref=Ks(c,g,_),M.return=c,c=M)}return o(c);case ts:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(c,g.sibling),g=r(g,_.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=Ku(_,c.mode,M),g.return=c,c=g}return o(c);case Ii:return A=_._init,p(c,g,A(_._payload),M)}if(oo(_))return v(c,g,_,M);if(Xs(_))return x(c,g,_,M);pa(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,_),g.return=c,c=g):(n(c,g),g=ju(_,c.mode,M),g.return=c,c=g),o(c)):n(c,g)}return p}var Rs=a_(!0),l_=a_(!1),El=nr(null),Tl=null,cs=null,Id=null;function Nd(){Id=cs=Tl=null}function Fd(t){var e=El.current;rt(El),t._currentValue=e}function of(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){Tl=t,Id=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Id!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(Tl===null)throw Error(J(308));cs=t,Tl.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var xr=null;function Od(t){xr===null?xr=[t]:xr.push(t)}function u_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Od(e)):(n.next=r.next,r.next=n),e.interleaved=n,yi(t,i)}function yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,He&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yi(t,n)}return r=i.interleaved,r===null?(e.next=e,Od(i)):(e.next=r.next,r.next=e),i.interleaved=e,yi(t,n)}function Ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ed(t,n)}}function hp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,i){var r=t.updateQueue;Ni=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(d=e,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=ut({},h,d);break e;case 2:Ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Pr|=o,t.lanes=o,t.memoizedState=h}}function pp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var Yo={},ni=nr(Yo),No=nr(Yo),Fo=nr(Yo);function Sr(t){if(t===Yo)throw Error(J(174));return t}function zd(t,e){switch(tt(Fo,e),tt(No,t),tt(ni,Yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zc(e,t)}rt(ni),tt(ni,e)}function Ps(){rt(ni),rt(No),rt(Fo)}function f_(t){Sr(Fo.current);var e=Sr(ni.current),n=zc(e,t.type);e!==n&&(tt(No,t),tt(ni,n))}function Bd(t){No.current===t&&(rt(ni),rt(No))}var at=nr(0);function Al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gu=[];function Hd(){for(var t=0;t<Gu.length;t++)Gu[t]._workInProgressVersionPrimary=null;Gu.length=0}var Za=wi.ReactCurrentDispatcher,Wu=wi.ReactCurrentBatchConfig,Rr=0,lt=null,Mt=null,Rt=null,Cl=!1,go=!1,Oo=0,jS=0;function kt(){throw Error(J(321))}function Vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function Gd(t,e,n,i,r,s){if(Rr=s,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Za.current=t===null||t.memoizedState===null?JS:ey,t=n(i,r),go){s=0;do{if(go=!1,Oo=0,25<=s)throw Error(J(301));s+=1,Rt=Mt=null,e.updateQueue=null,Za.current=ty,t=n(i,r)}while(go)}if(Za.current=Rl,e=Mt!==null&&Mt.next!==null,Rr=0,Rt=Mt=lt=null,Cl=!1,e)throw Error(J(300));return t}function Wd(){var t=Oo!==0;return Oo=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?lt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Ln(){if(Mt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Rt===null?lt.memoizedState:Rt.next;if(e!==null)Rt=e,Mt=t;else{if(t===null)throw Error(J(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Rt===null?lt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function ko(t,e){return typeof e=="function"?e(t):e}function Xu(t){var e=Ln(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Rr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,lt.lanes|=f,Pr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Gn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,lt.lanes|=s,Pr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $u(t){var e=Ln(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Gn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function d_(){}function h_(t,e){var n=lt,i=Ln(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,Xd(g_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,zo(9,m_.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(J(349));Rr&30||p_(n,e,r)}return r}function p_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m_(t,e,n,i){e.value=n,e.getSnapshot=i,__(e)&&v_(t)}function g_(t,e,n){return n(function(){__(e)&&v_(t)})}function __(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function v_(t){var e=yi(t,1);e!==null&&Vn(e,t,1,-1)}function mp(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:t},e.queue=t,t=t.dispatch=QS.bind(null,lt,t),[e.memoizedState,t]}function zo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function x_(){return Ln().memoizedState}function Qa(t,e,n,i){var r=$n();lt.flags|=t,r.memoizedState=zo(1|e,n,void 0,i===void 0?null:i)}function ou(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var o=Mt.memoizedState;if(s=o.destroy,i!==null&&Vd(i,o.deps)){r.memoizedState=zo(e,n,s,i);return}}lt.flags|=t,r.memoizedState=zo(1|e,n,s,i)}function gp(t,e){return Qa(8390656,8,t,e)}function Xd(t,e){return ou(2048,8,t,e)}function S_(t,e){return ou(4,2,t,e)}function y_(t,e){return ou(4,4,t,e)}function M_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function E_(t,e,n){return n=n!=null?n.concat([t]):null,ou(4,4,M_.bind(null,e,t),n)}function $d(){}function T_(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function w_(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function A_(t,e,n){return Rr&21?(Gn(n,e)||(n=bg(),lt.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function KS(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=Wu.transition;Wu.transition={};try{t(!1),e()}finally{Ze=n,Wu.transition=i}}function C_(){return Ln().memoizedState}function ZS(t,e,n){var i=Yi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},R_(t))P_(e,n);else if(n=u_(t,e,n,i),n!==null){var r=Yt();Vn(n,t,i,r),L_(n,e,i)}}function QS(t,e,n){var i=Yi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(R_(t))P_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Gn(a,o)){var l=e.interleaved;l===null?(r.next=r,Od(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=u_(t,e,r,i),n!==null&&(r=Yt(),Vn(n,t,i,r),L_(n,e,i))}}function R_(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function P_(t,e){go=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function L_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ed(t,n)}}var Rl={readContext:Pn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},JS={readContext:Pn,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:gp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4194308,4,M_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qa(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=$n();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ZS.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:mp,useDebugValue:$d,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=mp(!1),e=t[0];return t=KS.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=$n();if(st){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),Lt===null)throw Error(J(349));Rr&30||p_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gp(g_.bind(null,i,s,t),[t]),i.flags|=2048,zo(9,m_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=Lt.identifierPrefix;if(st){var n=mi,i=pi;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ey={readContext:Pn,useCallback:T_,useContext:Pn,useEffect:Xd,useImperativeHandle:E_,useInsertionEffect:S_,useLayoutEffect:y_,useMemo:w_,useReducer:Xu,useRef:x_,useState:function(){return Xu(ko)},useDebugValue:$d,useDeferredValue:function(t){var e=Ln();return A_(e,Mt.memoizedState,t)},useTransition:function(){var t=Xu(ko)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:h_,useId:C_,unstable_isNewReconciler:!1},ty={readContext:Pn,useCallback:T_,useContext:Pn,useEffect:Xd,useImperativeHandle:E_,useInsertionEffect:S_,useLayoutEffect:y_,useMemo:w_,useReducer:$u,useRef:x_,useState:function(){return $u(ko)},useDebugValue:$d,useDeferredValue:function(t){var e=Ln();return Mt===null?e.memoizedState=t:A_(e,Mt.memoizedState,t)},useTransition:function(){var t=$u(ko)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:h_,useId:C_,unstable_isNewReconciler:!1};function Fn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function af(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var au={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Yi(t),s=vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Vn(e,t,r,i),Ka(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Yi(t),s=vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Vn(e,t,r,i),Ka(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Yi(t),r=vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xi(t,r,i),e!==null&&(Vn(e,t,i,n),Ka(e,t,i))}};function _p(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!bo(n,i)||!bo(r,s):!0}function b_(t,e,n){var i=!1,r=Qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=nn(e)?Ar:Wt.current,i=e.contextTypes,s=(i=i!=null)?As(t,r):Qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=au,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&au.enqueueReplaceState(e,e.state,null)}function lf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=nn(e)?Ar:Wt.current,r.context=As(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(af(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&au.enqueueReplaceState(r,r.state,null),wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e){try{var n="",i=e;do n+=Px(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ny=typeof WeakMap=="function"?WeakMap:Map;function D_(t,e,n){n=vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ll||(Ll=!0,xf=i),uf(t,e)},n}function U_(t,e,n){n=vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){uf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uf(t,e),typeof i!="function"&&($i===null?$i=new Set([this]):$i.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ny;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=gy.bind(null,t,e,n),e.then(t,t))}function Sp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vi(-1,1),e.tag=2,Xi(n,e,1))),n.lanes|=1),t)}var iy=wi.ReactCurrentOwner,en=!1;function $t(t,e,n,i){e.child=t===null?l_(e,null,n,i):Rs(e,t.child,n,i)}function Mp(t,e,n,i,r){n=n.render;var s=e.ref;return xs(e,r),i=Gd(t,e,n,i,s,r),n=Wd(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(st&&n&&bd(e),e.flags|=1,$t(t,e,i,r),e.child)}function Ep(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!eh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,I_(t,e,s,i,r)):(t=nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(o,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function I_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(bo(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return cf(t,e,n,i,r)}function N_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(ds,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(ds,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(ds,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(ds,dn),dn|=i;return $t(t,e,r,n),e.child}function F_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cf(t,e,n,i,r){var s=nn(n)?Ar:Wt.current;return s=As(e,s),xs(e,r),n=Gd(t,e,n,i,s,r),i=Wd(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(st&&i&&bd(e),e.flags|=1,$t(t,e,n,r),e.child)}function Tp(t,e,n,i,r){if(nn(n)){var s=!0;Sl(e)}else s=!1;if(xs(e,r),e.stateNode===null)Ja(t,e),b_(e,n,i),lf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=nn(n)?Ar:Wt.current,u=As(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&vp(e,o,i,u),Ni=!1;var d=e.memoizedState;o.state=d,wl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||tn.current||Ni?(typeof f=="function"&&(af(e,n,f,i),l=e.memoizedState),(a=Ni||_p(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,c_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Fn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=nn(n)?Ar:Wt.current,l=As(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&vp(e,o,i,l),Ni=!1,d=e.memoizedState,o.state=d,wl(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||tn.current||Ni?(typeof m=="function"&&(af(e,n,m,i),v=e.memoizedState),(u=Ni||_p(e,n,u,i,d,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return ff(t,e,n,i,s,r)}function ff(t,e,n,i,r,s){F_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&up(e,n,!1),Mi(t,e,s);i=e.stateNode,iy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&up(e,n,!0),e.child}function O_(t){var e=t.stateNode;e.pendingContext?lp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lp(t,e.context,!1),zd(t,e.containerInfo)}function wp(t,e,n,i,r){return Cs(),Ud(r),e.flags|=256,$t(t,e,n,i),e.child}var df={dehydrated:null,treeContext:null,retryLane:0};function hf(t){return{baseLanes:t,cachePool:null,transitions:null}}function k_(t,e,n){var i=e.pendingProps,r=at.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(at,r&1),t===null)return sf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=cu(o,i,0,null),t=Tr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hf(n),e.memoizedState=df,t):Yd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ry(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=qi(a,s):(s=Tr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?hf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=df,i}return s=t.child,t=s.sibling,i=qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Yd(t,e){return e=cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ma(t,e,n,i){return i!==null&&Ud(i),Rs(e,t.child,null,n),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ry(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Yu(Error(J(422))),ma(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=cu({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,t.child,null,o),e.child.memoizedState=hf(o),e.memoizedState=df,s);if(!(e.mode&1))return ma(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=Yu(s,i,void 0),ma(t,e,o,i)}if(a=(o&t.childLanes)!==0,en||a){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yi(t,r),Vn(i,t,r,-1))}return Jd(),i=Yu(Error(J(421))),ma(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_y.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Wi(r.nextSibling),mn=e,st=!0,kn=null,t!==null&&(En[Tn++]=pi,En[Tn++]=mi,En[Tn++]=Cr,pi=t.id,mi=t.overflow,Cr=e),e=Yd(e,i.children),e.flags|=4096,e)}function Ap(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),of(t.return,e,n)}function qu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function z_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ap(t,n,e);else if(t.tag===19)Ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Al(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Al(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qu(e,!0,n,null,s);break;case"together":qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sy(t,e,n){switch(e.tag){case 3:O_(e),Cs();break;case 5:f_(e);break;case 1:nn(e.type)&&Sl(e);break;case 4:zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(El,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?k_(t,e,n):(tt(at,at.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);tt(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return z_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,N_(t,e,n)}return Mi(t,e,n)}var B_,pf,H_,V_;B_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pf=function(){};H_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Sr(ni.current);var s=null;switch(n){case"input":r=Nc(t,r),i=Nc(t,i),s=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),s=[];break;case"textarea":r=kc(t,r),i=kc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vl)}Bc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(To.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(To.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&nt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};V_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Zs(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function oy(t,e,n){var i=e.pendingProps;switch(Dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return nn(e.type)&&xl(),zt(e),null;case 3:return i=e.stateNode,Ps(),rt(tn),rt(Wt),Hd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ha(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(Mf(kn),kn=null))),pf(t,e),zt(e),null;case 5:Bd(e);var r=Sr(Fo.current);if(n=e.type,t!==null&&e.stateNode!=null)H_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return zt(e),null}if(t=Sr(ni.current),ha(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zn]=e,i[Io]=s,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<lo.length;r++)nt(lo[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":Nh(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":Oh(i,s),nt("invalid",i)}Bc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&da(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&da(i.textContent,a,t),r=["children",""+a]):To.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&nt("scroll",i)}switch(n){case"input":ra(i),Fh(i,s,!0);break;case"textarea":ra(i),kh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Zn]=e,t[Io]=i,B_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Hc(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<lo.length;r++)nt(lo[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":Nh(t,i),r=Nc(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),nt("invalid",t);break;case"textarea":Oh(t,i),r=kc(t,i),nt("invalid",t);break;default:r=i}Bc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_g(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wo(t,l):typeof l=="number"&&wo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(To.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nt("scroll",t):l!=null&&_d(t,s,l,o))}switch(n){case"input":ra(t),Fh(t,i,!1);break;case"textarea":ra(t),kh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)V_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=Sr(Fo.current),Sr(ni.current),ha(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:da(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zn]=e,e.stateNode=i}return zt(e),null;case 13:if(rt(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&hn!==null&&e.mode&1&&!(e.flags&128))o_(),Cs(),e.flags|=98560,s=!1;else if(s=ha(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[Zn]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else kn!==null&&(Mf(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?Et===0&&(Et=3):Jd())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ps(),pf(t,e),t===null&&Do(e.stateNode.containerInfo),zt(e),null;case 10:return Fd(e.type._context),zt(e),null;case 17:return nn(e.type)&&xl(),zt(e),null;case 19:if(rt(at),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Zs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Al(t),o!==null){for(e.flags|=128,Zs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&pt()>bs&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Al(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!st)return zt(e),null}else 2*pt()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pt(),e.sibling=null,n=at.current,tt(at,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Qd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function ay(t,e){switch(Dd(e),e.tag){case 1:return nn(e.type)&&xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ps(),rt(tn),rt(Wt),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bd(e),null;case 13:if(rt(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(at),null;case 4:return Ps(),null;case 10:return Fd(e.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var ga=!1,Gt=!1,ly=typeof WeakSet=="function"?WeakSet:Set,de=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ht(t,e,i)}else n.current=null}function mf(t,e,n){try{n()}catch(i){ht(t,e,i)}}var Cp=!1;function uy(t,e){if(Zc=ml,t=Yg(),Ld(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qc={focusedElem:t,selectionRange:n},ml=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,p=v.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:Fn(e.type,x),p);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(M){ht(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return v=Cp,Cp=!1,v}function _o(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&mf(e,n,s)}r=r.next}while(r!==i)}}function lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function gf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G_(t){var e=t.alternate;e!==null&&(t.alternate=null,G_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[Io],delete e[tf],delete e[XS],delete e[$S])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W_(t){return t.tag===5||t.tag===3||t.tag===4}function Rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vl));else if(i!==4&&(t=t.child,t!==null))for(_f(t,e,n),t=t.sibling;t!==null;)_f(t,e,n),t=t.sibling}function vf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(vf(t,e,n),t=t.sibling;t!==null;)vf(t,e,n),t=t.sibling}var It=null,On=!1;function Ci(t,e,n){for(n=n.child;n!==null;)X_(t,e,n),n=n.sibling}function X_(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(eu,n)}catch{}switch(n.tag){case 5:Gt||fs(n,e);case 6:var i=It,r=On;It=null,Ci(t,e,n),It=i,On=r,It!==null&&(On?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(On?(t=It,n=n.stateNode,t.nodeType===8?Hu(t.parentNode,n):t.nodeType===1&&Hu(t,n),Po(t)):Hu(It,n.stateNode));break;case 4:i=It,r=On,It=n.stateNode.containerInfo,On=!0,Ci(t,e,n),It=i,On=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mf(n,e,o),r=r.next}while(r!==i)}Ci(t,e,n);break;case 1:if(!Gt&&(fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ht(n,e,a)}Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Ci(t,e,n),Gt=i):Ci(t,e,n);break;default:Ci(t,e,n)}}function Pp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ly),e.forEach(function(i){var r=vy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,On=!1;break e;case 3:It=a.stateNode.containerInfo,On=!0;break e;case 4:It=a.stateNode.containerInfo,On=!0;break e}a=a.return}if(It===null)throw Error(J(160));X_(s,o,r),It=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$_(e,t),e=e.sibling}function $_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Xn(t),i&4){try{_o(3,t,t.return),lu(3,t)}catch(x){ht(t,t.return,x)}try{_o(5,t,t.return)}catch(x){ht(t,t.return,x)}}break;case 1:Dn(e,t),Xn(t),i&512&&n!==null&&fs(n,n.return);break;case 5:if(Dn(e,t),Xn(t),i&512&&n!==null&&fs(n,n.return),t.flags&32){var r=t.stateNode;try{wo(r,"")}catch(x){ht(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pg(r,s),Hc(a,o);var u=Hc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?xg(r,h):f==="dangerouslySetInnerHTML"?_g(r,h):f==="children"?wo(r,h):_d(r,f,h,u)}switch(a){case"input":Fc(r,s);break;case"textarea":mg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ms(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?ms(r,!!s.multiple,s.defaultValue,!0):ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Io]=s}catch(x){ht(t,t.return,x)}}break;case 6:if(Dn(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){ht(t,t.return,x)}}break;case 3:if(Dn(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(e.containerInfo)}catch(x){ht(t,t.return,x)}break;case 4:Dn(e,t),Xn(t);break;case 13:Dn(e,t),Xn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kd=pt())),i&4&&Pp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||f,Dn(e,t),Gt=u):Dn(e,t),Xn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(de=t,f=t.child;f!==null;){for(h=de=f;de!==null;){switch(d=de,m=d.child,d.tag){case 0:case 11:case 14:case 15:_o(4,d,d.return);break;case 1:fs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){ht(i,n,x)}}break;case 5:fs(d,d.return);break;case 22:if(d.memoizedState!==null){bp(h);continue}}m!==null?(m.return=d,de=m):bp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vg("display",o))}catch(x){ht(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){ht(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Dn(e,t),Xn(t),i&4&&Pp(t);break;case 21:break;default:Dn(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W_(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wo(r,""),i.flags&=-33);var s=Rp(t);vf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Rp(t);_f(t,a,o);break;default:throw Error(J(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cy(t,e,n){de=t,Y_(t)}function Y_(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ga;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=ga;var u=Gt;if(ga=o,(Gt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Dp(r):l!==null?(l.return=o,de=l):Dp(r);for(;s!==null;)de=s,Y_(s),s=s.sibling;de=r,ga=a,Gt=u}Lp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):Lp(t)}}function Lp(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||lu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Po(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Gt||e.flags&512&&gf(e)}catch(d){ht(e,e.return,d)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function bp(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Dp(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lu(4,e)}catch(l){ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ht(e,r,l)}}var s=e.return;try{gf(e)}catch(l){ht(e,s,l)}break;case 5:var o=e.return;try{gf(e)}catch(l){ht(e,o,l)}}}catch(l){ht(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var fy=Math.ceil,Pl=wi.ReactCurrentDispatcher,qd=wi.ReactCurrentOwner,Rn=wi.ReactCurrentBatchConfig,He=0,Lt=null,yt=null,Ft=0,dn=0,ds=nr(0),Et=0,Bo=null,Pr=0,uu=0,jd=0,vo=null,Zt=null,Kd=0,bs=1/0,fi=null,Ll=!1,xf=null,$i=null,_a=!1,Bi=null,bl=0,xo=0,Sf=null,el=-1,tl=0;function Yt(){return He&6?pt():el!==-1?el:el=pt()}function Yi(t){return t.mode&1?He&2&&Ft!==0?Ft&-Ft:qS.transition!==null?(tl===0&&(tl=bg()),tl):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:kg(t.type)),t):1}function Vn(t,e,n,i){if(50<xo)throw xo=0,Sf=null,Error(J(185));Wo(t,n,i),(!(He&2)||t!==Lt)&&(t===Lt&&(!(He&2)&&(uu|=n),Et===4&&Oi(t,Ft)),rn(t,i),n===1&&He===0&&!(e.mode&1)&&(bs=pt()+500,su&&ir()))}function rn(t,e){var n=t.callbackNode;qx(t,e);var i=pl(t,t===Lt?Ft:0);if(i===0)n!==null&&Hh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hh(n),e===1)t.tag===0?YS(Up.bind(null,t)):i_(Up.bind(null,t)),GS(function(){!(He&6)&&ir()}),n=null;else{switch(Dg(i)){case 1:n=Md;break;case 4:n=Pg;break;case 16:n=hl;break;case 536870912:n=Lg;break;default:n=hl}n=tv(n,q_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function q_(t,e){if(el=-1,tl=0,He&6)throw Error(J(327));var n=t.callbackNode;if(Ss()&&t.callbackNode!==n)return null;var i=pl(t,t===Lt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dl(t,i);else{e=i;var r=He;He|=2;var s=K_();(Lt!==t||Ft!==e)&&(fi=null,bs=pt()+500,Er(t,e));do try{py();break}catch(a){j_(t,a)}while(!0);Nd(),Pl.current=s,He=r,yt!==null?e=0:(Lt=null,Ft=0,e=Et)}if(e!==0){if(e===2&&(r=$c(t),r!==0&&(i=r,e=yf(t,r))),e===1)throw n=Bo,Er(t,0),Oi(t,i),rn(t,pt()),n;if(e===6)Oi(t,i);else{if(r=t.current.alternate,!(i&30)&&!dy(r)&&(e=Dl(t,i),e===2&&(s=$c(t),s!==0&&(i=s,e=yf(t,s))),e===1))throw n=Bo,Er(t,0),Oi(t,i),rn(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:hr(t,Zt,fi);break;case 3:if(Oi(t,i),(i&130023424)===i&&(e=Kd+500-pt(),10<e)){if(pl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ef(hr.bind(null,t,Zt,fi),e);break}hr(t,Zt,fi);break;case 4:if(Oi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Hn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fy(i/1960))-i,10<i){t.timeoutHandle=ef(hr.bind(null,t,Zt,fi),i);break}hr(t,Zt,fi);break;case 5:hr(t,Zt,fi);break;default:throw Error(J(329))}}}return rn(t,pt()),t.callbackNode===n?q_.bind(null,t):null}function yf(t,e){var n=vo;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Mf(e)),t}function Mf(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function dy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oi(t,e){for(e&=~jd,e&=~uu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),i=1<<n;t[n]=-1,e&=~i}}function Up(t){if(He&6)throw Error(J(327));Ss();var e=pl(t,0);if(!(e&1))return rn(t,pt()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var i=$c(t);i!==0&&(e=i,n=yf(t,i))}if(n===1)throw n=Bo,Er(t,0),Oi(t,e),rn(t,pt()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hr(t,Zt,fi),rn(t,pt()),null}function Zd(t,e){var n=He;He|=1;try{return t(e)}finally{He=n,He===0&&(bs=pt()+500,su&&ir())}}function Lr(t){Bi!==null&&Bi.tag===0&&!(He&6)&&Ss();var e=He;He|=1;var n=Rn.transition,i=Ze;try{if(Rn.transition=null,Ze=1,t)return t()}finally{Ze=i,Rn.transition=n,He=e,!(He&6)&&ir()}}function Qd(){dn=ds.current,rt(ds)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VS(n)),yt!==null)for(n=yt.return;n!==null;){var i=n;switch(Dd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xl();break;case 3:Ps(),rt(tn),rt(Wt),Hd();break;case 5:Bd(i);break;case 4:Ps();break;case 13:rt(at);break;case 19:rt(at);break;case 10:Fd(i.type._context);break;case 22:case 23:Qd()}n=n.return}if(Lt=t,yt=t=qi(t.current,null),Ft=dn=e,Et=0,Bo=null,jd=uu=Pr=0,Zt=vo=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}xr=null}return t}function j_(t,e){do{var n=yt;try{if(Nd(),Za.current=Rl,Cl){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cl=!1}if(Rr=0,Rt=Mt=lt=null,go=!1,Oo=0,qd.current=null,n===null||n.return===null){Et=1,Bo=e,yt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Sp(o);if(m!==null){m.flags&=-257,yp(m,o,a,s,e),m.mode&1&&xp(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){xp(s,u,e),Jd();break e}l=Error(J(426))}}else if(st&&a.mode&1){var p=Sp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),yp(p,o,a,s,e),Ud(Ls(l,a));break e}}s=l=Ls(l,a),Et!==4&&(Et=2),vo===null?vo=[s]:vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=D_(s,l,e);hp(s,c);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&($i===null||!$i.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=U_(s,a,e);hp(s,M);break e}}s=s.return}while(s!==null)}Q_(n)}catch(P){e=P,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function K_(){var t=Pl.current;return Pl.current=Rl,t===null?Rl:t}function Jd(){(Et===0||Et===3||Et===2)&&(Et=4),Lt===null||!(Pr&268435455)&&!(uu&268435455)||Oi(Lt,Ft)}function Dl(t,e){var n=He;He|=2;var i=K_();(Lt!==t||Ft!==e)&&(fi=null,Er(t,e));do try{hy();break}catch(r){j_(t,r)}while(!0);if(Nd(),He=n,Pl.current=i,yt!==null)throw Error(J(261));return Lt=null,Ft=0,Et}function hy(){for(;yt!==null;)Z_(yt)}function py(){for(;yt!==null&&!zx();)Z_(yt)}function Z_(t){var e=ev(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?Q_(t):yt=e,qd.current=null}function Q_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ay(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,yt=null;return}}else if(n=oy(n,e,dn),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Et===0&&(Et=5)}function hr(t,e,n){var i=Ze,r=Rn.transition;try{Rn.transition=null,Ze=1,my(t,e,n,i)}finally{Rn.transition=r,Ze=i}return null}function my(t,e,n,i){do Ss();while(Bi!==null);if(He&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jx(t,s),t===Lt&&(yt=Lt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_a||(_a=!0,tv(hl,function(){return Ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=Ze;Ze=1;var a=He;He|=4,qd.current=null,uy(t,n),$_(n,t),NS(Qc),ml=!!Zc,Qc=Zc=null,t.current=n,cy(n),Bx(),He=a,Ze=o,Rn.transition=s}else t.current=n;if(_a&&(_a=!1,Bi=t,bl=r),s=t.pendingLanes,s===0&&($i=null),Gx(n.stateNode),rn(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ll)throw Ll=!1,t=xf,xf=null,t;return bl&1&&t.tag!==0&&Ss(),s=t.pendingLanes,s&1?t===Sf?xo++:(xo=0,Sf=t):xo=0,ir(),null}function Ss(){if(Bi!==null){var t=Dg(bl),e=Rn.transition,n=Ze;try{if(Rn.transition=null,Ze=16>t?16:t,Bi===null)var i=!1;else{if(t=Bi,Bi=null,bl=0,He&6)throw Error(J(331));var r=He;for(He|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var f=de;switch(f.tag){case 0:case 11:case 15:_o(8,f,s)}var h=f.child;if(h!==null)h.return=f,de=h;else for(;de!==null;){f=de;var d=f.sibling,m=f.return;if(G_(f),f===u){de=null;break}if(d!==null){d.return=m,de=d;break}de=m}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_o(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,de=c;break e}de=s.return}}var g=t.current;for(de=g;de!==null;){o=de;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,de=_;else e:for(o=g;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:lu(9,a)}}catch(P){ht(a,a.return,P)}if(a===o){de=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,de=M;break e}de=a.return}}if(He=r,ir(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(eu,t)}catch{}i=!0}return i}finally{Ze=n,Rn.transition=e}}return!1}function Ip(t,e,n){e=Ls(n,e),e=D_(t,e,1),t=Xi(t,e,1),e=Yt(),t!==null&&(Wo(t,1,e),rn(t,e))}function ht(t,e,n){if(t.tag===3)Ip(t,t,n);else for(;e!==null;){if(e.tag===3){Ip(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($i===null||!$i.has(i))){t=Ls(n,t),t=U_(e,t,1),e=Xi(e,t,1),t=Yt(),e!==null&&(Wo(e,1,t),rn(e,t));break}}e=e.return}}function gy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ft&n)===n&&(Et===4||Et===3&&(Ft&130023424)===Ft&&500>pt()-Kd?Er(t,0):jd|=n),rn(t,e)}function J_(t,e){e===0&&(t.mode&1?(e=aa,aa<<=1,!(aa&130023424)&&(aa=4194304)):e=1);var n=Yt();t=yi(t,e),t!==null&&(Wo(t,e,n),rn(t,n))}function _y(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),J_(t,n)}function vy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),J_(t,n)}var ev;ev=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,sy(t,e,n);en=!!(t.flags&131072)}else en=!1,st&&e.flags&1048576&&r_(e,Ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ja(t,e),t=e.pendingProps;var r=As(e,Wt.current);xs(e,n),r=Gd(null,e,i,t,r,n);var s=Wd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,Sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kd(e),r.updater=au,e.stateNode=r,r._reactInternals=e,lf(e,i,t,n),e=ff(null,e,i,!0,s,n)):(e.tag=0,st&&s&&bd(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ja(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Sy(i),t=Fn(i,t),r){case 0:e=cf(null,e,i,t,n);break e;case 1:e=Tp(null,e,i,t,n);break e;case 11:e=Mp(null,e,i,t,n);break e;case 14:e=Ep(null,e,i,Fn(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),cf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Tp(t,e,i,r,n);case 3:e:{if(O_(e),t===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,c_(t,e),wl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ls(Error(J(423)),e),e=wp(t,e,i,n,r);break e}else if(i!==r){r=Ls(Error(J(424)),e),e=wp(t,e,i,n,r);break e}else for(hn=Wi(e.stateNode.containerInfo.firstChild),mn=e,st=!0,kn=null,n=l_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),i===r){e=Mi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return f_(e),t===null&&sf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Jc(i,r)?o=null:s!==null&&Jc(i,s)&&(e.flags|=32),F_(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&sf(e),null;case 13:return k_(t,e,n);case 4:return zd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Rs(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Mp(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt(El,i._currentValue),i._currentValue=o,s!==null)if(Gn(s.value,o)){if(s.children===r.children&&!tn.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=vi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),of(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),of(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,xs(e,n),r=Pn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),Ep(t,e,i,r,n);case 15:return I_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Ja(t,e),e.tag=1,nn(i)?(t=!0,Sl(e)):t=!1,xs(e,n),b_(e,i,r),lf(e,i,r,n),ff(null,e,i,!0,t,n);case 19:return z_(t,e,n);case 22:return N_(t,e,n)}throw Error(J(156,e.tag))};function tv(t,e){return Rg(t,e)}function xy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new xy(t,e,n,i)}function eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sy(t){if(typeof t=="function")return eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xd)return 11;if(t===Sd)return 14}return 2}function qi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")eh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ns:return Tr(n.children,r,s,e);case vd:o=8,r|=8;break;case bc:return t=An(12,n,e,r|2),t.elementType=bc,t.lanes=s,t;case Dc:return t=An(13,n,e,r),t.elementType=Dc,t.lanes=s,t;case Uc:return t=An(19,n,e,r),t.elementType=Uc,t.lanes=s,t;case fg:return cu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ug:o=10;break e;case cg:o=9;break e;case xd:o=11;break e;case Sd:o=14;break e;case Ii:o=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Tr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function cu(t,e,n,i){return t=An(22,t,i,e),t.elementType=fg,t.lanes=n,t.stateNode={isHidden:!1},t}function ju(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function Ku(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lu(0),this.expirationTimes=Lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function th(t,e,n,i,r,s,o,a,l){return t=new yy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(s),t}function My(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function nv(t){if(!t)return Qi;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(nn(n))return n_(t,n,e)}return e}function iv(t,e,n,i,r,s,o,a,l){return t=th(n,i,!0,t,r,s,o,a,l),t.context=nv(null),n=t.current,i=Yt(),r=Yi(n),s=vi(i,r),s.callback=e??null,Xi(n,s,r),t.current.lanes=r,Wo(t,r,i),rn(t,i),t}function fu(t,e,n,i){var r=e.current,s=Yt(),o=Yi(r);return n=nv(n),e.context===null?e.context=n:e.pendingContext=n,e=vi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xi(r,e,o),t!==null&&(Vn(t,r,o,s),Ka(t,r,o)),o}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Np(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nh(t,e){Np(t,e),(t=t.alternate)&&Np(t,e)}function Ey(){return null}var rv=typeof reportError=="function"?reportError:function(t){console.error(t)};function ih(t){this._internalRoot=t}du.prototype.render=ih.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));fu(t,e,null,null)};du.prototype.unmount=ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lr(function(){fu(null,t,null,null)}),e[Si]=null}};function du(t){this._internalRoot=t}du.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ng();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fi.length&&e!==0&&e<Fi[n].priority;n++);Fi.splice(n,0,t),n===0&&Og(t)}};function rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fp(){}function Ty(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ul(o);s.call(u)}}var o=iv(e,i,t,0,null,!1,!1,"",Fp);return t._reactRootContainer=o,t[Si]=o.current,Do(t.nodeType===8?t.parentNode:t),Lr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ul(l);a.call(u)}}var l=th(t,0,!1,null,null,!1,!1,"",Fp);return t._reactRootContainer=l,t[Si]=l.current,Do(t.nodeType===8?t.parentNode:t),Lr(function(){fu(e,l,n,i)}),l}function pu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ul(o);a.call(l)}}fu(e,o,t,r)}else o=Ty(n,e,t,r,i);return Ul(o)}Ug=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ao(e.pendingLanes);n!==0&&(Ed(e,n|1),rn(e,pt()),!(He&6)&&(bs=pt()+500,ir()))}break;case 13:Lr(function(){var i=yi(t,1);if(i!==null){var r=Yt();Vn(i,t,1,r)}}),nh(t,1)}};Td=function(t){if(t.tag===13){var e=yi(t,134217728);if(e!==null){var n=Yt();Vn(e,t,134217728,n)}nh(t,134217728)}};Ig=function(t){if(t.tag===13){var e=Yi(t),n=yi(t,e);if(n!==null){var i=Yt();Vn(n,t,e,i)}nh(t,e)}};Ng=function(){return Ze};Fg=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};Gc=function(t,e,n){switch(e){case"input":if(Fc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ru(i);if(!r)throw Error(J(90));hg(i),Fc(i,r)}}}break;case"textarea":mg(t,n);break;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}};Mg=Zd;Eg=Lr;var wy={usingClientEntryPoint:!1,Events:[$o,os,ru,Sg,yg,Zd]},Qs={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ay={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ag(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||Ey,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!va.isDisabled&&va.supportsFiber)try{eu=va.inject(Ay),ti=va}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wy;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rh(e))throw Error(J(200));return My(t,e,null,n)};xn.createRoot=function(t,e){if(!rh(t))throw Error(J(299));var n=!1,i="",r=rv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=th(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,Do(t.nodeType===8?t.parentNode:t),new ih(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=Ag(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Lr(t)};xn.hydrate=function(t,e,n){if(!hu(e))throw Error(J(200));return pu(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!rh(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=rv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=iv(e,null,t,1,n??null,r,!1,s,o),t[Si]=e.current,Do(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new du(e)};xn.render=function(t,e,n){if(!hu(e))throw Error(J(200));return pu(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!hu(t))throw Error(J(40));return t._reactRootContainer?(Lr(function(){pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};xn.unstable_batchedUpdates=Zd;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!hu(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return pu(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function sv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sv)}catch(t){console.error(t)}}sv(),sg.exports=xn;var Cy=sg.exports,ov,Op=Cy;ov=Op.createRoot,Op.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sh="167",Ry=0,kp=1,Py=2,av=1,Ly=2,ci=3,Ji=0,sn=1,hi=2,ji=0,ys=1,zp=2,Bp=3,Hp=4,by=5,gr=100,Dy=101,Uy=102,Iy=103,Ny=104,Fy=200,Oy=201,ky=202,zy=203,Ef=204,Tf=205,By=206,Hy=207,Vy=208,Gy=209,Wy=210,Xy=211,$y=212,Yy=213,qy=214,jy=0,Ky=1,Zy=2,Il=3,Qy=4,Jy=5,eM=6,tM=7,lv=0,nM=1,iM=2,Ki=0,rM=1,sM=2,oM=3,aM=4,lM=5,uM=6,cM=7,uv=300,Ds=301,Us=302,wf=303,Af=304,mu=306,Cf=1e3,yr=1001,Rf=1002,Cn=1003,fM=1004,xa=1005,zn=1006,Zu=1007,Mr=1008,Ei=1009,cv=1010,fv=1011,Ho=1012,oh=1013,br=1014,gi=1015,qo=1016,ah=1017,lh=1018,Is=1020,dv=35902,hv=1021,pv=1022,Bn=1023,mv=1024,gv=1025,Ms=1026,Ns=1027,_v=1028,uh=1029,vv=1030,ch=1031,fh=1033,il=33776,rl=33777,sl=33778,ol=33779,Pf=35840,Lf=35841,bf=35842,Df=35843,Uf=36196,If=37492,Nf=37496,Ff=37808,Of=37809,kf=37810,zf=37811,Bf=37812,Hf=37813,Vf=37814,Gf=37815,Wf=37816,Xf=37817,$f=37818,Yf=37819,qf=37820,jf=37821,al=36492,Kf=36494,Zf=36495,xv=36283,Qf=36284,Jf=36285,ed=36286,dM=3200,hM=3201,Sv=0,pM=1,ki="",Yn="srgb",rr="srgb-linear",dh="display-p3",gu="display-p3-linear",Nl="linear",it="srgb",Fl="rec709",Ol="p3",kr=7680,Vp=519,mM=512,gM=513,_M=514,yv=515,vM=516,xM=517,SM=518,yM=519,Gp=35044,Wp="300 es",_i=2e3,kl=2001;class Hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qu=Math.PI/180,td=180/Math.PI;function jo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function MM(t,e){return(t%e+e)%e}function Ju(t,e,n){return(1-n)*t+n*e}function Js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,o,a,l,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],m=i[5],v=i[8],x=r[0],p=r[3],c=r[6],g=r[1],_=r[4],M=r[7],P=r[2],A=r[5],T=r[8];return s[0]=o*x+a*g+l*P,s[3]=o*p+a*_+l*A,s[6]=o*c+a*M+l*T,s[1]=u*x+f*g+h*P,s[4]=u*p+f*_+h*A,s[7]=u*c+f*M+h*T,s[2]=d*x+m*g+v*P,s[5]=d*p+m*_+v*A,s[8]=d*c+m*M+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*s,m=u*s-o*l,v=n*h+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ec.makeScale(e,n)),this}rotate(e){return this.premultiply(ec.makeRotation(-e)),this}translate(e,n){return this.premultiply(ec.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ec=new Ue;function Mv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function EM(){const t=zl("canvas");return t.style.display="block",t}const Xp={};function So(t){t in Xp||(Xp[t]=!0,console.warn(t))}function TM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const $p=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yp=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),eo={[rr]:{transfer:Nl,primaries:Fl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Yn]:{transfer:it,primaries:Fl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[gu]:{transfer:Nl,primaries:Ol,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Yp),fromReference:t=>t.applyMatrix3($p)},[dh]:{transfer:it,primaries:Ol,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Yp),fromReference:t=>t.applyMatrix3($p).convertLinearToSRGB()}},wM=new Set([rr,gu]),je={enabled:!0,_workingColorSpace:rr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!wM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=eo[e].toReference,r=eo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return eo[t].primaries},getTransfer:function(t){return t===ki?Nl:eo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(eo[e].luminanceCoefficients)}};function Es(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function tc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class AM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=zl("canvas")),zr.width=e.width,zr.height=e.height;const i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Es(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Es(n[i]/255)*255):n[i]=Es(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CM=0;class Ev{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nc(r[o].image)):s.push(nc(r[o]))}else s=nc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?AM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RM=0;class on extends Hs{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=yr,r=yr,s=zn,o=Mr,a=Bn,l=Ei,u=on.DEFAULT_ANISOTROPY,f=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=jo(),this.name="",this.source=new Ev(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cf:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cf:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=uv;on.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],m=l[5],v=l[9],x=l[2],p=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,M=(m+1)/2,P=(c+1)/2,A=(f+d)/4,T=(h+x)/4,b=(v+p)/4;return _>M&&_>P?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=T/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=b/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-v)*(p-v)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(p-v)/g,this.y=(h-x)/g,this.z=(d-f)/g,this.w=Math.acos((u+m+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PM extends Hs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ev(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends PM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Tv extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LM extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(h!==x||l!==d||u!==m||f!==v){let p=1-a;const c=l*d+u*m+f*v+h*x,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const P=Math.sqrt(_),A=Math.atan2(P,c*g);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P}const M=a*g;if(l=l*p+d*M,u=u*p+m*M,f=f*p+v*M,h=h*p+x*M,p===1-a){const P=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=P,u*=P,f*=P,h*=P}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+f*h+l*m-u*d,e[n+1]=l*v+f*d+u*h-a*m,e[n+2]=u*v+f*m+a*d-l*h,e[n+3]=f*v-a*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*f*h+u*m*v,this._y=u*m*h-d*f*v,this._z=u*f*v+d*m*h,this._w=u*f*h-d*m*v;break;case"YXZ":this._x=d*f*h+u*m*v,this._y=u*m*h-d*f*v,this._z=u*f*v-d*m*h,this._w=u*f*h+d*m*v;break;case"ZXY":this._x=d*f*h-u*m*v,this._y=u*m*h+d*f*v,this._z=u*f*v+d*m*h,this._w=u*f*h-d*m*v;break;case"ZYX":this._x=d*f*h-u*m*v,this._y=u*m*h+d*f*v,this._z=u*f*v-d*m*h,this._w=u*f*h+d*m*v;break;case"YZX":this._x=d*f*h+u*m*v,this._y=u*m*h+d*f*v,this._z=u*f*v-d*m*h,this._w=u*f*h-d*m*v;break;case"XZY":this._x=d*f*h-u*m*v,this._y=u*m*h-d*f*v,this._z=u*f*v+d*m*h,this._w=u*f*h+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*f,this.y=i+l*f+a*u-s*h,this.z=r+l*h+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new k,qp=new Ko;class Zo{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),ya.subVectors(this.max,to),Br.subVectors(e.a,to),Hr.subVectors(e.b,to),Vr.subVectors(e.c,to),Ri.subVectors(Hr,Br),Pi.subVectors(Vr,Hr),or.subVectors(Br,Vr);let n=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-or.z,or.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,or.z,0,-or.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-or.y,or.x,0];return!rc(n,Br,Hr,Vr,ya)||(n=[1,0,0,0,1,0,0,0,1],!rc(n,Br,Hr,Vr,ya))?!1:(Ma.crossVectors(Ri,Pi),n=[Ma.x,Ma.y,Ma.z],rc(n,Br,Hr,Vr,ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new k,new k,new k,new k,new k,new k,new k,new k],Un=new k,Sa=new Zo,Br=new k,Hr=new k,Vr=new k,Ri=new k,Pi=new k,or=new k,to=new k,ya=new k,Ma=new k,ar=new k;function rc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ar.fromArray(t,s);const a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),u=n.dot(ar),f=i.dot(ar);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const bM=new Zo,no=new k,sc=new k;class hh{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const n=no.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(no,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(sc)),this.expandByPoint(no.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new k,oc=new k,Ea=new k,Li=new k,ac=new k,Ta=new k,lc=new k;class DM{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){oc.copy(e).add(n).multiplyScalar(.5),Ea.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(oc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ea),a=Li.dot(this.direction),l=-Li.dot(Ea),u=Li.lengthSq(),f=Math.abs(1-o*o);let h,d,m,v;if(f>0)if(h=o*l-a,d=o*a-l,v=s*f,h>=0)if(d>=-v)if(d<=v){const x=1/f;h*=x,d*=x,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(oc).addScaledVector(Ea,d),m}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){ac.subVectors(n,e),Ta.subVectors(i,e),lc.crossVectors(ac,Ta);let o=this.direction.dot(lc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(Ta.crossVectors(Li,Ta));if(l<0)return null;const u=a*this.direction.dot(ac.cross(Li));if(u<0||l+u>o)return null;const f=-a*Li.dot(lc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,s,o,a,l,u,f,h,d,m,v,x,p){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,h,d,m,v,x,p)}set(e,n,i,r,s,o,a,l,u,f,h,d,m,v,x,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=m,c[7]=v,c[11]=x,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,v=a*f,x=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=m+v*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=v+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,v=u*f,x=u*h;n[0]=d+x*a,n[4]=v*a-m,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,v=u*f,x=u*h;n[0]=d-x*a,n[4]=-o*h,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*f,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,v=a*f,x=a*h;n[0]=l*f,n[4]=v*u-m,n[8]=d*u+x,n[1]=l*h,n[5]=x*u+d,n[9]=m*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=x-d*h,n[8]=v*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*h+v,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+x,n[5]=o*f,n[9]=m*h-v,n[2]=v*h-m,n[6]=a*f,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UM,e,IM)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),bi.crossVectors(i,cn),bi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),bi.crossVectors(i,cn)),bi.normalize(),wa.crossVectors(cn,bi),r[0]=bi.x,r[4]=wa.x,r[8]=cn.x,r[1]=bi.y,r[5]=wa.y,r[9]=cn.y,r[2]=bi.z,r[6]=wa.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],m=i[13],v=i[2],x=i[6],p=i[10],c=i[14],g=i[3],_=i[7],M=i[11],P=i[15],A=r[0],T=r[4],b=r[8],w=r[12],S=r[1],L=r[5],V=r[9],B=r[13],Y=r[2],q=r[6],G=r[10],j=r[14],D=r[3],X=r[7],K=r[11],se=r[15];return s[0]=o*A+a*S+l*Y+u*D,s[4]=o*T+a*L+l*q+u*X,s[8]=o*b+a*V+l*G+u*K,s[12]=o*w+a*B+l*j+u*se,s[1]=f*A+h*S+d*Y+m*D,s[5]=f*T+h*L+d*q+m*X,s[9]=f*b+h*V+d*G+m*K,s[13]=f*w+h*B+d*j+m*se,s[2]=v*A+x*S+p*Y+c*D,s[6]=v*T+x*L+p*q+c*X,s[10]=v*b+x*V+p*G+c*K,s[14]=v*w+x*B+p*j+c*se,s[3]=g*A+_*S+M*Y+P*D,s[7]=g*T+_*L+M*q+P*X,s[11]=g*b+_*V+M*G+P*K,s[15]=g*w+_*B+M*j+P*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],m=e[14],v=e[3],x=e[7],p=e[11],c=e[15];return v*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*m-i*l*m)+x*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*f-s*l*f)+p*(+n*u*h-n*a*m-s*o*h+i*o*m+s*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],m=e[11],v=e[12],x=e[13],p=e[14],c=e[15],g=h*p*u-x*d*u+x*l*m-a*p*m-h*l*c+a*d*c,_=v*d*u-f*p*u-v*l*m+o*p*m+f*l*c-o*d*c,M=f*x*u-v*h*u+v*a*m-o*x*m-f*a*c+o*h*c,P=v*h*l-f*x*l-v*a*d+o*x*d+f*a*p-o*h*p,A=n*g+i*_+r*M+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=g*T,e[1]=(x*d*s-h*p*s-x*r*m+i*p*m+h*r*c-i*d*c)*T,e[2]=(a*p*s-x*l*s+x*r*u-i*p*u-a*r*c+i*l*c)*T,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*m-i*l*m)*T,e[4]=_*T,e[5]=(f*p*s-v*d*s+v*r*m-n*p*m-f*r*c+n*d*c)*T,e[6]=(v*l*s-o*p*s-v*r*u+n*p*u+o*r*c-n*l*c)*T,e[7]=(o*d*s-f*l*s+f*r*u-n*d*u-o*r*m+n*l*m)*T,e[8]=M*T,e[9]=(v*h*s-f*x*s-v*i*m+n*x*m+f*i*c-n*h*c)*T,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*c+n*a*c)*T,e[11]=(f*a*s-o*h*s-f*i*u+n*h*u+o*i*m-n*a*m)*T,e[12]=P*T,e[13]=(f*x*r-v*h*r+v*i*d-n*x*d-f*i*p+n*h*p)*T,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*p-n*a*p)*T,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,h=a+a,d=s*u,m=s*f,v=s*h,x=o*f,p=o*h,c=a*h,g=l*u,_=l*f,M=l*h,P=i.x,A=i.y,T=i.z;return r[0]=(1-(x+c))*P,r[1]=(m+M)*P,r[2]=(v-_)*P,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(d+c))*A,r[6]=(p+g)*A,r[7]=0,r[8]=(v+_)*T,r[9]=(p-g)*T,r[10]=(1-(d+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const o=Gr.set(r[4],r[5],r[6]).length(),a=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const u=1/s,f=1/o,h=1/a;return In.elements[0]*=u,In.elements[1]*=u,In.elements[2]*=u,In.elements[4]*=f,In.elements[5]*=f,In.elements[6]*=f,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,n.setFromRotationMatrix(In),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=_i){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,v;if(a===_i)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===kl)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_i){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*u,m=(i+r)*f;let v,x;if(a===_i)v=(o+s)*h,x=-2*h;else if(a===kl)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gr=new k,In=new Tt,UM=new k(0,0,0),IM=new k(1,1,1),bi=new k,wa=new k,cn=new k,jp=new Tt,Kp=new Ko;class Ti{constructor(e=0,n=0,i=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class wv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NM=0;const Zp=new k,Wr=new Ko,ai=new Tt,Aa=new k,io=new k,FM=new k,OM=new Ko,Qp=new k(1,0,0),Jp=new k(0,1,0),em=new k(0,0,1),tm={type:"added"},kM={type:"removed"},Xr={type:"childadded",child:null},uc={type:"childremoved",child:null};class gn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new k,n=new Ti,i=new Ko,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ue}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,n){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Aa.copy(e):Aa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(io,Aa,this.up):ai.lookAt(Aa,io,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(ai),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tm),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kM),uc.child=e,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tm),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,FM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,OM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new k(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new k,li=new k,cc=new k,ui=new k,$r=new k,Yr=new k,nm=new k,fc=new k,dc=new k,hc=new k;class Qn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),li.subVectors(i,n),cc.subVectors(e,n);const o=Nn.dot(Nn),a=Nn.dot(li),l=Nn.dot(cc),u=li.dot(li),f=li.dot(cc),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(u*l-a*f)*d,v=(o*f-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),li.subVectors(e,n),Nn.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Nn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;$r.subVectors(r,i),Yr.subVectors(s,i),fc.subVectors(e,i);const l=$r.dot(fc),u=Yr.dot(fc);if(l<=0&&u<=0)return n.copy(i);dc.subVectors(e,r);const f=$r.dot(dc),h=Yr.dot(dc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector($r,o);hc.subVectors(e,s);const m=$r.dot(hc),v=Yr.dot(hc);if(v>=0&&m<=v)return n.copy(s);const x=m*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Yr,a);const p=f*v-m*h;if(p<=0&&h-f>=0&&m-v>=0)return nm.subVectors(s,r),a=(h-f)/(h-f+(m-v)),n.copy(r).addScaledVector(nm,a);const c=1/(p+x+d);return o=x*c,a=d*c,n.copy(i).addScaledVector($r,o).addScaledVector(Yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function pc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=MM(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=pc(o,s,e+1/3),this.g=pc(o,s,e),this.b=pc(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,n=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const i=Av[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=tc(e.r),this.g=tc(e.g),this.b=tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return je.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Qt(Ht.r*255,0,255))*65536+Math.round(Qt(Ht.g*255,0,255))*256+Math.round(Qt(Ht.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=je.workingColorSpace){return je.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Yn){je.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(Ca);const i=Ju(Di.h,Ca.h,n),r=Ju(Di.s,Ca.s,n),s=Ju(Di.l,Ca.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new et;et.NAMES=Av;let zM=0;class Qo extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=ys,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ef,this.blendDst=Tf,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ef&&(i.blendSrc=this.blendSrc),this.blendDst!==Tf&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Il&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Cv extends Qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new k,Ra=new We;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return So("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ra.fromBufferAttribute(this,n),Ra.applyMatrix3(e),this.setXY(n,Ra.x,Ra.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Js(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Js(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Js(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gp&&(e.usage=this.usage),e}}class Rv extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Pv extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wr extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let BM=0;const Mn=new Tt,mc=new gn,qr=new k,fn=new Zo,ro=new Zo,Ct=new k;class Nr extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mv(e)?Pv:Rv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return mc.lookAt(e),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(fn.min,ro.min),fn.expandByPoint(Ct),Ct.addVectors(fn.max,ro.max),fn.expandByPoint(Ct)):(fn.expandByPoint(ro.min),fn.expandByPoint(ro.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Ct.fromBufferAttribute(a,u),l&&(qr.fromBufferAttribute(e,u),Ct.add(qr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new k,l[b]=new k;const u=new k,f=new k,h=new k,d=new We,m=new We,v=new We,x=new k,p=new k;function c(b,w,S){u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),v.fromBufferAttribute(s,S),f.sub(u),h.sub(u),m.sub(d),v.sub(d);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(L),p.copy(h).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(L),a[b].add(x),a[w].add(x),a[S].add(x),l[b].add(p),l[w].add(p),l[S].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,w=g.length;b<w;++b){const S=g[b],L=S.start,V=S.count;for(let B=L,Y=L+V;B<Y;B+=3)c(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new k,M=new k,P=new k,A=new k;function T(b){P.fromBufferAttribute(r,b),A.copy(P);const w=a[b];_.copy(w),_.sub(P.multiplyScalar(P.dot(w))).normalize(),M.crossVectors(A,w);const L=M.dot(l[b])<0?-1:1;o.setXYZW(b,_.x,_.y,_.z,L)}for(let b=0,w=g.length;b<w;++b){const S=g[b],L=S.start,V=S.count;for(let B=L,Y=L+V;B<Y;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,u=new k,f=new k,h=new k;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let m=0,v=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*f;for(let c=0;c<f;c++)d[v++]=u[m++]}return new ii(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new Tt,lr=new DM,Pa=new hh,rm=new k,jr=new k,Kr=new k,Zr=new k,gc=new k,La=new k,ba=new We,Da=new We,Ua=new We,sm=new k,om=new k,am=new k,Ia=new k,Na=new k;class Jn extends gn{constructor(e=new Nr,n=new Cv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){La.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(gc.fromBufferAttribute(h,e),o?La.addScaledVector(gc,f):La.addScaledVector(gc.sub(n),f))}n.add(La)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(Pa.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Pa,rm)===null||lr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(s).invert(),lr.copy(e.ray).applyMatrix4(im),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const p=d[v],c=o[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,P=_;M<P;M+=3){const A=a.getX(M),T=a.getX(M+1),b=a.getX(M+2);r=Fa(this,c,e,i,u,f,h,A,T,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=v,c=x;p<c;p+=3){const g=a.getX(p),_=a.getX(p+1),M=a.getX(p+2);r=Fa(this,o,e,i,u,f,h,g,_,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const p=d[v],c=o[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,P=_;M<P;M+=3){const A=M,T=M+1,b=M+2;r=Fa(this,c,e,i,u,f,h,A,T,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,c=x;p<c;p+=3){const g=p,_=p+1,M=p+2;r=Fa(this,o,e,i,u,f,h,g,_,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function HM(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ji,a),l===null)return null;Na.copy(a),Na.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Na);return u<n.near||u>n.far?null:{distance:u,point:Na.clone(),object:t}}function Fa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,jr),t.getVertexPosition(l,Kr),t.getVertexPosition(u,Zr);const f=HM(t,e,n,i,jr,Kr,Zr,Ia);if(f){r&&(ba.fromBufferAttribute(r,a),Da.fromBufferAttribute(r,l),Ua.fromBufferAttribute(r,u),f.uv=Qn.getInterpolation(Ia,jr,Kr,Zr,ba,Da,Ua,new We)),s&&(ba.fromBufferAttribute(s,a),Da.fromBufferAttribute(s,l),Ua.fromBufferAttribute(s,u),f.uv1=Qn.getInterpolation(Ia,jr,Kr,Zr,ba,Da,Ua,new We)),o&&(sm.fromBufferAttribute(o,a),om.fromBufferAttribute(o,l),am.fromBufferAttribute(o,u),f.normal=Qn.getInterpolation(Ia,jr,Kr,Zr,sm,om,am,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new k,materialIndex:0};Qn.getNormal(jr,Kr,Zr,h.normal),f.face=h}return f}class Vs extends Nr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wr(u,3)),this.setAttribute("normal",new wr(f,3)),this.setAttribute("uv",new wr(h,2));function v(x,p,c,g,_,M,P,A,T,b,w){const S=M/T,L=P/b,V=M/2,B=P/2,Y=A/2,q=T+1,G=b+1;let j=0,D=0;const X=new k;for(let K=0;K<G;K++){const se=K*L-B;for(let xe=0;xe<q;xe++){const ze=xe*S-V;X[x]=ze*g,X[p]=se*_,X[c]=Y,u.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[c]=A>0?1:-1,f.push(X.x,X.y,X.z),h.push(xe/T),h.push(1-K/b),j+=1}}for(let K=0;K<b;K++)for(let se=0;se<T;se++){const xe=d+se+q*K,ze=d+se+q*(K+1),H=d+(se+1)+q*(K+1),te=d+(se+1)+q*K;l.push(xe,ze,te),l.push(ze,H,te),D+=6}a.addGroup(m,D,w),m+=D,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Fs(t[n]);for(const r in i)e[r]=i[r]}return e}function VM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Lv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const GM={clone:Fs,merge:Xt};var WM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WM,this.fragmentShader=XM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=VM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class bv extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new k,lm=new We,um=new We;class wn extends bv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=td*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return td*2*Math.atan(Math.tan(Qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,n){return this.getViewBounds(e,lm,um),n.subVectors(um,lm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qr=-90,Jr=1;class $M extends gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(Qr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new wn(Qr,Jr,e,n);s.layers=this.layers,this.add(s);const o=new wn(Qr,Jr,e,n);o.layers=this.layers,this.add(o);const a=new wn(Qr,Jr,e,n);a.layers=this.layers,this.add(a);const l=new wn(Qr,Jr,e,n);l.layers=this.layers,this.add(l);const u=new wn(Qr,Jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Dv extends on{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ds,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class YM extends Dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vs(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:ji});s.uniforms.tEquirect.value=n;const o=new Jn(r,s),a=n.minFilter;return n.minFilter===Mr&&(n.minFilter=zn),new $M(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const _c=new k,qM=new k,jM=new Ue;class pr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_c.subVectors(i,n).cross(qM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(_c),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||jM.getNormalMatrix(e),r=this.coplanarPoint(_c).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new hh,Oa=new k;class Uv{constructor(e=new pr,n=new pr,i=new pr,r=new pr,s=new pr,o=new pr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],v=r[9],x=r[10],p=r[11],c=r[12],g=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,d-u,p-m,M-c).normalize(),i[1].setComponents(l+s,d+u,p+m,M+c).normalize(),i[2].setComponents(l+o,d+f,p+v,M+g).normalize(),i[3].setComponents(l-o,d-f,p-v,M-g).normalize(),i[4].setComponents(l-a,d-h,p-x,M-_).normalize(),n===_i)i[5].setComponents(l+a,d+h,p+x,M+_).normalize();else if(n===kl)i[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Oa.x=r.normal.x>0?e.max.x:e.min.x,Oa.y=r.normal.y>0?e.max.y:e.min.y,Oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Iv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function KM(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,f),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const f=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(u,a),h.count===-1&&d.length===0&&t.bufferSubData(u,0,f),d.length!==0){for(let m=0,v=d.length;m<v;m++){const x=d[m];t.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(u,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class _u extends Nr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,m=[],v=[],x=[],p=[];for(let c=0;c<f;c++){const g=c*d-o;for(let _=0;_<u;_++){const M=_*h-s;v.push(M,-g,0),x.push(0,0,1),p.push(_/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,M=g+u*(c+1),P=g+1+u*(c+1),A=g+1+u*c;m.push(_,M,A),m.push(M,P,A)}this.setIndex(m),this.setAttribute("position",new wr(v,3)),this.setAttribute("normal",new wr(x,3)),this.setAttribute("uv",new wr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,SE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ME=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CE="gl_FragColor = linearToOutputTexel( gl_FragColor );",RE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$E=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,o1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,h1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,A1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,U1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,I1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,F1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,k1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,j1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_T=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:ZM,alphahash_pars_fragment:QM,alphamap_fragment:JM,alphamap_pars_fragment:eE,alphatest_fragment:tE,alphatest_pars_fragment:nE,aomap_fragment:iE,aomap_pars_fragment:rE,batching_pars_vertex:sE,batching_vertex:oE,begin_vertex:aE,beginnormal_vertex:lE,bsdfs:uE,iridescence_fragment:cE,bumpmap_pars_fragment:fE,clipping_planes_fragment:dE,clipping_planes_pars_fragment:hE,clipping_planes_pars_vertex:pE,clipping_planes_vertex:mE,color_fragment:gE,color_pars_fragment:_E,color_pars_vertex:vE,color_vertex:xE,common:SE,cube_uv_reflection_fragment:yE,defaultnormal_vertex:ME,displacementmap_pars_vertex:EE,displacementmap_vertex:TE,emissivemap_fragment:wE,emissivemap_pars_fragment:AE,colorspace_fragment:CE,colorspace_pars_fragment:RE,envmap_fragment:PE,envmap_common_pars_fragment:LE,envmap_pars_fragment:bE,envmap_pars_vertex:DE,envmap_physical_pars_fragment:GE,envmap_vertex:UE,fog_vertex:IE,fog_pars_vertex:NE,fog_fragment:FE,fog_pars_fragment:OE,gradientmap_pars_fragment:kE,lightmap_pars_fragment:zE,lights_lambert_fragment:BE,lights_lambert_pars_fragment:HE,lights_pars_begin:VE,lights_toon_fragment:WE,lights_toon_pars_fragment:XE,lights_phong_fragment:$E,lights_phong_pars_fragment:YE,lights_physical_fragment:qE,lights_physical_pars_fragment:jE,lights_fragment_begin:KE,lights_fragment_maps:ZE,lights_fragment_end:QE,logdepthbuf_fragment:JE,logdepthbuf_pars_fragment:e1,logdepthbuf_pars_vertex:t1,logdepthbuf_vertex:n1,map_fragment:i1,map_pars_fragment:r1,map_particle_fragment:s1,map_particle_pars_fragment:o1,metalnessmap_fragment:a1,metalnessmap_pars_fragment:l1,morphinstance_vertex:u1,morphcolor_vertex:c1,morphnormal_vertex:f1,morphtarget_pars_vertex:d1,morphtarget_vertex:h1,normal_fragment_begin:p1,normal_fragment_maps:m1,normal_pars_fragment:g1,normal_pars_vertex:_1,normal_vertex:v1,normalmap_pars_fragment:x1,clearcoat_normal_fragment_begin:S1,clearcoat_normal_fragment_maps:y1,clearcoat_pars_fragment:M1,iridescence_pars_fragment:E1,opaque_fragment:T1,packing:w1,premultiplied_alpha_fragment:A1,project_vertex:C1,dithering_fragment:R1,dithering_pars_fragment:P1,roughnessmap_fragment:L1,roughnessmap_pars_fragment:b1,shadowmap_pars_fragment:D1,shadowmap_pars_vertex:U1,shadowmap_vertex:I1,shadowmask_pars_fragment:N1,skinbase_vertex:F1,skinning_pars_vertex:O1,skinning_vertex:k1,skinnormal_vertex:z1,specularmap_fragment:B1,specularmap_pars_fragment:H1,tonemapping_fragment:V1,tonemapping_pars_fragment:G1,transmission_fragment:W1,transmission_pars_fragment:X1,uv_pars_fragment:$1,uv_pars_vertex:Y1,uv_vertex:q1,worldpos_vertex:j1,background_vert:K1,background_frag:Z1,backgroundCube_vert:Q1,backgroundCube_frag:J1,cube_vert:eT,cube_frag:tT,depth_vert:nT,depth_frag:iT,distanceRGBA_vert:rT,distanceRGBA_frag:sT,equirect_vert:oT,equirect_frag:aT,linedashed_vert:lT,linedashed_frag:uT,meshbasic_vert:cT,meshbasic_frag:fT,meshlambert_vert:dT,meshlambert_frag:hT,meshmatcap_vert:pT,meshmatcap_frag:mT,meshnormal_vert:gT,meshnormal_frag:_T,meshphong_vert:vT,meshphong_frag:xT,meshphysical_vert:ST,meshphysical_frag:yT,meshtoon_vert:MT,meshtoon_frag:ET,points_vert:TT,points_frag:wT,shadow_vert:AT,shadow_frag:CT,sprite_vert:RT,sprite_frag:PT},ae={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Kn={basic:{uniforms:Xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new et(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Xt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Xt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new et(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Xt([ae.points,ae.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Xt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Xt([ae.common,ae.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Xt([ae.sprite,ae.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Xt([ae.common,ae.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Xt([ae.lights,ae.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Kn.physical={uniforms:Xt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const ka={r:0,b:0,g:0},cr=new Ti,LT=new Tt;function bT(t,e,n,i,r,s,o){const a=new et(0);let l=s===!0?0:1,u,f,h=null,d=0,m=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function x(g){let _=!1;const M=v(g);M===null?c(a,l):M&&M.isColor&&(c(M,1),_=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(g,_){const M=v(_);M&&(M.isCubeTexture||M.mapping===mu)?(f===void 0&&(f=new Jn(new Vs(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Fs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),cr.copy(_.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(LT.makeRotationFromEuler(cr)),f.material.toneMapped=je.getTransfer(M.colorSpace)!==it,(h!==M||d!==M.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,m=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new Jn(new _u(2,2),new er({name:"BackgroundMaterial",uniforms:Fs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=je.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,m=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function c(g,_){g.getRGB(ka,Lv(t)),i.buffers.color.setClear(ka.r,ka.g,ka.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,c(a,l)},render:x,addToRenderList:p}}function DT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,L,V,B,Y){let q=!1;const G=h(B,V,L);s!==G&&(s=G,u(s.object)),q=m(S,B,V,Y),q&&v(S,B,V,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(S,L,V,B),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function h(S,L,V){const B=V.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let q=Y[L.id];q===void 0&&(q={},Y[L.id]=q);let G=q[B];return G===void 0&&(G=d(l()),q[B]=G),G}function d(S){const L=[],V=[],B=[];for(let Y=0;Y<n;Y++)L[Y]=0,V[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:B,object:S,attributes:{},index:null}}function m(S,L,V,B){const Y=s.attributes,q=L.attributes;let G=0;const j=V.getAttributes();for(const D in j)if(j[D].location>=0){const K=Y[D];let se=q[D];if(se===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function v(S,L,V,B){const Y={},q=L.attributes;let G=0;const j=V.getAttributes();for(const D in j)if(j[D].location>=0){let K=q[D];K===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),Y[D]=se,G++}s.attributes=Y,s.attributesNum=G,s.index=B}function x(){const S=s.newAttributes;for(let L=0,V=S.length;L<V;L++)S[L]=0}function p(S){c(S,0)}function c(S,L){const V=s.newAttributes,B=s.enabledAttributes,Y=s.attributeDivisors;V[S]=1,B[S]===0&&(t.enableVertexAttribArray(S),B[S]=1),Y[S]!==L&&(t.vertexAttribDivisor(S,L),Y[S]=L)}function g(){const S=s.newAttributes,L=s.enabledAttributes;for(let V=0,B=L.length;V<B;V++)L[V]!==S[V]&&(t.disableVertexAttribArray(V),L[V]=0)}function _(S,L,V,B,Y,q,G){G===!0?t.vertexAttribIPointer(S,L,V,Y,q):t.vertexAttribPointer(S,L,V,B,Y,q)}function M(S,L,V,B){x();const Y=B.attributes,q=V.getAttributes(),G=L.defaultAttributeValues;for(const j in q){const D=q[j];if(D.location>=0){let X=Y[j];if(X===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){const K=X.normalized,se=X.itemSize,xe=e.get(X);if(xe===void 0)continue;const ze=xe.buffer,H=xe.type,te=xe.bytesPerElement,ue=H===t.INT||H===t.UNSIGNED_INT||X.gpuType===oh;if(X.isInterleavedBufferAttribute){const ce=X.data,Pe=ce.stride,Ie=X.offset;if(ce.isInstancedInterleavedBuffer){for(let Oe=0;Oe<D.locationSize;Oe++)c(D.location+Oe,ce.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Oe=0;Oe<D.locationSize;Oe++)p(D.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Oe=0;Oe<D.locationSize;Oe++)_(D.location+Oe,se/D.locationSize,H,K,Pe*te,(Ie+se/D.locationSize*Oe)*te,ue)}else{if(X.isInstancedBufferAttribute){for(let ce=0;ce<D.locationSize;ce++)c(D.location+ce,X.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ce=0;ce<D.locationSize;ce++)p(D.location+ce);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ce=0;ce<D.locationSize;ce++)_(D.location+ce,se/D.locationSize,H,K,se*te,se/D.locationSize*ce*te,ue)}}else if(G!==void 0){const K=G[j];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(D.location,K);break;case 3:t.vertexAttrib3fv(D.location,K);break;case 4:t.vertexAttrib4fv(D.location,K);break;default:t.vertexAttrib1fv(D.location,K)}}}}g()}function P(){b();for(const S in i){const L=i[S];for(const V in L){const B=L[V];for(const Y in B)f(B[Y].object),delete B[Y];delete L[V]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const V in L){const B=L[V];for(const Y in B)f(B[Y].object),delete B[Y];delete L[V]}delete i[S.id]}function T(S){for(const L in i){const V=i[L];if(V[S.id]===void 0)continue;const B=V[S.id];for(const Y in B)f(B[Y].object),delete B[Y];delete V[S.id]}}function b(){w(),o=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:g}}function UT(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,h){h!==0&&(t.drawArraysInstanced(i,u,f,h),n.update(f,i,h))}function a(u,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,h);let m=0;for(let v=0;v<h;v++)m+=f[v];n.update(m,i,1)}function l(u,f,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<u.length;v++)o(u[v],f[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,f,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=f[x];for(let x=0;x<d.length;x++)n.update(v,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function IT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Bn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ei&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gi&&!T)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),c=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:c,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:M,maxSamples:P}}function NT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new pr,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const v=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,c=t.get(h);if(!r||v===null||v.length===0||s&&!p)s?f(null):u();else{const g=s?0:i,_=g*4;let M=c.clippingState||null;l.value=M,M=f(v,d,_,m);for(let P=0;P!==_;++P)M[P]=n[P];c.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,v){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const c=m+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<c)&&(p=new Float32Array(c));for(let _=0,M=m;_!==x;++_,M+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function FT(t){let e=new WeakMap;function n(o,a){return a===wf?o.mapping=Ds:a===Af&&(o.mapping=Us),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===wf||a===Af)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new YM(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class OT extends bv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const hs=4,cm=[.125,.215,.35,.446,.526,.582],_r=20,vc=new OT,fm=new et;let xc=null,Sc=0,yc=0,Mc=!1;const mr=(1+Math.sqrt(5))/2,es=1/mr,dm=[new k(-mr,es,0),new k(mr,es,0),new k(-es,0,mr),new k(es,0,mr),new k(0,mr,-es),new k(0,mr,es),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){xc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xc,Sc,yc),this._renderer.xr.enabled=Mc,e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:qo,format:Bn,colorSpace:rr,depthBuffer:!1},r=pm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kT(s)),this._blurMaterial=zT(s,e,n)}return r}_compileMaterial(e){const n=new Jn(this._lodPlanes[0],e);this._renderer.compile(n,vc)}_sceneToCubeUV(e,n,i,r){const a=new wn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(fm),f.toneMapping=Ki,f.autoClear=!1;const m=new Cv({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new Jn(new Vs,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(fm),x=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;za(r,g*_,c>2?_:0,_,_),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ds||e.mapping===Us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;za(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,vc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=dm[(r-s-1)%dm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Jn(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*_r-1),x=s/v,p=isFinite(s)?1+Math.floor(f*x):_r;p>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_r}`);const c=[];let g=0;for(let T=0;T<_r;++T){const b=T/x,w=Math.exp(-b*b/2);c.push(w),T===0?g+=w:T<p&&(g+=2*w)}for(let T=0;T<c.length;T++)c[T]=c[T]/g;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;const M=this._sizeLods[r],P=3*M*(r>_-hs?r-_+hs:0),A=4*(this._cubeSize-M);za(n,P,A,3*M,2*M),l.setRenderTarget(n),l.render(h,vc)}}function kT(t){const e=[],n=[],i=[];let r=t;const s=t-hs+1+cm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-hs?l=cm[o-t+hs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,v=6,x=3,p=2,c=1,g=new Float32Array(x*v*m),_=new Float32Array(p*v*m),M=new Float32Array(c*v*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,b=A>2?0:-1,w=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];g.set(w,x*v*A),_.set(d,p*v*A);const S=[A,A,A,A,A,A];M.set(S,c*v*A)}const P=new Nr;P.setAttribute("position",new ii(g,x)),P.setAttribute("uv",new ii(_,p)),P.setAttribute("faceIndex",new ii(M,c)),e.push(P),r>hs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function pm(t,e,n){const i=new Dr(t,e,n);return i.texture.mapping=mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function za(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function zT(t,e,n){const i=new Float32Array(_r),r=new k(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function mm(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function gm(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===wf||l===Af,f=l===Ds||l===Us;if(u||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new hm(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return u&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new hm(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function HT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&So("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function VT(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let p=0,c=x.length;p<c;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const x=m[v];for(let p=0,c=x.length;p<c;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,v=h.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let _=0,M=g.length;_<M;_+=3){const P=g[_+0],A=g[_+1],T=g[_+2];d.push(P,A,A,T,T,P)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,M=g.length/3-1;_<M;_+=3){const P=_+0,A=_+1,T=_+2;d.push(P,A,A,T,T,P)}}else return;const p=new(Mv(d)?Pv:Rv)(d,1);p.version=x;const c=s.get(h);c&&e.remove(c),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function GT(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*o),n.update(m,i,1)}function u(d,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,d*o,v),n.update(m,i,v))}function f(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,v);let p=0;for(let c=0;c<v;c++)p+=m[c];n.update(p,i,1)}function h(d,m,v,x){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<d.length;c++)u(d[c]/o,m[c],x[c]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,x,0,v);let c=0;for(let g=0;g<v;g++)c+=m[g];for(let g=0;g<x.length;g++)n.update(c,i,x[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function WT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function XT(t,e,n){const i=new WeakMap,r=new Pt;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),p===!0&&(M=3);let P=a.attributes.position.count*M,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*A*4*h),b=new Tv(T,P,A,h);b.type=gi,b.needsUpdate=!0;const w=M*4;for(let L=0;L<h;L++){const V=c[L],B=g[L],Y=_[L],q=P*A*4*L;for(let G=0;G<V.count;G++){const j=G*w;v===!0&&(r.fromBufferAttribute(V,G),T[q+j+0]=r.x,T[q+j+1]=r.y,T[q+j+2]=r.z,T[q+j+3]=0),x===!0&&(r.fromBufferAttribute(B,G),T[q+j+4]=r.x,T[q+j+5]=r.y,T[q+j+6]=r.z,T[q+j+7]=0),p===!0&&(r.fromBufferAttribute(Y,G),T[q+j+8]=r.x,T[q+j+9]=r.y,T[q+j+10]=r.z,T[q+j+11]=Y.itemSize===4?r.w:1)}}d={count:h,texture:b,size:new We(P,A)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let p=0;p<u.length;p++)v+=u[p];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function $T(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Nv extends on{constructor(e,n,i,r,s,o,a,l,u,f=Ms){if(f!==Ms&&f!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ms&&(i=br),i===void 0&&f===Ns&&(i=Is),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Fv=new on,_m=new Nv(1,1),Ov=new Tv,kv=new LM,zv=new Dv,vm=[],xm=[],Sm=new Float32Array(16),ym=new Float32Array(9),Mm=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=vm[r];if(s===void 0&&(s=new Float32Array(r),vm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vu(t,e){let n=xm[e];n===void 0&&(n=new Int32Array(e),xm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function YT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function ZT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Mm.set(i),t.uniformMatrix2fv(this.addr,!1,Mm),At(n,i)}}function QT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;ym.set(i),t.uniformMatrix3fv(this.addr,!1,ym),At(n,i)}}function JT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Sm.set(i),t.uniformMatrix4fv(this.addr,!1,Sm),At(n,i)}}function ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(_m.compareFunction=yv,s=_m):s=Fv,n.setTexture2D(e||s,r)}function uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||kv,r)}function cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zv,r)}function fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ov,r)}function dw(t){switch(t){case 5126:return YT;case 35664:return qT;case 35665:return jT;case 35666:return KT;case 35674:return ZT;case 35675:return QT;case 35676:return JT;case 5124:case 35670:return ew;case 35667:case 35671:return tw;case 35668:case 35672:return nw;case 35669:case 35673:return iw;case 5125:return rw;case 36294:return sw;case 36295:return ow;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return lw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return fw}}function hw(t,e){t.uniform1fv(this.addr,e)}function pw(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function mw(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function gw(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function _w(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vw(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xw(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Sw(t,e){t.uniform1iv(this.addr,e)}function yw(t,e){t.uniform2iv(this.addr,e)}function Mw(t,e){t.uniform3iv(this.addr,e)}function Ew(t,e){t.uniform4iv(this.addr,e)}function Tw(t,e){t.uniform1uiv(this.addr,e)}function ww(t,e){t.uniform2uiv(this.addr,e)}function Aw(t,e){t.uniform3uiv(this.addr,e)}function Cw(t,e){t.uniform4uiv(this.addr,e)}function Rw(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Fv,s[o])}function Pw(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||kv,s[o])}function Lw(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||zv,s[o])}function bw(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ov,s[o])}function Dw(t){switch(t){case 5126:return hw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return _w;case 35675:return vw;case 35676:return xw;case 5124:case 35670:return Sw;case 35667:case 35671:return yw;case 35668:case 35672:return Mw;case 35669:case 35673:return Ew;case 5125:return Tw;case 36294:return ww;case 36295:return Aw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return Lw;case 36289:case 36303:case 36311:case 36292:return bw}}class Uw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dw(n.type)}}class Iw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Dw(n.type)}}class Nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function Em(t,e){t.seq.push(e),t.map[e.id]=e}function Fw(t,e,n){const i=t.name,r=i.length;for(Ec.lastIndex=0;;){const s=Ec.exec(i),o=Ec.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Em(n,u===void 0?new Uw(a,t,e):new Iw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Nw(a),Em(n,h)),n=h}}}class ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Fw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Tm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ow=37297;let kw=0;function zw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Bw(t){const e=je.getPrimaries(je.workingColorSpace),n=je.getPrimaries(t);let i;switch(e===n?i="":e===Ol&&n===Fl?i="LinearDisplayP3ToLinearSRGB":e===Fl&&n===Ol&&(i="LinearSRGBToLinearDisplayP3"),t){case rr:case gu:return[i,"LinearTransferOETF"];case Yn:case dh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function wm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+zw(t.getShaderSource(e),o)}else return r}function Hw(t,e){const n=Bw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Vw(t,e){let n;switch(e){case rM:n="Linear";break;case sM:n="Reinhard";break;case oM:n="OptimizedCineon";break;case aM:n="ACESFilmic";break;case uM:n="AgX";break;case cM:n="Neutral";break;case lM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ba=new k;function Gw(){je.getLuminanceCoefficients(Ba);const t=Ba.x.toFixed(4),e=Ba.y.toFixed(4),n=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ww(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function Xw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $w(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function uo(t){return t!==""}function Am(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(t){return t.replace(Yw,jw)}const qw=new Map;function jw(t,e){let n=De[e];if(n===void 0){const i=qw.get(e);if(i!==void 0)n=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nd(n)}const Kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(t){return t.replace(Kw,Zw)}function Zw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===av?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ly?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Jw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ds:case Us:e="ENVMAP_TYPE_CUBE";break;case mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function tA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case lv:e="ENVMAP_BLENDING_MULTIPLY";break;case nM:e="ENVMAP_BLENDING_MIX";break;case iM:e="ENVMAP_BLENDING_ADD";break}return e}function nA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Qw(n),u=Jw(n),f=eA(n),h=tA(n),d=nA(n),m=Ww(n),v=Xw(s),x=r.createProgram();let p,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(uo).join(`
`),p.length>0&&(p+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(uo).join(`
`),c.length>0&&(c+=`
`)):(p=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),c=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?De.tonemapping_pars_fragment:"",n.toneMapping!==Ki?Vw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Hw("linearToOutputTexel",n.outputColorSpace),Gw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(uo).join(`
`)),o=nd(o),o=Am(o,n),o=Cm(o,n),a=nd(a),a=Am(a,n),a=Cm(a,n),o=Rm(o),a=Rm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===Wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+p+o,M=g+c+a,P=Tm(r,r.VERTEX_SHADER,_),A=Tm(r,r.FRAGMENT_SHADER,M);r.attachShader(x,P),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(L){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(P).trim(),Y=r.getShaderInfoLog(A).trim();let q=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,A);else{const j=wm(r,P,"vertex"),D=wm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+j+`
`+D)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||Y==="")&&(G=!1);G&&(L.diagnostics={runnable:q,programLog:V,vertexShader:{log:B,prefix:p},fragmentShader:{log:Y,prefix:c}})}r.deleteShader(P),r.deleteShader(A),b=new ll(r,x),w=$w(r,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,Ow)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}let rA=0;class sA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new oA(e),n.set(e,i)),i}}class oA{constructor(e){this.id=rA++,this.code=e,this.usedTimes=0}}function aA(t,e,n,i,r,s,o){const a=new wv,l=new sA,u=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return u.add(w),w===0?"uv":`uv${w}`}function p(w,S,L,V,B){const Y=V.fog,q=B.geometry,G=w.isMeshStandardMaterial?V.environment:null,j=(w.isMeshStandardMaterial?n:e).get(w.envMap||G),D=j&&j.mapping===mu?j.image.height:null,X=v[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const K=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=K!==void 0?K.length:0;let xe=0;q.morphAttributes.position!==void 0&&(xe=1),q.morphAttributes.normal!==void 0&&(xe=2),q.morphAttributes.color!==void 0&&(xe=3);let ze,H,te,ue;if(X){const Xe=Kn[X];ze=Xe.vertexShader,H=Xe.fragmentShader}else ze=w.vertexShader,H=w.fragmentShader,l.update(w),te=l.getVertexShaderID(w),ue=l.getFragmentShaderID(w);const ce=t.getRenderTarget(),Pe=B.isInstancedMesh===!0,Ie=B.isBatchedMesh===!0,Oe=!!w.map,ct=!!w.matcap,R=!!j,mt=!!w.aoMap,Ke=!!w.lightMap,Je=!!w.bumpMap,Se=!!w.normalMap,gt=!!w.displacementMap,Ce=!!w.emissiveMap,Le=!!w.metalnessMap,C=!!w.roughnessMap,y=w.anisotropy>0,z=w.clearcoat>0,Q=w.dispersion>0,ee=w.iridescence>0,Z=w.sheen>0,ye=w.transmission>0,le=y&&!!w.anisotropyMap,pe=z&&!!w.clearcoatMap,be=z&&!!w.clearcoatNormalMap,ne=z&&!!w.clearcoatRoughnessMap,he=ee&&!!w.iridescenceMap,ke=ee&&!!w.iridescenceThicknessMap,Ae=Z&&!!w.sheenColorMap,me=Z&&!!w.sheenRoughnessMap,Re=!!w.specularMap,Ne=!!w.specularColorMap,ot=!!w.specularIntensityMap,U=ye&&!!w.transmissionMap,ie=ye&&!!w.thicknessMap,W=!!w.gradientMap,$=!!w.alphaMap,oe=w.alphaTest>0,Ee=!!w.alphaHash,Be=!!w.extensions;let _t=Ki;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Dt={shaderID:X,shaderType:w.type,shaderName:w.name,vertexShader:ze,fragmentShader:H,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ie,batchingColor:Ie&&B._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&B.instanceColor!==null,instancingMorph:Pe&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:rr,alphaToCoverage:!!w.alphaToCoverage,map:Oe,matcap:ct,envMap:R,envMapMode:R&&j.mapping,envMapCubeUVHeight:D,aoMap:mt,lightMap:Ke,bumpMap:Je,normalMap:Se,displacementMap:d&&gt,emissiveMap:Ce,normalMapObjectSpace:Se&&w.normalMapType===pM,normalMapTangentSpace:Se&&w.normalMapType===Sv,metalnessMap:Le,roughnessMap:C,anisotropy:y,anisotropyMap:le,clearcoat:z,clearcoatMap:pe,clearcoatNormalMap:be,clearcoatRoughnessMap:ne,dispersion:Q,iridescence:ee,iridescenceMap:he,iridescenceThicknessMap:ke,sheen:Z,sheenColorMap:Ae,sheenRoughnessMap:me,specularMap:Re,specularColorMap:Ne,specularIntensityMap:ot,transmission:ye,transmissionMap:U,thicknessMap:ie,gradientMap:W,opaque:w.transparent===!1&&w.blending===ys&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:oe,alphaHash:Ee,combine:w.combine,mapUv:Oe&&x(w.map.channel),aoMapUv:mt&&x(w.aoMap.channel),lightMapUv:Ke&&x(w.lightMap.channel),bumpMapUv:Je&&x(w.bumpMap.channel),normalMapUv:Se&&x(w.normalMap.channel),displacementMapUv:gt&&x(w.displacementMap.channel),emissiveMapUv:Ce&&x(w.emissiveMap.channel),metalnessMapUv:Le&&x(w.metalnessMap.channel),roughnessMapUv:C&&x(w.roughnessMap.channel),anisotropyMapUv:le&&x(w.anisotropyMap.channel),clearcoatMapUv:pe&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:be&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(w.sheenRoughnessMap.channel),specularMapUv:Re&&x(w.specularMap.channel),specularColorMapUv:Ne&&x(w.specularColorMap.channel),specularIntensityMapUv:ot&&x(w.specularIntensityMap.channel),transmissionMapUv:U&&x(w.transmissionMap.channel),thicknessMapUv:ie&&x(w.thicknessMap.channel),alphaMapUv:$&&x(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Se||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(Oe||$),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:Oe&&w.map.isVideoTexture===!0&&je.getTransfer(w.map.colorSpace)===it,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===hi,flipSided:w.side===sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Dt.vertexUv1s=u.has(1),Dt.vertexUv2s=u.has(2),Dt.vertexUv3s=u.has(3),u.clear(),Dt}function c(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(g(S,w),_(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function g(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),w.push(a.mask)}function M(w){const S=v[w.type];let L;if(S){const V=Kn[S];L=GM.clone(V.uniforms)}else L=w.uniforms;return L}function P(w,S){let L;for(let V=0,B=f.length;V<B;V++){const Y=f[V];if(Y.cacheKey===S){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new iA(t,S,w,s),f.push(L)),L}function A(w){if(--w.usedTimes===0){const S=f.indexOf(w);f[S]=f[f.length-1],f.pop(),w.destroy()}}function T(w){l.remove(w)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:M,acquireProgram:P,releaseProgram:A,releaseShaderCache:T,programs:f,dispose:b}}function lA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function uA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Lm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,v,x,p){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:m,groupOrder:v,renderOrder:h.renderOrder,z:x,group:p},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=m,c.groupOrder=v,c.renderOrder=h.renderOrder,c.z=x,c.group=p),e++,c}function a(h,d,m,v,x,p){const c=o(h,d,m,v,x,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(h,d,m,v,x,p){const c=o(h,d,m,v,x,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||uA),i.length>1&&i.sort(d||Lm),r.length>1&&r.sort(d||Lm)}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function cA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new bm,t.set(i,[o])):r>=s.length?(o=new bm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function fA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new et};break;case"SpotLight":n={position:new k,direction:new k,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function dA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let hA=0;function pA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mA(t){const e=new fA,n=dA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,s=new Tt,o=new Tt;function a(u){let f=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,v=0,x=0,p=0,c=0,g=0,_=0,M=0,P=0,A=0,T=0;u.sort(pA);for(let w=0,S=u.length;w<S;w++){const L=u[w],V=L.color,B=L.intensity,Y=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=V.r*B,h+=V.g*B,d+=V.b*B;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],B);T++}else if(L.isDirectionalLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,D=n.get(L);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=L.shadow.matrix,g++}i.directional[m]=G,m++}else if(L.isSpotLight){const G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(V).multiplyScalar(B),G.distance=Y,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[x]=G;const j=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,j.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[x]=j.matrix,L.castShadow){const D=n.get(L);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=q,M++}x++}else if(L.isRectAreaLight){const G=e.get(L);G.color.copy(V).multiplyScalar(B),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=G,p++}else if(L.isPointLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const j=L.shadow,D=n.get(L);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,D.shadowCameraNear=j.camera.near,D.shadowCameraFar=j.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=q,i.pointShadowMatrix[v]=L.shadow.matrix,_++}i.point[v]=G,v++}else if(L.isHemisphereLight){const G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(B),G.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[c]=G,c++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==m||b.pointLength!==v||b.spotLength!==x||b.rectAreaLength!==p||b.hemiLength!==c||b.numDirectionalShadows!==g||b.numPointShadows!==_||b.numSpotShadows!==M||b.numSpotMaps!==P||b.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=v,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,b.directionalLength=m,b.pointLength=v,b.spotLength=x,b.rectAreaLength=p,b.hemiLength=c,b.numDirectionalShadows=g,b.numPointShadows=_,b.numSpotShadows=M,b.numSpotMaps=P,b.numLightProbes=T,i.version=hA++)}function l(u,f){let h=0,d=0,m=0,v=0,x=0;const p=f.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const _=u[c];if(_.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(_.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Dm(t){const e=new mA(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function gA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Dm(t),e.set(r,[a])):s>=o.length?(a=new Dm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class _A extends Qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vA extends Qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yA(t,e,n){let i=new Uv;const r=new We,s=new We,o=new Pt,a=new _A({depthPacking:hM}),l=new vA,u={},f=n.maxTextureSize,h={[Ji]:sn,[sn]:Ji,[hi]:hi},d=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:xA,fragmentShader:SA}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Nr;v.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Jn(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=av;let c=this.type;this.render=function(A,T,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),V=t.state;V.setBlending(ji),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=c!==ci&&this.type===ci,Y=c===ci&&this.type!==ci;for(let q=0,G=A.length;q<G;q++){const j=A[q],D=j.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const X=D.getFrameExtents();if(r.multiply(X),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/X.x),r.x=s.x*X.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/X.y),r.y=s.y*X.y,D.mapSize.y=s.y)),D.map===null||B===!0||Y===!0){const se=this.type!==ci?{minFilter:Cn,magFilter:Cn}:{};D.map!==null&&D.map.dispose(),D.map=new Dr(r.x,r.y,se),D.map.texture.name=j.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const K=D.getViewportCount();for(let se=0;se<K;se++){const xe=D.getViewport(se);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),V.viewport(o),D.updateMatrices(j,se),i=D.getFrustum(),M(T,b,D.camera,j,this.type)}D.isPointLightShadow!==!0&&this.type===ci&&g(D,b),D.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(w,S,L)};function g(A,T){const b=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,b,d,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,b,m,x,null)}function _(A,T,b,w){let S=null;const L=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=S.uuid,B=T.uuid;let Y=u[V];Y===void 0&&(Y={},u[V]=Y);let q=Y[B];q===void 0&&(q=S.clone(),Y[B]=q,T.addEventListener("dispose",P)),S=q}if(S.visible=T.visible,S.wireframe=T.wireframe,w===ci?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=t.properties.get(S);V.light=b}return S}function M(A,T,b,w,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ci)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const B=e.update(A),Y=A.material;if(Array.isArray(Y)){const q=B.groups;for(let G=0,j=q.length;G<j;G++){const D=q[G],X=Y[D.materialIndex];if(X&&X.visible){const K=_(A,X,w,S);A.onBeforeShadow(t,A,T,b,B,K,D),t.renderBufferDirect(b,null,B,K,A,D),A.onAfterShadow(t,A,T,b,B,K,D)}}}else if(Y.visible){const q=_(A,Y,w,S);A.onBeforeShadow(t,A,T,b,B,q,null),t.renderBufferDirect(b,null,B,q,A,null),A.onAfterShadow(t,A,T,b,B,q,null)}}const V=A.children;for(let B=0,Y=V.length;B<Y;B++)M(V[B],T,b,w,S)}function P(A){A.target.removeEventListener("dispose",P);for(const b in u){const w=u[b],S=A.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function MA(t){function e(){let U=!1;const ie=new Pt;let W=null;const $=new Pt(0,0,0,0);return{setMask:function(oe){W!==oe&&!U&&(t.colorMask(oe,oe,oe,oe),W=oe)},setLocked:function(oe){U=oe},setClear:function(oe,Ee,Be,_t,Dt){Dt===!0&&(oe*=_t,Ee*=_t,Be*=_t),ie.set(oe,Ee,Be,_t),$.equals(ie)===!1&&(t.clearColor(oe,Ee,Be,_t),$.copy(ie))},reset:function(){U=!1,W=null,$.set(-1,0,0,0)}}}function n(){let U=!1,ie=null,W=null,$=null;return{setTest:function(oe){oe?ue(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(oe){ie!==oe&&!U&&(t.depthMask(oe),ie=oe)},setFunc:function(oe){if(W!==oe){switch(oe){case jy:t.depthFunc(t.NEVER);break;case Ky:t.depthFunc(t.ALWAYS);break;case Zy:t.depthFunc(t.LESS);break;case Il:t.depthFunc(t.LEQUAL);break;case Qy:t.depthFunc(t.EQUAL);break;case Jy:t.depthFunc(t.GEQUAL);break;case eM:t.depthFunc(t.GREATER);break;case tM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}W=oe}},setLocked:function(oe){U=oe},setClear:function(oe){$!==oe&&(t.clearDepth(oe),$=oe)},reset:function(){U=!1,ie=null,W=null,$=null}}}function i(){let U=!1,ie=null,W=null,$=null,oe=null,Ee=null,Be=null,_t=null,Dt=null;return{setTest:function(Xe){U||(Xe?ue(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Xe){ie!==Xe&&!U&&(t.stencilMask(Xe),ie=Xe)},setFunc:function(Xe,ri,Wn){(W!==Xe||$!==ri||oe!==Wn)&&(t.stencilFunc(Xe,ri,Wn),W=Xe,$=ri,oe=Wn)},setOp:function(Xe,ri,Wn){(Ee!==Xe||Be!==ri||_t!==Wn)&&(t.stencilOp(Xe,ri,Wn),Ee=Xe,Be=ri,_t=Wn)},setLocked:function(Xe){U=Xe},setClear:function(Xe){Dt!==Xe&&(t.clearStencil(Xe),Dt=Xe)},reset:function(){U=!1,ie=null,W=null,$=null,oe=null,Ee=null,Be=null,_t=null,Dt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],m=null,v=!1,x=null,p=null,c=null,g=null,_=null,M=null,P=null,A=new et(0,0,0),T=0,b=!1,w=null,S=null,L=null,V=null,B=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=G>=2);let D=null,X={};const K=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),xe=new Pt().fromArray(K),ze=new Pt().fromArray(se);function H(U,ie,W,$){const oe=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(U,Ee),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<W;Be++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,$,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(ie+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return Ee}const te={};te[t.TEXTURE_2D]=H(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=H(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=H(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=H(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(Il),Je(!1),Se(kp),ue(t.CULL_FACE),mt(ji);function ue(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function ce(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function Pe(U,ie){return f[U]!==ie?(t.bindFramebuffer(U,ie),f[U]=ie,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ie),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ie(U,ie){let W=d,$=!1;if(U){W=h.get(ie),W===void 0&&(W=[],h.set(ie,W));const oe=U.textures;if(W.length!==oe.length||W[0]!==t.COLOR_ATTACHMENT0){for(let Ee=0,Be=oe.length;Ee<Be;Ee++)W[Ee]=t.COLOR_ATTACHMENT0+Ee;W.length=oe.length,$=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,$=!0);$&&t.drawBuffers(W)}function Oe(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const ct={[gr]:t.FUNC_ADD,[Dy]:t.FUNC_SUBTRACT,[Uy]:t.FUNC_REVERSE_SUBTRACT};ct[Iy]=t.MIN,ct[Ny]=t.MAX;const R={[Fy]:t.ZERO,[Oy]:t.ONE,[ky]:t.SRC_COLOR,[Ef]:t.SRC_ALPHA,[Wy]:t.SRC_ALPHA_SATURATE,[Vy]:t.DST_COLOR,[By]:t.DST_ALPHA,[zy]:t.ONE_MINUS_SRC_COLOR,[Tf]:t.ONE_MINUS_SRC_ALPHA,[Gy]:t.ONE_MINUS_DST_COLOR,[Hy]:t.ONE_MINUS_DST_ALPHA,[Xy]:t.CONSTANT_COLOR,[$y]:t.ONE_MINUS_CONSTANT_COLOR,[Yy]:t.CONSTANT_ALPHA,[qy]:t.ONE_MINUS_CONSTANT_ALPHA};function mt(U,ie,W,$,oe,Ee,Be,_t,Dt,Xe){if(U===ji){v===!0&&(ce(t.BLEND),v=!1);return}if(v===!1&&(ue(t.BLEND),v=!0),U!==by){if(U!==x||Xe!==b){if((p!==gr||_!==gr)&&(t.blendEquation(t.FUNC_ADD),p=gr,_=gr),Xe)switch(U){case ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zp:t.blendFunc(t.ONE,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}c=null,g=null,M=null,P=null,A.set(0,0,0),T=0,x=U,b=Xe}return}oe=oe||ie,Ee=Ee||W,Be=Be||$,(ie!==p||oe!==_)&&(t.blendEquationSeparate(ct[ie],ct[oe]),p=ie,_=oe),(W!==c||$!==g||Ee!==M||Be!==P)&&(t.blendFuncSeparate(R[W],R[$],R[Ee],R[Be]),c=W,g=$,M=Ee,P=Be),(_t.equals(A)===!1||Dt!==T)&&(t.blendColor(_t.r,_t.g,_t.b,Dt),A.copy(_t),T=Dt),x=U,b=!1}function Ke(U,ie){U.side===hi?ce(t.CULL_FACE):ue(t.CULL_FACE);let W=U.side===sn;ie&&(W=!W),Je(W),U.blending===ys&&U.transparent===!1?mt(ji):mt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const $=U.stencilWrite;o.setTest($),$&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ce(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Je(U){w!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),w=U)}function Se(U){U!==Ry?(ue(t.CULL_FACE),U!==S&&(U===kp?t.cullFace(t.BACK):U===Py?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),S=U}function gt(U){U!==L&&(q&&t.lineWidth(U),L=U)}function Ce(U,ie,W){U?(ue(t.POLYGON_OFFSET_FILL),(V!==ie||B!==W)&&(t.polygonOffset(ie,W),V=ie,B=W)):ce(t.POLYGON_OFFSET_FILL)}function Le(U){U?ue(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function C(U){U===void 0&&(U=t.TEXTURE0+Y-1),D!==U&&(t.activeTexture(U),D=U)}function y(U,ie,W){W===void 0&&(D===null?W=t.TEXTURE0+Y-1:W=D);let $=X[W];$===void 0&&($={type:void 0,texture:void 0},X[W]=$),($.type!==U||$.texture!==ie)&&(D!==W&&(t.activeTexture(W),D=W),t.bindTexture(U,ie||te[U]),$.type=U,$.texture=ie)}function z(){const U=X[D];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(U){xe.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),xe.copy(U))}function me(U){ze.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),ze.copy(U))}function Re(U,ie){let W=l.get(ie);W===void 0&&(W=new WeakMap,l.set(ie,W));let $=W.get(U);$===void 0&&($=t.getUniformBlockIndex(ie,U.name),W.set(U,$))}function Ne(U,ie){const $=l.get(ie).get(U);a.get(ie)!==$&&(t.uniformBlockBinding(ie,$,U.__bindingPointIndex),a.set(ie,$))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,X={},f={},h=new WeakMap,d=[],m=null,v=!1,x=null,p=null,c=null,g=null,_=null,M=null,P=null,A=new et(0,0,0),T=0,b=!1,w=null,S=null,L=null,V=null,B=null,xe.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:ce,bindFramebuffer:Pe,drawBuffers:Ie,useProgram:Oe,setBlending:mt,setMaterial:Ke,setFlipSided:Je,setCullFace:Se,setLineWidth:gt,setPolygonOffset:Ce,setScissorTest:Le,activeTexture:C,bindTexture:y,unbindTexture:z,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:he,texImage3D:ke,updateUBOMapping:Re,uniformBlockBinding:Ne,texStorage2D:be,texStorage3D:ne,texSubImage2D:Z,texSubImage3D:ye,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:Ae,viewport:me,reset:ot}}function Um(t,e,n,i){const r=EA(i);switch(n){case hv:return t*e;case mv:return t*e;case gv:return t*e*2;case _v:return t*e/r.components*r.byteLength;case uh:return t*e/r.components*r.byteLength;case vv:return t*e*2/r.components*r.byteLength;case ch:return t*e*2/r.components*r.byteLength;case pv:return t*e*3/r.components*r.byteLength;case Bn:return t*e*4/r.components*r.byteLength;case fh:return t*e*4/r.components*r.byteLength;case il:case rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sl:case ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lf:case Df:return Math.max(t,16)*Math.max(e,8)/4;case Pf:case bf:return Math.max(t,8)*Math.max(e,8)/2;case Uf:case If:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case kf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case al:case Kf:case Zf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case xv:case Qf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Jf:case ed:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function EA(t){switch(t){case Ei:case cv:return{byteLength:1,components:1};case Ho:case fv:case qo:return{byteLength:2,components:1};case ah:case lh:return{byteLength:2,components:4};case br:case oh:case gi:return{byteLength:4,components:1};case dv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function TA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new We,f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,y){return m?new OffscreenCanvas(C,y):zl("canvas")}function x(C,y,z){let Q=1;const ee=Le(C);if((ee.width>z||ee.height>z)&&(Q=z/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(Q*ee.width),ye=Math.floor(Q*ee.height);h===void 0&&(h=v(Z,ye));const le=y?v(Z,ye):h;return le.width=Z,le.height=ye,le.getContext("2d").drawImage(C,0,0,Z,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+ye+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Cn&&C.minFilter!==zn}function c(C){t.generateMipmap(C)}function g(C,y,z,Q,ee=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=y;if(y===t.RED&&(z===t.FLOAT&&(Z=t.R32F),z===t.HALF_FLOAT&&(Z=t.R16F),z===t.UNSIGNED_BYTE&&(Z=t.R8)),y===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.R8UI),z===t.UNSIGNED_SHORT&&(Z=t.R16UI),z===t.UNSIGNED_INT&&(Z=t.R32UI),z===t.BYTE&&(Z=t.R8I),z===t.SHORT&&(Z=t.R16I),z===t.INT&&(Z=t.R32I)),y===t.RG&&(z===t.FLOAT&&(Z=t.RG32F),z===t.HALF_FLOAT&&(Z=t.RG16F),z===t.UNSIGNED_BYTE&&(Z=t.RG8)),y===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.RG8UI),z===t.UNSIGNED_SHORT&&(Z=t.RG16UI),z===t.UNSIGNED_INT&&(Z=t.RG32UI),z===t.BYTE&&(Z=t.RG8I),z===t.SHORT&&(Z=t.RG16I),z===t.INT&&(Z=t.RG32I)),y===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),y===t.RGBA){const ye=ee?Nl:je.getTransfer(Q);z===t.FLOAT&&(Z=t.RGBA32F),z===t.HALF_FLOAT&&(Z=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Z=ye===it?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(C,y){let z;return C?y===null||y===br||y===Is?z=t.DEPTH24_STENCIL8:y===gi?z=t.DEPTH32F_STENCIL8:y===Ho&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===br||y===Is?z=t.DEPTH_COMPONENT24:y===gi?z=t.DEPTH_COMPONENT32F:y===Ho&&(z=t.DEPTH_COMPONENT16),z}function M(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Cn&&C.minFilter!==zn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function P(C){const y=C.target;y.removeEventListener("dispose",P),T(y),y.isVideoTexture&&f.delete(y)}function A(C){const y=C.target;y.removeEventListener("dispose",A),w(y)}function T(C){const y=i.get(C);if(y.__webglInit===void 0)return;const z=C.source,Q=d.get(z);if(Q){const ee=Q[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(C),Object.keys(Q).length===0&&d.delete(z)}i.remove(C)}function b(C){const y=i.get(C);t.deleteTexture(y.__webglTexture);const z=C.source,Q=d.get(z);delete Q[y.__cacheKey],o.memory.textures--}function w(C){const y=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let ee=0;ee<y.__webglFramebuffer[Q].length;ee++)t.deleteFramebuffer(y.__webglFramebuffer[Q][ee]);else t.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)t.deleteFramebuffer(y.__webglFramebuffer[Q]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=C.textures;for(let Q=0,ee=z.length;Q<ee;Q++){const Z=i.get(z[Q]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(z[Q])}i.remove(C)}let S=0;function L(){S=0}function V(){const C=S;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),S+=1,C}function B(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function Y(C,y){const z=i.get(C);if(C.isVideoTexture&&gt(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(z,C,y);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+y)}function q(C,y){const z=i.get(C);if(C.version>0&&z.__version!==C.version){ze(z,C,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+y)}function G(C,y){const z=i.get(C);if(C.version>0&&z.__version!==C.version){ze(z,C,y);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+y)}function j(C,y){const z=i.get(C);if(C.version>0&&z.__version!==C.version){H(z,C,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+y)}const D={[Cf]:t.REPEAT,[yr]:t.CLAMP_TO_EDGE,[Rf]:t.MIRRORED_REPEAT},X={[Cn]:t.NEAREST,[fM]:t.NEAREST_MIPMAP_NEAREST,[xa]:t.NEAREST_MIPMAP_LINEAR,[zn]:t.LINEAR,[Zu]:t.LINEAR_MIPMAP_NEAREST,[Mr]:t.LINEAR_MIPMAP_LINEAR},K={[mM]:t.NEVER,[yM]:t.ALWAYS,[gM]:t.LESS,[yv]:t.LEQUAL,[_M]:t.EQUAL,[SM]:t.GEQUAL,[vM]:t.GREATER,[xM]:t.NOTEQUAL};function se(C,y){if(y.type===gi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===zn||y.magFilter===Zu||y.magFilter===xa||y.magFilter===Mr||y.minFilter===zn||y.minFilter===Zu||y.minFilter===xa||y.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,D[y.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,D[y.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,D[y.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,X[y.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,X[y.minFilter]),y.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,K[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Cn||y.minFilter!==xa&&y.minFilter!==Mr||y.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function xe(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",P));const Q=y.source;let ee=d.get(Q);ee===void 0&&(ee={},d.set(Q,ee));const Z=B(y);if(Z!==C.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[Z].usedTimes++;const ye=ee[C.__cacheKey];ye!==void 0&&(ee[C.__cacheKey].usedTimes--,ye.usedTimes===0&&b(y)),C.__cacheKey=Z,C.__webglTexture=ee[Z].texture}return z}function ze(C,y,z){let Q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=xe(C,y),Z=y.source;n.bindTexture(Q,C.__webglTexture,t.TEXTURE0+z);const ye=i.get(Z);if(Z.version!==ye.__version||ee===!0){n.activeTexture(t.TEXTURE0+z);const le=je.getPrimaries(je.workingColorSpace),pe=y.colorSpace===ki?null:je.getPrimaries(y.colorSpace),be=y.colorSpace===ki||le===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ne=x(y.image,!1,r.maxTextureSize);ne=Ce(y,ne);const he=s.convert(y.format,y.colorSpace),ke=s.convert(y.type);let Ae=g(y.internalFormat,he,ke,y.colorSpace,y.isVideoTexture);se(Q,y);let me;const Re=y.mipmaps,Ne=y.isVideoTexture!==!0,ot=ye.__version===void 0||ee===!0,U=Z.dataReady,ie=M(y,ne);if(y.isDepthTexture)Ae=_(y.format===Ns,y.type),ot&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,Ae,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Ae,ne.width,ne.height,0,he,ke,null));else if(y.isDataTexture)if(Re.length>0){Ne&&ot&&n.texStorage2D(t.TEXTURE_2D,ie,Ae,Re[0].width,Re[0].height);for(let W=0,$=Re.length;W<$;W++)me=Re[W],Ne?U&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,me.width,me.height,he,ke,me.data):n.texImage2D(t.TEXTURE_2D,W,Ae,me.width,me.height,0,he,ke,me.data);y.generateMipmaps=!1}else Ne?(ot&&n.texStorage2D(t.TEXTURE_2D,ie,Ae,ne.width,ne.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,he,ke,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,ne.width,ne.height,0,he,ke,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ne&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,Ae,Re[0].width,Re[0].height,ne.depth);for(let W=0,$=Re.length;W<$;W++)if(me=Re[W],y.format!==Bn)if(he!==null)if(Ne){if(U)if(y.layerUpdates.size>0){const oe=Um(me.width,me.height,y.format,y.type);for(const Ee of y.layerUpdates){const Be=me.data.subarray(Ee*oe/me.data.BYTES_PER_ELEMENT,(Ee+1)*oe/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,Ee,me.width,me.height,1,he,Be,0,0)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,ne.depth,he,me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,Ae,me.width,me.height,ne.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,ne.depth,he,ke,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,Ae,me.width,me.height,ne.depth,0,he,ke,me.data)}else{Ne&&ot&&n.texStorage2D(t.TEXTURE_2D,ie,Ae,Re[0].width,Re[0].height);for(let W=0,$=Re.length;W<$;W++)me=Re[W],y.format!==Bn?he!==null?Ne?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,me.width,me.height,he,me.data):n.compressedTexImage2D(t.TEXTURE_2D,W,Ae,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?U&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,me.width,me.height,he,ke,me.data):n.texImage2D(t.TEXTURE_2D,W,Ae,me.width,me.height,0,he,ke,me.data)}else if(y.isDataArrayTexture)if(Ne){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,Ae,ne.width,ne.height,ne.depth),U)if(y.layerUpdates.size>0){const W=Um(ne.width,ne.height,y.format,y.type);for(const $ of y.layerUpdates){const oe=ne.data.subarray($*W/ne.data.BYTES_PER_ELEMENT,($+1)*W/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,he,ke,oe)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,he,ke,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,ne.width,ne.height,ne.depth,0,he,ke,ne.data);else if(y.isData3DTexture)Ne?(ot&&n.texStorage3D(t.TEXTURE_3D,ie,Ae,ne.width,ne.height,ne.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,he,ke,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,ne.width,ne.height,ne.depth,0,he,ke,ne.data);else if(y.isFramebufferTexture){if(ot)if(Ne)n.texStorage2D(t.TEXTURE_2D,ie,Ae,ne.width,ne.height);else{let W=ne.width,$=ne.height;for(let oe=0;oe<ie;oe++)n.texImage2D(t.TEXTURE_2D,oe,Ae,W,$,0,he,ke,null),W>>=1,$>>=1}}else if(Re.length>0){if(Ne&&ot){const W=Le(Re[0]);n.texStorage2D(t.TEXTURE_2D,ie,Ae,W.width,W.height)}for(let W=0,$=Re.length;W<$;W++)me=Re[W],Ne?U&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,he,ke,me):n.texImage2D(t.TEXTURE_2D,W,Ae,he,ke,me);y.generateMipmaps=!1}else if(Ne){if(ot){const W=Le(ne);n.texStorage2D(t.TEXTURE_2D,ie,Ae,W.width,W.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,ke,ne)}else n.texImage2D(t.TEXTURE_2D,0,Ae,he,ke,ne);p(y)&&c(Q),ye.__version=Z.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function H(C,y,z){if(y.image.length!==6)return;const Q=xe(C,y),ee=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+z);const Z=i.get(ee);if(ee.version!==Z.__version||Q===!0){n.activeTexture(t.TEXTURE0+z);const ye=je.getPrimaries(je.workingColorSpace),le=y.colorSpace===ki?null:je.getPrimaries(y.colorSpace),pe=y.colorSpace===ki||ye===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const be=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!be&&!ne?he[$]=x(y.image[$],!0,r.maxCubemapSize):he[$]=ne?y.image[$].image:y.image[$],he[$]=Ce(y,he[$]);const ke=he[0],Ae=s.convert(y.format,y.colorSpace),me=s.convert(y.type),Re=g(y.internalFormat,Ae,me,y.colorSpace),Ne=y.isVideoTexture!==!0,ot=Z.__version===void 0||Q===!0,U=ee.dataReady;let ie=M(y,ke);se(t.TEXTURE_CUBE_MAP,y);let W;if(be){Ne&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ie,Re,ke.width,ke.height);for(let $=0;$<6;$++){W=he[$].mipmaps;for(let oe=0;oe<W.length;oe++){const Ee=W[oe];y.format!==Bn?Ae!==null?Ne?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,0,0,Ee.width,Ee.height,Ae,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,Re,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,0,0,Ee.width,Ee.height,Ae,me,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,Re,Ee.width,Ee.height,0,Ae,me,Ee.data)}}}else{if(W=y.mipmaps,Ne&&ot){W.length>0&&ie++;const $=Le(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ie,Re,$.width,$.height)}for(let $=0;$<6;$++)if(ne){Ne?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,Ae,me,he[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Re,he[$].width,he[$].height,0,Ae,me,he[$].data);for(let oe=0;oe<W.length;oe++){const Be=W[oe].image[$].image;Ne?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,0,0,Be.width,Be.height,Ae,me,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,Re,Be.width,Be.height,0,Ae,me,Be.data)}}else{Ne?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,me,he[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Re,Ae,me,he[$]);for(let oe=0;oe<W.length;oe++){const Ee=W[oe];Ne?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,0,0,Ae,me,Ee.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,Re,Ae,me,Ee.image[$])}}}p(y)&&c(t.TEXTURE_CUBE_MAP),Z.__version=ee.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function te(C,y,z,Q,ee,Z){const ye=s.convert(z.format,z.colorSpace),le=s.convert(z.type),pe=g(z.internalFormat,ye,le,z.colorSpace);if(!i.get(y).__hasExternalTextures){const ne=Math.max(1,y.width>>Z),he=Math.max(1,y.height>>Z);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Z,pe,ne,he,y.depth,0,ye,le,null):n.texImage2D(ee,Z,pe,ne,he,0,ye,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Se(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,i.get(z).__webglTexture,0,Je(y)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,i.get(z).__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(C,y,z){if(t.bindRenderbuffer(t.RENDERBUFFER,C),y.depthBuffer){const Q=y.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,Z=_(y.stencilBuffer,ee),ye=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=Je(y);Se(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,Z,y.width,y.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,Z,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,Z,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,C)}else{const Q=y.textures;for(let ee=0;ee<Q.length;ee++){const Z=Q[ee],ye=s.convert(Z.format,Z.colorSpace),le=s.convert(Z.type),pe=g(Z.internalFormat,ye,le,Z.colorSpace),be=Je(y);z&&Se(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,pe,y.width,y.height):Se(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,pe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,pe,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const Q=i.get(y.depthTexture).__webglTexture,ee=Je(y);if(y.depthTexture.format===Ms)Se(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Ns)Se(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pe(C){const y=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ce(y.__webglFramebuffer,C)}else if(z){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]=t.createRenderbuffer(),ue(y.__webglDepthbuffer[Q],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),ue(y.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(C,y,z){const Q=i.get(C);y!==void 0&&te(Q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Pe(C)}function Oe(C){const y=C.texture,z=i.get(C),Q=i.get(y);C.addEventListener("dispose",A);const ee=C.textures,Z=C.isWebGLCubeRenderTarget===!0,ye=ee.length>1;if(ye||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=y.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let pe=0;pe<y.mipmaps.length;pe++)z.__webglFramebuffer[le][pe]=t.createFramebuffer()}else z.__webglFramebuffer[le]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<y.mipmaps.length;le++)z.__webglFramebuffer[le]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(ye)for(let le=0,pe=ee.length;le<pe;le++){const be=i.get(ee[le]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Se(C)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const pe=ee[le];z.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[le]);const be=s.convert(pe.format,pe.colorSpace),ne=s.convert(pe.type),he=g(pe.internalFormat,be,ne,pe.colorSpace,C.isXRRenderTarget===!0),ke=Je(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,he,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,z.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(z.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),se(t.TEXTURE_CUBE_MAP,y);for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)te(z.__webglFramebuffer[le][pe],C,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else te(z.__webglFramebuffer[le],C,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(y)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let le=0,pe=ee.length;le<pe;le++){const be=ee[le],ne=i.get(be);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),se(t.TEXTURE_2D,be),te(z.__webglFramebuffer,C,be,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),p(be)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Q.__webglTexture),se(le,y),y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)te(z.__webglFramebuffer[pe],C,y,t.COLOR_ATTACHMENT0,le,pe);else te(z.__webglFramebuffer,C,y,t.COLOR_ATTACHMENT0,le,0);p(y)&&c(le),n.unbindTexture()}C.depthBuffer&&Pe(C)}function ct(C){const y=C.textures;for(let z=0,Q=y.length;z<Q;z++){const ee=y[z];if(p(ee)){const Z=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(ee).__webglTexture;n.bindTexture(Z,ye),c(Z),n.unbindTexture()}}}const R=[],mt=[];function Ke(C){if(C.samples>0){if(Se(C)===!1){const y=C.textures,z=C.width,Q=C.height;let ee=t.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(C),le=y.length>1;if(le)for(let pe=0;pe<y.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let pe=0;pe<y.length;pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const be=i.get(y[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,z,Q,0,0,z,Q,ee,t.NEAREST),l===!0&&(R.length=0,mt.length=0,R.push(t.COLOR_ATTACHMENT0+pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(R.push(Z),mt.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,mt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,R))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<y.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const be=i.get(y[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function Je(C){return Math.min(r.maxSamples,C.samples)}function Se(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function gt(C){const y=o.render.frame;f.get(C)!==y&&(f.set(C,y),C.update())}function Ce(C,y){const z=C.colorSpace,Q=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==rr&&z!==ki&&(je.getTransfer(z)===it?(Q!==Bn||ee!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=L,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=j,this.rebindTextures=Ie,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Se}function wA(t,e){function n(i,r=ki){let s;const o=je.getTransfer(r);if(i===Ei)return t.UNSIGNED_BYTE;if(i===ah)return t.UNSIGNED_SHORT_4_4_4_4;if(i===lh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===dv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===cv)return t.BYTE;if(i===fv)return t.SHORT;if(i===Ho)return t.UNSIGNED_SHORT;if(i===oh)return t.INT;if(i===br)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===qo)return t.HALF_FLOAT;if(i===hv)return t.ALPHA;if(i===pv)return t.RGB;if(i===Bn)return t.RGBA;if(i===mv)return t.LUMINANCE;if(i===gv)return t.LUMINANCE_ALPHA;if(i===Ms)return t.DEPTH_COMPONENT;if(i===Ns)return t.DEPTH_STENCIL;if(i===_v)return t.RED;if(i===uh)return t.RED_INTEGER;if(i===vv)return t.RG;if(i===ch)return t.RG_INTEGER;if(i===fh)return t.RGBA_INTEGER;if(i===il||i===rl||i===sl||i===ol)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pf||i===Lf||i===bf||i===Df)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Pf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Df)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uf||i===If||i===Nf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Uf||i===If)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ff||i===Of||i===kf||i===zf||i===Bf||i===Hf||i===Vf||i===Gf||i===Wf||i===Xf||i===$f||i===Yf||i===qf||i===jf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ff)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Of)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$f)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===al||i===Kf||i===Zf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===al)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xv||i===Qf||i===Jf||i===ed)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ed)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class AA extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ha extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CA={type:"move"};class Tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),c=this._getHandJoint(u,x);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,v=.005;u.inputState.pinching&&d>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(CA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ha;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const RA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new er({vertexShader:RA,fragmentShader:PA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new _u(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bA extends Hs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,m=null,v=null;const x=new LA,p=n.getContextAttributes();let c=null,g=null;const _=[],M=[],P=new We;let A=null;const T=new wn;T.layers.enable(1),T.viewport=new Pt;const b=new wn;b.layers.enable(2),b.viewport=new Pt;const w=[T,b],S=new AA;S.layers.enable(1),S.layers.enable(2);let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let te=_[H];return te===void 0&&(te=new Tc,_[H]=te),te.getTargetRaySpace()},this.getControllerGrip=function(H){let te=_[H];return te===void 0&&(te=new Tc,_[H]=te),te.getGripSpace()},this.getHand=function(H){let te=_[H];return te===void 0&&(te=new Tc,_[H]=te),te.getHandSpace()};function B(H){const te=M.indexOf(H.inputSource);if(te===-1)return;const ue=_[te];ue!==void 0&&(ue.update(H.inputSource,H.frame,u||o),ue.dispatchEvent({type:H.type,data:H.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",q);for(let H=0;H<_.length;H++){const te=M[H];te!==null&&(M[H]=null,_[H].disconnect(te))}L=null,V=null,x.reset(),e.setRenderTarget(c),m=null,d=null,h=null,r=null,g=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Dr(m.framebufferWidth,m.framebufferHeight,{format:Bn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ue=null,ce=null;p.depth&&(ce=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=p.stencil?Ns:Ms,ue=p.stencil?Is:br);const Pe={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Dr(d.textureWidth,d.textureHeight,{format:Bn,type:Ei,depthTexture:new Nv(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(H){for(let te=0;te<H.removed.length;te++){const ue=H.removed[te],ce=M.indexOf(ue);ce>=0&&(M[ce]=null,_[ce].disconnect(ue))}for(let te=0;te<H.added.length;te++){const ue=H.added[te];let ce=M.indexOf(ue);if(ce===-1){for(let Ie=0;Ie<_.length;Ie++)if(Ie>=M.length){M.push(ue),ce=Ie;break}else if(M[Ie]===null){M[Ie]=ue,ce=Ie;break}if(ce===-1)break}const Pe=_[ce];Pe&&Pe.connect(ue)}}const G=new k,j=new k;function D(H,te,ue){G.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(ue.matrixWorld);const ce=G.distanceTo(j),Pe=te.projectionMatrix.elements,Ie=ue.projectionMatrix.elements,Oe=Pe[14]/(Pe[10]-1),ct=Pe[14]/(Pe[10]+1),R=(Pe[9]+1)/Pe[5],mt=(Pe[9]-1)/Pe[5],Ke=(Pe[8]-1)/Pe[0],Je=(Ie[8]+1)/Ie[0],Se=Oe*Ke,gt=Oe*Je,Ce=ce/(-Ke+Je),Le=Ce*-Ke;te.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Le),H.translateZ(Ce),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const C=Oe+Ce,y=ct+Ce,z=Se-Le,Q=gt+(ce-Le),ee=R*ct/y*C,Z=mt*ct/y*C;H.projectionMatrix.makePerspective(z,Q,ee,Z,C,y),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,te){te===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(te.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;x.texture!==null&&(H.near=x.depthNear,H.far=x.depthFar),S.near=b.near=T.near=H.near,S.far=b.far=T.far=H.far,(L!==S.near||V!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,V=S.far,T.near=L,T.far=V,b.near=L,b.far=V,T.updateProjectionMatrix(),b.updateProjectionMatrix(),H.updateProjectionMatrix());const te=H.parent,ue=S.cameras;X(S,te);for(let ce=0;ce<ue.length;ce++)X(ue[ce],te);ue.length===2?D(S,T,b):S.projectionMatrix.copy(T.projectionMatrix),K(H,S,te)};function K(H,te,ue){ue===null?H.matrix.copy(te.matrixWorld):(H.matrix.copy(ue.matrixWorld),H.matrix.invert(),H.matrix.multiply(te.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(te.projectionMatrix),H.projectionMatrixInverse.copy(te.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=td*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let se=null;function xe(H,te){if(f=te.getViewerPose(u||o),v=te,f!==null){const ue=f.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ce=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let Ie=0;Ie<ue.length;Ie++){const Oe=ue[Ie];let ct=null;if(m!==null)ct=m.getViewport(Oe);else{const mt=h.getViewSubImage(d,Oe);ct=mt.viewport,Ie===0&&(e.setRenderTargetTextures(g,mt.colorTexture,d.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(g))}let R=w[Ie];R===void 0&&(R=new wn,R.layers.enable(Ie),R.viewport=new Pt,w[Ie]=R),R.matrix.fromArray(Oe.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Oe.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(ct.x,ct.y,ct.width,ct.height),Ie===0&&(S.matrix.copy(R.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(R)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ie=h.getDepthInformation(ue[0]);Ie&&Ie.isValid&&Ie.texture&&x.init(e,Ie,r.renderState)}}for(let ue=0;ue<_.length;ue++){const ce=M[ue],Pe=_[ue];ce!==null&&Pe!==void 0&&Pe.update(ce,te,u||o)}se&&se(H,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const ze=new Iv;ze.setAnimationLoop(xe),this.setAnimationLoop=function(H){se=H},this.dispose=function(){}}}const fr=new Ti,DA=new Tt;function UA(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,Lv(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,g,_,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),h(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),d(p,c),c.isMeshPhysicalMaterial&&m(p,c,M)):c.isMeshMatcapMaterial?(s(p,c),v(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),x(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,g,_):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===sn&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===sn&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const g=e.get(c),_=g.envMap,M=g.envMapRotation;_&&(p.envMap.value=_,fr.copy(M),fr.x*=-1,fr.y*=-1,fr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),p.envMapRotation.value.setFromMatrix4(DA.makeRotationFromEuler(fr)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap&&(p.lightMap.value=c.lightMap,p.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,p.lightMapTransform)),c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,g,_){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*g,p.scale.value=_*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function h(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function d(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),c.envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,g){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===sn&&p.clearcoatNormalScale.value.negate())),c.dispersion>0&&(p.dispersion.value=c.dispersion),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,c){c.matcap&&(p.matcap.value=c.matcap)}function x(p,c){const g=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function IA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const M=_.program;i.uniformBlockBinding(g,M)}function u(g,_){let M=r[g.id];M===void 0&&(v(g),M=f(g),r[g.id]=M,g.addEventListener("dispose",p));const P=_.program;i.updateUBOMapping(g,P);const A=e.render.frame;s[g.id]!==A&&(d(g),s[g.id]=A)}function f(g){const _=h();g.__bindingPointIndex=_;const M=t.createBuffer(),P=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],M=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,T=M.length;A<T;A++){const b=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,S=b.length;w<S;w++){const L=b[w];if(m(L,A,w,P)===!0){const V=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let q=0;q<B.length;q++){const G=B[q],j=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,V+Y,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,_,M,P){const A=g.value,T=_+"_"+M;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const b=P[T];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return P[T]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function v(g){const _=g.uniforms;let M=0;const P=16;for(let T=0,b=_.length;T<b;T++){const w=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,L=w.length;S<L;S++){const V=w[S],B=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,q=B.length;Y<q;Y++){const G=B[Y],j=x(G),D=M%P,X=D%j.boundary,K=D+X;M+=X,K!==0&&P-K<j.storage&&(M+=P-K),V.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=j.storage}}}const A=M%P;return A>0&&(M+=P-A),g.__size=M,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function p(g){const _=g.target;_.removeEventListener("dispose",p);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class NA{constructor(e={}){const{canvas:n=EM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this.toneMapping=Ki,this.toneMappingExposure=1;const _=this;let M=!1,P=0,A=0,T=null,b=-1,w=null;const S=new Pt,L=new Pt;let V=null;const B=new et(0);let Y=0,q=n.width,G=n.height,j=1,D=null,X=null;const K=new Pt(0,0,q,G),se=new Pt(0,0,q,G);let xe=!1;const ze=new Uv;let H=!1,te=!1;const ue=new Tt,ce=new k,Pe=new Pt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ct(){return T===null?j:1}let R=i;function mt(E,I){return n.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sh}`),n.addEventListener("webglcontextlost",W,!1),n.addEventListener("webglcontextrestored",$,!1),n.addEventListener("webglcontextcreationerror",oe,!1),R===null){const I="webgl2";if(R=mt(I,E),R===null)throw mt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ke,Je,Se,gt,Ce,Le,C,y,z,Q,ee,Z,ye,le,pe,be,ne,he,ke,Ae,me,Re,Ne,ot;function U(){Ke=new HT(R),Ke.init(),Re=new wA(R,Ke),Je=new IT(R,Ke,e,Re),Se=new MA(R),gt=new WT(R),Ce=new lA,Le=new TA(R,Ke,Se,Ce,Je,Re,gt),C=new FT(_),y=new BT(_),z=new KM(R),Ne=new DT(R,z),Q=new VT(R,z,gt,Ne),ee=new $T(R,Q,z,gt),ke=new XT(R,Je,Le),be=new NT(Ce),Z=new aA(_,C,y,Ke,Je,Ne,be),ye=new UA(_,Ce),le=new cA,pe=new gA(Ke),he=new bT(_,C,y,Se,ee,d,l),ne=new yA(_,ee,Je),ot=new IA(R,gt,Je,Se),Ae=new UT(R,Ke,gt),me=new GT(R,Ke,gt),gt.programs=Z.programs,_.capabilities=Je,_.extensions=Ke,_.properties=Ce,_.renderLists=le,_.shadowMap=ne,_.state=Se,_.info=gt}U();const ie=new bA(_,R);this.xr=ie,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=Ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(q,G,!1))},this.getSize=function(E){return E.set(q,G)},this.setSize=function(E,I,F=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,G=I,n.width=Math.floor(E*j),n.height=Math.floor(I*j),F===!0&&(n.style.width=E+"px",n.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(q*j,G*j).floor()},this.setDrawingBufferSize=function(E,I,F){q=E,G=I,j=F,n.width=Math.floor(E*F),n.height=Math.floor(I*F),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,I,F,O){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,I,F,O),Se.viewport(S.copy(K).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,I,F,O){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,I,F,O),Se.scissor(L.copy(se).multiplyScalar(j).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(E){Se.setScissorTest(xe=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){X=E},this.getClearColor=function(E){return E.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(E=!0,I=!0,F=!0){let O=0;if(E){let N=!1;if(T!==null){const re=T.texture.format;N=re===fh||re===ch||re===uh}if(N){const re=T.texture.type,fe=re===Ei||re===br||re===Ho||re===Is||re===ah||re===lh,ge=he.getClearColor(),_e=he.getClearAlpha(),Te=ge.r,we=ge.g,Me=ge.b;fe?(m[0]=Te,m[1]=we,m[2]=Me,m[3]=_e,R.clearBufferuiv(R.COLOR,0,m)):(v[0]=Te,v[1]=we,v[2]=Me,v[3]=_e,R.clearBufferiv(R.COLOR,0,v))}else O|=R.COLOR_BUFFER_BIT}I&&(O|=R.DEPTH_BUFFER_BIT),F&&(O|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",W,!1),n.removeEventListener("webglcontextrestored",$,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),le.dispose(),pe.dispose(),Ce.dispose(),C.dispose(),y.dispose(),ee.dispose(),Ne.dispose(),ot.dispose(),Z.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Wn),ie.removeEventListener("sessionend",mh),sr.stop()};function W(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=gt.autoReset,I=ne.enabled,F=ne.autoUpdate,O=ne.needsUpdate,N=ne.type;U(),gt.autoReset=E,ne.enabled=I,ne.autoUpdate=F,ne.needsUpdate=O,ne.type=N}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ee(E){const I=E.target;I.removeEventListener("dispose",Ee),Be(I)}function Be(E){_t(E),Ce.remove(E)}function _t(E){const I=Ce.get(E).programs;I!==void 0&&(I.forEach(function(F){Z.releaseProgram(F)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,F,O,N,re){I===null&&(I=Ie);const fe=N.isMesh&&N.matrixWorld.determinant()<0,ge=Vv(E,I,F,O,N);Se.setMaterial(O,fe);let _e=F.index,Te=1;if(O.wireframe===!0){if(_e=Q.getWireframeAttribute(F),_e===void 0)return;Te=2}const we=F.drawRange,Me=F.attributes.position;let $e=we.start*Te,ft=(we.start+we.count)*Te;re!==null&&($e=Math.max($e,re.start*Te),ft=Math.min(ft,(re.start+re.count)*Te)),_e!==null?($e=Math.max($e,0),ft=Math.min(ft,_e.count)):Me!=null&&($e=Math.max($e,0),ft=Math.min(ft,Me.count));const dt=ft-$e;if(dt<0||dt===1/0)return;Ne.setup(N,O,ge,F,_e);let ln,Ye=Ae;if(_e!==null&&(ln=z.get(_e),Ye=me,Ye.setIndex(ln)),N.isMesh)O.wireframe===!0?(Se.setLineWidth(O.wireframeLinewidth*ct()),Ye.setMode(R.LINES)):Ye.setMode(R.TRIANGLES);else if(N.isLine){let ve=O.linewidth;ve===void 0&&(ve=1),Se.setLineWidth(ve*ct()),N.isLineSegments?Ye.setMode(R.LINES):N.isLineLoop?Ye.setMode(R.LINE_LOOP):Ye.setMode(R.LINE_STRIP)}else N.isPoints?Ye.setMode(R.POINTS):N.isSprite&&Ye.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ye.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))Ye.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const ve=N._multiDrawStarts,Ut=N._multiDrawCounts,qe=N._multiDrawCount,bn=_e?z.get(_e).bytesPerElement:1,Fr=Ce.get(O).currentProgram.getUniforms();for(let un=0;un<qe;un++)Fr.setValue(R,"_gl_DrawID",un),Ye.render(ve[un]/bn,Ut[un])}else if(N.isInstancedMesh)Ye.renderInstances($e,dt,N.count);else if(F.isInstancedBufferGeometry){const ve=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ut=Math.min(F.instanceCount,ve);Ye.renderInstances($e,dt,Ut)}else Ye.render($e,dt)};function Dt(E,I,F){E.transparent===!0&&E.side===hi&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,ea(E,I,F),E.side=Ji,E.needsUpdate=!0,ea(E,I,F),E.side=hi):ea(E,I,F)}this.compile=function(E,I,F=null){F===null&&(F=E),p=pe.get(F),p.init(I),g.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==F&&E.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const O=new Set;return E.traverse(function(N){const re=N.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const ge=re[fe];Dt(ge,F,N),O.add(ge)}else Dt(re,F,N),O.add(re)}),g.pop(),p=null,O},this.compileAsync=function(E,I,F=null){const O=this.compile(E,I,F);return new Promise(N=>{function re(){if(O.forEach(function(fe){Ce.get(fe).currentProgram.isReady()&&O.delete(fe)}),O.size===0){N(E);return}setTimeout(re,10)}Ke.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Xe=null;function ri(E){Xe&&Xe(E)}function Wn(){sr.stop()}function mh(){sr.start()}const sr=new Iv;sr.setAnimationLoop(ri),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(E){Xe=E,ie.setAnimationLoop(E),E===null?sr.stop():sr.start()},ie.addEventListener("sessionstart",Wn),ie.addEventListener("sessionend",mh),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,I,T),p=pe.get(E,g.length),p.init(I),g.push(p),ue.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ze.setFromProjectionMatrix(ue),te=this.localClippingEnabled,H=be.init(this.clippingPlanes,te),x=le.get(E,c.length),x.init(),c.push(x),ie.enabled===!0&&ie.isPresenting===!0){const re=_.xr.getDepthSensingMesh();re!==null&&Su(re,I,-1/0,_.sortObjects)}Su(E,I,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(D,X),Oe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Oe&&he.addToRenderList(x,E),this.info.render.frame++,H===!0&&be.beginShadows();const F=p.state.shadowsArray;ne.render(F,E,I),H===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=x.opaque,N=x.transmissive;if(p.setupLights(),I.isArrayCamera){const re=I.cameras;if(N.length>0)for(let fe=0,ge=re.length;fe<ge;fe++){const _e=re[fe];_h(O,N,E,_e)}Oe&&he.render(E);for(let fe=0,ge=re.length;fe<ge;fe++){const _e=re[fe];gh(x,E,_e,_e.viewport)}}else N.length>0&&_h(O,N,E,I),Oe&&he.render(E),gh(x,E,I);T!==null&&(Le.updateMultisampleRenderTarget(T),Le.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(_,E,I),Ne.resetDefaultState(),b=-1,w=null,g.pop(),g.length>0?(p=g[g.length-1],H===!0&&be.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function Su(E,I,F,O){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ze.intersectsSprite(E)){O&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);const fe=ee.update(E),ge=E.material;ge.visible&&x.push(E,fe,ge,F,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ze.intersectsObject(E))){const fe=ee.update(E),ge=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Pe.copy(fe.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(ue)),Array.isArray(ge)){const _e=fe.groups;for(let Te=0,we=_e.length;Te<we;Te++){const Me=_e[Te],$e=ge[Me.materialIndex];$e&&$e.visible&&x.push(E,fe,$e,F,Pe.z,Me)}}else ge.visible&&x.push(E,fe,ge,F,Pe.z,null)}}const re=E.children;for(let fe=0,ge=re.length;fe<ge;fe++)Su(re[fe],I,F,O)}function gh(E,I,F,O){const N=E.opaque,re=E.transmissive,fe=E.transparent;p.setupLightsView(F),H===!0&&be.setGlobalState(_.clippingPlanes,F),O&&Se.viewport(S.copy(O)),N.length>0&&Jo(N,I,F),re.length>0&&Jo(re,I,F),fe.length>0&&Jo(fe,I,F),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function _h(E,I,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[O.id]===void 0&&(p.state.transmissionRenderTarget[O.id]=new Dr(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?qo:Ei,minFilter:Mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const re=p.state.transmissionRenderTarget[O.id],fe=O.viewport||S;re.setSize(fe.z,fe.w);const ge=_.getRenderTarget();_.setRenderTarget(re),_.getClearColor(B),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),Oe&&he.render(F);const _e=_.toneMapping;_.toneMapping=Ki;const Te=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),p.setupLightsView(O),H===!0&&be.setGlobalState(_.clippingPlanes,O),Jo(E,F,O),Le.updateMultisampleRenderTarget(re),Le.updateRenderTargetMipmap(re),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Me=0,$e=I.length;Me<$e;Me++){const ft=I[Me],dt=ft.object,ln=ft.geometry,Ye=ft.material,ve=ft.group;if(Ye.side===hi&&dt.layers.test(O.layers)){const Ut=Ye.side;Ye.side=sn,Ye.needsUpdate=!0,vh(dt,F,O,ln,Ye,ve),Ye.side=Ut,Ye.needsUpdate=!0,we=!0}}we===!0&&(Le.updateMultisampleRenderTarget(re),Le.updateRenderTargetMipmap(re))}_.setRenderTarget(ge),_.setClearColor(B,Y),Te!==void 0&&(O.viewport=Te),_.toneMapping=_e}function Jo(E,I,F){const O=I.isScene===!0?I.overrideMaterial:null;for(let N=0,re=E.length;N<re;N++){const fe=E[N],ge=fe.object,_e=fe.geometry,Te=O===null?fe.material:O,we=fe.group;ge.layers.test(F.layers)&&vh(ge,I,F,_e,Te,we)}}function vh(E,I,F,O,N,re){E.onBeforeRender(_,I,F,O,N,re),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.transparent===!0&&N.side===hi&&N.forceSinglePass===!1?(N.side=sn,N.needsUpdate=!0,_.renderBufferDirect(F,I,O,N,E,re),N.side=Ji,N.needsUpdate=!0,_.renderBufferDirect(F,I,O,N,E,re),N.side=hi):_.renderBufferDirect(F,I,O,N,E,re),E.onAfterRender(_,I,F,O,N,re)}function ea(E,I,F){I.isScene!==!0&&(I=Ie);const O=Ce.get(E),N=p.state.lights,re=p.state.shadowsArray,fe=N.state.version,ge=Z.getParameters(E,N.state,re,I,F),_e=Z.getProgramCacheKey(ge);let Te=O.programs;O.environment=E.isMeshStandardMaterial?I.environment:null,O.fog=I.fog,O.envMap=(E.isMeshStandardMaterial?y:C).get(E.envMap||O.environment),O.envMapRotation=O.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",Ee),Te=new Map,O.programs=Te);let we=Te.get(_e);if(we!==void 0){if(O.currentProgram===we&&O.lightsStateVersion===fe)return Sh(E,ge),we}else ge.uniforms=Z.getUniforms(E),E.onBeforeCompile(ge,_),we=Z.acquireProgram(ge,_e),Te.set(_e,we),O.uniforms=ge.uniforms;const Me=O.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=be.uniform),Sh(E,ge),O.needsLights=Wv(E),O.lightsStateVersion=fe,O.needsLights&&(Me.ambientLightColor.value=N.state.ambient,Me.lightProbe.value=N.state.probe,Me.directionalLights.value=N.state.directional,Me.directionalLightShadows.value=N.state.directionalShadow,Me.spotLights.value=N.state.spot,Me.spotLightShadows.value=N.state.spotShadow,Me.rectAreaLights.value=N.state.rectArea,Me.ltc_1.value=N.state.rectAreaLTC1,Me.ltc_2.value=N.state.rectAreaLTC2,Me.pointLights.value=N.state.point,Me.pointLightShadows.value=N.state.pointShadow,Me.hemisphereLights.value=N.state.hemi,Me.directionalShadowMap.value=N.state.directionalShadowMap,Me.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Me.spotShadowMap.value=N.state.spotShadowMap,Me.spotLightMatrix.value=N.state.spotLightMatrix,Me.spotLightMap.value=N.state.spotLightMap,Me.pointShadowMap.value=N.state.pointShadowMap,Me.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=we,O.uniformsList=null,we}function xh(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=ll.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Sh(E,I){const F=Ce.get(E);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function Vv(E,I,F,O,N){I.isScene!==!0&&(I=Ie),Le.resetTextureUnits();const re=I.fog,fe=O.isMeshStandardMaterial?I.environment:null,ge=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:rr,_e=(O.isMeshStandardMaterial?y:C).get(O.envMap||fe),Te=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,we=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Me=!!F.morphAttributes.position,$e=!!F.morphAttributes.normal,ft=!!F.morphAttributes.color;let dt=Ki;O.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(dt=_.toneMapping);const ln=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ye=ln!==void 0?ln.length:0,ve=Ce.get(O),Ut=p.state.lights;if(H===!0&&(te===!0||E!==w)){const yn=E===w&&O.id===b;be.setState(O,E,yn)}let qe=!1;O.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Ut.state.version||ve.outputColorSpace!==ge||N.isBatchedMesh&&ve.batching===!1||!N.isBatchedMesh&&ve.batching===!0||N.isBatchedMesh&&ve.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ve.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ve.instancing===!1||!N.isInstancedMesh&&ve.instancing===!0||N.isSkinnedMesh&&ve.skinning===!1||!N.isSkinnedMesh&&ve.skinning===!0||N.isInstancedMesh&&ve.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ve.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ve.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ve.instancingMorph===!1&&N.morphTexture!==null||ve.envMap!==_e||O.fog===!0&&ve.fog!==re||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==be.numPlanes||ve.numIntersection!==be.numIntersection)||ve.vertexAlphas!==Te||ve.vertexTangents!==we||ve.morphTargets!==Me||ve.morphNormals!==$e||ve.morphColors!==ft||ve.toneMapping!==dt||ve.morphTargetsCount!==Ye)&&(qe=!0):(qe=!0,ve.__version=O.version);let bn=ve.currentProgram;qe===!0&&(bn=ea(O,I,N));let Fr=!1,un=!1,yu=!1;const vt=bn.getUniforms(),Ai=ve.uniforms;if(Se.useProgram(bn.program)&&(Fr=!0,un=!0,yu=!0),O.id!==b&&(b=O.id,un=!0),Fr||w!==E){vt.setValue(R,"projectionMatrix",E.projectionMatrix),vt.setValue(R,"viewMatrix",E.matrixWorldInverse);const yn=vt.map.cameraPosition;yn!==void 0&&yn.setValue(R,ce.setFromMatrixPosition(E.matrixWorld)),Je.logarithmicDepthBuffer&&vt.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&vt.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,un=!0,yu=!0)}if(N.isSkinnedMesh){vt.setOptional(R,N,"bindMatrix"),vt.setOptional(R,N,"bindMatrixInverse");const yn=N.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),vt.setValue(R,"boneTexture",yn.boneTexture,Le))}N.isBatchedMesh&&(vt.setOptional(R,N,"batchingTexture"),vt.setValue(R,"batchingTexture",N._matricesTexture,Le),vt.setOptional(R,N,"batchingIdTexture"),vt.setValue(R,"batchingIdTexture",N._indirectTexture,Le),vt.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&vt.setValue(R,"batchingColorTexture",N._colorsTexture,Le));const Mu=F.morphAttributes;if((Mu.position!==void 0||Mu.normal!==void 0||Mu.color!==void 0)&&ke.update(N,F,bn),(un||ve.receiveShadow!==N.receiveShadow)&&(ve.receiveShadow=N.receiveShadow,vt.setValue(R,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ai.envMap.value=_e,Ai.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&I.environment!==null&&(Ai.envMapIntensity.value=I.environmentIntensity),un&&(vt.setValue(R,"toneMappingExposure",_.toneMappingExposure),ve.needsLights&&Gv(Ai,yu),re&&O.fog===!0&&ye.refreshFogUniforms(Ai,re),ye.refreshMaterialUniforms(Ai,O,j,G,p.state.transmissionRenderTarget[E.id]),ll.upload(R,xh(ve),Ai,Le)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ll.upload(R,xh(ve),Ai,Le),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&vt.setValue(R,"center",N.center),vt.setValue(R,"modelViewMatrix",N.modelViewMatrix),vt.setValue(R,"normalMatrix",N.normalMatrix),vt.setValue(R,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const yn=O.uniformsGroups;for(let Eu=0,Xv=yn.length;Eu<Xv;Eu++){const yh=yn[Eu];ot.update(yh,bn),ot.bind(yh,bn)}}return bn}function Gv(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Wv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,I,F){Ce.get(E.texture).__webglTexture=I,Ce.get(E.depthTexture).__webglTexture=F;const O=Ce.get(E);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const F=Ce.get(E);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,F=0){T=E,P=I,A=F;let O=!0,N=null,re=!1,fe=!1;if(E){const _e=Ce.get(E);_e.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(R.FRAMEBUFFER,null),O=!1):_e.__webglFramebuffer===void 0?Le.setupRenderTarget(E):_e.__hasExternalTextures&&Le.rebindTextures(E,Ce.get(E.texture).__webglTexture,Ce.get(E.depthTexture).__webglTexture);const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(fe=!0);const we=Ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[I])?N=we[I][F]:N=we[I],re=!0):E.samples>0&&Le.useMultisampledRTT(E)===!1?N=Ce.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?N=we[F]:N=we,S.copy(E.viewport),L.copy(E.scissor),V=E.scissorTest}else S.copy(K).multiplyScalar(j).floor(),L.copy(se).multiplyScalar(j).floor(),V=xe;if(Se.bindFramebuffer(R.FRAMEBUFFER,N)&&O&&Se.drawBuffers(E,N),Se.viewport(S),Se.scissor(L),Se.setScissorTest(V),re){const _e=Ce.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,_e.__webglTexture,F)}else if(fe){const _e=Ce.get(E.texture),Te=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.__webglTexture,F||0,Te)}b=-1},this.readRenderTargetPixels=function(E,I,F,O,N,re,fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){Se.bindFramebuffer(R.FRAMEBUFFER,ge);try{const _e=E.texture,Te=_e.format,we=_e.type;if(!Je.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-O&&F>=0&&F<=E.height-N&&R.readPixels(I,F,O,N,Re.convert(Te),Re.convert(we),re)}finally{const _e=T!==null?Ce.get(T).__webglFramebuffer:null;Se.bindFramebuffer(R.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(E,I,F,O,N,re,fe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){Se.bindFramebuffer(R.FRAMEBUFFER,ge);try{const _e=E.texture,Te=_e.format,we=_e.type;if(!Je.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-O&&F>=0&&F<=E.height-N){const Me=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Me),R.bufferData(R.PIXEL_PACK_BUFFER,re.byteLength,R.STREAM_READ),R.readPixels(I,F,O,N,Re.convert(Te),Re.convert(we),0),R.flush();const $e=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await TM(R,$e,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,Me),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,re)}finally{R.deleteBuffer(Me),R.deleteSync($e)}return re}}finally{const _e=T!==null?Ce.get(T).__webglFramebuffer:null;Se.bindFramebuffer(R.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(E,I=null,F=0){E.isTexture!==!0&&(So("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const O=Math.pow(2,-F),N=Math.floor(E.image.width*O),re=Math.floor(E.image.height*O),fe=I!==null?I.x:0,ge=I!==null?I.y:0;Le.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,F,0,0,fe,ge,N,re),Se.unbindTexture()},this.copyTextureToTexture=function(E,I,F=null,O=null,N=0){E.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1],I=arguments[2],N=arguments[3]||0,F=null);let re,fe,ge,_e,Te,we;F!==null?(re=F.max.x-F.min.x,fe=F.max.y-F.min.y,ge=F.min.x,_e=F.min.y):(re=E.image.width,fe=E.image.height,ge=0,_e=0),O!==null?(Te=O.x,we=O.y):(Te=0,we=0);const Me=Re.convert(I.format),$e=Re.convert(I.type);Le.setTexture2D(I,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const ft=R.getParameter(R.UNPACK_ROW_LENGTH),dt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ln=R.getParameter(R.UNPACK_SKIP_PIXELS),Ye=R.getParameter(R.UNPACK_SKIP_ROWS),ve=R.getParameter(R.UNPACK_SKIP_IMAGES),Ut=E.isCompressedTexture?E.mipmaps[N]:E.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Ut.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ut.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ge),R.pixelStorei(R.UNPACK_SKIP_ROWS,_e),E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Te,we,re,fe,Me,$e,Ut.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Te,we,Ut.width,Ut.height,Me,Ut.data):R.texSubImage2D(R.TEXTURE_2D,N,Te,we,re,fe,Me,$e,Ut),R.pixelStorei(R.UNPACK_ROW_LENGTH,ft),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ln),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ye),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ve),N===0&&I.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(E,I,F=null,O=null,N=0){E.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,E=arguments[2],I=arguments[3],N=arguments[4]||0);let re,fe,ge,_e,Te,we,Me,$e,ft;const dt=E.isCompressedTexture?E.mipmaps[N]:E.image;F!==null?(re=F.max.x-F.min.x,fe=F.max.y-F.min.y,ge=F.max.z-F.min.z,_e=F.min.x,Te=F.min.y,we=F.min.z):(re=dt.width,fe=dt.height,ge=dt.depth,_e=0,Te=0,we=0),O!==null?(Me=O.x,$e=O.y,ft=O.z):(Me=0,$e=0,ft=0);const ln=Re.convert(I.format),Ye=Re.convert(I.type);let ve;if(I.isData3DTexture)Le.setTexture3D(I,0),ve=R.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Le.setTexture2DArray(I,0),ve=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const Ut=R.getParameter(R.UNPACK_ROW_LENGTH),qe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),bn=R.getParameter(R.UNPACK_SKIP_PIXELS),Fr=R.getParameter(R.UNPACK_SKIP_ROWS),un=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,dt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,_e),R.pixelStorei(R.UNPACK_SKIP_ROWS,Te),R.pixelStorei(R.UNPACK_SKIP_IMAGES,we),E.isDataTexture||E.isData3DTexture?R.texSubImage3D(ve,N,Me,$e,ft,re,fe,ge,ln,Ye,dt.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(ve,N,Me,$e,ft,re,fe,ge,ln,dt.data):R.texSubImage3D(ve,N,Me,$e,ft,re,fe,ge,ln,Ye,dt),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ut),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,qe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,bn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Fr),R.pixelStorei(R.UNPACK_SKIP_IMAGES,un),N===0&&I.generateMipmaps&&R.generateMipmap(ve),Se.unbindTexture()},this.initRenderTarget=function(E){Ce.get(E).__webglFramebuffer===void 0&&Le.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Le.setTextureCube(E,0):E.isData3DTexture?Le.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Le.setTexture2DArray(E,0):Le.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,Se.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===dh?"display-p3":"srgb",n.unpackColorSpace=je.workingColorSpace===gu?"display-p3":"srgb"}}class FA extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class OA extends Qo{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sv,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);const Bv=new wn(70,window.innerWidth/window.innerHeight,.01,10);Bv.position.z=1;const Hv=new FA,kA=new Vs(.2,.2,.2),zA=new OA,id=new Jn(kA,zA);Hv.add(id);const xu=new NA({antialias:!0});xu.setSize(window.innerWidth,window.innerHeight);xu.setAnimationLoop(BA);document.body.appendChild(xu.domElement);function BA(t){id.rotation.x=t/2e3,id.rotation.y=t/1e3,xu.render(Hv,Bv)}function HA(){return Pc(Mx,{})}ov(document.getElementById("root")).render(Pc(Jt.StrictMode,{children:Pc(HA,{})}));
