document.addEventListener('DOMContentLoaded', function(){

  // scroll to form
  document.querySelector('.header_inner a').onclick = function(e) {
    e.preventDefault()
    document.querySelector('.form').scrollIntoView({
      behavior: "smooth"
    })
  }

  // phone mask
  document.querySelector('input[name="phone"]').oninput = function() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  }
  document.querySelector('input[name="phone"]').onchange = function() {
    let pat = this.value.replace(/\D/g, '').match(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/)
    this.value = '+' + pat[1] + ' (' + pat[2] + ') ' + pat[3] + '-' + pat[4] + '-' + pat[5]
  }

});
