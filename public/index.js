document.addEventListener('DOMContentLoaded', () => {
  tabs.forEach(tab => {
    tab.addEventListener('onclick', switchTabs())
  })
})
