import{_ as i,c as s,o as t,M as a,bA as n,bB as e}from"./chunks/framework.8hLZdMGl.js";const y=JSON.parse('{"title":"Minting Your First Uniq","description":"","frontmatter":{"title":"Minting Your First Uniq","order":6,"outline":[0,4]},"headers":[],"relativePath":"tutorials/uniq-factories/building-uniq-factories/mintingyourfirstuniq.md","filePath":"tutorials/uniq-factories/building-uniq-factories/mintingyourfirstuniq.md","lastUpdated":null}'),o={name:"tutorials/uniq-factories/building-uniq-factories/mintingyourfirstuniq.md"},l=a('<h1 id="minting-your-first-uniq" tabindex="-1">Minting your first Uniq <a class="header-anchor" href="#minting-your-first-uniq" aria-label="Permalink to &quot;Minting your first Uniq&quot;">​</a></h1><h2 id="let-s-gooooo" tabindex="-1">Let&#39;s Gooooo! <a class="header-anchor" href="#let-s-gooooo" aria-label="Permalink to &quot;Let&#39;s Gooooo!&quot;">​</a></h2><p>Now that you have your Token Factory up and running, you are free to mint some Uniqs. Exciting times are ahead!</p><h3 id="token-factory-information" tabindex="-1">Token Factory Information <a class="header-anchor" href="#token-factory-information" aria-label="Permalink to &quot;Token Factory Information&quot;">​</a></h3><p>As with the Token Factory, there is some specific data that you must include in the command.</p><ul><li><code>&lt;YOUR UNIQ URL&gt;</code> - The URL of the metadata either as a zip file, or targeting the <code>X.json</code> file with a full path</li><li><code>&lt;YOUR META HASH&gt;</code> - The hash of the uniq, you can find this in <code>upload.json</code> in the <code>factory</code> block at the top</li></ul><p>You can find these in the <code>upload.json</code> file and they will look something like this:</p><p><img src="'+n+'" alt=""></p><p>You will also need your <code>&lt;FACTORY ID&gt;</code>.</p><p>The easiest way to get this information is to:</p><ol><li>Go to your account on the <a href="https://explorer.testnet.ultra.io" target="_blank" rel="noreferrer">Block Explorer</a></li><li>Scroll down to the transactions and open the <code>create</code> action</li><li>On the left, you can see DB Operations</li></ol><p>In the DB Operations section you&#39;ll see some information. Most pertinent to you is the <code>UPDATE ROW</code> which actually holds your Token Factory id.</p><p><img src="'+e+`" alt=""></p><h3 id="accounts" tabindex="-1">Accounts <a class="header-anchor" href="#accounts" aria-label="Permalink to &quot;Accounts&quot;">​</a></h3><p>You&#39;ll also, of course, need to input <code>&lt;YOUR ACCOUNT&gt;</code> and the <code>&lt;TARGET ACCOUNT&gt;</code> which will receive the new Uniq.</p><h3 id="the-issue-action" tabindex="-1">The Issue Action <a class="header-anchor" href="#the-issue-action" aria-label="Permalink to &quot;The Issue Action&quot;">​</a></h3><p>Once you have the required information, minting is a simple, straightforward transaction via cleos.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://ultratest.api.eosnation.io</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> issue.b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;to&quot;: &quot;&lt;TARGET ACCOUNT&gt;&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;token_configs&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;token_factory_id&quot;: &lt;FACTORY ID&gt;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;amount&quot;: 1,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;custom_data&quot;: &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;memo&quot;: &quot;Your first Uniq!&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;authorizer&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;maximum_uos_payment&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;token_metadata&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;meta_uri&quot;: &quot;&lt;YOUR UNIQ URI&gt;&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;meta_hash&quot;:&quot;&lt;YOUR META HASH&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">YOUR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCOUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>Congratulations! You&#39;ve now minted your first Uniq on Ultra&#39;s Testnet!</p>`,19),h=[l];function r(p,c,u,k,d,F){return t(),s("div",null,h)}const q=i(o,[["render",r]]);export{y as __pageData,q as default};
