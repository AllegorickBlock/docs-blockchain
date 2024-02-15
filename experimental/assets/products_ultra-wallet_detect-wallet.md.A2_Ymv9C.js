import{_ as t,c as e,o as a,M as s}from"./chunks/framework.iCXnZ0m9.js";const u=JSON.parse('{"title":"Detecting the Ultra Wallet","description":"","frontmatter":{"title":"Detecting the Ultra Wallet","order":4,"outline":[0,4]},"headers":[],"relativePath":"products/ultra-wallet/detect-wallet.md","filePath":"products/ultra-wallet/detect-wallet.md","lastUpdated":null}'),i={name:"products/ultra-wallet/detect-wallet.md"},l=s(`<h1 id="detecting-the-ultra-wallet" tabindex="-1">Detecting the Ultra Wallet <a class="header-anchor" href="#detecting-the-ultra-wallet" aria-label="Permalink to &quot;Detecting the Ultra Wallet&quot;">​</a></h1><p>To detect if a user has already installed the Ultra Wallet browser extension the web application should run over HTTPS and check for the existence of an <code>ultra</code> object in the <code>window</code> variable.</p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ultra&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Ultra Wallet is installed!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,3),n=[l];function r(h,d,c,p,o,k){return a(),e("div",null,n)}const _=t(i,[["render",r]]);export{u as __pageData,_ as default};
