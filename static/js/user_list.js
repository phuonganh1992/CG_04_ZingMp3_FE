function getAllUser() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/user/api/list",
        // headers: {"Authorization":'Bearer '+localStorage.getItem("token")},
        success: function (data) {
            let content = `<h2>User Management</h2>
    <table class="table table-striped">
    <tr>
        <th>User Id</th>
        <th>Image</th>
        <th>Username</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Role</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>`;
            for (let i = 0; i < data.length; i++) {
                content += `<tr>
            <td>${data[i].id}</td>
            <td> <img src="${data[i].image}" style="height: 40px;width: 40px">    </td>
            <td>${data[i].username}</td>
            <td>${data[i].name}</td>
            <td>${data[i].email}</td>
            <td>${data[i].phoneNumber}</td>
        
            <td>${data[i].username}</td>
            <td> <input type="submit" value="Edit" onclick="edit(${data[i].id})"/> </td>
            <td><input type="submit" value="Delete" onclick="deleteUser(${data[i].id})" id="delete${data[i].id}"/></td>
    </tr>`;

            }
            content+=`</table>`;
            $("#layout_main").html(content);
        }
    })
}