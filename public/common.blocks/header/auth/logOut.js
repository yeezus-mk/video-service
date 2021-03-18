document.addEventListener('DOMContentLoaded', function() {
  
  logOut.addEventListener('click', () => {
    sessionStorage.setItem("is_reloaded", false);
    window.location.reload();
  })
})
