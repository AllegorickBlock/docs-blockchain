import{_ as s,c as o,o as t,M as i}from"./chunks/framework.-7aAo1ka.js";const q=JSON.parse('{"title":"Resigning System Accounts","description":"","frontmatter":{"title":"Resigning System Accounts","outline":[0,4],"order":-95},"headers":[],"relativePath":"blockchain/block-producers/launch-procedures/resigning-eosio-and-system-accounts.md","filePath":"blockchain/block-producers/launch-procedures/resigning-eosio-and-system-accounts.md","lastUpdated":null}'),e={name:"blockchain/block-producers/launch-procedures/resigning-eosio-and-system-accounts.md"},a=i(`<h1 id="resigning-eosio-and-system-accounts" tabindex="-1">Resigning EOSIO and System Accounts <a class="header-anchor" href="#resigning-eosio-and-system-accounts" aria-label="Permalink to &quot;Resigning EOSIO and System Accounts&quot;">​</a></h1><p>Once the network has 3 producers actively producing blocks for the chain; Ultra can move on to resigning the <code>eosio</code> account permissions to the producers.</p><p>Ultra will also need to go through and only let <code>eosio</code> control the system accounts. This is a precaution to ensure that all system accounts are only controlled by <code>eosio</code>.</p><h2 id="resigning-system-accounts" tabindex="-1">Resigning System Accounts <a class="header-anchor" href="#resigning-system-accounts" aria-label="Permalink to &quot;Resigning System Accounts&quot;">​</a></h2><p>The first thing we’ll do is resign <code>eosio</code> and give privileges to <code>eosio.wrap</code> and <code>eosio.msig</code>.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos push action eosio setpriv </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;[&quot;eosio.msig&quot;, 1]&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p eosio@active</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos push action eosio setpriv </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;[&quot;eosio.wrap&quot;, 1]&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p eosio@active</span></span></code></pre></div><h2 id="resigning-eosio-account" tabindex="-1">Resigning EOSIO Account <a class="header-anchor" href="#resigning-eosio-account" aria-label="Permalink to &quot;Resigning EOSIO Account&quot;">​</a></h2><p>After we can do the final update of authorization on <code>eosio</code> by resigning all permissions to the <code>eosio.prods</code> account.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos push action eosio updateauth </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{&quot;account&quot;: &quot;eosio&quot;, &quot;permission&quot;: &quot;owner&quot;, &quot;parent&quot;: &quot;&quot;, &quot;auth&quot;: {&quot;threshold&quot;: 1, &quot;keys&quot;: [], &quot;waits&quot;: [], &quot;accounts&quot;: [{&quot;weight&quot;: 1, &quot;permission&quot;: {&quot;actor&quot;: &quot;eosio.prods&quot;, &quot;permission&quot;: &quot;active&quot;}}]}}&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p eosio@owner</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos push action eosio updateauth </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{&quot;account&quot;: &quot;eosio&quot;, &quot;permission&quot;: &quot;active&quot;, &quot;parent&quot;: &quot;owner&quot;, &quot;auth&quot;: {&quot;threshold&quot;: 1, &quot;keys&quot;: [], &quot;waits&quot;: [], &quot;accounts&quot;: [{&quot;weight&quot;: 1, &quot;permission&quot;: {&quot;actor&quot;: &quot;eosio.prods&quot;, &quot;permission&quot;: &quot;active&quot;}}]}}&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p eosio@active</span></span></code></pre></div>`,9),n=[a];function c(u,r,p,l,h,d){return t(),o("div",null,n)}const k=s(e,[["render",c]]);export{q as __pageData,k as default};