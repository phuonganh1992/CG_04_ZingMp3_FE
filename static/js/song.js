function loadData(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/songs",
        success: function (data){
            let content ="        <tr>\n" +
                "            <th>Id</th>\n" +
                "            <th>Name Song</th>\n" +
                "            <th>Desc</th>\n" +
                "            <th>Img</th>\n" +
                "            <th>Date </th>\n" +
                "            <th>Singer </th>\n" +
                "        </tr>";
            for (let i =0;i<data.length;i++){
                content +="<br><span>"+data[i].id+":"+data[i].name+":"+data[i].description+":"+data[i].img+":"+data[i].createDate+
                    ":"+data[i].artist.name+":"
                    + "<button onclick='showFormEdit("+data[i].id+")'>Edit</button>"+"---" +
                    "<button onclick='deleteForm("+data[i].id+")'>Delete</button>"+"" +
                    "</span>"

            }
            document.getElementById("content").innerHTML=content;
        }

    });
}
function showFormCreate(){
    document.getElementById("form").innerHTML='<input type="text" placeholder="tên bài hát" id="namesong">\n'+
        '<input type="text" placeholder="Mô tả" id="description">\n'+
        '<input type="text" placeholder="Ảnh nè" id="img">\n'+
        '<input type="text" placeholder="file MP3" id="mp3">\n'+
        '<input type="date" placeholder="Ngày tạo" id="date">\n'+
        '<select id="artist"></select>\n'+
        '<button onclick="save()">SAVE</button>\n'
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/artist",
        success: function (data){
            let str ="";
            for (let i =0;i<data.length;i++){
                str +="<option value='"+data[i].id+"'>"+data[i].name+"</option>"

            }
            document.getElementById("artist").innerHTML=str;
        },
    });

}
function save(){
    let song ={
        name : document.getElementById("namesong").value,
        description : document.getElementById("description").value,
        img : document.getElementById("img").value,
        mp3 : document.getElementById("mp3").value,
        createDate : document.getElementById("date").value,
        artist : {
            id:document.getElementById("artist").value
        },

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

    });
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
            });
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
            let content ="        <tr>\n" +
                "            <th>Id</th>\n" +
                "            <th>Name Song</th>\n" +
                "            <th>Desc</th>\n" +
                "            <th>Img</th>\n" +
                "            <th>Date </th>\n" +
                "            <th>Singer </th>\n" +
                "        </tr>";
            for (let i =0;i<data.length;i++){
                content +="<br><span>"+data[i].id+":"+data[i].name+":"+data[i].description+":"+data[i].img+":"+data[i].createDate+
                    ":"+data[i].artist.name+":"
                    + "<button onclick='showFormEdit("+data[i].id+")'>Edit</button>"+"---" +
                    "<button onclick='deleteForm("+data[i].id+")'>Delete</button>"+"" +
                    "</span>"

            }
            document.getElementById("content").innerHTML=content;
        }



    });
    document.getElementById("div").innerHTML='  <button onclick="showFormCreate()">Add</button>\n' +
        '    <button onclick="showFormSearch()">Search</button>\n'

}