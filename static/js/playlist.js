// hiển thị danh sách
function showList() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/playlists",
        success: function (data) {
            console.log(data)
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
        description:description,
        img: img,
        user:{
            id: user
        }

    }
    $.ajax({
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        type:"POST",
        url:"http://localhost:8080/playlists",
        data:JSON.stringify(newPlaylist),
        success: function (){
            showList();
            resetForm()
        }
    })
    event.preventDefault();
}
function getUser() {
    $.ajax({
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "http://localhost:8080/user/api/list",
        type: "GET",
        success: function (data) {
            console.log(data)
            let content = ``;
            for (let i = 0; i < data.length; i++) {
                content += `<option value=${data[i].id} >${data[i].name} </option>`;
            }
            document.getElementById('modalCreate__user').innerHTML = content;
            document.getElementById('modalEdit__user').innerHTML = content;
        }


    })
}
function resetForm(){
    document.getElementById('modalCreate__name').value=""
    document.getElementById('modalCreate__description').value=""
    document.getElementById('modalCreate__img').value=""
    document.getElementById('modalCreate__user').value="1"
}
function editPlaylist(id){
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/playlists/" +id,
        success: function (data){
            console.log(data)
            $('#modalEdit__id').val(data.id);
            $('#modalEdit__name').val(data.name);
            $('#modalEdit__description').val(data.description);
            $('#modalEdit__user').val(data.user.id);
            $('#modalEdit__img').val(data.img);
            $('#updateButton').click(function (event){
                let id = $('#modalEdit__id').val();
                let name = $('#modalEdit__name').val();
                let description = $('#modalEdit__description').val();
                let user = $('#modalEdit__user').val();
                let img = $('#modalEdit__img').val();
                let newPlaylist = {
                    id: id,
                    name: name,
                    description:description,
                    img: img,
                    user:{
                        id: user
                    }
                }
                $.ajax({
                    type:"PUT",
                    url:"http://localhost:8080/playlists/" +id,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data:JSON.stringify(newPlaylist),
                    success: showList
                })
                event.preventDefault();
            })

        }
    })
}
function deletePLaylist(id){
    $.ajax({
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        type:"DELETE",
        url:"http://localhost:8080/playlists/" +id,
        error: showList
    })
    event.preventDefault()
}
function loadModalPlaylist(){
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


