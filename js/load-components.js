document.addEventListener("DOMContentLoaded", function () {
    async function loadComponent(selector, file) {
      const element = document.querySelector(selector);
      if (element) {
        const response = await fetch(file);
        if (response.ok) {
          const content = await response.text();
          element.innerHTML = content;
        }
      }
    }
  
    loadComponent("#header", "component/header.html");
    loadComponent("#footer", "component/footer.html");
  });
  