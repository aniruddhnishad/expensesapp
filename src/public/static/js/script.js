// $( document ).ready(function() {
//     console.log( "ready!" );
// });

$(document).ready(function () {

    const loginBtn = document.getElementById("loginBtn");
    const loginMessage = document.getElementById("loginMessage");
    const loginLoading = document.getElementById("loginLoading");

    if (loginBtn) {
        loginBtn.addEventListener('click', async function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            loginBtn.setAttribute('disabled', true);
            const email = document.getElementById("email");
            const password = document.getElementById("password");
            const formData = {
                email: email.value,
                password: password.value,
            }
            try {
                loginLoading.classList.remove("d-none");
                const axiosResData = await axios({
                    method: 'POST',
                    url: `/login`,
                    data: formData,
                    headers: { "Content-Type": "application/json; charset=utf-8" },
                    onDownloadProgress: function (axiosProgressEvent) {
                        if (axiosProgressEvent.download) {
                            loginLoading.classList.add("d-none");
                        }
                    }
                });
                const resdata = axiosResData?.data;
                if (resdata.error) {
                    console.log(resdata)
                    loginBtn.removeAttribute('disabled');
                    loginMessage.classList.remove("d-none");
                    loginMessage.classList.add("alert-warning");
                    loginMessage.innerHTML = `<h4>${resdata.data}</h4>`;
                    setTimeout(() => {
                        loginMessage.classList.add("d-none");
                        loginMessage.classList.remove("alert-warning");
                    }, 10000);
                    return;
                }
                window.location.href = `/dashboard`;
            } catch (error) {
                console.log(error?.message);
                loginBtn.removeAttribute('disabled');
                loginLoading.classList.add("d-none");
                loginMessage.classList.remove("d-none");
                loginMessage.classList.add("alert-warning");
                loginMessage.innerHTML = `<h4>${error?.message}</h4>`;
                setTimeout(() => {
                    loginMessage.classList.add("d-none");
                    loginMessage.classList.remove("alert-warning");
                }, 10000);
            }
        });
    }
});

$(document).ready(function () {

    const logOutAllBtn = document.getElementById("logOutAllBtn");
    const loginMessage = document.getElementById("loginMessage");
    const logOutAllLoading = document.getElementById("logOutAllLoading");

    if (logOutAllBtn) {
        logOutAllBtn.addEventListener('click', async function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            logOutAllBtn.setAttribute('disabled', true);
            const email = document.getElementById("email");
            const password = document.getElementById("password");
            const formData = {
                email: email.value,
                password: password.value,
            }
            try {
                logOutAllLoading.classList.remove("d-none");
                const axiosResData = await axios({
                    method: 'POST',
                    url: `/logoutalldevices`,
                    data: formData,
                    headers: { "Content-Type": "application/json; charset=utf-8" },
                    onDownloadProgress: function (axiosProgressEvent) {
                        if (axiosProgressEvent.download) {
                            logOutAllLoading.classList.add("d-none");
                        }
                    }
                });
                const resdata = axiosResData?.data;
                if (resdata.error) {
                    console.log(resdata)
                    logOutAllBtn.removeAttribute('disabled');
                    loginMessage.classList.remove("d-none");
                    loginMessage.classList.add("alert-warning");
                    loginMessage.innerHTML = `<h4>${resdata.data}</h4>`;
                    setTimeout(() => {
                        loginMessage.classList.add("d-none");
                        loginMessage.classList.remove("alert-warning");
                    }, 10000);
                    return;
                }
                loginMessage.innerHTML = resdata.data;
            } catch (error) {
                console.log(error?.message);
                logOutAllBtn.removeAttribute('disabled');
                logOutAllLoading.classList.add("d-none");
                loginMessage.classList.remove("d-none");
                loginMessage.classList.add("alert-warning");
                loginMessage.innerHTML = `<h4>${error?.message}</h4>`;
                setTimeout(() => {
                    loginMessage.classList.add("d-none");
                    loginMessage.classList.remove("alert-warning");
                }, 10000);
            }
        });
    }
});


function test() {

    const logOutAllBtn = document.getElementById("test");

    if (logOutAllBtn) {
        logOutAllBtn.addEventListener('click', async function (e) {

            e.preventDefault();
            e.stopImmediatePropagation();

            try {

                console.log('d')

            } catch (error) {
                console.log(error?.message)
            }
        });
    }
}

