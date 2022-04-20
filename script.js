var menu = document.querySelector(".menu");
var navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("change");
    menu.classList.toggle('change')
});


const video = document.querySelector('.video')
const btn = document.querySelector('.buttons button i');
const bar = document.querySelector('.video-bar')

const playPause = function () {
    if (video.paused) {
        video.play()
        btn.className = 'far fa-pause-circle'
        video.style.opacity = '.7'
    } else {
        video.pause()
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
    }
}

btn.addEventListener('click', function () {
    playPause()
})


video.addEventListener('timeupdate', function () {
    console.log(video.currentTime, video.duration)
    const barWidth = video.currentTime / video.duration;
    bar.style.width = `${barWidth * 100}%`
    if (video.ended) {
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
    }
})


var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
});
