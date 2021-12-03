import{_ as n,c as s,o as a,a as t}from"./app.88c8e53b.js";const y='{"title":"GitHub Actions","description":"","frontmatter":{},"relativePath":"actions/index.md","lastUpdated":1638561383170}',p={},e=t(`__VP_STATIC_START__<h1 id="github-actions" tabindex="-1">GitHub Actions <a class="header-anchor" href="#github-actions" aria-hidden="true">#</a></h1><div class="language-yaml"><pre><code><span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span>  <span class="token string">&#39;0 0 * * *&#39;</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">sample_job</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> setup
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> userfetch
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> userfetch/userfetch<span class="token punctuation">-</span>action@latest
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">config</span><span class="token punctuation">:</span> <span class="token string">&#39;path/to/config.mjs&#39;</span>
          <span class="token key atrule">svg</span><span class="token punctuation">:</span> <span class="token string">&#39;path/to/card.svg&#39;</span>
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GH_PAT <span class="token punctuation">}</span><span class="token punctuation">}</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> commit
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> .
          <span class="token key atrule">publish_branch</span><span class="token punctuation">:</span> main
          <span class="token key atrule">user_name</span><span class="token punctuation">:</span> <span class="token string">&#39;github-actions[bot]&#39;</span>
          <span class="token key atrule">user_email</span><span class="token punctuation">:</span> <span class="token string">&#39;github-actions[bot]@users.noreply.github.com&#39;</span>
          <span class="token key atrule">allow_empty_commit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div>__VP_STATIC_END__`,2),o=[e];function c(u,l,k,i,r,_){return a(),s("div",null,o)}var d=n(p,[["render",c]]);export{y as __pageData,d as default};
