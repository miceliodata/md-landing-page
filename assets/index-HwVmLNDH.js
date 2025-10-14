(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function vp(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Ie={},aa=[],gr=()=>{},zy=()=>!1,ju=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),xp=n=>n.startsWith("onUpdate:"),vn=Object.assign,yp=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Hy=Object.prototype.hasOwnProperty,be=(n,t)=>Hy.call(n,t),Jt=Array.isArray,la=n=>Ku(n)==="[object Map]",h0=n=>Ku(n)==="[object Set]",ie=n=>typeof n=="function",Ke=n=>typeof n=="string",Ps=n=>typeof n=="symbol",ze=n=>n!==null&&typeof n=="object",d0=n=>(ze(n)||ie(n))&&ie(n.then)&&ie(n.catch),p0=Object.prototype.toString,Ku=n=>p0.call(n),Vy=n=>Ku(n).slice(8,-1),m0=n=>Ku(n)==="[object Object]",Sp=n=>Ke(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,sl=vp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zu=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Gy=/-(\w)/g,$i=Zu(n=>n.replace(Gy,(t,e)=>e?e.toUpperCase():"")),Wy=/\B([A-Z])/g,Mo=Zu(n=>n.replace(Wy,"-$1").toLowerCase()),Ju=Zu(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sf=Zu(n=>n?`on${Ju(n)}`:""),gs=(n,t)=>!Object.is(n,t),eu=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Fh=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Bh=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Xy=n=>{const t=Ke(n)?Number(n):NaN;return isNaN(t)?n:t};let Em;const Qu=()=>Em||(Em=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qe(n){if(Jt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=Ke(i)?jy(i):Qe(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(Ke(n)||ze(n))return n}const Yy=/;(?![^(]*\))/g,$y=/:([^]+)/,qy=/\/\*[^]*?\*\//g;function jy(n){const t={};return n.replace(qy,"").split(Yy).forEach(e=>{if(e){const i=e.split($y);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ii(n){let t="";if(Ke(n))t=n;else if(Jt(n))for(let e=0;e<n.length;e++){const i=ii(n[e]);i&&(t+=i+" ")}else if(ze(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Ky="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zy=vp(Ky);function _0(n){return!!n||n===""}const g0=n=>!!(n&&n.__v_isRef===!0),ni=n=>Ke(n)?n:n==null?"":Jt(n)||ze(n)&&(n.toString===p0||!ie(n.toString))?g0(n)?ni(n.value):JSON.stringify(n,v0,2):String(n),v0=(n,t)=>g0(t)?v0(n,t.value):la(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[Mf(i,s)+" =>"]=r,e),{})}:h0(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Mf(e))}:Ps(t)?Mf(t):ze(t)&&!Jt(t)&&!m0(t)?String(t):t,Mf=(n,t="")=>{var e;return Ps(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ti;class Jy{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ti,!t&&ti&&(this.index=(ti.scopes||(ti.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=ti;try{return ti=this,t()}finally{ti=e}}}on(){++this._on===1&&(this.prevScope=ti,ti=this)}off(){this._on>0&&--this._on===0&&(ti=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Qy(){return ti}let Oe;const Ef=new WeakSet;class x0{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ti&&ti.active&&ti.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ef.has(this)&&(Ef.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||S0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bm(this),M0(this);const t=Oe,e=tr;Oe=this,tr=!0;try{return this.fn()}finally{E0(this),Oe=t,tr=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)bp(t);this.deps=this.depsTail=void 0,bm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ef.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kh(this)&&this.run()}get dirty(){return kh(this)}}let y0=0,ol,al;function S0(n,t=!1){if(n.flags|=8,t){n.next=al,al=n;return}n.next=ol,ol=n}function Mp(){y0++}function Ep(){if(--y0>0)return;if(al){let t=al;for(al=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;ol;){let t=ol;for(ol=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function M0(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function E0(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),bp(i),tS(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function kh(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(b0(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function b0(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Cl)||(n.globalVersion=Cl,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!kh(n))))return;n.flags|=2;const t=n.dep,e=Oe,i=tr;Oe=n,tr=!0;try{M0(n);const r=n.fn(n._value);(t.version===0||gs(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{Oe=e,tr=i,E0(n),n.flags&=-3}}function bp(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)bp(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function tS(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let tr=!0;const T0=[];function Wr(){T0.push(tr),tr=!1}function Xr(){const n=T0.pop();tr=n===void 0?!0:n}function bm(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Oe;Oe=void 0;try{t()}finally{Oe=e}}}let Cl=0;class eS{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tp{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Oe||!tr||Oe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Oe)e=this.activeLink=new eS(Oe,this),Oe.deps?(e.prevDep=Oe.depsTail,Oe.depsTail.nextDep=e,Oe.depsTail=e):Oe.deps=Oe.depsTail=e,w0(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Oe.depsTail,e.nextDep=void 0,Oe.depsTail.nextDep=e,Oe.depsTail=e,Oe.deps===e&&(Oe.deps=i)}return e}trigger(t){this.version++,Cl++,this.notify(t)}notify(t){Mp();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ep()}}}function w0(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)w0(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const zh=new WeakMap,ro=Symbol(""),Hh=Symbol(""),Rl=Symbol("");function Cn(n,t,e){if(tr&&Oe){let i=zh.get(n);i||zh.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new Tp),r.map=i,r.key=e),r.track()}}function Nr(n,t,e,i,r,s){const o=zh.get(n);if(!o){Cl++;return}const a=l=>{l&&l.trigger()};if(Mp(),t==="clear")o.forEach(a);else{const l=Jt(n),c=l&&Sp(e);if(l&&e==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Rl||!Ps(d)&&d>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Rl)),t){case"add":l?c&&a(o.get("length")):(a(o.get(ro)),la(n)&&a(o.get(Hh)));break;case"delete":l||(a(o.get(ro)),la(n)&&a(o.get(Hh)));break;case"set":la(n)&&a(o.get(ro));break}}Ep()}function Ao(n){const t=Se(n);return t===n?t:(Cn(t,"iterate",Rl),Xi(n)?t:t.map(yn))}function tf(n){return Cn(n=Se(n),"iterate",Rl),n}const nS={__proto__:null,[Symbol.iterator](){return bf(this,Symbol.iterator,yn)},concat(...n){return Ao(this).concat(...n.map(t=>Jt(t)?Ao(t):t))},entries(){return bf(this,"entries",n=>(n[1]=yn(n[1]),n))},every(n,t){return Er(this,"every",n,t,void 0,arguments)},filter(n,t){return Er(this,"filter",n,t,e=>e.map(yn),arguments)},find(n,t){return Er(this,"find",n,t,yn,arguments)},findIndex(n,t){return Er(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Er(this,"findLast",n,t,yn,arguments)},findLastIndex(n,t){return Er(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Er(this,"forEach",n,t,void 0,arguments)},includes(...n){return Tf(this,"includes",n)},indexOf(...n){return Tf(this,"indexOf",n)},join(n){return Ao(this).join(n)},lastIndexOf(...n){return Tf(this,"lastIndexOf",n)},map(n,t){return Er(this,"map",n,t,void 0,arguments)},pop(){return Na(this,"pop")},push(...n){return Na(this,"push",n)},reduce(n,...t){return Tm(this,"reduce",n,t)},reduceRight(n,...t){return Tm(this,"reduceRight",n,t)},shift(){return Na(this,"shift")},some(n,t){return Er(this,"some",n,t,void 0,arguments)},splice(...n){return Na(this,"splice",n)},toReversed(){return Ao(this).toReversed()},toSorted(n){return Ao(this).toSorted(n)},toSpliced(...n){return Ao(this).toSpliced(...n)},unshift(...n){return Na(this,"unshift",n)},values(){return bf(this,"values",yn)}};function bf(n,t,e){const i=tf(n),r=i[t]();return i!==n&&!Xi(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=e(s.value)),s}),r}const iS=Array.prototype;function Er(n,t,e,i,r,s){const o=tf(n),a=o!==n&&!Xi(n),l=o[t];if(l!==iS[t]){const f=l.apply(n,s);return a?yn(f):f}let c=e;o!==n&&(a?c=function(f,d){return e.call(this,yn(f),d,n)}:e.length>2&&(c=function(f,d){return e.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Tm(n,t,e,i){const r=tf(n);let s=e;return r!==n&&(Xi(n)?e.length>3&&(s=function(o,a,l){return e.call(this,o,a,l,n)}):s=function(o,a,l){return e.call(this,o,yn(a),l,n)}),r[t](s,...i)}function Tf(n,t,e){const i=Se(n);Cn(i,"iterate",Rl);const r=i[t](...e);return(r===-1||r===!1)&&Cp(e[0])?(e[0]=Se(e[0]),i[t](...e)):r}function Na(n,t,e=[]){Wr(),Mp();const i=Se(n)[t].apply(n,e);return Ep(),Xr(),i}const rS=vp("__proto__,__v_isRef,__isVue"),A0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ps));function sS(n){Ps(n)||(n=String(n));const t=Se(this);return Cn(t,"has",n),t.hasOwnProperty(n)}class C0{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?mS:L0:s?D0:P0).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Jt(t);if(!r){let l;if(o&&(l=nS[e]))return l;if(e==="hasOwnProperty")return sS}const a=Reflect.get(t,e,In(t)?t:i);return(Ps(e)?A0.has(e):rS(e))||(r||Cn(t,"get",e),s)?a:In(a)?o&&Sp(e)?a:a.value:ze(a)?r?U0(a):ef(a):a}}class R0 extends C0{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];if(!this._isShallow){const l=bs(s);if(!Xi(i)&&!bs(i)&&(s=Se(s),i=Se(i)),!Jt(t)&&In(s)&&!In(i))return l?!1:(s.value=i,!0)}const o=Jt(t)&&Sp(e)?Number(e)<t.length:be(t,e),a=Reflect.set(t,e,i,In(t)?t:r);return t===Se(r)&&(o?gs(i,s)&&Nr(t,"set",e,i):Nr(t,"add",e,i)),a}deleteProperty(t,e){const i=be(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Nr(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!Ps(e)||!A0.has(e))&&Cn(t,"has",e),i}ownKeys(t){return Cn(t,"iterate",Jt(t)?"length":ro),Reflect.ownKeys(t)}}class oS extends C0{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const aS=new R0,lS=new oS,cS=new R0(!0);const Vh=n=>n,ac=n=>Reflect.getPrototypeOf(n);function uS(n,t,e){return function(...i){const r=this.__v_raw,s=Se(r),o=la(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=e?Vh:t?Mu:yn;return!t&&Cn(s,"iterate",l?Hh:ro),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function lc(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function fS(n,t){const e={get(r){const s=this.__v_raw,o=Se(s),a=Se(r);n||(gs(r,a)&&Cn(o,"get",r),Cn(o,"get",a));const{has:l}=ac(o),c=t?Vh:n?Mu:yn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Cn(Se(r),"iterate",ro),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Se(s),a=Se(r);return n||(gs(r,a)&&Cn(o,"has",r),Cn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Se(a),c=t?Vh:n?Mu:yn;return!n&&Cn(l,"iterate",ro),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return vn(e,n?{add:lc("add"),set:lc("set"),delete:lc("delete"),clear:lc("clear")}:{add(r){!t&&!Xi(r)&&!bs(r)&&(r=Se(r));const s=Se(this);return ac(s).has.call(s,r)||(s.add(r),Nr(s,"add",r,r)),this},set(r,s){!t&&!Xi(s)&&!bs(s)&&(s=Se(s));const o=Se(this),{has:a,get:l}=ac(o);let c=a.call(o,r);c||(r=Se(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?gs(s,u)&&Nr(o,"set",r,s):Nr(o,"add",r,s),this},delete(r){const s=Se(this),{has:o,get:a}=ac(s);let l=o.call(s,r);l||(r=Se(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Nr(s,"delete",r,void 0),c},clear(){const r=Se(this),s=r.size!==0,o=r.clear();return s&&Nr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=uS(r,n,t)}),e}function wp(n,t){const e=fS(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(be(e,r)&&r in i?e:i,r,s)}const hS={get:wp(!1,!1)},dS={get:wp(!1,!0)},pS={get:wp(!0,!1)};const P0=new WeakMap,D0=new WeakMap,L0=new WeakMap,mS=new WeakMap;function _S(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gS(n){return n.__v_skip||!Object.isExtensible(n)?0:_S(Vy(n))}function ef(n){return bs(n)?n:Ap(n,!1,aS,hS,P0)}function I0(n){return Ap(n,!1,cS,dS,D0)}function U0(n){return Ap(n,!0,lS,pS,L0)}function Ap(n,t,e,i,r){if(!ze(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=gS(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function ca(n){return bs(n)?ca(n.__v_raw):!!(n&&n.__v_isReactive)}function bs(n){return!!(n&&n.__v_isReadonly)}function Xi(n){return!!(n&&n.__v_isShallow)}function Cp(n){return n?!!n.__v_raw:!1}function Se(n){const t=n&&n.__v_raw;return t?Se(t):n}function vS(n){return!be(n,"__v_skip")&&Object.isExtensible(n)&&Fh(n,"__v_skip",!0),n}const yn=n=>ze(n)?ef(n):n,Mu=n=>ze(n)?U0(n):n;function In(n){return n?n.__v_isRef===!0:!1}function ne(n){return O0(n,!1)}function xS(n){return O0(n,!0)}function O0(n,t){return In(n)?n:new yS(n,t)}class yS{constructor(t,e){this.dep=new Tp,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Se(t),this._value=e?t:yn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Xi(t)||bs(t);t=i?t:Se(t),gs(t,e)&&(this._rawValue=t,this._value=i?t:yn(t),this.dep.trigger())}}function so(n){return In(n)?n.value:n}const SS={get:(n,t,e)=>t==="__v_raw"?n:so(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return In(r)&&!In(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function N0(n){return ca(n)?n:new Proxy(n,SS)}class MS{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Tp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Cl-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return S0(this,!0),!0}get value(){const t=this.dep.track();return b0(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ES(n,t,e=!1){let i,r;return ie(n)?i=n:(i=n.get,r=n.set),new MS(i,r,e)}const cc={},Eu=new WeakMap;let Ys;function bS(n,t=!1,e=Ys){if(e){let i=Eu.get(e);i||Eu.set(e,i=[]),i.push(n)}}function TS(n,t,e=Ie){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,c=x=>r?x:Xi(x)||r===!1||r===0?Fr(x,1):Fr(x);let u,f,d,h,g=!1,_=!1;if(In(n)?(f=()=>n.value,g=Xi(n)):ca(n)?(f=()=>c(n),g=!0):Jt(n)?(_=!0,g=n.some(x=>ca(x)||Xi(x)),f=()=>n.map(x=>{if(In(x))return x.value;if(ca(x))return c(x);if(ie(x))return l?l(x,2):x()})):ie(n)?t?f=l?()=>l(n,2):n:f=()=>{if(d){Wr();try{d()}finally{Xr()}}const x=Ys;Ys=u;try{return l?l(n,3,[h]):n(h)}finally{Ys=x}}:f=gr,t&&r){const x=f,w=r===!0?1/0:r;f=()=>Fr(x(),w)}const m=Qy(),p=()=>{u.stop(),m&&m.active&&yp(m.effects,u)};if(s&&t){const x=t;t=(...w)=>{x(...w),p()}}let y=_?new Array(n.length).fill(cc):cc;const E=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const w=u.run();if(r||g||(_?w.some((A,T)=>gs(A,y[T])):gs(w,y))){d&&d();const A=Ys;Ys=u;try{const T=[w,y===cc?void 0:_&&y[0]===cc?[]:y,h];y=w,l?l(t,3,T):t(...T)}finally{Ys=A}}}else u.run()};return a&&a(E),u=new x0(f),u.scheduler=o?()=>o(E,!1):E,h=x=>bS(x,!1,u),d=u.onStop=()=>{const x=Eu.get(u);if(x){if(l)l(x,4);else for(const w of x)w();Eu.delete(u)}},t?i?E(!0):y=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Fr(n,t=1/0,e){if(t<=0||!ze(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,In(n))Fr(n.value,t,e);else if(Jt(n))for(let i=0;i<n.length;i++)Fr(n[i],t,e);else if(h0(n)||la(n))n.forEach(i=>{Fr(i,t,e)});else if(m0(n)){for(const i in n)Fr(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Fr(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tc(n,t,e,i){try{return i?n(...i):n()}catch(r){nf(r,t,e)}}function ir(n,t,e,i){if(ie(n)){const r=tc(n,t,e,i);return r&&d0(r)&&r.catch(s=>{nf(s,t,e)}),r}if(Jt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ir(n[s],t,e,i));return r}}function nf(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Ie;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Wr(),tc(s,null,10,[n,l,c]),Xr();return}}wS(n,e,r,i,o)}function wS(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const $n=[];let or=-1;const ua=[];let ss=null,Ko=0;const F0=Promise.resolve();let bu=null;function B0(n){const t=bu||F0;return n?t.then(this?n.bind(this):n):t}function AS(n){let t=or+1,e=$n.length;for(;t<e;){const i=t+e>>>1,r=$n[i],s=Pl(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function Rp(n){if(!(n.flags&1)){const t=Pl(n),e=$n[$n.length-1];!e||!(n.flags&2)&&t>=Pl(e)?$n.push(n):$n.splice(AS(t),0,n),n.flags|=1,k0()}}function k0(){bu||(bu=F0.then(H0))}function CS(n){Jt(n)?ua.push(...n):ss&&n.id===-1?ss.splice(Ko+1,0,n):n.flags&1||(ua.push(n),n.flags|=1),k0()}function wm(n,t,e=or+1){for(;e<$n.length;e++){const i=$n[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;$n.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function z0(n){if(ua.length){const t=[...new Set(ua)].sort((e,i)=>Pl(e)-Pl(i));if(ua.length=0,ss){ss.push(...t);return}for(ss=t,Ko=0;Ko<ss.length;Ko++){const e=ss[Ko];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ss=null,Ko=0}}const Pl=n=>n.id==null?n.flags&2?-1:1/0:n.id;function H0(n){try{for(or=0;or<$n.length;or++){const t=$n[or];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),tc(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;or<$n.length;or++){const t=$n[or];t&&(t.flags&=-2)}or=-1,$n.length=0,z0(),bu=null,($n.length||ua.length)&&H0()}}let Ei=null,V0=null;function Tu(n){const t=Ei;return Ei=n,V0=n&&n.type.__scopeId||null,t}function G0(n,t=Ei,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&Fm(-1);const s=Tu(t);let o;try{o=n(...r)}finally{Tu(s),i._d&&Fm(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function uc(n,t){if(Ei===null)return n;const e=cf(Ei),i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=Ie]=t[r];s&&(ie(s)&&(s={mounted:s,updated:s}),s.deep&&Fr(o),i.push({dir:s,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Us(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Wr(),ir(l,e,8,[n.el,a,n,t]),Xr())}}const RS=Symbol("_vte"),W0=n=>n.__isTeleport,os=Symbol("_leaveCb"),fc=Symbol("_enterCb");function PS(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Mr(()=>{n.isMounted=!0}),of(()=>{n.isUnmounting=!0}),n}const Li=[Function,Array],X0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Li,onEnter:Li,onAfterEnter:Li,onEnterCancelled:Li,onBeforeLeave:Li,onLeave:Li,onAfterLeave:Li,onLeaveCancelled:Li,onBeforeAppear:Li,onAppear:Li,onAfterAppear:Li,onAppearCancelled:Li},Y0=n=>{const t=n.subTree;return t.component?Y0(t.component):t},DS={name:"BaseTransition",props:X0,setup(n,{slots:t}){const e=Sv(),i=PS();return()=>{const r=t.default&&j0(t.default(),!0);if(!r||!r.length)return;const s=$0(r),o=Se(n),{mode:a}=o;if(i.isLeaving)return wf(s);const l=Am(s);if(!l)return wf(s);let c=Gh(l,o,i,e,f=>c=f);l.type!==qn&&Dl(l,c);let u=e.subTree&&Am(e.subTree);if(u&&u.type!==qn&&!Zs(l,u)&&Y0(e).type!==qn){let f=Gh(u,o,i,e);if(Dl(u,f),a==="out-in"&&l.type!==qn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,u=void 0},wf(s);a==="in-out"&&l.type!==qn?f.delayLeave=(d,h,g)=>{const _=q0(i,u);_[String(u.key)]=u,d[os]=()=>{h(),d[os]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function $0(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==qn){t=e;break}}return t}const LS=DS;function q0(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Gh(n,t,e,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:y,onAppearCancelled:E}=t,x=String(n.key),w=q0(e,n),A=(S,b)=>{S&&ir(S,i,9,b)},T=(S,b)=>{const U=b[1];A(S,b),Jt(S)?S.every(I=>I.length<=1)&&U():S.length<=1&&U()},O={mode:o,persisted:a,beforeEnter(S){let b=l;if(!e.isMounted)if(s)b=m||l;else return;S[os]&&S[os](!0);const U=w[x];U&&Zs(n,U)&&U.el[os]&&U.el[os](),A(b,[S])},enter(S){let b=c,U=u,I=f;if(!e.isMounted)if(s)b=p||c,U=y||u,I=E||f;else return;let F=!1;const W=S[fc]=tt=>{F||(F=!0,tt?A(I,[S]):A(U,[S]),O.delayedLeave&&O.delayedLeave(),S[fc]=void 0)};b?T(b,[S,W]):W()},leave(S,b){const U=String(n.key);if(S[fc]&&S[fc](!0),e.isUnmounting)return b();A(d,[S]);let I=!1;const F=S[os]=W=>{I||(I=!0,b(),W?A(_,[S]):A(g,[S]),S[os]=void 0,w[U]===n&&delete w[U])};w[U]=n,h?T(h,[S,F]):F()},clone(S){const b=Gh(S,t,e,i,r);return r&&r(b),b}};return O}function wf(n){if(rf(n))return n=Ts(n),n.children=null,n}function Am(n){if(!rf(n))return W0(n.type)&&n.children?$0(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&ie(e.default))return e.default()}}function Dl(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Dl(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function j0(n,t=!1,e){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===Rn?(o.patchFlag&128&&r++,i=i.concat(j0(o.children,t,a))):(t||o.type!==qn)&&i.push(a!=null?Ts(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Zn(n,t){return ie(n)?vn({name:n.name},t,{setup:n}):n}function K0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ll(n,t,e,i,r=!1){if(Jt(n)){n.forEach((g,_)=>ll(g,t&&(Jt(t)?t[_]:t),e,i,r));return}if(cl(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ll(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?cf(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===Ie?a.refs={}:a.refs,f=a.setupState,d=Se(f),h=f===Ie?()=>!1:g=>be(d,g);if(c!=null&&c!==l&&(Ke(c)?(u[c]=null,h(c)&&(f[c]=null)):In(c)&&(c.value=null)),ie(l))tc(l,a,12,[o,u]);else{const g=Ke(l),_=In(l);if(g||_){const m=()=>{if(n.f){const p=g?h(l)?f[l]:u[l]:l.value;r?Jt(p)&&yp(p,s):Jt(p)?p.includes(s)||p.push(s):g?(u[l]=[s],h(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,h(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,mi(m,e)):m()}}}Qu().requestIdleCallback;Qu().cancelIdleCallback;const cl=n=>!!n.type.__asyncLoader,rf=n=>n.type.__isKeepAlive;function IS(n,t){Z0(n,"a",t)}function US(n,t){Z0(n,"da",t)}function Z0(n,t,e=Pn){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(sf(t,i,e),e){let r=e.parent;for(;r&&r.parent;)rf(r.parent.vnode)&&OS(i,t,e,r),r=r.parent}}function OS(n,t,e,i){const r=sf(t,n,i,!0);Ds(()=>{yp(i[t],r)},e)}function sf(n,t,e=Pn,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{Wr();const a=ec(e),l=ir(t,e,n,o);return a(),Xr(),l});return i?r.unshift(s):r.push(s),s}}const jr=n=>(t,e=Pn)=>{(!Ul||n==="sp")&&sf(n,(...i)=>t(...i),e)},NS=jr("bm"),Mr=jr("m"),FS=jr("bu"),BS=jr("u"),of=jr("bum"),Ds=jr("um"),kS=jr("sp"),zS=jr("rtg"),HS=jr("rtc");function VS(n,t=Pn){sf("ec",n,t)}const J0="components";function GS(n,t){return tv(J0,n,!0,t)||n}const Q0=Symbol.for("v-ndc");function wu(n){return Ke(n)?tv(J0,n,!1)||n:n||Q0}function tv(n,t,e=!0,i=!1){const r=Ei||Pn;if(r){const s=r.type;{const a=RM(s,!1);if(a&&(a===t||a===$i(t)||a===Ju($i(t))))return s}const o=Cm(r[n]||s[n],t)||Cm(r.appContext[n],t);return!o&&i?s:o}}function Cm(n,t){return n&&(n[t]||n[$i(t)]||n[Ju($i(t))])}function Pp(n,t,e,i){let r;const s=e,o=Jt(n);if(o||Ke(n)){const a=o&&ca(n);let l=!1,c=!1;a&&(l=!Xi(n),c=bs(n),n=tf(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=t(l?c?Mu(yn(n[u])):yn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(ze(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=t(n[u],u,l,s)}}else r=[];return r}const Wh=n=>n?Mv(n)?cf(n):Wh(n.parent):null,ul=vn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Wh(n.parent),$root:n=>Wh(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>nv(n),$forceUpdate:n=>n.f||(n.f=()=>{Rp(n.update)}),$nextTick:n=>n.n||(n.n=B0.bind(n.proxy)),$watch:n=>uM.bind(n)}),Af=(n,t)=>n!==Ie&&!n.__isScriptSetup&&be(n,t),WS={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Af(i,t))return o[t]=1,i[t];if(r!==Ie&&be(r,t))return o[t]=2,r[t];if((c=n.propsOptions[0])&&be(c,t))return o[t]=3,s[t];if(e!==Ie&&be(e,t))return o[t]=4,e[t];Xh&&(o[t]=0)}}const u=ul[t];let f,d;if(u)return t==="$attrs"&&Cn(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[t]))return f;if(e!==Ie&&be(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,be(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return Af(r,t)?(r[t]=e,!0):i!==Ie&&be(i,t)?(i[t]=e,!0):be(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!e[o]||n!==Ie&&be(n,o)||Af(t,o)||(a=s[0])&&be(a,o)||be(i,o)||be(ul,o)||be(r.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:be(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Rm(n){return Jt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Xh=!0;function XS(n){const t=nv(n),e=n.proxy,i=n.ctx;Xh=!1,t.beforeCreate&&Pm(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:E,unmounted:x,render:w,renderTracked:A,renderTriggered:T,errorCaptured:O,serverPrefetch:S,expose:b,inheritAttrs:U,components:I,directives:F,filters:W}=t;if(c&&YS(c,i,null),o)for(const K in o){const H=o[K];ie(H)&&(i[K]=H.bind(e))}if(r){const K=r.call(e,e);ze(K)&&(n.data=ef(K))}if(Xh=!0,s)for(const K in s){const H=s[K],dt=ie(H)?H.bind(e,e):ie(H.get)?H.get.bind(e,e):gr,N=!ie(H)&&ie(H.set)?H.set.bind(e):gr,xt=zi({get:dt,set:N});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>xt.value,set:It=>xt.value=It})}if(a)for(const K in a)ev(a[K],i,e,K);if(l){const K=ie(l)?l.call(e):l;Reflect.ownKeys(K).forEach(H=>{nu(H,K[H])})}u&&Pm(u,n,"c");function Z(K,H){Jt(H)?H.forEach(dt=>K(dt.bind(e))):H&&K(H.bind(e))}if(Z(NS,f),Z(Mr,d),Z(FS,h),Z(BS,g),Z(IS,_),Z(US,m),Z(VS,O),Z(HS,A),Z(zS,T),Z(of,y),Z(Ds,x),Z(kS,S),Jt(b))if(b.length){const K=n.exposed||(n.exposed={});b.forEach(H=>{Object.defineProperty(K,H,{get:()=>e[H],set:dt=>e[H]=dt,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===gr&&(n.render=w),U!=null&&(n.inheritAttrs=U),I&&(n.components=I),F&&(n.directives=F),S&&K0(n)}function YS(n,t,e=gr){Jt(n)&&(n=Yh(n));for(const i in n){const r=n[i];let s;ze(r)?"default"in r?s=Hr(r.from||i,r.default,!0):s=Hr(r.from||i):s=Hr(r),In(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function Pm(n,t,e){ir(Jt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function ev(n,t,e,i){let r=i.includes(".")?mv(e,i):()=>e[i];if(Ke(n)){const s=t[n];ie(s)&&fl(r,s)}else if(ie(n))fl(r,n.bind(e));else if(ze(n))if(Jt(n))n.forEach(s=>ev(s,t,e,i));else{const s=ie(n.handler)?n.handler.bind(e):t[n.handler];ie(s)&&fl(r,s,n)}}function nv(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>Au(l,c,o,!0)),Au(l,t,o)),ze(t)&&s.set(t,l),l}function Au(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&Au(n,s,e,!0),r&&r.forEach(o=>Au(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=$S[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const $S={data:Dm,props:Lm,emits:Lm,methods:Ka,computed:Ka,beforeCreate:Hn,created:Hn,beforeMount:Hn,mounted:Hn,beforeUpdate:Hn,updated:Hn,beforeDestroy:Hn,beforeUnmount:Hn,destroyed:Hn,unmounted:Hn,activated:Hn,deactivated:Hn,errorCaptured:Hn,serverPrefetch:Hn,components:Ka,directives:Ka,watch:jS,provide:Dm,inject:qS};function Dm(n,t){return t?n?function(){return vn(ie(n)?n.call(this,this):n,ie(t)?t.call(this,this):t)}:t:n}function qS(n,t){return Ka(Yh(n),Yh(t))}function Yh(n){if(Jt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Hn(n,t){return n?[...new Set([].concat(n,t))]:t}function Ka(n,t){return n?vn(Object.create(null),n,t):t}function Lm(n,t){return n?Jt(n)&&Jt(t)?[...new Set([...n,...t])]:vn(Object.create(null),Rm(n),Rm(t??{})):t}function jS(n,t){if(!n)return t;if(!t)return n;const e=vn(Object.create(null),n);for(const i in t)e[i]=Hn(n[i],t[i]);return e}function iv(){return{app:null,config:{isNativeTag:zy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let KS=0;function ZS(n,t){return function(i,r=null){ie(i)||(i=vn({},i)),r!=null&&!ze(r)&&(r=null);const s=iv(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:KS++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:DM,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ie(u.install)?(o.add(u),u.install(c,...f)):ie(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||se(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,cf(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ir(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=fa;fa=c;try{return u()}finally{fa=f}}};return c}}let fa=null;function nu(n,t){if(Pn){let e=Pn.provides;const i=Pn.parent&&Pn.parent.provides;i===e&&(e=Pn.provides=Object.create(i)),e[n]=t}}function Hr(n,t,e=!1){const i=Sv();if(i||fa){let r=fa?fa._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&ie(t)?t.call(i&&i.proxy):t}}const rv={},sv=()=>Object.create(rv),ov=n=>Object.getPrototypeOf(n)===rv;function JS(n,t,e,i=!1){const r={},s=sv();n.propsDefaults=Object.create(null),av(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:I0(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function QS(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Se(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(af(n.emitsOptions,d))continue;const h=t[d];if(l)if(be(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=$i(d);r[g]=$h(l,a,g,h,n,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{av(n,t,r,s)&&(c=!0);let u;for(const f in a)(!t||!be(t,f)&&((u=Mo(f))===f||!be(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=$h(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!be(t,f))&&(delete s[f],c=!0)}c&&Nr(n.attrs,"set","")}function av(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(sl(l))continue;const c=t[l];let u;r&&be(r,u=$i(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:af(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Se(e),c=a||Ie;for(let u=0;u<s.length;u++){const f=s[u];e[f]=$h(r,l,f,c[f],n,!be(c,f))}}return o}function $h(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=be(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ie(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const u=ec(r);i=c[e]=l.call(null,t),u()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Mo(e))&&(i=!0))}return i}const tM=new WeakMap;function lv(n,t,e=!1){const i=e?tM:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ie(n)){const u=f=>{l=!0;const[d,h]=lv(f,t,!0);vn(o,d),h&&a.push(...h)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ze(n)&&i.set(n,aa),aa;if(Jt(s))for(let u=0;u<s.length;u++){const f=$i(s[u]);Im(f)&&(o[f]=Ie)}else if(s)for(const u in s){const f=$i(u);if(Im(f)){const d=s[u],h=o[f]=Jt(d)||ie(d)?{type:d}:vn({},d),g=h.type;let _=!1,m=!0;if(Jt(g))for(let p=0;p<g.length;++p){const y=g[p],E=ie(y)&&y.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=ie(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||be(h,"default"))&&a.push(f)}}const c=[o,a];return ze(n)&&i.set(n,c),c}function Im(n){return n[0]!=="$"&&!sl(n)}const Dp=n=>n==="_"||n==="__"||n==="_ctx"||n==="$stable",Lp=n=>Jt(n)?n.map(cr):[cr(n)],eM=(n,t,e)=>{if(t._n)return t;const i=G0((...r)=>Lp(t(...r)),e);return i._c=!1,i},cv=(n,t,e)=>{const i=n._ctx;for(const r in n){if(Dp(r))continue;const s=n[r];if(ie(s))t[r]=eM(r,s,i);else if(s!=null){const o=Lp(s);t[r]=()=>o}}},uv=(n,t)=>{const e=Lp(t);n.slots.default=()=>e},fv=(n,t,e)=>{for(const i in t)(e||!Dp(i))&&(n[i]=t[i])},nM=(n,t,e)=>{const i=n.slots=sv();if(n.vnode.shapeFlag&32){const r=t.__;r&&Fh(i,"__",r,!0);const s=t._;s?(fv(i,t,e),e&&Fh(i,"_",s,!0)):cv(t,i)}else t&&uv(n,t)},iM=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=Ie;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:fv(r,t,e):(s=!t.$stable,cv(t,r)),o=t}else t&&(uv(n,t),o={default:1});if(s)for(const a in r)!Dp(a)&&o[a]==null&&delete r[a]},mi=gM;function rM(n){return sM(n)}function sM(n,t){const e=Qu();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=gr,insertStaticContent:g}=n,_=(D,v,B,V=null,q=null,P=null,ct=void 0,it=null,lt=!!v.dynamicChildren)=>{if(D===v)return;D&&!Zs(D,v)&&(V=L(D),It(D,q,P,!0),D=null),v.patchFlag===-2&&(lt=!1,v.dynamicChildren=null);const{type:at,ref:yt,shapeFlag:C}=v;switch(at){case lf:m(D,v,B,V);break;case qn:p(D,v,B,V);break;case iu:D==null&&y(v,B,V,ct);break;case Rn:I(D,v,B,V,q,P,ct,it,lt);break;default:C&1?w(D,v,B,V,q,P,ct,it,lt):C&6?F(D,v,B,V,q,P,ct,it,lt):(C&64||C&128)&&at.process(D,v,B,V,q,P,ct,it,lt,nt)}yt!=null&&q?ll(yt,D&&D.ref,P,v||D,!v):yt==null&&D&&D.ref!=null&&ll(D.ref,null,P,D,!0)},m=(D,v,B,V)=>{if(D==null)i(v.el=a(v.children),B,V);else{const q=v.el=D.el;v.children!==D.children&&c(q,v.children)}},p=(D,v,B,V)=>{D==null?i(v.el=l(v.children||""),B,V):v.el=D.el},y=(D,v,B,V)=>{[D.el,D.anchor]=g(D.children,v,B,V,D.el,D.anchor)},E=({el:D,anchor:v},B,V)=>{let q;for(;D&&D!==v;)q=d(D),i(D,B,V),D=q;i(v,B,V)},x=({el:D,anchor:v})=>{let B;for(;D&&D!==v;)B=d(D),r(D),D=B;r(v)},w=(D,v,B,V,q,P,ct,it,lt)=>{v.type==="svg"?ct="svg":v.type==="math"&&(ct="mathml"),D==null?A(v,B,V,q,P,ct,it,lt):S(D,v,q,P,ct,it,lt)},A=(D,v,B,V,q,P,ct,it)=>{let lt,at;const{props:yt,shapeFlag:C,transition:M,dirs:z}=D;if(lt=D.el=o(D.type,P,yt&&yt.is,yt),C&8?u(lt,D.children):C&16&&O(D.children,lt,null,V,q,Cf(D,P),ct,it),z&&Us(D,null,V,"created"),T(lt,D,D.scopeId,ct,V),yt){for(const st in yt)st!=="value"&&!sl(st)&&s(lt,st,null,yt[st],P,V);"value"in yt&&s(lt,"value",null,yt.value,P),(at=yt.onVnodeBeforeMount)&&sr(at,V,D)}z&&Us(D,null,V,"beforeMount");const et=oM(q,M);et&&M.beforeEnter(lt),i(lt,v,B),((at=yt&&yt.onVnodeMounted)||et||z)&&mi(()=>{at&&sr(at,V,D),et&&M.enter(lt),z&&Us(D,null,V,"mounted")},q)},T=(D,v,B,V,q)=>{if(B&&h(D,B),V)for(let P=0;P<V.length;P++)h(D,V[P]);if(q){let P=q.subTree;if(v===P||gv(P.type)&&(P.ssContent===v||P.ssFallback===v)){const ct=q.vnode;T(D,ct,ct.scopeId,ct.slotScopeIds,q.parent)}}},O=(D,v,B,V,q,P,ct,it,lt=0)=>{for(let at=lt;at<D.length;at++){const yt=D[at]=it?as(D[at]):cr(D[at]);_(null,yt,v,B,V,q,P,ct,it)}},S=(D,v,B,V,q,P,ct)=>{const it=v.el=D.el;let{patchFlag:lt,dynamicChildren:at,dirs:yt}=v;lt|=D.patchFlag&16;const C=D.props||Ie,M=v.props||Ie;let z;if(B&&Os(B,!1),(z=M.onVnodeBeforeUpdate)&&sr(z,B,v,D),yt&&Us(v,D,B,"beforeUpdate"),B&&Os(B,!0),(C.innerHTML&&M.innerHTML==null||C.textContent&&M.textContent==null)&&u(it,""),at?b(D.dynamicChildren,at,it,B,V,Cf(v,q),P):ct||H(D,v,it,null,B,V,Cf(v,q),P,!1),lt>0){if(lt&16)U(it,C,M,B,q);else if(lt&2&&C.class!==M.class&&s(it,"class",null,M.class,q),lt&4&&s(it,"style",C.style,M.style,q),lt&8){const et=v.dynamicProps;for(let st=0;st<et.length;st++){const Q=et[st],bt=C[Q],mt=M[Q];(mt!==bt||Q==="value")&&s(it,Q,bt,mt,q,B)}}lt&1&&D.children!==v.children&&u(it,v.children)}else!ct&&at==null&&U(it,C,M,B,q);((z=M.onVnodeUpdated)||yt)&&mi(()=>{z&&sr(z,B,v,D),yt&&Us(v,D,B,"updated")},V)},b=(D,v,B,V,q,P,ct)=>{for(let it=0;it<v.length;it++){const lt=D[it],at=v[it],yt=lt.el&&(lt.type===Rn||!Zs(lt,at)||lt.shapeFlag&198)?f(lt.el):B;_(lt,at,yt,null,V,q,P,ct,!0)}},U=(D,v,B,V,q)=>{if(v!==B){if(v!==Ie)for(const P in v)!sl(P)&&!(P in B)&&s(D,P,v[P],null,q,V);for(const P in B){if(sl(P))continue;const ct=B[P],it=v[P];ct!==it&&P!=="value"&&s(D,P,it,ct,q,V)}"value"in B&&s(D,"value",v.value,B.value,q)}},I=(D,v,B,V,q,P,ct,it,lt)=>{const at=v.el=D?D.el:a(""),yt=v.anchor=D?D.anchor:a("");let{patchFlag:C,dynamicChildren:M,slotScopeIds:z}=v;z&&(it=it?it.concat(z):z),D==null?(i(at,B,V),i(yt,B,V),O(v.children||[],B,yt,q,P,ct,it,lt)):C>0&&C&64&&M&&D.dynamicChildren?(b(D.dynamicChildren,M,B,q,P,ct,it),(v.key!=null||q&&v===q.subTree)&&hv(D,v,!0)):H(D,v,B,yt,q,P,ct,it,lt)},F=(D,v,B,V,q,P,ct,it,lt)=>{v.slotScopeIds=it,D==null?v.shapeFlag&512?q.ctx.activate(v,B,V,ct,lt):W(v,B,V,q,P,ct,lt):tt(D,v,lt)},W=(D,v,B,V,q,P,ct)=>{const it=D.component=bM(D,V,q);if(rf(D)&&(it.ctx.renderer=nt),TM(it,!1,ct),it.asyncDep){if(q&&q.registerDep(it,Z,ct),!D.el){const lt=it.subTree=se(qn);p(null,lt,v,B),D.placeholder=lt.el}}else Z(it,D,v,B,q,P,ct)},tt=(D,v,B)=>{const V=v.component=D.component;if(mM(D,v,B))if(V.asyncDep&&!V.asyncResolved){K(V,v,B);return}else V.next=v,V.update();else v.el=D.el,V.vnode=v},Z=(D,v,B,V,q,P,ct)=>{const it=()=>{if(D.isMounted){let{next:C,bu:M,u:z,parent:et,vnode:st}=D;{const Mt=dv(D);if(Mt){C&&(C.el=st.el,K(D,C,ct)),Mt.asyncDep.then(()=>{D.isUnmounted||it()});return}}let Q=C,bt;Os(D,!1),C?(C.el=st.el,K(D,C,ct)):C=st,M&&eu(M),(bt=C.props&&C.props.onVnodeBeforeUpdate)&&sr(bt,et,C,st),Os(D,!0);const mt=Om(D),Ct=D.subTree;D.subTree=mt,_(Ct,mt,f(Ct.el),L(Ct),D,q,P),C.el=mt.el,Q===null&&_M(D,mt.el),z&&mi(z,q),(bt=C.props&&C.props.onVnodeUpdated)&&mi(()=>sr(bt,et,C,st),q)}else{let C;const{el:M,props:z}=v,{bm:et,m:st,parent:Q,root:bt,type:mt}=D,Ct=cl(v);Os(D,!1),et&&eu(et),!Ct&&(C=z&&z.onVnodeBeforeMount)&&sr(C,Q,v),Os(D,!0);{bt.ce&&bt.ce._def.shadowRoot!==!1&&bt.ce._injectChildStyle(mt);const Mt=D.subTree=Om(D);_(null,Mt,B,V,D,q,P),v.el=Mt.el}if(st&&mi(st,q),!Ct&&(C=z&&z.onVnodeMounted)){const Mt=v;mi(()=>sr(C,Q,Mt),q)}(v.shapeFlag&256||Q&&cl(Q.vnode)&&Q.vnode.shapeFlag&256)&&D.a&&mi(D.a,q),D.isMounted=!0,v=B=V=null}};D.scope.on();const lt=D.effect=new x0(it);D.scope.off();const at=D.update=lt.run.bind(lt),yt=D.job=lt.runIfDirty.bind(lt);yt.i=D,yt.id=D.uid,lt.scheduler=()=>Rp(yt),Os(D,!0),at()},K=(D,v,B)=>{v.component=D;const V=D.vnode.props;D.vnode=v,D.next=null,QS(D,v.props,V,B),iM(D,v.children,B),Wr(),wm(D),Xr()},H=(D,v,B,V,q,P,ct,it,lt=!1)=>{const at=D&&D.children,yt=D?D.shapeFlag:0,C=v.children,{patchFlag:M,shapeFlag:z}=v;if(M>0){if(M&128){N(at,C,B,V,q,P,ct,it,lt);return}else if(M&256){dt(at,C,B,V,q,P,ct,it,lt);return}}z&8?(yt&16&&Y(at,q,P),C!==at&&u(B,C)):yt&16?z&16?N(at,C,B,V,q,P,ct,it,lt):Y(at,q,P,!0):(yt&8&&u(B,""),z&16&&O(C,B,V,q,P,ct,it,lt))},dt=(D,v,B,V,q,P,ct,it,lt)=>{D=D||aa,v=v||aa;const at=D.length,yt=v.length,C=Math.min(at,yt);let M;for(M=0;M<C;M++){const z=v[M]=lt?as(v[M]):cr(v[M]);_(D[M],z,B,null,q,P,ct,it,lt)}at>yt?Y(D,q,P,!0,!1,C):O(v,B,V,q,P,ct,it,lt,C)},N=(D,v,B,V,q,P,ct,it,lt)=>{let at=0;const yt=v.length;let C=D.length-1,M=yt-1;for(;at<=C&&at<=M;){const z=D[at],et=v[at]=lt?as(v[at]):cr(v[at]);if(Zs(z,et))_(z,et,B,null,q,P,ct,it,lt);else break;at++}for(;at<=C&&at<=M;){const z=D[C],et=v[M]=lt?as(v[M]):cr(v[M]);if(Zs(z,et))_(z,et,B,null,q,P,ct,it,lt);else break;C--,M--}if(at>C){if(at<=M){const z=M+1,et=z<yt?v[z].el:V;for(;at<=M;)_(null,v[at]=lt?as(v[at]):cr(v[at]),B,et,q,P,ct,it,lt),at++}}else if(at>M)for(;at<=C;)It(D[at],q,P,!0),at++;else{const z=at,et=at,st=new Map;for(at=et;at<=M;at++){const Ut=v[at]=lt?as(v[at]):cr(v[at]);Ut.key!=null&&st.set(Ut.key,at)}let Q,bt=0;const mt=M-et+1;let Ct=!1,Mt=0;const gt=new Array(mt);for(at=0;at<mt;at++)gt[at]=0;for(at=z;at<=C;at++){const Ut=D[at];if(bt>=mt){It(Ut,q,P,!0);continue}let Rt;if(Ut.key!=null)Rt=st.get(Ut.key);else for(Q=et;Q<=M;Q++)if(gt[Q-et]===0&&Zs(Ut,v[Q])){Rt=Q;break}Rt===void 0?It(Ut,q,P,!0):(gt[Rt-et]=at+1,Rt>=Mt?Mt=Rt:Ct=!0,_(Ut,v[Rt],B,null,q,P,ct,it,lt),bt++)}const Tt=Ct?aM(gt):aa;for(Q=Tt.length-1,at=mt-1;at>=0;at--){const Ut=et+at,Rt=v[Ut],Et=v[Ut+1],qt=Ut+1<yt?Et.el||Et.placeholder:V;gt[at]===0?_(null,Rt,B,qt,q,P,ct,it,lt):Ct&&(Q<0||at!==Tt[Q]?xt(Rt,B,qt,2):Q--)}}},xt=(D,v,B,V,q=null)=>{const{el:P,type:ct,transition:it,children:lt,shapeFlag:at}=D;if(at&6){xt(D.component.subTree,v,B,V);return}if(at&128){D.suspense.move(v,B,V);return}if(at&64){ct.move(D,v,B,nt);return}if(ct===Rn){i(P,v,B);for(let C=0;C<lt.length;C++)xt(lt[C],v,B,V);i(D.anchor,v,B);return}if(ct===iu){E(D,v,B);return}if(V!==2&&at&1&&it)if(V===0)it.beforeEnter(P),i(P,v,B),mi(()=>it.enter(P),q);else{const{leave:C,delayLeave:M,afterLeave:z}=it,et=()=>{D.ctx.isUnmounted?r(P):i(P,v,B)},st=()=>{C(P,()=>{et(),z&&z()})};M?M(P,et,st):st()}else i(P,v,B)},It=(D,v,B,V=!1,q=!1)=>{const{type:P,props:ct,ref:it,children:lt,dynamicChildren:at,shapeFlag:yt,patchFlag:C,dirs:M,cacheIndex:z}=D;if(C===-2&&(q=!1),it!=null&&(Wr(),ll(it,null,B,D,!0),Xr()),z!=null&&(v.renderCache[z]=void 0),yt&256){v.ctx.deactivate(D);return}const et=yt&1&&M,st=!cl(D);let Q;if(st&&(Q=ct&&ct.onVnodeBeforeUnmount)&&sr(Q,v,D),yt&6)Wt(D.component,B,V);else{if(yt&128){D.suspense.unmount(B,V);return}et&&Us(D,null,v,"beforeUnmount"),yt&64?D.type.remove(D,v,B,nt,V):at&&!at.hasOnce&&(P!==Rn||C>0&&C&64)?Y(at,v,B,!1,!0):(P===Rn&&C&384||!q&&yt&16)&&Y(lt,v,B),V&&Qt(D)}(st&&(Q=ct&&ct.onVnodeUnmounted)||et)&&mi(()=>{Q&&sr(Q,v,D),et&&Us(D,null,v,"unmounted")},B)},Qt=D=>{const{type:v,el:B,anchor:V,transition:q}=D;if(v===Rn){Vt(B,V);return}if(v===iu){x(D);return}const P=()=>{r(B),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(D.shapeFlag&1&&q&&!q.persisted){const{leave:ct,delayLeave:it}=q,lt=()=>ct(B,P);it?it(D.el,P,lt):lt()}else P()},Vt=(D,v)=>{let B;for(;D!==v;)B=d(D),r(D),D=B;r(v)},Wt=(D,v,B)=>{const{bum:V,scope:q,job:P,subTree:ct,um:it,m:lt,a:at,parent:yt,slots:{__:C}}=D;Um(lt),Um(at),V&&eu(V),yt&&Jt(C)&&C.forEach(M=>{yt.renderCache[M]=void 0}),q.stop(),P&&(P.flags|=8,It(ct,D,v,B)),it&&mi(it,v),mi(()=>{D.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Y=(D,v,B,V=!1,q=!1,P=0)=>{for(let ct=P;ct<D.length;ct++)It(D[ct],v,B,V,q)},L=D=>{if(D.shapeFlag&6)return L(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const v=d(D.anchor||D.el),B=v&&v[RS];return B?d(B):v};let j=!1;const J=(D,v,B)=>{D==null?v._vnode&&It(v._vnode,null,null,!0):_(v._vnode||null,D,v,null,null,null,B),v._vnode=D,j||(j=!0,wm(),z0(),j=!1)},nt={p:_,um:It,m:xt,r:Qt,mt:W,mc:O,pc:H,pbc:b,n:L,o:n};return{render:J,hydrate:void 0,createApp:ZS(J)}}function Cf({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Os({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function oM(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function hv(n,t,e=!1){const i=n.children,r=t.children;if(Jt(i)&&Jt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=as(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&hv(o,a)),a.type===lf&&(a.el=o.el),a.type===qn&&!a.el&&(a.el=o.el)}}function aM(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<c?s=a+1:o=a;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function dv(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:dv(t)}function Um(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const lM=Symbol.for("v-scx"),cM=()=>Hr(lM);function fl(n,t,e){return pv(n,t,e)}function pv(n,t,e=Ie){const{immediate:i,deep:r,flush:s,once:o}=e,a=vn({},e),l=t&&i||!t&&s!=="post";let c;if(Ul){if(s==="sync"){const h=cM();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=gr,h.resume=gr,h.pause=gr,h}}const u=Pn;a.call=(h,g,_)=>ir(h,u,g,_);let f=!1;s==="post"?a.scheduler=h=>{mi(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():Rp(h)}),a.augmentJob=h=>{t&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=TS(n,t,a);return Ul&&(c?c.push(d):l&&d()),d}function uM(n,t,e){const i=this.proxy,r=Ke(n)?n.includes(".")?mv(i,n):()=>i[n]:n.bind(i,i);let s;ie(t)?s=t:(s=t.handler,e=t);const o=ec(this),a=pv(r,s.bind(i),e);return o(),a}function mv(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const fM=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${$i(t)}Modifiers`]||n[`${Mo(t)}Modifiers`];function hM(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Ie;let r=e;const s=t.startsWith("update:"),o=s&&fM(i,t.slice(7));o&&(o.trim&&(r=e.map(u=>Ke(u)?u.trim():u)),o.number&&(r=e.map(Bh)));let a,l=i[a=Sf(t)]||i[a=Sf($i(t))];!l&&s&&(l=i[a=Sf(Mo(t))]),l&&ir(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ir(c,n,6,r)}}function _v(n,t,e=!1){const i=t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ie(n)){const l=c=>{const u=_v(c,t,!0);u&&(a=!0,vn(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ze(n)&&i.set(n,null),null):(Jt(s)?s.forEach(l=>o[l]=null):vn(o,s),ze(n)&&i.set(n,o),o)}function af(n,t){return!n||!ju(t)?!1:(t=t.slice(2).replace(/Once$/,""),be(n,t[0].toLowerCase()+t.slice(1))||be(n,Mo(t))||be(n,t))}function Om(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=n,m=Tu(n);let p,y;try{if(e.shapeFlag&4){const x=r||i,w=x;p=cr(c.call(w,x,u,f,h,d,g)),y=a}else{const x=t;p=cr(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),y=t.props?a:dM(a)}}catch(x){hl.length=0,nf(x,n,1),p=se(qn)}let E=p;if(y&&_!==!1){const x=Object.keys(y),{shapeFlag:w}=E;x.length&&w&7&&(s&&x.some(xp)&&(y=pM(y,s)),E=Ts(E,y,!1,!0))}return e.dirs&&(E=Ts(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(e.dirs):e.dirs),e.transition&&Dl(E,e.transition),p=E,Tu(m),p}const dM=n=>{let t;for(const e in n)(e==="class"||e==="style"||ju(e))&&((t||(t={}))[e]=n[e]);return t},pM=(n,t)=>{const e={};for(const i in n)(!xp(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function mM(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Nm(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!af(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Nm(i,o,c):!0:!!o;return!1}function Nm(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==n[s]&&!af(e,s))return!0}return!1}function _M({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const gv=n=>n.__isSuspense;function gM(n,t){t&&t.pendingBranch?Jt(n)?t.effects.push(...n):t.effects.push(n):CS(n)}const Rn=Symbol.for("v-fgt"),lf=Symbol.for("v-txt"),qn=Symbol.for("v-cmt"),iu=Symbol.for("v-stc"),hl=[];let bi=null;function $t(n=!1){hl.push(bi=n?null:[])}function vM(){hl.pop(),bi=hl[hl.length-1]||null}let Ll=1;function Fm(n,t=!1){Ll+=n,n<0&&bi&&t&&(bi.hasOnce=!0)}function vv(n){return n.dynamicChildren=Ll>0?bi||aa:null,vM(),Ll>0&&bi&&bi.push(n),n}function te(n,t,e,i,r,s){return vv(ft(n,t,e,i,r,s,!0))}function Il(n,t,e,i,r){return vv(se(n,t,e,i,r,!0))}function Cu(n){return n?n.__v_isVNode===!0:!1}function Zs(n,t){return n.type===t.type&&n.key===t.key}const xv=({key:n})=>n??null,ru=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ke(n)||In(n)||ie(n)?{i:Ei,r:n,k:t,f:!!e}:n:null);function ft(n,t=null,e=null,i=0,r=null,s=n===Rn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&xv(t),ref:t&&ru(t),scopeId:V0,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ei};return a?(Up(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=Ke(e)?8:16),Ll>0&&!o&&bi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&bi.push(l),l}const se=xM;function xM(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===Q0)&&(n=qn),Cu(n)){const a=Ts(n,t,!0);return e&&Up(a,e),Ll>0&&!s&&bi&&(a.shapeFlag&6?bi[bi.indexOf(n)]=a:bi.push(a)),a.patchFlag=-2,a}if(PM(n)&&(n=n.__vccOpts),t){t=yM(t);let{class:a,style:l}=t;a&&!Ke(a)&&(t.class=ii(a)),ze(l)&&(Cp(l)&&!Jt(l)&&(l=vn({},l)),t.style=Qe(l))}const o=Ke(n)?1:gv(n)?128:W0(n)?64:ze(n)?4:ie(n)?2:0;return ft(n,t,e,i,r,o,s,!0)}function yM(n){return n?Cp(n)||ov(n)?vn({},n):n:null}function Ts(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=t?SM(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&xv(c),ref:t&&t.ref?e&&s?Jt(s)?s.concat(ru(t)):[s,ru(t)]:ru(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Rn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ts(n.ssContent),ssFallback:n.ssFallback&&Ts(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Dl(u,l.clone(u)),u}function yv(n=" ",t=0){return se(lf,null,n,t)}function Ip(n,t){const e=se(iu,null,n);return e.staticCount=t,e}function yi(n="",t=!1){return t?($t(),Il(qn,null,n)):se(qn,null,n)}function cr(n){return n==null||typeof n=="boolean"?se(qn):Jt(n)?se(Rn,null,n.slice()):Cu(n)?as(n):se(lf,null,String(n))}function as(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ts(n)}function Up(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Jt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Up(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!ov(t)?t._ctx=Ei:r===3&&Ei&&(Ei.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else ie(t)?(t={default:t,_ctx:Ei},e=32):(t=String(t),i&64?(e=16,t=[yv(t)]):e=8);n.children=t,n.shapeFlag|=e}function SM(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=ii([t.class,i.class]));else if(r==="style")t.style=Qe([t.style,i.style]);else if(ju(r)){const s=t[r],o=i[r];o&&s!==o&&!(Jt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function sr(n,t,e,i=null){ir(n,t,7,[e,i])}const MM=iv();let EM=0;function bM(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||MM,s={uid:EM++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lv(i,r),emitsOptions:_v(i,r),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:i.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=hM.bind(null,s),n.ce&&n.ce(s),s}let Pn=null;const Sv=()=>Pn||Ei;let Ru,qh;{const n=Qu(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ru=t("__VUE_INSTANCE_SETTERS__",e=>Pn=e),qh=t("__VUE_SSR_SETTERS__",e=>Ul=e)}const ec=n=>{const t=Pn;return Ru(n),n.scope.on(),()=>{n.scope.off(),Ru(t)}},Bm=()=>{Pn&&Pn.scope.off(),Ru(null)};function Mv(n){return n.vnode.shapeFlag&4}let Ul=!1;function TM(n,t=!1,e=!1){t&&qh(t);const{props:i,children:r}=n.vnode,s=Mv(n);JS(n,i,s,t),nM(n,r,e||t);const o=s?wM(n,t):void 0;return t&&qh(!1),o}function wM(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,WS);const{setup:i}=e;if(i){Wr();const r=n.setupContext=i.length>1?CM(n):null,s=ec(n),o=tc(i,n,0,[n.props,r]),a=d0(o);if(Xr(),s(),(a||n.sp)&&!cl(n)&&K0(n),a){if(o.then(Bm,Bm),t)return o.then(l=>{km(n,l)}).catch(l=>{nf(l,n,0)});n.asyncDep=o}else km(n,o)}else Ev(n)}function km(n,t,e){ie(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ze(t)&&(n.setupState=N0(t)),Ev(n)}function Ev(n,t,e){const i=n.type;n.render||(n.render=i.render||gr);{const r=ec(n);Wr();try{XS(n)}finally{Xr(),r()}}}const AM={get(n,t){return Cn(n,"get",""),n[t]}};function CM(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,AM),slots:n.slots,emit:n.emit,expose:t}}function cf(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(N0(vS(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in ul)return ul[e](n)},has(t,e){return e in t||e in ul}})):n.proxy}function RM(n,t=!0){return ie(n)?n.displayName||n.name:n.name||t&&n.__name}function PM(n){return ie(n)&&"__vccOpts"in n}const zi=(n,t)=>ES(n,t,Ul);function Op(n,t,e){const i=arguments.length;return i===2?ze(t)&&!Jt(t)?Cu(t)?se(n,null,[t]):se(n,t):se(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Cu(e)&&(e=[e]),se(n,t,e))}const DM="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jh;const zm=typeof window<"u"&&window.trustedTypes;if(zm)try{jh=zm.createPolicy("vue",{createHTML:n=>n})}catch{}const bv=jh?n=>jh.createHTML(n):n=>n,LM="http://www.w3.org/2000/svg",IM="http://www.w3.org/1998/Math/MathML",Lr=typeof document<"u"?document:null,Hm=Lr&&Lr.createElement("template"),UM={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Lr.createElementNS(LM,n):t==="mathml"?Lr.createElementNS(IM,n):e?Lr.createElement(n,{is:e}):Lr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Lr.createTextNode(n),createComment:n=>Lr.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Lr.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Hm.innerHTML=bv(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Hm.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Kr="transition",Fa="animation",Ol=Symbol("_vtc"),Tv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},OM=vn({},X0,Tv),NM=n=>(n.displayName="Transition",n.props=OM,n),FM=NM((n,{slots:t})=>Op(LS,BM(n),t)),Ns=(n,t=[])=>{Jt(n)?n.forEach(e=>e(...t)):n&&n(...t)},Vm=n=>n?Jt(n)?n.some(t=>t.length>1):n.length>1:!1;function BM(n){const t={};for(const I in n)I in Tv||(t[I]=n[I]);if(n.css===!1)return t;const{name:e="v",type:i,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:d=`${e}-leave-active`,leaveToClass:h=`${e}-leave-to`}=n,g=kM(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:y,onEnterCancelled:E,onLeave:x,onLeaveCancelled:w,onBeforeAppear:A=p,onAppear:T=y,onAppearCancelled:O=E}=t,S=(I,F,W,tt)=>{I._enterCancelled=tt,Fs(I,F?u:a),Fs(I,F?c:o),W&&W()},b=(I,F)=>{I._isLeaving=!1,Fs(I,f),Fs(I,h),Fs(I,d),F&&F()},U=I=>(F,W)=>{const tt=I?T:y,Z=()=>S(F,I,W);Ns(tt,[F,Z]),Gm(()=>{Fs(F,I?l:s),br(F,I?u:a),Vm(tt)||Wm(F,i,_,Z)})};return vn(t,{onBeforeEnter(I){Ns(p,[I]),br(I,s),br(I,o)},onBeforeAppear(I){Ns(A,[I]),br(I,l),br(I,c)},onEnter:U(!1),onAppear:U(!0),onLeave(I,F){I._isLeaving=!0;const W=()=>b(I,F);br(I,f),I._enterCancelled?(br(I,d),$m()):($m(),br(I,d)),Gm(()=>{I._isLeaving&&(Fs(I,f),br(I,h),Vm(x)||Wm(I,i,m,W))}),Ns(x,[I,W])},onEnterCancelled(I){S(I,!1,void 0,!0),Ns(E,[I])},onAppearCancelled(I){S(I,!0,void 0,!0),Ns(O,[I])},onLeaveCancelled(I){b(I),Ns(w,[I])}})}function kM(n){if(n==null)return null;if(ze(n))return[Rf(n.enter),Rf(n.leave)];{const t=Rf(n);return[t,t]}}function Rf(n){return Xy(n)}function br(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Ol]||(n[Ol]=new Set)).add(t)}function Fs(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Ol];e&&(e.delete(t),e.size||(n[Ol]=void 0))}function Gm(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let zM=0;function Wm(n,t,e,i){const r=n._endId=++zM,s=()=>{r===n._endId&&i()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=HM(n,t);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),s()},d=h=>{h.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function HM(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),r=i(`${Kr}Delay`),s=i(`${Kr}Duration`),o=Xm(r,s),a=i(`${Fa}Delay`),l=i(`${Fa}Duration`),c=Xm(a,l);let u=null,f=0,d=0;t===Kr?o>0&&(u=Kr,f=o,d=s.length):t===Fa?c>0&&(u=Fa,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Kr:Fa:null,d=u?u===Kr?s.length:l.length:0);const h=u===Kr&&/\b(transform|all)(,|$)/.test(i(`${Kr}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Xm(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Ym(e)+Ym(n[i])))}function Ym(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function $m(){return document.body.offsetHeight}function VM(n,t,e){const i=n[Ol];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const qm=Symbol("_vod"),GM=Symbol("_vsh"),WM=Symbol(""),XM=/(^|;)\s*display\s*:/;function YM(n,t,e){const i=n.style,r=Ke(e);let s=!1;if(e&&!r){if(t)if(Ke(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&su(i,a,"")}else for(const o in t)e[o]==null&&su(i,o,"");for(const o in e)o==="display"&&(s=!0),su(i,o,e[o])}else if(r){if(t!==e){const o=i[WM];o&&(e+=";"+o),i.cssText=e,s=XM.test(e)}}else t&&n.removeAttribute("style");qm in n&&(n[qm]=s?i.display:"",n[GM]&&(i.display="none"))}const jm=/\s*!important$/;function su(n,t,e){if(Jt(e))e.forEach(i=>su(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=$M(n,t);jm.test(e)?n.setProperty(Mo(i),e.replace(jm,""),"important"):n[i]=e}}const Km=["Webkit","Moz","ms"],Pf={};function $M(n,t){const e=Pf[t];if(e)return e;let i=$i(t);if(i!=="filter"&&i in n)return Pf[t]=i;i=Ju(i);for(let r=0;r<Km.length;r++){const s=Km[r]+i;if(s in n)return Pf[t]=s}return t}const Zm="http://www.w3.org/1999/xlink";function Jm(n,t,e,i,r,s=Zy(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Zm,t.slice(6,t.length)):n.setAttributeNS(Zm,t,e):e==null||s&&!_0(e)?n.removeAttribute(t):n.setAttribute(t,s?"":Ps(e)?String(e):e)}function Qm(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?bv(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=_0(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function Zo(n,t,e,i){n.addEventListener(t,e,i)}function qM(n,t,e,i){n.removeEventListener(t,e,i)}const t_=Symbol("_vei");function jM(n,t,e,i,r=null){const s=n[t_]||(n[t_]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=KM(t);if(i){const c=s[t]=QM(i,r);Zo(n,a,c,l)}else o&&(qM(n,a,o,l),s[t]=void 0)}}const e_=/(?:Once|Passive|Capture)$/;function KM(n){let t;if(e_.test(n)){t={};let i;for(;i=n.match(e_);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Mo(n.slice(2)),t]}let Df=0;const ZM=Promise.resolve(),JM=()=>Df||(ZM.then(()=>Df=0),Df=Date.now());function QM(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;ir(t1(i,e.value),t,5,[i])};return e.value=n,e.attached=JM(),e}function t1(n,t){if(Jt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const n_=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,e1=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?VM(n,i,o):t==="style"?YM(n,e,i):ju(t)?xp(t)||jM(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):n1(n,t,i,o))?(Qm(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Jm(n,t,i,o,s,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Ke(i))?Qm(n,$i(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Jm(n,t,i,o))};function n1(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&n_(t)&&ie(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return n_(t)&&Ke(e)?!1:t in n}const i_=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Jt(t)?e=>eu(t,e):t};function i1(n){n.target.composing=!0}function r_(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Lf=Symbol("_assign"),hc={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[Lf]=i_(r);const s=i||r.props&&r.props.type==="number";Zo(n,t?"change":"input",o=>{if(o.target.composing)return;let a=n.value;e&&(a=a.trim()),s&&(a=Bh(a)),n[Lf](a)}),e&&Zo(n,"change",()=>{n.value=n.value.trim()}),t||(Zo(n,"compositionstart",i1),Zo(n,"compositionend",r_),Zo(n,"change",r_))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Lf]=i_(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Bh(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||r&&n.value.trim()===l)||(n.value=l))}},r1=vn({patchProp:e1},UM);let s_;function s1(){return s_||(s_=rM(r1))}const o1=(...n)=>{const t=s1().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=l1(i);if(!r)return;const s=t._component;!ie(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,a1(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function a1(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function l1(n){return Ke(n)?document.querySelector(n):n}const Kh="/assets/micelio-white-CWAzAI-X.png",c1={key:0,class:"xl:hidden fixed inset-0 w-screen h-screen bg-gray-900/80 backdrop-blur-md z-[100] flex flex-col"},u1=Zn({__name:"SiteHeader",setup(n){const t=ne(!1),e=ne(!1),i=ne(1),r=()=>{e.value=!e.value};let s=0,o=!1;const a=()=>{const l=window.scrollY;o||(window.requestAnimationFrame(()=>{l<=300?(i.value=Math.max(0,1-l/300),t.value=!1):l>s+5?(t.value=!0,i.value=0):l<s-5&&(t.value=!1,i.value=1),s=l,o=!1}),o=!0)};return Mr(()=>{s=window.scrollY,window.addEventListener("scroll",a)}),Ds(()=>{window.removeEventListener("scroll",a)}),fl(e,l=>{document.body.classList.toggle("overflow-hidden",l)}),(l,c)=>($t(),te(Rn,null,[ft("header",{class:ii(["fixed top-4 left-1/2 -translate-x-1/2 z-50","bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-700/50","px-6 py-3 transition-all duration-300 ease-out","w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-[90%] lg:w-[80%] xl:w-[70%]",{"-translate-y-20 opacity-0 pointer-events-none scale-95":t.value,"translate-y-0 scale-100":!t.value}]),style:Qe({opacity:i.value,boxShadow:"0 0 10px rgba(12, 209, 235, 0.2), 0 0 20px rgba(12, 209, 235, 0.1)"})},[ft("div",{class:"flex items-center justify-between relative w-full"},[c[1]||(c[1]=Ip('<a href="#hero-section" class="flex items-center"><img class="h-8 md:h-10 w-auto" src="'+Kh+'" alt="miceliogo"><span class="hidden md:inline md:text-lg font-medium tracking-tight text-white">MicelioData</span></a><nav class="hidden xl:flex space-x-6 text-sm font-semibold text-gray-300 absolute left-1/2 transform -translate-x-1/2"><a href="#info-section" class="hover:text-white transition-colors duration-150 py-2">Who We Are</a><a href="#suppliers-section" class="hover:text-white transition-colors duration-150 py-2">Our Offering</a><a href="#partners-section" class="hover:text-white transition-colors duration-150 py-2">Partners</a></nav><a href="#contact-section" class="ml-4 hidden xl:inline-block bg-teal-600 hover:bg-teal-500 text-white px-3 py-1.5 rounded text-xs font-medium transition-colors duration-150"> Contact </a>',3)),ft("button",{onClick:r,class:"xl:hidden focus:outline-none p-1"},c[0]||(c[0]=[ft("svg",{class:"h-6 w-6 text-white opacity-70 hover:opacity-100 transition-opacity",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ft("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]))])],6),se(FM,{name:"fade","enter-active-class":"transition-opacity duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-opacity duration-300","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:G0(()=>[e.value?($t(),te("div",c1,[ft("div",{class:"absolute top-6 left-6"},[ft("a",{onClick:r,href:"#hero-section",class:"flex items-center space-x-3"},c[2]||(c[2]=[ft("img",{class:"h-10 w-auto",src:Kh,alt:"miceliogo"},null,-1),ft("span",{class:"text-lg font-bold tracking-tight text-white"},"MicelioData",-1)]))]),ft("button",{onClick:r,class:"absolute top-6 right-6 text-gray-300 hover:text-white transition","aria-label":"Close menu"},c[3]||(c[3]=[ft("svg",{class:"w-8 h-8",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[ft("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)])),ft("div",{class:"flex-1 flex items-center justify-center"},[ft("nav",null,[ft("ul",{class:"text-center space-y-8"},[ft("li",null,[ft("a",{onClick:r,href:"#info-section",class:"text-3xl font-semibold text-gray-100 hover:text-white transition-colors block"}," Who We Are ")]),ft("li",null,[ft("a",{onClick:r,href:"#suppliers-section",class:"text-3xl font-semibold text-gray-100 hover:text-white transition-colors block"}," Our Offering ")]),ft("li",null,[ft("a",{onClick:r,href:"#partners-section",class:"text-3xl font-semibold text-gray-100 hover:text-white transition-colors block"}," Partners ")]),ft("li",null,[ft("a",{onClick:r,href:"#contact-section",class:"text-3xl font-semibold text-gray-100 hover:text-white transition-colors block"}," Contact ")])])])]),c[4]||(c[4]=ft("div",{class:"absolute bottom-8 w-full px-6 text-center"},[ft("p",{class:"text-sm text-gray-400"},"© 2025 MicelioData. All Rights Reserved.")],-1))])):yi("",!0)]),_:1})],64))}}),f1={class:"font-sans text-gray-900"},h1=Zn({__name:"App",setup(n){return(t,e)=>{const i=GS("router-view");return $t(),te("div",f1,[se(u1),se(i)])}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Jo=typeof document<"u";function wv(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function d1(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&wv(n.default)}const Me=Object.assign;function If(n,t){const e={};for(const i in t){const r=t[i];e[i]=rr(r)?r.map(n):n(r)}return e}const dl=()=>{},rr=Array.isArray,Av=/#/g,p1=/&/g,m1=/\//g,_1=/=/g,g1=/\?/g,Cv=/\+/g,v1=/%5B/g,x1=/%5D/g,Rv=/%5E/g,y1=/%60/g,Pv=/%7B/g,S1=/%7C/g,Dv=/%7D/g,M1=/%20/g;function Np(n){return encodeURI(""+n).replace(S1,"|").replace(v1,"[").replace(x1,"]")}function E1(n){return Np(n).replace(Pv,"{").replace(Dv,"}").replace(Rv,"^")}function Zh(n){return Np(n).replace(Cv,"%2B").replace(M1,"+").replace(Av,"%23").replace(p1,"%26").replace(y1,"`").replace(Pv,"{").replace(Dv,"}").replace(Rv,"^")}function b1(n){return Zh(n).replace(_1,"%3D")}function T1(n){return Np(n).replace(Av,"%23").replace(g1,"%3F")}function w1(n){return n==null?"":T1(n).replace(m1,"%2F")}function Nl(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const A1=/\/$/,C1=n=>n.replace(A1,"");function Uf(n,t,e="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=n(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=L1(i??t,e),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Nl(o)}}function R1(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function o_(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function P1(n,t,e){const i=t.matched.length-1,r=e.matched.length-1;return i>-1&&i===r&&ya(t.matched[i],e.matched[r])&&Lv(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function ya(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Lv(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!D1(n[e],t[e]))return!1;return!0}function D1(n,t){return rr(n)?a_(n,t):rr(t)?a_(t,n):n===t}function a_(n,t){return rr(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function L1(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Zr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Fl;(function(n){n.pop="pop",n.push="push"})(Fl||(Fl={}));var pl;(function(n){n.back="back",n.forward="forward",n.unknown=""})(pl||(pl={}));function I1(n){if(!n)if(Jo){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),C1(n)}const U1=/^[^#]+#/;function O1(n,t){return n.replace(U1,"#")+t}function N1(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const uf=()=>({left:window.scrollX,top:window.scrollY});function F1(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;t=N1(r,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function l_(n,t){return(history.state?history.state.position-t:-1)+n}const Jh=new Map;function B1(n,t){Jh.set(n,t)}function k1(n){const t=Jh.get(n);return Jh.delete(n),t}let z1=()=>location.protocol+"//"+location.host;function Iv(n,t){const{pathname:e,search:i,hash:r}=t,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),o_(l,"")}return o_(e,n)+i+r}function H1(n,t,e,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=Iv(n,location),g=e.value,_=t.value;let m=0;if(d){if(e.value=h,t.value=d,o&&o===g){o=null;return}m=_?d.position-_.position:0}else i(h);r.forEach(p=>{p(e.value,g,{delta:m,type:Fl.pop,direction:m?m>0?pl.forward:pl.back:pl.unknown})})};function l(){o=e.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(Me({},d.state,{scroll:uf()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function c_(n,t,e,i=!1,r=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:r?uf():null}}function V1(n){const{history:t,location:e}=window,i={value:Iv(n,e)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),d=f>-1?(e.host&&document.querySelector("base")?n:n.slice(f))+l:z1()+n+l;try{t[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),e[u?"replace":"assign"](d)}}function o(l,c){const u=Me({},t.state,c_(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Me({},r.value,t.state,{forward:l,scroll:uf()});s(u.current,u,!0);const f=Me({},c_(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function G1(n){n=I1(n);const t=V1(n),e=H1(n,t.state,t.location,t.replace);function i(s,o=!0){o||e.pauseListeners(),history.go(s)}const r=Me({location:"",base:n,go:i,createHref:O1.bind(null,n)},t,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function W1(n){return typeof n=="string"||n&&typeof n=="object"}function Uv(n){return typeof n=="string"||typeof n=="symbol"}const Ov=Symbol("");var u_;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(u_||(u_={}));function Sa(n,t){return Me(new Error,{type:n,[Ov]:!0},t)}function Tr(n,t){return n instanceof Error&&Ov in n&&(t==null||!!(n.type&t))}const f_="[^/]+?",X1={sensitive:!1,strict:!1,start:!0,end:!0},Y1=/[.+*?^${}()[\]/\\]/g;function $1(n,t){const e=Me({},X1,t),i=[];let r=e.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];e.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(e.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(Y1,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=d;s.push({name:g,repeatable:_,optional:m});const y=p||f_;if(y!==f_){h+=10;try{new RegExp(`(${y})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+x.message)}}let E=_?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),r+=E,h+=20,m&&(h+=-8),_&&(h+=-20),y===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(r+="/?"),e.end?r+="$":e.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,e.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:_,optional:m}=h,p=g in c?c[g]:"";if(rr(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=rr(p)?p.join("/"):p;if(!y)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function q1(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Nv(n,t){let e=0;const i=n.score,r=t.score;for(;e<i.length&&e<r.length;){const s=q1(i[e],r[e]);if(s)return s;e++}if(Math.abs(r.length-i.length)===1){if(h_(i))return 1;if(h_(r))return-1}return r.length-i.length}function h_(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const j1={type:0,value:""},K1=/[a-zA-Z0-9_]/;function Z1(n){if(!n)return[[]];if(n==="/")return[[j1]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(h){throw new Error(`ERR (${e})/"${c}": ${h}`)}let e=0,i=e;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(e===0?s.push({type:0,value:c}):e===1||e===2||e===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),e=1):d();break;case 4:d(),e=i;break;case 1:l==="("?e=2:K1.test(l)?d():(f(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=3:u+=l;break;case 3:f(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function J1(n,t,e){const i=$1(Z1(n.path),e),r=Me(i,{record:n,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Q1(n,t){const e=[],i=new Map;t=__({strict:!1,end:!0,sensitive:!1},t);function r(f){return i.get(f)}function s(f,d,h){const g=!h,_=p_(f);_.aliasOf=h&&h.record;const m=__(t,f),p=[_];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const w of x)p.push(p_(Me({},_,{components:h?h.record.components:_.components,path:w,aliasOf:h?h.record:_})))}let y,E;for(const x of p){const{path:w}=x;if(d&&w[0]!=="/"){const A=d.record.path,T=A[A.length-1]==="/"?"":"/";x.path=d.record.path+(w&&T+w)}if(y=J1(x,d,m),h?h.alias.push(y):(E=E||y,E!==y&&E.alias.push(y),g&&f.name&&!m_(y)&&o(f.name)),Fv(y)&&l(y),_.children){const A=_.children;for(let T=0;T<A.length;T++)s(A[T],y,h&&h.children[T])}h=h||y}return E?()=>{o(E)}:dl}function o(f){if(Uv(f)){const d=i.get(f);d&&(i.delete(f),e.splice(e.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=e.indexOf(f);d>-1&&(e.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return e}function l(f){const d=nE(f,e);e.splice(d,0,f),f.record.name&&!m_(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},_,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw Sa(1,{location:f});m=h.record.name,g=Me(d_(d.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&d_(f.params,h.keys.map(E=>E.name))),_=h.stringify(g)}else if(f.path!=null)_=f.path,h=e.find(E=>E.re.test(_)),h&&(g=h.parse(_),m=h.record.name);else{if(h=d.name?i.get(d.name):e.find(E=>E.re.test(d.path)),!h)throw Sa(1,{location:f,currentLocation:d});m=h.record.name,g=Me({},d.params,f.params),_=h.stringify(g)}const p=[];let y=h;for(;y;)p.unshift(y.record),y=y.parent;return{name:m,path:_,params:g,matched:p,meta:eE(p)}}n.forEach(f=>s(f));function u(){e.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function d_(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function p_(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:tE(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function tE(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function m_(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function eE(n){return n.reduce((t,e)=>Me(t,e.meta),{})}function __(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function nE(n,t){let e=0,i=t.length;for(;e!==i;){const s=e+i>>1;Nv(n,t[s])<0?i=s:e=s+1}const r=iE(n);return r&&(i=t.lastIndexOf(r,i-1)),i}function iE(n){let t=n;for(;t=t.parent;)if(Fv(t)&&Nv(n,t)===0)return t}function Fv({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function rE(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Cv," "),o=s.indexOf("="),a=Nl(o<0?s:s.slice(0,o)),l=o<0?null:Nl(s.slice(o+1));if(a in t){let c=t[a];rr(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function g_(n){let t="";for(let e in n){const i=n[e];if(e=b1(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(rr(i)?i.map(s=>s&&Zh(s)):[i&&Zh(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function sE(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=rr(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const oE=Symbol(""),v_=Symbol(""),Fp=Symbol(""),Bv=Symbol(""),Qh=Symbol("");function Ba(){let n=[];function t(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function ls(n,t,e,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Sa(4,{from:e,to:t})):d instanceof Error?l(d):W1(d)?l(Sa(2,{from:t,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>n.call(i&&i.instances[r],t,e,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Of(n,t,e,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(wv(l)){const u=(l.__vccOpts||l)[t];u&&s.push(ls(u,e,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=d1(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[t];return h&&ls(h,e,i,o,a,r)()}))}}return s}function x_(n){const t=Hr(Fp),e=Hr(Bv),i=zi(()=>{const l=so(n.to);return t.resolve(l)}),r=zi(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=e.matched;if(!u||!f.length)return-1;const d=f.findIndex(ya.bind(null,u));if(d>-1)return d;const h=y_(l[c-2]);return c>1&&y_(u)===h&&f[f.length-1].path!==h?f.findIndex(ya.bind(null,l[c-2])):d}),s=zi(()=>r.value>-1&&fE(e.params,i.value.params)),o=zi(()=>r.value>-1&&r.value===e.matched.length-1&&Lv(e.params,i.value.params));function a(l={}){if(uE(l)){const c=t[so(n.replace)?"replace":"push"](so(n.to)).catch(dl);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:zi(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function aE(n){return n.length===1?n[0]:n}const lE=Zn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:x_,setup(n,{slots:t}){const e=ef(x_(n)),{options:i}=Hr(Fp),r=zi(()=>({[S_(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[S_(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=t.default&&aE(t.default(e));return n.custom?s:Op("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},s)}}}),cE=lE;function uE(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function fE(n,t){for(const e in t){const i=t[e],r=n[e];if(typeof i=="string"){if(i!==r)return!1}else if(!rr(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function y_(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const S_=(n,t,e)=>n??t??e,hE=Zn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Hr(Qh),r=zi(()=>n.route||i.value),s=Hr(v_,0),o=zi(()=>{let c=so(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=zi(()=>r.value.matched[o.value]);nu(v_,zi(()=>o.value+1)),nu(oE,a),nu(Qh,r);const l=ne();return fl(()=>[l.value,a.value,n.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!ya(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,d=f&&f.components[u];if(!d)return M_(e.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Op(d,Me({},g,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return M_(e.default,{Component:m,route:c})||m}}});function M_(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const dE=hE;function pE(n){const t=Q1(n.routes,n),e=n.parseQuery||rE,i=n.stringifyQuery||g_,r=n.history,s=Ba(),o=Ba(),a=Ba(),l=xS(Zr);let c=Zr;Jo&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=If.bind(null,L=>""+L),f=If.bind(null,w1),d=If.bind(null,Nl);function h(L,j){let J,nt;return Uv(L)?(J=t.getRecordMatcher(L),nt=j):nt=L,t.addRoute(nt,J)}function g(L){const j=t.getRecordMatcher(L);j&&t.removeRoute(j)}function _(){return t.getRoutes().map(L=>L.record)}function m(L){return!!t.getRecordMatcher(L)}function p(L,j){if(j=Me({},j||l.value),typeof L=="string"){const B=Uf(e,L,j.path),V=t.resolve({path:B.path},j),q=r.createHref(B.fullPath);return Me(B,V,{params:d(V.params),hash:Nl(B.hash),redirectedFrom:void 0,href:q})}let J;if(L.path!=null)J=Me({},L,{path:Uf(e,L.path,j.path).path});else{const B=Me({},L.params);for(const V in B)B[V]==null&&delete B[V];J=Me({},L,{params:f(B)}),j.params=f(j.params)}const nt=t.resolve(J,j),ut=L.hash||"";nt.params=u(d(nt.params));const D=R1(i,Me({},L,{hash:E1(ut),path:nt.path})),v=r.createHref(D);return Me({fullPath:D,hash:ut,query:i===g_?sE(L.query):L.query||{}},nt,{redirectedFrom:void 0,href:v})}function y(L){return typeof L=="string"?Uf(e,L,l.value.path):Me({},L)}function E(L,j){if(c!==L)return Sa(8,{from:j,to:L})}function x(L){return T(L)}function w(L){return x(Me(y(L),{replace:!0}))}function A(L){const j=L.matched[L.matched.length-1];if(j&&j.redirect){const{redirect:J}=j;let nt=typeof J=="function"?J(L):J;return typeof nt=="string"&&(nt=nt.includes("?")||nt.includes("#")?nt=y(nt):{path:nt},nt.params={}),Me({query:L.query,hash:L.hash,params:nt.path!=null?{}:L.params},nt)}}function T(L,j){const J=c=p(L),nt=l.value,ut=L.state,D=L.force,v=L.replace===!0,B=A(J);if(B)return T(Me(y(B),{state:typeof B=="object"?Me({},ut,B.state):ut,force:D,replace:v}),j||J);const V=J;V.redirectedFrom=j;let q;return!D&&P1(i,nt,J)&&(q=Sa(16,{to:V,from:nt}),xt(nt,nt,!0,!1)),(q?Promise.resolve(q):b(V,nt)).catch(P=>Tr(P)?Tr(P,2)?P:N(P):H(P,V,nt)).then(P=>{if(P){if(Tr(P,2))return T(Me({replace:v},y(P.to),{state:typeof P.to=="object"?Me({},ut,P.to.state):ut,force:D}),j||V)}else P=I(V,nt,!0,v,ut);return U(V,nt,P),P})}function O(L,j){const J=E(L,j);return J?Promise.reject(J):Promise.resolve()}function S(L){const j=Vt.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(L):L()}function b(L,j){let J;const[nt,ut,D]=mE(L,j);J=Of(nt.reverse(),"beforeRouteLeave",L,j);for(const B of nt)B.leaveGuards.forEach(V=>{J.push(ls(V,L,j))});const v=O.bind(null,L,j);return J.push(v),Y(J).then(()=>{J=[];for(const B of s.list())J.push(ls(B,L,j));return J.push(v),Y(J)}).then(()=>{J=Of(ut,"beforeRouteUpdate",L,j);for(const B of ut)B.updateGuards.forEach(V=>{J.push(ls(V,L,j))});return J.push(v),Y(J)}).then(()=>{J=[];for(const B of D)if(B.beforeEnter)if(rr(B.beforeEnter))for(const V of B.beforeEnter)J.push(ls(V,L,j));else J.push(ls(B.beforeEnter,L,j));return J.push(v),Y(J)}).then(()=>(L.matched.forEach(B=>B.enterCallbacks={}),J=Of(D,"beforeRouteEnter",L,j,S),J.push(v),Y(J))).then(()=>{J=[];for(const B of o.list())J.push(ls(B,L,j));return J.push(v),Y(J)}).catch(B=>Tr(B,8)?B:Promise.reject(B))}function U(L,j,J){a.list().forEach(nt=>S(()=>nt(L,j,J)))}function I(L,j,J,nt,ut){const D=E(L,j);if(D)return D;const v=j===Zr,B=Jo?history.state:{};J&&(nt||v?r.replace(L.fullPath,Me({scroll:v&&B&&B.scroll},ut)):r.push(L.fullPath,ut)),l.value=L,xt(L,j,J,v),N()}let F;function W(){F||(F=r.listen((L,j,J)=>{if(!Wt.listening)return;const nt=p(L),ut=A(nt);if(ut){T(Me(ut,{replace:!0,force:!0}),nt).catch(dl);return}c=nt;const D=l.value;Jo&&B1(l_(D.fullPath,J.delta),uf()),b(nt,D).catch(v=>Tr(v,12)?v:Tr(v,2)?(T(Me(y(v.to),{force:!0}),nt).then(B=>{Tr(B,20)&&!J.delta&&J.type===Fl.pop&&r.go(-1,!1)}).catch(dl),Promise.reject()):(J.delta&&r.go(-J.delta,!1),H(v,nt,D))).then(v=>{v=v||I(nt,D,!1),v&&(J.delta&&!Tr(v,8)?r.go(-J.delta,!1):J.type===Fl.pop&&Tr(v,20)&&r.go(-1,!1)),U(nt,D,v)}).catch(dl)}))}let tt=Ba(),Z=Ba(),K;function H(L,j,J){N(L);const nt=Z.list();return nt.length?nt.forEach(ut=>ut(L,j,J)):console.error(L),Promise.reject(L)}function dt(){return K&&l.value!==Zr?Promise.resolve():new Promise((L,j)=>{tt.add([L,j])})}function N(L){return K||(K=!L,W(),tt.list().forEach(([j,J])=>L?J(L):j()),tt.reset()),L}function xt(L,j,J,nt){const{scrollBehavior:ut}=n;if(!Jo||!ut)return Promise.resolve();const D=!J&&k1(l_(L.fullPath,0))||(nt||!J)&&history.state&&history.state.scroll||null;return B0().then(()=>ut(L,j,D)).then(v=>v&&F1(v)).catch(v=>H(v,L,j))}const It=L=>r.go(L);let Qt;const Vt=new Set,Wt={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:x,replace:w,go:It,back:()=>It(-1),forward:()=>It(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:dt,install(L){const j=this;L.component("RouterLink",cE),L.component("RouterView",dE),L.config.globalProperties.$router=j,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>so(l)}),Jo&&!Qt&&l.value===Zr&&(Qt=!0,x(r.location).catch(ut=>{}));const J={};for(const ut in Zr)Object.defineProperty(J,ut,{get:()=>l.value[ut],enumerable:!0});L.provide(Fp,j),L.provide(Bv,I0(J)),L.provide(Qh,l);const nt=L.unmount;Vt.add(L),L.unmount=function(){Vt.delete(L),Vt.size<1&&(c=Zr,F&&F(),F=null,l.value=Zr,Qt=!1,K=!1),nt()}}};function Y(L){return L.reduce((j,J)=>j.then(()=>S(J)),Promise.resolve())}return Wt}function mE(n,t){const e=[],i=[],r=[],s=Math.max(t.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(n.matched.find(c=>ya(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>ya(c,l))||r.push(l))}return[e,i,r]}function _E(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function gE(n,t,e){return t&&_E(n.prototype,t),n}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sn,ou,Si,fs,hs,ha,kv,$s,ml,zv,kr,Zi,Hv,Vv=function(){return Sn||typeof window<"u"&&(Sn=window.gsap)&&Sn.registerPlugin&&Sn},Gv=1,ea=[],pe=[],vr=[],_l=Date.now,td=function(t,e){return e},vE=function(){var t=ml.core,e=t.bridge||{},i=t._scrollers,r=t._proxies;i.push.apply(i,pe),r.push.apply(r,vr),pe=i,vr=r,td=function(o,a){return e[o](a)}},vs=function(t,e){return~vr.indexOf(t)&&vr[vr.indexOf(t)+1][e]},gl=function(t){return!!~zv.indexOf(t)},Vn=function(t,e,i,r,s){return t.addEventListener(e,i,{passive:r!==!1,capture:!!s})},kn=function(t,e,i,r){return t.removeEventListener(e,i,!!r)},dc="scrollLeft",pc="scrollTop",ed=function(){return kr&&kr.isPressed||pe.cache++},Pu=function(t,e){var i=function r(s){if(s||s===0){Gv&&(Si.history.scrollRestoration="manual");var o=kr&&kr.isPressed;s=r.v=Math.round(s)||(kr&&kr.iOS?1:0),t(s),r.cacheID=pe.cache,o&&td("ss",s)}else(e||pe.cache!==r.cacheID||td("ref"))&&(r.cacheID=pe.cache,r.v=t());return r.v+r.offset};return i.offset=0,t&&i},jn={s:dc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Pu(function(n){return arguments.length?Si.scrollTo(n,un.sc()):Si.pageXOffset||fs[dc]||hs[dc]||ha[dc]||0})},un={s:pc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:jn,sc:Pu(function(n){return arguments.length?Si.scrollTo(jn.sc(),n):Si.pageYOffset||fs[pc]||hs[pc]||ha[pc]||0})},ei=function(t,e){return(e&&e._ctx&&e._ctx.selector||Sn.utils.toArray)(t)[0]||(typeof t=="string"&&Sn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},xE=function(t,e){for(var i=e.length;i--;)if(e[i]===t||e[i].contains(t))return!0;return!1},ws=function(t,e){var i=e.s,r=e.sc;gl(t)&&(t=fs.scrollingElement||hs);var s=pe.indexOf(t),o=r===un.sc?1:2;!~s&&(s=pe.push(t)-1),pe[s+o]||Vn(t,"scroll",ed);var a=pe[s+o],l=a||(pe[s+o]=Pu(vs(t,i),!0)||(gl(t)?r:Pu(function(c){return arguments.length?t[i]=c:t[i]})));return l.target=t,a||(l.smooth=Sn.getProperty(t,"scrollBehavior")==="smooth"),l},nd=function(t,e,i){var r=t,s=t,o=_l(),a=o,l=e||50,c=Math.max(500,l*3),u=function(g,_){var m=_l();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},d=function(g){var _=a,m=s,p=_l();return(g||g===0)&&g!==r&&u(g),o===a||p-a>c?0:(r+(i?m:-m))/((i?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:d}},ka=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},E_=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},Wv=function(){ml=Sn.core.globals().ScrollTrigger,ml&&ml.core&&vE()},Xv=function(t){return Sn=t||Vv(),!ou&&Sn&&typeof document<"u"&&document.body&&(Si=window,fs=document,hs=fs.documentElement,ha=fs.body,zv=[Si,fs,hs,ha],Sn.utils.clamp,Hv=Sn.core.context||function(){},$s="onpointerenter"in ha?"pointer":"mouse",kv=en.isTouch=Si.matchMedia&&Si.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Si||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Zi=en.eventTypes=("ontouchstart"in hs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in hs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Gv=0},500),Wv(),ou=1),ou};jn.op=un;pe.cache=0;var en=function(){function n(e){this.init(e)}var t=n.prototype;return t.init=function(i){ou||Xv(Sn)||console.warn("Please gsap.registerPlugin(Observer)"),ml||Wv();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,f=i.onStop,d=i.onStopDelay,h=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,y=i.onDrag,E=i.onPress,x=i.onRelease,w=i.onRight,A=i.onLeft,T=i.onUp,O=i.onDown,S=i.onChangeX,b=i.onChangeY,U=i.onChange,I=i.onToggleX,F=i.onToggleY,W=i.onHover,tt=i.onHoverEnd,Z=i.onMove,K=i.ignoreCheck,H=i.isNormalizer,dt=i.onGestureStart,N=i.onGestureEnd,xt=i.onWheel,It=i.onEnable,Qt=i.onDisable,Vt=i.onClick,Wt=i.scrollSpeed,Y=i.capture,L=i.allowClicks,j=i.lockAxis,J=i.onLockAxis;this.target=a=ei(a)||hs,this.vars=i,h&&(h=Sn.utils.toArray(h)),r=r||1e-9,s=s||0,g=g||1,Wt=Wt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Si.getComputedStyle(ha).lineHeight)||22);var nt,ut,D,v,B,V,q,P=this,ct=0,it=0,lt=i.passive||!u&&i.passive!==!1,at=ws(a,jn),yt=ws(a,un),C=at(),M=yt(),z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Zi[0]==="pointerdown",et=gl(a),st=a.ownerDocument||fs,Q=[0,0,0],bt=[0,0,0],mt=0,Ct=function(){return mt=_l()},Mt=function(kt,re){return(P.event=kt)&&h&&xE(kt.target,h)||re&&z&&kt.pointerType!=="touch"||K&&K(kt,re)},gt=function(){P._vx.reset(),P._vy.reset(),ut.pause(),f&&f(P)},Tt=function(){var kt=P.deltaX=E_(Q),re=P.deltaY=E_(bt),At=Math.abs(kt)>=r,jt=Math.abs(re)>=r;U&&(At||jt)&&U(P,kt,re,Q,bt),At&&(w&&P.deltaX>0&&w(P),A&&P.deltaX<0&&A(P),S&&S(P),I&&P.deltaX<0!=ct<0&&I(P),ct=P.deltaX,Q[0]=Q[1]=Q[2]=0),jt&&(O&&P.deltaY>0&&O(P),T&&P.deltaY<0&&T(P),b&&b(P),F&&P.deltaY<0!=it<0&&F(P),it=P.deltaY,bt[0]=bt[1]=bt[2]=0),(v||D)&&(Z&&Z(P),D&&(m&&D===1&&m(P),y&&y(P),D=0),v=!1),V&&!(V=!1)&&J&&J(P),B&&(xt(P),B=!1),nt=0},Ut=function(kt,re,At){Q[At]+=kt,bt[At]+=re,P._vx.update(kt),P._vy.update(re),c?nt||(nt=requestAnimationFrame(Tt)):Tt()},Rt=function(kt,re){j&&!q&&(P.axis=q=Math.abs(kt)>Math.abs(re)?"x":"y",V=!0),q!=="y"&&(Q[2]+=kt,P._vx.update(kt,!0)),q!=="x"&&(bt[2]+=re,P._vy.update(re,!0)),c?nt||(nt=requestAnimationFrame(Tt)):Tt()},Et=function(kt){if(!Mt(kt,1)){kt=ka(kt,u);var re=kt.clientX,At=kt.clientY,jt=re-P.x,Gt=At-P.y,ee=P.isDragging;P.x=re,P.y=At,(ee||(jt||Gt)&&(Math.abs(P.startX-re)>=s||Math.abs(P.startY-At)>=s))&&(D=ee?2:1,ee||(P.isDragging=!0),Rt(jt,Gt))}},qt=P.onPress=function(Lt){Mt(Lt,1)||Lt&&Lt.button||(P.axis=q=null,ut.pause(),P.isPressed=!0,Lt=ka(Lt),ct=it=0,P.startX=P.x=Lt.clientX,P.startY=P.y=Lt.clientY,P._vx.reset(),P._vy.reset(),Vn(H?a:st,Zi[1],Et,lt,!0),P.deltaX=P.deltaY=0,E&&E(P))},k=P.onRelease=function(Lt){if(!Mt(Lt,1)){kn(H?a:st,Zi[1],Et,!0);var kt=!isNaN(P.y-P.startY),re=P.isDragging,At=re&&(Math.abs(P.x-P.startX)>3||Math.abs(P.y-P.startY)>3),jt=ka(Lt);!At&&kt&&(P._vx.reset(),P._vy.reset(),u&&L&&Sn.delayedCall(.08,function(){if(_l()-mt>300&&!Lt.defaultPrevented){if(Lt.target.click)Lt.target.click();else if(st.createEvent){var Gt=st.createEvent("MouseEvents");Gt.initMouseEvent("click",!0,!0,Si,1,jt.screenX,jt.screenY,jt.clientX,jt.clientY,!1,!1,!1,!1,0,null),Lt.target.dispatchEvent(Gt)}}})),P.isDragging=P.isGesturing=P.isPressed=!1,f&&re&&!H&&ut.restart(!0),D&&Tt(),p&&re&&p(P),x&&x(P,At)}},vt=function(kt){return kt.touches&&kt.touches.length>1&&(P.isGesturing=!0)&&dt(kt,P.isDragging)},St=function(){return(P.isGesturing=!1)||N(P)},Pt=function(kt){if(!Mt(kt)){var re=at(),At=yt();Ut((re-C)*Wt,(At-M)*Wt,1),C=re,M=At,f&&ut.restart(!0)}},_t=function(kt){if(!Mt(kt)){kt=ka(kt,u),xt&&(B=!0);var re=(kt.deltaMode===1?l:kt.deltaMode===2?Si.innerHeight:1)*g;Ut(kt.deltaX*re,kt.deltaY*re,0),f&&!H&&ut.restart(!0)}},ht=function(kt){if(!Mt(kt)){var re=kt.clientX,At=kt.clientY,jt=re-P.x,Gt=At-P.y;P.x=re,P.y=At,v=!0,f&&ut.restart(!0),(jt||Gt)&&Rt(jt,Gt)}},Nt=function(kt){P.event=kt,W(P)},Yt=function(kt){P.event=kt,tt(P)},ve=function(kt){return Mt(kt)||ka(kt,u)&&Vt(P)};ut=P._dc=Sn.delayedCall(d||.25,gt).pause(),P.deltaX=P.deltaY=0,P._vx=nd(0,50,!0),P._vy=nd(0,50,!0),P.scrollX=at,P.scrollY=yt,P.isDragging=P.isGesturing=P.isPressed=!1,Hv(this),P.enable=function(Lt){return P.isEnabled||(Vn(et?st:a,"scroll",ed),o.indexOf("scroll")>=0&&Vn(et?st:a,"scroll",Pt,lt,Y),o.indexOf("wheel")>=0&&Vn(a,"wheel",_t,lt,Y),(o.indexOf("touch")>=0&&kv||o.indexOf("pointer")>=0)&&(Vn(a,Zi[0],qt,lt,Y),Vn(st,Zi[2],k),Vn(st,Zi[3],k),L&&Vn(a,"click",Ct,!0,!0),Vt&&Vn(a,"click",ve),dt&&Vn(st,"gesturestart",vt),N&&Vn(st,"gestureend",St),W&&Vn(a,$s+"enter",Nt),tt&&Vn(a,$s+"leave",Yt),Z&&Vn(a,$s+"move",ht)),P.isEnabled=!0,P.isDragging=P.isGesturing=P.isPressed=v=D=!1,P._vx.reset(),P._vy.reset(),C=at(),M=yt(),Lt&&Lt.type&&qt(Lt),It&&It(P)),P},P.disable=function(){P.isEnabled&&(ea.filter(function(Lt){return Lt!==P&&gl(Lt.target)}).length||kn(et?st:a,"scroll",ed),P.isPressed&&(P._vx.reset(),P._vy.reset(),kn(H?a:st,Zi[1],Et,!0)),kn(et?st:a,"scroll",Pt,Y),kn(a,"wheel",_t,Y),kn(a,Zi[0],qt,Y),kn(st,Zi[2],k),kn(st,Zi[3],k),kn(a,"click",Ct,!0),kn(a,"click",ve),kn(st,"gesturestart",vt),kn(st,"gestureend",St),kn(a,$s+"enter",Nt),kn(a,$s+"leave",Yt),kn(a,$s+"move",ht),P.isEnabled=P.isPressed=P.isDragging=!1,Qt&&Qt(P))},P.kill=P.revert=function(){P.disable();var Lt=ea.indexOf(P);Lt>=0&&ea.splice(Lt,1),kr===P&&(kr=0)},ea.push(P),H&&gl(a)&&(kr=P),P.enable(_)},gE(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();en.version="3.13.0";en.create=function(n){return new en(n)};en.register=Xv;en.getAll=function(){return ea.slice()};en.getById=function(n){return ea.filter(function(t){return t.vars.id===n})[0]};Vv()&&Sn.registerPlugin(en);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bt,Qo,de,Ue,xi,Ee,Bp,Du,Bl,vl,Za,mc,Tn,ff,id,Xn,b_,T_,ta,Yv,Nf,$v,Wn,rd,qv,jv,rs,sd,kp,da,zp,Lu,od,Ff,_c=1,wn=Date.now,Bf=wn(),Yi=0,Ja=0,w_=function(t,e,i){var r=gi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=r,r?t.substr(6,t.length-7):t},A_=function(t,e){return e&&(!gi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},yE=function n(){return Ja&&requestAnimationFrame(n)},C_=function(){return ff=1},R_=function(){return ff=0},ar=function(t){return t},Qa=function(t){return Math.round(t*1e5)/1e5||0},Kv=function(){return typeof window<"u"},Zv=function(){return Bt||Kv()&&(Bt=window.gsap)&&Bt.registerPlugin&&Bt},mo=function(t){return!!~Bp.indexOf(t)},Jv=function(t){return(t==="Height"?zp:de["inner"+t])||xi["client"+t]||Ee["client"+t]},Qv=function(t){return vs(t,"getBoundingClientRect")||(mo(t)?function(){return fu.width=de.innerWidth,fu.height=zp,fu}:function(){return Br(t)})},SE=function(t,e,i){var r=i.d,s=i.d2,o=i.a;return(o=vs(t,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(e?Jv(s):t["client"+s])||0}},ME=function(t,e){return!e||~vr.indexOf(t)?Qv(t):function(){return fu}},dr=function(t,e){var i=e.s,r=e.d2,s=e.d,o=e.a;return Math.max(0,(i="scroll"+r)&&(o=vs(t,i))?o()-Qv(t)()[s]:mo(t)?(xi[i]||Ee[i])-Jv(r):t[i]-t["offset"+r])},gc=function(t,e){for(var i=0;i<ta.length;i+=3)(!e||~e.indexOf(ta[i+1]))&&t(ta[i],ta[i+1],ta[i+2])},gi=function(t){return typeof t=="string"},Dn=function(t){return typeof t=="function"},tl=function(t){return typeof t=="number"},qs=function(t){return typeof t=="object"},za=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},kf=function(t,e){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t)}):e(t);i&&i.totalTime&&(t.callbackAnimation=i)}},Co=Math.abs,tx="left",ex="top",Hp="right",Vp="bottom",oo="width",ao="height",xl="Right",yl="Left",Sl="Top",Ml="Bottom",rn="padding",Fi="margin",Ma="Width",Gp="Height",cn="px",Bi=function(t){return de.getComputedStyle(t)},EE=function(t){var e=Bi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},P_=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Br=function(t,e){var i=e&&Bi(t)[id]!=="matrix(1, 0, 0, 1, 0, 0)"&&Bt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return i&&i.progress(0).kill(),r},Iu=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},nx=function(t){var e=[],i=t.labels,r=t.duration(),s;for(s in i)e.push(i[s]/r);return e},bE=function(t){return function(e){return Bt.utils.snap(nx(t),e)}},Wp=function(t){var e=Bt.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return e(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=e(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:e(s<0?r-t:r+t)}},TE=function(t){return function(e,i){return Wp(nx(t))(e,i.direction)}},vc=function(t,e,i,r){return i.split(",").forEach(function(s){return t(e,s,r)})},gn=function(t,e,i,r,s){return t.addEventListener(e,i,{passive:!r,capture:!!s})},_n=function(t,e,i,r){return t.removeEventListener(e,i,!!r)},xc=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},D_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},yc={toggleActions:"play",anticipatePin:0},Uu={top:0,left:0,center:.5,bottom:1,right:1},au=function(t,e){if(gi(t)){var i=t.indexOf("="),r=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(r*=e/100),t=t.substr(0,i-1)),t=r+(t in Uu?Uu[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Sc=function(t,e,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=Ue.createElement("div"),_=mo(i)||vs(i,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?Ee:i,y=t.indexOf("start")!==-1,E=y?c:u,x="border-color:"+E+";font-size:"+f+";color:"+E+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(r===un?Hp:Vp)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=x,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],lu(g,0,r,y),g},lu=function(t,e,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];t._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Ma]=1,s["border"+a+Ma]=0,s[i.p]=e+"px",Bt.set(t,s)},ue=[],ad={},kl,L_=function(){return wn()-Yi>34&&(kl||(kl=requestAnimationFrame(Vr)))},Ro=function(){(!Wn||!Wn.isPressed||Wn.startX>Ee.clientWidth)&&(pe.cache++,Wn?kl||(kl=requestAnimationFrame(Vr)):Vr(),Yi||go("scrollStart"),Yi=wn())},zf=function(){jv=de.innerWidth,qv=de.innerHeight},el=function(t){pe.cache++,(t===!0||!Tn&&!$v&&!Ue.fullscreenElement&&!Ue.webkitFullscreenElement&&(!rd||jv!==de.innerWidth||Math.abs(de.innerHeight-qv)>de.innerHeight*.25))&&Du.restart(!0)},_o={},wE=[],ix=function n(){return _n(he,"scrollEnd",n)||to(!0)},go=function(t){return _o[t]&&_o[t].map(function(e){return e()})||wE},_i=[],rx=function(t){for(var e=0;e<_i.length;e+=5)(!t||_i[e+4]&&_i[e+4].query===t)&&(_i[e].style.cssText=_i[e+1],_i[e].getBBox&&_i[e].setAttribute("transform",_i[e+2]||""),_i[e+3].uncache=1)},Xp=function(t,e){var i;for(Xn=0;Xn<ue.length;Xn++)i=ue[Xn],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));Lu=!0,e&&rx(e),e||go("revert")},sx=function(t,e){pe.cache++,(e||!Yn)&&pe.forEach(function(i){return Dn(i)&&i.cacheID++&&(i.rec=0)}),gi(t)&&(de.history.scrollRestoration=kp=t)},Yn,lo=0,I_,AE=function(){if(I_!==lo){var t=I_=lo;requestAnimationFrame(function(){return t===lo&&to(!0)})}},ox=function(){Ee.appendChild(da),zp=!Wn&&da.offsetHeight||de.innerHeight,Ee.removeChild(da)},U_=function(t){return Bl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},to=function(t,e){if(xi=Ue.documentElement,Ee=Ue.body,Bp=[de,Ue,xi,Ee],Yi&&!t&&!Lu){gn(he,"scrollEnd",ix);return}ox(),Yn=he.isRefreshing=!0,pe.forEach(function(r){return Dn(r)&&++r.cacheID&&(r.rec=r())});var i=go("refreshInit");Yv&&he.sort(),e||Xp(),pe.forEach(function(r){Dn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ue.slice(0).forEach(function(r){return r.refresh()}),Lu=!1,ue.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),od=1,U_(!0),ue.forEach(function(r){var s=dr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),U_(!1),od=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),pe.forEach(function(r){Dn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),sx(kp,1),Du.pause(),lo++,Yn=2,Vr(2),ue.forEach(function(r){return Dn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Yn=he.isRefreshing=!1,go("refresh")},ld=0,cu=1,El,Vr=function(t){if(t===2||!Yn&&!Lu){he.isUpdating=!0,El&&El.update(0);var e=ue.length,i=wn(),r=i-Bf>=50,s=e&&ue[0].scroll();if(cu=ld>s?-1:1,Yn||(ld=s),r&&(Yi&&!ff&&i-Yi>200&&(Yi=0,go("scrollEnd")),Za=Bf,Bf=i),cu<0){for(Xn=e;Xn-- >0;)ue[Xn]&&ue[Xn].update(0,r);cu=1}else for(Xn=0;Xn<e;Xn++)ue[Xn]&&ue[Xn].update(0,r);he.isUpdating=!1}kl=0},cd=[tx,ex,Vp,Hp,Fi+Ml,Fi+xl,Fi+Sl,Fi+yl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],uu=cd.concat([oo,ao,"boxSizing","max"+Ma,"max"+Gp,"position",Fi,rn,rn+Sl,rn+xl,rn+Ml,rn+yl]),CE=function(t,e,i){pa(i);var r=t._gsap;if(r.spacerIsNative)pa(r.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Hf=function(t,e,i,r){if(!t._gsap.swappedIn){for(var s=cd.length,o=e.style,a=t.style,l;s--;)l=cd[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Vp]=a[Hp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[oo]=Iu(t,jn)+cn,o[ao]=Iu(t,un)+cn,o[rn]=a[Fi]=a[ex]=a[tx]="0",pa(r),a[oo]=a["max"+Ma]=i[oo],a[ao]=a["max"+Gp]=i[ao],a[rn]=i[rn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},RE=/([A-Z])/g,pa=function(t){if(t){var e=t.t.style,i=t.length,r=0,s,o;for((t.t._gsap||Bt.core.getCache(t.t)).uncache=1;r<i;r+=2)o=t[r+1],s=t[r],o?e[s]=o:e[s]&&e.removeProperty(s.replace(RE,"-$1").toLowerCase())}},Mc=function(t){for(var e=uu.length,i=t.style,r=[],s=0;s<e;s++)r.push(uu[s],i[uu[s]]);return r.t=t,r},PE=function(t,e,i){for(var r=[],s=t.length,o=i?8:0,a;o<s;o+=2)a=t[o],r.push(a,a in e?e[a]:t[o+1]);return r.t=t.t,r},fu={left:0,top:0},O_=function(t,e,i,r,s,o,a,l,c,u,f,d,h,g){Dn(t)&&(t=t(l)),gi(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?au("0"+t.substr(3),i):0));var _=h?h.time():0,m,p,y;if(h&&h.seek(0),isNaN(t)||(t=+t),tl(t))h&&(t=Bt.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,t)),a&&lu(a,i,r,!0);else{Dn(e)&&(e=e(l));var E=(t||"0").split(" "),x,w,A,T;y=ei(e,l)||Ee,x=Br(y)||{},(!x||!x.left&&!x.top)&&Bi(y).display==="none"&&(T=y.style.display,y.style.display="block",x=Br(y),T?y.style.display=T:y.style.removeProperty("display")),w=au(E[0],x[r.d]),A=au(E[1]||"0",i),t=x[r.p]-c[r.p]-u+w+s-A,a&&lu(a,A,r,i-A<20||a._isStart&&A>20),i-=i-A}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var O=t+i,S=o._isStart;m="scroll"+r.d2,lu(o,O,r,S&&O>20||!S&&(f?Math.max(Ee[m],xi[m]):o.parentNode[m])<=O+1),f&&(c=Br(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+cn))}return h&&y&&(m=Br(y),h.seek(d),p=Br(y),h._caScrollDist=m[r.p]-p[r.p],t=t/h._caScrollDist*d),h&&h.seek(_),h?t:Math.round(t)},DE=/(webkit|moz|length|cssText|inset)/i,N_=function(t,e,i,r){if(t.parentNode!==e){var s=t.style,o,a;if(e===Ee){t._stOrig=s.cssText,a=Bi(t);for(o in a)!+o&&!DE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=t._stOrig;Bt.core.getCache(t).uncache=1,e.appendChild(t)}},ax=function(t,e,i){var r=e,s=r;return function(o){var a=Math.round(t());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Ec=function(t,e,i){var r={};r[e.p]="+="+i,Bt.set(t,r)},F_=function(t,e){var i=ws(t,e),r="_scroll"+e.p2,s=function o(a,l,c,u,f){var d=o.tween,h=l.onComplete,g={};c=c||i();var _=ax(i,c,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){pe.cache++,o.tween&&Vr()},l.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=Bt.to(t,l),d};return t[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},gn(t,"wheel",i.wheelHandler),he.isTouch&&gn(t,"touchmove",i.wheelHandler),s},he=function(){function n(e,i){Qo||n.register(Bt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),sd(this),this.init(e,i)}var t=n.prototype;return t.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ja){this.update=this.refresh=this.kill=ar;return}i=P_(gi(i)||tl(i)||i.nodeType?{trigger:i}:i,yc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,E=s.once,x=s.snap,w=s.pinReparent,A=s.pinSpacer,T=s.containerAnimation,O=s.fastScrollEnd,S=s.preventOverlaps,b=i.horizontal||i.containerAnimation&&i.horizontal!==!1?jn:un,U=!f&&f!==0,I=ei(i.scroller||de),F=Bt.core.getCache(I),W=mo(I),tt=("pinType"in i?i.pinType:vs(I,"pinType")||W&&"fixed")==="fixed",Z=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],K=U&&i.toggleActions.split(" "),H="markers"in i?i.markers:yc.markers,dt=W?0:parseFloat(Bi(I)["border"+b.p2+Ma])||0,N=this,xt=i.onRefreshInit&&function(){return i.onRefreshInit(N)},It=SE(I,W,b),Qt=ME(I,W),Vt=0,Wt=0,Y=0,L=ws(I,b),j,J,nt,ut,D,v,B,V,q,P,ct,it,lt,at,yt,C,M,z,et,st,Q,bt,mt,Ct,Mt,gt,Tt,Ut,Rt,Et,qt,k,vt,St,Pt,_t,ht,Nt,Yt;if(N._startClamp=N._endClamp=!1,N._dir=b,m*=45,N.scroller=I,N.scroll=T?T.time.bind(T):L,ut=L(),N.vars=i,r=r||i.animation,"refreshPriority"in i&&(Yv=1,i.refreshPriority===-9999&&(El=N)),F.tweenScroll=F.tweenScroll||{top:F_(I,un),left:F_(I,jn)},N.tweenTo=j=F.tweenScroll[b.p],N.scrubDuration=function(At){vt=tl(At)&&At,vt?k?k.duration(At):k=Bt.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:vt,paused:!0,onComplete:function(){return p&&p(N)}}):(k&&k.progress(1).kill(),k=0)},r&&(r.vars.lazy=!1,r._initted&&!N.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),N.animation=r.pause(),r.scrollTrigger=N,N.scrubDuration(f),Et=0,l||(l=r.vars.id)),x&&((!qs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Ee.style&&Bt.set(W?[Ee,xi]:I,{scrollBehavior:"auto"}),pe.forEach(function(At){return Dn(At)&&At.target===(W?Ue.scrollingElement||xi:I)&&(At.smooth=!1)}),nt=Dn(x.snapTo)?x.snapTo:x.snapTo==="labels"?bE(r):x.snapTo==="labelsDirectional"?TE(r):x.directional!==!1?function(At,jt){return Wp(x.snapTo)(At,wn()-Wt<500?0:jt.direction)}:Bt.utils.snap(x.snapTo),St=x.duration||{min:.1,max:2},St=qs(St)?vl(St.min,St.max):vl(St,St),Pt=Bt.delayedCall(x.delay||vt/2||.1,function(){var At=L(),jt=wn()-Wt<500,Gt=j.tween;if((jt||Math.abs(N.getVelocity())<10)&&!Gt&&!ff&&Vt!==At){var ee=(At-v)/at,Ze=r&&!U?r.totalProgress():ee,le=jt?0:(Ze-qt)/(wn()-Za)*1e3||0,He=Bt.utils.clamp(-ee,1-ee,Co(le/2)*le/.185),Je=ee+(x.inertia===!1?0:He),Ne,Re,Te=x,ui=Te.onStart,Fe=Te.onInterrupt,Fn=Te.onComplete;if(Ne=nt(Je,N),tl(Ne)||(Ne=Je),Re=Math.max(0,Math.round(v+Ne*at)),At<=B&&At>=v&&Re!==At){if(Gt&&!Gt._initted&&Gt.data<=Co(Re-At))return;x.inertia===!1&&(He=Ne-ee),j(Re,{duration:St(Co(Math.max(Co(Je-Ze),Co(Ne-Ze))*.185/le/.05||0)),ease:x.ease||"power3",data:Co(Re-At),onInterrupt:function(){return Pt.restart(!0)&&Fe&&Fe(N)},onComplete:function(){N.update(),Vt=L(),r&&!U&&(k?k.resetTo("totalProgress",Ne,r._tTime/r._tDur):r.progress(Ne)),Et=qt=r&&!U?r.totalProgress():N.progress,y&&y(N),Fn&&Fn(N)}},At,He*at,Re-At-He*at),ui&&ui(N,j.tween)}}else N.isActive&&Vt!==At&&Pt.restart(!0)}).pause()),l&&(ad[l]=N),d=N.trigger=ei(d||h!==!0&&h),Yt=d&&d._gsap&&d._gsap.stRevert,Yt&&(Yt=Yt(N)),h=h===!0?d:ei(h),gi(a)&&(a={targets:d,className:a}),h&&(g===!1||g===Fi||(g=!g&&h.parentNode&&h.parentNode.style&&Bi(h.parentNode).display==="flex"?!1:rn),N.pin=h,J=Bt.core.getCache(h),J.spacer?yt=J.pinState:(A&&(A=ei(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),J.spacerIsNative=!!A,A&&(J.spacerState=Mc(A))),J.spacer=z=A||Ue.createElement("div"),z.classList.add("pin-spacer"),l&&z.classList.add("pin-spacer-"+l),J.pinState=yt=Mc(h)),i.force3D!==!1&&Bt.set(h,{force3D:!0}),N.spacer=z=J.spacer,Rt=Bi(h),Ct=Rt[g+b.os2],st=Bt.getProperty(h),Q=Bt.quickSetter(h,b.a,cn),Hf(h,z,Rt),M=Mc(h)),H){it=qs(H)?P_(H,D_):D_,P=Sc("scroller-start",l,I,b,it,0),ct=Sc("scroller-end",l,I,b,it,0,P),et=P["offset"+b.op.d2];var ve=ei(vs(I,"content")||I);V=this.markerStart=Sc("start",l,ve,b,it,et,0,T),q=this.markerEnd=Sc("end",l,ve,b,it,et,0,T),T&&(Nt=Bt.quickSetter([V,q],b.a,cn)),!tt&&!(vr.length&&vs(I,"fixedMarkers")===!0)&&(EE(W?Ee:I),Bt.set([P,ct],{force3D:!0}),gt=Bt.quickSetter(P,b.a,cn),Ut=Bt.quickSetter(ct,b.a,cn))}if(T){var Lt=T.vars.onUpdate,kt=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){N.update(0,0,1),Lt&&Lt.apply(T,kt||[])})}if(N.previous=function(){return ue[ue.indexOf(N)-1]},N.next=function(){return ue[ue.indexOf(N)+1]},N.revert=function(At,jt){if(!jt)return N.kill(!0);var Gt=At!==!1||!N.enabled,ee=Tn;Gt!==N.isReverted&&(Gt&&(_t=Math.max(L(),N.scroll.rec||0),Y=N.progress,ht=r&&r.progress()),V&&[V,q,P,ct].forEach(function(Ze){return Ze.style.display=Gt?"none":"block"}),Gt&&(Tn=N,N.update(Gt)),h&&(!w||!N.isActive)&&(Gt?CE(h,z,yt):Hf(h,z,Bi(h),Mt)),Gt||N.update(Gt),Tn=ee,N.isReverted=Gt)},N.refresh=function(At,jt,Gt,ee){if(!((Tn||!N.enabled)&&!jt)){if(h&&At&&Yi){gn(n,"scrollEnd",ix);return}!Yn&&xt&&xt(N),Tn=N,j.tween&&!Gt&&(j.tween.kill(),j.tween=0),k&&k.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(me){return me.vars.immediateRender&&me.render(0,!0,!0)})),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var Ze=It(),le=Qt(),He=T?T.duration():dr(I,b),Je=at<=.01||!at,Ne=0,Re=ee||0,Te=qs(Gt)?Gt.end:i.end,ui=i.endTrigger||d,Fe=qs(Gt)?Gt.start:i.start||(i.start===0||!d?0:h?"0 0":"0 100%"),Fn=N.pinnedContainer=i.pinnedContainer&&ei(i.pinnedContainer,N),Ri=d&&Math.max(0,ue.indexOf(N))||0,an=Ri,R,G,rt,ot,X,pt,wt,Ft,Ot,Xt,Ht,zt,oe;for(H&&qs(Gt)&&(zt=Bt.getProperty(P,b.p),oe=Bt.getProperty(ct,b.p));an-- >0;)pt=ue[an],pt.end||pt.refresh(0,1)||(Tn=N),wt=pt.pin,wt&&(wt===d||wt===h||wt===Fn)&&!pt.isReverted&&(Xt||(Xt=[]),Xt.unshift(pt),pt.revert(!0,!0)),pt!==ue[an]&&(Ri--,an--);for(Dn(Fe)&&(Fe=Fe(N)),Fe=w_(Fe,"start",N),v=O_(Fe,d,Ze,b,L(),V,P,N,le,dt,tt,He,T,N._startClamp&&"_startClamp")||(h?-.001:0),Dn(Te)&&(Te=Te(N)),gi(Te)&&!Te.indexOf("+=")&&(~Te.indexOf(" ")?Te=(gi(Fe)?Fe.split(" ")[0]:"")+Te:(Ne=au(Te.substr(2),Ze),Te=gi(Fe)?Fe:(T?Bt.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,v):v)+Ne,ui=d)),Te=w_(Te,"end",N),B=Math.max(v,O_(Te||(ui?"100% 0":He),ui,Ze,b,L()+Ne,q,ct,N,le,dt,tt,He,T,N._endClamp&&"_endClamp"))||-.001,Ne=0,an=Ri;an--;)pt=ue[an],wt=pt.pin,wt&&pt.start-pt._pinPush<=v&&!T&&pt.end>0&&(R=pt.end-(N._startClamp?Math.max(0,pt.start):pt.start),(wt===d&&pt.start-pt._pinPush<v||wt===Fn)&&isNaN(Fe)&&(Ne+=R*(1-pt.progress)),wt===h&&(Re+=R));if(v+=Ne,B+=Ne,N._startClamp&&(N._startClamp+=Ne),N._endClamp&&!Yn&&(N._endClamp=B||-.001,B=Math.min(B,dr(I,b))),at=B-v||(v-=.01)&&.001,Je&&(Y=Bt.utils.clamp(0,1,Bt.utils.normalize(v,B,_t))),N._pinPush=Re,V&&Ne&&(R={},R[b.a]="+="+Ne,Fn&&(R[b.p]="-="+L()),Bt.set([V,q],R)),h&&!(od&&N.end>=dr(I,b)))R=Bi(h),ot=b===un,rt=L(),bt=parseFloat(st(b.a))+Re,!He&&B>1&&(Ht=(W?Ue.scrollingElement||xi:I).style,Ht={style:Ht,value:Ht["overflow"+b.a.toUpperCase()]},W&&Bi(Ee)["overflow"+b.a.toUpperCase()]!=="scroll"&&(Ht.style["overflow"+b.a.toUpperCase()]="scroll")),Hf(h,z,R),M=Mc(h),G=Br(h,!0),Ft=tt&&ws(I,ot?jn:un)(),g?(Mt=[g+b.os2,at+Re+cn],Mt.t=z,an=g===rn?Iu(h,b)+at+Re:0,an&&(Mt.push(b.d,an+cn),z.style.flexBasis!=="auto"&&(z.style.flexBasis=an+cn)),pa(Mt),Fn&&ue.forEach(function(me){me.pin===Fn&&me.vars.pinSpacing!==!1&&(me._subPinOffset=!0)}),tt&&L(_t)):(an=Iu(h,b),an&&z.style.flexBasis!=="auto"&&(z.style.flexBasis=an+cn)),tt&&(X={top:G.top+(ot?rt-v:Ft)+cn,left:G.left+(ot?Ft:rt-v)+cn,boxSizing:"border-box",position:"fixed"},X[oo]=X["max"+Ma]=Math.ceil(G.width)+cn,X[ao]=X["max"+Gp]=Math.ceil(G.height)+cn,X[Fi]=X[Fi+Sl]=X[Fi+xl]=X[Fi+Ml]=X[Fi+yl]="0",X[rn]=R[rn],X[rn+Sl]=R[rn+Sl],X[rn+xl]=R[rn+xl],X[rn+Ml]=R[rn+Ml],X[rn+yl]=R[rn+yl],C=PE(yt,X,w),Yn&&L(0)),r?(Ot=r._initted,Nf(1),r.render(r.duration(),!0,!0),mt=st(b.a)-bt+at+Re,Tt=Math.abs(at-mt)>1,tt&&Tt&&C.splice(C.length-2,2),r.render(0,!0,!0),Ot||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Nf(0)):mt=at,Ht&&(Ht.value?Ht.style["overflow"+b.a.toUpperCase()]=Ht.value:Ht.style.removeProperty("overflow-"+b.a));else if(d&&L()&&!T)for(G=d.parentNode;G&&G!==Ee;)G._pinOffset&&(v-=G._pinOffset,B-=G._pinOffset),G=G.parentNode;Xt&&Xt.forEach(function(me){return me.revert(!1,!0)}),N.start=v,N.end=B,ut=D=Yn?_t:L(),!T&&!Yn&&(ut<_t&&L(_t),N.scroll.rec=0),N.revert(!1,!0),Wt=wn(),Pt&&(Vt=-1,Pt.restart(!0)),Tn=0,r&&U&&(r._initted||ht)&&r.progress()!==ht&&r.progress(ht||0,!0).render(r.time(),!0,!0),(Je||Y!==N.progress||T||_||r&&!r._initted)&&(r&&!U&&(r._initted||Y||r.vars.immediateRender!==!1)&&r.totalProgress(T&&v<-.001&&!Y?Bt.utils.normalize(v,B,0):Y,!0),N.progress=Je||(ut-v)/at===Y?0:Y),h&&g&&(z._pinOffset=Math.round(N.progress*mt)),k&&k.invalidate(),isNaN(zt)||(zt-=Bt.getProperty(P,b.p),oe-=Bt.getProperty(ct,b.p),Ec(P,b,zt),Ec(V,b,zt-(ee||0)),Ec(ct,b,oe),Ec(q,b,oe-(ee||0))),Je&&!Yn&&N.update(),u&&!Yn&&!lt&&(lt=!0,u(N),lt=!1)}},N.getVelocity=function(){return(L()-D)/(wn()-Za)*1e3||0},N.endAnimation=function(){za(N.callbackAnimation),r&&(k?k.progress(1):r.paused()?U||za(r,N.direction<0,1):za(r,r.reversed()))},N.labelToScroll=function(At){return r&&r.labels&&(v||N.refresh()||v)+r.labels[At]/r.duration()*at||0},N.getTrailing=function(At){var jt=ue.indexOf(N),Gt=N.direction>0?ue.slice(0,jt).reverse():ue.slice(jt+1);return(gi(At)?Gt.filter(function(ee){return ee.vars.preventOverlaps===At}):Gt).filter(function(ee){return N.direction>0?ee.end<=v:ee.start>=B})},N.update=function(At,jt,Gt){if(!(T&&!Gt&&!At)){var ee=Yn===!0?_t:N.scroll(),Ze=At?0:(ee-v)/at,le=Ze<0?0:Ze>1?1:Ze||0,He=N.progress,Je,Ne,Re,Te,ui,Fe,Fn,Ri;if(jt&&(D=ut,ut=T?L():ee,x&&(qt=Et,Et=r&&!U?r.totalProgress():le)),m&&h&&!Tn&&!_c&&Yi&&(!le&&v<ee+(ee-D)/(wn()-Za)*m?le=1e-4:le===1&&B>ee+(ee-D)/(wn()-Za)*m&&(le=.9999)),le!==He&&N.enabled){if(Je=N.isActive=!!le&&le<1,Ne=!!He&&He<1,Fe=Je!==Ne,ui=Fe||!!le!=!!He,N.direction=le>He?1:-1,N.progress=le,ui&&!Tn&&(Re=le&&!He?0:le===1?1:He===1?2:3,U&&(Te=!Fe&&K[Re+1]!=="none"&&K[Re+1]||K[Re],Ri=r&&(Te==="complete"||Te==="reset"||Te in r))),S&&(Fe||Ri)&&(Ri||f||!r)&&(Dn(S)?S(N):N.getTrailing(S).forEach(function(rt){return rt.endAnimation()})),U||(k&&!Tn&&!_c?(k._dp._time-k._start!==k._time&&k.render(k._dp._time-k._start),k.resetTo?k.resetTo("totalProgress",le,r._tTime/r._tDur):(k.vars.totalProgress=le,k.invalidate().restart())):r&&r.totalProgress(le,!!(Tn&&(Wt||At)))),h){if(At&&g&&(z.style[g+b.os2]=Ct),!tt)Q(Qa(bt+mt*le));else if(ui){if(Fn=!At&&le>He&&B+1>ee&&ee+1>=dr(I,b),w)if(!At&&(Je||Fn)){var an=Br(h,!0),R=ee-v;N_(h,Ee,an.top+(b===un?R:0)+cn,an.left+(b===un?0:R)+cn)}else N_(h,z);pa(Je||Fn?C:M),Tt&&le<1&&Je||Q(bt+(le===1&&!Fn?mt:0))}}x&&!j.tween&&!Tn&&!_c&&Pt.restart(!0),a&&(Fe||E&&le&&(le<1||!Ff))&&Bl(a.targets).forEach(function(rt){return rt.classList[Je||E?"add":"remove"](a.className)}),o&&!U&&!At&&o(N),ui&&!Tn?(U&&(Ri&&(Te==="complete"?r.pause().totalProgress(1):Te==="reset"?r.restart(!0).pause():Te==="restart"?r.restart(!0):r[Te]()),o&&o(N)),(Fe||!Ff)&&(c&&Fe&&kf(N,c),Z[Re]&&kf(N,Z[Re]),E&&(le===1?N.kill(!1,1):Z[Re]=0),Fe||(Re=le===1?1:3,Z[Re]&&kf(N,Z[Re]))),O&&!Je&&Math.abs(N.getVelocity())>(tl(O)?O:2500)&&(za(N.callbackAnimation),k?k.progress(1):za(r,Te==="reverse"?1:!le,1))):U&&o&&!Tn&&o(N)}if(Ut){var G=T?ee/T.duration()*(T._caScrollDist||0):ee;gt(G+(P._isFlipped?1:0)),Ut(G)}Nt&&Nt(-ee/T.duration()*(T._caScrollDist||0))}},N.enable=function(At,jt){N.enabled||(N.enabled=!0,gn(I,"resize",el),W||gn(I,"scroll",Ro),xt&&gn(n,"refreshInit",xt),At!==!1&&(N.progress=Y=0,ut=D=Vt=L()),jt!==!1&&N.refresh())},N.getTween=function(At){return At&&j?j.tween:k},N.setPositions=function(At,jt,Gt,ee){if(T){var Ze=T.scrollTrigger,le=T.duration(),He=Ze.end-Ze.start;At=Ze.start+He*At/le,jt=Ze.start+He*jt/le}N.refresh(!1,!1,{start:A_(At,Gt&&!!N._startClamp),end:A_(jt,Gt&&!!N._endClamp)},ee),N.update()},N.adjustPinSpacing=function(At){if(Mt&&At){var jt=Mt.indexOf(b.d)+1;Mt[jt]=parseFloat(Mt[jt])+At+cn,Mt[1]=parseFloat(Mt[1])+At+cn,pa(Mt)}},N.disable=function(At,jt){if(N.enabled&&(At!==!1&&N.revert(!0,!0),N.enabled=N.isActive=!1,jt||k&&k.pause(),_t=0,J&&(J.uncache=1),xt&&_n(n,"refreshInit",xt),Pt&&(Pt.pause(),j.tween&&j.tween.kill()&&(j.tween=0)),!W)){for(var Gt=ue.length;Gt--;)if(ue[Gt].scroller===I&&ue[Gt]!==N)return;_n(I,"resize",el),W||_n(I,"scroll",Ro)}},N.kill=function(At,jt){N.disable(At,jt),k&&!jt&&k.kill(),l&&delete ad[l];var Gt=ue.indexOf(N);Gt>=0&&ue.splice(Gt,1),Gt===Xn&&cu>0&&Xn--,Gt=0,ue.forEach(function(ee){return ee.scroller===N.scroller&&(Gt=1)}),Gt||Yn||(N.scroll.rec=0),r&&(r.scrollTrigger=null,At&&r.revert({kill:!1}),jt||r.kill()),V&&[V,q,P,ct].forEach(function(ee){return ee.parentNode&&ee.parentNode.removeChild(ee)}),El===N&&(El=0),h&&(J&&(J.uncache=1),Gt=0,ue.forEach(function(ee){return ee.pin===h&&Gt++}),Gt||(J.spacer=0)),i.onKill&&i.onKill(N)},ue.push(N),N.enable(!1,!1),Yt&&Yt(N),r&&r.add&&!at){var re=N.update;N.update=function(){N.update=re,pe.cache++,v||B||N.refresh()},Bt.delayedCall(.01,N.update),at=.01,v=B=0}else N.refresh();h&&AE()},n.register=function(i){return Qo||(Bt=i||Zv(),Kv()&&window.document&&n.enable(),Qo=Ja),Qo},n.defaults=function(i){if(i)for(var r in i)yc[r]=i[r];return yc},n.disable=function(i,r){Ja=0,ue.forEach(function(o){return o[r?"kill":"disable"](i)}),_n(de,"wheel",Ro),_n(Ue,"scroll",Ro),clearInterval(mc),_n(Ue,"touchcancel",ar),_n(Ee,"touchstart",ar),vc(_n,Ue,"pointerdown,touchstart,mousedown",C_),vc(_n,Ue,"pointerup,touchend,mouseup",R_),Du.kill(),gc(_n);for(var s=0;s<pe.length;s+=3)xc(_n,pe[s],pe[s+1]),xc(_n,pe[s],pe[s+2])},n.enable=function(){if(de=window,Ue=document,xi=Ue.documentElement,Ee=Ue.body,Bt&&(Bl=Bt.utils.toArray,vl=Bt.utils.clamp,sd=Bt.core.context||ar,Nf=Bt.core.suppressOverwrites||ar,kp=de.history.scrollRestoration||"auto",ld=de.pageYOffset||0,Bt.core.globals("ScrollTrigger",n),Ee)){Ja=1,da=document.createElement("div"),da.style.height="100vh",da.style.position="absolute",ox(),yE(),en.register(Bt),n.isTouch=en.isTouch,rs=en.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),rd=en.isTouch===1,gn(de,"wheel",Ro),Bp=[de,Ue,xi,Ee],Bt.matchMedia?(n.matchMedia=function(c){var u=Bt.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Bt.addEventListener("matchMediaInit",function(){return Xp()}),Bt.addEventListener("matchMediaRevert",function(){return rx()}),Bt.addEventListener("matchMedia",function(){to(0,1),go("matchMedia")}),Bt.matchMedia().add("(orientation: portrait)",function(){return zf(),zf})):console.warn("Requires GSAP 3.11.0 or later"),zf(),gn(Ue,"scroll",Ro);var i=Ee.hasAttribute("style"),r=Ee.style,s=r.borderTopStyle,o=Bt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Br(Ee),un.m=Math.round(a.top+un.sc())||0,jn.m=Math.round(a.left+jn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Ee.setAttribute("style",""),Ee.removeAttribute("style")),mc=setInterval(L_,250),Bt.delayedCall(.5,function(){return _c=0}),gn(Ue,"touchcancel",ar),gn(Ee,"touchstart",ar),vc(gn,Ue,"pointerdown,touchstart,mousedown",C_),vc(gn,Ue,"pointerup,touchend,mouseup",R_),id=Bt.utils.checkPrefix("transform"),uu.push(id),Qo=wn(),Du=Bt.delayedCall(.2,to).pause(),ta=[Ue,"visibilitychange",function(){var c=de.innerWidth,u=de.innerHeight;Ue.hidden?(b_=c,T_=u):(b_!==c||T_!==u)&&el()},Ue,"DOMContentLoaded",to,de,"load",to,de,"resize",el],gc(gn),ue.forEach(function(c){return c.enable(0,1)}),l=0;l<pe.length;l+=3)xc(_n,pe[l],pe[l+1]),xc(_n,pe[l],pe[l+2])}},n.config=function(i){"limitCallbacks"in i&&(Ff=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(mc)||(mc=r)&&setInterval(L_,r),"ignoreMobileResize"in i&&(rd=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(gc(_n)||gc(gn,i.autoRefreshEvents||"none"),$v=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ei(i),o=pe.indexOf(s),a=mo(s);~o&&pe.splice(o,a?6:2),r&&(a?vr.unshift(de,r,Ee,r,xi,r):vr.unshift(s,r))},n.clearMatchMedia=function(i){ue.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(gi(i)?ei(i):i).getBoundingClientRect(),a=o[s?oo:ao]*r||0;return s?o.right-a>0&&o.left+a<de.innerWidth:o.bottom-a>0&&o.top+a<de.innerHeight},n.positionInViewport=function(i,r,s){gi(i)&&(i=ei(i));var o=i.getBoundingClientRect(),a=o[s?oo:ao],l=r==null?a/2:r in Uu?Uu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/de.innerWidth:(o.top+l)/de.innerHeight},n.killAll=function(i){if(ue.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=_o.killAll||[];_o={},r.forEach(function(s){return s()})}},n}();he.version="3.13.0";he.saveStyles=function(n){return n?Bl(n).forEach(function(t){if(t&&t.style){var e=_i.indexOf(t);e>=0&&_i.splice(e,5),_i.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Bt.core.getCache(t),sd())}}):_i};he.revert=function(n,t){return Xp(!n,t)};he.create=function(n,t){return new he(n,t)};he.refresh=function(n){return n?el(!0):(Qo||he.register())&&to(!0)};he.update=function(n){return++pe.cache&&Vr(n===!0?2:0)};he.clearScrollMemory=sx;he.maxScroll=function(n,t){return dr(n,t?jn:un)};he.getScrollFunc=function(n,t){return ws(ei(n),t?jn:un)};he.getById=function(n){return ad[n]};he.getAll=function(){return ue.filter(function(n){return n.vars.id!=="ScrollSmoother"})};he.isScrolling=function(){return!!Yi};he.snapDirectional=Wp;he.addEventListener=function(n,t){var e=_o[n]||(_o[n]=[]);~e.indexOf(t)||e.push(t)};he.removeEventListener=function(n,t){var e=_o[n],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};he.batch=function(n,t){var e=[],i={},r=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var f=[],d=[],h=Bt.delayedCall(r,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&Dn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Dn(s)&&(s=s(),gn(he,"refresh",function(){return s=t.batchMax()})),Bl(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,e.push(he.create(c))}),e};var B_=function(t,e,i,r){return e>r?t(r):e<0&&t(0),i>r?(r-e)/(i-e):i<0?e/(e-i):1},Vf=function n(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(en.isTouch?" pinch-zoom":""):"none",t===xi&&n(Ee,e)},bc={auto:1,scroll:1},LE=function(t){var e=t.event,i=t.target,r=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Bt.core.getCache(s),a=wn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ee&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(bc[(l=Bi(s)).overflowY]||bc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!mo(s)&&(bc[(l=Bi(s)).overflowY]||bc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},lx=function(t,e,i,r){return en.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&LE,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&gn(Ue,en.eventTypes[0],z_,!1,!0)},onDisable:function(){return _n(Ue,en.eventTypes[0],z_,!0)}})},IE=/(input|label|select|textarea)/i,k_,z_=function(t){var e=IE.test(t.target.tagName);(e||k_)&&(t._gsapAllow=!0,k_=e)},UE=function(t){qs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,r=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=ei(t.target)||xi,u=Bt.core.globals().ScrollSmoother,f=u&&u.get(),d=rs&&(t.content&&ei(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),h=ws(c,un),g=ws(c,jn),_=1,m=(en.isTouch&&de.visualViewport?de.visualViewport.scale*de.visualViewport.width:de.outerWidth)/de.innerWidth,p=0,y=Dn(r)?function(){return r(a)}:function(){return r||2.8},E,x,w=lx(c,t.type,!0,s),A=function(){return x=!1},T=ar,O=ar,S=function(){l=dr(c,un),O=vl(rs?1:0,l),i&&(T=vl(0,dr(c,jn))),E=lo},b=function(){d._gsap.y=Qa(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},U=function(){if(x){requestAnimationFrame(A);var H=Qa(a.deltaY/2),dt=O(h.v-H);if(d&&dt!==h.v+h.offset){h.offset=dt-h.v;var N=Qa((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",d._gsap.y=N+"px",h.cacheID=pe.cache,Vr()}return!0}h.offset&&b(),x=!0},I,F,W,tt,Z=function(){S(),I.isActive()&&I.vars.scrollY>l&&(h()>l?I.progress(1)&&h(l):I.resetTo("scrollY",l))};return d&&Bt.set(d,{y:"+=0"}),t.ignoreCheck=function(K){return rs&&K.type==="touchmove"&&U()||_>1.05&&K.type!=="touchstart"||a.isGesturing||K.touches&&K.touches.length>1},t.onPress=function(){x=!1;var K=_;_=Qa((de.visualViewport&&de.visualViewport.scale||1)/m),I.pause(),K!==_&&Vf(c,_>1.01?!0:i?!1:"x"),F=g(),W=h(),S(),E=lo},t.onRelease=t.onGestureStart=function(K,H){if(h.offset&&b(),!H)tt.restart(!0);else{pe.cache++;var dt=y(),N,xt;i&&(N=g(),xt=N+dt*.05*-K.velocityX/.227,dt*=B_(g,N,xt,dr(c,jn)),I.vars.scrollX=T(xt)),N=h(),xt=N+dt*.05*-K.velocityY/.227,dt*=B_(h,N,xt,dr(c,un)),I.vars.scrollY=O(xt),I.invalidate().duration(dt).play(.01),(rs&&I.vars.scrollY>=l||N>=l-1)&&Bt.to({},{onUpdate:Z,duration:dt})}o&&o(K)},t.onWheel=function(){I._ts&&I.pause(),wn()-p>1e3&&(E=0,p=wn())},t.onChange=function(K,H,dt,N,xt){if(lo!==E&&S(),H&&i&&g(T(N[2]===H?F+(K.startX-K.x):g()+H-N[1])),dt){h.offset&&b();var It=xt[2]===dt,Qt=It?W+K.startY-K.y:h()+dt-xt[1],Vt=O(Qt);It&&Qt!==Vt&&(W+=Vt-Qt),h(Vt)}(dt||H)&&Vr()},t.onEnable=function(){Vf(c,i?!1:"x"),he.addEventListener("refresh",Z),gn(de,"resize",Z),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),w.enable()},t.onDisable=function(){Vf(c,!0),_n(de,"resize",Z),he.removeEventListener("refresh",Z),w.kill()},t.lockAxis=t.lockAxis!==!1,a=new en(t),a.iOS=rs,rs&&!h()&&h(1),rs&&Bt.ticker.add(ar),tt=a._dc,I=Bt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ax(h,h(),function(){return I.pause()})},onUpdate:Vr,onComplete:tt.vars.onComplete}),a};he.sort=function(n){if(Dn(n))return ue.sort(n);var t=de.pageYOffset||0;return he.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+de.innerHeight}),ue.sort(n||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};he.observe=function(n){return new en(n)};he.normalizeScroll=function(n){if(typeof n>"u")return Wn;if(n===!0&&Wn)return Wn.enable();if(n===!1){Wn&&Wn.kill(),Wn=n;return}var t=n instanceof en?n:UE(n);return Wn&&Wn.target===t.target&&Wn.kill(),mo(t.target)&&(Wn=t),t};he.core={_getVelocityProp:nd,_inputObserver:lx,_scrollers:pe,_proxies:vr,bridge:{ss:function(){Yi||go("scrollStart"),Yi=wn()},ref:function(){return Tn}}};Zv()&&Bt.registerPlugin(he);function Ir(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function cx(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ea={duration:.5,overwrite:!1,delay:0},Yp,Mn,Ve,Vi=1e8,Le=1/Vi,ud=Math.PI*2,OE=ud/4,NE=0,ux=Math.sqrt,FE=Math.cos,BE=Math.sin,xn=function(t){return typeof t=="string"},je=function(t){return typeof t=="function"},Yr=function(t){return typeof t=="number"},$p=function(t){return typeof t>"u"},xr=function(t){return typeof t=="object"},ri=function(t){return t!==!1},qp=function(){return typeof window<"u"},Tc=function(t){return je(t)||xn(t)},fx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Un=Array.isArray,fd=/(?:-?\.?\d|\.)+/gi,hx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,na=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dx=/[+-]=-?[.\d]+/,px=/[^,'"\[\]\s]+/gi,kE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xe,lr,hd,jp,Ai={},Ou={},mx,_x=function(t){return(Ou=ba(t,Ai))&&ci},Kp=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},zl=function(t,e){return!e&&console.warn(t)},gx=function(t,e){return t&&(Ai[t]=e)&&Ou&&(Ou[t]=e)||Ai},Hl=function(){return 0},zE={suppressEvents:!0,isStart:!0,kill:!1},hu={suppressEvents:!0,kill:!1},HE={suppressEvents:!0},Zp={},xs=[],dd={},vx,vi={},Wf={},H_=30,du=[],Jp="",Qp=function(t){var e=t[0],i,r;if(xr(e)||je(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=du.length;r--&&!du[r].targetTest(e););i=du[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Vx(t[r],i)))||t.splice(r,1);return t},co=function(t){return t._gsap||Qp(Gi(t))[0]._gsap},xx=function(t,e,i){return(i=t[e])&&je(i)?t[e]():$p(i)&&t.getAttribute&&t.getAttribute(e)||i},si=function(t,e){return(t=t.split(",")).forEach(e)||t},tn=function(t){return Math.round(t*1e5)/1e5||0},on=function(t){return Math.round(t*1e7)/1e7||0},ma=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},VE=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},Nu=function(){var t=xs.length,e=xs.slice(0),i,r;for(dd={},xs.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},tm=function(t){return!!(t._initted||t._startAt||t.add)},yx=function(t,e,i,r){xs.length&&!Mn&&Nu(),t.render(e,i,!!(Mn&&e<0&&tm(t))),xs.length&&!Mn&&Nu()},Sx=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(px).length<2?e:xn(t)?t.trim():t},Mx=function(t){return t},Ci=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},GE=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},ba=function(t,e){for(var i in e)t[i]=e[i];return t},V_=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=xr(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},Fu=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},bl=function(t){var e=t.parent||Xe,i=t.keyframes?GE(Un(t.keyframes)):Ci;if(ri(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},WE=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},Ex=function(t,e,i,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},hf=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},As=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},uo=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},XE=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},pd=function(t,e,i,r){return t._startAt&&(Mn?t._startAt.revert(hu):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},YE=function n(t){return!t||t._ts&&n(t.parent)},G_=function(t){return t._repeat?Ta(t._tTime,t=t.duration()+t._rDelay)*t:0},Ta=function(t,e){var i=Math.floor(t=on(t/e));return t&&i===t?i-1:i},Bu=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},df=function(t){return t._end=on(t._start+(t._tDur/Math.abs(t._ts||t._rts||Le)||0))},pf=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=on(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),df(t),i._dirty||uo(i,t)),t},bx=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Bu(t.rawTime(),e),(!e._dur||nc(0,e.totalDuration(),i)-e._tTime>Le)&&e.render(i,!0)),uo(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Le}},fr=function(t,e,i,r){return e.parent&&As(e),e._start=on((Yr(i)?i:i||t!==Xe?Oi(t,i,e):t._time)+e._delay),e._end=on(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ex(t,e,"_first","_last",t._sort?"_start":0),md(e)||(t._recent=e),r||bx(t,e),t._ts<0&&pf(t,t._tTime),t},Tx=function(t,e){return(Ai.ScrollTrigger||Kp("scrollTrigger",e))&&Ai.ScrollTrigger.create(e,t)},wx=function(t,e,i,r,s){if(nm(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&vx!==Mi.frame)return xs.push(t),t._lazy=[s,r],1},$E=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},md=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},qE=function(t,e,i,r){var s=t.ratio,o=e<0||!e&&(!t._start&&$E(t)&&!(!t._initted&&md(t))||(t._ts<0||t._dp._ts<0)&&!md(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=nc(0,t._tDur,e),u=Ta(l,a),t._yoyo&&u&1&&(o=1-o),u!==Ta(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Mn||r||t._zTime===Le||!e&&t._zTime){if(!t._initted&&wx(t,e,r,i,l))return;for(f=t._zTime,t._zTime=e||(i?Le:0),i||(i=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&pd(t,e,i,!0),t._onUpdate&&!i&&Ti(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Ti(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&As(t,1),!i&&!Mn&&(Ti(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},jE=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},wa=function(t,e,i,r){var s=t._repeat,o=on(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:on(o*(s+1)+t._rDelay*s):o,a>0&&!r&&pf(t,t._tTime=t._tDur*a),t.parent&&df(t),i||uo(t.parent,t),t},W_=function(t){return t instanceof Kn?uo(t):wa(t,t._dur)},KE={_start:0,endTime:Hl,totalDuration:Hl},Oi=function n(t,e,i){var r=t.labels,s=t._recent||KE,o=t.duration()>=Vi?s.endTime(!1):t._dur,a,l,c;return xn(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(Un(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},Tl=function(t,e,i){var r=Yr(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new sn(e[0],o,e[s+1])},Ls=function(t,e){return t||t===0?e(t):e},nc=function(t,e,i){return i<t?t:i>e?e:i},Ln=function(t,e){return!xn(t)||!(e=kE.exec(t))?"":e[1]},ZE=function(t,e,i){return Ls(i,function(r){return nc(t,e,r)})},_d=[].slice,Ax=function(t,e){return t&&xr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&xr(t[0]))&&!t.nodeType&&t!==lr},JE=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return xn(r)&&!e||Ax(r,1)?(s=i).push.apply(s,Gi(r)):i.push(r)})||i},Gi=function(t,e,i){return Ve&&!e&&Ve.selector?Ve.selector(t):xn(t)&&!i&&(hd||!Aa())?_d.call((e||jp).querySelectorAll(t),0):Un(t)?JE(t,i):Ax(t)?_d.call(t,0):t?[t]:[]},gd=function(t){return t=Gi(t)[0]||zl("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Gi(e,i.querySelectorAll?i:i===t?zl("Invalid scope")||jp.createElement("div"):t)}},Cx=function(t){return t.sort(function(){return .5-Math.random()})},Rx=function(t){if(je(t))return t;var e=xr(t)?t:{each:t},i=fo(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,f=r;return xn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(d,h,g){var _=(g||e).length,m=o[_],p,y,E,x,w,A,T,O,S;if(!m){if(S=e.grid==="auto"?0:(e.grid||[1,Vi])[1],!S){for(T=-Vi;T<(T=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=l?Math.min(S,_)*u-.5:r%S,y=S===Vi?0:l?_*f/S-.5:r/S|0,T=0,O=Vi,A=0;A<_;A++)E=A%S-p,x=y-(A/S|0),m[A]=w=c?Math.abs(c==="y"?x:E):ux(E*E+x*x),w>T&&(T=w),w<O&&(O=w);r==="random"&&Cx(m),m.max=T-O,m.min=O,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ln(e.amount||e.each)||0,i=i&&_<0?kx(i):i}return _=(m[d]-m.min)/m.max||0,on(m.b+(i?i(_):_)*m.v)+m.u}},vd=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=on(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(Yr(i)?0:Ln(i))}},Px=function(t,e){var i=Un(t),r,s;return!i&&xr(t)&&(r=i=t.radius||Vi,t.values?(t=Gi(t.values),(s=!Yr(t[0]))&&(r*=r)):t=vd(t.increment)),Ls(e,i?je(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Vi,u=0,f=t.length,d,h;f--;)s?(d=t[f].x-a,h=t[f].y-l,d=d*d+h*h):d=Math.abs(t[f]-a),d<c&&(c=d,u=f);return u=!r||c<=r?t[u]:o,s||u===o||Yr(o)?u:u+Ln(o)}:vd(t))},Dx=function(t,e,i,r){return Ls(Un(t)?!e:i===!0?!!(i=0):!r,function(){return Un(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},QE=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,o){return o(s)},r)}},tb=function(t,e){return function(i){return t(parseFloat(i))+(e||Ln(i))}},eb=function(t,e,i){return Ix(t,e,0,1,i)},Lx=function(t,e,i){return Ls(i,function(r){return t[~~e(r)]})},nb=function n(t,e,i){var r=e-t;return Un(t)?Lx(t,n(0,t.length),e):Ls(i,function(s){return(r+(s-t)%r)%r+t})},ib=function n(t,e,i){var r=e-t,s=r*2;return Un(t)?Lx(t,n(0,t.length-1),e):Ls(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Vl=function(t){for(var e=0,i="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?px:fd),i+=t.substr(e,r-e)+Dx(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return i+t.substr(e,t.length-e)},Ix=function(t,e,i,r,s){var o=e-t,a=r-i;return Ls(s,function(l){return i+((l-t)/o*a||0)})},rb=function n(t,e,i,r){var s=isNaN(t+e)?0:function(h){return(1-h)*t+h*e};if(!s){var o=xn(t),a={},l,c,u,f,d;if(i===!0&&(r=1)&&(i=null),o)t={p:t},e={p:e};else if(Un(t)&&!Un(e)){for(u=[],f=t.length,d=f-2,c=1;c<f;c++)u.push(n(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return u[_](g-_)},i=e}else r||(t=ba(Un(t)?[]:{},t));if(!u){for(l in e)em.call(a,t,l,"get",e[l]);s=function(g){return sm(g,a)||(o?t.p:t)}}}return Ls(i,s)},X_=function(t,e,i){var r=t.labels,s=Vi,o,a,l;for(o in r)a=r[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ti=function(t,e,i){var r=t.vars,s=r[e],o=Ve,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,i&&xs.length&&Nu(),a&&(Ve=a),u=l?s.apply(c,l):s.call(c),Ve=o,u},nl=function(t){return As(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Mn),t.progress()<1&&Ti(t,"onInterrupt"),t},ia,Ux=[],Ox=function(t){if(t)if(t=!t.name&&t.default||t,qp()||t.headless){var e=t.name,i=je(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:Hl,render:sm,add:em,kill:yb,modifier:xb,rawVars:0},o={targetTest:0,get:0,getSetter:rm,aliases:{},register:0};if(Aa(),t!==r){if(vi[e])return;Ci(r,Ci(Fu(t,s),o)),ba(r.prototype,ba(s,Fu(t,o))),vi[r.prop=e]=r,t.targetTest&&(du.push(r),Zp[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}gx(e,r),t.register&&t.register(ci,r,oi)}else Ux.push(t)},De=255,il={aqua:[0,De,De],lime:[0,De,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,De],navy:[0,0,128],white:[De,De,De],olive:[128,128,0],yellow:[De,De,0],orange:[De,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[De,0,0],pink:[De,192,203],cyan:[0,De,De],transparent:[De,De,De,0]},Xf=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*De+.5|0},Nx=function(t,e,i){var r=t?Yr(t)?[t>>16,t>>8&De,t&De]:0:il.black,s,o,a,l,c,u,f,d,h,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),il[t])r=il[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&De,r&De,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&De,t&De]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(fd),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Xf(l+1/3,s,o),r[1]=Xf(l,s,o),r[2]=Xf(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(hx),i&&r.length<4&&(r[3]=1),r}else r=t.match(fd)||il.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/De,o=r[1]/De,a=r[2]/De,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Fx=function(t){var e=[],i=[],r=-1;return t.split(ys).forEach(function(s){var o=s.match(na)||[];e.push.apply(e,o),i.push(r+=o.length+1)}),e.c=i,e},Y_=function(t,e,i){var r="",s=(t+r).match(ys),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(d){return(d=Nx(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=Fx(t),l=i.c,l.join(r)!==u.c.join(r)))for(c=t.replace(ys,"1").split(na),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=t.split(ys),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},ys=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in il)n+="|"+t+"\\b";return new RegExp(n+")","gi")}(),sb=/hsl[a]?\(/,Bx=function(t){var e=t.join(" "),i;if(ys.lastIndex=0,ys.test(e))return i=sb.test(e),t[1]=Y_(t[1],i),t[0]=Y_(t[0],i,Fx(t[1])),!0},Gl,Mi=function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,d,h,g=function _(m){var p=n()-r,y=m===!0,E,x,w,A;if((p>t||p<0)&&(i+=p-e),r+=p,w=r-i,E=w-o,(E>0||y)&&(A=++f.frame,d=w-f.time*1e3,f.time=w=w/1e3,o+=E+(E>=s?4:s-E),x=1),y||(l=c(_)),x)for(h=0;h<a.length;h++)a[h](w,d,A,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){mx&&(!hd&&qp()&&(lr=hd=window,jp=lr.document||{},Ai.gsap=ci,(lr.gsapVersions||(lr.gsapVersions=[])).push(ci.version),_x(Ou||lr.GreenSockGlobals||!lr.gsap&&lr||{}),Ux.forEach(Ox)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Gl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Gl=0,c=Hl},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,y){var E=p?function(x,w,A,T){m(x,w,A,T),f.remove(E)}:m;return f.remove(m),a[y?"unshift":"push"](E),Aa(),E},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},f}(),Aa=function(){return!Gl&&Mi.wake()},ge={},ob=/^[\d.\-M][\d.\-,\s]/,ab=/["']/g,lb=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(ab,"").trim():+c,r=l.substr(a+1).trim();return e},cb=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},ub=function(t){var e=(t+"").split("("),i=ge[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[lb(e[1])]:cb(t).split(",").map(Sx)):ge._CE&&ob.test(t)?ge._CE("",t):i},kx=function(t){return function(e){return 1-t(1-e)}},zx=function n(t,e){for(var i=t._first,r;i;)i instanceof Kn?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},fo=function(t,e){return t&&(je(t)?t:ge[t]||ub(t))||e},Eo=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},o;return si(t,function(a){ge[a]=Ai[a]=s,ge[o=a.toLowerCase()]=i;for(var l in s)ge[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ge[a+"."+l]=s[l]}),s},Hx=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Yf=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/ud*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*BE((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Hx(a);return s=ud/s,l.config=function(c,u){return n(t,c,u)},l},$f=function n(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:Hx(i);return r.config=function(s){return n(t,s)},r};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;Eo(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});ge.Linear.easeNone=ge.none=ge.Linear.easeIn;Eo("Elastic",Yf("in"),Yf("out"),Yf());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<r?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};Eo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Eo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Eo("Circ",function(n){return-(ux(1-n*n)-1)});Eo("Sine",function(n){return n===1?1:-FE(n*OE)+1});Eo("Back",$f("in"),$f("out"),$f());ge.SteppedEase=ge.steps=Ai.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,o=1-Le;return function(a){return((r*nc(0,o,a)|0)+s)*i}}};Ea.ease=ge["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Jp+=n+","+n+"Params,"});var Vx=function(t,e){this.id=NE++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:xx,this.set=e?e.getSetter:rm},Wl=function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,wa(this,+e.duration,1,1),this.data=e.data,Ve&&(this._ctx=Ve,Ve.data.push(this)),Gl||Mi.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,wa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(Aa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(pf(this,i),!s._dp||s.parent||bx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&fr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Le||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),yx(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+G_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+G_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ta(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-Le?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Bu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Le?0:this._rts,this.totalTime(nc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),df(this),XE(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Aa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Le&&(this._tTime-=Le)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&fr(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(ri(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bu(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=HE);var r=Mn;return Mn=i,tm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Mn=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,W_(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,W_(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Oi(this,i),ri(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ri(r)),this._dur||(this._zTime=-Le),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Le:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Le,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Le)},t.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},t.then=function(i){var r=this;return new Promise(function(s){var o=je(i)?i:Mx,a=function(){var c=r.then;r.then=null,je(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){nl(this)},n}();Ci(Wl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Le,_prom:0,_ps:!1,_rts:1});var Kn=function(n){cx(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ri(i.sortChildren),Xe&&fr(i.parent||Xe,Ir(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Tx(Ir(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return Tl(0,arguments,this),this},e.from=function(r,s,o){return Tl(1,arguments,this),this},e.fromTo=function(r,s,o,a){return Tl(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,bl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new sn(r,s,Oi(this,o),1),this},e.call=function(r,s,o){return fr(this,sn.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new sn(r,o,Oi(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,bl(o).immediateRender=ri(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,bl(a).immediateRender=ri(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:on(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,h,g,_,m,p,y,E,x,w,A,T;if(this!==Xe&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,x=this._start,E=this._ts,p=!E,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=on(u%m),u===l?(_=this._repeat,d=c):(w=on(u/m),_=~~w,_&&_===w&&(d=c,_--),d>c&&(d=c)),w=Ta(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),A&&_&1&&(d=c-d,T=1),_!==w&&!this._lock){var O=A&&w&1,S=O===(A&&_&1);if(_<w&&(O=!O),a=O?0:u%c?c:u,this._lock=1,this.render(a||(T?0:on(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ti(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=O?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;zx(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=jE(this,on(a),on(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&!s&&!w&&(Ti(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-Le);break}}h=g}else{h=this._last;for(var b=r<0?r:d;h;){if(g=h._prev,(h._act||b<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(b-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(b-h._start)*h._ts,s,o||Mn&&tm(h)),d!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=b?-Le:Le);break}}h=g}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-Le)._zTime=d>=a?1:-1,this._ts))return this._start=x,df(this),this.render(r,s,o);this._onUpdate&&!s&&Ti(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&As(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Ti(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(Yr(s)||(s=Oi(this,s,r)),!(r instanceof Wl)){if(Un(r))return r.forEach(function(a){return o.add(a,s)}),this;if(xn(r))return this.addLabel(r,s);if(je(r))r=sn.delayedCall(0,r);else return this}return this!==r?fr(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Vi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof sn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return xn(r)?this.removeLabel(r):je(r)?this.killTweensOf(r):(r.parent===this&&hf(this,r),r===this._recent&&(this._recent=this._last),uo(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=on(Mi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Oi(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=sn.delayedCall(0,s||Hl,o);return a.data="isPause",this._hasPause=1,fr(this,a,Oi(this,r))},e.removePause=function(r){var s=this._first;for(r=Oi(this,r);s;)s._start===r&&s.data==="isPause"&&As(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ds!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Gi(r),l=this._first,c=Yr(s),u;l;)l instanceof sn?VE(l._targets,a)&&(c?(!ds||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Oi(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=sn.to(o,Ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Le,onStart:function(){if(o.pause(),!h){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&wa(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ci({startAt:{time:Oi(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),X_(this,Oi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),X_(this,Oi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Le)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return uo(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),uo(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=Vi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,fr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;wa(o,o===Xe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Xe._ts&&(yx(Xe,Bu(r,Xe)),vx=Mi.frame),Mi.frame>=H_){H_+=wi.autoSleep||120;var s=Xe._first;if((!s||!s._ts)&&wi.autoSleep&&Mi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Mi.sleep()}}},t}(Wl);Ci(Kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var fb=function(t,e,i,r,s,o,a){var l=new oi(this._pt,t,e,0,1,qx,null,s),c=0,u=0,f,d,h,g,_,m,p,y;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Vl(r)),o&&(y=[i,r],o(y,t,e),i=y[0],r=y[1]),d=i.match(Gf)||[];f=Gf.exec(r);)g=f[0],_=r.substring(c,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ma(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=Gf.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(dx.test(r)||p)&&(l.e=0),this._pt=l,l},em=function(t,e,i,r,s,o,a,l,c,u){je(r)&&(r=r(s||0,t,o));var f=t[e],d=i!=="get"?i:je(f)?c?t[e.indexOf("set")||!je(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,h=je(f)?c?_b:Yx:im,g;if(xn(r)&&(~r.indexOf("random(")&&(r=Vl(r)),r.charAt(1)==="="&&(g=ma(d,r)+(Ln(d)||0),(g||g===0)&&(r=g))),!u||d!==r||xd)return!isNaN(d*r)&&r!==""?(g=new oi(this._pt,t,e,+d||0,r-(d||0),typeof f=="boolean"?vb:$x,0,h),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&Kp(e,r),fb.call(this,t,e,d,r,h,l||wi.stringFilter,c))},hb=function(t,e,i,r,s){if(je(t)&&(t=wl(t,s,e,i,r)),!xr(t)||t.style&&t.nodeType||Un(t)||fx(t))return xn(t)?wl(t,s,e,i,r):t;var o={},a;for(a in t)o[a]=wl(t[a],s,e,i,r);return o},Gx=function(t,e,i,r,s,o){var a,l,c,u;if(vi[t]&&(a=new vi[t]).init(s,a.rawVars?e[t]:hb(e[t],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new oi(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==ia))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ds,xd,nm=function n(t,e,i){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,E=t._overwrite==="auto"&&!Yp,x=t.timeline,w,A,T,O,S,b,U,I,F,W,tt,Z,K;if(x&&(!d||!s)&&(s="none"),t._ease=fo(s,Ea.ease),t._yEase=f?kx(fo(f===!0?s:f,Ea.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!x&&!!r.runBackwards,!x||d&&!r.stagger){if(I=m[0]?co(m[0]).harness:0,Z=I&&r[I.prop],w=Fu(r,Zp),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!h?_.render(-1,!0):_.revert(u&&g?hu:zE),_._lazy=0),o){if(As(t._startAt=sn.set(m,Ci({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ri(l),startAt:null,delay:0,onUpdate:c&&function(){return Ti(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn||!a&&!h)&&t._startAt.revert(hu),a&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),T=Ci({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ri(l),immediateRender:a,stagger:0,parent:p},w),Z&&(T[I.prop]=Z),As(t._startAt=sn.set(m,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn?t._startAt.revert(hu):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,Le,Le);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&ri(l)||l&&!g,A=0;A<m.length;A++){if(S=m[A],U=S._gsap||Qp(m)[A]._gsap,t._ptLookup[A]=W={},dd[U.id]&&xs.length&&Nu(),tt=y===m?A:y.indexOf(S),I&&(F=new I).init(S,Z||w,t,tt,y)!==!1&&(t._pt=O=new oi(t._pt,S,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(H){W[H]=O}),F.priority&&(b=1)),!I||Z)for(T in w)vi[T]&&(F=Gx(T,w,t,tt,S,y))?F.priority&&(b=1):W[T]=O=em.call(t,S,T,"get",w[T],tt,y,0,r.stringFilter);t._op&&t._op[A]&&t.kill(S,t._op[A]),E&&t._pt&&(ds=t,Xe.killTweensOf(S,W,t.globalTime(e)),K=!t.parent,ds=0),t._pt&&l&&(dd[U.id]=1)}b&&jx(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,d&&e<=0&&x.render(Vi,!0,!0)},db=function(t,e,i,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,d,h;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,h=t._targets.length;h--;){if(u=d[h][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return xd=1,t.vars[e]="+=0",nm(t,a),xd=0,l?zl(e+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=tn(i)+Ln(f.e)),f.b&&(f.b=u.s+Ln(f.b))},pb=function(t,e){var i=t[0]?co(t[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return e;s=ba({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},mb=function(t,e,i,r){var s=e.ease||r||"power1.inOut",o,a;if(Un(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},wl=function(t,e,i,r,s){return je(t)?t.call(e,i,r,s):xn(t)&&~t.indexOf("random(")?Vl(t):t},Wx=Jp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Xx={};si(Wx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Xx[n]=1});var sn=function(n){cx(t,n);function t(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:bl(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=r.parent||Xe,E=(Un(i)||fx(i)?Yr(i[0]):"length"in r)?[i]:Gi(i),x,w,A,T,O,S,b,U;if(a._targets=E.length?Qp(E):zl("GSAP target "+i+" not found. https://gsap.com",!wi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||d||Tc(c)||Tc(u)){if(r=a.vars,x=a.timeline=new Kn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:E}),x.kill(),x.parent=x._dp=Ir(a),x._start=0,d||Tc(c)||Tc(u)){if(T=E.length,b=d&&Rx(d),xr(d))for(O in d)~Wx.indexOf(O)&&(U||(U={}),U[O]=d[O]);for(w=0;w<T;w++)A=Fu(r,Xx),A.stagger=0,p&&(A.yoyoEase=p),U&&ba(A,U),S=E[w],A.duration=+wl(c,Ir(a),w,S,E),A.delay=(+wl(u,Ir(a),w,S,E)||0)-a._delay,!d&&T===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(S,A,b?b(w,S,E):0),x._ease=ge.none;x.duration()?c=u=0:a.timeline=0}else if(g){bl(Ci(x.vars.defaults,{ease:"none"})),x._ease=fo(g.ease||r.ease||"none");var I=0,F,W,tt;if(Un(g))g.forEach(function(Z){return x.to(E,Z,">")}),x.duration();else{A={};for(O in g)O==="ease"||O==="easeEach"||mb(O,g[O],A,g.easeEach);for(O in A)for(F=A[O].sort(function(Z,K){return Z.t-K.t}),I=0,w=0;w<F.length;w++)W=F[w],tt={ease:W.e,duration:(W.t-(w?F[w-1].t:0))/100*c},tt[O]=W.v,x.to(E,tt,I),I+=tt.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return h===!0&&!Yp&&(ds=Ir(a),Xe.killTweensOf(E),ds=0),fr(y,Ir(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===on(y._time)&&ri(f)&&YE(Ir(a))&&y.data!=="nested")&&(a._tTime=-Le,a.render(Math.max(0,-u)||0)),m&&Tx(Ir(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Le&&!u?l:r<Le?0:r,d,h,g,_,m,p,y,E,x;if(!c)qE(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(d=on(f%_),f===l?(g=this._repeat,d=c):(m=on(f/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,d=c-d),m=Ta(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(E&&this._yEase&&zx(E,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(on(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(wx(this,u?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(d/c),this._from&&(this.ratio=y=1-y),!a&&f&&!s&&!m&&(Ti(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;E&&E.render(r<0?r:E._dur*E._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&pd(this,r,s,o),Ti(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Ti(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&pd(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&As(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Ti(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Gl||Mi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||nm(this,c),u=this._ease(c/this._dur),db(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(pf(this,0),this.parent||Ex(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?nl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ds&&ds.vars.overwrite!==!0)._first||nl(this),this.parent&&o!==this.timeline.totalDuration()&&wa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Gi(r):a,c=this._ptLookup,u=this._pt,f,d,h,g,_,m,p;if((!s||s==="all")&&WE(a,l))return s==="all"&&(this._pt=0),nl(this);for(f=this._op=this._op||[],s!=="all"&&(xn(s)&&(_={},si(s,function(y){return _[y]=1}),s=_),s=pb(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,g=d,h={}):(h=f[p]=f[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&hf(this,m,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&nl(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Tl(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Tl(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Xe.killTweensOf(r,s,o)},t}(Wl);Ci(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(n){sn[n]=function(){var t=new Kn,e=_d.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var im=function(t,e,i){return t[e]=i},Yx=function(t,e,i){return t[e](i)},_b=function(t,e,i,r){return t[e](r.fp,i)},gb=function(t,e,i){return t.setAttribute(e,i)},rm=function(t,e){return je(t[e])?Yx:$p(t[e])&&t.setAttribute?gb:im},$x=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},vb=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},qx=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},sm=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},xb=function(t,e,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,i),s=o},yb=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?hf(this,e,"_pt"):e.dep||(i=1),e=r;return!i},Sb=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},jx=function(t){for(var e=t._pt,i,r,s,o;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=i}t._pt=s},oi=function(){function n(e,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||$x,this.d=l||this,this.set=c||im,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Sb,this.m=i,this.mt=s,this.tween=r},n}();si(Jp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Zp[n]=1});Ai.TweenMax=Ai.TweenLite=sn;Ai.TimelineLite=Ai.TimelineMax=Kn;Xe=new Kn({sortChildren:!1,defaults:Ea,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wi.stringFilter=Bx;var ho=[],pu={},Mb=[],$_=0,Eb=0,qf=function(t){return(pu[t]||Mb).map(function(e){return e()})},yd=function(){var t=Date.now(),e=[];t-$_>2&&(qf("matchMediaInit"),ho.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=lr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),qf("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),$_=t,qf("matchMedia"))},Kx=function(){function n(e,i){this.selector=i&&gd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Eb++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){je(i)&&(s=r,r=i,i=je);var o=this,a=function(){var c=Ve,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=gd(s)),Ve=o,f=r.apply(o,arguments),je(f)&&o._r.push(f),Ve=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===je?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var r=Ve;Ve=null,i(this),Ve=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof sn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Kn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof sn)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ho.length;o--;)ho[o].id===this.id&&ho.splice(o,1)},t.revert=function(i){this.kill(i||{})},n}(),bb=function(){function n(e){this.contexts=[],this.scope=e,Ve&&Ve.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){xr(i)||(i={matches:i});var o=new Kx(0,s||this.scope),a=o.conditions={},l,c,u;Ve&&!o.selector&&(o.selector=Ve.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=lr.matchMedia(i[c]),l&&(ho.indexOf(o)<0&&ho.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(yd):l.addEventListener("change",yd)));return u&&r(o,function(f){return o.add(null,f)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),ku={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return Ox(r)})},timeline:function(t){return new Kn(t)},getTweensOf:function(t,e){return Xe.getTweensOf(t,e)},getProperty:function(t,e,i,r){xn(t)&&(t=Gi(t)[0]);var s=co(t||{}).get,o=i?Mx:Sx;return i==="native"&&(i=""),t&&(e?o((vi[e]&&vi[e].get||s)(t,e,i,r)):function(a,l,c){return o((vi[a]&&vi[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=Gi(t),t.length>1){var r=t.map(function(u){return ci.quickSetter(u,e,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}t=t[0]||{};var o=vi[e],a=co(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;ia._pt=0,f.init(t,i?u+i:u,ia,0,[t]),f.render(1,f),ia._pt&&sm(1,ia)}:a.set(t,l);return o?c:function(u){return c(t,l,i?u+i:u,a,1)}},quickTo:function(t,e,i){var r,s=ci.to(t,Ci((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Xe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=fo(t.ease,Ea.ease)),V_(Ea,t||{})},config:function(t){return V_(wi,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!vi[a]&&!Ai[a]&&zl(e+" effect requires "+a+" plugin.")}),Wf[e]=function(a,l,c){return i(Gi(a),Ci(l||{},s),c)},o&&(Kn.prototype[e]=function(a,l,c){return this.add(Wf[e](a,xr(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ge[t]=fo(e)},parseEase:function(t,e){return arguments.length?fo(t,e):ge},getById:function(t){return Xe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Kn(t),r,s;for(i.smoothChildTiming=ri(t.smoothChildTiming),Xe.remove(i),i._dp=0,i._time=i._tTime=Xe._time,r=Xe._first;r;)s=r._next,(e||!(!r._dur&&r instanceof sn&&r.vars.onComplete===r._targets[0]))&&fr(i,r,r._start-r._delay),r=s;return fr(Xe,i,0),i},context:function(t,e){return t?new Kx(t,e):Ve},matchMedia:function(t){return new bb(t)},matchMediaRefresh:function(){return ho.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||yd()},addEventListener:function(t,e){var i=pu[t]||(pu[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=pu[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:nb,wrapYoyo:ib,distribute:Rx,random:Dx,snap:Px,normalize:eb,getUnit:Ln,clamp:ZE,splitColor:Nx,toArray:Gi,selector:gd,mapRange:Ix,pipe:QE,unitize:tb,interpolate:rb,shuffle:Cx},install:_x,effects:Wf,ticker:Mi,updateRoot:Kn.updateRoot,plugins:vi,globalTimeline:Xe,core:{PropTween:oi,globals:gx,Tween:sn,Timeline:Kn,Animation:Wl,getCache:co,_removeLinkedListItem:hf,reverting:function(){return Mn},context:function(t){return t&&Ve&&(Ve.data.push(t),t._ctx=Ve),Ve},suppressOverwrites:function(t){return Yp=t}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ku[n]=sn[n]});Mi.add(Kn.updateRoot);ia=ku.to({},{duration:0});var Tb=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},wb=function(t,e){var i=t._targets,r,s,o;for(r in e)for(s=i.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Tb(o,r)),o&&o.modifier&&o.modifier(e[r],t,i[s],r))},jf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(xn(s)&&(l={},si(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}wb(a,s)}}}},ci=ku.registerPlugin({name:"attr",init:function(t,e,i,r,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Mn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},jf("roundProps",vd),jf("modifiers"),jf("snap",Px))||ku;sn.version=Kn.version=ci.version="3.13.0";mx=1;qp()&&Aa();ge.Power0;ge.Power1;ge.Power2;ge.Power3;ge.Power4;ge.Linear;ge.Quad;ge.Cubic;ge.Quart;ge.Quint;ge.Strong;ge.Elastic;ge.Back;ge.SteppedEase;ge.Bounce;ge.Sine;ge.Expo;ge.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var q_,ps,_a,om,eo,j_,am,Ab=function(){return typeof window<"u"},$r={},js=180/Math.PI,ga=Math.PI/180,Po=Math.atan2,K_=1e8,lm=/([A-Z])/g,Cb=/(left|right|width|margin|padding|x)/i,Rb=/[\s,\(]\S/,pr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Pb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Db=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Lb=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Zx=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Jx=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Ib=function(t,e,i){return t.style[e]=i},Ub=function(t,e,i){return t.style.setProperty(e,i)},Ob=function(t,e,i){return t._gsap[e]=i},Nb=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Fb=function(t,e,i,r,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},Bb=function(t,e,i,r,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},Ye="transform",ai=Ye+"Origin",kb=function n(t,e){var i=this,r=this.target,s=r.style,o=r._gsap;if(t in $r&&s){if(this.tfm=this.tfm||{},t!=="transform")t=pr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=Ur(r,a)}):this.tfm[t]=o.x?o[t]:Ur(r,t),t===ai&&(this.tfm.zOrigin=o.zOrigin);else return pr.transform.split(",").forEach(function(a){return n.call(i,a,e)});if(this.props.indexOf(Ye)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ai,e,"")),t=Ye}(s||e)&&this.props.push(t,e,s[t])},Qx=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zb=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(lm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=am(),(!s||!s.isStart)&&!i[Ye]&&(Qx(i),r.zOrigin&&i[ai]&&(i[ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},ty=function(t,e){var i={target:t,props:[],revert:zb,save:kb};return t._gsap||ci.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return i.save(r)}),i},ey,Md=function(t,e){var i=ps.createElementNS?ps.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ps.createElement(t);return i&&i.style?i:ps.createElement(t)},Wi=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(lm,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,Ca(e)||e,1)||""},Z_="O,Moz,ms,Ms,Webkit".split(","),Ca=function(t,e,i){var r=e||eo,s=r.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Z_[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Z_[o]:"")+t},Ed=function(){Ab()&&window.document&&(q_=window,ps=q_.document,_a=ps.documentElement,eo=Md("div")||{style:{}},Md("div"),Ye=Ca(Ye),ai=Ye+"Origin",eo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ey=!!Ca("perspective"),am=ci.core.reverting,om=1)},J_=function(t){var e=t.ownerSVGElement,i=Md("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",i.appendChild(r),_a.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),_a.removeChild(i),s},Q_=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},ny=function(t){var e,i;try{e=t.getBBox()}catch{e=J_(t),i=1}return e&&(e.width||e.height)||i||(e=J_(t)),e&&!e.width&&!e.x&&!e.y?{x:+Q_(t,["x","cx","x1"])||0,y:+Q_(t,["y","cy","y1"])||0,width:0,height:0}:e},iy=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ny(t))},vo=function(t,e){if(e){var i=t.style,r;e in $r&&e!==ai&&(e=Ye),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(lm,"-$1").toLowerCase())):i.removeAttribute(e)}},ms=function(t,e,i,r,s,o){var a=new oi(t._pt,e,i,0,1,o?Jx:Zx);return t._pt=a,a.b=r,a.e=s,t._props.push(i),a},tg={deg:1,rad:1,turn:1},Hb={grid:1,flex:1},Cs=function n(t,e,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=eo.style,l=Cb.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",g,_,m,p;if(r===o||!s||tg[r]||tg[o])return s;if(o!=="px"&&!d&&(s=n(t,e,i,"px")),p=t.getCTM&&iy(t),(h||o==="%")&&($r[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],tn(h?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ps||!_.appendChild)&&(_=ps.body),m=_._gsap,m&&h&&m.width&&l&&m.time===Mi.time&&!m.uncache)return tn(s/m.width*f);if(h&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+r,g=t[u],y?t.style[e]=y:vo(t,e)}else(h||o==="%")&&!Hb[Wi(_,"display")]&&(a.position=Wi(t,"position")),_===t&&(a.position="static"),_.appendChild(eo),g=eo[u],_.removeChild(eo),a.position="absolute";return l&&h&&(m=co(_),m.time=Mi.time,m.width=_[u]),tn(d?g*s/f:g&&s?f/g*s:0)},Ur=function(t,e,i,r){var s;return om||Ed(),e in pr&&e!=="transform"&&(e=pr[e],~e.indexOf(",")&&(e=e.split(",")[0])),$r[e]&&e!=="transform"?(s=Yl(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Hu(Wi(t,ai))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=zu[e]&&zu[e](t,e,i)||Wi(t,e)||xx(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Cs(t,e,s,i)+i:s},Vb=function(t,e,i,r){if(!i||i==="none"){var s=Ca(e,t,1),o=s&&Wi(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=Wi(t,"borderTopColor"))}var a=new oi(this._pt,t.style,e,0,1,qx),l=0,c=0,u,f,d,h,g,_,m,p,y,E,x,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Wi(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=Wi(t,e)||r,_?t.style[e]=_:vo(t,e)),u=[i,r],Bx(u),i=u[0],r=u[1],d=i.match(na)||[],w=r.match(na)||[],w.length){for(;f=na.exec(r);)m=f[0],y=r.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(h=parseFloat(_)||0,x=_.substr((h+"").length),m.charAt(1)==="="&&(m=ma(h,m)+x),p=parseFloat(m),E=m.substr((p+"").length),l=na.lastIndex-E.length,E||(E=E||wi.units[e]||x,l===r.length&&(r+=E,a.e+=E)),x!==E&&(h=Cs(t,e,_,E)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:h,c:p-h,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?Jx:Zx;return dx.test(r)&&(a.e=0),this._pt=a,a},eg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gb=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=eg[i]||i,e[1]=eg[r]||r,e.join(" ")},Wb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],$r[a]&&(l=1,a=a==="transformOrigin"?ai:Ye),vo(i,a);l&&(vo(i,Ye),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Yl(i,1),o.uncache=1,Qx(r)))}},zu={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var o=t._pt=new oi(t._pt,e,i,0,0,Wb);return o.u=r,o.pr=-10,o.tween=s,t._props.push(i),1}}},Xl=[1,0,0,1,0,0],ry={},sy=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ng=function(t){var e=Wi(t,Ye);return sy(e)?Xl:e.substr(7).match(hx).map(tn)},cm=function(t,e){var i=t._gsap||co(t),r=t.style,s=ng(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xl:s):(s===Xl&&!t.offsetParent&&t!==_a&&!i.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,_a.appendChild(t)),s=ng(t),l?r.display=l:vo(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):_a.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},bd=function(t,e,i,r,s,o){var a=t._gsap,l=s||cm(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],E=e.split(" "),x=parseFloat(E[0])||0,w=parseFloat(E[1])||0,A,T,O,S;i?l!==Xl&&(T=h*m-g*_)&&(O=x*(m/T)+w*(-_/T)+(_*y-m*p)/T,S=x*(-g/T)+w*(h/T)-(h*y-g*p)/T,x=O,w=S):(A=ny(t),x=A.x+(~E[0].indexOf("%")?x/100*A.width:x),w=A.y+(~(E[1]||E[0]).indexOf("%")?w/100*A.height:w)),r||r!==!1&&a.smooth?(p=x-c,y=w-u,a.xOffset=f+(p*h+y*_)-p,a.yOffset=d+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!i,t.style[ai]="0px 0px",o&&(ms(o,a,"xOrigin",c,x),ms(o,a,"yOrigin",u,w),ms(o,a,"xOffset",f,a.xOffset),ms(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+w)},Yl=function(t,e){var i=t._gsap||new Vx(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Wi(t,ai)||"0",u,f,d,h,g,_,m,p,y,E,x,w,A,T,O,S,b,U,I,F,W,tt,Z,K,H,dt,N,xt,It,Qt,Vt,Wt;return u=f=d=_=m=p=y=E=x=0,h=g=1,i.svg=!!(t.getCTM&&iy(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ye]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ye]!=="none"?l[Ye]:"")),r.scale=r.rotate=r.translate="none"),T=cm(t,i.svg),i.svg&&(i.uncache?(H=t.getBBox(),c=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",K=""):K=!e&&t.getAttribute("data-svg-origin"),bd(t,K||c,!!K||i.originIsAbsolute,i.smooth!==!1,T)),w=i.xOrigin||0,A=i.yOrigin||0,T!==Xl&&(U=T[0],I=T[1],F=T[2],W=T[3],u=tt=T[4],f=Z=T[5],T.length===6?(h=Math.sqrt(U*U+I*I),g=Math.sqrt(W*W+F*F),_=U||I?Po(I,U)*js:0,y=F||W?Po(F,W)*js+_:0,y&&(g*=Math.abs(Math.cos(y*ga))),i.svg&&(u-=w-(w*U+A*F),f-=A-(w*I+A*W))):(Wt=T[6],Qt=T[7],N=T[8],xt=T[9],It=T[10],Vt=T[11],u=T[12],f=T[13],d=T[14],O=Po(Wt,It),m=O*js,O&&(S=Math.cos(-O),b=Math.sin(-O),K=tt*S+N*b,H=Z*S+xt*b,dt=Wt*S+It*b,N=tt*-b+N*S,xt=Z*-b+xt*S,It=Wt*-b+It*S,Vt=Qt*-b+Vt*S,tt=K,Z=H,Wt=dt),O=Po(-F,It),p=O*js,O&&(S=Math.cos(-O),b=Math.sin(-O),K=U*S-N*b,H=I*S-xt*b,dt=F*S-It*b,Vt=W*b+Vt*S,U=K,I=H,F=dt),O=Po(I,U),_=O*js,O&&(S=Math.cos(O),b=Math.sin(O),K=U*S+I*b,H=tt*S+Z*b,I=I*S-U*b,Z=Z*S-tt*b,U=K,tt=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=tn(Math.sqrt(U*U+I*I+F*F)),g=tn(Math.sqrt(Z*Z+Wt*Wt)),O=Po(tt,Z),y=Math.abs(O)>2e-4?O*js:0,x=Vt?1/(Vt<0?-Vt:Vt):0),i.svg&&(K=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!sy(Wi(t,Ye)),K&&t.setAttribute("transform",K))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(h*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=tn(h),i.scaleY=tn(g),i.rotation=tn(_)+a,i.rotationX=tn(m)+a,i.rotationY=tn(p)+a,i.skewX=y+a,i.skewY=E+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(r[ai]=Hu(c)),i.xOffset=i.yOffset=0,i.force3D=wi.force3D,i.renderTransform=i.svg?Yb:ey?oy:Xb,i.uncache=0,i},Hu=function(t){return(t=t.split(" "))[0]+" "+t[1]},Kf=function(t,e,i){var r=Ln(e);return tn(parseFloat(e)+parseFloat(Cs(t,"x",i+"px",r)))+r},Xb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,oy(t,e)},Bs="0deg",Ha="0px",ks=") ",oy=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,d=i.skewX,h=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,E=i.zOrigin,x="",w=p==="auto"&&t&&t!==1||p===!0;if(E&&(f!==Bs||u!==Bs)){var A=parseFloat(u)*ga,T=Math.sin(A),O=Math.cos(A),S;A=parseFloat(f)*ga,S=Math.cos(A),o=Kf(y,o,T*S*-E),a=Kf(y,a,-Math.sin(A)*-E),l=Kf(y,l,O*S*-E+E)}m!==Ha&&(x+="perspective("+m+ks),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(w||o!==Ha||a!==Ha||l!==Ha)&&(x+=l!==Ha||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ks),c!==Bs&&(x+="rotate("+c+ks),u!==Bs&&(x+="rotateY("+u+ks),f!==Bs&&(x+="rotateX("+f+ks),(d!==Bs||h!==Bs)&&(x+="skew("+d+", "+h+ks),(g!==1||_!==1)&&(x+="scale("+g+", "+_+ks),y.style[Ye]=x||"translate(0, 0)"},Yb=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,d=i.scaleY,h=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,E=parseFloat(o),x=parseFloat(a),w,A,T,O,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ga,c*=ga,w=Math.cos(l)*f,A=Math.sin(l)*f,T=Math.sin(l-c)*-d,O=Math.cos(l-c)*d,c&&(u*=ga,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,O*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),w*=S,A*=S)),w=tn(w),A=tn(A),T=tn(T),O=tn(O)):(w=f,O=d,A=T=0),(E&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(E=Cs(h,"x",o,"px"),x=Cs(h,"y",a,"px")),(g||_||m||p)&&(E=tn(E+g-(g*w+_*T)+m),x=tn(x+_-(g*A+_*O)+p)),(r||s)&&(S=h.getBBox(),E=tn(E+r/100*S.width),x=tn(x+s/100*S.height)),S="matrix("+w+","+A+","+T+","+O+","+E+","+x+")",h.setAttribute("transform",S),y&&(h.style[Ye]=S)},$b=function(t,e,i,r,s){var o=360,a=xn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?js:1),c=l-r,u=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*K_)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*K_)%o-~~(c/o)*o)),t._pt=d=new oi(t._pt,e,i,r,c,Pb),d.e=u,d.u="deg",t._props.push(i),d},ig=function(t,e){for(var i in e)t[i]=e[i];return t},qb=function(t,e,i){var r=ig({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,d,h,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ye]=e,a=Yl(i,1),vo(i,Ye),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Ye],o[Ye]=e,a=Yl(i,1),o[Ye]=c);for(l in $r)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=Ln(c),g=Ln(u),f=h!==g?Cs(i,l,c,g):parseFloat(c),d=parseFloat(u),t._pt=new oi(t._pt,a,l,f,d-f,Sd),t._pt.u=g||0,t._props.push(l));ig(a,r)};si("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",o=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(a){return t<2?n+a:"border"+a+n});zu[t>1?"border"+n:n]=function(a,l,c,u,f){var d,h;if(arguments.length<4)return d=o.map(function(g){return Ur(a,g,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},o.forEach(function(g,_){return h[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,h,f)}});var ay={name:"css",register:Ed,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var o=this._props,a=t.style,l=i.vars.startAt,c,u,f,d,h,g,_,m,p,y,E,x,w,A,T,O;om||Ed(),this.styles=this.styles||ty(t),O=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(vi[_]&&Gx(_,e,i,r,t,s)))){if(h=typeof u,g=zu[_],h==="function"&&(u=u.call(i,r,t,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Vl(u)),g)g(this,t,_,u,i)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",ys.lastIndex=0,ys.test(c)||(m=Ln(c),p=Ln(u)),p?m!==p&&(c=Cs(t,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),O.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,t,s):l[_],xn(c)&&~c.indexOf("random(")&&(c=Vl(c)),Ln(c+"")||c==="auto"||(c+=wi.units[_]||Ln(Ur(t,_))||""),(c+"").charAt(1)==="="&&(c=Ur(t,_))):c=Ur(t,_),d=parseFloat(c),y=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in pr&&(_==="autoAlpha"&&(d===1&&Ur(t,"visibility")==="hidden"&&f&&(d=0),O.push("visibility",0,a.visibility),ms(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=pr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in $r,E){if(this.styles.save(_),h==="string"&&u.substring(0,6)==="var(--"&&(u=Wi(t,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),x||(w=t._gsap,w.renderTransform&&!e.parseTransform||Yl(t,e.parseTransform),A=e.smoothOrigin!==!1&&w.smooth,x=this._pt=new oi(this._pt,a,Ye,0,1,w.renderTransform,w,0,-1),x.dep=1),_==="scale")this._pt=new oi(this._pt,w,"scaleY",w.scaleY,(y?ma(w.scaleY,y+f):f)-w.scaleY||0,Sd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){O.push(ai,0,a[ai]),u=Gb(u),w.svg?bd(t,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&ms(this,w,"zOrigin",w.zOrigin,p),ms(this,a,_,Hu(c),Hu(u)));continue}else if(_==="svgOrigin"){bd(t,u,1,A,0,this);continue}else if(_ in ry){$b(this,w,_,d,y?ma(d,y+u):u);continue}else if(_==="smoothOrigin"){ms(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){qb(this,u,t);continue}}else _ in a||(_=Ca(_)||_);if(E||(f||f===0)&&(d||d===0)&&!Rb.test(u)&&_ in a)m=(c+"").substr((d+"").length),f||(f=0),p=Ln(u)||(_ in wi.units?wi.units[_]:m),m!==p&&(d=Cs(t,_,c,p)),this._pt=new oi(this._pt,E?w:a,_,d,(y?ma(d,y+f):f)-d,!E&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Lb:Sd),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Db);else if(_ in a)Vb.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,r,s);else if(_!=="parseTransform"){Kp(_,u);continue}E||(_ in a?O.push(_,0,a[_]):typeof t[_]=="function"?O.push(_,2,t[_]()):O.push(_,1,c||t[_])),o.push(_)}}T&&jx(this)},render:function(t,e){if(e.tween._time||!am())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Ur,aliases:pr,getSetter:function(t,e,i){var r=pr[e];return r&&r.indexOf(",")<0&&(e=r),e in $r&&e!==ai&&(t._gsap.x||Ur(t,"x"))?i&&j_===i?e==="scale"?Nb:Ob:(j_=i||{})&&(e==="scale"?Fb:Bb):t.style&&!$p(t.style[e])?Ib:~e.indexOf("-")?Ub:rm(t,e)},core:{_removeProperty:vo,_getMatrix:cm}};ci.utils.checkPrefix=Ca;ci.core.getStyleSaver=ty;(function(n,t,e,i){var r=si(n+","+t+","+e,function(s){$r[s]=1});si(t,function(s){wi.units[s]="deg",ry[s]=1}),pr[r[13]]=n+","+t,si(i,function(s){var o=s.split(":");pr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){wi.units[n]="px"});ci.registerPlugin(ay);var $l=ci.registerPlugin(ay)||ci;$l.core.Tween;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const um="180",va={ROTATE:0,DOLLY:1,PAN:2},ra={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jb=0,rg=1,Kb=2,ly=1,Zb=2,Dr=3,Rs=0,li=1,Ji=2,Ss=0,po=1,Vu=2,sg=3,og=4,Jb=5,Js=100,Qb=101,tT=102,eT=103,nT=104,iT=200,rT=201,sT=202,oT=203,Td=204,wd=205,aT=206,lT=207,cT=208,uT=209,fT=210,hT=211,dT=212,pT=213,mT=214,Ad=0,Cd=1,Rd=2,Ra=3,Pd=4,Dd=5,Ld=6,Id=7,cy=0,_T=1,gT=2,Ms=0,vT=1,xT=2,yT=3,ST=4,MT=5,ET=6,bT=7,uy=300,Pa=301,Da=302,Ud=303,Od=304,mf=306,Nd=1e3,no=1001,Fd=1002,er=1003,TT=1004,wc=1005,mr=1006,Zf=1007,io=1008,yr=1009,fy=1010,hy=1011,ql=1012,fm=1013,xo=1014,zr=1015,ic=1016,hm=1017,dm=1018,jl=1020,dy=35902,py=35899,my=1021,_y=1022,Qi=1023,Kl=1026,Zl=1027,gy=1028,pm=1029,vy=1030,mm=1031,_m=1033,mu=33776,_u=33777,gu=33778,vu=33779,Bd=35840,kd=35841,zd=35842,Hd=35843,Vd=36196,Gd=37492,Wd=37496,Xd=37808,Yd=37809,$d=37810,qd=37811,jd=37812,Kd=37813,Zd=37814,Jd=37815,Qd=37816,tp=37817,ep=37818,np=37819,ip=37820,rp=37821,sp=36492,op=36494,ap=36495,lp=36283,cp=36284,up=36285,fp=36286,wT=3200,AT=3201,CT=0,RT=1,us="",Ni="srgb",La="srgb-linear",Gu="linear",we="srgb",Do=7680,ag=519,PT=512,DT=513,LT=514,xy=515,IT=516,UT=517,OT=518,NT=519,hp=35044,lg="300 es",_r=2e3,Wu=2001;class bo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=Math.PI/180,dp=180/Math.PI;function Es(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[e&63|128]+En[e>>8&255]+"-"+En[e>>16&255]+En[e>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function fe(n,t,e){return Math.max(t,Math.min(e,n))}function FT(n,t){return(n%t+t)%t}function Jf(n,t,e){return(1-e)*n+e*t}function hr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const BT={DEG2RAD:xu};class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yo{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=h,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*_,y=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const w=Math.sqrt(E),A=Math.atan2(w,p*y);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const x=a*y;if(l=l*m+d*x,c=c*m+h*x,u=u*m+g*x,f=f*m+_*x,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*h-c*d,t[e+1]=l*g+u*d+c*f-a*h,t[e+2]=c*g+u*h+a*d-l*f,t[e+3]=u*g-a*f-l*d-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*i+e*this._x,this._y=h*r+e*this._y,this._z=h*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,i=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cg.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qf.copy(this).projectOnVector(t),this.sub(Qf)}reflect(t){return this.sub(Qf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new $,cg=new yo;class ae{constructor(t,e,i,r,s,o,a,l,c){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],E=r[4],x=r[7],w=r[2],A=r[5],T=r[8];return s[0]=o*_+a*y+l*w,s[3]=o*m+a*E+l*A,s[6]=o*p+a*x+l*T,s[1]=c*_+u*y+f*w,s[4]=c*m+u*E+f*A,s[7]=c*p+u*x+f*T,s[2]=d*_+h*y+g*w,s[5]=d*m+h*E+g*A,s[8]=d*p+h*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=e*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*c-u*i)*_,t[2]=(a*i-r*o)*_,t[3]=d*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=h*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(th.makeScale(t,e)),this}rotate(t){return this.premultiply(th.makeRotation(-t)),this}translate(t,e){return this.premultiply(th.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const th=new ae;function yy(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Jl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kT(){const n=Jl("canvas");return n.style.display="block",n}const ug={};function Ql(n){n in ug||(ug[n]=!0,console.warn(n))}function zT(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const fg=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hg=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HT(){const n={enabled:!0,workingColorSpace:La,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===we&&(r.r=Gr(r.r),r.g=Gr(r.g),r.b=Gr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===we&&(r.r=xa(r.r),r.g=xa(r.g),r.b=xa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===us?Gu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ql("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ql("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[La]:{primaries:t,whitePoint:i,transfer:Gu,toXYZ:fg,fromXYZ:hg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:t,whitePoint:i,transfer:we,toXYZ:fg,fromXYZ:hg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),n}const ye=HT();function Gr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Lo;class VT{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Lo===void 0&&(Lo=Jl("canvas")),Lo.width=t.width,Lo.height=t.height;const r=Lo.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Lo}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jl("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gr(e[i]/255)*255):e[i]=Gr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let GT=0;class gm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(eh(r[o].image)):s.push(eh(r[o]))}else s=eh(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function eh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?VT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WT=0;const nh=new $;class On extends bo{constructor(t=On.DEFAULT_IMAGE,e=On.DEFAULT_MAPPING,i=no,r=no,s=mr,o=io,a=Qi,l=yr,c=On.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=Es(),this.name="",this.source=new gm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nh).x}get height(){return this.source.getSize(nh).y}get depth(){return this.source.getSize(nh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nd:t.x=t.x-Math.floor(t.x);break;case no:t.x=t.x<0?0:1;break;case Fd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nd:t.y=t.y-Math.floor(t.y);break;case no:t.y=t.y<0?0:1;break;case Fd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=uy;On.DEFAULT_ANISOTROPY=1;class qe{constructor(t=0,e=0,i=0,r=1){qe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,x=(h+1)/2,w=(p+1)/2,A=(u+d)/4,T=(f+_)/4,O=(g+m)/4;return E>x&&E>w?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=A/i,s=T/i):x>w?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=O/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=T/s,r=O/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XT extends bo{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new On(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:mr,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new gm(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class So extends XT{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Sy extends On{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=er,this.minFilter=er,this.wrapR=no,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class YT extends On{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=er,this.minFilter=er,this.wrapR=no,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rc{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=qi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qi):qi.fromBufferAttribute(s,o),qi.applyMatrix4(t.matrixWorld),this.expandByPoint(qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ac.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ac.copy(i.boundingBox)),Ac.applyMatrix4(t.matrixWorld),this.union(Ac)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qi),qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Va),Cc.subVectors(this.max,Va),Io.subVectors(t.a,Va),Uo.subVectors(t.b,Va),Oo.subVectors(t.c,Va),Jr.subVectors(Uo,Io),Qr.subVectors(Oo,Uo),zs.subVectors(Io,Oo);let e=[0,-Jr.z,Jr.y,0,-Qr.z,Qr.y,0,-zs.z,zs.y,Jr.z,0,-Jr.x,Qr.z,0,-Qr.x,zs.z,0,-zs.x,-Jr.y,Jr.x,0,-Qr.y,Qr.x,0,-zs.y,zs.x,0];return!ih(e,Io,Uo,Oo,Cc)||(e=[1,0,0,0,1,0,0,0,1],!ih(e,Io,Uo,Oo,Cc))?!1:(Rc.crossVectors(Jr,Qr),e=[Rc.x,Rc.y,Rc.z],ih(e,Io,Uo,Oo,Cc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wr=[new $,new $,new $,new $,new $,new $,new $,new $],qi=new $,Ac=new rc,Io=new $,Uo=new $,Oo=new $,Jr=new $,Qr=new $,zs=new $,Va=new $,Cc=new $,Rc=new $,Hs=new $;function ih(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Hs.fromArray(n,s);const a=r.x*Math.abs(Hs.x)+r.y*Math.abs(Hs.y)+r.z*Math.abs(Hs.z),l=t.dot(Hs),c=e.dot(Hs),u=i.dot(Hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $T=new rc,Ga=new $,rh=new $;class sc{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$T.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ga.subVectors(t,this.center);const e=Ga.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ga,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ga.copy(t.center).add(rh)),this.expandByPoint(Ga.copy(t.center).sub(rh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ar=new $,sh=new $,Pc=new $,ts=new $,oh=new $,Dc=new $,ah=new $;class _f{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ar)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ar.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ar.copy(this.origin).addScaledVector(this.direction,e),Ar.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){sh.copy(t).add(e).multiplyScalar(.5),Pc.copy(e).sub(t).normalize(),ts.copy(this.origin).sub(sh);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Pc),a=ts.dot(this.direction),l=-ts.dot(Pc),c=ts.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sh).addScaledVector(Pc,d),h}intersectSphere(t,e){Ar.subVectors(t.center,this.origin);const i=Ar.dot(this.direction),r=Ar.dot(Ar)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ar)!==null}intersectTriangle(t,e,i,r,s){oh.subVectors(e,t),Dc.subVectors(i,t),ah.crossVectors(oh,Dc);let o=this.direction.dot(ah),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,t);const l=a*this.direction.dot(Dc.crossVectors(ts,Dc));if(l<0)return null;const c=a*this.direction.dot(oh.cross(ts));if(c<0||l+c>o)return null;const u=-a*ts.dot(ah);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(t,e,i,r,s,o,a,l,c,u,f,d,h,g,_,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,f,d,h,g,_,m)}set(t,e,i,r,s,o,a,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/No.setFromMatrixColumn(t,0).length(),s=1/No.setFromMatrixColumn(t,1).length(),o=1/No.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=h+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+h*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;e[0]=d+_*a,e[4]=g*a-h,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;e[0]=d-_*a,e[4]=-o*f,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-h,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=h*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*f,e[8]=g*f+h,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*f+g,e[10]=d-_*f}else if(t.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+_,e[5]=o*u,e[9]=h*f-g,e[2]=g*f-h,e[6]=a*u,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qT,t,jT)}lookAt(t,e,i){const r=this.elements;return di.subVectors(t,e),di.lengthSq()===0&&(di.z=1),di.normalize(),es.crossVectors(i,di),es.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),es.crossVectors(i,di)),es.normalize(),Lc.crossVectors(di,es),r[0]=es.x,r[4]=Lc.x,r[8]=di.x,r[1]=es.y,r[5]=Lc.y,r[9]=di.y,r[2]=es.z,r[6]=Lc.z,r[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],E=i[7],x=i[11],w=i[15],A=r[0],T=r[4],O=r[8],S=r[12],b=r[1],U=r[5],I=r[9],F=r[13],W=r[2],tt=r[6],Z=r[10],K=r[14],H=r[3],dt=r[7],N=r[11],xt=r[15];return s[0]=o*A+a*b+l*W+c*H,s[4]=o*T+a*U+l*tt+c*dt,s[8]=o*O+a*I+l*Z+c*N,s[12]=o*S+a*F+l*K+c*xt,s[1]=u*A+f*b+d*W+h*H,s[5]=u*T+f*U+d*tt+h*dt,s[9]=u*O+f*I+d*Z+h*N,s[13]=u*S+f*F+d*K+h*xt,s[2]=g*A+_*b+m*W+p*H,s[6]=g*T+_*U+m*tt+p*dt,s[10]=g*O+_*I+m*Z+p*N,s[14]=g*S+_*F+m*K+p*xt,s[3]=y*A+E*b+x*W+w*H,s[7]=y*T+E*U+x*tt+w*dt,s[11]=y*O+E*I+x*Z+w*N,s[15]=y*S+E*F+x*K+w*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],h=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+_*(+e*l*h-e*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+e*c*f-e*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-e*l*f+e*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],h=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=f*m*c-_*d*c+_*l*h-a*m*h-f*l*p+a*d*p,E=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,x=u*_*c-g*f*c+g*a*h-o*_*h-u*a*p+o*f*p,w=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,A=e*y+i*E+r*x+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=y*T,t[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*T,t[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*T,t[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*T,t[4]=E*T,t[5]=(u*m*s-g*d*s+g*r*h-e*m*h-u*r*p+e*d*p)*T,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*p-e*l*p)*T,t[7]=(o*d*s-u*l*s+u*r*c-e*d*c-o*r*h+e*l*h)*T,t[8]=x*T,t[9]=(g*f*s-u*_*s-g*i*h+e*_*h+u*i*p-e*f*p)*T,t[10]=(o*_*s-g*a*s+g*i*c-e*_*c-o*i*p+e*a*p)*T,t[11]=(u*a*s-o*f*s-u*i*c+e*f*c+o*i*h-e*a*h)*T,t[12]=w*T,t[13]=(u*_*r-g*f*r+g*i*d-e*_*d-u*i*m+e*f*m)*T,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*m-e*a*m)*T,t[15]=(o*f*r-u*a*r+u*i*l-e*f*l-o*i*d+e*a*d)*T,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,_=o*u,m=o*f,p=a*f,y=l*c,E=l*u,x=l*f,w=i.x,A=i.y,T=i.z;return r[0]=(1-(_+p))*w,r[1]=(h+x)*w,r[2]=(g-E)*w,r[3]=0,r[4]=(h-x)*A,r[5]=(1-(d+p))*A,r[6]=(m+y)*A,r[7]=0,r[8]=(g+E)*T,r[9]=(m-y)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=No.set(r[0],r[1],r[2]).length();const o=No.set(r[4],r[5],r[6]).length(),a=No.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ji.copy(this);const c=1/s,u=1/o,f=1/a;return ji.elements[0]*=c,ji.elements[1]*=c,ji.elements[2]*=c,ji.elements[4]*=u,ji.elements[5]*=u,ji.elements[6]*=u,ji.elements[8]*=f,ji.elements[9]*=f,ji.elements[10]*=f,e.setFromRotationMatrix(ji),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=_r,l=!1){const c=this.elements,u=2*s/(e-t),f=2*s/(i-r),d=(e+t)/(e-t),h=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===_r)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Wu)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=_r,l=!1){const c=this.elements,u=2/(e-t),f=2/(i-r),d=-(e+t)/(e-t),h=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===_r)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Wu)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const No=new $,ji=new ke,qT=new $(0,0,0),jT=new $(1,1,1),es=new $,Lc=new $,di=new $,dg=new ke,pg=new yo;class qr{constructor(t=0,e=0,i=0,r=qr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return dg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dg,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pg.setFromEuler(this),this.setFromQuaternion(pg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qr.DEFAULT_ORDER="XYZ";class My{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let KT=0;const mg=new $,Fo=new yo,Cr=new ke,Ic=new $,Wa=new $,ZT=new $,JT=new yo,_g=new $(1,0,0),gg=new $(0,1,0),vg=new $(0,0,1),xg={type:"added"},QT={type:"removed"},Bo={type:"childadded",child:null},lh={type:"childremoved",child:null};class fn extends bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const t=new $,e=new qr,i=new yo,r=new $(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new ae}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new My,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fo.setFromAxisAngle(t,e),this.quaternion.multiply(Fo),this}rotateOnWorldAxis(t,e){return Fo.setFromAxisAngle(t,e),this.quaternion.premultiply(Fo),this}rotateX(t){return this.rotateOnAxis(_g,t)}rotateY(t){return this.rotateOnAxis(gg,t)}rotateZ(t){return this.rotateOnAxis(vg,t)}translateOnAxis(t,e){return mg.copy(t).applyQuaternion(this.quaternion),this.position.add(mg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_g,t)}translateY(t){return this.translateOnAxis(gg,t)}translateZ(t){return this.translateOnAxis(vg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cr.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ic.copy(t):Ic.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cr.lookAt(Wa,Ic,this.up):Cr.lookAt(Ic,Wa,this.up),this.quaternion.setFromRotationMatrix(Cr),r&&(Cr.extractRotation(r.matrixWorld),Fo.setFromRotationMatrix(Cr),this.quaternion.premultiply(Fo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xg),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(QT),lh.child=t,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xg),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,t,ZT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,JT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new $(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ki=new $,Rr=new $,ch=new $,Pr=new $,ko=new $,zo=new $,yg=new $,uh=new $,fh=new $,hh=new $,dh=new qe,ph=new qe,mh=new qe;class Hi{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Ki.subVectors(t,e),r.cross(Ki);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Ki.subVectors(r,e),Rr.subVectors(i,e),ch.subVectors(t,e);const o=Ki.dot(Ki),a=Ki.dot(Rr),l=Ki.dot(ch),c=Rr.dot(Rr),u=Rr.dot(ch),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Pr)===null?!1:Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pr.x),l.addScaledVector(o,Pr.y),l.addScaledVector(a,Pr.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(t,e),ph.fromBufferAttribute(t,i),mh.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(dh,s.x),o.addScaledVector(ph,s.y),o.addScaledVector(mh,s.z),o}static isFrontFacing(t,e,i,r){return Ki.subVectors(i,e),Rr.subVectors(t,e),Ki.cross(Rr).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ki.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),Ki.cross(Rr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Hi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Hi.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;ko.subVectors(r,i),zo.subVectors(s,i),uh.subVectors(t,i);const l=ko.dot(uh),c=zo.dot(uh);if(l<=0&&c<=0)return e.copy(i);fh.subVectors(t,r);const u=ko.dot(fh),f=zo.dot(fh);if(u>=0&&f<=u)return e.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(ko,o);hh.subVectors(t,s);const h=ko.dot(hh),g=zo.dot(hh);if(g>=0&&h<=g)return e.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(zo,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return yg.subVectors(s,r),a=(f-u)/(f-u+(h-g)),e.copy(r).addScaledVector(yg,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(ko,o).addScaledVector(zo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ey={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function _h(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class _e{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ye.workingColorSpace){return this.r=t,this.g=e,this.b=i,ye.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ye.workingColorSpace){if(t=FT(t,1),e=fe(e,0,1),i=fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=_h(o,s,t+1/3),this.g=_h(o,s,t),this.b=_h(o,s,t-1/3)}return ye.colorSpaceToWorking(this,r),this}setStyle(t,e=Ni){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ni){const i=Ey[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}copyLinearToSRGB(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ni){return ye.workingToColorSpace(bn.copy(this),t),Math.round(fe(bn.r*255,0,255))*65536+Math.round(fe(bn.g*255,0,255))*256+Math.round(fe(bn.b*255,0,255))}getHexString(t=Ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(bn.copy(this),e);const i=bn.r,r=bn.g,s=bn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Ni){ye.workingToColorSpace(bn.copy(this),t);const e=bn.r,i=bn.g,r=bn.b;return t!==Ni?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(Uc);const i=Jf(ns.h,Uc.h,e),r=Jf(ns.s,Uc.s,e),s=Jf(ns.l,Uc.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new _e;_e.NAMES=Ey;let tw=0;class To extends bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tw++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=po,this.side=Rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=wd,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(i.blending=this.blending),this.side!==Rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Td&&(i.blendSrc=this.blendSrc),this.blendDst!==wd&&(i.blendDst=this.blendDst),this.blendEquation!==Js&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ra&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ag&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Do&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Do&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Do&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Al extends To{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.combine=cy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new $,Oc=new Zt;let ew=0;class nr{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ew++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hp,this.updateRanges=[],this.gpuType=zr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Oc.fromBufferAttribute(this,e),Oc.applyMatrix3(t),this.setXY(e,Oc.x,Oc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),r=Ae(r,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hp&&(t.usage=this.usage),t}}class by extends nr{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ty extends nr{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class hn extends nr{constructor(t,e,i){super(new Float32Array(t),e,i)}}let nw=0;const Ii=new ke,gh=new fn,Ho=new $,pi=new rc,Xa=new rc,mn=new $;class Nn extends bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nw++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yy(t)?Ty:by)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ae().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,e,i){return Ii.makeTranslation(t,e,i),this.applyMatrix4(Ii),this}scale(t,e,i){return Ii.makeScale(t,e,i),this.applyMatrix4(Ii),this}lookAt(t){return gh.lookAt(t),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ho).negate(),this.translate(Ho.x,Ho.y,Ho.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hn(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];pi.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const i=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Xa.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(pi.min,Xa.min),pi.expandByPoint(mn),mn.addVectors(pi.max,Xa.max),pi.expandByPoint(mn)):(pi.expandByPoint(Xa.min),pi.expandByPoint(Xa.max))}pi.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)mn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(mn));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mn.fromBufferAttribute(a,c),l&&(Ho.fromBufferAttribute(t,c),mn.add(Ho)),r=Math.max(r,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new $,l[O]=new $;const c=new $,u=new $,f=new $,d=new Zt,h=new Zt,g=new Zt,_=new $,m=new $;function p(O,S,b){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,b),d.fromBufferAttribute(s,O),h.fromBufferAttribute(s,S),g.fromBufferAttribute(s,b),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const U=1/(h.x*g.y-g.x*h.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(U),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(U),a[O].add(_),a[S].add(_),a[b].add(_),l[O].add(m),l[S].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let O=0,S=y.length;O<S;++O){const b=y[O],U=b.start,I=b.count;for(let F=U,W=U+I;F<W;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const E=new $,x=new $,w=new $,A=new $;function T(O){w.fromBufferAttribute(r,O),A.copy(w);const S=a[O];E.copy(S),E.sub(w.multiplyScalar(w.dot(S))).normalize(),x.crossVectors(A,S);const U=x.dot(l[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,U)}for(let O=0,S=y.length;O<S;++O){const b=y[O],U=b.start,I=b.count;for(let F=U,W=U+I;F<W;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nr(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(t)for(let d=0,h=t.count;d<h;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=e.count;d<h;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)mn.fromBufferAttribute(t,e),mn.normalize(),t.setXYZ(e,mn.x,mn.y,mn.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new nr(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=t(d,i);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sg=new ke,Vs=new _f,Nc=new sc,Mg=new $,Fc=new $,Bc=new $,kc=new $,vh=new $,zc=new $,Eg=new $,Hc=new $;class An extends fn{constructor(t=new Nn,e=new Al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){zc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(vh.fromBufferAttribute(f,t),o?zc.addScaledVector(vh,u):zc.addScaledVector(vh.sub(e),u))}e.add(zc)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(s),Vs.copy(t.ray).recast(t.near),!(Nc.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(Nc,Mg)===null||Vs.origin.distanceToSquared(Mg)>(t.far-t.near)**2))&&(Sg.copy(s).invert(),Vs.copy(t.ray).applyMatrix4(Sg),!(i.boundingBox!==null&&Vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vs)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let x=y,w=E;x<w;x+=3){const A=a.getX(x),T=a.getX(x+1),O=a.getX(x+2);r=Vc(this,p,t,i,c,u,f,A,T,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);r=Vc(this,o,t,i,c,u,f,y,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let x=y,w=E;x<w;x+=3){const A=x,T=x+1,O=x+2;r=Vc(this,p,t,i,c,u,f,A,T,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=m,E=m+1,x=m+2;r=Vc(this,o,t,i,c,u,f,y,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function iw(n,t,e,i,r,s,o,a){let l;if(t.side===li?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Rs,a),l===null)return null;Hc.copy(a),Hc.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Hc);return c<e.near||c>e.far?null:{distance:c,point:Hc.clone(),object:n}}function Vc(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Fc),n.getVertexPosition(l,Bc),n.getVertexPosition(c,kc);const u=iw(n,t,e,i,Fc,Bc,kc,Eg);if(u){const f=new $;Hi.getBarycoord(Eg,Fc,Bc,kc,f),r&&(u.uv=Hi.getInterpolatedAttribute(r,a,l,c,f,new Zt)),s&&(u.uv1=Hi.getInterpolatedAttribute(s,a,l,c,f,new Zt)),o&&(u.normal=Hi.getInterpolatedAttribute(o,a,l,c,f,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new $,materialIndex:0};Hi.getNormal(Fc,Bc,kc,d.normal),u.face=d,u.barycoord=f}return u}class oc extends Nn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(u,3)),this.setAttribute("uv",new hn(f,2));function g(_,m,p,y,E,x,w,A,T,O,S){const b=x/T,U=w/O,I=x/2,F=w/2,W=A/2,tt=T+1,Z=O+1;let K=0,H=0;const dt=new $;for(let N=0;N<Z;N++){const xt=N*U-F;for(let It=0;It<tt;It++){const Qt=It*b-I;dt[_]=Qt*y,dt[m]=xt*E,dt[p]=W,c.push(dt.x,dt.y,dt.z),dt[_]=0,dt[m]=0,dt[p]=A>0?1:-1,u.push(dt.x,dt.y,dt.z),f.push(It/T),f.push(1-N/O),K+=1}}for(let N=0;N<O;N++)for(let xt=0;xt<T;xt++){const It=d+xt+tt*N,Qt=d+xt+tt*(N+1),Vt=d+(xt+1)+tt*(N+1),Wt=d+(xt+1)+tt*N;l.push(It,Qt,Wt),l.push(Qt,Vt,Wt),H+=6}a.addGroup(h,H,S),h+=H,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ia(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Gn(n){const t={};for(let e=0;e<n.length;e++){const i=Ia(n[e]);for(const r in i)t[r]=i[r]}return t}function rw(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function wy(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}const sw={clone:Ia,merge:Gn};var ow=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends To{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ow,this.fragmentShader=aw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ia(t.uniforms),this.uniformsGroups=rw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ay extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=_r,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new $,bg=new Zt,Tg=new Zt;class ki extends Ay{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=dp*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dp*2*Math.atan(Math.tan(xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,e){return this.getViewBounds(t,bg,Tg),e.subVectors(Tg,bg)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xu*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vo=-90,Go=1;class lw extends fn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ki(Vo,Go,t,e);r.layers=this.layers,this.add(r);const s=new ki(Vo,Go,t,e);s.layers=this.layers,this.add(s);const o=new ki(Vo,Go,t,e);o.layers=this.layers,this.add(o);const a=new ki(Vo,Go,t,e);a.layers=this.layers,this.add(a);const l=new ki(Vo,Go,t,e);l.layers=this.layers,this.add(l);const c=new ki(Vo,Go,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===_r)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,d,h),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cy extends On{constructor(t=[],e=Pa,i,r,s,o,a,l,c,u){super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cw extends So{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Cy(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new oc(5,5,5),s=new Sr({name:"CubemapFromEquirect",uniforms:Ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:Ss});s.uniforms.tEquirect.value=e;const o=new An(r,s),a=e.minFilter;return e.minFilter===io&&(e.minFilter=mr),new lw(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class _s extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uw={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new _s;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class fw extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qr,this.environmentIntensity=1,this.environmentRotation=new qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hw{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hp,this.updateRanges=[],this.version=0,this.uuid=Es()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Es()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Es()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new $;class Xu{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)zn.fromBufferAttribute(this,e),zn.applyMatrix4(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)zn.fromBufferAttribute(this,e),zn.applyNormalMatrix(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)zn.fromBufferAttribute(this,e),zn.transformDirection(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=hr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hr(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hr(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hr(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hr(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),r=Ae(r,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new nr(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pp extends To{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Wo;const Ya=new $,Xo=new $,Yo=new $,$o=new Zt,$a=new Zt,Ry=new ke,Gc=new $,qa=new $,Wc=new $,wg=new Zt,yh=new Zt,Ag=new Zt;class Cg extends fn{constructor(t=new pp){if(super(),this.isSprite=!0,this.type="Sprite",Wo===void 0){Wo=new Nn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new hw(e,5);Wo.setIndex([0,1,2,0,2,3]),Wo.setAttribute("position",new Xu(i,3,0,!1)),Wo.setAttribute("uv",new Xu(i,2,3,!1))}this.geometry=Wo,this.material=t,this.center=new Zt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xo.setFromMatrixScale(this.matrixWorld),Ry.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xo.multiplyScalar(-Yo.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Xc(Gc.set(-.5,-.5,0),Yo,o,Xo,r,s),Xc(qa.set(.5,-.5,0),Yo,o,Xo,r,s),Xc(Wc.set(.5,.5,0),Yo,o,Xo,r,s),wg.set(0,0),yh.set(1,0),Ag.set(1,1);let a=t.ray.intersectTriangle(Gc,qa,Wc,!1,Ya);if(a===null&&(Xc(qa.set(-.5,.5,0),Yo,o,Xo,r,s),yh.set(0,1),a=t.ray.intersectTriangle(Gc,Wc,qa,!1,Ya),a===null))return;const l=t.ray.origin.distanceTo(Ya);l<t.near||l>t.far||e.push({distance:l,point:Ya.clone(),uv:Hi.getInterpolation(Ya,Gc,qa,Wc,wg,yh,Ag,new Zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xc(n,t,e,i,r,s){$o.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?($a.x=s*$o.x-r*$o.y,$a.y=r*$o.x+s*$o.y):$a.copy($o),n.copy(t),n.x+=$a.x,n.y+=$a.y,n.applyMatrix4(Ry)}const Sh=new $,dw=new $,pw=new ae;class cs{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Sh.subVectors(i,e).cross(dw.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Sh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||pw.getNormalMatrix(t),r=this.coplanarPoint(Sh).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new sc,mw=new Zt(.5,.5),Yc=new $;class vm{constructor(t=new cs,e=new cs,i=new cs,r=new cs,s=new cs,o=new cs){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_r,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],E=s[13],x=s[14],w=s[15];if(r[0].setComponents(c-o,h-u,p-g,w-y).normalize(),r[1].setComponents(c+o,h+u,p+g,w+y).normalize(),r[2].setComponents(c+a,h+f,p+_,w+E).normalize(),r[3].setComponents(c-a,h-f,p-_,w-E).normalize(),i)r[4].setComponents(l,d,m,x).normalize(),r[5].setComponents(c-l,h-d,p-m,w-x).normalize();else if(r[4].setComponents(c-l,h-d,p-m,w-x).normalize(),e===_r)r[5].setComponents(c+l,h+d,p+m,w+x).normalize();else if(e===Wu)r[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(t){Gs.center.set(0,0,0);const e=mw.distanceTo(t.center);return Gs.radius=.7071067811865476+e,Gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Yc.x=r.normal.x>0?t.max.x:t.min.x,Yc.y=r.normal.y>0?t.max.y:t.min.y,Yc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mp extends To{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yu=new $,$u=new $,Rg=new ke,ja=new _f,$c=new sc,Mh=new $,Pg=new $;class Dg extends fn{constructor(t=new Nn,e=new mp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Yu.fromBufferAttribute(e,r-1),$u.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Yu.distanceTo($u);t.setAttribute("lineDistance",new hn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$c.copy(i.boundingSphere),$c.applyMatrix4(r),$c.radius+=s,t.ray.intersectsSphere($c)===!1)return;Rg.copy(r).invert(),ja.copy(t.ray).applyMatrix4(Rg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),E=qc(this,t,ja,l,p,y,_);E&&e.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=qc(this,t,ja,l,_,m,g-1);p&&e.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=c){const p=qc(this,t,ja,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=qc(this,t,ja,l,g-1,h,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qc(n,t,e,i,r,s,o){const a=n.geometry.attributes.position;if(Yu.fromBufferAttribute(a,r),$u.fromBufferAttribute(a,s),e.distanceSqToSegment(Yu,$u,Mh,Pg)>i)return;Mh.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Mh);if(!(c<t.near||c>t.far))return{distance:c,point:Pg.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class yu extends To{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lg=new ke,_p=new _f,jc=new sc,Kc=new $;class Eh extends fn{constructor(t=new Nn,e=new yu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jc.copy(i.boundingSphere),jc.applyMatrix4(r),jc.radius+=s,t.ray.intersectsSphere(jc)===!1)return;Lg.copy(r).invert(),_p.copy(t.ray).applyMatrix4(Lg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const m=c.getX(g);Kc.fromBufferAttribute(f,m),Ig(Kc,m,l,r,t,e,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)Kc.fromBufferAttribute(f,g),Ig(Kc,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ig(n,t,e,i,r,s,o){const a=_p.distanceSqToPoint(n);if(a<e){const l=new $;_p.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ug extends On{constructor(t,e,i,r,s,o,a,l,c){super(t,e,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Py extends On{constructor(t,e,i=xo,r,s,o,a=er,l=er,c,u=Kl,f=1){if(u!==Kl&&u!==Zl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Dy extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xm extends Nn{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new $,u=new Zt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const h=i+f/e*r;c.x=t*Math.cos(h),c.y=t*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new hn(o,3)),this.setAttribute("normal",new hn(a,3)),this.setAttribute("uv",new hn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xm(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _w{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,h=(o-u)/d;return(r+h)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new Zt:new $);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new $,r=[],s=[],o=[],a=new $,l=new ke;for(let h=0;h<=t;h++){const g=h/t;r[h]=this.getTangentAt(g,new $)}s[0]=new $,o[0]=new $;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(fe(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(r[h],s[h])}if(e===!0){let h=Math.acos(fe(s[0].dot(s[t]),-1,1));h/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(h=-h);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],h*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function gw(n,t){const e=1-n;return e*e*t}function vw(n,t){return 2*(1-n)*n*t}function xw(n,t){return n*n*t}function bh(n,t,e,i){return gw(n,t)+vw(n,e)+xw(n,i)}class yw extends _w{constructor(t=new $,e=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new $){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(bh(t,r.x,s.x,o.x),bh(t,r.y,s.y,o.y),bh(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gf extends Nn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=t/a,d=e/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*d-o;for(let E=0;E<c;E++){const x=E*f-s;g.push(x,-y,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const E=y+c*p,x=y+c*(p+1),w=y+1+c*(p+1),A=y+1+c*p;h.push(E,x,A),h.push(x,w,A)}this.setIndex(h),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gf(t.width,t.height,t.widthSegments,t.heightSegments)}}class qu extends Nn{constructor(t=.5,e=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=t;const d=(e-t)/r,h=new $,g=new Zt;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const p=s+m/i*o;h.x=f*Math.cos(p),h.y=f*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),g.x=(h.x/e+1)/2,g.y=(h.y/e+1)/2,u.push(g.x,g.y)}f+=d}for(let _=0;_<r;_++){const m=_*(i+1);for(let p=0;p<i;p++){const y=p+m,E=y,x=y+i+1,w=y+i+2,A=y+1;a.push(E,x,A),a.push(x,w,A)}}this.setIndex(a),this.setAttribute("position",new hn(l,3)),this.setAttribute("normal",new hn(c,3)),this.setAttribute("uv",new hn(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class sa extends Nn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new $,d=new $,h=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],E=p/i;let x=0;p===0&&o===0?x=.5/e:p===i&&l===Math.PI&&(x=-.5/e);for(let w=0;w<=e;w++){const A=w/e;f.x=-t*Math.cos(r+A*s)*Math.sin(o+E*a),f.y=t*Math.cos(o+E*a),f.z=t*Math.sin(r+A*s)*Math.sin(o+E*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-E),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const E=u[p][y+1],x=u[p][y],w=u[p+1][y],A=u[p+1][y+1];(p!==0||o>0)&&h.push(E,x,A),(p!==i-1||l<Math.PI)&&h.push(x,w,A)}this.setIndex(h),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Sw extends To{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mw extends To{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Th={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Ew{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const bw=new Ew;class ym{constructor(t){this.manager=t!==void 0?t:bw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ym.DEFAULT_MATERIAL_NAME="__DEFAULT";const qo=new WeakMap;class Tw extends ym{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Th.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let f=qo.get(o);f===void 0&&(f=[],qo.set(o,f)),f.push({onLoad:e,onError:r})}return o}const a=Jl("img");function l(){u(),e&&e(this);const f=qo.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}qo.delete(this),s.manager.itemEnd(t)}function c(f){u(),r&&r(f),Th.remove(`image:${t}`);const d=qo.get(this)||[];for(let h=0;h<d.length;h++){const g=d[h];g.onError&&g.onError(f)}qo.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Th.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}}class Og extends ym{constructor(t){super(t)}load(t,e,i,r){const s=new On,o=new Tw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class Ly extends fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const wh=new ke,Ng=new $,Fg=new $;class ww{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=yr,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vm,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ng.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ng),Fg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fg),e.updateMatrixWorld(),wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Iy extends Ay{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Aw extends ww{constructor(){super(new Iy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cw extends Ly{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Aw}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Rw extends Ly{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pw extends ki{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Bg{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Dw extends bo{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function kg(n,t,e,i){const r=Lw(i);switch(e){case my:return n*t;case gy:return n*t/r.components*r.byteLength;case pm:return n*t/r.components*r.byteLength;case vy:return n*t*2/r.components*r.byteLength;case mm:return n*t*2/r.components*r.byteLength;case _y:return n*t*3/r.components*r.byteLength;case Qi:return n*t*4/r.components*r.byteLength;case _m:return n*t*4/r.components*r.byteLength;case mu:case _u:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case gu:case vu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case kd:case Hd:return Math.max(n,16)*Math.max(t,8)/4;case Bd:case zd:return Math.max(n,8)*Math.max(t,8)/2;case Vd:case Gd:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wd:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $d:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case qd:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case jd:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Qd:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case tp:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ep:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case np:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ip:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rp:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sp:case op:case ap:return Math.ceil(n/4)*Math.ceil(t/4)*16;case lp:case cp:return Math.ceil(n/4)*Math.ceil(t/4)*8;case up:case fp:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lw(n){switch(n){case yr:case fy:return{byteLength:1,components:1};case ql:case hy:case ic:return{byteLength:2,components:1};case hm:case dm:return{byteLength:2,components:4};case xo:case fm:case zr:return{byteLength:4,components:1};case dy:case py:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:um}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=um);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uy(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Iw(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Uw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ow=`#ifdef USE_ALPHAHASH
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
#endif`,Nw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zw=`#ifdef USE_AOMAP
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
#endif`,Hw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vw=`#ifdef USE_BATCHING
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
#endif`,Gw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ww=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$w=`#ifdef USE_IRIDESCENCE
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
#endif`,qw=`#ifdef USE_BUMPMAP
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
#endif`,jw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,iA=`#define PI 3.141592653589793
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
} // validated`,rA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sA=`vec3 transformedNormal = objectNormal;
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
#endif`,oA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uA="gl_FragColor = linearToOutputTexel( gl_FragColor );",fA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hA=`#ifdef USE_ENVMAP
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
#endif`,dA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pA=`#ifdef USE_ENVMAP
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
#endif`,mA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_A=`#ifdef USE_ENVMAP
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
#endif`,gA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SA=`#ifdef USE_GRADIENTMAP
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
}`,MA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TA=`uniform bool receiveShadow;
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
#endif`,wA=`#ifdef USE_ENVMAP
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
#endif`,AA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DA=`PhysicalMaterial material;
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
#endif`,LA=`struct PhysicalMaterial {
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
}`,IA=`
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
#endif`,UA=`#if defined( RE_IndirectDiffuse )
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
#endif`,OA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GA=`#if defined( USE_POINTS_UV )
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
#endif`,WA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$A=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jA=`#ifdef USE_MORPHTARGETS
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
#endif`,KA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,QA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nC=`#ifdef USE_NORMALMAP
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
#endif`,iC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,_C=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vC=`float getShadowMask() {
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
}`,xC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yC=`#ifdef USE_SKINNING
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
#endif`,SC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MC=`#ifdef USE_SKINNING
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
#endif`,EC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wC=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AC=`#ifdef USE_TRANSMISSION
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
#endif`,CC=`#ifdef USE_TRANSMISSION
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
#endif`,RC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UC=`uniform sampler2D t2D;
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
}`,OC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kC=`#include <common>
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
}`,zC=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HC=`#define DISTANCE
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
}`,VC=`#define DISTANCE
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
}`,GC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XC=`uniform float scale;
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
}`,YC=`uniform vec3 diffuse;
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
}`,$C=`#include <common>
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
}`,qC=`uniform vec3 diffuse;
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
}`,jC=`#define LAMBERT
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
}`,KC=`#define LAMBERT
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
}`,ZC=`#define MATCAP
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
}`,JC=`#define MATCAP
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
}`,QC=`#define NORMAL
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
}`,tR=`#define NORMAL
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
}`,eR=`#define PHONG
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
}`,nR=`#define PHONG
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
}`,iR=`#define STANDARD
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
}`,rR=`#define STANDARD
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
}`,sR=`#define TOON
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
}`,oR=`#define TOON
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
}`,aR=`uniform float size;
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
}`,lR=`uniform vec3 diffuse;
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
}`,cR=`#include <common>
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
}`,uR=`uniform vec3 color;
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
}`,fR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,hR=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Uw,alphahash_pars_fragment:Ow,alphamap_fragment:Nw,alphamap_pars_fragment:Fw,alphatest_fragment:Bw,alphatest_pars_fragment:kw,aomap_fragment:zw,aomap_pars_fragment:Hw,batching_pars_vertex:Vw,batching_vertex:Gw,begin_vertex:Ww,beginnormal_vertex:Xw,bsdfs:Yw,iridescence_fragment:$w,bumpmap_pars_fragment:qw,clipping_planes_fragment:jw,clipping_planes_pars_fragment:Kw,clipping_planes_pars_vertex:Zw,clipping_planes_vertex:Jw,color_fragment:Qw,color_pars_fragment:tA,color_pars_vertex:eA,color_vertex:nA,common:iA,cube_uv_reflection_fragment:rA,defaultnormal_vertex:sA,displacementmap_pars_vertex:oA,displacementmap_vertex:aA,emissivemap_fragment:lA,emissivemap_pars_fragment:cA,colorspace_fragment:uA,colorspace_pars_fragment:fA,envmap_fragment:hA,envmap_common_pars_fragment:dA,envmap_pars_fragment:pA,envmap_pars_vertex:mA,envmap_physical_pars_fragment:wA,envmap_vertex:_A,fog_vertex:gA,fog_pars_vertex:vA,fog_fragment:xA,fog_pars_fragment:yA,gradientmap_pars_fragment:SA,lightmap_pars_fragment:MA,lights_lambert_fragment:EA,lights_lambert_pars_fragment:bA,lights_pars_begin:TA,lights_toon_fragment:AA,lights_toon_pars_fragment:CA,lights_phong_fragment:RA,lights_phong_pars_fragment:PA,lights_physical_fragment:DA,lights_physical_pars_fragment:LA,lights_fragment_begin:IA,lights_fragment_maps:UA,lights_fragment_end:OA,logdepthbuf_fragment:NA,logdepthbuf_pars_fragment:FA,logdepthbuf_pars_vertex:BA,logdepthbuf_vertex:kA,map_fragment:zA,map_pars_fragment:HA,map_particle_fragment:VA,map_particle_pars_fragment:GA,metalnessmap_fragment:WA,metalnessmap_pars_fragment:XA,morphinstance_vertex:YA,morphcolor_vertex:$A,morphnormal_vertex:qA,morphtarget_pars_vertex:jA,morphtarget_vertex:KA,normal_fragment_begin:ZA,normal_fragment_maps:JA,normal_pars_fragment:QA,normal_pars_vertex:tC,normal_vertex:eC,normalmap_pars_fragment:nC,clearcoat_normal_fragment_begin:iC,clearcoat_normal_fragment_maps:rC,clearcoat_pars_fragment:sC,iridescence_pars_fragment:oC,opaque_fragment:aC,packing:lC,premultiplied_alpha_fragment:cC,project_vertex:uC,dithering_fragment:fC,dithering_pars_fragment:hC,roughnessmap_fragment:dC,roughnessmap_pars_fragment:pC,shadowmap_pars_fragment:mC,shadowmap_pars_vertex:_C,shadowmap_vertex:gC,shadowmask_pars_fragment:vC,skinbase_vertex:xC,skinning_pars_vertex:yC,skinning_vertex:SC,skinnormal_vertex:MC,specularmap_fragment:EC,specularmap_pars_fragment:bC,tonemapping_fragment:TC,tonemapping_pars_fragment:wC,transmission_fragment:AC,transmission_pars_fragment:CC,uv_pars_fragment:RC,uv_pars_vertex:PC,uv_vertex:DC,worldpos_vertex:LC,background_vert:IC,background_frag:UC,backgroundCube_vert:OC,backgroundCube_frag:NC,cube_vert:FC,cube_frag:BC,depth_vert:kC,depth_frag:zC,distanceRGBA_vert:HC,distanceRGBA_frag:VC,equirect_vert:GC,equirect_frag:WC,linedashed_vert:XC,linedashed_frag:YC,meshbasic_vert:$C,meshbasic_frag:qC,meshlambert_vert:jC,meshlambert_frag:KC,meshmatcap_vert:ZC,meshmatcap_frag:JC,meshnormal_vert:QC,meshnormal_frag:tR,meshphong_vert:eR,meshphong_frag:nR,meshphysical_vert:iR,meshphysical_frag:rR,meshtoon_vert:sR,meshtoon_frag:oR,points_vert:aR,points_frag:lR,shadow_vert:cR,shadow_frag:uR,sprite_vert:fR,sprite_frag:hR},Dt={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},ur={basic:{uniforms:Gn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Gn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new _e(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Gn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Gn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Gn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new _e(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Gn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Gn([Dt.points,Dt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Gn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Gn([Dt.common,Dt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Gn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Gn([Dt.sprite,Dt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Gn([Dt.common,Dt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Gn([Dt.lights,Dt.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};ur.physical={uniforms:Gn([ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Zc={r:0,b:0,g:0},Ws=new qr,dR=new ke;function pR(n,t,e,i,r,s,o){const a=new _e(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1;const w=g(E);w===null?p(a,l):w&&w.isColor&&(p(w,1),x=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,x){const w=g(x);w&&(w.isCubeTexture||w.mapping===mf)?(u===void 0&&(u=new An(new oc(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:Ia(ur.backgroundCube.uniforms),vertexShader:ur.backgroundCube.vertexShader,fragmentShader:ur.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ws.copy(x.backgroundRotation),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dR.makeRotationFromEuler(Ws)),u.material.toneMapped=ye.getTransfer(w.colorSpace)!==we,(f!==w||d!==w.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,h=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new An(new gf(2,2),new Sr({name:"BackgroundMaterial",uniforms:Ia(ur.background.uniforms),vertexShader:ur.background.vertexShader,fragmentShader:ur.background.fragmentShader,side:Rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ye.getTransfer(w.colorSpace)!==we,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,d=w.version,h=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(Zc,wy(n)),i.buffers.color.setClear(Zc.r,Zc.g,Zc.b,x,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m,dispose:y}}function mR(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(b,U,I,F,W){let tt=!1;const Z=f(F,I,U);s!==Z&&(s=Z,c(s.object)),tt=h(b,F,I,W),tt&&g(b,F,I,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,x(b,U,I,F),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,U,I){const F=I.wireframe===!0;let W=i[b.id];W===void 0&&(W={},i[b.id]=W);let tt=W[U.id];tt===void 0&&(tt={},W[U.id]=tt);let Z=tt[F];return Z===void 0&&(Z=d(l()),tt[F]=Z),Z}function d(b){const U=[],I=[],F=[];for(let W=0;W<e;W++)U[W]=0,I[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:F,object:b,attributes:{},index:null}}function h(b,U,I,F){const W=s.attributes,tt=U.attributes;let Z=0;const K=I.getAttributes();for(const H in K)if(K[H].location>=0){const N=W[H];let xt=tt[H];if(xt===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor)),N===void 0||N.attribute!==xt||xt&&N.data!==xt.data)return!0;Z++}return s.attributesNum!==Z||s.index!==F}function g(b,U,I,F){const W={},tt=U.attributes;let Z=0;const K=I.getAttributes();for(const H in K)if(K[H].location>=0){let N=tt[H];N===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(N=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(N=b.instanceColor));const xt={};xt.attribute=N,N&&N.data&&(xt.data=N.data),W[H]=xt,Z++}s.attributes=W,s.attributesNum=Z,s.index=F}function _(){const b=s.newAttributes;for(let U=0,I=b.length;U<I;U++)b[U]=0}function m(b){p(b,0)}function p(b,U){const I=s.newAttributes,F=s.enabledAttributes,W=s.attributeDivisors;I[b]=1,F[b]===0&&(n.enableVertexAttribArray(b),F[b]=1),W[b]!==U&&(n.vertexAttribDivisor(b,U),W[b]=U)}function y(){const b=s.newAttributes,U=s.enabledAttributes;for(let I=0,F=U.length;I<F;I++)U[I]!==b[I]&&(n.disableVertexAttribArray(I),U[I]=0)}function E(b,U,I,F,W,tt,Z){Z===!0?n.vertexAttribIPointer(b,U,I,W,tt):n.vertexAttribPointer(b,U,I,F,W,tt)}function x(b,U,I,F){_();const W=F.attributes,tt=I.getAttributes(),Z=U.defaultAttributeValues;for(const K in tt){const H=tt[K];if(H.location>=0){let dt=W[K];if(dt===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor)),dt!==void 0){const N=dt.normalized,xt=dt.itemSize,It=t.get(dt);if(It===void 0)continue;const Qt=It.buffer,Vt=It.type,Wt=It.bytesPerElement,Y=Vt===n.INT||Vt===n.UNSIGNED_INT||dt.gpuType===fm;if(dt.isInterleavedBufferAttribute){const L=dt.data,j=L.stride,J=dt.offset;if(L.isInstancedInterleavedBuffer){for(let nt=0;nt<H.locationSize;nt++)p(H.location+nt,L.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let nt=0;nt<H.locationSize;nt++)m(H.location+nt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let nt=0;nt<H.locationSize;nt++)E(H.location+nt,xt/H.locationSize,Vt,N,j*Wt,(J+xt/H.locationSize*nt)*Wt,Y)}else{if(dt.isInstancedBufferAttribute){for(let L=0;L<H.locationSize;L++)p(H.location+L,dt.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let L=0;L<H.locationSize;L++)m(H.location+L);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let L=0;L<H.locationSize;L++)E(H.location+L,xt/H.locationSize,Vt,N,xt*Wt,xt/H.locationSize*L*Wt,Y)}}else if(Z!==void 0){const N=Z[K];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(H.location,N);break;case 3:n.vertexAttrib3fv(H.location,N);break;case 4:n.vertexAttrib4fv(H.location,N);break;default:n.vertexAttrib1fv(H.location,N)}}}}y()}function w(){O();for(const b in i){const U=i[b];for(const I in U){const F=U[I];for(const W in F)u(F[W].object),delete F[W];delete U[I]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const U=i[b.id];for(const I in U){const F=U[I];for(const W in F)u(F[W].object),delete F[W];delete U[I]}delete i[b.id]}function T(b){for(const U in i){const I=i[U];if(I[b.id]===void 0)continue;const F=I[b.id];for(const W in F)u(F[W].object),delete F[W];delete I[b.id]}}function O(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function _R(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];e.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gR(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Qi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const O=T===ic&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==yr&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==zr&&!O)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:w,maxSamples:A}}function vR(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new cs,a=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,E=y*4;let x=p.clippingState||null;l.value=x,x=u(g,d,E,h);for(let w=0;w!==E;++w)x[w]=e[w];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=h;E!==_;++E,x+=4)o.copy(f[E]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function xR(n){let t=new WeakMap;function e(o,a){return a===Ud?o.mapping=Pa:a===Od&&(o.mapping=Da),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ud||a===Od)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cw(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const oa=4,zg=[.125,.215,.35,.446,.526,.582],Qs=20,Ah=new Iy,Hg=new _e;let Ch=null,Rh=0,Ph=0,Dh=!1;const Ks=(1+Math.sqrt(5))/2,jo=1/Ks,Vg=[new $(-Ks,jo,0),new $(Ks,jo,0),new $(-jo,0,Ks),new $(jo,0,Ks),new $(0,Ks,-jo),new $(0,Ks,jo),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],yR=new $;class Gg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=yR}=s;Ch=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ch,Rh,Ph),this._renderer.xr.enabled=Dh,t.scissorTest=!1,Jc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pa||t.mapping===Da?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ch=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:mr,minFilter:mr,generateMipmaps:!1,type:ic,format:Qi,colorSpace:La,depthBuffer:!1},r=Wg(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wg(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SR(s)),this._blurMaterial=MR(s,t,e)}return r}_compileMaterial(t){const e=new An(this._lodPlanes[0],t);this._renderer.compile(e,Ah)}_sceneToCubeUV(t,e,i,r,s){const l=new ki(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Hg),f.toneMapping=Ms,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new Al({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),m=new An(new oc,_);let p=!1;const y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,p=!0):(_.color.copy(Hg),p=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const w=this._cubeSize;Jc(r,x*w,E>2?w:0,w,w),f.setRenderTarget(r),p&&f.render(m,l),f.render(t,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=d,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Pa||t.mapping===Da;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Jc(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ah)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vg[(r-s-1)%Vg.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Qs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Qs;m>Qs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qs}`);const p=[];let y=0;for(let T=0;T<Qs;++T){const O=T/_,S=Math.exp(-O*O/2);p.push(S),T===0?y+=S:T<m&&(y+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const x=this._sizeLods[r],w=3*x*(r>E-oa?r-E+oa:0),A=4*(this._cubeSize-x);Jc(e,w,A,3*x,2*x),l.setRenderTarget(e),l.render(f,Ah)}}function SR(n){const t=[],e=[],i=[];let r=n;const s=n-oa+1+zg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-oa?l=zg[o-n+oa-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*h),E=new Float32Array(m*g*h),x=new Float32Array(p*g*h);for(let A=0;A<h;A++){const T=A%3*2/3-1,O=A>2?0:-1,S=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];y.set(S,_*g*A),E.set(d,m*g*A);const b=[A,A,A,A,A,A];x.set(b,p*g*A)}const w=new Nn;w.setAttribute("position",new nr(y,_)),w.setAttribute("uv",new nr(E,m)),w.setAttribute("faceIndex",new nr(x,p)),t.push(w),r>oa&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Wg(n,t,e){const i=new So(n,t,e);return i.texture.mapping=mf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jc(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function MR(n,t,e){const i=new Float32Array(Qs),r=new $(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sm(),fragmentShader:`

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
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function Xg(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sm(),fragmentShader:`

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
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function Yg(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function Sm(){return`

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
	`}function ER(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ud||l===Od,u=l===Pa||l===Da;if(c||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Gg(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(e===null&&(e=new Gg(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function bR(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Ql("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TR(n,t,e,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(t.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)t.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const y=h.array;_=h.version;for(let E=0,x=y.length;E<x;E+=3){const w=y[E+0],A=y[E+1],T=y[E+2];d.push(w,A,A,T,T,w)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,x=y.length/3-1;E<x;E+=3){const w=E+0,A=E+1,T=E+2;d.push(w,A,A,T,T,w)}}else return;const m=new(yy(d)?Ty:by)(d,1);m.version=_;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function wR(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),e.update(h,i,1)}function c(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,d*o,g),e.update(h,i,g))}function u(d,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];e.update(m,i,1)}function f(d,h,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=h[y]*_[y];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function AR(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function CR(n,t,e){const i=new WeakMap,r=new qe;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let b=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var h=b;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let w=a.attributes.position.count*x,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const T=new Float32Array(w*A*4*f),O=new Sy(T,w,A,f);O.type=zr,O.needsUpdate=!0;const S=x*4;for(let U=0;U<f;U++){const I=p[U],F=y[U],W=E[U],tt=w*A*4*U;for(let Z=0;Z<I.count;Z++){const K=Z*S;g===!0&&(r.fromBufferAttribute(I,Z),T[tt+K+0]=r.x,T[tt+K+1]=r.y,T[tt+K+2]=r.z,T[tt+K+3]=0),_===!0&&(r.fromBufferAttribute(F,Z),T[tt+K+4]=r.x,T[tt+K+5]=r.y,T[tt+K+6]=r.z,T[tt+K+7]=0),m===!0&&(r.fromBufferAttribute(W,Z),T[tt+K+8]=r.x,T[tt+K+9]=r.y,T[tt+K+10]=r.z,T[tt+K+11]=W.itemSize===4?r.w:1)}}d={count:f,texture:O,size:new Zt(w,A)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function RR(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Oy=new On,$g=new Py(1,1),Ny=new Sy,Fy=new YT,By=new Cy,qg=[],jg=[],Kg=new Float32Array(16),Zg=new Float32Array(9),Jg=new Float32Array(4);function Ua(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=qg[r];if(s===void 0&&(s=new Float32Array(r),qg[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function dn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function pn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function vf(n,t){let e=jg[t];e===void 0&&(e=new Int32Array(t),jg[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function PR(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function DR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2fv(this.addr,t),pn(e,t)}}function LR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;n.uniform3fv(this.addr,t),pn(e,t)}}function IR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4fv(this.addr,t),pn(e,t)}}function UR(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,i))return;Jg.set(i),n.uniformMatrix2fv(this.addr,!1,Jg),pn(e,i)}}function OR(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,i))return;Zg.set(i),n.uniformMatrix3fv(this.addr,!1,Zg),pn(e,i)}}function NR(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,i))return;Kg.set(i),n.uniformMatrix4fv(this.addr,!1,Kg),pn(e,i)}}function FR(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function BR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2iv(this.addr,t),pn(e,t)}}function kR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;n.uniform3iv(this.addr,t),pn(e,t)}}function zR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4iv(this.addr,t),pn(e,t)}}function HR(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function VR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2uiv(this.addr,t),pn(e,t)}}function GR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;n.uniform3uiv(this.addr,t),pn(e,t)}}function WR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4uiv(this.addr,t),pn(e,t)}}function XR(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?($g.compareFunction=xy,s=$g):s=Oy,e.setTexture2D(t||s,r)}function YR(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Fy,r)}function $R(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||By,r)}function qR(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Ny,r)}function jR(n){switch(n){case 5126:return PR;case 35664:return DR;case 35665:return LR;case 35666:return IR;case 35674:return UR;case 35675:return OR;case 35676:return NR;case 5124:case 35670:return FR;case 35667:case 35671:return BR;case 35668:case 35672:return kR;case 35669:case 35673:return zR;case 5125:return HR;case 36294:return VR;case 36295:return GR;case 36296:return WR;case 35678:case 36198:case 36298:case 36306:case 35682:return XR;case 35679:case 36299:case 36307:return YR;case 35680:case 36300:case 36308:case 36293:return $R;case 36289:case 36303:case 36311:case 36292:return qR}}function KR(n,t){n.uniform1fv(this.addr,t)}function ZR(n,t){const e=Ua(t,this.size,2);n.uniform2fv(this.addr,e)}function JR(n,t){const e=Ua(t,this.size,3);n.uniform3fv(this.addr,e)}function QR(n,t){const e=Ua(t,this.size,4);n.uniform4fv(this.addr,e)}function tP(n,t){const e=Ua(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function eP(n,t){const e=Ua(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function nP(n,t){const e=Ua(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function iP(n,t){n.uniform1iv(this.addr,t)}function rP(n,t){n.uniform2iv(this.addr,t)}function sP(n,t){n.uniform3iv(this.addr,t)}function oP(n,t){n.uniform4iv(this.addr,t)}function aP(n,t){n.uniform1uiv(this.addr,t)}function lP(n,t){n.uniform2uiv(this.addr,t)}function cP(n,t){n.uniform3uiv(this.addr,t)}function uP(n,t){n.uniform4uiv(this.addr,t)}function fP(n,t,e){const i=this.cache,r=t.length,s=vf(e,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Oy,s[o])}function hP(n,t,e){const i=this.cache,r=t.length,s=vf(e,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Fy,s[o])}function dP(n,t,e){const i=this.cache,r=t.length,s=vf(e,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||By,s[o])}function pP(n,t,e){const i=this.cache,r=t.length,s=vf(e,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Ny,s[o])}function mP(n){switch(n){case 5126:return KR;case 35664:return ZR;case 35665:return JR;case 35666:return QR;case 35674:return tP;case 35675:return eP;case 35676:return nP;case 5124:case 35670:return iP;case 35667:case 35671:return rP;case 35668:case 35672:return sP;case 35669:case 35673:return oP;case 5125:return aP;case 36294:return lP;case 36295:return cP;case 36296:return uP;case 35678:case 36198:case 36298:case 36306:case 35682:return fP;case 35679:case 36299:case 36307:return hP;case 35680:case 36300:case 36308:case 36293:return dP;case 36289:case 36303:case 36311:case 36292:return pP}}class _P{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=jR(e.type)}}class gP{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mP(e.type)}}class vP{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function Qg(n,t){n.seq.push(t),n.map[t.id]=t}function xP(n,t,e){const i=n.name,r=i.length;for(Lh.lastIndex=0;;){const s=Lh.exec(i),o=Lh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Qg(e,c===void 0?new _P(a,n,t):new gP(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new vP(a),Qg(e,f)),e=f}}}class Su{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);xP(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function t0(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const yP=37297;let SP=0;function MP(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const e0=new ae;function EP(n){ye._getMatrix(e0,ye.workingColorSpace,n);const t=`mat3( ${e0.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(n)){case Gu:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function n0(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+MP(n.getShaderSource(t),a)}else return s}function bP(n,t){const e=EP(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function TP(n,t){let e;switch(t){case vT:e="Linear";break;case xT:e="Reinhard";break;case yT:e="Cineon";break;case ST:e="ACESFilmic";break;case ET:e="AgX";break;case bT:e="Neutral";break;case MT:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qc=new $;function wP(){ye.getLuminanceCoefficients(Qc);const n=Qc.x.toFixed(4),t=Qc.y.toFixed(4),e=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function CP(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function RP(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function rl(n){return n!==""}function i0(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function r0(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const PP=/^[ \t]*#include +<([\w\d./]+)>/gm;function gp(n){return n.replace(PP,LP)}const DP=new Map;function LP(n,t){let e=ce[t];if(e===void 0){const i=DP.get(t);if(i!==void 0)e=ce[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return gp(e)}const IP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function s0(n){return n.replace(IP,UP)}function UP(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function o0(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function OP(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ly?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zb?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Dr&&(t="SHADOWMAP_TYPE_VSM"),t}function NP(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pa:case Da:t="ENVMAP_TYPE_CUBE";break;case mf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function FP(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Da:t="ENVMAP_MODE_REFRACTION";break}return t}function BP(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cy:t="ENVMAP_BLENDING_MULTIPLY";break;case _T:t="ENVMAP_BLENDING_MIX";break;case gT:t="ENVMAP_BLENDING_ADD";break}return t}function kP(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function zP(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=OP(e),c=NP(e),u=FP(e),f=BP(e),d=kP(e),h=AP(e),g=CP(s),_=r.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rl).join(`
`),p.length>0&&(p+=`
`)):(m=[o0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),p=[o0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ms?"#define TONE_MAPPING":"",e.toneMapping!==Ms?ce.tonemapping_pars_fragment:"",e.toneMapping!==Ms?TP("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,bP("linearToOutputTexel",e.outputColorSpace),wP(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rl).join(`
`)),o=gp(o),o=i0(o,e),o=r0(o,e),a=gp(a),a=i0(a,e),a=r0(a,e),o=s0(o),a=s0(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===lg?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+o,x=y+p+a,w=t0(r,r.VERTEX_SHADER,E),A=t0(r,r.FRAGMENT_SHADER,x);r.attachShader(_,w),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(U){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(_)||"",F=r.getShaderInfoLog(w)||"",W=r.getShaderInfoLog(A)||"",tt=I.trim(),Z=F.trim(),K=W.trim();let H=!0,dt=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,w,A);else{const N=n0(r,w,"vertex"),xt=n0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+tt+`
`+N+`
`+xt)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(Z===""||K==="")&&(dt=!1);dt&&(U.diagnostics={runnable:H,programLog:tt,vertexShader:{log:Z,prefix:m},fragmentShader:{log:K,prefix:p}})}r.deleteShader(w),r.deleteShader(A),O=new Su(r,_),S=RP(r,_)}let O;this.getUniforms=function(){return O===void 0&&T(this),O};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,yP)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=SP++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}let HP=0;class VP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new GP(t),e.set(t,i)),i}}class GP{constructor(t){this.id=HP++,this.code=t,this.usedTimes=0}}function WP(n,t,e,i,r,s,o){const a=new My,l=new VP,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,U,I,F){const W=I.fog,tt=F.geometry,Z=S.isMeshStandardMaterial?I.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||Z),H=K&&K.mapping===mf?K.image.height:null,dt=g[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const N=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,xt=N!==void 0?N.length:0;let It=0;tt.morphAttributes.position!==void 0&&(It=1),tt.morphAttributes.normal!==void 0&&(It=2),tt.morphAttributes.color!==void 0&&(It=3);let Qt,Vt,Wt,Y;if(dt){const Lt=ur[dt];Qt=Lt.vertexShader,Vt=Lt.fragmentShader}else Qt=S.vertexShader,Vt=S.fragmentShader,l.update(S),Wt=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);const L=n.getRenderTarget(),j=n.state.buffers.depth.getReversed(),J=F.isInstancedMesh===!0,nt=F.isBatchedMesh===!0,ut=!!S.map,D=!!S.matcap,v=!!K,B=!!S.aoMap,V=!!S.lightMap,q=!!S.bumpMap,P=!!S.normalMap,ct=!!S.displacementMap,it=!!S.emissiveMap,lt=!!S.metalnessMap,at=!!S.roughnessMap,yt=S.anisotropy>0,C=S.clearcoat>0,M=S.dispersion>0,z=S.iridescence>0,et=S.sheen>0,st=S.transmission>0,Q=yt&&!!S.anisotropyMap,bt=C&&!!S.clearcoatMap,mt=C&&!!S.clearcoatNormalMap,Ct=C&&!!S.clearcoatRoughnessMap,Mt=z&&!!S.iridescenceMap,gt=z&&!!S.iridescenceThicknessMap,Tt=et&&!!S.sheenColorMap,Ut=et&&!!S.sheenRoughnessMap,Rt=!!S.specularMap,Et=!!S.specularColorMap,qt=!!S.specularIntensityMap,k=st&&!!S.transmissionMap,vt=st&&!!S.thicknessMap,St=!!S.gradientMap,Pt=!!S.alphaMap,_t=S.alphaTest>0,ht=!!S.alphaHash,Nt=!!S.extensions;let Yt=Ms;S.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Yt=n.toneMapping);const ve={shaderID:dt,shaderType:S.type,shaderName:S.name,vertexShader:Qt,fragmentShader:Vt,defines:S.defines,customVertexShaderID:Wt,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:nt,batchingColor:nt&&F._colorsTexture!==null,instancing:J,instancingColor:J&&F.instanceColor!==null,instancingMorph:J&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:L===null?n.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:La,alphaToCoverage:!!S.alphaToCoverage,map:ut,matcap:D,envMap:v,envMapMode:v&&K.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:V,bumpMap:q,normalMap:P,displacementMap:d&&ct,emissiveMap:it,normalMapObjectSpace:P&&S.normalMapType===RT,normalMapTangentSpace:P&&S.normalMapType===CT,metalnessMap:lt,roughnessMap:at,anisotropy:yt,anisotropyMap:Q,clearcoat:C,clearcoatMap:bt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Ct,dispersion:M,iridescence:z,iridescenceMap:Mt,iridescenceThicknessMap:gt,sheen:et,sheenColorMap:Tt,sheenRoughnessMap:Ut,specularMap:Rt,specularColorMap:Et,specularIntensityMap:qt,transmission:st,transmissionMap:k,thicknessMap:vt,gradientMap:St,opaque:S.transparent===!1&&S.blending===po&&S.alphaToCoverage===!1,alphaMap:Pt,alphaTest:_t,alphaHash:ht,combine:S.combine,mapUv:ut&&_(S.map.channel),aoMapUv:B&&_(S.aoMap.channel),lightMapUv:V&&_(S.lightMap.channel),bumpMapUv:q&&_(S.bumpMap.channel),normalMapUv:P&&_(S.normalMap.channel),displacementMapUv:ct&&_(S.displacementMap.channel),emissiveMapUv:it&&_(S.emissiveMap.channel),metalnessMapUv:lt&&_(S.metalnessMap.channel),roughnessMapUv:at&&_(S.roughnessMap.channel),anisotropyMapUv:Q&&_(S.anisotropyMap.channel),clearcoatMapUv:bt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:mt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(S.sheenRoughnessMap.channel),specularMapUv:Rt&&_(S.specularMap.channel),specularColorMapUv:Et&&_(S.specularColorMap.channel),specularIntensityMapUv:qt&&_(S.specularIntensityMap.channel),transmissionMapUv:k&&_(S.transmissionMap.channel),thicknessMapUv:vt&&_(S.thicknessMap.channel),alphaMapUv:Pt&&_(S.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(P||yt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!tt.attributes.uv&&(ut||Pt),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:j,skinning:F.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:It,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:ut&&S.map.isVideoTexture===!0&&ye.getTransfer(S.map.colorSpace)===we,decodeVideoTextureEmissive:it&&S.emissiveMap.isVideoTexture===!0&&ye.getTransfer(S.emissiveMap.colorSpace)===we,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ji,flipSided:S.side===li,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Nt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&S.extensions.multiDraw===!0||nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)b.push(U),b.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(y(b,S),E(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function E(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const b=g[S.type];let U;if(b){const I=ur[b];U=sw.clone(I.uniforms)}else U=S.uniforms;return U}function w(S,b){let U;for(let I=0,F=u.length;I<F;I++){const W=u[I];if(W.cacheKey===b){U=W,++U.usedTimes;break}}return U===void 0&&(U=new zP(n,b,S,s),u.push(U)),U}function A(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:O}}function XP(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function YP(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function a0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function l0(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,d,h,g,_,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):e.push(p)}function l(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||YP),i.length>1&&i.sort(d||a0),r.length>1&&r.sort(d||a0)}function u(){for(let f=t,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function $P(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new l0,n.set(i,[o])):r>=s.length?(o=new l0,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function qP(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new _e};break;case"SpotLight":e={position:new $,direction:new $,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new _e,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":e={color:new _e,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function jP(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let KP=0;function ZP(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function JP(n){const t=new qP,e=jP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new ke,o=new ke;function a(c){let u=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,y=0,E=0,x=0,w=0,A=0,T=0;c.sort(ZP);for(let S=0,b=c.length;S<b;S++){const U=c[S],I=U.color,F=U.intensity,W=U.distance,tt=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=I.r*F,f+=I.g*F,d+=I.b*F;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(U.sh.coefficients[Z],F);T++}else if(U.isDirectionalLight){const Z=t.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const K=U.shadow,H=e.get(U);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=tt,i.directionalShadowMatrix[h]=U.shadow.matrix,y++}i.directional[h]=Z,h++}else if(U.isSpotLight){const Z=t.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy(I).multiplyScalar(F),Z.distance=W,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,i.spot[_]=Z;const K=U.shadow;if(U.map&&(i.spotLightMap[w]=U.map,w++,K.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[_]=K.matrix,U.castShadow){const H=e.get(U);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=tt,x++}_++}else if(U.isRectAreaLight){const Z=t.get(U);Z.color.copy(I).multiplyScalar(F),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=Z,m++}else if(U.isPointLight){const Z=t.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){const K=U.shadow,H=e.get(U);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=tt,i.pointShadowMatrix[g]=U.shadow.matrix,E++}i.point[g]=Z,g++}else if(U.isHemisphereLight){const Z=t.get(U);Z.skyColor.copy(U.color).multiplyScalar(F),Z.groundColor.copy(U.groundColor).multiplyScalar(F),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==h||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==y||O.numPointShadows!==E||O.numSpotShadows!==x||O.numSpotMaps!==w||O.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,O.directionalLength=h,O.pointLength=g,O.spotLength=_,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=y,O.numPointShadows=E,O.numSpotShadows=x,O.numSpotMaps=w,O.numLightProbes=T,i.version=KP++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const E=c[p];if(E.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function c0(n){const t=new JP(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function QP(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new c0(n),t.set(r,[a])):s>=o.length?(a=new c0(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const t2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e2=`uniform sampler2D shadow_pass;
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
}`;function n2(n,t,e){let i=new vm;const r=new Zt,s=new Zt,o=new qe,a=new Sw({depthPacking:AT}),l=new Mw,c={},u=e.maxTextureSize,f={[Rs]:li,[li]:Rs,[Ji]:Ji},d=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:t2,fragmentShader:e2}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Nn;g.setAttribute("position",new nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new An(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ly;let p=this.type;this.render=function(A,T,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),b=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Ss),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==Dr&&this.type===Dr,W=p===Dr&&this.type!==Dr;for(let tt=0,Z=A.length;tt<Z;tt++){const K=A[tt],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const dt=H.getFrameExtents();if(r.multiply(dt),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/dt.x),r.x=s.x*dt.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/dt.y),r.y=s.y*dt.y,H.mapSize.y=s.y)),H.map===null||F===!0||W===!0){const xt=this.type!==Dr?{minFilter:er,magFilter:er}:{};H.map!==null&&H.map.dispose(),H.map=new So(r.x,r.y,xt),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const N=H.getViewportCount();for(let xt=0;xt<N;xt++){const It=H.getViewport(xt);o.set(s.x*It.x,s.y*It.y,s.x*It.z,s.y*It.w),I.viewport(o),H.updateMatrices(K,xt),i=H.getFrustum(),x(T,O,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Dr&&y(H,O),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,b,U)};function y(A,T){const O=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new So(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,O,d,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,O,h,_,null)}function E(A,T,O,S){let b=null;const U=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)b=U;else if(b=O.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const I=b.uuid,F=T.uuid;let W=c[I];W===void 0&&(W={},c[I]=W);let tt=W[F];tt===void 0&&(tt=b.clone(),W[F]=tt,T.addEventListener("dispose",w)),b=tt}if(b.visible=T.visible,b.wireframe=T.wireframe,S===Dr?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:f[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=n.properties.get(b);I.light=O}return b}function x(A,T,O,S,b){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Dr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);const F=t.update(A),W=A.material;if(Array.isArray(W)){const tt=F.groups;for(let Z=0,K=tt.length;Z<K;Z++){const H=tt[Z],dt=W[H.materialIndex];if(dt&&dt.visible){const N=E(A,dt,S,b);A.onBeforeShadow(n,A,T,O,F,N,H),n.renderBufferDirect(O,null,F,N,A,H),A.onAfterShadow(n,A,T,O,F,N,H)}}}else if(W.visible){const tt=E(A,W,S,b);A.onBeforeShadow(n,A,T,O,F,tt,null),n.renderBufferDirect(O,null,F,tt,A,null),A.onAfterShadow(n,A,T,O,F,tt,null)}}const I=A.children;for(let F=0,W=I.length;F<W;F++)x(I[F],T,O,S,b)}function w(A){A.target.removeEventListener("dispose",w);for(const O in c){const S=c[O],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const i2={[Ad]:Cd,[Rd]:Ld,[Pd]:Id,[Ra]:Dd,[Cd]:Ad,[Ld]:Rd,[Id]:Pd,[Dd]:Ra};function r2(n,t){function e(){let k=!1;const vt=new qe;let St=null;const Pt=new qe(0,0,0,0);return{setMask:function(_t){St!==_t&&!k&&(n.colorMask(_t,_t,_t,_t),St=_t)},setLocked:function(_t){k=_t},setClear:function(_t,ht,Nt,Yt,ve){ve===!0&&(_t*=Yt,ht*=Yt,Nt*=Yt),vt.set(_t,ht,Nt,Yt),Pt.equals(vt)===!1&&(n.clearColor(_t,ht,Nt,Yt),Pt.copy(vt))},reset:function(){k=!1,St=null,Pt.set(-1,0,0,0)}}}function i(){let k=!1,vt=!1,St=null,Pt=null,_t=null;return{setReversed:function(ht){if(vt!==ht){const Nt=t.get("EXT_clip_control");ht?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),vt=ht;const Yt=_t;_t=null,this.setClear(Yt)}},getReversed:function(){return vt},setTest:function(ht){ht?L(n.DEPTH_TEST):j(n.DEPTH_TEST)},setMask:function(ht){St!==ht&&!k&&(n.depthMask(ht),St=ht)},setFunc:function(ht){if(vt&&(ht=i2[ht]),Pt!==ht){switch(ht){case Ad:n.depthFunc(n.NEVER);break;case Cd:n.depthFunc(n.ALWAYS);break;case Rd:n.depthFunc(n.LESS);break;case Ra:n.depthFunc(n.LEQUAL);break;case Pd:n.depthFunc(n.EQUAL);break;case Dd:n.depthFunc(n.GEQUAL);break;case Ld:n.depthFunc(n.GREATER);break;case Id:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pt=ht}},setLocked:function(ht){k=ht},setClear:function(ht){_t!==ht&&(vt&&(ht=1-ht),n.clearDepth(ht),_t=ht)},reset:function(){k=!1,St=null,Pt=null,_t=null,vt=!1}}}function r(){let k=!1,vt=null,St=null,Pt=null,_t=null,ht=null,Nt=null,Yt=null,ve=null;return{setTest:function(Lt){k||(Lt?L(n.STENCIL_TEST):j(n.STENCIL_TEST))},setMask:function(Lt){vt!==Lt&&!k&&(n.stencilMask(Lt),vt=Lt)},setFunc:function(Lt,kt,re){(St!==Lt||Pt!==kt||_t!==re)&&(n.stencilFunc(Lt,kt,re),St=Lt,Pt=kt,_t=re)},setOp:function(Lt,kt,re){(ht!==Lt||Nt!==kt||Yt!==re)&&(n.stencilOp(Lt,kt,re),ht=Lt,Nt=kt,Yt=re)},setLocked:function(Lt){k=Lt},setClear:function(Lt){ve!==Lt&&(n.clearStencil(Lt),ve=Lt)},reset:function(){k=!1,vt=null,St=null,Pt=null,_t=null,ht=null,Nt=null,Yt=null,ve=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,E=null,x=null,w=null,A=null,T=new _e(0,0,0),O=0,S=!1,b=null,U=null,I=null,F=null,W=null;const tt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,K=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),Z=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Z=K>=2);let dt=null,N={};const xt=n.getParameter(n.SCISSOR_BOX),It=n.getParameter(n.VIEWPORT),Qt=new qe().fromArray(xt),Vt=new qe().fromArray(It);function Wt(k,vt,St,Pt){const _t=new Uint8Array(4),ht=n.createTexture();n.bindTexture(k,ht),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<St;Nt++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,Pt,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(vt+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return ht}const Y={};Y[n.TEXTURE_2D]=Wt(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Wt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Wt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Wt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),L(n.DEPTH_TEST),o.setFunc(Ra),q(!1),P(rg),L(n.CULL_FACE),B(Ss);function L(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function j(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function J(k,vt){return f[k]!==vt?(n.bindFramebuffer(k,vt),f[k]=vt,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=vt),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function nt(k,vt){let St=h,Pt=!1;if(k){St=d.get(vt),St===void 0&&(St=[],d.set(vt,St));const _t=k.textures;if(St.length!==_t.length||St[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Nt=_t.length;ht<Nt;ht++)St[ht]=n.COLOR_ATTACHMENT0+ht;St.length=_t.length,Pt=!0}}else St[0]!==n.BACK&&(St[0]=n.BACK,Pt=!0);Pt&&n.drawBuffers(St)}function ut(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const D={[Js]:n.FUNC_ADD,[Qb]:n.FUNC_SUBTRACT,[tT]:n.FUNC_REVERSE_SUBTRACT};D[eT]=n.MIN,D[nT]=n.MAX;const v={[iT]:n.ZERO,[rT]:n.ONE,[sT]:n.SRC_COLOR,[Td]:n.SRC_ALPHA,[fT]:n.SRC_ALPHA_SATURATE,[cT]:n.DST_COLOR,[aT]:n.DST_ALPHA,[oT]:n.ONE_MINUS_SRC_COLOR,[wd]:n.ONE_MINUS_SRC_ALPHA,[uT]:n.ONE_MINUS_DST_COLOR,[lT]:n.ONE_MINUS_DST_ALPHA,[hT]:n.CONSTANT_COLOR,[dT]:n.ONE_MINUS_CONSTANT_COLOR,[pT]:n.CONSTANT_ALPHA,[mT]:n.ONE_MINUS_CONSTANT_ALPHA};function B(k,vt,St,Pt,_t,ht,Nt,Yt,ve,Lt){if(k===Ss){_===!0&&(j(n.BLEND),_=!1);return}if(_===!1&&(L(n.BLEND),_=!0),k!==Jb){if(k!==m||Lt!==S){if((p!==Js||x!==Js)&&(n.blendEquation(n.FUNC_ADD),p=Js,x=Js),Lt)switch(k){case po:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vu:n.blendFunc(n.ONE,n.ONE);break;case sg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case og:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case po:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case sg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case og:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,E=null,w=null,A=null,T.set(0,0,0),O=0,m=k,S=Lt}return}_t=_t||vt,ht=ht||St,Nt=Nt||Pt,(vt!==p||_t!==x)&&(n.blendEquationSeparate(D[vt],D[_t]),p=vt,x=_t),(St!==y||Pt!==E||ht!==w||Nt!==A)&&(n.blendFuncSeparate(v[St],v[Pt],v[ht],v[Nt]),y=St,E=Pt,w=ht,A=Nt),(Yt.equals(T)===!1||ve!==O)&&(n.blendColor(Yt.r,Yt.g,Yt.b,ve),T.copy(Yt),O=ve),m=k,S=!1}function V(k,vt){k.side===Ji?j(n.CULL_FACE):L(n.CULL_FACE);let St=k.side===li;vt&&(St=!St),q(St),k.blending===po&&k.transparent===!1?B(Ss):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const Pt=k.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),it(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?L(n.SAMPLE_ALPHA_TO_COVERAGE):j(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(k){b!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),b=k)}function P(k){k!==jb?(L(n.CULL_FACE),k!==U&&(k===rg?n.cullFace(n.BACK):k===Kb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):j(n.CULL_FACE),U=k}function ct(k){k!==I&&(Z&&n.lineWidth(k),I=k)}function it(k,vt,St){k?(L(n.POLYGON_OFFSET_FILL),(F!==vt||W!==St)&&(n.polygonOffset(vt,St),F=vt,W=St)):j(n.POLYGON_OFFSET_FILL)}function lt(k){k?L(n.SCISSOR_TEST):j(n.SCISSOR_TEST)}function at(k){k===void 0&&(k=n.TEXTURE0+tt-1),dt!==k&&(n.activeTexture(k),dt=k)}function yt(k,vt,St){St===void 0&&(dt===null?St=n.TEXTURE0+tt-1:St=dt);let Pt=N[St];Pt===void 0&&(Pt={type:void 0,texture:void 0},N[St]=Pt),(Pt.type!==k||Pt.texture!==vt)&&(dt!==St&&(n.activeTexture(St),dt=St),n.bindTexture(k,vt||Y[k]),Pt.type=k,Pt.texture=vt)}function C(){const k=N[dt];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(k){Qt.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Qt.copy(k))}function Ut(k){Vt.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Vt.copy(k))}function Rt(k,vt){let St=c.get(vt);St===void 0&&(St=new WeakMap,c.set(vt,St));let Pt=St.get(k);Pt===void 0&&(Pt=n.getUniformBlockIndex(vt,k.name),St.set(k,Pt))}function Et(k,vt){const Pt=c.get(vt).get(k);l.get(vt)!==Pt&&(n.uniformBlockBinding(vt,Pt,k.__bindingPointIndex),l.set(vt,Pt))}function qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},dt=null,N={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,E=null,x=null,w=null,A=null,T=new _e(0,0,0),O=0,S=!1,b=null,U=null,I=null,F=null,W=null,Qt.set(0,0,n.canvas.width,n.canvas.height),Vt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:L,disable:j,bindFramebuffer:J,drawBuffers:nt,useProgram:ut,setBlending:B,setMaterial:V,setFlipSided:q,setCullFace:P,setLineWidth:ct,setPolygonOffset:it,setScissorTest:lt,activeTexture:at,bindTexture:yt,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:Mt,texImage3D:gt,updateUBOMapping:Rt,uniformBlockBinding:Et,texStorage2D:mt,texStorage3D:Ct,texSubImage2D:et,texSubImage3D:st,compressedTexSubImage2D:Q,compressedTexSubImage3D:bt,scissor:Tt,viewport:Ut,reset:qt}}function s2(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return h?new OffscreenCanvas(C,M):Jl("canvas")}function _(C,M,z){let et=1;const st=yt(C);if((st.width>z||st.height>z)&&(et=z/Math.max(st.width,st.height)),et<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(et*st.width),bt=Math.floor(et*st.height);f===void 0&&(f=g(Q,bt));const mt=M?g(Q,bt):f;return mt.width=Q,mt.height=bt,mt.getContext("2d").drawImage(C,0,0,Q,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Q+"x"+bt+")."),mt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(C,M,z,et,st=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=M;if(M===n.RED&&(z===n.FLOAT&&(Q=n.R32F),z===n.HALF_FLOAT&&(Q=n.R16F),z===n.UNSIGNED_BYTE&&(Q=n.R8)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.R8UI),z===n.UNSIGNED_SHORT&&(Q=n.R16UI),z===n.UNSIGNED_INT&&(Q=n.R32UI),z===n.BYTE&&(Q=n.R8I),z===n.SHORT&&(Q=n.R16I),z===n.INT&&(Q=n.R32I)),M===n.RG&&(z===n.FLOAT&&(Q=n.RG32F),z===n.HALF_FLOAT&&(Q=n.RG16F),z===n.UNSIGNED_BYTE&&(Q=n.RG8)),M===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RG8UI),z===n.UNSIGNED_SHORT&&(Q=n.RG16UI),z===n.UNSIGNED_INT&&(Q=n.RG32UI),z===n.BYTE&&(Q=n.RG8I),z===n.SHORT&&(Q=n.RG16I),z===n.INT&&(Q=n.RG32I)),M===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),z===n.UNSIGNED_INT&&(Q=n.RGB32UI),z===n.BYTE&&(Q=n.RGB8I),z===n.SHORT&&(Q=n.RGB16I),z===n.INT&&(Q=n.RGB32I)),M===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),z===n.UNSIGNED_INT&&(Q=n.RGBA32UI),z===n.BYTE&&(Q=n.RGBA8I),z===n.SHORT&&(Q=n.RGBA16I),z===n.INT&&(Q=n.RGBA32I)),M===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),M===n.RGBA){const bt=st?Gu:ye.getTransfer(et);z===n.FLOAT&&(Q=n.RGBA32F),z===n.HALF_FLOAT&&(Q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Q=bt===we?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(C,M){let z;return C?M===null||M===xo||M===jl?z=n.DEPTH24_STENCIL8:M===zr?z=n.DEPTH32F_STENCIL8:M===ql&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===xo||M===jl?z=n.DEPTH_COMPONENT24:M===zr?z=n.DEPTH_COMPONENT32F:M===ql&&(z=n.DEPTH_COMPONENT16),z}function w(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==er&&C.minFilter!==mr?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),O(M),M.isVideoTexture&&u.delete(M)}function T(C){const M=C.target;M.removeEventListener("dispose",T),b(M)}function O(C){const M=i.get(C);if(M.__webglInit===void 0)return;const z=C.source,et=d.get(z);if(et){const st=et[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&S(C),Object.keys(et).length===0&&d.delete(z)}i.remove(C)}function S(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const z=C.source,et=d.get(z);delete et[M.__cacheKey],o.memory.textures--}function b(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(M.__webglFramebuffer[et]))for(let st=0;st<M.__webglFramebuffer[et].length;st++)n.deleteFramebuffer(M.__webglFramebuffer[et][st]);else n.deleteFramebuffer(M.__webglFramebuffer[et]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[et])}else{if(Array.isArray(M.__webglFramebuffer))for(let et=0;et<M.__webglFramebuffer.length;et++)n.deleteFramebuffer(M.__webglFramebuffer[et]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let et=0;et<M.__webglColorRenderbuffer.length;et++)M.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[et]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=C.textures;for(let et=0,st=z.length;et<st;et++){const Q=i.get(z[et]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(z[et])}i.remove(C)}let U=0;function I(){U=0}function F(){const C=U;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),U+=1,C}function W(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function tt(C,M){const z=i.get(C);if(C.isVideoTexture&&lt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const et=C.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,C,M);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function Z(C,M){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Y(z,C,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function K(C,M){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Y(z,C,M);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function H(C,M){const z=i.get(C);if(C.version>0&&z.__version!==C.version){L(z,C,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}const dt={[Nd]:n.REPEAT,[no]:n.CLAMP_TO_EDGE,[Fd]:n.MIRRORED_REPEAT},N={[er]:n.NEAREST,[TT]:n.NEAREST_MIPMAP_NEAREST,[wc]:n.NEAREST_MIPMAP_LINEAR,[mr]:n.LINEAR,[Zf]:n.LINEAR_MIPMAP_NEAREST,[io]:n.LINEAR_MIPMAP_LINEAR},xt={[PT]:n.NEVER,[NT]:n.ALWAYS,[DT]:n.LESS,[xy]:n.LEQUAL,[LT]:n.EQUAL,[OT]:n.GEQUAL,[IT]:n.GREATER,[UT]:n.NOTEQUAL};function It(C,M){if(M.type===zr&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===mr||M.magFilter===Zf||M.magFilter===wc||M.magFilter===io||M.minFilter===mr||M.minFilter===Zf||M.minFilter===wc||M.minFilter===io)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,dt[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,dt[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,dt[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,N[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,N[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,xt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===er||M.minFilter!==wc&&M.minFilter!==io||M.type===zr&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Qt(C,M){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const et=M.source;let st=d.get(et);st===void 0&&(st={},d.set(et,st));const Q=W(M);if(Q!==C.__cacheKey){st[Q]===void 0&&(st[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),st[Q].usedTimes++;const bt=st[C.__cacheKey];bt!==void 0&&(st[C.__cacheKey].usedTimes--,bt.usedTimes===0&&S(M)),C.__cacheKey=Q,C.__webglTexture=st[Q].texture}return z}function Vt(C,M,z){return Math.floor(Math.floor(C/z)/M)}function Wt(C,M,z,et){const Q=C.updateRanges;if(Q.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,z,et,M.data);else{Q.sort((gt,Tt)=>gt.start-Tt.start);let bt=0;for(let gt=1;gt<Q.length;gt++){const Tt=Q[bt],Ut=Q[gt],Rt=Tt.start+Tt.count,Et=Vt(Ut.start,M.width,4),qt=Vt(Tt.start,M.width,4);Ut.start<=Rt+1&&Et===qt&&Vt(Ut.start+Ut.count-1,M.width,4)===Et?Tt.count=Math.max(Tt.count,Ut.start+Ut.count-Tt.start):(++bt,Q[bt]=Ut)}Q.length=bt+1;const mt=n.getParameter(n.UNPACK_ROW_LENGTH),Ct=n.getParameter(n.UNPACK_SKIP_PIXELS),Mt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let gt=0,Tt=Q.length;gt<Tt;gt++){const Ut=Q[gt],Rt=Math.floor(Ut.start/4),Et=Math.ceil(Ut.count/4),qt=Rt%M.width,k=Math.floor(Rt/M.width),vt=Et,St=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,qt),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),e.texSubImage2D(n.TEXTURE_2D,0,qt,k,vt,St,z,et,M.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,mt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ct),n.pixelStorei(n.UNPACK_SKIP_ROWS,Mt)}}function Y(C,M,z){let et=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=n.TEXTURE_3D);const st=Qt(C,M),Q=M.source;e.bindTexture(et,C.__webglTexture,n.TEXTURE0+z);const bt=i.get(Q);if(Q.version!==bt.__version||st===!0){e.activeTexture(n.TEXTURE0+z);const mt=ye.getPrimaries(ye.workingColorSpace),Ct=M.colorSpace===us?null:ye.getPrimaries(M.colorSpace),Mt=M.colorSpace===us||mt===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let gt=_(M.image,!1,r.maxTextureSize);gt=at(M,gt);const Tt=s.convert(M.format,M.colorSpace),Ut=s.convert(M.type);let Rt=E(M.internalFormat,Tt,Ut,M.colorSpace,M.isVideoTexture);It(et,M);let Et;const qt=M.mipmaps,k=M.isVideoTexture!==!0,vt=bt.__version===void 0||st===!0,St=Q.dataReady,Pt=w(M,gt);if(M.isDepthTexture)Rt=x(M.format===Zl,M.type),vt&&(k?e.texStorage2D(n.TEXTURE_2D,1,Rt,gt.width,gt.height):e.texImage2D(n.TEXTURE_2D,0,Rt,gt.width,gt.height,0,Tt,Ut,null));else if(M.isDataTexture)if(qt.length>0){k&&vt&&e.texStorage2D(n.TEXTURE_2D,Pt,Rt,qt[0].width,qt[0].height);for(let _t=0,ht=qt.length;_t<ht;_t++)Et=qt[_t],k?St&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Et.width,Et.height,Tt,Ut,Et.data):e.texImage2D(n.TEXTURE_2D,_t,Rt,Et.width,Et.height,0,Tt,Ut,Et.data);M.generateMipmaps=!1}else k?(vt&&e.texStorage2D(n.TEXTURE_2D,Pt,Rt,gt.width,gt.height),St&&Wt(M,gt,Tt,Ut)):e.texImage2D(n.TEXTURE_2D,0,Rt,gt.width,gt.height,0,Tt,Ut,gt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){k&&vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Rt,qt[0].width,qt[0].height,gt.depth);for(let _t=0,ht=qt.length;_t<ht;_t++)if(Et=qt[_t],M.format!==Qi)if(Tt!==null)if(k){if(St)if(M.layerUpdates.size>0){const Nt=kg(Et.width,Et.height,M.format,M.type);for(const Yt of M.layerUpdates){const ve=Et.data.subarray(Yt*Nt/Et.data.BYTES_PER_ELEMENT,(Yt+1)*Nt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,Yt,Et.width,Et.height,1,Tt,ve)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,0,Et.width,Et.height,gt.depth,Tt,Et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_t,Rt,Et.width,Et.height,gt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?St&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,0,Et.width,Et.height,gt.depth,Tt,Ut,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,_t,Rt,Et.width,Et.height,gt.depth,0,Tt,Ut,Et.data)}else{k&&vt&&e.texStorage2D(n.TEXTURE_2D,Pt,Rt,qt[0].width,qt[0].height);for(let _t=0,ht=qt.length;_t<ht;_t++)Et=qt[_t],M.format!==Qi?Tt!==null?k?St&&e.compressedTexSubImage2D(n.TEXTURE_2D,_t,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,_t,Rt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?St&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Et.width,Et.height,Tt,Ut,Et.data):e.texImage2D(n.TEXTURE_2D,_t,Rt,Et.width,Et.height,0,Tt,Ut,Et.data)}else if(M.isDataArrayTexture)if(k){if(vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Rt,gt.width,gt.height,gt.depth),St)if(M.layerUpdates.size>0){const _t=kg(gt.width,gt.height,M.format,M.type);for(const ht of M.layerUpdates){const Nt=gt.data.subarray(ht*_t/gt.data.BYTES_PER_ELEMENT,(ht+1)*_t/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ht,gt.width,gt.height,1,Tt,Ut,Nt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Tt,Ut,gt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,gt.width,gt.height,gt.depth,0,Tt,Ut,gt.data);else if(M.isData3DTexture)k?(vt&&e.texStorage3D(n.TEXTURE_3D,Pt,Rt,gt.width,gt.height,gt.depth),St&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Tt,Ut,gt.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,gt.width,gt.height,gt.depth,0,Tt,Ut,gt.data);else if(M.isFramebufferTexture){if(vt)if(k)e.texStorage2D(n.TEXTURE_2D,Pt,Rt,gt.width,gt.height);else{let _t=gt.width,ht=gt.height;for(let Nt=0;Nt<Pt;Nt++)e.texImage2D(n.TEXTURE_2D,Nt,Rt,_t,ht,0,Tt,Ut,null),_t>>=1,ht>>=1}}else if(qt.length>0){if(k&&vt){const _t=yt(qt[0]);e.texStorage2D(n.TEXTURE_2D,Pt,Rt,_t.width,_t.height)}for(let _t=0,ht=qt.length;_t<ht;_t++)Et=qt[_t],k?St&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Tt,Ut,Et):e.texImage2D(n.TEXTURE_2D,_t,Rt,Tt,Ut,Et);M.generateMipmaps=!1}else if(k){if(vt){const _t=yt(gt);e.texStorage2D(n.TEXTURE_2D,Pt,Rt,_t.width,_t.height)}St&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,Ut,gt)}else e.texImage2D(n.TEXTURE_2D,0,Rt,Tt,Ut,gt);m(M)&&p(et),bt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function L(C,M,z){if(M.image.length!==6)return;const et=Qt(C,M),st=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);const Q=i.get(st);if(st.version!==Q.__version||et===!0){e.activeTexture(n.TEXTURE0+z);const bt=ye.getPrimaries(ye.workingColorSpace),mt=M.colorSpace===us?null:ye.getPrimaries(M.colorSpace),Ct=M.colorSpace===us||bt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Mt=M.isCompressedTexture||M.image[0].isCompressedTexture,gt=M.image[0]&&M.image[0].isDataTexture,Tt=[];for(let ht=0;ht<6;ht++)!Mt&&!gt?Tt[ht]=_(M.image[ht],!0,r.maxCubemapSize):Tt[ht]=gt?M.image[ht].image:M.image[ht],Tt[ht]=at(M,Tt[ht]);const Ut=Tt[0],Rt=s.convert(M.format,M.colorSpace),Et=s.convert(M.type),qt=E(M.internalFormat,Rt,Et,M.colorSpace),k=M.isVideoTexture!==!0,vt=Q.__version===void 0||et===!0,St=st.dataReady;let Pt=w(M,Ut);It(n.TEXTURE_CUBE_MAP,M);let _t;if(Mt){k&&vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,qt,Ut.width,Ut.height);for(let ht=0;ht<6;ht++){_t=Tt[ht].mipmaps;for(let Nt=0;Nt<_t.length;Nt++){const Yt=_t[Nt];M.format!==Qi?Rt!==null?k?St&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt,0,0,Yt.width,Yt.height,Rt,Yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt,qt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt,0,0,Yt.width,Yt.height,Rt,Et,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt,qt,Yt.width,Yt.height,0,Rt,Et,Yt.data)}}}else{if(_t=M.mipmaps,k&&vt){_t.length>0&&Pt++;const ht=yt(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,qt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(gt){k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Tt[ht].width,Tt[ht].height,Rt,Et,Tt[ht].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,qt,Tt[ht].width,Tt[ht].height,0,Rt,Et,Tt[ht].data);for(let Nt=0;Nt<_t.length;Nt++){const ve=_t[Nt].image[ht].image;k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt+1,0,0,ve.width,ve.height,Rt,Et,ve.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt+1,qt,ve.width,ve.height,0,Rt,Et,ve.data)}}else{k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Rt,Et,Tt[ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,qt,Rt,Et,Tt[ht]);for(let Nt=0;Nt<_t.length;Nt++){const Yt=_t[Nt];k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt+1,0,0,Rt,Et,Yt.image[ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt+1,qt,Rt,Et,Yt.image[ht])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),Q.__version=st.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function j(C,M,z,et,st,Q){const bt=s.convert(z.format,z.colorSpace),mt=s.convert(z.type),Ct=E(z.internalFormat,bt,mt,z.colorSpace),Mt=i.get(M),gt=i.get(z);if(gt.__renderTarget=M,!Mt.__hasExternalTextures){const Tt=Math.max(1,M.width>>Q),Ut=Math.max(1,M.height>>Q);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,Q,Ct,Tt,Ut,M.depth,0,bt,mt,null):e.texImage2D(st,Q,Ct,Tt,Ut,0,bt,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),it(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,st,gt.__webglTexture,0,ct(M)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,st,gt.__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function J(C,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){const et=M.depthTexture,st=et&&et.isDepthTexture?et.type:null,Q=x(M.stencilBuffer,st),bt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=ct(M);it(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt,Q,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,Q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,C)}else{const et=M.textures;for(let st=0;st<et.length;st++){const Q=et[st],bt=s.convert(Q.format,Q.colorSpace),mt=s.convert(Q.type),Ct=E(Q.internalFormat,bt,mt,Q.colorSpace),Mt=ct(M);z&&it(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,Ct,M.width,M.height):it(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,Ct,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ct,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function nt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(M.depthTexture);et.__renderTarget=M,(!et.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),tt(M.depthTexture,0);const st=et.__webglTexture,Q=ct(M);if(M.depthTexture.format===Kl)it(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,st,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,st,0);else if(M.depthTexture.format===Zl)it(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,st,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function ut(C){const M=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const et=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),et){const st=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,et.removeEventListener("dispose",st)};et.addEventListener("dispose",st),M.__depthDisposeCallback=st}M.__boundDepthTexture=et}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const et=C.texture.mipmaps;et&&et.length>0?nt(M.__webglFramebuffer[0],C):nt(M.__webglFramebuffer,C)}else if(z){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]===void 0)M.__webglDepthbuffer[et]=n.createRenderbuffer(),J(M.__webglDepthbuffer[et],C,!1);else{const st=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,Q)}}else{const et=C.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),J(M.__webglDepthbuffer,C,!1);else{const st=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,Q)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function D(C,M,z){const et=i.get(C);M!==void 0&&j(et.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ut(C)}function v(C){const M=C.texture,z=i.get(C),et=i.get(M);C.addEventListener("dispose",T);const st=C.textures,Q=C.isWebGLCubeRenderTarget===!0,bt=st.length>1;if(bt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=M.version,o.memory.textures++),Q){z.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[mt]=[];for(let Ct=0;Ct<M.mipmaps.length;Ct++)z.__webglFramebuffer[mt][Ct]=n.createFramebuffer()}else z.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let mt=0;mt<M.mipmaps.length;mt++)z.__webglFramebuffer[mt]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(bt)for(let mt=0,Ct=st.length;mt<Ct;mt++){const Mt=i.get(st[mt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&it(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let mt=0;mt<st.length;mt++){const Ct=st[mt];z.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[mt]);const Mt=s.convert(Ct.format,Ct.colorSpace),gt=s.convert(Ct.type),Tt=E(Ct.internalFormat,Mt,gt,Ct.colorSpace,C.isXRRenderTarget===!0),Ut=ct(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,Tt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,z.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),J(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),It(n.TEXTURE_CUBE_MAP,M);for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ct=0;Ct<M.mipmaps.length;Ct++)j(z.__webglFramebuffer[mt][Ct],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct);else j(z.__webglFramebuffer[mt],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(M)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let mt=0,Ct=st.length;mt<Ct;mt++){const Mt=st[mt],gt=i.get(Mt);let Tt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Tt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Tt,gt.__webglTexture),It(Tt,Mt),j(z.__webglFramebuffer,C,Mt,n.COLOR_ATTACHMENT0+mt,Tt,0),m(Mt)&&p(Tt)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,et.__webglTexture),It(mt,M),M.mipmaps&&M.mipmaps.length>0)for(let Ct=0;Ct<M.mipmaps.length;Ct++)j(z.__webglFramebuffer[Ct],C,M,n.COLOR_ATTACHMENT0,mt,Ct);else j(z.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,mt,0);m(M)&&p(mt),e.unbindTexture()}C.depthBuffer&&ut(C)}function B(C){const M=C.textures;for(let z=0,et=M.length;z<et;z++){const st=M[z];if(m(st)){const Q=y(C),bt=i.get(st).__webglTexture;e.bindTexture(Q,bt),p(Q),e.unbindTexture()}}}const V=[],q=[];function P(C){if(C.samples>0){if(it(C)===!1){const M=C.textures,z=C.width,et=C.height;let st=n.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(C),mt=M.length>1;if(mt)for(let Mt=0;Mt<M.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const Ct=C.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Mt=0;Mt<M.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Mt]);const gt=i.get(M[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,z,et,0,0,z,et,st,n.NEAREST),l===!0&&(V.length=0,q.length=0,V.push(n.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(V.push(Q),q.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let Mt=0;Mt<M.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Mt]);const gt=i.get(M[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ct(C){return Math.min(r.maxSamples,C.samples)}function it(C){const M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function lt(C){const M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function at(C,M){const z=C.colorSpace,et=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==La&&z!==us&&(ye.getTransfer(z)===we?(et!==Qi||st!==yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function yt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=tt,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=D,this.setupRenderTarget=v,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=j,this.useMultisampledRTT=it}function o2(n,t){function e(i,r=us){let s;const o=ye.getTransfer(r);if(i===yr)return n.UNSIGNED_BYTE;if(i===hm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dy)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===py)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===fy)return n.BYTE;if(i===hy)return n.SHORT;if(i===ql)return n.UNSIGNED_SHORT;if(i===fm)return n.INT;if(i===xo)return n.UNSIGNED_INT;if(i===zr)return n.FLOAT;if(i===ic)return n.HALF_FLOAT;if(i===my)return n.ALPHA;if(i===_y)return n.RGB;if(i===Qi)return n.RGBA;if(i===Kl)return n.DEPTH_COMPONENT;if(i===Zl)return n.DEPTH_STENCIL;if(i===gy)return n.RED;if(i===pm)return n.RED_INTEGER;if(i===vy)return n.RG;if(i===mm)return n.RG_INTEGER;if(i===_m)return n.RGBA_INTEGER;if(i===mu||i===_u||i===gu||i===vu)if(o===we)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bd||i===kd||i===zd||i===Hd)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vd||i===Gd||i===Wd)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vd||i===Gd)return o===we?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wd)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xd||i===Yd||i===$d||i===qd||i===jd||i===Kd||i===Zd||i===Jd||i===Qd||i===tp||i===ep||i===np||i===ip||i===rp)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xd)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yd)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$d)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qd)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jd)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kd)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zd)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jd)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qd)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tp)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ep)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===np)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ip)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rp)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sp||i===op||i===ap)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===sp)return o===we?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===op)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ap)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lp||i===cp||i===up||i===fp)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===lp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===up)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const a2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l2=`
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

}`;class c2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Dy(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Sr({vertexShader:a2,fragmentShader:l2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new An(new gf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u2 extends bo{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new c2,p={},y=e.getContextAttributes();let E=null,x=null;const w=[],A=[],T=new Zt;let O=null;const S=new ki;S.viewport=new qe;const b=new ki;b.viewport=new qe;const U=[S,b],I=new Pw;let F=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let L=w[Y];return L===void 0&&(L=new xh,w[Y]=L),L.getTargetRaySpace()},this.getControllerGrip=function(Y){let L=w[Y];return L===void 0&&(L=new xh,w[Y]=L),L.getGripSpace()},this.getHand=function(Y){let L=w[Y];return L===void 0&&(L=new xh,w[Y]=L),L.getHandSpace()};function tt(Y){const L=A.indexOf(Y.inputSource);if(L===-1)return;const j=w[L];j!==void 0&&(j.update(Y.inputSource,Y.frame,c||o),j.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Z(){r.removeEventListener("select",tt),r.removeEventListener("selectstart",tt),r.removeEventListener("selectend",tt),r.removeEventListener("squeeze",tt),r.removeEventListener("squeezestart",tt),r.removeEventListener("squeezeend",tt),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",K);for(let Y=0;Y<w.length;Y++){const L=A[Y];L!==null&&(A[Y]=null,w[Y].disconnect(L))}F=null,W=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(E),h=null,d=null,f=null,r=null,x=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(O),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(E=t.getRenderTarget(),r.addEventListener("select",tt),r.addEventListener("selectstart",tt),r.addEventListener("selectend",tt),r.addEventListener("squeeze",tt),r.addEventListener("squeezestart",tt),r.addEventListener("squeezeend",tt),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,J=null,nt=null;y.depth&&(nt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=y.stencil?Zl:Kl,J=y.stencil?jl:xo);const ut={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(ut),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new So(d.textureWidth,d.textureHeight,{format:Qi,type:yr,depthTexture:new Py(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const j={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new So(h.framebufferWidth,h.framebufferHeight,{format:Qi,type:yr,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Wt.setContext(r),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Y){for(let L=0;L<Y.removed.length;L++){const j=Y.removed[L],J=A.indexOf(j);J>=0&&(A[J]=null,w[J].disconnect(j))}for(let L=0;L<Y.added.length;L++){const j=Y.added[L];let J=A.indexOf(j);if(J===-1){for(let ut=0;ut<w.length;ut++)if(ut>=A.length){A.push(j),J=ut;break}else if(A[ut]===null){A[ut]=j,J=ut;break}if(J===-1)break}const nt=w[J];nt&&nt.connect(j)}}const H=new $,dt=new $;function N(Y,L,j){H.setFromMatrixPosition(L.matrixWorld),dt.setFromMatrixPosition(j.matrixWorld);const J=H.distanceTo(dt),nt=L.projectionMatrix.elements,ut=j.projectionMatrix.elements,D=nt[14]/(nt[10]-1),v=nt[14]/(nt[10]+1),B=(nt[9]+1)/nt[5],V=(nt[9]-1)/nt[5],q=(nt[8]-1)/nt[0],P=(ut[8]+1)/ut[0],ct=D*q,it=D*P,lt=J/(-q+P),at=lt*-q;if(L.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(at),Y.translateZ(lt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),nt[10]===-1)Y.projectionMatrix.copy(L.projectionMatrix),Y.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{const yt=D+lt,C=v+lt,M=ct-at,z=it+(J-at),et=B*v/C*yt,st=V*v/C*yt;Y.projectionMatrix.makePerspective(M,z,et,st,yt,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function xt(Y,L){L===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(L.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let L=Y.near,j=Y.far;m.texture!==null&&(m.depthNear>0&&(L=m.depthNear),m.depthFar>0&&(j=m.depthFar)),I.near=b.near=S.near=L,I.far=b.far=S.far=j,(F!==I.near||W!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,W=I.far),I.layers.mask=Y.layers.mask|6,S.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;const J=Y.parent,nt=I.cameras;xt(I,J);for(let ut=0;ut<nt.length;ut++)xt(nt[ut],J);nt.length===2?N(I,S,b):I.projectionMatrix.copy(S.projectionMatrix),It(Y,I,J)};function It(Y,L,j){j===null?Y.matrix.copy(L.matrixWorld):(Y.matrix.copy(j.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(L.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(L.projectionMatrix),Y.projectionMatrixInverse.copy(L.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=dp*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Y){return p[Y]};let Qt=null;function Vt(Y,L){if(u=L.getViewerPose(c||o),g=L,u!==null){const j=u.views;h!==null&&(t.setRenderTargetFramebuffer(x,h.framebuffer),t.setRenderTarget(x));let J=!1;j.length!==I.cameras.length&&(I.cameras.length=0,J=!0);for(let v=0;v<j.length;v++){const B=j[v];let V=null;if(h!==null)V=h.getViewport(B);else{const P=f.getViewSubImage(d,B);V=P.viewport,v===0&&(t.setRenderTargetTextures(x,P.colorTexture,P.depthStencilTexture),t.setRenderTarget(x))}let q=U[v];q===void 0&&(q=new ki,q.layers.enable(v),q.viewport=new qe,U[v]=q),q.matrix.fromArray(B.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(B.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(V.x,V.y,V.width,V.height),v===0&&(I.matrix.copy(q.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),J===!0&&I.cameras.push(q)}const nt=r.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const v=f.getDepthInformation(j[0]);v&&v.isValid&&v.texture&&m.init(v,r.renderState)}if(nt&&nt.includes("camera-access")&&_){t.state.unbindTexture(),f=i.getBinding();for(let v=0;v<j.length;v++){const B=j[v].camera;if(B){let V=p[B];V||(V=new Dy,p[B]=V);const q=f.getCameraImage(B);V.sourceTexture=q}}}}for(let j=0;j<w.length;j++){const J=A[j],nt=w[j];J!==null&&nt!==void 0&&nt.update(J,L,c||o)}Qt&&Qt(Y,L),L.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:L}),g=null}const Wt=new Uy;Wt.setAnimationLoop(Vt),this.setAnimationLoop=function(Y){Qt=Y},this.dispose=function(){}}}const Xs=new qr,f2=new ke;function h2(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,wy(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===li&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===li&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),E=y.envMap,x=y.envMapRotation;E&&(m.envMap.value=E,Xs.copy(x),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),m.envMapRotation.value.setFromMatrix4(f2.makeRotationFromEuler(Xs)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===li&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function d2(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const x=E.program;i.uniformBlockBinding(y,x)}function c(y,E){let x=r[y.id];x===void 0&&(g(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",m));const w=E.program;i.updateUBOMapping(y,w);const A=t.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function u(y){const E=f();y.__bindingPointIndex=E;const x=n.createBuffer(),w=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,w,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=r[y.id],x=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,T=x.length;A<T;A++){const O=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,b=O.length;S<b;S++){const U=O[S];if(h(U,A,S,w)===!0){const I=U.__offset,F=Array.isArray(U.value)?U.value:[U.value];let W=0;for(let tt=0;tt<F.length;tt++){const Z=F[tt],K=_(Z);typeof Z=="number"||typeof Z=="boolean"?(U.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,I+W,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=0,U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=0,U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=0):(Z.toArray(U.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,E,x,w){const A=y.value,T=E+"_"+x;if(w[T]===void 0)return typeof A=="number"||typeof A=="boolean"?w[T]=A:w[T]=A.clone(),!0;{const O=w[T];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return w[T]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(y){const E=y.uniforms;let x=0;const w=16;for(let T=0,O=E.length;T<O;T++){const S=Array.isArray(E[T])?E[T]:[E[T]];for(let b=0,U=S.length;b<U;b++){const I=S[b],F=Array.isArray(I.value)?I.value:[I.value];for(let W=0,tt=F.length;W<tt;W++){const Z=F[W],K=_(Z),H=x%w,dt=H%K.boundary,N=H+dt;x+=dt,N!==0&&w-N<K.storage&&(x+=w-N),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=K.storage}}}const A=x%w;return A>0&&(x+=w-A),y.__size=x,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class p2{constructor(t={}){const{canvas:e=kT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ms,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let w=!1;this._outputColorSpace=Ni;let A=0,T=0,O=null,S=-1,b=null;const U=new qe,I=new qe;let F=null;const W=new _e(0);let tt=0,Z=e.width,K=e.height,H=1,dt=null,N=null;const xt=new qe(0,0,Z,K),It=new qe(0,0,Z,K);let Qt=!1;const Vt=new vm;let Wt=!1,Y=!1;const L=new ke,j=new $,J=new qe,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function D(){return O===null?H:1}let v=i;function B(R,G){return e.getContext(R,G)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${um}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),v===null){const G="webgl2";if(v=B(G,R),v===null)throw B(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let V,q,P,ct,it,lt,at,yt,C,M,z,et,st,Q,bt,mt,Ct,Mt,gt,Tt,Ut,Rt,Et,qt;function k(){V=new bR(v),V.init(),Rt=new o2(v,V),q=new gR(v,V,t,Rt),P=new r2(v,V),q.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),ct=new AR(v),it=new XP,lt=new s2(v,V,P,it,q,Rt,ct),at=new xR(x),yt=new ER(x),C=new Iw(v),Et=new mR(v,C),M=new TR(v,C,ct,Et),z=new RR(v,M,C,ct),gt=new CR(v,q,lt),mt=new vR(it),et=new WP(x,at,yt,V,q,Et,mt),st=new h2(x,it),Q=new $P,bt=new QP(V),Mt=new pR(x,at,yt,P,z,h,l),Ct=new n2(x,z,q),qt=new d2(v,ct,q,P),Tt=new _R(v,V,ct),Ut=new wR(v,V,ct),ct.programs=et.programs,x.capabilities=q,x.extensions=V,x.properties=it,x.renderLists=Q,x.shadowMap=Ct,x.state=P,x.info=ct}k();const vt=new u2(x,v);this.xr=vt,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const R=V.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=V.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(Z,K,!1))},this.getSize=function(R){return R.set(Z,K)},this.setSize=function(R,G,rt=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,K=G,e.width=Math.floor(R*H),e.height=Math.floor(G*H),rt===!0&&(e.style.width=R+"px",e.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(Z*H,K*H).floor()},this.setDrawingBufferSize=function(R,G,rt){Z=R,K=G,H=rt,e.width=Math.floor(R*rt),e.height=Math.floor(G*rt),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(xt)},this.setViewport=function(R,G,rt,ot){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,G,rt,ot),P.viewport(U.copy(xt).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(It)},this.setScissor=function(R,G,rt,ot){R.isVector4?It.set(R.x,R.y,R.z,R.w):It.set(R,G,rt,ot),P.scissor(I.copy(It).multiplyScalar(H).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(R){P.setScissorTest(Qt=R)},this.setOpaqueSort=function(R){dt=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,rt=!0){let ot=0;if(R){let X=!1;if(O!==null){const pt=O.texture.format;X=pt===_m||pt===mm||pt===pm}if(X){const pt=O.texture.type,wt=pt===yr||pt===xo||pt===ql||pt===jl||pt===hm||pt===dm,Ft=Mt.getClearColor(),Ot=Mt.getClearAlpha(),Xt=Ft.r,Ht=Ft.g,zt=Ft.b;wt?(g[0]=Xt,g[1]=Ht,g[2]=zt,g[3]=Ot,v.clearBufferuiv(v.COLOR,0,g)):(_[0]=Xt,_[1]=Ht,_[2]=zt,_[3]=Ot,v.clearBufferiv(v.COLOR,0,_))}else ot|=v.COLOR_BUFFER_BIT}G&&(ot|=v.DEPTH_BUFFER_BIT),rt&&(ot|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Mt.dispose(),Q.dispose(),bt.dispose(),it.dispose(),at.dispose(),yt.dispose(),z.dispose(),Et.dispose(),qt.dispose(),et.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",re),vt.removeEventListener("sessionend",At),jt.stop()};function St(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=ct.autoReset,G=Ct.enabled,rt=Ct.autoUpdate,ot=Ct.needsUpdate,X=Ct.type;k(),ct.autoReset=R,Ct.enabled=G,Ct.autoUpdate=rt,Ct.needsUpdate=ot,Ct.type=X}function _t(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ht(R){const G=R.target;G.removeEventListener("dispose",ht),Nt(G)}function Nt(R){Yt(R),it.remove(R)}function Yt(R){const G=it.get(R).programs;G!==void 0&&(G.forEach(function(rt){et.releaseProgram(rt)}),R.isShaderMaterial&&et.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,rt,ot,X,pt){G===null&&(G=nt);const wt=X.isMesh&&X.matrixWorld.determinant()<0,Ft=Te(R,G,rt,ot,X);P.setMaterial(ot,wt);let Ot=rt.index,Xt=1;if(ot.wireframe===!0){if(Ot=M.getWireframeAttribute(rt),Ot===void 0)return;Xt=2}const Ht=rt.drawRange,zt=rt.attributes.position;let oe=Ht.start*Xt,me=(Ht.start+Ht.count)*Xt;pt!==null&&(oe=Math.max(oe,pt.start*Xt),me=Math.min(me,(pt.start+pt.count)*Xt)),Ot!==null?(oe=Math.max(oe,0),me=Math.min(me,Ot.count)):zt!=null&&(oe=Math.max(oe,0),me=Math.min(me,zt.count));const $e=me-oe;if($e<0||$e===1/0)return;Et.setup(X,ot,Ft,rt,Ot);let Be,Pe=Tt;if(Ot!==null&&(Be=C.get(Ot),Pe=Ut,Pe.setIndex(Be)),X.isMesh)ot.wireframe===!0?(P.setLineWidth(ot.wireframeLinewidth*D()),Pe.setMode(v.LINES)):Pe.setMode(v.TRIANGLES);else if(X.isLine){let Kt=ot.linewidth;Kt===void 0&&(Kt=1),P.setLineWidth(Kt*D()),X.isLineSegments?Pe.setMode(v.LINES):X.isLineLoop?Pe.setMode(v.LINE_LOOP):Pe.setMode(v.LINE_STRIP)}else X.isPoints?Pe.setMode(v.POINTS):X.isSprite&&Pe.setMode(v.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ql("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))Pe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Kt=X._multiDrawStarts,Ge=X._multiDrawCounts,xe=X._multiDrawCount,fi=Ot?C.get(Ot).bytesPerElement:1,wo=it.get(ot).currentProgram.getUniforms();for(let hi=0;hi<xe;hi++)wo.setValue(v,"_gl_DrawID",hi),Pe.render(Kt[hi]/fi,Ge[hi])}else if(X.isInstancedMesh)Pe.renderInstances(oe,$e,X.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ge=Math.min(rt.instanceCount,Kt);Pe.renderInstances(oe,$e,Ge)}else Pe.render(oe,$e)};function ve(R,G,rt){R.transparent===!0&&R.side===Ji&&R.forceSinglePass===!1?(R.side=li,R.needsUpdate=!0,Je(R,G,rt),R.side=Rs,R.needsUpdate=!0,Je(R,G,rt),R.side=Ji):Je(R,G,rt)}this.compile=function(R,G,rt=null){rt===null&&(rt=R),p=bt.get(rt),p.init(G),E.push(p),rt.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),R!==rt&&R.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const ot=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const pt=X.material;if(pt)if(Array.isArray(pt))for(let wt=0;wt<pt.length;wt++){const Ft=pt[wt];ve(Ft,rt,X),ot.add(Ft)}else ve(pt,rt,X),ot.add(pt)}),p=E.pop(),ot},this.compileAsync=function(R,G,rt=null){const ot=this.compile(R,G,rt);return new Promise(X=>{function pt(){if(ot.forEach(function(wt){it.get(wt).currentProgram.isReady()&&ot.delete(wt)}),ot.size===0){X(R);return}setTimeout(pt,10)}V.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Lt=null;function kt(R){Lt&&Lt(R)}function re(){jt.stop()}function At(){jt.start()}const jt=new Uy;jt.setAnimationLoop(kt),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(R){Lt=R,vt.setAnimationLoop(R),R===null?jt.stop():jt.start()},vt.addEventListener("sessionstart",re),vt.addEventListener("sessionend",At),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(G),G=vt.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,G,O),p=bt.get(R,E.length),p.init(G),E.push(p),L.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Vt.setFromProjectionMatrix(L,_r,G.reversedDepth),Y=this.localClippingEnabled,Wt=mt.init(this.clippingPlanes,Y),m=Q.get(R,y.length),m.init(),y.push(m),vt.enabled===!0&&vt.isPresenting===!0){const pt=x.xr.getDepthSensingMesh();pt!==null&&Gt(pt,G,-1/0,x.sortObjects)}Gt(R,G,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(dt,N),ut=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,ut&&Mt.addToRenderList(m,R),this.info.render.frame++,Wt===!0&&mt.beginShadows();const rt=p.state.shadowsArray;Ct.render(rt,R,G),Wt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=m.opaque,X=m.transmissive;if(p.setupLights(),G.isArrayCamera){const pt=G.cameras;if(X.length>0)for(let wt=0,Ft=pt.length;wt<Ft;wt++){const Ot=pt[wt];Ze(ot,X,R,Ot)}ut&&Mt.render(R);for(let wt=0,Ft=pt.length;wt<Ft;wt++){const Ot=pt[wt];ee(m,R,Ot,Ot.viewport)}}else X.length>0&&Ze(ot,X,R,G),ut&&Mt.render(R),ee(m,R,G);O!==null&&T===0&&(lt.updateMultisampleRenderTarget(O),lt.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(x,R,G),Et.resetDefaultState(),S=-1,b=null,E.pop(),E.length>0?(p=E[E.length-1],Wt===!0&&mt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Gt(R,G,rt,ot){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){ot&&J.setFromMatrixPosition(R.matrixWorld).applyMatrix4(L);const wt=z.update(R),Ft=R.material;Ft.visible&&m.push(R,wt,Ft,rt,J.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const wt=z.update(R),Ft=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),J.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),J.copy(wt.boundingSphere.center)),J.applyMatrix4(R.matrixWorld).applyMatrix4(L)),Array.isArray(Ft)){const Ot=wt.groups;for(let Xt=0,Ht=Ot.length;Xt<Ht;Xt++){const zt=Ot[Xt],oe=Ft[zt.materialIndex];oe&&oe.visible&&m.push(R,wt,oe,rt,J.z,zt)}}else Ft.visible&&m.push(R,wt,Ft,rt,J.z,null)}}const pt=R.children;for(let wt=0,Ft=pt.length;wt<Ft;wt++)Gt(pt[wt],G,rt,ot)}function ee(R,G,rt,ot){const X=R.opaque,pt=R.transmissive,wt=R.transparent;p.setupLightsView(rt),Wt===!0&&mt.setGlobalState(x.clippingPlanes,rt),ot&&P.viewport(U.copy(ot)),X.length>0&&le(X,G,rt),pt.length>0&&le(pt,G,rt),wt.length>0&&le(wt,G,rt),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Ze(R,G,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ot.id]===void 0&&(p.state.transmissionRenderTarget[ot.id]=new So(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?ic:yr,minFilter:io,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace}));const pt=p.state.transmissionRenderTarget[ot.id],wt=ot.viewport||U;pt.setSize(wt.z*x.transmissionResolutionScale,wt.w*x.transmissionResolutionScale);const Ft=x.getRenderTarget(),Ot=x.getActiveCubeFace(),Xt=x.getActiveMipmapLevel();x.setRenderTarget(pt),x.getClearColor(W),tt=x.getClearAlpha(),tt<1&&x.setClearColor(16777215,.5),x.clear(),ut&&Mt.render(rt);const Ht=x.toneMapping;x.toneMapping=Ms;const zt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),p.setupLightsView(ot),Wt===!0&&mt.setGlobalState(x.clippingPlanes,ot),le(R,rt,ot),lt.updateMultisampleRenderTarget(pt),lt.updateRenderTargetMipmap(pt),V.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let me=0,$e=G.length;me<$e;me++){const Be=G[me],Pe=Be.object,Kt=Be.geometry,Ge=Be.material,xe=Be.group;if(Ge.side===Ji&&Pe.layers.test(ot.layers)){const fi=Ge.side;Ge.side=li,Ge.needsUpdate=!0,He(Pe,rt,ot,Kt,Ge,xe),Ge.side=fi,Ge.needsUpdate=!0,oe=!0}}oe===!0&&(lt.updateMultisampleRenderTarget(pt),lt.updateRenderTargetMipmap(pt))}x.setRenderTarget(Ft,Ot,Xt),x.setClearColor(W,tt),zt!==void 0&&(ot.viewport=zt),x.toneMapping=Ht}function le(R,G,rt){const ot=G.isScene===!0?G.overrideMaterial:null;for(let X=0,pt=R.length;X<pt;X++){const wt=R[X],Ft=wt.object,Ot=wt.geometry,Xt=wt.group;let Ht=wt.material;Ht.allowOverride===!0&&ot!==null&&(Ht=ot),Ft.layers.test(rt.layers)&&He(Ft,G,rt,Ot,Ht,Xt)}}function He(R,G,rt,ot,X,pt){R.onBeforeRender(x,G,rt,ot,X,pt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(x,G,rt,ot,R,pt),X.transparent===!0&&X.side===Ji&&X.forceSinglePass===!1?(X.side=li,X.needsUpdate=!0,x.renderBufferDirect(rt,G,ot,X,R,pt),X.side=Rs,X.needsUpdate=!0,x.renderBufferDirect(rt,G,ot,X,R,pt),X.side=Ji):x.renderBufferDirect(rt,G,ot,X,R,pt),R.onAfterRender(x,G,rt,ot,X,pt)}function Je(R,G,rt){G.isScene!==!0&&(G=nt);const ot=it.get(R),X=p.state.lights,pt=p.state.shadowsArray,wt=X.state.version,Ft=et.getParameters(R,X.state,pt,G,rt),Ot=et.getProgramCacheKey(Ft);let Xt=ot.programs;ot.environment=R.isMeshStandardMaterial?G.environment:null,ot.fog=G.fog,ot.envMap=(R.isMeshStandardMaterial?yt:at).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",ht),Xt=new Map,ot.programs=Xt);let Ht=Xt.get(Ot);if(Ht!==void 0){if(ot.currentProgram===Ht&&ot.lightsStateVersion===wt)return Re(R,Ft),Ht}else Ft.uniforms=et.getUniforms(R),R.onBeforeCompile(Ft,x),Ht=et.acquireProgram(Ft,Ot),Xt.set(Ot,Ht),ot.uniforms=Ft.uniforms;const zt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(zt.clippingPlanes=mt.uniform),Re(R,Ft),ot.needsLights=Fe(R),ot.lightsStateVersion=wt,ot.needsLights&&(zt.ambientLightColor.value=X.state.ambient,zt.lightProbe.value=X.state.probe,zt.directionalLights.value=X.state.directional,zt.directionalLightShadows.value=X.state.directionalShadow,zt.spotLights.value=X.state.spot,zt.spotLightShadows.value=X.state.spotShadow,zt.rectAreaLights.value=X.state.rectArea,zt.ltc_1.value=X.state.rectAreaLTC1,zt.ltc_2.value=X.state.rectAreaLTC2,zt.pointLights.value=X.state.point,zt.pointLightShadows.value=X.state.pointShadow,zt.hemisphereLights.value=X.state.hemi,zt.directionalShadowMap.value=X.state.directionalShadowMap,zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,zt.spotShadowMap.value=X.state.spotShadowMap,zt.spotLightMatrix.value=X.state.spotLightMatrix,zt.spotLightMap.value=X.state.spotLightMap,zt.pointShadowMap.value=X.state.pointShadowMap,zt.pointShadowMatrix.value=X.state.pointShadowMatrix),ot.currentProgram=Ht,ot.uniformsList=null,Ht}function Ne(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Su.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Re(R,G){const rt=it.get(R);rt.outputColorSpace=G.outputColorSpace,rt.batching=G.batching,rt.batchingColor=G.batchingColor,rt.instancing=G.instancing,rt.instancingColor=G.instancingColor,rt.instancingMorph=G.instancingMorph,rt.skinning=G.skinning,rt.morphTargets=G.morphTargets,rt.morphNormals=G.morphNormals,rt.morphColors=G.morphColors,rt.morphTargetsCount=G.morphTargetsCount,rt.numClippingPlanes=G.numClippingPlanes,rt.numIntersection=G.numClipIntersection,rt.vertexAlphas=G.vertexAlphas,rt.vertexTangents=G.vertexTangents,rt.toneMapping=G.toneMapping}function Te(R,G,rt,ot,X){G.isScene!==!0&&(G=nt),lt.resetTextureUnits();const pt=G.fog,wt=ot.isMeshStandardMaterial?G.environment:null,Ft=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:La,Ot=(ot.isMeshStandardMaterial?yt:at).get(ot.envMap||wt),Xt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Ht=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),zt=!!rt.morphAttributes.position,oe=!!rt.morphAttributes.normal,me=!!rt.morphAttributes.color;let $e=Ms;ot.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&($e=x.toneMapping);const Be=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Pe=Be!==void 0?Be.length:0,Kt=it.get(ot),Ge=p.state.lights;if(Wt===!0&&(Y===!0||R!==b)){const Bn=R===b&&ot.id===S;mt.setState(ot,R,Bn)}let xe=!1;ot.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ge.state.version||Kt.outputColorSpace!==Ft||X.isBatchedMesh&&Kt.batching===!1||!X.isBatchedMesh&&Kt.batching===!0||X.isBatchedMesh&&Kt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Kt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Kt.instancing===!1||!X.isInstancedMesh&&Kt.instancing===!0||X.isSkinnedMesh&&Kt.skinning===!1||!X.isSkinnedMesh&&Kt.skinning===!0||X.isInstancedMesh&&Kt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Kt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Kt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Kt.instancingMorph===!1&&X.morphTexture!==null||Kt.envMap!==Ot||ot.fog===!0&&Kt.fog!==pt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==mt.numPlanes||Kt.numIntersection!==mt.numIntersection)||Kt.vertexAlphas!==Xt||Kt.vertexTangents!==Ht||Kt.morphTargets!==zt||Kt.morphNormals!==oe||Kt.morphColors!==me||Kt.toneMapping!==$e||Kt.morphTargetsCount!==Pe)&&(xe=!0):(xe=!0,Kt.__version=ot.version);let fi=Kt.currentProgram;xe===!0&&(fi=Je(ot,G,X));let wo=!1,hi=!1,Oa=!1;const We=fi.getUniforms(),Pi=Kt.uniforms;if(P.useProgram(fi.program)&&(wo=!0,hi=!0,Oa=!0),ot.id!==S&&(S=ot.id,hi=!0),wo||b!==R){P.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),We.setValue(v,"projectionMatrix",R.projectionMatrix),We.setValue(v,"viewMatrix",R.matrixWorldInverse);const Jn=We.map.cameraPosition;Jn!==void 0&&Jn.setValue(v,j.setFromMatrixPosition(R.matrixWorld)),q.logarithmicDepthBuffer&&We.setValue(v,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&We.setValue(v,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,hi=!0,Oa=!0)}if(X.isSkinnedMesh){We.setOptional(v,X,"bindMatrix"),We.setOptional(v,X,"bindMatrixInverse");const Bn=X.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),We.setValue(v,"boneTexture",Bn.boneTexture,lt))}X.isBatchedMesh&&(We.setOptional(v,X,"batchingTexture"),We.setValue(v,"batchingTexture",X._matricesTexture,lt),We.setOptional(v,X,"batchingIdTexture"),We.setValue(v,"batchingIdTexture",X._indirectTexture,lt),We.setOptional(v,X,"batchingColorTexture"),X._colorsTexture!==null&&We.setValue(v,"batchingColorTexture",X._colorsTexture,lt));const Di=rt.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&gt.update(X,rt,fi),(hi||Kt.receiveShadow!==X.receiveShadow)&&(Kt.receiveShadow=X.receiveShadow,We.setValue(v,"receiveShadow",X.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Pi.envMap.value=Ot,Pi.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&G.environment!==null&&(Pi.envMapIntensity.value=G.environmentIntensity),hi&&(We.setValue(v,"toneMappingExposure",x.toneMappingExposure),Kt.needsLights&&ui(Pi,Oa),pt&&ot.fog===!0&&st.refreshFogUniforms(Pi,pt),st.refreshMaterialUniforms(Pi,ot,H,K,p.state.transmissionRenderTarget[R.id]),Su.upload(v,Ne(Kt),Pi,lt)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Su.upload(v,Ne(Kt),Pi,lt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&We.setValue(v,"center",X.center),We.setValue(v,"modelViewMatrix",X.modelViewMatrix),We.setValue(v,"normalMatrix",X.normalMatrix),We.setValue(v,"modelMatrix",X.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Bn=ot.uniformsGroups;for(let Jn=0,yf=Bn.length;Jn<yf;Jn++){const Is=Bn[Jn];qt.update(Is,fi),qt.bind(Is,fi)}}return fi}function ui(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Fe(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,G,rt){const ot=it.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),it.get(R.texture).__webglTexture=G,it.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const rt=it.get(R);rt.__webglFramebuffer=G,rt.__useDefaultFramebuffer=G===void 0};const Fn=v.createFramebuffer();this.setRenderTarget=function(R,G=0,rt=0){O=R,A=G,T=rt;let ot=!0,X=null,pt=!1,wt=!1;if(R){const Ot=it.get(R);if(Ot.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(v.FRAMEBUFFER,null),ot=!1;else if(Ot.__webglFramebuffer===void 0)lt.setupRenderTarget(R);else if(Ot.__hasExternalTextures)lt.rebindTextures(R,it.get(R.texture).__webglTexture,it.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const zt=R.depthTexture;if(Ot.__boundDepthTexture!==zt){if(zt!==null&&it.has(zt)&&(R.width!==zt.image.width||R.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(R)}}const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(wt=!0);const Ht=it.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ht[G])?X=Ht[G][rt]:X=Ht[G],pt=!0):R.samples>0&&lt.useMultisampledRTT(R)===!1?X=it.get(R).__webglMultisampledFramebuffer:Array.isArray(Ht)?X=Ht[rt]:X=Ht,U.copy(R.viewport),I.copy(R.scissor),F=R.scissorTest}else U.copy(xt).multiplyScalar(H).floor(),I.copy(It).multiplyScalar(H).floor(),F=Qt;if(rt!==0&&(X=Fn),P.bindFramebuffer(v.FRAMEBUFFER,X)&&ot&&P.drawBuffers(R,X),P.viewport(U),P.scissor(I),P.setScissorTest(F),pt){const Ot=it.get(R.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ot.__webglTexture,rt)}else if(wt){const Ot=G;for(let Xt=0;Xt<R.textures.length;Xt++){const Ht=it.get(R.textures[Xt]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+Xt,Ht.__webglTexture,rt,Ot)}}else if(R!==null&&rt!==0){const Ot=it.get(R.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Ot.__webglTexture,rt)}S=-1},this.readRenderTargetPixels=function(R,G,rt,ot,X,pt,wt,Ft=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=it.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Ot=Ot[wt]),Ot){P.bindFramebuffer(v.FRAMEBUFFER,Ot);try{const Xt=R.textures[Ft],Ht=Xt.format,zt=Xt.type;if(!q.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-ot&&rt>=0&&rt<=R.height-X&&(R.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ft),v.readPixels(G,rt,ot,X,Rt.convert(Ht),Rt.convert(zt),pt))}finally{const Xt=O!==null?it.get(O).__webglFramebuffer:null;P.bindFramebuffer(v.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,G,rt,ot,X,pt,wt,Ft=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=it.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Ot=Ot[wt]),Ot)if(G>=0&&G<=R.width-ot&&rt>=0&&rt<=R.height-X){P.bindFramebuffer(v.FRAMEBUFFER,Ot);const Xt=R.textures[Ft],Ht=Xt.format,zt=Xt.type;if(!q.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,oe),v.bufferData(v.PIXEL_PACK_BUFFER,pt.byteLength,v.STREAM_READ),R.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ft),v.readPixels(G,rt,ot,X,Rt.convert(Ht),Rt.convert(zt),0);const me=O!==null?it.get(O).__webglFramebuffer:null;P.bindFramebuffer(v.FRAMEBUFFER,me);const $e=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await zT(v,$e,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,oe),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,pt),v.deleteBuffer(oe),v.deleteSync($e),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,rt=0){const ot=Math.pow(2,-rt),X=Math.floor(R.image.width*ot),pt=Math.floor(R.image.height*ot),wt=G!==null?G.x:0,Ft=G!==null?G.y:0;lt.setTexture2D(R,0),v.copyTexSubImage2D(v.TEXTURE_2D,rt,0,0,wt,Ft,X,pt),P.unbindTexture()};const Ri=v.createFramebuffer(),an=v.createFramebuffer();this.copyTextureToTexture=function(R,G,rt=null,ot=null,X=0,pt=null){pt===null&&(X!==0?(Ql("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=X,X=0):pt=0);let wt,Ft,Ot,Xt,Ht,zt,oe,me,$e;const Be=R.isCompressedTexture?R.mipmaps[pt]:R.image;if(rt!==null)wt=rt.max.x-rt.min.x,Ft=rt.max.y-rt.min.y,Ot=rt.isBox3?rt.max.z-rt.min.z:1,Xt=rt.min.x,Ht=rt.min.y,zt=rt.isBox3?rt.min.z:0;else{const Di=Math.pow(2,-X);wt=Math.floor(Be.width*Di),Ft=Math.floor(Be.height*Di),R.isDataArrayTexture?Ot=Be.depth:R.isData3DTexture?Ot=Math.floor(Be.depth*Di):Ot=1,Xt=0,Ht=0,zt=0}ot!==null?(oe=ot.x,me=ot.y,$e=ot.z):(oe=0,me=0,$e=0);const Pe=Rt.convert(G.format),Kt=Rt.convert(G.type);let Ge;G.isData3DTexture?(lt.setTexture3D(G,0),Ge=v.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(lt.setTexture2DArray(G,0),Ge=v.TEXTURE_2D_ARRAY):(lt.setTexture2D(G,0),Ge=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,G.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,G.unpackAlignment);const xe=v.getParameter(v.UNPACK_ROW_LENGTH),fi=v.getParameter(v.UNPACK_IMAGE_HEIGHT),wo=v.getParameter(v.UNPACK_SKIP_PIXELS),hi=v.getParameter(v.UNPACK_SKIP_ROWS),Oa=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,Be.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Be.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Xt),v.pixelStorei(v.UNPACK_SKIP_ROWS,Ht),v.pixelStorei(v.UNPACK_SKIP_IMAGES,zt);const We=R.isDataArrayTexture||R.isData3DTexture,Pi=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const Di=it.get(R),Bn=it.get(G),Jn=it.get(Di.__renderTarget),yf=it.get(Bn.__renderTarget);P.bindFramebuffer(v.READ_FRAMEBUFFER,Jn.__webglFramebuffer),P.bindFramebuffer(v.DRAW_FRAMEBUFFER,yf.__webglFramebuffer);for(let Is=0;Is<Ot;Is++)We&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,it.get(R).__webglTexture,X,zt+Is),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,it.get(G).__webglTexture,pt,$e+Is)),v.blitFramebuffer(Xt,Ht,wt,Ft,oe,me,wt,Ft,v.DEPTH_BUFFER_BIT,v.NEAREST);P.bindFramebuffer(v.READ_FRAMEBUFFER,null),P.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||it.has(R)){const Di=it.get(R),Bn=it.get(G);P.bindFramebuffer(v.READ_FRAMEBUFFER,Ri),P.bindFramebuffer(v.DRAW_FRAMEBUFFER,an);for(let Jn=0;Jn<Ot;Jn++)We?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Di.__webglTexture,X,zt+Jn):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Di.__webglTexture,X),Pi?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Bn.__webglTexture,pt,$e+Jn):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Bn.__webglTexture,pt),X!==0?v.blitFramebuffer(Xt,Ht,wt,Ft,oe,me,wt,Ft,v.COLOR_BUFFER_BIT,v.NEAREST):Pi?v.copyTexSubImage3D(Ge,pt,oe,me,$e+Jn,Xt,Ht,wt,Ft):v.copyTexSubImage2D(Ge,pt,oe,me,Xt,Ht,wt,Ft);P.bindFramebuffer(v.READ_FRAMEBUFFER,null),P.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else Pi?R.isDataTexture||R.isData3DTexture?v.texSubImage3D(Ge,pt,oe,me,$e,wt,Ft,Ot,Pe,Kt,Be.data):G.isCompressedArrayTexture?v.compressedTexSubImage3D(Ge,pt,oe,me,$e,wt,Ft,Ot,Pe,Be.data):v.texSubImage3D(Ge,pt,oe,me,$e,wt,Ft,Ot,Pe,Kt,Be):R.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,pt,oe,me,wt,Ft,Pe,Kt,Be.data):R.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,pt,oe,me,Be.width,Be.height,Pe,Be.data):v.texSubImage2D(v.TEXTURE_2D,pt,oe,me,wt,Ft,Pe,Kt,Be);v.pixelStorei(v.UNPACK_ROW_LENGTH,xe),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,fi),v.pixelStorei(v.UNPACK_SKIP_PIXELS,wo),v.pixelStorei(v.UNPACK_SKIP_ROWS,hi),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Oa),pt===0&&G.generateMipmaps&&v.generateMipmap(Ge),P.unbindTexture()},this.initRenderTarget=function(R){it.get(R).__webglFramebuffer===void 0&&lt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?lt.setTextureCube(R,0):R.isData3DTexture?lt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?lt.setTexture2DArray(R,0):lt.setTexture2D(R,0),P.unbindTexture()},this.resetState=function(){A=0,T=0,O=null,P.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _r}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}}const u0={type:"change"},Mm={type:"start"},ky={type:"end"},tu=new _f,f0=new cs,m2=Math.cos(70*BT.DEG2RAD),ln=new $,Qn=2*Math.PI,Ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ih=1e-6;class _2 extends Dw{constructor(t,e=null){super(t,e),this.state=Ce.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:va.ROTATE,MIDDLE:va.DOLLY,RIGHT:va.PAN},this.touches={ONE:ra.ROTATE,TWO:ra.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new yo,this._lastTargetPosition=new $,this._quat=new yo().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bg,this._sphericalDelta=new Bg,this._scale=1,this._panOffset=new $,this._rotateStart=new Zt,this._rotateEnd=new Zt,this._rotateDelta=new Zt,this._panStart=new Zt,this._panEnd=new Zt,this._panDelta=new Zt,this._dollyStart=new Zt,this._dollyEnd=new Zt,this._dollyDelta=new Zt,this._dollyDirection=new $,this._mouse=new Zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=v2.bind(this),this._onPointerDown=g2.bind(this),this._onPointerUp=x2.bind(this),this._onContextMenu=w2.bind(this),this._onMouseWheel=M2.bind(this),this._onKeyDown=E2.bind(this),this._onTouchStart=b2.bind(this),this._onTouchMove=T2.bind(this),this._onMouseDown=y2.bind(this),this._onMouseMove=S2.bind(this),this._interceptControlDown=A2.bind(this),this._interceptControlUp=C2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(u0),this.update(),this.state=Ce.NONE}update(t=null){const e=this.object.position;ln.copy(e).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===Ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Qn:i>Math.PI&&(i-=Qn),r<-Math.PI?r+=Qn:r>Math.PI&&(r-=Qn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),e.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ln.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new $(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new $(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(tu.origin.copy(this.object.position),tu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tu.direction))<m2?this.object.lookAt(this.target):(f0.setFromNormalAndCoplanarPoint(this.object.up,this.target),tu.intersectPlane(f0,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ih||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ih||this._lastTargetPosition.distanceToSquared(this.target)>Ih?(this.dispatchEvent(u0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qn/60*this.autoRotateSpeed*t:Qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ln.setFromMatrixColumn(e,0),ln.multiplyScalar(-t),this._panOffset.add(ln)}_panUp(t,e){this.screenSpacePanning===!0?ln.setFromMatrixColumn(e,1):(ln.setFromMatrixColumn(e,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(t),this._panOffset.add(ln)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ln.copy(r).sub(this.target);let s=ln.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function g2(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function v2(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function x2(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ky),this.state=Ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function y2(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case va.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ce.DOLLY;break;case va.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ce.ROTATE}break;case va.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ce.PAN}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(Mm)}function S2(n){switch(this.state){case Ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function M2(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ce.NONE||(n.preventDefault(),this.dispatchEvent(Mm),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ky))}function E2(n){this.enabled!==!1&&this._handleKeyDown(n)}function b2(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ra.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ce.TOUCH_ROTATE;break;case ra.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ce.TOUCH_PAN;break;default:this.state=Ce.NONE}break;case 2:switch(this.touches.TWO){case ra.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ce.TOUCH_DOLLY_PAN;break;case ra.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ce.TOUCH_DOLLY_ROTATE;break;default:this.state=Ce.NONE}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(Mm)}function T2(n){switch(this._trackPointer(n),this.state){case Ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ce.NONE}}function w2(n){this.enabled!==!1&&n.preventDefault()}function A2(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function C2(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const R2=`
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vp;
varying vec3 vPositionNormal;
varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

void main(void){
  vUv = uv;
  vNormal = normalize( normalMatrix * normal ); // 转换到视图空间
  vp = position;
  vPositionNormal = normalize(( modelViewMatrix * vec4(position, 1.0) ).xyz);

  // World space position and normal for lighting
  vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);

  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P2=`uniform vec3 glowColor;
uniform float bias;
uniform float power;
uniform float time;
varying vec3 vp;
varying vec3 vNormal;
varying vec3 vPositionNormal;
varying vec3 vWorldPosition;
varying vec3 vWorldNormal;
uniform float scale;
// 获取纹理
uniform sampler2D map;
// 纹理坐标
varying vec2 vUv;

// Lighting uniforms
uniform vec3 directionalLightPosition;
uniform vec3 directionalLightColor;
uniform float directionalLightIntensity;
uniform vec3 ambientLightColor;
uniform float ambientLightIntensity;

void main(void){
  // Get base texture color
  vec4 texColor = texture2D(map, vUv);

  // Calculate directional light (light position is actually the direction FROM the light)
  vec3 lightDir = normalize(directionalLightPosition);
  float diffuse = max(dot(vWorldNormal, lightDir), 0.0);

  // Add some wrap-around lighting to avoid completely black shadows
  diffuse = diffuse * 0.7 + 0.3;

  // Ambient + Diffuse lighting
  vec3 ambient = ambientLightColor * ambientLightIntensity;
  vec3 directional = directionalLightColor * directionalLightIntensity * diffuse;
  vec3 lighting = ambient + directional;

  // Apply lighting to texture
  vec3 litColor = texColor.rgb * lighting;

  // Apply original glow effect (very subtle)
  float a = pow( bias + scale * abs(dot(vNormal, vPositionNormal)), power );
  if(vp.y > time && vp.y < time + 20.0) {
    float t =  smoothstep(0.0, 0.8,  (1.0 - abs(0.5 - (vp.y - time) / 20.0)) / 3.0  );
    litColor = mix(litColor, glowColor, t * t * 0.15);
  }
  litColor = mix(litColor, glowColor, a * 0.05);

  gl_FragColor = vec4(litColor, 1.0);
}`,D2={class:"earth-container",style:{opacity:"0.66"}},L2={key:0,class:"loading-screen"},I2={class:"loading-content"},U2={class:"loading-bar"},O2={class:"loading-percent"},Uh=.02,Oh=.02,N2=.02,F2=Zn({__name:"ThreeEarth",setup(n){const t=ne(null),e=ne(0),i=ne(!0);let r,s,o,a,l,c,u,f,d,h,g,_,m,p,y={x:0,y:0,z:0},E={x:0,y:0,z:0},x=100,w={x:0,y:0,z:0},A={x:0,y:0,z:0},T=100,O=0;const S={hero:{position:{x:-100,y:-50,z:0},rotation:{x:0,y:.55,z:0},scale:100},info:{position:{x:-100,y:50,z:0},rotation:{x:0,y:.55,z:0},scale:100},suppliers:{position:{x:-50,y:0,z:0},rotation:{x:0,y:0,z:0},scale:40},partners:{position:{x:0,y:-50,z:0},rotation:{x:0,y:0,z:0},scale:85},contact:{position:{x:0,y:-50,z:0},rotation:{x:0,y:0,z:0},scale:85}},b=[{lat:23.8103,lon:90.4125,name:"Bangladesh"},{lat:39.9334,lon:32.8597,name:"Turkey"},{lat:40.4168,lon:-3.7038,name:"Spain"},{lat:39.9042,lon:116.4074,name:"China"}],U=()=>{t.value&&(r=new fw,s=new ki(45,window.innerWidth/window.innerHeight,1,1e4),s.position.set(0,0,-150),s.lookAt(0,0,0),o=new p2({canvas:t.value,alpha:!0,antialias:!0}),o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),a=new _2(s,o.domElement),a.enableDamping=!1,a.enableZoom=!1,a.enableRotate=!1,a.enablePan=!1,a.autoRotate=!1)},I=()=>{const Y=new Nn,L=new yu({color:16777215,size:2,transparent:!0,opacity:.8,sizeAttenuation:!0,map:F(),blending:Vu}),j=[];for(let J=0;J<6e3;J++){const nt=(Math.random()-.5)*2e3,ut=(Math.random()-.5)*2e3,D=(Math.random()-.5)*2e3;j.push(nt,ut,D)}Y.setAttribute("position",new hn(j,3)),u=new Eh(Y,L),r.add(u)},F=()=>{const Y=document.createElement("canvas");Y.width=32,Y.height=32;const L=Y.getContext("2d"),j=L.createRadialGradient(16,16,0,16,16,16);return j.addColorStop(0,"rgba(255,255,255,1)"),j.addColorStop(.5,"rgba(255,255,255,0.5)"),j.addColorStop(1,"rgba(255,255,255,0)"),L.fillStyle=j,L.fillRect(0,0,32,32),new Ug(Y)},W=()=>{const Y=new Og,L=new sa(100,64,64),j={glowColor:{value:new _e(840171)},scale:{value:-1},bias:{value:1},power:{value:3.3},time:{value:100},isHover:{value:!1},map:{value:null},directionalLightPosition:{value:new $(0,50,-150)},directionalLightColor:{value:new _e(16777215)},directionalLightIntensity:{value:0},ambientLightColor:{value:new _e(16777215)},ambientLightIntensity:{value:1}};Y.load("/images/earth/earth.jpg",P=>{j.map.value=P,e.value=100,setTimeout(()=>{i.value=!1},500)});const J=new Sr({uniforms:j,vertexShader:R2,fragmentShader:P2});l=new An(L,J),w={...S.hero.position},A={...S.hero.rotation},T=S.hero.scale,y={...S.hero.position},E={...S.hero.rotation},x=S.hero.scale,l.position.set(w.x,w.y,w.z),l.rotation.x=A.x,l.rotation.y=A.y,l.rotation.z=A.z,l.scale.set(T/100,T/100,T/100),r.add(l);const nt=new sa(110,60,60),ut=new yu({color:8519679,transparent:!0,sizeAttenuation:!0,opacity:.1,size:.5});g=new Eh(nt,ut),g.position.set(w.x,w.y,w.z),g.rotation.x=A.x,g.rotation.y=A.y,g.rotation.z=A.z,g.scale.set(T/100,T/100,T/100),r.add(g);const v=new Og().load("/images/earth/glow.png"),B=new pp({map:v,color:4427985,transparent:!0,opacity:.7,depthWrite:!1});c=new Cg(B);const V=T/100*300;c.scale.set(V,V,1),c.position.set(w.x,w.y,w.z),r.add(c);const q=new Rw(16777215,1);r.add(q),p=new Cw(16777215,0),p.position.set(0,50,-150),r.add(p),window.moveLight=(P,ct,it)=>{p&&(p.position.set(P,ct,it),l&&l.material&&l.material.uniforms.directionalLightPosition.value.set(P,ct,it))},window.getLightPos=()=>{if(p){const P=p.position;return{x:P.x,y:P.y,z:P.z}}},window.setLightIntensity=P=>{if(p&&(p.intensity=P,l&&l.material)){const ct=l.material;ct.uniforms.directionalLightIntensity.value=P}},window.setLightColor=P=>{p&&(p.color.setHex(P),l&&l.material&&l.material.uniforms.directionalLightColor.value.setHex(P))},window.setAmbientIntensity=P=>{if(q&&(q.intensity=P,l&&l.material)){const ct=l.material;ct.uniforms.ambientLightIntensity.value=P}}},tt=()=>{const Y=new sa(100,50,50),L=new Sr({uniforms:{coeficient:{value:1},power:{value:3},glowColor:{value:new _e(4427985)}},vertexShader:`
      varying vec3 vVertexWorldPosition;
      varying vec3 vVertexNormal;
      varying vec4 vFragColor;
      void main(){
        vVertexNormal = normalize(normalMatrix * normal);
        vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 glowColor;
      uniform float coeficient;
      uniform float power;
      varying vec3 vVertexNormal;
      varying vec3 vVertexWorldPosition;
      varying vec4 vFragColor;
      void main(){
        vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;
        vec3 viewCameraToVertex = (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;
        viewCameraToVertex = normalize(viewCameraToVertex);
        float intensity = pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);
        gl_FragColor = vec4(glowColor, intensity);
      }
    `,blending:po,transparent:!0,depthWrite:!1});f=new An(Y,L),f.position.set(w.x,w.y,w.z),f.rotation.x=A.x,f.rotation.y=A.y,f.rotation.z=A.z,f.scale.set(T/100,T/100,T/100),r.add(f)},Z=(Y,L,j=S.hero.scale,J=!1)=>{const nt=(90-Y)*(Math.PI/180),ut=(L+180)*(Math.PI/180);if(J){const D=-(j*Math.sin(nt)*Math.cos(ut)),v=j*Math.cos(nt),B=j*Math.sin(nt)*Math.sin(ut);return new $(D,v,B)}else{const D=-(j*Math.sin(nt)*Math.cos(ut))+S.hero.position.x,v=j*Math.cos(nt)+S.hero.position.y,B=j*Math.sin(nt)*Math.sin(ut)+S.hero.position.z;return new $(D,v,B)}},K=()=>{d=new _s,b.forEach((Y,L)=>{const j=new _s,J=new xm(1.2,32),nt=new Al({color:16777215,transparent:!0,opacity:.9,side:Ji}),ut=new An(J,nt),D=new qu(1.5,1.8,32),v=new Al({color:65535,transparent:!0,opacity:.6,side:Ji}),B=new An(D,v);B.userData.pulsePhase=L*.5;const V=Z(Y.lat,Y.lon,100+.5,!0);ut.position.copy(V),B.position.copy(V);const q=V.clone().normalize();ut.lookAt(q.multiplyScalar(1e3).add(V)),B.lookAt(q.multiplyScalar(1e3).add(V)),j.add(ut),j.add(B);const P=document.createElement("canvas"),ct=P.getContext("2d");P.width=512,P.height=128,ct.fillStyle="rgba(255, 255, 255, 1)",ct.font="bold 48px Arial",ct.textAlign="left",ct.textBaseline="middle",ct.fillText(Y.name,10,64);const it=new Ug(P),lt=new pp({map:it,transparent:!0}),at=new Cg(lt),yt=new $(1,0,0).applyAxisAngle(new $(0,0,1),Math.atan2(V.y,V.x)),C=V.clone().add(yt.multiplyScalar(8));at.position.copy(C),at.scale.set(15,3.75,1),j.add(at),d.add(j)}),d.position.set(w.x,w.y,w.z),d.rotation.x=A.x,d.rotation.y=A.y,d.rotation.z=A.z,d.scale.set(T/100,T/100,T/100),r.add(d)},H=()=>{const Y=new Nn,L=[],j=1500;for(let nt=0;nt<j;nt++){const ut=106+Math.random()*12,D=Math.random()*Math.PI*2,v=Math.random()*Math.PI,B=ut*Math.sin(v)*Math.cos(D),V=ut*Math.cos(v),q=ut*Math.sin(v)*Math.sin(D);L.push(B,V,q)}Y.setAttribute("position",new hn(L,3));const J=new yu({color:65535,size:1,transparent:!0,opacity:.6,blending:Vu,sizeAttenuation:!0,map:F()});h=new Eh(Y,J),h.position.set(w.x,w.y,w.z),h.rotation.x=A.x,h.rotation.y=A.y,h.rotation.z=A.z,h.scale.set(T/100,T/100,T/100),r.add(h)},dt=()=>{_=new _s;const Y=b[2],L=Z(Y.lat,Y.lon,100+.5,!0);b.forEach((j,J)=>{if(J===2)return;const nt=Z(j.lat,j.lon,100+.5,!0),D=new $((nt.x+L.x)/2,(nt.y+L.y)/2,(nt.z+L.z)/2).clone().normalize().multiplyScalar(130),v=new yw(nt,D,L),B=v.getPoints(100),V=new Nn().setFromPoints(B),q=new mp({color:65535,transparent:!0,opacity:.8,linewidth:2,depthTest:!0,depthWrite:!1}),P=new Dg(V,q),ct=new mp({color:65535,transparent:!0,opacity:.15,linewidth:6,depthTest:!0,depthWrite:!1}),it=new Dg(V.clone(),ct);_.add(it),P.userData.fullGeometry=V.clone(),P.userData.animationOffset=J*.5,P.userData.totalPoints=B.length,_.add(P);const lt=new sa(.4,8,8),at=new Al({color:16777215,transparent:!0,opacity:.9}),yt=new An(lt,at);yt.userData.curve=v,yt.userData.animationOffset=J*.5,_.add(yt)}),_.position.set(w.x,w.y,w.z),_.rotation.x=A.x,_.rotation.y=A.y,_.rotation.z=A.z,_.scale.set(T/100,T/100,T/100),r.add(_)},N=()=>{if(l){if(w.x+=(y.x-w.x)*Uh,w.y+=(y.y-w.y)*Uh,w.z+=(y.z-w.z)*Uh,A.x+=(E.x-A.x)*Oh,A.y+=(E.y-A.y)*Oh,A.z+=(E.z-A.z)*Oh,O+=2e-5,T+=(x-T)*N2,l.position.set(w.x,w.y,w.z),l.rotation.x=A.x,l.rotation.y=A.y+O,l.rotation.z=A.z,l.scale.set(T/100,T/100,T/100),g&&(g.position.copy(l.position),g.rotation.copy(l.rotation),g.scale.copy(l.scale)),f&&(f.position.copy(l.position),f.rotation.copy(l.rotation),f.scale.copy(l.scale)),c){c.position.copy(l.position);const Y=T/100*300;c.scale.set(Y,Y,1)}d&&(d.position.copy(l.position),d.rotation.copy(l.rotation),d.scale.copy(l.scale)),h&&(h.position.copy(l.position),h.rotation.copy(l.rotation),h.scale.copy(l.scale)),_&&(_.position.copy(l.position),_.rotation.copy(l.rotation),_.scale.copy(l.scale))}},xt=()=>{if(m=requestAnimationFrame(xt),N(),u&&(u.rotation.y+=1e-4),d&&d.children.forEach(Y=>{Y instanceof _s&&Y.children.forEach(L=>{if(L instanceof An&&L.geometry instanceof qu){const j=Date.now()*5e-4,J=L.userData.pulsePhase||0,nt=1+Math.sin(j+J)*.2;L.scale.set(nt,nt,1);const ut=L.material;ut.opacity=.4+Math.sin(j+J)*.3}})}),_){const Y=Date.now()*3e-4;_.children.forEach(L=>{if(L instanceof An&&L.userData.curve){const j=L.userData.animationOffset||0,J=(Y+j)%3/3,nt=L.userData.curve.getPoint(J);L.position.copy(nt);const ut=.1;J<ut?L.material.opacity=J/ut*.9:J>1-ut?L.material.opacity=(1-J)/ut*.9:L.material.opacity=.9}})}a.update(),o.render(r,s)},It=Y=>{const L=S[Y];y={...L.position},E={...L.rotation},x=L.scale},Qt=()=>{const Y=[{id:"hero-section",config:"hero"},{id:"info-section",config:"info"},{id:"suppliers-section",config:"suppliers"},{id:"partners-section",config:"partners"},{id:"contact-section",config:"contact"}],L=window.scrollY+window.innerHeight*.8;let j=0,J=0,nt=0;for(let ut=0;ut<Y.length;ut++){const D=document.getElementById(Y[ut].id);if(!D)continue;const v=D.getBoundingClientRect(),B=v.top+window.scrollY,V=B+v.height,q=B+v.height*.85,P=v.height*.5,ct=q+P;if(L>=B&&L<V){j=ut,L>=q&&ut<Y.length-1&&(nt=(L-q)/P,nt=Math.max(0,Math.min(1,nt)),J=ut+1);break}else if(ut<Y.length-1&&L>=V&&L<ct){j=ut,J=ut+1,nt=(L-q)/P,nt=Math.max(0,Math.min(1,nt));break}}if(nt>0&&J<Y.length){const ut=S[Y[j].config],D=S[Y[J].config],v=nt<.5?4*nt*nt*nt:1-Math.pow(-2*nt+2,3)/2;y.x=ut.position.x+(D.position.x-ut.position.x)*v,y.y=ut.position.y+(D.position.y-ut.position.y)*v,y.z=ut.position.z+(D.position.z-ut.position.z)*v,E.x=ut.rotation.x+(D.rotation.x-ut.rotation.x)*v,E.y=ut.rotation.y+(D.rotation.y-ut.rotation.y)*v,E.z=ut.rotation.z+(D.rotation.z-ut.rotation.z)*v,x=ut.scale+(D.scale-ut.scale)*v}else It(Y[j].config)},Vt=()=>{!s||!o||(s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight))},Wt=()=>{U(),I(),W(),tt(),K(),H(),dt(),xt()};return Mr(()=>{Wt(),window.addEventListener("resize",Vt),window.addEventListener("scroll",Qt)}),of(()=>{window.removeEventListener("resize",Vt),window.removeEventListener("scroll",Qt),cancelAnimationFrame(m),o&&o.dispose(),a&&a.dispose()}),(Y,L)=>($t(),te("div",D2,[i.value?($t(),te("div",L2,[ft("div",I2,[L[0]||(L[0]=ft("div",{class:"loading-spinner"},null,-1)),L[1]||(L[1]=ft("p",{class:"loading-text"},"Loading Earth...",-1)),ft("div",U2,[ft("div",{class:"loading-bar-fill",style:Qe({width:`${e.value}%`})},null,4)]),ft("p",O2,ni(e.value)+"%",1)])])):yi("",!0),ft("canvas",{ref_key:"canvasRef",ref:t,class:"earth-canvas"},null,512)]))}}),xf=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},B2=xf(F2,[["__scopeId","data-v-10120f8f"]]),k2="/assets/micelio-newcolor-tr-bg-BIEONh4s.png",z2={id:"hero-section",class:"relative flex items-center overflow-hidden h-[95vh]"},H2=Zn({__name:"HeroSection",setup(n){const t=ne(1);let e=!1;const i=()=>{e||(window.requestAnimationFrame(()=>{const r=window.scrollY,o=Math.max(0,1-r/200);t.value=o,e=!1}),e=!0)};return Mr(()=>{window.addEventListener("scroll",i,{passive:!0})}),Ds(()=>{window.removeEventListener("scroll",i)}),(r,s)=>($t(),te("section",z2,[ft("div",{class:"px-6 md:pl-20 lg:pl-32 relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:w-auto transition-opacity duration-300",style:Qe({opacity:t.value})},s[0]||(s[0]=[ft("img",{class:"h-16 sm:h-20 md:h-32 lg:h-40 xl:h-48 w-auto mb-4 md:mb-0",src:k2,alt:"Micelio Logo"},null,-1),ft("span",{class:"text-center md:text-left ml-0 md:ml-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-slate-100"}," MicelioData ",-1)]),4),ft("div",{class:"absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-center transition-all duration-300 cursor-pointer group",style:Qe({opacity:t.value})},s[1]||(s[1]=[ft("p",{class:"text-sm text-slate-300 mb-2 group-hover:text-white transition-colors"},"Scroll down to continue",-1),ft("svg",{class:"w-6 h-6 mx-auto text-slate-300 transition-transform group-hover:translate-y-2 group-hover:text-white",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[ft("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 14l-7 7m0 0l-7-7m7 7V3"})],-1)]),4)]))}}),V2={id:"info-section",class:"scroll-mt-[7rem] min-h-screen py-20 px-8 sm:px-12 lg:px-20 flex flex-col justify-center"},G2=Zn({__name:"AboutSection",setup(n){return(t,e)=>($t(),te("section",V2,e[0]||(e[0]=[Ip('<h1 class="text-4xl md:text-5xl font-bold text-gray-100 mb-16 md:ml-16 lg:ml-20 animate-slide-left"> About Us </h1><div class="max-w-5xl md:ml-16 lg:ml-20 space-y-8"><h2 class="text-lg md:text-xl text-gray-300 animate-slide-left"> MicelioData is a next-generation platform purpose-built to support compliance with the EU&#39;s Ecodesign for Sustainable Products Regulation (ESPR) and its Digital Product Passport (DPP) requirements. </h2><h2 class="text-lg md:text-xl text-gray-300 animate-slide-left"> Our solution addresses the hardest part of product transparency: capturing, verifying, and scaling supplier data across fragmented global value chains. Through a hybrid data capture framework—including direct API integrations, mobile apps for SMEs, and AI-powered digitization of paper records—we ensure no supplier is left behind. </h2><h2 class="text-lg md:text-xl text-gray-300 animate-slide-left"> Powered by a collaborative trust engine, semantic knowledge graphs, and an event-driven, cloud-native architecture, Micelio enables brands to transform raw data into verifiable, interoperable product intelligence—ready for ESPR, CSRD, and beyond. </h2><div class="my-12 animate-slide-left"><blockquote class="text-xl md:text-2xl font-semibold text-emerald-400 italic border-l-4 border-emerald-500 pl-6"> &quot;MicelioData is the digital mycelium for sustainability data!&quot; </blockquote></div></div>',2)])))}}),W2={class:"min-h-[120px] flex flex-col justify-center"},X2={key:0,class:"flex justify-center mb-3"},Y2={key:1,class:"text-xl text-center font-semibold text-gray-200"},$2={key:3,class:"text-center text-gray-200 mt-3 mb-4"},q2={class:"mt-3 flex-grow"},j2={class:"mr-2 mt-[2px]"},K2={key:1,class:"text-gray-300"},Z2={class:"text-gray-300"},J2={key:1},Q2={class:"text-gray-300"},Ui=Zn({__name:"MainCard",props:{icon:{},bullet:{},product:{},color:{default:"black"},title:{},subtitle:{},description:{},titleSize:{default:"text-lg"},titleWeight:{default:"font-light"},hoverEffect:{default:"none"}},setup(n){const t=n,e=zi(()=>{const i="p-4 pb-5 rounded-md h-full flex flex-col bg-gray-900/40 backdrop-blur-md";if(t.hoverEffect==="lift")return`${i} hover:-translate-y-1 transition duration-300`;if(t.hoverEffect==="highlight")return`${i} transition-all duration-300`;if(t.hoverEffect==="none")return i});return(i,r)=>($t(),te("div",{class:ii(e.value)},[ft("div",W2,[t.icon?($t(),te("div",X2,[($t(),Il(wu(t.icon),{class:ii(`w-10 h-10 ${t.color}`)},null,8,["class"]))])):yi("",!0),t.product?($t(),te("h2",Y2,ni(t.product),1)):yi("",!0),t.title?($t(),te("h3",{key:2,class:ii(`${t.titleSize} ${t.titleWeight} text-center text-gray-200 mb-2`)},ni(t.title),3)):yi("",!0),t.subtitle?($t(),te("h4",$2,ni(t.subtitle),1)):yi("",!0)]),ft("div",q2,[t.description.length>1?($t(!0),te(Rn,{key:0},Pp(t.description,(s,o)=>($t(),te("div",{key:o,class:"flex items-start"},[ft("div",j2,[t.bullet?($t(),Il(wu(t.bullet),{key:0,class:"w-5 h-5 text-sky-500"})):($t(),te("span",K2,"•"))]),ft("p",Z2,ni(s),1)]))),128)):t.description.length===1?($t(),te("div",J2,[ft("p",Q2,ni(t.description[0]),1)])):yi("",!0)])],2))}});function Or(n,t){return $t(),te("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ft("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"})])}function tD(n,t){return $t(),te("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ft("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"})])}function eD(n,t){return $t(),te("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ft("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"})])}function nD(n,t){return $t(),te("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ft("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"})])}function iD(n,t){return $t(),te("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ft("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"})])}function rD(n,t){return $t(),te("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ft("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"})])}function sD(n,t){return $t(),te("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ft("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"})])}function oD(n,t){return $t(),te("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ft("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"}),ft("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"})])}function aD(n,t){return $t(),te("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ft("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"})])}function lD(n,t){return $t(),te("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ft("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"})])}const cD={id:"partners-section",class:"scroll-mt-[7rem] relative hidden md:block",style:{"min-height":"400vh"}},uD={class:"sticky top-0 h-screen flex items-center justify-center px-16 lg:px-20"},fD={class:"w-full max-w-7xl flex flex-col items-center justify-center"},hD={class:"grid grid-cols-3 gap-5 w-full max-w-6xl transform scale-95"},dD={id:"partners-section-mobile",class:"scroll-mt-[7rem] relative md:hidden",style:{"min-height":"400vh"}},pD={class:"sticky top-0 h-screen flex items-center justify-center px-8 py-8"},mD={class:"w-full max-w-sm"},_D={class:"transform scale-90"},gD={class:"transform scale-90"},vD={class:"transform scale-90"},xD={class:"transform scale-90"},yD={class:"transform scale-90"},SD={class:"transform scale-90"},MD=Zn({__name:"PartnersSection",setup(n){const t=[{icon:sD,bullet:Or,color:"text-indigo-500",title:"Sourcing Companies",description:["Supplier onboarding","Supplier selection and performance management","Quality assurance","Market intelligence"]},{icon:rD,bullet:Or,color:"text-blue-500",title:"Tech providers",description:["API development","Access to a verified data portal","End-to-end integration"]},{icon:nD,bullet:Or,color:"text-cyan-500",title:"Certification agencies",description:["Live verification of data","Compliance","Audit"]},{icon:lD,bullet:Or,color:"text-teal-500",title:"Industry associations, NGOs, universities",description:["Network connections","Operations and sustainability research","Stakeholder training","Industrial development"]},{icon:eD,bullet:Or,color:"text-emerald-500",title:"Sustainability Consulting & ESG companies",description:["Sustainability reporting","ESG consulting","Carbon footprint analysis","Compliance Audit"]},{icon:oD,bullet:Or,color:"text-green-500",title:"Label, barcode providers",description:["Integration with circularity data","Digital twins"]}],e=ne(1),i=ne(0),r=ne(0),s=ne(0),o=ne(0),a=ne(0),l=ne(0),c=ne(0),u=ne(0),f=ne(0),d=ne(0),h=ne(0),g=ne(0),_=ne(0),m=ne(1),p=ne(0),y=ne(0),E=ne(0),x=()=>{const A=document.getElementById("partners-section");if(!A)return;const T=A.getBoundingClientRect(),O=T.top,S=T.height,b=window.innerHeight,U=O-b,I=S+b,F=Math.max(0,Math.min(1,-U/I));if(F<.2,e.value=1,i.value=0,F<.32)r.value=0,s.value=-50;else if(F>=.32&&F<.37){const W=(F-.32)/.05;r.value=W,s.value=-50+W*50}else r.value=1,s.value=0;if(F<.35)o.value=0,a.value=-50;else if(F>=.35&&F<.4){const W=(F-.35)/.05;o.value=W,a.value=-50+W*50}else o.value=1,a.value=0;if(F<.38)l.value=0,c.value=-50;else if(F>=.38&&F<.43){const W=(F-.38)/.05;l.value=W,c.value=-50+W*50}else l.value=1,c.value=0;if(F<.41)u.value=0,f.value=-50;else if(F>=.41&&F<.46){const W=(F-.41)/.05;u.value=W,f.value=-50+W*50}else u.value=1,f.value=0;if(F<.44)d.value=0,h.value=-50;else if(F>=.44&&F<.49){const W=(F-.44)/.05;d.value=W,h.value=-50+W*50}else d.value=1,h.value=0;if(F<.47)g.value=0,_.value=-50;else if(F>=.47&&F<.52){const W=(F-.47)/.05;g.value=W,_.value=-50+W*50}else g.value=1,_.value=0},w=()=>{const A=document.getElementById("partners-section-mobile");if(!A)return;const T=A.getBoundingClientRect(),O=T.top,S=T.height,b=window.innerHeight,U=O-b,I=S+b,F=Math.max(0,Math.min(1,-U/I));if(F<.3)m.value=1,p.value=0;else if(F>=.3&&F<.35){const W=(F-.3)/.05;m.value=1-W,p.value=0}else m.value=0,p.value=0;if(F<.33)y.value=0;else if(F>=.33&&F<.38){const W=(F-.33)/.05;y.value=W}else if(F>=.38&&F<.6)y.value=1;else if(F>=.6&&F<.65){const W=(F-.6)/.05;y.value=1-W}else y.value=0;if(F<.63)E.value=0;else if(F>=.63&&F<.68){const W=(F-.63)/.05;E.value=W}else E.value=1};return Mr(()=>{window.addEventListener("scroll",x,{passive:!0}),window.addEventListener("scroll",w,{passive:!0}),x(),w()}),Ds(()=>{window.removeEventListener("scroll",x),window.removeEventListener("scroll",w)}),(A,T)=>($t(),te(Rn,null,[ft("section",cD,[ft("div",uD,[ft("div",fD,[ft("div",{class:"text-center mb-8",style:Qe({opacity:e.value,transform:`translateY(${i.value}px)`,transition:"opacity 0.3s ease-out, transform 0.3s ease-out"})},T[0]||(T[0]=[ft("h2",{class:"text-5xl font-bold text-gray-100 mb-4"}," Partnership Opportunities ",-1),ft("p",{class:"text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"}," We're building a comprehensive ecosystem that requires diverse expertise. Find your role in the future of supply chain transparency. ",-1)]),4),ft("div",hD,[ft("div",{style:Qe({opacity:r.value,transform:`translateX(${s.value}px)`,transition:"opacity 0.3s ease-out, transform 0.3s ease-out"})},[se(Ui,{hoverEffect:"none",icon:t[0].icon,bullet:t[0].bullet,color:t[0].color,title:t[0].title,description:t[0].description},null,8,["icon","bullet","color","title","description"])],4),ft("div",{style:Qe({opacity:o.value,transform:`translateX(${a.value}px)`,transition:"opacity 0.3s ease-out, transform 0.3s ease-out"})},[se(Ui,{hoverEffect:"none",icon:t[1].icon,bullet:t[1].bullet,color:t[1].color,title:t[1].title,description:t[1].description},null,8,["icon","bullet","color","title","description"])],4),ft("div",{style:Qe({opacity:l.value,transform:`translateX(${c.value}px)`,transition:"opacity 0.3s ease-out, transform 0.3s ease-out"})},[se(Ui,{hoverEffect:"none",icon:t[2].icon,bullet:t[2].bullet,color:t[2].color,title:t[2].title,description:t[2].description},null,8,["icon","bullet","color","title","description"])],4),ft("div",{style:Qe({opacity:u.value,transform:`translateX(${f.value}px)`,transition:"opacity 0.3s ease-out, transform 0.3s ease-out"})},[se(Ui,{hoverEffect:"none",icon:t[3].icon,bullet:t[3].bullet,color:t[3].color,title:t[3].title,description:t[3].description},null,8,["icon","bullet","color","title","description"])],4),ft("div",{style:Qe({opacity:d.value,transform:`translateX(${h.value}px)`,transition:"opacity 0.3s ease-out, transform 0.3s ease-out"})},[se(Ui,{hoverEffect:"none",icon:t[4].icon,bullet:t[4].bullet,color:t[4].color,title:t[4].title,description:t[4].description},null,8,["icon","bullet","color","title","description"])],4),ft("div",{style:Qe({opacity:g.value,transform:`translateX(${_.value}px)`,transition:"opacity 0.3s ease-out, transform 0.3s ease-out"})},[se(Ui,{hoverEffect:"none",icon:t[5].icon,bullet:t[5].bullet,color:t[5].color,title:t[5].title,description:t[5].description},null,8,["icon","bullet","color","title","description"])],4)])])])]),ft("section",dD,[ft("div",pD,[ft("div",mD,[ft("div",{class:"text-center mb-12",style:Qe({opacity:m.value,transform:`translateY(${p.value}px)`,transition:"opacity 0.3s ease-out, transform 0.3s ease-out"})},T[1]||(T[1]=[ft("h2",{class:"text-4xl font-bold text-gray-100 mb-4"}," Partnership Opportunities ",-1),ft("p",{class:"text-lg text-gray-300 leading-relaxed px-4"}," We're building a comprehensive ecosystem that requires diverse expertise. Find your role in the future of supply chain transparency. ",-1)]),4),ft("div",{class:"flex flex-col gap-4 w-full absolute inset-0 justify-center px-8 py-8",style:Qe({opacity:y.value,transition:"opacity 0.3s ease-out",pointerEvents:y.value>0?"auto":"none"})},[ft("div",_D,[se(Ui,{hoverEffect:"none",icon:t[0].icon,bullet:t[0].bullet,color:t[0].color,title:t[0].title,description:t[0].description},null,8,["icon","bullet","color","title","description"])]),ft("div",gD,[se(Ui,{hoverEffect:"none",icon:t[1].icon,bullet:t[1].bullet,color:t[1].color,title:t[1].title,description:t[1].description},null,8,["icon","bullet","color","title","description"])]),ft("div",vD,[se(Ui,{hoverEffect:"none",icon:t[2].icon,bullet:t[2].bullet,color:t[2].color,title:t[2].title,description:t[2].description},null,8,["icon","bullet","color","title","description"])])],4),ft("div",{class:"flex flex-col gap-4 w-full absolute inset-0 justify-center px-8 py-8",style:Qe({opacity:E.value,transition:"opacity 0.3s ease-out",pointerEvents:E.value>0?"auto":"none"})},[ft("div",xD,[se(Ui,{hoverEffect:"none",icon:t[3].icon,bullet:t[3].bullet,color:t[3].color,title:t[3].title,description:t[3].description},null,8,["icon","bullet","color","title","description"])]),ft("div",yD,[se(Ui,{hoverEffect:"none",icon:t[4].icon,bullet:t[4].bullet,color:t[4].color,title:t[4].title,description:t[4].description},null,8,["icon","bullet","color","title","description"])]),ft("div",SD,[se(Ui,{hoverEffect:"none",icon:t[5].icon,bullet:t[5].bullet,color:t[5].color,title:t[5].title,description:t[5].description},null,8,["icon","bullet","color","title","description"])])],4)])])])],64))}}),ED={id:"contact-section",class:"min-h-screen flex items-center justify-center px-6"},bD={class:"max-w-xl w-full text-center"},TD={class:"flex"},wD=["disabled"],AD={key:0},CD={key:1},RD="https://docs.google.com/forms/d/e/1FAIpQLSfVqp-s-tflusW__pGrFBoLlF54G4N0Cwva-D_LHQ0uyIpRBw/formResponse",PD=Zn({__name:"ContactSection",setup(n){const t=ne(""),e=ne(""),i=ne(""),r=ne(""),s=ne(""),o=ne(null),a=ne(!1),l=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,c={name:"entry.320585220",surname:"entry.818511890",email:"entry.448781571",message:"entry.1405688489"},u=async f=>{if(f.preventDefault(),s.value="",o.value=null,a.value=!0,!l.test(i.value.trim())){s.value="Please enter a valid email address.",o.value=!1,a.value=!1;return}try{const d=new FormData;d.append(c.name,t.value.trim()),d.append(c.surname,e.value.trim()),d.append(c.email,i.value.trim()),d.append(c.message,r.value.trim()),await fetch(RD,{method:"POST",mode:"no-cors",body:d}),o.value=!0,s.value="Thanks! Your message has been sent.",t.value="",e.value="",i.value="",r.value=""}catch{o.value=!1,s.value="Something went wrong. Please try again later."}finally{a.value=!1}};return(f,d)=>($t(),te("section",ED,[ft("div",bD,[d[4]||(d[4]=ft("h2",{class:"text-4xl md:text-5xl font-bold mb-4 text-gray-100 animate-word-reveal"},"Let's Connect",-1)),d[5]||(d[5]=ft("p",{class:"text-lg text-gray-300 mb-8 animate-fade-up"}," Whether you're a supplier, partner, or just curious about what we do, we'd love to hear from you. ",-1)),ft("form",{onSubmit:u,class:"space-y-4 animate-scale w-full"},[ft("div",TD,[uc(ft("input",{"onUpdate:modelValue":d[0]||(d[0]=h=>t.value=h),type:"text",placeholder:"First Name",required:"",class:"w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 mr-1 text-gray-900 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"},null,512),[[hc,t.value]]),uc(ft("input",{"onUpdate:modelValue":d[1]||(d[1]=h=>e.value=h),type:"text",placeholder:"Last Name",required:"",class:"w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 ml-1 text-gray-900 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"},null,512),[[hc,e.value]])]),uc(ft("input",{"onUpdate:modelValue":d[2]||(d[2]=h=>i.value=h),type:"email",placeholder:"you@example.com",required:"",class:"w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"},null,512),[[hc,i.value]]),uc(ft("textarea",{"onUpdate:modelValue":d[3]||(d[3]=h=>r.value=h),placeholder:"Your message...",rows:"4",class:"w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"},null,512),[[hc,r.value]]),ft("button",{type:"submit",disabled:a.value,class:"w-full bg-gradient-to-r from-sky-700 to-emerald-500 hover:from-teal-400 hover:to-teal-400 text-white px-6 py-3 rounded shadow-md transition duration-300"},[a.value?($t(),te("span",AD,"Sending...")):($t(),te("span",CD,"Submit"))],8,wD)],32),s.value?($t(),te("p",{key:0,class:ii([{"text-green-600":o.value,"text-red-600":o.value===!1},"mt-4 text-sm"])},ni(s.value),3)):yi("",!0)])]))}}),DD="/assets/BRACU-BsIcelm_.png",LD="/assets/CIRPASS-2-Itu_1pOF.png",ID="/assets/Gaia-X-LTUFk_ci.webp",UD="/assets/GS1-1FoyeySm.png",OD={},ND={class:"bg-gray-900/80 backdrop-blur-md text-white py-12 px-6"};function FD(n,t){return $t(),te("footer",ND,t[0]||(t[0]=[Ip('<div class="max-w-6xl mx-auto"><div class="mb-8"><h3 class="text-center text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider"> Trusted by Global Leaders </h3><div class="flex flex-wrap justify-center items-center gap-8"><a href="https://www.bracu.ac.bd/" target="_blank" rel="noopener noreferrer" class="opacity-70 hover:opacity-100 transition-opacity duration-300"><img src="'+DD+'" alt="BRAC University" class="h-12 w-auto brightness-200 grayscale invert"></a><a href="https://cirpass2.eu/" target="_blank" rel="noopener noreferrer" class="opacity-70 hover:opacity-100 transition-opacity duration-300"><img src="'+LD+'" alt="CIRPASS 2.0" class="h-12 w-auto brightness-200 grayscale invert"></a><a href="https://gaia-x.eu/" target="_blank" rel="noopener noreferrer" class="opacity-70 hover:opacity-100 transition-opacity duration-300"><img src="'+ID+'" alt="Gaia-X" class="h-12 w-auto brightness-200 grayscale"></a><a href="https://www.gs1.org/" target="_blank" rel="noopener noreferrer" class="opacity-70 hover:opacity-100 transition-opacity duration-300"><img src="'+UD+'" alt="GS1" class="h-12 w-auto brightness-200 grayscale"></a></div></div><div class="border-t border-gray-700 pt-8 text-center text-sm text-gray-400"><p class="mb-2">Based in Madrid, Spain | Connecting Asia to Europe</p><p class="mb-6">© 2025 MicelioData. All Rights Reserved.</p><div class="flex justify-center"><img class="h-16 w-auto opacity-80" src="'+Kh+'" alt="Micelio Data Logo"></div></div></div>',1)]))}const BD=xf(OD,[["render",FD]]),kD={class:"p-4 pb-5 rounded-md h-full flex flex-col"},zD={class:"min-h-[120px] flex flex-col justify-center"},HD={key:0,class:"flex justify-center mb-3"},VD={key:1,class:"text-xl text-center font-semibold text-gray-200"},GD={key:3,class:"text-center text-gray-200 mt-3 mb-4"},WD={class:"mt-3 flex-grow"},XD={class:"mr-2 mt-[2px]"},YD={key:1,class:"text-gray-300"},$D={class:"text-gray-300"},qD={key:1},jD={class:"text-gray-300"},Nh=Zn({__name:"TierCard",props:{icon:{},bullet:{},product:{},color:{default:"black"},title:{},subtitle:{},description:{},titleSize:{default:"text-lg"},titleWeight:{default:"font-light"},hoverEffect:{default:"none"}},setup(n){const t=n;return(e,i)=>($t(),te("div",kD,[ft("div",zD,[t.icon?($t(),te("div",HD,[($t(),Il(wu(t.icon),{class:ii(`w-10 h-10 ${t.color}`)},null,8,["class"]))])):yi("",!0),t.product?($t(),te("h2",VD,ni(t.product),1)):yi("",!0),t.title?($t(),te("h3",{key:2,class:ii(`${t.titleSize} ${t.titleWeight} text-center text-gray-200 mb-2`)},ni(t.title),3)):yi("",!0),t.subtitle?($t(),te("h4",GD,ni(t.subtitle),1)):yi("",!0)]),ft("div",WD,[t.description.length>1?($t(!0),te(Rn,{key:0},Pp(t.description,(r,s)=>($t(),te("div",{key:s,class:"flex items-start"},[ft("div",XD,[t.bullet?($t(),Il(wu(t.bullet),{key:0,class:"w-5 h-5 text-sky-500"})):($t(),te("span",YD,"•"))]),ft("p",$D,ni(r),1)]))),128)):t.description.length===1?($t(),te("div",qD,[ft("p",jD,ni(t.description[0]),1)])):yi("",!0)])]))}}),KD={xmlns:"http://www.w3.org/2000/svg",width:"300",height:"300",fill:"currentcolor",version:"1.0",viewBox:"0 0 225 225"};function ZD(n,t){return $t(),te("svg",KD,t[0]||(t[0]=[ft("path",{d:"m163.9 19.9-2.4 1.9-.3 39.1c-.2 21.5-.5 39.1-.7 39.1s-11.5-6.4-25.2-14.3C91 60.1 90.9 60.1 87 64c-1.8 1.8-2 3.3-2 19 0 9.3-.2 17-.5 17-.2 0-15.4-8.6-33.7-19-18.3-10.5-34.1-19-35.3-19-1.1 0-3.1.7-4.3 1.6L9 65.1v69.3c0 63.3.1 69.5 1.7 70.7 2.4 2.1 201.2 2.1 203.6 0 1.6-1.2 1.7-8.9 1.7-92.7V21.1l-2.2-1.5c-1.9-1.3-6-1.6-24.9-1.6-20.8 0-22.9.2-25 1.9m39.1 92.6V193H22v-56.1c0-47.9.2-56 1.4-55.6.8.3 13 7.3 27.3 15.5 36.4 21 38.7 22.2 41.5 22.2 4.9 0 5.8-2.5 5.9-16.6.1-7.1.4-14.8.8-17.2l.6-4.2 33.2 19c18.2 10.4 34.2 19 35.5 19 3.7 0 5-1.5 5.9-6.6.4-2.7.8-21.9.8-42.7L175 32h28z"},null,-1),ft("path",{d:"M34 138c-1.8 1.8-2 3.3-2 16 0 19.1-1.5 18 22.8 18 24.1 0 22.7 1.1 22.7-18s1.4-18-22.7-18c-17.5 0-18.9.1-20.8 2m30 16v5H46v-10h18zm28-16c-1.8 1.8-2 3.3-2 16.3 0 12.7.2 14.6 1.8 16 1.6 1.5 4.6 1.7 20.9 1.7 17.1 0 19.2-.2 20.6-1.8s1.7-4.3 1.7-16.4c0-12.8-.2-14.7-1.8-16.1-1.6-1.5-4.6-1.7-20.5-1.7-17.4 0-18.8.1-20.7 2m29.5 16v4.5h-18l-.3-3.3c-.6-6-.2-6.3 9.5-6l8.8.3zm28.2-16.2c-1.4 1.6-1.7 4.3-1.7 16.4 0 12.8.2 14.7 1.8 16.1 1.6 1.5 4.6 1.7 21 1.7 23.7 0 22.2 1.3 22.2-18s1.6-18-22.4-18c-17.4 0-19.5.2-20.9 1.8m29.8 16.2v4.5h-18l-.3-4.8-.3-4.8 9.3.3 9.3.3z"},null,-1)]))}const JD={render:ZD},QD={id:"suppliers-section",class:"scroll-mt-[7rem] relative",style:{"min-height":"500vh"}},tL={class:"sticky top-0 h-screen flex items-center justify-start px-8 md:px-16 lg:px-20"},eL={class:"w-full md:w-1/2 relative"},nL={class:"w-full max-w-md"},iL={class:"w-full max-w-md"},rL={class:"w-full max-w-md"},sL=Zn({__name:"SuppliersSection",setup(n){const t=[{icon:JD,bullet:Or,color:"text-emerald-500",tier:"Tier 1",title:"Manufacturers",subtitle:"Large-scale operations with advanced systems",description:["API Integration","Real-time data sync","ERP connectivity","Automated compliance"]},{icon:tD,bullet:Or,color:"text-blue-500",tier:"Tier 2-3",title:"Suppliers",subtitle:"Mid-scale operations with structured processes",description:["CSV Upload","Batch processing","Template-based entry","Quality verification"]},{icon:aD,bullet:Or,color:"text-indigo-500",tier:"Tier 4",title:"Artisans",subtitle:"Small-scale craftspeople and workshops",description:["Mobile capture","Photo documentation","Voice notes","Simple interfaces"]}],e=ne(1),i=ne(0),r=ne(0),s=ne(0),o=ne(0),a=ne(0),l=ne(0),c=ne(0),u=()=>{const f=document.getElementById("suppliers-section");if(!f)return;const d=f.getBoundingClientRect(),h=d.top,g=d.height,_=window.innerHeight,m=h-_,p=g+_,y=Math.max(0,Math.min(1,-m/p));if(y<.3)e.value=1,i.value=0;else if(y>=.3&&y<.35){const E=(y-.3)/.05;e.value=1-E,i.value=E*50}else e.value=0,i.value=50;if(y<.33)r.value=0,s.value=-30;else if(y>=.33&&y<.38){const E=(y-.33)/.05;r.value=E,s.value=-30+E*30}else if(y>=.38&&y<.52)r.value=1,s.value=0;else if(y>=.52&&y<.58){const E=(y-.52)/.06;r.value=1-E,s.value=E*50}else r.value=0,s.value=50;if(y<.56)o.value=0,a.value=-30;else if(y>=.56&&y<.61){const E=(y-.56)/.05;o.value=E,a.value=-30+E*30}else if(y>=.61&&y<.74)o.value=1,a.value=0;else if(y>=.74&&y<.8){const E=(y-.74)/.06;o.value=1-E,a.value=E*50}else o.value=0,a.value=50;if(y<.78)l.value=0,c.value=-30;else if(y>=.78&&y<.83){const E=(y-.78)/.05;l.value=E,c.value=-30+E*30}else if(y>=.83&&y<.88)l.value=1,c.value=0;else if(y>=.88&&y<.93){const E=(y-.88)/.05;l.value=1-E,c.value=E*50}else l.value=0,c.value=50};return Mr(()=>{window.addEventListener("scroll",u,{passive:!0}),u()}),Ds(()=>{window.removeEventListener("scroll",u)}),(f,d)=>($t(),te("section",QD,[ft("div",tL,[ft("div",eL,[ft("div",{class:"absolute inset-0 flex flex-col justify-center items-center",style:Qe({opacity:e.value,transform:`translateX(${i.value}px)`,transition:"opacity 0.3s ease-out, transform 0.3s ease-out",pointerEvents:e.value>0?"auto":"none"})},d[0]||(d[0]=[ft("div",{class:"max-w-xl"},[ft("h2",{class:"text-4xl md:text-5xl font-bold text-gray-100 mb-6"}," Data Collection for Every Scale "),ft("p",{class:"text-lg text-gray-300 leading-relaxed"}," Whether you're a large manufacturer or a small artisan, we have the right solution for your data collection needs. Integrate sustainability data with systems tailored to your operational capacity, generate Digital Product Passports, and ensure compliance with evolving EU regulations while connecting with EU brands seeking DPP compliance. ")],-1)]),4),ft("div",{class:"absolute inset-0 flex items-center",style:Qe({opacity:r.value,transform:`translateX(${s.value}px)`,transition:"opacity 0.3s ease-out, transform 0.3s ease-out",pointerEvents:r.value>0?"auto":"none"})},[ft("div",nL,[se(Nh,{hoverEffect:"none",product:t[0].tier,bullet:t[0].bullet,color:t[0].color,icon:t[0].icon,title:t[0].title,subtitle:t[0].subtitle,description:t[0].description},null,8,["product","bullet","color","icon","title","subtitle","description"])])],4),ft("div",{class:"absolute inset-0 flex items-center",style:Qe({opacity:o.value,transform:`translateX(${a.value}px)`,transition:"opacity 0.3s ease-out, transform 0.3s ease-out",pointerEvents:o.value>0?"auto":"none"})},[ft("div",iL,[se(Nh,{hoverEffect:"none",product:t[1].tier,bullet:t[1].bullet,color:t[1].color,icon:t[1].icon,title:t[1].title,subtitle:t[1].subtitle,description:t[1].description},null,8,["product","bullet","color","icon","title","subtitle","description"])])],4),ft("div",{class:"absolute inset-0 flex items-center",style:Qe({opacity:l.value,transform:`translateX(${c.value}px)`,transition:"opacity 0.3s ease-out, transform 0.3s ease-out",pointerEvents:l.value>0?"auto":"none"})},[ft("div",rL,[se(Nh,{hoverEffect:"none",product:t[2].tier,bullet:t[2].bullet,color:t[2].color,icon:t[2].icon,title:t[2].title,subtitle:t[2].subtitle,description:t[2].description},null,8,["product","bullet","color","icon","title","subtitle","description"])])],4)]),d[1]||(d[1]=ft("div",{class:"hidden md:block w-1/2"},null,-1))])]))}}),oL={class:"space-y-4"},aL=["onClick","title"],lL={class:ii(["ml-4 px-3 py-1.5 bg-gray-900/95 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap shadow-lg","transition-all duration-300 transform","group-hover:opacity-100 group-hover:translate-x-0","opacity-0 -translate-x-2 pointer-events-none","relative"])},cL=Zn({__name:"SectionNavigator",setup(n){const t=ne([{id:"hero-section",label:"Hero"},{id:"info-section",label:"About Us"},{id:"suppliers-section",label:"Data Collection"},{id:"partners-section",label:"Partners"},{id:"contact-section",label:"Contact"}]),e=ne(""),i=ne(!1),r=l=>{const c=document.getElementById(l);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},s=()=>{const l=window.scrollY+100;let c=t.value[0]?.id||"";for(let d=t.value.length-1;d>=0;d--){const h=t.value[d],g=document.getElementById(h.id);if(g){const _=g.offsetTop,m=_+g.offsetHeight;if(l>=_&&l<m){c=h.id;break}}}if(!c){const d=t.value[t.value.length-1],h=document.getElementById(d.id);h&&l>=h.offsetTop&&(c=d.id)}e.value=c;const u=document.getElementById("hero-section"),f=document.getElementById("info-section");if(u&&f){const d=u.offsetTop+u.offsetHeight,h=f.offsetTop+f.offsetHeight/2;window.scrollY>=h?i.value=!0:window.scrollY<d&&(i.value=!1)}};let o=!1;const a=()=>{o||(requestAnimationFrame(()=>{s(),o=!1}),o=!0)};return Mr(()=>{t.value.forEach(l=>{l.element=document.getElementById(l.id)||void 0}),window.addEventListener("scroll",a,{passive:!0}),s()}),Ds(()=>{window.removeEventListener("scroll",a)}),(l,c)=>($t(),te("nav",{class:ii(["fixed left-6 top-1/2 -translate-y-1/2 z-40","transition-all duration-300 ease-in-out",{"opacity-100 translate-x-0":i.value,"opacity-0 -translate-x-4 pointer-events-none":!i.value}])},[ft("ul",oL,[($t(!0),te(Rn,null,Pp(t.value,u=>($t(),te("li",{key:u.id,class:"group flex items-center"},[ft("button",{onClick:f=>r(u.id),class:"w-3 h-3 rounded-full border-2 transition-all duration-300 bg-transparent border-slate-400 hover:border-emerald-400 hover:bg-emerald-400/20 hover:scale-150 hover:shadow-lg",title:u.label},null,8,aL),ft("span",lL,[yv(ni(u.label)+" ",1),c[0]||(c[0]=ft("div",{class:"absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[6px] border-transparent border-r-gray-900/95"},null,-1))])]))),128))])],2))}}),uL=xf(cL,[["__scopeId","data-v-88fbb9d0"]]),fL=Zn({__name:"BackToTop",setup(n){const t=ne(!1),e=ne(!1),i=()=>{e.value=!0,window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{e.value=!1},1e3)},r=()=>{const a=window.scrollY,l=window.innerHeight*.5;t.value=a>l};let s=!1;const o=()=>{s||(requestAnimationFrame(()=>{r(),s=!1}),s=!0)};return Mr(()=>{window.addEventListener("scroll",o,{passive:!0}),r()}),Ds(()=>{window.removeEventListener("scroll",o)}),(a,l)=>($t(),te("button",{onClick:i,class:ii(["fixed bottom-8 right-8 z-40","w-12 h-12 rounded-full","bg-emerald-500 hover:bg-emerald-600","text-white shadow-lg hover:shadow-xl","transition-all duration-300 ease-in-out","flex items-center justify-center","hover:scale-110 active:scale-95",{"opacity-100 translate-y-0":t.value,"opacity-0 translate-y-4 pointer-events-none":!t.value,"animate-pulse":e.value}]),title:"Back to top","aria-label":"Back to top"},[se(so(iD),{class:ii(["w-6 h-6 transition-transform duration-200",{"animate-bounce":e.value}])},null,8,["class"])],2))}}),hL=xf(fL,[["__scopeId","data-v-c72012bb"]]);$l.registerPlugin(he);function dL(){return{setupStackedCards:()=>{$l.utils.toArray(".stacked-section").forEach((i,r)=>{$l.timeline({scrollTrigger:{trigger:i,start:"top bottom",end:"+=500",scrub:1,markers:!1}}).from(i,{y:100,opacity:0,scale:.95,duration:.5})})},initTextAnimations:()=>{console.log("Text animations initialized")}}}const pL={class:"stacked-section"},mL={class:"stacked-section"},_L={class:"stacked-section"},gL={class:"stacked-section"},vL={class:"stacked-section"},xL=Zn({__name:"LandingPage",setup(n){const{setupStackedCards:t,initTextAnimations:e}=dL();return $l.registerPlugin(he),of(()=>{he.getAll().forEach(i=>i.kill())}),Mr(()=>{t(),e()}),(i,r)=>($t(),te(Rn,null,[se(B2),se(uL,{class:"hidden md:block"}),se(hL),ft("div",pL,[se(H2)]),ft("div",mL,[se(G2)]),ft("div",_L,[se(sL)]),ft("div",gL,[se(MD)]),ft("div",vL,[se(PD)]),ft("div",null,[se(BD)])],64))}}),yL=[{path:"/",name:"Home",component:xL}],SL=pE({history:G1("/"),routes:yL});o1(h1).use(SL).mount("#app");
