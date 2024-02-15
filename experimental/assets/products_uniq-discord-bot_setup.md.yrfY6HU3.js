import{_ as s,c as i,o as a,M as e}from"./chunks/framework.iCXnZ0m9.js";const g=JSON.parse('{"title":"Setup Instructions","description":"","frontmatter":{"title":"Setup Instructions","outline":[0,4],"order":2},"headers":[],"relativePath":"products/uniq-discord-bot/setup.md","filePath":"products/uniq-discord-bot/setup.md","lastUpdated":null}'),t={name:"products/uniq-discord-bot/setup.md"},n=e(`<h1 id="setup-instructions" tabindex="-1">Setup Instructions <a class="header-anchor" href="#setup-instructions" aria-label="Permalink to &quot;Setup Instructions&quot;">​</a></h1><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li><a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">NodeJS 16+</a></li><li><a href="./setup.html">Discord Bot Setup</a></li></ul><h2 id="clone-the-repository" tabindex="-1">Clone the repository <a class="header-anchor" href="#clone-the-repository" aria-label="Permalink to &quot;Clone the repository&quot;">​</a></h2><p>You&#39;ll start by cloning the repository.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/ultraio/ultra-discord-uniq-roles-bot</span></span></code></pre></div><p>Navigate into the newly created folder</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra-discord-uniq-roles-bot</span></span></code></pre></div><p>Install npm packages</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><p>Create an <code>.env</code> file in the <code>packages/server</code> folder.</p><p>Fill it out with the environment variable information.</p><p>See the <a href="./environment-variables.html">Environment Variables</a> section for more info.</p><p>See the <a href="./setup.html">Discord Bot Setup</a> to deploy your bot.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DISCORD_BOT_TOKEN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">APPLICATION_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GUILD_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WEBSERVER_PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CNAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">localhost</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MONGODB_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mongodb://USERNAME:PASSWORD@HOST</span></span></code></pre></div>`,15),l=[n];function p(h,o,r,d,c,k){return a(),i("div",null,l)}const E=s(t,[["render",p]]);export{g as __pageData,E as default};
