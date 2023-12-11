import{_ as e,c as t,o as a,M as o}from"./chunks/framework.8hLZdMGl.js";const r="/experimental/assets/select-project-folder.c52z-340.png",s="/experimental/assets/open-command-palette.Oz4MwYX5.png",l="/experimental/assets/intellisense-updating.wqJbCm03.png",n="/experimental/assets/intellisense-ready.suT7OpjY.png",C=JSON.parse('{"title":"2. Smart Contract Setup","description":"","frontmatter":{"title":"2. Smart Contract Setup","outline":[0,5],"order":-98},"headers":[],"relativePath":"tutorials/smart-contracts/setup.md","filePath":"tutorials/smart-contracts/setup.md","lastUpdated":null}'),i={name:"tutorials/smart-contracts/setup.md"},c=o('<h1 id="smart-contract-setup" tabindex="-1">Smart Contract Setup <a class="header-anchor" href="#smart-contract-setup" aria-label="Permalink to &quot;Smart Contract Setup&quot;">​</a></h1><p>There&#39;s a few things you will need to get started with writing smart contracts.</p><p>We highly suggest you install the following programs and their individual extensions for this tutorial.</p><ul><li><a href="https://docs.docker.com/engine/install/" target="_blank" rel="noreferrer">Docker</a></li><li><a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">VSCode</a><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools" target="_blank" rel="noreferrer">C/C++ Extension</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp" target="_blank" rel="noreferrer">Ultra.io Smart Contract Toolkit</a></li></ul></li></ul><p>Depending on where you want to start your project. Always start with a workspace folder and open it in VSCode.</p><p><img src="'+r+'" alt=""></p><h2 id="scaffolding" tabindex="-1">Scaffolding <a class="header-anchor" href="#scaffolding" aria-label="Permalink to &quot;Scaffolding&quot;">​</a></h2><p>Once you have the <a href="https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp" target="_blank" rel="noreferrer">Ultra.io Smart Contract Toolkit</a> installed, you can easily create a starting template.</p><p>Access the <code>Command Palette</code> in VSCode with <code>F1</code> on the keyboard.</p><p><img src="'+s+'" alt=""></p><h3 id="command-palette-command" tabindex="-1">Command Palette Command <a class="header-anchor" href="#command-palette-command" aria-label="Permalink to &quot;Command Palette Command&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Ultra: Create Smart Contract</span></span></code></pre></div><p>It will prompt you for a folder to put the source code under. It is recommended to use <code>src</code> if it&#39;s a single contract.</p><h2 id="header-setup" tabindex="-1">Header Setup <a class="header-anchor" href="#header-setup" aria-label="Permalink to &quot;Header Setup&quot;">​</a></h2><p>After creating the contract, you will need to <strong>install headers</strong> to remove some of the errors you will get from VSCode about the code.</p><p>There are currently <strong>two ways</strong> to install headers.</p><ul><li>Open your <code>.cpp</code> file that was generated, and follow the prompts.</li><li>Through the <code>Command Palette (F1)</code> under <code>Ultra: Add C++ Header Files</code></li></ul><p>After installation, and following the prompts your window will restart.</p><p>Wait for intellisense to finish updating to ensure everything is working correctly.</p><p><img src="'+l+'" alt=""></p><p><img src="'+n+'" alt=""></p>',21),p=[c];function d(m,u,h,g,f,_){return a(),t("div",null,p)}const k=e(i,[["render",d]]);export{C as __pageData,k as default};
