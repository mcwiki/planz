var posts=["posts/1001.html","posts/1002.html","posts/1002.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };