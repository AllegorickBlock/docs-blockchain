import{_ as e,v as s,b as a,R as o}from"./chunks/framework.a49639fc.js";const t="/experimental/assets/vscode-docker-issue.fe045e50.png",m=JSON.parse('{"title":"7. Troubleshooting Deployment","description":"","frontmatter":{"title":"7. Troubleshooting Deployment","deploy":["staging","mainnet"],"order":0,"outline":[0,5]},"headers":[],"relativePath":"guides/Smart Contracts/7. troubleshooting.md","filePath":"guides/Smart Contracts/7. troubleshooting.md","lastUpdated":1698835580000}'),n={name:"guides/Smart Contracts/7. troubleshooting.md"},r=o(`<h1 id="troubleshooting-deployment" tabindex="-1">Troubleshooting Deployment <a class="header-anchor" href="#troubleshooting-deployment" aria-label="Permalink to &quot;Troubleshooting Deployment&quot;">​</a></h1><h2 id="invalid-uos-precision" tabindex="-1">Invalid UOS precision <a class="header-anchor" href="#invalid-uos-precision" aria-label="Permalink to &quot;Invalid UOS precision&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Error</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3050003</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio_assert_message</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">assertion</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failure</span></span>
<span class="line"><span style="color:#FFCB6B;">Error</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Details:</span></span>
<span class="line"><span style="color:#FFCB6B;">assertion</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failure</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">message:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">must</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ram</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">core</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">token</span></span></code></pre></div><p>Make sure UOS is specified with <strong>exactly</strong> 8 decimals as in <a href="https://developers.ultra.io/experimental/contracts/System%20Contract/System%20Actions/buyram.html#buyram-buy-ram-with-uos" target="_blank" rel="noreferrer">buyram</a> page.</p><h2 id="docker-container-start-issues" tabindex="-1">Docker container start issues <a class="header-anchor" href="#docker-container-start-issues" aria-label="Permalink to &quot;Docker container start issues&quot;">​</a></h2><p>You may get a port allocated</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1f9fd2ba03b243b5c8dabff76b9ffa49a8141af0fc9f7d46b37f9054e8cc945f</span></span>
<span class="line"><span style="color:#A6ACCD;">docker: Error response from daemon: driver failed programming external connectivity on endpoint ultra (2da26f7837141bd89470ce839b24c5ce9784376c7bdf8ffdcbaa6e93495773cf): Bind for 0.0.0.0:9876 failed: port is already allocated.</span></span></code></pre></div><p>Consider stoppping a process listening to that port or reassigning a mapping to a different port on your host machine, i.e <code>-p 9876:1234</code></p><p>You can also change your workdir (output directory) with <code>-v</code>. Refer to docker <a href="https://docs.docker.com/storage/volumes/#choose-the--v-or---mount-flag" target="_blank" rel="noreferrer">documentation</a>.</p><h2 id="vscode-extension-docker-unavailable" tabindex="-1">Vscode extension docker unavailable <a class="header-anchor" href="#vscode-extension-docker-unavailable" aria-label="Permalink to &quot;Vscode extension docker unavailable&quot;">​</a></h2><p><img src="`+t+'" alt=""></p><p>If you get <code>docker unavailable</code> error message make sure you have disconnected from docker container by clicking on the bottom-left corner.</p><p><br> For any further assistance don&#39;t hestitate to contract the team on <a href="https://discord.com/invite/U7raPf6qZu" target="_blank" rel="noreferrer">discord</a>.</p>',13),l=[r];function c(p,i,d,u,h,y){return s(),a("div",null,l)}const f=e(n,[["render",c]]);export{m as __pageData,f as default};
