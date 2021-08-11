function loadData(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/songs",
        success: function (data){
            let content =`<table class="table table-striped">
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Img</th>
            <th scope="col">CreateDate</th>
            <th scope="col">Artist</th>
            <th scope="col">User</th>
            <th scope="col" colspan="2">Action</th>
        </tr>
        </thead>`;
            for (let i =0;i<data.length;i++){
                content += getListSongs(data[i])

            }
            document.getElementById("content").innerHTML=content;
        }

    });
}
function getListSongs(data){
    return `<tr>
                      <th scope="row">${data.id}</th>
                      <td>${data.name}</td>
                      <td>${data.description}</td>
                      <td><img src="${data.img}" width="50px" height="50px"></td>
                      <td>${data.createDate}</td>
                      <td>${data.artist.name}</td>
                      <td>${data.user.name}</td>
                      <td>
                 <button style="margin-right: 20px" onclick="showFormEdit(${data.id})">
                    Edit
                </button>
                <button style=" margin-left: 20px" onclick="deleteForm(${data.id})"  >
                    Delete
                </button>
                </td>
                </tr>
                `
}
function showFormCreate() {
    document.getElementById("form").innerHTML = '<input type="text" placeholder="tên bài hát" id="namesong">\n' +
        '<input type="text" placeholder="Mô tả" id="description">\n' +
        '<input type="text" placeholder="Ảnh nè" id="img">\n' +
        '<input type="text" placeholder="file MP3" id="mp3">\n' +
        '<input type="date" placeholder="Ngày tạo" id="date">\n' +
        '<select id="artist"></select>\n' +
        '<select id="user"></select>\n' +
        '<button onclick="saveSong()">Save</button>\n'
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/artist",
        success: function (data) {
            let str = "";
            for (let i = 0; i < data.length; i++) {
                str += "<option value='" + data[i].id + "'>" + data[i].name + "</option>"

            }
            document.getElementById("artist").innerHTML = str;
        },
    });
    $.ajax({
        url: "http://localhost:8080/user/api/list",
        type: "GET",
        success: function (data) {
            let content = ``;
            for (let i = 0; i < data.length; i++) {
                content += `<option value=${data[i].id} >${data[i].name} </option>`;
            }
            document.getElementById('user').innerHTML = content;
        }
    })
}
function saveSong(){
    let song ={
        name : document.getElementById("namesong").value,
        description : document.getElementById("description").value,
        img : document.getElementById("img").value,
        mp3 : document.getElementById("mp3").value,
        createDate : document.getElementById("date").value,
        artist : {
            id:document.getElementById("artist").value
        },
        user:{
            id:document.getElementById("user").value
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/api/songs",
        data: JSON.stringify(song),
        success: function (){
            loadData();
            document.getElementById("form").innerHTML='<button onclick="showFormCreate()">ADD</button>\n'
        }

    })
    }
function showFormEdit(id){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/songs/"+id,
        success: function (data){
            document.getElementById("form").innerHTML=
                '<input type="text" placeholder="tên bài hát" id="namesong" value="'+data.name+'">\n'+
                '<input type="text" placeholder="Mô tả" id="description" value="'+data.description+'">\n'+
                '<input type="text" placeholder="Ảnh nè" id="img" value="'+data.img+'">\n'+
                '<input type="text" placeholder="file MP3" id="mp3" value="'+data.mp3+'">\n'+
                '<input type="date" placeholder="Ngày tạo" id="date" value="'+data.createDate+'">\n'+
                '<select id="artist"></select value="'+data.artist+'">\n'+
                '<select id="user"></select value="'+data.user+'">\n'+
                '<button onclick="saveEdit('+data.id+')">SAVE</button>\n'
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/api/artist",
                success: function (data1){
                    let str ="";
                    for (let i =0;i<data1.length;i++){

                        str +="<option value='"+data1[i].id+"'>"+data1[i].name+"</option>"

                    }
                    document.getElementById("artist").innerHTML=str;
                },
            })
            $.ajax({
                url: "http://localhost:8080/user/api/list",
                type: "GET",
                success: function (data) {
                    let content = ``;
                    for (let i = 0; i < data.length; i++) {
                        content += `<option value=${data[i].id} >${data[i].name} </option>`;
                    }
                    document.getElementById('user').innerHTML = content;
                }
            })
        }
    });
}
function deleteForm(id){
    if(confirm("Xóa bài hát hả mài?")){
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "DELETE",
            url: "http://localhost:8080/api/songs/"+id,
            success: function (data){
                loadData()
                // document.getElementById("form").innerHTML='<button onclick="showFormCreate()">ADD</button>\n'
            },
        });
    }
}
function saveEdit(id){
    let song ={
        name : document.getElementById("namesong").value,
        description : document.getElementById("description").value,
        img : document.getElementById("img").value,
        mp3 : document.getElementById("mp3").value,
        createDate : document.getElementById("date").value,
        artist : {
            id:document.getElementById("artist").value
        },
        user:{
            id:document.getElementById("user").value
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        url: "http://localhost:8080/api/songs/"+id,
        data: JSON.stringify(song),
        success: function (data){
            loadData()
            document.getElementById("form").innerHTML='<button onclick="showFormCreate()">ADD</button>\n'
        },

    });
}
function showFormSearch(){
    document.getElementById("form").innerHTML = '<input type="text" id="key"><button onclick="search()">Search</button>'

}
function search(){
    let key = document.getElementById("key").value;
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/search?name="+key,
        success: function (data){
            console.log(data)
            let content =`<table class="table table-striped">
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Img</th>
            <th scope="col">CreateDate</th>
            <th scope="col">Artist</th>
            <th scope="col">User</th>
            <th scope="col" colspan="2">Action</th>
        </tr>
        </thead>`;
            for (let i =0;i<data.length;i++){
                content +=getListSongs(data[i])

            }
            document.getElementById("content").innerHTML=content;
        },
        error: loadData



    });
    document.getElementById("div").innerHTML='  <button onclick="showFormCreate()">Add</button>\n' +
        '    <button onclick="showFormSearch()">Search</button>\n'

}
function showSort(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/sort?field=createDate",
        success: function (data){
            console.log(data)
            let content ="";
            for (let i = 0;i<5;i++){
                content +="<br><span>"+data[i].name+":"+data[i].createDate+
                    "</span>"

            }
            document.getElementById("content").innerHTML=content;
        },
        error:function (e){
            console.log(e)
        }

    });

}