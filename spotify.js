document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    const itemWidth = carouselItems[0].getBoundingClientRect().width;
    let index = 0;

    document.getElementById('settings').onclick = () => window.location.href = 'login.html';

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = totalItems - 1;
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        if (index < totalItems - 1) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    });

    // Handle click on heart button
    document.querySelectorAll('.heart-button').forEach(button => {
        button.addEventListener('click', () => {
            button.querySelector('i').classList.toggle('fas');
            button.querySelector('i').classList.toggle('far');
        });
    });

    // Handle carousel item click for audio playback
    document.querySelectorAll('.carousel-item').forEach(item => {
        item.addEventListener('click', () => {
            const audioSrc = item.getAttribute('data-audio');
            const audioPlayer = document.getElementById('audio-player');
            document.getElementById('audio-source').setAttribute('src', audioSrc);
            audioPlayer.load();
            audioPlayer.play();
        });
    });

    // Navigation between sections
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.id + '-content';
            document.querySelectorAll('main > section').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(sectionId).style.display = 'block';
        });
    });

    // Search button functionality (for demo purposes)
    document.getElementById('search-button').addEventListener('click', () => {
        const searchQuery = document.getElementById('search-input').value;
        alert(`Searching for: ${searchQuery}`);
    });
});
