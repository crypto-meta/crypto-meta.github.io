(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{4311:function(e,t,n){var a=n(9877);e.exports=function(e){var t=e.length;return t?e[a(0,t-1)]:void 0}},9877:function(e){var t=Math.floor,n=Math.random;e.exports=function(e,a){return e+t(n()*(a-e+1))}},4992:function(e,t,n){var a=n(4311),r=n(2628);e.exports=function(e){return a(r(e))}},7415:function(e,t,n){var a=n(9932);e.exports=function(e,t){return a(t,(function(t){return e[t]}))}},5534:function(e,t,n){var a=n(4311),r=n(4992),i=n(1469);e.exports=function(e){return(i(e)?a:r)(e)}},2628:function(e,t,n){var a=n(7415),r=n(3674);e.exports=function(e){return null==e?[]:a(e,r(e))}},6135:function(e,t,n){"use strict";var a=n(9295),r=n(7744),i=(n(7294),n(7495)),s=n(2035),u=n(6372),o=n(452),p=n(3891),l=n(5553),c=n(7417),d=n(5893);t.Z=function(e){var t=e.tokenAddress,n=e.tokenImage,y=e.ownerAddress,f=(0,i.K)().account,m=(0,s.d)(t),b=(0,u.M)(f),v=(0,o.m)(t,f),w=(0,p.F)(t,y,f);return(0,d.jsx)("div",{children:(0,d.jsx)(c.Z,{children:(0,d.jsxs)(a.Z,{size:"large",children:[(0,d.jsx)(r.Z,{loading:!b,prefix:(0,d.jsx)("img",{className:"prefix",src:"/tokens/wbnb.svg",alt:"wbnb"}),title:"\u53ef\u7528 BNB",value:b&&(0,l.dF)(b),precision:4}),(0,d.jsx)(r.Z,{loading:!v,prefix:(0,d.jsx)("img",{className:"prefix",src:n,alt:"bsw"}),title:"\u53ef\u7528 ".concat(null===m||void 0===m?void 0:m.symbol),value:v&&(0,l.bM)(v,18),precision:2}),(0,d.jsx)(r.Z,{loading:!w,prefix:(0,d.jsx)("img",{className:"prefix",src:n,alt:"BSW"}),title:"\u8fd4\u4f63 ".concat(null===m||void 0===m?void 0:m.symbol),value:w&&w.toNumber(),precision:2}),(0,d.jsx)(r.Z,{loading:!m,prefix:(0,d.jsx)("img",{className:"prefix",src:"/rewards.svg",alt:"BSW"}),title:"\u603b\u4f9b\u5e94\u91cf",value:null!==m&&void 0!==m&&m.totalSupply?(0,l.bM)(m.totalSupply,null===m||void 0===m?void 0:m.decimals):0,precision:2})]})})})}},7417:function(e,t,n){"use strict";var a=n(2809),r=(n(7294),n(5893));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.children,n=e.style,a=e.className;return(0,r.jsx)("div",{className:"site-layout-background ".concat(a),style:s({padding:24},n),children:t})}},23:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var a=n(7294),r=n(6135),i=n(2450),s="0x965F527D9159dCe6288a2219DB51fc6Eef120dD1",u="0x17284C1920436Ba331E9Db7e87D372dCDABAc2E5",o=n(266),p=n(809),l=n.n(p),c=n(3339),d=n(1710),y=n(1413),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M380 704h264c4.4 0 8-3.6 8-8v-84c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v36H428v-36c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v84c0 4.4 3.6 8 8 8zm340-123a40 40 0 1080 0 40 40 0 10-80 0zm239-167.6L935.3 372a8 8 0 00-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 00-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 00-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 003-10.8zM840 517v237H184V517l15.6-43h624.8l15.6 43zM292.7 218.1l.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220l72.7-199.9zM224 581a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"car",theme:"outlined"},m=n(1783),b=function(e,t){return a.createElement(m.Z,(0,y.Z)((0,y.Z)({},e),{},{ref:t,icon:f}))};b.displayName="CarOutlined";var v=a.forwardRef(b),w=n(7495),h=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function s(e){try{o(a.next(e))}catch(t){i(t)}}function u(e){try{o(a.throw(e))}catch(t){i(t)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}o((a=a.apply(e,t||[])).next())}))},T=function(e,t){var n,a,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,a=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(u){i=[6,u],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};var x=function(e,t){(0,a.useEffect)((function(){var t=e(),n=!1;return function(){h(this,void 0,void 0,(function(){var e;return T(this,(function(a){switch(a.label){case 0:if("function"!==typeof t[Symbol.asyncIterator])return[3,4];a.label=1;case 1:return[4,t.next()];case 2:return e=a.sent(),n||e.done?[3,3]:[3,1];case 3:return[3,6];case 4:return[4,t];case 5:a.sent(),a.label=6;case 6:return[2]}}))}))}(),function(){n=!0}}),t)},g=n(7417),M=n(1046),k=n(4146),O=n(6881),j=n(1581),N=n(4216),Z=n(8156),S=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function s(e){try{o(a.next(e))}catch(t){i(t)}}function u(e){try{o(a.throw(e))}catch(t){i(t)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}o((a=a.apply(e,t||[])).next())}))};const E=new j.Yd(N.i);class _ extends Z.r{detectNetwork(){const e=Object.create(null,{detectNetwork:{get:()=>super.detectNetwork}});return S(this,void 0,void 0,(function*(){let t=this.network;return null==t&&(t=yield e.detectNetwork.call(this),t||E.throwError("no network detected",j.Yd.errors.UNKNOWN_ERROR,{}),null==this._network&&((0,O.zG)(this,"_network",t),this.emit("network",t,null))),t}))}}var B=n(5534),P=n.n(B),A=JSON.parse('[{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),D=new _(P()(["https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed1.defibit.io","https://bsc-dataseed.binance.org"])),C=function(e,t,n){var a=null!==n&&void 0!==n?n:D;return new k.CH(t,e,a)},z=function(){var e=(0,w.K)(),t=e.library,n=e.account;return(0,a.useMemo)((function(){return C(A,s,n?null===t||void 0===t?void 0:t.getSigner():t)}),[t,n])},H=n(5893),V=function(){var e=(0,w.K)().account,t=function(){var e=(0,w.K)().account,t=z();return{allowanceBswNftMinter:(0,a.useCallback)((0,o.Z)(l().mark((function n(){var a;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.allowance(e,u);case 2:return a=n.sent,n.abrupt("return",a.toString());case 4:case"end":return n.stop()}}),n)}))),[e])}}().allowanceBswNftMinter,n=function(){var e=(0,w.K)().account,t=z();return{onApproveNFTMinting:(0,a.useCallback)((0,o.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.approve(u,M.Bz);case 2:return n=e.sent,e.next=5,n.wait();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),[e,t])}}().onApproveNFTMinting,r=(0,a.useState)(!1),i=r[0],s=r[1],p=(0,a.useState)(!1),y=p[0],f=p[1],m=(0,a.useState)(!1),b=m[0],h=m[1];x((0,o.Z)(l().mark((function n(){var a,r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=6;break}return n.next=3,t();case 3:a=n.sent,r=a.toString(),f(r>0);case 6:case"end":return n.stop()}}),n)}))),[e]);var T=function(){var e=(0,o.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,n();case 4:e.sent.status&&(f(!0),c.ZP.success("Successfully authorized BSW")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c.ZP.error("".concat(e.t0.message));case 11:s(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,o.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,H.jsx)(g.Z,{style:{marginTop:"16px"},children:y?(0,H.jsx)(d.Z,{type:"primary",size:"middle",icon:(0,H.jsx)(v,{}),loading:b,onClick:k,children:"Mint Bus"}):(0,H.jsx)(d.Z,{type:"primary",loading:i,onClick:T,children:"Approve Bus"})})},F=function(){return(0,H.jsxs)("div",{children:[(0,H.jsx)(r.Z,{tokenAddress:s,tokenImage:"/tokens/bsw.svg",ownerAddress:i.e}),(0,H.jsx)(V,{})]})}},225:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/squid-nft",function(){return n(23)}])}},function(e){e.O(0,[420,774,888,179],(function(){return t=225,e(e.s=t);var t}));var t=e.O();_N_E=t}]);