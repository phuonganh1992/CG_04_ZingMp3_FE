let audio = new Audio('');
let time;
function playMusic(songId) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/songs/" + songId,
        success: function (song) {
            localStorage.setItem("currentSong", JSON.stringify(song))
        },
        error: function (e) {
            console.log("error: " + e)
        }
    })
    setTimeout(() => {
        audio.pause();
        let currentSong = JSON.parse(localStorage.getItem("currentSong"));
        $("#song_img").attr("src", currentSong.img);
        $("#song_name").text(currentSong.name);

        audio = new Audio(currentSong.mp3);
        audio.play();
    }, 1000)

    $('body').on('click', '.fa-play', function (e) {
        audio.play();
        audioTotalTime = audio.duration / 60;
        $(this).addClass('fa-pause')
        $(this).removeClass('fa-play');
        $('.song_long').text(Math.round(audioTotalTime * 100) / 100);
        updateCurrentTime();
        console.log(time)

    });

    $('body').on('click', '#time', function () {
        audio.pause();
        audio.currentTime = audioTotalTime * $(this).val();
        audio.play();
    });

    $('body').on('click', '.fa-pause', function () {
        audio.pause();
        $(this).addClass('fa-play')
        $(this).removeClass('fa-pause');
    });

    $('body').on('click', '.fa-music', function () {
        $('.song_list').slideToggle();
    });
    vol.onchange = function () {
        audio.volume = vol.value / 100;
    }

    function updateCurrentTime() {
        setInterval(function () {
            time = audio.currentTime;
            let minutes = Math.floor(time / 60);
            let seconds = Math.floor(time);
            seconds = (seconds - (minutes * 60)) < 10 ? ('0' + (seconds - (minutes * 60))) : (seconds - (minutes * 60));
            let currentTime = minutes + ':' + seconds;
            $('.runing_time').text(currentTime);
            $("#time").val(time / audioTotalTime)

        }, 1000)
    }
}