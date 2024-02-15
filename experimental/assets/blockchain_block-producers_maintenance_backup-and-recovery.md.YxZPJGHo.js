import{_ as t,c as e,o as a,M as s}from"./chunks/framework.iCXnZ0m9.js";const g=JSON.parse('{"title":"Backup and Recovery","description":"","frontmatter":{"title":"Backup and Recovery","outline":[0,4],"order":-97},"headers":[],"relativePath":"blockchain/block-producers/maintenance/backup-and-recovery.md","filePath":"blockchain/block-producers/maintenance/backup-and-recovery.md","lastUpdated":null}'),o={name:"blockchain/block-producers/maintenance/backup-and-recovery.md"},i=s('<h1 id="backup-and-recovery" tabindex="-1">Backup and Recovery <a class="header-anchor" href="#backup-and-recovery" aria-label="Permalink to &quot;Backup and Recovery&quot;">​</a></h1><p>Nodeos provides various options for replaying blockchain blocks. This can be very useful to recover a node instance from some failure as it can quickly catch up with the network instead of having to synchronize from the p2p network.</p><p>Replaying data can be done in two ways:</p><ul><li><p><strong>From a blocks.log file</strong><br> The blocks log file contains all irreversible transactions on the blockchain. All instances of nodeos write irreversible blocks to the blocks.log file, which is located data/blocks directory relative to the nodeos data directory. Using a blocks.log file to replay will allow you to start a nodeos instance which recreates the entire history of the blockchain locally, without adding unnecessary load to the network.</p></li><li><p><strong>From a snapshot file</strong><br> Snapshot files can be created from a running nodeos instance. The snapshot contains the chain state for the current head block. Snapshot files should only be used if the head block they represent is irreversible. Using a snapshot file to replay allows you to quickly start a nodeos instance which has a full and correct chain state at a specified block number, but not a full history of transactions up to that block number. From that point on the nodeos instance will operate in the configured manner.</p></li></ul><p><strong>Ultra provides two scripts:</strong></p><ul><li><p><strong>Nodeos-launcher script:</strong> start your node and do automatically recovering from failures.</p></li><li><p><strong>Snapshot-creator script:</strong> responsible for making regular snapshots.</p></li></ul><p>It is important for you to understand how the process works so we will go over these two ways in detail.</p><h2 id="getting-a-blocks-log-file" tabindex="-1">Getting a blocks.log file <a class="header-anchor" href="#getting-a-blocks-log-file" aria-label="Permalink to &quot;Getting a blocks.log file&quot;">​</a></h2><p>The blocks.log file is used by nodeos to persist irreversible blocks. The default location for this file is in the data/blocks directory. However, the data directory can be specified using the -d [ --data-dir ] option on the nodeos command line</p><p>You can also download a block.log file from other Block Producers over the network.</p><h2 id="replay-from-blocks-log" tabindex="-1">Replay from blocks log <a class="header-anchor" href="#replay-from-blocks-log" aria-label="Permalink to &quot;Replay from blocks log&quot;">​</a></h2><p>Once you have a copy of the blocks.log file which you wish to replay the blockchain from, copy it to your data/blocks directory. You should back up any existing contents of this directory if you wish to keep them. After that, start nodeos with one of the following replay-blockchain options:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">replay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">blockchain</span></span></code></pre></div><p>This option tells nodeos to replay from the blocks.log file located in the data/blocks directory. Nodeos will clear the chain state and replay all blocks.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hard</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">replay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">blockchain</span></span></code></pre></div><p>This option tells nodeos to replay from the blocks.log file located in the data/blocks directory. Nodeos makes a backup of the existing blocks.log file and will then clear the chain state and replay all blocks. This option assumes that the backup blocks.log file may contain corrupted blocks, so nodeos replays as many blocks as possible from the backup block log. Nodeos will then synchronize the rest of the blockchain from the p2p network.</p><table><thead><tr><th>location</th><th>name</th><th>action</th></tr></thead><tbody><tr><td>data/blocks</td><td>blocks.index</td><td>remove</td></tr><tr><td>data/blocks</td><td>blocks.log</td><td>replace this file with the blocks.log you want to replay</td></tr><tr><td>data/blocks/reversible</td><td>forkdb.dat</td><td>remove</td></tr><tr><td>data/blocks/reversible</td><td>shared_memory.bin</td><td>remove</td></tr><tr><td>data/blocks/reversible</td><td>shared_memory.meta</td><td>remove</td></tr></tbody></table><p>You can use blocks-dir = &quot;blocks&quot; in the configuration file or using the</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">blocks</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dir</span></span></code></pre></div><p>command-line option, to specify where to find the blocks.log to replay.</p><h2 id="triggering-the-creation-of-a-snapshot" tabindex="-1">Triggering the creation of a snapshot <a class="header-anchor" href="#triggering-the-creation-of-a-snapshot" aria-label="Permalink to &quot;Triggering the creation of a snapshot&quot;">​</a></h2><p>Snapshots can be created at runtime using the RPC available through the Producer API plugin. For example:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//you_server:your_http_port/v1/producer/create_snapshot</span></span></code></pre></div><p>Will create a snapshot of the data/snapshots directory.</p><p>Replay from snapshot</p><p>Once you have a copy of a valid snapshot file from which you wish to create a valid chain state, copy it to your data/snapshots directory, backing up (if you wish to keep them), and removing any existing contents of the data directory. After that, start nodeos with the</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">snapshot</span></span></code></pre></div><p>option to specify the name of the snapshot to replay.</p><p>When replaying from a snapshot file it is recommended that all existing data is removed, however, if a blocks.log is provided it must at least contain blocks up to the snapshotted block and may contain additional blocks that will be applied as part of the startup. If a blocks.log file exists, but does not contain blocks up to and/or after the snapshotted block then replaying from a snapshot will create an exception. Any available reversible blocks will also be applied.</p><table><thead><tr><th>blocks.log</th><th>snapshot</th><th>action</th></tr></thead><tbody><tr><td>no blocks.log</td><td>for irreversible block 2000</td><td>ok</td></tr><tr><td>contains blocks 1 - 1999</td><td>for irreversible block 2000</td><td>exception</td></tr><tr><td>contains blocks 1 - 2001</td><td>for irreversible block 2000</td><td>ok - will recreate from snapshot and &#39;play&#39; block 2001</td></tr></tbody></table><p>When instantiating a node from a snapshot, it is illegal to pass in any <em>genesis</em> arguments as that information is loaded from a snapshot. If a blocks.log exists, the genesis information it contains will be validated against the genesis data in the snapshot will throw an error if they are not consistent.</p><p><strong>Note</strong><br> Instantiating a node from a snapshot without a blocks.log file is valid but it will create a partial blocks.log which will affect the ability to service any requests for block data as it will not be available.</p><h2 id="calculating-an-integrity-hash" tabindex="-1">Calculating an integrity hash <a class="header-anchor" href="#calculating-an-integrity-hash" aria-label="Permalink to &quot;Calculating an integrity hash&quot;">​</a></h2><p>Integrity hashes are a way of comparing the contents of the blockchain state database. They consist of a sha256 hash of a deterministic binary representation of all consensus affecting state and can be retrieved at runtime using the RPC available through the Producer API plugin. For example:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//you_server:your_http_port/v1/producer/get_integrity_hash</span></span></code></pre></div>',35),n=[i];function l(r,h,c,p,d,k){return a(),e("div",null,n)}const y=t(o,[["render",l]]);export{g as __pageData,y as default};
