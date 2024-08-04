
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
                carousel.style.transform = `translateX(-${index * 20}%)`;
            }

            function showPrevItem() {
                index = (index - 1 + items.length) % items.length;
                carousel.style.transform = `translateX(-${index * 20}%)`;
            }

            document.getElementById('carousel-next').addEventListener('click', showNextItem);
            document.getElementById('carousel-prev').addEventListener('click', showPrevItem);
        }

        Carousel();
        let currentAudio = null;

document.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('click', function() {
        // Determine the audio source from the clicked item
        const audioSrc = this.getAttribute('data-audio');
        const audioPlayer = document.getElementById('audio-player');
        const audioSource = document.getElementById('audio-source');

        if (currentAudio === audioPlayer) {
            
            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
                audioPlayer.currentTime = 0; 
            }
        } else {
            
            if (currentAudio && !currentAudio.paused) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            if (audioSrc) {
                audioSource.setAttribute('src', audioSrc);
                audioPlayer.load();
                audioPlayer.play();
                currentAudio = audioPlayer; 
            }
        }
    });
});

        
        document.querySelectorAll('.heart-button').forEach(button => {
            button.addEventListener('click', function() {
                const icon = this.querySelector('i');
                icon.classList.toggle('fas');
                icon.classList.toggle('far');
                icon.classList.toggle('liked');
            });
        });

        
        document.getElementById('search').addEventListener('click', function() {
            window.location.href = 'search.html';
        });

        document.getElementById('library').addEventListener('click', function() {
            window.location.href = 'library.html';
        });
        document.getElementById('liked-songs').addEventListener('click', function() {
            window.location.href = 'liked_songs.html';
        });

        document.getElementById('settings').addEventListener('click', function() {
            window.location.href = 'sign-in.html';
        });

        
        document.querySelectorAll('header a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                document.querySelectorAll('section').forEach(section => {
                    section.style.display = 'none';
                });
                document.getElementById(this.id + '-content').style.display = 'block';
           });
        });
    
   