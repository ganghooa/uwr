(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))c(_);new MutationObserver(_=>{for(const d of _)if(d.type==="childList")for(const g of d.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function f(_){const d={};return _.integrity&&(d.integrity=_.integrity),_.referrerPolicy&&(d.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?d.credentials="include":_.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(_){if(_.ep)return;_.ep=!0;const d=f(_);fetch(_.href,d)}})();var Ac={exports:{}},Ca={};var Wd;function uy(){if(Wd)return Ca;Wd=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function f(c,_,d){var g=null;if(d!==void 0&&(g=""+d),_.key!==void 0&&(g=""+_.key),"key"in _){d={};for(var j in _)j!=="key"&&(d[j]=_[j])}else d=_;return _=d.ref,{$$typeof:s,type:c,key:g,ref:_!==void 0?_:null,props:d}}return Ca.Fragment=r,Ca.jsx=f,Ca.jsxs=f,Ca}var $d;function iy(){return $d||($d=1,Ac.exports=uy()),Ac.exports}var b=iy(),Oc={exports:{}},I={};var Fd;function sy(){if(Fd)return I;Fd=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),g=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),Y=Symbol.iterator;function X(p){return p===null||typeof p!="object"?null:(p=Y&&p[Y]||p["@@iterator"],typeof p=="function"?p:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,q={};function Z(p,D,H){this.props=p,this.context=D,this.refs=q,this.updater=H||W}Z.prototype.isReactComponent={},Z.prototype.setState=function(p,D){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,D,"setState")},Z.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function B(){}B.prototype=Z.prototype;function K(p,D,H){this.props=p,this.context=D,this.refs=q,this.updater=H||W}var fe=K.prototype=new B;fe.constructor=K,L(fe,Z.prototype),fe.isPureReactComponent=!0;var ye=Array.isArray;function Se(){}var F={H:null,A:null,T:null,S:null},Ae=Object.prototype.hasOwnProperty;function je(p,D,H){var G=H.ref;return{$$typeof:s,type:p,key:D,ref:G!==void 0?G:null,props:H}}function Ie(p,D){return je(p.type,D,p.props)}function it(p){return typeof p=="object"&&p!==null&&p.$$typeof===s}function Qe(p){var D={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(H){return D[H]})}var Nt=/\/+/g;function Ct(p,D){return typeof p=="object"&&p!==null&&p.key!=null?Qe(""+p.key):D.toString(36)}function st(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(Se,Se):(p.status="pending",p.then(function(D){p.status==="pending"&&(p.status="fulfilled",p.value=D)},function(D){p.status==="pending"&&(p.status="rejected",p.reason=D)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function O(p,D,H,G,P){var le=typeof p;(le==="undefined"||le==="boolean")&&(p=null);var de=!1;if(p===null)de=!0;else switch(le){case"bigint":case"string":case"number":de=!0;break;case"object":switch(p.$$typeof){case s:case r:de=!0;break;case C:return de=p._init,O(de(p._payload),D,H,G,P)}}if(de)return P=P(p),de=G===""?"."+Ct(p,0):G,ye(P)?(H="",de!=null&&(H=de.replace(Nt,"$&/")+"/"),O(P,D,H,"",function(Hn){return Hn})):P!=null&&(it(P)&&(P=Ie(P,H+(P.key==null||p&&p.key===P.key?"":(""+P.key).replace(Nt,"$&/")+"/")+de)),D.push(P)),1;de=0;var $e=G===""?".":G+":";if(ye(p))for(var Me=0;Me<p.length;Me++)G=p[Me],le=$e+Ct(G,Me),de+=O(G,D,H,le,P);else if(Me=X(p),typeof Me=="function")for(p=Me.call(p),Me=0;!(G=p.next()).done;)G=G.value,le=$e+Ct(G,Me++),de+=O(G,D,H,le,P);else if(le==="object"){if(typeof p.then=="function")return O(st(p),D,H,G,P);throw D=String(p),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return de}function U(p,D,H){if(p==null)return p;var G=[],P=0;return O(p,G,"","",function(le){return D.call(H,le,P++)}),G}function V(p){if(p._status===-1){var D=p._result;D=D(),D.then(function(H){(p._status===0||p._status===-1)&&(p._status=1,p._result=H)},function(H){(p._status===0||p._status===-1)&&(p._status=2,p._result=H)}),p._status===-1&&(p._status=0,p._result=D)}if(p._status===1)return p._result.default;throw p._result}var he=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},be={map:U,forEach:function(p,D,H){U(p,function(){D.apply(this,arguments)},H)},count:function(p){var D=0;return U(p,function(){D++}),D},toArray:function(p){return U(p,function(D){return D})||[]},only:function(p){if(!it(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return I.Activity=R,I.Children=be,I.Component=Z,I.Fragment=f,I.Profiler=_,I.PureComponent=K,I.StrictMode=c,I.Suspense=x,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,I.__COMPILER_RUNTIME={__proto__:null,c:function(p){return F.H.useMemoCache(p)}},I.cache=function(p){return function(){return p.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(p,D,H){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var G=L({},p.props),P=p.key;if(D!=null)for(le in D.key!==void 0&&(P=""+D.key),D)!Ae.call(D,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&D.ref===void 0||(G[le]=D[le]);var le=arguments.length-2;if(le===1)G.children=H;else if(1<le){for(var de=Array(le),$e=0;$e<le;$e++)de[$e]=arguments[$e+2];G.children=de}return je(p.type,P,G)},I.createContext=function(p){return p={$$typeof:g,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:d,_context:p},p},I.createElement=function(p,D,H){var G,P={},le=null;if(D!=null)for(G in D.key!==void 0&&(le=""+D.key),D)Ae.call(D,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(P[G]=D[G]);var de=arguments.length-2;if(de===1)P.children=H;else if(1<de){for(var $e=Array(de),Me=0;Me<de;Me++)$e[Me]=arguments[Me+2];P.children=$e}if(p&&p.defaultProps)for(G in de=p.defaultProps,de)P[G]===void 0&&(P[G]=de[G]);return je(p,le,P)},I.createRef=function(){return{current:null}},I.forwardRef=function(p){return{$$typeof:j,render:p}},I.isValidElement=it,I.lazy=function(p){return{$$typeof:C,_payload:{_status:-1,_result:p},_init:V}},I.memo=function(p,D){return{$$typeof:h,type:p,compare:D===void 0?null:D}},I.startTransition=function(p){var D=F.T,H={};F.T=H;try{var G=p(),P=F.S;P!==null&&P(H,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(Se,he)}catch(le){he(le)}finally{D!==null&&H.types!==null&&(D.types=H.types),F.T=D}},I.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},I.use=function(p){return F.H.use(p)},I.useActionState=function(p,D,H){return F.H.useActionState(p,D,H)},I.useCallback=function(p,D){return F.H.useCallback(p,D)},I.useContext=function(p){return F.H.useContext(p)},I.useDebugValue=function(){},I.useDeferredValue=function(p,D){return F.H.useDeferredValue(p,D)},I.useEffect=function(p,D){return F.H.useEffect(p,D)},I.useEffectEvent=function(p){return F.H.useEffectEvent(p)},I.useId=function(){return F.H.useId()},I.useImperativeHandle=function(p,D,H){return F.H.useImperativeHandle(p,D,H)},I.useInsertionEffect=function(p,D){return F.H.useInsertionEffect(p,D)},I.useLayoutEffect=function(p,D){return F.H.useLayoutEffect(p,D)},I.useMemo=function(p,D){return F.H.useMemo(p,D)},I.useOptimistic=function(p,D){return F.H.useOptimistic(p,D)},I.useReducer=function(p,D,H){return F.H.useReducer(p,D,H)},I.useRef=function(p){return F.H.useRef(p)},I.useState=function(p){return F.H.useState(p)},I.useSyncExternalStore=function(p,D,H){return F.H.useSyncExternalStore(p,D,H)},I.useTransition=function(){return F.H.useTransition()},I.version="19.2.3",I}var Id;function Lc(){return Id||(Id=1,Oc.exports=sy()),Oc.exports}var T=Lc(),jc={exports:{}},Ma={},Nc={exports:{}},Cc={};var Pd;function cy(){return Pd||(Pd=1,(function(s){function r(O,U){var V=O.length;O.push(U);e:for(;0<V;){var he=V-1>>>1,be=O[he];if(0<_(be,U))O[he]=U,O[V]=be,V=he;else break e}}function f(O){return O.length===0?null:O[0]}function c(O){if(O.length===0)return null;var U=O[0],V=O.pop();if(V!==U){O[0]=V;e:for(var he=0,be=O.length,p=be>>>1;he<p;){var D=2*(he+1)-1,H=O[D],G=D+1,P=O[G];if(0>_(H,V))G<be&&0>_(P,H)?(O[he]=P,O[G]=V,he=G):(O[he]=H,O[D]=V,he=D);else if(G<be&&0>_(P,V))O[he]=P,O[G]=V,he=G;else break e}}return U}function _(O,U){var V=O.sortIndex-U.sortIndex;return V!==0?V:O.id-U.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;s.unstable_now=function(){return d.now()}}else{var g=Date,j=g.now();s.unstable_now=function(){return g.now()-j}}var x=[],h=[],C=1,R=null,Y=3,X=!1,W=!1,L=!1,q=!1,Z=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function fe(O){for(var U=f(h);U!==null;){if(U.callback===null)c(h);else if(U.startTime<=O)c(h),U.sortIndex=U.expirationTime,r(x,U);else break;U=f(h)}}function ye(O){if(L=!1,fe(O),!W)if(f(x)!==null)W=!0,Se||(Se=!0,Qe());else{var U=f(h);U!==null&&st(ye,U.startTime-O)}}var Se=!1,F=-1,Ae=5,je=-1;function Ie(){return q?!0:!(s.unstable_now()-je<Ae)}function it(){if(q=!1,Se){var O=s.unstable_now();je=O;var U=!0;try{e:{W=!1,L&&(L=!1,B(F),F=-1),X=!0;var V=Y;try{t:{for(fe(O),R=f(x);R!==null&&!(R.expirationTime>O&&Ie());){var he=R.callback;if(typeof he=="function"){R.callback=null,Y=R.priorityLevel;var be=he(R.expirationTime<=O);if(O=s.unstable_now(),typeof be=="function"){R.callback=be,fe(O),U=!0;break t}R===f(x)&&c(x),fe(O)}else c(x);R=f(x)}if(R!==null)U=!0;else{var p=f(h);p!==null&&st(ye,p.startTime-O),U=!1}}break e}finally{R=null,Y=V,X=!1}U=void 0}}finally{U?Qe():Se=!1}}}var Qe;if(typeof K=="function")Qe=function(){K(it)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,Ct=Nt.port2;Nt.port1.onmessage=it,Qe=function(){Ct.postMessage(null)}}else Qe=function(){Z(it,0)};function st(O,U){F=Z(function(){O(s.unstable_now())},U)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return Y},s.unstable_next=function(O){switch(Y){case 1:case 2:case 3:var U=3;break;default:U=Y}var V=Y;Y=U;try{return O()}finally{Y=V}},s.unstable_requestPaint=function(){q=!0},s.unstable_runWithPriority=function(O,U){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var V=Y;Y=O;try{return U()}finally{Y=V}},s.unstable_scheduleCallback=function(O,U,V){var he=s.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?he+V:he):V=he,O){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=V+be,O={id:C++,callback:U,priorityLevel:O,startTime:V,expirationTime:be,sortIndex:-1},V>he?(O.sortIndex=V,r(h,O),f(x)===null&&O===f(h)&&(L?(B(F),F=-1):L=!0,st(ye,V-he))):(O.sortIndex=be,r(x,O),W||X||(W=!0,Se||(Se=!0,Qe()))),O},s.unstable_shouldYield=Ie,s.unstable_wrapCallback=function(O){var U=Y;return function(){var V=Y;Y=U;try{return O.apply(this,arguments)}finally{Y=V}}}})(Cc)),Cc}var e_;function oy(){return e_||(e_=1,Nc.exports=cy()),Nc.exports}var Mc={exports:{}},We={};var t_;function ry(){if(t_)return We;t_=1;var s=Lc();function r(x){var h="https://react.dev/errors/"+x;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)h+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+x+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(r(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},_=Symbol.for("react.portal");function d(x,h,C){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:R==null?null:""+R,children:x,containerInfo:h,implementation:C}}var g=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(x,h){if(x==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,We.createPortal=function(x,h){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return d(x,h,null,C)},We.flushSync=function(x){var h=g.T,C=c.p;try{if(g.T=null,c.p=2,x)return x()}finally{g.T=h,c.p=C,c.d.f()}},We.preconnect=function(x,h){typeof x=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(x,h))},We.prefetchDNS=function(x){typeof x=="string"&&c.d.D(x)},We.preinit=function(x,h){if(typeof x=="string"&&h&&typeof h.as=="string"){var C=h.as,R=j(C,h.crossOrigin),Y=typeof h.integrity=="string"?h.integrity:void 0,X=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;C==="style"?c.d.S(x,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:R,integrity:Y,fetchPriority:X}):C==="script"&&c.d.X(x,{crossOrigin:R,integrity:Y,fetchPriority:X,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},We.preinitModule=function(x,h){if(typeof x=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var C=j(h.as,h.crossOrigin);c.d.M(x,{crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(x)},We.preload=function(x,h){if(typeof x=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var C=h.as,R=j(C,h.crossOrigin);c.d.L(x,C,{crossOrigin:R,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},We.preloadModule=function(x,h){if(typeof x=="string")if(h){var C=j(h.as,h.crossOrigin);c.d.m(x,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(x)},We.requestFormReset=function(x){c.d.r(x)},We.unstable_batchedUpdates=function(x,h){return x(h)},We.useFormState=function(x,h,C){return g.H.useFormState(x,h,C)},We.useFormStatus=function(){return g.H.useHostTransitionStatus()},We.version="19.2.3",We}var l_;function __(){if(l_)return Mc.exports;l_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),Mc.exports=ry(),Mc.exports}var n_;function fy(){if(n_)return Ma;n_=1;var s=oy(),r=Lc(),f=__();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(d(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(c(188));return t!==e?null:e}for(var l=e,n=t;;){var a=l.return;if(a===null)break;var u=a.alternate;if(u===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===l)return x(a),e;if(u===n)return x(a),t;u=u.sibling}throw Error(c(188))}if(l.return!==n.return)l=a,n=u;else{for(var i=!1,o=a.child;o;){if(o===l){i=!0,l=a,n=u;break}if(o===n){i=!0,n=a,l=u;break}o=o.sibling}if(!i){for(o=u.child;o;){if(o===l){i=!0,l=u,n=a;break}if(o===n){i=!0,n=u,l=a;break}o=o.sibling}if(!i)throw Error(c(189))}}if(l.alternate!==n)throw Error(c(190))}if(l.tag!==3)throw Error(c(188));return l.stateNode.current===l?e:t}function C(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=C(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,Y=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),K=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),je=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),it=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=it&&e[it]||e["@@iterator"],typeof e=="function"?e:null)}var Nt=Symbol.for("react.client.reference");function Ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case Z:return"Profiler";case q:return"StrictMode";case ye:return"Suspense";case Se:return"SuspenseList";case je:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case K:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:Ct(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return Ct(e(t))}catch{}}return null}var st=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},he=[],be=-1;function p(e){return{current:e}}function D(e){0>be||(e.current=he[be],he[be]=null,be--)}function H(e,t){be++,he[be]=e.current,e.current=t}var G=p(null),P=p(null),le=p(null),de=p(null);function $e(e,t){switch(H(le,t),H(P,e),H(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gd(t),e=vd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(G),H(G,e)}function Me(){D(G),D(P),D(le)}function Hn(e){e.memoizedState!==null&&H(de,e);var t=G.current,l=vd(t,e.type);t!==l&&(H(P,e),H(G,l))}function La(e){P.current===e&&(D(G),D(P)),de.current===e&&(D(de),Aa._currentValue=V)}var oi,Vc;function Ml(e){if(oi===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);oi=t&&t[1]||"",Vc=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oi+e+Vc}var ri=!1;function fi(e,t){if(!e||ri)return"";ri=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(A){var z=A}Reflect.construct(e,[],w)}else{try{w.call()}catch(A){z=A}e.call(w.prototype)}}else{try{throw Error()}catch(A){z=A}(w=e())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(A){if(A&&z&&typeof A.stack=="string")return[A.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),i=u[0],o=u[1];if(i&&o){var m=i.split(`
`),E=o.split(`
`);for(a=n=0;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;for(;a<E.length&&!E[a].includes("DetermineComponentFrameRoot");)a++;if(n===m.length||a===E.length)for(n=m.length-1,a=E.length-1;1<=n&&0<=a&&m[n]!==E[a];)a--;for(;1<=n&&0<=a;n--,a--)if(m[n]!==E[a]){if(n!==1||a!==1)do if(n--,a--,0>a||m[n]!==E[a]){var N=`
`+m[n].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=n&&0<=a);break}}}finally{ri=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Ml(l):""}function Y_(e,t){switch(e.tag){case 26:case 27:case 5:return Ml(e.type);case 16:return Ml("Lazy");case 13:return e.child!==t&&t!==null?Ml("Suspense Fallback"):Ml("Suspense");case 19:return Ml("SuspenseList");case 0:case 15:return fi(e.type,!1);case 11:return fi(e.type.render,!1);case 1:return fi(e.type,!0);case 31:return Ml("Activity");default:return""}}function Kc(e){try{var t="",l=null;do t+=Y_(e,l),l=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var di=Object.prototype.hasOwnProperty,_i=s.unstable_scheduleCallback,mi=s.unstable_cancelCallback,B_=s.unstable_shouldYield,H_=s.unstable_requestPaint,ct=s.unstable_now,L_=s.unstable_getCurrentPriorityLevel,Jc=s.unstable_ImmediatePriority,Wc=s.unstable_UserBlockingPriority,Xa=s.unstable_NormalPriority,X_=s.unstable_LowPriority,$c=s.unstable_IdlePriority,Q_=s.log,q_=s.unstable_setDisableYieldValue,Ln=null,ot=null;function sl(e){if(typeof Q_=="function"&&q_(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(Ln,e)}catch{}}var rt=Math.clz32?Math.clz32:Z_,G_=Math.log,k_=Math.LN2;function Z_(e){return e>>>=0,e===0?32:31-(G_(e)/k_|0)|0}var Qa=256,qa=262144,Ga=4194304;function wl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ka(e,t,l){var n=e.pendingLanes;if(n===0)return 0;var a=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var o=n&134217727;return o!==0?(n=o&~u,n!==0?a=wl(n):(i&=o,i!==0?a=wl(i):l||(l=o&~e,l!==0&&(a=wl(l))))):(o=n&~u,o!==0?a=wl(o):i!==0?a=wl(i):l||(l=n&~e,l!==0&&(a=wl(l)))),a===0?0:t!==0&&t!==a&&(t&u)===0&&(u=a&-a,l=t&-t,u>=l||u===32&&(l&4194048)!==0)?t:a}function Xn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function V_(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fc(){var e=Ga;return Ga<<=1,(Ga&62914560)===0&&(Ga=4194304),e}function yi(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Qn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function K_(e,t,l,n,a,u){var i=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var o=e.entanglements,m=e.expirationTimes,E=e.hiddenUpdates;for(l=i&~l;0<l;){var N=31-rt(l),w=1<<N;o[N]=0,m[N]=-1;var z=E[N];if(z!==null)for(E[N]=null,N=0;N<z.length;N++){var A=z[N];A!==null&&(A.lane&=-536870913)}l&=~w}n!==0&&Ic(e,n,0),u!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~t))}function Ic(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-rt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|l&261930}function Pc(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var n=31-rt(l),a=1<<n;a&t|e[n]&t&&(e[n]|=t),l&=~a}}function eo(e,t){var l=t&-t;return l=(l&42)!==0?1:hi(l),(l&(e.suspendedLanes|t))!==0?0:l}function hi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function to(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:qd(e.type))}function lo(e,t){var l=U.p;try{return U.p=e,t()}finally{U.p=l}}var cl=Math.random().toString(36).slice(2),ke="__reactFiber$"+cl,Pe="__reactProps$"+cl,Fl="__reactContainer$"+cl,gi="__reactEvents$"+cl,J_="__reactListeners$"+cl,W_="__reactHandles$"+cl,no="__reactResources$"+cl,qn="__reactMarker$"+cl;function vi(e){delete e[ke],delete e[Pe],delete e[gi],delete e[J_],delete e[W_]}function Il(e){var t=e[ke];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Fl]||l[ke]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Rd(e);e!==null;){if(l=e[ke])return l;e=Rd(e)}return t}e=l,l=e.parentNode}return null}function Pl(e){if(e=e[ke]||e[Fl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Gn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function en(e){var t=e[no];return t||(t=e[no]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[qn]=!0}var ao=new Set,uo={};function Dl(e,t){tn(e,t),tn(e+"Capture",t)}function tn(e,t){for(uo[e]=t,e=0;e<t.length;e++)ao.add(t[e])}var $_=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),io={},so={};function F_(e){return di.call(so,e)?!0:di.call(io,e)?!1:$_.test(e)?so[e]=!0:(io[e]=!0,!1)}function Za(e,t,l){if(F_(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Va(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Lt(e,t,l,n){if(n===null)e.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+n)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function co(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function I_(e,t,l){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bi(e){if(!e._valueTracker){var t=co(e)?"checked":"value";e._valueTracker=I_(e,t,""+e[t])}}function oo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),n="";return e&&(n=co(e)?e.checked?"true":"false":e.value),e=n,e!==l?(t.setValue(e),!0):!1}function Ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var P_=/[\n"\\]/g;function vt(e){return e.replace(P_,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function xi(e,t,l,n,a,u,i,o){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Si(e,i,gt(t)):l!=null?Si(e,i,gt(l)):n!=null&&e.removeAttribute("value"),a==null&&u!=null&&(e.defaultChecked=!!u),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+gt(o):e.removeAttribute("name")}function ro(e,t,l,n,a,u,i,o){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){bi(e);return}l=l!=null?""+gt(l):"",t=t!=null?""+gt(t):l,o||t===e.value||(e.value=t),e.defaultValue=t}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=o?e.checked:!!n,e.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),bi(e)}function Si(e,t,l){t==="number"&&Ka(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function ln(e,t,l,n){if(e=e.options,t){t={};for(var a=0;a<l.length;a++)t["$"+l[a]]=!0;for(l=0;l<e.length;l++)a=t.hasOwnProperty("$"+e[l].value),e[l].selected!==a&&(e[l].selected=a),a&&n&&(e[l].defaultSelected=!0)}else{for(l=""+gt(l),t=null,a=0;a<e.length;a++){if(e[a].value===l){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function fo(e,t,l){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+gt(l):""}function _o(e,t,l,n){if(t==null){if(n!=null){if(l!=null)throw Error(c(92));if(st(n)){if(1<n.length)throw Error(c(93));n=n[0]}l=n}l==null&&(l=""),t=l}l=gt(t),e.defaultValue=l,n=e.textContent,n===l&&n!==""&&n!==null&&(e.value=n),bi(e)}function nn(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var em=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mo(e,t,l){var n=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,l):typeof l!="number"||l===0||em.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function yo(e,t,l){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&l[a]!==n&&mo(e,a,n)}else for(var u in t)t.hasOwnProperty(u)&&mo(e,u,t[u])}function Ei(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ja(e){return lm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xt(){}var zi=null;function Ti(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var an=null,un=null;function ho(e){var t=Pl(e);if(t&&(e=t.stateNode)){var l=e[Pe]||null;e:switch(e=t.stateNode,t.type){case"input":if(xi(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var n=l[t];if(n!==e&&n.form===e.form){var a=n[Pe]||null;if(!a)throw Error(c(90));xi(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<l.length;t++)n=l[t],n.form===e.form&&oo(n)}break e;case"textarea":fo(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&ln(e,!!l.multiple,t,!1)}}}var Ri=!1;function po(e,t,l){if(Ri)return e(t,l);Ri=!0;try{var n=e(t);return n}finally{if(Ri=!1,(an!==null||un!==null)&&(Uu(),an&&(t=an,e=un,un=an=null,ho(t),e)))for(t=0;t<e.length;t++)ho(e[t])}}function kn(e,t){var l=e.stateNode;if(l===null)return null;var n=l[Pe]||null;if(n===null)return null;l=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(c(231,t,typeof l));return l}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ai=!1;if(Qt)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){Ai=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{Ai=!1}var ol=null,Oi=null,Wa=null;function go(){if(Wa)return Wa;var e,t=Oi,l=t.length,n,a="value"in ol?ol.value:ol.textContent,u=a.length;for(e=0;e<l&&t[e]===a[e];e++);var i=l-e;for(n=1;n<=i&&t[l-n]===a[u-n];n++);return Wa=a.slice(e,1<n?1-n:void 0)}function $a(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fa(){return!0}function vo(){return!1}function et(e){function t(l,n,a,u,i){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(l=e[o],this[o]=l?l(u):u[o]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Fa:vo,this.isPropagationStopped=vo,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),t}var Ul={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=et(Ul),Vn=R({},Ul,{view:0,detail:0}),nm=et(Vn),ji,Ni,Kn,Pa=R({},Vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(ji=e.screenX-Kn.screenX,Ni=e.screenY-Kn.screenY):Ni=ji=0,Kn=e),ji)},movementY:function(e){return"movementY"in e?e.movementY:Ni}}),bo=et(Pa),am=R({},Pa,{dataTransfer:0}),um=et(am),im=R({},Vn,{relatedTarget:0}),Ci=et(im),sm=R({},Ul,{animationName:0,elapsedTime:0,pseudoElement:0}),cm=et(sm),om=R({},Ul,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rm=et(om),fm=R({},Ul,{data:0}),xo=et(fm),dm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_m={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ym(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mm[e])?!!t[e]:!1}function Mi(){return ym}var hm=R({},Vn,{key:function(e){if(e.key){var t=dm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_m[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mi,charCode:function(e){return e.type==="keypress"?$a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pm=et(hm),gm=R({},Pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),So=et(gm),vm=R({},Vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mi}),bm=et(vm),xm=R({},Ul,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sm=et(xm),Em=R({},Pa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zm=et(Em),Tm=R({},Ul,{newState:0,oldState:0}),Rm=et(Tm),Am=[9,13,27,32],wi=Qt&&"CompositionEvent"in window,Jn=null;Qt&&"documentMode"in document&&(Jn=document.documentMode);var Om=Qt&&"TextEvent"in window&&!Jn,Eo=Qt&&(!wi||Jn&&8<Jn&&11>=Jn),zo=" ",To=!1;function Ro(e,t){switch(e){case"keyup":return Am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ao(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sn=!1;function jm(e,t){switch(e){case"compositionend":return Ao(t);case"keypress":return t.which!==32?null:(To=!0,zo);case"textInput":return e=t.data,e===zo&&To?null:e;default:return null}}function Nm(e,t){if(sn)return e==="compositionend"||!wi&&Ro(e,t)?(e=go(),Wa=Oi=ol=null,sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eo&&t.locale!=="ko"?null:t.data;default:return null}}var Cm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cm[e.type]:t==="textarea"}function jo(e,t,l,n){an?un?un.push(n):un=[n]:an=n,t=qu(t,"onChange"),0<t.length&&(l=new Ia("onChange","change",null,l,n),e.push({event:l,listeners:t}))}var Wn=null,$n=null;function Mm(e){dd(e,0)}function eu(e){var t=Gn(e);if(oo(t))return e}function No(e,t){if(e==="change")return t}var Co=!1;if(Qt){var Di;if(Qt){var Ui="oninput"in document;if(!Ui){var Mo=document.createElement("div");Mo.setAttribute("oninput","return;"),Ui=typeof Mo.oninput=="function"}Di=Ui}else Di=!1;Co=Di&&(!document.documentMode||9<document.documentMode)}function wo(){Wn&&(Wn.detachEvent("onpropertychange",Do),$n=Wn=null)}function Do(e){if(e.propertyName==="value"&&eu($n)){var t=[];jo(t,$n,e,Ti(e)),po(Mm,t)}}function wm(e,t,l){e==="focusin"?(wo(),Wn=t,$n=l,Wn.attachEvent("onpropertychange",Do)):e==="focusout"&&wo()}function Dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return eu($n)}function Um(e,t){if(e==="click")return eu(t)}function Ym(e,t){if(e==="input"||e==="change")return eu(t)}function Bm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Bm;function Fn(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),n=Object.keys(t);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!di.call(t,a)||!ft(e[a],t[a]))return!1}return!0}function Uo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yo(e,t){var l=Uo(e);e=0;for(var n;l;){if(l.nodeType===3){if(n=e+l.textContent.length,e<=t&&n>=t)return{node:l,offset:t-e};e=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Uo(l)}}function Bo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ho(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ka(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Ka(e.document)}return t}function Yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Hm=Qt&&"documentMode"in document&&11>=document.documentMode,cn=null,Bi=null,In=null,Hi=!1;function Lo(e,t,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Hi||cn==null||cn!==Ka(n)||(n=cn,"selectionStart"in n&&Yi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),In&&Fn(In,n)||(In=n,n=qu(Bi,"onSelect"),0<n.length&&(t=new Ia("onSelect","select",null,t,l),e.push({event:t,listeners:n}),t.target=cn)))}function Yl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var on={animationend:Yl("Animation","AnimationEnd"),animationiteration:Yl("Animation","AnimationIteration"),animationstart:Yl("Animation","AnimationStart"),transitionrun:Yl("Transition","TransitionRun"),transitionstart:Yl("Transition","TransitionStart"),transitioncancel:Yl("Transition","TransitionCancel"),transitionend:Yl("Transition","TransitionEnd")},Li={},Xo={};Qt&&(Xo=document.createElement("div").style,"AnimationEvent"in window||(delete on.animationend.animation,delete on.animationiteration.animation,delete on.animationstart.animation),"TransitionEvent"in window||delete on.transitionend.transition);function Bl(e){if(Li[e])return Li[e];if(!on[e])return e;var t=on[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Xo)return Li[e]=t[l];return e}var Qo=Bl("animationend"),qo=Bl("animationiteration"),Go=Bl("animationstart"),Lm=Bl("transitionrun"),Xm=Bl("transitionstart"),Qm=Bl("transitioncancel"),ko=Bl("transitionend"),Zo=new Map,Xi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xi.push("scrollEnd");function Mt(e,t){Zo.set(e,t),Dl(t,[e])}var tu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bt=[],rn=0,Qi=0;function lu(){for(var e=rn,t=Qi=rn=0;t<e;){var l=bt[t];bt[t++]=null;var n=bt[t];bt[t++]=null;var a=bt[t];bt[t++]=null;var u=bt[t];if(bt[t++]=null,n!==null&&a!==null){var i=n.pending;i===null?a.next=a:(a.next=i.next,i.next=a),n.pending=a}u!==0&&Vo(l,a,u)}}function nu(e,t,l,n){bt[rn++]=e,bt[rn++]=t,bt[rn++]=l,bt[rn++]=n,Qi|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function qi(e,t,l,n){return nu(e,t,l,n),au(e)}function Hl(e,t){return nu(e,null,null,t),au(e)}function Vo(e,t,l){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l);for(var a=!1,u=e.return;u!==null;)u.childLanes|=l,n=u.alternate,n!==null&&(n.childLanes|=l),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(a=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,a&&t!==null&&(a=31-rt(l),e=u.hiddenUpdates,n=e[a],n===null?e[a]=[t]:n.push(t),t.lane=l|536870912),u):null}function au(e){if(50<ba)throw ba=0,Fs=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fn={};function qm(e,t,l,n){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,l,n){return new qm(e,t,l,n)}function Gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qt(e,t){var l=e.alternate;return l===null?(l=dt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Ko(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function uu(e,t,l,n,a,u){var i=0;if(n=e,typeof e=="function")Gi(e)&&(i=1);else if(typeof e=="string")i=K0(e,l,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case je:return e=dt(31,l,t,a),e.elementType=je,e.lanes=u,e;case L:return Ll(l.children,a,u,t);case q:i=8,a|=24;break;case Z:return e=dt(12,l,t,a|2),e.elementType=Z,e.lanes=u,e;case ye:return e=dt(13,l,t,a),e.elementType=ye,e.lanes=u,e;case Se:return e=dt(19,l,t,a),e.elementType=Se,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:i=10;break e;case B:i=9;break e;case fe:i=11;break e;case F:i=14;break e;case Ae:i=16,n=null;break e}i=29,l=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=dt(i,l,t,a),t.elementType=e,t.type=n,t.lanes=u,t}function Ll(e,t,l,n){return e=dt(7,e,n,t),e.lanes=l,e}function ki(e,t,l){return e=dt(6,e,null,t),e.lanes=l,e}function Jo(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function Zi(e,t,l){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wo=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var l=Wo.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Kc(t)},Wo.set(e,t),t)}return{value:e,source:t,stack:Kc(t)}}var dn=[],_n=0,iu=null,Pn=0,St=[],Et=0,rl=null,Ut=1,Yt="";function Gt(e,t){dn[_n++]=Pn,dn[_n++]=iu,iu=e,Pn=t}function $o(e,t,l){St[Et++]=Ut,St[Et++]=Yt,St[Et++]=rl,rl=e;var n=Ut;e=Yt;var a=32-rt(n)-1;n&=~(1<<a),l+=1;var u=32-rt(t)+a;if(30<u){var i=a-a%5;u=(n&(1<<i)-1).toString(32),n>>=i,a-=i,Ut=1<<32-rt(t)+a|l<<a|n,Yt=u+e}else Ut=1<<u|l<<a|n,Yt=e}function Vi(e){e.return!==null&&(Gt(e,1),$o(e,1,0))}function Ki(e){for(;e===iu;)iu=dn[--_n],dn[_n]=null,Pn=dn[--_n],dn[_n]=null;for(;e===rl;)rl=St[--Et],St[Et]=null,Yt=St[--Et],St[Et]=null,Ut=St[--Et],St[Et]=null}function Fo(e,t){St[Et++]=Ut,St[Et++]=Yt,St[Et++]=rl,Ut=t.id,Yt=t.overflow,rl=e}var Ze=null,Ee=null,se=!1,fl=null,zt=!1,Ji=Error(c(519));function dl(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ea(xt(t,e)),Ji}function Io(e){var t=e.stateNode,l=e.type,n=e.memoizedProps;switch(t[ke]=e,t[Pe]=n,l){case"dialog":ae("cancel",t),ae("close",t);break;case"iframe":case"object":case"embed":ae("load",t);break;case"video":case"audio":for(l=0;l<Sa.length;l++)ae(Sa[l],t);break;case"source":ae("error",t);break;case"img":case"image":case"link":ae("error",t),ae("load",t);break;case"details":ae("toggle",t);break;case"input":ae("invalid",t),ro(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ae("invalid",t);break;case"textarea":ae("invalid",t),_o(t,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||n.suppressHydrationWarning===!0||hd(t.textContent,l)?(n.popover!=null&&(ae("beforetoggle",t),ae("toggle",t)),n.onScroll!=null&&ae("scroll",t),n.onScrollEnd!=null&&ae("scrollend",t),n.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||dl(e,!0)}function Po(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 31:case 13:zt=!1;return;case 27:case 3:zt=!0;return;default:Ze=Ze.return}}function mn(e){if(e!==Ze)return!1;if(!se)return Po(e),se=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||dc(e.type,e.memoizedProps)),l=!l),l&&Ee&&dl(e),Po(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=Td(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=Td(e)}else t===27?(t=Ee,Rl(e.type)?(e=pc,pc=null,Ee=e):Ee=t):Ee=Ze?Rt(e.stateNode.nextSibling):null;return!0}function Xl(){Ee=Ze=null,se=!1}function Wi(){var e=fl;return e!==null&&(at===null?at=e:at.push.apply(at,e),fl=null),e}function ea(e){fl===null?fl=[e]:fl.push(e)}var $i=p(null),Ql=null,kt=null;function _l(e,t,l){H($i,t._currentValue),t._currentValue=l}function Zt(e){e._currentValue=$i.current,D($i)}function Fi(e,t,l){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===l)break;e=e.return}}function Ii(e,t,l,n){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){var i=a.child;u=u.firstContext;e:for(;u!==null;){var o=u;u=a;for(var m=0;m<t.length;m++)if(o.context===t[m]){u.lanes|=l,o=u.alternate,o!==null&&(o.lanes|=l),Fi(u.return,l,e),n||(i=null);break e}u=o.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(c(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Fi(i,l,e),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===e){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function yn(e,t,l,n){e=null;for(var a=t,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(c(387));if(i=i.memoizedProps,i!==null){var o=a.type;ft(a.pendingProps.value,i.value)||(e!==null?e.push(o):e=[o])}}else if(a===de.current){if(i=a.alternate,i===null)throw Error(c(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Aa):e=[Aa])}a=a.return}e!==null&&Ii(t,e,l,n),t.flags|=262144}function su(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ql(e){Ql=e,kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return er(Ql,e)}function cu(e,t){return Ql===null&&ql(e),er(e,t)}function er(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},kt===null){if(e===null)throw Error(c(308));kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kt=kt.next=t;return l}var Gm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},km=s.unstable_scheduleCallback,Zm=s.unstable_NormalPriority,Ye={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pi(){return{controller:new Gm,data:new Map,refCount:0}}function ta(e){e.refCount--,e.refCount===0&&km(Zm,function(){e.controller.abort()})}var la=null,es=0,hn=0,pn=null;function Vm(e,t){if(la===null){var l=la=[];es=0,hn=nc(),pn={status:"pending",value:void 0,then:function(n){l.push(n)}}}return es++,t.then(tr,tr),t}function tr(){if(--es===0&&la!==null){pn!==null&&(pn.status="fulfilled");var e=la;la=null,hn=0,pn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Km(e,t){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var a=0;a<l.length;a++)(0,l[a])(t)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var lr=O.S;O.S=function(e,t){Xf=ct(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Vm(e,t),lr!==null&&lr(e,t)};var Gl=p(null);function ts(){var e=Gl.current;return e!==null?e:xe.pooledCache}function ou(e,t){t===null?H(Gl,Gl.current):H(Gl,t.pool)}function nr(){var e=ts();return e===null?null:{parent:Ye._currentValue,pool:e}}var gn=Error(c(460)),ls=Error(c(474)),ru=Error(c(542)),fu={then:function(){}};function ar(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ur(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Xt,Xt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sr(e),e;default:if(typeof t.status=="string")t.then(Xt,Xt);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=n}},function(n){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sr(e),e}throw Zl=t,gn}}function kl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Zl=l,gn):l}}var Zl=null;function ir(){if(Zl===null)throw Error(c(459));var e=Zl;return Zl=null,e}function sr(e){if(e===gn||e===ru)throw Error(c(483))}var vn=null,na=0;function du(e){var t=na;return na+=1,vn===null&&(vn=[]),ur(vn,e,t)}function aa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function _u(e,t){throw t.$$typeof===Y?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function cr(e){function t(v,y){if(e){var S=v.deletions;S===null?(v.deletions=[y],v.flags|=16):S.push(y)}}function l(v,y){if(!e)return null;for(;y!==null;)t(v,y),y=y.sibling;return null}function n(v){for(var y=new Map;v!==null;)v.key!==null?y.set(v.key,v):y.set(v.index,v),v=v.sibling;return y}function a(v,y){return v=qt(v,y),v.index=0,v.sibling=null,v}function u(v,y,S){return v.index=S,e?(S=v.alternate,S!==null?(S=S.index,S<y?(v.flags|=67108866,y):S):(v.flags|=67108866,y)):(v.flags|=1048576,y)}function i(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function o(v,y,S,M){return y===null||y.tag!==6?(y=ki(S,v.mode,M),y.return=v,y):(y=a(y,S),y.return=v,y)}function m(v,y,S,M){var J=S.type;return J===L?N(v,y,S.props.children,M,S.key):y!==null&&(y.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ae&&kl(J)===y.type)?(y=a(y,S.props),aa(y,S),y.return=v,y):(y=uu(S.type,S.key,S.props,null,v.mode,M),aa(y,S),y.return=v,y)}function E(v,y,S,M){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=Zi(S,v.mode,M),y.return=v,y):(y=a(y,S.children||[]),y.return=v,y)}function N(v,y,S,M,J){return y===null||y.tag!==7?(y=Ll(S,v.mode,M,J),y.return=v,y):(y=a(y,S),y.return=v,y)}function w(v,y,S){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=ki(""+y,v.mode,S),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case X:return S=uu(y.type,y.key,y.props,null,v.mode,S),aa(S,y),S.return=v,S;case W:return y=Zi(y,v.mode,S),y.return=v,y;case Ae:return y=kl(y),w(v,y,S)}if(st(y)||Qe(y))return y=Ll(y,v.mode,S,null),y.return=v,y;if(typeof y.then=="function")return w(v,du(y),S);if(y.$$typeof===K)return w(v,cu(v,y),S);_u(v,y)}return null}function z(v,y,S,M){var J=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return J!==null?null:o(v,y,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case X:return S.key===J?m(v,y,S,M):null;case W:return S.key===J?E(v,y,S,M):null;case Ae:return S=kl(S),z(v,y,S,M)}if(st(S)||Qe(S))return J!==null?null:N(v,y,S,M,null);if(typeof S.then=="function")return z(v,y,du(S),M);if(S.$$typeof===K)return z(v,y,cu(v,S),M);_u(v,S)}return null}function A(v,y,S,M,J){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return v=v.get(S)||null,o(y,v,""+M,J);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case X:return v=v.get(M.key===null?S:M.key)||null,m(y,v,M,J);case W:return v=v.get(M.key===null?S:M.key)||null,E(y,v,M,J);case Ae:return M=kl(M),A(v,y,S,M,J)}if(st(M)||Qe(M))return v=v.get(S)||null,N(y,v,M,J,null);if(typeof M.then=="function")return A(v,y,S,du(M),J);if(M.$$typeof===K)return A(v,y,S,cu(y,M),J);_u(y,M)}return null}function Q(v,y,S,M){for(var J=null,ce=null,k=y,te=y=0,ie=null;k!==null&&te<S.length;te++){k.index>te?(ie=k,k=null):ie=k.sibling;var oe=z(v,k,S[te],M);if(oe===null){k===null&&(k=ie);break}e&&k&&oe.alternate===null&&t(v,k),y=u(oe,y,te),ce===null?J=oe:ce.sibling=oe,ce=oe,k=ie}if(te===S.length)return l(v,k),se&&Gt(v,te),J;if(k===null){for(;te<S.length;te++)k=w(v,S[te],M),k!==null&&(y=u(k,y,te),ce===null?J=k:ce.sibling=k,ce=k);return se&&Gt(v,te),J}for(k=n(k);te<S.length;te++)ie=A(k,v,te,S[te],M),ie!==null&&(e&&ie.alternate!==null&&k.delete(ie.key===null?te:ie.key),y=u(ie,y,te),ce===null?J=ie:ce.sibling=ie,ce=ie);return e&&k.forEach(function(Cl){return t(v,Cl)}),se&&Gt(v,te),J}function $(v,y,S,M){if(S==null)throw Error(c(151));for(var J=null,ce=null,k=y,te=y=0,ie=null,oe=S.next();k!==null&&!oe.done;te++,oe=S.next()){k.index>te?(ie=k,k=null):ie=k.sibling;var Cl=z(v,k,oe.value,M);if(Cl===null){k===null&&(k=ie);break}e&&k&&Cl.alternate===null&&t(v,k),y=u(Cl,y,te),ce===null?J=Cl:ce.sibling=Cl,ce=Cl,k=ie}if(oe.done)return l(v,k),se&&Gt(v,te),J;if(k===null){for(;!oe.done;te++,oe=S.next())oe=w(v,oe.value,M),oe!==null&&(y=u(oe,y,te),ce===null?J=oe:ce.sibling=oe,ce=oe);return se&&Gt(v,te),J}for(k=n(k);!oe.done;te++,oe=S.next())oe=A(k,v,te,oe.value,M),oe!==null&&(e&&oe.alternate!==null&&k.delete(oe.key===null?te:oe.key),y=u(oe,y,te),ce===null?J=oe:ce.sibling=oe,ce=oe);return e&&k.forEach(function(ay){return t(v,ay)}),se&&Gt(v,te),J}function ve(v,y,S,M){if(typeof S=="object"&&S!==null&&S.type===L&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case X:e:{for(var J=S.key;y!==null;){if(y.key===J){if(J=S.type,J===L){if(y.tag===7){l(v,y.sibling),M=a(y,S.props.children),M.return=v,v=M;break e}}else if(y.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ae&&kl(J)===y.type){l(v,y.sibling),M=a(y,S.props),aa(M,S),M.return=v,v=M;break e}l(v,y);break}else t(v,y);y=y.sibling}S.type===L?(M=Ll(S.props.children,v.mode,M,S.key),M.return=v,v=M):(M=uu(S.type,S.key,S.props,null,v.mode,M),aa(M,S),M.return=v,v=M)}return i(v);case W:e:{for(J=S.key;y!==null;){if(y.key===J)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){l(v,y.sibling),M=a(y,S.children||[]),M.return=v,v=M;break e}else{l(v,y);break}else t(v,y);y=y.sibling}M=Zi(S,v.mode,M),M.return=v,v=M}return i(v);case Ae:return S=kl(S),ve(v,y,S,M)}if(st(S))return Q(v,y,S,M);if(Qe(S)){if(J=Qe(S),typeof J!="function")throw Error(c(150));return S=J.call(S),$(v,y,S,M)}if(typeof S.then=="function")return ve(v,y,du(S),M);if(S.$$typeof===K)return ve(v,y,cu(v,S),M);_u(v,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,y!==null&&y.tag===6?(l(v,y.sibling),M=a(y,S),M.return=v,v=M):(l(v,y),M=ki(S,v.mode,M),M.return=v,v=M),i(v)):l(v,y)}return function(v,y,S,M){try{na=0;var J=ve(v,y,S,M);return vn=null,J}catch(k){if(k===gn||k===ru)throw k;var ce=dt(29,k,null,v.mode);return ce.lanes=M,ce.return=v,ce}}}var Vl=cr(!0),or=cr(!1),ml=!1;function ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function as(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hl(e,t,l){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(re&2)!==0){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=au(e),Vo(e,null,l),t}return nu(e,n,t,l),au(e)}function ua(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Pc(e,l)}}function us(e,t){var l=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?a=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?a=u=t:u=u.next=t}else a=u=t;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var is=!1;function ia(){if(is){var e=pn;if(e!==null)throw e}}function sa(e,t,l,n){is=!1;var a=e.updateQueue;ml=!1;var u=a.firstBaseUpdate,i=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var m=o,E=m.next;m.next=null,i===null?u=E:i.next=E,i=m;var N=e.alternate;N!==null&&(N=N.updateQueue,o=N.lastBaseUpdate,o!==i&&(o===null?N.firstBaseUpdate=E:o.next=E,N.lastBaseUpdate=m))}if(u!==null){var w=a.baseState;i=0,N=E=m=null,o=u;do{var z=o.lane&-536870913,A=z!==o.lane;if(A?(ue&z)===z:(n&z)===z){z!==0&&z===hn&&(is=!0),N!==null&&(N=N.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var Q=e,$=o;z=t;var ve=l;switch($.tag){case 1:if(Q=$.payload,typeof Q=="function"){w=Q.call(ve,w,z);break e}w=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=$.payload,z=typeof Q=="function"?Q.call(ve,w,z):Q,z==null)break e;w=R({},w,z);break e;case 2:ml=!0}}z=o.callback,z!==null&&(e.flags|=64,A&&(e.flags|=8192),A=a.callbacks,A===null?a.callbacks=[z]:A.push(z))}else A={lane:z,tag:o.tag,payload:o.payload,callback:o.callback,next:null},N===null?(E=N=A,m=w):N=N.next=A,i|=z;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;A=o,o=A.next,A.next=null,a.lastBaseUpdate=A,a.shared.pending=null}}while(!0);N===null&&(m=w),a.baseState=m,a.firstBaseUpdate=E,a.lastBaseUpdate=N,u===null&&(a.shared.lanes=0),xl|=i,e.lanes=i,e.memoizedState=w}}function rr(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function fr(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)rr(l[e],t)}var bn=p(null),mu=p(0);function dr(e,t){e=el,H(mu,e),H(bn,t),el=e|t.baseLanes}function ss(){H(mu,el),H(bn,bn.current)}function cs(){el=mu.current,D(bn),D(mu)}var _t=p(null),Tt=null;function pl(e){var t=e.alternate;H(we,we.current&1),H(_t,e),Tt===null&&(t===null||bn.current!==null||t.memoizedState!==null)&&(Tt=e)}function os(e){H(we,we.current),H(_t,e),Tt===null&&(Tt=e)}function _r(e){e.tag===22?(H(we,we.current),H(_t,e),Tt===null&&(Tt=e)):gl()}function gl(){H(we,we.current),H(_t,_t.current)}function mt(e){D(_t),Tt===e&&(Tt=null),D(we)}var we=p(0);function yu(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||yc(l)||hc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vt=0,ee=null,pe=null,Be=null,hu=!1,xn=!1,Kl=!1,pu=0,ca=0,Sn=null,Jm=0;function Ne(){throw Error(c(321))}function rs(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!ft(e[l],t[l]))return!1;return!0}function fs(e,t,l,n,a,u){return Vt=u,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?$r:Rs,Kl=!1,u=l(n,a),Kl=!1,xn&&(u=yr(t,l,n,a)),mr(e),u}function mr(e){O.H=fa;var t=pe!==null&&pe.next!==null;if(Vt=0,Be=pe=ee=null,hu=!1,ca=0,Sn=null,t)throw Error(c(300));e===null||He||(e=e.dependencies,e!==null&&su(e)&&(He=!0))}function yr(e,t,l,n){ee=e;var a=0;do{if(xn&&(Sn=null),ca=0,xn=!1,25<=a)throw Error(c(301));if(a+=1,Be=pe=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}O.H=Fr,u=t(l,n)}while(xn);return u}function Wm(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?oa(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(ee.flags|=1024),t}function ds(){var e=pu!==0;return pu=0,e}function _s(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function ms(e){if(hu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hu=!1}Vt=0,Be=pe=ee=null,xn=!1,ca=pu=0,Sn=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?ee.memoizedState=Be=e:Be=Be.next=e,Be}function De(){if(pe===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=Be===null?ee.memoizedState:Be.next;if(t!==null)Be=t,pe=e;else{if(e===null)throw ee.alternate===null?Error(c(467)):Error(c(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Be===null?ee.memoizedState=Be=e:Be=Be.next=e}return Be}function gu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oa(e){var t=ca;return ca+=1,Sn===null&&(Sn=[]),e=ur(Sn,e,t),t=ee,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?$r:Rs),e}function vu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oa(e);if(e.$$typeof===K)return Ve(e)}throw Error(c(438,String(e)))}function ys(e){var t=null,l=ee.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var n=ee.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=gu(),ee.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),n=0;n<e;n++)l[n]=Ie;return t.index++,l}function Kt(e,t){return typeof t=="function"?t(e):t}function bu(e){var t=De();return hs(t,pe,e)}function hs(e,t,l){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=l;var a=e.baseQueue,u=n.pending;if(u!==null){if(a!==null){var i=a.next;a.next=u.next,u.next=i}t.baseQueue=a=u,n.pending=null}if(u=e.baseState,a===null)e.memoizedState=u;else{t=a.next;var o=i=null,m=null,E=t,N=!1;do{var w=E.lane&-536870913;if(w!==E.lane?(ue&w)===w:(Vt&w)===w){var z=E.revertLane;if(z===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),w===hn&&(N=!0);else if((Vt&z)===z){E=E.next,z===hn&&(N=!0);continue}else w={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},m===null?(o=m=w,i=u):m=m.next=w,ee.lanes|=z,xl|=z;w=E.action,Kl&&l(u,w),u=E.hasEagerState?E.eagerState:l(u,w)}else z={lane:w,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},m===null?(o=m=z,i=u):m=m.next=z,ee.lanes|=w,xl|=w;E=E.next}while(E!==null&&E!==t);if(m===null?i=u:m.next=o,!ft(u,e.memoizedState)&&(He=!0,N&&(l=pn,l!==null)))throw l;e.memoizedState=u,e.baseState=i,e.baseQueue=m,n.lastRenderedState=u}return a===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ps(e){var t=De(),l=t.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=e;var n=l.dispatch,a=l.pending,u=t.memoizedState;if(a!==null){l.pending=null;var i=a=a.next;do u=e(u,i.action),i=i.next;while(i!==a);ft(u,t.memoizedState)||(He=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),l.lastRenderedState=u}return[u,n]}function hr(e,t,l){var n=ee,a=De(),u=se;if(u){if(l===void 0)throw Error(c(407));l=l()}else l=t();var i=!ft((pe||a).memoizedState,l);if(i&&(a.memoizedState=l,He=!0),a=a.queue,bs(vr.bind(null,n,a,e),[e]),a.getSnapshot!==t||i||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,En(9,{destroy:void 0},gr.bind(null,n,a,l,t),null),xe===null)throw Error(c(349));u||(Vt&127)!==0||pr(n,t,l)}return l}function pr(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ee.updateQueue,t===null?(t=gu(),ee.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function gr(e,t,l,n){t.value=l,t.getSnapshot=n,br(t)&&xr(e)}function vr(e,t,l){return l(function(){br(t)&&xr(e)})}function br(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!ft(e,l)}catch{return!0}}function xr(e){var t=Hl(e,2);t!==null&&ut(t,e,2)}function gs(e){var t=Fe();if(typeof e=="function"){var l=e;if(e=l(),Kl){sl(!0);try{l()}finally{sl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function Sr(e,t,l,n){return e.baseState=l,hs(e,pe,typeof n=="function"?n:Kt)}function $m(e,t,l,n,a){if(Eu(e))throw Error(c(485));if(e=t.action,e!==null){var u={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};O.T!==null?l(!0):u.isTransition=!1,n(u),l=t.pending,l===null?(u.next=t.pending=u,Er(t,u)):(u.next=l.next,t.pending=l.next=u)}}function Er(e,t){var l=t.action,n=t.payload,a=e.state;if(t.isTransition){var u=O.T,i={};O.T=i;try{var o=l(a,n),m=O.S;m!==null&&m(i,o),zr(e,t,o)}catch(E){vs(e,t,E)}finally{u!==null&&i.types!==null&&(u.types=i.types),O.T=u}}else try{u=l(a,n),zr(e,t,u)}catch(E){vs(e,t,E)}}function zr(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){Tr(e,t,n)},function(n){return vs(e,t,n)}):Tr(e,t,l)}function Tr(e,t,l){t.status="fulfilled",t.value=l,Rr(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Er(e,l)))}function vs(e,t,l){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=l,Rr(t),t=t.next;while(t!==n)}e.action=null}function Rr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ar(e,t){return t}function Or(e,t){if(se){var l=xe.formState;if(l!==null){e:{var n=ee;if(se){if(Ee){t:{for(var a=Ee,u=zt;a.nodeType!==8;){if(!u){a=null;break t}if(a=Rt(a.nextSibling),a===null){a=null;break t}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){Ee=Rt(a.nextSibling),n=a.data==="F!";break e}}dl(n)}n=!1}n&&(t=l[0])}}return l=Fe(),l.memoizedState=l.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:t},l.queue=n,l=Kr.bind(null,ee,n),n.dispatch=l,n=gs(!1),u=Ts.bind(null,ee,!1,n.queue),n=Fe(),a={state:t,dispatch:null,action:e,pending:null},n.queue=a,l=$m.bind(null,ee,a,u,l),a.dispatch=l,n.memoizedState=e,[t,l,!1]}function jr(e){var t=De();return Nr(t,pe,e)}function Nr(e,t,l){if(t=hs(e,t,Ar)[0],e=bu(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=oa(t)}catch(i){throw i===gn?ru:i}else n=t;t=De();var a=t.queue,u=a.dispatch;return l!==t.memoizedState&&(ee.flags|=2048,En(9,{destroy:void 0},Fm.bind(null,a,l),null)),[n,u,e]}function Fm(e,t){e.action=t}function Cr(e){var t=De(),l=pe;if(l!==null)return Nr(t,l,e);De(),t=t.memoizedState,l=De();var n=l.queue.dispatch;return l.memoizedState=e,[t,n,!1]}function En(e,t,l,n){return e={tag:e,create:l,deps:n,inst:t,next:null},t=ee.updateQueue,t===null&&(t=gu(),ee.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(n=l.next,l.next=e,e.next=n,t.lastEffect=e),e}function Mr(){return De().memoizedState}function xu(e,t,l,n){var a=Fe();ee.flags|=e,a.memoizedState=En(1|t,{destroy:void 0},l,n===void 0?null:n)}function Su(e,t,l,n){var a=De();n=n===void 0?null:n;var u=a.memoizedState.inst;pe!==null&&n!==null&&rs(n,pe.memoizedState.deps)?a.memoizedState=En(t,u,l,n):(ee.flags|=e,a.memoizedState=En(1|t,u,l,n))}function wr(e,t){xu(8390656,8,e,t)}function bs(e,t){Su(2048,8,e,t)}function Im(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=gu(),ee.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Dr(e){var t=De().memoizedState;return Im({ref:t,nextImpl:e}),function(){if((re&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Ur(e,t){return Su(4,2,e,t)}function Yr(e,t){return Su(4,4,e,t)}function Br(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hr(e,t,l){l=l!=null?l.concat([e]):null,Su(4,4,Br.bind(null,t,e),l)}function xs(){}function Lr(e,t){var l=De();t=t===void 0?null:t;var n=l.memoizedState;return t!==null&&rs(t,n[1])?n[0]:(l.memoizedState=[e,t],e)}function Xr(e,t){var l=De();t=t===void 0?null:t;var n=l.memoizedState;if(t!==null&&rs(t,n[1]))return n[0];if(n=e(),Kl){sl(!0);try{e()}finally{sl(!1)}}return l.memoizedState=[n,t],n}function Ss(e,t,l){return l===void 0||(Vt&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=qf(),ee.lanes|=e,xl|=e,l)}function Qr(e,t,l,n){return ft(l,t)?l:bn.current!==null?(e=Ss(e,l,n),ft(e,t)||(He=!0),e):(Vt&42)===0||(Vt&1073741824)!==0&&(ue&261930)===0?(He=!0,e.memoizedState=l):(e=qf(),ee.lanes|=e,xl|=e,t)}function qr(e,t,l,n,a){var u=U.p;U.p=u!==0&&8>u?u:8;var i=O.T,o={};O.T=o,Ts(e,!1,t,l);try{var m=a(),E=O.S;if(E!==null&&E(o,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var N=Km(m,n);ra(e,t,N,pt(e))}else ra(e,t,n,pt(e))}catch(w){ra(e,t,{then:function(){},status:"rejected",reason:w},pt())}finally{U.p=u,i!==null&&o.types!==null&&(i.types=o.types),O.T=i}}function Pm(){}function Es(e,t,l,n){if(e.tag!==5)throw Error(c(476));var a=Gr(e).queue;qr(e,a,t,V,l===null?Pm:function(){return kr(e),l(n)})}function Gr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:V},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kr(e){var t=Gr(e);t.next===null&&(t=e.alternate.memoizedState),ra(e,t.next.queue,{},pt())}function zs(){return Ve(Aa)}function Zr(){return De().memoizedState}function Vr(){return De().memoizedState}function e0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=pt();e=yl(l);var n=hl(t,e,l);n!==null&&(ut(n,t,l),ua(n,t,l)),t={cache:Pi()},e.payload=t;return}t=t.return}}function t0(e,t,l){var n=pt();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Eu(e)?Jr(t,l):(l=qi(e,t,l,n),l!==null&&(ut(l,e,n),Wr(l,t,n)))}function Kr(e,t,l){var n=pt();ra(e,t,l,n)}function ra(e,t,l,n){var a={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))Jr(t,a);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,o=u(i,l);if(a.hasEagerState=!0,a.eagerState=o,ft(o,i))return nu(e,t,a,0),xe===null&&lu(),!1}catch{}if(l=qi(e,t,a,n),l!==null)return ut(l,e,n),Wr(l,t,n),!0}return!1}function Ts(e,t,l,n){if(n={lane:2,revertLane:nc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Eu(e)){if(t)throw Error(c(479))}else t=qi(e,l,n,2),t!==null&&ut(t,e,2)}function Eu(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Jr(e,t){xn=hu=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Wr(e,t,l){if((l&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Pc(e,l)}}var fa={readContext:Ve,use:vu,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};fa.useEffectEvent=Ne;var $r={readContext:Ve,use:vu,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:wr,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,xu(4194308,4,Br.bind(null,t,e),l)},useLayoutEffect:function(e,t){return xu(4194308,4,e,t)},useInsertionEffect:function(e,t){xu(4,2,e,t)},useMemo:function(e,t){var l=Fe();t=t===void 0?null:t;var n=e();if(Kl){sl(!0);try{e()}finally{sl(!1)}}return l.memoizedState=[n,t],n},useReducer:function(e,t,l){var n=Fe();if(l!==void 0){var a=l(t);if(Kl){sl(!0);try{l(t)}finally{sl(!1)}}}else a=t;return n.memoizedState=n.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=t0.bind(null,ee,e),[n.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=gs(e);var t=e.queue,l=Kr.bind(null,ee,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:xs,useDeferredValue:function(e,t){var l=Fe();return Ss(l,e,t)},useTransition:function(){var e=gs(!1);return e=qr.bind(null,ee,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var n=ee,a=Fe();if(se){if(l===void 0)throw Error(c(407));l=l()}else{if(l=t(),xe===null)throw Error(c(349));(ue&127)!==0||pr(n,t,l)}a.memoizedState=l;var u={value:l,getSnapshot:t};return a.queue=u,wr(vr.bind(null,n,u,e),[e]),n.flags|=2048,En(9,{destroy:void 0},gr.bind(null,n,u,l,t),null),l},useId:function(){var e=Fe(),t=xe.identifierPrefix;if(se){var l=Yt,n=Ut;l=(n&~(1<<32-rt(n)-1)).toString(32)+l,t="_"+t+"R_"+l,l=pu++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Jm++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zs,useFormState:Or,useActionState:Or,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Ts.bind(null,ee,!0,l),l.dispatch=t,[e,t]},useMemoCache:ys,useCacheRefresh:function(){return Fe().memoizedState=e0.bind(null,ee)},useEffectEvent:function(e){var t=Fe(),l={impl:e};return t.memoizedState=l,function(){if((re&2)!==0)throw Error(c(440));return l.impl.apply(void 0,arguments)}}},Rs={readContext:Ve,use:vu,useCallback:Lr,useContext:Ve,useEffect:bs,useImperativeHandle:Hr,useInsertionEffect:Ur,useLayoutEffect:Yr,useMemo:Xr,useReducer:bu,useRef:Mr,useState:function(){return bu(Kt)},useDebugValue:xs,useDeferredValue:function(e,t){var l=De();return Qr(l,pe.memoizedState,e,t)},useTransition:function(){var e=bu(Kt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:oa(e),t]},useSyncExternalStore:hr,useId:Zr,useHostTransitionStatus:zs,useFormState:jr,useActionState:jr,useOptimistic:function(e,t){var l=De();return Sr(l,pe,e,t)},useMemoCache:ys,useCacheRefresh:Vr};Rs.useEffectEvent=Dr;var Fr={readContext:Ve,use:vu,useCallback:Lr,useContext:Ve,useEffect:bs,useImperativeHandle:Hr,useInsertionEffect:Ur,useLayoutEffect:Yr,useMemo:Xr,useReducer:ps,useRef:Mr,useState:function(){return ps(Kt)},useDebugValue:xs,useDeferredValue:function(e,t){var l=De();return pe===null?Ss(l,e,t):Qr(l,pe.memoizedState,e,t)},useTransition:function(){var e=ps(Kt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:oa(e),t]},useSyncExternalStore:hr,useId:Zr,useHostTransitionStatus:zs,useFormState:Cr,useActionState:Cr,useOptimistic:function(e,t){var l=De();return pe!==null?Sr(l,pe,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:ys,useCacheRefresh:Vr};Fr.useEffectEvent=Dr;function As(e,t,l,n){t=e.memoizedState,l=l(n,t),l=l==null?t:R({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Os={enqueueSetState:function(e,t,l){e=e._reactInternals;var n=pt(),a=yl(n);a.payload=t,l!=null&&(a.callback=l),t=hl(e,a,n),t!==null&&(ut(t,e,n),ua(t,e,n))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var n=pt(),a=yl(n);a.tag=1,a.payload=t,l!=null&&(a.callback=l),t=hl(e,a,n),t!==null&&(ut(t,e,n),ua(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=pt(),n=yl(l);n.tag=2,t!=null&&(n.callback=t),t=hl(e,n,l),t!==null&&(ut(t,e,l),ua(t,e,l))}};function Ir(e,t,l,n,a,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,u,i):t.prototype&&t.prototype.isPureReactComponent?!Fn(l,n)||!Fn(a,u):!0}function Pr(e,t,l,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,n),t.state!==e&&Os.enqueueReplaceState(t,t.state,null)}function Jl(e,t){var l=t;if("ref"in t){l={};for(var n in t)n!=="ref"&&(l[n]=t[n])}if(e=e.defaultProps){l===t&&(l=R({},l));for(var a in e)l[a]===void 0&&(l[a]=e[a])}return l}function ef(e){tu(e)}function tf(e){console.error(e)}function lf(e){tu(e)}function zu(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function nf(e,t,l){try{var n=e.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function js(e,t,l){return l=yl(l),l.tag=3,l.payload={element:null},l.callback=function(){zu(e,t)},l}function af(e){return e=yl(e),e.tag=3,e}function uf(e,t,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;e.payload=function(){return a(u)},e.callback=function(){nf(t,l,n)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){nf(t,l,n),typeof a!="function"&&(Sl===null?Sl=new Set([this]):Sl.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function l0(e,t,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=l.alternate,t!==null&&yn(t,l,a,!0),l=_t.current,l!==null){switch(l.tag){case 31:case 13:return Tt===null?Yu():l.alternate===null&&Ce===0&&(Ce=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===fu?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([n]):t.add(n),ec(e,n,a)),!1;case 22:return l.flags|=65536,n===fu?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([n]):l.add(n)),ec(e,n,a)),!1}throw Error(c(435,l.tag))}return ec(e,n,a),Yu(),!1}if(se)return t=_t.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==Ji&&(e=Error(c(422),{cause:n}),ea(xt(e,l)))):(n!==Ji&&(t=Error(c(423),{cause:n}),ea(xt(t,l))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,n=xt(n,l),a=js(e.stateNode,n,a),us(e,a),Ce!==4&&(Ce=2)),!1;var u=Error(c(520),{cause:n});if(u=xt(u,l),va===null?va=[u]:va.push(u),Ce!==4&&(Ce=2),t===null)return!0;n=xt(n,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=a&-a,l.lanes|=e,e=js(l.stateNode,n,e),us(l,e),!1;case 1:if(t=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Sl===null||!Sl.has(u))))return l.flags|=65536,a&=-a,l.lanes|=a,a=af(a),uf(a,e,l,n),us(l,a),!1}l=l.return}while(l!==null);return!1}var Ns=Error(c(461)),He=!1;function Ke(e,t,l,n){t.child=e===null?or(t,null,l,n):Vl(t,e.child,l,n)}function sf(e,t,l,n,a){l=l.render;var u=t.ref;if("ref"in n){var i={};for(var o in n)o!=="ref"&&(i[o]=n[o])}else i=n;return ql(t),n=fs(e,t,l,i,u,a),o=ds(),e!==null&&!He?(_s(e,t,a),Jt(e,t,a)):(se&&o&&Vi(t),t.flags|=1,Ke(e,t,n,a),t.child)}function cf(e,t,l,n,a){if(e===null){var u=l.type;return typeof u=="function"&&!Gi(u)&&u.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=u,of(e,t,u,n,a)):(e=uu(l.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Hs(e,a)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:Fn,l(i,n)&&e.ref===t.ref)return Jt(e,t,a)}return t.flags|=1,e=qt(u,n),e.ref=t.ref,e.return=t,t.child=e}function of(e,t,l,n,a){if(e!==null){var u=e.memoizedProps;if(Fn(u,n)&&e.ref===t.ref)if(He=!1,t.pendingProps=n=u,Hs(e,a))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Jt(e,t,a)}return Cs(e,t,l,n,a)}function rf(e,t,l,n){var a=n.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,e!==null){for(n=t.child=e.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~u}else n=0,t.child=null;return ff(e,t,u,l,n)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ou(t,u!==null?u.cachePool:null),u!==null?dr(t,u):ss(),_r(t);else return n=t.lanes=536870912,ff(e,t,u!==null?u.baseLanes|l:l,l,n)}else u!==null?(ou(t,u.cachePool),dr(t,u),gl(),t.memoizedState=null):(e!==null&&ou(t,null),ss(),gl());return Ke(e,t,a,l),t.child}function da(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ff(e,t,l,n,a){var u=ts();return u=u===null?null:{parent:Ye._currentValue,pool:u},t.memoizedState={baseLanes:l,cachePool:u},e!==null&&ou(t,null),ss(),_r(t),e!==null&&yn(e,t,n,!0),t.childLanes=a,null}function Tu(e,t){return t=Au({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function df(e,t,l){return Vl(t,e.child,null,l),e=Tu(t,t.pendingProps),e.flags|=2,mt(t),t.memoizedState=null,e}function n0(e,t,l){var n=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(se){if(n.mode==="hidden")return e=Tu(t,n),t.lanes=536870912,da(null,e);if(os(t),(e=Ee)?(e=zd(e,zt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:rl!==null?{id:Ut,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},l=Jo(e),l.return=t,t.child=l,Ze=t,Ee=null)):e=null,e===null)throw dl(t);return t.lanes=536870912,null}return Tu(t,n)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(os(t),a)if(t.flags&256)t.flags&=-257,t=df(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(He||yn(e,t,l,!1),a=(l&e.childLanes)!==0,He||a){if(n=xe,n!==null&&(i=eo(n,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Hl(e,i),ut(n,e,i),Ns;Yu(),t=df(e,t,l)}else e=u.treeContext,Ee=Rt(i.nextSibling),Ze=t,se=!0,fl=null,zt=!1,e!==null&&Fo(t,e),t=Tu(t,n),t.flags|=4096;return t}return e=qt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ru(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(c(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Cs(e,t,l,n,a){return ql(t),l=fs(e,t,l,n,void 0,a),n=ds(),e!==null&&!He?(_s(e,t,a),Jt(e,t,a)):(se&&n&&Vi(t),t.flags|=1,Ke(e,t,l,a),t.child)}function _f(e,t,l,n,a,u){return ql(t),t.updateQueue=null,l=yr(t,n,l,a),mr(e),n=ds(),e!==null&&!He?(_s(e,t,u),Jt(e,t,u)):(se&&n&&Vi(t),t.flags|=1,Ke(e,t,l,u),t.child)}function mf(e,t,l,n,a){if(ql(t),t.stateNode===null){var u=fn,i=l.contextType;typeof i=="object"&&i!==null&&(u=Ve(i)),u=new l(n,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Os,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=n,u.state=t.memoizedState,u.refs={},ns(t),i=l.contextType,u.context=typeof i=="object"&&i!==null?Ve(i):fn,u.state=t.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(As(t,l,i,n),u.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Os.enqueueReplaceState(u,u.state,null),sa(t,n,u,a),ia(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){u=t.stateNode;var o=t.memoizedProps,m=Jl(l,o);u.props=m;var E=u.context,N=l.contextType;i=fn,typeof N=="object"&&N!==null&&(i=Ve(N));var w=l.getDerivedStateFromProps;N=typeof w=="function"||typeof u.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o||E!==i)&&Pr(t,u,n,i),ml=!1;var z=t.memoizedState;u.state=z,sa(t,n,u,a),ia(),E=t.memoizedState,o||z!==E||ml?(typeof w=="function"&&(As(t,l,w,n),E=t.memoizedState),(m=ml||Ir(t,l,m,n,z,E,i))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=E),u.props=n,u.state=E,u.context=i,n=m):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{u=t.stateNode,as(e,t),i=t.memoizedProps,N=Jl(l,i),u.props=N,w=t.pendingProps,z=u.context,E=l.contextType,m=fn,typeof E=="object"&&E!==null&&(m=Ve(E)),o=l.getDerivedStateFromProps,(E=typeof o=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==w||z!==m)&&Pr(t,u,n,m),ml=!1,z=t.memoizedState,u.state=z,sa(t,n,u,a),ia();var A=t.memoizedState;i!==w||z!==A||ml||e!==null&&e.dependencies!==null&&su(e.dependencies)?(typeof o=="function"&&(As(t,l,o,n),A=t.memoizedState),(N=ml||Ir(t,l,N,n,z,A,m)||e!==null&&e.dependencies!==null&&su(e.dependencies))?(E||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,A,m),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,A,m)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=A),u.props=n,u.state=A,u.context=m,n=N):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),n=!1)}return u=n,Ru(e,t),n=(t.flags&128)!==0,u||n?(u=t.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&n?(t.child=Vl(t,e.child,null,a),t.child=Vl(t,null,l,a)):Ke(e,t,l,a),t.memoizedState=u.state,e=t.child):e=Jt(e,t,a),e}function yf(e,t,l,n){return Xl(),t.flags|=256,Ke(e,t,l,n),t.child}var Ms={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ws(e){return{baseLanes:e,cachePool:nr()}}function Ds(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=ht),e}function hf(e,t,l){var n=t.pendingProps,a=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(we.current&2)!==0),i&&(a=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(a?pl(t):gl(),(e=Ee)?(e=zd(e,zt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:rl!==null?{id:Ut,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},l=Jo(e),l.return=t,t.child=l,Ze=t,Ee=null)):e=null,e===null)throw dl(t);return hc(e)?t.lanes=32:t.lanes=536870912,null}var o=n.children;return n=n.fallback,a?(gl(),a=t.mode,o=Au({mode:"hidden",children:o},a),n=Ll(n,a,l,null),o.return=t,n.return=t,o.sibling=n,t.child=o,n=t.child,n.memoizedState=ws(l),n.childLanes=Ds(e,i,l),t.memoizedState=Ms,da(null,n)):(pl(t),Us(t,o))}var m=e.memoizedState;if(m!==null&&(o=m.dehydrated,o!==null)){if(u)t.flags&256?(pl(t),t.flags&=-257,t=Ys(e,t,l)):t.memoizedState!==null?(gl(),t.child=e.child,t.flags|=128,t=null):(gl(),o=n.fallback,a=t.mode,n=Au({mode:"visible",children:n.children},a),o=Ll(o,a,l,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,Vl(t,e.child,null,l),n=t.child,n.memoizedState=ws(l),n.childLanes=Ds(e,i,l),t.memoizedState=Ms,t=da(null,n));else if(pl(t),hc(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var E=i.dgst;i=E,n=Error(c(419)),n.stack="",n.digest=i,ea({value:n,source:null,stack:null}),t=Ys(e,t,l)}else if(He||yn(e,t,l,!1),i=(l&e.childLanes)!==0,He||i){if(i=xe,i!==null&&(n=eo(i,l),n!==0&&n!==m.retryLane))throw m.retryLane=n,Hl(e,n),ut(i,e,n),Ns;yc(o)||Yu(),t=Ys(e,t,l)}else yc(o)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,Ee=Rt(o.nextSibling),Ze=t,se=!0,fl=null,zt=!1,e!==null&&Fo(t,e),t=Us(t,n.children),t.flags|=4096);return t}return a?(gl(),o=n.fallback,a=t.mode,m=e.child,E=m.sibling,n=qt(m,{mode:"hidden",children:n.children}),n.subtreeFlags=m.subtreeFlags&65011712,E!==null?o=qt(E,o):(o=Ll(o,a,l,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,da(null,n),n=t.child,o=e.child.memoizedState,o===null?o=ws(l):(a=o.cachePool,a!==null?(m=Ye._currentValue,a=a.parent!==m?{parent:m,pool:m}:a):a=nr(),o={baseLanes:o.baseLanes|l,cachePool:a}),n.memoizedState=o,n.childLanes=Ds(e,i,l),t.memoizedState=Ms,da(e.child,n)):(pl(t),l=e.child,e=l.sibling,l=qt(l,{mode:"visible",children:n.children}),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l)}function Us(e,t){return t=Au({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Au(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function Ys(e,t,l){return Vl(t,e.child,null,l),e=Us(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pf(e,t,l){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Fi(e.return,t,l)}function Bs(e,t,l,n,a,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=l,i.tailMode=a,i.treeForkCount=u)}function gf(e,t,l){var n=t.pendingProps,a=n.revealOrder,u=n.tail;n=n.children;var i=we.current,o=(i&2)!==0;if(o?(i=i&1|2,t.flags|=128):i&=1,H(we,i),Ke(e,t,n,l),n=se?Pn:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pf(e,l,t);else if(e.tag===19)pf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(l=t.child,a=null;l!==null;)e=l.alternate,e!==null&&yu(e)===null&&(a=l),l=l.sibling;l=a,l===null?(a=t.child,t.child=null):(a=l.sibling,l.sibling=null),Bs(t,!1,a,l,u,n);break;case"backwards":case"unstable_legacy-backwards":for(l=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&yu(e)===null){t.child=a;break}e=a.sibling,a.sibling=l,l=a,a=e}Bs(t,!0,l,null,u,n);break;case"together":Bs(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Jt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),xl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(yn(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,l=qt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=qt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Hs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&su(e)))}function a0(e,t,l){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),_l(t,Ye,e.memoizedState.cache),Xl();break;case 27:case 5:Hn(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:_l(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,os(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(pl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?hf(e,t,l):(pl(t),e=Jt(e,t,l),e!==null?e.sibling:null);pl(t);break;case 19:var a=(e.flags&128)!==0;if(n=(l&t.childLanes)!==0,n||(yn(e,t,l,!1),n=(l&t.childLanes)!==0),a){if(n)return gf(e,t,l);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),H(we,we.current),n)break;return null;case 22:return t.lanes=0,rf(e,t,l,t.pendingProps);case 24:_l(t,Ye,e.memoizedState.cache)}return Jt(e,t,l)}function vf(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Hs(e,l)&&(t.flags&128)===0)return He=!1,a0(e,t,l);He=(e.flags&131072)!==0}else He=!1,se&&(t.flags&1048576)!==0&&$o(t,Pn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=kl(t.elementType),t.type=e,typeof e=="function")Gi(e)?(n=Jl(e,n),t.tag=1,t=mf(null,t,e,n,l)):(t.tag=0,t=Cs(null,t,e,n,l));else{if(e!=null){var a=e.$$typeof;if(a===fe){t.tag=11,t=sf(null,t,e,n,l);break e}else if(a===F){t.tag=14,t=cf(null,t,e,n,l);break e}}throw t=Ct(e)||e,Error(c(306,t,""))}}return t;case 0:return Cs(e,t,t.type,t.pendingProps,l);case 1:return n=t.type,a=Jl(n,t.pendingProps),mf(e,t,n,a,l);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var u=t.memoizedState;a=u.element,as(e,t),sa(t,n,null,l);var i=t.memoizedState;if(n=i.cache,_l(t,Ye,n),n!==u.cache&&Ii(t,[Ye],l,!0),ia(),n=i.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=yf(e,t,n,l);break e}else if(n!==a){a=xt(Error(c(424)),t),ea(a),t=yf(e,t,n,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ee=Rt(e.firstChild),Ze=t,se=!0,fl=null,zt=!0,l=or(t,null,n,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Xl(),n===a){t=Jt(e,t,l);break e}Ke(e,t,n,l)}t=t.child}return t;case 26:return Ru(e,t),e===null?(l=Nd(t.type,null,t.pendingProps,null))?t.memoizedState=l:se||(l=t.type,e=t.pendingProps,n=Gu(le.current).createElement(l),n[ke]=t,n[Pe]=e,Je(n,l,e),qe(n),t.stateNode=n):t.memoizedState=Nd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Hn(t),e===null&&se&&(n=t.stateNode=Ad(t.type,t.pendingProps,le.current),Ze=t,zt=!0,a=Ee,Rl(t.type)?(pc=a,Ee=Rt(n.firstChild)):Ee=a),Ke(e,t,t.pendingProps.children,l),Ru(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((a=n=Ee)&&(n=D0(n,t.type,t.pendingProps,zt),n!==null?(t.stateNode=n,Ze=t,Ee=Rt(n.firstChild),zt=!1,a=!0):a=!1),a||dl(t)),Hn(t),a=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,n=u.children,dc(a,u)?n=null:i!==null&&dc(a,i)&&(t.flags|=32),t.memoizedState!==null&&(a=fs(e,t,Wm,null,null,l),Aa._currentValue=a),Ru(e,t),Ke(e,t,n,l),t.child;case 6:return e===null&&se&&((e=l=Ee)&&(l=U0(l,t.pendingProps,zt),l!==null?(t.stateNode=l,Ze=t,Ee=null,e=!0):e=!1),e||dl(t)),null;case 13:return hf(e,t,l);case 4:return $e(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Vl(t,null,n,l):Ke(e,t,n,l),t.child;case 11:return sf(e,t,t.type,t.pendingProps,l);case 7:return Ke(e,t,t.pendingProps,l),t.child;case 8:return Ke(e,t,t.pendingProps.children,l),t.child;case 12:return Ke(e,t,t.pendingProps.children,l),t.child;case 10:return n=t.pendingProps,_l(t,t.type,n.value),Ke(e,t,n.children,l),t.child;case 9:return a=t.type._context,n=t.pendingProps.children,ql(t),a=Ve(a),n=n(a),t.flags|=1,Ke(e,t,n,l),t.child;case 14:return cf(e,t,t.type,t.pendingProps,l);case 15:return of(e,t,t.type,t.pendingProps,l);case 19:return gf(e,t,l);case 31:return n0(e,t,l);case 22:return rf(e,t,l,t.pendingProps);case 24:return ql(t),n=Ve(Ye),e===null?(a=ts(),a===null&&(a=xe,u=Pi(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=l),a=u),t.memoizedState={parent:n,cache:a},ns(t),_l(t,Ye,a)):((e.lanes&l)!==0&&(as(e,t),sa(t,null,null,l),ia()),a=e.memoizedState,u=t.memoizedState,a.parent!==n?(a={parent:n,cache:n},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),_l(t,Ye,n)):(n=u.cache,_l(t,Ye,n),n!==a.cache&&Ii(t,[Ye],l,!0))),Ke(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Wt(e){e.flags|=4}function Ls(e,t,l,n,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Vf())e.flags|=8192;else throw Zl=fu,ls}else e.flags&=-16777217}function bf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ud(t))if(Vf())e.flags|=8192;else throw Zl=fu,ls}function Ou(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Fc():536870912,e.lanes|=t,An|=t)}function _a(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,n=0;if(t)for(var a=e.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=l,t}function u0(e,t,l){var n=t.pendingProps;switch(Ki(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return l=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zt(Ye),Me(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(mn(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Wi())),ze(t),null;case 26:var a=t.type,u=t.memoizedState;return e===null?(Wt(t),u!==null?(ze(t),bf(t,u)):(ze(t),Ls(t,a,null,n,l))):u?u!==e.memoizedState?(Wt(t),ze(t),bf(t,u)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Wt(t),ze(t),Ls(t,a,e,n,l)),null;case 27:if(La(t),l=le.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Wt(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return ze(t),null}e=G.current,mn(t)?Io(t):(e=Ad(a,n,l),t.stateNode=e,Wt(t))}return ze(t),null;case 5:if(La(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Wt(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return ze(t),null}if(u=G.current,mn(t))Io(t);else{var i=Gu(le.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}u[ke]=t,u[Pe]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;e:switch(Je(u,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Wt(t)}}return ze(t),Ls(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Wt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,mn(t)){if(e=t.stateNode,l=t.memoizedProps,n=null,a=Ze,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}e[ke]=t,e=!!(e.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||hd(e.nodeValue,l)),e||dl(t,!0)}else e=Gu(e).createTextNode(n),e[ke]=t,t.stateNode=e}return ze(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(n=mn(t),l!==null){if(e===null){if(!n)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ke]=t}else Xl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else l=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(mt(t),t):(mt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return ze(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=mn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(c(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));a[ke]=t}else Xl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),a=!1}else a=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(mt(t),t):(mt(t),null)}return mt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=n!==null,e=e!==null&&e.memoizedState!==null,l&&(n=t.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==a&&(n.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Ou(t,t.updateQueue),ze(t),null);case 4:return Me(),e===null&&sc(t.stateNode.containerInfo),ze(t),null;case 10:return Zt(t.type),ze(t),null;case 19:if(D(we),n=t.memoizedState,n===null)return ze(t),null;if(a=(t.flags&128)!==0,u=n.rendering,u===null)if(a)_a(n,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=yu(e),u!==null){for(t.flags|=128,_a(n,!1),e=u.updateQueue,t.updateQueue=e,Ou(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Ko(l,e),l=l.sibling;return H(we,we.current&1|2),se&&Gt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&ct()>wu&&(t.flags|=128,a=!0,_a(n,!1),t.lanes=4194304)}else{if(!a)if(e=yu(u),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ou(t,e),_a(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!se)return ze(t),null}else 2*ct()-n.renderingStartTime>wu&&l!==536870912&&(t.flags|=128,a=!0,_a(n,!1),t.lanes=4194304);n.isBackwards?(u.sibling=t.child,t.child=u):(e=n.last,e!==null?e.sibling=u:t.child=u,n.last=u)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ct(),e.sibling=null,l=we.current,H(we,a?l&1|2:l&1),se&&Gt(t,n.treeForkCount),e):(ze(t),null);case 22:case 23:return mt(t),cs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(l&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),l=t.updateQueue,l!==null&&Ou(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==l&&(t.flags|=2048),e!==null&&D(Gl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Zt(Ye),ze(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function i0(e,t){switch(Ki(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(Ye),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return La(t),null;case 31:if(t.memoizedState!==null){if(mt(t),t.alternate===null)throw Error(c(340));Xl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Xl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(we),null;case 4:return Me(),null;case 10:return Zt(t.type),null;case 22:case 23:return mt(t),cs(),e!==null&&D(Gl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zt(Ye),null;case 25:return null;default:return null}}function xf(e,t){switch(Ki(t),t.tag){case 3:Zt(Ye),Me();break;case 26:case 27:case 5:La(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&mt(t);break;case 13:mt(t);break;case 19:D(we);break;case 10:Zt(t.type);break;case 22:case 23:mt(t),cs(),e!==null&&D(Gl);break;case 24:Zt(Ye)}}function ma(e,t){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&e)===e){n=void 0;var u=l.create,i=l.inst;n=u(),i.destroy=n}l=l.next}while(l!==a)}}catch(o){me(t,t.return,o)}}function vl(e,t,l){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var u=a.next;n=u;do{if((n.tag&e)===e){var i=n.inst,o=i.destroy;if(o!==void 0){i.destroy=void 0,a=t;var m=l,E=o;try{E()}catch(N){me(a,m,N)}}}n=n.next}while(n!==u)}}catch(N){me(t,t.return,N)}}function Sf(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{fr(t,l)}catch(n){me(e,e.return,n)}}}function Ef(e,t,l){l.props=Jl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(n){me(e,t,n)}}function ya(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof l=="function"?e.refCleanup=l(n):l.current=n}}catch(a){me(e,t,a)}}function Bt(e,t){var l=e.ref,n=e.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){me(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){me(e,t,a)}else l.current=null}function zf(e){var t=e.type,l=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break e;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){me(e,e.return,a)}}function Xs(e,t,l){try{var n=e.stateNode;O0(n,e.type,l,t),n[Pe]=t}catch(a){me(e,e.return,a)}}function Tf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Rl(e.type)||e.tag===4}function Qs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Rl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qs(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Xt));else if(n!==4&&(n===27&&Rl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(qs(e,t,l),e=e.sibling;e!==null;)qs(e,t,l),e=e.sibling}function ju(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(n!==4&&(n===27&&Rl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(ju(e,t,l),e=e.sibling;e!==null;)ju(e,t,l),e=e.sibling}function Rf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var n=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Je(t,n,l),t[ke]=e,t[Pe]=l}catch(u){me(e,e.return,u)}}var $t=!1,Le=!1,Gs=!1,Af=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function s0(e,t){if(e=e.containerInfo,rc=$u,e=Ho(e),Yi(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var a=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var i=0,o=-1,m=-1,E=0,N=0,w=e,z=null;t:for(;;){for(var A;w!==l||a!==0&&w.nodeType!==3||(o=i+a),w!==u||n!==0&&w.nodeType!==3||(m=i+n),w.nodeType===3&&(i+=w.nodeValue.length),(A=w.firstChild)!==null;)z=w,w=A;for(;;){if(w===e)break t;if(z===l&&++E===a&&(o=i),z===u&&++N===n&&(m=i),(A=w.nextSibling)!==null)break;w=z,z=w.parentNode}w=A}l=o===-1||m===-1?null:{start:o,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(fc={focusedElem:e,selectionRange:l},$u=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)a=e[l],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,l=t,a=u.memoizedProps,u=u.memoizedState,n=l.stateNode;try{var Q=Jl(l.type,a);e=n.getSnapshotBeforeUpdate(Q,u),n.__reactInternalSnapshotBeforeUpdate=e}catch($){me(l,l.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)mc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function Of(e,t,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:It(e,l),n&4&&ma(5,l);break;case 1:if(It(e,l),n&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(i){me(l,l.return,i)}else{var a=Jl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){me(l,l.return,i)}}n&64&&Sf(l),n&512&&ya(l,l.return);break;case 3:if(It(e,l),n&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{fr(e,t)}catch(i){me(l,l.return,i)}}break;case 27:t===null&&n&4&&Rf(l);case 26:case 5:It(e,l),t===null&&n&4&&zf(l),n&512&&ya(l,l.return);break;case 12:It(e,l);break;case 31:It(e,l),n&4&&Cf(e,l);break;case 13:It(e,l),n&4&&Mf(e,l),n&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=h0.bind(null,l),Y0(e,l))));break;case 22:if(n=l.memoizedState!==null||$t,!n){t=t!==null&&t.memoizedState!==null||Le,a=$t;var u=Le;$t=n,(Le=t)&&!u?Pt(e,l,(l.subtreeFlags&8772)!==0):It(e,l),$t=a,Le=u}break;case 30:break;default:It(e,l)}}function jf(e){var t=e.alternate;t!==null&&(e.alternate=null,jf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,tt=!1;function Ft(e,t,l){for(l=l.child;l!==null;)Nf(e,t,l),l=l.sibling}function Nf(e,t,l){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ln,l)}catch{}switch(l.tag){case 26:Le||Bt(l,t),Ft(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Le||Bt(l,t);var n=Re,a=tt;Rl(l.type)&&(Re=l.stateNode,tt=!1),Ft(e,t,l),za(l.stateNode),Re=n,tt=a;break;case 5:Le||Bt(l,t);case 6:if(n=Re,a=tt,Re=null,Ft(e,t,l),Re=n,tt=a,Re!==null)if(tt)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(l.stateNode)}catch(u){me(l,t,u)}else try{Re.removeChild(l.stateNode)}catch(u){me(l,t,u)}break;case 18:Re!==null&&(tt?(e=Re,Sd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Un(e)):Sd(Re,l.stateNode));break;case 4:n=Re,a=tt,Re=l.stateNode.containerInfo,tt=!0,Ft(e,t,l),Re=n,tt=a;break;case 0:case 11:case 14:case 15:vl(2,l,t),Le||vl(4,l,t),Ft(e,t,l);break;case 1:Le||(Bt(l,t),n=l.stateNode,typeof n.componentWillUnmount=="function"&&Ef(l,t,n)),Ft(e,t,l);break;case 21:Ft(e,t,l);break;case 22:Le=(n=Le)||l.memoizedState!==null,Ft(e,t,l),Le=n;break;default:Ft(e,t,l)}}function Cf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Un(e)}catch(l){me(t,t.return,l)}}}function Mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Un(e)}catch(l){me(t,t.return,l)}}function c0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Af),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Af),t;default:throw Error(c(435,e.tag))}}function Nu(e,t){var l=c0(e);t.forEach(function(n){if(!l.has(n)){l.add(n);var a=p0.bind(null,e,n);n.then(a,a)}})}function lt(e,t){var l=t.deletions;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n],u=e,i=t,o=i;e:for(;o!==null;){switch(o.tag){case 27:if(Rl(o.type)){Re=o.stateNode,tt=!1;break e}break;case 5:Re=o.stateNode,tt=!1;break e;case 3:case 4:Re=o.stateNode.containerInfo,tt=!0;break e}o=o.return}if(Re===null)throw Error(c(160));Nf(u,i,a),Re=null,tt=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wf(t,e),t=t.sibling}var wt=null;function wf(e,t){var l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:lt(t,e),nt(e),n&4&&(vl(3,e,e.return),ma(3,e),vl(5,e,e.return));break;case 1:lt(t,e),nt(e),n&512&&(Le||l===null||Bt(l,l.return)),n&64&&$t&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var a=wt;if(lt(t,e),nt(e),n&512&&(Le||l===null||Bt(l,l.return)),n&4){var u=l!==null?l.memoizedState:null;if(n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null){e:{n=e.type,l=e.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":u=a.getElementsByTagName("title")[0],(!u||u[qn]||u[ke]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(n),a.head.insertBefore(u,a.querySelector("head > title"))),Je(u,n,l),u[ke]=e,qe(u),n=u;break e;case"link":var i=wd("link","href",a).get(n+(l.href||""));if(i){for(var o=0;o<i.length;o++)if(u=i[o],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(o,1);break t}}u=a.createElement(n),Je(u,n,l),a.head.appendChild(u);break;case"meta":if(i=wd("meta","content",a).get(n+(l.content||""))){for(o=0;o<i.length;o++)if(u=i[o],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(o,1);break t}}u=a.createElement(n),Je(u,n,l),a.head.appendChild(u);break;default:throw Error(c(468,n))}u[ke]=e,qe(u),n=u}e.stateNode=n}else Dd(a,e.type,e.stateNode);else e.stateNode=Md(a,n,e.memoizedProps);else u!==n?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,n===null?Dd(a,e.type,e.stateNode):Md(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Xs(e,e.memoizedProps,l.memoizedProps)}break;case 27:lt(t,e),nt(e),n&512&&(Le||l===null||Bt(l,l.return)),l!==null&&n&4&&Xs(e,e.memoizedProps,l.memoizedProps);break;case 5:if(lt(t,e),nt(e),n&512&&(Le||l===null||Bt(l,l.return)),e.flags&32){a=e.stateNode;try{nn(a,"")}catch(Q){me(e,e.return,Q)}}n&4&&e.stateNode!=null&&(a=e.memoizedProps,Xs(e,a,l!==null?l.memoizedProps:a)),n&1024&&(Gs=!0);break;case 6:if(lt(t,e),nt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,l=e.stateNode;try{l.nodeValue=n}catch(Q){me(e,e.return,Q)}}break;case 3:if(Vu=null,a=wt,wt=ku(t.containerInfo),lt(t,e),wt=a,nt(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try{Un(t.containerInfo)}catch(Q){me(e,e.return,Q)}Gs&&(Gs=!1,Df(e));break;case 4:n=wt,wt=ku(e.stateNode.containerInfo),lt(t,e),nt(e),wt=n;break;case 12:lt(t,e),nt(e);break;case 31:lt(t,e),nt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Nu(e,n)));break;case 13:lt(t,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Mu=ct()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Nu(e,n)));break;case 22:a=e.memoizedState!==null;var m=l!==null&&l.memoizedState!==null,E=$t,N=Le;if($t=E||a,Le=N||m,lt(t,e),Le=N,$t=E,nt(e),n&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(l===null||m||$t||Le||Wl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){m=l=t;try{if(u=m.stateNode,a)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=m.stateNode;var w=m.memoizedProps.style,z=w!=null&&w.hasOwnProperty("display")?w.display:null;o.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(Q){me(m,m.return,Q)}}}else if(t.tag===6){if(l===null){m=t;try{m.stateNode.nodeValue=a?"":m.memoizedProps}catch(Q){me(m,m.return,Q)}}}else if(t.tag===18){if(l===null){m=t;try{var A=m.stateNode;a?Ed(A,!0):Ed(m.stateNode,!1)}catch(Q){me(m,m.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,Nu(e,l))));break;case 19:lt(t,e),nt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Nu(e,n)));break;case 30:break;case 21:break;default:lt(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{for(var l,n=e.return;n!==null;){if(Tf(n)){l=n;break}n=n.return}if(l==null)throw Error(c(160));switch(l.tag){case 27:var a=l.stateNode,u=Qs(e);ju(e,u,a);break;case 5:var i=l.stateNode;l.flags&32&&(nn(i,""),l.flags&=-33);var o=Qs(e);ju(e,o,i);break;case 3:case 4:var m=l.stateNode.containerInfo,E=Qs(e);qs(e,E,m);break;default:throw Error(c(161))}}catch(N){me(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Df(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Df(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function It(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Of(e,t.alternate,t),t=t.sibling}function Wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:vl(4,t,t.return),Wl(t);break;case 1:Bt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Ef(t,t.return,l),Wl(t);break;case 27:za(t.stateNode);case 26:case 5:Bt(t,t.return),Wl(t);break;case 22:t.memoizedState===null&&Wl(t);break;case 30:Wl(t);break;default:Wl(t)}e=e.sibling}}function Pt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,a=e,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:Pt(a,u,l),ma(4,u);break;case 1:if(Pt(a,u,l),n=u,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(E){me(n,n.return,E)}if(n=u,a=n.updateQueue,a!==null){var o=n.stateNode;try{var m=a.shared.hiddenCallbacks;if(m!==null)for(a.shared.hiddenCallbacks=null,a=0;a<m.length;a++)rr(m[a],o)}catch(E){me(n,n.return,E)}}l&&i&64&&Sf(u),ya(u,u.return);break;case 27:Rf(u);case 26:case 5:Pt(a,u,l),l&&n===null&&i&4&&zf(u),ya(u,u.return);break;case 12:Pt(a,u,l);break;case 31:Pt(a,u,l),l&&i&4&&Cf(a,u);break;case 13:Pt(a,u,l),l&&i&4&&Mf(a,u);break;case 22:u.memoizedState===null&&Pt(a,u,l),ya(u,u.return);break;case 30:break;default:Pt(a,u,l)}t=t.sibling}}function ks(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&ta(l))}function Zs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ta(e))}function Dt(e,t,l,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Uf(e,t,l,n),t=t.sibling}function Uf(e,t,l,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,l,n),a&2048&&ma(9,t);break;case 1:Dt(e,t,l,n);break;case 3:Dt(e,t,l,n),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ta(e)));break;case 12:if(a&2048){Dt(e,t,l,n),e=t.stateNode;try{var u=t.memoizedProps,i=u.id,o=u.onPostCommit;typeof o=="function"&&o(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){me(t,t.return,m)}}else Dt(e,t,l,n);break;case 31:Dt(e,t,l,n);break;case 13:Dt(e,t,l,n);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?Dt(e,t,l,n):ha(e,t):u._visibility&2?Dt(e,t,l,n):(u._visibility|=2,zn(e,t,l,n,(t.subtreeFlags&10256)!==0||!1)),a&2048&&ks(i,t);break;case 24:Dt(e,t,l,n),a&2048&&Zs(t.alternate,t);break;default:Dt(e,t,l,n)}}function zn(e,t,l,n,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,i=t,o=l,m=n,E=i.flags;switch(i.tag){case 0:case 11:case 15:zn(u,i,o,m,a),ma(8,i);break;case 23:break;case 22:var N=i.stateNode;i.memoizedState!==null?N._visibility&2?zn(u,i,o,m,a):ha(u,i):(N._visibility|=2,zn(u,i,o,m,a)),a&&E&2048&&ks(i.alternate,i);break;case 24:zn(u,i,o,m,a),a&&E&2048&&Zs(i.alternate,i);break;default:zn(u,i,o,m,a)}t=t.sibling}}function ha(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,n=t,a=n.flags;switch(n.tag){case 22:ha(l,n),a&2048&&ks(n.alternate,n);break;case 24:ha(l,n),a&2048&&Zs(n.alternate,n);break;default:ha(l,n)}t=t.sibling}}var pa=8192;function Tn(e,t,l){if(e.subtreeFlags&pa)for(e=e.child;e!==null;)Yf(e,t,l),e=e.sibling}function Yf(e,t,l){switch(e.tag){case 26:Tn(e,t,l),e.flags&pa&&e.memoizedState!==null&&J0(l,wt,e.memoizedState,e.memoizedProps);break;case 5:Tn(e,t,l);break;case 3:case 4:var n=wt;wt=ku(e.stateNode.containerInfo),Tn(e,t,l),wt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=pa,pa=16777216,Tn(e,t,l),pa=n):Tn(e,t,l));break;default:Tn(e,t,l)}}function Bf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ga(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];Ge=n,Lf(n,e)}Bf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hf(e),e=e.sibling}function Hf(e){switch(e.tag){case 0:case 11:case 15:ga(e),e.flags&2048&&vl(9,e,e.return);break;case 3:ga(e);break;case 12:ga(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Cu(e)):ga(e);break;default:ga(e)}}function Cu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];Ge=n,Lf(n,e)}Bf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:vl(8,t,t.return),Cu(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Cu(t));break;default:Cu(t)}e=e.sibling}}function Lf(e,t){for(;Ge!==null;){var l=Ge;switch(l.tag){case 0:case 11:case 15:vl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ta(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,Ge=n;else e:for(l=e;Ge!==null;){n=Ge;var a=n.sibling,u=n.return;if(jf(n),n===l){Ge=null;break e}if(a!==null){a.return=u,Ge=a;break e}Ge=u}}}var o0={getCacheForType:function(e){var t=Ve(Ye),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Ve(Ye).controller.signal}},r0=typeof WeakMap=="function"?WeakMap:Map,re=0,xe=null,ne=null,ue=0,_e=0,yt=null,bl=!1,Rn=!1,Vs=!1,el=0,Ce=0,xl=0,$l=0,Ks=0,ht=0,An=0,va=null,at=null,Js=!1,Mu=0,Xf=0,wu=1/0,Du=null,Sl=null,Xe=0,El=null,On=null,tl=0,Ws=0,$s=null,Qf=null,ba=0,Fs=null;function pt(){return(re&2)!==0&&ue!==0?ue&-ue:O.T!==null?nc():to()}function qf(){if(ht===0)if((ue&536870912)===0||se){var e=qa;qa<<=1,(qa&3932160)===0&&(qa=262144),ht=e}else ht=536870912;return e=_t.current,e!==null&&(e.flags|=32),ht}function ut(e,t,l){(e===xe&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(jn(e,0),zl(e,ue,ht,!1)),Qn(e,l),((re&2)===0||e!==xe)&&(e===xe&&((re&2)===0&&($l|=l),Ce===4&&zl(e,ue,ht,!1)),Ht(e))}function Gf(e,t,l){if((re&6)!==0)throw Error(c(327));var n=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Xn(e,t),a=n?_0(e,t):Ps(e,t,!0),u=n;do{if(a===0){Rn&&!n&&zl(e,t,0,!1);break}else{if(l=e.current.alternate,u&&!f0(l)){a=Ps(e,t,!1),u=!1;continue}if(a===2){if(u=t,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var o=e;a=va;var m=o.current.memoizedState.isDehydrated;if(m&&(jn(o,i).flags|=256),i=Ps(o,i,!1),i!==2){if(Vs&&!m){o.errorRecoveryDisabledLanes|=u,$l|=u,a=4;break e}u=at,at=a,u!==null&&(at===null?at=u:at.push.apply(at,u))}a=i}if(u=!1,a!==2)continue}}if(a===1){jn(e,0),zl(e,t,0,!0);break}e:{switch(n=e,u=a,u){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:zl(n,t,ht,!bl);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(a=Mu+300-ct(),10<a)){if(zl(n,t,ht,!bl),ka(n,0,!0)!==0)break e;tl=t,n.timeoutHandle=bd(kf.bind(null,n,l,at,Du,Js,t,ht,$l,An,bl,u,"Throttled",-0,0),a);break e}kf(n,l,at,Du,Js,t,ht,$l,An,bl,u,null,-0,0)}}break}while(!0);Ht(e)}function kf(e,t,l,n,a,u,i,o,m,E,N,w,z,A){if(e.timeoutHandle=-1,w=t.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},Yf(t,u,w);var Q=(u&62914560)===u?Mu-ct():(u&4194048)===u?Xf-ct():0;if(Q=W0(w,Q),Q!==null){tl=u,e.cancelPendingCommit=Q(If.bind(null,e,t,u,l,n,a,i,o,m,N,w,null,z,A)),zl(e,u,i,!E);return}}If(e,t,u,l,n,a,i,o,m)}function f0(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],u=a.getSnapshot;a=a.value;try{if(!ft(u(),a))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zl(e,t,l,n){t&=~Ks,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var a=t;0<a;){var u=31-rt(a),i=1<<u;n[u]=-1,a&=~i}l!==0&&Ic(e,l,t)}function Uu(){return(re&6)===0?(xa(0),!1):!0}function Is(){if(ne!==null){if(_e===0)var e=ne.return;else e=ne,kt=Ql=null,ms(e),vn=null,na=0,e=ne;for(;e!==null;)xf(e.alternate,e),e=e.return;ne=null}}function jn(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,C0(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),tl=0,Is(),xe=e,ne=l=qt(e.current,null),ue=t,_e=0,yt=null,bl=!1,Rn=Xn(e,t),Vs=!1,An=ht=Ks=$l=xl=Ce=0,at=va=null,Js=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-rt(n),u=1<<a;t|=e[a],n&=~u}return el=t,lu(),l}function Zf(e,t){ee=null,O.H=fa,t===gn||t===ru?(t=ir(),_e=3):t===ls?(t=ir(),_e=4):_e=t===Ns?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,ne===null&&(Ce=1,zu(e,xt(t,e.current)))}function Vf(){var e=_t.current;return e===null?!0:(ue&4194048)===ue?Tt===null:(ue&62914560)===ue||(ue&536870912)!==0?e===Tt:!1}function Kf(){var e=O.H;return O.H=fa,e===null?fa:e}function Jf(){var e=O.A;return O.A=o0,e}function Yu(){Ce=4,bl||(ue&4194048)!==ue&&_t.current!==null||(Rn=!0),(xl&134217727)===0&&($l&134217727)===0||xe===null||zl(xe,ue,ht,!1)}function Ps(e,t,l){var n=re;re|=2;var a=Kf(),u=Jf();(xe!==e||ue!==t)&&(Du=null,jn(e,t)),t=!1;var i=Ce;e:do try{if(_e!==0&&ne!==null){var o=ne,m=yt;switch(_e){case 8:Is(),i=6;break e;case 3:case 2:case 9:case 6:_t.current===null&&(t=!0);var E=_e;if(_e=0,yt=null,Nn(e,o,m,E),l&&Rn){i=0;break e}break;default:E=_e,_e=0,yt=null,Nn(e,o,m,E)}}d0(),i=Ce;break}catch(N){Zf(e,N)}while(!0);return t&&e.shellSuspendCounter++,kt=Ql=null,re=n,O.H=a,O.A=u,ne===null&&(xe=null,ue=0,lu()),i}function d0(){for(;ne!==null;)Wf(ne)}function _0(e,t){var l=re;re|=2;var n=Kf(),a=Jf();xe!==e||ue!==t?(Du=null,wu=ct()+500,jn(e,t)):Rn=Xn(e,t);e:do try{if(_e!==0&&ne!==null){t=ne;var u=yt;t:switch(_e){case 1:_e=0,yt=null,Nn(e,t,u,1);break;case 2:case 9:if(ar(u)){_e=0,yt=null,$f(t);break}t=function(){_e!==2&&_e!==9||xe!==e||(_e=7),Ht(e)},u.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:ar(u)?(_e=0,yt=null,$f(t)):(_e=0,yt=null,Nn(e,t,u,7));break;case 5:var i=null;switch(ne.tag){case 26:i=ne.memoizedState;case 5:case 27:var o=ne;if(i?Ud(i):o.stateNode.complete){_e=0,yt=null;var m=o.sibling;if(m!==null)ne=m;else{var E=o.return;E!==null?(ne=E,Bu(E)):ne=null}break t}}_e=0,yt=null,Nn(e,t,u,5);break;case 6:_e=0,yt=null,Nn(e,t,u,6);break;case 8:Is(),Ce=6;break e;default:throw Error(c(462))}}m0();break}catch(N){Zf(e,N)}while(!0);return kt=Ql=null,O.H=n,O.A=a,re=l,ne!==null?0:(xe=null,ue=0,lu(),Ce)}function m0(){for(;ne!==null&&!B_();)Wf(ne)}function Wf(e){var t=vf(e.alternate,e,el);e.memoizedProps=e.pendingProps,t===null?Bu(e):ne=t}function $f(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=_f(l,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=_f(l,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:ms(t);default:xf(l,t),t=ne=Ko(t,el),t=vf(l,t,el)}e.memoizedProps=e.pendingProps,t===null?Bu(e):ne=t}function Nn(e,t,l,n){kt=Ql=null,ms(t),vn=null,na=0;var a=t.return;try{if(l0(e,a,t,l,ue)){Ce=1,zu(e,xt(l,e.current)),ne=null;return}}catch(u){if(a!==null)throw ne=a,u;Ce=1,zu(e,xt(l,e.current)),ne=null;return}t.flags&32768?(se||n===1?e=!0:Rn||(ue&536870912)!==0?e=!1:(bl=e=!0,(n===2||n===9||n===3||n===6)&&(n=_t.current,n!==null&&n.tag===13&&(n.flags|=16384))),Ff(t,e)):Bu(t)}function Bu(e){var t=e;do{if((t.flags&32768)!==0){Ff(t,bl);return}e=t.return;var l=u0(t.alternate,t,el);if(l!==null){ne=l;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Ce===0&&(Ce=5)}function Ff(e,t){do{var l=i0(e.alternate,e);if(l!==null){l.flags&=32767,ne=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=l}while(e!==null);Ce=6,ne=null}function If(e,t,l,n,a,u,i,o,m){e.cancelPendingCommit=null;do Hu();while(Xe!==0);if((re&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(u=t.lanes|t.childLanes,u|=Qi,K_(e,l,u,i,o,m),e===xe&&(ne=xe=null,ue=0),On=t,El=e,tl=l,Ws=u,$s=a,Qf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,g0(Xa,function(){return nd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null,a=U.p,U.p=2,i=re,re|=4;try{s0(e,t,l)}finally{re=i,U.p=a,O.T=n}}Xe=1,Pf(),ed(),td()}}function Pf(){if(Xe===1){Xe=0;var e=El,t=On,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=O.T,O.T=null;var n=U.p;U.p=2;var a=re;re|=4;try{wf(t,e);var u=fc,i=Ho(e.containerInfo),o=u.focusedElem,m=u.selectionRange;if(i!==o&&o&&o.ownerDocument&&Bo(o.ownerDocument.documentElement,o)){if(m!==null&&Yi(o)){var E=m.start,N=m.end;if(N===void 0&&(N=E),"selectionStart"in o)o.selectionStart=E,o.selectionEnd=Math.min(N,o.value.length);else{var w=o.ownerDocument||document,z=w&&w.defaultView||window;if(z.getSelection){var A=z.getSelection(),Q=o.textContent.length,$=Math.min(m.start,Q),ve=m.end===void 0?$:Math.min(m.end,Q);!A.extend&&$>ve&&(i=ve,ve=$,$=i);var v=Yo(o,$),y=Yo(o,ve);if(v&&y&&(A.rangeCount!==1||A.anchorNode!==v.node||A.anchorOffset!==v.offset||A.focusNode!==y.node||A.focusOffset!==y.offset)){var S=w.createRange();S.setStart(v.node,v.offset),A.removeAllRanges(),$>ve?(A.addRange(S),A.extend(y.node,y.offset)):(S.setEnd(y.node,y.offset),A.addRange(S))}}}}for(w=[],A=o;A=A.parentNode;)A.nodeType===1&&w.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<w.length;o++){var M=w[o];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}$u=!!rc,fc=rc=null}finally{re=a,U.p=n,O.T=l}}e.current=t,Xe=2}}function ed(){if(Xe===2){Xe=0;var e=El,t=On,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=O.T,O.T=null;var n=U.p;U.p=2;var a=re;re|=4;try{Of(e,t.alternate,t)}finally{re=a,U.p=n,O.T=l}}Xe=3}}function td(){if(Xe===4||Xe===3){Xe=0,H_();var e=El,t=On,l=tl,n=Qf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,On=El=null,ld(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Sl=null),pi(l),t=t.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ln,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=O.T,a=U.p,U.p=2,O.T=null;try{for(var u=e.onRecoverableError,i=0;i<n.length;i++){var o=n[i];u(o.value,{componentStack:o.stack})}}finally{O.T=t,U.p=a}}(tl&3)!==0&&Hu(),Ht(e),a=e.pendingLanes,(l&261930)!==0&&(a&42)!==0?e===Fs?ba++:(ba=0,Fs=e):ba=0,xa(0)}}function ld(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ta(t)))}function Hu(){return Pf(),ed(),td(),nd()}function nd(){if(Xe!==5)return!1;var e=El,t=Ws;Ws=0;var l=pi(tl),n=O.T,a=U.p;try{U.p=32>l?32:l,O.T=null,l=$s,$s=null;var u=El,i=tl;if(Xe=0,On=El=null,tl=0,(re&6)!==0)throw Error(c(331));var o=re;if(re|=4,Hf(u.current),Uf(u,u.current,i,l),re=o,xa(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ln,u)}catch{}return!0}finally{U.p=a,O.T=n,ld(e,t)}}function ad(e,t,l){t=xt(l,t),t=js(e.stateNode,t,2),e=hl(e,t,2),e!==null&&(Qn(e,2),Ht(e))}function me(e,t,l){if(e.tag===3)ad(e,e,l);else for(;t!==null;){if(t.tag===3){ad(t,e,l);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Sl===null||!Sl.has(n))){e=xt(l,e),l=af(2),n=hl(t,l,2),n!==null&&(uf(l,n,t,e),Qn(n,2),Ht(n));break}}t=t.return}}function ec(e,t,l){var n=e.pingCache;if(n===null){n=e.pingCache=new r0;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(l)||(Vs=!0,a.add(l),e=y0.bind(null,e,t,l),t.then(e,e))}function y0(e,t,l){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,xe===e&&(ue&l)===l&&(Ce===4||Ce===3&&(ue&62914560)===ue&&300>ct()-Mu?(re&2)===0&&jn(e,0):Ks|=l,An===ue&&(An=0)),Ht(e)}function ud(e,t){t===0&&(t=Fc()),e=Hl(e,t),e!==null&&(Qn(e,t),Ht(e))}function h0(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),ud(e,l)}function p0(e,t){var l=0;switch(e.tag){case 31:case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),ud(e,l)}function g0(e,t){return _i(e,t)}var Lu=null,Cn=null,tc=!1,Xu=!1,lc=!1,Tl=0;function Ht(e){e!==Cn&&e.next===null&&(Cn===null?Lu=Cn=e:Cn=Cn.next=e),Xu=!0,tc||(tc=!0,b0())}function xa(e,t){if(!lc&&Xu){lc=!0;do for(var l=!1,n=Lu;n!==null;){if(e!==0){var a=n.pendingLanes;if(a===0)var u=0;else{var i=n.suspendedLanes,o=n.pingedLanes;u=(1<<31-rt(42|e)+1)-1,u&=a&~(i&~o),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,od(n,u))}else u=ue,u=ka(n,n===xe?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||Xn(n,u)||(l=!0,od(n,u));n=n.next}while(l);lc=!1}}function v0(){id()}function id(){Xu=tc=!1;var e=0;Tl!==0&&N0()&&(e=Tl);for(var t=ct(),l=null,n=Lu;n!==null;){var a=n.next,u=sd(n,t);u===0?(n.next=null,l===null?Lu=a:l.next=a,a===null&&(Cn=l)):(l=n,(e!==0||(u&3)!==0)&&(Xu=!0)),n=a}Xe!==0&&Xe!==5||xa(e),Tl!==0&&(Tl=0)}function sd(e,t){for(var l=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-rt(u),o=1<<i,m=a[i];m===-1?((o&l)===0||(o&n)!==0)&&(a[i]=V_(o,t)):m<=t&&(e.expiredLanes|=o),u&=~o}if(t=xe,l=ue,l=ka(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,l===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&mi(n),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Xn(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(n!==null&&mi(n),pi(l)){case 2:case 8:l=Wc;break;case 32:l=Xa;break;case 268435456:l=$c;break;default:l=Xa}return n=cd.bind(null,e),l=_i(l,n),e.callbackPriority=t,e.callbackNode=l,t}return n!==null&&n!==null&&mi(n),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Hu()&&e.callbackNode!==l)return null;var n=ue;return n=ka(e,e===xe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Gf(e,n,t),sd(e,ct()),e.callbackNode!=null&&e.callbackNode===l?cd.bind(null,e):null)}function od(e,t){if(Hu())return null;Gf(e,t,!0)}function b0(){M0(function(){(re&6)!==0?_i(Jc,v0):id()})}function nc(){if(Tl===0){var e=hn;e===0&&(e=Qa,Qa<<=1,(Qa&261888)===0&&(Qa=256)),Tl=e}return Tl}function rd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ja(""+e)}function fd(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function x0(e,t,l,n,a){if(t==="submit"&&l&&l.stateNode===a){var u=rd((a[Pe]||null).action),i=n.submitter;i&&(t=(t=i[Pe]||null)?rd(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var o=new Ia("action","action",null,n,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Tl!==0){var m=i?fd(a,i):new FormData(a);Es(l,{pending:!0,data:m,method:a.method,action:u},null,m)}}else typeof u=="function"&&(o.preventDefault(),m=i?fd(a,i):new FormData(a),Es(l,{pending:!0,data:m,method:a.method,action:u},u,m))},currentTarget:a}]})}}for(var ac=0;ac<Xi.length;ac++){var uc=Xi[ac],S0=uc.toLowerCase(),E0=uc[0].toUpperCase()+uc.slice(1);Mt(S0,"on"+E0)}Mt(Qo,"onAnimationEnd"),Mt(qo,"onAnimationIteration"),Mt(Go,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Lm,"onTransitionRun"),Mt(Xm,"onTransitionStart"),Mt(Qm,"onTransitionCancel"),Mt(ko,"onTransitionEnd"),tn("onMouseEnter",["mouseout","mouseover"]),tn("onMouseLeave",["mouseout","mouseover"]),tn("onPointerEnter",["pointerout","pointerover"]),tn("onPointerLeave",["pointerout","pointerover"]),Dl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sa));function dd(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var n=e[l],a=n.event;n=n.listeners;e:{var u=void 0;if(t)for(var i=n.length-1;0<=i;i--){var o=n[i],m=o.instance,E=o.currentTarget;if(o=o.listener,m!==u&&a.isPropagationStopped())break e;u=o,a.currentTarget=E;try{u(a)}catch(N){tu(N)}a.currentTarget=null,u=m}else for(i=0;i<n.length;i++){if(o=n[i],m=o.instance,E=o.currentTarget,o=o.listener,m!==u&&a.isPropagationStopped())break e;u=o,a.currentTarget=E;try{u(a)}catch(N){tu(N)}a.currentTarget=null,u=m}}}}function ae(e,t){var l=t[gi];l===void 0&&(l=t[gi]=new Set);var n=e+"__bubble";l.has(n)||(_d(t,e,2,!1),l.add(n))}function ic(e,t,l){var n=0;t&&(n|=4),_d(l,e,n,t)}var Qu="_reactListening"+Math.random().toString(36).slice(2);function sc(e){if(!e[Qu]){e[Qu]=!0,ao.forEach(function(l){l!=="selectionchange"&&(z0.has(l)||ic(l,!1,e),ic(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qu]||(t[Qu]=!0,ic("selectionchange",!1,t))}}function _d(e,t,l,n){switch(qd(t)){case 2:var a=I0;break;case 8:a=P0;break;default:a=Sc}l=a.bind(null,t,l,e),a=void 0,!Ai||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,l,{capture:!0,passive:a}):e.addEventListener(t,l,!0):a!==void 0?e.addEventListener(t,l,{passive:a}):e.addEventListener(t,l,!1)}function cc(e,t,l,n,a){var u=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var o=n.stateNode.containerInfo;if(o===a)break;if(i===4)for(i=n.return;i!==null;){var m=i.tag;if((m===3||m===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;o!==null;){if(i=Il(o),i===null)return;if(m=i.tag,m===5||m===6||m===26||m===27){n=u=i;continue e}o=o.parentNode}}n=n.return}po(function(){var E=u,N=Ti(l),w=[];e:{var z=Zo.get(e);if(z!==void 0){var A=Ia,Q=e;switch(e){case"keypress":if($a(l)===0)break e;case"keydown":case"keyup":A=pm;break;case"focusin":Q="focus",A=Ci;break;case"focusout":Q="blur",A=Ci;break;case"beforeblur":case"afterblur":A=Ci;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=um;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=bm;break;case Qo:case qo:case Go:A=cm;break;case ko:A=Sm;break;case"scroll":case"scrollend":A=nm;break;case"wheel":A=zm;break;case"copy":case"cut":case"paste":A=rm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=So;break;case"toggle":case"beforetoggle":A=Rm}var $=(t&4)!==0,ve=!$&&(e==="scroll"||e==="scrollend"),v=$?z!==null?z+"Capture":null:z;$=[];for(var y=E,S;y!==null;){var M=y;if(S=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||S===null||v===null||(M=kn(y,v),M!=null&&$.push(Ea(y,M,S))),ve)break;y=y.return}0<$.length&&(z=new A(z,Q,null,l,N),w.push({event:z,listeners:$}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",z&&l!==zi&&(Q=l.relatedTarget||l.fromElement)&&(Il(Q)||Q[Fl]))break e;if((A||z)&&(z=N.window===N?N:(z=N.ownerDocument)?z.defaultView||z.parentWindow:window,A?(Q=l.relatedTarget||l.toElement,A=E,Q=Q?Il(Q):null,Q!==null&&(ve=d(Q),$=Q.tag,Q!==ve||$!==5&&$!==27&&$!==6)&&(Q=null)):(A=null,Q=E),A!==Q)){if($=bo,M="onMouseLeave",v="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&($=So,M="onPointerLeave",v="onPointerEnter",y="pointer"),ve=A==null?z:Gn(A),S=Q==null?z:Gn(Q),z=new $(M,y+"leave",A,l,N),z.target=ve,z.relatedTarget=S,M=null,Il(N)===E&&($=new $(v,y+"enter",Q,l,N),$.target=S,$.relatedTarget=ve,M=$),ve=M,A&&Q)t:{for($=T0,v=A,y=Q,S=0,M=v;M;M=$(M))S++;M=0;for(var J=y;J;J=$(J))M++;for(;0<S-M;)v=$(v),S--;for(;0<M-S;)y=$(y),M--;for(;S--;){if(v===y||y!==null&&v===y.alternate){$=v;break t}v=$(v),y=$(y)}$=null}else $=null;A!==null&&md(w,z,A,$,!1),Q!==null&&ve!==null&&md(w,ve,Q,$,!0)}}e:{if(z=E?Gn(E):window,A=z.nodeName&&z.nodeName.toLowerCase(),A==="select"||A==="input"&&z.type==="file")var ce=No;else if(Oo(z))if(Co)ce=Ym;else{ce=Dm;var k=wm}else A=z.nodeName,!A||A.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?E&&Ei(E.elementType)&&(ce=No):ce=Um;if(ce&&(ce=ce(e,E))){jo(w,ce,l,N);break e}k&&k(e,z,E),e==="focusout"&&E&&z.type==="number"&&E.memoizedProps.value!=null&&Si(z,"number",z.value)}switch(k=E?Gn(E):window,e){case"focusin":(Oo(k)||k.contentEditable==="true")&&(cn=k,Bi=E,In=null);break;case"focusout":In=Bi=cn=null;break;case"mousedown":Hi=!0;break;case"contextmenu":case"mouseup":case"dragend":Hi=!1,Lo(w,l,N);break;case"selectionchange":if(Hm)break;case"keydown":case"keyup":Lo(w,l,N)}var te;if(wi)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else sn?Ro(e,l)&&(ie="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(ie="onCompositionStart");ie&&(Eo&&l.locale!=="ko"&&(sn||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&sn&&(te=go()):(ol=N,Oi="value"in ol?ol.value:ol.textContent,sn=!0)),k=qu(E,ie),0<k.length&&(ie=new xo(ie,e,null,l,N),w.push({event:ie,listeners:k}),te?ie.data=te:(te=Ao(l),te!==null&&(ie.data=te)))),(te=Om?jm(e,l):Nm(e,l))&&(ie=qu(E,"onBeforeInput"),0<ie.length&&(k=new xo("onBeforeInput","beforeinput",null,l,N),w.push({event:k,listeners:ie}),k.data=te)),x0(w,e,E,l,N)}dd(w,t)})}function Ea(e,t,l){return{instance:e,listener:t,currentTarget:l}}function qu(e,t){for(var l=t+"Capture",n=[];e!==null;){var a=e,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=kn(e,l),a!=null&&n.unshift(Ea(e,a,u)),a=kn(e,t),a!=null&&n.push(Ea(e,a,u))),e.tag===3)return n;e=e.return}return[]}function T0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function md(e,t,l,n,a){for(var u=t._reactName,i=[];l!==null&&l!==n;){var o=l,m=o.alternate,E=o.stateNode;if(o=o.tag,m!==null&&m===n)break;o!==5&&o!==26&&o!==27||E===null||(m=E,a?(E=kn(l,u),E!=null&&i.unshift(Ea(l,E,m))):a||(E=kn(l,u),E!=null&&i.push(Ea(l,E,m)))),l=l.return}i.length!==0&&e.push({event:t,listeners:i})}var R0=/\r\n?/g,A0=/\u0000|\uFFFD/g;function yd(e){return(typeof e=="string"?e:""+e).replace(R0,`
`).replace(A0,"")}function hd(e,t){return t=yd(t),yd(e)===t}function ge(e,t,l,n,a,u){switch(l){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||nn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&nn(e,""+n);break;case"className":Va(e,"class",n);break;case"tabIndex":Va(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Va(e,l,n);break;case"style":yo(e,n,u);break;case"data":if(t!=="object"){Va(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Ja(""+n),e.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(t!=="input"&&ge(e,t,"name",a.name,a,null),ge(e,t,"formEncType",a.formEncType,a,null),ge(e,t,"formMethod",a.formMethod,a,null),ge(e,t,"formTarget",a.formTarget,a,null)):(ge(e,t,"encType",a.encType,a,null),ge(e,t,"method",a.method,a,null),ge(e,t,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Ja(""+n),e.setAttribute(l,n);break;case"onClick":n!=null&&(e.onclick=Xt);break;case"onScroll":n!=null&&ae("scroll",e);break;case"onScrollEnd":n!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(c(60));e.innerHTML=l}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}l=Ja(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""+n):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":n===!0?e.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,n):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(l,n):e.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(l):e.setAttribute(l,n);break;case"popover":ae("beforetoggle",e),ae("toggle",e),Za(e,"popover",n);break;case"xlinkActuate":Lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Lt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Lt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Lt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Lt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Za(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=tm.get(l)||l,Za(e,l,n))}}function oc(e,t,l,n,a,u){switch(l){case"style":yo(e,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(c(60));e.innerHTML=l}}break;case"children":typeof n=="string"?nn(e,n):(typeof n=="number"||typeof n=="bigint")&&nn(e,""+n);break;case"onScroll":n!=null&&ae("scroll",e);break;case"onScrollEnd":n!=null&&ae("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uo.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),t=l.slice(2,a?l.length-7:void 0),u=e[Pe]||null,u=u!=null?u[l]:null,typeof u=="function"&&e.removeEventListener(t,u,a),typeof n=="function")){typeof u!="function"&&u!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,n,a);break e}l in e?e[l]=n:n===!0?e.setAttribute(l,""):Za(e,l,n)}}}function Je(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var n=!1,a=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ge(e,t,u,i,l,null)}}a&&ge(e,t,"srcSet",l.srcSet,l,null),n&&ge(e,t,"src",l.src,l,null);return;case"input":ae("invalid",e);var o=u=i=a=null,m=null,E=null;for(n in l)if(l.hasOwnProperty(n)){var N=l[n];if(N!=null)switch(n){case"name":a=N;break;case"type":i=N;break;case"checked":m=N;break;case"defaultChecked":E=N;break;case"value":u=N;break;case"defaultValue":o=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:ge(e,t,n,N,l,null)}}ro(e,u,o,m,E,i,a,!1);return;case"select":ae("invalid",e),n=i=u=null;for(a in l)if(l.hasOwnProperty(a)&&(o=l[a],o!=null))switch(a){case"value":u=o;break;case"defaultValue":i=o;break;case"multiple":n=o;default:ge(e,t,a,o,l,null)}t=u,l=i,e.multiple=!!n,t!=null?ln(e,!!n,t,!1):l!=null&&ln(e,!!n,l,!0);return;case"textarea":ae("invalid",e),u=a=n=null;for(i in l)if(l.hasOwnProperty(i)&&(o=l[i],o!=null))switch(i){case"value":n=o;break;case"defaultValue":a=o;break;case"children":u=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:ge(e,t,i,o,l,null)}_o(e,n,a,u);return;case"option":for(m in l)l.hasOwnProperty(m)&&(n=l[m],n!=null)&&(m==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":ge(e,t,m,n,l,null));return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(n=0;n<Sa.length;n++)ae(Sa[n],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in l)if(l.hasOwnProperty(E)&&(n=l[E],n!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ge(e,t,E,n,l,null)}return;default:if(Ei(t)){for(N in l)l.hasOwnProperty(N)&&(n=l[N],n!==void 0&&oc(e,t,N,n,l,void 0));return}}for(o in l)l.hasOwnProperty(o)&&(n=l[o],n!=null&&ge(e,t,o,n,l,null))}function O0(e,t,l,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,i=null,o=null,m=null,E=null,N=null;for(A in l){var w=l[A];if(l.hasOwnProperty(A)&&w!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":m=w;default:n.hasOwnProperty(A)||ge(e,t,A,null,n,w)}}for(var z in n){var A=n[z];if(w=l[z],n.hasOwnProperty(z)&&(A!=null||w!=null))switch(z){case"type":u=A;break;case"name":a=A;break;case"checked":E=A;break;case"defaultChecked":N=A;break;case"value":i=A;break;case"defaultValue":o=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:A!==w&&ge(e,t,z,A,n,w)}}xi(e,i,o,m,E,N,u,a);return;case"select":A=i=o=z=null;for(u in l)if(m=l[u],l.hasOwnProperty(u)&&m!=null)switch(u){case"value":break;case"multiple":A=m;default:n.hasOwnProperty(u)||ge(e,t,u,null,n,m)}for(a in n)if(u=n[a],m=l[a],n.hasOwnProperty(a)&&(u!=null||m!=null))switch(a){case"value":z=u;break;case"defaultValue":o=u;break;case"multiple":i=u;default:u!==m&&ge(e,t,a,u,n,m)}t=o,l=i,n=A,z!=null?ln(e,!!l,z,!1):!!n!=!!l&&(t!=null?ln(e,!!l,t,!0):ln(e,!!l,l?[]:"",!1));return;case"textarea":A=z=null;for(o in l)if(a=l[o],l.hasOwnProperty(o)&&a!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ge(e,t,o,null,n,a)}for(i in n)if(a=n[i],u=l[i],n.hasOwnProperty(i)&&(a!=null||u!=null))switch(i){case"value":z=a;break;case"defaultValue":A=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(c(91));break;default:a!==u&&ge(e,t,i,a,n,u)}fo(e,z,A);return;case"option":for(var Q in l)z=l[Q],l.hasOwnProperty(Q)&&z!=null&&!n.hasOwnProperty(Q)&&(Q==="selected"?e.selected=!1:ge(e,t,Q,null,n,z));for(m in n)z=n[m],A=l[m],n.hasOwnProperty(m)&&z!==A&&(z!=null||A!=null)&&(m==="selected"?e.selected=z&&typeof z!="function"&&typeof z!="symbol":ge(e,t,m,z,n,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in l)z=l[$],l.hasOwnProperty($)&&z!=null&&!n.hasOwnProperty($)&&ge(e,t,$,null,n,z);for(E in n)if(z=n[E],A=l[E],n.hasOwnProperty(E)&&z!==A&&(z!=null||A!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:ge(e,t,E,z,n,A)}return;default:if(Ei(t)){for(var ve in l)z=l[ve],l.hasOwnProperty(ve)&&z!==void 0&&!n.hasOwnProperty(ve)&&oc(e,t,ve,void 0,n,z);for(N in n)z=n[N],A=l[N],!n.hasOwnProperty(N)||z===A||z===void 0&&A===void 0||oc(e,t,N,z,n,A);return}}for(var v in l)z=l[v],l.hasOwnProperty(v)&&z!=null&&!n.hasOwnProperty(v)&&ge(e,t,v,null,n,z);for(w in n)z=n[w],A=l[w],!n.hasOwnProperty(w)||z===A||z==null&&A==null||ge(e,t,w,z,n,A)}function pd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function j0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var a=l[n],u=a.transferSize,i=a.initiatorType,o=a.duration;if(u&&o&&pd(i)){for(i=0,o=a.responseEnd,n+=1;n<l.length;n++){var m=l[n],E=m.startTime;if(E>o)break;var N=m.transferSize,w=m.initiatorType;N&&pd(w)&&(m=m.responseEnd,i+=N*(m<o?1:(o-E)/(m-E)))}if(--n,t+=8*(u+i)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rc=null,fc=null;function Gu(e){return e.nodeType===9?e:e.ownerDocument}function gd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function dc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _c=null;function N0(){var e=window.event;return e&&e.type==="popstate"?e===_c?!1:(_c=e,!0):(_c=null,!1)}var bd=typeof setTimeout=="function"?setTimeout:void 0,C0=typeof clearTimeout=="function"?clearTimeout:void 0,xd=typeof Promise=="function"?Promise:void 0,M0=typeof queueMicrotask=="function"?queueMicrotask:typeof xd<"u"?function(e){return xd.resolve(null).then(e).catch(w0)}:bd;function w0(e){setTimeout(function(){throw e})}function Rl(e){return e==="head"}function Sd(e,t){var l=t,n=0;do{var a=l.nextSibling;if(e.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"||l==="/&"){if(n===0){e.removeChild(a),Un(t);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")za(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,za(l);for(var u=l.firstChild;u;){var i=u.nextSibling,o=u.nodeName;u[qn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&za(e.ownerDocument.body);l=a}while(l);Un(t)}function Ed(e,t){var l=e;e=0;do{var n=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=n}while(l)}function mc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":mc(l),vi(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function D0(e,t,l,n){for(;e.nodeType===1;){var a=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[qn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function U0(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Rt(e.nextSibling),e===null))return null;return e}function zd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Rt(e.nextSibling),e===null))return null;return e}function yc(e){return e.data==="$?"||e.data==="$~"}function hc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Y0(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var n=function(){t(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var pc=null;function Td(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Rt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Ad(e,t,l){switch(t=Gu(l),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function za(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vi(e)}var At=new Map,Od=new Set;function ku(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ll=U.d;U.d={f:B0,r:H0,D:L0,C:X0,L:Q0,m:q0,X:k0,S:G0,M:Z0};function B0(){var e=ll.f(),t=Uu();return e||t}function H0(e){var t=Pl(e);t!==null&&t.tag===5&&t.type==="form"?kr(t):ll.r(e)}var Mn=typeof document>"u"?null:document;function jd(e,t,l){var n=Mn;if(n&&typeof t=="string"&&t){var a=vt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),Od.has(a)||(Od.add(a),e={rel:e,crossOrigin:l,href:t},n.querySelector(a)===null&&(t=n.createElement("link"),Je(t,"link",e),qe(t),n.head.appendChild(t)))}}function L0(e){ll.D(e),jd("dns-prefetch",e,null)}function X0(e,t){ll.C(e,t),jd("preconnect",e,t)}function Q0(e,t,l){ll.L(e,t,l);var n=Mn;if(n&&e&&t){var a='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+vt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+vt(l.imageSizes)+'"]')):a+='[href="'+vt(e)+'"]';var u=a;switch(t){case"style":u=wn(e);break;case"script":u=Dn(e)}At.has(u)||(e=R({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),At.set(u,e),n.querySelector(a)!==null||t==="style"&&n.querySelector(Ta(u))||t==="script"&&n.querySelector(Ra(u))||(t=n.createElement("link"),Je(t,"link",e),qe(t),n.head.appendChild(t)))}}function q0(e,t){ll.m(e,t);var l=Mn;if(l&&e){var n=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+vt(n)+'"][href="'+vt(e)+'"]',u=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Dn(e)}if(!At.has(u)&&(e=R({rel:"modulepreload",href:e},t),At.set(u,e),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Ra(u)))return}n=l.createElement("link"),Je(n,"link",e),qe(n),l.head.appendChild(n)}}}function G0(e,t,l){ll.S(e,t,l);var n=Mn;if(n&&e){var a=en(n).hoistableStyles,u=wn(e);t=t||"default";var i=a.get(u);if(!i){var o={loading:0,preload:null};if(i=n.querySelector(Ta(u)))o.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},l),(l=At.get(u))&&gc(e,l);var m=i=n.createElement("link");qe(m),Je(m,"link",e),m._p=new Promise(function(E,N){m.onload=E,m.onerror=N}),m.addEventListener("load",function(){o.loading|=1}),m.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Zu(i,t,n)}i={type:"stylesheet",instance:i,count:1,state:o},a.set(u,i)}}}function k0(e,t){ll.X(e,t);var l=Mn;if(l&&e){var n=en(l).hoistableScripts,a=Dn(e),u=n.get(a);u||(u=l.querySelector(Ra(a)),u||(e=R({src:e,async:!0},t),(t=At.get(a))&&vc(e,t),u=l.createElement("script"),qe(u),Je(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Z0(e,t){ll.M(e,t);var l=Mn;if(l&&e){var n=en(l).hoistableScripts,a=Dn(e),u=n.get(a);u||(u=l.querySelector(Ra(a)),u||(e=R({src:e,async:!0,type:"module"},t),(t=At.get(a))&&vc(e,t),u=l.createElement("script"),qe(u),Je(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Nd(e,t,l,n){var a=(a=le.current)?ku(a):null;if(!a)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=wn(l.href),l=en(a).hoistableStyles,n=l.get(t),n||(n={type:"style",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=wn(l.href);var u=en(a).hoistableStyles,i=u.get(e);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=a.querySelector(Ta(e)))&&!u._p&&(i.instance=u,i.state.loading=5),At.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},At.set(e,l),u||V0(a,e,l,i.state))),t&&n===null)throw Error(c(528,""));return i}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Dn(l),l=en(a).hoistableScripts,n=l.get(t),n||(n={type:"script",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function wn(e){return'href="'+vt(e)+'"'}function Ta(e){return'link[rel="stylesheet"]['+e+"]"}function Cd(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function V0(e,t,l,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Je(t,"link",l),qe(t),e.head.appendChild(t))}function Dn(e){return'[src="'+vt(e)+'"]'}function Ra(e){return"script[async]"+e}function Md(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+vt(l.href)+'"]');if(n)return t.instance=n,qe(n),n;var a=R({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),qe(n),Je(n,"style",a),Zu(n,l.precedence,e),t.instance=n;case"stylesheet":a=wn(l.href);var u=e.querySelector(Ta(a));if(u)return t.state.loading|=4,t.instance=u,qe(u),u;n=Cd(l),(a=At.get(a))&&gc(n,a),u=(e.ownerDocument||e).createElement("link"),qe(u);var i=u;return i._p=new Promise(function(o,m){i.onload=o,i.onerror=m}),Je(u,"link",n),t.state.loading|=4,Zu(u,l.precedence,e),t.instance=u;case"script":return u=Dn(l.src),(a=e.querySelector(Ra(u)))?(t.instance=a,qe(a),a):(n=l,(a=At.get(u))&&(n=R({},l),vc(n,a)),e=e.ownerDocument||e,a=e.createElement("script"),qe(a),Je(a,"link",n),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Zu(n,l.precedence,e));return t.instance}function Zu(e,t,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,u=a,i=0;i<n.length;i++){var o=n[i];if(o.dataset.precedence===t)u=o;else if(u!==a)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function gc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function vc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vu=null;function wd(e,t,l){if(Vu===null){var n=new Map,a=Vu=new Map;a.set(l,n)}else a=Vu,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(e))return n;for(n.set(e,null),l=l.getElementsByTagName(e),a=0;a<l.length;a++){var u=l[a];if(!(u[qn]||u[ke]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=e+i;var o=n.get(i);o?o.push(u):n.set(i,[u])}}return n}function Dd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function K0(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ud(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function J0(e,t,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var a=wn(n.href),u=t.querySelector(Ta(a));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ku.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=u,qe(u);return}u=t.ownerDocument||t,n=Cd(n),(a=At.get(a))&&gc(n,a),u=u.createElement("link"),qe(u);var i=u;i._p=new Promise(function(o,m){i.onload=o,i.onerror=m}),Je(u,"link",n),l.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Ku.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var bc=0;function W0(e,t){return e.stylesheets&&e.count===0&&Wu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var n=setTimeout(function(){if(e.stylesheets&&Wu(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&bc===0&&(bc=62500*j0());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wu(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>bc?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function Ku(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ju=null;function Wu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ju=new Map,t.forEach($0,e),Ju=null,Ku.call(e))}function $0(e,t){if(!(t.state.loading&4)){var l=Ju.get(e);if(l)var n=l.get(null);else{l=new Map,Ju.set(e,l);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var i=a[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),n=i)}n&&l.set(null,n)}a=t.instance,i=a.getAttribute("data-precedence"),u=l.get(i)||n,u===n&&l.set(null,a),l.set(i,a),this.count++,n=Ku.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),u?u.parentNode.insertBefore(a,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Aa={$$typeof:K,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function F0(e,t,l,n,a,u,i,o,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.hiddenUpdates=yi(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Yd(e,t,l,n,a,u,i,o,m,E,N,w){return e=new F0(e,t,l,i,m,E,N,w,o),t=1,u===!0&&(t|=24),u=dt(3,null,null,t),e.current=u,u.stateNode=e,t=Pi(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:n,isDehydrated:l,cache:t},ns(u),e}function Bd(e){return e?(e=fn,e):fn}function Hd(e,t,l,n,a,u){a=Bd(a),n.context===null?n.context=a:n.pendingContext=a,n=yl(t),n.payload={element:l},u=u===void 0?null:u,u!==null&&(n.callback=u),l=hl(e,n,t),l!==null&&(ut(l,e,t),ua(l,e,t))}function Ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function xc(e,t){Ld(e,t),(e=e.alternate)&&Ld(e,t)}function Xd(e){if(e.tag===13||e.tag===31){var t=Hl(e,67108864);t!==null&&ut(t,e,67108864),xc(e,67108864)}}function Qd(e){if(e.tag===13||e.tag===31){var t=pt();t=hi(t);var l=Hl(e,t);l!==null&&ut(l,e,t),xc(e,t)}}var $u=!0;function I0(e,t,l,n){var a=O.T;O.T=null;var u=U.p;try{U.p=2,Sc(e,t,l,n)}finally{U.p=u,O.T=a}}function P0(e,t,l,n){var a=O.T;O.T=null;var u=U.p;try{U.p=8,Sc(e,t,l,n)}finally{U.p=u,O.T=a}}function Sc(e,t,l,n){if($u){var a=Ec(n);if(a===null)cc(e,t,n,Fu,l),Gd(e,n);else if(ty(a,e,t,l,n))n.stopPropagation();else if(Gd(e,n),t&4&&-1<ey.indexOf(e)){for(;a!==null;){var u=Pl(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=wl(u.pendingLanes);if(i!==0){var o=u;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var m=1<<31-rt(i);o.entanglements[1]|=m,i&=~m}Ht(u),(re&6)===0&&(wu=ct()+500,xa(0))}}break;case 31:case 13:o=Hl(u,2),o!==null&&ut(o,u,2),Uu(),xc(u,2)}if(u=Ec(n),u===null&&cc(e,t,n,Fu,l),u===a)break;a=u}a!==null&&n.stopPropagation()}else cc(e,t,n,null,l)}}function Ec(e){return e=Ti(e),zc(e)}var Fu=null;function zc(e){if(Fu=null,e=Il(e),e!==null){var t=d(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=g(t),e!==null)return e;e=null}else if(l===31){if(e=j(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fu=e,null}function qd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(L_()){case Jc:return 2;case Wc:return 8;case Xa:case X_:return 32;case $c:return 268435456;default:return 32}default:return 32}}var Tc=!1,Al=null,Ol=null,jl=null,Oa=new Map,ja=new Map,Nl=[],ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gd(e,t){switch(e){case"focusin":case"focusout":Al=null;break;case"dragenter":case"dragleave":Ol=null;break;case"mouseover":case"mouseout":jl=null;break;case"pointerover":case"pointerout":Oa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(t.pointerId)}}function Na(e,t,l,n,a,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:l,eventSystemFlags:n,nativeEvent:u,targetContainers:[a]},t!==null&&(t=Pl(t),t!==null&&Xd(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ty(e,t,l,n,a){switch(t){case"focusin":return Al=Na(Al,e,t,l,n,a),!0;case"dragenter":return Ol=Na(Ol,e,t,l,n,a),!0;case"mouseover":return jl=Na(jl,e,t,l,n,a),!0;case"pointerover":var u=a.pointerId;return Oa.set(u,Na(Oa.get(u)||null,e,t,l,n,a)),!0;case"gotpointercapture":return u=a.pointerId,ja.set(u,Na(ja.get(u)||null,e,t,l,n,a)),!0}return!1}function kd(e){var t=Il(e.target);if(t!==null){var l=d(t);if(l!==null){if(t=l.tag,t===13){if(t=g(l),t!==null){e.blockedOn=t,lo(e.priority,function(){Qd(l)});return}}else if(t===31){if(t=j(l),t!==null){e.blockedOn=t,lo(e.priority,function(){Qd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Iu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Ec(e.nativeEvent);if(l===null){l=e.nativeEvent;var n=new l.constructor(l.type,l);zi=n,l.target.dispatchEvent(n),zi=null}else return t=Pl(l),t!==null&&Xd(t),e.blockedOn=l,!1;t.shift()}return!0}function Zd(e,t,l){Iu(e)&&l.delete(t)}function ly(){Tc=!1,Al!==null&&Iu(Al)&&(Al=null),Ol!==null&&Iu(Ol)&&(Ol=null),jl!==null&&Iu(jl)&&(jl=null),Oa.forEach(Zd),ja.forEach(Zd)}function Pu(e,t){e.blockedOn===t&&(e.blockedOn=null,Tc||(Tc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ly)))}var ei=null;function Vd(e){ei!==e&&(ei=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ei===e&&(ei=null);for(var t=0;t<e.length;t+=3){var l=e[t],n=e[t+1],a=e[t+2];if(typeof n!="function"){if(zc(n||l)===null)continue;break}var u=Pl(l);u!==null&&(e.splice(t,3),t-=3,Es(u,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function Un(e){function t(m){return Pu(m,e)}Al!==null&&Pu(Al,e),Ol!==null&&Pu(Ol,e),jl!==null&&Pu(jl,e),Oa.forEach(t),ja.forEach(t);for(var l=0;l<Nl.length;l++){var n=Nl[l];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Nl.length&&(l=Nl[0],l.blockedOn===null);)kd(l),l.blockedOn===null&&Nl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],u=l[n+1],i=a[Pe]||null;if(typeof u=="function")i||Vd(l);else if(i){var o=null;if(u&&u.hasAttribute("formAction")){if(a=u,i=u[Pe]||null)o=i.formAction;else if(zc(a)!==null)continue}else o=i.action;typeof o=="function"?l[n+1]=o:(l.splice(n,3),n-=3),Vd(l)}}}function Kd(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Rc(e){this._internalRoot=e}ti.prototype.render=Rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var l=t.current,n=pt();Hd(l,n,e,t,null,null)},ti.prototype.unmount=Rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hd(e.current,2,null,e,null,null),Uu(),t[Fl]=null}};function ti(e){this._internalRoot=e}ti.prototype.unstable_scheduleHydration=function(e){if(e){var t=to();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Nl.length&&t!==0&&t<Nl[l].priority;l++);Nl.splice(l,0,e),l===0&&kd(e)}};var Jd=r.version;if(Jd!=="19.2.3")throw Error(c(527,Jd,"19.2.3"));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var ny={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{Ln=li.inject(ny),ot=li}catch{}}return Ma.createRoot=function(e,t){if(!_(e))throw Error(c(299));var l=!1,n="",a=ef,u=tf,i=lf;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Yd(e,1,!1,null,null,l,n,null,a,u,i,Kd),e[Fl]=t.current,sc(e),new Rc(t)},Ma.hydrateRoot=function(e,t,l){if(!_(e))throw Error(c(299));var n=!1,a="",u=ef,i=tf,o=lf,m=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(o=l.onRecoverableError),l.formState!==void 0&&(m=l.formState)),t=Yd(e,1,!0,t,l??null,n,a,m,u,i,o,Kd),t.context=Bd(null),l=t.current,n=pt(),n=hi(n),a=yl(n),a.callback=null,hl(l,a,n),l=n,t.current.lanes=l,Qn(t,l),Ht(t),e[Fl]=t.current,sc(e),new ti(t)},Ma.version="19.2.3",Ma}var a_;function dy(){if(a_)return jc.exports;a_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),jc.exports=fy(),jc.exports}var _y=dy();var u_="popstate";function my(s={}){function r(c,_){let{pathname:d,search:g,hash:j}=c.location;return Yc("",{pathname:d,search:g,hash:j},_.state&&_.state.usr||null,_.state&&_.state.key||"default")}function f(c,_){return typeof _=="string"?_:Ua(_)}return hy(r,f,null,s)}function Oe(s,r){if(s===!1||s===null||typeof s>"u")throw new Error(r)}function Ot(s,r){if(!s){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function yy(){return Math.random().toString(36).substring(2,10)}function i_(s,r){return{usr:s.state,key:s.key,idx:r}}function Yc(s,r,f=null,c){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof r=="string"?Yn(r):r,state:f,key:r&&r.key||c||yy()}}function Ua({pathname:s="/",search:r="",hash:f=""}){return r&&r!=="?"&&(s+=r.charAt(0)==="?"?r:"?"+r),f&&f!=="#"&&(s+=f.charAt(0)==="#"?f:"#"+f),s}function Yn(s){let r={};if(s){let f=s.indexOf("#");f>=0&&(r.hash=s.substring(f),s=s.substring(0,f));let c=s.indexOf("?");c>=0&&(r.search=s.substring(c),s=s.substring(0,c)),s&&(r.pathname=s)}return r}function hy(s,r,f,c={}){let{window:_=document.defaultView,v5Compat:d=!1}=c,g=_.history,j="POP",x=null,h=C();h==null&&(h=0,g.replaceState({...g.state,idx:h},""));function C(){return(g.state||{idx:null}).idx}function R(){j="POP";let q=C(),Z=q==null?null:q-h;h=q,x&&x({action:j,location:L.location,delta:Z})}function Y(q,Z){j="PUSH";let B=Yc(L.location,q,Z);h=C()+1;let K=i_(B,h),fe=L.createHref(B);try{g.pushState(K,"",fe)}catch(ye){if(ye instanceof DOMException&&ye.name==="DataCloneError")throw ye;_.location.assign(fe)}d&&x&&x({action:j,location:L.location,delta:1})}function X(q,Z){j="REPLACE";let B=Yc(L.location,q,Z);h=C();let K=i_(B,h),fe=L.createHref(B);g.replaceState(K,"",fe),d&&x&&x({action:j,location:L.location,delta:0})}function W(q){return py(q)}let L={get action(){return j},get location(){return s(_,g)},listen(q){if(x)throw new Error("A history only accepts one active listener");return _.addEventListener(u_,R),x=q,()=>{_.removeEventListener(u_,R),x=null}},createHref(q){return r(_,q)},createURL:W,encodeLocation(q){let Z=W(q);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:Y,replace:X,go(q){return g.go(q)}};return L}function py(s,r=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(f,"No window.location.(origin|href) available to create URL");let c=typeof s=="string"?s:Ua(s);return c=c.replace(/ $/,"%20"),!r&&c.startsWith("//")&&(c=f+c),new URL(c,f)}function m_(s,r,f="/"){return gy(s,r,f,!1)}function gy(s,r,f,c){let _=typeof r=="string"?Yn(r):r,d=al(_.pathname||"/",f);if(d==null)return null;let g=y_(s);vy(g);let j=null;for(let x=0;j==null&&x<g.length;++x){let h=Ny(d);j=Oy(g[x],h,c)}return j}function y_(s,r=[],f=[],c="",_=!1){let d=(g,j,x=_,h)=>{let C={relativePath:h===void 0?g.path||"":h,caseSensitive:g.caseSensitive===!0,childrenIndex:j,route:g};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(c)&&x)return;Oe(C.relativePath.startsWith(c),`Absolute route path "${C.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(c.length)}let R=nl([c,C.relativePath]),Y=f.concat(C);g.children&&g.children.length>0&&(Oe(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${R}".`),y_(g.children,r,Y,R,x)),!(g.path==null&&!g.index)&&r.push({path:R,score:Ry(R,g.index),routesMeta:Y})};return s.forEach((g,j)=>{if(g.path===""||!g.path?.includes("?"))d(g,j);else for(let x of h_(g.path))d(g,j,!0,x)}),r}function h_(s){let r=s.split("/");if(r.length===0)return[];let[f,...c]=r,_=f.endsWith("?"),d=f.replace(/\?$/,"");if(c.length===0)return _?[d,""]:[d];let g=h_(c.join("/")),j=[];return j.push(...g.map(x=>x===""?d:[d,x].join("/"))),_&&j.push(...g),j.map(x=>s.startsWith("/")&&x===""?"/":x)}function vy(s){s.sort((r,f)=>r.score!==f.score?f.score-r.score:Ay(r.routesMeta.map(c=>c.childrenIndex),f.routesMeta.map(c=>c.childrenIndex)))}var by=/^:[\w-]+$/,xy=3,Sy=2,Ey=1,zy=10,Ty=-2,s_=s=>s==="*";function Ry(s,r){let f=s.split("/"),c=f.length;return f.some(s_)&&(c+=Ty),r&&(c+=Sy),f.filter(_=>!s_(_)).reduce((_,d)=>_+(by.test(d)?xy:d===""?Ey:zy),c)}function Ay(s,r){return s.length===r.length&&s.slice(0,-1).every((c,_)=>c===r[_])?s[s.length-1]-r[r.length-1]:0}function Oy(s,r,f=!1){let{routesMeta:c}=s,_={},d="/",g=[];for(let j=0;j<c.length;++j){let x=c[j],h=j===c.length-1,C=d==="/"?r:r.slice(d.length)||"/",R=ii({path:x.relativePath,caseSensitive:x.caseSensitive,end:h},C),Y=x.route;if(!R&&h&&f&&!c[c.length-1].route.index&&(R=ii({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},C)),!R)return null;Object.assign(_,R.params),g.push({params:_,pathname:nl([d,R.pathname]),pathnameBase:Dy(nl([d,R.pathnameBase])),route:Y}),R.pathnameBase!=="/"&&(d=nl([d,R.pathnameBase]))}return g}function ii(s,r){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[f,c]=jy(s.path,s.caseSensitive,s.end),_=r.match(f);if(!_)return null;let d=_[0],g=d.replace(/(.)\/+$/,"$1"),j=_.slice(1);return{params:c.reduce((h,{paramName:C,isOptional:R},Y)=>{if(C==="*"){let W=j[Y]||"";g=d.slice(0,d.length-W.length).replace(/(.)\/+$/,"$1")}const X=j[Y];return R&&!X?h[C]=void 0:h[C]=(X||"").replace(/%2F/g,"/"),h},{}),pathname:d,pathnameBase:g,pattern:s}}function jy(s,r=!1,f=!0){Ot(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let c=[],_="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,j,x)=>(c.push({paramName:j,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(c.push({paramName:"*"}),_+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?_+="\\/*$":s!==""&&s!=="/"&&(_+="(?:(?=\\/|$))"),[new RegExp(_,r?void 0:"i"),c]}function Ny(s){try{return s.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Ot(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),s}}function al(s,r){if(r==="/")return s;if(!s.toLowerCase().startsWith(r.toLowerCase()))return null;let f=r.endsWith("/")?r.length-1:r.length,c=s.charAt(f);return c&&c!=="/"?null:s.slice(f)||"/"}var p_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cy=s=>p_.test(s);function My(s,r="/"){let{pathname:f,search:c="",hash:_=""}=typeof s=="string"?Yn(s):s,d;if(f)if(Cy(f))d=f;else{if(f.includes("//")){let g=f;f=f.replace(/\/\/+/g,"/"),Ot(!1,`Pathnames cannot have embedded double slashes - normalizing ${g} -> ${f}`)}f.startsWith("/")?d=c_(f.substring(1),"/"):d=c_(f,r)}else d=r;return{pathname:d,search:Uy(c),hash:Yy(_)}}function c_(s,r){let f=r.replace(/\/+$/,"").split("/");return s.split("/").forEach(_=>{_===".."?f.length>1&&f.pop():_!=="."&&f.push(_)}),f.length>1?f.join("/"):"/"}function wc(s,r,f,c){return`Cannot include a '${s}' character in a manually specified \`to.${r}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wy(s){return s.filter((r,f)=>f===0||r.route.path&&r.route.path.length>0)}function g_(s){let r=wy(s);return r.map((f,c)=>c===r.length-1?f.pathname:f.pathnameBase)}function v_(s,r,f,c=!1){let _;typeof s=="string"?_=Yn(s):(_={...s},Oe(!_.pathname||!_.pathname.includes("?"),wc("?","pathname","search",_)),Oe(!_.pathname||!_.pathname.includes("#"),wc("#","pathname","hash",_)),Oe(!_.search||!_.search.includes("#"),wc("#","search","hash",_)));let d=s===""||_.pathname==="",g=d?"/":_.pathname,j;if(g==null)j=f;else{let R=r.length-1;if(!c&&g.startsWith("..")){let Y=g.split("/");for(;Y[0]==="..";)Y.shift(),R-=1;_.pathname=Y.join("/")}j=R>=0?r[R]:"/"}let x=My(_,j),h=g&&g!=="/"&&g.endsWith("/"),C=(d||g===".")&&f.endsWith("/");return!x.pathname.endsWith("/")&&(h||C)&&(x.pathname+="/"),x}var nl=s=>s.join("/").replace(/\/\/+/g,"/"),Dy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Uy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Yy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,By=class{constructor(s,r,f,c=!1){this.status=s,this.statusText=r||"",this.internal=c,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function Hy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function Ly(s){return s.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var b_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function x_(s,r){let f=s;if(typeof f!="string"||!p_.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let c=f,_=!1;if(b_)try{let d=new URL(window.location.href),g=f.startsWith("//")?new URL(d.protocol+f):new URL(f),j=al(g.pathname,r);g.origin===d.origin&&j!=null?f=j+g.search+g.hash:_=!0}catch{Ot(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:_,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var S_=["POST","PUT","PATCH","DELETE"];new Set(S_);var Xy=["GET",...S_];new Set(Xy);var Bn=T.createContext(null);Bn.displayName="DataRouter";var si=T.createContext(null);si.displayName="DataRouterState";var Qy=T.createContext(!1),E_=T.createContext({isTransitioning:!1});E_.displayName="ViewTransition";var qy=T.createContext(new Map);qy.displayName="Fetchers";var Gy=T.createContext(null);Gy.displayName="Await";var jt=T.createContext(null);jt.displayName="Navigation";var Ya=T.createContext(null);Ya.displayName="Location";var ul=T.createContext({outlet:null,matches:[],isDataRoute:!1});ul.displayName="Route";var Xc=T.createContext(null);Xc.displayName="RouteError";var z_="REACT_ROUTER_ERROR",ky="REDIRECT",Zy="ROUTE_ERROR_RESPONSE";function Vy(s){if(s.startsWith(`${z_}:${ky}:{`))try{let r=JSON.parse(s.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function Ky(s){if(s.startsWith(`${z_}:${Zy}:{`))try{let r=JSON.parse(s.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new By(r.status,r.statusText,r.data)}catch{}}function Jy(s,{relative:r}={}){Oe(Ba(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:c}=T.useContext(jt),{hash:_,pathname:d,search:g}=Ha(s,{relative:r}),j=d;return f!=="/"&&(j=d==="/"?f:nl([f,d])),c.createHref({pathname:j,search:g,hash:_})}function Ba(){return T.useContext(Ya)!=null}function il(){return Oe(Ba(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Ya).location}var T_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function R_(s){T.useContext(jt).static||T.useLayoutEffect(s)}function Qc(){let{isDataRoute:s}=T.useContext(ul);return s?sh():Wy()}function Wy(){Oe(Ba(),"useNavigate() may be used only in the context of a <Router> component.");let s=T.useContext(Bn),{basename:r,navigator:f}=T.useContext(jt),{matches:c}=T.useContext(ul),{pathname:_}=il(),d=JSON.stringify(g_(c)),g=T.useRef(!1);return R_(()=>{g.current=!0}),T.useCallback((x,h={})=>{if(Ot(g.current,T_),!g.current)return;if(typeof x=="number"){f.go(x);return}let C=v_(x,JSON.parse(d),_,h.relative==="path");s==null&&r!=="/"&&(C.pathname=C.pathname==="/"?r:nl([r,C.pathname])),(h.replace?f.replace:f.push)(C,h.state,h)},[r,f,d,_,s])}T.createContext(null);function Ha(s,{relative:r}={}){let{matches:f}=T.useContext(ul),{pathname:c}=il(),_=JSON.stringify(g_(f));return T.useMemo(()=>v_(s,JSON.parse(_),c,r==="path"),[s,_,c,r])}function $y(s,r){return A_(s,r)}function A_(s,r,f,c,_){Oe(Ba(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=T.useContext(jt),{matches:g}=T.useContext(ul),j=g[g.length-1],x=j?j.params:{},h=j?j.pathname:"/",C=j?j.pathnameBase:"/",R=j&&j.route;{let B=R&&R.path||"";j_(h,!R||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let Y=il(),X;if(r){let B=typeof r=="string"?Yn(r):r;Oe(C==="/"||B.pathname?.startsWith(C),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${B.pathname}" was given in the \`location\` prop.`),X=B}else X=Y;let W=X.pathname||"/",L=W;if(C!=="/"){let B=C.replace(/^\//,"").split("/");L="/"+W.replace(/^\//,"").split("/").slice(B.length).join("/")}let q=m_(s,{pathname:L});Ot(R||q!=null,`No routes matched location "${X.pathname}${X.search}${X.hash}" `),Ot(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${X.pathname}${X.search}${X.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=th(q&&q.map(B=>Object.assign({},B,{params:Object.assign({},x,B.params),pathname:nl([C,d.encodeLocation?d.encodeLocation(B.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?C:nl([C,d.encodeLocation?d.encodeLocation(B.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathnameBase])})),g,f,c,_);return r&&Z?T.createElement(Ya.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...X},navigationType:"POP"}},Z):Z}function Fy(){let s=ih(),r=Hy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),f=s instanceof Error?s.stack:null,c="rgba(200,200,200, 0.5)",_={padding:"0.5rem",backgroundColor:c},d={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",s),g=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:d},"ErrorBoundary")," or"," ",T.createElement("code",{style:d},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},r),f?T.createElement("pre",{style:_},f):null,g)}var Iy=T.createElement(Fy,null),O_=class extends T.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,r){return r.location!==s.location||r.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:r.error,location:r.location,revalidation:s.revalidation||r.revalidation}}componentDidCatch(s,r){this.props.onError?this.props.onError(s,r):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const f=Ky(s.digest);f&&(s=f)}let r=s!==void 0?T.createElement(ul.Provider,{value:this.props.routeContext},T.createElement(Xc.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?T.createElement(Py,{error:s},r):r}};O_.contextType=Qy;var Dc=new WeakMap;function Py({children:s,error:r}){let{basename:f}=T.useContext(jt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let c=Vy(r.digest);if(c){let _=Dc.get(r);if(_)throw _;let d=x_(c.location,f);if(b_&&!Dc.get(r))if(d.isExternal||c.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:c.replace}));throw Dc.set(r,g),g}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return s}function eh({routeContext:s,match:r,children:f}){let c=T.useContext(Bn);return c&&c.static&&c.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=r.route.id),T.createElement(ul.Provider,{value:s},f)}function th(s,r=[],f=null,c=null,_=null){if(s==null){if(!f)return null;if(f.errors)s=f.matches;else if(r.length===0&&!f.initialized&&f.matches.length>0)s=f.matches;else return null}let d=s,g=f?.errors;if(g!=null){let C=d.findIndex(R=>R.route.id&&g?.[R.route.id]!==void 0);Oe(C>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),d=d.slice(0,Math.min(d.length,C+1))}let j=!1,x=-1;if(f)for(let C=0;C<d.length;C++){let R=d[C];if((R.route.HydrateFallback||R.route.hydrateFallbackElement)&&(x=C),R.route.id){let{loaderData:Y,errors:X}=f,W=R.route.loader&&!Y.hasOwnProperty(R.route.id)&&(!X||X[R.route.id]===void 0);if(R.route.lazy||W){j=!0,x>=0?d=d.slice(0,x+1):d=[d[0]];break}}}let h=f&&c?(C,R)=>{c(C,{location:f.location,params:f.matches?.[0]?.params??{},unstable_pattern:Ly(f.matches),errorInfo:R})}:void 0;return d.reduceRight((C,R,Y)=>{let X,W=!1,L=null,q=null;f&&(X=g&&R.route.id?g[R.route.id]:void 0,L=R.route.errorElement||Iy,j&&(x<0&&Y===0?(j_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),W=!0,q=null):x===Y&&(W=!0,q=R.route.hydrateFallbackElement||null)));let Z=r.concat(d.slice(0,Y+1)),B=()=>{let K;return X?K=L:W?K=q:R.route.Component?K=T.createElement(R.route.Component,null):R.route.element?K=R.route.element:K=C,T.createElement(eh,{match:R,routeContext:{outlet:C,matches:Z,isDataRoute:f!=null},children:K})};return f&&(R.route.ErrorBoundary||R.route.errorElement||Y===0)?T.createElement(O_,{location:f.location,revalidation:f.revalidation,component:L,error:X,children:B(),routeContext:{outlet:null,matches:Z,isDataRoute:!0},onError:h}):B()},null)}function qc(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lh(s){let r=T.useContext(Bn);return Oe(r,qc(s)),r}function nh(s){let r=T.useContext(si);return Oe(r,qc(s)),r}function ah(s){let r=T.useContext(ul);return Oe(r,qc(s)),r}function Gc(s){let r=ah(s),f=r.matches[r.matches.length-1];return Oe(f.route.id,`${s} can only be used on routes that contain a unique "id"`),f.route.id}function uh(){return Gc("useRouteId")}function ih(){let s=T.useContext(Xc),r=nh("useRouteError"),f=Gc("useRouteError");return s!==void 0?s:r.errors?.[f]}function sh(){let{router:s}=lh("useNavigate"),r=Gc("useNavigate"),f=T.useRef(!1);return R_(()=>{f.current=!0}),T.useCallback(async(_,d={})=>{Ot(f.current,T_),f.current&&(typeof _=="number"?await s.navigate(_):await s.navigate(_,{fromRouteId:r,...d}))},[s,r])}var o_={};function j_(s,r,f){!r&&!o_[s]&&(o_[s]=!0,Ot(!1,f))}T.memo(ch);function ch({routes:s,future:r,state:f,onError:c}){return A_(s,void 0,f,c,r)}function Da(s){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function oh({basename:s="/",children:r=null,location:f,navigationType:c="POP",navigator:_,static:d=!1,unstable_useTransitions:g}){Oe(!Ba(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=s.replace(/^\/*/,"/"),x=T.useMemo(()=>({basename:j,navigator:_,static:d,unstable_useTransitions:g,future:{}}),[j,_,d,g]);typeof f=="string"&&(f=Yn(f));let{pathname:h="/",search:C="",hash:R="",state:Y=null,key:X="default"}=f,W=T.useMemo(()=>{let L=al(h,j);return L==null?null:{location:{pathname:L,search:C,hash:R,state:Y,key:X},navigationType:c}},[j,h,C,R,Y,X,c]);return Ot(W!=null,`<Router basename="${j}"> is not able to match the URL "${h}${C}${R}" because it does not start with the basename, so the <Router> won't render anything.`),W==null?null:T.createElement(jt.Provider,{value:x},T.createElement(Ya.Provider,{children:r,value:W}))}function rh({children:s,location:r}){return $y(Bc(s),r)}function Bc(s,r=[]){let f=[];return T.Children.forEach(s,(c,_)=>{if(!T.isValidElement(c))return;let d=[...r,_];if(c.type===T.Fragment){f.push.apply(f,Bc(c.props.children,d));return}Oe(c.type===Da,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||d.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=Bc(c.props.children,d)),f.push(g)}),f}var ai="get",ui="application/x-www-form-urlencoded";function ci(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function fh(s){return ci(s)&&s.tagName.toLowerCase()==="button"}function dh(s){return ci(s)&&s.tagName.toLowerCase()==="form"}function _h(s){return ci(s)&&s.tagName.toLowerCase()==="input"}function mh(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function yh(s,r){return s.button===0&&(!r||r==="_self")&&!mh(s)}function Hc(s=""){return new URLSearchParams(typeof s=="string"||Array.isArray(s)||s instanceof URLSearchParams?s:Object.keys(s).reduce((r,f)=>{let c=s[f];return r.concat(Array.isArray(c)?c.map(_=>[f,_]):[[f,c]])},[]))}function hh(s,r){let f=Hc(s);return r&&r.forEach((c,_)=>{f.has(_)||r.getAll(_).forEach(d=>{f.append(_,d)})}),f}var ni=null;function ph(){if(ni===null)try{new FormData(document.createElement("form"),0),ni=!1}catch{ni=!0}return ni}var gh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uc(s){return s!=null&&!gh.has(s)?(Ot(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ui}"`),null):s}function vh(s,r){let f,c,_,d,g;if(dh(s)){let j=s.getAttribute("action");c=j?al(j,r):null,f=s.getAttribute("method")||ai,_=Uc(s.getAttribute("enctype"))||ui,d=new FormData(s)}else if(fh(s)||_h(s)&&(s.type==="submit"||s.type==="image")){let j=s.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=s.getAttribute("formaction")||j.getAttribute("action");if(c=x?al(x,r):null,f=s.getAttribute("formmethod")||j.getAttribute("method")||ai,_=Uc(s.getAttribute("formenctype"))||Uc(j.getAttribute("enctype"))||ui,d=new FormData(j,s),!ph()){let{name:h,type:C,value:R}=s;if(C==="image"){let Y=h?`${h}.`:"";d.append(`${Y}x`,"0"),d.append(`${Y}y`,"0")}else h&&d.append(h,R)}}else{if(ci(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=ai,c=null,_=ui,g=s}return d&&_==="text/plain"&&(g=d,d=void 0),{action:c,method:f.toLowerCase(),encType:_,formData:d,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function kc(s,r){if(s===!1||s===null||typeof s>"u")throw new Error(r)}function bh(s,r,f,c){let _=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return f?_.pathname.endsWith("/")?_.pathname=`${_.pathname}_.${c}`:_.pathname=`${_.pathname}.${c}`:_.pathname==="/"?_.pathname=`_root.${c}`:r&&al(_.pathname,r)==="/"?_.pathname=`${r.replace(/\/$/,"")}/_root.${c}`:_.pathname=`${_.pathname.replace(/\/$/,"")}.${c}`,_}async function xh(s,r){if(s.id in r)return r[s.id];try{let f=await import(s.module);return r[s.id]=f,f}catch(f){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Sh(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Eh(s,r,f){let c=await Promise.all(s.map(async _=>{let d=r.routes[_.route.id];if(d){let g=await xh(d,f);return g.links?g.links():[]}return[]}));return Ah(c.flat(1).filter(Sh).filter(_=>_.rel==="stylesheet"||_.rel==="preload").map(_=>_.rel==="stylesheet"?{..._,rel:"prefetch",as:"style"}:{..._,rel:"prefetch"}))}function r_(s,r,f,c,_,d){let g=(x,h)=>f[h]?x.route.id!==f[h].route.id:!0,j=(x,h)=>f[h].pathname!==x.pathname||f[h].route.path?.endsWith("*")&&f[h].params["*"]!==x.params["*"];return d==="assets"?r.filter((x,h)=>g(x,h)||j(x,h)):d==="data"?r.filter((x,h)=>{let C=c.routes[x.route.id];if(!C||!C.hasLoader)return!1;if(g(x,h)||j(x,h))return!0;if(x.route.shouldRevalidate){let R=x.route.shouldRevalidate({currentUrl:new URL(_.pathname+_.search+_.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function zh(s,r,{includeHydrateFallback:f}={}){return Th(s.map(c=>{let _=r.routes[c.route.id];if(!_)return[];let d=[_.module];return _.clientActionModule&&(d=d.concat(_.clientActionModule)),_.clientLoaderModule&&(d=d.concat(_.clientLoaderModule)),f&&_.hydrateFallbackModule&&(d=d.concat(_.hydrateFallbackModule)),_.imports&&(d=d.concat(_.imports)),d}).flat(1))}function Th(s){return[...new Set(s)]}function Rh(s){let r={},f=Object.keys(s).sort();for(let c of f)r[c]=s[c];return r}function Ah(s,r){let f=new Set;return new Set(r),s.reduce((c,_)=>{let d=JSON.stringify(Rh(_));return f.has(d)||(f.add(d),c.push({key:d,link:_})),c},[])}function N_(){let s=T.useContext(Bn);return kc(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Oh(){let s=T.useContext(si);return kc(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Zc=T.createContext(void 0);Zc.displayName="FrameworkContext";function C_(){let s=T.useContext(Zc);return kc(s,"You must render this element inside a <HydratedRouter> element"),s}function jh(s,r){let f=T.useContext(Zc),[c,_]=T.useState(!1),[d,g]=T.useState(!1),{onFocus:j,onBlur:x,onMouseEnter:h,onMouseLeave:C,onTouchStart:R}=r,Y=T.useRef(null);T.useEffect(()=>{if(s==="render"&&g(!0),s==="viewport"){let L=Z=>{Z.forEach(B=>{g(B.isIntersecting)})},q=new IntersectionObserver(L,{threshold:.5});return Y.current&&q.observe(Y.current),()=>{q.disconnect()}}},[s]),T.useEffect(()=>{if(c){let L=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(L)}}},[c]);let X=()=>{_(!0)},W=()=>{_(!1),g(!1)};return f?s!=="intent"?[d,Y,{}]:[d,Y,{onFocus:wa(j,X),onBlur:wa(x,W),onMouseEnter:wa(h,X),onMouseLeave:wa(C,W),onTouchStart:wa(R,X)}]:[!1,Y,{}]}function wa(s,r){return f=>{s&&s(f),f.defaultPrevented||r(f)}}function Nh({page:s,...r}){let{router:f}=N_(),c=T.useMemo(()=>m_(f.routes,s,f.basename),[f.routes,s,f.basename]);return c?T.createElement(Mh,{page:s,matches:c,...r}):null}function Ch(s){let{manifest:r,routeModules:f}=C_(),[c,_]=T.useState([]);return T.useEffect(()=>{let d=!1;return Eh(s,r,f).then(g=>{d||_(g)}),()=>{d=!0}},[s,r,f]),c}function Mh({page:s,matches:r,...f}){let c=il(),{future:_,manifest:d,routeModules:g}=C_(),{basename:j}=N_(),{loaderData:x,matches:h}=Oh(),C=T.useMemo(()=>r_(s,r,h,d,c,"data"),[s,r,h,d,c]),R=T.useMemo(()=>r_(s,r,h,d,c,"assets"),[s,r,h,d,c]),Y=T.useMemo(()=>{if(s===c.pathname+c.search+c.hash)return[];let L=new Set,q=!1;if(r.forEach(B=>{let K=d.routes[B.route.id];!K||!K.hasLoader||(!C.some(fe=>fe.route.id===B.route.id)&&B.route.id in x&&g[B.route.id]?.shouldRevalidate||K.hasClientLoader?q=!0:L.add(B.route.id))}),L.size===0)return[];let Z=bh(s,j,_.unstable_trailingSlashAwareDataRequests,"data");return q&&L.size>0&&Z.searchParams.set("_routes",r.filter(B=>L.has(B.route.id)).map(B=>B.route.id).join(",")),[Z.pathname+Z.search]},[j,_.unstable_trailingSlashAwareDataRequests,x,c,d,C,r,s,g]),X=T.useMemo(()=>zh(R,d),[R,d]),W=Ch(R);return T.createElement(T.Fragment,null,Y.map(L=>T.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...f})),X.map(L=>T.createElement("link",{key:L,rel:"modulepreload",href:L,...f})),W.map(({key:L,link:q})=>T.createElement("link",{key:L,nonce:f.nonce,...q})))}function wh(...s){return r=>{s.forEach(f=>{typeof f=="function"?f(r):f!=null&&(f.current=r)})}}var Dh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dh&&(window.__reactRouterVersion="7.12.0")}catch{}function Uh({basename:s,children:r,unstable_useTransitions:f,window:c}){let _=T.useRef();_.current==null&&(_.current=my({window:c,v5Compat:!0}));let d=_.current,[g,j]=T.useState({action:d.action,location:d.location}),x=T.useCallback(h=>{f===!1?j(h):T.startTransition(()=>j(h))},[f]);return T.useLayoutEffect(()=>d.listen(x),[d,x]),T.createElement(oh,{basename:s,children:r,location:g.location,navigationType:g.action,navigator:d,unstable_useTransitions:f})}var M_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ue=T.forwardRef(function({onClick:r,discover:f="render",prefetch:c="none",relative:_,reloadDocument:d,replace:g,state:j,target:x,to:h,preventScrollReset:C,viewTransition:R,unstable_defaultShouldRevalidate:Y,...X},W){let{basename:L,unstable_useTransitions:q}=T.useContext(jt),Z=typeof h=="string"&&M_.test(h),B=x_(h,L);h=B.to;let K=Jy(h,{relative:_}),[fe,ye,Se]=jh(c,X),F=Lh(h,{replace:g,state:j,target:x,preventScrollReset:C,relative:_,viewTransition:R,unstable_defaultShouldRevalidate:Y,unstable_useTransitions:q});function Ae(Ie){r&&r(Ie),Ie.defaultPrevented||F(Ie)}let je=T.createElement("a",{...X,...Se,href:B.absoluteURL||K,onClick:B.isExternal||d?r:Ae,ref:wh(W,ye),target:x,"data-discover":!Z&&f==="render"?"true":void 0});return fe&&!Z?T.createElement(T.Fragment,null,je,T.createElement(Nh,{page:K})):je});Ue.displayName="Link";var Yh=T.forwardRef(function({"aria-current":r="page",caseSensitive:f=!1,className:c="",end:_=!1,style:d,to:g,viewTransition:j,children:x,...h},C){let R=Ha(g,{relative:h.relative}),Y=il(),X=T.useContext(si),{navigator:W,basename:L}=T.useContext(jt),q=X!=null&&Zh(R)&&j===!0,Z=W.encodeLocation?W.encodeLocation(R).pathname:R.pathname,B=Y.pathname,K=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;f||(B=B.toLowerCase(),K=K?K.toLowerCase():null,Z=Z.toLowerCase()),K&&L&&(K=al(K,L)||K);const fe=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let ye=B===Z||!_&&B.startsWith(Z)&&B.charAt(fe)==="/",Se=K!=null&&(K===Z||!_&&K.startsWith(Z)&&K.charAt(Z.length)==="/"),F={isActive:ye,isPending:Se,isTransitioning:q},Ae=ye?r:void 0,je;typeof c=="function"?je=c(F):je=[c,ye?"active":null,Se?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let Ie=typeof d=="function"?d(F):d;return T.createElement(Ue,{...h,"aria-current":Ae,className:je,ref:C,style:Ie,to:g,viewTransition:j},typeof x=="function"?x(F):x)});Yh.displayName="NavLink";var Bh=T.forwardRef(({discover:s="render",fetcherKey:r,navigate:f,reloadDocument:c,replace:_,state:d,method:g=ai,action:j,onSubmit:x,relative:h,preventScrollReset:C,viewTransition:R,unstable_defaultShouldRevalidate:Y,...X},W)=>{let{unstable_useTransitions:L}=T.useContext(jt),q=Gh(),Z=kh(j,{relative:h}),B=g.toLowerCase()==="get"?"get":"post",K=typeof j=="string"&&M_.test(j),fe=ye=>{if(x&&x(ye),ye.defaultPrevented)return;ye.preventDefault();let Se=ye.nativeEvent.submitter,F=Se?.getAttribute("formmethod")||g,Ae=()=>q(Se||ye.currentTarget,{fetcherKey:r,method:F,navigate:f,replace:_,state:d,relative:h,preventScrollReset:C,viewTransition:R,unstable_defaultShouldRevalidate:Y});L&&f!==!1?T.startTransition(()=>Ae()):Ae()};return T.createElement("form",{ref:W,method:B,action:Z,onSubmit:c?x:fe,...X,"data-discover":!K&&s==="render"?"true":void 0})});Bh.displayName="Form";function Hh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function w_(s){let r=T.useContext(Bn);return Oe(r,Hh(s)),r}function Lh(s,{target:r,replace:f,state:c,preventScrollReset:_,relative:d,viewTransition:g,unstable_defaultShouldRevalidate:j,unstable_useTransitions:x}={}){let h=Qc(),C=il(),R=Ha(s,{relative:d});return T.useCallback(Y=>{if(yh(Y,r)){Y.preventDefault();let X=f!==void 0?f:Ua(C)===Ua(R),W=()=>h(s,{replace:X,state:c,preventScrollReset:_,relative:d,viewTransition:g,unstable_defaultShouldRevalidate:j});x?T.startTransition(()=>W()):W()}},[C,h,R,f,c,r,s,_,d,g,j,x])}function Xh(s){Ot(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let r=T.useRef(Hc(s)),f=T.useRef(!1),c=il(),_=T.useMemo(()=>hh(c.search,f.current?null:r.current),[c.search]),d=Qc(),g=T.useCallback((j,x)=>{const h=Hc(typeof j=="function"?j(new URLSearchParams(_)):j);f.current=!0,d("?"+h,x)},[d,_]);return[_,g]}var Qh=0,qh=()=>`__${String(++Qh)}__`;function Gh(){let{router:s}=w_("useSubmit"),{basename:r}=T.useContext(jt),f=uh(),c=s.fetch,_=s.navigate;return T.useCallback(async(d,g={})=>{let{action:j,method:x,encType:h,formData:C,body:R}=vh(d,r);if(g.navigate===!1){let Y=g.fetcherKey||qh();await c(Y,f,g.action||j,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:C,body:R,formMethod:g.method||x,formEncType:g.encType||h,flushSync:g.flushSync})}else await _(g.action||j,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:C,body:R,formMethod:g.method||x,formEncType:g.encType||h,replace:g.replace,state:g.state,fromRouteId:f,flushSync:g.flushSync,viewTransition:g.viewTransition})},[c,_,r,f])}function kh(s,{relative:r}={}){let{basename:f}=T.useContext(jt),c=T.useContext(ul);Oe(c,"useFormAction must be used inside a RouteContext");let[_]=c.matches.slice(-1),d={...Ha(s||".",{relative:r})},g=il();if(s==null){d.search=g.search;let j=new URLSearchParams(d.search),x=j.getAll("index");if(x.some(C=>C==="")){j.delete("index"),x.filter(R=>R).forEach(R=>j.append("index",R));let C=j.toString();d.search=C?`?${C}`:""}}return(!s||s===".")&&_.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(d.pathname=d.pathname==="/"?f:nl([f,d.pathname])),Ua(d)}function Zh(s,{relative:r}={}){let f=T.useContext(E_);Oe(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=w_("useViewTransitionState"),_=Ha(s,{relative:r});if(!f.isTransitioning)return!1;let d=al(f.currentLocation.pathname,c)||f.currentLocation.pathname,g=al(f.nextLocation.pathname,c)||f.nextLocation.pathname;return ii(_.pathname,g)!=null||ii(_.pathname,d)!=null}__();const Vh=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kh=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,f,c)=>c?c.toUpperCase():f.toLowerCase()),f_=s=>{const r=Kh(s);return r.charAt(0).toUpperCase()+r.slice(1)},D_=(...s)=>s.filter((r,f,c)=>!!r&&r.trim()!==""&&c.indexOf(r)===f).join(" ").trim(),Jh=s=>{for(const r in s)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var Wh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const $h=T.forwardRef(({color:s="currentColor",size:r=24,strokeWidth:f=2,absoluteStrokeWidth:c,className:_="",children:d,iconNode:g,...j},x)=>T.createElement("svg",{ref:x,...Wh,width:r,height:r,stroke:s,strokeWidth:c?Number(f)*24/Number(r):f,className:D_("lucide",_),...!d&&!Jh(j)&&{"aria-hidden":"true"},...j},[...g.map(([h,C])=>T.createElement(h,C)),...Array.isArray(d)?d:[d]]));const U_=(s,r)=>{const f=T.forwardRef(({className:c,..._},d)=>T.createElement($h,{ref:d,iconNode:r,className:D_(`lucide-${Vh(f_(s))}`,`lucide-${s}`,c),..._}));return f.displayName=f_(s),f};const Fh=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ih=U_("menu",Fh);const Ph=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ep=U_("x",Ph);function tp(){const[s,r]=T.useState(!1),[f,c]=T.useState(!1),[_,d]=T.useState(!1),[g,j]=T.useState(!1),[x,h]=T.useState(!1),[C,R]=T.useState(""),[Y]=T.useState(0),X=Qc(),W=()=>{r(!s),f&&c(!1)},L=()=>{c(!f),s&&r(!1)},q=()=>{const B=!_;d(B),r(!1),c(!1),B||(j(!1),h(!1))},Z=B=>{B.preventDefault(),C.trim()&&(X(`/?q=${encodeURIComponent(C)}`),c(!1),d(!1))};return b.jsxs("header",{className:"fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm px-4 py-6 md:px-6 border-b border-transparent transition-all",children:[b.jsxs("div",{className:"flex justify-between items-center md:items-start text-[10px] md:text-xs font-thin tracking-wide relative min-h-[20px]",children:[b.jsxs("div",{className:"hidden md:flex gap-8 flex-col md:flex-row md:items-start w-auto mt-5",children:[b.jsxs("div",{className:"flex gap-8",children:[b.jsx("button",{onClick:W,className:`lowercase hover:opacity-50 transition-opacity text-left font-['Rajdhani'] font-light ${s?"opacity-50":""}`,children:"index"}),b.jsx("button",{onClick:L,className:`lowercase hover:opacity-50 transition-opacity font-['Rajdhani'] font-light ${f?"opacity-50":""}`,children:"search"})]}),b.jsx("div",{className:`
                        grid overflow-hidden transition-[grid-template-rows,opacity,padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                        absolute top-full left-0 
                        bg-transparent
                        w-max
                        ${s?"grid-rows-[1fr] opacity-100 pt-4":"grid-rows-[0fr] opacity-0 pt-0"}
                    `,children:b.jsxs("div",{className:"min-h-0 flex flex-col gap-2",children:[b.jsx(Ue,{to:"/category/ball-cap",className:"lowercase hover:opacity-50 transition-opacity whitespace-nowrap font-['Rajdhani'] font-light",children:"ball cap"}),b.jsx(Ue,{to:"/category/bucket-hat",className:"lowercase hover:opacity-50 transition-opacity whitespace-nowrap font-['Rajdhani'] font-light",children:"bucket hat"}),b.jsx(Ue,{to:"/category/apparel",className:"lowercase hover:opacity-50 transition-opacity whitespace-nowrap font-['Rajdhani'] font-light",children:"apparel"}),b.jsx(Ue,{to:"/category/collaboration",className:"lowercase hover:opacity-50 transition-opacity whitespace-nowrap font-['Rajdhani'] font-light",children:"collaboration"})]})}),b.jsx("div",{className:`
                        grid overflow-hidden transition-[grid-template-rows,opacity,padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                        absolute top-full left-20 
                        bg-transparent
                        w-[300px]
                        ${f?"grid-rows-[1fr] opacity-100 pt-4":"grid-rows-[0fr] opacity-0 pt-0"}
                    `,children:b.jsx("div",{className:"min-h-0 flex flex-col gap-2",children:b.jsx("form",{onSubmit:Z,children:b.jsx("input",{type:"text",placeholder:"search product...",value:C,onChange:B=>R(B.target.value),className:"w-full bg-transparent border-b border-black/20 focus:border-black outline-none py-1 text-xs placeholder:text-gray-400 font-normal lowercase font-['Rajdhani'] font-light"})})})})]}),b.jsx("div",{className:"hidden md:block absolute left-1/2 -translate-x-1/2 w-auto text-center whitespace-nowrap top-0 mt-5 md:mt-0",children:b.jsx(Ue,{to:"/",className:"uppercase font-['Squada_One'] tracking-wider text-4xl leading-none",children:"UNITED WORKERS REPUBLIC"})}),b.jsx("div",{className:"hidden md:flex gap-4 top-0 mt-5 text-right w-auto ml-auto",children:b.jsx(Ue,{to:"/cart",className:"lowercase hover:opacity-50 transition-opacity font-['Rajdhani'] font-light",children:"cart"})}),b.jsxs("div",{className:"flex md:hidden w-full justify-between items-center",children:[b.jsx("button",{onClick:q,className:"focus:outline-none",children:_?b.jsx(ep,{className:"w-6 h-6 stroke-1"}):b.jsx(Ih,{className:"w-6 h-6 stroke-1"})}),b.jsx(Ue,{to:"/",className:"uppercase font-['Squada_One'] tracking-wider text-xl leading-none",children:"UNITED WORKERS REPUBLIC"}),b.jsx(Ue,{to:"/cart",className:"lowercase hover:opacity-50 transition-opacity font-['Rajdhani'] font-light text-base",children:Y})]})]}),b.jsx("div",{className:`
                md:hidden
                grid overflow-hidden transition-[grid-template-rows,opacity,padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                absolute top-full right-0 left-0
                border-b border-transparent
                ${_?"grid-rows-[1fr] opacity-100 pt-0 pb-6 border-gray-100":"grid-rows-[0fr] opacity-0 pt-0 pb-0"}
            `,children:b.jsxs("div",{className:"min-h-0 flex flex-col gap-1 px-4 items-start text-left",children:[" ",b.jsxs("div",{className:"flex flex-col items-start w-full gap-1",children:[" ",x?b.jsxs("form",{onSubmit:Z,className:"w-full h-3 flex items-center justify-start relative",children:[!C&&b.jsx("div",{className:"absolute top-0 left-0 h-3 flex items-center pointer-events-none",children:b.jsx("span",{className:"w-[1px] h-2.5 bg-black animate-pulse block"})}),b.jsx("input",{type:"text",value:C,onChange:B=>R(B.target.value),className:"w-full bg-transparent focus:border-transparent outline-none text-[10px] font-normal lowercase font-['Rajdhani'] font-light text-left p-0 m-0 leading-none h-3 caret-transparent relative z-10",autoFocus:!0,onBlur:()=>{C||h(!1)}})]}):b.jsx("button",{onClick:()=>h(!0),className:"lowercase font-['Rajdhani'] font-light text-[10px] hover:opacity-50 transition-opacity p-0 m-0 leading-none h-3 flex items-center",children:"search"})]}),b.jsxs("div",{className:"flex flex-col items-start w-full gap-1",children:[" ",b.jsx("button",{onClick:()=>j(!g),className:`lowercase font-['Rajdhani'] font-light text-[10px] hover:opacity-50 transition-opacity ${g?"opacity-50":""}`,children:"index"}),b.jsx("div",{className:`
                            w-full grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out
                            ${g?"grid-rows-[1fr]":"grid-rows-[0fr]"}
                        `,children:b.jsxs("div",{className:"min-h-0 flex flex-col gap-2 items-start pt-1",children:[b.jsx(Ue,{to:"/category/ball-cap",onClick:()=>d(!1),className:"lowercase hover:opacity-50 transition-opacity font-['Rajdhani'] font-light text-[10px] text-black",children:"ball cap"}),b.jsx(Ue,{to:"/category/bucket-hat",onClick:()=>d(!1),className:"lowercase hover:opacity-50 transition-opacity font-['Rajdhani'] font-light text-[10px] text-black",children:"bucket hat"}),b.jsx(Ue,{to:"/category/apparel",onClick:()=>d(!1),className:"lowercase hover:opacity-50 transition-opacity font-['Rajdhani'] font-light text-[10px] text-black",children:"apparel"}),b.jsx(Ue,{to:"/category/collaboration",onClick:()=>d(!1),className:"lowercase hover:opacity-50 transition-opacity font-['Rajdhani'] font-light text-[10px] text-black",children:"collaboration"})]})})]})]})})]})}function lp({id:s,name:r,image:f,price:c}){return b.jsxs("div",{className:"group flex flex-col cursor-pointer",children:[b.jsx(Ue,{to:`/product/${s}`,state:{name:r,image:f,price:c},className:"block overflow-hidden relative bg-white aspect-[3/4]",children:b.jsx("img",{src:f,alt:r,className:"w-full h-full object-contain transition-transform duration-500 group-hover:scale-105",loading:"lazy"})}),b.jsx("div",{className:"flex flex-col items-center text-center text-[8px] font-normal leading-snug space-y-0.5 mt-0",children:b.jsx(Ue,{to:`/product/${s}`,className:"hover:opacity-60 transition-opacity",children:b.jsx("span",{className:"font-['Rajdhani'] font-normal text-xs lowercase",children:r})})})]})}const np=Array.from({length:12}).map((s,r)=>({id:`prod-${r}`,name:`WORK CAP BLACK ${r+1}`,price:"145,000 KRW",image:`/products/item${r+1}.png`}));function d_(){const[s]=Xh(),r=s.get("q")?.toLowerCase()||"",f=np.filter(c=>c.name.toLowerCase().includes(r));return b.jsxs("div",{className:"w-full pt-20 md:pt-36 px-4 md:px-10 pb-20",children:[r&&b.jsxs("div",{className:"mb-4 text-xs font-normal text-gray-400",children:['SEARCH RESULTS FOR "',r.toUpperCase(),'"']}),b.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-x-[57px] md:gap-y-16 gap-y-10",children:f.length>0?f.map(c=>b.jsx(lp,{...c},c.id)):b.jsx("div",{className:"col-span-full h-40 flex items-center justify-center text-xs text-gray-400",children:"NO RESULTS FOUND"})})]})}function ap(){const[s,r]=T.useState(1),c=il().state,d=(c?.name||"WORK CAP BLACK").toLowerCase().replace(/(^|\s)\S/g,x=>x.toUpperCase()),g=c?.image||"https://placehold.co/800x1000/eeeeee/000000/png?text=Front+View",j=c?.price||"145,000 KRW";return b.jsx("div",{className:"w-full pt-24 px-4 pb-20 max-w-[1600px] mx-auto md:pl-28",children:b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-x-20",children:[b.jsxs("div",{children:[b.jsxs("div",{className:"hidden md:flex flex-col gap-4 px-0 md:px-20",children:[b.jsx("img",{src:g,alt:`${d} - Front View`,className:"w-full h-auto object-contain bg-white"}),b.jsxs("div",{className:"relative w-full aspect-[3/4] bg-white flex items-center justify-center text-gray-300",children:[b.jsx("img",{src:g,alt:`${d} - Side View`,className:"w-full h-full object-contain opacity-50 grayscale"}),b.jsx("span",{className:"absolute text-xs uppercase tracking-widest text-black",children:"Side View"})]}),b.jsxs("div",{className:"relative w-full aspect-[3/4] bg-white flex items-center justify-center text-gray-300",children:[b.jsx("img",{src:g,alt:`${d} - Back View`,className:"w-full h-full object-contain opacity-50 grayscale"}),b.jsx("span",{className:"absolute text-xs uppercase tracking-widest text-black",children:"Back View"})]}),b.jsxs("div",{className:"relative w-full aspect-[3/4] bg-white flex items-center justify-center text-gray-300",children:[b.jsx("img",{src:g,alt:`${d} - Model View`,className:"w-full h-full object-contain opacity-50 grayscale"}),b.jsx("span",{className:"absolute text-xs uppercase tracking-widest text-black",children:"Model Shot"})]})]}),b.jsxs("div",{className:"flex md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 gap-2 pb-4",children:[b.jsx("div",{className:"w-[95vw] flex-shrink-0 snap-center relative bg-white aspect-[3/4] flex items-center justify-center",children:b.jsx("img",{src:g,alt:`${d} - Front View`,className:"w-full h-full object-contain"})}),b.jsxs("div",{className:"w-[95vw] flex-shrink-0 snap-center relative bg-white aspect-[3/4] flex items-center justify-center text-gray-300",children:[b.jsx("img",{src:g,alt:`${d} - Side View`,className:"w-full h-full object-contain opacity-50 grayscale"}),b.jsx("span",{className:"absolute text-xs uppercase tracking-widest text-black",children:"Side View"})]}),b.jsxs("div",{className:"w-[95vw] flex-shrink-0 snap-center relative bg-white aspect-[3/4] flex items-center justify-center text-gray-300",children:[b.jsx("img",{src:g,alt:`${d} - Back View`,className:"w-full h-full object-contain opacity-50 grayscale"}),b.jsx("span",{className:"absolute text-xs uppercase tracking-widest text-black",children:"Back View"})]}),b.jsxs("div",{className:"w-[95vw] flex-shrink-0 snap-center relative bg-white aspect-[3/4] flex items-center justify-center text-gray-300",children:[b.jsx("img",{src:g,alt:`${d} - Model View`,className:"w-full h-full object-contain opacity-50 grayscale"}),b.jsx("span",{className:"absolute text-xs uppercase tracking-widest text-black",children:"Model Shot"})]})]})]}),b.jsxs("div",{className:"w-full pt-4 md:pt-0 flex flex-col gap-6 md:sticky md:top-36 md:h-fit",children:[b.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between items-start pb-6 gap-1 md:gap-0",children:[b.jsx("h1",{className:"text-2xl font-['Rajdhani'] font-normal tracking-wide flex-1",children:d}),b.jsx("p",{className:"text-xl text-black pl-0 md:pl-4 whitespace-nowrap font-['Rajdhani'] font-light",children:j})]}),b.jsxs("div",{className:"flex flex-col gap-4",children:[b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("span",{className:"text-xs uppercase tracking-wide text-gray-500 font-['Rajdhani']",children:"quantity"}),b.jsxs("div",{className:"flex items-center gap-4 h-10 px-2",children:[b.jsx("button",{onClick:()=>r(x=>Math.max(1,x-1)),className:"text-sm hover:text-gray-500 px-2 w-8 h-full flex items-center justify-center",children:"-"}),b.jsx("span",{className:"text-sm font-light w-6 text-center font-['Rajdhani']",children:s.toString().padStart(2,"0")}),b.jsx("button",{onClick:()=>r(x=>x+1),className:"text-sm hover:text-gray-500 px-2 w-8 h-full flex items-center justify-center",children:"+"})]})]}),b.jsx("button",{className:"w-full h-12 border border-black text-black text-xs md:text-sm tracking-wider hover:bg-black hover:text-white transition-colors duration-200 bg-transparent flex items-center justify-center gap-2 font-['Rajdhani']",children:b.jsx("span",{children:"Add to Cart"})})]}),b.jsxs("div",{className:"flex flex-col gap-6 pt-6 text-xs font-normal text-gray-800 leading-relaxed font-['Rajdhani']",children:[b.jsxs("div",{className:"flex flex-col gap-2",children:[b.jsx("span",{className:"uppercase tracking-wide font-normal text-gray-400 text-[10px]",children:"description"}),b.jsxs("div",{className:"flex flex-col gap-1",children:[b.jsx("p",{children:"lightweight nylon construction."}),b.jsx("p",{children:"breathable eyelets at sides."}),b.jsx("p",{children:"adjustable strap with metal hardware at back."}),b.jsx("p",{children:"tonal stitching throughout."})]})]}),b.jsxs("div",{className:"flex flex-col gap-1",children:[b.jsx("span",{className:"uppercase tracking-wide font-normal text-gray-400 text-[10px]",children:"color"}),b.jsx("p",{children:"black"})]}),b.jsxs("div",{className:"flex flex-col gap-1",children:[b.jsx("span",{className:"uppercase tracking-wide font-normal text-gray-400 text-[10px]",children:"size"}),b.jsx("p",{children:"one size"})]}),b.jsxs("div",{className:"flex flex-col gap-1",children:[b.jsx("span",{className:"uppercase tracking-wide font-normal text-gray-400 text-[10px]",children:"material"}),b.jsx("p",{children:"100% nylon"})]}),b.jsxs("div",{className:"flex flex-col gap-1",children:[b.jsx("span",{className:"uppercase tracking-wide font-normal text-gray-400 text-[10px]",children:"origin"}),b.jsx("p",{children:"made in south korea"})]}),b.jsxs("div",{className:"flex flex-col gap-1",children:[b.jsx("span",{className:"uppercase tracking-wide font-normal text-gray-400 text-[10px]",children:"shipping & handling"}),b.jsx("p",{children:"free shipping on orders over 200,000 krw."}),b.jsx("p",{children:"standard delivery: 3-5 business days."})]}),b.jsxs("div",{className:"flex flex-col gap-1",children:[b.jsx("span",{className:"uppercase tracking-wide font-normal text-gray-400 text-[10px]",children:"return policy"}),b.jsx("p",{children:"returns accepted within 14 days of delivery."}),b.jsx("p",{children:"item must be unworn and in original packaging."})]})]})]})]})})}function up(){return b.jsx("footer",{className:"w-full px-4 md:px-10 py-10 md:py-16 text-[10px] md:text-xs font-normal text-black border-t border-transparent font-['Rajdhani']",children:b.jsxs("div",{className:"flex flex-col gap-8 md:gap-12",children:[b.jsx("div",{className:"uppercase tracking-wide",children:"2026, UNITED WORKERS REPUBLIC"}),b.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start gap-8",children:[b.jsxs("div",{className:"flex flex-col gap-1 text-gray-500",children:[b.jsx("p",{children:"Business Number : 361-86-02421"}),b.jsx("p",{children:"Mail-Order-Sales Registration Number : 2022-SeoulJung-gu-0056"})]}),b.jsxs("div",{className:"flex flex-col gap-6 md:items-end",children:[b.jsxs("div",{className:"flex flex-wrap gap-x-4 gap-y-2 md:justify-end text-gray-800 uppercase",children:[b.jsx(Ue,{to:"/account",className:"hover:opacity-50 transition-opacity",children:"Account"}),b.jsx(Ue,{to:"/customer-service",className:"hover:opacity-50 transition-opacity",children:"Customer Service"}),b.jsx(Ue,{to:"/terms",className:"hover:opacity-50 transition-opacity",children:"Terms"}),b.jsx(Ue,{to:"/shipping",className:"hover:opacity-50 transition-opacity",children:"Shipping & Returns"}),b.jsx(Ue,{to:"/privacy",className:"hover:opacity-50 transition-opacity",children:"Privacy Policy"})]}),b.jsxs("div",{className:"flex gap-2 text-[8px] md:text-[10px] text-gray-400 font-medium",children:[b.jsx("span",{className:"border border-gray-200 px-1 py-0.5 rounded-sm",children:"AMEX"}),b.jsx("span",{className:"border border-gray-200 px-1 py-0.5 rounded-sm",children:"JCB"}),b.jsx("span",{className:"border border-gray-200 px-1 py-0.5 rounded-sm",children:"MASTER"}),b.jsx("span",{className:"border border-gray-200 px-1 py-0.5 rounded-sm",children:"VISA"}),b.jsx("span",{className:"border border-gray-200 px-1 py-0.5 rounded-sm",children:"DISCOVER"})]})]})]})]})})}var ip=`@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  cursor: default;
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: #3c82f7;
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: #34c759;
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}`,sp={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let s=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");s||(s=document.createElement("style"),s.id="feedback-tool-styles-annotation-popup-css-styles",s.textContent=ip,document.head.appendChild(s))}var Te=sp;T.forwardRef(function({element:r,timestamp:f,selectedText:c,placeholder:_="What should change?",initialValue:d="",submitLabel:g="Add",onSubmit:j,onCancel:x,style:h,accentColor:C="#3c82f7",isExiting:R=!1,lightMode:Y=!1,computedStyles:X},W){const[L,q]=T.useState(d),[Z,B]=T.useState(!1),[K,fe]=T.useState("initial"),[ye,Se]=T.useState(!1),[F,Ae]=T.useState(!1),je=T.useRef(null),Ie=T.useRef(null);T.useEffect(()=>{R&&K!=="exit"&&fe("exit")},[R,K]),T.useEffect(()=>{requestAnimationFrame(()=>{fe("enter")});const O=setTimeout(()=>{fe("entered")},200),U=setTimeout(()=>{const V=je.current;V&&(V.focus(),V.selectionStart=V.selectionEnd=V.value.length,V.scrollTop=V.scrollHeight)},50);return()=>{clearTimeout(O),clearTimeout(U)}},[]);const it=T.useCallback(()=>{B(!0),setTimeout(()=>{B(!1),je.current?.focus()},250)},[]);T.useImperativeHandle(W,()=>({shake:it}),[it]);const Qe=T.useCallback(()=>{fe("exit"),setTimeout(()=>{x()},150)},[x]),Nt=T.useCallback(()=>{L.trim()&&j(L.trim())},[L,j]),Ct=T.useCallback(O=>{O.key==="Enter"&&!O.shiftKey&&(O.preventDefault(),Nt()),O.key==="Escape"&&Qe()},[Nt,Qe]),st=[Te.popup,Y?Te.light:"",K==="enter"?Te.enter:"",K==="entered"?Te.entered:"",K==="exit"?Te.exit:"",Z?Te.shake:""].filter(Boolean).join(" ");return b.jsxs("div",{ref:Ie,className:st,"data-annotation-popup":!0,style:h,onClick:O=>O.stopPropagation(),children:[b.jsxs("div",{className:Te.header,children:[X&&Object.keys(X).length>0?b.jsxs("button",{className:Te.headerToggle,onClick:()=>{const O=F;Ae(!F),O&&setTimeout(()=>je.current?.focus(),0)},type:"button",children:[b.jsx("svg",{className:`${Te.chevron} ${F?Te.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),b.jsx("span",{className:Te.element,children:r})]}):b.jsx("span",{className:Te.element,children:r}),f&&b.jsx("span",{className:Te.timestamp,children:f})]}),X&&Object.keys(X).length>0&&b.jsx("div",{className:`${Te.stylesWrapper} ${F?Te.expanded:""}`,children:b.jsx("div",{className:Te.stylesInner,children:b.jsx("div",{className:Te.stylesBlock,children:Object.entries(X).map(([O,U])=>b.jsxs("div",{className:Te.styleLine,children:[b.jsx("span",{className:Te.styleProperty,children:O.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",b.jsx("span",{className:Te.styleValue,children:U}),";"]},O))})})}),c&&b.jsxs("div",{className:Te.quote,children:["“",c.slice(0,80),c.length>80?"...":"","”"]}),b.jsx("textarea",{ref:je,className:Te.textarea,style:{borderColor:ye?C:void 0},placeholder:_,value:L,onChange:O=>q(O.target.value),onFocus:()=>Se(!0),onBlur:()=>Se(!1),rows:2,onKeyDown:Ct}),b.jsxs("div",{className:Te.actions,children:[b.jsx("button",{className:Te.cancel,onClick:Qe,children:"Cancel"}),b.jsx("button",{className:Te.submit,style:{backgroundColor:C,opacity:L.trim()?1:.4},onClick:Nt,disabled:!L.trim(),children:g})]})]})});var cp=`@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__markerIn___5FaAP {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___GU5jX {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__tooltipIn___0N31w {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__settingsPanelIn___MGfO8 {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
}
@keyframes styles-module__settingsPanelOut___Zfymi {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    filter: blur(5px);
  }
}
.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 257px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

.styles-module__toolbarContainer___dIhma {
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  cursor: grab;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__dragging___xrolZ {
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: grabbing;
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  width: calc-size(auto, size);
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
}
@supports not (width: calc-size(auto, size)) {
  .styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
    width: 257px;
  }
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
  pointer-events: none;
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -16px;
  right: -16px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: #3c82f7;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.25);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled) {
  background: rgba(255, 59, 48, 0.25);
  color: #ff3b30;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.5);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.04);
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(52, 199, 89, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: #3c82f7;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background: #3c82f7;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background: #34c759;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background: #34c759;
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background: #ff3b30;
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  background: white;
  border-radius: 1rem;
  padding: 13px 1rem 16px;
  min-width: 205px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: rgba(255, 255, 255, 0.5);
}

.styles-module__settingsVersion___TUcFq {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: calc(0.5rem + 2px);
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
.styles-module__cycleButton___FMKfw.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
.styles-module__settingsLabel___8UjfX.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(60, 130, 247, 0.15);
  color: #3c82f7;
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__toggleLabel___Xm8Aa.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__helpIcon___xQg56 {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
  margin-left: 0;
}
.styles-module__helpIcon___xQg56 svg {
  display: block;
  transform: translateY(1px);
  color: rgba(255, 255, 255, 0.2);
  transition: color 0.15s ease;
}
.styles-module__helpIcon___xQg56:hover svg {
  color: rgba(255, 255, 255, 0.4);
}
.styles-module__helpIcon___xQg56::after {
  content: attr(data-tooltip);
  position: absolute;
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
  padding: 6px 10px;
  background: #383838;
  color: rgba(255, 255, 255, 0.7);
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  border-radius: 10px;
  width: 152px;
  text-align: left;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s ease, visibility 0.15s ease;
  pointer-events: none;
  z-index: 100;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.28);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.styles-module__helpIcon___xQg56:hover::after {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.5s;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.08);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #34c759;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.5);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.06);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.15);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled) {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
}
.styles-module__light___r6n4Y.styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerQuote___FHmrz {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerNote___QkrrS {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerHint___2iF-6 {
  color: rgba(0, 0, 0, 0.35);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9 {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18 {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr:hover {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(0, 0, 0, 0.9);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-webkit-slider-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-moz-range-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56 svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56:hover svg {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__themeToggle___2rUjA {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 0.5rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__themeToggle___2rUjA:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}`;if(typeof document<"u"){let s=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");s||(s=document.createElement("style"),s.id="feedback-tool-styles-page-toolbar-css-styles",s.textContent=cp,document.head.appendChild(s))}function op(){return b.jsxs(Uh,{children:[!1,b.jsxs("div",{className:"w-full min-h-screen bg-white text-black font-sans antialiased selection:bg-black selection:text-white flex flex-col",children:[b.jsx(tp,{}),b.jsx("main",{className:"flex-grow",children:b.jsxs(rh,{children:[b.jsx(Da,{path:"/",element:b.jsx(d_,{})}),b.jsx(Da,{path:"/category",element:b.jsx(d_,{})}),b.jsx(Da,{path:"/product/:id",element:b.jsx(ap,{})}),b.jsx(Da,{path:"/cart",element:b.jsx("div",{className:"pt-32 text-center text-sm font-medium tracking-wide font-['Rajdhani']",children:"CART IS EMPTY"})})]})}),b.jsx(up,{})]})]})}_y.createRoot(document.getElementById("root")).render(b.jsx(T.StrictMode,{children:b.jsx(op,{})}));
