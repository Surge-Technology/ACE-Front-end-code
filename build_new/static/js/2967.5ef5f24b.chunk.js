(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2967],{65764:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return u(e)||i(e,t)||s(e,t)||p()}function u(e){if(Array.isArray(e))return e}function i(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(i){u=!0,o=i}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return a}}function s(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var m="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function d(){}function y(){}y.resetWarningCache=d;var h=function(){function e(e,t,n,r,o,a){if(a!==m){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:y,resetWarningCache:d};return n.PropTypes=n,n},v=f((function(e){e.exports=h()})),g=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},E=function(e){return null!==e&&"object"===o(e)},b=function(e){return E(e)&&"function"===typeof e.then},C=function(e){return E(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},w="[object Object]",S=function e(t,n){if(!E(t)||!E(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===w;if(o!==(Object.prototype.toString.call(n)===w))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),c=Object.keys(n);if(a.length!==c.length)return!1;for(var u={},i=0;i<a.length;i+=1)u[a[i]]=!0;for(var s=0;s<c.length;s+=1)u[c[s]]=!0;var l=Object.keys(u);if(l.length!==a.length)return!1;var p=t,f=n,m=function(t){return e(p[t],f[t])};return l.every(m)},j=function(e,t,n){return E(e)?Object.keys(e).reduce((function(o,c){var u=!E(t)||!S(e[c],t[c]);return n.includes(c)?(u&&console.warn("Unsupported prop change: options.".concat(c," is not a mutable property.")),o):u?r(r({},o||{}),{},a({},c,e[c])):o}),null):null},k="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",O=function(e){if(null===e||C(e))return e;throw new Error(k)},P=function(e){if(b(e))return{tag:"async",stripePromise:Promise.resolve(e).then(O)};var t=O(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},_=t.createContext(null);_.displayName="ElementsContext";var A=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},x=t.createContext(null);x.displayName="CartElementContext";var R=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},T=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo((function(){return P(n)}),[n]),u=c(t.useState(null),2),i=u[0],s=u[1],l=c(t.useState(null),2),p=l[0],f=l[1],m=c(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}})),2),d=m[0],y=m[1];t.useEffect((function(){var e=!0,t=function(e){y((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==a.tag||d.stripe?"sync"!==a.tag||d.stripe||t(a.stripe):a.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[a,d,r]);var h=g(n);t.useEffect((function(){null!==h&&h!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[h,n]);var v=g(r);return t.useEffect((function(){if(d.elements){var e=j(r,v,["clientSecret","fonts"]);e&&d.elements.update(e)}}),[r,v,d.elements]),t.useEffect((function(){var e=d.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"2.1.0"}),e.registerAppInfo({name:"react-stripe-js",version:"2.1.0",url:"https://stripe.com/docs/stripe-js/react"}))}),[d.stripe]),t.createElement(_.Provider,{value:d},t.createElement(x.Provider,{value:{cart:i,setCart:s,cartState:p,setCartState:f}},o))};T.propTypes={stripe:v.any,options:v.object};var B=function(e){var n=t.useContext(_);return A(n,e)},I=function(e){var n=t.useContext(x);return R(n,e)},L=function(){return B("calls useElements()").elements},N=function(){return B("calls useStripe()").stripe},M=function(){return I("calls useCartElement()").cart},W=function(){return I("calls useCartElementState()").cartState},q=function(e){return(0,e.children)(B("mounts <ElementsConsumer>"))};q.propTypes={children:v.func.isRequired};var D=function(e,n,r){var o=!!r,a=t.useRef(r);t.useEffect((function(){a.current=r}),[r]),t.useEffect((function(){if(!o||!e)return function(){};var t=function(){a.current&&a.current.apply(a,arguments)};return e.on(n,t),function(){e.off(n,t)}}),[o,n,e,a])},F=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},U=function(e,n){var r="".concat(F(e),"Element"),o=n?function(e){B("mounts <".concat(r,">")),I("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o,a=n.id,u=n.className,i=n.options,s=void 0===i?{}:i,l=n.onBlur,p=n.onFocus,f=n.onReady,m=n.onChange,d=n.onEscape,y=n.onClick,h=n.onLoadError,v=n.onLoaderStart,E=n.onNetworksChange,b=n.onCheckout,C=n.onLineItemClick,w=n.onConfirm,S=n.onCancel,k=n.onShippingAddressChange,O=n.onShippingRateChange,P=B("mounts <".concat(r,">")).elements,_=c(t.useState(null),2),A=_[0],x=_[1],R=t.useRef(null),T=t.useRef(null),L=I("mounts <".concat(r,">")),N=L.setCart,M=L.setCartState;D(A,"blur",l),D(A,"focus",p),D(A,"escape",d),D(A,"click",y),D(A,"loaderror",h),D(A,"loaderstart",v),D(A,"networkschange",E),D(A,"lineitemclick",C),D(A,"confirm",w),D(A,"cancel",S),D(A,"shippingaddresschange",k),D(A,"shippingratechange",O),"cart"===e?o=function(e){M(e),f&&f(e)}:f&&(o="expressCheckout"===e?f:function(){f(A)}),D(A,"ready",o),D(A,"change","cart"===e?function(e){M(e),m&&m(e)}:m),D(A,"checkout","cart"===e?function(e){M(e),b&&b(e)}:b),t.useLayoutEffect((function(){if(null===R.current&&P&&null!==T.current){var t=P.create(e,s);"cart"===e&&N&&N(t),R.current=t,x(t),t.mount(T.current)}}),[P,s,N]);var W=g(s);return t.useEffect((function(){if(R.current){var e=j(s,W,["paymentRequest"]);e&&R.current.update(e)}}),[s,W]),t.useLayoutEffect((function(){return function(){R.current&&(R.current.destroy(),R.current=null)}}),[]),t.createElement("div",{id:a,className:u,ref:T})};return o.propTypes={id:v.string,className:v.string,onChange:v.func,onBlur:v.func,onFocus:v.func,onReady:v.func,onEscape:v.func,onClick:v.func,onLoadError:v.func,onLoaderStart:v.func,onNetworksChange:v.func,onCheckout:v.func,onLineItemClick:v.func,onConfirm:v.func,onCancel:v.func,onShippingAddressChange:v.func,onShippingRateChange:v.func,options:v.object},o.displayName=r,o.__elementType=e,o},Y="undefined"===typeof window,$=U("auBankAccount",Y),H=U("card",Y),J=U("cardNumber",Y),V=U("cardExpiry",Y),z=U("cardCvc",Y),G=U("fpxBank",Y),K=U("iban",Y),Q=U("idealBank",Y),X=U("p24Bank",Y),Z=U("epsBank",Y),ee=U("payment",Y),te=U("expressCheckout",Y),ne=U("paymentRequestButton",Y),re=U("linkAuthentication",Y),oe=U("address",Y),ae=U("shippingAddress",Y),ce=U("cart",Y),ue=U("paymentMethodMessaging",Y),ie=U("affirmMessage",Y),se=U("afterpayClearpayMessage",Y);e.AddressElement=oe,e.AffirmMessageElement=ie,e.AfterpayClearpayMessageElement=se,e.AuBankAccountElement=$,e.CardCvcElement=z,e.CardElement=H,e.CardExpiryElement=V,e.CardNumberElement=J,e.CartElement=ce,e.Elements=T,e.ElementsConsumer=q,e.EpsBankElement=Z,e.ExpressCheckoutElement=te,e.FpxBankElement=G,e.IbanElement=K,e.IdealBankElement=Q,e.LinkAuthenticationElement=re,e.P24BankElement=X,e.PaymentElement=ee,e.PaymentMethodMessagingElement=ue,e.PaymentRequestButtonElement=ne,e.ShippingAddressElement=ae,e.useCartElement=M,e.useCartElementState=W,e.useElements=L,e.useStripe=N,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(72791))},53473:function(e,t,n){"use strict";n.d(t,{J:function(){return p}});var r="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,a="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",c=null,u=function(e){return null!==c||(c=new Promise((function(t,n){if("undefined"!==typeof window&&"undefined"!==typeof document)if(window.Stripe&&e&&console.warn(a),window.Stripe)t(window.Stripe);else try{var c=function(){for(var e=document.querySelectorAll('script[src^="'.concat(r,'"]')),t=0;t<e.length;t++){var n=e[t];if(o.test(n.src))return n}return null}();c&&e?console.warn(a):c||(c=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(r).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n}(e)),c.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),c.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(u){return void n(u)}else t(null)}))),c},i=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.0",startTime:t})}(r,n),r},s=Promise.resolve().then((function(){return u(null)})),l=!1;s.catch((function(e){l||console.warn(e)}));var p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];l=!0;var r=Date.now();return s.then((function(e){return i(e,t,r)}))}}}]);
//# sourceMappingURL=2967.5ef5f24b.chunk.js.map