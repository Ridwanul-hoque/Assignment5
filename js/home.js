document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href = 'blog.html'
})

window.addEventListener('scroll', function() {
    const header = document.getElementById('header-blur');
  
    if (window.scrollY > 0) {
      header.classList.add('backdrop-blur-xl', 'bg-white/70');
    } else {
      header.classList.remove('backdrop-blur-xl', 'bg-white/70');
    }
  });