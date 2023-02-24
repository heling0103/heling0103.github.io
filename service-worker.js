/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "640c3697775e7954ad153bbce0716aa6"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.2356bf96.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.c76b71d0.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.a307acb3.js",
    "revision": "1523ab2e9237d015413223374b0b45be"
  },
  {
    "url": "assets/js/13.d3e15149.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.e045644f.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.19059cf6.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
  },
  {
    "url": "assets/js/16.5187b8bd.js",
    "revision": "15ffa534f0e33db227cd4ba62fa00f4e"
  },
  {
    "url": "assets/js/17.eadbafe9.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.345d2cd9.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
  },
  {
    "url": "assets/js/4.869f9644.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.90418627.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.4fbfe6b6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.ecce5d03.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.763ad6a8.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.2c732680.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.4ace7f03.js",
    "revision": "36650ae0852d0cfbf23c6090664e44ed"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "36394f6830330ae6f207ee9f401c7bdf"
  },
  {
    "url": "categories/java/index.html",
    "revision": "928a6eee77a13412ffbacf5edbbc844b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "616781fc11e9b734f7f181862ea47400"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6941f18c3a414379f83d133dc82a016f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "02065618e247c1437bda607de56a7bff"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "cb99ea965a10700ec33677d2ec4ca5c4"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "7c78716986ef6332b93730f4e7db23a9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8f4e8a8c0e7f99e1a5b942942ebc80be"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "1b798acefe34c485323c545e33e0f885"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "370ecb4f6d5a43599df7e1d421452470"
  },
  {
    "url": "tags/js/index.html",
    "revision": "83853f129c153c3ca5324536ea9d8810"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "9a456136d825ac153712d3c8d41d35d0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "4c87331a02ebe699bd0f322ef294520c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7d7fca6e5bc49be1d85ef7cce5f5c42a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b7d7de2f2be291f6580d86eced0d3bb9"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d3ea4b9d5166dd2d983c2d47ed833552"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "df4b3505824746fa80f4a82e36d97315"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "ba8638682105bbb7a4f8207e2077b9b6"
  },
  {
    "url": "timeline/index.html",
    "revision": "b1034999e3a616b7ab8ec509cac4bef7"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "802e5bd7dbb64062239e17f2ff88cc26"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "8bd169da176ab2c32d97b116c70d8828"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c9e65e7bbce29b1bcf4e147fef478b41"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "83c998b1eca249c71e7e5b68db4913c9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "83060da0460f4ddbbe16a9d2cd89603b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
