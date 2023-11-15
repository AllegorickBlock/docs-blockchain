import{_ as s,v as a,b as n,R as t}from"./chunks/framework.99ac92c4.js";const F=JSON.parse('{"title":"Detecting the Blockchain Network","description":"","frontmatter":{"title":"Detecting the Blockchain Network","deploy":["staging","mainnet"],"order":5,"outline":[0,4]},"headers":[],"relativePath":"guides/Wallet Extension/detect-blockchain-network.md","filePath":"guides/Wallet Extension/detect-blockchain-network.md","lastUpdated":null}'),e={name:"guides/Wallet Extension/detect-blockchain-network.md"},o=t(`<h1 id="detecting-the-blockchain-network" tabindex="-1">Detecting the Blockchain Network <a class="header-anchor" href="#detecting-the-blockchain-network" aria-label="Permalink to &quot;Detecting the Blockchain Network&quot;">​</a></h1><p>The Ultra blockchain is distinguished by a unique identifier that facilitates the identification of the associated blockchain network. This essential information can be retrieved through the Wallet extension using the following method.</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">response</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ultra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getChainId</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// a9c481dfbc7d9506dc7e87e9a137c931b0a9303f64fd7a1d08b8230133920097</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> (err) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// { status: &quot;error&quot; }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>For more information visit the <a href="./../../api/">List of official Ultra blockchain networks</a></p>`,4),l=[o];function c(p,i,r,h,d,y){return a(),n("div",null,l)}const f=s(e,[["render",c]]);export{F as __pageData,f as default};