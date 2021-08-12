// hiển thị danh sách
function showList() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/playlists",
        success: function (data) {
            let content = `<table class="table table-striped">
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">User</th>
            <th scope="col" colspan="2">Action</th>
        </tr>
        </thead>`
            for (let i = 0; i < data.length; i++) {
                content += getListPlaylist(data[i])

            }
            document.getElementById('listPlaylist').innerHTML = content;
        }
    })
}

function getListPlaylist(data) {
    return `<tr>
                      <th scope="row">${data.id}</th>
                      <td>${data.name}</td>
                      <td>${data.description}</td>
                      <td>${data.user.username}</td>
                      <td>
                 <button style="margin-right: 20px" onclick="editPlaylist(${data.id})" "type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#modalEdit">
                    Edit
                </button>
                <button style=" margin-left: 20px" onclick="deletePLaylist(${data.id})"  type="button" class="btn btn-danger" >
                    Delete
                </button>
                </td>
                </tr>
                `
}

// ajax tìm kiếm
function search() {
    let searchKey = $("#searchKey").val();
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/playlists/search?name=" + searchKey,  // lấy dữ liệu từ API search
        success: function (data) {
            let content = `<table class="table table-striped">
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">User</th>
            <th scope="col" colspan="2">Action</th>
        </tr>
        </thead>`
            for (let i = 0; i < data.length; i++) {
                content += getListPlaylist(data[i])

            }
            document.getElementById('listPlaylist').innerHTML = content; // viết list từ data search
        },
        error: showList
    })
}

function createPlaylist() {
    let name = $('#modalCreate__name').val();
    let description = $('#modalCreate__description').val();
    let img = $('#modalCreate__img').val();
    let user = $('#modalCreate__user').val();
    let newPlaylist = {
        name: name,
        description: description,
        img: img,
        user: {
            id: user
        }

    }
    $.ajax({
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        type: "POST",
        url: "http://localhost:8080/playlists",
        data: JSON.stringify(newPlaylist),
        success: function () {
            showList();
            resetForm()
        }
    })
    event.preventDefault();
}

function getUserPlaylist() {
    console.log(1)
    $.ajax({
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "http://localhost:8080/user/api/list",
        type: "GET",
        success: function (data) {
            console.log(data);
            console.log(1);
            let content = ``;
            for (let i = 0; i < data.length; i++) {
                content += `<option value=${data[i].id} >${data[i].name} </option>`;
            }
            document.getElementById('modalCreate__user').innerHTML = content;
            document.getElementById('modalEdit__user').innerHTML = content;
        }, error: function (err) {
            console.log(err)
        }


    })
}

function resetForm() {
    document.getElementById('modalCreate__name').value = ""
    document.getElementById('modalCreate__description').value = ""
    document.getElementById('modalCreate__img').value = ""
    document.getElementById('modalCreate__user').value = "1"
}

function editPlaylist(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/playlists/" + id,
        success: function (data) {

            $('#modalEdit__id').val(data.id);
            $('#modalEdit__name').val(data.name);
            $('#modalEdit__description').val(data.description);
            $('#modalEdit__user').val(data.user.id);
            $('#modalEdit__img').val(data.img);
            $('#updateButton').click(function (event) {
                let id = $('#modalEdit__id').val();
                let name = $('#modalEdit__name').val();
                let description = $('#modalEdit__description').val();
                let user = $('#modalEdit__user').val();
                let img = $('#modalEdit__img').val();
                let newPlaylist = {
                    id: id,
                    name: name,
                    description: description,
                    img: img,
                    user: {
                        id: user
                    }
                }
                $.ajax({
                    type: "PUT",
                    url: "http://localhost:8080/playlists/" + id,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(newPlaylist),
                    success: showList
                })
                event.preventDefault();
            })

        }
    })
}

function deletePLaylist(id) {
    $.ajax({
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        type: "DELETE",
        url: "http://localhost:8080/playlists/" + id,
        error: showList
    })
    event.preventDefault()
}

function loadModalPlaylist() {
    let content = `
<!--Modal create-->
<div class="modal fade" id="modalCreate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add New Playlist</h5>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <a><label class="form-label">Name</label>
                        <input type="email" class="form-control" id="modalCreate__name" aria-describedby="emailHelp"></a>

                </div>
                <div class="mb-3">
                    <label class="form-label" >User</label>
                    <label>
                        <select id="modalCreate__user">

                        </select>
                    </label>
                </div>
                <div class="mb-3">
                    <label class="form-label">description</label>
                    <input type="text" class="form-control" id="modalCreate__description">
                </div>
                <div class="mb-3">
                    <label class="form-label">Img</label>
                    <input type="text" class="form-control" id="modalCreate__img">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" onclick="createPlaylist()" id="createButton" class="btn btn-primary" data-bs-dismiss="modal">Create
                </button>
            </div>
        </div>
    </div>
</div>

<!--Modal edit-->
<div class="modal fade" id="modalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit City</h5>
            </div>
            <div class="modal-body">
                <form>
                    <input type="text" id="modalEdit__id" hidden>
                    <div class="mb-3">
                        <a><label class="form-label">Name</label>
                            <input type="email" class="form-control" id="modalEdit__name" aria-describedby="emailHelp"></a>

                    </div>
                    <div class="mb-3">
                        <label class="form-label" >User</label>
                        <label>
                            <select id="modalEdit__user">

                            </select>
                        </label>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">description</label>
                        <input type="text" class="form-control" id="modalEdit__description">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Img</label>
                        <input type="text" class="form-control" id="modalEdit__img">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" id="updateButton" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
            </div>
        </div>
    </div>
</div>`;
    $("#modalPlaylist").html(content);
}

function loadCardPlaylist() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/playlists",
        success: function (data) {
            console.log(data)
            let content = ``
            for (let i = 0; i < data.length; i++) {
                content += `<div class="col-3 mt-1">                 
                    <div class="card-design">
                        <a  class="btn" onclick="getPlaylistById(${data[i].id})">
                            <img class="card_playlist_img" src="${data[i].img}" alt="Card image cap">
                            <div class="card_playlist_content">${data[i].name}</div>
                         </a>
                    </div>
                    </div>`;
            }
            document.getElementById('layout_playlist').innerHTML = content;
        }
    })
}

function getPlaylistById(playlistId){
    let content="";
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/playlists/"+playlistId,
        success:function (playlist){
            content +=`<div class="row fixed-top" id="layout_menu"></div>
    <div class="row mt-3"  id="layout_login"></div>
    <div class="row mt-3" id="layout_main" class="row">
        <div id="layout_mainPlaylist" class="col-3">
            <div class="row">
                <div class="card" style="width: 18rem;">
                    <img class="dia-cd"
                         src="${playlist.img}"
                         class="card-img-top" width="300px">
                    <div class="card-body">
                        <h5 class="card-title">${playlist.name}</h5>
                        <p class="card-text">${playlist.description}</p>
                        <i class="fa fa-play" id="btn_play_1" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
        <div id="layout_mainTaskbarPlaylist" class="col-9">
            <table class="table table-hover table-warning" style="border-radius: 5px">
                <thead>
                <tr>
                    <th scope="col" colspan="2">Bài hát</th>

                    <th scope="col" colspan="3">Mặc định</th>
                </tr>
                </thead>
                <tbody id="list_song">`;
            let songs=playlist.songs;
            for (let i = 0; i < songs.length; i++) {
                content += `<tr>
                    <td><img src="${songs[i].img}" width="20px"></td>
                    <td>
                    <div><a onclick="playMusic('${songs[i].id}')" style="text-decoration: none;font-size: 15px">${songs[i].name}</a></div>
                    <div><a onclick="" style="text-decoration: none;font-size: 10px" id="artist_name">${songs[i].artist.name}</a></div>
                    </td>
                    <td>
                    <img src="https://firebasestorage.googleapis.com/v0/b/zingmp3-project.appspot.com/o/icon_03_comment.png?alt=media&token=bba6c830-7a8a-406d-a134-47b963510875" width="20px">
                    </td>
                    <td>
                    <img src="https://firebasestorage.googleapis.com/v0/b/zingmp3-project.appspot.com/o/icon_04_unlike.png?alt=media&token=69f682e4-f421-4e51-af78-f74cbe0a3a18" width="20px">
                    </td>
                    <td>
                    <div class="dropdown">
                    <button class="btn dropdown-toggle btn-sm btn-success" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        ...
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </div
                    </td>
                </tr>`;
            }
            content+=`</tbody>
            </table>
        </div>
    </div>
    <div id="layout_footer"></div>
    <div class=" fixed-bottom" id="music_player">
        <div class="song_info">
            <div class="row">
                <div class="col-2">
                    <img id="song_img"
                         src=""
                         width="60px">
                </div>
                <div class="col-6" id="song_name"></div>
                <div class="col-2" id="img_like"><img
                        src="https://firebasestorage.googleapis.com/v0/b/zingmp3-project.appspot.com/o/icon_04_unlike.png?alt=media&token=69f682e4-f421-4e51-af78-f74cbe0a3a18"
                        width="20px"></div>
                <div class="col-2" id="img_comment"><img
                        src="https://firebasestorage.googleapis.com/v0/b/zingmp3-project.appspot.com/o/icon_03_comment.png?alt=media&token=bba6c830-7a8a-406d-a134-47b963510875"
                        width="20px"></div>
            </div>
            <span></span>
        </div>
        <div class="controllers">
            <i class="fa fa-music" aria-hidden="true"></i>
            <i class="fa fa-fast-backward" aria-hidden="true"></i>
            <i class="fa fa-play" id="btn_play_2" aria-hidden="true"></i>
            <i class="fa fa-fast-forward" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
        </div>
        <div class="time_slider">
            <span class="runing_time">0:00</span>
            <input id="time" type="range" value="0">
            <span class="song_long">0:00</span>
        </div>
        <div class="volume_slider">
            <img id="img_volume"
                 src="https://firebasestorage.googleapis.com/v0/b/zingmp3-project.appspot.com/o/icon_07_volume.png?alt=media&token=bedfe6b8-6907-4024-ac1e-7a5bea0fb9c8"
                 width="20px">
            <input id="vol" type="range" min="0" max="100" step="1" value="50">
        </div>
    </div>`;
            document.getElementById("layout_whole").innerHTML = content;
            loadLayoutMenu();
            loadLayoutLogin();
            loadLayoutFooter();
            hasUserLogin();
        }
    })
}





