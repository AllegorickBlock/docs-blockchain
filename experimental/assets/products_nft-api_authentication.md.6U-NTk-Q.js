import{_ as i,c as s,o as a,M as n}from"./chunks/framework.8hLZdMGl.js";const y=JSON.parse('{"title":"Authentication","description":"","frontmatter":{"title":"Authentication","order":1},"headers":[],"relativePath":"products/nft-api/authentication.md","filePath":"products/nft-api/authentication.md","lastUpdated":null}'),t={name:"products/nft-api/authentication.md"},l=n(`<h1 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-label="Permalink to &quot;Authentication&quot;">​</a></h1><h2 id="api-endpoints" tabindex="-1">API Endpoints <a class="header-anchor" href="#api-endpoints" aria-label="Permalink to &quot;API Endpoints&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Sandbox:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://staging.api.ultra.io/graphql</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Production:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://api.ultra.io/graphql</span></span></code></pre></div><h2 id="get-your-access-token" tabindex="-1">Get your access token <a class="header-anchor" href="#get-your-access-token" aria-label="Permalink to &quot;Get your access token&quot;">​</a></h2><p>Once you have your credentials you can retrieve your access token manually thanks to the curl command below :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>curl \\</span></span>
<span class="line"><span>  -d &quot;client_id=YOUR_CLIENT_ID&quot; \\</span></span>
<span class="line"><span>  -d &quot;client_secret=YOUR_CLIENT_SECRET&quot; \\</span></span>
<span class="line"><span>  -d &quot;grant_type=client_credentials&quot; \\</span></span>
<span class="line"><span>  &quot;https://auth.staging.ultra.io/auth/realms/ultraio/protocol/openid-connect/token&quot;</span></span></code></pre></div><p>Then, the response will be like this :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;access_token&quot;: &quot;eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJCdTRsMi12RzVZaDdqUFBuSWNSNlZEakxCRzVOQjVlZUdqV2ZfWmlhTVlvIn0.eyJleHAiOjE2ODkyNTM3NzUsImlhdCI6MTY4OTI1MDE3NSwianRpIjoiZjYzNTB\`\`\`mZTAtYzg4YS00MTE1LTkyYmQtNGZlMjlhMWRkNGI2IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmRldi51bHRyYS5pby9hdXRoL3JlYWxtcy91bHRyYWlvIiwiYXVkIjpbInVsdHJhV2ViYXBwIiwicmVhbG0tbWFuYWdlbWVudCIsInVsdHJhQ2xvdWRXZWJhcHAiLCJhY2NvdW50IiwicGxhdGZvcm0iXSwic3ViIjoiOTg3YTlhODctMWYyYS00MDIwLWJhNjUtOTE3NjA2OWIyMjM1IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidGVzdCIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJlYmEiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsidWx0cmFXZWJhcHAiOnsicm9sZXMiOlsidXNlciJdfSwicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJtYW5hZ2UtdXNlcnMiLCJ2aWV3LXVzZXJzIiwicXVlcnktZ3JvdXBzIiwicXVlcnktdXNlcnMiXX0sInVsdHJhQ2xvdWRXZWJhcHAiOnsicm9sZXMiOlsidXNlciJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19LCJwbGF0Zm9ybSI6eyJyb2xlcyI6WyIwMDFHIiwiMDAxVSIsIjAwMUEiLCJzZXJ2aWNlIiwiMDAxTSIsInVzZXIiLCI5OTlNIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIGxlZ2FjeSByZWZlcnJhbCBwaG9uZSBibG9ja2NoYWluIHByaXZhdGVfYWNjZXNzIiwidmFsaWQiOnRydWUsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiY2xpZW50SWQiOiJ0ZXN0IiwiY2xpZW50SG9zdCI6IjEwLjEzMi4wLjE0IiwicGVybWlzc2lvbiI6eyJnbG9iYWwiOlsiMDAxRyIsIjAwMVUiLCIwMDFBIiwiMDAxTSIsIjk5OU0iXX0sImlkIjoiOTg3YTlhODctMWYyYS00MDIwLWJhNjUtOTE3NjA2OWIyMjM1IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LXRlc3QiLCJ0eXBlIjoiYWNjZXNzVG9rZW4iLCJjbGllbnRBZGRyZXNzIjoiMTAuMTMyLjAuMTQifQ.XVkgotJ0JcOOxjksyFRJOmut5WE4rWUObLZ_1oXfTJ41TuIwj5rNEM_gGZC89v_FQEcMRKC46x8HAutlnjPti6-6ejFP5SKJZ5TU-0F2iUQIXJw1inIYUcJWxQUVG1fV9vzW1pQK3TRRkoJW63O6vXodcBZ6Pvv5Ff9keV_n-YfdOqHiHpG_o6hZUq-_bT0MOJ8pX14CWl44_vsZPvm6E__F1kcPuBjwY-664I9Blp46vTYnXnpOMQWvNnQ7VSAFoSmjEg4vHbx3GfnbiorDgkI8pAa_vHuYoM1hqMUxSekIE08yfZ6HoJ6z_o2YDB-fJpdKJdzIFD7IziFz034cXZ&quot;,</span></span>
<span class="line"><span>    &quot;expires_in&quot;: 3600,</span></span>
<span class="line"><span>    &quot;refresh_expires_in&quot;: 0,</span></span>
<span class="line"><span>    &quot;token_type&quot;: &quot;Bearer&quot;,</span></span>
<span class="line"><span>    &quot;not-before-policy&quot;: 1608643774,</span></span>
<span class="line"><span>    &quot;scope&quot;: &quot;some access&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Extract the <em>access_token</em> field and use it as a bearer token inside the your graphql queries/mutations :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;headers&quot;: {</span></span>
<span class="line"><span>        &quot;Authorization&quot;: &quot;Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJCdTRsMi12RzVZaDdqUFBuSWNSNlZEakxCRzVOQjVlZUdqV2ZfWmlhTVlvIn0.eyJleHAiOjE2ODkyNTM3NzUsImlhdCI6MTY4OTI1MDE3NSwianRpIjoiZjYzNTB\`\`\`mZTAtYzg4YS00MTE1LTkyYmQtNGZlMjlhMWRkNGI2IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmRldi51bHRyYS5pby9hdXRoL3JlYWxtcy91bHRyYWlvIiwiYXVkIjpbInVsdHJhV2ViYXBwIiwicmVhbG0tbWFuYWdlbWVudCIsInVsdHJhQ2xvdWRXZWJhcHAiLCJhY2NvdW50IiwicGxhdGZvcm0iXSwic3ViIjoiOTg3YTlhODctMWYyYS00MDIwLWJhNjUtOTE3NjA2OWIyMjM1IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidGVzdCIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJlYmEiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsidWx0cmFXZWJhcHAiOnsicm9sZXMiOlsidXNlciJdfSwicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJtYW5hZ2UtdXNlcnMiLCJ2aWV3LXVzZXJzIiwicXVlcnktZ3JvdXBzIiwicXVlcnktdXNlcnMiXX0sInVsdHJhQ2xvdWRXZWJhcHAiOnsicm9sZXMiOlsidXNlciJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19LCJwbGF0Zm9ybSI6eyJyb2xlcyI6WyIwMDFHIiwiMDAxVSIsIjAwMUEiLCJzZXJ2aWNlIiwiMDAxTSIsInVzZXIiLCI5OTlNIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIGxlZ2FjeSByZWZlcnJhbCBwaG9uZSBibG9ja2NoYWluIHByaXZhdGVfYWNjZXNzIiwidmFsaWQiOnRydWUsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiY2xpZW50SWQiOiJ0ZXN0IiwiY2xpZW50SG9zdCI6IjEwLjEzMi4wLjE0IiwicGVybWlzc2lvbiI6eyJnbG9iYWwiOlsiMDAxRyIsIjAwMVUiLCIwMDFBIiwiMDAxTSIsIjk5OU0iXX0sImlkIjoiOTg3YTlhODctMWYyYS00MDIwLWJhNjUtOTE3NjA2OWIyMjM1IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LXRlc3QiLCJ0eXBlIjoiYWNjZXNzVG9rZW4iLCJjbGllbnRBZGRyZXNzIjoiMTAuMTMyLjAuMTQifQ.XVkgotJ0JcOOxjksyFRJOmut5WE4rWUObLZ_1oXfTJ41TuIwj5rNEM_gGZC89v_FQEcMRKC46x8HAutlnjPti6-6ejFP5SKJZ5TU-0F2iUQIXJw1inIYUcJWxQUVG1fV9vzW1pQK3TRRkoJW63O6vXodcBZ6Pvv5Ff9keV_n-YfdOqHiHpG_o6hZUq-_bT0MOJ8pX14CWl44_vsZPvm6E__F1kcPuBjwY-664I9Blp46vTYnXnpOMQWvNnQ7VSAFoSmjEg4vHbx3GfnbiorDgkI8pAa_vHuYoM1hqMUxSekIE08yfZ6HoJ6z_o2YDB-fJpdKJdzIFD7IziFz034cXZ&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,10),e=[l];function c(o,p,I,d,h,u){return a(),s("div",null,e)}const J=i(t,[["render",c]]);export{y as __pageData,J as default};
