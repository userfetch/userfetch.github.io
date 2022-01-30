import{_ as n,c as s,o as a,a as t}from"./app.68943e64.js";const m='{"title":"GitHub Actions","description":"","frontmatter":{},"relativePath":"actions/index.md","lastUpdated":1643569726323}',e={},p=t(`<h1 id="github-actions" tabindex="-1">GitHub Actions <a class="header-anchor" href="#github-actions" aria-hidden="true">#</a></h1><ol><li><a href="https://github.com/settings/tokens/new?scopes=repo,read:packages,read:org,read:user,user:email" target="_blank" rel="noopener noreferrer">Create</a> a github token with <code>repo</code>, <code>read:packages</code>, <code>read:org</code>, <code>read:user</code>, <code>user:email</code> scopes</li><li>Goto <code>https://github.com/&lt;user&gt;/&lt;repo&gt;/settings/secrets/actions/new</code>. Name the secret as <code>GH_PAT</code> and paste the value from step 1</li><li>Create <code>./github/workflows/userfetch.yml</code> as shown below</li></ol><div class="language-yaml"><pre><code><span class="token comment"># .github/workflows/userfetch.yml</span>

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span>
    <span class="token comment"># every day</span>
    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span>  <span class="token string">&#39;0 0 * * *&#39;</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">sample_job</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> setup
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> userfetch
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> userfetch/userfetch<span class="token punctuation">-</span>action@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># path is relative to project root</span>
          <span class="token key atrule">config</span><span class="token punctuation">:</span> <span class="token string">&#39;path/to/config.mjs&#39;</span>
          <span class="token key atrule">svg</span><span class="token punctuation">:</span> <span class="token string">&#39;path/to/card.svg&#39;</span>
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># the token you created in step 2</span>
          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GH_PAT <span class="token punctuation">}</span><span class="token punctuation">}</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> commit
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># this token is provided by default by github</span>
          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> .
          <span class="token key atrule">publish_branch</span><span class="token punctuation">:</span> main
          <span class="token key atrule">user_name</span><span class="token punctuation">:</span> <span class="token string">&#39;github-actions[bot]&#39;</span>
          <span class="token key atrule">user_email</span><span class="token punctuation">:</span> <span class="token string">&#39;github-actions[bot]@users.noreply.github.com&#39;</span>
          <span class="token key atrule">allow_empty_commit</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
          <span class="token key atrule">full_commit_message</span><span class="token punctuation">:</span> <span class="token string">&#39;\u{1F916} Daily update!&#39;</span>
</code></pre></div>`,3),o=[p];function c(u,l,i,k,r,d){return a(),s("div",null,o)}var _=n(e,[["render",c]]);export{m as __pageData,_ as default};
