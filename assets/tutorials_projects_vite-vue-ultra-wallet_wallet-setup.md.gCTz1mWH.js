import{_ as s,c as i,o as a,M as e}from"./chunks/framework.ac2XHnzj.js";const t="/assets/vscode-init-project.albayj7B.png",n="/assets/install-basic-ssl.3wf3_UL0.png",l="/assets/ignore-chrome-certificate.T3j6w_ad.png",p="/assets/ultra-wallet-present.Lv4Ddik5.png",v=JSON.parse('{"title":"Wallet Setup","description":"","frontmatter":{"title":"Wallet Setup","order":-8,"oultine":[0,4]},"headers":[],"relativePath":"tutorials/projects/vite-vue-ultra-wallet/wallet-setup.md","filePath":"tutorials/projects/vite-vue-ultra-wallet/wallet-setup.md","lastUpdated":null}'),h={name:"tutorials/projects/vite-vue-ultra-wallet/wallet-setup.md"},o=e('<h1 id="wallet-setup" tabindex="-1">Wallet Setup <a class="header-anchor" href="#wallet-setup" aria-label="Permalink to &quot;Wallet Setup&quot;">​</a></h1><p>Setting up the ultra wallet for your application is as simple as reading <code>window.ultra</code>. However, we have a few modifications we need to do to <code>Vite</code> so we can connect to the Ultra Extension in our browser.</p><h2 id="open-your-project" tabindex="-1">Open Your Project <a class="header-anchor" href="#open-your-project" aria-label="Permalink to &quot;Open Your Project&quot;">​</a></h2><p>In the previous steps we created a project called <code>ultra-project</code>.</p><p>We are now going to open that project in an IDE of our choice, we&#39;ll be using <code>VSCode</code> for this tutorial.</p><p><img src="'+t+'" alt=""></p><p>As you can see we have everything we need here.</p><ul><li>Project files on the left</li><li>Terminal for running commands on the bottom <ul><li>If this isn&#39;t opened just click Terminal in the menu at the top. Sometimes it&#39;s under the <code>...</code> menu.</li></ul></li><li>Editor where the larger <code>VSCode</code> logo is.</li></ul><h2 id="basic-ssl-installation" tabindex="-1">Basic SSL Installation <a class="header-anchor" href="#basic-ssl-installation" aria-label="Permalink to &quot;Basic SSL Installation&quot;">​</a></h2><p>We need to install an HTTPs server for Vite in order to properly preview and work with the ultra wallet. Let&#39;s do that right away.</p><p>Run the following command in terminal:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i -D @vitejs/plugin-basic-ssl</span></span></code></pre></div><p><img src="'+n+`" alt=""></p><p>This will add a new development package dependency.</p><h3 id="edit-vite-config-js" tabindex="-1">Edit <code>vite.config.js</code> <a class="header-anchor" href="#edit-vite-config-js" aria-label="Permalink to &quot;Edit \`vite.config.js\`&quot;">​</a></h3><p>Modify your configuration to instantiate the <code>basicSSL</code> plugin inside of the <code>plugins</code> array.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BasicSSL </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@vitejs/plugin-basic-ssl&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BasicSSL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h3 id="run-npm-run-dev" tabindex="-1">Run <code>npm run dev</code> <a class="header-anchor" href="#run-npm-run-dev" aria-label="Permalink to &quot;Run \`npm run dev\`&quot;">​</a></h3><p>Open your browser to the <code>URL</code> that is printed in your terminal, <strong>while you are editing files the browser will automatically refresh</strong>.</p><p>You should see your browser complaining about it not being private, this will not matter as we are developing locally.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>When you deploy your website to the world, you should secure it with HTTP(s) by utilizing a certificate provider.</p></div><p>You can move past this by going to <code>advanced</code> and proceeding even though it is not safe.</p><p><img src="`+l+`" alt=""></p><h2 id="edit-src-app-vue" tabindex="-1">Edit <code>src/App.vue</code> <a class="header-anchor" href="#edit-src-app-vue" aria-label="Permalink to &quot;Edit \`src/App.vue\`&quot;">​</a></h2><p>We are going to modify this main file and remove all the extras tags and data inside, and apply a simple boilerplate so we can see the changes directly.</p><p><strong>App.vue</strong></p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { ref } from &#39;vue&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const greetingMessage = ref(&#39;My Ultra App&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{ greetingMessage }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/** Leave this if you want to add some style later */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="checking-wallet-instance" tabindex="-1">Checking Wallet Instance <a class="header-anchor" href="#checking-wallet-instance" aria-label="Permalink to &quot;Checking Wallet Instance&quot;">​</a></h3><p>One of the first things we are going to do is check if the <code>ultra</code> variable is available inside of <code>window</code>.</p><p>What better way than to simply log <code>window.ultra</code> to console.</p><p>In <strong>App.vue</strong> <code>script</code> section add the following:</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { ref } from &#39;vue&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const greetingMessage = ref(&#39;My Ultra App&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.log(window.ultra);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Check your browser&#39;s console (F12) and see if an <code>object</code> prints out.</p><p><img src="`+p+'" alt=""></p><p>Looks good, let&#39;s move on to the next section.</p>',35),r=[o];function d(c,k,g,E,u,y){return a(),i("div",null,r)}const f=s(h,[["render",d]]);export{v as __pageData,f as default};
