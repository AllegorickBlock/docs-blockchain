import{d as i,h as s,D as t,c,I as a,w as l,M as d,o as u,a as h,aH as p}from"./chunks/framework.iCXnZ0m9.js";const w=d('<h1 id="ultra-wallet-browser-extension" tabindex="-1">Ultra Wallet Browser Extension <a class="header-anchor" href="#ultra-wallet-browser-extension" aria-label="Permalink to &quot;Ultra Wallet Browser Extension&quot;">​</a></h1><p><img src="'+p+'" alt=""></p><p>The Ultra Wallet browser extension is a crypto wallet that allows you to access decentralized applications on Ultra&#39;s blockchain and securely manage your digital assets.</p><p>The principal functions are to create and manage private keys on behalf of its users, to manage the connections between the wallet and web applications, and allow users to securely sign transactions.</p><p>To interact with the wallet, the wallet injects an object named <code>ultra</code> into the javascript context of every site. This object contains all the methods required to obtain the user&#39;s blockchain id, their public key, and to sign blockchain transactions.</p><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h2><ul><li><a href="./installing-extension.html">How to install the extension</a></li><li><a href="./get-tokens-testnet.html">How to get tokens on Testnet</a></li><li><a href="https://stackblitz.com/edit/ultra-wallet-test" target="_blank" rel="noreferrer">Demo application</a></li><li><a href="./developer-resources.html">Developer resources</a></li><li><a href="https://github.com/Stuyk/ultra-wallet-app-template" target="_blank" rel="noreferrer">App Template</a></li></ul><h2 id="try-it" tabindex="-1">Try It <a class="header-anchor" href="#try-it" aria-label="Permalink to &quot;Try It&quot;">​</a></h2><p>Use the button below to try connecting with the Ultra Wallet, it should pop up when clicked if the extension is installed.</p>',9),x=JSON.parse('{"title":"Introduction","description":"","frontmatter":{"title":"Introduction","order":-1,"oultine":[0,4]},"headers":[],"relativePath":"products/ultra-wallet/index.md","filePath":"products/ultra-wallet/index.md","lastUpdated":null}'),f={name:"products/ultra-wallet/index.md"},g=i({...f,setup(m){let e=s(!1);async function n(){e.value||(e.value=!0,window&&window.ultra?(await window.ultra.connect(),alert("Wallet Connected!")):alert("Wallet Unavailable"),e.value=!1)}return(b,_)=>{const o=t("Button"),r=t("ClientOnly");return u(),c("div",null,[w,a(r,null,{default:l(()=>[a(o,{onOnClick:n,align:"left"},{default:l(()=>[h("Open Wallet")]),_:1})]),_:1})])}}});export{x as __pageData,g as default};
