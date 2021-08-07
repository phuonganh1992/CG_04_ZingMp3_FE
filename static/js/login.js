function openLoginForm() {
    document.body.classList.add("showLoginForm");
    closeRegisterForm();
}

function closeLoginForm() {
    document.body.classList.remove("showLoginForm");
}

$("#showPass1").click(function () {
    let currentType = $("#password").attr("type");
    $("#password").attr("type",
        currentType === "password" ? "text" : "password");
})
$("#showPass2").click(function () {
    let currentType = $("#password_regis").attr("type");
    $("#password_regis").attr("type",
        currentType === "password" ? "text" : "password");
})
$("#showPass3").click(function () {
    let currentType = $("#re-password_regis").attr("type");
    $("#re-password_regis").attr("type",
        currentType === "password" ? "text" : "password");
})

function showRegisterForm() {
    let content=`<div class="form" id="formRegister">
                <table style="width: 700px;padding: unset" border="1px solid grey">
                    <tr>
                        <div class="avatar">
                            <img src="https://bit.ly/31pHqJb">
                        </div>
                        <div class="header">
                            Member register
                        </div>

                    </tr>
                    <tr>
                        <td width="60%">
                            <div class="element">
                                <input type="text" id="username_regis" placeholder="username" required>
                            </div>
                            <div class="element">
                                <input type="password" id="password_regis" placeholder="password" required>
                                <button id="showPass2"
                                        style="width: 30px;height:10px;position: relative;background:none;top: -41px; left: 332px;">
                                    <img src="https://icons.iconarchive.com/icons/iconsmind/outline/128/Eye-2-icon.png"
                                         style="width: 20px"></button>
                                <input type="password" id="re-password_regis" placeholder="password" required>
                                <button id="showPass3"
                                        style="width: 30px;height:10px;position: relative;background:none;top: -41px; left: 332px;">
                                    <img src="https://icons.iconarchive.com/icons/iconsmind/outline/128/Eye-2-icon.png"
                                         style="width: 20px"></button>
                            </div>
                            <div class="element">

                            </div>
                            <div class="element">
                                <button id="btn_register" onclick="register()">Register</button>
                            </div>
                        </td>
                        <td>
                            <div style="text-align: center;margin-top: -50px">
                                Is a member?
                            </div>
                            <div style="text-align: center">
                                <button id="btn_login2" onclick="closeRegisterForm()">Login</button>
                            </div>
                            <div class="auth" style="text-align: center">
                                Or login with
                            </div>
                            <div class="links">
                                <a href="" class="social">
                                    <img src="https://icons.iconarchive.com/icons/yootheme/social-bookmark/256/social-facebook-button-blue-icon.png"
                                         style="width: 20px; height: 20px">
                                    Login with facebook
                                </a>

                            </div>
                            <div class="links">
                                <a href="" class="social">
                                    <img src="https://icons.iconarchive.com/icons/graphics-vibe/classic-3d-social/256/google-icon.png"
                                         style="width: 20px; height: 20px">
                                    Login with gmail
                                </a>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>`;
    $("#formLoginRegister").html(content);
}

function closeRegisterForm() {
    let content=`<div class="form" id="formLogin">
                <table style="width: 700px;padding: unset" border="1px solid grey">
                    <tr>
                        <div class="avatar">
                            <img src="https://bit.ly/31pHqJb">
                        </div>
                        <div class="header">
                            Member login
                        </div>

                    </tr>
                    <tr>
                        <td width="60%">
                            <div class="element">
                                <input type="text" id="username" placeholder="username" required>
                            </div>
                            <div class="element">
                                <input type="password" id="password" placeholder="password" required>
                                <button id="showPass1"
                                        style="width: 30px;height:10px;position: relative;background:none;top: -41px; left: 332px;">
                                    <img src="https://icons.iconarchive.com/icons/iconsmind/outline/128/Eye-2-icon.png"
                                         style="width: 20px"></button>
                            </div>
                            <div class="element">
                                <button id="btn_login" onclick="login()">Login</button>
                            </div>
                        </td>
                        <td>
                            <div style="text-align: center;margin-top: -50px">
                                Not a member?
                            </div>
                            <div style="text-align: center">
                                <button id="btn_signup" onclick="showRegisterForm()">Sign up</button>
                            </div>
                            <div class="auth" style="text-align: center">
                                Or login with
                            </div>
                            <div class="links">
                                <a href="" class="social">
                                    <img src="https://icons.iconarchive.com/icons/yootheme/social-bookmark/256/social-facebook-button-blue-icon.png"
                                         style="width: 20px; height: 20px">
                                    Login with facebook
                                </a>
                            </div>
                            <div class="links">
                                <a href="" class="social">
                                    <img src="https://icons.iconarchive.com/icons/graphics-vibe/classic-3d-social/256/google-icon.png"
                                         style="width: 20px; height: 20px">
                                    Login with gmail
                                </a>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>`;
    $("#formLoginRegister").html(content);
}

function login() {
    closeLoginForm();
    let username = $("#username").val();
    let password = $("#password").val();
    let user = {
        "username": username,
        "password": password
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/user/api/login",
        data: JSON.stringify(user),
        success: function (data) {
            localStorage.setItem('token', data.token);
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/user/api/search?username=" + username,
                success: function (userlogin) {
                    localStorage.setItem('userLogin', JSON.stringify(userlogin));
                    changeAvatar();
                }
            })
        }
    })
}

function register() {
    let username = $("#username_regis").val();
    let password = $("#password_regis").val();
    let confirmedPassword = $("#re-password_regis").val();
    if (password != confirmedPassword) alert("Confirmed password is different password")
    else {
        let user = {
            username: username,
            password: password
        };
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:8080/user/api/register",
            data: JSON.stringify(user),
            success: function () {
                alert("new user is created")
            },
            error: function (e) {
                alert("server error in create: " + e);
            }
        })
    }
}

function changeAvatar() {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    let roles=userLogin.roles;
    let hasAdminRole=false;
    let content="";
    for (let i = 0; i < roles.length; i++) {
        if(roles[i].name=="ROLE_ADMIN") {
            hasAdminRole=true;
            break;
        }
    }
    if(hasAdminRole){
        content = `<li class="nav-item dropdown" id="avatar">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown6" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="${userLogin.image}" alt="" style="width: 35px; height: 35px;border-radius: 50%">
                                ${userLogin.username} 
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" onclick="viewUser()">Trang cá nhân</a></li>
                                <li><a class="dropdown-item" href="#">Nhạc của tui</a></li>
                                <li><a class="dropdown-item" href="#">Quản lý user</a></li>
                                <li><a class="dropdown-item" href="#">Quản lý ca sĩ</a></li>
                                <li><a class="dropdown-item" href="#">Quản lý bài hát</a></li>
                                <li><a class="dropdown-item" href="#">Lịch sử</a></li>
                                <li><a class="dropdown-item" onclick="logout()">Sign out</a></li>
                            </ul>
                        </li>`
    } else {
        content=`<li class="nav-item dropdown" id="avatar">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown6" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="${userLogin.image}" alt="" style="width: 35px; height: 35px;border-radius: 50%">
                                ${userLogin.username} 
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" onclick="viewUser()">Trang cá nhân</a></li>
                                <li><a class="dropdown-item" href="#">Nhạc của tui</a></li>
                                <li><a class="dropdown-item" href="#">Lịch sử</a></li>
                                <li><a class="dropdown-item" onclick="logout()">Sign out</a></li>
                            </ul>
                        </li>`;
    }
    $("#btn_login_signup").html(content);
}

function getUser(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/user/api/" + id,
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")},
        success: function (data) {
            console.log(data);
        }
    })
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogin");
    let content = `<li class="nav-item" id="btn_login_signup">
                     <button class="btn btn-outline-success" type="submit" onclick="openLoginForm()">Login/SignUp</button>
                   </li>`;
    $("#btn_login_signup").html(content);
}

function viewUser(){
    window.location.href="user/view.html";
}