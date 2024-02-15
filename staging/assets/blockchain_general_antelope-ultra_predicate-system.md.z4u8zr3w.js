import{_ as t,c as e,o as a,M as i}from"./chunks/framework.fT7jmvE0.js";const y=JSON.parse('{"title":"Predicate System","description":"","frontmatter":{"title":"Predicate System","outline":[0,4],"order":-96},"headers":[],"relativePath":"blockchain/general/antelope-ultra/predicate-system.md","filePath":"blockchain/general/antelope-ultra/predicate-system.md","lastUpdated":null}'),s={name:"blockchain/general/antelope-ultra/predicate-system.md"},o=i('<h1 id="predicate-system" tabindex="-1">Predicate System <a class="header-anchor" href="#predicate-system" aria-label="Permalink to &quot;Predicate System&quot;">​</a></h1><p>As part of Ultra’s larger strategy to enable friction-less transactions on the network, we provide a predicate system that allows developers to cover their user’s resource costs.</p><p>Developers may now allow certain actions to be performed by other accounts at the cost of their own POWER resources using the allowpred action. Resources may be revoked using the revokepred action. Developers may also specify a predicate action to call to verify if this action should be paid or not (e.g. check that a user is a premium user or is whitelisted).</p><h2 id="predicate-api" tabindex="-1">Predicate API <a class="header-anchor" href="#predicate-api" aria-label="Permalink to &quot;Predicate API&quot;">​</a></h2><table><thead><tr><th>Optional</th><th>Type</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>No</td><td>name</td><td>payer</td><td>The account that adds a predicate.</td></tr><tr><td>No</td><td>name</td><td>paid_contract</td><td>The contract that account will allow paying for</td></tr><tr><td>No</td><td>name</td><td>paid_action</td><td>The action from the contract that account will allow paying for</td></tr><tr><td>No</td><td>uint64_t</td><td>max power usage</td><td>The limit for POWER usage in UOS for paid action</td></tr><tr><td>Yes</td><td>name</td><td>predicate_contract</td><td>The predicate contract that will be used for inline action call</td></tr><tr><td>Yes</td><td>name</td><td>predicate_action</td><td>The action that will be used to create inline action call</td></tr></tbody></table><p><strong>Example</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos push action eosio allowpred </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;[&quot;&lt;payer_account&gt;&quot;, &quot;&lt;paid_contract&gt;&quot;, &quot;&lt;paid_action&gt;&quot;, &lt;max_allowed_cpu_usage&gt;, &lt;predicate_contract (optional)&gt;, &lt;predicate_action (optional)&gt;]&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">payer_account</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@active</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos push action eosio allowpred </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;[&quot;alice&quot;, &quot;eosio&quot;, &quot;buyram&quot;, 2000, &quot;ubisoft&quot;, &quot;buyrampred&quot;]&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p alice</span></span></code></pre></div><p>A unique @payer permission of the developer account must be specified to utilize this system. An account with the @payer permission provided will be the one to pay for the whole transaction but only if all actions in the transaction are allowed by the payer, and all predicate actions are successfully executed. If @payer is present in the transaction then he will be ranked in the transaction queue described above instead of the first authorizer.</p>',9),r=[o];function n(d,l,c,p,h,u){return a(),e("div",null,r)}const m=t(s,[["render",n]]);export{y as __pageData,m as default};
