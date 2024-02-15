import{_ as t,c as s,o as a,M as i}from"./chunks/framework.iQnRqnyd.js";const u=JSON.parse('{"title":"create.b","description":"","frontmatter":{"title":"create.b","order":10},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/create.b.md","filePath":"blockchain/contracts/nft-contract/nft-actions/create.b.md","lastUpdated":null}'),e={name:"blockchain/contracts/nft-contract/nft-actions/create.b.md"},n=i(`<h1 id="create-b" tabindex="-1">create.b <a class="header-anchor" href="#create-b" aria-label="Permalink to &quot;create.b&quot;">​</a></h1><p>Create a token factory.</p><h2 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h2><p>Used to create a token factory for the asset_creator and will be managed by the asset_manager.</p><p>The asset_manager and the asset_creator need to agree on the token factory configuration according to their specific business strategy, like resale share, etc. The agreement is done via the co-signing of the transaction.</p><p>By creating the token factory together, the asset_creator agrees to all the terms, including letting the asset_manager manage the factory and its tokens.</p><p>If the stat parameter is not specified, a new token factory is created in inactive state which may be changed with the setstatus action.</p><p>RAM usage of a factory creation is covered by eosio.nftram.</p><p>If asset_manager is other than ultra.nft.ft, the cost of a factory creation is paid in UOS to eosio.pool.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>Upon creation, a token factory id will be automatically assigned to the new token factory. This id is incremental.</p><p><strong>Token factory ID</strong></p><ul><li><p>64-bit number</p></li><li><p>Factory counter is stored in a singleton table, which will be automatically increased each time a token factory is created.</p></li></ul><p><strong>Factory creation</strong></p><ul><li><p>RAM usage of a factory creation is covered by eosio.nftram. 4GB will be gifted to eosio.nfrram to start with. The action fails If the unused RAM of eosio.nftram is less than or equal to 200MB.</p></li><li><p>factory data is stored to factory.b table. Each factory.b entry’s pack size should be less than or equal to 1920 bytes.</p></li><li><p>if asset_manager is other than ultra.nft.ft, The cost of a factory creation is paid to eosio.pool and it is non-refundable.</p><ul><li><p>First, the cost in USD is (factory RAM payment size) * (RAM price), where</p><ul><li><p>factory RAM payment size: 2KB</p></li><li><p>RAM price: 0.15USD/KB</p></li></ul></li><li><p>The cost is paid in UOS. The action gets 1 MINUTE conversion rate in USD/UOS from eosio.oracle contract. and calculates the cost by (2KB * 0.15USD/KB) / (conversion rate) = 0.3USD/(conversion rate)</p></li></ul></li></ul><p><strong>Authorized minters registration</strong></p><ul><li><p>Authorized minters can be registered at the same time, by being specified as authorized_minters (an array of minter_authorization_info) parameter.</p></li><li><p>Registration cost is calculated and charged to asset_manager. For the details, see authorized minters info RAM usage/cost calculation and payment/refund.</p></li></ul><p>Minting limit per account of a token factory Minting limit can also be set at the same time, by being specified as account_minting_limit parameter.</p><p><strong>Notifications</strong></p><p><code>require_recipient</code> is done for <code>asset_manager</code> and <code>asset_creator</code></p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><p>Try to think of the action parameters as a <strong>JSON Object</strong> when reading this table. There will be a <strong>JavaScript</strong> example of the action below this table.</p><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Required</th><th>Default (null input)</th><th>Remarks</th></tr></thead><tbody><tr><td>memo</td><td>string</td><td>string</td><td>yes</td><td>no default</td><td>memo cannot have more than 256 bytes</td></tr><tr><td>asset_creator</td><td>name</td><td>string</td><td>yes</td><td>no default</td><td>asset_manager and asset_creator are required to sign this actionasset_manager will be the one who pays the RAM for the token factory storageasset_manager and asset_creator can be same accountasset_manager will be any valid account including ultra.nft.ft</td></tr><tr><td>asset_manager</td><td>name</td><td>string</td><td>yes</td><td>no default</td><td></td></tr><tr><td>minimum_resell_price</td><td>asset</td><td>string</td><td>no</td><td>null</td><td>Should be specified in UOS or USD.If set to null or 0, tokens can be transferred to other accounts with the transfer action, as long as token still in trading window and outside of lockup time. If set to &gt; 0, the token can only be sold to others through the buy action. <code>conditionless_receivers</code> will ignore these restrictions when transferred</td></tr><tr><td>resale_shares</td><td>vector::&lt;resale_share&gt;</td><td>Array</td><td>no</td><td>null</td><td>Each resale share has a <code>receiver</code> (C++ type: <code>name</code>, JS type: <code>string</code>) and <code>basis_point</code> (C++ type: uint16_t, JS type: <code>number</code>). <code>1</code> in <code>basis_point</code> mean <code>0.0001</code>, which means 0.01%. Total limit of resale shares: specified by Ultra in <code>saleshrlmcfg</code> table under a scope of <code>1</code> in <code>max_factory_share_bp</code> (otherwise default of 7000 basis_point or 70%). Receiver can be duplicated</td></tr><tr><td>mintable_window_start</td><td>time_point_sec</td><td>string</td><td>no</td><td>null</td><td>Input will be in UTC date up to seconds. For example: <code>&#39;2021-06-01T00:00:00&#39;</code>. Combination: <code>[no start, no end]</code> - forever mintable; <code>[no start, end]</code> - can only be minted before the ending date; <code>[start, no end]</code> - can only be minted after the starting date; <code>[start, end]</code> - can only be minted between the start and end dates. Conditions: If end date is set, it must be after the current block time; if start and end are both set, the end date must be after the start date</td></tr><tr><td>mintable_window_end</td><td>time_point_sec</td><td>string</td><td>no</td><td>null</td><td></td></tr><tr><td>trading_window_start</td><td>time_point_sec</td><td>string</td><td>no</td><td>null</td><td>There are 2 types of inputs available: <code>null</code>: will ignore this property. <code>UTC_date_string</code> exact date in UTC, up to seconds. For example: <code>&#39;2021-06-01T00:00:00&#39;</code>. Combination: <code>[no start, no end]</code> - forever tradable; <code>[no start, end]</code> - can only be traded before ending date; <code>[start, no end]</code> - can only be traded after starting date; <code>[start, end]</code> - can only be traded in between start and end date. Conditions: If both input is the same type a <code>time_point_sec</code>, end date must be larger than the start date.Where this is being checked: <code>buy</code>, <code>resell</code>, <code>transfer</code>. <code>conditionless_receivers</code> will ignore this when transferring tokens</td></tr><tr><td>trading_window_end</td><td>time_point_sec</td><td>string</td><td>no</td><td>null</td><td></td></tr><tr><td>recall_window_start</td><td>time_since_mint</td><td>number</td><td>no</td><td>null</td><td>There are 2 types of inputs available: <code>null</code>: will ignore this property; time from the token mint time. For example: <code>5</code>. In this example exactly 5 seconds after the mint time. Combination: <code>[no start, no end]</code> - not recallable; <code>[no start, end]</code> - can only be recalled before ending date <code>[start, no end]</code> - can only be recalled after starting date; <code>[start, end]</code> - can only be recalled in between start and end date. Conditions: If both input is the same type a <code>time_since_mint</code>, end date must be larger than the start date. Where this being checked: <code>recall</code>. NOTE: From Release 36, recall feature will be disabled by default when creating new factory, which meant create action will fail if <code>recall_window_start</code> or <code>recall_window_end</code> was inputted.</td></tr><tr><td>recall_window_end</td><td>time_since_mint</td><td>number</td><td>no</td><td>null</td><td></td></tr><tr><td>max_mintable_tokens</td><td>uint64_t</td><td>number</td><td>no</td><td>null</td><td><code>null</code> means this can be minted with an unlimited capacity; &gt; 0 means the factory can only mint as many tokens as specified</td></tr><tr><td>lockup_time</td><td>uint32_t</td><td>number</td><td>no</td><td>0</td><td>Value is in secondsCannot resell or transfer this token when it’s still in lockup time, unless the token is transferred to a conditionless_receiver. NOTE: From Release 36, lockup feature will be disabled by default when creating new factory, which meant create action will fail if lockup_time was inputted.</td></tr><tr><td>conditionless_receivers</td><td>vector</td><td>Array</td><td>no</td><td>null</td><td>if set, all accounts must existwhen transferred to an account in the list, it will bypass checks for trading window and lockup time</td></tr><tr><td>stat</td><td>uint8_t</td><td>number</td><td>no</td><td>1</td><td><code>0</code> - active uniq factories can do everything. <code>1</code> - inactive uniq factories can do everything, except mint. <code>2</code> - shutdown uniq factories can do everything, except mint, and activate.</td></tr><tr><td>factory_uri</td><td>string</td><td>string</td><td>yes</td><td>no default</td><td>base URI pointing to the metadata of the token factory. e.g. Ultra.io/meta/1234, redundancy.ultra.io/meta/1234. Values cannot be an empty string</td></tr><tr><td>factory_hash</td><td>checksum256</td><td>string</td><td>no</td><td>null</td><td>Hash of factory meta data. Optional - simple SHA256 hash of metadata file to guarantee no external content changes</td></tr><tr><td>authorized_minters</td><td>minter_authorization_vector</td><td>Array</td><td>no</td><td>null</td><td>Specifies accounts authorized to mint tokens from the token factory. minter_authorization_info is defined as a tuple of eosio::name (the account being authorized) and uint32_t (quantity that the authorized account can mint).</td></tr><tr><td>account_minting_limit</td><td>uint32_t</td><td>number</td><td>no</td><td>null</td><td>Must be at least 1.Limits the amount of tokens that can be minted per eos account.Set to null to allow for unlimited tokens per eos account.</td></tr><tr><td>transfer_window_start</td><td>time_point_sec</td><td>string</td><td>no</td><td>null</td><td>There are 2 types of inputs available: <code>null</code>: will ignore this property; <code>UTC_date_string</code>: exact date in UTC, up to seconds. For example: &#39;2021-06-01T00:00:00&#39;. Combinations: <code>[no start, no end]</code> - forever transferrable; <code>[no start, end]</code> - can only be transferred before ending date; <code>[start, no end]</code> - can only be transferred after starting date; <code>[start, end]</code> - can only be transferred in between start and end date. Conditions: If both input is the same type a time_point_sec, end date must be larger than the start date. Where this is being checked: <code>transfer</code></td></tr><tr><td>transfer_window_end</td><td>time_point_sec</td><td>string</td><td>no</td><td>null</td><td></td></tr><tr><td>maximum_uos_payment</td><td>asset</td><td>string</td><td>no</td><td>null</td><td>Specifies the maximum amount of UOS that the caller can pay.</td></tr><tr><td>default_token_uri</td><td>string</td><td>string</td><td>yes</td><td>no default</td><td>URI pointing to the token metadata if there is no token-specific metadata. Must not be empty and can be either static or dynamic. More details <a href="./../../../../tutorials/uniq-factories/uniq-variants/organizing-metadata.html">here</a></td></tr><tr><td>default_token_hash</td><td>checksum256</td><td>string</td><td>no</td><td>null</td><td>Hash of static default token URI. It is optional to provide this and it should be a SHA256 of the content of default token URI. If default token URI is dynamic - specify the hash per token instead</td></tr><tr><td>lock_hash</td><td>bool</td><td>boolean</td><td>no</td><td>false</td><td>Whether to prevent changes to the hashes provided during the factory creation</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create.b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[{&quot;memo&quot;:&quot;&quot;,&quot;asset_manager&quot;:&quot;ultra.nft.ft&quot;,&quot;asset_creator&quot;:&quot;ultra&quot;,&quot;minimum_resell_price&quot;:null,&quot;resale_shares&quot;:[{&quot;receiver&quot;:&quot;ultra.nft.ft&quot;, &quot;basis_point&quot;:1}],&quot;mintable_window_start&quot;:&quot;2021-05-01T00:00:00&quot;,&quot;mintable_window_end&quot;:null,&quot;trading_window_start&quot;: &quot;2021-05-01T00:00:00&quot;,&quot;trading_window_end&quot;:null,&quot;recall_window_start&quot;: null,&quot;recall_window_end&quot;:null,&quot;max_mintable_tokens&quot;:10,&quot;lockup_time&quot;:null,&quot;conditionless_receivers&quot;:null,&quot;stat&quot;:0,&quot;factory_uri&quot;:&quot;test&quot;,&quot;factory_hash&quot;:&quot;d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523&quot;, &quot;authorized_minters&quot;:[{&quot;authorized_minter&quot;:&quot;ultra.mrktng&quot;,&quot;quantity&quot;:10}],&quot;account_minting_limit&quot;:10,&quot;transfer_window_start&quot;:&quot;1970-01-01T00:00:00&quot;,&quot;transfer_window_end&quot;:null, &quot;maximum_uos_payment&quot;: null, &quot;default_token_uri&quot;: &quot;test2&quot;, &quot;default_token_hash&quot;:&quot;d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523&quot;, &quot;lock_hash&quot;:false}]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra.nft.ft</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  actions: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eosio.nft.ft&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;create.b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ultra.nft.ft&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;active&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, { actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;asset_creator.acc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;active&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        create: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          memo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          asset_manager: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ultra.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          asset_creator: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;asset_creator.acc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          minimum_resell_price: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1.00000000 USD&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          resale_shares: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;receiver&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;resale1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;basis_point&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;receiver&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;resale2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;basis_point&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          mintable_window_start: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2021-05-31T00:00:00&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          mintable_window_end: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          trading_window_start: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2021-05-31T00:00:00&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          trading_window_end: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          recall_window_start: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          recall_window_end: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          max_mintable_tokens: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          lockup_time: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          conditionless_receivers: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;receiver1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          stat: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          factory_uri: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          factory_hash: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          authorized_minters : [{authorized_minter:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ultra&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, quantity: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          account_minting_limit: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          transfer_window_start: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1970-01-01T00:00:00&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          transfer_window_end: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          maximum_uos_payment: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          default_token_uri: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          default_token_hash: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          lock_hash: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]}, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}),</span></span></code></pre></div>`,27),d=[n];function o(r,l,h,c,p,k){return a(),s("div",null,d)}const g=t(e,[["render",o]]);export{u as __pageData,g as default};
