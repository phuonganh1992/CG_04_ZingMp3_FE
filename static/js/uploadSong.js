function showFormUploadSong() {
    let userLogin=JSON.parse(localStorage.getItem("userLogin"));
    if(userLogin==null){
        alert("Bạn phải đăng nhập để thực hiện chức năng này")
        openLoginForm();
    } else {
        var myModal = new bootstrap.Modal(document.getElementById('modalUploadSong'), {
            keyboard: false
        })
        myModal.show();
    }

}

function uploadSong() {
    let userLogin=JSON.parse(localStorage.getItem("userLogin"))
    let name = $("#namesong").val();
    let description = $("#description").val();
    let img = $("#img_uploaded").attr("src");
    let artistId = $("#song_artist").val();
    let userId = userLogin.id;
    let mp3 = $("#mp3_url").attr("src");
    console.log(img)
    let song = {
        name: name,
        description: description,
        img: img,
        mp3: mp3,
        artist: {
            id: artistId
        },
        user: {
            id: userId
        },

    }
    console.log(song)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/api/songs",
        data: JSON.stringify(song),
        success: function () {
            $("#message_createSong").text("Your song is uploaded successfully")
        },
        error: function (error) {
            console.log("your error: "+error)
        }
    });

}

function getArtistSong() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/artist",
        success: function (data) {
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += `<option value="${data[i].id}">${data[i].name}</option>`
            }
            document.getElementById("song_artist").innerHTML = content;
        }
    })
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAFa5LCC1hPnuBc5Lpv7YFrxSD59l-jc0E",
    authDomain: "zingmp3-project.firebaseapp.com",
    projectId: "zingmp3-project",
    storageBucket: "zingmp3-project.appspot.com",
    messagingSenderId: "586241566045",
    appId: "1:586241566045:web:ab0014cb015f230821b4b4",
    measurementId: "G-2LCN4JYDE5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// console.log(firebase)

function uploadImage() {
    const ref = firebase.storage().ref();
    const file = document.querySelector("#img").files[0];
    const name = file.name;
    const metadata = {
        contentType: file.type
    }
    const task = ref.child(name).put(file, metadata);

    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            alert("Image upload successful");
            const image = document.querySelector("#img");
            image.src = url;

            $("#img_uploaded").attr("src", url);
        })
}

function uploadAudio() {
    const ref = firebase.storage().ref();
    const file = document.querySelector("#mp3").files[0];
    const name = file.name;
    const metadata = {
        contentType: file.type
    }
    const task = ref.child(name).put(file, metadata);

    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            alert("Audio upload successful");
            let content = `<audio id="audio_uploaded" controls preload="none"> <source src="${url}" id="mp3_url"></audio>`
            $("#audio_uploaded").html(content)
        })
}