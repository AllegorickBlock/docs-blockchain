import{_ as s,c as a,o as i,M as t}from"./chunks/framework.iCXnZ0m9.js";const y=JSON.parse('{"title":"allowpred","description":"","frontmatter":{"title":"allowpred"},"headers":[],"relativePath":"blockchain/contracts/system-contract/system-actions/allowpred.md","filePath":"blockchain/contracts/system-contract/system-actions/allowpred.md","lastUpdated":null}'),e={name:"blockchain/contracts/system-contract/system-actions/allowpred.md"},n=t(`<h1 id="allowpred-setup-a-predicate" tabindex="-1">allowpred - setup a predicate <a class="header-anchor" href="#allowpred-setup-a-predicate" aria-label="Permalink to &quot;allowpred - setup a predicate&quot;">​</a></h1><p>Allows a specific predicate which will select specific actions of 3rd party accounts to be paid by the account.</p><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>payer</td><td>eosio::name</td><td>The account that setups a predicate</td></tr><tr><td>paid_contract</td><td>eosio::name</td><td>The contract that account will allow paying for</td></tr><tr><td>paid_action</td><td>eosio::name</td><td>The action from the contract that account will allow paying for</td></tr><tr><td>maximum_power_usage</td><td>uint64_t</td><td>The limit for CPU usage in us for paid action</td></tr><tr><td>predicate_contract</td><td>std::optional<code>&lt;eosio::name&gt;</code></td><td>The predicate contract that will be used to create inline action call</td></tr><tr><td>predicate_action</td><td>std::optional<code>&lt;eosio::name&gt;</code></td><td>The predicate action that will be used to create inline action call</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allowpred</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[&quot;alice&quot;, &quot;eosio&quot;, &quot;buyram&quot;, 2000, &quot;bob&quot;, &quot;buyrampred&quot;]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alice</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    actions: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;allowpred&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                payer: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                paid_contract: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                paid_action: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;buyram&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                maximum_power_usage: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                predicate_contract: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                predicate_action: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;buyrampred&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,7),l=[n];function p(h,d,o,r,c,k){return i(),a("div",null,l)}const g=s(e,[["render",p]]);export{y as __pageData,g as default};
