import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,f as s}from"./app-cmlm9_eF.js";const c={},t=s(`<h1 id="阿里云轻量服务器自定义服务" tabindex="-1"><a class="header-anchor" href="#阿里云轻量服务器自定义服务" aria-hidden="true">#</a> 阿里云轻量服务器自定义服务</h1><h2 id="关闭原有服务" tabindex="-1"><a class="header-anchor" href="#关闭原有服务" aria-hidden="true">#</a> 关闭原有服务</h2><p>应用程序安装信息：</p><figure><img src="https://raw.githubusercontent.com/ET-yzk/picgo/blog/202110142121753.png" alt="image-20211014212132625" tabindex="0"><figcaption>image-20211014212132625</figcaption></figure><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 停止 Apache Web Service</span>
/usr/local/apache/bin/apachectl stop
<span class="token comment"># 停止 Mysql DB Service</span>
<span class="token function">sudo</span> <span class="token function">service</span> mysql stop
</code></pre></div><p>关闭以上服务后，服务器80端口将被空出，可用于个人服务。</p>`,6),o=[t];function i(r,p){return a(),n("div",null,o)}const d=e(c,[["render",i],["__file","aliyun-server.html.vue"]]);export{d as default};
