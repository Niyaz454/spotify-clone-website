function setGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning";
    } else if (hours < 18) {
        greeting = "Good Afternoon";
    } else if (hours < 22) {
        greeting = "Good Evening";
    } else {
        greeting = "Good Night";
    }

    document.getElementById('greeting').textContent = greeting;
}

setGreeting();

document.querySelector('.sidebar-toggle').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('main');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        main.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0';
        main.style.marginLeft = '250px';
    }
});

function Carousel() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    function showNextItem() {
        index = (index + 1) % items.length;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function showPrevItem() {
        index = (index - 1 + items.length) % items.length;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    document.getElementById('carousel-next').addEventListener('click', showNextItem);
    document.getElementById('carousel-prev').addEventListener('click', showPrevItem);
}

Carousel();

document.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('click', function() {
        const audioId = `audio-${this.querySelector('.song-info').textContent.replace(/ /g, '')}`;
        const audio = document.getElementById(audioId);

        if (audio) {
            document.querySelectorAll('audio').forEach(a => {
                if (a !== audio) {
                    a.pause();
                    a.currentTime = 0;
                }
            });
            
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
                audio.currentTime = 0;
            }
        }
    });
});

document.querySelectorAll('.heart-button').forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        icon.classList.toggle('fas');
        icon.classList.toggle('far');
        
        const songName = this.closest('.carousel-item').querySelector('.song-info').textContent;

        if (icon.classList.contains('fas')) {
            if (!likedSongs.includes(songName)) {
                likedSongs.push(songName);
            }
        } else {
            likedSongs = likedSongs.filter(song => song !== songName);
        }

        displayLikedSongs();
    });
});

document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = `<p>Searching for "${query}"...</p>`;
    // Add logic to fetch and display search results here
});

document.getElementById('create-playlist').addEventListener('click', function() {
    const playlistContent = document.getElementById('playlist-content');
    playlistContent.innerHTML += `
        <div class="playlist">
            <h3>New Playlist</h3>
            <p>Playlist content goes here.</p>
        </div>
    `;
});

let likedSongs = [];

function displayLikedSongs() {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    document.querySelector('#liked-songs-content').style.display = 'block';
    const likedSongsList = document.getElementById('liked-songs-list');
    likedSongsList.innerHTML = likedSongs.map(song => `<li>${song}</li>`).join('');
}
