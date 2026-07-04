const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:n,defineProperty:a,getOwnPropertyDescriptor:c,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:h}=Object,p=globalThis,_=p.trustedTypes,u=_?_.emptyScript:"",m=p.reactiveElementPolyfillSupport,f=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!n(t,e),y={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&a(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=h(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:g).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=s;const o=r.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const o=this.constructor;if(!1===s&&(r=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??v)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[f("elementProperties")]=new Map,b[f("finalized")]=new Map,m?.({ReactiveElement:b}),(p.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,x=t=>t,w=$.trustedTypes,A=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+S,C=`<${E}>`,O=document,z=()=>O.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,T="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,j=/>/g,I=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,U=/"/g,H=/^(?:script|style|textarea|title)$/i,q=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),D=q(1),B=q(2),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),K=new WeakMap,G=O.createTreeWalker(O,129);function F(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=M;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(n.lastIndex=d,c=n.exec(i),null!==c);)d=n.lastIndex,n===M?"!--"===c[1]?n=L:void 0!==c[1]?n=j:void 0!==c[2]?(H.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=I):void 0!==c[3]&&(n=I):n===I?">"===c[0]?(n=r??M,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?I:'"'===c[3]?U:R):n===U||n===R?n=I:n===L||n===j?n=M:(n=I,r=void 0);const h=n===I&&t[e+1].startsWith("/>")?" ":"";o+=n===M?i+C:l>=0?(s.push(a),i.slice(0,l)+k+i.slice(l)+S+h):i+S+(-2===l?e:h)}return[F(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[c,l]=Z(t,e);if(this.el=J.createElement(c,i),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=G.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=l[o++],i=s.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(H.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],z()),G.nextNode(),a.push({type:2,index:++r});s.append(t[e],z())}}}else if(8===s.nodeType)if(s.data===E)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===W)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=P(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);G.currentNode=s;let r=G.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new X(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new rt(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=G.nextNode(),o++)}return G.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),P(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(F(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Y(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new J(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new X(this.O(z()),this.O(z()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=Q(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Q(this,s[i+n],e,n),a===W&&(a=this._$AH[n]),o||=!P(a)||a!==this._$AH[n],a===V?t=V:t!==V&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends tt{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??V)===W)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const ot=$.litHtmlPolyfillSupport;ot?.(J,X),($.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;let at=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new X(e.insertBefore(z(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const ct=nt.litElementPolyfillSupport;ct?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const lt=1,dt=t=>(...e)=>({_$litDirective$:t,values:e});let ht=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const pt=dt(class extends ht{constructor(t){if(super(t),t.type!==lt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return W}}),_t="important",ut=" !"+_t,mt=dt(class extends ht{constructor(t){if(super(t),t.type!==lt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const s=e[t];if(null!=s){this.ft.add(t);const e="string"==typeof s&&s.endsWith(ut);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?_t:""):i[t]=s}}return W}});var ft=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(s,t,i)})`
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
  /* paused: only the top bar stays lit, steady */
  .leds.anim-top .led {
    opacity: 0.08;
    filter: none;
  }
  .leds.anim-top .led-0 {
    opacity: 1;
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

  .status {
    text-align: center;
    margin-top: 8px;
    cursor: pointer;
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

  /* ---------- accordion sections ---------- */

  .sections {
    margin-top: 14px;
  }
  .section {
    border-top: 1px solid var(--divider-color);
  }
  .section:last-child {
    border-bottom: 1px solid var(--divider-color);
  }
  .section-header {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px 2px;
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .section-header ha-icon {
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
  }
  .section-header .chevron {
    margin-inline-start: auto;
    transition: transform 0.2s ease;
  }
  .section-header .chevron.open {
    transform: rotate(180deg);
  }
  .section-body {
    padding: 2px 2px 14px;
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
`;const gt={en:{ui:{parameters:"Parameters",info:"Information",actions:"Actions",start:"Start",stop:"Stop",reboot:"Reboot",authentication:"Authentication",lock:"Lock",dynamic_limit:"Charging current",led_brightness:"LED brightness",energy:"Energy",charging_time:"Charging time",temperature:"Temperature",power:"Power",voltage:"Voltage",current:"Current",installation_current:"Installation current",lifetime_energy:"Lifetime energy",limit_reason:"Limit reason",firmware:"Firmware",errors:"Active errors",current_l1:"Current L1",current_l2:"Current L2",current_l3:"Current L3",voltage_l1:"Voltage L1",voltage_l2:"Voltage L2",voltage_l3:"Voltage L3",schedule_override:"Schedule override",force_single_phase:"Single phase",lb_mode:"Load balancing",breaker_current:"Breaker current",meter_power:"Meter power",meter_reboot:"Meter reboot",device_actions:"Device",custom_actions:"Custom",entity_missing:"Entity not found"},states:{available:"Unplugged",connected:"Connected",need_auth:"Waiting for authentication",charging:"Charging",error:"Error",locked:"Locked",paused:"Paused",paused_by_scheduler:"Paused by scheduler",updating_firmware:"Updating firmware",unavailable:"Unavailable",unknown:"Unknown"},errors:{ev_error:"Vehicle error",ev_diode_short:"Vehicle communication error",overheating:"Overheating",thermal_throttling:"Thermal throttling",metering_error:"Metering error",overcurrent:"Overcurrent",overvoltage:"Overvoltage",undervoltage:"Undervoltage",rcd_error:"RCD error",relay_contacts_welded:"Relay contacts welded",state_e_activated:"Vehicle error",overtemp:"Overheating",critical_temp:"Critical temperature",meter_fault:"Metering error",cp_diode_failure:"Vehicle communication error",contactor_failure:"Contactor failure"},editor:{entity:"Charger state sensor (required)",name:"Name",location:"Location",meter_entity:"Energy meter entity (optional)",substatus_entity:"Substatus entity (optional)",compact:"Compact view",show_leds:"Show LEDs",show_stats:"Show stats",show_quick_actions:"Show quick actions",show_name:"Show name",language:"Language",image:"Custom image (optional path)"}},it:{ui:{parameters:"Parametri",info:"Informazioni",actions:"Azioni",start:"Avvia",stop:"Ferma",reboot:"Riavvia",authentication:"Autenticazione",lock:"Blocco",dynamic_limit:"Corrente di ricarica",led_brightness:"Luminosità LED",energy:"Energia",charging_time:"Tempo ricarica",temperature:"Temperatura",power:"Potenza",voltage:"Tensione",current:"Corrente",installation_current:"Corrente di installazione",lifetime_energy:"Energia erogata",limit_reason:"Motivo limitazione",firmware:"Firmware",errors:"Errori attivi",current_l1:"Corrente L1",current_l2:"Corrente L2",current_l3:"Corrente L3",voltage_l1:"Tensione L1",voltage_l2:"Tensione L2",voltage_l3:"Tensione L3",schedule_override:"Ignora programmazione",force_single_phase:"Monofase",lb_mode:"Bilanciamento",breaker_current:"Corrente interruttore",meter_power:"Potenza meter",meter_reboot:"Riavvio meter",device_actions:"Dispositivo",custom_actions:"Personalizzate",entity_missing:"Entità non trovata"},states:{available:"Scollegato",connected:"Connesso",need_auth:"In attesa di autenticazione",charging:"In carica",error:"Errore",locked:"Bloccato",paused:"In pausa",paused_by_scheduler:"In pausa (programmata)",updating_firmware:"Aggiornamento firmware",unavailable:"Non disponibile",unknown:"Sconosciuto"},errors:{ev_error:"Errore veicolo",ev_diode_short:"Errore comunicazione veicolo",overheating:"Surriscaldamento",thermal_throttling:"Limitazione termica",metering_error:"Errore misuratore",overcurrent:"Sovracorrente",overvoltage:"Sovratensione",undervoltage:"Sottotensione",rcd_error:"Errore RCD",relay_contacts_welded:"Contatti relè incollati",state_e_activated:"Errore veicolo",overtemp:"Surriscaldamento",critical_temp:"Temperatura critica",meter_fault:"Errore misuratore",cp_diode_failure:"Errore comunicazione veicolo",contactor_failure:"Errore contattore"},editor:{entity:"Sensore stato del charger (obbligatorio)",name:"Nome",location:"Posizione",meter_entity:"Entità energy meter (opzionale)",substatus_entity:"Entità sottostato (opzionale)",compact:"Vista compatta",show_leds:"Mostra LED",show_stats:"Mostra statistiche",show_quick_actions:"Mostra azioni rapide",show_name:"Mostra nome",language:"Lingua",image:"Immagine personalizzata (percorso, opzionale)"}}},vt=t=>{const e=(t||"en").split("-")[0].toLowerCase();return gt[e]?e:"en"},yt=(t,e,i)=>gt[t]?.[e]?.[i]??gt.en[e]?.[i]??i,bt={compact:!1,show_leds:!0,show_stats:!0,show_quick_actions:!0,show_name:!0},$t=[{name:"entity",required:!0,selector:{entity:{domain:"sensor"}}},{name:"name",selector:{text:{}}},{name:"location",selector:{text:{}}},{name:"substatus_entity",selector:{entity:{}}},{name:"meter_entity",selector:{entity:{}}},{name:"",type:"grid",schema:[{name:"compact",selector:{boolean:{}}},{name:"show_leds",selector:{boolean:{}}},{name:"show_stats",selector:{boolean:{}}},{name:"show_quick_actions",selector:{boolean:{}}},{name:"show_name",selector:{boolean:{}}}]},{name:"language",selector:{select:{mode:"dropdown",options:[{value:"",label:"Auto"},{value:"en",label:"English"},{value:"it",label:"Italiano"}]}}},{name:"image",selector:{text:{}}}];class xt extends at{static properties={hass:{attribute:!1},_config:{state:!0}};setConfig(t){this._config=t}get _lang(){return vt(this.hass?.language)}_computeLabel=t=>yt(this._lang,"editor",t.name);render(){if(!this.hass||!this._config)return V;const t={...bt,...this._config};return D`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${$t}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}_valueChanged(t){t.stopPropagation();const e={...t.detail.value};for(const[t,i]of Object.entries(bt))e[t]===i&&delete e[t];for(const t of["name","location","substatus_entity","meter_entity","image","language"])""===e[t]&&delete e[t];((t,e,i={})=>{const s=new Event(e,{bubbles:!0,composed:!0});s.detail=i,t.dispatchEvent(s)})(this,"config-changed",{config:e})}}customElements.get("lektrico-charger-card-editor")||customElements.define("lektrico-charger-card-editor",xt);const wt="lektrico-charger-card",At={available:{color:"#4caf50",animation:"none"},connected:{color:"#2196f3",animation:"none"},need_auth:{color:"#2196f3",animation:"pulse"},charging:{color:"#ffffff",animation:"spin"},paused:{color:"#ffffff",animation:"top"},paused_by_scheduler:{color:"#ffffff",animation:"top"},locked:{color:"#ff5722",animation:"none"},error:{color:"#f44336",animation:"pulse"},updating_firmware:{color:"#ab47bc",animation:"pulse"},unavailable:{color:"#616161",animation:"none"},unknown:{color:"#616161",animation:"none"}},kt={state:{domain:"sensor",keys:["state"],suffixes:["_state","_stato"]},charging_time:{domain:"sensor",keys:["charging_time"],suffixes:["_charging_time","_tempo_ricarica","_tempo_di_ricarica"]},session_energy:{domain:"sensor",keys:["session_energy","energy"],suffixes:["_session_energy","_energia","_energia_sessione","_energy"]},lifetime_energy:{domain:"sensor",keys:["lifetime_energy"],suffixes:["_lifetime_energy","_energia_erogata"]},power:{domain:"sensor",keys:["instant_power","power"],suffixes:["_instant_power","_power","_potenza"],device_class:"power"},voltage:{domain:"sensor",keys:["voltage"],suffixes:["_voltage","_tensione"],device_class:"voltage"},current:{domain:"sensor",keys:["current"],suffixes:["_current","_corrente"],device_class:"current"},voltage_l1:{domain:"sensor",keys:["voltage_l1"],suffixes:["_voltage_l1","_tensione_l1"]},voltage_l2:{domain:"sensor",keys:["voltage_l2"],suffixes:["_voltage_l2","_tensione_l2"]},voltage_l3:{domain:"sensor",keys:["voltage_l3"],suffixes:["_voltage_l3","_tensione_l3"]},current_l1:{domain:"sensor",keys:["current_l1"],suffixes:["_current_l1","_corrente_l1"]},current_l2:{domain:"sensor",keys:["current_l2"],suffixes:["_current_l2","_corrente_l2"]},current_l3:{domain:"sensor",keys:["current_l3"],suffixes:["_current_l3","_corrente_l3"]},installation_current:{domain:"sensor",keys:["installation_current"],suffixes:["_installation_current","_corrente_di_installazione"]},limit_reason:{domain:"sensor",keys:["limit_reason"],suffixes:["_limit_reason","_motivo_limitazione"]},temperature:{domain:"sensor",keys:["temperature"],suffixes:["_temperature","_temperatura"],device_class:"temperature"},dynamic_limit:{domain:"number",keys:["dynamic_limit"],suffixes:["_dynamic_limit","_limite_dinamico"]},led_brightness:{domain:"number",keys:["led_max_brightness"],suffixes:["_led_max_brightness","_led_brightness","_luminosita_led","_luminosita_massima_led"]},authentication:{domain:"switch",keys:["authentication"],suffixes:["_authentication","_autenticazione"]},lock:{domain:"switch",keys:["lock"],suffixes:["_lock","_blocca","_blocco"]},charge_start:{domain:"button",keys:["charge_start"],suffixes:["_charge_start","_avvia_ricarica"]},charge_stop:{domain:"button",keys:["charge_stop"],suffixes:["_charge_stop","_ferma_ricarica","_arresta_ricarica"]},reboot:{domain:"button",keys:["reboot"],suffixes:["_reboot","_restart","_riavvia"]},schedule_override:{domain:"button",keys:["charging_schedule_override"],suffixes:["_charging_schedule_override","_schedule_override"]},force_single_phase:{domain:"switch",keys:["force_single_phase"],suffixes:["_force_single_phase","_forza_monofase"]},update:{domain:"update",keys:["firmware"],suffixes:["_firmware"]}},St={lb_mode:{domain:"select",keys:["lb_mode"],suffixes:["_lb_mode","_load_balancing_mode"]},breaker_current:{domain:"sensor",keys:["breaker_current"],suffixes:["_breaker_current","_corrente_interruttore"]},meter_power:{domain:"sensor",keys:["power"],suffixes:["_power","_potenza"],device_class:"power"},meter_reboot:{domain:"button",keys:["reboot"],suffixes:["_reboot","_restart","_riavvia"]}},Et=["ev_error","ev_diode_short","overheating","thermal_throttling","metering_error","overcurrent","overvoltage","undervoltage","rcd_error","relay_contacts_welded","state_e_activated","overtemp","critical_temp","meter_fault","cp_diode_failure","contactor_failure"],Ct={slowest:6,fastest:2},Ot=[6,10,13,16,20,25,32],zt=[10,25,50,75,100];class Pt extends at{static styles=ft;static properties={hass:{attribute:!1},_config:{state:!0},_openSection:{state:!0},_pendingSlider:{state:!0}};constructor(){super(),this._openSection=null,this._pendingSlider={},this._roles=null,this._rolesKey=null}setConfig(t){if(!t.entity)throw new Error("Please define the charger state entity, e.g. entity: sensor.1p7k_state");this._config=t,this._roles=null,this._rolesKey=null,this._meterRoles=null,this._meterKey=null}getCardSize(){return this._config?.compact?4:8}static getStubConfig(t){const e=t?.entities||{},i=Object.values(e).find(t=>"lektrico"===t.platform&&"state"===t.translation_key);return{entity:i?i.entity_id:"sensor.1p7k_state"}}static getConfigElement(){return document.createElement("lektrico-charger-card-editor")}get _lang(){return vt(this._config.language||this.hass?.language)}_t(t){return yt(this._lang,"ui",t)}_stateText(t){const e=this._config.state_text||{};return e[t]?e[t]:yt(this._lang,"states",t)}_errorName(t,e){return(gt[this._lang]?.errors?.[t]??gt.en.errors?.[t])||e?.attributes.friendly_name||t}_matchRoles(t,e,i,s){const r=this.hass,o=Object.entries(t),n={},a=new Set,c=(t,e)=>{n[t]=e,a.add(e)};for(const[t]of o)e[t]&&c(t,e[t]);for(const[t,e]of o){if(n[t]||!i.length)continue;const s=i.find(t=>!a.has(t.entity_id)&&t.entity_id.startsWith(`${e.domain}.`)&&e.keys?.includes(t.translation_key));s&&c(t,s.entity_id)}for(const[t,e]of o)if(!n[t])for(const i of e.suffixes||[]){const o=`${e.domain}.${s}${i}`;if(!a.has(o)&&r.states[o]){c(t,o);break}}const l=o.flatMap(([,t])=>t.suffixes||[]);for(const[t,e]of o){if(n[t])continue;const o=i.length?i.map(t=>t.entity_id):Object.keys(r.states).filter(t=>t.startsWith(`${e.domain}.${s}`));t:for(const i of e.suffixes||[])for(const s of o){if(a.has(s)||!s.startsWith(`${e.domain}.`)||!s.endsWith(i))continue;if(!l.some(t=>t.length>i.length&&!(e.suffixes||[]).includes(t)&&s.endsWith(t))){c(t,s);break t}}}for(const[t,e]of o){if(n[t]||!e.device_class||!i.length)continue;const s=i.filter(t=>!a.has(t.entity_id)&&t.entity_id.startsWith(`${e.domain}.`)&&r.states[t.entity_id]?.attributes.device_class===e.device_class);1===s.length&&c(t,s[0].entity_id)}return n}_deviceEntitiesOf(t){const e=this.hass.entities||{},i=e[t]?.device_id;return{deviceId:i,deviceEntities:i?Object.values(e).filter(t=>t.device_id===i):[]}}_discover(){const t=this._config.entity,{deviceId:e,deviceEntities:i}=this._deviceEntitiesOf(t),s=`${t}|${e||"nodevice"}`;if(this._roles&&this._rolesKey===s)return this._roles;const r=this.hass,o=this._config.entities||{},n=t.split(".")[1].replace(/_(state|stato)$/,""),a=this._matchRoles(kt,o,i,n);a.state=a.state||t;let c=[];return c=Array.isArray(o.errors)?o.errors:i.length?i.filter(t=>t.entity_id.startsWith("binary_sensor.")&&(Et.includes(t.translation_key)||Et.some(e=>t.entity_id.endsWith(`_${e}`)))).map(t=>t.entity_id):Et.map(t=>`binary_sensor.${n}_${t}`).filter(t=>r.states[t]),a.errors=c,this._roles=a,this._rolesKey=s,a}_discoverMeter(){const t=this._config.meter_entity;if(!t)return{};const{deviceId:e,deviceEntities:i}=this._deviceEntitiesOf(t),s=`${t}|${e||"nodevice"}`;if(this._meterRoles&&this._meterKey===s)return this._meterRoles;let r=t.split(".")[1];for(const t of Object.values(St))for(const e of t.suffixes||[])if(r.endsWith(e)){r=r.slice(0,-e.length);break}const o=this._matchRoles(St,{},i,r);return this._meterRoles=o,this._meterKey=s,o}_isThreePhase(){const t=this._discover();return Boolean(t.current_l1||t.voltage_l1)}_stateObj(t){if(!t)return;if(t.includes("."))return this.hass.states[t];const e=this._discover()[t]??this._discoverMeter()[t];return e?this.hass.states[e]:void 0}_errorKeyOf(t){const e=Et.find(e=>t.endsWith(`_${e}`));return e||(this.hass.entities?.[t]?.translation_key||t)}_fmt(t){if(!t)return"—";const{state:e,attributes:i}=t;if("unavailable"===e||"unknown"===e)return"—";if("duration"===i.device_class&&!Number.isNaN(Number(e))){const t=Math.round(Number(e));return`${String(Math.floor(t/3600)).padStart(2,"0")}:${String(Math.floor(t%3600/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}if("function"==typeof this.hass.formatEntityState)try{return this.hass.formatEntityState(t)}catch(t){}return`${e}${i.unit_of_measurement?` ${i.unit_of_measurement}`:""}`}_moreInfo(t){t&&((t,e,i={})=>{const s=new Event(e,{bubbles:!0,composed:!0});s.detail=i,t.dispatchEvent(s)})(this,"hass-more-info",{entityId:t})}_pressButton(t){const e=this._stateObj(t);e&&this.hass.callService("button","press",{entity_id:e.entity_id})}_toggleSwitch(t){const e=this._stateObj(t);e&&this.hass.callService("switch","toggle",{entity_id:e.entity_id})}_setNumber(t,e){const i=this._stateObj(t);i&&this.hass.callService("number","set_value",{entity_id:i.entity_id,value:e})}_sliderInput(t,e){this._pendingSlider={...this._pendingSlider,[t]:Number(e.target.value)}}_sliderChange(t,e){const i=Number(e.target.value),s={...this._pendingSlider};delete s[t],this._pendingSlider=s,this._setNumber(t,i)}_runAction(t){if(!t.service)return void(t.entity&&this._moreInfo(t.entity));if(t.confirm&&!window.confirm(!0===t.confirm?`${t.text}?`:t.confirm))return;const[e,i]=t.service.split("."),s={...t.service_data||t.data||{}};!t.entity||s.entity_id||t.target||(s.entity_id=t.entity),this.hass.callService(e,i,s,t.target)}_toggleSection(t){this._openSection=this._openSection===t?null:t}render(){if(!this.hass||!this._config)return V;const t=this._discover(),e=this.hass.states[t.state];if(!e)return D`<ha-card>
        <div style="padding:16px;color:var(--error-color,#f44336)">
          ${this._t("entity_missing")}: ${t.state}
        </div>
      </ha-card>`;const i=e.state,s=!0===this._config.compact,r=(t.errors||[]).map(t=>this.hass.states[t]).filter(t=>t&&"on"===t.state);return D`
      <ha-card class=${pt({compact:s})}>
        ${s?this._renderCompactTop(e,i):D`${this._renderTop(i)}${this._renderStatus(e,i)}`}
        ${r.length?this._renderErrors(r):V}
        ${!1!==this._config.show_quick_actions?this._renderQuickActions(i):V}
        ${s?this._renderActionsGrid():this._renderSections()}
        ${!1!==this._config.show_stats?this._renderStats(i,r):V}
      </ha-card>
    `}_defaultInfoColumns(){return this._isThreePhase()?{left:[{entity:"current_l1",decimals:1},{entity:"current_l2",decimals:1},{entity:"current_l3",decimals:1},"dynamic_limit"],right:["voltage_l1","voltage_l2","voltage_l3","power"]}:{left:[{entity:"current",decimals:1},"dynamic_limit"],right:["voltage","power"]}}_renderTop(t){if(!1===this._config.show_image)return V;const e=this._defaultInfoColumns(),i=this._config.info_left??e.left,s=this._config.info_right??e.right;return D`
      <div class="top">
        <div class="side-info left">
          ${i.map(t=>this._renderInfoItem(t))}
        </div>
        ${this._renderImage(t)}
        <div class="side-info right">
          ${s.map(t=>this._renderInfoItem(t))}
        </div>
      </div>
    `}_renderCompactTop(t,e){const i=this._isThreePhase(),s=this._config.info_right??(i?[{entity:"current_l1",decimals:1},{entity:"current_l2",decimals:1},{entity:"current_l3",decimals:1},"dynamic_limit"]:[{entity:"current",decimals:1},"dynamic_limit","voltage"]);return D`
      <div class="compact-top">
        ${this._renderImage(e)}
        ${this._renderStatus(t,e,{showLocation:!1})}
        <div class="side-info right">
          ${s.map(t=>this._renderInfoItem(t))}
        </div>
      </div>
    `}_renderInfoItem(t){const e="string"==typeof t?{entity:t}:t,i=this._stateObj(e.entity);if(!i)return V;const s=e.label||(gt.en.ui[e.entity]?this._t(e.entity):i.attributes.friendly_name);let r;const o=Number(i.state);if(null==e.decimals||""===i.state||Number.isNaN(o)||"unavailable"===i.state||"unknown"===i.state)r=this._fmt(i);else{const t=i.attributes.unit_of_measurement;r=`${o.toFixed(e.decimals)}${t?` ${t}`:""}`}return D`
      <div
        class="info-item"
        @click=${()=>this._moreInfo(i.entity_id)}
      >
        <div class="value">
          ${e.icon?D`<ha-icon .icon=${e.icon}></ha-icon>`:V}
          ${r}
        </div>
        <div class="label">${s}</div>
      </div>
    `}_ledConfig(t){const e=this._config.led_states||{};return{...At[t]||At.unknown,...e[t]||{}}}_maxAmps(){const t=this._stateObj("dynamic_limit"),e=this._stateObj("installation_current");return Number(t?.attributes.max)||Number(e?.state)||32}_ledPeriod(){const t=this._stateObj("current"),e=this._stateObj("dynamic_limit");let i=Number(t?.state);i&&!Number.isNaN(i)||(i=Number(e?.state)||8);const{slowest:s,fastest:r}={...Ct,...this._config.led_spin||{}},o=this._maxAmps(),n=s-Math.min(i,o)/o*(s-r);return`${Math.max(n,r).toFixed(2)}s`}_renderImage(t){const e=this._ledConfig(t),i={"--led-color":e.color,"--led-period":this._ledPeriod()},s=`leds anim-${e.animation||"none"}`,r=this._config.image,o=!1!==this._config.show_leds;let n;if(r&&"svg"!==r){const t=this._config.led_overlay_position||{},e={...i,"--led-overlay-left":t.left,"--led-overlay-top":t.top,"--led-overlay-size":t.size};n=D`
        <img class="custom-image" src=${r} alt="charger" />
        ${o?D`<div class=${s} style=${mt(e)}>
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
            </div>`:V}
      `}else n=D`
        <div
          class=${o?s:"leds-off"}
          style=${mt(i)}
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
      `;return D`
      <div
        class="image-wrap"
        @click=${()=>this._moreInfo(this._config.entity)}
      >
        ${n}
      </div>
    `}_substatusText(){if(this._config.substatus_entity){const t=this.hass.states[this._config.substatus_entity];return t&&t.state&&!["unknown","unavailable"].includes(t.state)?t.state:void 0}if(!1===this._config.substatus_from_actions)return;const t=(this._config.actions||[]).filter(t=>t.entity&&!1!==t.substatus&&"on"===this.hass.states[t.entity]?.state);return t.length?t.map(t=>"string"==typeof t.substatus?t.substatus:t.text||t.name).join(" · "):void 0}_renderStatus(t,e,{showLocation:i=!0}={}){const s=this._config.name||t.attributes.friendly_name,r=i?this._config.location:void 0,o=this._substatusText();return D`
      <div class="status" @click=${()=>this._moreInfo(this._config.entity)}>
        ${!1!==this._config.show_name?D`<div class="name">
              ${s}${r?` — ${r}`:""}
            </div>`:V}
        <div
          class=${pt({state:!0,"state-error":"error"===e,"state-charging":"charging"===e})}
        >
          ${this._stateText(e)}
        </div>
        ${o?D`<div class="substatus">${o}</div>`:V}
      </div>
    `}_renderErrors(t){return D`
      <div class="error-banner">
        <div class="title">
          <ha-icon icon="mdi:alert-circle"></ha-icon>
          ${this._t("errors")}
        </div>
        <ul>
          ${t.map(t=>D`<li
              @click=${()=>this._moreInfo(t.entity_id)}
            >
              ${this._errorName(this._errorKeyOf(t.entity_id),t)}
            </li>`)}
        </ul>
      </div>
    `}_renderQuickActions(t){const e=this._stateObj("charge_start"),i=this._stateObj("charge_stop"),s=this._stateObj("authentication"),r=this._stateObj("lock"),o=[];return e&&o.push(D`
        <button
          class="qa-button"
          .disabled=${"charging"===t}
          @click=${()=>this._pressButton("charge_start")}
        >
          <ha-icon icon="mdi:play"></ha-icon>${this._t("start")}
        </button>
      `),i&&o.push(D`
        <button
          class="qa-button"
          .disabled=${"charging"!==t&&"paused"!==t}
          @click=${()=>this._pressButton("charge_stop")}
        >
          <ha-icon icon="mdi:stop"></ha-icon>${this._t("stop")}
        </button>
      `),s&&o.push(D`
        <button
          class=${pt({"qa-button":!0,active:"on"===s.state})}
          @click=${()=>this._toggleSwitch("authentication")}
        >
          <ha-icon icon="mdi:fingerprint"></ha-icon>${this._t("authentication")}
        </button>
      `),r&&o.push(D`
        <button
          class=${pt({"qa-button":!0,active:"on"===r.state})}
          @click=${()=>this._toggleSwitch("lock")}
        >
          <ha-icon
            icon=${"on"===r.state?"mdi:lock":"mdi:lock-open-outline"}
          ></ha-icon
          >${this._t("lock")}
        </button>
      `),o.length?D`<div class="quick-actions">${o}</div>`:V}_renderSections(){const t=this._renderActionsGrid(),e=[{id:"parameters",icon:"mdi:speedometer",title:this._config.section_titles?.parameters||this._t("parameters"),body:()=>this._renderParameters()},{id:"info",icon:"mdi:information-outline",title:this._config.section_titles?.info||this._t("info"),body:()=>this._renderInfoList()}];return t!==V&&e.push({id:"actions",icon:"mdi:gesture-tap-button",title:this._config.section_titles?.actions||this._t("actions"),body:()=>t}),D`
      <div class="sections">
        ${e.map(t=>D`
            <div class="section">
              <button
                class="section-header"
                @click=${()=>this._toggleSection(t.id)}
              >
                <ha-icon icon=${t.icon}></ha-icon>
                ${t.title}
                <ha-icon
                  class=${pt({chevron:!0,open:this._openSection===t.id})}
                  icon="mdi:chevron-down"
                ></ha-icon>
              </button>
              ${this._openSection===t.id?D`<div class="section-body">${t.body()}</div>`:V}
            </div>
          `)}
      </div>
    `}_renderSlider(t,e,i,s){const r=this._stateObj(t);if(!r)return V;const o=r.attributes,n=Number(o.min??0),a=Number(o.max??100),c=Number(o.step??1),l=Number(r.state),d=this._pendingSlider[t]??(Number.isNaN(l)?n:l),h=s||o.unit_of_measurement||"",p=(i||[]).filter(t=>t>=n&&t<=a);return D`
      <div class="slider-row">
        <div class="slider-head">
          <span>${this._t(e)}</span>
          <span class="val">${d}${h?` ${h}`:""}</span>
        </div>
        <input
          type="range"
          min=${n}
          max=${a}
          step=${c}
          .value=${String(d)}
          @input=${e=>this._sliderInput(t,e)}
          @change=${e=>this._sliderChange(t,e)}
        />
        ${p.length?D`<div class="presets">
              ${p.map(e=>D`
                  <button
                    class=${pt({"preset-chip":!0,active:Number(d)===e})}
                    @click=${()=>this._setNumber(t,e)}
                  >
                    ${e}${h?` ${h}`:""}
                  </button>
                `)}
            </div>`:V}
      </div>
    `}_renderParameters(){const t=this._stateObj("authentication"),e=this._stateObj("lock"),i=this._stateObj("force_single_phase");return D`
      ${this._renderSlider("dynamic_limit","dynamic_limit",this._config.current_presets??Ot,"A")}
      ${this._renderSlider("led_brightness","led_brightness",this._config.brightness_presets??zt,"%")}
      <div class="toggle-list">
        ${t?this._renderToggle("authentication",t,"mdi:fingerprint"):V}
        ${e?this._renderToggle("lock",e,"mdi:lock-outline"):V}
        ${i?this._renderToggle("force_single_phase",i,"mdi:sine-wave"):V}
      </div>
    `}_renderToggle(t,e,i){return D`
      <div class="toggle-row">
        <ha-icon icon=${i}></ha-icon>
        <span class="grow" @click=${()=>this._moreInfo(e.entity_id)}>
          ${this._t(t)}
        </span>
        <ha-switch
          .checked=${"on"===e.state}
          @change=${()=>this._toggleSwitch(t)}
        ></ha-switch>
      </div>
    `}_renderInfoList(){const t=[{entity:"installation_current",icon:"mdi:gauge"},{entity:"lifetime_energy",icon:"mdi:counter"},{entity:"limit_reason",icon:"mdi:information-outline"},{entity:"temperature",icon:"mdi:thermometer"}];this._stateObj("breaker_current")&&t.push({entity:"breaker_current",icon:"mdi:fuse"}),this._stateObj("meter_power")&&t.push({entity:"meter_power",icon:"mdi:flash"});const e=(this._config.info_items??t).map(t=>{const e="string"==typeof t?{entity:t}:t,i=this._stateObj(e.entity);if(!i)return V;const s=e.label||(gt.en.ui[e.entity]?this._t(e.entity):i.attributes.friendly_name);return D`
          <div
            class="info-row"
            @click=${()=>this._moreInfo(i.entity_id)}
          >
            <ha-icon icon=${e.icon||"mdi:information-outline"}></ha-icon>
            <span class="name">${s}</span>
            <span class="val">${this._fmt(i)}</span>
          </div>
        `}).filter(t=>t!==V),i=this._stateObj("update");return i&&e.push(D`
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
      `),D`<div class="info-list">${e}</div>`}_deviceActions(){if(!1===this._config.show_device_actions)return[];const t=[];this._stateObj("schedule_override")&&t.push({text:this._t("schedule_override"),icon:"mdi:calendar-clock",run:()=>this._pressButton("schedule_override")});const e=this._stateObj("force_single_phase");e&&t.push({text:this._t("force_single_phase"),icon:"mdi:sine-wave",active:"on"===e.state,run:()=>this._toggleSwitch("force_single_phase")});const i=this._stateObj("lb_mode");if(i&&Array.isArray(i.attributes.options))for(const e of i.attributes.options)t.push({text:`${this._t("lb_mode")}: ${e}`,icon:"mdi:scale-balance",active:i.state===e,run:()=>this.hass.callService("select","select_option",{entity_id:i.entity_id,option:e})});const s=this._stateObj("reboot");s&&t.push({text:this._t("reboot"),icon:"mdi:restart",confirm:!0,run:()=>this._pressButton("reboot")});const r=this._stateObj("meter_reboot");return r&&r.entity_id!==s?.entity_id&&t.push({text:this._t("meter_reboot"),icon:"mdi:restart",confirm:!0,run:()=>this._pressButton("meter_reboot")}),t}_renderActionsGrid(){const t=this._config.actions||[],e=this._deviceActions();if(!t.length&&!e.length)return V;const i=t.length>0&&e.length>0;return D`
      <div class="actions-grid">
        ${i?D`<div class="actions-caption">
              ${this._t("device_actions")}
            </div>`:V}
        ${e.map(t=>D`
            <button
              class=${pt({"action-chip":!0,device:!0,active:!!t.active})}
              @click=${()=>{t.confirm&&!window.confirm(`${t.text}?`)||t.run()}}
            >
              <ha-icon icon=${t.icon}></ha-icon>
              ${t.text}
            </button>
          `)}
        ${i?D`<div class="actions-caption">
              ${this._t("custom_actions")}
            </div>`:V}
        ${t.map(t=>{const e=t.entity?this.hass.states[t.entity]:void 0;return D`
            <button
              class=${pt({"action-chip":!0,active:"on"===e?.state})}
              @click=${()=>this._runAction(t)}
            >
              ${t.icon?D`<ha-icon icon=${t.icon}></ha-icon>`:V}
              ${t.text||t.name||t.entity}
            </button>
          `})}
      </div>
    `}_renderStats(t,e){const i=[{entity:"session_energy",label:this._t("energy")},{entity:"charging_time",label:this._t("charging_time")},{entity:"temperature",label:this._t("temperature")}],s=this._config.stats||{};let r=Array.isArray(s)?s:s[t]||s.default||i;return"error"===t&&e.length&&!s.error&&(r=e.map(t=>({entity:t.entity_id,label:this._errorName(this._errorKeyOf(t.entity_id),t),value:"⚠"}))),D`
      <div class="stats">
        ${r.map(t=>{const e="string"==typeof t?{entity:t}:t,i=this._stateObj(e.entity);if(!i)return V;const s=e.label||(gt.en.ui[e.entity]?this._t(e.entity):i.attributes.friendly_name);return D`
            <div
              class="stat"
              @click=${()=>this._moreInfo(i.entity_id)}
            >
              <div class="value">${e.value||this._fmt(i)}</div>
              <div class="label">${s}</div>
            </div>
          `})}
      </div>
    `}}customElements.get(wt)||customElements.define(wt,Pt),window.customCards=window.customCards||[],window.customCards.some(t=>t.type===wt)||window.customCards.push({type:wt,name:"Lektri.co Charger Card",description:"Card for Lektri.co EV chargers (1P7K / One / 3P22K / Tri) with animated status LEDs.",preview:!0}),console.info("%c LEKTRICO-CHARGER-CARD %c v1.3.0 ","color: white; background: #1b1c1e; font-weight: 700;","color: #4caf50; background: #26282a; font-weight: 700;");
