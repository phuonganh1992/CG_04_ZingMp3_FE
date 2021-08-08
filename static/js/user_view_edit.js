function viewUserInfor() {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    let userProfileLeftContent = `<div id="user-profile-left" class="col-2">
            <img src="${userLogin.image}" alt="" style="width: 100px; height: 100px; border-radius: 50%">
        </div> `;
    $("#user-profile-left").html(userProfileLeftContent);

    let userProfileMainContent = `<div id="user-profile-main" class="col-3">
            <h1><a onclick="viewUserAccount()" style="text-decoration: none">${userLogin.username}</a></h1>
            <p>${userLogin.id}</p>
            <p>${userLogin.name}</p>
            <p>${userLogin.phoneNumber}</p>
            <p>${userLogin.email}</p>
        </div>`;
    $("#user-profile-main").html(userProfileMainContent);
}

function viewUserAccount() {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    let editContent = `<div id="editUser">
    <div class="row">
        <div class="col-4">
            <div id="userAccount_img"><img src="${userLogin.image}" style="width: 100px;height: 100px"></div>
            <div id="userAccount_username"><b>${userLogin.username}</b></div>
            <ul>
                <li>Quản lý tài khoản</li>
                <li>Bạn bè</li>
                <li>Playlist</li>
                <li>Video</li>
                <li>Quản lý thiết bị</li>
                <li>Đăng xuất</li>
            </ul>
        </div>
        <div class="col-8">
            <h1>Quản lý tài khoản</h1>
            <table>
                <tr>
                    <td>Giới thiệu</td>
                    <td><img src="https://firebasestorage.googleapis.com/v0/b/zingmp3-project.appspot.com/o/icon_02_edit.png?alt=media&token=4dee67f0-ed31-420f-bf88-6cfb1f5fcb9d" style="width: 20px;height: 20px" onclick="editUser()"></td>
                </tr>
                <tr>
                    <td>Ảnh đại diện</td>
                    <td>
                    <img id="user_edit_img" src="${userLogin.image}" style="width: 40px;height: 40px">
                    <input type="file" id="choseFile">
                    <button onclick="uploadImage()">Upload</button>
                    </td>
                </tr>
                <tr>
                    <td>Tên đăng nhập</td>
                    <td><input type="text" id="user_edit_username" value="${userLogin.username}"></td>
                </tr>
                <tr>
                    <td>Tên hiển thị</td>
                    <td><input type="text" id="user_edit_name" value="${userLogin.name}"></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="email" id="user_edit_email" value="${userLogin.email}"></td>
                </tr>
                <tr>
                    <td>Phone number</td>
                    <td><input type="number" id="user_edit_phone" value="${userLogin.phoneNumber}"></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="text" id="user_edit_password"></td>
                </tr>
            </table>
            <div id="message" style="color: red"></div>
        </div>

    </div>
</div>`;

    $("#userInfo").html(editContent);
}

function editUser() {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    let userId = userLogin.id;
    let image = $("#user_edit_img").attr("src");
    let username = $("#user_edit_username").val();
    let name = $("#user_edit_name").val();
    let email = $("#user_edit_email").val();
    let phoneNumber = $("#user_edit_phone").val();
    let password = $("#user_edit_password").val();
    let userEdit = {
        username: username,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        image: image
    };

    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/user/api/" + userId,
        data: JSON.stringify(userEdit),
        success: function () {
            $("#message").text("User is edited successfully");
            $("#user_edit_password").attr("type", "password");
        },
        error: function (e) {
            alert("Server error: " + e);
        }
    })
}

function uploadImage() {
    let firebaseConfig = {
        apiKey: "AIzaSyAFa5LCC1hPnuBc5Lpv7YFrxSD59l-jc0E",
        authDomain: "zingmp3-project.firebaseapp.com",
        projectId: "zingmp3-project",
        storageBucket: "zingmp3-project.appspot.com",
        messagingSenderId: "586241566045",
        appId: "1:586241566045:web:ab0014cb015f230821b4b4",
        measurementId: "G-2LCN4JYDE5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();


    const ref = firebase.storage().ref();
    const file = document.querySelector("#choseFile").files[0];
    const name = file.name;
    const metadata = {
        contentType: file.type
    }
    const task = ref.child(name).put(file, metadata);

    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            alert("Image upload successful");
            const image = document.querySelector("#choseFile");
            image.src = url;
            $("#user_edit_img").attr("src", url)
        })

}