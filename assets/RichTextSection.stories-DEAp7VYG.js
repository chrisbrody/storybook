import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as z}from"./iframe-C4F5Wsps.js";import{A as X}from"./aspect-ratio-BlqoowAP.js";import{A as be,a as we}from"./avatar-BXKpu5sJ.js";import{c as Y}from"./utils-CBfrqCZ4.js";import{B as rt}from"./button-BtygbSEA.js";import{c as jt}from"./createLucideIcon-BWCPTp9Q.js";import{A as Nt}from"./arrow-right-DFZs-4fY.js";import{S as ve}from"./index-C2MAhB09.js";import"./index-C9Slkayp.js";import"./index-DqKtVurf.js";import"./index-p9OL3TDr.js";import"./index-qQj7_9J8.js";import"./index-j4SvaIMV.js";import"./index-CJY9B7Q6.js";import"./index-CdJFUDDL.js";import"./card-DACywz4B.js";import"./index-B7aZHQrd.js";import"./index-Dg3S6fvs.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],It=jt("arrow-left",kt);function St(t){return Object.prototype.toString.call(t)==="[object Object]"}function nt(t){return St(t)||Array.isArray(t)}function Tt(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Re(t,n){const a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;const o=JSON.stringify(Object.keys(t.breakpoints||{})),s=JSON.stringify(Object.keys(n.breakpoints||{}));return o!==s?!1:a.every(i=>{const d=t[i],l=n[i];return typeof d=="function"?`${d}`==`${l}`:!nt(d)||!nt(l)?d===l:Re(d,l)})}function at(t){return t.concat().sort((n,a)=>n.name>a.name?1:-1).map(n=>n.options)}function Pt(t,n){if(t.length!==n.length)return!1;const a=at(t),r=at(n);return a.every((o,s)=>{const i=r[s];return Re(o,i)})}function Ve(t){return typeof t=="number"}function Be(t){return typeof t=="string"}function Le(t){return typeof t=="boolean"}function it(t){return Object.prototype.toString.call(t)==="[object Object]"}function F(t){return Math.abs(t)}function Je(t){return Math.sign(t)}function fe(t,n){return F(t-n)}function Et(t,n){if(t===0||n===0||F(t)<=F(n))return 0;const a=fe(F(t),F(n));return F(a/t)}function Ct(t){return Math.round(t*100)/100}function pe(t){return me(t).map(Number)}function _(t){return t[ye(t)]}function ye(t){return Math.max(0,t.length-1)}function $e(t,n){return n===ye(t)}function st(t,n=0){return Array.from(Array(t),(a,r)=>n+r)}function me(t){return Object.keys(t)}function ot(t,n){return[t,n].reduce((a,r)=>(me(r).forEach(o=>{const s=a[o],i=r[o],d=it(s)&&it(i);a[o]=d?ot(s,i):i}),a),{})}function We(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function Dt(t,n){const a={start:r,center:o,end:s};function r(){return 0}function o(l){return s(l)/2}function s(l){return n-l}function i(l,c){return Be(t)?a[t](l):t(n,l,c)}return{measure:i}}function ge(){let t=[];function n(o,s,i,d={passive:!0}){let l;if("addEventListener"in o)o.addEventListener(s,i,d),l=()=>o.removeEventListener(s,i,d);else{const c=o;c.addListener(i),l=()=>c.removeListener(i)}return t.push(l),r}function a(){t=t.filter(o=>o())}const r={add:n,clear:a};return r}function Ot(t,n,a,r){const o=ge(),s=1e3/60;let i=null,d=0,l=0;function c(){o.add(t,"visibilitychange",()=>{t.hidden&&h()})}function b(){v(),o.clear()}function p(w){if(!l)return;i||(i=w,a(),a());const f=w-i;for(i=w,d+=f;d>=s;)a(),d-=s;const y=d/s;r(y),l&&(l=n.requestAnimationFrame(p))}function m(){l||(l=n.requestAnimationFrame(p))}function v(){n.cancelAnimationFrame(l),i=null,d=0,l=0}function h(){i=null,d=0}return{init:c,destroy:b,start:m,stop:v,update:a,render:r}}function Lt(t,n){const a=n==="rtl",r=t==="y",o=r?"y":"x",s=r?"x":"y",i=!r&&a?-1:1,d=b(),l=p();function c(h){const{height:g,width:w}=h;return r?g:w}function b(){return r?"top":a?"right":"left"}function p(){return r?"bottom":a?"left":"right"}function m(h){return h*i}return{scroll:o,cross:s,startEdge:d,endEdge:l,measureSize:c,direction:m}}function re(t=0,n=0){const a=F(t-n);function r(c){return c<t}function o(c){return c>n}function s(c){return r(c)||o(c)}function i(c){return s(c)?r(c)?t:n:c}function d(c){return a?c-a*Math.ceil((c-n)/a):c}return{length:a,max:n,min:t,constrain:i,reachedAny:s,reachedMax:o,reachedMin:r,removeOffset:d}}function lt(t,n,a){const{constrain:r}=re(0,t),o=t+1;let s=i(n);function i(m){return a?F((o+m)%o):r(m)}function d(){return s}function l(m){return s=i(m),p}function c(m){return b().set(d()+m)}function b(){return lt(t,d(),a)}const p={get:d,set:l,add:c,clone:b};return p}function At(t,n,a,r,o,s,i,d,l,c,b,p,m,v,h,g,w,f,y){const{cross:j,direction:T}=t,C=["INPUT","SELECT","TEXTAREA"],D={passive:!1},P=ge(),u=ge(),E=re(50,225).constrain(v.measure(20)),q={mouse:300,touch:400},O={mouse:500,touch:600},R=h?43:25;let S=!1,M=0,x=0,k=!1,I=!1,L=!1,W=!1;function K(N){if(!y)return;function A($){(Le(y)||y(N,$))&&de($)}const B=n;P.add(B,"dragstart",$=>$.preventDefault(),D).add(B,"touchmove",()=>{},D).add(B,"touchend",()=>{}).add(B,"touchstart",A).add(B,"mousedown",A).add(B,"touchcancel",J).add(B,"contextmenu",J).add(B,"click",ee,!0)}function V(){P.clear(),u.clear()}function ne(){const N=W?a:n;u.add(N,"touchmove",H,D).add(N,"touchend",J).add(N,"mousemove",H,D).add(N,"mouseup",J)}function oe(N){const A=N.nodeName||"";return C.includes(A)}function Z(){return(h?O:q)[W?"mouse":"touch"]}function ce(N,A){const B=p.add(Je(N)*-1),$=b.byDistance(N,!h).distance;return h||F(N)<E?$:w&&A?$*.5:b.byIndex(B.get(),0).distance}function de(N){const A=We(N,r);W=A,L=h&&A&&!N.buttons&&S,S=fe(o.get(),i.get())>=2,!(A&&N.button!==0)&&(oe(N.target)||(k=!0,s.pointerDown(N),c.useFriction(0).useDuration(0),o.set(i),ne(),M=s.readPoint(N),x=s.readPoint(N,j),m.emit("pointerDown")))}function H(N){if(!We(N,r)&&N.touches.length>=2)return J(N);const B=s.readPoint(N),$=s.readPoint(N,j),Q=fe(B,M),te=fe($,x);if(!I&&!W&&(!N.cancelable||(I=Q>te,!I)))return J(N);const ie=s.pointerMove(N);Q>g&&(L=!0),c.useFriction(.3).useDuration(.75),d.start(),o.add(T(ie)),N.preventDefault()}function J(N){const B=b.byDistance(0,!1).index!==p.get(),$=s.pointerUp(N)*Z(),Q=ce(T($),B),te=Et($,Q),ie=R-10*te,ae=f+te/50;I=!1,k=!1,u.clear(),c.useDuration(ie).useFriction(ae),l.distance(Q,!h),W=!1,m.emit("pointerUp")}function ee(N){L&&(N.stopPropagation(),N.preventDefault(),L=!1)}function U(){return k}return{init:K,destroy:V,pointerDown:U}}function Mt(t,n){let r,o;function s(p){return p.timeStamp}function i(p,m){const h=`client${(m||t.scroll)==="x"?"X":"Y"}`;return(We(p,n)?p:p.touches[0])[h]}function d(p){return r=p,o=p,i(p)}function l(p){const m=i(p)-i(o),v=s(p)-s(r)>170;return o=p,v&&(r=p),m}function c(p){if(!r||!o)return 0;const m=i(o)-i(r),v=s(p)-s(r),h=s(p)-s(o)>170,g=m/v;return v&&!h&&F(g)>.1?g:0}return{pointerDown:d,pointerMove:l,pointerUp:c,readPoint:i}}function Gt(){function t(a){const{offsetTop:r,offsetLeft:o,offsetWidth:s,offsetHeight:i}=a;return{top:r,right:o+s,bottom:r+i,left:o,width:s,height:i}}return{measure:t}}function zt(t){function n(r){return t*(r/100)}return{measure:n}}function Ft(t,n,a,r,o,s,i){const d=[t].concat(r);let l,c,b=[],p=!1;function m(w){return o.measureSize(i.measure(w))}function v(w){if(!s)return;c=m(t),b=r.map(m);function f(y){for(const j of y){if(p)return;const T=j.target===t,C=r.indexOf(j.target),D=T?c:b[C],P=m(T?t:r[C]);if(F(P-D)>=.5){w.reInit(),n.emit("resize");break}}}l=new ResizeObserver(y=>{(Le(s)||s(w,y))&&f(y)}),a.requestAnimationFrame(()=>{d.forEach(y=>l.observe(y))})}function h(){p=!0,l&&l.disconnect()}return{init:v,destroy:h}}function qt(t,n,a,r,o,s){let i=0,d=0,l=o,c=s,b=t.get(),p=0;function m(){const D=r.get()-t.get(),P=!l;let u=0;return P?(i=0,a.set(r),t.set(r),u=D):(a.set(t),i+=D/l,i*=c,b+=i,t.add(i),u=b-p),d=Je(u),p=b,C}function v(){const D=r.get()-n.get();return F(D)<.001}function h(){return l}function g(){return d}function w(){return i}function f(){return j(o)}function y(){return T(s)}function j(D){return l=D,C}function T(D){return c=D,C}const C={direction:g,duration:h,velocity:w,seek:m,settled:v,useBaseFriction:y,useBaseDuration:f,useFriction:T,useDuration:j};return C}function Bt(t,n,a,r,o){const s=o.measure(10),i=o.measure(50),d=re(.1,.99);let l=!1;function c(){return!(l||!t.reachedAny(a.get())||!t.reachedAny(n.get()))}function b(v){if(!c())return;const h=t.reachedMin(n.get())?"min":"max",g=F(t[h]-n.get()),w=a.get()-n.get(),f=d.constrain(g/i);a.subtract(w*f),!v&&F(w)<s&&(a.set(t.constrain(a.get())),r.useDuration(25).useBaseFriction())}function p(v){l=!v}return{shouldConstrain:c,constrain:b,toggleActive:p}}function Wt(t,n,a,r,o){const s=re(-n+t,0),i=p(),d=b(),l=m();function c(h,g){return fe(h,g)<=1}function b(){const h=i[0],g=_(i),w=i.lastIndexOf(h),f=i.indexOf(g)+1;return re(w,f)}function p(){return a.map((h,g)=>{const{min:w,max:f}=s,y=s.constrain(h),j=!g,T=$e(a,g);return j?f:T||c(w,y)?w:c(f,y)?f:y}).map(h=>parseFloat(h.toFixed(3)))}function m(){if(n<=t+o)return[s.max];if(r==="keepSnaps")return i;const{min:h,max:g}=d;return i.slice(h,g)}return{snapsContained:l,scrollContainLimit:d}}function Rt(t,n,a){const r=n[0],o=a?r-t:_(n);return{limit:re(o,r)}}function Vt(t,n,a,r){const s=n.min+.1,i=n.max+.1,{reachedMin:d,reachedMax:l}=re(s,i);function c(m){return m===1?l(a.get()):m===-1?d(a.get()):!1}function b(m){if(!c(m))return;const v=t*(m*-1);r.forEach(h=>h.add(v))}return{loop:b}}function Jt(t){const{max:n,length:a}=t;function r(s){const i=s-n;return a?i/-a:0}return{get:r}}function $t(t,n,a,r,o){const{startEdge:s,endEdge:i}=t,{groupSlides:d}=o,l=p().map(n.measure),c=m(),b=v();function p(){return d(r).map(g=>_(g)[i]-g[0][s]).map(F)}function m(){return r.map(g=>a[s]-g[s]).map(g=>-F(g))}function v(){return d(c).map(g=>g[0]).map((g,w)=>g+l[w])}return{snaps:c,snapsAligned:b}}function Ht(t,n,a,r,o,s){const{groupSlides:i}=o,{min:d,max:l}=r,c=b();function b(){const m=i(s),v=!t||n==="keepSnaps";return a.length===1?[s]:v?m:m.slice(d,l).map((h,g,w)=>{const f=!g,y=$e(w,g);if(f){const j=_(w[0])+1;return st(j)}if(y){const j=ye(s)-_(w)[0]+1;return st(j,_(w)[0])}return h})}return{slideRegistry:c}}function Ut(t,n,a,r,o){const{reachedAny:s,removeOffset:i,constrain:d}=r;function l(h){return h.concat().sort((g,w)=>F(g)-F(w))[0]}function c(h){const g=t?i(h):d(h),w=n.map((y,j)=>({diff:b(y-g,0),index:j})).sort((y,j)=>F(y.diff)-F(j.diff)),{index:f}=w[0];return{index:f,distance:g}}function b(h,g){const w=[h,h+a,h-a];if(!t)return h;if(!g)return l(w);const f=w.filter(y=>Je(y)===g);return f.length?l(f):_(w)-a}function p(h,g){const w=n[h]-o.get(),f=b(w,g);return{index:h,distance:f}}function m(h,g){const w=o.get()+h,{index:f,distance:y}=c(w),j=!t&&s(w);if(!g||j)return{index:f,distance:h};const T=n[f]-y,C=h+b(T,0);return{index:f,distance:C}}return{byDistance:m,byIndex:p,shortcut:b}}function Kt(t,n,a,r,o,s,i){function d(p){const m=p.distance,v=p.index!==n.get();s.add(m),m&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),v&&(a.set(n.get()),n.set(p.index),i.emit("select"))}function l(p,m){const v=o.byDistance(p,m);d(v)}function c(p,m){const v=n.clone().set(p),h=o.byIndex(v.get(),m);d(h)}return{distance:l,index:c}}function _t(t,n,a,r,o,s,i,d){const l={passive:!0,capture:!0};let c=0;function b(v){if(!d)return;function h(g){if(new Date().getTime()-c>10)return;i.emit("slideFocusStart"),t.scrollLeft=0;const y=a.findIndex(j=>j.includes(g));Ve(y)&&(o.useDuration(0),r.index(y,0),i.emit("slideFocus"))}s.add(document,"keydown",p,!1),n.forEach((g,w)=>{s.add(g,"focus",f=>{(Le(d)||d(v,f))&&h(w)},l)})}function p(v){v.code==="Tab"&&(c=new Date().getTime())}return{init:b}}function he(t){let n=t;function a(){return n}function r(l){n=i(l)}function o(l){n+=i(l)}function s(l){n-=i(l)}function i(l){return Ve(l)?l:l.get()}return{get:a,set:r,add:o,subtract:s}}function ct(t,n){const a=t.scroll==="x"?i:d,r=n.style;let o=null,s=!1;function i(m){return`translate3d(${m}px,0px,0px)`}function d(m){return`translate3d(0px,${m}px,0px)`}function l(m){if(s)return;const v=Ct(t.direction(m));v!==o&&(r.transform=a(v),o=v)}function c(m){s=!m}function b(){s||(r.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:b,to:l,toggleActive:c}}function Qt(t,n,a,r,o,s,i,d,l){const b=pe(o),p=pe(o).reverse(),m=f().concat(y());function v(P,u){return P.reduce((E,q)=>E-o[q],u)}function h(P,u){return P.reduce((E,q)=>v(E,u)>0?E.concat([q]):E,[])}function g(P){return s.map((u,E)=>({start:u-r[E]+.5+P,end:u+n-.5+P}))}function w(P,u,E){const q=g(u);return P.map(O=>{const R=E?0:-a,S=E?a:0,M=E?"end":"start",x=q[O][M];return{index:O,loopPoint:x,slideLocation:he(-1),translate:ct(t,l[O]),target:()=>d.get()>x?R:S}})}function f(){const P=i[0],u=h(p,P);return w(u,a,!1)}function y(){const P=n-i[0]-1,u=h(b,P);return w(u,-a,!0)}function j(){return m.every(({index:P})=>{const u=b.filter(E=>E!==P);return v(u,n)<=.1})}function T(){m.forEach(P=>{const{target:u,translate:E,slideLocation:q}=P,O=u();O!==q.get()&&(E.to(O),q.set(O))})}function C(){m.forEach(P=>P.translate.clear())}return{canLoop:j,clear:C,loop:T,loopPoints:m}}function Xt(t,n,a){let r,o=!1;function s(l){if(!a)return;function c(b){for(const p of b)if(p.type==="childList"){l.reInit(),n.emit("slidesChanged");break}}r=new MutationObserver(b=>{o||(Le(a)||a(l,b))&&c(b)}),r.observe(t,{childList:!0})}function i(){r&&r.disconnect(),o=!0}return{init:s,destroy:i}}function Yt(t,n,a,r){const o={};let s=null,i=null,d,l=!1;function c(){d=new IntersectionObserver(h=>{l||(h.forEach(g=>{const w=n.indexOf(g.target);o[w]=g}),s=null,i=null,a.emit("slidesInView"))},{root:t.parentElement,threshold:r}),n.forEach(h=>d.observe(h))}function b(){d&&d.disconnect(),l=!0}function p(h){return me(o).reduce((g,w)=>{const f=parseInt(w),{isIntersecting:y}=o[f];return(h&&y||!h&&!y)&&g.push(f),g},[])}function m(h=!0){if(h&&s)return s;if(!h&&i)return i;const g=p(h);return h&&(s=g),h||(i=g),g}return{init:c,destroy:b,get:m}}function Zt(t,n,a,r,o,s){const{measureSize:i,startEdge:d,endEdge:l}=t,c=a[0]&&o,b=h(),p=g(),m=a.map(i),v=w();function h(){if(!c)return 0;const y=a[0];return F(n[d]-y[d])}function g(){if(!c)return 0;const y=s.getComputedStyle(_(r));return parseFloat(y.getPropertyValue(`margin-${l}`))}function w(){return a.map((y,j,T)=>{const C=!j,D=$e(T,j);return C?m[j]+b:D?m[j]+p:T[j+1][d]-y[d]}).map(F)}return{slideSizes:m,slideSizesWithGaps:v,startGap:b,endGap:p}}function en(t,n,a,r,o,s,i,d,l){const{startEdge:c,endEdge:b,direction:p}=t,m=Ve(a);function v(f,y){return pe(f).filter(j=>j%y===0).map(j=>f.slice(j,j+y))}function h(f){return f.length?pe(f).reduce((y,j,T)=>{const C=_(y)||0,D=C===0,P=j===ye(f),u=o[c]-s[C][c],E=o[c]-s[j][b],q=!r&&D?p(i):0,O=!r&&P?p(d):0,R=F(E-O-(u+q));return T&&R>n+l&&y.push(j),P&&y.push(f.length),y},[]).map((y,j,T)=>{const C=Math.max(T[j-1]||0);return f.slice(C,y)}):[]}function g(f){return m?v(f,a):h(f)}return{groupSlides:g}}function tn(t,n,a,r,o,s,i){const{align:d,axis:l,direction:c,startIndex:b,loop:p,duration:m,dragFree:v,dragThreshold:h,inViewThreshold:g,slidesToScroll:w,skipSnaps:f,containScroll:y,watchResize:j,watchSlides:T,watchDrag:C,watchFocus:D}=s,P=2,u=Gt(),E=u.measure(n),q=a.map(u.measure),O=Lt(l,c),R=O.measureSize(E),S=zt(R),M=Dt(d,R),x=!p&&!!y,k=p||!!y,{slideSizes:I,slideSizesWithGaps:L,startGap:W,endGap:K}=Zt(O,E,q,a,k,o),V=en(O,R,w,p,E,q,W,K,P),{snaps:ne,snapsAligned:oe}=$t(O,M,E,q,V),Z=-_(ne)+_(L),{snapsContained:ce,scrollContainLimit:de}=Wt(R,Z,oe,y,P),H=x?ce:oe,{limit:J}=Rt(Z,H,p),ee=lt(ye(H),b,p),U=ee.clone(),G=pe(a),N=({dragHandler:le,scrollBody:Fe,scrollBounds:qe,options:{loop:xe}})=>{xe||qe.constrain(le.pointerDown()),Fe.seek()},A=({scrollBody:le,translate:Fe,location:qe,offsetLocation:xe,previousLocation:pt,scrollLooper:mt,slideLooper:gt,dragHandler:yt,animation:xt,eventHandler:Qe,scrollBounds:bt,options:{loop:Xe}},Ye)=>{const Ze=le.settled(),wt=!bt.shouldConstrain(),et=Xe?Ze:Ze&&wt,tt=et&&!yt.pointerDown();tt&&xt.stop();const vt=qe.get()*Ye+pt.get()*(1-Ye);xe.set(vt),Xe&&(mt.loop(le.direction()),gt.loop()),Fe.to(xe.get()),tt&&Qe.emit("settle"),et||Qe.emit("scroll")},B=Ot(r,o,()=>N(ze),le=>A(ze,le)),$=.68,Q=H[ee.get()],te=he(Q),ie=he(Q),ae=he(Q),se=he(Q),ue=qt(te,ae,ie,se,m,$),Me=Ut(p,H,Z,J,se),Ge=Kt(B,ee,U,ue,Me,se,i),Ue=Jt(J),Ke=ge(),ht=Yt(n,a,i,g),{slideRegistry:_e}=Ht(x,y,H,de,V,G),ft=_t(t,a,_e,Ge,ue,Ke,i,D),ze={ownerDocument:r,ownerWindow:o,eventHandler:i,containerRect:E,slideRects:q,animation:B,axis:O,dragHandler:At(O,t,r,o,se,Mt(O,o),te,B,Ge,ue,Me,ee,i,S,v,h,f,$,C),eventStore:Ke,percentOfView:S,index:ee,indexPrevious:U,limit:J,location:te,offsetLocation:ae,previousLocation:ie,options:s,resizeHandler:Ft(n,i,o,a,O,j,u),scrollBody:ue,scrollBounds:Bt(J,ae,se,ue,S),scrollLooper:Vt(Z,J,ae,[te,ae,ie,se]),scrollProgress:Ue,scrollSnapList:H.map(Ue.get),scrollSnaps:H,scrollTarget:Me,scrollTo:Ge,slideLooper:Qt(O,R,Z,I,L,ne,H,ae,a),slideFocus:ft,slidesHandler:Xt(n,i,T),slidesInView:ht,slideIndexes:G,slideRegistry:_e,slidesToScroll:V,target:se,translate:ct(O,n)};return ze}function nn(){let t={},n;function a(c){n=c}function r(c){return t[c]||[]}function o(c){return r(c).forEach(b=>b(n,c)),l}function s(c,b){return t[c]=r(c).concat([b]),l}function i(c,b){return t[c]=r(c).filter(p=>p!==b),l}function d(){t={}}const l={init:a,emit:o,off:i,on:s,clear:d};return l}const an={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function sn(t){function n(s,i){return ot(s,i||{})}function a(s){const i=s.breakpoints||{},d=me(i).filter(l=>t.matchMedia(l).matches).map(l=>i[l]).reduce((l,c)=>n(l,c),{});return n(s,d)}function r(s){return s.map(i=>me(i.breakpoints||{})).reduce((i,d)=>i.concat(d),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:a,optionsMediaQueries:r}}function rn(t){let n=[];function a(s,i){return n=i.filter(({options:d})=>t.optionsAtMedia(d).active!==!1),n.forEach(d=>d.init(s,t)),i.reduce((d,l)=>Object.assign(d,{[l.name]:l}),{})}function r(){n=n.filter(s=>s.destroy())}return{init:a,destroy:r}}function Te(t,n,a){const r=t.ownerDocument,o=r.defaultView,s=sn(o),i=rn(s),d=ge(),l=nn(),{mergeOptions:c,optionsAtMedia:b,optionsMediaQueries:p}=s,{on:m,off:v,emit:h}=l,g=O;let w=!1,f,y=c(an,Te.globalOptions),j=c(y),T=[],C,D,P;function u(){const{container:G,slides:N}=j;D=(Be(G)?t.querySelector(G):G)||t.children[0];const B=Be(N)?D.querySelectorAll(N):N;P=[].slice.call(B||D.children)}function E(G){const N=tn(t,D,P,r,o,G,l);if(G.loop&&!N.slideLooper.canLoop()){const A=Object.assign({},G,{loop:!1});return E(A)}return N}function q(G,N){w||(y=c(y,G),j=b(y),T=N||T,u(),f=E(j),p([y,...T.map(({options:A})=>A)]).forEach(A=>d.add(A,"change",O)),j.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(U),f.eventHandler.init(U),f.resizeHandler.init(U),f.slidesHandler.init(U),f.options.loop&&f.slideLooper.loop(),D.offsetParent&&P.length&&f.dragHandler.init(U),C=i.init(U,T)))}function O(G,N){const A=V();R(),q(c({startIndex:A},G),N),l.emit("reInit")}function R(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),i.destroy(),d.clear()}function S(){w||(w=!0,d.clear(),R(),l.emit("destroy"),l.clear())}function M(G,N,A){!j.active||w||(f.scrollBody.useBaseFriction().useDuration(N===!0?0:j.duration),f.scrollTo.index(G,A||0))}function x(G){const N=f.index.add(1).get();M(N,G,-1)}function k(G){const N=f.index.add(-1).get();M(N,G,1)}function I(){return f.index.add(1).get()!==V()}function L(){return f.index.add(-1).get()!==V()}function W(){return f.scrollSnapList}function K(){return f.scrollProgress.get(f.offsetLocation.get())}function V(){return f.index.get()}function ne(){return f.indexPrevious.get()}function oe(){return f.slidesInView.get()}function Z(){return f.slidesInView.get(!1)}function ce(){return C}function de(){return f}function H(){return t}function J(){return D}function ee(){return P}const U={canScrollNext:I,canScrollPrev:L,containerNode:J,internalEngine:de,destroy:S,off:v,on:m,emit:h,plugins:ce,previousScrollSnap:ne,reInit:g,rootNode:H,scrollNext:x,scrollPrev:k,scrollProgress:K,scrollSnapList:W,scrollTo:M,selectedScrollSnap:V,slideNodes:ee,slidesInView:oe,slidesNotInView:Z};return q(n,a),setTimeout(()=>l.emit("init"),0),U}Te.globalOptions=void 0;function He(t={},n=[]){const a=z.useRef(t),r=z.useRef(n),[o,s]=z.useState(),[i,d]=z.useState(),l=z.useCallback(()=>{o&&o.reInit(a.current,r.current)},[o]);return z.useEffect(()=>{Re(a.current,t)||(a.current=t,l())},[t,l]),z.useEffect(()=>{Pt(r.current,n)||(r.current=n,l())},[n,l]),z.useEffect(()=>{if(Tt()&&i){Te.globalOptions=He.globalOptions;const c=Te(i,a.current,r.current);return s(c),()=>c.destroy()}else s(void 0)},[i,s]),[d,o]}He.globalOptions=void 0;const dt=z.createContext(null);function Ae(){const t=z.useContext(dt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const Pe=z.forwardRef(({orientation:t="horizontal",opts:n,setApi:a,plugins:r,className:o,children:s,...i},d)=>{const[l,c]=He({...n,axis:t==="horizontal"?"x":"y"},r),[b,p]=z.useState(!1),[m,v]=z.useState(!1),h=z.useCallback(y=>{y&&(p(y.canScrollPrev()),v(y.canScrollNext()))},[]),g=z.useCallback(()=>{c?.scrollPrev()},[c]),w=z.useCallback(()=>{c?.scrollNext()},[c]),f=z.useCallback(y=>{y.key==="ArrowLeft"?(y.preventDefault(),g()):y.key==="ArrowRight"&&(y.preventDefault(),w())},[g,w]);return z.useEffect(()=>{!c||!a||a(c)},[c,a]),z.useEffect(()=>{if(c)return h(c),c.on("reInit",h),c.on("select",h),()=>{c?.off("select",h)}},[c,h]),e.jsx(dt.Provider,{value:{carouselRef:l,api:c,opts:n,orientation:t||(n?.axis==="y"?"vertical":"horizontal"),scrollPrev:g,scrollNext:w,canScrollPrev:b,canScrollNext:m},children:e.jsx("div",{ref:d,onKeyDownCapture:f,className:Y("relative",o),role:"region","aria-roledescription":"carousel",...i,children:s})})});Pe.displayName="Carousel";const Ee=z.forwardRef(({className:t,...n},a)=>{const{carouselRef:r,orientation:o}=Ae();return e.jsx("div",{ref:r,className:"overflow-hidden",children:e.jsx("div",{ref:a,className:Y("flex",o==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...n})})});Ee.displayName="CarouselContent";const Ce=z.forwardRef(({className:t,...n},a)=>{const{orientation:r}=Ae();return e.jsx("div",{ref:a,role:"group","aria-roledescription":"slide",className:Y("min-w-0 shrink-0 grow-0 basis-full",r==="horizontal"?"pl-4":"pt-4",t),...n})});Ce.displayName="CarouselItem";const De=z.forwardRef(({className:t,variant:n="outline",size:a="icon",...r},o)=>{const{orientation:s,scrollPrev:i,canScrollPrev:d}=Ae();return e.jsxs(rt,{ref:o,variant:n,size:a,className:Y("absolute  h-8 w-8 rounded-full",s==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!d,onClick:i,...r,children:[e.jsx(It,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Previous slide"})]})});De.displayName="CarouselPrevious";const Oe=z.forwardRef(({className:t,variant:n="outline",size:a="icon",...r},o)=>{const{orientation:s,scrollNext:i,canScrollNext:d}=Ae();return e.jsxs(rt,{ref:o,variant:n,size:a,className:Y("absolute h-8 w-8 rounded-full",s==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!d,onClick:i,...r,children:[e.jsx(Nt,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Next slide"})]})});Oe.displayName="CarouselNext";Pe.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{opts:{required:!1,tsType:{name:"Parameters[0]",raw:"UseCarouselParameters[0]"},description:""},plugins:{required:!1,tsType:{name:"Parameters[1]",raw:"UseCarouselParameters[1]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},setApi:{required:!1,tsType:{name:"signature",type:"function",raw:"(api: CarouselApi) => void",signature:{arguments:[{type:{name:"UseEmblaCarouselType[1]",raw:"UseEmblaCarouselType[1]"},name:"api"}],return:{name:"void"}}},description:""}}};Ee.__docgenInfo={description:"",methods:[],displayName:"CarouselContent"};Ce.__docgenInfo={description:"",methods:[],displayName:"CarouselItem"};De.__docgenInfo={description:"",methods:[],displayName:"CarouselPrevious",props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};Oe.__docgenInfo={description:"",methods:[],displayName:"CarouselNext",props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};function ut({variant:t="default",date:n="Nov 11, 2024",category:a="Projects",title:r="Contemporary Kitchen Remodel - Minnetonka",description:o="A stunning transformation of a traditional kitchen into a modern, functional space that perfectly balances style and practicality for everyday living.",authorName:s="Eminent Interior Design",authorRole:i="Interior Design Studio",authorAvatar:d="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=face",featuredImage:l="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",inlineImage1:c="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=500&fit=crop",inlineImage2:b="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop",carouselImages:p,carouselImage1:m,carouselImage2:v,carouselImage3:h,carouselImage4:g,carouselImage5:w,carouselImage6:f,beforeImage:y="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",afterImage:j="https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=600&fit=crop",content:T=[{type:"paragraph",text:"This contemporary kitchen remodel in Minnetonka represents a complete transformation from a dated, compartmentalized space into an open, light-filled hub of the home. Our design approach focused on creating a seamless flow between cooking, dining, and entertaining areas while maximizing both functionality and aesthetic appeal."},{type:"heading",level:2,text:"Design Vision & Goals"},{type:"paragraph",text:"The homeowners came to us with a clear vision: they wanted a kitchen that would serve as the heart of their home, where family gatherings and dinner parties could unfold naturally. The existing kitchen felt cramped and disconnected from the dining and living areas."},{type:"image",src:"inline1",alt:"Before transformation - original cramped kitchen layout"},{type:"blockquote",text:"We wanted a space that felt both sophisticated and welcoming – somewhere our teenagers would want to hang out and do homework, but elegant enough for entertaining our friends."},{type:"heading",level:3,text:"Key Design Elements"},{type:"paragraph",text:"Our design strategy centered on several core principles that would transform this space:"},{type:"list",items:["Open floor plan connecting kitchen to dining and living areas","High-end appliances integrated seamlessly into custom cabinetry","Large island with seating for casual dining and homework","Premium materials including quartz countertops and hardwood floors","Strategic lighting design for both task and ambient illumination"]},{type:"paragraph",text:"The result is a sophisticated yet comfortable space that has truly become the heart of the home. Natural light floods the space through enlarged windows, while the neutral color palette with warm wood accents creates an inviting atmosphere that works beautifully for both everyday family life and special occasions."},{type:"heading",level:3,text:"Materials & Finishes"},{type:"paragraph",text:"We selected materials that would stand the test of time while reflecting the homeowners' refined taste. The white oak cabinetry provides warmth and texture, while the Calacatta marble island serves as a stunning focal point. Brushed brass hardware and fixtures add a touch of luxury without feeling ostentatious."},{type:"image",src:"inline2",alt:"Calacatta marble island with white oak cabinetry and brass fixtures"},{type:"paragraph",text:"The transformation has exceeded our clients' expectations, creating a space that perfectly balances style, functionality, and livability. This kitchen now serves as the perfect backdrop for everything from quiet morning coffee to lively dinner parties with friends and family."}],className:C,fontFamily:D="Inter"}={}){const u={fontFamily:{Inter:'"Inter", sans-serif',Roboto:'"Roboto", sans-serif',"Open Sans":'"Open Sans", sans-serif',"Playfair Display":'"Playfair Display", serif',"Source Code Pro":'"Source Code Pro", monospace'}[D]},E=[{src:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",alt:"Contemporary Kitchen Remodel - Minnetonka"},{src:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop",alt:"Luxury Bathroom Transformation - Wayzata"},{src:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",alt:"Modern Living Space - Edina"},{src:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",alt:"Custom Millwork & Built-ins - Plymouth"},{src:"https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",alt:"Award-Winning Master Suite - Excelsior"},{src:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop",alt:"Sophisticated Home Office - Orono"}],O=[m||E[0].src,v||E[1].src,h||E[2].src,g||E[3].src,w||E[4].src,f||E[5].src].map((S,M)=>({src:S,alt:E[M]?.alt||`Project Image ${M+1}`})),R=()=>T.map((S,M)=>{const x=`content-${M}`;switch(S.type){case"paragraph":return e.jsx("p",{className:"leading-7 break-words",style:u,children:S.text},x);case"heading":if(S.level===2)return e.jsx("h2",{className:"border-b pb-2 text-3xl font-semibold",style:u,children:S.text},x);if(S.level===3)return e.jsx("h3",{className:"mt-8 text-2xl font-semibold",style:u,children:S.text},x);break;case"blockquote":return e.jsx("blockquote",{className:"border-l-2 pl-6 italic break-words",style:u,children:S.text},x);case"list":return e.jsx("ul",{className:"ml-6 list-disc space-y-2",style:u,children:S.items?.map((L,W)=>e.jsx("li",{children:L},`${x}-item-${W}`))},x);case"image":const k=parseInt(S.src?.replace("inline","")||"1"),I=k===1?c:k===2?b:S.src;return e.jsx(X,{ratio:16/10,className:"my-6",children:e.jsx("img",{src:I||"https://ui.shadcn.com/placeholder.svg",alt:S.alt||"Inline content image",className:"h-full w-full rounded-lg object-cover"})},x);case"slider":return e.jsx("div",{className:"my-8",children:e.jsx(ve,{beforeImage:y,afterImage:j,projectTitle:"Kitchen Transformation - Minnetonka",variant:"minimal",size:"full"})},x);default:return null}});if(t==="with-carousel")return e.jsx("section",{className:Y("bg-background py-16 md:py-24 w-full mobile-overflow-x-hidden",C),"aria-labelledby":"article-title",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 w-full min-w-0",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start",children:[e.jsxs("div",{className:"flex flex-col gap-8 lg:sticky lg:top-8",children:[e.jsxs("div",{className:"flex flex-col gap-4 md:gap-5",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap min-w-0",children:[e.jsx("p",{className:"text-muted-foreground text-sm break-words",style:u,children:n}),e.jsx("span",{className:"text-muted-foreground text-sm flex-shrink-0","aria-hidden":"true",children:"·"}),e.jsx("p",{className:"text-muted-foreground text-sm break-words",style:u,children:a})]}),e.jsx("h1",{id:"article-title",className:"heading-xl break-words hyphens-auto",style:u,children:r}),e.jsx("p",{className:"text-muted-foreground text-lg break-words hyphens-auto",style:u,children:o})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(be,{className:"h-10 w-10",children:e.jsx(we,{src:d,alt:s})}),e.jsxs("div",{className:"flex flex-col min-w-0",children:[e.jsx("p",{className:"text-sm font-medium break-words",style:u,children:s}),e.jsx("p",{className:"text-muted-foreground text-sm break-words",style:u,children:i})]})]}),e.jsx("div",{className:"lg:hidden",children:e.jsxs(Pe,{className:"w-full",children:[e.jsx(Ee,{children:O.map((S,M)=>e.jsx(Ce,{children:e.jsx("div",{className:"p-1",children:e.jsx("div",{className:"relative overflow-hidden rounded-xl",children:e.jsxs(X,{ratio:16/10,children:[e.jsx("img",{src:S.src,alt:S.alt,className:"h-full w-full object-cover hover:scale-105 transition-transform duration-300"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300",children:e.jsxs("div",{className:"absolute bottom-4 left-4 text-white",children:[e.jsx("h3",{className:"font-semibold text-lg mb-1",style:u,children:S.alt}),e.jsx("p",{className:"text-sm text-gray-200",style:u,children:"Eminent Interior Design"})]})})]})})})},M))}),e.jsx(De,{className:"left-4"}),e.jsx(Oe,{className:"right-4"})]})}),e.jsx("div",{className:"flex flex-col gap-6",children:R()})]}),e.jsx("div",{className:"hidden lg:block lg:sticky lg:top-8",children:e.jsxs(Pe,{className:"w-full",children:[e.jsx(Ee,{children:O.map((S,M)=>e.jsx(Ce,{children:e.jsx("div",{className:"p-1",children:e.jsx("div",{className:"relative overflow-hidden rounded-xl",children:e.jsxs(X,{ratio:16/10,children:[e.jsx("img",{src:S.src,alt:S.alt,className:"h-full w-full object-cover hover:scale-105 transition-transform duration-300"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300",children:e.jsxs("div",{className:"absolute bottom-4 left-4 text-white",children:[e.jsx("h3",{className:"font-semibold text-lg mb-1",style:u,children:S.alt}),e.jsx("p",{className:"text-sm text-gray-200",style:u,children:"Eminent Interior Design"})]})})]})})})},M))}),e.jsx(De,{className:"left-4"}),e.jsx(Oe,{className:"right-4"})]})})]})})});if(t==="with-sidebar"){const S=T.filter(x=>x.type==="heading"&&x.id).map(x=>({id:x.id,text:x.text||"",level:x.level||2})),M=()=>T.map((x,k)=>{const I=`content-${k}`;switch(x.type){case"paragraph":return e.jsx("p",{className:"leading-7 break-words text-base",style:u,children:x.text},I);case"heading":if(x.level===2)return e.jsx("h2",{id:x.id,className:"scroll-mt-20 text-2xl font-semibold tracking-tight",style:u,children:x.text},I);if(x.level===3)return e.jsx("h3",{id:x.id,className:"scroll-mt-20 text-xl font-semibold tracking-tight",style:u,children:x.text},I);break;case"blockquote":return e.jsx("blockquote",{className:"border-l-2 pl-6 italic break-words text-muted-foreground",style:u,children:x.text},I);case"list":return e.jsx("ul",{className:"ml-6 list-disc space-y-2",style:u,children:x.items?.map((K,V)=>e.jsx("li",{children:K},`${I}-item-${V}`))},I);case"image":const L=parseInt(x.src?.replace("inline","")||"1"),W=L===1?c:L===2?b:x.src;return e.jsx(X,{ratio:16/10,className:"my-6",children:e.jsx("img",{src:W||"https://ui.shadcn.com/placeholder.svg",alt:x.alt||"Inline content image",className:"h-full w-full rounded-lg object-cover"})},I);case"slider":return e.jsx("div",{className:"my-8",children:e.jsx(ve,{beforeImage:y,afterImage:j,projectTitle:"Kitchen Transformation - Minnetonka",variant:"minimal",size:"full"})},I);default:return null}});return e.jsx("section",{className:Y("bg-background py-16 md:py-24 w-full",C),"aria-labelledby":"article-title",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 w-full",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12",children:[e.jsx("div",{className:"lg:col-span-3",children:e.jsxs("article",{className:"flex flex-col gap-8 w-full",children:[e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("p",{className:"text-muted-foreground text-sm",style:u,children:n}),e.jsx("span",{className:"text-muted-foreground text-sm",children:"·"}),e.jsx("p",{className:"text-muted-foreground text-sm",style:u,children:a})]}),e.jsx("h1",{id:"article-title",className:"text-4xl font-bold tracking-tight",style:u,children:r}),e.jsx("p",{className:"text-muted-foreground text-xl leading-relaxed",style:u,children:o})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(be,{className:"h-10 w-10",children:e.jsx(we,{src:d,alt:s})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"text-sm font-medium",style:u,children:s}),e.jsx("p",{className:"text-muted-foreground text-sm",style:u,children:i})]})]}),e.jsx(X,{ratio:16/10,children:e.jsx("img",{src:l,alt:"Project featured image",className:"h-full w-full rounded-xl object-cover"})})]}),e.jsx("div",{className:"flex flex-col gap-6 prose prose-lg max-w-none",children:M()})]})}),e.jsx("div",{className:"lg:col-span-1",children:e.jsx("div",{className:"sticky top-8",children:e.jsxs("div",{className:"rounded-lg border bg-card p-6",children:[e.jsx("h3",{className:"font-semibold mb-4 text-base",style:u,children:"On this page"}),e.jsx("nav",{className:"space-y-2",children:S.map(x=>e.jsx("a",{href:`#${x.id}`,onClick:k=>{k.preventDefault();const I=document.getElementById(x.id);I&&I.scrollIntoView({behavior:"smooth",block:"start"})},className:"block text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer",style:u,children:x.text},x.id))})]})})})]})})})}if(t==="article-toc"){const S=T.filter(k=>k.type==="heading"&&k.id).map(k=>({id:k.id,text:k.text||"",level:k.level||2})),M=(k,I)=>{k.preventDefault();const L=document.querySelector(I);L&&L.scrollIntoView({behavior:"smooth"})},x=()=>T.map((k,I)=>{const L=`content-${I}`;switch(k.type){case"paragraph":return e.jsx("p",{className:"leading-7 break-words text-base",style:u,children:k.text},L);case"heading":if(k.level===2)return e.jsx("h2",{id:k.id,className:"scroll-mt-20 border-b pb-2 text-3xl font-semibold tracking-tight",style:u,children:k.text},L);if(k.level===3)return e.jsx("h3",{id:k.id,className:"scroll-mt-20 mt-8 text-2xl font-semibold tracking-tight",style:u,children:k.text},L);break;case"blockquote":return e.jsx("blockquote",{className:"border-l-2 pl-6 italic break-words text-muted-foreground",style:u,children:k.text},L);case"list":return e.jsx("ul",{className:"ml-6 list-disc space-y-2",style:u,children:k.items?.map((V,ne)=>e.jsx("li",{children:V},`${L}-item-${ne}`))},L);case"image":const W=parseInt(k.src?.replace("inline","")||"1"),K=W===1?c:W===2?b:k.src;return e.jsx(X,{ratio:16/10,className:"my-6",children:e.jsx("img",{src:K||"https://ui.shadcn.com/placeholder.svg",alt:k.alt||"Inline content image",className:"h-full w-full rounded-lg object-cover"})},L);case"slider":return e.jsx("div",{className:"my-8",children:e.jsx(ve,{beforeImage:y,afterImage:j,projectTitle:"Kitchen Transformation - Minnetonka",variant:"minimal",size:"full"})},L);default:return null}});return e.jsx("section",{className:Y("bg-background py-16 md:py-24",C),"aria-labelledby":"article-title",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:"flex flex-col gap-12 md:gap-16",children:[e.jsxs("div",{className:"mx-auto flex max-w-3xl flex-col items-center gap-4 text-center md:gap-6",children:[e.jsx("h1",{id:"article-title",className:"heading-xl",style:u,children:r}),e.jsx("p",{className:"text-muted-foreground text-lg",style:u,children:o}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:"text-muted-foreground text-sm",style:u,children:n}),e.jsx("span",{className:"text-muted-foreground text-sm",children:"·"}),e.jsx("p",{className:"text-muted-foreground text-sm",style:u,children:a})]})]}),e.jsxs("div",{className:"flex flex-row gap-12",children:[e.jsxs("article",{className:"flex max-w-3xl flex-col gap-8",children:[e.jsx(X,{ratio:16/10,children:e.jsx("img",{src:l,alt:"Article cover image",className:"h-full w-full rounded-xl object-cover"})}),e.jsx("div",{className:"flex flex-col gap-6",children:x()})]}),e.jsx("div",{className:"hidden lg:flex lg:flex-col lg:gap-5",children:e.jsxs("div",{className:"sticky top-8",children:[e.jsx("span",{className:"text-foreground text-sm font-medium",style:u,children:"On this page"}),e.jsx("nav",{className:"flex flex-col gap-3 mt-3",children:S.map(k=>e.jsx("a",{href:`#${k.id}`,onClick:I=>M(I,`#${k.id}`),className:"text-muted-foreground hover:text-foreground text-sm cursor-pointer transition-colors",style:u,children:k.text},k.id))})]})})]})]})})})}if(t==="two-column-sidebar"){const S=T.filter(x=>x.type==="heading"&&x.id).map(x=>({id:x.id,text:x.text||"",level:x.level||2})),M=()=>T.map((x,k)=>{const I=`content-${k}`;switch(x.type){case"paragraph":return e.jsx("p",{className:"leading-7 break-words text-base mb-4",style:u,children:x.text},I);case"heading":if(x.level===2)return e.jsx("h2",{id:x.id,className:"scroll-mt-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-4",style:u,children:x.text},I);if(x.level===3)return e.jsx("h3",{id:x.id,className:"scroll-mt-20 mt-8 text-2xl font-semibold tracking-tight mb-4",style:u,children:x.text},I);break;case"blockquote":return e.jsx("blockquote",{className:"border-l-2 pl-6 italic break-words text-muted-foreground mb-4",style:u,children:x.text},I);case"list":return e.jsx("ul",{className:"ml-6 list-disc space-y-2 mb-4",style:u,children:x.items?.map((K,V)=>e.jsx("li",{children:K},`${I}-item-${V}`))},I);case"image":const L=parseInt(x.src?.replace("inline","")||"1"),W=L===1?c:L===2?b:x.src;return e.jsx(X,{ratio:16/10,className:"my-6",children:e.jsx("img",{src:W||"https://ui.shadcn.com/placeholder.svg",alt:x.alt||"Inline content image",className:"h-full w-full rounded-lg object-cover"})},I);case"slider":return e.jsx("div",{className:"my-8",children:e.jsx(ve,{beforeImage:y,afterImage:j,projectTitle:"Kitchen Transformation - Minnetonka",variant:"minimal",size:"full"})},I);default:return null}});return e.jsx("section",{className:Y("bg-background py-16 md:py-24 w-full",C),"aria-labelledby":"article-title",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 w-full",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("p",{className:"text-muted-foreground text-sm",style:u,children:n}),e.jsx("span",{className:"text-muted-foreground text-sm",children:"·"}),e.jsx("p",{className:"text-muted-foreground text-sm",style:u,children:a})]}),e.jsx("h1",{id:"article-title",className:"text-4xl font-bold tracking-tight mb-4",style:u,children:r}),e.jsx("p",{className:"text-muted-foreground text-lg leading-relaxed mb-6",style:u,children:o}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(be,{className:"h-10 w-10",children:e.jsx(we,{src:d,alt:s})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"text-sm font-medium",style:u,children:s}),e.jsx("p",{className:"text-muted-foreground text-sm",style:u,children:i})]})]})]}),e.jsx("div",{className:"flex items-center",children:e.jsx(X,{ratio:16/10,className:"w-full",children:e.jsx("img",{src:l,alt:"Project featured image",className:"h-full w-full rounded-xl object-cover"})})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-12",children:[e.jsx("div",{className:"lg:col-span-3",children:e.jsx("article",{className:"flex flex-col w-full",children:M()})}),e.jsx("div",{className:"lg:col-span-1",children:e.jsx("div",{className:"sticky top-8",children:e.jsx("div",{className:"p-6",children:e.jsx("div",{className:"space-y-4 mb-8",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-sm mb-2",style:u,children:"On this page"}),e.jsx("nav",{className:"space-y-2",children:S.map(x=>e.jsx("a",{href:`#${x.id}`,onClick:k=>{k.preventDefault();const I=document.getElementById(x.id);I&&I.scrollIntoView({behavior:"smooth",block:"start"})},className:"block text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer",style:u,children:x.text},x.id))})]})})})})})]})]})})}return e.jsx("section",{className:Y("bg-background py-16 md:py-24 w-full mobile-overflow-x-hidden",C),"aria-labelledby":"article-title",children:e.jsx("div",{className:"mx-auto max-w-3xl px-6 w-full min-w-0",children:e.jsxs("article",{className:"flex flex-col gap-12 md:gap-16 w-full min-w-0",children:[e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4 md:gap-5",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap min-w-0",children:[e.jsx("p",{className:"text-muted-foreground text-sm break-words",style:u,children:n}),e.jsx("span",{className:"text-muted-foreground text-sm flex-shrink-0","aria-hidden":"true",children:"·"}),e.jsx("p",{className:"text-muted-foreground text-sm break-words",style:u,children:a})]}),e.jsx("h1",{id:"article-title",className:"heading-xl break-words hyphens-auto",style:u,children:r}),e.jsx("p",{className:"text-muted-foreground text-lg break-words hyphens-auto",style:u,children:o})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(be,{className:"h-10 w-10",children:e.jsx(we,{src:d,alt:s})}),e.jsxs("div",{className:"flex flex-col min-w-0",children:[e.jsx("p",{className:"text-sm font-medium break-words",style:u,children:s}),e.jsx("p",{className:"text-muted-foreground text-sm break-words",style:u,children:i})]})]}),e.jsx(X,{ratio:16/10,children:e.jsx("img",{src:l,alt:"Project featured image",className:"h-full w-full rounded-xl object-cover"})})]}),e.jsx("div",{className:"flex flex-col gap-6",children:R()})]})})})}ut.__docgenInfo={description:"",methods:[],displayName:"RichTextSection"};const Sn={title:"Slices/Rich Text Section",component:ut,parameters:{layout:"fullscreen",docs:{description:{component:"A rich text article section component featuring author info, featured image, and structured content with various text elements like headings, paragraphs, blockquotes, and lists."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","with-carousel","with-sidebar","article-toc","two-column-sidebar"],description:"Layout variant for the rich text section"},date:{control:"text",description:"Publication date displayed in the metadata"},category:{control:"text",description:"Category displayed in the metadata"},title:{control:"text",description:"Main article title"},description:{control:"text",description:"Article description/summary"},authorName:{control:"text",description:"Author name"},authorRole:{control:"text",description:"Author role/position"},authorAvatar:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload author avatar image (PNG, JPG, JPEG, GIF, WebP)"},featuredImage:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload featured article image (PNG, JPG, JPEG, GIF, WebP)"},content:{control:"object",description:"Array of content blocks with different types (paragraph, heading, blockquote, list, image)"},inlineImage1:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload inline content image 1 (PNG, JPG, JPEG, GIF, WebP)"},inlineImage2:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload inline content image 2 (PNG, JPG, JPEG, GIF, WebP)"},carouselImages:{control:"object",description:"Array of images for carousel variant with src and alt properties"},carouselImage1:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload carousel image 1 (PNG, JPG, JPEG, GIF, WebP)"},carouselImage2:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload carousel image 2 (PNG, JPG, JPEG, GIF, WebP)"},carouselImage3:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload carousel image 3 (PNG, JPG, JPEG, GIF, WebP)"},carouselImage4:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload carousel image 4 (PNG, JPG, JPEG, GIF, WebP)"},carouselImage5:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload carousel image 5 (PNG, JPG, JPEG, GIF, WebP)"},carouselImage6:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload carousel image 6 (PNG, JPG, JPEG, GIF, WebP)"},beforeImage:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload before transformation image (PNG, JPG, JPEG, GIF, WebP)"},afterImage:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload after transformation image (PNG, JPG, JPEG, GIF, WebP)"},className:{control:"text",description:"Additional CSS classes to apply"},fontFamily:{control:{type:"select"},options:["Inter","Roboto","Open Sans","Playfair Display","Source Code Pro"],description:"Font family for all text elements"}},args:{variant:"default",date:"Nov 11, 2024",category:"Projects",title:"Contemporary Kitchen Remodel - Minnetonka",description:"A stunning transformation of a traditional kitchen into a modern, functional space that perfectly balances style and practicality for everyday living.",authorName:"Eminent Interior Design",authorRole:"Interior Design Studio",authorAvatar:"https://github.com/shadcn.png",featuredImage:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop",content:[{type:"paragraph",text:"This contemporary kitchen remodel in Minnetonka represents a complete transformation from a dated, compartmentalized space into an open, light-filled hub of the home. Our design approach focused on creating a seamless flow between cooking, dining, and entertaining areas while maximizing both functionality and aesthetic appeal."},{type:"heading",level:2,text:"Design Vision & Goals"},{type:"paragraph",text:"The homeowners came to us with a clear vision: they wanted a kitchen that would serve as the heart of their home, where family gatherings and dinner parties could unfold naturally. The existing kitchen felt cramped and disconnected from the dining and living areas."},{type:"blockquote",text:"We wanted a space that felt both sophisticated and welcoming – somewhere our teenagers would want to hang out and do homework, but elegant enough for entertaining our friends."},{type:"heading",level:3,text:"Key Design Elements"},{type:"paragraph",text:"Our design strategy centered on several core principles that would transform this space:"},{type:"list",items:["Open floor plan connecting kitchen to dining and living areas","High-end appliances integrated seamlessly into custom cabinetry","Large island with seating for casual dining and homework","Premium materials including quartz countertops and hardwood floors","Strategic lighting design for both task and ambient illumination"]},{type:"paragraph",text:"The result is a sophisticated yet comfortable space that has truly become the heart of the home. Natural light floods the space through enlarged windows, while the neutral color palette with warm wood accents creates an inviting atmosphere that works beautifully for both everyday family life and special occasions."},{type:"image",src:"inline1",alt:"Kitchen interior showing the completed transformation"},{type:"heading",level:3,text:"Materials & Finishes"},{type:"paragraph",text:"We selected materials that would stand the test of time while reflecting the homeowners' refined taste. The white oak cabinetry provides warmth and texture, while the Calacatta marble island serves as a stunning focal point. Brushed brass hardware and fixtures add a touch of luxury without feeling ostentatious."},{type:"paragraph",text:"The transformation has exceeded our clients' expectations, creating a space that perfectly balances style, functionality, and livability. This kitchen now serves as the perfect backdrop for everything from quiet morning coffee to lively dinner parties with friends and family."},{type:"image",src:"inline2",alt:"Detail shot of the kitchen materials and finishes"}],fontFamily:"Inter"}},je={args:{},argTypes:{carouselImages:{table:{disable:!0}},carouselImage1:{table:{disable:!0}},carouselImage2:{table:{disable:!0}},carouselImage3:{table:{disable:!0}},carouselImage4:{table:{disable:!0}},carouselImage5:{table:{disable:!0}},carouselImage6:{table:{disable:!0}}}},Ne={args:{variant:"with-carousel",date:"Dec 15, 2024",category:"Featured Projects",title:"Luxury Bathroom Transformation - Wayzata",description:"This luxury bathroom renovation showcases premium materials and sophisticated design elements that create a spa-like retreat in this Wayzata residence. Every detail was carefully curated to reflect timeless elegance and modern functionality.",content:[{type:"paragraph",text:"This Wayzata bathroom transformation represents the pinnacle of luxury residential design. Our clients desired a sophisticated retreat that would serve as a daily sanctuary while maintaining the timeless elegance befitting their historic home. The result is a masterful blend of contemporary functionality and classic luxury."},{type:"heading",level:2,text:"Design Philosophy"},{type:"paragraph",text:"Our approach centered on creating a serene, spa-like environment using the finest materials and most thoughtful design elements. The space needed to feel both grand and intimate, offering moments of quiet luxury within the busy rhythms of daily life."},{type:"image",src:"inline1",alt:"Before transformation - original bathroom layout"},{type:"blockquote",text:"We wanted a space that felt like a five-star resort spa, but completely personal to our lifestyle and aesthetic preferences."},{type:"heading",level:3,text:"Premium Materials Selection"},{type:"list",items:["Calacatta Gold marble for vanity countertops and accent walls","Natural travertine flooring with radiant heating system","Custom millwork in rich walnut with integrated storage","Brushed gold fixtures and hardware throughout","Floor-to-ceiling windows with automated privacy glass"]},{type:"paragraph",text:"The transformation has created a truly exceptional space that elevates the daily ritual of self-care. Natural light floods the room through strategically placed windows, while the carefully curated material palette creates a sense of warmth and luxury that our clients enjoy every day."},{type:"image",src:"inline2",alt:"Calacatta Gold marble vanity with walnut millwork details"},{type:"heading",level:3,text:"Innovative Features"},{type:"paragraph",text:"Beyond aesthetic beauty, this bathroom incorporates cutting-edge technology and wellness features. The steam shower with chromotherapy lighting, heated floors, and smart mirror with integrated display create a truly modern luxury experience. Every element was selected to enhance both form and function."}]},argTypes:{featuredImage:{table:{disable:!0}}}},ke={args:{variant:"with-sidebar",date:"Nov 11, 2024",category:"Projects",title:"Contemporary Kitchen Remodel - Minnetonka",description:"A stunning transformation of a traditional kitchen into a modern, functional space that perfectly balances style and practicality for everyday living.",content:[{type:"paragraph",text:"This contemporary kitchen remodel in Minnetonka represents a complete transformation from a dated, compartmentalized space into an open, light-filled hub of the home. Our design approach focused on creating a seamless flow between cooking, dining, and entertaining areas while maximizing both functionality and aesthetic appeal."},{type:"heading",level:2,text:"Design Vision & Goals",id:"design-vision-goals"},{type:"paragraph",text:"The homeowners came to us with a clear vision: they wanted a kitchen that would serve as the heart of their home, where family gatherings and dinner parties could unfold naturally. The existing kitchen felt cramped and disconnected from the dining and living areas."},{type:"image",src:"inline1",alt:"Before transformation - original cramped kitchen layout"},{type:"blockquote",text:"We wanted a space that felt both sophisticated and welcoming – somewhere our teenagers would want to hang out and do homework, but elegant enough for entertaining our friends."},{type:"heading",level:3,text:"Key Design Elements",id:"key-design-elements"},{type:"paragraph",text:"Our design strategy centered on several core principles that would transform this space:"},{type:"list",items:["Open floor plan connecting kitchen to dining and living areas","High-end appliances integrated seamlessly into custom cabinetry","Large island with seating for casual dining and homework","Premium materials including quartz countertops and hardwood floors","Strategic lighting design for both task and ambient illumination"]},{type:"slider"},{type:"heading",level:2,text:"Materials & Finishes",id:"materials-finishes"},{type:"paragraph",text:"We selected materials that would stand the test of time while reflecting the homeowners' refined taste. The white oak cabinetry provides warmth and texture, while the Calacatta marble island serves as a stunning focal point. Brushed brass hardware and fixtures add a touch of luxury without feeling ostentatious."},{type:"image",src:"inline2",alt:"Calacatta marble island with white oak cabinetry and brass fixtures"},{type:"heading",level:3,text:"The Result",id:"the-result"},{type:"paragraph",text:"The transformation has exceeded our clients' expectations, creating a space that perfectly balances style, functionality, and livability. This kitchen now serves as the perfect backdrop for everything from quiet morning coffee to lively dinner parties with friends and family."}]},argTypes:{carouselImages:{table:{disable:!0}},carouselImage1:{table:{disable:!0}},carouselImage2:{table:{disable:!0}},carouselImage3:{table:{disable:!0}},carouselImage4:{table:{disable:!0}},carouselImage5:{table:{disable:!0}},carouselImage6:{table:{disable:!0}}}},Ie={args:{variant:"article-toc",date:"Nov 28, 2024",category:"Featured Projects",title:"Award-Winning Living Space Design - Edina",description:"This sophisticated living room transformation showcases our design philosophy of creating spaces that are both elegant and livable, perfectly suited for modern family life and entertaining.",authorName:"Eminent Interior Design",authorRole:"Interior Design Studio",featuredImage:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",content:[{type:"paragraph",text:"This award-winning living space design in Edina represents the perfect fusion of contemporary sophistication and family-friendly functionality. Our approach transformed a traditional formal living room into a dynamic space that serves multiple purposes while maintaining an atmosphere of refined elegance."},{type:"heading",level:2,text:"Design Philosophy & Vision",id:"design-philosophy-vision"},{type:"paragraph",text:"Our clients desired a living space that would accommodate their growing family while providing an impressive backdrop for entertaining. The challenge was creating a room that felt both grand and intimate, sophisticated yet comfortable enough for daily family life."},{type:"image",src:"inline1",alt:"Before transformation - traditional formal living room layout"},{type:"blockquote",text:"We wanted a room that our teenagers would actually want to spend time in, but that would also impress our guests during dinner parties. The balance between family comfort and entertaining elegance was key."},{type:"heading",level:3,text:"Spatial Planning & Layout",id:"spatial-planning-layout"},{type:"paragraph",text:"The original layout felt rigid and unwelcoming. We reimagined the space with flexible seating arrangements that could adapt to different occasions:"},{type:"list",items:["Central seating area with modular furniture for flexible arrangements","Built-in window seating with storage for casual family moments","Dedicated reading nook with optimal natural lighting","Entertainment zone with integrated technology and media storage","Multiple conversation areas to support both intimate and larger gatherings"]},{type:"paragraph",text:"The new layout creates natural traffic flow while defining distinct zones for different activities. Each area maintains visual connection to the others, ensuring the space feels cohesive and open."},{type:"heading",level:2,text:"Material Selection & Finishes",id:"material-selection-finishes"},{type:"paragraph",text:"Our material palette reflects the clients' appreciation for both luxury and durability. We selected finishes that would age beautifully while standing up to the demands of active family life."},{type:"image",src:"inline2",alt:"Detail of custom millwork and premium fabric selections"},{type:"heading",level:3,text:"Custom Elements & Craftsmanship",id:"custom-elements-craftsmanship"},{type:"paragraph",text:"The space features extensive custom millwork, including built-in bookcases, window seats, and entertainment cabinetry. Each piece was designed to complement the home's architectural character while providing modern functionality."},{type:"paragraph",text:"The attention to detail in the craftsmanship is evident in every element, from the hand-selected hardware to the precisely mitered joints in the custom cabinetry. These details elevate the space from simply beautiful to truly exceptional."},{type:"heading",level:2,text:"Lighting Design & Ambiance",id:"lighting-design-ambiance"},{type:"paragraph",text:"Strategic lighting design was crucial to the success of this multi-functional space. We implemented a layered lighting approach that supports everything from homework sessions to elegant dinner parties."},{type:"paragraph",text:"The result is a living space that has become the true heart of this Edina home. The design successfully balances the clients' desire for sophistication with their need for practical family living, creating a room that is both impressive and inviting."}]},argTypes:{carouselImages:{table:{disable:!0}},carouselImage1:{table:{disable:!0}},carouselImage2:{table:{disable:!0}},carouselImage3:{table:{disable:!0}},carouselImage4:{table:{disable:!0}},carouselImage5:{table:{disable:!0}},carouselImage6:{table:{disable:!0}},beforeImage:{table:{disable:!0}},afterImage:{table:{disable:!0}},authorAvatar:{table:{disable:!0}},authorName:{table:{disable:!0}},authorRole:{table:{disable:!0}}}},Se={args:{variant:"two-column-sidebar",date:"Dec 10, 2024",category:"Design Process",title:"Luxury Master Suite Renovation - Excelsior",description:"This comprehensive master suite renovation showcases our holistic design approach, transforming a dated bedroom and bathroom into a sophisticated retreat that perfectly balances luxury and comfort.",authorName:"Eminent Interior Design",authorRole:"Interior Design Studio",content:[{type:"paragraph",text:"This Excelsior master suite renovation represents the culmination of thoughtful design and meticulous craftsmanship. Our clients desired a private sanctuary that would serve as a peaceful retreat from their busy lives while reflecting their sophisticated aesthetic preferences."},{type:"heading",level:2,text:"Design Vision & Concept",id:"design-vision-concept"},{type:"paragraph",text:"The original master suite felt disconnected and dated, with small rooms that didn't take advantage of the home's beautiful lake views. Our design approach focused on creating a cohesive suite that maximizes natural light and creates seamless flow between sleeping, dressing, and bathing areas."},{type:"image",src:"inline1",alt:"Before renovation - original master bedroom layout"},{type:"blockquote",text:"We wanted our bedroom to feel like a luxury hotel suite, but completely personal to our style. The goal was creating a space where we could truly unwind and recharge."},{type:"heading",level:3,text:"Space Planning & Layout",id:"space-planning-layout"},{type:"paragraph",text:"The renovation involved reconfiguring the entire suite to create better flow and functionality:"},{type:"list",items:["Enlarged bedroom with seating area overlooking the lake","Walk-in closet with custom organizational systems","Spa-like bathroom with freestanding tub and separate shower","Private sitting area with fireplace for quiet mornings","Built-in millwork for storage and display throughout"]},{type:"paragraph",text:"The new layout creates distinct zones for different activities while maintaining visual connection throughout the suite. Natural light flows freely through the space, enhanced by carefully placed mirrors and light-colored finishes."},{type:"heading",level:2,text:"Material Selection & Finishes",id:"material-selection-finishes"},{type:"paragraph",text:"Our material palette reflects the serene lakeside setting while maintaining the luxury and sophistication our clients desired. We selected finishes that would create a timeless backdrop for both relaxation and entertaining."},{type:"image",src:"inline2",alt:"Custom millwork and luxury finishes in the completed suite"},{type:"heading",level:3,text:"Custom Elements & Details",id:"custom-elements-details"},{type:"paragraph",text:"Every element in the suite was carefully considered and many were custom-designed specifically for this project. The built-in window seat with storage, custom headboard with integrated lighting, and bespoke closet system all contribute to the suite's unique character and functionality."},{type:"paragraph",text:"The completed master suite has exceeded our clients' expectations, creating a true sanctuary that perfectly balances luxury and livability. This project demonstrates our commitment to creating spaces that enhance daily life while reflecting our clients' personal style and sophisticated taste."}]},argTypes:{carouselImages:{table:{disable:!0}},carouselImage1:{table:{disable:!0}},carouselImage2:{table:{disable:!0}},carouselImage3:{table:{disable:!0}},carouselImage4:{table:{disable:!0}},carouselImage5:{table:{disable:!0}},carouselImage6:{table:{disable:!0}},beforeImage:{table:{disable:!0}},afterImage:{table:{disable:!0}}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`{
  args: {},
  argTypes: {
    // Hide carousel-specific controls for default variant
    carouselImages: {
      table: {
        disable: true
      }
    },
    carouselImage1: {
      table: {
        disable: true
      }
    },
    carouselImage2: {
      table: {
        disable: true
      }
    },
    carouselImage3: {
      table: {
        disable: true
      }
    },
    carouselImage4: {
      table: {
        disable: true
      }
    },
    carouselImage5: {
      table: {
        disable: true
      }
    },
    carouselImage6: {
      table: {
        disable: true
      }
    }
  }
}`,...je.parameters?.docs?.source}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'with-carousel',
    date: 'Dec 15, 2024',
    category: 'Featured Projects',
    title: 'Luxury Bathroom Transformation - Wayzata',
    description: 'This luxury bathroom renovation showcases premium materials and sophisticated design elements that create a spa-like retreat in this Wayzata residence. Every detail was carefully curated to reflect timeless elegance and modern functionality.',
    content: [{
      type: 'paragraph',
      text: 'This Wayzata bathroom transformation represents the pinnacle of luxury residential design. Our clients desired a sophisticated retreat that would serve as a daily sanctuary while maintaining the timeless elegance befitting their historic home. The result is a masterful blend of contemporary functionality and classic luxury.'
    }, {
      type: 'heading',
      level: 2,
      text: 'Design Philosophy'
    }, {
      type: 'paragraph',
      text: 'Our approach centered on creating a serene, spa-like environment using the finest materials and most thoughtful design elements. The space needed to feel both grand and intimate, offering moments of quiet luxury within the busy rhythms of daily life.'
    }, {
      type: 'image',
      src: 'inline1',
      alt: 'Before transformation - original bathroom layout'
    }, {
      type: 'blockquote',
      text: 'We wanted a space that felt like a five-star resort spa, but completely personal to our lifestyle and aesthetic preferences.'
    }, {
      type: 'heading',
      level: 3,
      text: 'Premium Materials Selection'
    }, {
      type: 'list',
      items: ['Calacatta Gold marble for vanity countertops and accent walls', 'Natural travertine flooring with radiant heating system', 'Custom millwork in rich walnut with integrated storage', 'Brushed gold fixtures and hardware throughout', 'Floor-to-ceiling windows with automated privacy glass']
    }, {
      type: 'paragraph',
      text: 'The transformation has created a truly exceptional space that elevates the daily ritual of self-care. Natural light floods the room through strategically placed windows, while the carefully curated material palette creates a sense of warmth and luxury that our clients enjoy every day.'
    }, {
      type: 'image',
      src: 'inline2',
      alt: 'Calacatta Gold marble vanity with walnut millwork details'
    }, {
      type: 'heading',
      level: 3,
      text: 'Innovative Features'
    }, {
      type: 'paragraph',
      text: 'Beyond aesthetic beauty, this bathroom incorporates cutting-edge technology and wellness features. The steam shower with chromotherapy lighting, heated floors, and smart mirror with integrated display create a truly modern luxury experience. Every element was selected to enhance both form and function.'
    }]
  },
  argTypes: {
    // Hide featured image control for carousel variant (not used in layout)
    featuredImage: {
      table: {
        disable: true
      }
    }
  }
}`,...Ne.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'with-sidebar',
    date: 'Nov 11, 2024',
    category: 'Projects',
    title: 'Contemporary Kitchen Remodel - Minnetonka',
    description: 'A stunning transformation of a traditional kitchen into a modern, functional space that perfectly balances style and practicality for everyday living.',
    content: [{
      type: 'paragraph',
      text: 'This contemporary kitchen remodel in Minnetonka represents a complete transformation from a dated, compartmentalized space into an open, light-filled hub of the home. Our design approach focused on creating a seamless flow between cooking, dining, and entertaining areas while maximizing both functionality and aesthetic appeal.'
    }, {
      type: 'heading',
      level: 2,
      text: 'Design Vision & Goals',
      id: 'design-vision-goals'
    }, {
      type: 'paragraph',
      text: 'The homeowners came to us with a clear vision: they wanted a kitchen that would serve as the heart of their home, where family gatherings and dinner parties could unfold naturally. The existing kitchen felt cramped and disconnected from the dining and living areas.'
    }, {
      type: 'image',
      src: 'inline1',
      alt: 'Before transformation - original cramped kitchen layout'
    }, {
      type: 'blockquote',
      text: 'We wanted a space that felt both sophisticated and welcoming – somewhere our teenagers would want to hang out and do homework, but elegant enough for entertaining our friends.'
    }, {
      type: 'heading',
      level: 3,
      text: 'Key Design Elements',
      id: 'key-design-elements'
    }, {
      type: 'paragraph',
      text: 'Our design strategy centered on several core principles that would transform this space:'
    }, {
      type: 'list',
      items: ['Open floor plan connecting kitchen to dining and living areas', 'High-end appliances integrated seamlessly into custom cabinetry', 'Large island with seating for casual dining and homework', 'Premium materials including quartz countertops and hardwood floors', 'Strategic lighting design for both task and ambient illumination']
    }, {
      type: 'slider'
    }, {
      type: 'heading',
      level: 2,
      text: 'Materials & Finishes',
      id: 'materials-finishes'
    }, {
      type: 'paragraph',
      text: 'We selected materials that would stand the test of time while reflecting the homeowners\\' refined taste. The white oak cabinetry provides warmth and texture, while the Calacatta marble island serves as a stunning focal point. Brushed brass hardware and fixtures add a touch of luxury without feeling ostentatious.'
    }, {
      type: 'image',
      src: 'inline2',
      alt: 'Calacatta marble island with white oak cabinetry and brass fixtures'
    }, {
      type: 'heading',
      level: 3,
      text: 'The Result',
      id: 'the-result'
    }, {
      type: 'paragraph',
      text: 'The transformation has exceeded our clients\\' expectations, creating a space that perfectly balances style, functionality, and livability. This kitchen now serves as the perfect backdrop for everything from quiet morning coffee to lively dinner parties with friends and family.'
    }]
  },
  argTypes: {
    // Hide carousel-specific controls for sidebar variant
    carouselImages: {
      table: {
        disable: true
      }
    },
    carouselImage1: {
      table: {
        disable: true
      }
    },
    carouselImage2: {
      table: {
        disable: true
      }
    },
    carouselImage3: {
      table: {
        disable: true
      }
    },
    carouselImage4: {
      table: {
        disable: true
      }
    },
    carouselImage5: {
      table: {
        disable: true
      }
    },
    carouselImage6: {
      table: {
        disable: true
      }
    }
  }
}`,...ke.parameters?.docs?.source}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'article-toc',
    date: 'Nov 28, 2024',
    category: 'Featured Projects',
    title: 'Award-Winning Living Space Design - Edina',
    description: 'This sophisticated living room transformation showcases our design philosophy of creating spaces that are both elegant and livable, perfectly suited for modern family life and entertaining.',
    authorName: 'Eminent Interior Design',
    authorRole: 'Interior Design Studio',
    featuredImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
    content: [{
      type: 'paragraph',
      text: 'This award-winning living space design in Edina represents the perfect fusion of contemporary sophistication and family-friendly functionality. Our approach transformed a traditional formal living room into a dynamic space that serves multiple purposes while maintaining an atmosphere of refined elegance.'
    }, {
      type: 'heading',
      level: 2,
      text: 'Design Philosophy & Vision',
      id: 'design-philosophy-vision'
    }, {
      type: 'paragraph',
      text: 'Our clients desired a living space that would accommodate their growing family while providing an impressive backdrop for entertaining. The challenge was creating a room that felt both grand and intimate, sophisticated yet comfortable enough for daily family life.'
    }, {
      type: 'image',
      src: 'inline1',
      alt: 'Before transformation - traditional formal living room layout'
    }, {
      type: 'blockquote',
      text: 'We wanted a room that our teenagers would actually want to spend time in, but that would also impress our guests during dinner parties. The balance between family comfort and entertaining elegance was key.'
    }, {
      type: 'heading',
      level: 3,
      text: 'Spatial Planning & Layout',
      id: 'spatial-planning-layout'
    }, {
      type: 'paragraph',
      text: 'The original layout felt rigid and unwelcoming. We reimagined the space with flexible seating arrangements that could adapt to different occasions:'
    }, {
      type: 'list',
      items: ['Central seating area with modular furniture for flexible arrangements', 'Built-in window seating with storage for casual family moments', 'Dedicated reading nook with optimal natural lighting', 'Entertainment zone with integrated technology and media storage', 'Multiple conversation areas to support both intimate and larger gatherings']
    }, {
      type: 'paragraph',
      text: 'The new layout creates natural traffic flow while defining distinct zones for different activities. Each area maintains visual connection to the others, ensuring the space feels cohesive and open.'
    }, {
      type: 'heading',
      level: 2,
      text: 'Material Selection & Finishes',
      id: 'material-selection-finishes'
    }, {
      type: 'paragraph',
      text: 'Our material palette reflects the clients\\' appreciation for both luxury and durability. We selected finishes that would age beautifully while standing up to the demands of active family life.'
    }, {
      type: 'image',
      src: 'inline2',
      alt: 'Detail of custom millwork and premium fabric selections'
    }, {
      type: 'heading',
      level: 3,
      text: 'Custom Elements & Craftsmanship',
      id: 'custom-elements-craftsmanship'
    }, {
      type: 'paragraph',
      text: 'The space features extensive custom millwork, including built-in bookcases, window seats, and entertainment cabinetry. Each piece was designed to complement the home\\'s architectural character while providing modern functionality.'
    }, {
      type: 'paragraph',
      text: 'The attention to detail in the craftsmanship is evident in every element, from the hand-selected hardware to the precisely mitered joints in the custom cabinetry. These details elevate the space from simply beautiful to truly exceptional.'
    }, {
      type: 'heading',
      level: 2,
      text: 'Lighting Design & Ambiance',
      id: 'lighting-design-ambiance'
    }, {
      type: 'paragraph',
      text: 'Strategic lighting design was crucial to the success of this multi-functional space. We implemented a layered lighting approach that supports everything from homework sessions to elegant dinner parties.'
    }, {
      type: 'paragraph',
      text: 'The result is a living space that has become the true heart of this Edina home. The design successfully balances the clients\\' desire for sophistication with their need for practical family living, creating a room that is both impressive and inviting.'
    }]
  },
  argTypes: {
    // Hide carousel-specific controls for article-toc variant
    carouselImages: {
      table: {
        disable: true
      }
    },
    carouselImage1: {
      table: {
        disable: true
      }
    },
    carouselImage2: {
      table: {
        disable: true
      }
    },
    carouselImage3: {
      table: {
        disable: true
      }
    },
    carouselImage4: {
      table: {
        disable: true
      }
    },
    carouselImage5: {
      table: {
        disable: true
      }
    },
    carouselImage6: {
      table: {
        disable: true
      }
    },
    beforeImage: {
      table: {
        disable: true
      }
    },
    afterImage: {
      table: {
        disable: true
      }
    },
    authorAvatar: {
      table: {
        disable: true
      }
    },
    authorName: {
      table: {
        disable: true
      }
    },
    authorRole: {
      table: {
        disable: true
      }
    }
  }
}`,...Ie.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'two-column-sidebar',
    date: 'Dec 10, 2024',
    category: 'Design Process',
    title: 'Luxury Master Suite Renovation - Excelsior',
    description: 'This comprehensive master suite renovation showcases our holistic design approach, transforming a dated bedroom and bathroom into a sophisticated retreat that perfectly balances luxury and comfort.',
    authorName: 'Eminent Interior Design',
    authorRole: 'Interior Design Studio',
    content: [{
      type: 'paragraph',
      text: 'This Excelsior master suite renovation represents the culmination of thoughtful design and meticulous craftsmanship. Our clients desired a private sanctuary that would serve as a peaceful retreat from their busy lives while reflecting their sophisticated aesthetic preferences.'
    }, {
      type: 'heading',
      level: 2,
      text: 'Design Vision & Concept',
      id: 'design-vision-concept'
    }, {
      type: 'paragraph',
      text: 'The original master suite felt disconnected and dated, with small rooms that didn\\'t take advantage of the home\\'s beautiful lake views. Our design approach focused on creating a cohesive suite that maximizes natural light and creates seamless flow between sleeping, dressing, and bathing areas.'
    }, {
      type: 'image',
      src: 'inline1',
      alt: 'Before renovation - original master bedroom layout'
    }, {
      type: 'blockquote',
      text: 'We wanted our bedroom to feel like a luxury hotel suite, but completely personal to our style. The goal was creating a space where we could truly unwind and recharge.'
    }, {
      type: 'heading',
      level: 3,
      text: 'Space Planning & Layout',
      id: 'space-planning-layout'
    }, {
      type: 'paragraph',
      text: 'The renovation involved reconfiguring the entire suite to create better flow and functionality:'
    }, {
      type: 'list',
      items: ['Enlarged bedroom with seating area overlooking the lake', 'Walk-in closet with custom organizational systems', 'Spa-like bathroom with freestanding tub and separate shower', 'Private sitting area with fireplace for quiet mornings', 'Built-in millwork for storage and display throughout']
    }, {
      type: 'paragraph',
      text: 'The new layout creates distinct zones for different activities while maintaining visual connection throughout the suite. Natural light flows freely through the space, enhanced by carefully placed mirrors and light-colored finishes.'
    }, {
      type: 'heading',
      level: 2,
      text: 'Material Selection & Finishes',
      id: 'material-selection-finishes'
    }, {
      type: 'paragraph',
      text: 'Our material palette reflects the serene lakeside setting while maintaining the luxury and sophistication our clients desired. We selected finishes that would create a timeless backdrop for both relaxation and entertaining.'
    }, {
      type: 'image',
      src: 'inline2',
      alt: 'Custom millwork and luxury finishes in the completed suite'
    }, {
      type: 'heading',
      level: 3,
      text: 'Custom Elements & Details',
      id: 'custom-elements-details'
    }, {
      type: 'paragraph',
      text: 'Every element in the suite was carefully considered and many were custom-designed specifically for this project. The built-in window seat with storage, custom headboard with integrated lighting, and bespoke closet system all contribute to the suite\\'s unique character and functionality.'
    }, {
      type: 'paragraph',
      text: 'The completed master suite has exceeded our clients\\' expectations, creating a true sanctuary that perfectly balances luxury and livability. This project demonstrates our commitment to creating spaces that enhance daily life while reflecting our clients\\' personal style and sophisticated taste.'
    }]
  },
  argTypes: {
    // Hide carousel-specific controls for two-column-sidebar variant
    carouselImages: {
      table: {
        disable: true
      }
    },
    carouselImage1: {
      table: {
        disable: true
      }
    },
    carouselImage2: {
      table: {
        disable: true
      }
    },
    carouselImage3: {
      table: {
        disable: true
      }
    },
    carouselImage4: {
      table: {
        disable: true
      }
    },
    carouselImage5: {
      table: {
        disable: true
      }
    },
    carouselImage6: {
      table: {
        disable: true
      }
    },
    beforeImage: {
      table: {
        disable: true
      }
    },
    afterImage: {
      table: {
        disable: true
      }
    }
  }
}`,...Se.parameters?.docs?.source}}};const Tn=["Default","WithCarousel","WithSidebar","ArticleToc","TwoColumnSidebar"];export{Ie as ArticleToc,je as Default,Se as TwoColumnSidebar,Ne as WithCarousel,ke as WithSidebar,Tn as __namedExportsOrder,Sn as default};
