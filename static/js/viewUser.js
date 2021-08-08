function viewUserInfor(){
    let userLogin=JSON.parse(localStorage.getItem("userLogin"));
    console.log(userLogin);

    let userProfileLeftContent=`<div id="user-profile-left" class="col-2">
            <img src="${userLogin.image}" alt="" style="width: 100px; height: 100px; border-radius: 50%">
        </div> `;
    $("#user-profile-left").html(userProfileLeftContent);

    let userProfileMainContent=`<div id="user-profile-main" class="col-3">
            <h1><a onclick="viewUserAccount()" style="text-decoration: none">${userLogin.username}</a></h1>
            <p>${userLogin.id}</p>
            <p>${userLogin.name}</p>
            <p>${userLogin.phoneNumber}</p>
            <p>${userLogin.email}</p>
        </div>`;
    $("#user-profile-main").html(userProfileMainContent);
}

function viewUserAccount(){

}