var username = document.getElementById("uname");
var password = document.getElementById("passwd");
var alertLogin = document.getElementById("alertLogin");
var btnLogin = document.querySelector("#btnLogin");
username === null || username === void 0 ? void 0 : username.addEventListener("change", function (e) {
    username = e.target.value;
    console.log(username);
});
password === null || password === void 0 ? void 0 : password.addEventListener("change", function (e) {
    password = e.target.value;
});
btnLogin === null || btnLogin === void 0 ? void 0 : btnLogin.addEventListener("click", function (e) {
    if (username == "arya" && password == "pass") {
        alertLogin.innerHTML = "Login berhasil! Selamat datang ".concat(username, "!");
    }
    else {
        alertLogin.innerHTML = "Login Gagal, Username / Password salah & tidak boleh kosong!";
    }
});
