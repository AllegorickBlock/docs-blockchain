import{_ as t,v as e,b as a,R as l}from"./chunks/framework.99ac92c4.js";const b=JSON.parse('{"title":"Getting the Ultra Unreal Subsystem","description":"","frontmatter":{"title":"Getting the Ultra Unreal Subsystem","deploy":["staging","mainnet"],"outline":[0,5],"order":4},"headers":[],"relativePath":"guides/Integrating Ultra/get-ultra-unreal.md","filePath":"guides/Integrating Ultra/get-ultra-unreal.md","lastUpdated":null}'),r={name:"guides/Integrating Ultra/get-ultra-unreal.md"},n=l('<h1 id="getting-the-ultra-unreal-subsystem" tabindex="-1">Getting the Ultra Unreal Subsystem <a class="header-anchor" href="#getting-the-ultra-unreal-subsystem" aria-label="Permalink to &quot;Getting the Ultra Unreal Subsystem&quot;">​</a></h1><p>To connect the Ultra client to your Unity-based game, you must use our Ultra Unreal Subsystem. The subsystem passes the user&#39;s wallet id and an auth token into Unreal from Ultra&#39;s client. This is used to connect to Braincloud&#39;s SDK and authenticate.</p><p>Before you get started, please make sure to get your <a href="./requesting-a-client_id.html">client_id</a>, as you&#39;ll need this to be able to use the Ultra Unity Plugin.</p><h2 id="getting-the-ultra-unreal-subsystem-1" tabindex="-1">Getting the Ultra Unreal Subsystem <a class="header-anchor" href="#getting-the-ultra-unreal-subsystem-1" aria-label="Permalink to &quot;Getting the Ultra Unreal Subsystem&quot;">​</a></h2><p>We provide access to the Ultra Unity plugin via a public repository.</p><p><a href="https://github.com/ultraio/UltraUnrealOnlineSubsystem" target="_blank" rel="noreferrer">Download the Ultra Unreal Subsystem here</a></p><h2 id="installing-the-ultra-unreal-subsystem" tabindex="-1">Installing the Ultra Unreal Subsystem <a class="header-anchor" href="#installing-the-ultra-unreal-subsystem" aria-label="Permalink to &quot;Installing the Ultra Unreal Subsystem&quot;">​</a></h2><p>The Ultra Unreal Subsystem is not published to any registry so you will have to manually install the package:</p><ul><li>Clone the Repository</li><li>Add the plugin to your project YourProjectName/Plugins/OnlineSubsystemUltra</li><li>Start Unreal Editor</li><li>Go to Edit / Plugins</li><li>Search OnlineSubsystemUltra</li><li>Enable the plugin</li><li>Setup OnlineSubsystemUltra in DefaultEngine.ini (see Configuration below for more details)</li></ul>',9),s=[n];function i(u,o,h,g,d,m){return e(),a("div",null,s)}const y=t(r,[["render",i]]);export{b as __pageData,y as default};
