import{_ as a,c as n,o as s,a as e}from"./app.68943e64.js";const v='{"title":"Docker","description":"","frontmatter":{},"headers":[{"level":2,"title":"Download","slug":"download"},{"level":2,"title":"Run","slug":"run"},{"level":3,"title":"Persistence","slug":"persistence"},{"level":3,"title":"Alias","slug":"alias"}],"relativePath":"docker/index.md","lastUpdated":1658684142851}',t={},o=e(`<h1 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-hidden="true">#</a></h1><h2 id="download" tabindex="-1">Download <a class="header-anchor" href="#download" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code>docker pull aryan02420/userfetch:v1
</code></pre></div><h2 id="run" tabindex="-1">Run <a class="header-anchor" href="#run" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">github_token</span><span class="token operator">=</span><span class="token string">&quot;ghp_xxxxxxxxxpersonalAccessTokenxxxxxxxx&quot;</span>
docker run <span class="token punctuation">\\</span>
  -i -t --rm <span class="token punctuation">\\</span>
  -v <span class="token string">&quot;<span class="token variable">\${<span class="token environment constant">PWD</span>}</span>:/workspace&quot;</span> <span class="token punctuation">\\</span>
  -e github_token <span class="token punctuation">\\</span>
  aryan02420/userfetch:v1 --ci --config <span class="token string">&quot;path/to/config.mjs&quot;</span>
</code></pre></div><h3 id="persistence" tabindex="-1">Persistence <a class="header-anchor" href="#persistence" aria-hidden="true">#</a></h3><ol><li>Save configuration locally</li></ol><div class="language-bash"><pre><code>docker run <span class="token punctuation">\\</span>
  -i -t --rm <span class="token punctuation">\\</span>
  -v <span class="token string">&quot;<span class="token variable">\${<span class="token environment constant">PWD</span>}</span>:/workspace&quot;</span> <span class="token punctuation">\\</span>
  -v <span class="token string">&quot;<span class="token variable">\${<span class="token environment constant">HOME</span>}</span>/.userfetch:/root/.userfetch&quot;</span> <span class="token punctuation">\\</span>
  aryan02420/userfetch:v1 --first-run&quot;
</code></pre></div><ol start="2"><li>Use local configuration</li></ol><div class="language-bash"><pre><code>docker run <span class="token punctuation">\\</span>
  -i -t --rm <span class="token punctuation">\\</span>
  -v <span class="token string">&quot;<span class="token variable">\${<span class="token environment constant">PWD</span>}</span>:/workspace&quot;</span> <span class="token punctuation">\\</span>
  -v <span class="token string">&quot;<span class="token variable">\${<span class="token environment constant">HOME</span>}</span>/.userfetch:/root/.userfetch&quot;</span> <span class="token punctuation">\\</span>
  aryan02420/userfetch:v1
</code></pre></div><h3 id="alias" tabindex="-1">Alias <a class="header-anchor" href="#alias" aria-hidden="true">#</a></h3><p>You can create a bash alias to avoid typing the long command</p><div class="language-bash"><pre><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">userfetch</span><span class="token operator">=</span><span class="token string">&#39;docker run \\
  -i -t --rm \\
  -v &quot;\${PWD}:/workspace&quot; \\
  -v &quot;\${HOME}/.userfetch:/root/.userfetch&quot; \\
  aryan02420/userfetch:v1&#39;</span>
userfetch
</code></pre></div>`,13),c=[o];function r(p,i,l,u,d,h){return s(),n("div",null,c)}var g=a(t,[["render",r]]);export{v as __pageData,g as default};
