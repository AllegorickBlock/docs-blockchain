import{_ as a,c as n,o as t,M as s}from"./chunks/framework.iQnRqnyd.js";const m=JSON.parse('{"title":"mgrnfts","description":"","frontmatter":{"title":"mgrnfts","order":18},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/mgrnfts.md","filePath":"blockchain/contracts/nft-contract/nft-actions/mgrnfts.md","lastUpdated":null}'),e={name:"blockchain/contracts/nft-contract/nft-actions/mgrnfts.md"},o=s(`<h1 id="mgrnfts" tabindex="-1">mgrnfts <a class="header-anchor" href="#mgrnfts" aria-label="Permalink to &quot;mgrnfts&quot;">​</a></h1><p>This action can be used to migrate tokens from v0 to v1 as continuous migration.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p><strong>Parameter validation</strong></p><p>Owners should be an array of token owner accounts.</p><p>The number of tokens to migrate is specified as total_no, which should not be zero.</p><p><strong>Main operations</strong></p><p>Each v0 token record in token.a table is converted to v1 token record and moved to token.b table. This process continues until total_no of tokens are migrated or it reaches the end of token.a table of the last owner account of owners.</p><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th></tr></thead><tbody><tr><td>owners</td><td><code>vector&lt;name&gt;</code></td><td>array of strings</td></tr><tr><td>total_no</td><td>uint64_t</td><td>number</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cleos push action eosio.nft.ft mgrnfts &#39;{&quot;owners&quot;: [&quot;alice&quot;, &quot;bob&quot;], &quot;total_no&quot;: 10}&#39; -p ultra.nft.ft@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>await api.transact({</span></span>
<span class="line"><span>  actions: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      account: &quot;eosio.nft.ft&quot;,</span></span>
<span class="line"><span>      name: &quot;mgrnfts&quot;,</span></span>
<span class="line"><span>      authorization: [{ actor: &quot;ultra.nft.ft&quot;, permission: &quot;active&quot; }],</span></span>
<span class="line"><span>      data: {</span></span>
<span class="line"><span>        owners: [&quot;alice&quot;, &quot;bob&quot;],</span></span>
<span class="line"><span>        total_no: 10</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}, {</span></span>
<span class="line"><span>  blocksBehind: 3,</span></span>
<span class="line"><span>  expireSeconds: 30,</span></span>
<span class="line"><span>});</span></span></code></pre></div>`,13),c=[o];function i(p,r,l,d,h,u){return t(),n("div",null,c)}const b=a(e,[["render",i]]);export{m as __pageData,b as default};
