import{_ as a,c as s,o as n,M as e,ah as t}from"./chunks/framework.8hLZdMGl.js";const k=JSON.parse('{"title":"Account & Permissions","description":"","frontmatter":{"title":"Account & Permissions","outline":[0,4],"order":-97},"headers":[],"relativePath":"blockchain/general/antelope-ultra/accounts-and-permissions.md","filePath":"blockchain/general/antelope-ultra/accounts-and-permissions.md","lastUpdated":null}'),i={name:"blockchain/general/antelope-ultra/accounts-and-permissions.md"},c=e(`<h1 id="accounts-permissions-keys" tabindex="-1">Accounts, Permissions, &amp; Keys <a class="header-anchor" href="#accounts-permissions-keys" aria-label="Permalink to &quot;Accounts, Permissions, &amp; Keys&quot;">​</a></h1><p>Unlike Bitcoin and Ethereum, Ultra necessitates an account on the network for participation. This account employs keypairs linked to permissions, controlling access to specific network actions.</p><p>A keypair, generated through elliptic curve cryptography, involves associating private and public keys. The private key proves ownership of an account, which, in turn, has a public key assigned to one of its permissions.</p><p>Ultra accounts come with default permissions called OWNER and ACTIVE. OWNER functions as a superuser, capable of updating keys for all permissions as the root permission. ACTIVE, another default permission, can execute all actions on the account except updating keys to the OWNER permission.</p><p>Smart contracts are deployed to an account, and each action within a smart contract can have keys assigned to it. This feature allows for specific limitations on which entity, along with which keypair, can call that action.</p><h2 id="account-structure-output" tabindex="-1">Account Structure Output <a class="header-anchor" href="#account-structure-output" aria-label="Permalink to &quot;Account Structure Output&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>permissions:</span></span>
<span class="line"><span>    owner 1: 1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV</span></span>
<span class="line"><span>        active 1: 1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV</span></span>
<span class="line"><span>memory:</span></span>
<span class="line"><span>    quota:       unlimited  used:      3.758 KiB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>net bandwidth:</span></span>
<span class="line"><span>    used:               unlimited</span></span>
<span class="line"><span>    available:          unlimited</span></span>
<span class="line"><span>    limit:              unlimited</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cpu bandwidth:</span></span>
<span class="line"><span>    used:               unlimited</span></span>
<span class="line"><span>    available:          unlimited</span></span>
<span class="line"><span>    limit:              unlimited</span></span></code></pre></div><h2 id="account-structure-diagram" tabindex="-1">Account Structure Diagram <a class="header-anchor" href="#account-structure-diagram" aria-label="Permalink to &quot;Account Structure Diagram&quot;">​</a></h2><p><img src="`+t+'" alt=""></p>',9),o=[c];function p(r,l,u,d,h,m){return n(),s("div",null,o)}const f=a(i,[["render",p]]);export{k as __pageData,f as default};
