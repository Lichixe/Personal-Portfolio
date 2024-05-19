document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.getElementById('hero');
    
    // Add the 'visible' class to trigger the transition
    setTimeout(() => {
        heroSection.classList.add('visible');
    }, 100); // Delay to ensure the transition effect is noticeable

    // Get references to the bio paragraph and toggle button
    const bioParagraph = document.getElementById('short-bio');
    const toggleBioBtn = document.getElementById('toggle-bio-btn');

    // Add a click event listener to the toggle button
    toggleBioBtn.addEventListener('click', function() {
        // Toggle the visibility of the bio paragraph
        if (bioParagraph.style.display === 'none') {
            bioParagraph.style.display = 'block';
        } else {
            bioParagraph.style.display = 'none';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    
    // Add the 'visible' class to trigger the transition
    setTimeout(() => {
        aboutSection.classList.add('visible');
    }, 100); // Delay to ensure the transition effect is noticeable
});

document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(progressBar => {
        const value = progressBar.getAttribute('data-progress');
        progressBar.style.width = value + '%';
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('click', function() {
            const description = project.querySelector('.description');
            if (description.classList.contains('visible')) {
                description.classList.remove('visible');
            } else {
                // Hide all other descriptions
                projects.forEach(p => p.querySelector('.description').classList.remove('visible'));
                description.classList.add('visible');
            }
        });
    });
});







document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.getElementById('contact');
    
    // Add the 'visible' class to trigger the transition
    setTimeout(() => {
        contactSection.classList.add('visible');
    }, 100); // Delay to ensure the transition effect is noticeable
});


