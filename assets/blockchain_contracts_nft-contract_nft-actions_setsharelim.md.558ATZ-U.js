import{_ as s,c as a,o as i,M as t}from"./chunks/framework.iQnRqnyd.js";const m=JSON.parse('{"title":"setsharelim","description":"","frontmatter":{"title":"setsharelim","order":31},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/setsharelim.md","filePath":"blockchain/contracts/nft-contract/nft-actions/setsharelim.md","lastUpdated":null}'),n={name:"blockchain/contracts/nft-contract/nft-actions/setsharelim.md"},e=t(`<h1 id="setsharelim" tabindex="-1">setsharelim <a class="header-anchor" href="#setsharelim" aria-label="Permalink to &quot;setsharelim&quot;">​</a></h1><p>Allow ultra.nft.ft account to set maximum share limit for protocol fee, factory beneficiaries and promoter during first hand and second hand purchase</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>The required authorization is the ultra.nft.ft account managed by admins.</p><p>After the transaction execution the maximum share in basis points will be adjusted for protocol fee, factory beneficiaries and sale promoter. Additionally a default promoter may be configured</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>type</td><td>factory_sale_share_type</td><td>Indicates a type of limits to change. 0 - second hand purchase, 1 - first hand purchase</td></tr><tr><td>config</td><td>factory_sale_share_limit_config</td><td>Object detailing limits for specific types of sale shares</td></tr></tbody></table><h2 id="factory-sale-share-limit-config-definition" tabindex="-1"><code>factory_sale_share_limit_config</code> definition <a class="header-anchor" href="#factory-sale-share-limit-config-definition" aria-label="Permalink to &quot;\`factory_sale_share_limit_config\` definition&quot;">​</a></h2><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>max_ultra_share_bp</td><td>uint16_t</td><td>Maximum sale share for Ultra protocol in basis points</td></tr><tr><td>max_factory_share_bp</td><td>uint16_t</td><td>Maximum total share of all factory beneficiaries in basis points</td></tr><tr><td>min_promoter_share_bp</td><td>uint16_t</td><td>Minimum allowed promoter share in basis points</td></tr><tr><td>max_promoter_share_bp</td><td>uint16_t</td><td>Maximum allowed promoter share in basis points</td></tr><tr><td>default_promoter</td><td>std::optional&lt;eosio::name&gt;</td><td>Default promoter account to be used if no promoter is specified</td></tr><tr><td>promoter_payments_enabled</td><td>bool</td><td>Whether the promoter payments should be enabled for this type of sale share</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cleos push action eosio.nft.ft setsharelim &#39;[0, [1000, 7000, 250, 1000, &quot;ultra.nft.ft&quot;, true]]&#39; -p ultra.nft.ft</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        actions: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;setsharelim&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ultra.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    config: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        max_ultra_share_bp: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        max_factory_share_bp: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        min_promoter_share_bp: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">250</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        max_promoter_share_bp: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        default_promoter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ultra.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        promoter_payments_enabled: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,13),l=[e];function h(r,p,o,d,k,c){return i(),a("div",null,l)}const y=s(n,[["render",h]]);export{m as __pageData,y as default};
