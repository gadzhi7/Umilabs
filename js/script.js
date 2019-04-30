document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.header_inner a').onclick = function(e) {
    e.preventDefault()
    document.querySelector('.form').scrollIntoView({
      behavior: "smooth"
    })
  }

});
