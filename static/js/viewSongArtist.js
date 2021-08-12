function showSongArtist(id){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        url: "http://localhost:8080/api/artists/search" ,
        success: function (data) {
            document.getElementById("img_Artist").innerHTML = '  <img src="'+ data.image +'" alt="" id="image" style="width: 160px;height: 160px"> '

            document.getElementById("showEditArtist").innerHTML =
                '<center>   <h1> '+ data.name+'</h1></center>\n' +
                ' <center>  <h1> '+ data.description+'</h1></center>\n'

        }
    });
}