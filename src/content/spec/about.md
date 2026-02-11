# 关于 / Hi there !
:::note[信息]
当前域名：<code><span id="cdns-hostname"></span></code>。解析为 <span id="cdns-type"></span>。
:::
既然你来到了这里，就说明你在访问<span id="cdns"></span>
---
# 关于本站
这是我的个人博客网站，主题来自[Fuwari](https://github.com/saicaca/fuwari).
::github{repo="saicaca/fuwari"}
本站由[Cloudflare Pages](https://www.cloudflare.com)提供托管服务，由[Vercel](https://vercel.com)提供CDN加速服务
## 字体
使用的是 [MiSans VF](https://hyperos.mi.com/font) ，中英文可变字重字体从官方 CDN 服务器获取。 
[点此查看详情](/misans/)
----
# 关于我 / About me
我是一名来自[广东](https://baike.baidu.com/item/%E5%B9%BF%E4%B8%9C%E7%9C%81/132473)的高中生，15岁自学JavaScript、Python，平时爱好羽毛球、摄影、还有PUBG。
::github{repo="kesally/hs-qiqi-cv-plugin"}
----

<script>
    function getHostname(){
        // 主机名解析
        const hostname = window.location.hostname;
        const siteType = document.getElementById('cdns');
        const hName = document.getElementById('cdns-hostname');
        const cdnType = document.getElementById('cdns-type');
        if (hostname === "localhost" || hostname === "127.0.0.1" || hostname.includes("192.168.")){
            // Local
            siteType.innerHTML = "本地服务器。";
            cdnType.textContent = "本地"
        }
        else if (hostname === "netlify.blog.kesally.ren"){
            // Netlify
            siteType.innerHTML = '由 <a href="https://www.netlify.com" target="_blank">Netlify</a> 托管的 <a href="https://netlify.blog.kesally.ren">https://netlify.blog.kesally.ren</a>。本站 Netlify Amazon CDN 优选 IP：<code>3.33.186.135</code>';
            cdnType.textContent = "Netlify";
            
        }
        else if (hostname === "worker-cf.adclosenn.dev") {
            // Cloudflare Workers https://worker-cf.adclosenn.dev
            siteType.innerHTML = '由 <a href="https://workers.cloudflare.com" target="_blank">Cloudflare Workers</a> 托管的 <a href="https://worker-cf.adclosenn.dev">https://worker-cf.adclosenn.dev</a>。本站点未进行 IP 优选。';
            cdnType.textContent = "Cloudflare Workers";
        }
        else if (hostname === "cf.blog.kesally.ren") {
            // Cloudflare Pages https://cf.adclosenn.dev
            siteType.innerHTML = '由 <a href="https://pages.cloudflare.com" target="_blank">Cloudflare Pages</a> 托管的 <a href="https://cf.blog.kesally.ren">https://cf.blog.kesally.ren</a>。本站点未进行 IP 优选。';
            cdnType.textContent = "Cloudflare Pages";
        }
        else if (hostname === "blog.kesally.ren") {
            // Cloudflare Pages 优选 https://www.adclosenn.dev
            siteType.innerHTML = '由 <a href="https://pages.cloudflare.com" target="_blank">Cloudflare Pages</a> 托管的 <a href="https://blog.kesally.ren">https://blog.kesally.ren</a>。本站点已进行 IP 优选，使用的 CNAME 为 <code>www.shopify.com</code>。';
            cdnType.textContent = "Cloudflare Pages";
        }
        else if (hostname === "vercel-o.blog.kesally.ren") {
            // Vercel https://origin.vercel.adclosenn.dev
            siteType.innerHTML = '由 <a href="https://vercel.com" target="_blank">Vercel</a> 托管的 <a href="https://vercel-o.blog.kesally.ren">https://vercel-o.blog.kesally.ren</a>。本站点未进行 IP 优选，使用的官方 CNAME 为 <code>cname.vercel-dns.com</code>。';
            cdnType.textContent = "Vercel";
        }
        else if (hostname === "vercel.blog.kesally.ren") {
            // Vercel 优选 https://vercel.adclosenn.dev
            siteType.innerHTML = '由 <a href="https://vercel.com" target="_blank">Vercel</a> 托管的 <a href="https://vercel.blog.kesally.ren/">https://vercel.blog.kesally.ren</a>。本站点已进行 IP 优选，使用的 IP 为 <code>64.29.17.65</code>。';
            cdnType.textContent = "Vercel";
        }
        else if (hostname === "eo.blog.kesally.ren") {
            // EdgeOne CDN https://cf-eo.adclosenn.dev
            siteType.innerHTML = '由 <a href="https://edgeone.ai/zh" target="_blank">EdgeOne CDN</a> 加速的 <a href="https://eo.blog.kesally.ren">https://eo.blog.kesally.ren</a>。本站点已进行 IP 优选，使用的 IP 为 <code>43.174.245.158</code>。源站为 Cloudflare Pages。';
            cdnType.textContent = "腾讯云 EdgeOne";
        }
        else if (hostname === "fastly.blog.kesally.ren") {
            // Fastly CDN https://fastly.kesally.ren
            siteType.innerHTML = '由 <a href="https://www.fastly.com" target="_blank">Fastly CDN</a> 加速的 <a href="https://ffastly.blog.kesally.ren">fastly.blog.kesally.ren</a>。本站点已进行 IP 优选。';
            cdnType.textContent = "Fastly CDN";
        }
        else{
            siteType.innerHTML = "未知主机名：<code>" + hostname + "</code>。";
            cdnType.innerHTML = "未知主机名"
        }
        if (hostname != "") {
            hName.textContent = hostname;
        }
        else {
            hName.textContent = "本地 HTML 文件";
        }
    }

    // 兼容 Astro 的客户端导航与首次加载
    document.addEventListener('astro:page-load', getHostname);
    document.addEventListener('astro:after-swap', getHostname);
    if (document.readyState !== 'loading') getHostname();
    document.addEventListener('DOMContentLoaded', getHostname);
</script>