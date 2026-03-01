import{k as je,aT as mt,aU as $e,aV as ht,aW as Ct,aK as It,$ as Nt,g as Qe,a5 as Ht,aL as qt,c as f,h as g,H as Le,aX as zt,ae as Gt,a7 as _t,p as ie,w as ve,q as X,aY as Wt,aM as Kt,l as Ut,m as jt,M as gt,r as x,U as $t,aZ as Qt,a_ as Te,a$ as Jt,b0 as Xt,X as Ge,b1 as ct,b2 as Yt,aH as Zt,Y as Se,b3 as el,aE as tl,aq as ll,b4 as al,aF as il,z as _e,b5 as We}from"./index-Df41Dyfu.js";import{a as nl,b as ol,Q as ul}from"./QItemLabel-lezyANV3.js";import{Q as rl}from"./QMenu-BZPOvWkC.js";import{n as dt}from"./format-hlGAdIUH.js";const sl=je({name:"QField",inheritAttrs:!1,props:{...$e,tag:{type:String,default:"label"}},emits:mt,setup(){return ht(Ct({tagProp:!0}))}}),cl={xs:8,sm:10,md:14,lg:20,xl:24},dl=je({name:"QChip",props:{...Nt,...It,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:o,emit:a}){const{proxy:{$q:s}}=Qe(),V=_t(e,s),r=qt(e,cl),F=f(()=>e.selected===!0||e.icon!==void 0),E=f(()=>e.selected===!0?e.iconSelected||s.iconSet.chip.selected:e.icon),C=f(()=>e.iconRemove||s.iconSet.chip.remove),B=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=f(()=>{const d=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(d?` text-${d} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(B.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(V.value===!0?" q-chip--dark q-dark":"")}),y=f(()=>{const d=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},H={...d,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||s.lang.label.remove};return{chip:d,remove:H}});function w(d){d.keyCode===13&&T(d)}function T(d){e.disable||(a("update:selected",!e.selected),a("click",d))}function P(d){(d.keyCode===void 0||d.keyCode===13)&&(ie(d),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function N(){const d=[];B.value===!0&&d.push(g("div",{class:"q-focus-helper"})),F.value===!0&&d.push(g(Le,{class:"q-chip__icon q-chip__icon--left",name:E.value}));const H=e.label!==void 0?[g("div",{class:"ellipsis"},[e.label])]:void 0;return d.push(g("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},zt(o.default,H))),e.iconRight&&d.push(g(Le,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&d.push(g(Le,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:C.value,...y.value.remove,onClick:P,onKeyup:P})),d}return()=>{if(e.modelValue===!1)return;const d={class:c.value,style:r.value};return B.value===!0&&Object.assign(d,y.value.chip,{onClick:T,onKeyup:w}),Ht("div",d,N(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Gt,e.ripple]])}}});let xe=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const o=document.createElement("div");Object.assign(o.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(o),e.scrollLeft=-1e3,xe=e.scrollLeft>=0,e.remove()}const W=1e3,fl=["start","center","end","start-force","center-force","end-force"],Et=Array.prototype.filter,Sl=window.getComputedStyle(document.body).overflowAnchor===void 0?$t:function(e,o){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const a=e.children||[];Et.call(a,V=>V.dataset&&V.dataset.qVsAnchor!==void 0).forEach(V=>{delete V.dataset.qVsAnchor});const s=a[o];s?.dataset&&(s.dataset.qVsAnchor="")}))};function me(e,o){return e+o}function Ke(e,o,a,s,V,r,F,E){const C=e===window?document.scrollingElement||document.documentElement:e,B=V===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-F-E,scrollMaxSize:0,offsetStart:-F,offsetEnd:-E};if(V===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=C.scrollLeft,c.scrollViewSize+=C.clientWidth),c.scrollMaxSize=C.scrollWidth,r===!0&&(c.scrollStart=(xe===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=C.scrollTop,c.scrollViewSize+=C.clientHeight),c.scrollMaxSize=C.scrollHeight),a!==null)for(let y=a.previousElementSibling;y!==null;y=y.previousElementSibling)y.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=y[B]);if(s!==null)for(let y=s.nextElementSibling;y!==null;y=y.nextElementSibling)y.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=y[B]);if(o!==e){const y=C.getBoundingClientRect(),w=o.getBoundingClientRect();V===!0?(c.offsetStart+=w.left-y.left,c.offsetEnd-=w.width):(c.offsetStart+=w.top-y.top,c.offsetEnd-=w.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function ft(e,o,a,s){o==="end"&&(o=(e===window?document.body:e)[a===!0?"scrollWidth":"scrollHeight"]),e===window?a===!0?(s===!0&&(o=(xe===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-o),window.scrollTo(o,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o):a===!0?(s===!0&&(o=(xe===!0?e.scrollWidth-e.offsetWidth:0)-o),e.scrollLeft=o):e.scrollTop=o}function be(e,o,a,s){if(a>=s)return 0;const V=o.length,r=Math.floor(a/W),F=Math.floor((s-1)/W)+1;let E=e.slice(r,F).reduce(me,0);return a%W!==0&&(E-=o.slice(r*W,a).reduce(me,0)),s%W!==0&&s!==V&&(E-=o.slice(s,F*W).reduce(me,0)),E}const yt={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},pl=Object.keys(yt),St={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...yt};function vl({virtualScrollLength:e,getVirtualScrollTarget:o,getVirtualScrollEl:a,virtualScrollItemSizeComputed:s}){const V=Qe(),{props:r,emit:F,proxy:E}=V,{$q:C}=E;let B,c,y,w=[],T;const P=x(0),N=x(0),d=x({}),H=x(null),$=x(null),q=x(null),A=x({from:0,to:0}),ke=f(()=>r.tableColspan!==void 0?r.tableColspan:100);s===void 0&&(s=f(()=>r.virtualScrollItemSize));const I=f(()=>s.value+";"+r.virtualScrollHorizontal),Q=f(()=>I.value+";"+r.virtualScrollSliceRatioBefore+";"+r.virtualScrollSliceRatioAfter);ve(Q,()=>{K()}),ve(I,Y);function Y(){ne(c,!0)}function he(l){ne(l===void 0?c:l)}function Z(l,u){const v=o();if(v==null||v.nodeType===8)return;const O=Ke(v,a(),H.value,$.value,r.virtualScrollHorizontal,C.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd);y!==O.scrollViewSize&&K(O.scrollViewSize),z(v,O,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,fl.indexOf(u)!==-1?u:c!==-1&&l>c?"end":"start")}function Oe(){const l=o();if(l==null||l.nodeType===8)return;const u=Ke(l,a(),H.value,$.value,r.virtualScrollHorizontal,C.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd),v=e.value-1,O=u.scrollMaxSize-u.offsetStart-u.offsetEnd-N.value;if(B===u.scrollStart)return;if(u.scrollMaxSize<=0){z(l,u,0,0);return}y!==u.scrollViewSize&&K(u.scrollViewSize),Ce(A.value.from);const R=Math.floor(u.scrollMaxSize-Math.max(u.scrollViewSize,u.offsetEnd)-Math.min(T[v],u.scrollViewSize/2));if(R>0&&Math.ceil(u.scrollStart)>=R){z(l,u,v,u.scrollMaxSize-u.offsetEnd-w.reduce(me,0));return}let p=0,h=u.scrollStart-u.offsetStart,L=h;if(h<=O&&h+u.scrollViewSize>=P.value)h-=P.value,p=A.value.from,L=h;else for(let m=0;h>=w[m]&&p<v;m++)h-=w[m],p+=W;for(;h>0&&p<v;)h-=T[p],h>-u.scrollViewSize?(p++,L=h):L=T[p]+h;z(l,u,p,L)}function z(l,u,v,O,R){const p=typeof R=="string"&&R.indexOf("-force")!==-1,h=p===!0?R.replace("-force",""):R,L=h!==void 0?h:"start";let m=Math.max(0,v-d.value[L]),G=m+d.value.total;G>e.value&&(G=e.value,m=Math.max(0,G-d.value.total)),B=u.scrollStart;const J=m!==A.value.from||G!==A.value.to;if(J===!1&&h===void 0){ge(v);return}const{activeElement:Ve}=document,j=q.value;J===!0&&j!==null&&j!==Ve&&j.contains(Ve)===!0&&(j.addEventListener("focusout",Pe),setTimeout(()=>{j?.removeEventListener("focusout",Pe)})),Sl(j,v-m);const Be=h!==void 0?T.slice(m,v).reduce(me,0):0;if(J===!0){const ee=G>=A.value.from&&m<=A.value.to?A.value.to:G;A.value={from:m,to:ee},P.value=be(w,T,0,m),N.value=be(w,T,G,e.value),requestAnimationFrame(()=>{A.value.to!==G&&B===u.scrollStart&&(A.value={from:A.value.from,to:G},N.value=be(w,T,G,e.value))})}requestAnimationFrame(()=>{if(B!==u.scrollStart)return;J===!0&&Ce(m);const ee=T.slice(m,v).reduce(me,0),te=ee+u.offsetStart+P.value,Me=te+T[v];let ye=te+O;if(h!==void 0){const Ie=ee-Be,pe=u.scrollStart+Ie;ye=p!==!0&&pe<te&&Me<pe+u.scrollViewSize?pe:h==="end"?Me-u.scrollViewSize:te-(h==="start"?0:Math.round((u.scrollViewSize-T[v])/2))}B=ye,ft(l,ye,r.virtualScrollHorizontal,C.lang.rtl),ge(v)})}function Ce(l){const u=q.value;if(u){const v=Et.call(u.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),O=v.length,R=r.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let p=l,h,L;for(let m=0;m<O;){for(h=R(v[m]),m++;m<O&&v[m].classList.contains("q-virtual-scroll--with-prev")===!0;)h+=R(v[m]),m++;L=h-T[p],L!==0&&(T[p]+=L,w[Math.floor(p/W)]+=L),p++}}}function Pe(){q.value?.focus()}function ne(l,u){const v=1*s.value;(u===!0||Array.isArray(T)===!1)&&(T=[]);const O=T.length;T.length=e.value;for(let p=e.value-1;p>=O;p--)T[p]=v;const R=Math.floor((e.value-1)/W);w=[];for(let p=0;p<=R;p++){let h=0;const L=Math.min((p+1)*W,e.value);for(let m=p*W;m<L;m++)h+=T[m];w.push(h)}c=-1,B=void 0,P.value=be(w,T,0,A.value.from),N.value=be(w,T,A.value.to,e.value),l>=0?(Ce(A.value.from),X(()=>{Z(l)})):oe()}function K(l){if(l===void 0&&typeof window<"u"){const h=o();h!=null&&h.nodeType!==8&&(l=Ke(h,a(),H.value,$.value,r.virtualScrollHorizontal,C.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd).scrollViewSize)}y=l;const u=parseFloat(r.virtualScrollSliceRatioBefore)||0,v=parseFloat(r.virtualScrollSliceRatioAfter)||0,O=1+u+v,R=l===void 0||l<=0?1:Math.ceil(l/s.value),p=Math.max(1,R,Math.ceil((r.virtualScrollSliceSize>0?r.virtualScrollSliceSize:10)/O));d.value={total:Math.ceil(p*O),start:Math.ceil(p*u),center:Math.ceil(p*(.5+u)),end:Math.ceil(p*(1+u)),view:R}}function De(l,u){const v=r.virtualScrollHorizontal===!0?"width":"height",O={["--q-virtual-scroll-item-"+v]:s.value+"px"};return[l==="tbody"?g(l,{class:"q-virtual-scroll__padding",key:"before",ref:H},[g("tr",[g("td",{style:{[v]:`${P.value}px`,...O},colspan:ke.value})])]):g(l,{class:"q-virtual-scroll__padding",key:"before",ref:H,style:{[v]:`${P.value}px`,...O}}),g(l,{class:"q-virtual-scroll__content",key:"content",ref:q,tabindex:-1},u.flat()),l==="tbody"?g(l,{class:"q-virtual-scroll__padding",key:"after",ref:$},[g("tr",[g("td",{style:{[v]:`${N.value}px`,...O},colspan:ke.value})])]):g(l,{class:"q-virtual-scroll__padding",key:"after",ref:$,style:{[v]:`${N.value}px`,...O}})]}function ge(l){c!==l&&(r.onVirtualScroll!==void 0&&F("virtualScroll",{index:l,from:A.value.from,to:A.value.to-1,direction:l<c?"decrease":"increase",ref:E}),c=l)}K();const oe=Wt(Oe,C.platform.is.ios===!0?120:35);Kt(()=>{K()});let Ee=!1;return Ut(()=>{Ee=!0}),jt(()=>{if(Ee!==!0)return;const l=o();B!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?ft(l,B,r.virtualScrollHorizontal,C.lang.rtl):Z(c)}),gt(()=>{oe.cancel()}),Object.assign(E,{scrollTo:Z,reset:Y,refresh:he}),{virtualScrollSliceRange:A,virtualScrollSliceSizeComputed:d,setVirtualScrollSize:K,onVirtualScrollEvt:oe,localResetVirtualScroll:ne,padVirtualScroll:De,scrollTo:Z,reset:Y,refresh:he}}const vt=e=>["add","add-unique","toggle"].includes(e),ml=".*+?^${}()|[]\\",hl=Object.keys($e);function Ue(e,o){if(typeof e=="function")return e;const a=e!==void 0?e:o;return s=>s!==null&&typeof s=="object"&&a in s?s[a]:s}const wl=je({name:"QSelect",inheritAttrs:!1,props:{...St,...Qt,...$e,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:vt},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:St.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...mt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:o,emit:a}){const{proxy:s}=Qe(),{$q:V}=s,r=x(!1),F=x(!1),E=x(-1),C=x(""),B=x(!1),c=x(!1);let y=null,w=null,T,P,N,d=null,H,$,q,A;const ke=x(null),I=x(null),Q=x(null),Y=x(null),he=x(null),Z=Yt(e),Oe=al(nt),z=f(()=>Array.isArray(e.options)?e.options.length:0),Ce=f(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Pe,virtualScrollSliceSizeComputed:ne,localResetVirtualScroll:K,padVirtualScroll:De,onVirtualScrollEvt:ge,scrollTo:oe,setVirtualScrollSize:Ee}=vl({virtualScrollLength:z,getVirtualScrollTarget:bt,getVirtualScrollEl:at,virtualScrollItemSizeComputed:Ce}),l=Ct(),u=f(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,i=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const n=e.mapOptions===!0&&T!==void 0?T:[],S=i.map(k=>Tt(k,n));return e.modelValue===null&&t===!0?S.filter(k=>k!==null):S}return i}),v=f(()=>{const t={};return hl.forEach(i=>{const n=e[i];n!==void 0&&(t[i]=n)}),t}),O=f(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),R=f(()=>ct(u.value)),p=f(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||u.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),h=f(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),L=f(()=>z.value===0),m=f(()=>u.value.map(t=>_.value(t)).join(", ")),G=f(()=>e.displayValue!==void 0?e.displayValue:m.value),J=f(()=>e.optionsHtml===!0?()=>!0:t=>t?.html===!0),Ve=f(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||u.value.some(J.value))),j=f(()=>l.focused.value===!0?e.tabindex:-1),Be=f(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":r.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return E.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${E.value}`),t}),ee=f(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=f(()=>u.value.map((t,i)=>({index:i,opt:t,html:J.value(t),selected:!0,removeAtIndex:wt,toggleOption:le,tabindex:j.value}))),Me=f(()=>{if(z.value===0)return[];const{from:t,to:i}=Pe.value;return e.options.slice(t,i).map((n,S)=>{const k=ue.value(n)===!0,b=He(n)===!0,D=t+S,M={clickable:!0,active:b,activeClass:pe.value,manualFocus:!0,focused:!1,disable:k,tabindex:-1,dense:e.optionsDense,dark:O.value,role:"option","aria-selected":b===!0?"true":"false",id:`${l.targetUid.value}_${D}`,onClick:()=>{le(n)}};return k!==!0&&(E.value===D&&(M.focused=!0),V.platform.is.desktop===!0&&(M.onMousemove=()=>{r.value===!0&&re(D)})),{index:D,opt:n,html:J.value(n),label:_.value(n),selected:M.active,focused:M.focused,toggleOption:le,setOptionIndex:re,itemProps:M}})}),ye=f(()=>e.dropdownIcon!==void 0?e.dropdownIcon:V.iconSet.arrow.dropdown),Ie=f(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),pe=f(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),U=f(()=>Ue(e.optionValue,"value")),_=f(()=>Ue(e.optionLabel,"label")),ue=f(()=>Ue(e.optionDisable,"disable")),Ae=f(()=>u.value.map(U.value)),pt=f(()=>{const t={onInput:nt,onChange:Oe,onKeydown:lt,onKeyup:et,onKeypress:tt,onFocus:Ye,onClick(i){P===!0&&Se(i)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Oe,t});ve(u,t=>{T=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(F.value!==!0&&r.value!==!0||R.value!==!0)&&(N!==!0&&fe(),(F.value===!0||r.value===!0)&&se(""))},{immediate:!0}),ve(()=>e.fillInput,fe),ve(r,qe),ve(z,Dt);function Je(t){return e.emitValue===!0?U.value(t):t}function Ne(t){if(t!==-1&&t<u.value.length)if(e.multiple===!0){const i=e.modelValue.slice();a("remove",{index:t,value:i.splice(t,1)[0]}),a("update:modelValue",i)}else a("update:modelValue",null)}function wt(t){Ne(t),l.focus()}function Xe(t,i){const n=Je(t);if(e.multiple!==!0){e.fillInput===!0&&we(_.value(t),!0,!0),a("update:modelValue",n);return}if(u.value.length===0){a("add",{index:0,value:n}),a("update:modelValue",e.multiple===!0?[n]:n);return}if(i===!0&&He(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const S=e.modelValue.slice();a("add",{index:S.length,value:n}),S.push(n),a("update:modelValue",S)}function le(t,i){if(l.editable.value!==!0||t===void 0||ue.value(t)===!0)return;const n=U.value(t);if(e.multiple!==!0){i!==!0&&(we(e.fillInput===!0?_.value(t):"",!0,!0),ae()),I.value?.focus(),(u.value.length===0||Te(U.value(u.value[0]),n)!==!0)&&a("update:modelValue",e.emitValue===!0?n:t);return}if((P!==!0||B.value===!0)&&l.focus(),Ye(),u.value.length===0){const b=e.emitValue===!0?n:t;a("add",{index:0,value:b}),a("update:modelValue",e.multiple===!0?[b]:b);return}const S=e.modelValue.slice(),k=Ae.value.findIndex(b=>Te(b,n));if(k!==-1)a("remove",{index:k,value:S.splice(k,1)[0]});else{if(e.maxValues!==void 0&&S.length>=e.maxValues)return;const b=e.emitValue===!0?n:t;a("add",{index:S.length,value:b}),S.push(b)}a("update:modelValue",S)}function re(t){if(V.platform.is.desktop!==!0)return;const i=t!==-1&&t<z.value?t:-1;E.value!==i&&(E.value=i)}function Fe(t=1,i){if(r.value===!0){let n=E.value;do n=dt(n+t,-1,z.value-1);while(n!==-1&&n!==E.value&&ue.value(e.options[n])===!0);E.value!==n&&(re(n),oe(n),i!==!0&&e.useInput===!0&&e.fillInput===!0&&Re(n>=0?_.value(e.options[n]):H,!0))}}function Tt(t,i){const n=S=>Te(U.value(S),t);return e.options.find(n)||i.find(n)||t}function He(t){const i=U.value(t);return Ae.value.find(n=>Te(n,i))!==void 0}function Ye(t){e.useInput===!0&&I.value!==null&&(t===void 0||I.value===t.target&&t.target.value===m.value)&&I.value.select()}function Ze(t){Zt(t,27)===!0&&r.value===!0&&(Se(t),ae(),fe()),a("keyup",t)}function et(t){const{value:i}=t.target;if(t.keyCode!==void 0){Ze(t);return}if(t.target.value="",y!==null&&(clearTimeout(y),y=null),w!==null&&(clearTimeout(w),w=null),fe(),typeof i=="string"&&i.length!==0){const n=i.toLocaleLowerCase(),S=b=>{const D=e.options.find(M=>String(b.value(M)).toLocaleLowerCase()===n);return D===void 0?!1:(u.value.indexOf(D)===-1?le(D):ae(),!0)},k=b=>{S(U)!==!0&&b!==!0&&S(_)!==!0&&se(i,!0,()=>k(!0))};k()}else l.clearValue(t)}function tt(t){a("keypress",t)}function lt(t){if(a("keydown",t),el(t)===!0)return;const i=C.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),n=t.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(E.value!==-1||i===!0);if(t.keyCode===27){Ge(t);return}if(t.keyCode===9&&n===!1){ce();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&r.value===!1){ie(t),de();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&C.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Ne(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&a("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof C.value!="string"||C.value.length===0)&&(ie(t),E.value=-1,Fe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ne.value!==void 0&&(ie(t),E.value=Math.max(-1,Math.min(z.value,E.value+(t.keyCode===33?-1:1)*ne.value.view)),Fe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ie(t),Fe(t.keyCode===38?-1:1,e.multiple));const S=z.value;if((q===void 0||A<Date.now())&&(q=""),S>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||q.length!==0)){r.value!==!0&&de(t);const k=t.key.toLocaleLowerCase(),b=q.length===1&&q[0]===k;A=Date.now()+1500,b===!1&&(ie(t),q+=k);const D=new RegExp("^"+q.split("").map(ze=>ml.indexOf(ze)!==-1?"\\"+ze:ze).join(".*"),"i");let M=E.value;if(b===!0||M<0||D.test(_.value(e.options[M]))!==!0)do M=dt(M+1,-1,S-1);while(M!==E.value&&(ue.value(e.options[M])===!0||D.test(_.value(e.options[M]))!==!0));E.value!==M&&X(()=>{re(M),oe(M),M>=0&&e.useInput===!0&&e.fillInput===!0&&Re(_.value(e.options[M]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||q!=="")&&(t.keyCode!==9||n===!1))){if(t.keyCode!==9&&ie(t),E.value!==-1&&E.value<S){le(e.options[E.value]);return}if(i===!0){const k=(b,D)=>{if(D){if(vt(D)!==!0)return}else D=e.newValueMode;if(we("",e.multiple!==!0,!0),b==null)return;(D==="toggle"?le:Xe)(b,D==="add-unique"),e.multiple!==!0&&(I.value?.focus(),ae())};if(e.onNewValue!==void 0?a("newValue",C.value,k):k(C.value),e.multiple!==!0)return}r.value===!0?ce():l.innerLoading.value!==!0&&de()}}function at(){return P===!0?he.value:Q.value!==null&&Q.value.contentEl!==null?Q.value.contentEl:void 0}function bt(){return at()}function kt(){return e.hideSelected===!0?[]:o["selected-item"]!==void 0?te.value.map(t=>o["selected-item"](t)).slice():o.selected!==void 0?[].concat(o.selected()):e.useChips===!0?te.value.map((t,i)=>g(dl,{key:"option-"+i,removable:l.editable.value===!0&&ue.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:j.value,onRemove(){t.removeAtIndex(i)}},()=>g("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:_.value(t.opt)}))):[g("span",{class:"ellipsis",[Ve.value===!0?"innerHTML":"textContent"]:G.value})]}function it(){if(L.value===!0)return o["no-option"]!==void 0?o["no-option"]({inputValue:C.value}):void 0;const t=o.option!==void 0?o.option:n=>g(ul,{key:n.index,...n.itemProps},()=>g(nl,()=>g(ol,()=>g("span",{[n.html===!0?"innerHTML":"textContent"]:n.label}))));let i=De("div",Me.value.map(t));return o["before-options"]!==void 0&&(i=o["before-options"]().concat(i)),ll(o["after-options"],i)}function Ot(t,i){const n=i===!0?{...Be.value,...l.splitAttrs.attributes.value}:void 0,S={ref:i===!0?I:void 0,key:"i_t",class:p.value,style:e.inputStyle,value:C.value!==void 0?C.value:"",type:"search",...n,id:i===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...pt.value};return t!==!0&&P===!0&&(Array.isArray(S.class)===!0?S.class=[...S.class,"no-pointer-events"]:S.class+=" no-pointer-events"),g("input",S)}function nt(t){y!==null&&(clearTimeout(y),y=null),w!==null&&(clearTimeout(w),w=null),!(t&&t.target&&t.target.qComposing===!0)&&(Re(t.target.value||""),N=!0,H=C.value,l.focused.value!==!0&&(P!==!0||B.value===!0)&&l.focus(),e.onFilter!==void 0&&(y=setTimeout(()=>{y=null,se(C.value)},e.inputDebounce)))}function Re(t,i){C.value!==t&&(C.value=t,i===!0||e.inputDebounce===0||e.inputDebounce==="0"?a("inputValue",t):w=setTimeout(()=>{w=null,a("inputValue",t)},e.inputDebounce))}function we(t,i,n){N=n!==!0,e.useInput===!0&&(Re(t,!0),(i===!0||n!==!0)&&(H=t),i!==!0&&se(t))}function se(t,i,n){if(e.onFilter===void 0||i!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?a("filterAbort"):(l.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&u.value.length!==0&&N!==!0&&t===_.value(u.value[0])&&(t="");const S=setTimeout(()=>{r.value===!0&&(r.value=!1)},10);d!==null&&clearTimeout(d),d=S,a("filter",t,(k,b)=>{(i===!0||l.focused.value===!0)&&d===S&&(clearTimeout(d),typeof k=="function"&&k(),c.value=!1,X(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(i===!0?r.value===!0&&ae():r.value===!0?qe(!0):r.value=!0),typeof b=="function"&&X(()=>{b(s)}),typeof n=="function"&&X(()=>{n(s)})}))},()=>{l.focused.value===!0&&d===S&&(clearTimeout(d),l.innerLoading.value=!1,c.value=!1),r.value===!0&&(r.value=!1)})}function Pt(){return g(rl,{ref:Q,class:h.value,style:e.popupContentStyle,modelValue:r.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&L.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:O.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Ie.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:ge,onBeforeShow:ut,onBeforeHide:Vt,onShow:Bt},it)}function Vt(t){rt(t),ce()}function Bt(){Ee()}function Mt(t){Se(t),I.value?.focus(),B.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function At(t){Se(t),X(()=>{B.value=!1})}function Ft(){const t=[g(sl,{class:`col-auto ${l.fieldClass.value}`,...v.value,for:l.targetUid.value,dark:O.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:C.value.length!==0,...l.splitAttrs.listeners.value,onFocus:Mt,onBlur:At},{...o,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return r.value===!0&&t.push(g("div",{ref:he,class:h.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:Ge,onScrollPassive:ge},it())),g(tl,{ref:Y,modelValue:F.value,position:e.useInput===!0?"top":void 0,transitionShow:$,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:ut,onBeforeHide:Rt,onHide:Lt,onShow:xt},()=>g("div",{class:"q-select__dialog"+(O.value===!0?" q-select__dialog--dark q-dark":"")+(B.value===!0?" q-select__dialog--focused":"")},t))}function Rt(t){rt(t),Y.value!==null&&Y.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Lt(t){ae(),l.focused.value===!1&&a("blur",t),fe()}function xt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&I.value!==null&&I.value!==t&&I.value.focus(),Ee()}function ce(){F.value!==!0&&(E.value=-1,r.value===!0&&(r.value=!1),l.focused.value===!1&&(d!==null&&(clearTimeout(d),d=null),l.innerLoading.value===!0&&(a("filterAbort"),l.innerLoading.value=!1,c.value=!1)))}function de(t){l.editable.value===!0&&(P===!0?(l.onControlFocusin(t),F.value=!0,X(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?se(C.value):(L.value!==!0||o["no-option"]!==void 0)&&(r.value=!0))}function ae(){F.value=!1,ce()}function fe(){e.useInput===!0&&we(e.multiple!==!0&&e.fillInput===!0&&u.value.length!==0&&_.value(u.value[0])||"",!0,!0)}function qe(t){let i=-1;if(t===!0){if(u.value.length!==0){const n=U.value(u.value[0]);i=e.options.findIndex(S=>Te(U.value(S),n))}K(i)}re(i)}function Dt(t,i){r.value===!0&&l.innerLoading.value===!1&&(K(-1,!0),X(()=>{r.value===!0&&l.innerLoading.value===!1&&(t>i?K():qe(!0))}))}function ot(){F.value===!1&&Q.value!==null&&Q.value.updatePosition()}function ut(t){t!==void 0&&Se(t),a("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function rt(t){t!==void 0&&Se(t),a("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function st(){P=V.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?o["no-option"]!==void 0||e.onFilter!==void 0||L.value===!1:!0),$=V.platform.is.ios===!0&&P===!0&&e.useInput===!0?"fade":e.transitionShow}return Jt(st),Xt(ot),st(),gt(()=>{y!==null&&clearTimeout(y),w!==null&&clearTimeout(w)}),Object.assign(s,{showPopup:de,hidePopup:ae,removeAtIndex:Ne,add:Xe,toggleOption:le,getOptionIndex:()=>E.value,setOptionIndex:re,moveOptionSelection:Fe,filter:se,updateMenuPosition:ot,updateInputValue:we,isOptionSelected:He,getEmittingOptionValue:Je,isOptionDisabled:(...t)=>ue.value.apply(null,t)===!0,getOptionValue:(...t)=>U.value.apply(null,t),getOptionLabel:(...t)=>_.value.apply(null,t)}),Object.assign(l,{innerValue:u,fieldClass:f(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:ke,targetRef:I,hasValue:R,showPopup:de,floatingLabel:f(()=>e.hideSelected!==!0&&R.value===!0||typeof C.value=="number"||C.value.length!==0||ct(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(F.value===!0||L.value!==!0||o["no-option"]!==void 0))return P===!0?Ft():Pt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{fe(),ce()})},onClick(t){if(Ge(t),P!==!0&&r.value===!0){ce(),I.value?.focus();return}de(t)}},getControl:t=>{const i=kt(),n=t===!0||F.value!==!0||P!==!0;if(e.useInput===!0)i.push(Ot(t,n));else if(l.editable.value===!0){const k=n===!0?Be.value:void 0;i.push(g("input",{ref:n===!0?I:void 0,key:"d_t",class:"q-select__focus-target",id:n===!0?l.targetUid.value:void 0,value:G.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...k,onKeydown:lt,onKeyup:Ze,onKeypress:tt})),n===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&i.push(g("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:et}))}if(Z.value!==void 0&&e.disable!==!0&&Ae.value.length!==0){const k=Ae.value.map(b=>g("option",{value:b,selected:!0}));i.push(g("select",{class:"hidden",name:Z.value,multiple:e.multiple},k))}const S=e.useInput===!0||n!==!0?void 0:l.splitAttrs.attributes.value;return g("div",{class:"q-field__native row items-center",...S,...l.splitAttrs.listeners.value},i)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[g(Le,{class:"q-select__dropdown-icon"+(r.value===!0?" rotate-180":""),name:ye.value})]:null}),ht(l)}}),Tl=il("menus",{state:()=>({menus:[{id:"bbq-outdoor",name:"BBQ Menu - Outdoor",venue:"Outdoor",basePrice:4e3,minPax:50,template:`WELCOME DRINK (Select One):
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
`}]}),actions:{initializeStore(){const e=localStorage.getItem("slaf-menus");if(e)try{this.menus=JSON.parse(e)}catch(a){console.error("Failed to parse saved menus",a)}const o=localStorage.getItem("slaf-template-blocks");if(o)try{this.templateBlocks=JSON.parse(o)}catch(a){console.error("Failed to parse saved template blocks",a)}},saveToStorage(){localStorage.setItem("slaf-menus",JSON.stringify(this.menus)),localStorage.setItem("slaf-template-blocks",JSON.stringify(this.templateBlocks))},addMenu(e){this.menus.push({...e,id:Date.now().toString()}),this.saveToStorage();try{const o=_e();We().logAction({user:o.user?.name||"System",role:o.role||"system",action:"Created Menu",module:"Menu Management",details:`Created new menu package: ${e.name}`})}catch(o){console.error("Audit log failed",o)}},updateMenu(e,o){const a=this.menus.findIndex(s=>s.id===e);if(a!==-1){this.menus[a]={...this.menus[a],...o},this.saveToStorage();try{const s=_e();We().logAction({user:s.user?.name||"System",role:s.role||"system",action:"Updated Menu",module:"Menu Management",details:`Modified menu package: ${o.name}`})}catch(s){console.error("Audit log failed",s)}}},deleteMenu(e){const o=this.menus.find(a=>a.id===e)?.name||"Unknown";this.menus=this.menus.filter(a=>a.id!==e),this.saveToStorage();try{const a=_e();We().logAction({user:a.user?.name||"System",role:a.role||"system",action:"Deleted Menu",module:"Menu Management",details:`Deleted menu package: ${o}`,status:"warning"})}catch(a){console.error("Audit log failed",a)}},addTemplateBlock(e){this.templateBlocks.push({...e,id:Date.now().toString()+"-tb"}),this.saveToStorage()},updateTemplateBlock(e,o){const a=this.templateBlocks.findIndex(s=>s.id===e);a!==-1&&(this.templateBlocks[a]={...this.templateBlocks[a],...o},this.saveToStorage())},deleteTemplateBlock(e){this.templateBlocks=this.templateBlocks.filter(o=>o.id!==e),this.saveToStorage()}}});export{wl as Q,St as a,vl as b,pl as c,Tl as u};
