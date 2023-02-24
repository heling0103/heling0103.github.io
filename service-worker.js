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
    "revision": "837ef5972c04cea9e823a8bf6ebca93a"
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
    "url": "assets/js/12.84b5523a.js",
    "revision": "e47a2d221ec3e6b79cd24b408109446a"
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
    "url": "assets/js/15.6b2d2ce6.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
  },
  {
    "url": "assets/js/16.ada8f22d.js",
    "revision": "77d86646973db802dec199f749183516"
  },
  {
    "url": "assets/js/17.35fdb9f0.js",
    "revision": "679e09d1bee7f18523c034f6c3e7dbed"
  },
  {
    "url": "assets/js/18.18b93722.js",
    "revision": "32a5f8ea1bf0cef421b33b6bffbb0016"
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
    "url": "assets/js/app.9485530a.js",
    "revision": "8ced6a50cdb050b9fa6a39d4caed6c81"
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
    "revision": "6a269b7763d6e8d2c3a977ab9e1e1e6e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1fbe01fbc5d3b85cb2f488f5aafa9456"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "29b423a28f2f1832591be95faca8e72f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e795008ed643becb9800bf943af96f00"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "85b67eead55eb2c0b45be3d8de4e951a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "7d05c2fc6e4710a518e4263b76d078a3"
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
    "revision": "0acd92165c2193de19f190e4a41ddd3b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "7cb53b08d135d0fb9a7044a65a4b3c67"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4a557e6b63ec9309d6b6ccee5c9ede53"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "199618fa69614f2ccd751d2c5c431ecb"
  },
  {
    "url": "tags/js/index.html",
    "revision": "bb8f931a1efaf4589b23a24a688c1f14"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "73bbaf13134ff6c0c238036e1a0b4ef6"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "8bf5f6ba32be00a80ea718972a72d228"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ce0240614a239843f2c294ca35dc022f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "0aae8dc365e708f76da33262d49ae4cd"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "aa1724e5223d8b19ef5281d7bd554226"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5793a576eeef14fc109987aa000c0db2"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8b3e84420c8f1e850aad0f4340f16a66"
  },
  {
    "url": "timeline/index.html",
    "revision": "ed5ba0a509dde2b6f80de935b2fb6ab8"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e7cc6c641afbe3d201d1fc7629af0561"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "a0c59c7f14aa2533d82760d22cc05694"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "3b9024704b3d8bdc15cc1aaa739ffa58"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "17c20e9918715836388c5a5ecf00b770"
  },
  {
    "url": "生活分享/life.html",
    "revision": "ed3c49ee45802ab456a62c04fdbcc8e5"
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
