import{_ as e,c as t,o as a,M as o}from"./chunks/framework.8hLZdMGl.js";const f=JSON.parse('{"title":"System Contract Overview","description":"","frontmatter":{"title":"System Contract Overview","order":-99},"headers":[],"relativePath":"blockchain/contracts/system-contract/index.md","filePath":"blockchain/contracts/system-contract/index.md","lastUpdated":null}'),r={name:"blockchain/contracts/system-contract/index.md"},n=o('<h1 id="system-contract-overview" tabindex="-1">System Contract Overview <a class="header-anchor" href="#system-contract-overview" aria-label="Permalink to &quot;System Contract Overview&quot;">​</a></h1><p>The <code>eosio.system</code> contract inherits its functionality from the traditional EOSIO <code>eosio.system</code> contract. Below are Ultra’s additions or modification to it.</p><h2 id="eba-and-non-eba-accounts" tabindex="-1">EBA and Non-EBA Accounts <a class="header-anchor" href="#eba-and-non-eba-accounts" aria-label="Permalink to &quot;EBA and Non-EBA Accounts&quot;">​</a></h2><p>An Ultra account is a set of blockchain data records that establishes a permission graph for the account keys and keys belonging to other accounts. It controls the resources possessed by the account and provides a set of actions that are used to communicate with the account, and in the case that it is present, the smart contract.</p><p><a href="./eba-non-eba-accounts.html">EBA and non-EBA Accounts</a></p><h2 id="know-your-client" tabindex="-1">Know Your Client <a class="header-anchor" href="#know-your-client" aria-label="Permalink to &quot;Know Your Client&quot;">​</a></h2><p>Ultra requires that developers who wish to deploy smart contracts on Ultra platform perform a Know Your Client procedure.</p><p><a href="./know-your-client.html">Know Your Client</a></p><h2 id="ram-market" tabindex="-1">RAM Market <a class="header-anchor" href="#ram-market" aria-label="Permalink to &quot;RAM Market&quot;">​</a></h2><p>RAM is used for storing various on-chain data, like token, account, or smart contract data. Ultra requires that developers pay for the RAM consumed by their users. Only developer accounts are able to purchase larger amounts of RAM and then allocate it to their user base.</p><p><a href="./ram-market.html">RAM Market</a></p><h2 id="paying-for-3rd-parties-with-predicates" tabindex="-1">Paying for 3rd Parties with Predicates <a class="header-anchor" href="#paying-for-3rd-parties-with-predicates" aria-label="Permalink to &quot;Paying for 3rd Parties with Predicates&quot;">​</a></h2><p>The predicate system allows developers to cover their users&#39; resource costs. Developers may allow certain actions to be performed by other accounts at the cost of their own POWER resources.</p><p><a href="./predicate-system.html">Predicate System</a></p><h2 id="power-staking" tabindex="-1">POWER Staking <a class="header-anchor" href="#power-staking" aria-label="Permalink to &quot;POWER Staking&quot;">​</a></h2><p>Account owners can stake POWER for their transactions to be included in blocks in a prioritized way. The traditional EOSIO stakes for CPU and NET separately while staking for POWER combines the two resources.</p><p><a href="./power-bandwidth-staking.html">POWER bandwidth staking</a></p>',17),s=[n];function i(c,d,h,l,p,u){return a(),t("div",null,s)}const b=e(r,[["render",i]]);export{f as __pageData,b as default};
