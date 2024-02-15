import{_ as t,c as a,o as e,M as o,b0 as n,b1 as i}from"./chunks/framework.fT7jmvE0.js";const b=JSON.parse('{"title":"Organizing Metadata","description":"","frontmatter":{"title":"Organizing Metadata","order":-99997},"headers":[],"relativePath":"tutorials/uniq-factories/uniq-variants/organizing-metadata.md","filePath":"tutorials/uniq-factories/uniq-variants/organizing-metadata.md","lastUpdated":null}'),d={name:"tutorials/uniq-factories/uniq-variants/organizing-metadata.md"},c=o('<h1 id="organizing-metadata" tabindex="-1">Organizing metadata <a class="header-anchor" href="#organizing-metadata" aria-label="Permalink to &quot;Organizing metadata&quot;">​</a></h1><p>This page will cover how the metadata off-chain can be linked to on-chain data and what options you have to better organize your metadata URIs</p><h2 id="dynamic-and-static-metadata-uri" tabindex="-1">Dynamic and static metadata URI <a class="header-anchor" href="#dynamic-and-static-metadata-uri" aria-label="Permalink to &quot;Dynamic and static metadata URI&quot;">​</a></h2><p>The distinction between static and dynamic metadata URI applies only for <code>default_token_uri</code> field inside the token factory. By specifying one of the possible dynamic values inside the <code>default_token_uri</code> the URI will automatically be considered as dynamic for the purposes of searching the token metadata as described in the section below.</p><p>If no dynamic value is used inside <code>default_token_uri</code> then this URI will be considered static.</p><p>Acceptable dynamic URI values:</p><ul><li><code>factory_id</code> - Factory ID based on the on-chain data</li><li><code>serial_number</code> - Serial number of a specific token. Incremental value starting from 1</li><li><code>id</code> - ID of the token. Pool of possible IDs is shared between all Uniqs and in general you won&#39;t know it until the token is minted</li><li><code>hash</code> - Hash of the token metadata stored per token</li></ul><p>Example of <code>static</code> default token URI: <a href="http://myfactory.io/deafult_token.json" target="_blank" rel="noreferrer">http://myfactory.io/deafult_token.json</a></p><p>Example of <code>dynamic</code> default token URI: <a href="http://myfactory.io/%7Bserial_number%7D.json" target="_blank" rel="noreferrer">http://myfactory.io/{serial_number}.json</a></p><h2 id="how-to-set-factory-metadata" tabindex="-1">How to set factory metadata <a class="header-anchor" href="#how-to-set-factory-metadata" aria-label="Permalink to &quot;How to set factory metadata&quot;">​</a></h2><p>Factory can contain two different types of metadata URI: factory metadata URI and default uniq metadata. Factory metadata URI must always be provided and point to a single JSON metadata file. Factory metadata hash must also be provided and be a hash of the metadata file pointed by factory metadata URI.</p><p>For default token URI there is a flexibility in choosing between static and dynamic default token URI (the difference is explained above) but you must always specify some default token URI. For static default token URI you have a possibility to also specify a hash, but for dynamic default token URI you should not be providing hash since dynamic URI implies the possibility that it points to multiple different metadata files depending on the context and thus a single hash cannot fully describe the provenance of metadata files.</p><p>The following diagram displays potential use cases when setting factory URIs:</p><p><img src="'+n+'" alt=""></p><p>Token factory metadata can be specified during creation - <a href="./../../../blockchain/contracts/nft-contract/nft-actions/create.b.html">create.b</a></p><p>Following actions are used to change factory metadata URIs and hashes after creation: <a href="./../../../blockchain/contracts/nft-contract/nft-actions/setmeta.b.html">setmeta.b</a><a href="./../../../blockchain/contracts/nft-contract/nft-actions/setdflttkn.html">setdflttkn</a></p><h2 id="how-to-set-token-metadata" tabindex="-1">How to set token metadata <a class="header-anchor" href="#how-to-set-token-metadata" aria-label="Permalink to &quot;How to set token metadata&quot;">​</a></h2><p>You have an option to provide a metadata URI and hash for each token individually. In this case there will be no need to fallback to default token URI inside the token factory.</p><p>Both the URI and hash are optional. You may want to provide either of them or both of them at the same time depending on your use case. Refer to this page for details: <a href="./Examples/variant-example-use-cases.html">use cases</a></p><p>Token metadata can be specified when minting a token - <a href="./../../../blockchain/blockchain/contracts/nft-contract/nft-actions/issue.b.html">issue.b</a></p><p>Alternatively URI and hash can be changed after the token is minted using the following action - <a href="./../../../blockchain/contracts/nft-contract/nft-actions/settknmeta.html">settknmeta</a></p><h2 id="how-to-find-metadata-for-a-given-uniq" tabindex="-1">How to find metadata for a given Uniq <a class="header-anchor" href="#how-to-find-metadata-for-a-given-uniq" aria-label="Permalink to &quot;How to find metadata for a given Uniq&quot;">​</a></h2><p>For the integrators it may be important to know how to fetch the token metadata if you already know the <a href="../../../blockchain/contracts/nft-contract/nft-tables.md#token.b">on-chain token data</a>.</p><p>The first step is to check if there is a URI specified on the token itself by checking the <code>uri</code> field of the token. If it is specified then you are done - go to <code>uri</code> and fetch the metadata.</p><p>In case the <code>uri</code> is empty or points to an invalid file you need to fallback to default token URI stored inside the token factory. Token factory ID is available in the token data and by querying the <code>factory.b</code> table you will be able to access it&#39;s <code>default_token_uri</code> field.</p><p>Then depending on if <code>default_token_uri</code> is dynamic or not one of two following paths should be used:</p><ul><li><code>default_token_uri</code> is <code>static</code> - go to the URI pointed by <code>default_token_uri</code> and fetch the metadata</li><li><code>default_token_uri</code> is <code>dynamic</code> - substitute all dynamic values inside the URI with information available in the token data (e.g. serial number) and then fetch the metadata using the generated URI.</li></ul><p>Refer to the following diagram for details:</p><p><img src="'+i+'" alt=""></p>',29),s=[c];function r(l,h,f,m,u,p){return e(),a("div",null,s)}const k=t(d,[["render",r]]);export{b as __pageData,k as default};
