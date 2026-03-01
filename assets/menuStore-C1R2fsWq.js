import{u as At,a as tt,b as Rt,c as Ft,d as Lt,f as Ct,e as ol,g as ul,h as rl}from"./QInput-DaC13DQO.js";import{k as Le,g as xe,c as C,h as w,G as ne,C as Re,A as yt,p as ue,a6 as It,w as Y,o as sl,m as Ie,r as D,x as cl,q as Ze,y as dl,B as fl,X as vl,af as ml,a7 as hl,a9 as Sl,a8 as gl,n as Cl,ag as Me,ah as yl,ai as El,D as we,aj as pl,ak as ke,a4 as bl}from"./index-DTHOPJCh.js";import{u as Dt,b as wl,f as Ht,d as Fe,e as kl,R as Tl,h as qt,k as xl,c as Nt}from"./QBtn-Bu8utoA2.js";import{u as lt,a as at,c as Ol,Q as Pl,b as Vl}from"./QItem-CgnHtyLh.js";import{c as Bl}from"./selection-BQIkhLAr.js";import{j as Ml,u as Al,s as Rl,a as Fl,b as Ll,c as Il,g as Dl,n as Et}from"./format-m3RE2AmH.js";import{p as pt,u as Hl,a as ql,b as Nl,d as zl,r as bt,e as _l,f as Wl,h as Gl,i as Kl,Q as $l}from"./QDialog-BqUpnkCH.js";import{c as jl}from"./QPage-D7T9t4VY.js";const Ul=Le({name:"QField",inheritAttrs:!1,props:{...tt,tag:{type:String,default:"label"}},emits:At,setup(){return Rt(Ft({tagProp:!0}))}}),Ql={xs:8,sm:10,md:14,lg:20,xl:24},Jl=Le({name:"QChip",props:{...lt,...Dt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:a,emit:l}){const{proxy:{$q:n}}=xe(),r=at(e,n),o=Ht(e,Ql),s=C(()=>e.selected===!0||e.icon!==void 0),S=C(()=>e.selected===!0?e.iconSelected||n.iconSet.chip.selected:e.icon),g=C(()=>e.iconRemove||n.iconSet.chip.remove),y=C(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=C(()=>{const E=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(E?` text-${E} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(y.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(r.value===!0?" q-chip--dark q-dark":"")}),b=C(()=>{const E=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},_={...E,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||n.lang.label.remove};return{chip:E,remove:_}});function p(E){E.keyCode===13&&u(E)}function u(E){e.disable||(l("update:selected",!e.selected),l("click",E))}function h(E){(E.keyCode===void 0||E.keyCode===13)&&(ne(E),e.disable===!1&&(l("update:modelValue",!1),l("remove")))}function H(){const E=[];y.value===!0&&E.push(w("div",{class:"q-focus-helper"})),s.value===!0&&E.push(w(Fe,{class:"q-chip__icon q-chip__icon--left",name:S.value}));const _=e.label!==void 0?[w("div",{class:"ellipsis"},[e.label])]:void 0;return E.push(w("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},kl(a.default,_))),e.iconRight&&E.push(w(Fe,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&E.push(w(Fe,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...b.value.remove,onClick:h,onKeyup:h})),E}return()=>{if(e.modelValue===!1)return;const E={class:c.value,style:o.value};return y.value===!0&&Object.assign(E,b.value.chip,{onClick:u,onKeyup:p}),wl("div",E,H(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Tl,e.ripple]])}}}),Xl={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Yl={...Xl,contextMenu:Boolean};function Zl({showing:e,avoidEmit:a,configureAnchorEl:l}){const{props:n,proxy:r,emit:o}=xe(),s=D(null);let S=null;function g(u){return s.value===null?!1:u===void 0||u.touches===void 0||u.touches.length<=1}const y={};l===void 0&&(Object.assign(y,{hide(u){r.hide(u)},toggle(u){r.toggle(u),u.qAnchorHandled=!0},toggleKey(u){It(u,13)===!0&&y.toggle(u)},contextClick(u){r.hide(u),Re(u),ue(()=>{r.show(u),u.qAnchorHandled=!0})},prevent:Re,mobileTouch(u){if(y.mobileCleanup(u),g(u)!==!0)return;r.hide(u),s.value.classList.add("non-selectable");const h=u.target;yt(y,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[s.value,"contextmenu","prevent","notPassive"]]),S=setTimeout(()=>{S=null,r.show(u),u.qAnchorHandled=!0},300)},mobileCleanup(u){s.value.classList.remove("non-selectable"),S!==null&&(clearTimeout(S),S=null),e.value===!0&&u!==void 0&&Bl()}}),l=function(u=n.contextMenu){if(n.noParentEvent===!0||s.value===null)return;let h;u===!0?r.$q.platform.is.mobile===!0?h=[[s.value,"touchstart","mobileTouch","passive"]]:h=[[s.value,"mousedown","hide","passive"],[s.value,"contextmenu","contextClick","notPassive"]]:h=[[s.value,"click","toggle","passive"],[s.value,"keyup","toggleKey","passive"]],yt(y,"anchor",h)});function c(){cl(y,"anchor")}function b(u){for(s.value=u;s.value.classList.contains("q-anchor--skip");)s.value=s.value.parentNode;l()}function p(){if(n.target===!1||n.target===""||r.$el.parentNode===null)s.value=null;else if(n.target===!0)b(r.$el.parentNode);else{let u=n.target;if(typeof n.target=="string")try{u=document.querySelector(n.target)}catch{u=void 0}u!=null?(s.value=u.$el||u,l()):(s.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return Y(()=>n.contextMenu,u=>{s.value!==null&&(c(),l(u))}),Y(()=>n.target,()=>{s.value!==null&&c(),p()}),Y(()=>n.noParentEvent,u=>{s.value!==null&&(u===!0?c():l())}),sl(()=>{p(),a!==!0&&n.modelValue===!0&&s.value===null&&o("update:modelValue",!1)}),Ie(()=>{S!==null&&clearTimeout(S),c()}),{anchorEl:s,canShow:g,anchorEvents:y}}function ea(e,a){const l=D(null);let n;function r(S,g){const y=`${g!==void 0?"add":"remove"}EventListener`,c=g!==void 0?g:n;S!==window&&S[y]("scroll",c,Ze.passive),window[y]("scroll",c,Ze.passive),n=g}function o(){l.value!==null&&(r(l.value),l.value=null)}const s=Y(()=>e.noParentEvent,()=>{l.value!==null&&(o(),a())});return Ie(s),{localScrollTarget:l,unconfigureScrollTarget:o,changeScrollEvent:r}}const{notPassiveCapture:_e}=Ze,he=[];function We(e){const a=e.target;if(a===void 0||a.nodeType===8||a.classList.contains("no-pointer-events")===!0)return;let l=pt.length-1;for(;l>=0;){const n=pt[l].$;if(n.type.name==="QTooltip"){l--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;l--}for(let n=he.length-1;n>=0;n--){const r=he[n];if((r.anchorEl.value===null||r.anchorEl.value.contains(a)===!1)&&(a===document.body||r.innerRef.value!==null&&r.innerRef.value.contains(a)===!1))e.qClickOutside=!0,r.onClickOutside(e);else return}}function ta(e){he.push(e),he.length===1&&(document.addEventListener("mousedown",We,_e),document.addEventListener("touchstart",We,_e))}function wt(e){const a=he.findIndex(l=>l===e);a!==-1&&(he.splice(a,1),he.length===0&&(document.removeEventListener("mousedown",We,_e),document.removeEventListener("touchstart",We,_e)))}let kt,Tt;function xt(e){const a=e.split(" ");return a.length!==2?!1:["top","center","bottom"].includes(a[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(a[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function la(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const et={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{et[`${e}#ltr`]=e,et[`${e}#rtl`]=e});function Ot(e,a){const l=e.split(" ");return{vertical:l[0],horizontal:et[`${l[1]}#${a===!0?"rtl":"ltr"}`]}}function aa(e,a){let{top:l,left:n,right:r,bottom:o,width:s,height:S}=e.getBoundingClientRect();return a!==void 0&&(l-=a[1],n-=a[0],o+=a[1],r+=a[0],s+=a[0],S+=a[1]),{top:l,bottom:o,height:S,left:n,right:r,width:s,middle:n+(r-n)/2,center:l+(o-l)/2}}function na(e,a,l){let{top:n,left:r}=e.getBoundingClientRect();return n+=a.top,r+=a.left,l!==void 0&&(n+=l[1],r+=l[0]),{top:n,bottom:n+1,height:1,left:r,right:r+1,width:1,middle:r,center:n}}function ia(e,a){return{top:0,center:a/2,bottom:a,left:0,middle:e/2,right:e}}function Pt(e,a,l,n){return{top:e[l.vertical]-a[n.vertical],left:e[l.horizontal]-a[n.horizontal]}}function zt(e,a=0){if(e.targetEl===null||e.anchorEl===null||a>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{zt(e,a+1)},10);return}const{targetEl:l,offset:n,anchorEl:r,anchorOrigin:o,selfOrigin:s,absoluteOffset:S,fit:g,cover:y,maxHeight:c,maxWidth:b}=e;if(dl.is.ios===!0&&window.visualViewport!==void 0){const F=document.body.style,{offsetLeft:I,offsetTop:W}=window.visualViewport;I!==kt&&(F.setProperty("--q-pe-left",I+"px"),kt=I),W!==Tt&&(F.setProperty("--q-pe-top",W+"px"),Tt=W)}const{scrollLeft:p,scrollTop:u}=l,h=S===void 0?aa(r,y===!0?[0,0]:n):na(r,S,n);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:b,maxHeight:c,visibility:"visible"});const{offsetWidth:H,offsetHeight:E}=l,{elWidth:_,elHeight:U}=g===!0||y===!0?{elWidth:Math.max(h.width,H),elHeight:y===!0?Math.max(h.height,E):E}:{elWidth:H,elHeight:E};let B={maxWidth:b,maxHeight:c};(g===!0||y===!0)&&(B.minWidth=h.width+"px",y===!0&&(B.minHeight=h.height+"px")),Object.assign(l.style,B);const V=ia(_,U);let L=Pt(h,V,o,s);if(S===void 0||n===void 0)Je(L,h,V,o,s);else{const{top:F,left:I}=L;Je(L,h,V,o,s);let W=!1;if(L.top!==F){W=!0;const j=2*n[1];h.center=h.top-=j,h.bottom-=j+2}if(L.left!==I){W=!0;const j=2*n[0];h.middle=h.left-=j,h.right-=j+2}W===!0&&(L=Pt(h,V,o,s),Je(L,h,V,o,s))}B={top:L.top+"px",left:L.left+"px"},L.maxHeight!==void 0&&(B.maxHeight=L.maxHeight+"px",h.height>L.maxHeight&&(B.minHeight=B.maxHeight)),L.maxWidth!==void 0&&(B.maxWidth=L.maxWidth+"px",h.width>L.maxWidth&&(B.minWidth=B.maxWidth)),Object.assign(l.style,B),l.scrollTop!==u&&(l.scrollTop=u),l.scrollLeft!==p&&(l.scrollLeft=p)}function Je(e,a,l,n,r){const o=l.bottom,s=l.right,S=Ml(),g=window.innerHeight-S,y=document.body.clientWidth;if(e.top<0||e.top+o>g)if(r.vertical==="center")e.top=a[n.vertical]>g/2?Math.max(0,g-o):0,e.maxHeight=Math.min(o,g);else if(a[n.vertical]>g/2){const c=Math.min(g,n.vertical==="center"?a.center:n.vertical===r.vertical?a.bottom:a.top);e.maxHeight=Math.min(o,c),e.top=Math.max(0,c-o)}else e.top=Math.max(0,n.vertical==="center"?a.center:n.vertical===r.vertical?a.top:a.bottom),e.maxHeight=Math.min(o,g-e.top);if(e.left<0||e.left+s>y)if(e.maxWidth=Math.min(s,y),r.horizontal==="middle")e.left=a[n.horizontal]>y/2?Math.max(0,y-s):0;else if(a[n.horizontal]>y/2){const c=Math.min(y,n.horizontal==="middle"?a.middle:n.horizontal===r.horizontal?a.right:a.left);e.maxWidth=Math.min(s,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?a.middle:n.horizontal===r.horizontal?a.left:a.right),e.maxWidth=Math.min(s,y-e.left)}const oa=Le({name:"QMenu",inheritAttrs:!1,props:{...Yl,...Fl,...lt,...Hl,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noEscDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:xt},self:{type:String,validator:xt},offset:{type:Array,validator:la},scrollTarget:Rl,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Al,"click","escapeKey"],setup(e,{slots:a,emit:l,attrs:n}){let r=null,o,s,S;const g=xe(),{proxy:y}=g,{$q:c}=y,b=D(null),p=D(!1),u=C(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),h=at(e,c),{registerTick:H,removeTick:E}=ql(),{registerTimeout:_}=Ll(),{transitionProps:U,transitionStyle:B}=Gl(e),{localScrollTarget:V,changeScrollEvent:L,unconfigureScrollTarget:F}=ea(e,x),{anchorEl:I,canShow:W}=Zl({showing:p}),{hide:j}=Il({showing:p,canShow:W,handleShow:ce,handleHide:i,hideOnRouteChange:u,processOnMount:!0}),{showPortal:J,hidePortal:ie,renderPortal:k}=Nl(g,b,N,"menu"),G={anchorEl:I,innerRef:b,onClickOutside(d){if(e.persistent!==!0&&p.value===!0)return j(d),(d.type==="touchstart"||d.target.classList.contains("q-dialog__backdrop"))&&ne(d),!0}},ee=C(()=>Ot(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),re=C(()=>e.cover===!0?ee.value:Ot(e.self||"top start",c.lang.rtl)),X=C(()=>(e.square===!0?" q-menu--square":"")+(h.value===!0?" q-menu--dark q-dark":"")),Oe=C(()=>e.autoClose===!0?{onClick:M}:{}),se=C(()=>p.value===!0&&e.persistent!==!0);Y(se,d=>{d===!0?(zl(P),ta(G)):(bt(P),wt(G))});function te(){jl(()=>{let d=b.value;d&&d.contains(document.activeElement)!==!0&&(d=d.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.querySelector("[autofocus], [data-autofocus]")||d,d.focus({preventScroll:!0}))})}function ce(d){if(r=e.noRefocus===!1?document.activeElement:null,_l(q),J(),x(),o=void 0,d!==void 0&&(e.touchPosition||e.contextMenu)){const K=fl(d);if(K.left!==void 0){const{top:le,left:Se}=I.value.getBoundingClientRect();o={left:K.left-Se,top:K.top-le}}}s===void 0&&(s=Y(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,T)),e.noFocus!==!0&&document.activeElement.blur(),H(()=>{T(),e.noFocus!==!0&&te()}),_(()=>{c.platform.is.ios===!0&&(S=e.autoClose,b.value.click()),T(),J(!0),l("show",d)},e.transitionDuration)}function i(d){E(),ie(),f(!0),r!==null&&(d===void 0||d.qClickOutside!==!0)&&(((d?.type.indexOf("key")===0?r.closest('[tabindex]:not([tabindex^="-"])'):void 0)||r).focus(),r=null),_(()=>{ie(!0),l("hide",d)},e.transitionDuration)}function f(d){o=void 0,s!==void 0&&(s(),s=void 0),(d===!0||p.value===!0)&&(Wl(q),F(),wt(G),bt(P)),d!==!0&&(r=null)}function x(){(I.value!==null||e.scrollTarget!==void 0)&&(V.value=Dl(I.value,e.scrollTarget),L(V.value,T))}function M(d){S!==!0?(Kl(y,d),l("click",d)):S=!1}function q(d){se.value===!0&&e.noFocus!==!0&&xl(b.value,d.target)!==!0&&te()}function P(d){e.noEscDismiss!==!0&&(l("escapeKey"),j(d))}function T(){zt({targetEl:b.value,offset:e.offset,anchorEl:I.value,anchorOrigin:ee.value,selfOrigin:re.value,absoluteOffset:o,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function N(){return w(vl,U.value,()=>p.value===!0?w("div",{role:"menu",...n,ref:b,tabindex:-1,class:["q-menu q-position-engine scroll"+X.value,n.class],style:[n.style,B.value],...Oe.value},qt(a.default)):null)}return Ie(f),Object.assign(y,{focus:te,updatePosition:T}),k}});let Ge=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const a=document.createElement("div");Object.assign(a.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(a),e.scrollLeft=-1e3,Ge=e.scrollLeft>=0,e.remove()}const Z=1e3,ua=["start","center","end","start-force","center-force","end-force"],_t=Array.prototype.filter,ra=window.getComputedStyle(document.body).overflowAnchor===void 0?Cl:function(e,a){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const l=e.children||[];_t.call(l,r=>r.dataset&&r.dataset.qVsAnchor!==void 0).forEach(r=>{delete r.dataset.qVsAnchor});const n=l[a];n?.dataset&&(n.dataset.qVsAnchor="")}))};function Te(e,a){return e+a}function Xe(e,a,l,n,r,o,s,S){const g=e===window?document.scrollingElement||document.documentElement:e,y=r===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-s-S,scrollMaxSize:0,offsetStart:-s,offsetEnd:-S};if(r===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=g.scrollLeft,c.scrollViewSize+=g.clientWidth),c.scrollMaxSize=g.scrollWidth,o===!0&&(c.scrollStart=(Ge===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=g.scrollTop,c.scrollViewSize+=g.clientHeight),c.scrollMaxSize=g.scrollHeight),l!==null)for(let b=l.previousElementSibling;b!==null;b=b.previousElementSibling)b.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=b[y]);if(n!==null)for(let b=n.nextElementSibling;b!==null;b=b.nextElementSibling)b.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=b[y]);if(a!==e){const b=g.getBoundingClientRect(),p=a.getBoundingClientRect();r===!0?(c.offsetStart+=p.left-b.left,c.offsetEnd-=p.width):(c.offsetStart+=p.top-b.top,c.offsetEnd-=p.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function Vt(e,a,l,n){a==="end"&&(a=(e===window?document.body:e)[l===!0?"scrollWidth":"scrollHeight"]),e===window?l===!0?(n===!0&&(a=(Ge===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-a),window.scrollTo(a,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,a):l===!0?(n===!0&&(a=(Ge===!0?e.scrollWidth-e.offsetWidth:0)-a),e.scrollLeft=a):e.scrollTop=a}function Ae(e,a,l,n){if(l>=n)return 0;const r=a.length,o=Math.floor(l/Z),s=Math.floor((n-1)/Z)+1;let S=e.slice(o,s).reduce(Te,0);return l%Z!==0&&(S-=a.slice(o*Z,l).reduce(Te,0)),n%Z!==0&&n!==r&&(S-=a.slice(n,s*Z).reduce(Te,0)),S}const Wt={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},xa=Object.keys(Wt),Bt={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Wt};function sa({virtualScrollLength:e,getVirtualScrollTarget:a,getVirtualScrollEl:l,virtualScrollItemSizeComputed:n}){const r=xe(),{props:o,emit:s,proxy:S}=r,{$q:g}=S;let y,c,b,p=[],u;const h=D(0),H=D(0),E=D({}),_=D(null),U=D(null),B=D(null),V=D({from:0,to:0}),L=C(()=>o.tableColspan!==void 0?o.tableColspan:100);n===void 0&&(n=C(()=>o.virtualScrollItemSize));const F=C(()=>n.value+";"+o.virtualScrollHorizontal),I=C(()=>F.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);Y(I,()=>{X()}),Y(F,W);function W(){re(c,!0)}function j(i){re(i===void 0?c:i)}function J(i,f){const x=a();if(x==null||x.nodeType===8)return;const M=Xe(x,l(),_.value,U.value,o.virtualScrollHorizontal,g.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);b!==M.scrollViewSize&&X(M.scrollViewSize),k(x,M,Math.min(e.value-1,Math.max(0,parseInt(i,10)||0)),0,ua.indexOf(f)!==-1?f:c!==-1&&i>c?"end":"start")}function ie(){const i=a();if(i==null||i.nodeType===8)return;const f=Xe(i,l(),_.value,U.value,o.virtualScrollHorizontal,g.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),x=e.value-1,M=f.scrollMaxSize-f.offsetStart-f.offsetEnd-H.value;if(y===f.scrollStart)return;if(f.scrollMaxSize<=0){k(i,f,0,0);return}b!==f.scrollViewSize&&X(f.scrollViewSize),G(V.value.from);const q=Math.floor(f.scrollMaxSize-Math.max(f.scrollViewSize,f.offsetEnd)-Math.min(u[x],f.scrollViewSize/2));if(q>0&&Math.ceil(f.scrollStart)>=q){k(i,f,x,f.scrollMaxSize-f.offsetEnd-p.reduce(Te,0));return}let P=0,T=f.scrollStart-f.offsetStart,N=T;if(T<=M&&T+f.scrollViewSize>=h.value)T-=h.value,P=V.value.from,N=T;else for(let d=0;T>=p[d]&&P<x;d++)T-=p[d],P+=Z;for(;T>0&&P<x;)T-=u[P],T>-f.scrollViewSize?(P++,N=T):N=u[P]+T;k(i,f,P,N)}function k(i,f,x,M,q){const P=typeof q=="string"&&q.indexOf("-force")!==-1,T=P===!0?q.replace("-force",""):q,N=T!==void 0?T:"start";let d=Math.max(0,x-E.value[N]),K=d+E.value.total;K>e.value&&(K=e.value,d=Math.max(0,K-E.value.total)),y=f.scrollStart;const le=d!==V.value.from||K!==V.value.to;if(le===!1&&T===void 0){se(x);return}const{activeElement:Se}=document,oe=B.value;le===!0&&oe!==null&&oe!==Se&&oe.contains(Se)===!0&&(oe.addEventListener("focusout",ee),setTimeout(()=>{oe?.removeEventListener("focusout",ee)})),ra(oe,x-d);const De=T!==void 0?u.slice(d,x).reduce(Te,0):0;if(le===!0){const de=K>=V.value.from&&d<=V.value.to?V.value.to:K;V.value={from:d,to:de},h.value=Ae(p,u,0,d),H.value=Ae(p,u,K,e.value),requestAnimationFrame(()=>{V.value.to!==K&&y===f.scrollStart&&(V.value={from:V.value.from,to:K},H.value=Ae(p,u,K,e.value))})}requestAnimationFrame(()=>{if(y!==f.scrollStart)return;le===!0&&G(d);const de=u.slice(d,x).reduce(Te,0),fe=de+f.offsetStart+h.value,He=fe+u[x];let Pe=fe+M;if(T!==void 0){const Ke=de-De,Ve=f.scrollStart+Ke;Pe=P!==!0&&Ve<fe&&He<Ve+f.scrollViewSize?Ve:T==="end"?He-f.scrollViewSize:fe-(T==="start"?0:Math.round((f.scrollViewSize-u[x])/2))}y=Pe,Vt(i,Pe,o.virtualScrollHorizontal,g.lang.rtl),se(x)})}function G(i){const f=B.value;if(f){const x=_t.call(f.children,d=>d.classList&&d.classList.contains("q-virtual-scroll--skip")===!1),M=x.length,q=o.virtualScrollHorizontal===!0?d=>d.getBoundingClientRect().width:d=>d.offsetHeight;let P=i,T,N;for(let d=0;d<M;){for(T=q(x[d]),d++;d<M&&x[d].classList.contains("q-virtual-scroll--with-prev")===!0;)T+=q(x[d]),d++;N=T-u[P],N!==0&&(u[P]+=N,p[Math.floor(P/Z)]+=N),P++}}}function ee(){B.value?.focus()}function re(i,f){const x=1*n.value;(f===!0||Array.isArray(u)===!1)&&(u=[]);const M=u.length;u.length=e.value;for(let P=e.value-1;P>=M;P--)u[P]=x;const q=Math.floor((e.value-1)/Z);p=[];for(let P=0;P<=q;P++){let T=0;const N=Math.min((P+1)*Z,e.value);for(let d=P*Z;d<N;d++)T+=u[d];p.push(T)}c=-1,y=void 0,h.value=Ae(p,u,0,V.value.from),H.value=Ae(p,u,V.value.to,e.value),i>=0?(G(V.value.from),ue(()=>{J(i)})):te()}function X(i){if(i===void 0&&typeof window<"u"){const T=a();T!=null&&T.nodeType!==8&&(i=Xe(T,l(),_.value,U.value,o.virtualScrollHorizontal,g.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}b=i;const f=parseFloat(o.virtualScrollSliceRatioBefore)||0,x=parseFloat(o.virtualScrollSliceRatioAfter)||0,M=1+f+x,q=i===void 0||i<=0?1:Math.ceil(i/n.value),P=Math.max(1,q,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/M));E.value={total:Math.ceil(P*M),start:Math.ceil(P*f),center:Math.ceil(P*(.5+f)),end:Math.ceil(P*(1+f)),view:q}}function Oe(i,f){const x=o.virtualScrollHorizontal===!0?"width":"height",M={["--q-virtual-scroll-item-"+x]:n.value+"px"};return[i==="tbody"?w(i,{class:"q-virtual-scroll__padding",key:"before",ref:_},[w("tr",[w("td",{style:{[x]:`${h.value}px`,...M},colspan:L.value})])]):w(i,{class:"q-virtual-scroll__padding",key:"before",ref:_,style:{[x]:`${h.value}px`,...M}}),w(i,{class:"q-virtual-scroll__content",key:"content",ref:B,tabindex:-1},f.flat()),i==="tbody"?w(i,{class:"q-virtual-scroll__padding",key:"after",ref:U},[w("tr",[w("td",{style:{[x]:`${H.value}px`,...M},colspan:L.value})])]):w(i,{class:"q-virtual-scroll__padding",key:"after",ref:U,style:{[x]:`${H.value}px`,...M}})]}function se(i){c!==i&&(o.onVirtualScroll!==void 0&&s("virtualScroll",{index:i,from:V.value.from,to:V.value.to-1,direction:i<c?"decrease":"increase",ref:S}),c=i)}X();const te=ml(ie,g.platform.is.ios===!0?120:35);hl(()=>{X()});let ce=!1;return Sl(()=>{ce=!0}),gl(()=>{if(ce!==!0)return;const i=a();y!==void 0&&i!==void 0&&i!==null&&i.nodeType!==8?Vt(i,y,o.virtualScrollHorizontal,g.lang.rtl):J(c)}),Ie(()=>{te.cancel()}),Object.assign(S,{scrollTo:J,reset:W,refresh:j}),{virtualScrollSliceRange:V,virtualScrollSliceSizeComputed:E,setVirtualScrollSize:X,onVirtualScrollEvt:te,localResetVirtualScroll:re,padVirtualScroll:Oe,scrollTo:J,reset:W,refresh:j}}const Mt=e=>["add","add-unique","toggle"].includes(e),ca=".*+?^${}()|[]\\",da=Object.keys(tt);function Ye(e,a){if(typeof e=="function")return e;const l=e!==void 0?e:a;return n=>n!==null&&typeof n=="object"&&l in n?n[l]:n}const Oa=Le({name:"QSelect",inheritAttrs:!1,props:{...Bt,...Lt,...tt,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:Mt},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:Bt.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...At,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:a,emit:l}){const{proxy:n}=xe(),{$q:r}=n,o=D(!1),s=D(!1),S=D(-1),g=D(""),y=D(!1),c=D(!1);let b=null,p=null,u,h,H,E=null,_,U,B,V;const L=D(null),F=D(null),I=D(null),W=D(null),j=D(null),J=ol(e),ie=ul(vt),k=C(()=>Array.isArray(e.options)?e.options.length:0),G=C(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ee,virtualScrollSliceSizeComputed:re,localResetVirtualScroll:X,padVirtualScroll:Oe,onVirtualScrollEvt:se,scrollTo:te,setVirtualScrollSize:ce}=sa({virtualScrollLength:k,getVirtualScrollTarget:jt,getVirtualScrollEl:dt,virtualScrollItemSizeComputed:G}),i=Ft(),f=C(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,v=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const m=e.mapOptions===!0&&u!==void 0?u:[],O=v.map(R=>$t(R,m));return e.modelValue===null&&t===!0?O.filter(R=>R!==null):O}return v}),x=C(()=>{const t={};return da.forEach(v=>{const m=e[v];m!==void 0&&(t[v]=m)}),t}),M=C(()=>e.optionsDark===null?i.isDark.value:e.optionsDark),q=C(()=>Ct(f.value)),P=C(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||f.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),T=C(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),N=C(()=>k.value===0),d=C(()=>f.value.map(t=>Q.value(t)).join(", ")),K=C(()=>e.displayValue!==void 0?e.displayValue:d.value),le=C(()=>e.optionsHtml===!0?()=>!0:t=>t?.html===!0),Se=C(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||f.value.some(le.value))),oe=C(()=>i.focused.value===!0?e.tabindex:-1),De=C(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-controls":`${i.targetUid.value}_lb`};return S.value>=0&&(t["aria-activedescendant"]=`${i.targetUid.value}_${S.value}`),t}),de=C(()=>({id:`${i.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),fe=C(()=>f.value.map((t,v)=>({index:v,opt:t,html:le.value(t),selected:!0,removeAtIndex:Kt,toggleOption:ve,tabindex:oe.value}))),He=C(()=>{if(k.value===0)return[];const{from:t,to:v}=ee.value;return e.options.slice(t,v).map((m,O)=>{const R=ge.value(m)===!0,A=je(m)===!0,$=t+O,z={clickable:!0,active:A,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:R,tabindex:-1,dense:e.optionsDense,dark:M.value,role:"option","aria-selected":A===!0?"true":"false",id:`${i.targetUid.value}_${$}`,onClick:()=>{ve(m)}};return R!==!0&&(S.value===$&&(z.focused=!0),r.platform.is.desktop===!0&&(z.onMousemove=()=>{o.value===!0&&Ce($)})),{index:$,opt:m,html:le.value(m),label:Q.value(m),selected:z.active,focused:z.focused,toggleOption:ve,setOptionIndex:Ce,itemProps:z}})}),Pe=C(()=>e.dropdownIcon!==void 0?e.dropdownIcon:r.iconSet.arrow.dropdown),Ke=C(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=C(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),ae=C(()=>Ye(e.optionValue,"value")),Q=C(()=>Ye(e.optionLabel,"label")),ge=C(()=>Ye(e.optionDisable,"disable")),qe=C(()=>f.value.map(ae.value)),Gt=C(()=>{const t={onInput:vt,onChange:ie,onKeydown:ct,onKeyup:rt,onKeypress:st,onFocus:ot,onClick(v){h===!0&&we(v)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=ie,t});Y(f,t=>{u=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&i.innerLoading.value!==!0&&(s.value!==!0&&o.value!==!0||q.value!==!0)&&(H!==!0&&be(),(s.value===!0||o.value===!0)&&ye(""))},{immediate:!0}),Y(()=>e.fillInput,be),Y(o,Ue),Y(k,il);function nt(t){return e.emitValue===!0?ae.value(t):t}function $e(t){if(t!==-1&&t<f.value.length)if(e.multiple===!0){const v=e.modelValue.slice();l("remove",{index:t,value:v.splice(t,1)[0]}),l("update:modelValue",v)}else l("update:modelValue",null)}function Kt(t){$e(t),i.focus()}function it(t,v){const m=nt(t);if(e.multiple!==!0){e.fillInput===!0&&Be(Q.value(t),!0,!0),l("update:modelValue",m);return}if(f.value.length===0){l("add",{index:0,value:m}),l("update:modelValue",e.multiple===!0?[m]:m);return}if(v===!0&&je(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const O=e.modelValue.slice();l("add",{index:O.length,value:m}),O.push(m),l("update:modelValue",O)}function ve(t,v){if(i.editable.value!==!0||t===void 0||ge.value(t)===!0)return;const m=ae.value(t);if(e.multiple!==!0){v!==!0&&(Be(e.fillInput===!0?Q.value(t):"",!0,!0),me()),F.value?.focus(),(f.value.length===0||Me(ae.value(f.value[0]),m)!==!0)&&l("update:modelValue",e.emitValue===!0?m:t);return}if((h!==!0||y.value===!0)&&i.focus(),ot(),f.value.length===0){const A=e.emitValue===!0?m:t;l("add",{index:0,value:A}),l("update:modelValue",e.multiple===!0?[A]:A);return}const O=e.modelValue.slice(),R=qe.value.findIndex(A=>Me(A,m));if(R!==-1)l("remove",{index:R,value:O.splice(R,1)[0]});else{if(e.maxValues!==void 0&&O.length>=e.maxValues)return;const A=e.emitValue===!0?m:t;l("add",{index:O.length,value:A}),O.push(A)}l("update:modelValue",O)}function Ce(t){if(r.platform.is.desktop!==!0)return;const v=t!==-1&&t<k.value?t:-1;S.value!==v&&(S.value=v)}function Ne(t=1,v){if(o.value===!0){let m=S.value;do m=Et(m+t,-1,k.value-1);while(m!==-1&&m!==S.value&&ge.value(e.options[m])===!0);S.value!==m&&(Ce(m),te(m),v!==!0&&e.useInput===!0&&e.fillInput===!0&&ze(m>=0?Q.value(e.options[m]):_,!0))}}function $t(t,v){const m=O=>Me(ae.value(O),t);return e.options.find(m)||v.find(m)||t}function je(t){const v=ae.value(t);return qe.value.find(m=>Me(m,v))!==void 0}function ot(t){e.useInput===!0&&F.value!==null&&(t===void 0||F.value===t.target&&t.target.value===d.value)&&F.value.select()}function ut(t){It(t,27)===!0&&o.value===!0&&(we(t),me(),be()),l("keyup",t)}function rt(t){const{value:v}=t.target;if(t.keyCode!==void 0){ut(t);return}if(t.target.value="",b!==null&&(clearTimeout(b),b=null),p!==null&&(clearTimeout(p),p=null),be(),typeof v=="string"&&v.length!==0){const m=v.toLocaleLowerCase(),O=A=>{const $=e.options.find(z=>String(A.value(z)).toLocaleLowerCase()===m);return $===void 0?!1:(f.value.indexOf($)===-1?ve($):me(),!0)},R=A=>{O(ae)!==!0&&A!==!0&&O(Q)!==!0&&ye(v,!0,()=>R(!0))};R()}else i.clearValue(t)}function st(t){l("keypress",t)}function ct(t){if(l("keydown",t),pl(t)===!0)return;const v=g.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),m=t.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(S.value!==-1||v===!0);if(t.keyCode===27){Re(t);return}if(t.keyCode===9&&m===!1){Ee();return}if(t.target===void 0||t.target.id!==i.targetUid.value||i.editable.value!==!0)return;if(t.keyCode===40&&i.innerLoading.value!==!0&&o.value===!1){ne(t),pe();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?$e(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&l("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(ne(t),S.value=-1,Ne(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&re.value!==void 0&&(ne(t),S.value=Math.max(-1,Math.min(k.value,S.value+(t.keyCode===33?-1:1)*re.value.view)),Ne(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ne(t),Ne(t.keyCode===38?-1:1,e.multiple));const O=k.value;if((B===void 0||V<Date.now())&&(B=""),O>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||B.length!==0)){o.value!==!0&&pe(t);const R=t.key.toLocaleLowerCase(),A=B.length===1&&B[0]===R;V=Date.now()+1500,A===!1&&(ne(t),B+=R);const $=new RegExp("^"+B.split("").map(Qe=>ca.indexOf(Qe)!==-1?"\\"+Qe:Qe).join(".*"),"i");let z=S.value;if(A===!0||z<0||$.test(Q.value(e.options[z]))!==!0)do z=Et(z+1,-1,O-1);while(z!==S.value&&(ge.value(e.options[z])===!0||$.test(Q.value(e.options[z]))!==!0));S.value!==z&&ue(()=>{Ce(z),te(z),z>=0&&e.useInput===!0&&e.fillInput===!0&&ze(Q.value(e.options[z]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||B!=="")&&(t.keyCode!==9||m===!1))){if(t.keyCode!==9&&ne(t),S.value!==-1&&S.value<O){ve(e.options[S.value]);return}if(v===!0){const R=(A,$)=>{if($){if(Mt($)!==!0)return}else $=e.newValueMode;if(Be("",e.multiple!==!0,!0),A==null)return;($==="toggle"?ve:it)(A,$==="add-unique"),e.multiple!==!0&&(F.value?.focus(),me())};if(e.onNewValue!==void 0?l("newValue",g.value,R):R(g.value),e.multiple!==!0)return}o.value===!0?Ee():i.innerLoading.value!==!0&&pe()}}function dt(){return h===!0?j.value:I.value!==null&&I.value.contentEl!==null?I.value.contentEl:void 0}function jt(){return dt()}function Ut(){return e.hideSelected===!0?[]:a["selected-item"]!==void 0?fe.value.map(t=>a["selected-item"](t)).slice():a.selected!==void 0?[].concat(a.selected()):e.useChips===!0?fe.value.map((t,v)=>w(Jl,{key:"option-"+v,removable:i.editable.value===!0&&ge.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:oe.value,onRemove(){t.removeAtIndex(v)}},()=>w("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:Q.value(t.opt)}))):[w("span",{class:"ellipsis",[Se.value===!0?"innerHTML":"textContent"]:K.value})]}function ft(){if(N.value===!0)return a["no-option"]!==void 0?a["no-option"]({inputValue:g.value}):void 0;const t=a.option!==void 0?a.option:m=>w(Vl,{key:m.index,...m.itemProps},()=>w(Ol,()=>w(Pl,()=>w("span",{[m.html===!0?"innerHTML":"textContent"]:m.label}))));let v=Oe("div",He.value.map(t));return a["before-options"]!==void 0&&(v=a["before-options"]().concat(v)),Nt(a["after-options"],v)}function Qt(t,v){const m=v===!0?{...De.value,...i.splitAttrs.attributes.value}:void 0,O={ref:v===!0?F:void 0,key:"i_t",class:P.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...m,id:v===!0?i.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Gt.value};return t!==!0&&h===!0&&(Array.isArray(O.class)===!0?O.class=[...O.class,"no-pointer-events"]:O.class+=" no-pointer-events"),w("input",O)}function vt(t){b!==null&&(clearTimeout(b),b=null),p!==null&&(clearTimeout(p),p=null),!(t&&t.target&&t.target.qComposing===!0)&&(ze(t.target.value||""),H=!0,_=g.value,i.focused.value!==!0&&(h!==!0||y.value===!0)&&i.focus(),e.onFilter!==void 0&&(b=setTimeout(()=>{b=null,ye(g.value)},e.inputDebounce)))}function ze(t,v){g.value!==t&&(g.value=t,v===!0||e.inputDebounce===0||e.inputDebounce==="0"?l("inputValue",t):p=setTimeout(()=>{p=null,l("inputValue",t)},e.inputDebounce))}function Be(t,v,m){H=m!==!0,e.useInput===!0&&(ze(t,!0),(v===!0||m!==!0)&&(_=t),v!==!0&&ye(t))}function ye(t,v,m){if(e.onFilter===void 0||v!==!0&&i.focused.value!==!0)return;i.innerLoading.value===!0?l("filterAbort"):(i.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&f.value.length!==0&&H!==!0&&t===Q.value(f.value[0])&&(t="");const O=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);E!==null&&clearTimeout(E),E=O,l("filter",t,(R,A)=>{(v===!0||i.focused.value===!0)&&E===O&&(clearTimeout(E),typeof R=="function"&&R(),c.value=!1,ue(()=>{i.innerLoading.value=!1,i.editable.value===!0&&(v===!0?o.value===!0&&me():o.value===!0?Ue(!0):o.value=!0),typeof A=="function"&&ue(()=>{A(n)}),typeof m=="function"&&ue(()=>{m(n)})}))},()=>{i.focused.value===!0&&E===O&&(clearTimeout(E),i.innerLoading.value=!1,c.value=!1),o.value===!0&&(o.value=!1)})}function Jt(){return w(oa,{ref:I,class:T.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&N.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:M.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Ke.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...de.value,onScrollPassive:se,onBeforeShow:ht,onBeforeHide:Xt,onShow:Yt},ft)}function Xt(t){St(t),Ee()}function Yt(){ce()}function Zt(t){we(t),F.value?.focus(),y.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function el(t){we(t),ue(()=>{y.value=!1})}function tl(){const t=[w(Ul,{class:`col-auto ${i.fieldClass.value}`,...x.value,for:i.targetUid.value,dark:M.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:g.value.length!==0,...i.splitAttrs.listeners.value,onFocus:Zt,onBlur:el},{...a,rawControl:()=>i.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(w("div",{ref:j,class:T.value+" scroll",style:e.popupContentStyle,...de.value,onClick:Re,onScrollPassive:se},ft())),w($l,{ref:W,modelValue:s.value,position:e.useInput===!0?"top":void 0,transitionShow:U,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:ht,onBeforeHide:ll,onHide:al,onShow:nl},()=>w("div",{class:"q-select__dialog"+(M.value===!0?" q-select__dialog--dark q-dark":"")+(y.value===!0?" q-select__dialog--focused":"")},t))}function ll(t){St(t),W.value!==null&&W.value.__updateRefocusTarget(i.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),i.focused.value=!1}function al(t){me(),i.focused.value===!1&&l("blur",t),be()}function nl(){const t=document.activeElement;(t===null||t.id!==i.targetUid.value)&&F.value!==null&&F.value!==t&&F.value.focus(),ce()}function Ee(){s.value!==!0&&(S.value=-1,o.value===!0&&(o.value=!1),i.focused.value===!1&&(E!==null&&(clearTimeout(E),E=null),i.innerLoading.value===!0&&(l("filterAbort"),i.innerLoading.value=!1,c.value=!1)))}function pe(t){i.editable.value===!0&&(h===!0?(i.onControlFocusin(t),s.value=!0,ue(()=>{i.focus()})):i.focus(),e.onFilter!==void 0?ye(g.value):(N.value!==!0||a["no-option"]!==void 0)&&(o.value=!0))}function me(){s.value=!1,Ee()}function be(){e.useInput===!0&&Be(e.multiple!==!0&&e.fillInput===!0&&f.value.length!==0&&Q.value(f.value[0])||"",!0,!0)}function Ue(t){let v=-1;if(t===!0){if(f.value.length!==0){const m=ae.value(f.value[0]);v=e.options.findIndex(O=>Me(ae.value(O),m))}X(v)}Ce(v)}function il(t,v){o.value===!0&&i.innerLoading.value===!1&&(X(-1,!0),ue(()=>{o.value===!0&&i.innerLoading.value===!1&&(t>v?X():Ue(!0))}))}function mt(){s.value===!1&&I.value!==null&&I.value.updatePosition()}function ht(t){t!==void 0&&we(t),l("popupShow",t),i.hasPopupOpen=!0,i.onControlFocusin(t)}function St(t){t!==void 0&&we(t),l("popupHide",t),i.hasPopupOpen=!1,i.onControlFocusout(t)}function gt(){h=r.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?a["no-option"]!==void 0||e.onFilter!==void 0||N.value===!1:!0),U=r.platform.is.ios===!0&&h===!0&&e.useInput===!0?"fade":e.transitionShow}return yl(gt),El(mt),gt(),Ie(()=>{b!==null&&clearTimeout(b),p!==null&&clearTimeout(p)}),Object.assign(n,{showPopup:pe,hidePopup:me,removeAtIndex:$e,add:it,toggleOption:ve,getOptionIndex:()=>S.value,setOptionIndex:Ce,moveOptionSelection:Ne,filter:ye,updateMenuPosition:mt,updateInputValue:Be,isOptionSelected:je,getEmittingOptionValue:nt,isOptionDisabled:(...t)=>ge.value.apply(null,t)===!0,getOptionValue:(...t)=>ae.value.apply(null,t),getOptionLabel:(...t)=>Q.value.apply(null,t)}),Object.assign(i,{innerValue:f,fieldClass:C(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:L,targetRef:F,hasValue:q,showPopup:pe,floatingLabel:C(()=>e.hideSelected!==!0&&q.value===!0||typeof g.value=="number"||g.value.length!==0||Ct(e.displayValue)),getControlChild:()=>{if(i.editable.value!==!1&&(s.value===!0||N.value!==!0||a["no-option"]!==void 0))return h===!0?tl():Jt();i.hasPopupOpen===!0&&(i.hasPopupOpen=!1)},controlEvents:{onFocusin(t){i.onControlFocusin(t)},onFocusout(t){i.onControlFocusout(t,()=>{be(),Ee()})},onClick(t){if(Re(t),h!==!0&&o.value===!0){Ee(),F.value?.focus();return}pe(t)}},getControl:t=>{const v=Ut(),m=t===!0||s.value!==!0||h!==!0;if(e.useInput===!0)v.push(Qt(t,m));else if(i.editable.value===!0){const R=m===!0?De.value:void 0;v.push(w("input",{ref:m===!0?F:void 0,key:"d_t",class:"q-select__focus-target",id:m===!0?i.targetUid.value:void 0,value:K.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...R,onKeydown:ct,onKeyup:ut,onKeypress:st})),m===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&v.push(w("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:rt}))}if(J.value!==void 0&&e.disable!==!0&&qe.value.length!==0){const R=qe.value.map(A=>w("option",{value:A,selected:!0}));v.push(w("select",{class:"hidden",name:J.value,multiple:e.multiple},R))}const O=e.useInput===!0||m!==!0?void 0:i.splitAttrs.attributes.value;return w("div",{class:"q-field__native row items-center",...O,...i.splitAttrs.listeners.value},v)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[w(Fe,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:Pe.value})]:null}),Rt(i)}});function fa(e,a){const l=D(null),n=C(()=>e.disable===!0?null:w("span",{ref:l,class:"no-outline",tabindex:-1}));function r(o){const s=a.value;o?.qAvoidFocus!==!0&&(o?.type.indexOf("key")===0?document.activeElement!==s&&s?.contains(document.activeElement)===!0&&s.focus():l.value!==null&&(o===void 0||s?.contains(o.target)===!0)&&l.value.focus())}return{refocusTargetEl:n,refocusTarget:r}}const va={xs:30,sm:35,md:40,lg:50,xl:60},ma={...lt,...Dt,...Lt,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},ha=["update:modelValue"];function Sa(e,a){const{props:l,slots:n,emit:r,proxy:o}=xe(),{$q:s}=o,S=at(l,s),g=D(null),{refocusTargetEl:y,refocusTarget:c}=fa(l,g),b=Ht(l,va),p=C(()=>l.val!==void 0&&Array.isArray(l.modelValue)),u=C(()=>{const k=ke(l.val);return p.value===!0?l.modelValue.findIndex(G=>ke(G)===k):-1}),h=C(()=>p.value===!0?u.value!==-1:ke(l.modelValue)===ke(l.trueValue)),H=C(()=>p.value===!0?u.value===-1:ke(l.modelValue)===ke(l.falseValue)),E=C(()=>h.value===!1&&H.value===!1),_=C(()=>l.disable===!0?-1:l.tabindex||0),U=C(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(S.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),B=C(()=>{const k=h.value===!0?"truthy":H.value===!0?"falsy":"indet",G=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?h.value===!0:H.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${k}${G}`}),V=C(()=>{const k={type:"checkbox"};return l.name!==void 0&&Object.assign(k,{".checked":h.value,"^checked":h.value===!0?"checked":void 0,name:l.name,value:p.value===!0?l.val:l.trueValue}),k}),L=rl(V),F=C(()=>{const k={tabindex:_.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":E.value===!0?"mixed":h.value===!0?"true":"false"};return l.disable===!0&&(k["aria-disabled"]="true"),k});function I(k){k!==void 0&&(ne(k),c(k)),l.disable!==!0&&r("update:modelValue",W(),k)}function W(){if(p.value===!0){if(h.value===!0){const k=l.modelValue.slice();return k.splice(u.value,1),k}return l.modelValue.concat([l.val])}if(h.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(H.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function j(k){(k.keyCode===13||k.keyCode===32)&&ne(k)}function J(k){(k.keyCode===13||k.keyCode===32)&&I(k)}const ie=a(h,E);return Object.assign(o,{toggle:I}),()=>{const k=ie();l.disable!==!0&&L(k,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const G=[w("div",{class:B.value,style:b.value,"aria-hidden":"true"},k)];y.value!==null&&G.push(y.value);const ee=l.label!==void 0?Nt(n.default,[l.label]):qt(n.default);return ee!==void 0&&G.push(w("div",{class:`q-${e}__label q-anchor--skip`},ee)),w("div",{ref:g,class:U.value,...F.value,onClick:I,onKeydown:j,onKeyup:J},G)}}const ga=()=>w("div",{key:"svg",class:"q-checkbox__bg absolute"},[w("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[w("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),w("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),Pa=Le({name:"QCheckbox",props:ma,emits:ha,setup(e){const a=ga();function l(n,r){const o=C(()=>(n.value===!0?e.checkedIcon:r.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>o.value!==null?[w("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[w(Fe,{class:"q-checkbox__icon",name:o.value})])]:[a]}return Sa("checkbox",l)}}),Va=bl("menus",{state:()=>({menus:[{id:"bbq-outdoor",name:"BBQ Menu - Outdoor",venue:"Outdoor",basePrice:4e3,minPax:50,template:`WELCOME DRINK (Select One):
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
`}]}),actions:{initializeStore(){const e=localStorage.getItem("slaf-menus");if(e)try{this.menus=JSON.parse(e)}catch(l){console.error("Failed to parse saved menus",l)}const a=localStorage.getItem("slaf-template-blocks");if(a)try{this.templateBlocks=JSON.parse(a)}catch(l){console.error("Failed to parse saved template blocks",l)}},saveToStorage(){localStorage.setItem("slaf-menus",JSON.stringify(this.menus)),localStorage.setItem("slaf-template-blocks",JSON.stringify(this.templateBlocks))},addMenu(e){this.menus.push({...e,id:Date.now().toString()}),this.saveToStorage()},updateMenu(e,a){const l=this.menus.findIndex(n=>n.id===e);l!==-1&&(this.menus[l]={...this.menus[l],...a},this.saveToStorage())},deleteMenu(e){this.menus=this.menus.filter(a=>a.id!==e),this.saveToStorage()},addTemplateBlock(e){this.templateBlocks.push({...e,id:Date.now().toString()+"-tb"}),this.saveToStorage()},updateTemplateBlock(e,a){const l=this.templateBlocks.findIndex(n=>n.id===e);l!==-1&&(this.templateBlocks[l]={...this.templateBlocks[l],...a},this.saveToStorage())},deleteTemplateBlock(e){this.templateBlocks=this.templateBlocks.filter(a=>a.id!==e),this.saveToStorage()}}});export{Oa as Q,ma as a,Sa as b,Va as c,Pa as d,Bt as e,sa as f,xa as g,ha as u};
