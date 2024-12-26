// This function for main Nav
function spaNav(divId) {
    // Hide all content divs
    const contentDivs = document.querySelectorAll('.content-div');
    contentDivs.forEach((div) => (div.style.display = 'none'));

    // Show the clicked div
    const targetDiv = document.getElementById(divId);
    if (targetDiv) {
        targetDiv.style.display = 'block';
    }
}
