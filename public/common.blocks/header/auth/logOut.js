document.addEventListener('DOMContentLoaded', function() {
  
  logOut.addEventListener('click', function() {
    sessionStorage.setItem("is_reloaded", false);
    window.location.reload();
  })
})
