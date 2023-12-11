import{_ as e,c as t,o as a,M as r}from"./chunks/framework.8hLZdMGl.js";const f=JSON.parse('{"title":"RAM Market","description":"","frontmatter":{"title":"RAM Market","order":3},"headers":[],"relativePath":"blockchain/contracts/system-contract/ram-market.md","filePath":"blockchain/contracts/system-contract/ram-market.md","lastUpdated":null}'),s={name:"blockchain/contracts/system-contract/ram-market.md"},o=r('<h1 id="ram-market" tabindex="-1">RAM Market <a class="header-anchor" href="#ram-market" aria-label="Permalink to &quot;RAM Market&quot;">​</a></h1><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How it works&quot;">​</a></h2><p>Ultra maintains a <strong>RAM reserve</strong> from the available system RAM. The RAM in the reserve can be distributed by Ultra and can be offered to Ultra and certain developers for free. RAM may only be reserved by Ultra and once it is reserved it is removed from the total RAM supply. Reserved RAM is not assigned to anyone, nor it can be sold to anyone.</p><p>The initial 5k of RAM is free for the <strong>account</strong> creation which stores the basic account information such as the account name, active permission setup, and the additional RAM/POWER quota and usage which is around 3,871 bytes total. Developers pay for their users’ RAM usage, and they can authorize a contract to act on their behalf (32 bytes). They can also add one more keys to owner or active permissions (82 bytes). Beyond that account owners will need to buy more RAM themselves. One can’t purchase more RAM if they already have 10 MB or more of unused RAM.</p><p>Ram is priced in USD, but paid in UOS. There is a 10% ram fee which is charged at the moment of purchase. Users may <strong>purchase RAM</strong> at a flat rate. It’s expensive, so that users only buy when they truly need it, and they won’t need much. There will be a cap of around 20K which should be enough for most account administration needs. To calculate the RAM price Ultra uses a price curve that allows Ultra to adjust the starting price and control how fast price increase as a user owns more RAM. The current price curve is Price = C + K * RAM. Price unit is converted from USD/KB to UOS/KB, C is used to control the starting price, K is used to control how fast it increases. Ultra can adjust the RAM price by changing the price/cost curve parameters, or even changing the curve type itself. It will only affect the RAM purchasing policy and won&#39;t affect the RAM selling policy.</p><p>The <strong>selling RAM</strong> policy is not changing. Total UOS paid will be stored and used for calculating refunds. When selling RAM, the total UOS paid will be proportionally refunded to the user:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Refund = Total_RAM_Payment * (Delta_RAM / RAM)</span></span></code></pre></div><p>These differences between buying and selling RAM are introduces to avoid potential speculation due to price adjustment. If we use the same policy for buying and selling, it is possible for developers to make money by selling ram. With the independent selling policy, there is <strong>no speculation</strong>. Users always get proportional to what they have paid so far. Also, a developer cannot purchase more RAM until a full 10 MB of RAM are used up. Preventing developers from over-purchasing this scarce asset.</p><p>When a <strong>developer purchases RAM</strong> the system is queried for a price. There is an independent price curve for an account that is registered as a developer. The RAM pricing at the beginning of this curve is very cheap but gets more expensive as they purchase more RAM. When purchased in bytes, users needs to get an invoice first. When purchased with tokens or sold there’s also no need for an invoice. User can choose to purchase without getting a quote. In this case the purchase will use real time conversion rate. If a quote is generated before purchase then the user is guaranteed to get the RAM at the quoted price.</p><p>A developer can <strong>refund</strong> their <strong>RAM</strong> anytime and get back proportional to what they have paid. In case of account inactivity Ultra reserves the right to take back the unused RAM (only the portion of RAM that was gifted by Ultra) of inactive developer account, and refund in UOS will be returned to the account. An <strong>inactive developer account</strong> is one that submits no transactions (pushing or receiving actions) in a predefined period, like one year. Releasing user&#39;s RAM is a very sensitive process that requires due diligence. Even if the developer account is inactive, user might still want to keep their data stored there and query it from time to time. The conclusion is that used RAM can be released by the developer or DAPPs&#39; users themselves, not by a third party. Malicious contracts’ data can be wiped out by BPs.</p><p>There can be multiple blockchain accounts associated with one ultra platform account, especially for developers. Such blockchain accounts are linked together on-chain by their IDs, and such accounts can purchase RAM and will be billed as if they are a single account.</p><h2 id="relevant-actions" tabindex="-1">Relevant actions <a class="header-anchor" href="#relevant-actions" aria-label="Permalink to &quot;Relevant actions&quot;">​</a></h2><p><a href="./system-actions/buyram.html">buyram - buy RAM with UOS</a></p><p><a href="./system-actions/buyrambytes.html">buyrambytes - buy RAM with UOS</a></p><p><a href="./system-actions/refundram.html">refundram - buy RAM with UOS</a></p><h2 id="relevant-tables" tabindex="-1">Relevant tables <a class="header-anchor" href="#relevant-tables" aria-label="Permalink to &quot;Relevant tables&quot;">​</a></h2><p><a href="./data-structures-overview.html#userres-resource-allocation-per-account">userres - resource-allocation-per-account</a></p>',17),n=[o];function i(c,l,h,u,d,p){return a(),t("div",null,n)}const y=e(s,[["render",i]]);export{f as __pageData,y as default};
