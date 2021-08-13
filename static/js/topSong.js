function loadTopSong(){
    let content=`<table class="table table-hover table-warning" style="border-radius: 5px">
                Newest Song
                <thead>
                <tr>
                    <th scope="col" colspan="2">Bài hát</th>

                    <th scope="col" colspan="3">Mặc định</th>
                </tr>
                </thead>
                <tbody id="list_song">`;
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

        }

    });
    document.getElementById("layout_topSong").innerHTML=content;
}