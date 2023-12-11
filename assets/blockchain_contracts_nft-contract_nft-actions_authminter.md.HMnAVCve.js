import{_ as s,c as i,o as a,M as t}from"./chunks/framework.ac2XHnzj.js";const u=JSON.parse('{"title":"authminter","description":"","frontmatter":{"title":"authminter","order":3},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/authminter.md","filePath":"blockchain/contracts/nft-contract/nft-actions/authminter.md","lastUpdated":null}'),n={name:"blockchain/contracts/nft-contract/nft-actions/authminter.md"},e=t(`<h1 id="authminter" tabindex="-1">authminter <a class="header-anchor" href="#authminter" aria-label="Permalink to &quot;authminter&quot;">​</a></h1><p>Authorize an account to be able to mint tokens.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Deprecated. Use <code>authmint.b</code> instead</p></div><h2 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h2><p>This action allows a factory Asset Manager to be able to authorize (delegate) minting of factory tokens to another account called Authorized Minter (further - AuthMinter). The following rules apply for this action:</p><ul><li>The Asset Manager can authorize less than the totally available tokens, Total = <code>max_mintable_tokens</code> - <code>minted_tokens_no</code> - <code>sum of delegated tokens</code>.</li><li>Asset Manager cannot authorize themselves, an AuthMinter cannot return tokens to the Asset Manager.</li><li>An AuthMinter can authorize (re-delegate) yet another AuthMinter from their available amount of tokens.</li><li>An AuthMinter can mint their authorized <code>quantity</code> of tokens.</li><li>The RAM cost of storing new authorized minter info is covered by the authorizer’s (i.e., Asset Manager’s or AuthMinter’s) RAM quota. Modifying existing authorized minter info doesn’t change RAM payer.</li></ul><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p><strong>Parameter validation</strong></p><p>The action requires authorization of authorizer which can be either the token_factory::asset_manager or another authorized minter. The account being authorized - authorized_minter should exist. token_factory_id is required and must exist. quantity should be a positive value. memo value has a 256 byte limitation</p><p><strong>On-the-fly migration</strong></p><p>After v1 is activated by activers action, token factory exists either in v0 factory table, factory.a, or v1 factory table, factory.b. If the token factory exists in factory.a, then the token factory is moved to factory.b. In the following descriptions, token factory is either v0 or v1 data structures.</p><p><strong>Main operations</strong></p><p>This action allows a factory Asset Manager to be able to authorize (delegate) minting of factory tokens to another account called Authorized Minter (further - AuthMinter). The following rules apply for this action:</p><ul><li><p>The Asset Manager can authorize less than the totally available tokens, Total = max_mintable_tokens - minted_tokens_no - sum of delegated tokens.</p></li><li><p>Asset Manager cannot authorize themselves, an AuthMinter cannot return tokens to the Asset Manager.</p></li><li><p>An AuthMinter can authorize (re-delegate) yet another AuthMinter from their available amount of tokens.</p></li><li><p>An AuthMinter can mint their authorized quantity of tokens.</p></li><li><p>The RAM cost of storing new authorized minter info is covered by the authorizer’s (i.e., Asset Manager’s or AuthMinter’s) RAM quota. Modifying existing authorized minter info doesn’t change RAM payer.</p></li></ul><p>The authorization data is stored into the authmintrs.a table of eosio.nft.ft contract within the token factory ID scope.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><p>The action parameters as an <strong>JSON Array of Objects.</strong> The Object description is listed in the table below.</p><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Definition</th></tr></thead><tbody><tr><td>authorizer</td><td>eosio::name</td><td>string</td><td>The account that authorizes</td></tr><tr><td>authorized_minter</td><td>eosio::name</td><td>string</td><td>The account being authorized</td></tr><tr><td>quantity</td><td>uint32_t</td><td>number or string</td><td>The number of tokens being authorized</td></tr><tr><td>token_factory_id</td><td>std::optional<code>&lt;uint64_t&gt;</code></td><td>number</td><td>The issuing token factory ID</td></tr><tr><td>memo</td><td>std::string</td><td>string</td><td>A short operation description.</td></tr></tbody></table><h3 id="v1" tabindex="-1">V1 <a class="header-anchor" href="#v1" aria-label="Permalink to &quot;V1&quot;">​</a></h3><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Definition</th></tr></thead><tbody><tr><td>authorizer</td><td>eosio::name</td><td>string</td><td>The account that authorizes</td></tr><tr><td>authorized_minter</td><td>eosio::name</td><td>string</td><td>The account being authorized</td></tr><tr><td>token_factory_id</td><td>std::optional<code>&lt;uint64_t&gt;</code></td><td>number</td><td>The issuing token factory ID</td></tr><tr><td>quantity</td><td>uint32_t</td><td>number or string</td><td>The number of tokens being authorized</td></tr><tr><td>maximum_UOS_payment</td><td><code>optional&lt;asset&gt;</code></td><td>string</td><td>The maximum amount the authorizer will pay</td></tr><tr><td>memo</td><td>std::string</td><td>string</td><td>A short operation description.</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><h3 id="v0" tabindex="-1">V0 <a class="header-anchor" href="#v0" aria-label="Permalink to &quot;V0&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> authminter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{&quot;authorizer&quot;: &quot;carol&quot;, &quot;authorized_minter&quot;: &quot;diane&quot;, &quot;token_factory_id&quot;: &quot;4503599627370496&quot;, &quot;quantity&quot;: &quot;1&quot;, &quot;memo&quot;: &quot;&quot;}&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> carol@active</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># to view the authorization records (alice is the Asset Manager):</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> table</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alice</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> authmintrs.a</span></span></code></pre></div><h3 id="v1-1" tabindex="-1">V1 <a class="header-anchor" href="#v1-1" aria-label="Permalink to &quot;V1&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> authminter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{&quot;authorizer&quot;:&quot;someone&quot;,&quot;authorized_minter&quot;:&quot;someoneelse&quot;,&quot;token_factory_id&quot;:0,&quot;quantity&quot;:5,&quot;maximum_uos_payment&quot;:null,&quot;memo&quot;:&quot;hello world&quot;}&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> carol@active</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># to view the authorization records (alice is the Asset Manager):</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> table</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alice</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> authmintrs.a</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><h3 id="v0-1" tabindex="-1">V0 <a class="header-anchor" href="#v0-1" aria-label="Permalink to &quot;V0&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;authminter&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;carol&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                authorizer: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;carol&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                authorized_minter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;diane&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                token_factory_id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;4503599627370496&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                quantity: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                memo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="v1-2" tabindex="-1">V1 <a class="header-anchor" href="#v1-2" aria-label="Permalink to &quot;V1&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;authminter&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;carol&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                authorizer: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;carol&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                authorized_minter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;someoneelse&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                token_factory_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                quantity: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                maximum_uos_payment: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// OR specify value here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                memo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,30),h=[e];function l(r,o,p,k,d,c){return a(),i("div",null,h)}const g=s(n,[["render",l]]);export{u as __pageData,g as default};
