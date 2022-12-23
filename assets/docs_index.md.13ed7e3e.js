import{_ as a,c as e,o as n,a as s}from"./app.68943e64.js";const g='{"title":"Docs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Creating GitHub Personal Access Token","slug":"creating-github-personal-access-token"},{"level":2,"title":"CLI","slug":"cli"},{"level":2,"title":"config.mjs","slug":"config-mjs"},{"level":3,"title":"template / templateDefault","slug":"template-templatedefault"},{"level":3,"title":"colors","slug":"colors"},{"level":3,"title":"symbols","slug":"symbols"},{"level":3,"title":"svgOptions","slug":"svgoptions"}],"relativePath":"docs/index.md","lastUpdated":1671812387369}',t={},o=s(`<h1 id="docs" tabindex="-1">Docs <a class="header-anchor" href="#docs" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#creating-github-personal-access-token">Creating GitHub Personal Access Token</a></li><li><a href="#cli">CLI</a></li><li><a href="#config-mjs">config.mjs</a><ul><li><a href="#template-templatedefault">template / templateDefault</a></li><li><a href="#colors">colors</a></li><li><a href="#symbols">symbols</a></li><li><a href="#svgoptions">svgOptions</a></li></ul></li></ul></div></p><h2 id="creating-github-personal-access-token" tabindex="-1">Creating GitHub Personal Access Token <a class="header-anchor" href="#creating-github-personal-access-token" aria-hidden="true">#</a></h2><p><a href="https://github.com/settings/tokens/new?scopes=repo,read:packages,read:org,read:user,user:email" target="_blank" rel="noopener noreferrer">Click Here</a> to generate your GitHub Personal Access Token. <code>repo</code>, <code>read:packages</code>, <code>read:org</code>, <code>read:user</code>, <code>user:email</code> scopes are required.</p><h2 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-hidden="true">#</a></h2><table><tr><th>Flag</th><th>Type</th><th>Description</th></tr><tr><td><code>-h</code> <code>--help</code></td><td><em>[boolean] [optional]</em></td><td>Show help</td></tr><tr><td><code>-v</code> <code>--version</code></td><td><em>[boolean] [optional]</em></td><td>Show version number</td></tr><tr><td><code>-u</code> <code>--user</code></td><td><em>[string] [optional]</em></td><td>Login of the user to fetch.<br>If none, your data will be fetched</td></tr><tr><td><code>-c</code> <code>--config</code></td><td><em>[string] [optional]</em></td><td>Path to a custom <code>.mjs</code> config file<br>Required when used with <code>--ci</code></td></tr><tr><td><code>-s</code> <code>--svg</code></td><td><em>[string] [optional]</em></td><td>Path to save svg output to</td></tr><tr><td><code>-t</code> <code>--token</code></td><td><em>[boolean] [optional]</em></td><td>Asks for your GitHub PAT through stdin<br>The token must have <code>repo</code>, <code>read:org</code>, <code>read:packages</code>, <code>read:user</code>, and <code>user:email</code> scopes<br>No effect when used with <code>--ci</code></td></tr><tr><td><code>--ci</code></td><td><em>[boolean] [optional]</em></td><td>Continuous Integration mode<br>Disables writing to and reading of config dir<br>Requires <code>--config</code><br>Disables <code>--token</code> <code>--first-run</code></td></tr><tr><td><code>--color</code> <code>--no-color</code></td><td><em>[boolean] [optional]</em></td><td>Enable/Disable colored output in terminal<br>Automatically inferred if flag is absent</td></tr><tr><td><code>--first-run</code> <code>--firstrun</code></td><td><em>[boolean] [optional]</em></td><td><blockquote>WARNING: This will overwrite your config file with default one</blockquote>Trigger the firstrun script<br>No effect when used with <code>--ci</code></td></tr><tr><td><code>-d</code> <code>--debug</code></td><td><em>[boolean] [optional]</em></td><td>Show additional debugging output<br>You can use this to find all variables that can used in the config file</td></tr></table><h2 id="config-mjs" tabindex="-1">config.mjs <a class="header-anchor" href="#config-mjs" aria-hidden="true">#</a></h2><p>This file contains all customizable options. It must export <code>template</code> and <code>templateDeafult</code> functions.</p><p><code>symbols</code>, <code>colors</code>, <code>meta</code>, and <code>svgOptions</code> are optional.</p><hr><h3 id="template-templatedefault" tabindex="-1">template / templateDefault <a class="header-anchor" href="#template-templatedefault" aria-hidden="true">#</a></h3><p>Use the <code>template</code> function to create a personal template for yourself. Use <code>templateDefault</code> to create a generic template for all users.</p><p>Available functions inside the template function (first argument)</p><h4 id="ascii-import-meta-url-path-to-ascii-art" tabindex="-1">ascii(import.<wbr>meta.url, &quot;./path/to/ascii.art&quot;) <a class="header-anchor" href="#ascii-import-meta-url-path-to-ascii-art" aria-hidden="true">#</a></h4><p>Draw the ascii art from file. The path is relative to this config file</p><div class="language-js"><pre><code><span class="token function">ascii</span><span class="token punctuation">(</span>imports<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token string">&quot;./path/to/ascii-art&quot;</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="title-string" tabindex="-1">title(string) <a class="header-anchor" href="#title-string" aria-hidden="true">#</a></h4><p>Displays the string in bold, primary color</p><div class="language-js"><pre><code><span class="token function">title</span><span class="token punctuation">(</span><span class="token string">&quot;Your Username ...&quot;</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="underline" tabindex="-1">underline() <a class="header-anchor" href="#underline" aria-hidden="true">#</a></h4><p>Underlines the previous line</p><div class="language-js"><pre><code><span class="token function">underline</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="info-string-string" tabindex="-1">info(string, string) <a class="header-anchor" href="#info-string-string" aria-hidden="true">#</a></h4><p>Display a key-value pair</p><div class="language-js"><pre><code><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Twitter&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;@whatever&quot;</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="list-string-string" tabindex="-1">list(string, string[]) <a class="header-anchor" href="#list-string-string" aria-hidden="true">#</a></h4><p>Display an unordered list</p><div class="language-js"><pre><code><span class="token function">list</span><span class="token punctuation">(</span><span class="token string">&quot;Languages&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Python&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="text-string" tabindex="-1">text(string) <a class="header-anchor" href="#text-string" aria-hidden="true">#</a></h4><p>Insert plain text</p><div class="language-js"><pre><code><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;Elit enim officia veniam minim ullamco aute culpa qui esse occaecat Lorem ut pariatur eiusmod.&quot;</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="bar-string-number" tabindex="-1">bar(string, number) <a class="header-anchor" href="#bar-string-number" aria-hidden="true">#</a></h4><blockquote><p>not yet implemented</p></blockquote><div class="language-js"><pre><code><span class="token function">bar</span><span class="token punctuation">(</span><span class="token string">&quot;idk&quot;</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="blank" tabindex="-1">blank() <a class="header-anchor" href="#blank" aria-hidden="true">#</a></h4><p>Insert a blank line</p><div class="language-js"><pre><code><span class="token function">blank</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="raw-string" tabindex="-1">raw(string) <a class="header-anchor" href="#raw-string" aria-hidden="true">#</a></h4><p>Use Chalk\`s tagged template syntax to colorize the output</p><div class="language-js"><pre><code><span class="token function">raw</span><span class="token punctuation">(</span><span class="token string">&quot;Hello {green World}!&quot;</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="left" tabindex="-1">left() <a class="header-anchor" href="#left" aria-hidden="true">#</a></h4><p>Switch to the left column</p><div class="language-js"><pre><code><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="right" tabindex="-1">right() <a class="header-anchor" href="#right" aria-hidden="true">#</a></h4><p>Switch to the right column</p><div class="language-js"><pre><code><span class="token function">right</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="variables" tabindex="-1">variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h4><p>The second argument to the template function. To see the complete list run <code>userfetch --debug</code></p><p><code>username</code>, <code>name</code>, <code>email</code>, <code>location</code>, <code>bio</code>, <code>status</code>, <code>followers</code>, <code>following</code>, <code>sponsors</code>, <code>sponsoring</code>, <code>gists</code>, <code>organizations</code>, <code>contributedTo</code>, <code>packages</code>, <code>projects</code>, <code>pullRequests</code>, <code>issues</code>, <code>starred</code>, <code>commits</code>, <code>repositories</code> ...</p><hr><h3 id="colors" tabindex="-1">colors <a class="header-anchor" href="#colors" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> colors <span class="token operator">=</span> <span class="token punctuation">{</span>
  primary<span class="token operator">:</span> <span class="token string">&#39;blueBright&#39;</span><span class="token punctuation">,</span>
  secondary<span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
  tertiary<span class="token operator">:</span> <span class="token string">&#39;gray&#39;</span><span class="token punctuation">,</span>
  alternate<span class="token operator">:</span> <span class="token string">&#39;whiteBright&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>This is an optional export. It can have <code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>alternate</code> keys.</p><p>The possible color values are <code>&#39;black&#39;</code>, <code>&#39;red&#39;</code>, <code>&#39;green&#39;</code>, <code>&#39;yellow&#39;</code>, <code>&#39;blue&#39;</code>, <code>&#39;magenta&#39;</code>, <code>&#39;cyan&#39;</code>, <code>&#39;white&#39;</code>, <code>&#39;blackBright&#39;</code>, <code>&#39;redBright&#39;</code>, <code>&#39;greenBright&#39;</code>, <code>&#39;yellowBright&#39;</code>, <code>&#39;blueBright&#39;</code>, <code>&#39;magentaBright&#39;</code>, <code>&#39;cyanBright&#39;</code>, <code>&#39;whiteBright&#39;</code></p><h4 id="primary" tabindex="-1">primary <a class="header-anchor" href="#primary" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: blueBright</p></blockquote><p>Used in titles and info key</p><h4 id="secondary" tabindex="-1">secondary <a class="header-anchor" href="#secondary" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: white</p></blockquote><p>Used in text, list text, info value</p><h4 id="tertiary" tabindex="-1">tertiary <a class="header-anchor" href="#tertiary" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: gray</p></blockquote><p>Used to color symbols like bullets and underline</p><h4 id="alternate" tabindex="-1">alternate <a class="header-anchor" href="#alternate" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: whiteBright</p></blockquote><p>Used to color the ascii art</p><hr><h3 id="symbols" tabindex="-1">symbols <a class="header-anchor" href="#symbols" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> symbols <span class="token operator">=</span> <span class="token punctuation">{</span>
  underline<span class="token operator">:</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span>
  infoSeparator<span class="token operator">:</span> <span class="token string">&#39;:&#39;</span><span class="token punctuation">,</span>
  listMarker<span class="token operator">:</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span>
  columnSeparator<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="underline-1" tabindex="-1">underline <a class="header-anchor" href="#underline-1" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: <code>-</code></p></blockquote><p>character to be used as underline</p><h4 id="infoseparator" tabindex="-1">infoSeparator <a class="header-anchor" href="#infoseparator" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: <code>:</code></p></blockquote><p>character to be used as separator of key and value</p><h4 id="listmarker" tabindex="-1">listMarker <a class="header-anchor" href="#listmarker" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: <code>-</code></p></blockquote><p>character to be used as bullet in list</p><h4 id="columnseparator" tabindex="-1">columnSeparator <a class="header-anchor" href="#columnseparator" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: <code></code></p></blockquote><p>character to be used as underline</p><hr><h3 id="svgoptions" tabindex="-1">svgOptions <a class="header-anchor" href="#svgoptions" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> svgOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  colors<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">&#39;#18181b&#39;</span><span class="token punctuation">,</span>
    foregroundColor<span class="token operator">:</span> <span class="token string">&#39;#fcfcfc&#39;</span><span class="token punctuation">,</span>
    black<span class="token operator">:</span> <span class="token string">&#39;#232627&#39;</span><span class="token punctuation">,</span>
    red<span class="token operator">:</span> <span class="token string">&#39;#ef4444&#39;</span><span class="token punctuation">,</span>
    green<span class="token operator">:</span> <span class="token string">&#39;#22c55e&#39;</span><span class="token punctuation">,</span>
    yellow<span class="token operator">:</span> <span class="token string">&#39;#eab308&#39;</span><span class="token punctuation">,</span>
    blue<span class="token operator">:</span> <span class="token string">&#39;#3b82f6&#39;</span><span class="token punctuation">,</span>
    magenta<span class="token operator">:</span> <span class="token string">&#39;#d946ef&#39;</span><span class="token punctuation">,</span>
    cyan<span class="token operator">:</span> <span class="token string">&#39;#06b6d4&#39;</span><span class="token punctuation">,</span>
    white<span class="token operator">:</span> <span class="token string">&#39;#f5f5f5&#39;</span><span class="token punctuation">,</span>
    blackBright<span class="token operator">:</span> <span class="token string">&#39;#7f8c8d&#39;</span><span class="token punctuation">,</span>
    redBright<span class="token operator">:</span> <span class="token string">&#39;#f87171&#39;</span><span class="token punctuation">,</span>
    greenBright<span class="token operator">:</span> <span class="token string">&#39;#4ade80&#39;</span><span class="token punctuation">,</span>
    yellowBright<span class="token operator">:</span> <span class="token string">&#39;#fde047&#39;</span><span class="token punctuation">,</span>
    blueBright<span class="token operator">:</span> <span class="token string">&#39;#60a5fa&#39;</span><span class="token punctuation">,</span>
    magentaBright<span class="token operator">:</span> <span class="token string">&#39;#e879f9&#39;</span><span class="token punctuation">,</span>
    cyanBright<span class="token operator">:</span> <span class="token string">&#39;#22d3ee&#39;</span><span class="token punctuation">,</span>
    whiteBright<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  rows<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  cols<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  paddingX<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  paddingY<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
  radius<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
  fontSize<span class="token operator">:</span> <span class="token number">13.6</span><span class="token punctuation">,</span>
  lineHeight<span class="token operator">:</span> <span class="token number">19.72</span><span class="token punctuation">,</span>
  animationDuration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>This is an optional export. This will be used to format the SVG output.</p><h4 id="colors-1" tabindex="-1">colors <a class="header-anchor" href="#colors-1" aria-hidden="true">#</a></h4><p>Contains the following keys</p><p><code>backgroundColor</code>, <code>foregroundColor</code>, <code>black</code>, <code>red</code>, <code>green</code>, <code>yellow</code>, <code>blue</code>, <code>magenta</code>, <code>cyan</code>, <code>white</code>, <code>blackBright</code>, <code>redBright</code>, <code>greenBright</code>, <code>yellowBright</code>, <code>blueBright</code>, <code>magentaBright</code>, <code>cyanBright</code>, <code>whiteBright</code></p><p>The value is a valid CSS Color string.</p><h4 id="rows" tabindex="-1">rows <a class="header-anchor" href="#rows" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: 16</p></blockquote><p>Number of rows in the terminal window</p><h4 id="cols" tabindex="-1">cols <a class="header-anchor" href="#cols" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: 80</p></blockquote><p>Number of columns in the terminal window</p><h4 id="paddingx" tabindex="-1">paddingX <a class="header-anchor" href="#paddingx" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: 20</p></blockquote><p>horizontal padding between the terminal window and text in pixels</p><h4 id="paddingy" tabindex="-1">paddingY <a class="header-anchor" href="#paddingy" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: 15</p></blockquote><p>vertical padding between the terminal window and text in pixels</p><h4 id="radius" tabindex="-1">radius <a class="header-anchor" href="#radius" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: 6</p></blockquote><p>Border radius of the terminal window in pixels</p><h4 id="fontsize" tabindex="-1">fontSize <a class="header-anchor" href="#fontsize" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: 13.6</p></blockquote><p>font size of text inside terminal in pixels</p><h4 id="lineheight" tabindex="-1">lineHeight <a class="header-anchor" href="#lineheight" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: 19.72</p></blockquote><p>line height of text inside terminal in pixels</p><h4 id="animationduration" tabindex="-1">animationDuration <a class="header-anchor" href="#animationduration" aria-hidden="true">#</a></h4><blockquote><p>DEFAULT: 1000</p></blockquote><p>Time (in ms) it takes for all the lines to animate in. If set to <code>0</code>, animation will be disabled</p>`,113),c=[o];function r(i,p,d,l,u,h){return n(),e("div",null,c)}var b=a(t,[["render",r]]);export{g as __pageData,b as default};