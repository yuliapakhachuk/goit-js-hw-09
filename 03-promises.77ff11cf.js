function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u={},l={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in u)return u[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return u[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){l[e]=t},t.parcelRequired7c6=n);var a=n("eWCmQ");const o={submitBtn:document.querySelector("button"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')},r={delayValue:null,stepValue:null,amountValue:null};function d(e,t){return new Promise(((u,l)=>{setTimeout((()=>{Math.random()>.3?u(`✅ Fulfilled promise ${e} in ${t}ms`):l(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}o.submitBtn.addEventListener("click",(function(t){t.preventDefault(),o.submitBtn.disabled=!0,r.delayValue=Number(o.delay.value),r.stepValue=Number(o.step.value),r.amountValue=Number(o.amount.value);for(let t=1;t<=r.amountValue;t+=1)d(t,r.delayValue).then((t=>e(a).Notify.success(t))).catch((t=>e(a).Notify.failure(t))),r.delayValue=r.delayValue+r.stepValue;o.submitBtn.disabled=!1}));
//# sourceMappingURL=03-promises.77ff11cf.js.map