"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[926],{2636:function(e,t,n){n.d(t,{y:function(){return p}});var a=n(7294);const s=(0,a.createContext)(void 0);const i=(u="undefined"!==typeof window&&window.fetch,async(e,t)=>{try{const n=e.toLowerCase(),a=t.toLowerCase(),s=((e,t)=>`https://api.coingecko.com/api/v3/simple/price?ids=${e}&vs_currencies=${t}`)(n,a),i=await u(s,{method:"GET",headers:{"Content-Type":"application/json"}}),p=(await i.json())[n][a];return p?p+"":void 0}catch(n){return}});var u;const p=(e,t="usd")=>{const[n,u]=(0,a.useState)(void 0),p=(0,a.useContext)(s);return(0,a.useEffect)((()=>{!async function(){const n=await i(e,t);u(n)}()}),[e,t,p]),n}},9345:function(e,t,n){n.d(t,{Qv:function(){return r},Qf:function(){return p}});var a=n(3651),s=n(5816),i=JSON.parse('{"Mt":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]}'),u=JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"initialAccount","type":"address"},{"internalType":"uint256","name":"initialBalance","type":"uint256"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approveInternal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferInternal","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');const p=new a.vU(s.abi),r=new a.vU(i.Mt);new a.vU(u.Mt)},8636:function(e,t,n){n.d(t,{g:function(){return r},o:function(){return o}});var a=n(7294),s=n(5396);function i(e){const{dispatchCalls:t,value:n}=(0,a.useContext)(s.w);return(0,a.useEffect)((()=>{const n=e.filter(Boolean);return t({type:"ADD_CALLS",calls:n}),()=>t({type:"REMOVE_CALLS",calls:n})}),[JSON.stringify(e),t]),(0,a.useMemo)((()=>e.map((e=>{var t,a;return e&&(null===(a=null===(t=null===n||void 0===n?void 0:n.state)||void 0===t?void 0:t[e.address])||void 0===a?void 0:a[e.data])}))),[JSON.stringify(e),n])}function u(e){console.warn(`Invalid contract call: address=${e&&e.address} method=${e&&e.method} args=${e&&e.args}`)}function p(e){if(e)if(e.address&&e.method)try{return{address:e.address,data:e.abi.encodeFunctionData(e.method,e.args)}}catch(t){return void u(e)}else u(e)}function r(e){return o([e])[0]}function o(e){const t=i(e.map(p));return(0,a.useMemo)((()=>t.map(((t,n)=>{const a=e[n];if("0x"!==t)return a&&t?a.abi.decodeFunctionResult(a.method,t):void 0;u(a)}))),[t])}},6372:function(e,t,n){n.d(t,{M:function(){return p}});var a=n(9345),s=n(7294),i=n(5396);var u=n(8636);function p(e){var t;const n=(0,s.useContext)(i.w).multicallAddress,[p]=null!==(t=(0,u.g)(n&&e&&{abi:a.Qf,address:n,method:"getEthBalance",args:[e]}))&&void 0!==t?t:[];return p}},2035:function(e,t,n){n.d(t,{d:function(){return i}});var a=n(9345),s=n(8636);function i(e){var t,n;const i={abi:a.Qv,address:e||"",args:[]},u=["name","symbol","decimals","totalSupply"].map((e=>Object.assign(Object.assign({},i),{method:e}))),[p,r,o,l]=(0,s.o)(u);if(p||r||o||l)return{name:null!==(t=null===p||void 0===p?void 0:p[0])&&void 0!==t?t:"",symbol:null!==(n=null===r||void 0===r?void 0:r[0])&&void 0!==n?n:"",decimals:null===o||void 0===o?void 0:o[0],totalSupply:null===l||void 0===l?void 0:l[0]}}},452:function(e,t,n){n.d(t,{m:function(){return i}});var a=n(9345),s=n(8636);function i(e,t){var n;const[i]=null!==(n=(0,s.g)(t&&e&&{abi:a.Qv,address:e,method:"balanceOf",args:[t]}))&&void 0!==n?n:[];return i}}}]);