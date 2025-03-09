// Load the sidebar dynamically
fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;
        addSidebarFunctionality(); // Ensure animations work after loading
    })
    .catch(error => console.error('Error loading sidebar:', error));

function addSidebarFunctionality() {
    // Toggle sidebar on button click
    document.querySelector('.menu-toggle').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('active');
        this.classList.toggle('spin');
        this.classList.toggle('open');
    });

    // Highlight the active page link
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".sidebar a").forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}
