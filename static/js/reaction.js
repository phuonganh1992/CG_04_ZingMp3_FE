function showReactionList() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/reactions",
        success: function (data) {
            console.log(data)
            let content = `<table class="table table-striped">
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Like</th>
            <th scope="col">View</th>
            <th scope="col">Song</th>
            <th scope="col" colspan="2">Action</th>
        </tr>
        </thead>`
            for (let i = 0; i < data.length; i++) {
                content += getReactionList(data[i])
            }
            document.getElementById("reaction_list").innerHTML =content;
        }
    })
}

function getReactionList(data) {
    return `<tr>
              <td>${data.id}</td>
              <td>${data.likes}</td>
              <td>${data.views}</td>
              <td>${data.song.name}</td>
              <td>
                 <button style="margin-right: 20px" onclick="" "type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#modalEdit">
                    Edit
                </button>
                <button style=" margin-left: 20px" onclick=""  type="button" class="btn btn-danger" >
                    Delete
                </button>
                </td>
           </tr>`
}
function loadModalReaction(){
    let content = `
<!--Modal create-->
<div class="modal fade" id="modalCreateReact" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add New React</h5>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <a><label class="form-label">Name</label>
                        <input type="email" class="form-control" id="modalCreateReact__name" aria-describedby="emailHelp"></a>

                </div>
                <div class="mb-3">
                    <label class="form-label" >View</label>
                    <label>
                        <select id="modalCreateReact__view">

                        </select>
                    </label>
                </div>
                <div class="mb-3">
                    <label class="form-label">description</label>
                    <input type="text" class="form-control" id="modalCreateReact__description">
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
<div class="modal fade" id="modalEdit_react" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
    $("#modalReaction").html(content);
}
