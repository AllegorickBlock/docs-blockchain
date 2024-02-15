import{_ as e,c as t,o as a,M as n}from"./chunks/framework.fT7jmvE0.js";const m=JSON.parse('{"title":"Launching an Instance","description":"","frontmatter":{"title":"Launching an Instance","outline":[0,4],"order":-98},"headers":[],"relativePath":"blockchain/block-producers/maintenance/launching-a-new-instance.md","filePath":"blockchain/block-producers/maintenance/launching-a-new-instance.md","lastUpdated":null}'),i={name:"blockchain/block-producers/maintenance/launching-a-new-instance.md"},s=n(`<h1 id="launching-an-instance" tabindex="-1">Launching an Instance <a class="header-anchor" href="#launching-an-instance" aria-label="Permalink to &quot;Launching an Instance&quot;">​</a></h1><p>Before the nodeos launcher script is executed, it is important to create a wallet using <em>cleos</em>. The wallet will import and maintain all the keys that shall be required by the Block Producer. It is important that all the private keys generated in the <a href="./account-administration.html">Account Administration</a> section are imported to this wallet. The commands for creating a wallet and importing the keys are given below.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos wallet create </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">YOUR_WALLET_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">file </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WALLET_PASSWD_FILE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos wallet </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --name YOUR_WALLET_NAME --private-key YOUR_PRIVATE_KEY</span></span></code></pre></div><p><strong>Please note</strong> that it is not a requirement to run <em>cleos</em> and have a wallet on all of the node instances, however, this is a <em>requirement</em> for <a href="./../launch-procedures/synchronizing-with-genesis-node.html">Synchronizing with Genesis Node</a> .</p><p>It is important to save the password for your wallet in a file and keep it secure. Once the unlocked wallet has not been used for more than 15 minutes (the default timeout duration) <em>cleos</em> is locks your wallet as a safety measure.</p><p>If you attempt to run a command using the wallet, it will be required to unlock it first by providing the password.</p><p>In addition to the aforementioned, you are also required to create a genesis.json file for being able to launch your block producer in the genesis mode.</p><p>Finally, it is time to run your node. To run nodeos, all you will need to do is to run the start script provided by Ultra. Nodeos will replay the blockchain and after some time will start the block production process.</p><p>Once that process is running, you will be able to interact with the blockchain.</p>`,9),o=[s];function l(r,c,h,p,d,u){return a(),t("div",null,o)}const g=e(i,[["render",l]]);export{m as __pageData,g as default};
