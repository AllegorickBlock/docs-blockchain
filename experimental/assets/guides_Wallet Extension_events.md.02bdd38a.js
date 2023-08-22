import{_ as e,v as t,b as a,R as n}from"./chunks/framework.a49639fc.js";const u=JSON.parse('{"title":"Events","description":"","frontmatter":{"title":"Events","deploy":["staging","mainnet"],"order":8,"outline":[0,4]},"headers":[],"relativePath":"guides/Wallet Extension/events.md","filePath":"guides/Wallet Extension/events.md","lastUpdated":1692712226000}'),l={name:"guides/Wallet Extension/events.md"},i=n('<h1 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h1><p>The Ultra Wallet can emit different events to notify applications about changes happening inside the Wallet.</p><p>To subscribe/unsubscribe from these events, the following methods are available:</p><ul><li><code>ultra.on(eventName, callback)</code></li><li><code>ultra.off(eventName, callback)</code></li><li><code>ultra.once(eventName, callback)</code></li><li><code>ultra.prependListener(eventName, callback)</code></li><li><code>ultra.prependOnceListener(eventName, callback)</code></li><li><code>ultra.addListener(eventName, callback)</code></li><li><code>ultra.removeListener(eventName, callback)</code></li></ul><table><thead><tr><th>Event name</th><th>Description</th></tr></thead><tbody><tr><td>disconnect</td><td>Emitted when the application gets disconnected from the Ultra Wallet.</td></tr></tbody></table>',5),s=[i];function o(c,d,r,h,p,v){return t(),a("div",null,s)}const b=e(l,[["render",o]]);export{u as __pageData,b as default};