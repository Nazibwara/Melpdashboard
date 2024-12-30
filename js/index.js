document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
      const button = document.getElementById('dropdownMenuButton');
      button.textContent = this.textContent;
    });
  });


  const sideArrow = document.querySelector(".sideArrow");
  const sidebar = document.querySelector(".sidebar");
  const mainBox = document.querySelector(".mainBox");
  
  // Add click event listener to the sideArrow
  sideArrow.addEventListener("click", function() {
    // Toggle the 'show' class on both the sidebar and mainBox
    sidebar.classList.toggle('visible');
    mainBox.classList.toggle('cstmWidth');
  });