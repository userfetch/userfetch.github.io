import{_ as a,c as s,o as n,a as t}from"./app.68943e64.js";const x='{"title":"Docker","description":"","frontmatter":{},"relativePath":"docker/index.md","lastUpdated":1640704330182}',e={},o=t(`<h1 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-hidden="true">#</a></h1><div class="language-bash"><pre><code>docker pull aryan02420/userfetch
</code></pre></div><div class="language-bash"><pre><code>docker run <span class="token punctuation">\\</span>
  -i -t --rm <span class="token punctuation">\\</span>
  -v <span class="token string">&quot;/path/to/workdir&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;/github/workspace/&quot;</span> <span class="token punctuation">\\</span>
  -w /github/workspace <span class="token punctuation">\\</span>
  -e <span class="token assign-left variable">github_token</span><span class="token operator">=</span><span class="token string">&quot;ghp_personalAccessTokenxxxxxxxxxxxxxxxxx&quot;</span> <span class="token punctuation">\\</span>
  aryan02420/userfetch <span class="token string">&quot;path/to/config.mjs&quot;</span> <span class="token string">&quot;path/to/out.svg&quot;</span>
</code></pre></div>`,3),c=[o];function p(r,i,u,l,d,_){return n(),s("div",null,c)}var h=a(e,[["render",p]]);export{x as __pageData,h as default};
