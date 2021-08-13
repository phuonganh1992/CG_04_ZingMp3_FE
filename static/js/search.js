function redirect_Artist(){
    console.log(1)
    let name=document.getElementById("searchArtist").value;

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/api/artists/search?name=" + name,
        success: function (data) {
            console.log(data)

            document.getElementById("viewSearchArtist").innerHTML = ' <center> <img src="'+ data[0].image +'" alt="" id="image" style="width: 160px;height: 160px"></center> '

            document.getElementById("viewSearchArtist1").innerHTML =
                '<center>   <h1> '+ data[0].name+'</h1></center>\n' +
                ' <center>  <h1> '+ data[0].description+'</h1></center>\n'




            $.ajax({
                type: "GET",
                url: "http://localhost:8080/api/song/artist/"+data[0].id,
                success: function (songs){
                    console.log(songs)
                    let content =`<table class="table table-striped">
        <thead>
        <tr>
          
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">CreateDate</th>
            <th scope="col">Mp3</th>
          
         
        </tr>
        </thead>`;
                    for (let i =0;i<songs.length;i++){
                        content += `<tr>
<td>
<img src="${songs[i].img}" alt=""  style="width: 160px;height: 160px">
</td>
<td>${songs[i].name}</td>
<td>${songs[i].description}</td>
<td>${songs[i].createDate}</td>
<td><audio controls><source src="${songs[i].mp3}"></audio> </td>

</tr>`;
console.log(songs[i].img)
                    }
                    document.getElementById("table-search-song").innerHTML=content;
                },




            });






        }

    });

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/search?name="+name,
        success: function (song){
            let table =`<table class="table table-striped">
        <thead>
        <tr>
          
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">CreateDate</th>
            <th scope="col">Mp3</th>
          
         
        </tr>
        </thead>`;
            for (let i =0;i<song.length;i++){
                table += `<tr>
<td>
<img src="${song[i].img}" alt="" style="width: 40px;height: 40px">

</td>
<td>${song[i].name}</td>
<td>${song[i].description}</td>
<td>${song[i].createDate}</td>
<td><audio controls><source src="${song[i].mp3}"></audio> </td>
</tr>`;

            }
            document.getElementById("table-search-song").innerHTML=table;
        },




    });

}
