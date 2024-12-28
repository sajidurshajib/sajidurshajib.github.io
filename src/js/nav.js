function spaNav(divId) {
    // Save the clicked divId to localStorage
    localStorage.setItem('activeDiv', divId);

    // Hide all content divs
    const contentDivs = document.querySelectorAll('.content-div');
    contentDivs.forEach((div) => (div.style.display = 'none'));

    // Show the clicked div
    const targetDiv = document.getElementById(divId);
    if (targetDiv) {
        targetDiv.style.display = 'block';
    }
}

// Function to restore the last visited div on page load
function restoreNav() {
    const activeDiv = localStorage.getItem('activeDiv');
    if (activeDiv) {
        spaNav(activeDiv);
    } else {
        // Set a default div to show if none is saved
        const defaultDiv = document.querySelector('.content-div');
        if (defaultDiv) {
            spaNav(defaultDiv.id);
        }
    }
}

// Call restoreNav on page load
document.addEventListener('DOMContentLoaded', restoreNav);
