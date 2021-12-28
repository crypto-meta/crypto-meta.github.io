"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{9142:function(e,t,n){n.d(t,{uJ:function(){return s},Fi:function(){return u},HU:function(){return p},Og:function(){return y},Q4:function(){return h},XR:function(){return P}});var a=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"rarity","type":"uint8"},{"indexed":false,"internalType":"uint128","name":"squidEnergy","type":"uint128"}],"name":"TokenMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"level","type":"uint8"}],"name":"TokenMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bswToken","outputs":[{"internalType":"contract IERC20Upgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"busChance","outputs":[{"internalType":"uint8","name":"level","type":"uint8"},{"internalType":"uint64","name":"chance","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"busChancesBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"busNFT","outputs":[{"internalType":"contract ISquidBusNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"busPriceInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyPlayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"checkPeriodPlayerLimits","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getBusTokens","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint8","name":"level","type":"uint8"},{"internalType":"uint32","name":"createTimestamp","type":"uint32"},{"internalType":"string","name":"uri","type":"string"}],"internalType":"struct NFTMinter.BusToken[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLimitPlayerParameters","outputs":[{"internalType":"uint256","name":"totalLimit","type":"uint256"},{"internalType":"uint256","name":"mintedOnPeriod","type":"uint256"},{"internalType":"uint256","name":"timeLeft","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getPlayerTokens","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint128","name":"squidEnergy","type":"uint128"},{"internalType":"uint128","name":"maxSquidEnergy","type":"uint128"},{"internalType":"uint32","name":"contractEndTimestamp","type":"uint32"},{"internalType":"uint32","name":"busyTo","type":"uint32"},{"internalType":"uint32","name":"createTimestamp","type":"uint32"},{"internalType":"bool","name":"stakeFreeze","type":"bool"},{"internalType":"string","name":"uri","type":"string"}],"internalType":"struct ISquidPlayerNFT.TokensViewFront[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricesInBSW","outputs":[{"internalType":"uint256","name":"busPrice","type":"uint256"},{"internalType":"uint256","name":"playerPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20Upgradeable","name":"_usdtToken","type":"address"},{"internalType":"contract IERC20Upgradeable","name":"_bswToken","type":"address"},{"internalType":"contract ISquidBusNFT","name":"_busNFT","type":"address"},{"internalType":"contract ISquidPlayerNFT","name":"_playerNFT","type":"address"},{"internalType":"contract IOracle","name":"_oracle","type":"address"},{"internalType":"address","name":"_treasuryAddressBus","type":"address"},{"internalType":"address","name":"_treasuryAddressPlayer","type":"address"},{"internalType":"uint256","name":"_busPriceInUSD","type":"uint256"},{"internalType":"uint256","name":"_playerPriceInUSD","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"contract IOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodLimitPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"playerChance","outputs":[{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint128","name":"maxValue","type":"uint128"},{"internalType":"uint128","name":"minValue","type":"uint128"},{"internalType":"uint32","name":"chance","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"playerChancesBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"playerNFT","outputs":[{"internalType":"contract ISquidPlayerNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"playerPriceInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"playersMintCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint8","name":"level","type":"uint8"},{"internalType":"uint64","name":"chance","type":"uint64"}],"internalType":"struct NFTMinter.ChanceTableBus[]","name":"_newBusChanceTable","type":"tuple[]"}],"name":"setBusChanceTable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newLimit","type":"uint256"},{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setPeriodLimitPlayers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint128","name":"maxValue","type":"uint128"},{"internalType":"uint128","name":"minValue","type":"uint128"},{"internalType":"uint32","name":"chance","type":"uint32"}],"internalType":"struct NFTMinter.ChanceTablePlayer[]","name":"_newPlayerChanceTable","type":"tuple[]"}],"name":"setPlayerChanceTable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_busPriceInUSD","type":"uint256"},{"internalType":"uint256","name":"_playerPriceInUSD","type":"uint256"}],"name":"setPrices","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasuryAddressBus","type":"address"},{"internalType":"address","name":"_treasuryAddressPlayer","type":"address"}],"name":"setTreasuryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryAddressBus","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryAddressPlayer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20Upgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function"}]'),i=JSON.parse('[{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),s=a,u=i,p="0x965F527D9159dCe6288a2219DB51fc6Eef120dD1",y="0x17284C1920436Ba331E9Db7e87D372dCDABAc2E5",r=n(266),l=n(809),d=n.n(l),o=n(7294),m=n(1046),c=n(7495),T=n(4146),b=n(3901),f=n(5534),v=n.n(f),w=["https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed1.defibit.io","https://bsc-dataseed.binance.org"],M=function(){return v()(w)}(),x=new b.c(M),g=function(e,t){var n=(0,c.K)(),a=n.library,i=n.account;return(0,o.useMemo)((function(){var n=i?null===a||void 0===a?void 0:a.getSigner():x;return new T.CH(t,e,n)}),[a,i])},h=function(){var e=(0,c.K)().account,t=g(u,p),n=(0,o.useCallback)((0,r.Z)(d().mark((function e(){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.approve(y,m.Bz);case 2:return n=e.sent,e.next=5,n.wait();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),[e,t]);return{allowanceNftMinter:(0,o.useCallback)((0,r.Z)(d().mark((function n(){var a;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.allowance(e,y);case 2:return a=n.sent,n.abrupt("return",a.toString());case 4:case"end":return n.stop()}}),n)}))),[e,t]),approveNftMinter:n}},k=n(5253),P=function(){var e=(0,c.K)().account,t=(0,k.F)(),n=g(s,y);return{mintBus:(0,o.useCallback)((0,r.Z)(d().mark((function e(){var a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.buyBus({gasLimit:t&&t.toNumber()+1});case 2:return a=e.sent,e.next=5,a.wait();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),[e,n,t])}}}}]);