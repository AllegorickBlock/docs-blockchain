import{_ as o,v as s,b as t,R as e}from"./chunks/framework.a49639fc.js";const h=JSON.parse('{"title":"Resigning System Accounts","description":"","frontmatter":{"title":"Resigning System Accounts","deploy":["staging","mainnet"],"outline":[0,4],"order":-95},"headers":[],"relativePath":"learn/Block Producers/Launch Procedures/resigning-eosio-and-system-accounts.md","filePath":"learn/Block Producers/Launch Procedures/resigning-eosio-and-system-accounts.md","lastUpdated":1694638970000}'),n={name:"learn/Block Producers/Launch Procedures/resigning-eosio-and-system-accounts.md"},a=e(`<h1 id="resigning-eosio-and-system-accounts" tabindex="-1">Resigning EOSIO and System Accounts <a class="header-anchor" href="#resigning-eosio-and-system-accounts" aria-label="Permalink to &quot;Resigning EOSIO and System Accounts&quot;">​</a></h1><p>Once the network has 3 producers actively producing blocks for the chain; Ultra can move on to resigning the eosio permissions to the producers.</p><p>Ultra will also need to go through and only let eosio control the system accounts. This is a precaution to ensure that all system accounts are only controlled by eosio.</p><h2 id="resigning-system-accounts" tabindex="-1">Resigning System Accounts <a class="header-anchor" href="#resigning-system-accounts" aria-label="Permalink to &quot;Resigning System Accounts&quot;">​</a></h2><p>The first thing we’ll do is resign eosio and give privileges to eosio.wrap and eosio.msig.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos push action eosio setpriv </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;eosio.msig&quot;, 1]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio@active</span></span>
<span class="line"><span style="color:#A6ACCD;">cleos push action eosio setpriv </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;eosio.wrap&quot;, 1]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio@active</span></span></code></pre></div><h2 id="resigning-eosio-account" tabindex="-1">Resigning EOSIO Account <a class="header-anchor" href="#resigning-eosio-account" aria-label="Permalink to &quot;Resigning EOSIO Account&quot;">​</a></h2><p>After we can do the final update of authorization on eosio by resigning all permissions to the eosio.prods account.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos push action eosio updateauth </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;account&quot;: &quot;eosio&quot;, &quot;permission&quot;: &quot;owner&quot;, &quot;parent&quot;: &quot;&quot;, &quot;auth&quot;: {&quot;threshold&quot;: 1, &quot;keys&quot;: [], &quot;waits&quot;: [], &quot;accounts&quot;: [{&quot;weight&quot;: 1, &quot;permission&quot;: {&quot;actor&quot;: &quot;eosio.prods&quot;, &quot;permission&quot;: &quot;active&quot;}}]}}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio@owner</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cleos push action eosio updateauth </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;account&quot;: &quot;eosio&quot;, &quot;permission&quot;: &quot;active&quot;, &quot;parent&quot;: &quot;owner&quot;, &quot;auth&quot;: {&quot;threshold&quot;: 1, &quot;keys&quot;: [], &quot;waits&quot;: [], &quot;accounts&quot;: [{&quot;weight&quot;: 1, &quot;permission&quot;: {&quot;actor&quot;: &quot;eosio.prods&quot;, &quot;permission&quot;: &quot;active&quot;}}]}}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio@active</span></span></code></pre></div>`,9),i=[a];function c(r,u,p,l,q,d){return s(),t("div",null,i)}const y=o(n,[["render",c]]);export{h as __pageData,y as default};