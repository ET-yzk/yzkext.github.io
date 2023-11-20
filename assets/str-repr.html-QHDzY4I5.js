import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,a as n,b as s,d as t,f as e}from"./app-cmlm9_eF.js";const r={},i=e(`<h1 id="str-和-repr-的异同" tabindex="-1"><a class="header-anchor" href="#str-和-repr-的异同" aria-hidden="true">#</a> <code>__str__</code>和<code>__repr__</code>的异同</h1><h2 id="字符串的表示形式" tabindex="-1"><a class="header-anchor" href="#字符串的表示形式" aria-hidden="true">#</a> 字符串的表示形式</h2><p>我们都知道，Python的内置函数<code>repr()</code>能够把对象用字符串的形式表达出来，方便我们辨认。这就是“字符串表示形式”。<code>repr()</code>就是通过<code>__repr__</code>这个特殊方法来得到一个对象的字符串表示形式的。如果没有实现<code>__repr__</code>，当我们在控制台里打印一个向量的实例时，得到的字符串可能会是 &lt;Vector object at 0x10a514f98&gt;。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">class</span> <span class="token class-name">Example</span><span class="token punctuation">:</span> <span class="token keyword">pass</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>Example<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span>__main__<span class="token punctuation">.</span>Example <span class="token builtin">object</span> at <span class="token number">0x10a514f98</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">repr</span><span class="token punctuation">(</span>Example<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span>__main__<span class="token punctuation">.</span>Example <span class="token builtin">object</span> at <span class="token number">0x1088eb438</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">(</span>Example<span class="token punctuation">)</span>
<span class="token string">&quot;&lt;class &#39;__main__.Example&#39;&gt;&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">repr</span><span class="token punctuation">(</span>Example<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token string">&#39;&lt;__main__.Example object at 0x1088eb438&gt;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="str-vs-repr" tabindex="-1"><a class="header-anchor" href="#str-vs-repr" aria-hidden="true">#</a> <strong><code>__str__ </code>vs.<code> __repr__</code></strong></h2>`,5),u=n("code",null,"__str__ ",-1),d=n("code",null," __repr__",-1),k={href:"https://link.segmentfault.com/?enc=pEhyJythcllHjZjcCjBvuQ%3D%3D.BRKrQmzNQqa9y31ggG7rUseAE68AFJ%2FXQJe2i2RVTbzjSQH6X1JKYvw8BfIpO6WYcEzoU5WW0WTg4zpBztGSVqjrlJWuwhC8LHiQZbE0pdzqqi5dj1moalNH%2FfM%2Bh9Ej",target:"_blank",rel:"noopener noreferrer"},_=n("li",null,[n("code",null,"__str__"),s("：通过"),n("code",null,"str(object)"),s("以及内置函数"),n("code",null,"format()"),s("和"),n("code",null,"print()"),s("调用以生成一个对象的“非正式”或格式良好的字符串表示。返回值必须是"),n("strong",null,"字符串对象"),s("。")],-1),g=n("code",null,"__repr__",-1),v=n("code",null,"repr()",-1),m=n("strong",null,"字符串对象",-1),b={href:"https://link.segmentfault.com/?enc=X2cz0PpeTHNUqp84stuyqg%3D%3D.9dl7J2LQKUHQJ1icEPFljJ%2BOXoJYW5HE6InZ4mmN8ljkUUwxjkTuOGySYgIyXl1Y911KmiUysvkmmFeO2y5%2F1A%3D%3D",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"object",-1),y=n("code",null,"object.__repr__()",-1),f=e(`<p>什么正式与非正式格式，你已经搞懵了是吗？没事，我们接着看：</p><h3 id="_1-两者都能输出对象" tabindex="-1"><a class="header-anchor" href="#_1-两者都能输出对象" aria-hidden="true">#</a> 1. 两者都能输出对象</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x <span class="token operator">=</span> <span class="token number">4</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">repr</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token string">&#39;4&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token string">&#39;4&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> y <span class="token operator">=</span> <span class="token string">&#39;pythonic&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">repr</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
<span class="token string">&quot;&#39;pythonic&#39;&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
<span class="token string">&#39;pythonic&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> z <span class="token operator">=</span> <span class="token string">&#39;4&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">repr</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span>
<span class="token string">&quot;&#39;4&#39;&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span>    <span class="token comment"># 注意，此处的输出结果形式跟str(x)一样，但x和z的类型并不一样</span>
<span class="token string">&#39;4&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">str</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">repr</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">repr</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span>
<span class="token boolean">False</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">repr</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">repr</span><span class="token punctuation">(</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">)</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当x=4，当x为整数类型时，调用<code>str()</code>和<code>repr()</code>的返回结果是一样，</p><p>而当y为字符串类型时，<code>repr(y)</code>的结果就是“正式”的字符串表示，而<code>str(y)</code>的结果则是“非正式”的。<code>str()</code>能够让我们最快速了解到对象的内容，可读性较高。</p><h3 id="_2-str-是可读的-repr-的目标是明确的" tabindex="-1"><a class="header-anchor" href="#_2-str-是可读的-repr-的目标是明确的" aria-hidden="true">#</a> 2 .<code>__str__</code>是可读的，<code>__repr__</code>的目标是明确的</h3><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> datetime
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
<span class="token string">&#39;2020-04-04 20:47:46.525245&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">repr</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
<span class="token string">&#39;datetime.datetime(2020, 4, 4, 20, 47, 46, 525245)&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 
</code></pre></div><p>可以看出<code>repr()</code>更能显示出对象的类型、值等信息，对象描述清晰的。</p><p>在 <code>str()</code> 函数被使用，或是在用 <code>print</code> 函数打印一个对象的时候才被调用的，并且它返回的字符串对终端用户更友好。</p><h3 id="_3-重写-repr-那也会使用-str" tabindex="-1"><a class="header-anchor" href="#_3-重写-repr-那也会使用-str" aria-hidden="true">#</a> 3. 重写<code>__repr__</code>，那也会使用<code>__str_</code></h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Name：&quot;</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>name

    <span class="token keyword">def</span> <span class="token function">__repr__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;姓名：&quot;</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>name


class_one <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>class_one<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>class_one<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">repr</span><span class="token punctuation">(</span>class_one<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Name：Alice
Name：Alice
姓名：Alice
</code></pre></div><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1><p><strong>共同点：</strong> 都是用来输出一个对象</p><p><strong>区别：</strong></p><ol><li><code>__str__</code> 的目标是可读的，<code>__str__()</code>并不预期返回一个有效的 Python 表达式，但可以使用更方便或更准确的描述信息。</li><li><code>__repr__</code> 的目标是明确的，所返回的字符串应该准确、无歧义，并且尽可能表达出如何 用代码创建出这个被打印的对象。</li><li>容器的 <code>__str__</code> 方法的使用包含对象的 <code>__repr__</code></li></ol><p>参考资料：</p>`,18),x={href:"https://segmentfault.com/a/1190000022266368#",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"__str__",-1),w=n("code",null,"__repr__",-1),E={href:"https://link.segmentfault.com/?enc=P12%2FFueOa0lJy6s8WBbR5g%3D%3D.y4Ujz%2BLJq89VZlfYIYQ%2F4m%2FgXtwry88Sh%2BKAzfb5VakEiLjf6MVQB7qXV%2BGQVNsS",target:"_blank",rel:"noopener noreferrer"};function j(z,B){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,n("p",null,[s("接下来我们看一看**"),u,s("和"),d,s("**有哪些异同。根据"),n("a",k,[s("Python官方文档定义"),t(a)]),s("：")]),n("ul",null,[_,n("li",null,[g,s("：是由"),v,s("内置函数调用，用来输出一个对象的“官方”字符串表示。返回值必须是"),m,s("，此方法通常被用于调试。内置类型 "),n("a",b,[h,t(a)]),s(" 所定义的默认实现会调用 "),y,s("。")])]),f,n("ul",null,[n("li",null,[n("a",x,[s("“Difference between "),q,s(" and "),w,s(" in Python”"),t(a)])]),n("li",null,[n("a",E,[s("Fluent Python"),t(a)])])])])}const V=p(r,[["render",j],["__file","str-repr.html.vue"]]);export{V as default};
