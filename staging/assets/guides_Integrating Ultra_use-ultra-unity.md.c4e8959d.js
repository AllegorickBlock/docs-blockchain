import{_ as e,c as a,o as t,V as n}from"./chunks/framework.dfdac305.js";const s="/staging/images/unity_images/ultra_menu.png",l="/staging/images/unity_images/ultra_settings.png",i="/staging/images/unity_images/ultra_samples.png",o="/staging/images/unity_images/bc_settings.png",r="/staging/images/unity_images/ultracloud_app.png",f=JSON.parse('{"title":"Using the Ultra Unity Plugin","description":"","frontmatter":{"title":"Using the Ultra Unity Plugin","deploy":["staging","mainnet"],"outline":[0,5],"order":3},"headers":[],"relativePath":"guides/Integrating Ultra/use-ultra-unity.md","lastUpdated":null}'),p={name:"guides/Integrating Ultra/use-ultra-unity.md"},c=n('<h1 id="using-the-ultra-unity-plugin" tabindex="-1">Using the Ultra Unity Plugin <a class="header-anchor" href="#using-the-ultra-unity-plugin" aria-label="Permalink to &quot;Using the Ultra Unity Plugin&quot;">​</a></h1><p>Welcome to the Ultra Unity Plugin! This simple plugin is meant to allow you to leverage from Ultra&#39;s ecosystem without breaking your players flow (= seamless in-game authentication). Once you complete the following the page, your game will be able to:</p><ul><li>Retrieve players basic information (such as their username) with no user input required.</li><li>Connect to UltraCloud using the brainCloud SDK, allowing you to access Ultra in-game features.</li></ul><h2 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h2><p>Once the package is installed, open the Ultra Settings window (a new entry should have been added): <code>Ultra &gt; Settings</code></p><p><img src="'+s+'" alt="Ultra Menu"></p><p>This will open the following editor:</p><p><img src="'+l+'" alt="Ultra Settings"></p><p>There you need to enter your Ultra <code>Client Id</code>. For now, you need to get in contact with the Ultra support to receive your Client Id.</p><p>The default <code>Authentication URL</code> is the Ultra production authentication server. If you are using a different server, make sure to edit this field.</p><h2 id="initialization-script" tabindex="-1">Initialization script <a class="header-anchor" href="#initialization-script" aria-label="Permalink to &quot;Initialization script&quot;">​</a></h2><h3 id="tl-dr" tabindex="-1">TL;DR <a class="header-anchor" href="#tl-dr" aria-label="Permalink to &quot;TL;DR&quot;">​</a></h3><p>Samples are attached to the package.</p><p>There you will find a scene and a sample script showing you how to interact with Ultra.</p><p><img src="'+i+`" alt="Ultra Menu"></p><h3 id="step-by-step-implementation" tabindex="-1">Step by Step implementation <a class="header-anchor" href="#step-by-step-implementation" aria-label="Permalink to &quot;Step by Step implementation&quot;">​</a></h3><p>If you want the initialization to start on the launch of the game, you could create a <code>gameObject</code> in the first scene of your game and attach a new script to it.</p><p>In the <code>Awake</code> or <code>Start</code> method you can then initialze the plugin. Example:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">void Awake()</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    DontDestroyOnLoad(gameObject); // Only if you wish to use this gameObject as a place to manage Ultra lifecycle in parallel of your game execution</span></span>
<span class="line"><span style="color:#A6ACCD;">    Ultra.Init();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>Note that you don&#39;t need to specify the settings. The <code>Init()</code> call will retrieve the configuration made graphically. If you prefer not relying on the settings from the UI, you can instead use <code>Init(authUrl, clientId)</code>.</p><p>The <code>Init</code> function also takes callbacks as parameters so to track failures and successes you should instead do as follow:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Ultra.Init(OnInitSuccess, OnInitFailure);</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">void OnInitSuccess(string username, string idToken)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Debug.Log($&quot;{username} is now playing!&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">void OnInitFailure(UltraError error)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Debug.LogError($&quot;Ultra initialization failed - {error.Message}&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>Note that for the game to retrieve player information, the Ultra Desktop Client has to be running with an active session.</p><p>At development time, if you don&#39;t use the Ultra desktop application, you could use the browser to authenticate instead. For this you simply need to activate the browser configuration before intializing the tool. Example:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#if UNITY_EDITOR</span></span>
<span class="line"><span style="color:#A6ACCD;">    Ultra.UseBrowser = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">#endif</span></span>
<span class="line"><span style="color:#A6ACCD;">    Ultra.Init();</span></span></code></pre></div><h2 id="connecting-to-ultracloud" tabindex="-1">Connecting to UltraCloud <a class="header-anchor" href="#connecting-to-ultracloud" aria-label="Permalink to &quot;Connecting to UltraCloud&quot;">​</a></h2><p>As mentioned before, if you wish to connect your game to Ultra gaming ecosystem, you will also have to install our partner brainCloud&#39;s SDK which already supports our blockchain features and comes with plenty of additional game tools.</p><p>Connecting to UltraCloud means:</p><ul><li>Installing the brainCloud SDK</li><li>Configuring it to rely on our Ultra instance</li><li>Initialzing it programmatically</li></ul><h3 id="installing-braincloud-sdk" tabindex="-1">Installing brainCloud SDK <a class="header-anchor" href="#installing-braincloud-sdk" aria-label="Permalink to &quot;Installing brainCloud SDK&quot;">​</a></h3><p>You will find the brainCloud SDK and installation steps <a href="https://github.com/getbraincloud/braincloud-csharp" target="_blank" rel="noreferrer">here</a>. At this stage you only need to install the brainCloud package. Note that to use the Ultra flavour we need here, you will have to use a specific configuration though.</p><h3 id="ultracloud-configuration" tabindex="-1">UltraCloud configuration <a class="header-anchor" href="#ultracloud-configuration" aria-label="Permalink to &quot;UltraCloud configuration&quot;">​</a></h3><p>Once the SDK is installed, open the brainCloud Settings page. <img src="`+o+'" alt="Ultra Menu"></p><p>Here you need to do few changes:</p><ul><li>Deselect the <code>Use Default brainCloud Server</code> option to specify the Ultra production instance in place of the default <code>Server URL</code>: <code>https://api.ultracloud.ultra.io</code></li><li>The <code>email</code> here should be from one user with access to UltraCloud Portal(accessible from the Ultra desktop Client)</li><li>The <code>password</code> here should be an API key generated for this given user in the UltraCloud Portal (check the following ).</li></ul><h4 id="get-your-api-key" tabindex="-1">Get your API key <a class="header-anchor" href="#get-your-api-key" aria-label="Permalink to &quot;Get your API key&quot;">​</a></h4><p>For teams you want to access apps for (using the Unity plugin), a Team-admin must generate an API key in the Ultra Cloud Portal:</p><p>Access the UltraCloud Portal:</p><p><img src="'+r+`" alt="Ultra Menu"></p><ul><li><p>Enable Builder API access via the Team | Manage | Team Info page</p></li><li><p>Give any devs Builder API permission via the Team | Manage | Members page</p></li><li><p>Finally, the developer needs to create an API key for himself to use. This is a personal key linked to him.</p></li><li><p>Log into the portal in a Team where you have Builder API permission</p></li><li><p>Click in the top-right-hand corner (on the user name), go to the API Keys page - and create a key.</p></li><li><p>Click the [Get] button to retrieve the key, and that same button again to [Copy]</p></li></ul><p>Finally, use that API key retrieved as the password when logging into the user’s account via the brainCloud window in Unity.</p><p>Once you are all set, login and select your relevant application information (team + application name)!</p><h3 id="initialize-braincloud-with-the-ultra-session" tabindex="-1">Initialize brainCloud with the Ultra session <a class="header-anchor" href="#initialize-braincloud-with-the-ultra-session" aria-label="Permalink to &quot;Initialize brainCloud with the Ultra session&quot;">​</a></h3><p>Once the configuration is done. You need to initialize the brainCloud library programmatically.</p><p>Modify the <code>OnUltraInitializationSuccess</code> callback previously created with the following:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">void OnUltraInitializationSuccess(string username, string idToken)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Debug.Log($&quot;{username} is now playing!&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    SuccessCallback successCallback = (response, cbObject) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Debug.Log(&quot;UltraCloud Authentication was successful&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    FailureCallback failureCallback = (status, code, error, cbObject) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Debug.Log($&quot;Failed | {status} {code} {error}&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    var go = new GameObject();</span></span>
<span class="line"><span style="color:#A6ACCD;">    BrainCloudWrapper _ultracloud = go.AddComponent&lt;BrainCloudWrapper&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">    _ultracloud.Init();</span></span>
<span class="line"><span style="color:#A6ACCD;">    _ultraCloud.AuthenticateUltra(username, idToken, true, successCallback, failureCallback);</span></span>
<span class="line"><span style="color:#A6ACCD;">    DontDestroyOnLoad(go);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>Now, your users will be connecting to UltraCloud using their Ultra active sessions. Congratulations!</p><p><a href="http://getbraincloud.com/apidocs/apiref/#capi" target="_blank" rel="noreferrer">Check the BrainCloud documentation to see what you can do with the BrainCloudWrapper instance.</a></p>`,49),u=[c];function d(h,g,y,C,m,b){return t(),a("div",null,u)}const U=e(p,[["render",d]]);export{f as __pageData,U as default};
