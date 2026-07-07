const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=r.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(i,e))}return e}toString(){return this.cssText}};const o=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:s,defineProperty:a,getOwnPropertyDescriptor:c,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:h}=Object,u=globalThis,_=u.trustedTypes,p=_?_.emptyScript:"",m=u.reactiveElementPolyfillSupport,g=(e,t)=>e,f={toAttribute(e,t){switch(t){case Boolean:e=e?p:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},v=(e,t)=>!s(e,t),b={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&a(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const o=r?.call(this);n?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const e=this.properties,t=[...l(e),...d(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(t)i.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of r){const r=document.createElement("style"),n=e.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=t.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:f;this._$Em=r;const o=n.fromAttribute(t,e.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(e,t,i,r=!1,n){if(void 0!==e){const o=this.constructor;if(!1===r&&(n=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??v)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:n},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==n||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[g("elementProperties")]=new Map,y[g("finalized")]=new Map,m?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,$=e=>e,x=w.trustedTypes,k=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+E,L=`<${A}>`,C=document,z=()=>C.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,P="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,N=/>/g,M=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,D=/"/g,R=/^(?:script|style|textarea|title)$/i,V=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),q=V(1),B=V(2),F=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),K=new WeakMap,W=C.createTreeWalker(C,129);function G(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(t):t}const Z=(e,t)=>{const i=e.length-1,r=[];let n,o=2===t?"<svg>":3===t?"<math>":"",s=I;for(let t=0;t<i;t++){const i=e[t];let a,c,l=-1,d=0;for(;d<i.length&&(s.lastIndex=d,c=s.exec(i),null!==c);)d=s.lastIndex,s===I?"!--"===c[1]?s=j:void 0!==c[1]?s=N:void 0!==c[2]?(R.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=M):void 0!==c[3]&&(s=M):s===M?">"===c[0]?(s=n??I,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?M:'"'===c[3]?D:U):s===D||s===U?s=M:s===j||s===N?s=I:(s=M,n=void 0);const h=s===M&&e[t+1].startsWith("/>")?" ":"";o+=s===I?i+L:l>=0?(r.push(a),i.slice(0,l)+S+i.slice(l)+E+h):i+E+(-2===l?t:h)}return[G(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class Q{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const s=e.length-1,a=this.parts,[c,l]=Z(e,t);if(this.el=Q.createElement(c,i),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=W.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(S)){const t=l[o++],i=r.getAttribute(e).split(E),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?te:"?"===s[1]?ie:"@"===s[1]?re:ee}),r.removeAttribute(e)}else e.startsWith(E)&&(a.push({type:6,index:n}),r.removeAttribute(e));if(R.test(r.tagName)){const e=r.textContent.split(E),t=e.length-1;if(t>0){r.textContent=x?x.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],z()),W.nextNode(),a.push({type:2,index:++n});r.append(e[t],z())}}}else if(8===r.nodeType)if(r.data===A)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(E,e+1));)a.push({type:7,index:n}),e+=E.length-1}n++}}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function J(e,t,i=e,r){if(t===F)return t;let n=void 0!==r?i._$Co?.[r]:i._$Cl;const o=T(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e),n._$AT(e,i,r)),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(t=J(e,n._$AS(e,t.values),n,r)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??C).importNode(t,!0);W.currentNode=r;let n=W.nextNode(),o=0,s=0,a=i[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new Y(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new ne(n,this,e)),this._$AV.push(t),a=i[++s]}o!==a?.index&&(n=W.nextNode(),o++)}return W.currentNode=C,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),T(e)?e===H||null==e||""===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==H&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Q.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new X(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new Q(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new Y(this.O(z()),this.O(z()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(void 0===n)e=J(this,e,t,0),o=!T(e)||e!==this._$AH&&e!==F,o&&(this._$AH=e);else{const r=e;let s,a;for(e=n[0],s=0;s<n.length-1;s++)a=J(this,r[i+s],t,s),a===F&&(a=this._$AH[s]),o||=!T(a)||a!==this._$AH[s],a===H?e=H:e!==H&&(e+=(a??"")+n[s+1]),this._$AH[s]=a}o&&!r&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==H)}}class re extends ee{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??H)===F)return;const i=this._$AH,r=e===H&&i!==H||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==H&&(i===H||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const oe=w.litHtmlPolyfillSupport;oe?.(Q,Y),(w.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;let ae=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const r=i?.renderBefore??t;let n=r._$litPart$;if(void 0===n){const e=i?.renderBefore??null;r._$litPart$=n=new Y(t.insertBefore(z(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};ae._$litElement$=!0,ae.finalized=!0,se.litElementHydrateSupport?.({LitElement:ae});const ce=se.litElementPolyfillSupport;ce?.({LitElement:ae}),(se.litElementVersions??=[]).push("4.2.2");const le=1,de=e=>(...t)=>({_$litDirective$:e,values:t});let he=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const ue=de(class extends he{constructor(e){if(super(e),e.type!==le||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return F}}),_e="important",pe=" !"+_e,me=de(class extends he{constructor(e){if(super(e),e.type!==le||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const r=e[i];return null==r?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const r=t[e];if(null!=r){this.ft.add(e);const t="string"==typeof r&&r.endsWith(pe);e.includes("-")||t?i.setProperty(e,t?r.slice(0,-11):r,t?_e:""):i[e]=r}}return F}});var ge=((e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new n(r,e,i)})`
  :host {
    display: block;
    container-type: inline-size;
  }

  ha-card {
    padding: 16px;
    overflow: hidden;
  }

  /* ---------- header ---------- */

  .top {
    display: grid;
    grid-template-columns: minmax(70px, 1fr) minmax(96px, 42%) minmax(70px, 1fr);
    align-items: start;
    gap: 8px;
  }

  .side-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
    padding-top: 4px;
  }
  .side-info.right {
    align-items: flex-end;
    text-align: right;
  }

  .info-item {
    cursor: pointer;
    line-height: 1.25;
    min-width: 0;
  }
  .info-item .value {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info-item .label {
    font-size: 11px;
    color: var(--secondary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info-item ha-icon {
    --mdc-icon-size: 15px;
    color: var(--secondary-text-color);
    vertical-align: -2px;
    margin-inline-end: 2px;
  }

  /* ---------- charger image ---------- */

  .image-wrap {
    position: relative;
    width: 100%;
    max-width: 220px;
    margin: 0 auto;
    cursor: pointer;
  }
  .charger-svg {
    display: block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35));
  }
  .custom-image {
    display: block;
    width: 100%;
    height: auto;
  }
  .led-overlay-svg {
    position: absolute;
    left: var(--led-overlay-left, 27.5%);
    top: var(--led-overlay-top, 27.5%);
    width: var(--led-overlay-size, 45%);
    height: var(--led-overlay-size, 45%);
    pointer-events: none;
  }

  .led {
    fill: var(--led-color, #4caf50);
    filter: drop-shadow(0 0 3px var(--led-color, #4caf50));
  }
  .leds-off .led {
    display: none;
  }
  /* paused: only the top bar stays lit, blinking */
  .leds.anim-top .led {
    opacity: 0.08;
    filter: none;
  }
  .leds.anim-top .led-0 {
    animation: led-pulse 2s ease-in-out infinite;
    filter: drop-shadow(0 0 3px var(--led-color, #ffffff));
  }
  .leds.anim-pulse .led {
    animation: led-pulse 2s ease-in-out infinite;
  }
  .leds.anim-spin .led {
    animation: led-chase var(--led-period, 1.6s) linear infinite;
  }
  .leds.anim-spin .led-1 {
    animation-delay: calc(var(--led-period, 1.6s) / -4 * 3);
  }
  .leds.anim-spin .led-2 {
    animation-delay: calc(var(--led-period, 1.6s) / -4 * 2);
  }
  .leds.anim-spin .led-3 {
    animation-delay: calc(var(--led-period, 1.6s) / -4 * 1);
  }
  @keyframes led-chase {
    0% { opacity: 1; }
    15% { opacity: 1; }
    45% { opacity: 0.1; }
    75% { opacity: 0.1; }
    100% { opacity: 1; }
  }
  @keyframes led-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.25; }
  }

  .brand-text {
    fill: #5c5f63;
    font-size: 9px;
    letter-spacing: 3px;
    font-family: inherit;
  }

  /* ---------- status ---------- */

  /* status text + lateral section-toggle icons, side by side */
  .status-line {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 6px;
  }

  .status {
    text-align: center;
    margin-top: 8px;
    cursor: pointer;
    min-width: 0;
  }
  .status .name {
    font-size: 14px;
    color: var(--secondary-text-color);
  }
  .status .state {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--primary-text-color);
    text-transform: uppercase;
    margin-top: 2px;
  }
  .status .state.state-error {
    color: var(--error-color, #f44336);
  }
  .status .state.state-charging {
    color: var(--primary-color);
  }
  .status .substatus {
    font-size: 12px;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 2px;
  }

  /* ---------- error banner ---------- */

  .error-banner {
    margin-top: 12px;
    border-radius: 8px;
    padding: 10px 12px;
    background: rgba(244, 67, 54, 0.12);
    border: 1px solid rgba(244, 67, 54, 0.4);
  }
  .error-banner .title {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    color: var(--error-color, #f44336);
    font-size: 13px;
  }
  .error-banner ul {
    margin: 6px 0 0;
    padding-inline-start: 20px;
    font-size: 13px;
    color: var(--primary-text-color);
  }
  .error-banner li {
    cursor: pointer;
  }

  /* ---------- quick actions ---------- */

  .quick-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin-top: 14px;
  }
  .qa-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-width: 62px;
    padding: 8px 10px;
    border-radius: 12px;
    border: 1px solid var(--divider-color);
    background: none;
    cursor: pointer;
    color: var(--secondary-text-color);
    font: inherit;
    font-size: 11px;
    transition: background 0.15s ease, color 0.15s ease;
  }
  .qa-button:hover {
    background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.08);
  }
  .qa-button ha-icon {
    --mdc-icon-size: 22px;
  }
  .qa-button.active {
    color: var(--primary-color);
    border-color: var(--primary-color);
  }
  .qa-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* ---------- section toggles (lateral icons) + bodies ---------- */

  /* Vertical icon stack beside the status text, like the reference
     charger-card: minimal footprint when every section is collapsed. */
  .section-toggle-bar {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .section-toggle-bar.horizontal {
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 8px;
  }
  .section-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: none;
    background: rgba(127, 127, 127, 0.12);
    color: var(--secondary-text-color);
    cursor: pointer;
    padding: 0;
    transition: background 0.15s ease, color 0.15s ease;
  }
  .section-toggle:hover {
    background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.15);
  }
  .section-toggle.active {
    background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.18);
    color: var(--primary-color);
  }
  .section-toggle ha-icon {
    --mdc-icon-size: 16px;
  }

  .sections {
    margin-top: 14px;
  }
  .section-body {
    padding: 2px 2px 14px;
  }
  .section-body.divider {
    border-top: 1px solid var(--divider-color);
    padding-top: 14px;
  }

  /* ---------- sliders ---------- */

  .slider-row {
    margin-top: 8px;
  }
  .slider-row .slider-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 13px;
    color: var(--primary-text-color);
  }
  .slider-row .slider-head .val {
    font-weight: 600;
  }
  .slider-row input[type='range'] {
    width: 100%;
    margin: 8px 0 2px;
    -webkit-appearance: none;
    appearance: none;
    height: 4px;
    border-radius: 2px;
    background: var(--divider-color);
    outline: none;
    cursor: pointer;
  }
  .slider-row input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--primary-color);
    border: none;
    cursor: pointer;
  }
  .slider-row input[type='range']::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--primary-color);
    border: none;
    cursor: pointer;
  }

  .presets {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .preset-chip {
    padding: 4px 12px;
    border-radius: 14px;
    border: 1px solid var(--divider-color);
    background: none;
    cursor: pointer;
    font: inherit;
    font-size: 12px;
    color: var(--primary-text-color);
    transition: background 0.15s ease;
  }
  .preset-chip:hover {
    background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.08);
  }
  .preset-chip.active {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  .toggle-list {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
  .toggle-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 0;
    font-size: 13px;
    color: var(--primary-text-color);
  }
  .toggle-row ha-icon {
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
  }
  .toggle-row .grow {
    flex: 1;
    cursor: pointer;
  }
  .toggle-row ha-switch {
    margin-inline-start: auto;
  }

  /* ---------- info list ---------- */

  .info-list {
    display: flex;
    flex-direction: column;
  }
  .info-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 0;
    font-size: 13px;
    cursor: pointer;
  }
  .info-row ha-icon {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
  }
  .info-row .name {
    color: var(--secondary-text-color);
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .info-row .val {
    color: var(--primary-text-color);
    font-weight: 500;
    text-align: right;
  }

  /* ---------- custom actions ---------- */

  .actions-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .action-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 12px;
    border-radius: 18px;
    border: 1px solid var(--divider-color);
    background: none;
    cursor: pointer;
    font: inherit;
    font-size: 12px;
    color: var(--primary-text-color);
    transition: background 0.15s ease, border-color 0.15s ease;
  }
  .action-chip ha-icon {
    --mdc-icon-size: 17px;
    color: var(--secondary-text-color);
  }
  .action-chip:hover {
    background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.08);
  }
  .action-chip.active {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
  .action-chip.active ha-icon {
    color: var(--primary-color);
  }
  .action-chip.device {
    background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
    border-color: transparent;
  }
  .action-chip.device.active {
    background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.15);
    color: var(--primary-color);
  }
  .actions-caption {
    width: 100%;
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    margin: 6px 0 2px;
  }
  .actions-caption:first-child {
    margin-top: 0;
  }

  /* ---------- stats ---------- */

  .stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
    margin-top: 16px;
  }
  .stat {
    flex: 1 1 90px;
    text-align: center;
    cursor: pointer;
    min-width: 0;
  }
  .stat .value {
    font-size: 17px;
    font-weight: 600;
    color: var(--primary-text-color);
    white-space: nowrap;
  }
  .stat .label {
    font-size: 11px;
    color: var(--secondary-text-color);
    margin-top: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* ---------- compact ---------- */

  .compact-top {
    display: grid;
    grid-template-columns: 88px 1fr auto;
    gap: 12px;
    align-items: center;
  }
  .compact-top .image-wrap {
    max-width: 88px;
    margin: 0;
  }
  .compact-top .status {
    text-align: left;
    margin-top: 0;
    min-width: 0;
  }
  .compact-top .status .state {
    font-size: 16px;
  }
  .compact-top .side-info {
    padding-top: 0;
    gap: 6px;
  }
  .compact .quick-actions {
    margin-top: 12px;
  }
  .compact .actions-grid {
    margin-top: 12px;
  }
  .compact .stats {
    margin-top: 12px;
  }
  @container (max-width: 340px) {
    .compact-top {
      grid-template-columns: 72px 1fr;
    }
    .compact-top .side-info.right {
      grid-column: 1 / -1;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 12px;
    }
  }

  /* ---------- ultra-compact ---------- */

  .ultra-top {
    display: grid;
    grid-template-columns: 60px 1fr auto;
    gap: 10px;
    align-items: stretch;
  }
  .ultra-top .image-wrap {
    max-width: 60px;
    margin: 0;
    align-self: center;
  }
  .ultra-center {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }
  .ultra-state {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ultra-state.state-error {
    color: var(--error-color, #f44336);
  }
  .ultra-state.state-charging {
    color: var(--primary-color);
  }
  .ultra-substatus {
    font-size: 11px;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ultra-limit {
    font-size: 12px;
    font-weight: 600;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }
  .ultra-stats {
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-align: right;
    min-width: 60px;
  }
  .ultra-stat-item {
    cursor: pointer;
    line-height: 1.2;
  }
  .ultra-stat-item .v {
    font-size: 12px;
    font-weight: 600;
    color: var(--primary-text-color);
    white-space: nowrap;
  }
  .ultra-stat-item .l {
    font-size: 10px;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }
  .ultra-error {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 6px;
    font-size: 11px;
    color: var(--error-color, #f44336);
    cursor: pointer;
  }
  .ultra-error ha-icon {
    --mdc-icon-size: 14px;
    flex-shrink: 0;
  }
  /* Start/stop button lives at the bottom of the center column,
     horizontally centered — no extra vertical space; text hides on
     very narrow cards. */
  .ultra-inline-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-top: auto;
    padding-top: 5px;
    align-self: center;
    background: none;
    border: 1px solid var(--primary-color);
    border-radius: 12px;
    color: var(--primary-color);
    cursor: pointer;
    font: inherit;
    font-size: 11px;
    padding-inline: 8px;
    padding-block: 3px;
    transition: background 0.15s ease;
    max-width: 100%;
    overflow: hidden;
  }
  .ultra-inline-btn:hover {
    background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.1);
  }
  .ultra-inline-btn ha-icon {
    --mdc-icon-size: 14px;
    flex-shrink: 0;
  }
  .ultra-inline-btn .btn-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @container (max-width: 280px) {
    .ultra-inline-btn .btn-text { display: none; }
    .ultra-inline-btn { padding-inline: 5px; }
  }

  /* ---------- narrow layouts ----------
     When the card itself gets narrow (phone or a tight dashboard
     column) the image moves above the two info columns instead of
     squeezing between them, so texts are never covered. */

  @container (max-width: 340px) {
    .top {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'img img' 'left right';
    }
    .image-wrap {
      grid-area: img;
      max-width: 150px;
    }
    .side-info {
      padding-top: 0;
    }
    .side-info.left {
      grid-area: left;
    }
    .side-info.right {
      grid-area: right;
    }
  }
`;const fe={en:{ui:{parameters:"Parameters",info:"Information",actions:"Actions",start:"Start",stop:"Stop",reboot:"Reboot",authentication:"Authentication",lock:"Lock",dynamic_limit:"Charging current",led_brightness:"LED brightness",energy:"Energy",charging_time:"Charging time",temperature:"Temperature",power:"Power",voltage:"Voltage",current:"Current",installation_current:"Installation current",lifetime_energy:"Lifetime energy",limit_reason:"Limit reason",firmware:"Firmware",errors:"Active errors",current_l1:"Current L1",current_l2:"Current L2",current_l3:"Current L3",voltage_l1:"Voltage L1",voltage_l2:"Voltage L2",voltage_l3:"Voltage L3",schedule_override:"Schedule override",force_single_phase:"Single phase",lb_mode:"Load balancing",breaker_current:"Breaker current",meter_power:"Meter power",meter_reboot:"Meter reboot",device_actions:"Device",custom_actions:"Custom",entity_missing:"Entity not found"},states:{available:"Unplugged",connected:"Connected",need_auth:"Waiting for authentication",charging:"Charging",error:"Error",locked:"Locked",paused:"Paused",paused_by_scheduler:"Paused by scheduler",updating_firmware:"Updating firmware",unavailable:"Unavailable",unknown:"Unknown"},errors:{ev_error:"Vehicle error",ev_diode_short:"Vehicle communication error",overheating:"Overheating",thermal_throttling:"Thermal throttling",metering_error:"Metering error",overcurrent:"Overcurrent",overvoltage:"Overvoltage",undervoltage:"Undervoltage",rcd_error:"RCD error",relay_contacts_welded:"Relay contacts welded",state_e_activated:"Vehicle error",overtemp:"Overheating",critical_temp:"Critical temperature",meter_fault:"Metering error",cp_diode_failure:"Vehicle communication error",contactor_failure:"Contactor failure"},editor:{entity:"Charger state sensor (required)",name:"Name",location:"Location",meter_entity:"Energy meter entity (optional)",substatus_entity:"Substatus entity (optional)",compact:"Layout",show_leds:"Show LEDs",show_stats:"Show stats",show_quick_actions:"Show quick actions",show_name:"Show name",show_parameters:"Show parameters section",show_info:"Show information section",show_actions:"Show actions section",language:"Language",image:"Custom image (optional path)"}},it:{ui:{parameters:"Parametri",info:"Informazioni",actions:"Azioni",start:"Avvia",stop:"Ferma",reboot:"Riavvia",authentication:"Autenticazione",lock:"Blocco",dynamic_limit:"Corrente di ricarica",led_brightness:"Luminosità LED",energy:"Energia",charging_time:"Tempo ricarica",temperature:"Temperatura",power:"Potenza",voltage:"Tensione",current:"Corrente",installation_current:"Corrente di installazione",lifetime_energy:"Energia erogata",limit_reason:"Motivo limitazione",firmware:"Firmware",errors:"Errori attivi",current_l1:"Corrente L1",current_l2:"Corrente L2",current_l3:"Corrente L3",voltage_l1:"Tensione L1",voltage_l2:"Tensione L2",voltage_l3:"Tensione L3",schedule_override:"Ignora programmazione",force_single_phase:"Monofase",lb_mode:"Bilanciamento",breaker_current:"Corrente interruttore",meter_power:"Potenza meter",meter_reboot:"Riavvio meter",device_actions:"Dispositivo",custom_actions:"Personalizzate",entity_missing:"Entità non trovata"},states:{available:"Scollegato",connected:"Connesso",need_auth:"In attesa di autenticazione",charging:"In carica",error:"Errore",locked:"Bloccato",paused:"In pausa",paused_by_scheduler:"In pausa (programmata)",updating_firmware:"Aggiornamento firmware",unavailable:"Non disponibile",unknown:"Sconosciuto"},errors:{ev_error:"Errore veicolo",ev_diode_short:"Errore comunicazione veicolo",overheating:"Surriscaldamento",thermal_throttling:"Limitazione termica",metering_error:"Errore misuratore",overcurrent:"Sovracorrente",overvoltage:"Sovratensione",undervoltage:"Sottotensione",rcd_error:"Errore RCD",relay_contacts_welded:"Contatti relè incollati",state_e_activated:"Errore veicolo",overtemp:"Surriscaldamento",critical_temp:"Temperatura critica",meter_fault:"Errore misuratore",cp_diode_failure:"Errore comunicazione veicolo",contactor_failure:"Errore contattore"},editor:{entity:"Sensore stato del charger (obbligatorio)",name:"Nome",location:"Posizione",meter_entity:"Entità energy meter (opzionale)",substatus_entity:"Entità sottostato (opzionale)",compact:"Layout",show_leds:"Mostra LED",show_stats:"Mostra statistiche",show_quick_actions:"Mostra azioni rapide",show_name:"Mostra nome",show_parameters:"Mostra sezione parametri",show_info:"Mostra sezione informazioni",show_actions:"Mostra sezione azioni",language:"Lingua",image:"Immagine personalizzata (percorso, opzionale)"}},de:{ui:{parameters:"Parameter",info:"Informationen",actions:"Aktionen",start:"Starten",stop:"Stoppen",reboot:"Neustart",authentication:"Authentifizierung",lock:"Sperren",dynamic_limit:"Ladestrom",led_brightness:"LED-Helligkeit",energy:"Energie",charging_time:"Ladezeit",temperature:"Temperatur",power:"Leistung",voltage:"Spannung",current:"Strom",installation_current:"Installationsstrom",lifetime_energy:"Lebenszeit-Energie",limit_reason:"Limitierungsgrund",firmware:"Firmware",errors:"Aktive Fehler",current_l1:"Strom L1",current_l2:"Strom L2",current_l3:"Strom L3",voltage_l1:"Spannung L1",voltage_l2:"Spannung L2",voltage_l3:"Spannung L3",schedule_override:"Zeitplan überschreiben",force_single_phase:"Einphasig",lb_mode:"Lastausgleich",breaker_current:"Schutzschalter",meter_power:"Zählerleistung",meter_reboot:"Zähler neu starten",device_actions:"Gerät",custom_actions:"Benutzerdefiniert",entity_missing:"Entität nicht gefunden"},states:{available:"Nicht verbunden",connected:"Verbunden",need_auth:"Warten auf Authentifizierung",charging:"Lädt",error:"Fehler",locked:"Gesperrt",paused:"Pausiert",paused_by_scheduler:"Pausiert (geplant)",updating_firmware:"Firmware-Update",unavailable:"Nicht verfügbar",unknown:"Unbekannt"},errors:{ev_error:"Fahrzeugfehler",ev_diode_short:"Fahrzeugkommunikationsfehler",overheating:"Überhitzung",thermal_throttling:"Thermische Drosselung",metering_error:"Messfehler",overcurrent:"Überstrom",overvoltage:"Überspannung",undervoltage:"Unterspannung",rcd_error:"FI-Schutzschalter-Fehler",relay_contacts_welded:"Relaiskontakte verschweißt",state_e_activated:"Fahrzeugfehler",overtemp:"Überhitzung",critical_temp:"Kritische Temperatur",meter_fault:"Messfehler",cp_diode_failure:"Fahrzeugkommunikationsfehler",contactor_failure:"Schützfehler"},editor:{entity:"Ladezustandssensor (erforderlich)",name:"Name",location:"Standort",meter_entity:"Energiezähler-Entität (optional)",substatus_entity:"Substatus-Entität (optional)",compact:"Layout",show_leds:"LEDs anzeigen",show_stats:"Statistiken anzeigen",show_quick_actions:"Schnellaktionen anzeigen",show_name:"Namen anzeigen",show_parameters:"Parameterbereich anzeigen",show_info:"Informationsbereich anzeigen",show_actions:"Aktionsbereich anzeigen",language:"Sprache",image:"Benutzerdefiniertes Bild (Pfad, optional)"}},fr:{ui:{parameters:"Paramètres",info:"Informations",actions:"Actions",start:"Démarrer",stop:"Arrêter",reboot:"Redémarrer",authentication:"Authentification",lock:"Verrouiller",dynamic_limit:"Courant de charge",led_brightness:"Luminosité LED",energy:"Énergie",charging_time:"Temps de charge",temperature:"Température",power:"Puissance",voltage:"Tension",current:"Courant",installation_current:"Courant d'installation",lifetime_energy:"Énergie totale",limit_reason:"Raison de limitation",firmware:"Firmware",errors:"Erreurs actives",current_l1:"Courant L1",current_l2:"Courant L2",current_l3:"Courant L3",voltage_l1:"Tension L1",voltage_l2:"Tension L2",voltage_l3:"Tension L3",schedule_override:"Ignorer le planning",force_single_phase:"Monophasé",lb_mode:"Équilibrage de charge",breaker_current:"Courant disjoncteur",meter_power:"Puissance compteur",meter_reboot:"Redémarrer compteur",device_actions:"Appareil",custom_actions:"Personnalisé",entity_missing:"Entité introuvable"},states:{available:"Déconnecté",connected:"Connecté",need_auth:"En attente d'authentification",charging:"En charge",error:"Erreur",locked:"Verrouillé",paused:"En pause",paused_by_scheduler:"En pause (planifiée)",updating_firmware:"Mise à jour firmware",unavailable:"Indisponible",unknown:"Inconnu"},errors:{ev_error:"Erreur véhicule",ev_diode_short:"Erreur communication véhicule",overheating:"Surchauffe",thermal_throttling:"Limitation thermique",metering_error:"Erreur de mesure",overcurrent:"Surintensité",overvoltage:"Surtension",undervoltage:"Sous-tension",rcd_error:"Erreur différentiel",relay_contacts_welded:"Contacts relais soudés",state_e_activated:"Erreur véhicule",overtemp:"Surchauffe",critical_temp:"Température critique",meter_fault:"Erreur de mesure",cp_diode_failure:"Erreur communication véhicule",contactor_failure:"Défaillance contacteur"},editor:{entity:"Capteur d'état (requis)",name:"Nom",location:"Emplacement",meter_entity:"Entité compteur (optionnel)",substatus_entity:"Entité sous-état (optionnel)",compact:"Disposition",show_leds:"Afficher LEDs",show_stats:"Afficher statistiques",show_quick_actions:"Afficher actions rapides",show_name:"Afficher nom",show_parameters:"Afficher section paramètres",show_info:"Afficher section informations",show_actions:"Afficher section actions",language:"Langue",image:"Image personnalisée (chemin, optionnel)"}},nl:{ui:{parameters:"Parameters",info:"Informatie",actions:"Acties",start:"Starten",stop:"Stoppen",reboot:"Herstarten",authentication:"Authenticatie",lock:"Vergrendelen",dynamic_limit:"Laadstroom",led_brightness:"LED-helderheid",energy:"Energie",charging_time:"Laadtijd",temperature:"Temperatuur",power:"Vermogen",voltage:"Spanning",current:"Stroom",installation_current:"Installatiestroom",lifetime_energy:"Totale energie",limit_reason:"Reden beperking",firmware:"Firmware",errors:"Actieve fouten",current_l1:"Stroom L1",current_l2:"Stroom L2",current_l3:"Stroom L3",voltage_l1:"Spanning L1",voltage_l2:"Spanning L2",voltage_l3:"Spanning L3",schedule_override:"Schema overschrijven",force_single_phase:"Eénfasig",lb_mode:"Lastverdeling",breaker_current:"Zekeringsstroom",meter_power:"Metervermogen",meter_reboot:"Meter herstarten",device_actions:"Apparaat",custom_actions:"Aangepast",entity_missing:"Entiteit niet gevonden"},states:{available:"Niet verbonden",connected:"Verbonden",need_auth:"Wacht op authenticatie",charging:"Aan het laden",error:"Fout",locked:"Vergrendeld",paused:"Gepauzeerd",paused_by_scheduler:"Gepauzeerd (gepland)",updating_firmware:"Firmware-update",unavailable:"Niet beschikbaar",unknown:"Onbekend"},errors:{ev_error:"Voertuigfout",ev_diode_short:"Communicatiefout voertuig",overheating:"Oververhitting",thermal_throttling:"Thermische beperking",metering_error:"Meetfout",overcurrent:"Overstroom",overvoltage:"Overspanning",undervoltage:"Onderspanning",rcd_error:"Aardlekschakelaarfout",relay_contacts_welded:"Relaiskontakten versmolten",state_e_activated:"Voertuigfout",overtemp:"Oververhitting",critical_temp:"Kritieke temperatuur",meter_fault:"Meetfout",cp_diode_failure:"Communicatiefout voertuig",contactor_failure:"Contactorfout"},editor:{entity:"Laadstatussensor (verplicht)",name:"Naam",location:"Locatie",meter_entity:"Energiemeter entiteit (optioneel)",substatus_entity:"Substatus entiteit (optioneel)",compact:"Indeling",show_leds:"LED's weergeven",show_stats:"Statistieken weergeven",show_quick_actions:"Snelle acties weergeven",show_name:"Naam weergeven",show_parameters:"Parameterssectie weergeven",show_info:"Informatiesectie weergeven",show_actions:"Actiessectie weergeven",language:"Taal",image:"Aangepaste afbeelding (pad, optioneel)"}},sv:{ui:{parameters:"Parametrar",info:"Information",actions:"Åtgärder",start:"Starta",stop:"Stoppa",reboot:"Starta om",authentication:"Autentisering",lock:"Lås",dynamic_limit:"Laddström",led_brightness:"LED-ljusstyrka",energy:"Energi",charging_time:"Laddtid",temperature:"Temperatur",power:"Effekt",voltage:"Spänning",current:"Ström",installation_current:"Installationsström",lifetime_energy:"Total energi",limit_reason:"Begränsningsorsak",firmware:"Firmware",errors:"Aktiva fel",current_l1:"Ström L1",current_l2:"Ström L2",current_l3:"Ström L3",voltage_l1:"Spänning L1",voltage_l2:"Spänning L2",voltage_l3:"Spänning L3",schedule_override:"Överskrid schema",force_single_phase:"Enfasig",lb_mode:"Lastbalansering",breaker_current:"Säkringsström",meter_power:"Mätareffekt",meter_reboot:"Starta om mätare",device_actions:"Enhet",custom_actions:"Anpassad",entity_missing:"Entitet hittades inte"},states:{available:"Frånkopplad",connected:"Ansluten",need_auth:"Väntar på autentisering",charging:"Laddar",error:"Fel",locked:"Låst",paused:"Pausad",paused_by_scheduler:"Pausad (schemalagd)",updating_firmware:"Firmware-uppdatering",unavailable:"Otillgänglig",unknown:"Okänd"},errors:{ev_error:"Fordonsfel",ev_diode_short:"Kommunikationsfel fordon",overheating:"Överhettning",thermal_throttling:"Termisk begränsning",metering_error:"Mätfel",overcurrent:"Överström",overvoltage:"Överspänning",undervoltage:"Underspänning",rcd_error:"Jordfelsbrytarfel",relay_contacts_welded:"Reläkontakter sammansvetsade",state_e_activated:"Fordonsfel",overtemp:"Överhettning",critical_temp:"Kritisk temperatur",meter_fault:"Mätfel",cp_diode_failure:"Kommunikationsfel fordon",contactor_failure:"Kontaktorefel"},editor:{entity:"Laddstatussensor (krävs)",name:"Namn",location:"Plats",meter_entity:"Energimätar-entitet (valfritt)",substatus_entity:"Substatusentitet (valfritt)",compact:"Layout",show_leds:"Visa LEDs",show_stats:"Visa statistik",show_quick_actions:"Visa snabbåtgärder",show_name:"Visa namn",show_parameters:"Visa parametersektion",show_info:"Visa informationssektion",show_actions:"Visa åtgärdssektion",language:"Språk",image:"Anpassad bild (sökväg, valfritt)"}},da:{ui:{parameters:"Parametre",info:"Information",actions:"Handlinger",start:"Start",stop:"Stop",reboot:"Genstart",authentication:"Godkendelse",lock:"Lås",dynamic_limit:"Ladestrøm",led_brightness:"LED-lysstyrke",energy:"Energi",charging_time:"Ladetid",temperature:"Temperatur",power:"Effekt",voltage:"Spænding",current:"Strøm",installation_current:"Installationsstrøm",lifetime_energy:"Samlet energi",limit_reason:"Begrænsningsårsag",firmware:"Firmware",errors:"Aktive fejl",current_l1:"Strøm L1",current_l2:"Strøm L2",current_l3:"Strøm L3",voltage_l1:"Spænding L1",voltage_l2:"Spænding L2",voltage_l3:"Spænding L3",schedule_override:"Tilsidesæt tidsplan",force_single_phase:"Enfaset",lb_mode:"Lastbalancering",breaker_current:"Sikringsstrøm",meter_power:"Målereffekt",meter_reboot:"Genstart måler",device_actions:"Enhed",custom_actions:"Tilpasset",entity_missing:"Entitet ikke fundet"},states:{available:"Frakoblet",connected:"Tilsluttet",need_auth:"Venter på godkendelse",charging:"Oplader",error:"Fejl",locked:"Låst",paused:"Sat på pause",paused_by_scheduler:"Sat på pause (planlagt)",updating_firmware:"Firmware-opdatering",unavailable:"Utilgængelig",unknown:"Ukendt"},errors:{ev_error:"Køretøjsfejl",ev_diode_short:"Kommunikationsfejl køretøj",overheating:"Overophedning",thermal_throttling:"Termisk begrænsning",metering_error:"Målefejl",overcurrent:"Overstrøm",overvoltage:"Overspænding",undervoltage:"Underspænding",rcd_error:"Fejlstrømsafbryderfejl",relay_contacts_welded:"Relaiskontakter svejset",state_e_activated:"Køretøjsfejl",overtemp:"Overophedning",critical_temp:"Kritisk temperatur",meter_fault:"Målefejl",cp_diode_failure:"Kommunikationsfejl køretøj",contactor_failure:"Kontaktorfejl"},editor:{entity:"Ladestatussensor (påkrævet)",name:"Navn",location:"Placering",meter_entity:"Energimåler entitet (valgfrit)",substatus_entity:"Substatus entitet (valgfrit)",compact:"Layout",show_leds:"Vis LEDs",show_stats:"Vis statistik",show_quick_actions:"Vis hurtige handlinger",show_name:"Vis navn",show_parameters:"Vis parametersektion",show_info:"Vis informationssektion",show_actions:"Vis handlingssektion",language:"Sprog",image:"Brugerdefineret billede (sti, valgfrit)"}},nb:{ui:{parameters:"Parametere",info:"Informasjon",actions:"Handlinger",start:"Start",stop:"Stopp",reboot:"Start på nytt",authentication:"Godkjenning",lock:"Lås",dynamic_limit:"Ladestrøm",led_brightness:"LED-lysstyrke",energy:"Energi",charging_time:"Ladetid",temperature:"Temperatur",power:"Effekt",voltage:"Spenning",current:"Strøm",installation_current:"Installasjonsstrøm",lifetime_energy:"Total energi",limit_reason:"Årsak til begrensning",firmware:"Fastvare",errors:"Aktive feil",current_l1:"Strøm L1",current_l2:"Strøm L2",current_l3:"Strøm L3",voltage_l1:"Spenning L1",voltage_l2:"Spenning L2",voltage_l3:"Spenning L3",schedule_override:"Overstyr tidsplan",force_single_phase:"Enfaset",lb_mode:"Lastbalansering",breaker_current:"Sikringsstrøm",meter_power:"Målereffekt",meter_reboot:"Start måler på nytt",device_actions:"Enhet",custom_actions:"Tilpasset",entity_missing:"Entitet ikke funnet"},states:{available:"Frakoblet",connected:"Tilkoblet",need_auth:"Venter på godkjenning",charging:"Lader",error:"Feil",locked:"Låst",paused:"Satt på pause",paused_by_scheduler:"Satt på pause (planlagt)",updating_firmware:"Fastvare-oppdatering",unavailable:"Utilgjengelig",unknown:"Ukjent"},errors:{ev_error:"Kjøretøyfeil",ev_diode_short:"Kommunikasjonsfeil kjøretøy",overheating:"Overoppheting",thermal_throttling:"Termisk begrensning",metering_error:"Målefeil",overcurrent:"Overstrøm",overvoltage:"Overspenning",undervoltage:"Underspenning",rcd_error:"Jordfeilavbryterfeil",relay_contacts_welded:"Reléskontakter smeltet",state_e_activated:"Kjøretøyfeil",overtemp:"Overoppheting",critical_temp:"Kritisk temperatur",meter_fault:"Målefeil",cp_diode_failure:"Kommunikasjonsfeil kjøretøy",contactor_failure:"Kontaktorfeil"},editor:{entity:"Ladestatussensor (påkrevd)",name:"Navn",location:"Sted",meter_entity:"Energimåler entitet (valgfritt)",substatus_entity:"Substatus entitet (valgfritt)",compact:"Layout",show_leds:"Vis LEDs",show_stats:"Vis statistikk",show_quick_actions:"Vis hurtighandlinger",show_name:"Vis navn",show_parameters:"Vis parametersseksjon",show_info:"Vis informasjonsseksjon",show_actions:"Vis handlingsseksjon",language:"Språk",image:"Tilpasset bilde (sti, valgfritt)"}},ro:{ui:{parameters:"Parametri",info:"Informații",actions:"Acțiuni",start:"Pornire",stop:"Oprire",reboot:"Repornire",authentication:"Autentificare",lock:"Blocare",dynamic_limit:"Curent de încărcare",led_brightness:"Luminozitate LED",energy:"Energie",charging_time:"Timp de încărcare",temperature:"Temperatură",power:"Putere",voltage:"Tensiune",current:"Curent",installation_current:"Curent instalație",lifetime_energy:"Energie totală livrată",limit_reason:"Motiv limitare",firmware:"Firmware",errors:"Erori active",current_l1:"Curent L1",current_l2:"Curent L2",current_l3:"Curent L3",voltage_l1:"Tensiune L1",voltage_l2:"Tensiune L2",voltage_l3:"Tensiune L3",schedule_override:"Ignorare programare",force_single_phase:"Monofazat",lb_mode:"Echilibrare sarcină",breaker_current:"Curent întrerupător",meter_power:"Putere contor",meter_reboot:"Repornire contor",device_actions:"Dispozitiv",custom_actions:"Personalizat",entity_missing:"Entitate negăsită"},states:{available:"Deconectat",connected:"Conectat",need_auth:"Așteptare autentificare",charging:"Încărcare",error:"Eroare",locked:"Blocat",paused:"Pauză",paused_by_scheduler:"Pauză (programată)",updating_firmware:"Actualizare firmware",unavailable:"Indisponibil",unknown:"Necunoscut"},errors:{ev_error:"Eroare vehicul",ev_diode_short:"Eroare comunicație vehicul",overheating:"Supraîncălzire",thermal_throttling:"Limitare termică",metering_error:"Eroare măsurare",overcurrent:"Supracurent",overvoltage:"Supratensiune",undervoltage:"Subtensiune",rcd_error:"Eroare releu diferențial",relay_contacts_welded:"Contacte releu sudate",state_e_activated:"Eroare vehicul",overtemp:"Supraîncălzire",critical_temp:"Temperatură critică",meter_fault:"Eroare contor",cp_diode_failure:"Eroare comunicație vehicul",contactor_failure:"Defecțiune contactor"},editor:{entity:"Senzor stare încărcător (obligatoriu)",name:"Nume",location:"Locație",meter_entity:"Entitate contor energie (opțional)",substatus_entity:"Entitate substare (opțional)",compact:"Layout",show_leds:"Afișare LED-uri",show_stats:"Afișare statistici",show_quick_actions:"Afișare acțiuni rapide",show_name:"Afișare nume",show_parameters:"Afișare secțiune parametri",show_info:"Afișare secțiune informații",show_actions:"Afișare secțiune acțiuni",language:"Limbă",image:"Imagine personalizată (cale, opțional)"}},es:{ui:{parameters:"Parámetros",info:"Información",actions:"Acciones",start:"Iniciar",stop:"Detener",reboot:"Reiniciar",authentication:"Autenticación",lock:"Bloquear",dynamic_limit:"Corriente de carga",led_brightness:"Brillo LED",energy:"Energía",charging_time:"Tiempo de carga",temperature:"Temperatura",power:"Potencia",voltage:"Tensión",current:"Corriente",installation_current:"Corriente de instalación",lifetime_energy:"Energía total entregada",limit_reason:"Motivo de limitación",firmware:"Firmware",errors:"Errores activos",current_l1:"Corriente L1",current_l2:"Corriente L2",current_l3:"Corriente L3",voltage_l1:"Tensión L1",voltage_l2:"Tensión L2",voltage_l3:"Tensión L3",schedule_override:"Ignorar programación",force_single_phase:"Monofásico",lb_mode:"Equilibrado de carga",breaker_current:"Corriente interruptor",meter_power:"Potencia contador",meter_reboot:"Reiniciar contador",device_actions:"Dispositivo",custom_actions:"Personalizado",entity_missing:"Entidad no encontrada"},states:{available:"Desconectado",connected:"Conectado",need_auth:"Esperando autenticación",charging:"Cargando",error:"Error",locked:"Bloqueado",paused:"En pausa",paused_by_scheduler:"En pausa (programada)",updating_firmware:"Actualizando firmware",unavailable:"No disponible",unknown:"Desconocido"},errors:{ev_error:"Error vehículo",ev_diode_short:"Error comunicación vehículo",overheating:"Sobrecalentamiento",thermal_throttling:"Limitación térmica",metering_error:"Error de medición",overcurrent:"Sobrecorriente",overvoltage:"Sobretensión",undervoltage:"Subtensión",rcd_error:"Error diferencial",relay_contacts_welded:"Contactos relé soldados",state_e_activated:"Error vehículo",overtemp:"Sobrecalentamiento",critical_temp:"Temperatura crítica",meter_fault:"Error contador",cp_diode_failure:"Error comunicación vehículo",contactor_failure:"Fallo contactor"},editor:{entity:"Sensor de estado del cargador (requerido)",name:"Nombre",location:"Ubicación",meter_entity:"Entidad contador de energía (opcional)",substatus_entity:"Entidad sub-estado (opcional)",compact:"Layout",show_leds:"Mostrar LEDs",show_stats:"Mostrar estadísticas",show_quick_actions:"Mostrar acciones rápidas",show_name:"Mostrar nombre",show_parameters:"Mostrar sección parámetros",show_info:"Mostrar sección información",show_actions:"Mostrar sección acciones",language:"Idioma",image:"Imagen personalizada (ruta, opcional)"}}},ve=e=>{const t=(e||"en").split("-")[0].toLowerCase();return fe[t]?t:"en"},be=(e,t,i)=>fe[e]?.[t]?.[i]??fe.en[t]?.[i]??i,ye={show_leds:!0,show_stats:!0,show_quick_actions:!0,show_name:!0,show_parameters:!0,show_info:!0,show_actions:!0},we=[{name:"entity",required:!0,selector:{entity:{domain:"sensor"}}},{name:"name",selector:{text:{}}},{name:"location",selector:{text:{}}},{name:"substatus_entity",selector:{entity:{}}},{name:"meter_entity",selector:{entity:{}}},{name:"compact",selector:{select:{mode:"list",options:[{value:"",label:"Standard"},{value:"compact",label:"Compact"},{value:"ultra",label:"Ultra compact"}]}}},{name:"",type:"grid",schema:[{name:"show_leds",selector:{boolean:{}}},{name:"show_stats",selector:{boolean:{}}},{name:"show_quick_actions",selector:{boolean:{}}},{name:"show_name",selector:{boolean:{}}},{name:"show_parameters",selector:{boolean:{}}},{name:"show_info",selector:{boolean:{}}},{name:"show_actions",selector:{boolean:{}}}]},{name:"language",selector:{select:{mode:"dropdown",options:[{value:"",label:"Auto"},{value:"en",label:"English"},{value:"de",label:"Deutsch"},{value:"fr",label:"Français"},{value:"it",label:"Italiano"},{value:"nl",label:"Nederlands"},{value:"sv",label:"Svenska"},{value:"da",label:"Dansk"},{value:"nb",label:"Norsk bokmål"},{value:"ro",label:"Română"},{value:"es",label:"Español"}]}}},{name:"image",selector:{text:{}}}];class $e extends ae{static properties={hass:{attribute:!1},_config:{state:!0}};setConfig(e){this._config=e}get _lang(){return ve(this.hass?.language)}_computeLabel=e=>be(this._lang,"editor",e.name);_compactToStr(e){return"ultra"===e?"ultra":!0===e?"compact":""}render(){if(!this.hass||!this._config)return H;const e=this._compactToStr(this._config.compact),t={...ye,...this._config,compact:e};return q`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${we}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}_valueChanged(e){e.stopPropagation();const t={...e.detail.value},i=t.compact;i&&""!==i?"compact"===i&&(t.compact=!0):delete t.compact;for(const[e,i]of Object.entries(ye))t[e]===i&&delete t[e];for(const e of["name","location","substatus_entity","meter_entity","image","language"])""===t[e]&&delete t[e];((e,t,i={})=>{const r=new Event(t,{bubbles:!0,composed:!0});r.detail=i,e.dispatchEvent(r)})(this,"config-changed",{config:t})}}customElements.get("lektrico-charger-card-editor")||customElements.define("lektrico-charger-card-editor",$e);const xe="lektrico-charger-card",ke={available:{color:"#4caf50",animation:"pulse"},connected:{color:"#2196f3",animation:"none"},need_auth:{color:"#ab47bc",animation:"none"},charging:{color:"#ffffff",animation:"spin"},paused:{color:"#ffffff",animation:"top"},paused_by_scheduler:{color:"#ffffff",animation:"top"},locked:{color:"#f44336",animation:"pulse"},error:{color:"#f44336",animation:"none"},updating_firmware:{color:"#ffeb3b",animation:"none"},unavailable:{color:"#4caf50",animation:"none"},unknown:{color:"#4caf50",animation:"none"}},Se={state:{domain:"sensor",keys:["state"],suffixes:["_state","_stato"]},charging_time:{domain:"sensor",keys:["charging_time"],suffixes:["_charging_time","_tempo_ricarica","_tempo_di_ricarica"]},session_energy:{domain:"sensor",keys:["session_energy","energy"],suffixes:["_session_energy","_energia","_energia_sessione","_energy"]},lifetime_energy:{domain:"sensor",keys:["lifetime_energy"],suffixes:["_lifetime_energy","_energia_erogata"]},power:{domain:"sensor",keys:["instant_power","power"],suffixes:["_instant_power","_power","_potenza"],device_class:"power"},voltage:{domain:"sensor",keys:["voltage"],suffixes:["_voltage","_tensione"],device_class:"voltage"},current:{domain:"sensor",keys:["current"],suffixes:["_current","_corrente"],device_class:"current"},voltage_l1:{domain:"sensor",keys:["voltage_l1"],suffixes:["_voltage_l1","_tensione_l1"]},voltage_l2:{domain:"sensor",keys:["voltage_l2"],suffixes:["_voltage_l2","_tensione_l2"]},voltage_l3:{domain:"sensor",keys:["voltage_l3"],suffixes:["_voltage_l3","_tensione_l3"]},current_l1:{domain:"sensor",keys:["current_l1"],suffixes:["_current_l1","_corrente_l1"]},current_l2:{domain:"sensor",keys:["current_l2"],suffixes:["_current_l2","_corrente_l2"]},current_l3:{domain:"sensor",keys:["current_l3"],suffixes:["_current_l3","_corrente_l3"]},installation_current:{domain:"sensor",keys:["installation_current"],suffixes:["_installation_current","_corrente_di_installazione"]},limit_reason:{domain:"sensor",keys:["limit_reason"],suffixes:["_limit_reason","_motivo_limitazione"]},temperature:{domain:"sensor",keys:["temperature"],suffixes:["_temperature","_temperatura"],device_class:"temperature"},dynamic_limit:{domain:"number",keys:["dynamic_limit"],suffixes:["_dynamic_limit","_limite_dinamico"]},led_brightness:{domain:"number",keys:["led_max_brightness"],suffixes:["_led_max_brightness","_led_brightness","_luminosita_led","_luminosita_massima_led"]},authentication:{domain:"switch",keys:["authentication"],suffixes:["_authentication","_autenticazione"]},lock:{domain:"switch",keys:["lock"],suffixes:["_lock","_blocca","_blocco"]},charge_start:{domain:"button",keys:["charge_start"],suffixes:["_charge_start","_avvia_ricarica"]},charge_stop:{domain:"button",keys:["charge_stop"],suffixes:["_charge_stop","_ferma_ricarica","_arresta_ricarica"]},reboot:{domain:"button",keys:["reboot"],suffixes:["_reboot","_restart","_riavvia"]},schedule_override:{domain:"button",keys:["charging_schedule_override"],suffixes:["_charging_schedule_override","_schedule_override"]},force_single_phase:{domain:"switch",keys:["force_single_phase"],suffixes:["_force_single_phase","_forza_monofase"]},update:{domain:"update",keys:["firmware"],suffixes:["_firmware"]}},Ee={lb_mode:{domain:"select",keys:["lb_mode"],suffixes:["_lb_mode","_load_balancing_mode"]},breaker_current:{domain:"sensor",keys:["breaker_current"],suffixes:["_breaker_current","_corrente_interruttore"]},meter_power:{domain:"sensor",keys:["power"],suffixes:["_power","_potenza"],device_class:"power"},meter_reboot:{domain:"button",keys:["reboot"],suffixes:["_reboot","_restart","_riavvia"]}},Ae=["ev_error","ev_diode_short","overheating","thermal_throttling","metering_error","overcurrent","overvoltage","undervoltage","rcd_error","relay_contacts_welded","state_e_activated","overtemp","critical_temp","meter_fault","cp_diode_failure","contactor_failure"],Le={slowest:6,fastest:2},Ce=[6,10,13,16,20,25,32],ze=[10,25,50,75,100];class Te extends ae{static styles=ge;static properties={hass:{attribute:!1},_config:{state:!0},_openSections:{state:!0},_pendingSlider:{state:!0}};constructor(){super(),this._openSections={},this._pendingSlider={},this._roles=null,this._rolesKey=null}setConfig(e){if(!e.entity)throw new Error("Please define the charger state entity, e.g. entity: sensor.1p7k_state");this._config=e,this._roles=null,this._rolesKey=null,this._meterRoles=null,this._meterKey=null}getCardSize(){const e=this._config?.compact;return"ultra"===e?2:!0===e?4:8}static getStubConfig(e){const t=e?.entities||{},i=Object.values(t).find(e=>"lektrico"===e.platform&&"state"===e.translation_key);return{entity:i?i.entity_id:"sensor.1p7k_state"}}static getConfigElement(){return document.createElement("lektrico-charger-card-editor")}get _lang(){return ve(this._config.language||this.hass?.language)}_t(e){return be(this._lang,"ui",e)}_stateText(e){const t=this._config.state_text||{};return t[e]?t[e]:be(this._lang,"states",e)}_errorName(e,t){return(fe[this._lang]?.errors?.[e]??fe.en.errors?.[e])||t?.attributes.friendly_name||e}_matchRoles(e,t,i,r){const n=this.hass,o=Object.entries(e),s={},a=new Set,c=(e,t)=>{s[e]=t,a.add(t)};for(const[e]of o)t[e]&&c(e,t[e]);for(const[e,t]of o){if(s[e]||!i.length)continue;const r=i.find(e=>!a.has(e.entity_id)&&e.entity_id.startsWith(`${t.domain}.`)&&t.keys?.includes(e.translation_key));r&&c(e,r.entity_id)}for(const[e,t]of o)if(!s[e])for(const i of t.suffixes||[]){const o=`${t.domain}.${r}${i}`;if(!a.has(o)&&n.states[o]){c(e,o);break}}const l=o.flatMap(([,e])=>e.suffixes||[]);for(const[e,t]of o){if(s[e])continue;const o=i.length?i.map(e=>e.entity_id):Object.keys(n.states).filter(e=>e.startsWith(`${t.domain}.${r}`));e:for(const i of t.suffixes||[])for(const r of o){if(a.has(r)||!r.startsWith(`${t.domain}.`)||!r.endsWith(i))continue;if(!l.some(e=>e.length>i.length&&!(t.suffixes||[]).includes(e)&&r.endsWith(e))){c(e,r);break e}}}for(const[e,t]of o){if(s[e]||!t.device_class||!i.length)continue;const r=i.filter(e=>!a.has(e.entity_id)&&e.entity_id.startsWith(`${t.domain}.`)&&n.states[e.entity_id]?.attributes.device_class===t.device_class);1===r.length&&c(e,r[0].entity_id)}return s}_deviceEntitiesOf(e){const t=this.hass.entities||{},i=t[e]?.device_id;return{deviceId:i,deviceEntities:i?Object.values(t).filter(e=>e.device_id===i):[]}}_discover(){const e=this._config.entity,{deviceId:t,deviceEntities:i}=this._deviceEntitiesOf(e),r=`${e}|${t||"nodevice"}`;if(this._roles&&this._rolesKey===r)return this._roles;const n=this.hass,o=this._config.entities||{},s=e.split(".")[1].replace(/_(state|stato)$/,""),a=this._matchRoles(Se,o,i,s);a.state=a.state||e;let c=[];return c=Array.isArray(o.errors)?o.errors:i.length?i.filter(e=>e.entity_id.startsWith("binary_sensor.")&&(Ae.includes(e.translation_key)||Ae.some(t=>e.entity_id.endsWith(`_${t}`)))).map(e=>e.entity_id):Ae.map(e=>`binary_sensor.${s}_${e}`).filter(e=>n.states[e]),a.errors=c,this._roles=a,this._rolesKey=r,a}_discoverMeter(){const e=this._config.meter_entity;if(!e)return{};const{deviceId:t,deviceEntities:i}=this._deviceEntitiesOf(e),r=`${e}|${t||"nodevice"}`;if(this._meterRoles&&this._meterKey===r)return this._meterRoles;let n=e.split(".")[1];for(const e of Object.values(Ee))for(const t of e.suffixes||[])if(n.endsWith(t)){n=n.slice(0,-t.length);break}const o=this._matchRoles(Ee,{},i,n);return this._meterRoles=o,this._meterKey=r,o}_isThreePhase(){const e=this._discover();return Boolean(e.current_l1||e.voltage_l1)}_stateObj(e){if(!e)return;if(e.includes("."))return this.hass.states[e];const t=this._discover()[e]??this._discoverMeter()[e];return t?this.hass.states[t]:void 0}_errorKeyOf(e){const t=Ae.find(t=>e.endsWith(`_${t}`));return t||(this.hass.entities?.[e]?.translation_key||e)}_fmt(e){if(!e)return"—";const{state:t,attributes:i}=e;if("unavailable"===t||"unknown"===t)return"—";if("duration"===i.device_class&&!Number.isNaN(Number(t))){const e=Math.round(Number(t));return`${String(Math.floor(e/3600)).padStart(2,"0")}:${String(Math.floor(e%3600/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}if("function"==typeof this.hass.formatEntityState)try{return this.hass.formatEntityState(e)}catch(e){}return`${t}${i.unit_of_measurement?` ${i.unit_of_measurement}`:""}`}_moreInfo(e){e&&((e,t,i={})=>{const r=new Event(t,{bubbles:!0,composed:!0});r.detail=i,e.dispatchEvent(r)})(this,"hass-more-info",{entityId:e})}_pressButton(e){const t=this._stateObj(e);t&&this.hass.callService("button","press",{entity_id:t.entity_id})}_toggleSwitch(e){const t=this._stateObj(e);t&&this.hass.callService("switch","toggle",{entity_id:t.entity_id})}_setNumber(e,t){const i=this._stateObj(e);i&&this.hass.callService("number","set_value",{entity_id:i.entity_id,value:t})}_sliderInput(e,t){this._pendingSlider={...this._pendingSlider,[e]:Number(t.target.value)}}_sliderChange(e,t){const i=Number(t.target.value),r={...this._pendingSlider};delete r[e],this._pendingSlider=r,this._setNumber(e,i)}_runAction(e){if(!e.service)return void(e.entity&&this._moreInfo(e.entity));if(e.confirm&&!window.confirm(!0===e.confirm?`${e.text}?`:e.confirm))return;const[t,i]=e.service.split("."),r={...e.service_data||e.data||{}};!e.entity||r.entity_id||e.target||(r.entity_id=e.entity),this.hass.callService(t,i,r,e.target)}_toggleSection(e){this._openSections={...this._openSections,[e]:!this._openSections[e]}}render(){if(!this.hass||!this._config)return H;const e=this._discover(),t=this.hass.states[e.state];if(!t)return q`<ha-card>
        <div style="padding:16px;color:var(--error-color,#f44336)">
          ${this._t("entity_missing")}: ${e.state}
        </div>
      </ha-card>`;const i=t.state,r=this._config.compact,n="ultra"===r,o=!0===r,s=(e.errors||[]).map(e=>this.hass.states[e]).filter(e=>e&&"on"===e.state),a=n?[]:this._computeSections(o);return q`
      <ha-card class=${ue({compact:o,ultra:n})}>
        ${n?this._renderUltraCompact(t,i,s):o?q`${this._renderCompactTop(t,i)}
              ${this._renderSectionToggleBar(a,!0)}`:q`${this._renderTop(i)}
              <div class="status-line">
                ${this._renderStatus(t,i)}
                ${this._renderSectionToggleBar(a)}
              </div>`}
        ${n?H:s.length?this._renderErrors(s):H}
        ${n||!1===this._config.show_quick_actions?H:this._renderQuickActions(i)}
        ${n?H:this._renderSectionBodies(a)}
        ${n||!1===this._config.show_stats?H:this._renderStats(i,s)}
      </ha-card>
    `}_defaultInfoColumns(){return this._isThreePhase()?{left:[{entity:"current_l1",decimals:1},{entity:"current_l2",decimals:1},{entity:"current_l3",decimals:1},"dynamic_limit"],right:["voltage_l1","voltage_l2","voltage_l3","power"]}:{left:[{entity:"current",decimals:1},"dynamic_limit"],right:["voltage","power"]}}_renderTop(e){if(!1===this._config.show_image)return H;const t=this._defaultInfoColumns(),i=this._config.info_left??t.left,r=this._config.info_right??t.right;return q`
      <div class="top">
        <div class="side-info left">
          ${i.map(e=>this._renderInfoItem(e))}
        </div>
        ${this._renderImage(e)}
        <div class="side-info right">
          ${r.map(e=>this._renderInfoItem(e))}
        </div>
      </div>
    `}_renderCompactTop(e,t){const i=this._isThreePhase(),r=this._config.info_right??(i?[{entity:"current_l1",decimals:1},{entity:"current_l2",decimals:1},{entity:"current_l3",decimals:1},"dynamic_limit"]:[{entity:"current",decimals:1},"dynamic_limit","voltage"]);return q`
      <div class="compact-top">
        ${this._renderImage(t)}
        ${this._renderStatus(e,t,{showLocation:!1})}
        <div class="side-info right">
          ${r.map(e=>this._renderInfoItem(e))}
        </div>
      </div>
    `}_renderUltraCompact(e,t,i){const r=this._substatusText(),n=this._stateObj("dynamic_limit"),o=n?this._fmt(n):null,s=!1!==this._config.show_quick_actions,a=s&&this._stateObj("charge_start")&&"charging"!==t&&"paused"!==t,c=s&&this._stateObj("charge_stop")&&("charging"===t||"paused"===t),l=[{entity:"current",decimals:1},{entity:"session_energy",label:this._t("energy")},{entity:"temperature"}];return q`
      <div class="ultra-top">
        ${this._renderImage(t)}
        <div class="ultra-center">
          <div
            class=${ue({"ultra-state":!0,"state-error":"error"===t,"state-charging":"charging"===t})}
            @click=${()=>this._moreInfo(this._config.entity)}
          >
            ${this._stateText(t)}
          </div>
          ${r?q`<div
                class="ultra-substatus"
                @click=${()=>this._moreInfo(this._config.entity)}
              >
                ${r}
              </div>`:H}
          ${o?q`<div
                class="ultra-limit"
                @click=${()=>this._moreInfo(this._config.entity)}
              >
                ${o}
              </div>`:H}
          ${a?q`<button
                class="ultra-inline-btn"
                @click=${e=>{e.stopPropagation(),this._pressButton("charge_start")}}
              >
                <ha-icon icon="mdi:play"></ha-icon>
                <span class="btn-text">${this._t("start")}</span>
              </button>`:c?q`<button
                class="ultra-inline-btn"
                @click=${e=>{e.stopPropagation(),this._pressButton("charge_stop")}}
              >
                <ha-icon icon="mdi:stop"></ha-icon>
                <span class="btn-text">${this._t("stop")}</span>
              </button>`:H}
        </div>
        <div class="ultra-stats">
          ${l.map(e=>this._renderUltraStat(e))}
        </div>
      </div>
      ${i.length?q`<div
            class="ultra-error"
            @click=${()=>this._moreInfo(i[0].entity_id)}
          >
            <ha-icon icon="mdi:alert-circle"></ha-icon>
            ${this._errorName(this._errorKeyOf(i[0].entity_id),i[0])}${i.length>1?q` (+${i.length-1})`:H}
          </div>`:H}
    `}_renderUltraStat({entity:e,decimals:t,label:i}){const r=this._stateObj(e);if(!r)return H;const n=i||(fe.en.ui[e]?this._t(e):r.attributes.friendly_name);let o;if(null!=t){const e=Number(r.state);if(Number.isNaN(e)||"unavailable"===r.state||"unknown"===r.state)o=this._fmt(r);else{const i=r.attributes.unit_of_measurement;o=`${e.toFixed(t)}${i?` ${i}`:""}`}}else o=this._fmt(r);return q`
      <div
        class="ultra-stat-item"
        @click=${()=>this._moreInfo(r.entity_id)}
      >
        <div class="v">${o}</div>
        <div class="l">${n}</div>
      </div>
    `}_renderInfoItem(e){const t="string"==typeof e?{entity:e}:e,i=this._stateObj(t.entity);if(!i)return H;const r=t.label||(fe.en.ui[t.entity]?this._t(t.entity):i.attributes.friendly_name);let n;const o=Number(i.state);if(null==t.decimals||""===i.state||Number.isNaN(o)||"unavailable"===i.state||"unknown"===i.state)n=this._fmt(i);else{const e=i.attributes.unit_of_measurement;n=`${o.toFixed(t.decimals)}${e?` ${e}`:""}`}return q`
      <div
        class="info-item"
        @click=${()=>this._moreInfo(i.entity_id)}
      >
        <div class="value">
          ${t.icon?q`<ha-icon .icon=${t.icon}></ha-icon>`:H}
          ${n}
        </div>
        <div class="label">${r}</div>
      </div>
    `}_ledConfig(e){const t=this._config.led_states||{};return{...ke[e]||ke.unknown,...t[e]||{}}}_maxAmps(){const e=this._stateObj("dynamic_limit"),t=this._stateObj("installation_current");return Number(e?.attributes.max)||Number(t?.state)||32}_ledPeriod(){const e=this._stateObj("current"),t=this._stateObj("dynamic_limit");let i=Number(e?.state);i&&!Number.isNaN(i)||(i=Number(t?.state)||8);const{slowest:r,fastest:n}={...Le,...this._config.led_spin||{}},o=this._maxAmps(),s=r-Math.min(i,o)/o*(r-n);return`${Math.max(s,n).toFixed(2)}s`}_renderImage(e){const t=this._ledConfig(e),i={"--led-color":t.color,"--led-period":this._ledPeriod()},r=`leds anim-${t.animation||"none"}`,n=this._config.image,o=!1!==this._config.show_leds;let s;if(n&&"svg"!==n){const e=this._config.led_overlay_position||{},t={...i,"--led-overlay-left":e.left,"--led-overlay-top":e.top,"--led-overlay-size":e.size};s=q`
        <img class="custom-image" src=${n} alt="charger" />
        ${o?q`<div class=${r} style=${me(t)}>
              ${B`
  <svg
    class="led-overlay-svg"
    viewBox="0 0 200 200"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <g class="leds">
      <rect class="led led-0" x="97.5" y="22" width="5" height="54" rx="2.5"></rect>
      <rect class="led led-1" x="124" y="97.5" width="54" height="5" rx="2.5"></rect>
      <rect class="led led-2" x="97.5" y="124" width="5" height="54" rx="2.5"></rect>
      <rect class="led led-3" x="22" y="97.5" width="54" height="5" rx="2.5"></rect>
    </g>
  </svg>
`}
            </div>`:H}
      `}else s=q`
        <div
          class=${o?r:"leds-off"}
          style=${me(i)}
        >
          ${B`
  <svg
    class="charger-svg"
    viewBox="0 0 240 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Lektri.co charger"
  >
    <defs>
      <linearGradient id="lkt-body" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#3a3d40"></stop>
        <stop offset="0.5" stop-color="#26282a"></stop>
        <stop offset="1" stop-color="#1b1c1e"></stop>
      </linearGradient>
      <radialGradient id="lkt-sheen" cx="0.3" cy="0.2" r="1">
        <stop offset="0" stop-color="#ffffff" stop-opacity="0.10"></stop>
        <stop offset="0.6" stop-color="#ffffff" stop-opacity="0.02"></stop>
        <stop offset="1" stop-color="#ffffff" stop-opacity="0"></stop>
      </radialGradient>
    </defs>

    <rect x="10" y="10" width="220" height="220" rx="42"
      fill="url(#lkt-body)" stroke="#0d0d0e" stroke-width="2"></rect>
    <rect x="10" y="10" width="220" height="220" rx="42"
      fill="url(#lkt-sheen)"></rect>

    <!-- LED cross: top / right / bottom / left -->
    <g class="leds">
      <rect class="led led-0" x="117.5" y="42" width="5" height="54" rx="2.5"></rect>
      <rect class="led led-1" x="144" y="117.5" width="54" height="5" rx="2.5"></rect>
      <rect class="led led-2" x="117.5" y="144" width="5" height="54" rx="2.5"></rect>
      <rect class="led led-3" x="42" y="117.5" width="54" height="5" rx="2.5"></rect>
    </g>

    <text x="120" y="216" text-anchor="middle" class="brand-text">LEKTRI.CO</text>
  </svg>
`}
        </div>
      `;return q`
      <div
        class="image-wrap"
        @click=${()=>this._moreInfo(this._config.entity)}
      >
        ${s}
      </div>
    `}_substatusText(){if(this._config.substatus_entity){const e=this.hass.states[this._config.substatus_entity];return e&&e.state&&!["unknown","unavailable"].includes(e.state)?e.state:void 0}if(!1===this._config.substatus_from_actions)return;const e=(this._config.actions||[]).filter(e=>e.entity&&!1!==e.substatus&&"on"===this.hass.states[e.entity]?.state);return e.length?e.map(e=>"string"==typeof e.substatus?e.substatus:e.text||e.name).join(" · "):void 0}_renderStatus(e,t,{showLocation:i=!0}={}){const r=this._config.name||e.attributes.friendly_name,n=i?this._config.location:void 0,o=this._substatusText();return q`
      <div class="status" @click=${()=>this._moreInfo(this._config.entity)}>
        ${!1!==this._config.show_name?q`<div class="name">
              ${r}${n?` — ${n}`:""}
            </div>`:H}
        <div
          class=${ue({state:!0,"state-error":"error"===t,"state-charging":"charging"===t})}
        >
          ${this._stateText(t)}
        </div>
        ${o?q`<div class="substatus">${o}</div>`:H}
      </div>
    `}_renderErrors(e){return q`
      <div class="error-banner">
        <div class="title">
          <ha-icon icon="mdi:alert-circle"></ha-icon>
          ${this._t("errors")}
        </div>
        <ul>
          ${e.map(e=>q`<li
              @click=${()=>this._moreInfo(e.entity_id)}
            >
              ${this._errorName(this._errorKeyOf(e.entity_id),e)}
            </li>`)}
        </ul>
      </div>
    `}static QUICK_ACTION_DEFAULTS=["start","stop","authentication","lock"];static QUICK_ACTION_EXCLUDED_DEVICE_IDS=["schedule_override","reboot","meter_reboot"];_quickActionCandidates(e){const t=[];this._stateObj("charge_start")&&t.push({id:"start",render:()=>q`
          <button
            class="qa-button"
            .disabled=${"charging"===e}
            @click=${()=>this._pressButton("charge_start")}
          >
            <ha-icon icon="mdi:play"></ha-icon>${this._t("start")}
          </button>
        `});this._stateObj("charge_stop")&&t.push({id:"stop",render:()=>q`
          <button
            class="qa-button"
            .disabled=${"charging"!==e&&"paused"!==e}
            @click=${()=>this._pressButton("charge_stop")}
          >
            <ha-icon icon="mdi:stop"></ha-icon>${this._t("stop")}
          </button>
        `});const i=this._stateObj("authentication");i&&t.push({id:"authentication",render:()=>q`
          <button
            class=${ue({"qa-button":!0,active:"on"===i.state})}
            @click=${()=>this._toggleSwitch("authentication")}
          >
            <ha-icon icon="mdi:fingerprint"></ha-icon>${this._t("authentication")}
          </button>
        `});const r=this._stateObj("lock");r&&t.push({id:"lock",render:()=>q`
          <button
            class=${ue({"qa-button":!0,active:"on"===r.state})}
            @click=${()=>this._toggleSwitch("lock")}
          >
            <ha-icon
              icon=${"on"===r.state?"mdi:lock":"mdi:lock-open-outline"}
            ></ha-icon
            >${this._t("lock")}
          </button>
        `});for(const e of this._deviceActions())Te.QUICK_ACTION_EXCLUDED_DEVICE_IDS.includes(e.id)||t.push({id:e.id,render:()=>q`
          <button
            class=${ue({"qa-button":!0,active:!!e.active})}
            @click=${()=>{e.confirm&&!window.confirm(`${e.text}?`)||e.run()}}
          >
            <ha-icon icon=${e.icon}></ha-icon>${e.text}
          </button>
        `});return(this._config.actions||[]).forEach((e,i)=>{const r=e.entity?this.hass.states[e.entity]:void 0,n="on"===r?.state;t.push({id:e.id||`custom:${i}`,render:()=>q`
          <button
            class=${ue({"qa-button":!0,active:n})}
            @click=${()=>this._runAction(e)}
          >
            ${e.icon?q`<ha-icon icon=${e.icon}></ha-icon>`:H}${e.text||e.name||e.entity}
          </button>
        `})}),t}_renderQuickActions(e){const t=this._quickActionCandidates(e),i=this._config.quick_actions,r=Array.isArray(i)?i.map(e=>t.find(t=>t.id===e)).filter(Boolean).slice(0,4):t.filter(e=>Te.QUICK_ACTION_DEFAULTS.includes(e.id));return r.length?q`<div class="quick-actions">
      ${r.map(e=>e.render())}
    </div>`:H}_computeSections(e=!1){const t=[];if(e||!1===this._config.show_parameters||t.push({id:"parameters",icon:"mdi:speedometer",title:this._config.section_titles?.parameters||this._t("parameters"),body:()=>this._renderParameters()}),e||!1===this._config.show_info||t.push({id:"info",icon:"mdi:information-outline",title:this._config.section_titles?.info||this._t("info"),body:()=>this._renderInfoList()}),!1!==this._config.show_actions){const e=this._renderActionsGrid();e!==H&&t.push({id:"actions",icon:"mdi:gesture-tap-button",title:this._config.section_titles?.actions||this._t("actions"),body:()=>e})}return t}_renderSectionToggleBar(e,t=!1){return e.length?q`
      <div
        class=${ue({"section-toggle-bar":!0,horizontal:t})}
      >
        ${e.map(e=>q`
            <button
              class=${ue({"section-toggle":!0,active:!!this._openSections[e.id]})}
              title=${e.title}
              aria-label=${e.title}
              @click=${()=>this._toggleSection(e.id)}
            >
              <ha-icon icon=${e.icon}></ha-icon>
            </button>
          `)}
      </div>
    `:H}_renderSectionBodies(e){const t=e.filter(e=>this._openSections[e.id]);return t.length?q`
      <div class="sections">
        ${t.map((e,t)=>q`
            <div
              class=${ue({"section-body":!0,divider:t>0})}
            >
              ${e.body()}
            </div>
          `)}
      </div>
    `:H}_renderSlider(e,t,i,r){const n=this._stateObj(e);if(!n)return H;const o=n.attributes,s=Number(o.min??0),a=Number(o.max??100),c=Number(o.step??1),l=Number(n.state),d=this._pendingSlider[e]??(Number.isNaN(l)?s:l),h=r||o.unit_of_measurement||"",u=(i||[]).filter(e=>e>=s&&e<=a);return q`
      <div class="slider-row">
        <div class="slider-head">
          <span>${this._t(t)}</span>
          <span class="val">${d}${h?` ${h}`:""}</span>
        </div>
        <input
          type="range"
          min=${s}
          max=${a}
          step=${c}
          .value=${String(d)}
          @input=${t=>this._sliderInput(e,t)}
          @change=${t=>this._sliderChange(e,t)}
        />
        ${u.length?q`<div class="presets">
              ${u.map(t=>q`
                  <button
                    class=${ue({"preset-chip":!0,active:Number(d)===t})}
                    @click=${()=>this._setNumber(e,t)}
                  >
                    ${t}${h?` ${h}`:""}
                  </button>
                `)}
            </div>`:H}
      </div>
    `}_renderParameters(){const e=this._stateObj("authentication"),t=this._stateObj("lock"),i=this._stateObj("force_single_phase");return q`
      ${this._renderSlider("dynamic_limit","dynamic_limit",this._config.current_presets??Ce,"A")}
      ${this._renderSlider("led_brightness","led_brightness",this._config.brightness_presets??ze,"%")}
      <div class="toggle-list">
        ${e?this._renderToggle("authentication",e,"mdi:fingerprint"):H}
        ${t?this._renderToggle("lock",t,"mdi:lock-outline"):H}
        ${i?this._renderToggle("force_single_phase",i,"mdi:sine-wave"):H}
      </div>
    `}_renderToggle(e,t,i){return q`
      <div class="toggle-row">
        <ha-icon icon=${i}></ha-icon>
        <span class="grow" @click=${()=>this._moreInfo(t.entity_id)}>
          ${this._t(e)}
        </span>
        <ha-switch
          .checked=${"on"===t.state}
          @change=${()=>this._toggleSwitch(e)}
        ></ha-switch>
      </div>
    `}_renderInfoList(){const e=[{entity:"installation_current",icon:"mdi:gauge"},{entity:"lifetime_energy",icon:"mdi:counter"},{entity:"limit_reason",icon:"mdi:information-outline"},{entity:"temperature",icon:"mdi:thermometer"}];this._stateObj("breaker_current")&&e.push({entity:"breaker_current",icon:"mdi:fuse"}),this._stateObj("meter_power")&&e.push({entity:"meter_power",icon:"mdi:flash"});const t=(this._config.info_items??e).map(e=>{const t="string"==typeof e?{entity:e}:e,i=this._stateObj(t.entity);if(!i)return H;const r=t.label||(fe.en.ui[t.entity]?this._t(t.entity):i.attributes.friendly_name);return q`
          <div
            class="info-row"
            @click=${()=>this._moreInfo(i.entity_id)}
          >
            <ha-icon icon=${t.icon||"mdi:information-outline"}></ha-icon>
            <span class="name">${r}</span>
            <span class="val">${this._fmt(i)}</span>
          </div>
        `}).filter(e=>e!==H),i=this._stateObj("update");return i&&t.push(q`
        <div
          class="info-row"
          @click=${()=>this._moreInfo(i.entity_id)}
        >
          <ha-icon icon="mdi:chip"></ha-icon>
          <span class="name">${this._t("firmware")}</span>
          <span class="val">
            ${i.attributes.installed_version||"—"}
            ${"on"===i.state?" ⬆":""}
          </span>
        </div>
      `),q`<div class="info-list">${t}</div>`}_deviceActions(){if(!1===this._config.show_device_actions)return[];const e=[];this._stateObj("schedule_override")&&e.push({id:"schedule_override",text:this._t("schedule_override"),icon:"mdi:calendar-clock",run:()=>this._pressButton("schedule_override")});const t=this._stateObj("force_single_phase");t&&e.push({id:"force_single_phase",text:this._t("force_single_phase"),icon:"mdi:sine-wave",active:"on"===t.state,run:()=>this._toggleSwitch("force_single_phase")});const i=this._stateObj("lb_mode");if(i&&Array.isArray(i.attributes.options))for(const t of i.attributes.options)e.push({id:`lb_mode:${t}`,text:`${this._t("lb_mode")}: ${t}`,icon:"mdi:scale-balance",active:i.state===t,run:()=>this.hass.callService("select","select_option",{entity_id:i.entity_id,option:t})});const r=this._stateObj("reboot");r&&e.push({id:"reboot",text:this._t("reboot"),icon:"mdi:restart",confirm:!0,run:()=>this._pressButton("reboot")});const n=this._stateObj("meter_reboot");return n&&n.entity_id!==r?.entity_id&&e.push({id:"meter_reboot",text:this._t("meter_reboot"),icon:"mdi:restart",confirm:!0,run:()=>this._pressButton("meter_reboot")}),e}_renderActionsGrid(){const e=this._config.actions||[],t=this._deviceActions();if(!e.length&&!t.length)return H;const i=e.length>0&&t.length>0;return q`
      <div class="actions-grid">
        ${i?q`<div class="actions-caption">
              ${this._t("device_actions")}
            </div>`:H}
        ${t.map(e=>q`
            <button
              class=${ue({"action-chip":!0,device:!0,active:!!e.active})}
              @click=${()=>{e.confirm&&!window.confirm(`${e.text}?`)||e.run()}}
            >
              <ha-icon icon=${e.icon}></ha-icon>
              ${e.text}
            </button>
          `)}
        ${i?q`<div class="actions-caption">
              ${this._t("custom_actions")}
            </div>`:H}
        ${e.map(e=>{const t=e.entity?this.hass.states[e.entity]:void 0;return q`
            <button
              class=${ue({"action-chip":!0,active:"on"===t?.state})}
              @click=${()=>this._runAction(e)}
            >
              ${e.icon?q`<ha-icon icon=${e.icon}></ha-icon>`:H}
              ${e.text||e.name||e.entity}
            </button>
          `})}
      </div>
    `}_renderStats(e,t){const i=[{entity:"session_energy",label:this._t("energy")},{entity:"charging_time",label:this._t("charging_time")},{entity:"temperature",label:this._t("temperature")}],r=this._config.stats||{};let n=Array.isArray(r)?r:r[e]||r.default||i;return"error"===e&&t.length&&!r.error&&(n=t.map(e=>({entity:e.entity_id,label:this._errorName(this._errorKeyOf(e.entity_id),e),value:"⚠"}))),q`
      <div class="stats">
        ${n.map(e=>{const t="string"==typeof e?{entity:e}:e,i=this._stateObj(t.entity);if(!i)return H;const r=t.label||(fe.en.ui[t.entity]?this._t(t.entity):i.attributes.friendly_name);return q`
            <div
              class="stat"
              @click=${()=>this._moreInfo(i.entity_id)}
            >
              <div class="value">${t.value||this._fmt(i)}</div>
              <div class="label">${r}</div>
            </div>
          `})}
      </div>
    `}}customElements.get(xe)||customElements.define(xe,Te),window.customCards=window.customCards||[],window.customCards.some(e=>e.type===xe)||window.customCards.push({type:xe,name:"Lektri.co Charger Card",description:"Card for Lektri.co EV chargers (1P7K / One / 3P22K / Tri) with animated status LEDs.",preview:!0}),console.info("%c LEKTRICO-CHARGER-CARD %c v1.5.3 ","color: white; background: #1b1c1e; font-weight: 700;","color: #4caf50; background: #26282a; font-weight: 700;");
