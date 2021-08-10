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
            let str = `<button onclick="create()"  >Add</button>

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
<td>${data[i].image}</td>
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


function deleteArtist(id){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type:"DELETE",
        url:"http://localhost:8080/api/artists/"+id,
        success:function (data){
            getAllArtist()
        }

    });
}

function create(){
    document.getElementById("create_artist").innerHTML=' <input type="text" id="image" placeholder="image"><input type="text" id="name" placeholder="name"><input type="text" id="description" placeholder="description"><button onclick="save()">Save</button>'
}
function save(){
    let image=document.getElementById("image").value;
    let name=document.getElementById("name").value;
    let description=document.getElementById("description").value;
    let data={
        "image":image,
        "name":name,
        "description":description
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/api/artists",
        data: JSON.stringify(data),
        success: getAllArtist,
        error: function error(){
            // console.log(error);
        }
    });
}
function showEditArtist(id){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        url: "http://localhost:8080/api/artists/"+id,
        success: function (data){
            document.getElementById("img_Artist").innerHTML = '<input type="text" placeholder="image" id="image" value="' + data.image + '">\n'
             document.getElementById("showEditArtist").innerHTML=   '<center>    <input type="text" placeholder="name" id="name" value="' + data.name + '"></center>\n' +
                ' <center>   <input type="text" placeholder="description" id="description" value="' + data.description + '"></center>\n' +
                ' <center>  <button onclick="saveEditArtist(' + data.id + ')">Save</button></center> '
        }

    });
}
function saveEditArtist(id){
    let image=document.getElementById("image").value;
    let name=document.getElementById("name").value;
    let description=document.getElementById("description").value;
    let data={
        "image":image,
        "name":name,
        "description":description
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        url: "http://localhost:8080/api/artists/"+id,
        data: JSON.stringify(data),
        success: getAllArtist,
        error: function error(){
            // console.log(error);
        }
    });
}
// function searchNameArtist(name){
//     $.ajax({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         type: "GET",
//         url: "http://localhost:8080/api/artists/search/"+id,
//         success: function (data){
//             document.getElementById("img_Artist").innerHTML = '<input type="text" placeholder="image" id="image" value="' + data.image + '">\n'
//             document.getElementById("showEditArtist").innerHTML=   '<center>    <input type="text" placeholder="name" id="name" value="' + data.name + '"></center>\n' +
//                 ' <center>   <input type="text" placeholder="description" id="description" value="' + data.description + '"></center>\n' +
//                 ' <center>  <button onclick="saveEditArtist(' + data.id + ')">Save</button></center> '
//         }
//
//     });
// }
