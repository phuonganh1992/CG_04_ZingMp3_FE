function showFormUploadSong() {
    var myModal = new bootstrap.Modal(document.getElementById('modalUploadSong'), {
        keyboard: false
    })
    myModal.show();
    console.log("problem")
    // let content=`<div class="modal fade" id="modalUploadSong" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //     <div class="modal-dialog">
    //         <div class="modal-content">
    //             <a href="" style="position: inherit;margin-left: 480px;text-decoration: none;color: gray"
    //                data-bs-dismiss="modal">x</a>
    //             <div class="modal-header">
    //                 <h5 class="modal-title">Upload Song</h5>
    //             </div>
    //             <div class="modal-body">
    //                 <div class="mb-3">
    //                     <a><label class="form-label">Name</label>
    //                         <input type="email" class="form-control" id="namesong" aria-describedby="emailHelp"
    //                                placeholder="Name of song"></a>
    //
    //                 </div>
    //                 <div class="mb-3">
    //                     <label class="form-label">description</label>
    //                     <input type="text" class="form-control" id="description" placeholder="Description">
    //                 </div>
    //
    //                 <div class="mb-3">
    //                     <label class="form-label">Image</label>
    //                     <input type="file" class="form-control" id="img">
    //                     <button onclick="uploadImage()">Upload Image</button>
    //                     <img src="https://firebasestorage.googleapis.com/v0/b/zingmp3-project.appspot.com/o/icon_05_like.png?alt=media&token=2a53e1e4-1f29-4639-bd03-2ec4afee94be" alt="" id="img_uploaded" style="width: 40px;height: 40px">
    //                 </div>
    //                 <div class="mb-3">
    //                     <label class="form-label">File mp3</label>
    //                     <input type="file" placeholder="file MP3" id="mp3">
    //                     <button onclick="uploadAudio()">Upload mp3</button>
    //                     <div id="audio_uploaded"></div>
    //                 </div>
    //                 <div>
    //                     <select id="song_artist"></select>
    //                 </div>
    //             </div>
    //             <div class="modal-footer">
    //                 <a onclick="uploadSong()"><img
    //                         src="https://firebasestorage.googleapis.com/v0/b/zingmp3-project.appspot.com/o/icon_01_home.png?alt=media&token=35fec41e-91a2-41d0-b1c1-77b50be6f342"
    //                         width="40px"></a>
    //                 <div id="message_createSong"></div>
    //             </div>
    //         </div>
    //     </div>
    // </div>`;
    // $("#modalUploadSong").html(content);
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