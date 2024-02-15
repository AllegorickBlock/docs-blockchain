import{_ as e,c as i,o as a,M as t,az as l}from"./chunks/framework.fT7jmvE0.js";const g=JSON.parse('{"title":"Request Fungible Token","description":"","frontmatter":{"title":"Request Fungible Token","outline":[0,4],"order":-99},"headers":[],"relativePath":"products/fungible-tokens/index.md","filePath":"products/fungible-tokens/index.md","lastUpdated":null}'),o={name:"products/fungible-tokens/index.md"},s=t('<h1 id="request-fungible-token" tabindex="-1">Request Fungible Token <a class="header-anchor" href="#request-fungible-token" aria-label="Permalink to &quot;Request Fungible Token&quot;">​</a></h1><h2 id="prerequisite" tabindex="-1">Prerequisite <a class="header-anchor" href="#prerequisite" aria-label="Permalink to &quot;Prerequisite&quot;">​</a></h2><p>By design, we do not allow developers to freely create new Fungible Token (FT) on our blockchain since developers might take advantage of our blockchain and spam the network by sending their FT to everyone. This action first of all wastes our RAM that can be put to much better use, and second of all it will annoy our users with a lot of junk FT.</p><p>However, Ultra still allows developers to create their own FT on our network if they make a request and meet our requirements.</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><ul><li>You need to own a developer account before making a request. Please refer to this <a href="./../../blockchain/general/tools/cleos.html#creating-an-account">process</a>.</li><li>Token you want to create must meet our standards. Please refer below for more info.</li></ul><h2 id="make-a-request" tabindex="-1">Make a request <a class="header-anchor" href="#make-a-request" aria-label="Permalink to &quot;Make a request&quot;">​</a></h2><ul><li><p>Send request email to <a href="developers@ultra.io">developers@ultra.io</a></p></li><li><p>Or go to our <a href="https://discord.com/invite/mkfkJexbV3" target="_blank" rel="noreferrer">Discord</a>.</p></li><li><p>Navigate to one of our development channels.</p></li></ul><p><img src="'+l+`" alt=""></p><ul><li>Create an FT creation request with your account. You can follow this example:</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Creation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Request</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Account:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ab2cd3ef4gh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Token</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Max</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Supply:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100000.000000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TOKEN</span></span></code></pre></div><ul><li>If your token meet our requirements, we will process your token creation, and issue the token to your requested account.</li></ul><p><em>Note</em>: Since creating token requires Ultra and Block Producers reviews, it might take up to 2-5 working days once your request is approved.</p><h2 id="token-requirements" tabindex="-1">Token Requirements <a class="header-anchor" href="#token-requirements" aria-label="Permalink to &quot;Token Requirements&quot;">​</a></h2><ul><li>Token Symbol <ul><li>Can only be characters in capital</li><li>Can not have more than 7 characters</li><li>Must meet our community standards and regulations.</li><li>Must not be taken yet.</li></ul></li><li>Token Supply <ul><li>Cannot be 0</li><li>The maximum supply without decimal is <code>2^62 - 1</code> or <code>4611686018427387903</code></li><li>You can define how many decimals you can have by moving the decimal point on your desired max supply.</li><li>The maximum number of digits you can have before the decimal point is <code>18</code>.</li></ul></li></ul><p>Examples:</p><ul><li>Valid Token <ul><li>18273.21233 TEST</li><li>213.0 BDGA</li><li>123467889 A</li></ul></li><li>Invalid Token <ul><li>1000 G4H%A - Token symbol contains invalid character.</li><li>1000.0000 ABCDEFGH - Token symbol is too long</li><li>17268.9900 SEX - Token symbol might not meet our standards.</li><li>1000.000 UOS - UOS is our core token and it already taken.</li><li>0 HAGD - Max supply need to be larger than 0.</li><li>10000.0000000000000000 ABC - Max supply without decimal point is larger than <code>4611686018427387903</code>.</li></ul></li></ul>`,17),n=[s];function r(u,d,h,c,p,k){return a(),i("div",null,n)}const b=e(o,[["render",r]]);export{g as __pageData,b as default};
