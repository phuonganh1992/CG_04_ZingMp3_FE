function getAllArtist() {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        url: "http://localhost:8080/api/artists",
        success: function (data) {
console.log(data)
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
<td>
<button onclick="showArtist(${data[i].id})" style="padding: 0;border: none;background: none">
<img src="${data[i].image}" style="width: 40px;height: 40px">
</button>
</td>
<td>${data[i].name}</td>
<td>${data[i].description}</td>
<td><button onclick="showEditArtist(${data[i].id})" style="padding: 0;border: none;background: none"><img src="data:image/jpeg;base64,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" alt="" style="width: 30px;height: 30px" ></button></td>
<td><button onclick="deleteArtist(${data[i].id})" style="padding: 0;border: none;background: none"><img src="data:image/jpeg;base64,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" alt="" style="width: 30px;height: 30px"></button></td>
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
     document.getElementById("create_artist").innerHTML ='<img src="" alt="" id="image" style="width: 80px;height: 80px"> <input type="file" id="choseFile" >\n<button onclick="uploadImageArtist()">Upload</button><input type="text" id="name" placeholder="name"><input type="text" id="description" placeholder="description"><button onclick="save()">Save</button>'
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
            document.getElementById("img_Artist").innerHTML = '  <img src="'+ data.image +'" alt="" id="image" style="width: 160px;height: 160px"> '
            document.getElementById("upload_Artist").innerHTML=   '<input type="file"  id="choseFile" >\n' +
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

function showArtist(id){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        url: "http://localhost:8080/api/artists/" + id,
        success: function (data) {
            document.getElementById("img_Artist").innerHTML = '  <img src="'+ data.image +'" alt="" id="image" style="width: 160px;height: 160px"> '

            document.getElementById("showEditArtist").innerHTML =
                '<center>   <h1> '+ data.name+'</h1></center>\n' +
                ' <center>  <h1> '+ data.description+'</h1></center>\n'

        }
    });
}