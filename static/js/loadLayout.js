function loadLayoutMenu(){
    let content=`<div class="row mt-3" id="layout_menu">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="https://lndesign.com.vn/wp-content/uploads/2021/01/thiet-ke-logo-am-nhac-1.jpg" alt="" style="width: 100px;height: 100px"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Bài hát
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Việt Nam</a></li>
                                <li><a class="dropdown-item" href="#">Âu Mỹ</a></li>
                                <li><a class="dropdown-item" href="#">Châu Á</a></li>
                                <li><a class="dropdown-item" href="#">Khác</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Playlist
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Việt Nam</a></li>
                                <li><a class="dropdown-item" href="#">Âu Mỹ</a></li>
                                <li><a class="dropdown-item" href="#">Châu Á</a></li>
                                <li><a class="dropdown-item" href="#">Khác</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                BXH
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Việt Nam</a></li>
                                <li><a class="dropdown-item" href="#">Âu Mỹ</a></li>
                                <li><a class="dropdown-item" href="#">Châu Á</a></li>
                                <li><a class="dropdown-item" href="#">Khác</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Chủ đề
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Việt Nam</a></li>
                                <li><a class="dropdown-item" href="#">Âu Mỹ</a></li>
                                <li><a class="dropdown-item" href="#">Châu Á</a></li>
                                <li><a class="dropdown-item" href="#">Khác</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown5" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ...
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Khám phá</a></li>
                                <li><a class="dropdown-item" href="#">Nghệ sĩ</a></li>
                                <li><a class="dropdown-item" href="#">Tin tức âm nhạc</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        <li class="nav-item">
                            <a class="nav-link" href="#" tabindex="-1"
                               aria-disabled="true">Welcome + user</a>
                        </li>
                        <li>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>

                        </li>
                        <li class="nav-item">
                            <button class="btn btn-outline-success" type="submit" onclick="openLoginForm()">Login/SignUp</button>
                        </li>
                        <li class="nav-item dropdown">

                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown6" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="" alt=""
                                     style="width: 35px; height: 35px;border-radius: 50%">
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item"
                                       href="#">Trang cá
                                    nhân</a></li>
                                <li><a class="dropdown-item" href="#">Nhạc của tui</a></li>
                                <li><a class="dropdown-item" href="#">Lịch sử</a></li>
                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>`;
    $("#layout_menu").html(content);
}

function loadLayoutLogin(){
    let content=`<div class="row mt-3" id="layout_login">
        <div class="popup-overlay"></div>
        <div class="popup">
            <div class="popup-close" onclick="closeLoginForm()">x</div>
            <div class="form" id="formLogin">
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
                                <button id="btn_login">Login</button>
                            </div>
                        </td>
                        <td>
                            <div style="text-align: center;margin-top: -50px">
                                Not a member?
                            </div>
                            <div style="text-align: center">
                                <button id="btn_signup">Sign up</button>
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
            </div>
            <div class="form" id="formRegister">
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
                                <button id="btn_register">Register</button>
                            </div>
                        </td>
                        <td>
                            <div style="text-align: center;margin-top: -50px">
                                Is a member?
                            </div>
                            <div style="text-align: center">
                                <button id="btn_login2">Login</button>
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
            </div>
        </div>
    </div>`;
    $("#layout_login").html(content);
}

function loadLayoutCarousel(){
    let content=`<div class="row mt-3" id="layout_carousel">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://avatar-ex-swe.nixcdn.com/slideshow/2021/08/04/2/1/1/7/1628070866868_org.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://avatar-ex-swe.nixcdn.com/slideshow/2021/06/15/3/c/6/0/1623725622440_org.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://avatar-ex-swe.nixcdn.com/slideshow/2021/08/06/7/8/6/4/1628224641697_org.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>`;
    $("#layout_carousel").html(content);
}

function loadLayoutMainContent(){
    let content=`<div class="col-7 text-center" id="layout_mainContent" style="background-color: palegoldenrod">
            Main
        </div>`;
    $("#layout_mainContent").html(content);
}

function loadLayoutMainTaskbar(){
    let content=`<div class="col-3 text-center" id="layout_mainTaskbar" style="background-color: #00dbde">
            Task bar
        </div>`;
    $("#layout_mainTaskbar").html(content);
}

function loadLayoutMainAdv(){
    let content=`<div class="col-2 text-center" id="layout_mainAdv" style="background-color: orange">
            Advertise
        </div>`;
    $("#layout_mainAdv").html(content);
}

function loadLayoutFooter(){
    let content=`<div class="row mt-3" id="layout_footer">
        <div class="col-12 text-center">
            Footer
        </div>
    </div>`;
    $("#layout_footer").html(content);
}