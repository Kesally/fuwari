# 关于 / Hi there !
:::note[信息]
当前域名：<code><span id="cdns-hostname"></span></code> 解析为 <span id="cdns-type"></span>
:::
既然你来到了这里，就说明你在访问<span id="cdns"></span>
---
# 关于本站
这是我的个人博客网站，主题来自[Fuwari](https://github.com/saicaca/fuwari).
::github{repo="saicaca/fuwari"}
本站由[Cloudflare Workers](https://workers.cloudflare.com)提供托管服务，由[Vercel](https://vercel.com)提供CDN加速服务
## 字体
使用的是 [MiSans VF](https://hyperos.mi.com/font) ，中英文可变字重字体从官方 CDN 服务器获取。 
[点此查看详情](/misans/)
### 统计信息
使用的是自建托管（ [Vercel](https://www.vercel.com) + [Neon](https://neon.com)）的 [Umami](https://umami.is) 

# 关于我 / About me
我是一名来自[广东](https://baike.baidu.com/item/%E5%B9%BF%E4%B8%9C%E7%9C%81/132473)的高中生，15岁自学JavaScript、Python，平时爱好羽毛球、摄影、还有FPS游戏
::github{repo="kesally/hs-qiqi-cv-plugin"}

# 博客更新记录

## 2026.02.14
增加部署评论系统 [Giscus](https://giscus.app/zh-CN) 教程、优化网站细节
## 2026.02.13
同步[老博客](https://old.blog.kesally.ren)文章、添加友链、Bing背景图、文章目录功能
## 2026.02.12
博客增加[Umami](https://umami.is)统计、增加[一言](https://hitokoto.cn/)显示
## 2026.02.11
初次尝试静态博客、初步个性化博客
## 2024.11.03 
基于Wordpress的[老博客](https://old.blog.kesally.ren)上线了

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
        else if (hostname === "cf.blog.kesally.ren") {
            siteType.innerHTML = '由 <a href="https://workers.cloudflare.com" target="_blank">Cloudflare Workers</a> 托管的 <a href="https://cf.blog.kesally.ren">https://cf.blog.kesally.ren</a>。本站点未进行 IP 优选。';
            cdnType.textContent = "Cloudflare Workers";
        }
        else if (hostname === "blog.kesally.ren") {
            siteType.innerHTML = '由 <a href="https://workers.cloudflare.com" target="_blank">Cloudflare Workers</a> 托管的 <a href="https://blog.kesally.ren">https://blog.kesally.ren</a>。本站点已进行 IP 优选，使用的 CNAME 为 <code>saas.sin.fan</code>。';
            cdnType.textContent = "Cloudflare Workers";
        }
        else if (hostname === "vercel.blog.kesally.ren") {
            siteType.innerHTML = '由 <a href="https://vercel.com" target="_blank">Vercel</a> 托管的 <a href="https://vercel.blog.kesally.ren">https://vercel.blog.kesally.ren</a>。本站点未进行 IP 优选，使用的官方 CNAME 为 <code>cname.vercel-dns.com</code>。';
            cdnType.textContent = "Vercel";
        }
        else if (hostname === "fuwari-6as2ivvq.edgeone.cool") {
            siteType.innerHTML = '由 <a href="https://edgeone.ai/zh" target="_blank">EdgeOne Page</a> 构建的 <a href="fuwari-6as2ivvq.edgeone.cool">fuwari-6as2ivvq.edgeone.cool</a>。本站点为EO Pages提供的国内解析域名，由于各种因素，根域名已被标记为危险域名。';
            cdnType.textContent = "腾讯云 EdgeOne";
        }
        else if (hostname === "eo.blog.kesally.ren") {
            siteType.innerHTML = '由 <a href="https://edgeone.ai/zh" target="_blank">EdgeOne Page</a> 加速的 <a href="https://eo.blog.kesally.ren">https://eo.blog.kesally.ren</a>。本站点未进行 IP 优选。';
            cdnType.textContent = "腾讯云 EdgeOne";
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