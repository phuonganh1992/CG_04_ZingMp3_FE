function loadLayoutMenu(){
    let content=`<div class="row fixed-top" id="layout_menu">
        <nav class="navbar navbar-expand-lg navbar-light"
             style="background: url('https://firebasestorage.googleapis.com/v0/b/zingmp3-project.appspot.com/o/background_6.png?alt=media&token=a247cf31-31de-40f8-af17-20dc6e476a95')">
            <div class="container-fluid">
                <a class="navbar-brand" onclick="redirectHome()"><img
                        src="https://icons.iconarchive.com/icons/amineworld/music-of-the-spheres/128/MP3-blue-icon.png"
                        alt="" style="width: 50px;height: 50px"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Bài hát
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Việt Nam</a></li>
                                <li><a class="dropdown-item" href="#">Âu Mỹ</a></li>
                                <li><a class="dropdown-item" href="#">Châu Á</a></li>
                                <li><a class="dropdown-item" href="#">Khác</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Playlist
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Việt Nam</a></li>
                                <li><a class="dropdown-item" href="#">Âu Mỹ</a></li>
                                <li><a class="dropdown-item" href="#">Châu Á</a></li>
                                <li><a class="dropdown-item" href="#">Khác</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                BXH
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Việt Nam</a></li>
                                <li><a class="dropdown-item" href="#">Âu Mỹ</a></li>
                                <li><a class="dropdown-item" href="#">Châu Á</a></li>
                                <li><a class="dropdown-item" href="#">Khác</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Chủ đề
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Việt Nam</a></li>
                                <li><a class="dropdown-item" href="#">Âu Mỹ</a></li>
                                <li><a class="dropdown-item" href="#">Châu Á</a></li>
                                <li><a class="dropdown-item" href="#">Khác</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown5" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Top 100
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Khám phá</a></li>
                                <li><a class="dropdown-item" href="#">Nghệ sĩ</a></li>
                                <li><a class="dropdown-item" href="#">Tin tức âm nhạc</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        <li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown6" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Chủ đề
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Khám phá</a></li>
                                <li><a class="dropdown-item" href="#">Nghệ sĩ</a></li>
                                <li><a class="dropdown-item" href="#">Tin tức âm nhạc</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        <li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown7" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                ...
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Khám phá</a></li>
                                <li><a class="dropdown-item" href="#">Nghệ sĩ</a></li>
                                <li><a class="dropdown-item" href="#">Tin tức âm nhạc</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        <li>

                            <form class="sbox" action="/search" method="get">
                                <input class="stext" type="text" name="q" placeholder="Tìm kiếm bài hát/ ca sĩ...">
                                <a class="sbutton" type="submit">
                                    <i class="fa fa-search"></i>
                                </a>
                            </form>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><img
                                    src="https://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Button-Upload-icon.png"
                                    style="width: 33px; margin-left: 20px;margin-top: -4px;margin-right: 20px"></a>
                        </li>

                        <li class="nav-item" id="btn_login_signup">
                            <button class="btn btn-outline-info btn-info" type="submit" onclick="openLoginForm()">
                                Login/SignUp
                            </button>
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
            <div id="formLoginRegister"></div>
        </div>
    </div>`;
    $("#layout_login").html(content);
}

function loadLayoutCarousel(){
    let content=`<div class="row mt-3" id="layout_carousel">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://avatar-ex-swe.nixcdn.com/slideshow/2021/08/10/0/a/a/c/1628583256909_org.jpg"
                         class="d-block w-100">
                </div>
                <div class="carousel-item">
                    <img src="https://avatar-ex-swe.nixcdn.com/slideshow/2021/08/09/e/d/2/c/1628504246139_org.jpg"
                         class="d-block w-100">
                </div>
                <div class="carousel-item">
                    <img src="https://avatar-ex-swe.nixcdn.com/slideshow/2021/08/09/e/d/2/c/1628504133504_org.jpg"
                         class="d-block w-100">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
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

function loadLayoutFooter(){
    let content=`<div class="row mt-3" id="layout_footer">
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Hỗ trợ</h3>
                            <ul>
                                <li><a href="#">Trợ giúp</a></li>
                                <li><a href="#">Sơ đồ</a></li>
                                <li><a href="#">NCCI</a></li>
                                <li><a href="#">Liên hệ quảng cáo</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Sản phẩm khác</h3>
                            <ul>
                                <li><a href="#">Mobile App</a></li>
                                <li><a href="#">Mobile Web</a></li>
                                <li><a href="#">Smart TV</a></li>
                                <li><a href="#">Desktop</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>Công ty cổ phần MP3</h3>
                            <p>Số 15, Tầng 1 Lô T04, khu đô thị Moncity, ngõ 2 đường Hàm Nghi, quận Nam Từ Liêm,TP. Hà Nội.</p>

                            <p>  Giấy phép số 0000/GP-TTĐT do Sở Thông tin và Truyền thông Hà Nội cấp ngày 11 tháng 8 năm 2021</p>
                        </div>
                        <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                    </div>
                    <p class="copyright">Công ty cổ phần MP3 © 2021</p>
                </div>
            </footer>
        </div>
    </div>`;
    $("#layout_footer").html(content);
}