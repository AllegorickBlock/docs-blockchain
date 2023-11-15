import{_ as t,v as e,b as a,R as o}from"./chunks/framework.a49639fc.js";const m=JSON.parse('{"title":"Predicate System","description":"","frontmatter":{"title":"Predicate System","deploy":["staging","mainnet"],"outline":[0,4],"order":-96},"headers":[],"relativePath":"learn/Ultra Blockchain/predicate-system.md","filePath":"learn/Ultra Blockchain/predicate-system.md","lastUpdated":1700052261000}'),s={name:"learn/Ultra Blockchain/predicate-system.md"},r=o('<h1 id="predicate-system" tabindex="-1">Predicate System <a class="header-anchor" href="#predicate-system" aria-label="Permalink to &quot;Predicate System&quot;">​</a></h1><p>As part of Ultra’s larger strategy to enable friction-less transactions on the network, we provide a predicate system that allows developers to cover their user’s resource costs.</p><p>Developers may now allow certain actions to be performed by other accounts at the cost of their own POWER resources using the allowpred action. Resources may be revoked using the revokepred action. Developers may also specify a predicate action to call to verify if this action should be paid or not (e.g. check that a user is a premium user or is whitelisted).</p><h2 id="predicate-api" tabindex="-1">Predicate API <a class="header-anchor" href="#predicate-api" aria-label="Permalink to &quot;Predicate API&quot;">​</a></h2><table><thead><tr><th>Optional</th><th>Type</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>No</td><td>name</td><td>payer</td><td>The account that adds a predicate.</td></tr><tr><td>No</td><td>name</td><td>paid_contract</td><td>The contract that account will allow paying for</td></tr><tr><td>No</td><td>name</td><td>paid_action</td><td>The action from the contract that account will allow paying for</td></tr><tr><td>No</td><td>uint64_t</td><td>max power usage</td><td>The limit for POWER usage in UOS for paid action</td></tr><tr><td>Yes</td><td>name</td><td>predicate_contract</td><td>The predicate contract that will be used for inline action call</td></tr><tr><td>Yes</td><td>name</td><td>predicate_action</td><td>The action that will be used to create inline action call</td></tr></tbody></table><p><strong>Example</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos push action eosio allowpred </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;&lt;payer_account&gt;&quot;, &quot;&lt;paid_contract&gt;&quot;, &quot;&lt;paid_action&gt;&quot;, &lt;max_allowed_cpu_usage&gt;, &lt;predicate_contract (optional)&gt;, &lt;predicate_action (optional)&gt;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">payer_account</span><span style="color:#89DDFF;">&gt;@</span><span style="color:#A6ACCD;">active</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos push action eosio allowpred </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;alice&quot;, &quot;eosio&quot;, &quot;buyram&quot;, 2000, &quot;ubisoft&quot;, &quot;buyrampred&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p alice</span></span></code></pre></div><p>A unique @payer permission of the developer account must be specified to utilize this system. An account with the @payer permission provided will be the one to pay for the whole transaction but only if all actions in the transaction are allowed by the payer, and all predicate actions are successfully executed. If @payer is present in the transaction then he will be ranked in the transaction queue described above instead of the first authorizer.</p>',9),n=[r];function i(l,c,d,p,h,u){return e(),a("div",null,n)}const f=t(s,[["render",i]]);export{m as __pageData,f as default};