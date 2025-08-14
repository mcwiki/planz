var posts=["2025/08/06/hello-world/","2025/08/08/测试/","2025/08/10/经济往事/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };