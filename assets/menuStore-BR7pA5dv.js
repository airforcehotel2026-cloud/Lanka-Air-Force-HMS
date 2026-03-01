import{k as Ge,aO as Mt,aP as et,aQ as xt,aR as Vt,aD as el,K as At,g as Ae,Q as tl,aE as ll,c as p,h as O,a9 as Ne,aS as al,aa as il,S as Ft,I as ue,E as Ve,C as ht,q as ie,aA as Rt,w as J,o as nl,n as Fe,r as D,z as ol,t as Ye,aT as mt,A as ul,_ as rl,J as sl,W as cl,aU as dl,L as fl,aV as vl,M as Sl,N as hl,aW as ml,aX as gl,aY as gt,aZ as Cl,D as El,a_ as yl,X as pl,am as bl,l as wl,a$ as Tl,b0 as kl,b1 as Pl,b2 as Ol,b3 as Bl,aF as Ml,aH as xl,aG as Vl,p as Al,b4 as Fl,b5 as Me,b6 as Rl,b7 as Ll,b8 as Ct,b9 as Dl,G as we,ba as Il,ax as Hl,$ as Nl,bb as ql,ay as zl}from"./index-BvaAlLTs.js";import{b as Wl,Q as Gl,a as _l}from"./QItem--ApIff9r.js";import{c as Kl}from"./selection-fZizdKBt.js";import{n as Et}from"./format-hlGAdIUH.js";const $l=Ge({name:"QField",inheritAttrs:!1,props:{...et,tag:{type:String,default:"label"}},emits:Mt,setup(){return xt(Vt({tagProp:!0}))}}),jl={xs:8,sm:10,md:14,lg:20,xl:24},Ul=Ge({name:"QChip",props:{...At,...el,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:l,emit:a}){const{proxy:{$q:n}}=Ae(),v=Ft(e,n),o=ll(e,jl),S=p(()=>e.selected===!0||e.icon!==void 0),h=p(()=>e.selected===!0?e.iconSelected||n.iconSet.chip.selected:e.icon),m=p(()=>e.iconRemove||n.iconSet.chip.remove),C=p(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),s=p(()=>{const E=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(E?` text-${E} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(C.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(v.value===!0?" q-chip--dark q-dark":"")}),y=p(()=>{const E=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},z={...E,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||n.lang.label.remove};return{chip:E,remove:z}});function b(E){E.keyCode===13&&u(E)}function u(E){e.disable||(a("update:selected",!e.selected),a("click",E))}function g(E){(E.keyCode===void 0||E.keyCode===13)&&(ue(E),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function q(){const E=[];C.value===!0&&E.push(O("div",{class:"q-focus-helper"})),S.value===!0&&E.push(O(Ne,{class:"q-chip__icon q-chip__icon--left",name:h.value}));const z=e.label!==void 0?[O("div",{class:"ellipsis"},[e.label])]:void 0;return E.push(O("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},al(l.default,z))),e.iconRight&&E.push(O(Ne,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&E.push(O(Ne,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:m.value,...y.value.remove,onClick:g,onKeyup:g})),E}return()=>{if(e.modelValue===!1)return;const E={class:s.value,style:o.value};return C.value===!0&&Object.assign(E,y.value.chip,{onClick:u,onKeyup:b}),tl("div",E,q(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[il,e.ripple]])}}}),Ql={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Jl={...Ql,contextMenu:Boolean};function Xl({showing:e,avoidEmit:l,configureAnchorEl:a}){const{props:n,proxy:v,emit:o}=Ae(),S=D(null);let h=null;function m(u){return S.value===null?!1:u===void 0||u.touches===void 0||u.touches.length<=1}const C={};a===void 0&&(Object.assign(C,{hide(u){v.hide(u)},toggle(u){v.toggle(u),u.qAnchorHandled=!0},toggleKey(u){Rt(u,13)===!0&&C.toggle(u)},contextClick(u){v.hide(u),Ve(u),ie(()=>{v.show(u),u.qAnchorHandled=!0})},prevent:Ve,mobileTouch(u){if(C.mobileCleanup(u),m(u)!==!0)return;v.hide(u),S.value.classList.add("non-selectable");const g=u.target;ht(C,"anchor",[[g,"touchmove","mobileCleanup","passive"],[g,"touchend","mobileCleanup","passive"],[g,"touchcancel","mobileCleanup","passive"],[S.value,"contextmenu","prevent","notPassive"]]),h=setTimeout(()=>{h=null,v.show(u),u.qAnchorHandled=!0},300)},mobileCleanup(u){S.value.classList.remove("non-selectable"),h!==null&&(clearTimeout(h),h=null),e.value===!0&&u!==void 0&&Kl()}}),a=function(u=n.contextMenu){if(n.noParentEvent===!0||S.value===null)return;let g;u===!0?v.$q.platform.is.mobile===!0?g=[[S.value,"touchstart","mobileTouch","passive"]]:g=[[S.value,"mousedown","hide","passive"],[S.value,"contextmenu","contextClick","notPassive"]]:g=[[S.value,"click","toggle","passive"],[S.value,"keyup","toggleKey","passive"]],ht(C,"anchor",g)});function s(){ol(C,"anchor")}function y(u){for(S.value=u;S.value.classList.contains("q-anchor--skip");)S.value=S.value.parentNode;a()}function b(){if(n.target===!1||n.target===""||v.$el.parentNode===null)S.value=null;else if(n.target===!0)y(v.$el.parentNode);else{let u=n.target;if(typeof n.target=="string")try{u=document.querySelector(n.target)}catch{u=void 0}u!=null?(S.value=u.$el||u,a()):(S.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return J(()=>n.contextMenu,u=>{S.value!==null&&(s(),a(u))}),J(()=>n.target,()=>{S.value!==null&&s(),b()}),J(()=>n.noParentEvent,u=>{S.value!==null&&(u===!0?s():a())}),nl(()=>{b(),l!==!0&&n.modelValue===!0&&S.value===null&&o("update:modelValue",!1)}),Fe(()=>{h!==null&&clearTimeout(h),s()}),{anchorEl:S,canShow:m,anchorEvents:C}}function Yl(e,l){const a=D(null);let n;function v(h,m){const C=`${m!==void 0?"add":"remove"}EventListener`,s=m!==void 0?m:n;h!==window&&h[C]("scroll",s,Ye.passive),window[C]("scroll",s,Ye.passive),n=m}function o(){a.value!==null&&(v(a.value),a.value=null)}const S=J(()=>e.noParentEvent,()=>{a.value!==null&&(o(),l())});return Fe(S),{localScrollTarget:a,unconfigureScrollTarget:o,changeScrollEvent:v}}const{notPassiveCapture:qe}=Ye,he=[];function ze(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let a=mt.length-1;for(;a>=0;){const n=mt[a].$;if(n.type.name==="QTooltip"){a--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;a--}for(let n=he.length-1;n>=0;n--){const v=he[n];if((v.anchorEl.value===null||v.anchorEl.value.contains(l)===!1)&&(l===document.body||v.innerRef.value!==null&&v.innerRef.value.contains(l)===!1))e.qClickOutside=!0,v.onClickOutside(e);else return}}function Zl(e){he.push(e),he.length===1&&(document.addEventListener("mousedown",ze,qe),document.addEventListener("touchstart",ze,qe))}function yt(e){const l=he.findIndex(a=>a===e);l!==-1&&(he.splice(l,1),he.length===0&&(document.removeEventListener("mousedown",ze,qe),document.removeEventListener("touchstart",ze,qe)))}let pt,bt;function wt(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ea(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Ze={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Ze[`${e}#ltr`]=e,Ze[`${e}#rtl`]=e});function Tt(e,l){const a=e.split(" ");return{vertical:a[0],horizontal:Ze[`${a[1]}#${l===!0?"rtl":"ltr"}`]}}function ta(e,l){let{top:a,left:n,right:v,bottom:o,width:S,height:h}=e.getBoundingClientRect();return l!==void 0&&(a-=l[1],n-=l[0],o+=l[1],v+=l[0],S+=l[0],h+=l[1]),{top:a,bottom:o,height:h,left:n,right:v,width:S,middle:n+(v-n)/2,center:a+(o-a)/2}}function la(e,l,a){let{top:n,left:v}=e.getBoundingClientRect();return n+=l.top,v+=l.left,a!==void 0&&(n+=a[1],v+=a[0]),{top:n,bottom:n+1,height:1,left:v,right:v+1,width:1,middle:v,center:n}}function aa(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function kt(e,l,a,n){return{top:e[a.vertical]-l[n.vertical],left:e[a.horizontal]-l[n.horizontal]}}function Lt(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Lt(e,l+1)},10);return}const{targetEl:a,offset:n,anchorEl:v,anchorOrigin:o,selfOrigin:S,absoluteOffset:h,fit:m,cover:C,maxHeight:s,maxWidth:y}=e;if(ul.is.ios===!0&&window.visualViewport!==void 0){const F=document.body.style,{offsetLeft:N,offsetTop:W}=window.visualViewport;N!==pt&&(F.setProperty("--q-pe-left",N+"px"),pt=N),W!==bt&&(F.setProperty("--q-pe-top",W+"px"),bt=W)}const{scrollLeft:b,scrollTop:u}=a,g=h===void 0?ta(v,C===!0?[0,0]:n):la(v,h,n);Object.assign(a.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:y,maxHeight:s,visibility:"visible"});const{offsetWidth:q,offsetHeight:E}=a,{elWidth:z,elHeight:U}=m===!0||C===!0?{elWidth:Math.max(g.width,q),elHeight:C===!0?Math.max(g.height,E):E}:{elWidth:q,elHeight:E};let M={maxWidth:y,maxHeight:s};(m===!0||C===!0)&&(M.minWidth=g.width+"px",C===!0&&(M.minHeight=g.height+"px")),Object.assign(a.style,M);const B=aa(z,U);let R=kt(g,B,o,S);if(h===void 0||n===void 0)Qe(R,g,B,o,S);else{const{top:F,left:N}=R;Qe(R,g,B,o,S);let W=!1;if(R.top!==F){W=!0;const $=2*n[1];g.center=g.top-=$,g.bottom-=$+2}if(R.left!==N){W=!0;const $=2*n[0];g.middle=g.left-=$,g.right-=$+2}W===!0&&(R=kt(g,B,o,S),Qe(R,g,B,o,S))}M={top:R.top+"px",left:R.left+"px"},R.maxHeight!==void 0&&(M.maxHeight=R.maxHeight+"px",g.height>R.maxHeight&&(M.minHeight=M.maxHeight)),R.maxWidth!==void 0&&(M.maxWidth=R.maxWidth+"px",g.width>R.maxWidth&&(M.minWidth=M.maxWidth)),Object.assign(a.style,M),a.scrollTop!==u&&(a.scrollTop=u),a.scrollLeft!==b&&(a.scrollLeft=b)}function Qe(e,l,a,n,v){const o=a.bottom,S=a.right,h=rl(),m=window.innerHeight-h,C=document.body.clientWidth;if(e.top<0||e.top+o>m)if(v.vertical==="center")e.top=l[n.vertical]>m/2?Math.max(0,m-o):0,e.maxHeight=Math.min(o,m);else if(l[n.vertical]>m/2){const s=Math.min(m,n.vertical==="center"?l.center:n.vertical===v.vertical?l.bottom:l.top);e.maxHeight=Math.min(o,s),e.top=Math.max(0,s-o)}else e.top=Math.max(0,n.vertical==="center"?l.center:n.vertical===v.vertical?l.top:l.bottom),e.maxHeight=Math.min(o,m-e.top);if(e.left<0||e.left+S>C)if(e.maxWidth=Math.min(S,C),v.horizontal==="middle")e.left=l[n.horizontal]>C/2?Math.max(0,C-S):0;else if(l[n.horizontal]>C/2){const s=Math.min(C,n.horizontal==="middle"?l.middle:n.horizontal===v.horizontal?l.right:l.left);e.maxWidth=Math.min(S,s),e.left=Math.max(0,s-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?l.middle:n.horizontal===v.horizontal?l.left:l.right),e.maxWidth=Math.min(S,C-e.left)}const ia=Ge({name:"QMenu",inheritAttrs:!1,props:{...Jl,...fl,...At,...dl,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noEscDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:wt},self:{type:String,validator:wt},offset:{type:Array,validator:ea},scrollTarget:cl,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...sl,"click","escapeKey"],setup(e,{slots:l,emit:a,attrs:n}){let v=null,o,S,h;const m=Ae(),{proxy:C}=m,{$q:s}=C,y=D(null),b=D(!1),u=p(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),g=Ft(e,s),{registerTick:q,removeTick:E}=vl(),{registerTimeout:z}=Sl(),{transitionProps:U,transitionStyle:M}=Tl(e),{localScrollTarget:B,changeScrollEvent:R,unconfigureScrollTarget:F}=Yl(e,T),{anchorEl:N,canShow:W}=Xl({showing:b}),{hide:$}=hl({showing:b,canShow:W,handleShow:ce,handleHide:i,hideOnRouteChange:u,processOnMount:!0}),{showPortal:Y,hidePortal:re,renderPortal:K}=ml(m,y,I,"menu"),le={anchorEl:N,innerRef:y,onClickOutside(r){if(e.persistent!==!0&&b.value===!0)return $(r),(r.type==="touchstart"||r.target.classList.contains("q-dialog__backdrop"))&&ue(r),!0}},se=p(()=>Tt(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),ne=p(()=>e.cover===!0?se.value:Tt(e.self||"top start",s.lang.rtl)),Q=p(()=>(e.square===!0?" q-menu--square":"")+(g.value===!0?" q-menu--dark q-dark":"")),ke=p(()=>e.autoClose===!0?{onClick:x}:{}),oe=p(()=>b.value===!0&&e.persistent!==!0);J(oe,r=>{r===!0?(gl(P),Zl(le)):(gt(P),yt(le))});function Z(){kl(()=>{let r=y.value;r&&r.contains(document.activeElement)!==!0&&(r=r.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||r.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||r.querySelector("[autofocus], [data-autofocus]")||r,r.focus({preventScroll:!0}))})}function ce(r){if(v=e.noRefocus===!1?document.activeElement:null,Cl(L),Y(),T(),o=void 0,r!==void 0&&(e.touchPosition||e.contextMenu)){const G=El(r);if(G.left!==void 0){const{top:ee,left:me}=N.value.getBoundingClientRect();o={left:G.left-me,top:G.top-ee}}}S===void 0&&(S=J(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,w)),e.noFocus!==!0&&document.activeElement.blur(),q(()=>{w(),e.noFocus!==!0&&Z()}),z(()=>{s.platform.is.ios===!0&&(h=e.autoClose,y.value.click()),w(),Y(!0),a("show",r)},e.transitionDuration)}function i(r){E(),re(),c(!0),v!==null&&(r===void 0||r.qClickOutside!==!0)&&(((r?.type.indexOf("key")===0?v.closest('[tabindex]:not([tabindex^="-"])'):void 0)||v).focus(),v=null),z(()=>{re(!0),a("hide",r)},e.transitionDuration)}function c(r){o=void 0,S!==void 0&&(S(),S=void 0),(r===!0||b.value===!0)&&(yl(L),F(),yt(le),gt(P)),r!==!0&&(v=null)}function T(){(N.value!==null||e.scrollTarget!==void 0)&&(B.value=pl(N.value,e.scrollTarget),R(B.value,w))}function x(r){h!==!0?(Pl(C,r),a("click",r)):h=!1}function L(r){oe.value===!0&&e.noFocus!==!0&&Ol(y.value,r.target)!==!0&&Z()}function P(r){e.noEscDismiss!==!0&&(a("escapeKey"),$(r))}function w(){Lt({targetEl:y.value,offset:e.offset,anchorEl:N.value,anchorOrigin:se.value,selfOrigin:ne.value,absoluteOffset:o,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function I(){return O(bl,U.value,()=>b.value===!0?O("div",{role:"menu",...n,ref:y,tabindex:-1,class:["q-menu q-position-engine scroll"+Q.value,n.class],style:[n.style,M.value],...ke.value},wl(l.default)):null)}return Fe(c),Object.assign(C,{focus:Z,updatePosition:w}),K}});let We=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const l=document.createElement("div");Object.assign(l.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(l),e.scrollLeft=-1e3,We=e.scrollLeft>=0,e.remove()}const X=1e3,na=["start","center","end","start-force","center-force","end-force"],Dt=Array.prototype.filter,oa=window.getComputedStyle(document.body).overflowAnchor===void 0?Al:function(e,l){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const a=e.children||[];Dt.call(a,v=>v.dataset&&v.dataset.qVsAnchor!==void 0).forEach(v=>{delete v.dataset.qVsAnchor});const n=a[l];n?.dataset&&(n.dataset.qVsAnchor="")}))};function Te(e,l){return e+l}function Je(e,l,a,n,v,o,S,h){const m=e===window?document.scrollingElement||document.documentElement:e,C=v===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-S-h,scrollMaxSize:0,offsetStart:-S,offsetEnd:-h};if(v===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=m.scrollLeft,s.scrollViewSize+=m.clientWidth),s.scrollMaxSize=m.scrollWidth,o===!0&&(s.scrollStart=(We===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=m.scrollTop,s.scrollViewSize+=m.clientHeight),s.scrollMaxSize=m.scrollHeight),a!==null)for(let y=a.previousElementSibling;y!==null;y=y.previousElementSibling)y.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=y[C]);if(n!==null)for(let y=n.nextElementSibling;y!==null;y=y.nextElementSibling)y.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=y[C]);if(l!==e){const y=m.getBoundingClientRect(),b=l.getBoundingClientRect();v===!0?(s.offsetStart+=b.left-y.left,s.offsetEnd-=b.width):(s.offsetStart+=b.top-y.top,s.offsetEnd-=b.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function Pt(e,l,a,n){l==="end"&&(l=(e===window?document.body:e)[a===!0?"scrollWidth":"scrollHeight"]),e===window?a===!0?(n===!0&&(l=(We===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-l),window.scrollTo(l,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,l):a===!0?(n===!0&&(l=(We===!0?e.scrollWidth-e.offsetWidth:0)-l),e.scrollLeft=l):e.scrollTop=l}function xe(e,l,a,n){if(a>=n)return 0;const v=l.length,o=Math.floor(a/X),S=Math.floor((n-1)/X)+1;let h=e.slice(o,S).reduce(Te,0);return a%X!==0&&(h-=l.slice(o*X,a).reduce(Te,0)),n%X!==0&&n!==v&&(h-=l.slice(n,S*X).reduce(Te,0)),h}const It={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Sa=Object.keys(It),Ot={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...It};function ua({virtualScrollLength:e,getVirtualScrollTarget:l,getVirtualScrollEl:a,virtualScrollItemSizeComputed:n}){const v=Ae(),{props:o,emit:S,proxy:h}=v,{$q:m}=h;let C,s,y,b=[],u;const g=D(0),q=D(0),E=D({}),z=D(null),U=D(null),M=D(null),B=D({from:0,to:0}),R=p(()=>o.tableColspan!==void 0?o.tableColspan:100);n===void 0&&(n=p(()=>o.virtualScrollItemSize));const F=p(()=>n.value+";"+o.virtualScrollHorizontal),N=p(()=>F.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);J(N,()=>{Q()}),J(F,W);function W(){ne(s,!0)}function $(i){ne(i===void 0?s:i)}function Y(i,c){const T=l();if(T==null||T.nodeType===8)return;const x=Je(T,a(),z.value,U.value,o.virtualScrollHorizontal,m.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);y!==x.scrollViewSize&&Q(x.scrollViewSize),K(T,x,Math.min(e.value-1,Math.max(0,parseInt(i,10)||0)),0,na.indexOf(c)!==-1?c:s!==-1&&i>s?"end":"start")}function re(){const i=l();if(i==null||i.nodeType===8)return;const c=Je(i,a(),z.value,U.value,o.virtualScrollHorizontal,m.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),T=e.value-1,x=c.scrollMaxSize-c.offsetStart-c.offsetEnd-q.value;if(C===c.scrollStart)return;if(c.scrollMaxSize<=0){K(i,c,0,0);return}y!==c.scrollViewSize&&Q(c.scrollViewSize),le(B.value.from);const L=Math.floor(c.scrollMaxSize-Math.max(c.scrollViewSize,c.offsetEnd)-Math.min(u[T],c.scrollViewSize/2));if(L>0&&Math.ceil(c.scrollStart)>=L){K(i,c,T,c.scrollMaxSize-c.offsetEnd-b.reduce(Te,0));return}let P=0,w=c.scrollStart-c.offsetStart,I=w;if(w<=x&&w+c.scrollViewSize>=g.value)w-=g.value,P=B.value.from,I=w;else for(let r=0;w>=b[r]&&P<T;r++)w-=b[r],P+=X;for(;w>0&&P<T;)w-=u[P],w>-c.scrollViewSize?(P++,I=w):I=u[P]+w;K(i,c,P,I)}function K(i,c,T,x,L){const P=typeof L=="string"&&L.indexOf("-force")!==-1,w=P===!0?L.replace("-force",""):L,I=w!==void 0?w:"start";let r=Math.max(0,T-E.value[I]),G=r+E.value.total;G>e.value&&(G=e.value,r=Math.max(0,G-E.value.total)),C=c.scrollStart;const ee=r!==B.value.from||G!==B.value.to;if(ee===!1&&w===void 0){oe(T);return}const{activeElement:me}=document,ae=M.value;ee===!0&&ae!==null&&ae!==me&&ae.contains(me)===!0&&(ae.addEventListener("focusout",se),setTimeout(()=>{ae?.removeEventListener("focusout",se)})),oa(ae,T-r);const Re=w!==void 0?u.slice(r,T).reduce(Te,0):0;if(ee===!0){const de=G>=B.value.from&&r<=B.value.to?B.value.to:G;B.value={from:r,to:de},g.value=xe(b,u,0,r),q.value=xe(b,u,G,e.value),requestAnimationFrame(()=>{B.value.to!==G&&C===c.scrollStart&&(B.value={from:B.value.from,to:G},q.value=xe(b,u,G,e.value))})}requestAnimationFrame(()=>{if(C!==c.scrollStart)return;ee===!0&&le(r);const de=u.slice(r,T).reduce(Te,0),fe=de+c.offsetStart+g.value,Le=fe+u[T];let Pe=fe+x;if(w!==void 0){const _e=de-Re,Oe=c.scrollStart+_e;Pe=P!==!0&&Oe<fe&&Le<Oe+c.scrollViewSize?Oe:w==="end"?Le-c.scrollViewSize:fe-(w==="start"?0:Math.round((c.scrollViewSize-u[T])/2))}C=Pe,Pt(i,Pe,o.virtualScrollHorizontal,m.lang.rtl),oe(T)})}function le(i){const c=M.value;if(c){const T=Dt.call(c.children,r=>r.classList&&r.classList.contains("q-virtual-scroll--skip")===!1),x=T.length,L=o.virtualScrollHorizontal===!0?r=>r.getBoundingClientRect().width:r=>r.offsetHeight;let P=i,w,I;for(let r=0;r<x;){for(w=L(T[r]),r++;r<x&&T[r].classList.contains("q-virtual-scroll--with-prev")===!0;)w+=L(T[r]),r++;I=w-u[P],I!==0&&(u[P]+=I,b[Math.floor(P/X)]+=I),P++}}}function se(){M.value?.focus()}function ne(i,c){const T=1*n.value;(c===!0||Array.isArray(u)===!1)&&(u=[]);const x=u.length;u.length=e.value;for(let P=e.value-1;P>=x;P--)u[P]=T;const L=Math.floor((e.value-1)/X);b=[];for(let P=0;P<=L;P++){let w=0;const I=Math.min((P+1)*X,e.value);for(let r=P*X;r<I;r++)w+=u[r];b.push(w)}s=-1,C=void 0,g.value=xe(b,u,0,B.value.from),q.value=xe(b,u,B.value.to,e.value),i>=0?(le(B.value.from),ie(()=>{Y(i)})):Z()}function Q(i){if(i===void 0&&typeof window<"u"){const w=l();w!=null&&w.nodeType!==8&&(i=Je(w,a(),z.value,U.value,o.virtualScrollHorizontal,m.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}y=i;const c=parseFloat(o.virtualScrollSliceRatioBefore)||0,T=parseFloat(o.virtualScrollSliceRatioAfter)||0,x=1+c+T,L=i===void 0||i<=0?1:Math.ceil(i/n.value),P=Math.max(1,L,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/x));E.value={total:Math.ceil(P*x),start:Math.ceil(P*c),center:Math.ceil(P*(.5+c)),end:Math.ceil(P*(1+c)),view:L}}function ke(i,c){const T=o.virtualScrollHorizontal===!0?"width":"height",x={["--q-virtual-scroll-item-"+T]:n.value+"px"};return[i==="tbody"?O(i,{class:"q-virtual-scroll__padding",key:"before",ref:z},[O("tr",[O("td",{style:{[T]:`${g.value}px`,...x},colspan:R.value})])]):O(i,{class:"q-virtual-scroll__padding",key:"before",ref:z,style:{[T]:`${g.value}px`,...x}}),O(i,{class:"q-virtual-scroll__content",key:"content",ref:M,tabindex:-1},c.flat()),i==="tbody"?O(i,{class:"q-virtual-scroll__padding",key:"after",ref:U},[O("tr",[O("td",{style:{[T]:`${q.value}px`,...x},colspan:R.value})])]):O(i,{class:"q-virtual-scroll__padding",key:"after",ref:U,style:{[T]:`${q.value}px`,...x}})]}function oe(i){s!==i&&(o.onVirtualScroll!==void 0&&S("virtualScroll",{index:i,from:B.value.from,to:B.value.to-1,direction:i<s?"decrease":"increase",ref:h}),s=i)}Q();const Z=Bl(re,m.platform.is.ios===!0?120:35);Ml(()=>{Q()});let ce=!1;return xl(()=>{ce=!0}),Vl(()=>{if(ce!==!0)return;const i=l();C!==void 0&&i!==void 0&&i!==null&&i.nodeType!==8?Pt(i,C,o.virtualScrollHorizontal,m.lang.rtl):Y(s)}),Fe(()=>{Z.cancel()}),Object.assign(h,{scrollTo:Y,reset:W,refresh:$}),{virtualScrollSliceRange:B,virtualScrollSliceSizeComputed:E,setVirtualScrollSize:Q,onVirtualScrollEvt:Z,localResetVirtualScroll:ne,padVirtualScroll:ke,scrollTo:Y,reset:W,refresh:$}}const Bt=e=>["add","add-unique","toggle"].includes(e),ra=".*+?^${}()|[]\\",sa=Object.keys(et);function Xe(e,l){if(typeof e=="function")return e;const a=e!==void 0?e:l;return n=>n!==null&&typeof n=="object"&&a in n?n[a]:n}const ha=Ge({name:"QSelect",inheritAttrs:!1,props:{...Ot,...Fl,...et,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:Bt},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:Ot.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...Mt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:l,emit:a}){const{proxy:n}=Ae(),{$q:v}=n,o=D(!1),S=D(!1),h=D(-1),m=D(""),C=D(!1),s=D(!1);let y=null,b=null,u,g,q,E=null,z,U,M,B;const R=D(null),F=D(null),N=D(null),W=D(null),$=D(null),Y=Dl(e),re=ql(ct),K=p(()=>Array.isArray(e.options)?e.options.length:0),le=p(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:se,virtualScrollSliceSizeComputed:ne,localResetVirtualScroll:Q,padVirtualScroll:ke,onVirtualScrollEvt:oe,scrollTo:Z,setVirtualScrollSize:ce}=ua({virtualScrollLength:K,getVirtualScrollTarget:zt,getVirtualScrollEl:rt,virtualScrollItemSizeComputed:le}),i=Vt(),c=p(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,d=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const f=e.mapOptions===!0&&u!==void 0?u:[],k=d.map(A=>qt(A,f));return e.modelValue===null&&t===!0?k.filter(A=>A!==null):k}return d}),T=p(()=>{const t={};return sa.forEach(d=>{const f=e[d];f!==void 0&&(t[d]=f)}),t}),x=p(()=>e.optionsDark===null?i.isDark.value:e.optionsDark),L=p(()=>Ct(c.value)),P=p(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||c.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),w=p(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),I=p(()=>K.value===0),r=p(()=>c.value.map(t=>j.value(t)).join(", ")),G=p(()=>e.displayValue!==void 0?e.displayValue:r.value),ee=p(()=>e.optionsHtml===!0?()=>!0:t=>t?.html===!0),me=p(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||c.value.some(ee.value))),ae=p(()=>i.focused.value===!0?e.tabindex:-1),Re=p(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-controls":`${i.targetUid.value}_lb`};return h.value>=0&&(t["aria-activedescendant"]=`${i.targetUid.value}_${h.value}`),t}),de=p(()=>({id:`${i.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),fe=p(()=>c.value.map((t,d)=>({index:d,opt:t,html:ee.value(t),selected:!0,removeAtIndex:Nt,toggleOption:ve,tabindex:ae.value}))),Le=p(()=>{if(K.value===0)return[];const{from:t,to:d}=se.value;return e.options.slice(t,d).map((f,k)=>{const A=ge.value(f)===!0,V=$e(f)===!0,_=t+k,H={clickable:!0,active:V,activeClass:Oe.value,manualFocus:!0,focused:!1,disable:A,tabindex:-1,dense:e.optionsDense,dark:x.value,role:"option","aria-selected":V===!0?"true":"false",id:`${i.targetUid.value}_${_}`,onClick:()=>{ve(f)}};return A!==!0&&(h.value===_&&(H.focused=!0),v.platform.is.desktop===!0&&(H.onMousemove=()=>{o.value===!0&&Ce(_)})),{index:_,opt:f,html:ee.value(f),label:j.value(f),selected:H.active,focused:H.focused,toggleOption:ve,setOptionIndex:Ce,itemProps:H}})}),Pe=p(()=>e.dropdownIcon!==void 0?e.dropdownIcon:v.iconSet.arrow.dropdown),_e=p(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Oe=p(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),te=p(()=>Xe(e.optionValue,"value")),j=p(()=>Xe(e.optionLabel,"label")),ge=p(()=>Xe(e.optionDisable,"disable")),De=p(()=>c.value.map(te.value)),Ht=p(()=>{const t={onInput:ct,onChange:re,onKeydown:ut,onKeyup:nt,onKeypress:ot,onFocus:at,onClick(d){g===!0&&we(d)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=re,t});J(c,t=>{u=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&i.innerLoading.value!==!0&&(S.value!==!0&&o.value!==!0||L.value!==!0)&&(q!==!0&&be(),(S.value===!0||o.value===!0)&&Ee(""))},{immediate:!0}),J(()=>e.fillInput,be),J(o,je),J(K,Zt);function tt(t){return e.emitValue===!0?te.value(t):t}function Ke(t){if(t!==-1&&t<c.value.length)if(e.multiple===!0){const d=e.modelValue.slice();a("remove",{index:t,value:d.splice(t,1)[0]}),a("update:modelValue",d)}else a("update:modelValue",null)}function Nt(t){Ke(t),i.focus()}function lt(t,d){const f=tt(t);if(e.multiple!==!0){e.fillInput===!0&&Be(j.value(t),!0,!0),a("update:modelValue",f);return}if(c.value.length===0){a("add",{index:0,value:f}),a("update:modelValue",e.multiple===!0?[f]:f);return}if(d===!0&&$e(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const k=e.modelValue.slice();a("add",{index:k.length,value:f}),k.push(f),a("update:modelValue",k)}function ve(t,d){if(i.editable.value!==!0||t===void 0||ge.value(t)===!0)return;const f=te.value(t);if(e.multiple!==!0){d!==!0&&(Be(e.fillInput===!0?j.value(t):"",!0,!0),Se()),F.value?.focus(),(c.value.length===0||Me(te.value(c.value[0]),f)!==!0)&&a("update:modelValue",e.emitValue===!0?f:t);return}if((g!==!0||C.value===!0)&&i.focus(),at(),c.value.length===0){const V=e.emitValue===!0?f:t;a("add",{index:0,value:V}),a("update:modelValue",e.multiple===!0?[V]:V);return}const k=e.modelValue.slice(),A=De.value.findIndex(V=>Me(V,f));if(A!==-1)a("remove",{index:A,value:k.splice(A,1)[0]});else{if(e.maxValues!==void 0&&k.length>=e.maxValues)return;const V=e.emitValue===!0?f:t;a("add",{index:k.length,value:V}),k.push(V)}a("update:modelValue",k)}function Ce(t){if(v.platform.is.desktop!==!0)return;const d=t!==-1&&t<K.value?t:-1;h.value!==d&&(h.value=d)}function Ie(t=1,d){if(o.value===!0){let f=h.value;do f=Et(f+t,-1,K.value-1);while(f!==-1&&f!==h.value&&ge.value(e.options[f])===!0);h.value!==f&&(Ce(f),Z(f),d!==!0&&e.useInput===!0&&e.fillInput===!0&&He(f>=0?j.value(e.options[f]):z,!0))}}function qt(t,d){const f=k=>Me(te.value(k),t);return e.options.find(f)||d.find(f)||t}function $e(t){const d=te.value(t);return De.value.find(f=>Me(f,d))!==void 0}function at(t){e.useInput===!0&&F.value!==null&&(t===void 0||F.value===t.target&&t.target.value===r.value)&&F.value.select()}function it(t){Rt(t,27)===!0&&o.value===!0&&(we(t),Se(),be()),a("keyup",t)}function nt(t){const{value:d}=t.target;if(t.keyCode!==void 0){it(t);return}if(t.target.value="",y!==null&&(clearTimeout(y),y=null),b!==null&&(clearTimeout(b),b=null),be(),typeof d=="string"&&d.length!==0){const f=d.toLocaleLowerCase(),k=V=>{const _=e.options.find(H=>String(V.value(H)).toLocaleLowerCase()===f);return _===void 0?!1:(c.value.indexOf(_)===-1?ve(_):Se(),!0)},A=V=>{k(te)!==!0&&V!==!0&&k(j)!==!0&&Ee(d,!0,()=>A(!0))};A()}else i.clearValue(t)}function ot(t){a("keypress",t)}function ut(t){if(a("keydown",t),Il(t)===!0)return;const d=m.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),f=t.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(h.value!==-1||d===!0);if(t.keyCode===27){Ve(t);return}if(t.keyCode===9&&f===!1){ye();return}if(t.target===void 0||t.target.id!==i.targetUid.value||i.editable.value!==!0)return;if(t.keyCode===40&&i.innerLoading.value!==!0&&o.value===!1){ue(t),pe();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&m.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Ke(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&a("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof m.value!="string"||m.value.length===0)&&(ue(t),h.value=-1,Ie(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ne.value!==void 0&&(ue(t),h.value=Math.max(-1,Math.min(K.value,h.value+(t.keyCode===33?-1:1)*ne.value.view)),Ie(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ue(t),Ie(t.keyCode===38?-1:1,e.multiple));const k=K.value;if((M===void 0||B<Date.now())&&(M=""),k>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||M.length!==0)){o.value!==!0&&pe(t);const A=t.key.toLocaleLowerCase(),V=M.length===1&&M[0]===A;B=Date.now()+1500,V===!1&&(ue(t),M+=A);const _=new RegExp("^"+M.split("").map(Ue=>ra.indexOf(Ue)!==-1?"\\"+Ue:Ue).join(".*"),"i");let H=h.value;if(V===!0||H<0||_.test(j.value(e.options[H]))!==!0)do H=Et(H+1,-1,k-1);while(H!==h.value&&(ge.value(e.options[H])===!0||_.test(j.value(e.options[H]))!==!0));h.value!==H&&ie(()=>{Ce(H),Z(H),H>=0&&e.useInput===!0&&e.fillInput===!0&&He(j.value(e.options[H]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||M!=="")&&(t.keyCode!==9||f===!1))){if(t.keyCode!==9&&ue(t),h.value!==-1&&h.value<k){ve(e.options[h.value]);return}if(d===!0){const A=(V,_)=>{if(_){if(Bt(_)!==!0)return}else _=e.newValueMode;if(Be("",e.multiple!==!0,!0),V==null)return;(_==="toggle"?ve:lt)(V,_==="add-unique"),e.multiple!==!0&&(F.value?.focus(),Se())};if(e.onNewValue!==void 0?a("newValue",m.value,A):A(m.value),e.multiple!==!0)return}o.value===!0?ye():i.innerLoading.value!==!0&&pe()}}function rt(){return g===!0?$.value:N.value!==null&&N.value.contentEl!==null?N.value.contentEl:void 0}function zt(){return rt()}function Wt(){return e.hideSelected===!0?[]:l["selected-item"]!==void 0?fe.value.map(t=>l["selected-item"](t)).slice():l.selected!==void 0?[].concat(l.selected()):e.useChips===!0?fe.value.map((t,d)=>O(Ul,{key:"option-"+d,removable:i.editable.value===!0&&ge.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ae.value,onRemove(){t.removeAtIndex(d)}},()=>O("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:j.value(t.opt)}))):[O("span",{class:"ellipsis",[me.value===!0?"innerHTML":"textContent"]:G.value})]}function st(){if(I.value===!0)return l["no-option"]!==void 0?l["no-option"]({inputValue:m.value}):void 0;const t=l.option!==void 0?l.option:f=>O(_l,{key:f.index,...f.itemProps},()=>O(Wl,()=>O(Gl,()=>O("span",{[f.html===!0?"innerHTML":"textContent"]:f.label}))));let d=ke("div",Le.value.map(t));return l["before-options"]!==void 0&&(d=l["before-options"]().concat(d)),Nl(l["after-options"],d)}function Gt(t,d){const f=d===!0?{...Re.value,...i.splitAttrs.attributes.value}:void 0,k={ref:d===!0?F:void 0,key:"i_t",class:P.value,style:e.inputStyle,value:m.value!==void 0?m.value:"",type:"search",...f,id:d===!0?i.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Ht.value};return t!==!0&&g===!0&&(Array.isArray(k.class)===!0?k.class=[...k.class,"no-pointer-events"]:k.class+=" no-pointer-events"),O("input",k)}function ct(t){y!==null&&(clearTimeout(y),y=null),b!==null&&(clearTimeout(b),b=null),!(t&&t.target&&t.target.qComposing===!0)&&(He(t.target.value||""),q=!0,z=m.value,i.focused.value!==!0&&(g!==!0||C.value===!0)&&i.focus(),e.onFilter!==void 0&&(y=setTimeout(()=>{y=null,Ee(m.value)},e.inputDebounce)))}function He(t,d){m.value!==t&&(m.value=t,d===!0||e.inputDebounce===0||e.inputDebounce==="0"?a("inputValue",t):b=setTimeout(()=>{b=null,a("inputValue",t)},e.inputDebounce))}function Be(t,d,f){q=f!==!0,e.useInput===!0&&(He(t,!0),(d===!0||f!==!0)&&(z=t),d!==!0&&Ee(t))}function Ee(t,d,f){if(e.onFilter===void 0||d!==!0&&i.focused.value!==!0)return;i.innerLoading.value===!0?a("filterAbort"):(i.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&c.value.length!==0&&q!==!0&&t===j.value(c.value[0])&&(t="");const k=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);E!==null&&clearTimeout(E),E=k,a("filter",t,(A,V)=>{(d===!0||i.focused.value===!0)&&E===k&&(clearTimeout(E),typeof A=="function"&&A(),s.value=!1,ie(()=>{i.innerLoading.value=!1,i.editable.value===!0&&(d===!0?o.value===!0&&Se():o.value===!0?je(!0):o.value=!0),typeof V=="function"&&ie(()=>{V(n)}),typeof f=="function"&&ie(()=>{f(n)})}))},()=>{i.focused.value===!0&&E===k&&(clearTimeout(E),i.innerLoading.value=!1,s.value=!1),o.value===!0&&(o.value=!1)})}function _t(){return O(ia,{ref:N,class:w.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&I.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:x.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:_e.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...de.value,onScrollPassive:oe,onBeforeShow:ft,onBeforeHide:Kt,onShow:$t},st)}function Kt(t){vt(t),ye()}function $t(){ce()}function jt(t){we(t),F.value?.focus(),C.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Ut(t){we(t),ie(()=>{C.value=!1})}function Qt(){const t=[O($l,{class:`col-auto ${i.fieldClass.value}`,...T.value,for:i.targetUid.value,dark:x.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:m.value.length!==0,...i.splitAttrs.listeners.value,onFocus:jt,onBlur:Ut},{...l,rawControl:()=>i.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(O("div",{ref:$,class:w.value+" scroll",style:e.popupContentStyle,...de.value,onClick:Ve,onScrollPassive:oe},st())),O(Hl,{ref:W,modelValue:S.value,position:e.useInput===!0?"top":void 0,transitionShow:U,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:ft,onBeforeHide:Jt,onHide:Xt,onShow:Yt},()=>O("div",{class:"q-select__dialog"+(x.value===!0?" q-select__dialog--dark q-dark":"")+(C.value===!0?" q-select__dialog--focused":"")},t))}function Jt(t){vt(t),W.value!==null&&W.value.__updateRefocusTarget(i.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),i.focused.value=!1}function Xt(t){Se(),i.focused.value===!1&&a("blur",t),be()}function Yt(){const t=document.activeElement;(t===null||t.id!==i.targetUid.value)&&F.value!==null&&F.value!==t&&F.value.focus(),ce()}function ye(){S.value!==!0&&(h.value=-1,o.value===!0&&(o.value=!1),i.focused.value===!1&&(E!==null&&(clearTimeout(E),E=null),i.innerLoading.value===!0&&(a("filterAbort"),i.innerLoading.value=!1,s.value=!1)))}function pe(t){i.editable.value===!0&&(g===!0?(i.onControlFocusin(t),S.value=!0,ie(()=>{i.focus()})):i.focus(),e.onFilter!==void 0?Ee(m.value):(I.value!==!0||l["no-option"]!==void 0)&&(o.value=!0))}function Se(){S.value=!1,ye()}function be(){e.useInput===!0&&Be(e.multiple!==!0&&e.fillInput===!0&&c.value.length!==0&&j.value(c.value[0])||"",!0,!0)}function je(t){let d=-1;if(t===!0){if(c.value.length!==0){const f=te.value(c.value[0]);d=e.options.findIndex(k=>Me(te.value(k),f))}Q(d)}Ce(d)}function Zt(t,d){o.value===!0&&i.innerLoading.value===!1&&(Q(-1,!0),ie(()=>{o.value===!0&&i.innerLoading.value===!1&&(t>d?Q():je(!0))}))}function dt(){S.value===!1&&N.value!==null&&N.value.updatePosition()}function ft(t){t!==void 0&&we(t),a("popupShow",t),i.hasPopupOpen=!0,i.onControlFocusin(t)}function vt(t){t!==void 0&&we(t),a("popupHide",t),i.hasPopupOpen=!1,i.onControlFocusout(t)}function St(){g=v.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?l["no-option"]!==void 0||e.onFilter!==void 0||I.value===!1:!0),U=v.platform.is.ios===!0&&g===!0&&e.useInput===!0?"fade":e.transitionShow}return Rl(St),Ll(dt),St(),Fe(()=>{y!==null&&clearTimeout(y),b!==null&&clearTimeout(b)}),Object.assign(n,{showPopup:pe,hidePopup:Se,removeAtIndex:Ke,add:lt,toggleOption:ve,getOptionIndex:()=>h.value,setOptionIndex:Ce,moveOptionSelection:Ie,filter:Ee,updateMenuPosition:dt,updateInputValue:Be,isOptionSelected:$e,getEmittingOptionValue:tt,isOptionDisabled:(...t)=>ge.value.apply(null,t)===!0,getOptionValue:(...t)=>te.value.apply(null,t),getOptionLabel:(...t)=>j.value.apply(null,t)}),Object.assign(i,{innerValue:c,fieldClass:p(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:R,targetRef:F,hasValue:L,showPopup:pe,floatingLabel:p(()=>e.hideSelected!==!0&&L.value===!0||typeof m.value=="number"||m.value.length!==0||Ct(e.displayValue)),getControlChild:()=>{if(i.editable.value!==!1&&(S.value===!0||I.value!==!0||l["no-option"]!==void 0))return g===!0?Qt():_t();i.hasPopupOpen===!0&&(i.hasPopupOpen=!1)},controlEvents:{onFocusin(t){i.onControlFocusin(t)},onFocusout(t){i.onControlFocusout(t,()=>{be(),ye()})},onClick(t){if(Ve(t),g!==!0&&o.value===!0){ye(),F.value?.focus();return}pe(t)}},getControl:t=>{const d=Wt(),f=t===!0||S.value!==!0||g!==!0;if(e.useInput===!0)d.push(Gt(t,f));else if(i.editable.value===!0){const A=f===!0?Re.value:void 0;d.push(O("input",{ref:f===!0?F:void 0,key:"d_t",class:"q-select__focus-target",id:f===!0?i.targetUid.value:void 0,value:G.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...A,onKeydown:ut,onKeyup:it,onKeypress:ot})),f===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&d.push(O("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:nt}))}if(Y.value!==void 0&&e.disable!==!0&&De.value.length!==0){const A=De.value.map(V=>O("option",{value:V,selected:!0}));d.push(O("select",{class:"hidden",name:Y.value,multiple:e.multiple},A))}const k=e.useInput===!0||f!==!0?void 0:i.splitAttrs.attributes.value;return O("div",{class:"q-field__native row items-center",...k,...i.splitAttrs.listeners.value},d)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[O(Ne,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:Pe.value})]:null}),xt(i)}}),ma=zl("menus",{state:()=>({menus:[{id:"bbq-outdoor",name:"BBQ Menu - Outdoor",venue:"Outdoor",basePrice:4e3,minPax:50,template:`WELCOME DRINK (Select One):
- Orange / Mixed Fruit / Strawberry & Guava / Black Currant
[Selected: ]

SOUP WITH BREAD ROLLS & BUTTER (Select One):
- Cream of Vegetable / Cream of Chicken & Veg / Cream of Mushroom
[Selected: ]

SALAD:
- Coleslaw salad & Green Salad

BBQ:
1. Chicken Drumstick
2. Pork
3. Fish
4. Chicken Brokwast Sausages
5. Bake Potato Wages
6. Pineapple

DESSERTS:
1. Ice Cream
2. Jelly & Custard`},{id:"regular-outdoor",name:"Regular Menu - Outdoor",venue:"Outdoor",basePrice:3500,minPax:50,template:`WELCOME DRINK (Select One):
- Orange / Mixed Fruit / Strawberry & Guava / Black Currant
[Selected: ]

RICE (Select One):
- Veg Fried Rice / Tempered Yellow Rice / Egg & Veg Rice / Free Plain Rice
[Selected: ]

CHICKEN (Select One):
- Baked BBQ Chicken / Chilly Chicken with Mushroom / Chicken Curry
[Selected: ]

FISH (Select One):
- Fish Curry / Fish Stew / Fish Batter Fried (Chilly Mayo)
[Selected: ]

PORK (Select One):
- Pork Black Curry / Sri Lankan style Pork Stew
[Selected: ]

VEGETABLES (Select One):
- Veg Chop Suey / Wok Fried Veg / Mix Veg Curry
[Selected: ]

POTATOES (Select One):
- Potato Tempered / Lyonnaise Potato
[Selected: ]

DHAL (Select One):
- Dhal Curry / Dhal Tempered
[Selected: ]

SALADS:
1. Onion, Capsicum & Tomato Salad
2. Coleslaw Salad

CONDIMENTS:
1. Chili Paste
2. Papadum
3. Fried Dry Chili

DESSERTS (Select One):
- Cream Caramel / Fresh Fruits Salad / Watalappan
[Selected: ]
- AND Ice Cream
- AND Jelly & Custard`},{id:"corporate-menu",name:"Corporate Menu",venue:"Any",basePrice:4200,minPax:150,template:`WELCOME DRINK (Select One):
- Orange / Mixed Fruit / Strawberry & Guava / Black Currant
[Selected: ]

SALADS (Select Three):
- Onion, Capsicum & Tomato Salad / Coleslaw Salad / Egg Mayonnaise / Coleslaw Hawaiian / Brinjal Salad / Russian Salad with Smoke Chicken
[Selected: ]

RICE (Select One):
- Veg Fried Rice / Tempered Yellow Rice (Cashew Sultana & fried Onion) / Egg & Corn Rice / Egg & Veg Rice
- AND Plain Rice Free
[Selected: ]

NOODLES OR PASTA (Select One):
- Egg & Veg fried Noodles / Chinese Chili Noodles / Stir fried Chili noodles / Spaghetti Napolitano
[Selected: ]

CHICKEN (Select One):
- Baked BBQ Chicken / Chicken Curry / Chili Chicken with Grave
[Selected: ]

FISH (Select One):
- Fish Curry / Fish Batter fried (Chili Mayo) / Fish Stew
[Selected: ]

PORK (Select One):
- Pork Black Curry / Pork Stew (SL Style) / Slice Pork Braised in BBQ Sauce
[Selected: ]

VEGETABLES (Select One):
- Veg Chop Suey / Wok Fried Veg / Veg Mix Curry
[Selected: ]

POTATOES (Select One):
- Potato Tempered / Lemon, garlic & chilly Potatoes / Lyonnaise Potatoes
[Selected: ]

CURRIES (Select One of each):
1. Dhal Curry OR Dhal Tempered
2. Brinjal Moju OR Brinjal Pahie
[Selected: ]

CONDIMENTS:
1. Chili Paste
2. Papadam
3. Fried Dry chili

DESSERT:
1. Fresh Cut Fruits or fresh fruit Salad
2. Cream Caramel or Watalappan
3. Assorted ice cream
4. Jelly & Custard
[Selected: ]`},{id:"special-garden",name:"Special Garden Menu",venue:"Garden",basePrice:4500,minPax:100,template:`WELCOME DRINK (Select One):
- Strawberry & Guava / Apple / Orange / Mixed Fruit / Black Currant / Soursop / Mandarin
[Selected: ]

SOUP WITH BREAD ROLL & BUTTER (Select One):
- Cream of Veg Soup / Cream of Mushroom Soup / Cream of Chicken & Veg Soup / Egg & Sweetcorn soup / Chicken Sweet cone & Egg dropped soup
[Selected: ]

SALAD (Select One):
1. Creamy coleslaw
2. Green Salad
[Selected: ]

DINNER (ACTION):
1. Chicken Koththu OR Egg Koththu
2. Chicken Rice OR Egg Rice
3. Egg Hoppers OR Plain Hoppers
4. Chicken Small pieces Curry
5. Fish Gravy
6. Katta Sambol
7. Seeni Sambol
8. Chili paste
9. Tomato sauce
[Selected: ]

DESSERTS:
1. Assorted ice cream
2. Watalappan
3. Jelly with Custard
[Selected: ]

BITE (100 pax only):
1. Chicken Devilled - 12.00 Kg
2. Pork Pepper Devilled - 10.00 Kg
3. Boiled Vegetable - 08.00 Kg
4. Chicken Bockwurst - 08.00 Kg
5. Fish Cutlet - 200 Ea`},{id:"diamond-eagle",name:"Diamond Eagle Menu",venue:"Any",basePrice:0,minPax:0,template:`WELCOME DRINK (SELECT ONE):
- Fresh Watermelon / Fresh Ambarella / Fresh Mixfruit / Lemon & Passion Mint Juice / Lime & Soda
[Selected: ]

SALADS (SELECT EIGHT):
- Caesar Salad / Caesar Salad with Chicken / Cream Coleslaw / Coleslaw Hawaiian / Assorted Cold Cuts
- Russian Salad (Smoked Chicken) / Egg Mayo / Seafood & Veg or Pasta / Chicken & Veg or Pasta
- Stuffed Eggs / German Potato / Raita / Thai Papaya / Garlic Prawns with Citrus / Chicken Olive & Pineapple
- Spicy Tuna / Thai Beef / Grill Corn & Zukini
* FREE: Decorated with ice carvings
[Selected: ]

SOUPS WITH BREAD ROLLS & BUTTER (SELECT TWO):
- Cream of Veg / Minestrone / Veg Broth / Sweet Corn & Egg Drop / Chicken Broth / Cream of Mushroom Carrot
[Selected: ]

DESSERTS (SELECT SEVEN):
- Fresh Fruits Salad / Fresh Cut Fruits / Bread & Butter Pudding / Pineapple Pudding / Butter Scotch
- Dates Pudding / Hot Chocolate Pudding / Assorted Ice Cream / Caramel & Apple Crumble / Curd & Trickle
- Watalappan / Cream Pineapple / Passion Curd Cake / Fruits in Jelly / Queen of Puddings
- Assorted Mousse / Mousse Cake / Any Gateaux / Choc Biscuit Pudding / Choc Profiteroles
- Fruit Triffle / Broken Glass Jelly / Coconut Jelly with Seasonal Fruits
[Selected: ]`},{id:"platinum-eagle",name:"Platinum Eagle Menu",venue:"Any",basePrice:0,minPax:0,template:`WELCOME DRINK (SELECT ONE):
- Apple / Orange / Mixed Fruit / Strawberry & Guava / Black Currant / Soursop / Mandarin
[Selected: ]

SALADS (SELECT SEVEN):
- Garlic Prawns with Citrus / Chicken Olive & Pineapple / Caesar / Caesar with Chicken / Cream Coleslaw
- Coleslaw Hawaiian / California Coleslaws / Raita / Grill Corn & Zukini / Nicoise / Mix Veg in Tomato Cup
- Waldorf / Seafood & Veg or Pasta / Beet & Orange / Grilled Apple & Pineapple / German Potato
- Thai Papaya / Thai Beef / Boiled Chick Pea & Ham
[Selected: ]

SOUPS WITH BREAD ROLLS & BUTTER (SELECT TWO):
- Cream of Veg / Minestrone / Veg Broth / Sweet Corn & Egg Drop / Chicken Broth / Cream of Mushroom
[Selected: ]

VEGETABLES (SELECT THREE):
- Cashew White Curry / Mixed Veg Curry / Mixed Grilled Veg with Sesame / Beans & Pineapple Curry
- Veg Chopsuey / Stuffed Capsicum / Thai Veg with Tofu / Chinese Green Beans & Garlic Sauce
- Mushroom Tempered with Onion & Capsicum / Lyonnaise Potatoes / Potato Tempered / Brinjal Moju
- Lemon Garlic & Chilli Potato / Veg Lasangna
* FREE: Dhal Tempered or Dhal Curry
[Selected: ]

DESSERTS (SELECT SIX):
- Fresh Fruits Salad / Fresh Cut Fruits / Fruit Triffle / Bread & Butter Pudding / Queen of Puddings
- Hot Chocolate Pudding / Pineapple & Apple Crumble / Pineapple Pudding / Assorted Mousse / Mousse Cake
- Curd & Trickle / Watalappan...
[Selected: ]`},{id:"golden-eagle",name:"Golden Eagle Menu",venue:"Any",basePrice:0,minPax:0,template:`WELCOME DRINK (SELECT ONE):
- Apple / Orange / Mixed Fruit / Strawberry & Guava / Black Currant / Soursop / Mandarin
[Selected: ]

SALADS (SELECT SIX):
- Garlic Prawns with Citrus / Chicken Olive & Pineapple / Caesar / Cream Coleslaw / Spicy Tuna / Coleslaw Hawaiian
- Thai Beef / Boiled Chick Pea & Hum / Raita / Tomato Cucumber & Onion / Russian (Smoked Chicken)
- Egg Mayo / Stuffed Eggs / Seafood & Veg or Pasta / Chicken & Veg or Pasta / Nicoise
- Mix Veg in Tomato Cup / Waldorf / German Potato / Thai Papaya / Beet & Orange
[Selected: ]

SOUPS WITH BREAD ROLLS & BUTTER (SELECT ONE):
- Cream of Veg / Minestrone / Veg Broth / Sweet Corn & Egg...
[Selected: ]

VEGETABLES (SELECT THREE):
- Cashew White Curry / Mixed Veg Curry / Beans & Pineapple / Veg Chopsuey / Stuffed Capsicum
- Lyonnaise Potatoes / Potato Tempered / Lemon Garlic & Chilli Potato
* FREE: Dhal Tempered or Dhal Curry
[Selected: ]

ACTION CORNER (SELECT ONE):
- Batter Fried Mushrooms / Fish Cutlets / Chicken Nuggets (Rs. 250 Net/Pax)
- Mutton Tikka / Mutton Khroma Masala (Rs. 350 Net/Pax)
[Selected: ]

CONDIMENTS:
1. Chilli Paste
2. Mango Chutney
3. Prawn Crackers & Papadam
4. Country Pickle
5. Fried Chilli Moru

DESSERTS (SELECT SIX):
- Assorted Mousse / Mousse Cake / Choc Profiteroll / Any Gateaux ...
[Selected: ]`},{id:"silver-eagle",name:"Silver Eagle Menu",venue:"Any",basePrice:0,minPax:0,template:`WELCOME DRINK (SELECT ONE):
- Apple / Orange / Mixed Fruit / Strawberry & Guava / Black Currant / Soursop / Mandarin
[Selected: ]

SOUPS WITH BREAD ROLLS & BUTTER (SELECT ONE):
- Cream of Veg / Roasted Pumpkin with Garlic Flakes / Cream of Mushroom / Ginger & Carrot
- Cream of Chicken & Veg / Veg Broth / Roasted Potatoes & Garlic / Egg & Sweetcorn
[Selected: ]

SALADS (SELECT FIVE):
- Caesar / Creamy Coleslaw with Raisins / Coleslaw Hawaiian / Garlic Seafood with Citrus
- Egg Mayo / Beet & Orange / Spicy Tuna / Grilled Apple & Pineapple / Thai Beef
- Chicken & Veg or Pasta / Herbs Marinated Italian Pasta / Russian (Smoked Chicken)
- Chicken & Veg or Pasta / Mix Veg in Tomato Cup / Onion Tomato Cucumber
[Selected: ]

FISH (SELECT ONE):
- Grilled Fish with BBQ / Thai Fish Red Curry / Baked Fish Ambulthiyal on Banana Leaf
- Fish Stew (SL Style) / Fish Batter Fried (Chili Mayo) / Mixed Seafood Stew / Spicy Fish Red Curry
- Chilli Fish with Gravy
[Selected: ]

VEGETABLES (SELECT THREE):
- Cashew & Carrot / Green Peas & Potato / Mixed Veg / Brinjal Pahie / Mixed Grilled Veg with Sesame
- Veg Chopsey / Potato with Chili & Onion / Lemon Garlic & Chili Potatoes / Thai Veg with Tofu
- Chinese Green Beans with Garlic Sauce / Lyonnais Potatoes OR Brinjal Moju
- Mushroom Tempered & Onion / Fried Bittergaurd with Capcicum & Onion
* AND Dhal Curry or Tempered
[Selected: ]

ADD-ONS (BUFFET ACTION):
- Fish Cutlet OR Mushroom (Rs 150 Net/Pax)

CONDIMENTS:
1. Mango Chutney
2. Papadam`},{id:"eagle-menu",name:"Eagle Menu",venue:"Any",basePrice:0,minPax:0,template:`WELCOME DRINK (SELECT ONE):
- Apple / Orange / Mixed Fruit / Strawberry & Guava / Black Currant / Soursop / Mandarin
[Selected: ]

SOUPS WITH BREAD ROLLS & BUTTER (SELECT ONE):
- Cream of Veg / Roasted Pumpkin with Garlic Flakes / Cream of Mushroom / Ginger & Carrot
- Cream of Chicken & Veg / Veg Broth / Roasted Potatoes & Garlic
[Selected: ]

APPETIZERS & SALADS (SELECT FIVE):
- Creamy Coleslaw with Raisins / Coleslaw Hawaiian / Garlic Seafood with Citrus / Egg Mayo
- Beet & Orange / Spicy Tuna / Grilled Apple & Pineapple / Thai Beef / Chicken & Veg or Pasta
- Herbs Marinated Italian Pasta / Mix Veg in Tomato Cup / Onion Tomato Cucumber Salad
[Selected: ]

RICE & NOODLES (SELECT TWO):
- Tempered Yellow Rice (Cashew Sultana & Fried Onion) / Chicken & Veg Fried...
[Selected: ]

PORK OR FISH (SELECT ONE):
- Pork Black Curry / Slow Cooked Pork & Potato Stew / Braised Pork with Veg / Pork Vindaloo
- Spicy Pork / Thai Fish Red Curry / Baked Fish Ambulthiyal on Banana Leaf
- Fish Stew (SL Style) / Fish Fried & Cooked / Fish Batter Fried (Chili Mayo)
- Mixed Seafood Stew / Spicy Fish Red Curry / Chilli Fish with Gravy
[Selected: ]

VEGETABLES (SELECT THREE):
- Cashew & Carrot / Green Peas & Potato / Mixed Veg / Brinjal Patie Curs
- Mixed Grilled Veg with Sesame / Veg Chopsey / Mushroom Tempered & Onion
- Fried Bittergaurd with Capcicum & Onion
* FREE Dhal Curry or Tempered
[Selected: ]

CONDIMENTS:
1. Mango Chutney
2. Papadam
3. Fried Dry Chilly
4. Chilli Paste

DESSERTS (SELECT FOUR):
- Pineapple & Apple Crumble / Bread & Butter Pudding / Pineapple Pudding
- Fresh Fruit Salad / Fresh Cut Fruits / Assorted Ice Cream
[Selected: ]`}],templateBlocks:[{id:"tb-1",name:"+ Welcome Drinks",content:`WELCOME DRINK (SELECT ONE):
- Apple / Orange / Mixed Fruit / Strawberry & Guava / Black Currant / Soursop / Mandarin
[Selected: ]
`},{id:"tb-2",name:"+ Soups",content:`SOUPS WITH BREAD ROLLS & BUTTER (SELECT ONE):
- Cream of Veg / Cream of Mushroom / Cream of Chicken & Veg / Sweet Corn & Egg Drop / Veg Broth
[Selected: ]
`},{id:"tb-3",name:"+ Salads",content:`SALADS (SELECT THREE):
- Cream Coleslaw / Coleslaw Hawaiian / Russian Salad / Egg Mayo / Seafood & Pasta / Thai Papaya / Tossed Green Salad
[Selected: ]
`},{id:"tb-4",name:"+ Appetizers/Bites",content:`APPETIZERS & BITES (SELECT TWO):
- Fish Cutlets / Chicken Nuggets / Crumb Fried Prawns / Devilled Cashew / Batter Fried Mushrooms
[Selected: ]
`},{id:"tb-5",name:"+ Rice & Noodles",content:`RICE & NOODLES (SELECT TWO):
- Veg Fried Rice / Tempered Yellow Rice / Egg & Veg Rice / Plain Rice / Egg & Veg Noodles / Spaghetti Napolitano
[Selected: ]
`},{id:"tb-6",name:"+ Chicken",content:`CHICKEN (SELECT ONE):
- Baked BBQ Chicken / Chilly Chicken with Mushroom / Chicken Curry / Chicken Devilled
[Selected: ]
`},{id:"tb-7",name:"+ Fish",content:`FISH (SELECT ONE):
- Fish Curry / Fish Stew / Fish Batter Fried (Chilly Mayo) / Sweet & Sour Fish
[Selected: ]
`},{id:"tb-8",name:"+ Pork/Beef",content:`PORK OR BEEF (SELECT ONE):
- Pork Black Curry / Sri Lankan Pork Stew / Beef Curry / Beef Devilled
[Selected: ]
`},{id:"tb-9",name:"+ Vegetables",content:`VEGETABLES (SELECT TWO):
- Cashew White Curry / Mixed Veg Curry / Beans & Pineapple / Veg Chopsuey / Stuffed Capsicum
[Selected: ]
`},{id:"tb-10",name:"+ Seafood/Mutton",content:`SEAFOOD & MUTTON (SELECT ONE):
- Mutton Curry / Mutton Khroma / Cuttlefish Devilled / Hot Butter Cuttlefish / Garlic Prawns / Crabs Pepper Curry
[Selected: ]
`},{id:"tb-11",name:"+ Potatoes/Dhal",content:`POTATOES & DHAL (SELECT TWO):
- Potato Tempered / Lyonnaise Potatoes / Lemon Garlic & Chilli Potato
- Dhal Curry / Dhal Tempered
[Selected: ]
`},{id:"tb-12",name:"+ Action Stations",content:`ACTION STATIONS / LIVE COOKING:
- Egg Hoppers & Plain Hoppers with Lunu Miris
- Chicken/Egg Kottu
- Pasta Station (Penne/Spaghetti with Cheese/Tomato sauce)
- BBQ Grill (Sausages/Chicken/Pork)
[Selected: ]
`},{id:"tb-13",name:"+ Desserts",content:`DESSERTS (SELECT THREE):
- Fresh Fruits Salad / Watalappan / Cream Caramel / Bread & Butter Pudding / Assorted Ice Cream / Jelly & Custard / Chocolate Biscuit Pudding
[Selected: ]
`},{id:"tb-14",name:"+ Condiments",content:`CONDIMENTS:
1. Chili Paste
2. Papadam
3. Fried Dry Chili
4. Mango Chutney
5. Maldive Fish Sambol
`}]}),actions:{initializeStore(){const e=localStorage.getItem("slaf-menus");if(e)try{this.menus=JSON.parse(e)}catch(a){console.error("Failed to parse saved menus",a)}const l=localStorage.getItem("slaf-template-blocks");if(l)try{this.templateBlocks=JSON.parse(l)}catch(a){console.error("Failed to parse saved template blocks",a)}},saveToStorage(){localStorage.setItem("slaf-menus",JSON.stringify(this.menus)),localStorage.setItem("slaf-template-blocks",JSON.stringify(this.templateBlocks))},addMenu(e){this.menus.push({...e,id:Date.now().toString()}),this.saveToStorage()},updateMenu(e,l){const a=this.menus.findIndex(n=>n.id===e);a!==-1&&(this.menus[a]={...this.menus[a],...l},this.saveToStorage())},deleteMenu(e){this.menus=this.menus.filter(l=>l.id!==e),this.saveToStorage()},addTemplateBlock(e){this.templateBlocks.push({...e,id:Date.now().toString()+"-tb"}),this.saveToStorage()},updateTemplateBlock(e,l){const a=this.templateBlocks.findIndex(n=>n.id===e);a!==-1&&(this.templateBlocks[a]={...this.templateBlocks[a],...l},this.saveToStorage())},deleteTemplateBlock(e){this.templateBlocks=this.templateBlocks.filter(l=>l.id!==e),this.saveToStorage()}}});export{ha as Q,Ot as a,ua as b,Sa as c,ma as u};
