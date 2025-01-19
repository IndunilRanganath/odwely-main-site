// Function to load a component dynamically
async function loadComponent(selector, file, callback) {
    try {
        const element = document.querySelector(selector);
        if (element) {
            const response = await fetch(file);
            if (response.ok) {
                const content = await response.text();
                element.innerHTML = content;

                // Execute the callback after loading the content
                if (callback) callback();
            } else {
                console.error(`Failed to load ${file}: ${response.statusText}`);
            }
        }
    } catch (error) {
        console.error(`Error loading component: ${error}`);
    }
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('mode-icon');

    // Toggle dark mode class
    body.classList.toggle('dark-mode');

    // Update the icon
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
        localStorage.setItem('dark-mode', 'true');
    } else {
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');
        localStorage.setItem('dark-mode', 'false');
    }
}

// Attach dark mode initialization and event listener
function attachDarkModeFunctionality() {
    // Check saved preference from localStorage
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    const body = document.body;
    const icon = document.getElementById('mode-icon');

    if (isDarkMode) {
        body.classList.add('dark-mode');
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
    } else {
        body.classList.remove('dark-mode');
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');
    }

    // Attach click event listener
    const modeToggle = document.getElementById('mode-toggle');
    if (modeToggle) {
        modeToggle.addEventListener('click', toggleDarkMode);
    }
}

// Load the header and attach functionality
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('#header', 'component/header.html', attachDarkModeFunctionality);
});
