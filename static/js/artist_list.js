function getAllArtist() {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        url: "http://localhost:8080/api/artists",
        success: function (data) {

            let str = `<button onclick="create()"  >Add Artist</button>

<table class="table table-striped">
<div id="create_artist"></div>
<tr>
<th>User id</th>
<th>Image</th>
<th>Name Artist</th>
<th>Description</th>
<th>Edit Artist</th>
<th>Delete Artist</th>
</tr>`;
            for (let i = 0; i < data.length; i++) {
                str += `<tr>
<td>${data[i].id}</td>
<td><img src="${data[i].image}" style="width: 40px;height: 40px">
</td>
<td>${data[i].name}</td>
<td>${data[i].description}</td>
<td><input type="submit" value="Edit" onclick="showEditArtist(${data[i].id})"></td>
<td><input type="submit" value="Delete" onclick="deleteArtist(${data[i].id})"></td>
</tr>`;
            }
            str += `</table>`;
            $("#layout_artist").html(str);
        }
    });
}


function deleteArtist(id) {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "DELETE",
        url: "http://localhost:8080/api/artists/" + id,
        success: function (data) {
            getAllArtist()
        }

    });
}

function create() {
     document.getElementById("create_artist").innerHTML ='<img src="" alt="" id="image" style="width: 10px;height: 10px"> <input type="file" id="choseFile">\n<button onclick="uploadImageArtist()">Upload</button><input type="text" id="name" placeholder="name"><input type="text" id="description" placeholder="description"><button onclick="save()">Save</button>'
}

function save() {
    let image = $("#image").attr("src");
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    console.log(name)
    console.log(image)
    console.log(description)
    let data = {
        "image": image,
        "name": name,
        "description": description
    }
    console.log(data)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/api/artists",
        data: JSON.stringify(data),
        success: getAllArtist,
        error: function error() {
            // console.log(error);
        }
    });
}

function showEditArtist(id) {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        url: "http://localhost:8080/api/artists/" + id,
        success: function (data) {
            document.getElementById("img_Artist").innerHTML = '  <img src="${'+ data.image +'} " alt="" id="image" style="width: 160px;height: 160px"> '
            document.getElementById("upload_Artist").innerHTML=   '<input type="file"  id="choseFile">\n' +
                '<button onclick="uploadImageEditArtist()">Upload</button>'

            document.getElementById("showEditArtist").innerHTML =
                '<center>    <input type="text" placeholder="name" id="name" value="' + data.name + '"></center>\n' +
                ' <center>   <input type="text" placeholder="description" id="description" value="' + data.description + '"></center>\n' +
                ' <center>  <button onclick="saveEditArtist(' + data.id + ')">Save</button></center> '
        }

    });
}

function saveEditArtist(id) {
    let image = $("#image").attr("src");
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let data = {
        "image": image,
        "name": name,
        "description": description
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        url: "http://localhost:8080/api/artists/" + id,
        data: JSON.stringify(data),
        success: getAllArtist,
        error: function error() {
            // console.log(error);
        }
    });
}

function uploadImageArtist() {
    console.log("upload")
    let firebaseConfig = {
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


    const ref = firebase.storage().ref();
    const file = document.querySelector("#choseFile").files[0];
    const name = file.name;
    const metadata = {
        contentType: file.type
    }
    const task = ref.child(name).put(file, metadata);

    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            alert("Image upload successful");
            const image = document.querySelector("#choseFile");
            image.src = url;
            $("#image").attr("src", url)
            console.log(url)
        })

}function uploadImageEditArtist() {
    console.log("upload")
    let firebaseConfig = {
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


    const ref = firebase.storage().ref();
    const file = document.querySelector("#choseFile").files[0];
    const name = file.name;
    const metadata = {
        contentType: file.type
    }
    const task = ref.child(name).put(file, metadata);

    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            alert("Image upload successful");
            const image = document.querySelector("#choseFile");
            image.src = url;
            $("#image").attr("src", url)
            console.log(url)
        })

}

