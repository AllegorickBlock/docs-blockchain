import{_ as s,c as t,o as i,M as a}from"./chunks/framework.iQnRqnyd.js";const g=JSON.parse('{"title":"issue.b","description":"","frontmatter":{"title":"issue.b","order":14},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/issue.b.md","filePath":"blockchain/contracts/nft-contract/nft-actions/issue.b.md","lastUpdated":null}'),n={name:"blockchain/contracts/nft-contract/nft-actions/issue.b.md"},e=a(`<h1 id="issue-b" tabindex="-1">issue.b <a class="header-anchor" href="#issue-b" aria-label="Permalink to &quot;issue.b&quot;">​</a></h1><p>This action can be used to issue tokens by factory managers or authorized minters</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p><strong>Parameter validation</strong></p><p>Upon the usage of the <strong>issue action,</strong> the action verifies that the parameters supplied in the action have values, such as <strong>to, token_configs</strong>, and <strong>memo.</strong> The memo specifically has a 256-byte limitation. The required authorization is either the token factory manager or the authorized minter account for each token specified in <strong>token_configs</strong>. The <strong>token_configs</strong> vector is verified to not be empty and each <strong>token_config</strong> is verified to have an <strong>amount</strong> specified and a valid <strong>token_factory_id</strong> in order to begin the minting process of a token. The <strong>token_metadata</strong> vector is optional, but if provided, it is verified to be the same length as the number of tokens to mint. Providing the <strong>token_metadata</strong> parameter allows user to set the token metadata at the time of minting the token.</p><p><strong>On-the-fly migration</strong></p><p>If <strong>token_factory</strong> (<strong>token_factory_v0</strong>, to be exact) exists in v0 factory table, <strong>factory.a</strong>, the action copies it to v1 factory table, <strong>factory.b</strong> and removes the existing one from <strong>factory.a</strong>. After that, it operates on v1 <strong>token_factory</strong> (<strong>token_factory_v1</strong>, to be exact).</p><p><strong>Main operations</strong></p><p>The action retrieves the <strong>token_factory</strong> from the token factory table, <strong>factory.b</strong>. It validates that the <strong>token_factory</strong> is currently allowing tokens to be issued and checks if the token can currently be minted based on the <strong>minting window</strong> specified by the <strong>token_factory.</strong> It also checks if there is a <strong>max_mintable_tokens</strong> and ensure that additional token combined with existed token does not exceed that count.</p><p>When <strong>max_mintable_tokens</strong> amount of tokens has been minted, token factory will NOT transition to <code>inactive</code> or <code>shutdown</code> state automatically, this step needs to be done manually.</p><p>The token is then created and whoever the <strong>to</strong> user is the token is emplaced into their token list, <strong>token.b</strong>.</p><p><strong>Token ID</strong></p><ul><li><p>Upon issue, each token will be assigned with 1 unique token ID</p></li><li><p>A singleton is used to track the global token ID.</p></li></ul><p><strong>Minting Limit</strong></p><p>Minting limit is a new concept that was introduced in Release 27. It allows for uniq factories to limit the amount of tokens that can be minted to an individual account. Meaning, that if the <strong>account_minting_limit</strong> of a token factory is set to 5, then users may not purchase more than 5 tokens under that specific account.</p><ul><li><p><strong>account_minting_limit</strong> of a token factory can be set/reset by calling <code>limitmint</code> action. It is null by default, which means the minting limit function is not applied to the factory.</p></li><li><p>If a token factory has <strong>account_minting_limit</strong> specified, it automatically creates entries in the <strong>mintstat.a</strong> table with the scope of the <strong>token_factory_id</strong>, where the number of minted tokens for each issued account is recorded.</p></li><li><p>When the limit for the token factory is reached, it will prevent the user from purchasing any more tokens.</p></li><li><p>If the <strong>account_minting_limit</strong> is set to null it allows users to purchase infinite tokens.</p></li></ul><p><strong>Authorized minter</strong></p><ul><li><p>An optional parameter, <strong>authorizer</strong>, can be specified to issue tokens by an authorized minter instead of token factory manager (<strong>asset_manager</strong>). In this case:</p><ul><li><p><strong>authorizer</strong>&#39;s permission is required instead of token factory manager&#39;s one.</p></li><li><p><strong>authorizer</strong>&#39;s minting quota stored in authorized minter info table is reduced by the number of minted tokens, and if it reaches zero, their authorized minter info record is removed from the table.</p></li></ul></li></ul><p><strong>RAM usage</strong></p><ul><li><p>Creating new token</p><ul><li><p>RAM usage of creating a token is covered by <code>eosio.nftram</code>. <strong>4GB</strong> will be gifted to <code>eosio.nfrram</code> to start with. The action fails If the unused RAM of <code>eosio.nftram</code> is less than or equal to <strong>200MB</strong>.</p></li><li><p>Token data is stored to <code>token.b</code> table and each entry’s pack size will be <strong>192 bytes</strong>.</p></li><li><p>If the RAM usage for token exceeds maximum pack size of <strong>384 bytes</strong>, action will fail.</p></li><li><p>If <strong>asset_manager</strong> or <strong>authorizer</strong> is other than <code>ultra.nft.ft</code>, The cost of creating a token is paid to <code>eosio.nftram</code> and it will be locked up in the token minted.</p><ul><li><p>First, the cost in USD is (factory RAM payment size) * (RAM price), where</p><ul><li><p>NFT RAM payment size: <strong>384 bytes</strong></p><ul><li>estimated for a token with URI of size 192</li></ul></li><li><p>RAM price: <strong>0.15 USD/KB</strong></p></li></ul></li><li><p>The cost is paid in UOS. The action gets <code>1 MINUTE</code> conversion rate in USD/UOS from <code>eosio.oracle</code> contract. and calculates the cost by (384B/1024B * 0.15USD/KB) / (conversion rate) = <code>0.05625</code> <strong>USD</strong>/(conversion rate)</p></li></ul></li></ul></li><li><p>When a mintstats.a entry is added due to first time minting to an account from a factory with minting limit, it will charge the cost for adding each mintstat.a entry. The payer is the authorizer of the minting (it’s the authorized minter if using authorizer, ortherwise the manager). It pays to eosio.nftram, and its ram usage and payment will be bookkept in the manager’s vault.</p></li><li><p>When an authorized minter’s quota becomes zero (by minting their quota or by delegating their quota to another authorized minter)</p><ul><li><p>The authorized minter’s info is removed from <code>authmintrs.a</code> table.</p></li><li><p>The factory’s manager will get the refund proportional to the amount of RAM released from the RAM vault, i.e. refund = (accumulated RAM payment) * (released amount of RAM)/(accumulated amount of RAM usage).</p></li></ul></li></ul><p><strong>Notifications</strong></p><p><code>require_recipient</code> is done for <code>asset_manager</code> of the token factory, <code>to</code> account that recieves the token and <code>authorizer</code> (if specified in the action)</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><p>Try to think of the action parameters as a <strong>JSON Object</strong> when reading this table. There will be a <strong>JavaScript</strong> example of the action below this table.</p><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th></tr></thead><tbody><tr><td>to</td><td>eosio::name</td><td>string</td></tr><tr><td>token_configs</td><td>std::vector&lt;token_config&gt;</td><td>Array</td></tr><tr><td>memo</td><td>std::string</td><td>string</td></tr><tr><td>authorizer</td><td>std::optional&lt;eosio::name&gt;</td><td>string (must be provided, can be <code>null</code>)</td></tr><tr><td>maximum_uos_payment</td><td>std::optional&lt;eosio::asset&gt;</td><td>string (must be provided, can be <code>null</code>)</td></tr><tr><td>token_metadata</td><td>eosio::binary_extension&lt;std::optional&lt;std::vector&lt;token_metadata&gt;&gt;&gt;</td><td>Array (can be omitted or be <code>null</code>)</td></tr></tbody></table><p><strong>Token Config Interface</strong></p><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th></tr></thead><tbody><tr><td>token_factory_id</td><td>uint64_t</td><td>number</td></tr><tr><td>amount</td><td>uint32_t</td><td>number</td></tr><tr><td>custom_data</td><td>std::string</td><td>string</td></tr></tbody></table><p><strong>Token Metadata Interface</strong></p><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th></tr></thead><tbody><tr><td>meta_uri</td><td>std::optional&lt;std::string&gt;</td><td>string</td></tr><tr><td>meta_hash</td><td>std::optional&lt;checksum256&gt;</td><td>string</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> issue.b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[{ &quot;to&quot;: &quot;to.user.acc&quot;, &quot;token_configs&quot;: [{&quot;token_factory_id&quot;: 5, &quot;amount&quot;: 1, &quot;custom_data&quot;: &quot;&quot;}], &quot;memo&quot;: &quot;token time&quot;, &quot;authorizer&quot;: null, &quot;maximum_uos_payment&quot;: &quot;10.00000000 UOS&quot; }]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> factory.manager@active</span></span></code></pre></div><ul><li>with <strong>authorizer and token_metadata</strong></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> issue.b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[{ &quot;to&quot;: &quot;to.user.acc&quot;, &quot;token_configs&quot;: [{&quot;token_factory_id&quot;: 2, &quot;amount&quot;: 1, &quot;custom_data&quot;: &quot;&quot;}], &quot;token_metadata&quot;:[{&quot;meta_uri&quot;: &quot;some-uri&quot;, &quot;meta_hash&quot;: &quot;d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc539&quot;}], &quot;memo&quot;: &quot;token time&quot;, &quot;authorizer&quot;: &quot;auth.minter.account&quot;, &quot;maximum_uos_payment&quot;: null }]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auth.minter.account@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        actions: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;issue.b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;factory.manager&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    issue: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        to: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;to.user.acc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        token_configs: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                token_factory_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                amount: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                custom_data: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        memo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;token time&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        authorizer: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        maximum_uos_payment: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;10.00000000 UOS&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><ul><li>with <strong>authorizer and token_metadata</strong></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        actions: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;issue.b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;auth.minter.account&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    issue: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        to: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;to.user.acc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        token_configs: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                token_factory_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                amount: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                custom_data: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        token_metadata: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                meta_uri: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;some-uri&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                meta_hash: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc539&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        memo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;token time&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        authorizer: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;auth.minter.account&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        maximum_uos_payment: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,37),o=[e];function l(h,r,p,k,d,c){return i(),t("div",null,o)}const u=s(n,[["render",l]]);export{g as __pageData,u as default};
