// Function to switch between sections
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(function(section) {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}