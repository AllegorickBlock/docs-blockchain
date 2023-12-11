import{_ as e,c as a,o as s,M as i,bn as t}from"./chunks/framework.-7aAo1ka.js";const m=JSON.parse('{"title":"Docker Contract Development Flow","description":"","frontmatter":{"title":"Docker Contract Development Flow","order":-9990,"outline":[0,4],"prev":false},"headers":[],"relativePath":"tutorials/docker/docker-contract-development-flow.md","filePath":"tutorials/docker/docker-contract-development-flow.md","lastUpdated":null}'),n={name:"tutorials/docker/docker-contract-development-flow.md"},l=i(`<h1 id="docker-contract-development-flow" tabindex="-1">Docker Contract Development Flow <a class="header-anchor" href="#docker-contract-development-flow" aria-label="Permalink to &quot;Docker Contract Development Flow&quot;">​</a></h1><p>A smart contract is written in C++ but compiled into WASM.</p><p>Developers must have some knowledge in C++ to write smart contracts for the Ultra Blockchain.</p><h2 id="hello-world-smart-contract" tabindex="-1">Hello World Smart Contract <a class="header-anchor" href="#hello-world-smart-contract" aria-label="Permalink to &quot;Hello World Smart Contract&quot;">​</a></h2><p>Recommended to setup a <a href="./development-environment.html">VSCode Environment</a> before moving forward.</p><h3 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h3><p>Create a directory called <code>hello</code> inside of any of the following directories:</p><ul><li><p>Windows: <code>C:\\\\Users\\\\Username\\\\ultra_workdir\\\\hello</code></p></li><li><p>Linux: <code>~/ultra_workdir/hello</code></p></li><li><p>Docker Container: <code>/opt/ultra_workdir/hello</code></p></li></ul><p><em>Additional permissions may be required to create the directory.</em></p><h3 id="create-hello-cpp" tabindex="-1">Create hello.cpp <a class="header-anchor" href="#create-hello-cpp" aria-label="Permalink to &quot;Create hello.cpp&quot;">​</a></h3><p>Navigate to the following directory.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd /opt/ultra_workdir/hello</span></span></code></pre></div><p>Create the file <code>hello.cpp</code> inside of the <code>hello</code> directory.</p><p>Then place the following content inside of <code>hello.cpp</code> and ensure you save the file.</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;eosio/eosio.hpp&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> [[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eosio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contract</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">]]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::contract;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      [[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eosio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">action</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">]]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, user);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p><em>Above is Content for <code>hello.cpp</code></em></p><h2 id="cdt-cpp-binary" tabindex="-1">cdt-cpp binary <a class="header-anchor" href="#cdt-cpp-binary" aria-label="Permalink to &quot;cdt-cpp binary&quot;">​</a></h2><p>There is a single binary which is included with our docker image.</p><h3 id="what-is-it" tabindex="-1">What is it? <a class="header-anchor" href="#what-is-it" aria-label="Permalink to &quot;What is it?&quot;">​</a></h3><ul><li>A clang-based WASM compiler and ABI generator tool</li><li>Must be ran anywhere inside of the docker image</li></ul><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cdt-cpp -help</span></span></code></pre></div><h2 id="compiling-a-smart-contract" tabindex="-1">Compiling a Smart Contract <a class="header-anchor" href="#compiling-a-smart-contract" aria-label="Permalink to &quot;Compiling a Smart Contract&quot;">​</a></h2><p>Using the above <code>hello.cpp</code> file we can utilize <code>cdt-cpp</code> to compile it.</p><p>Run the following command <strong>inside the docker image</strong>.</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cdt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cpp hello.cpp</span></span></code></pre></div><p>Three files should be created in the <code>hello</code> directory.</p><ul><li>hello.cpp <ul><li>This is the source code of an example smart contract.</li></ul></li><li>hello.abi <ul><li>This file describes the interface of the smart contract.</li></ul></li><li>hello.wasm <ul><li>This is a compiled Web Assembly smart contract.</li></ul></li></ul><p>After compiling the smart contract there are two options for deployment in the local development environment.</p><ul><li><a href="./../../products/ultratest/">Deploy with &#39;ultratest&#39; framework</a></li><li><a href="./../../blockchain/general/tools/cleos.html#deploying-a-smart-contract">&#39;cleos&#39; based contract deployment</a></li></ul><h2 id="cmake" tabindex="-1">CMake <a class="header-anchor" href="#cmake" aria-label="Permalink to &quot;CMake&quot;">​</a></h2><p>When building smart contracts, developers may have more than one file. While <code>cdt-cpp</code> provides the basics, it is recommended to use CMake for anything more complex than single file.</p><p>We will try compiling the <code>eosio.token</code> contract in this example.</p><h3 id="preparations" tabindex="-1">Preparations <a class="header-anchor" href="#preparations" aria-label="Permalink to &quot;Preparations&quot;">​</a></h3><p>Create a directory called <code>eosio.token</code> in one of the following locations:</p><ul><li><p>Windows: <code>C:\\\\Users\\\\Username\\\\ultra_workdir\\\\eosio.token</code></p></li><li><p>Linux: <code>~/ultra_workdir/eosio.token</code></p></li><li><p>Docker Container: <code>/opt/ultra_workdir/eosio.token</code></p></li></ul><p>After creating the directory, create directories inside of <code>eosio.token</code> with the following paths:</p><ul><li><code>eosio.token/include/eosio.token</code></li><li><code>eosio.token/src</code></li></ul><p>Obtain the following files from <a href="./../../examples/eosio.token.html">the following markdown page</a> and append the content from each section in their own corresponding file.</p><h3 id="example-folder-structure" tabindex="-1">Example Folder Structure <a class="header-anchor" href="#example-folder-structure" aria-label="Permalink to &quot;Example Folder Structure&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/opt/ultra_workdir/eosio.token/</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    |- CMakeLists.txt</span></span>
<span class="line"><span>    |- include/</span></span>
<span class="line"><span>    |  |- eosio.token/</span></span>
<span class="line"><span>    |     |- eosio.token.hpp</span></span>
<span class="line"><span>    |- src/</span></span>
<span class="line"><span>        |- eosio.token.cpp</span></span></code></pre></div><h3 id="building-using-cmakelists-txt" tabindex="-1">Building using CMakeLists.txt <a class="header-anchor" href="#building-using-cmakelists-txt" aria-label="Permalink to &quot;Building using CMakeLists.txt&quot;">​</a></h3><p>After preparing all the smart contract files and CMakeLists.txt you should be able to proceed with building the contract using the following commands:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cmake</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DCMAKE_BUILD_TYPE=Release</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ../</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span></span></code></pre></div><p>If you want to rebuild the contract you can either run the <code>make</code> command in the <code>build</code> directory again or delete the <code>build</code> directory and perform the commands above again</p><p>If everything is setup correctly the commands will use the <code>CMakeLists.txt</code> and build your contract.</p><p><img src="`+t+`" alt=""></p><br><h2 id="additional-files-with-cmake" tabindex="-1">Additional Files with CMake <a class="header-anchor" href="#additional-files-with-cmake" aria-label="Permalink to &quot;Additional Files with CMake&quot;">​</a></h2><p>CMake has a handful of functions that can be placed inside of a <code>CMakeLists.txt</code> file to include other files, and folders.</p><hr><p><code>target_include_directories(target PUBLIC dir_list)</code></p><blockquote><p>Specifies include directories to use when compiling a given target.</p></blockquote><p><strong>Example</strong></p><p>This example shows how to include other folders.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>target_include_directories(mycontract </span></span>
<span class="line"><span>    PUBLIC </span></span>
<span class="line"><span>    \${CMAKE_CURRENT_SOURCE_DIR}/include </span></span>
<span class="line"><span>    \${CMAKE_CURRENT_SOURCE_DIR}/common/include </span></span>
<span class="line"><span>    \${CMAKE_CURRENT_SOURCE_DIR}/mycontract_specific/include)</span></span></code></pre></div><hr><p><code>add_contract</code></p><blockquote><p>Used to build your smart contract and generate an ABI, the first parameter is the contract name, the second is the cmake target name, and the rest are the CPP files needed to build the contract.</p></blockquote><p><strong>Example</strong></p><p>This example shows how to include additional <code>.cpp</code> source files.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>add_contract(mycontract mycontract </span></span>
<span class="line"><span>    \${CMAKE_CURRENT_SOURCE_DIR}/src/a.cpp </span></span>
<span class="line"><span>    \${CMAKE_CURRENT_SOURCE_DIR}/src/b.cpp)</span></span></code></pre></div><hr><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><p>Any errors encountered during builds or deployment can potentially have solutions in our <a href="./troubleshooting.html">troubleshooting section</a>.</p>`,65),o=[l];function p(r,c,h,d,k,u){return s(),a("div",null,o)}const b=e(n,[["render",p]]);export{m as __pageData,b as default};
