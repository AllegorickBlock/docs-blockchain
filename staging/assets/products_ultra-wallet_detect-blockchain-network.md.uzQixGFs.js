import{_ as i,c as t,o as a,M as s}from"./chunks/framework.-7aAo1ka.js";const u=JSON.parse('{"title":"Detecting the Blockchain Network","description":"","frontmatter":{"title":"Detecting the Blockchain Network","order":5,"outline":[0,4]},"headers":[],"relativePath":"products/ultra-wallet/detect-blockchain-network.md","filePath":"products/ultra-wallet/detect-blockchain-network.md","lastUpdated":null}'),e={name:"products/ultra-wallet/detect-blockchain-network.md"},n=s(`<h1 id="detecting-the-blockchain-network" tabindex="-1">Detecting the Blockchain Network <a class="header-anchor" href="#detecting-the-blockchain-network" aria-label="Permalink to &quot;Detecting the Blockchain Network&quot;">​</a></h1><p>The Ultra blockchain is distinguished by a unique identifier that facilitates the identification of the associated blockchain network. This essential information can be retrieved through the Wallet extension using the following method.</p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ultra.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getChainId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    response.data;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // a9c481dfbc7d9506dc7e87e9a137c931b0a9303f64fd7a1d08b8230133920097</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // { status: &quot;error&quot; }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>For more information visit the <a href="./../../products/chain-api/">List of official Ultra blockchain networks</a></p>`,4),l=[n];function h(c,o,r,p,k,d){return a(),t("div",null,l)}const E=i(e,[["render",h]]);export{u as __pageData,E as default};
