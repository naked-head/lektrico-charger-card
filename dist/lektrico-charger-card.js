const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:o,defineProperty:a,getOwnPropertyDescriptor:c,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:h}=Object,p=globalThis,u=p.trustedTypes,_=u?u.emptyScript:"",m=p.reactiveElementPolyfillSupport,g=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!o(t,e),v={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&a(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=h(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[g("elementProperties")]=new Map,$[g("finalized")]=new Map,m?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.2");const b=globalThis,x=t=>t,w=b.trustedTypes,A=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+S,C=`<${E}>`,O=document,N=()=>O.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,M="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,j=/>/g,I=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,R=/"/g,H=/^(?:script|style|textarea|title)$/i,q=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),D=q(1),W=q(2),B=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),V=new WeakMap,F=O.createTreeWalker(O,129);function G(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=T;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(o.lastIndex=d,c=o.exec(i),null!==c);)d=o.lastIndex,o===T?"!--"===c[1]?o=U:void 0!==c[1]?o=j:void 0!==c[2]?(H.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=I):void 0!==c[3]&&(o=I):o===I?">"===c[0]?(o=r??T,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?I:'"'===c[3]?R:L):o===R||o===L?o=I:o===U||o===j?o=T:(o=I,r=void 0);const h=o===I&&t[e+1].startsWith("/>")?" ":"";n+=o===T?i+C:l>=0?(s.push(a),i.slice(0,l)+k+i.slice(l)+S+h):i+S+(-2===l?e:h)}return[G(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[c,l]=Z(t,e);if(this.el=J.createElement(c,i),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=F.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=l[n++],i=s.getAttribute(t).split(S),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?et:"?"===o[1]?it:"@"===o[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(H.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],N()),F.nextNode(),a.push({type:2,index:++r});s.append(t[e],N())}}}else if(8===s.nodeType)if(s.data===E)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===B)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=z(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);F.currentNode=s;let r=F.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new X(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new rt(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=F.nextNode(),n++)}return F.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),z(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Y(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new J(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new X(this.O(N()),this.O(N()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Q(this,t,e,0),n=!z(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Q(this,s[i+o],e,o),a===B&&(a=this._$AH[o]),n||=!z(a)||a!==this._$AH[o],a===K?t=K:t!==K&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class st extends tt{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??K)===B)return;const i=this._$AH,s=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==K&&(i===K||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const nt=b.litHtmlPolyfillSupport;nt?.(J,X),(b.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;let at=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new X(e.insertBefore(N(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const ct=ot.litElementPolyfillSupport;ct?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.2");const lt=1,dt=t=>(...e)=>({_$litDirective$:t,values:e});let ht=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const pt=dt(class extends ht{constructor(t){if(super(t),t.type!==lt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return B}}),ut="important",_t=" !"+ut,mt=dt(class extends ht{constructor(t){if(super(t),t.type!==lt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const s=e[t];if(null!=s){this.ft.add(t);const e="string"==typeof s&&s.endsWith(_t);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?ut:""):i[t]=s}}return B}});var gt=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(s,t,i)})`
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

  .compact .top {
    grid-template-columns: minmax(60px, 1fr) minmax(72px, 26%) minmax(60px, 1fr);
  }
  .compact .image-wrap {
    max-width: 120px;
  }
  .compact .status .state {
    font-size: 17px;
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
`;const ft={compact:!1,show_leds:!0,show_stats:!0,show_quick_actions:!0,show_name:!0},yt=[{name:"entity",required:!0,selector:{entity:{domain:"sensor"}}},{name:"name",selector:{text:{}}},{name:"location",selector:{text:{}}},{name:"substatus_entity",selector:{entity:{}}},{name:"",type:"grid",schema:[{name:"compact",selector:{boolean:{}}},{name:"show_leds",selector:{boolean:{}}},{name:"show_stats",selector:{boolean:{}}},{name:"show_quick_actions",selector:{boolean:{}}},{name:"show_name",selector:{boolean:{}}}]},{name:"language",selector:{select:{mode:"dropdown",options:[{value:"",label:"Auto"},{value:"en",label:"English"},{value:"it",label:"Italiano"}]}}},{name:"image",selector:{text:{}}}],vt={en:{entity:"Charger state sensor (required)",name:"Name",location:"Location",substatus_entity:"Substatus entity (optional)",compact:"Compact view",show_leds:"Show LEDs",show_stats:"Show stats",show_quick_actions:"Show quick actions",show_name:"Show name",language:"Language",image:"Custom image (optional path)"},it:{entity:"Sensore stato del charger (obbligatorio)",name:"Nome",location:"Posizione",substatus_entity:"Entità sottostato (opzionale)",compact:"Vista compatta",show_leds:"Mostra LED",show_stats:"Mostra statistiche",show_quick_actions:"Mostra azioni rapide",show_name:"Mostra nome",language:"Lingua",image:"Immagine personalizzata (percorso, opzionale)"}};class $t extends at{static properties={hass:{attribute:!1},_config:{state:!0}};setConfig(t){this._config=t}get _lang(){const t=(this.hass?.language||"en").split("-")[0];return vt[t]?t:"en"}_computeLabel=t=>vt[this._lang][t.name]||t.name;render(){if(!this.hass||!this._config)return K;const t={...ft,...this._config};return D`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${yt}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}_valueChanged(t){t.stopPropagation();const e={...t.detail.value};for(const[t,i]of Object.entries(ft))e[t]===i&&delete e[t];for(const t of["name","location","substatus_entity","image","language"])""===e[t]&&delete e[t];((t,e,i={})=>{const s=new Event(e,{bubbles:!0,composed:!0});s.detail=i,t.dispatchEvent(s)})(this,"config-changed",{config:e})}}customElements.get("lektrico-charger-card-editor")||customElements.define("lektrico-charger-card-editor",$t);const bt="lektrico-charger-card",xt={available:{color:"#4caf50",animation:"none"},connected:{color:"#2196f3",animation:"none"},need_auth:{color:"#2196f3",animation:"pulse"},charging:{color:"#ffffff",animation:"spin"},paused:{color:"#2196f3",animation:"pulse"},paused_by_scheduler:{color:"#2196f3",animation:"pulse"},locked:{color:"#ff5722",animation:"none"},error:{color:"#f44336",animation:"pulse"},updating_firmware:{color:"#ab47bc",animation:"pulse"},unavailable:{color:"#616161",animation:"none"},unknown:{color:"#616161",animation:"none"}},wt={en:{available:"Unplugged",connected:"Connected",need_auth:"Waiting for authentication",charging:"Charging",error:"Error",locked:"Locked",paused:"Paused",paused_by_scheduler:"Paused by scheduler",updating_firmware:"Updating firmware",unavailable:"Unavailable",unknown:"Unknown"},it:{available:"Scollegato",connected:"Connesso",need_auth:"In attesa di autenticazione",charging:"In carica",error:"Errore",locked:"Bloccato",paused:"In pausa",paused_by_scheduler:"In pausa (programmata)",updating_firmware:"Aggiornamento firmware",unavailable:"Non disponibile",unknown:"Sconosciuto"}},At={en:{parameters:"Parameters",info:"Information",actions:"Actions",start:"Start",stop:"Stop",reboot:"Reboot",authentication:"Authentication",lock:"Lock",dynamic_limit:"Charging current",led_brightness:"LED brightness",energy:"Energy",charging_time:"Charging time",temperature:"Temperature",power:"Power",voltage:"Voltage",current:"Current",installation_current:"Installation current",lifetime_energy:"Lifetime energy",limit_reason:"Limit reason",firmware:"Firmware",errors:"Active errors",entity_missing:"Entity not found"},it:{parameters:"Parametri",info:"Informazioni",actions:"Azioni",start:"Avvia",stop:"Ferma",reboot:"Riavvia",authentication:"Autenticazione",lock:"Blocco",dynamic_limit:"Corrente di ricarica",led_brightness:"Luminosità LED",energy:"Energia",charging_time:"Tempo ricarica",temperature:"Temperatura",power:"Potenza",voltage:"Tensione",current:"Corrente",installation_current:"Corrente di installazione",lifetime_energy:"Energia erogata",limit_reason:"Motivo limitazione",firmware:"Firmware",errors:"Errori attivi",entity_missing:"Entità non trovata"}},kt={en:{ev_error:"Vehicle error",ev_diode_short:"Vehicle communication error",overheating:"Overheating",thermal_throttling:"Thermal throttling",metering_error:"Metering error",overcurrent:"Overcurrent",overvoltage:"Overvoltage",undervoltage:"Undervoltage",rcd_error:"RCD error",relay_contacts_welded:"Relay contacts welded"},it:{ev_error:"Errore veicolo",ev_diode_short:"Errore comunicazione veicolo",overheating:"Surriscaldamento",thermal_throttling:"Limitazione termica",metering_error:"Errore misuratore",overcurrent:"Sovracorrente",overvoltage:"Sovratensione",undervoltage:"Sottotensione",rcd_error:"Errore RCD",relay_contacts_welded:"Contatti relè incollati"}},St={state:{domain:"sensor",keys:["state"],suffixes:["_state","_stato"]},charging_time:{domain:"sensor",keys:["charging_time"],suffixes:["_charging_time","_tempo_ricarica","_tempo_di_ricarica"]},session_energy:{domain:"sensor",keys:["session_energy"],suffixes:["_session_energy","_energia","_energia_sessione","_energy"]},lifetime_energy:{domain:"sensor",keys:["lifetime_energy"],suffixes:["_lifetime_energy","_energia_erogata"]},power:{domain:"sensor",keys:["instant_power","power"],suffixes:["_instant_power","_power","_potenza"],device_class:"power"},voltage:{domain:"sensor",keys:["voltage"],suffixes:["_voltage","_tensione"],device_class:"voltage"},current:{domain:"sensor",keys:["current"],suffixes:["_current","_corrente"],device_class:"current"},installation_current:{domain:"sensor",keys:["installation_current"],suffixes:["_installation_current","_corrente_di_installazione"]},limit_reason:{domain:"sensor",keys:["limit_reason"],suffixes:["_limit_reason","_motivo_limitazione"]},temperature:{domain:"sensor",keys:["temperature"],suffixes:["_temperature","_temperatura"],device_class:"temperature"},dynamic_limit:{domain:"number",keys:["dynamic_limit"],suffixes:["_dynamic_limit","_limite_dinamico"]},led_brightness:{domain:"number",keys:["led_max_brightness"],suffixes:["_led_max_brightness","_led_brightness","_luminosita_led","_luminosita_massima_led"]},authentication:{domain:"switch",keys:["authentication"],suffixes:["_authentication","_autenticazione"]},lock:{domain:"switch",keys:["lock"],suffixes:["_lock","_blocca","_blocco"]},charge_start:{domain:"button",keys:["charge_start"],suffixes:["_charge_start","_avvia_ricarica"]},charge_stop:{domain:"button",keys:["charge_stop"],suffixes:["_charge_stop","_ferma_ricarica","_arresta_ricarica"]},update:{domain:"update",keys:["firmware"],suffixes:["_firmware"]}},Et=["ev_error","ev_diode_short","overheating","thermal_throttling","metering_error","overcurrent","overvoltage","undervoltage","rcd_error","relay_contacts_welded"],Ct={slowest:6,fastest:2},Ot=[6,10,13,16,20,25,32],Nt=[10,25,50,75,100];class zt extends at{static styles=gt;static properties={hass:{attribute:!1},_config:{state:!0},_openSection:{state:!0},_pendingSlider:{state:!0}};constructor(){super(),this._openSection=null,this._pendingSlider={},this._roles=null,this._rolesKey=null}setConfig(t){if(!t.entity)throw new Error("Please define the charger state entity, e.g. entity: sensor.1p7k_state");this._config=t,this._roles=null,this._rolesKey=null}getCardSize(){return this._config?.compact?4:8}static getStubConfig(t){const e=t?.entities||{},i=Object.values(e).find(t=>"lektrico"===t.platform&&"state"===t.translation_key);return{entity:i?i.entity_id:"sensor.1p7k_state"}}static getConfigElement(){return document.createElement("lektrico-charger-card-editor")}get _lang(){return(this._config.language||this.hass?.language||"en").split("-")[0]}_t(t){const e=At[this._lang]?this._lang:"en";return At[e][t]||At.en[t]||t}_stateText(t){const e=this._config.state_text||{};if(e[t])return e[t];const i=wt[this._lang]?this._lang:"en";return wt[i][t]||t}_errorName(t,e){const i=kt[this._lang]?this._lang:"en";return kt[i][t]||e?.attributes.friendly_name||t}_discover(){const t=this.hass,e=this._config.entity,i=t.entities||{},s=i[e]?.device_id,r=`${e}|${s||"nodevice"}`;if(this._roles&&this._rolesKey===r)return this._roles;const n=this._config.entities||{},o=s?Object.values(i).filter(t=>t.device_id===s):[],a=e.split(".")[1].replace(/_(state|stato)$/,""),c=Object.entries(St),l={},d=new Set,h=(t,e)=>{l[t]=e,d.add(e)};for(const[t]of c)n[t]&&h(t,n[t]);for(const[t,e]of c){if(l[t]||!o.length)continue;const i=o.find(t=>!d.has(t.entity_id)&&t.entity_id.startsWith(`${e.domain}.`)&&e.keys?.includes(t.translation_key));i&&h(t,i.entity_id)}for(const[e,i]of c)if(!l[e])for(const s of i.suffixes||[]){const r=`${i.domain}.${a}${s}`;if(!d.has(r)&&t.states[r]){h(e,r);break}}const p=c.flatMap(([,t])=>t.suffixes||[]);for(const[e,i]of c){if(l[e])continue;const s=o.length?o.map(t=>t.entity_id):Object.keys(t.states).filter(t=>t.startsWith(`${i.domain}.${a}`));t:for(const t of i.suffixes||[])for(const r of s){if(d.has(r)||!r.startsWith(`${i.domain}.`)||!r.endsWith(t))continue;if(!p.some(e=>e.length>t.length&&!(i.suffixes||[]).includes(e)&&r.endsWith(e))){h(e,r);break t}}}for(const[e,i]of c){if(l[e]||!i.device_class||!o.length)continue;const s=o.filter(e=>!d.has(e.entity_id)&&e.entity_id.startsWith(`${i.domain}.`)&&t.states[e.entity_id]?.attributes.device_class===i.device_class);1===s.length&&h(e,s[0].entity_id)}l.state=l.state||e;let u=[];return u=Array.isArray(n.errors)?n.errors:o.length?o.filter(t=>t.entity_id.startsWith("binary_sensor.")&&(Et.includes(t.translation_key)||Et.some(e=>t.entity_id.endsWith(`_${e}`)))).map(t=>t.entity_id):Et.map(t=>`binary_sensor.${a}_${t}`).filter(e=>t.states[e]),l.errors=u,this._roles=l,this._rolesKey=r,l}_stateObj(t){if(!t)return;if(t.includes("."))return this.hass.states[t];const e=this._discover()[t];return e?this.hass.states[e]:void 0}_errorKeyOf(t){const e=Et.find(e=>t.endsWith(`_${e}`));return e||(this.hass.entities?.[t]?.translation_key||t)}_fmt(t){if(!t)return"—";const{state:e,attributes:i}=t;if("unavailable"===e||"unknown"===e)return"—";if("duration"===i.device_class&&!Number.isNaN(Number(e))){const t=Math.round(Number(e));return`${String(Math.floor(t/3600)).padStart(2,"0")}:${String(Math.floor(t%3600/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}if("function"==typeof this.hass.formatEntityState)try{return this.hass.formatEntityState(t)}catch(t){}return`${e}${i.unit_of_measurement?` ${i.unit_of_measurement}`:""}`}_moreInfo(t){t&&((t,e,i={})=>{const s=new Event(e,{bubbles:!0,composed:!0});s.detail=i,t.dispatchEvent(s)})(this,"hass-more-info",{entityId:t})}_pressButton(t){const e=this._stateObj(t);e&&this.hass.callService("button","press",{entity_id:e.entity_id})}_toggleSwitch(t){const e=this._stateObj(t);e&&this.hass.callService("switch","toggle",{entity_id:e.entity_id})}_setNumber(t,e){const i=this._stateObj(t);i&&this.hass.callService("number","set_value",{entity_id:i.entity_id,value:e})}_sliderInput(t,e){this._pendingSlider={...this._pendingSlider,[t]:Number(e.target.value)}}_sliderChange(t,e){const i=Number(e.target.value),s={...this._pendingSlider};delete s[t],this._pendingSlider=s,this._setNumber(t,i)}_runAction(t){if(!t.service)return void(t.entity&&this._moreInfo(t.entity));if(t.confirm&&!window.confirm(!0===t.confirm?`${t.text}?`:t.confirm))return;const[e,i]=t.service.split("."),s={...t.service_data||t.data||{}};!t.entity||s.entity_id||t.target||(s.entity_id=t.entity),this.hass.callService(e,i,s,t.target)}_toggleSection(t){this._openSection=this._openSection===t?null:t}render(){if(!this.hass||!this._config)return K;const t=this._discover(),e=this.hass.states[t.state];if(!e)return D`<ha-card>
        <div style="padding:16px;color:var(--error-color,#f44336)">
          ${this._t("entity_missing")}: ${t.state}
        </div>
      </ha-card>`;const i=e.state,s=!0===this._config.compact,r=(t.errors||[]).map(t=>this.hass.states[t]).filter(t=>t&&"on"===t.state);return D`
      <ha-card class=${pt({compact:s})}>
        ${this._renderTop(i)}
        ${this._renderStatus(e,i)}
        ${r.length?this._renderErrors(r):K}
        ${!1!==this._config.show_quick_actions?this._renderQuickActions(i):K}
        ${s?K:this._renderSections()}
        ${!1!==this._config.show_stats?this._renderStats(i,r):K}
      </ha-card>
    `}_renderTop(t){if(!1===this._config.show_image)return K;const e=this._config.info_left??[{entity:"current",decimals:1},"dynamic_limit"],i=this._config.info_right??["voltage","power"];return D`
      <div class="top">
        <div class="side-info left">
          ${e.map(t=>this._renderInfoItem(t))}
        </div>
        ${this._renderImage(t)}
        <div class="side-info right">
          ${i.map(t=>this._renderInfoItem(t))}
        </div>
      </div>
    `}_renderInfoItem(t){const e="string"==typeof t?{entity:t}:t,i=this._stateObj(e.entity);if(!i)return K;const s=e.label||(At.en[e.entity]?this._t(e.entity):i.attributes.friendly_name);let r;const n=Number(i.state);if(null==e.decimals||""===i.state||Number.isNaN(n)||"unavailable"===i.state||"unknown"===i.state)r=this._fmt(i);else{const t=i.attributes.unit_of_measurement;r=`${n.toFixed(e.decimals)}${t?` ${t}`:""}`}return D`
      <div
        class="info-item"
        @click=${()=>this._moreInfo(i.entity_id)}
      >
        <div class="value">
          ${e.icon?D`<ha-icon .icon=${e.icon}></ha-icon>`:K}
          ${r}
        </div>
        <div class="label">${s}</div>
      </div>
    `}_ledConfig(t){const e=this._config.led_states||{};return{...xt[t]||xt.unknown,...e[t]||{}}}_maxAmps(){const t=this._stateObj("dynamic_limit"),e=this._stateObj("installation_current");return Number(t?.attributes.max)||Number(e?.state)||32}_ledPeriod(){const t=this._stateObj("current"),e=this._stateObj("dynamic_limit");let i=Number(t?.state);i&&!Number.isNaN(i)||(i=Number(e?.state)||8);const{slowest:s,fastest:r}={...Ct,...this._config.led_spin||{}},n=this._maxAmps(),o=s-Math.min(i,n)/n*(s-r);return`${Math.max(o,r).toFixed(2)}s`}_renderImage(t){const e=this._ledConfig(t),i={"--led-color":e.color,"--led-period":this._ledPeriod()},s=`leds anim-${e.animation||"none"}`,r=this._config.image,n=!1!==this._config.show_leds;let o;if(r&&"svg"!==r){const t=this._config.led_overlay_position||{},e={...i,"--led-overlay-left":t.left,"--led-overlay-top":t.top,"--led-overlay-size":t.size};o=D`
        <img class="custom-image" src=${r} alt="charger" />
        ${n?D`<div class=${s} style=${mt(e)}>
              ${W`
  <svg
    class="led-overlay-svg"
    viewBox="0 0 200 200"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <g class="leds">
      <rect class="led led-0" x="97" y="22" width="6" height="54" rx="3"></rect>
      <rect class="led led-1" x="124" y="97" width="54" height="6" rx="3"></rect>
      <rect class="led led-2" x="97" y="124" width="6" height="54" rx="3"></rect>
      <rect class="led led-3" x="22" y="97" width="54" height="6" rx="3"></rect>
    </g>
  </svg>
`}
            </div>`:K}
      `}else o=D`
        <div
          class=${n?s:"leds-off"}
          style=${mt(i)}
        >
          ${W`
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
      <rect class="led led-0" x="117" y="42" width="6" height="54" rx="3"></rect>
      <rect class="led led-1" x="144" y="117" width="54" height="6" rx="3"></rect>
      <rect class="led led-2" x="117" y="144" width="6" height="54" rx="3"></rect>
      <rect class="led led-3" x="42" y="117" width="54" height="6" rx="3"></rect>
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
        ${o}
      </div>
    `}_substatusText(){if(this._config.substatus_entity){const t=this.hass.states[this._config.substatus_entity];return t&&t.state&&!["unknown","unavailable"].includes(t.state)?t.state:void 0}if(!1===this._config.substatus_from_actions)return;const t=(this._config.actions||[]).filter(t=>t.entity&&!1!==t.substatus&&"on"===this.hass.states[t.entity]?.state);return t.length?t.map(t=>"string"==typeof t.substatus?t.substatus:t.text||t.name).join(" · "):void 0}_renderStatus(t,e){const i=this._config.name||t.attributes.friendly_name,s=this._config.location,r=this._substatusText();return D`
      <div class="status" @click=${()=>this._moreInfo(this._config.entity)}>
        ${!1!==this._config.show_name?D`<div class="name">
              ${i}${s?` — ${s}`:""}
            </div>`:K}
        <div
          class=${pt({state:!0,"state-error":"error"===e,"state-charging":"charging"===e})}
        >
          ${this._stateText(e)}
        </div>
        ${r?D`<div class="substatus">${r}</div>`:K}
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
    `}_renderQuickActions(t){const e=this._stateObj("charge_start"),i=this._stateObj("charge_stop"),s=this._stateObj("authentication"),r=this._stateObj("lock"),n=[];return e&&n.push(D`
        <button
          class="qa-button"
          .disabled=${"charging"===t}
          @click=${()=>this._pressButton("charge_start")}
        >
          <ha-icon icon="mdi:play"></ha-icon>${this._t("start")}
        </button>
      `),i&&n.push(D`
        <button
          class="qa-button"
          .disabled=${"charging"!==t&&"paused"!==t}
          @click=${()=>this._pressButton("charge_stop")}
        >
          <ha-icon icon="mdi:stop"></ha-icon>${this._t("stop")}
        </button>
      `),s&&n.push(D`
        <button
          class=${pt({"qa-button":!0,active:"on"===s.state})}
          @click=${()=>this._toggleSwitch("authentication")}
        >
          <ha-icon icon="mdi:fingerprint"></ha-icon>${this._t("authentication")}
        </button>
      `),r&&n.push(D`
        <button
          class=${pt({"qa-button":!0,active:"on"===r.state})}
          @click=${()=>this._toggleSwitch("lock")}
        >
          <ha-icon
            icon=${"on"===r.state?"mdi:lock":"mdi:lock-open-outline"}
          ></ha-icon
          >${this._t("lock")}
        </button>
      `),n.length?D`<div class="quick-actions">${n}</div>`:K}_renderSections(){const t=this._config.actions||[],e=[{id:"parameters",icon:"mdi:speedometer",title:this._config.section_titles?.parameters||this._t("parameters"),body:()=>this._renderParameters()},{id:"info",icon:"mdi:information-outline",title:this._config.section_titles?.info||this._t("info"),body:()=>this._renderInfoList()}];return t.length&&e.push({id:"actions",icon:"mdi:gesture-tap-button",title:this._config.section_titles?.actions||this._t("actions"),body:()=>this._renderActions(t)}),D`
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
              ${this._openSection===t.id?D`<div class="section-body">${t.body()}</div>`:K}
            </div>
          `)}
      </div>
    `}_renderSlider(t,e,i,s){const r=this._stateObj(t);if(!r)return K;const n=r.attributes,o=Number(n.min??0),a=Number(n.max??100),c=Number(n.step??1),l=Number(r.state),d=this._pendingSlider[t]??(Number.isNaN(l)?o:l),h=s||n.unit_of_measurement||"",p=(i||[]).filter(t=>t>=o&&t<=a);return D`
      <div class="slider-row">
        <div class="slider-head">
          <span>${this._t(e)}</span>
          <span class="val">${d}${h?` ${h}`:""}</span>
        </div>
        <input
          type="range"
          min=${o}
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
            </div>`:K}
      </div>
    `}_renderParameters(){const t=this._stateObj("authentication"),e=this._stateObj("lock");return D`
      ${this._renderSlider("dynamic_limit","dynamic_limit",this._config.current_presets??Ot,"A")}
      ${this._renderSlider("led_brightness","led_brightness",this._config.brightness_presets??Nt,"%")}
      <div class="toggle-list">
        ${t?this._renderToggle("authentication",t,"mdi:fingerprint"):K}
        ${e?this._renderToggle("lock",e,"mdi:lock-outline"):K}
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
    `}_renderInfoList(){const t=(this._config.info_items??[{entity:"installation_current",icon:"mdi:gauge"},{entity:"lifetime_energy",icon:"mdi:counter"},{entity:"limit_reason",icon:"mdi:information-outline"},{entity:"temperature",icon:"mdi:thermometer"}]).map(t=>{const e="string"==typeof t?{entity:t}:t,i=this._stateObj(e.entity);if(!i)return K;const s=e.label||(At.en[e.entity]?this._t(e.entity):i.attributes.friendly_name);return D`
          <div
            class="info-row"
            @click=${()=>this._moreInfo(i.entity_id)}
          >
            <ha-icon icon=${e.icon||"mdi:information-outline"}></ha-icon>
            <span class="name">${s}</span>
            <span class="val">${this._fmt(i)}</span>
          </div>
        `}).filter(t=>t!==K),e=this._stateObj("update");return e&&t.push(D`
        <div
          class="info-row"
          @click=${()=>this._moreInfo(e.entity_id)}
        >
          <ha-icon icon="mdi:chip"></ha-icon>
          <span class="name">${this._t("firmware")}</span>
          <span class="val">
            ${e.attributes.installed_version||"—"}
            ${"on"===e.state?" ⬆":""}
          </span>
        </div>
      `),D`<div class="info-list">${t}</div>`}_renderActions(t){return D`
      <div class="actions-grid">
        ${t.map(t=>{const e=t.entity?this.hass.states[t.entity]:void 0;return D`
            <button
              class=${pt({"action-chip":!0,active:"on"===e?.state})}
              @click=${()=>this._runAction(t)}
            >
              ${t.icon?D`<ha-icon icon=${t.icon}></ha-icon>`:K}
              ${t.text||t.name||t.entity}
            </button>
          `})}
      </div>
    `}_renderStats(t,e){const i=[{entity:"session_energy",label:this._t("energy")},{entity:"charging_time",label:this._t("charging_time")},{entity:"temperature",label:this._t("temperature")}],s=this._config.stats||{};let r=Array.isArray(s)?s:s[t]||s.default||i;return"error"===t&&e.length&&!s.error&&(r=e.map(t=>({entity:t.entity_id,label:this._errorName(this._errorKeyOf(t.entity_id),t),value:"⚠"}))),D`
      <div class="stats">
        ${r.map(t=>{const e="string"==typeof t?{entity:t}:t,i=this._stateObj(e.entity);if(!i)return K;const s=e.label||(At.en[e.entity]?this._t(e.entity):i.attributes.friendly_name);return D`
            <div
              class="stat"
              @click=${()=>this._moreInfo(i.entity_id)}
            >
              <div class="value">${e.value||this._fmt(i)}</div>
              <div class="label">${s}</div>
            </div>
          `})}
      </div>
    `}}customElements.get(bt)||customElements.define(bt,zt),window.customCards=window.customCards||[],window.customCards.some(t=>t.type===bt)||window.customCards.push({type:bt,name:"Lektri.co Charger Card",description:"Card for Lektri.co EV chargers (1P7K / One / 3P22K / Tri) with animated status LEDs.",preview:!0}),console.info("%c LEKTRICO-CHARGER-CARD %c v1.1.0 ","color: white; background: #1b1c1e; font-weight: 700;","color: #4caf50; background: #26282a; font-weight: 700;");
