import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as e,c as l,a as n,b as a,d as t,f as c}from"./app-cmlm9_eF.js";const i={},u=n("h1",{id:"认识python中的inf和nan",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#认识python中的inf和nan","aria-hidden":"true"},"#"),a(" 认识python中的inf和nan")],-1),k={href:"https://www.jianshu.com/p/d9caa4ab46e1",target:"_blank",rel:"noopener noreferrer"},r=c(`<p>python中的正无穷或负无穷，使用float(&quot;inf&quot;)或float(&quot;-inf&quot;)来表示。</p><p>这里有点特殊，写成：float(&quot;inf&quot;)，float(&quot;INF&quot;)或者float(&#39;Inf&#39;)都是可以的。</p><p>当涉及 &gt; 和 &lt; 比较时，所有数都比无穷小float(&quot;-inf&quot;)大，所有数都比无穷大float(&quot;inf&quot;)小。</p><p>相等比较时，float(&quot;+inf&quot;)与float(&quot;+inf&quot;)、float(&quot;inf&quot;)三者相等。即：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&quot;+inf&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&quot;+inf&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&quot;+inf&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&quot;inf&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
</code></pre></div><p>同样地，float(&quot;-inf&quot;) == float(&quot;-inf&quot;) 返回也是True。</p><p>简单的加，减，乘操作，还是会返回无穷。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;inf&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">666</span>  <span class="token comment"># inf</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;inf&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">888</span>  <span class="token comment"># inf</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;inf&#39;</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">999</span>  <span class="token comment"># inf</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;inf&#39;</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">99999</span>  <span class="token comment"># inf</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;inf&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;inf&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># inf</span>
</code></pre></div><p>特别地，</p><ul><li><p>0 * float(&#39;inf&#39;) 结果为：nan</p></li><li><p>float(&#39;inf&#39;) / float(&#39;inf&#39;) 结果为：nan</p></li><li><p>float(&#39;inf&#39;) - float(&#39;inf&#39;) 结果为：nan</p></li><li><p>float(&#39;-inf&#39;) - float(&#39;-inf&#39;) 结果也为：nan</p></li></ul><p>nan代表Not A Number（不是一个数），它并不等于0，</p><p>因为nan不是一个数，所以相关计算都无法得到数字。</p><p>所有涉及nan的操作，返回的都是nan。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">9999999</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">9999999</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">9999999</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;inf&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;inf&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>结果都是：nan</p><p>比较操作时，返回的都是 False</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;inf&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;-inf&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;inf&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># False</span>
</code></pre></div><p>特别注意两个float(&#39;nan&#39;)并不相等</p><p>python中可以用math.isinf()与math.isnan()来判断数据是否为inf或nan。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> math
n <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;inf&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>isinf<span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
m <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;nan&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>isnan<span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
</code></pre></div><p>numpy中也有相类似的方法可用来判断数据。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token number">0</span> <span class="token operator">/</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;inf&#39;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">/</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;-inf&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># True</span>
</code></pre></div><hr><p>参考资料：</p>`,24),f={href:"https://blog.csdn.net/shennongzhaizhu/article/details/51997887",target:"_blank",rel:"noopener noreferrer"},g={href:"https://stackoverflow.com/questions/17628613/what-is-inf-and-nan",target:"_blank",rel:"noopener noreferrer"};function d(m,b){const s=o("ExternalLinkIcon");return e(),l("div",null,[u,n("blockquote",null,[n("p",null,[a("from "),n("a",k,[a("认识python中的inf和nan - 简书 (jianshu.com)"),t(s)])])]),r,n("p",null,[n("a",f,[a("Python 关于正负无穷float(‘inf’)的一些用法"),t(s)])]),n("p",null,[n("a",g,[a("Stackoverflow.com上的问答：What is inf and nan?"),t(s)])])])}const y=p(i,[["render",d],["__file","python_inf_nan.html.vue"]]);export{y as default};
