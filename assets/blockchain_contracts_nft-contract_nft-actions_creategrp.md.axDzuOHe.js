import{_ as s,c as a,o as i,M as t}from"./chunks/framework.iQnRqnyd.js";const g=JSON.parse('{"title":"creategrp","description":"","frontmatter":{"title":"creategrp","order":11},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/creategrp.md","filePath":"blockchain/contracts/nft-contract/nft-actions/creategrp.md","lastUpdated":null}'),e={name:"blockchain/contracts/nft-contract/nft-actions/creategrp.md"},n=t(`<h1 id="creategrp" tabindex="-1">creategrp <a class="header-anchor" href="#creategrp" aria-label="Permalink to &quot;creategrp&quot;">​</a></h1><p>Creates a factory group.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><ul><li><p>Anyone can create a factory group. RAM is charged in the beginning so a creator needs to make sure max_uos_payment is larger than charged value.</p></li><li><p><code>factories</code> field cannot contain duplicates.</p></li></ul><p><strong>RAM usage/cost calculation and payment/refund</strong></p><ul><li><p>RAM usage used to store factory group info is covered by <code>eosio.nftram</code> account. If the unused RAM of eosio.nftram is less than or equal to 200MB, the action can’t be executed.</p></li><li><p>The cost of a factory group entry is paid to <code>eosio.nftram</code> and it will be locked up in this entry. The funds are released back to the original payer after the factory group is deleted</p><ul><li><p>First, the cost in USD is (factory RAM payment size) * (RAM price), where</p><ul><li><p>NFT RAM payment size: <strong>960 bytes</strong>. Estimated for:</p><ul><li><code>uri</code> with length of 256</li><li>64 entries in <code>factories</code></li></ul></li><li><p>RAM price: <strong>0.15 USD/KB</strong></p></li></ul></li><li><p>The cost is paid in UOS. The action gets <code>1 MINUTE</code> conversion rate in USD/UOS from <code>eosio.oracle</code> contract. and calculates the cost by (960B/1024B * 0.15USD/KB) / (conversion rate) = <code>0.140625</code> <strong>USD</strong>/(conversion rate)</p></li></ul></li><li><p>When a factory group manager adds or removes a factory from the group</p><ul><li>No additional RAM is charged for or released funds for</li></ul></li></ul><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>field name</th><th>c++ type</th><th>js type</th></tr></thead><tbody><tr><td>manager</td><td>name</td><td>string</td></tr><tr><td>uri</td><td>string</td><td>string</td></tr><tr><td>hash</td><td>checksum256</td><td>string</td></tr><tr><td>factories</td><td>vector&lt;uint64_t&gt;</td><td>Array</td></tr><tr><td>max_uos_payment</td><td>asset</td><td>string</td></tr></tbody></table><h2 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-label="Permalink to &quot;CLI&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> creategrp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[&quot;ultra&quot;, &quot;http://localhost&quot;, &quot;d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523&quot;, [&quot;20&quot;, &quot;7&quot;, &quot;44&quot;], &quot;1.00000000 UOS&quot;]&#39;</span></span></code></pre></div><h2 id="js" tabindex="-1">JS <a class="header-anchor" href="#js" aria-label="Permalink to &quot;JS&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;creategrp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    authorization: [{actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ubisoft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        manager: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ubisoft&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        uri: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://nft.ubisoft.com/factorygroups/assasinscreed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        hash: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        factories: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        max_uos_payment: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.00000000 UOS&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}], {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,12),l=[n];function r(h,p,o,c,d,k){return i(),a("div",null,l)}const u=s(e,[["render",r]]);export{g as __pageData,u as default};
