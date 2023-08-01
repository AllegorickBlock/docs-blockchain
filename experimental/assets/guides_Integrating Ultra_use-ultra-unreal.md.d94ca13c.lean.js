import{_ as a,v as n,b as s,R as e}from"./chunks/framework.a49639fc.js";const g=JSON.parse('{"title":"Using the Ultra Unreal Subsystem","description":"","frontmatter":{"title":"Using the Ultra Unreal Subsystem","deploy":["staging","mainnet"],"outline":[0,5],"order":5},"headers":[],"relativePath":"guides/Integrating Ultra/use-ultra-unreal.md","filePath":"guides/Integrating Ultra/use-ultra-unreal.md","lastUpdated":1690898216000}'),t={name:"guides/Integrating Ultra/use-ultra-unreal.md"},l=e(`<h1 id="using-the-ultra-unreal-subsystem" tabindex="-1">Using the Ultra Unreal Subsystem <a class="header-anchor" href="#using-the-ultra-unreal-subsystem" aria-label="Permalink to &quot;Using the Ultra Unreal Subsystem&quot;">​</a></h1><p>You&#39;ll need a <code>client_id</code> for this. To get one, <a href="https://developers.ultra.io/guides/Integrating%20Ultra/requesting-a-client_id.html" target="_blank" rel="noreferrer">you can request one directly from Ultra</a>.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>To configure Ultra&#39;s Unreal Online Subsystem, you need to edit the DefaultEngine.ini:</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[OnlineSubsystem]</span></span>
<span class="line"><span style="color:#F07178;">DefaultPlatformService</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Ultra </span><span style="color:#676E95;font-style:italic;">; Set OnlineSubsystemUltra as default online subsystem</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[OnlineSubsystemUltra]</span></span>
<span class="line"><span style="color:#F07178;">bEnabled</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; Authentication</span></span>
<span class="line"><span style="color:#F07178;">ClientId</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">; Mandatory - The Client Id given by Ultra</span></span>
<span class="line"><span style="color:#F07178;">DispatcherUrl</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://api.ultracloud.ultra.io/dispatcherv2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">; Optional - The dispatcher URL (default: https://api.ultracloud.ultra.io/dispatcherv2)</span></span>
<span class="line"><span style="color:#F07178;">AuthenticationUrl</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://auth.ultra.io/auth/realms/ultraio/protocol/openid-connect</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">; Optional - The openid authentication URL (default: https://auth.ultra.io/auth/realms/ultraio/protocol/openid-connect)</span></span>
<span class="line"><span style="color:#F07178;">bUseBrowser</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">false </span><span style="color:#676E95;font-style:italic;">; Optional - If true, the browser will be launched to prompt the user credentials otherwise the &#39;ApplicationProtocol&#39; will be used to handle the login (default: false)</span></span>
<span class="line"><span style="color:#F07178;">ApplicationProtocol</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">ultra </span><span style="color:#676E95;font-style:italic;">; Optional - If set to &quot;ultra&quot;, the Ultra launcher will be called to login the user (default: ultra)</span></span></code></pre></div><h2 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-label="Permalink to &quot;Authentication&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const IOnlineIdentityPtr IdentityInterface = Online-&gt;GetIdentityInterface();</span></span>
<span class="line"><span style="color:#A6ACCD;">FDelegateHandle Handle;</span></span>
<span class="line"><span style="color:#A6ACCD;">IdentityInterface-&gt;AddOnLoginCompleteDelegate_Handle(UserIndex, FOnLoginCompleteDelegate::CreateLambda([IdentityInterface, Handle](int32 LocalUserNum, bool Success, const FUniqueNetId&amp; UserId, const FString&amp; Error)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  IdentityInterface-&gt;ClearOnLoginCompleteDelegate_Handle(LocalUserNum, Handle);</span></span>
<span class="line"><span style="color:#A6ACCD;">  FString Nickname = IdentityInterface-&gt;GetPlayerNickname(LocalUserNum);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // do something</span></span>
<span class="line"><span style="color:#A6ACCD;">}));</span></span>
<span class="line"><span style="color:#A6ACCD;">IdentityInterface-&gt;AutoLogin(UserIndex);</span></span></code></pre></div>`,7),o=[l];function r(p,i,c,u,d,y){return n(),s("div",null,o)}const D=a(t,[["render",r]]);export{g as __pageData,D as default};
