document.addEventListener('DOMContentLoaded', function() {
  window.reload = function() {
    return false;
  }
  
  logOut.addEventListener('click', function() {
    location.reload(); 
  })
})
