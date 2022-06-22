"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[142],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52571:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={sidebar_label:"Architecture",sidebar_position:2,hide_table_of_contents:!1},c="BNB Sidechain Architecture",l={unversionedId:"BNBSidechain/architecture/bs-arch",id:"BNBSidechain/architecture/bs-arch",isDocsHomePage:!1,title:"BNB Sidechain Architecture",description:"BNB Sidechain is a modular framework for creating BSC-compatible sidechains. It defines requirements for integration with the BSC ecosystem and brings development-ready EVM-compatible features like staking, RPC-API, and smart contracts. Since BSC doesn\u2019t rely on the BNB Sidechain security model, there is no default embedded production-ready bridge solution between the BSC and BNB Sidechain networks. Instead, BNB Sidechain can provide protocols and standards for integrating third-party bridges like Multichain or Celer Network cBridge.",source:"@site/docs/BNBSidechain/architecture/bs-arch.md",sourceDirName:"BNBSidechain/architecture",slug:"/BNBSidechain/architecture/bs-arch",permalink:"/docs/BNBSidechain/architecture/bs-arch",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/BNBSidechain/architecture/bs-arch.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Architecture",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"When to Choose BNB Sidechain",permalink:"/docs/BNBSidechain/overview/whentochooseBAS"},next:{title:"Blockchain and EVM Security",permalink:"/docs/BNBSidechain/security/blockchain-and-evm-security"}},d=[{value:"BNB Sidechain Structure and Integration",id:"bnb-sidechain-structure-and-integration",children:[],level:2},{value:"Modules",id:"modules",children:[],level:2},{value:"Repositories",id:"repositories",children:[],level:2}],u={toc:d};function p(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bnb-sidechain-architecture"},"BNB Sidechain Architecture"),(0,r.kt)("p",null,"BNB Sidechain is a modular framework for creating BSC-compatible sidechains. It defines requirements for integration with the BSC ecosystem and brings development-ready EVM-compatible features like staking, RPC-API, and smart contracts. Since BSC doesn\u2019t rely on the BNB Sidechain security model, there is no default embedded production-ready bridge solution between the BSC and BNB Sidechain networks. Instead, BNB Sidechain can provide protocols and standards for integrating third-party bridges like Multichain or Celer Network cBridge."),(0,r.kt)("h2",{id:"bnb-sidechain-structure-and-integration"},"BNB Sidechain Structure and Integration"),(0,r.kt)("p",null,"BNB Sidechain specifies the primary structure and configuration of the blockchain, using special templates. A ",(0,r.kt)("strong",{parentName:"p"},"template")," is a ready-made blockchain solution that is ",(0,r.kt)("strong",{parentName:"p"},"already integrated into the BSC infrastructure"),". With this integration, developers automatically get access to products like a ready-made staking system, block explorer, API gateways, interfaces for governance, etc. "),(0,r.kt)("p",null,"After applying templates, BNB Sidechain can be customized using programmable and configurable ",(0,r.kt)("strong",{parentName:"p"},"modules"),"."),(0,r.kt)("p",null,"\xa0",(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(20275).Z}))),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"The main goal of BNB Sidechain is to build such a multi-modular blockchain architecture that it is flexible, convenient, and easy to use."),(0,r.kt)("p",null,"As the current implementation of BNB Sidechain is built on BSC, all existing modules are built into the system smart contracts and into the EVM machine. In the future, a system of modules will be created to allow you to develop a universal smart contract and a bus for interacting between modules and other parts. This all will make it possible to use such modules in any blockchain solution."),(0,r.kt)("p",null,"BNB Sidechain brings with it programmable and configurable modules that can be used or modified by developers to reach their business goals, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cross Chain \u2014 BAS is designed to provide cross chain functionality for the native assets. Since native assets are fully managed by BAS developers they can compromise token supply or mint/burn tokens.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Staking & Staking Pool\u2014 BAS supports on-chain staking system and uses the PoSA (proof-of-stake-of-authority) staking model. It allows users to delegate their tokens to the specific validator and share validator's rewards based on the total staked amount.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Runtime Upgrade \u2014 Runtime upgrade system smart contract allows to modify the existing byte code for the system smart contracts. However, it doesn't allow to modify user's smart contracts. To apply any modification to the sources, the user must create a proposal, and changes can only be applied once a quorum is reached on the governance. This scheme is much simpler compared to hard forks, as it doesn't require all validators to upgrade their nodes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Blockchain & EVM \u2014 for block producing and EVM transaction execution, of course, each BNB Sidechain can define their own runtime execution environment based, for example, on WebAssembly in future.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Web3 API \u2014 for BNB Sidechainic compatibility with Web3 ecosystem including MetaMask and other applications.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transaction Pool \u2014 for managing internal BNB Sidechain policies for transaction filtering and for charging fees for the system operational.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PoSA Consensus & Staking \u2014 for users to be able to stake to the authorized validators in the BNB Sidechain network and guarantee the safeness of actions applied on the chain.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Governance \u2014 A decentralized voting system for managing and implementing changes to cryptocurrency blockchains.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Storage & State \u2014 for persisting local data."))),(0,r.kt)("p",null,"Internally, BNB Sidechain implements the following modules: Parlia consensus engine, staking pools, governance, dynamic runtime upgrades, reward management, manageable blockchain params, and EVM hooks."),(0,r.kt)("h2",{id:"repositories"},"Repositories"),(0,r.kt)("p",null,"Here is the list repositories provided by Ankr for development on BNB Sidechain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ankr-network/bas-genesis-config"},"BNB Sidechain-genesis-config")," \u2014 genesis smart contracts and scripts for building the genesis config."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ankr-network/bas-template-bsc"},"BNB Sidechain-template-bsc")," \u2014 BNB Sidechain-compatible BSC-BNB Sidechained template."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ankr-network/bas-javascript-monorepo"},"BNB Sidechain-javascript-monorepo")," \u2014 mono-repository with all frontend-related packages and SDKs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ankr-network/bas-devnet-setup"},"BNB Sidechain-devnet-setup")," \u2014 scripts for running BNB Sidechain devnet.")))}p.isMDXComponent=!0},20275:function(e,t,n){t.Z=n.p+"assets/images/bs-architecture-5d53163ffabde8fc9ba7020e0140ce00.png"}}]);