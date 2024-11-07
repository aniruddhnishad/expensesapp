
$(document).ready(function () {
    //console.log( "ready!" );
});

$(document).ready(function () {

    const logoutBtn = document.getElementById("logoutBtn");
    const logoutMessage = document.getElementById("logoutMessage");
    const logoutLoading = document.getElementById("logoutLoading");

    if (logoutBtn) {

        logoutBtn.addEventListener('click', async function (e) {

            e.preventDefault();

            e.stopImmediatePropagation();

            logoutBtn.setAttribute('disabled', true);

            try {
                logoutLoading.classList.remove("d-none");
                const axiosResData = await axios({
                    method: 'POST',
                    url: `/logout`,
                    data: {},
                    headers: { "Content-Type": "application/json; charset=utf-8" },
                    onDownloadProgress: function (axiosProgressEvent) {
                        if (axiosProgressEvent.download) {
                            logoutLoading.classList.add("d-none");
                        }
                    }
                });
                const resdata = axiosResData?.data;
                if (resdata.error) {
                    console.log(resdata)
                    logoutBtn.removeAttribute('disabled');
                    logoutMessage.classList.remove("d-none");
                    logoutMessage.classList.add("alert-warning");
                    logoutMessage.innerHTML = resdata.data;
                    setTimeout(() => {
                        logoutMessage.classList.add("d-none");
                        logoutMessage.classList.remove("alert-warning");
                    }, 10000);
                    return;
                }

                window.location.href = `/`;

            } catch (error) {
                console.log(error?.message);
                logoutBtn.removeAttribute('disabled');
                logoutLoading.classList.add("d-none");
                logoutMessage.classList.remove("d-none");
                logoutMessage.classList.add("alert-warning");
                logoutMessage.innerHTML = error?.message;
                setTimeout(() => {
                    logoutMessage.classList.add("d-none");
                    logoutMessage.classList.remove("alert-warning");
                }, 10000);
            }

        });

    }
});

$(document).ready(function () {

    const switchRole = document.getElementById("switchRole");

    const switchRoleBtn = document.getElementById("switchRoleBtn");

    const switchRoleMessage = document.getElementById("switchRoleMessage");

    const switchRoleLoading = document.getElementById("switchRoleLoading");

    if (switchRoleBtn) {

        switchRoleBtn.addEventListener('click', async function (e) {

            e.preventDefault();

            e.stopImmediatePropagation();

            const formData = {
                role_new: switchRole.value,
            }

            try {
                switchRoleLoading.classList.remove("d-none");
                const axiosResData = await axios({
                    method: 'POST',
                    url: '/switchrole',
                    data: formData,
                    headers: { "Content-Type": "application/json; charset=utf-8" },
                    onDownloadProgress: function (axiosProgressEvent) {
                        if (axiosProgressEvent.download) {
                            switchRoleLoading.classList.add("d-none");
                        }
                    }
                });
                const resdata = axiosResData?.data;
                if (resdata.error) {
                    console.log(resdata)
                    switchRoleMessage.classList.remove("d-none");
                    switchRoleMessage.classList.add("alert-warning");
                    switchRoleMessage.innerHTML = resdata.data;
                    setTimeout(() => {
                        switchRoleMessage.classList.add("d-none");
                        switchRoleMessage.classList.remove("alert-warning");
                    }, 10000);
                    return;
                }

                window.location.href = `/dashboard`;

            } catch (error) {
                console.log(error?.message);
                switchRoleLoading.classList.add("d-none");
                switchRoleMessage.classList.remove("d-none");
                switchRoleMessage.classList.add("alert-warning");
                switchRoleMessage.innerHTML = error?.message;
                setTimeout(() => {
                    switchRoleMessage.classList.add("d-none");
                    switchRoleMessage.classList.remove("alert-warning");
                }, 10000);
            }
        });
    }
});


$(document).ready(function () {
    document.querySelectorAll('.sidebar .nav-link').forEach(function (element) {

        element.addEventListener('click', function (e) {

            let nextEl = element.nextElementSibling;
            let parentEl = element.parentElement;

            if (nextEl) {
                e.preventDefault();
                let mycollapse = new bootstrap.Collapse(nextEl);

                if (nextEl.classList.contains('show')) {
                    mycollapse.hide();
                } else {
                    mycollapse.show();
                    // find other submenus with class=show
                    var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                    // if it exists, then close all of them
                    if (opened_submenu) {
                        new bootstrap.Collapse(opened_submenu);
                    }

                }
            }

        });
    })
});

//////////////////////////////////////////////////////////////////////////

function hideAlert(message_div_element_id_success, message_div_element_id_warning) {
    message_div_element_id_success.classList.remove("show");
    message_div_element_id_success.classList.add("d-none");
    message_div_element_id_warning.classList.remove("show");
    message_div_element_id_warning.classList.add("d-none");
}

function createSuccessAlert(message_element_id, message, message_div_element_id, loading_element_id, data_element_id = null, timeout = 5000) {

    message_element_id.innerHTML = message;
    loading_element_id.classList.add("d-none");
    message_div_element_id.classList.remove("d-none");
    message_div_element_id.classList.add("show");
    setTimeout(() => {
        message_div_element_id.classList.remove("show");
        message_div_element_id.classList.add("d-none");
    }, timeout);

}

function createWarningAlert(message_element_id, message, message_div_element_id, loading_element_id, data_element_id = null, timeout = 5000) {

    message_element_id.innerHTML = message;
    loading_element_id.classList.add("d-none");
    message_div_element_id.classList.remove("d-none");
    message_div_element_id.classList.add("show");
    if (data_element_id) {
        data_element_id.innerHTML = '';
    }
    setTimeout(() => {
        message_div_element_id.classList.remove("show");
        message_div_element_id.classList.add("d-none");
    }, timeout);

}

document.addEventListener("DOMContentLoaded", function () {
    Notification ? "granted" !== Notification.permission && Notification.requestPermission() : alert("Desktop notifications not available in your browser. Try Chromium.");
});

function askForDesktopNotification() {
    "granted" !== Notification.permission && Notification.requestPermission();
}

function showSuccessDesktopNotification(title, message, notification_id) {

    if ("granted" !== Notification.permission) Notification.requestPermission();

    else {
        let notification = new Notification(title, { icon: "/static/images/notification.svg", body: message });
        (notification.onclick = function () {
            window.open(`/dashboard/getallnotification?notification_id=${notification_id}`);
        }),
            (notification.onshow = function () {
                const audio = document.getElementById('notificationSound');
                audio.play()
                    .then((data) => {
                        //console.log(data)}
                    })
                    .catch((error) => {
                        //console.log(error)}
                    });
            });
    }
}

async function updateNotificationReadStatus1(notification_id) {

    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const getAssignmentsDiv = document.getElementById("getAssignmentsDiv")

    const formData = {
        notification_id: notification_id ? +notification_id : 0,
    }
    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/updatenotificationreadstatus1',
            data: formData,
            headers: { "Content-Type": "application/json; charset=utf-8" },
            onDownloadProgress: function (axiosProgressEvent) {
                if (axiosProgressEvent.download) {
                    spinnerLoading.classList.add("d-none");
                }
            }
        });
        const resdata = axiosResData?.data;
        if (resdata.error) {
            console.log(resdata)
            createWarningAlert(warningAlertMessageDiv, resdata.data, warningAlertDiv, spinnerLoading);
            return;
        }
        createSuccessAlert(successAlertMessageDiv, 'Success', successAlertDiv, spinnerLoading);
        getAssignmentsDiv.innerHTML = resdata;
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }

}

async function updateNotificationReadStatus0(notification_id) {

    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const getAssignmentsDiv = document.getElementById("getAssignmentsDiv")

    const formData = {
        notification_id: notification_id ? +notification_id : 0,
    }
    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/updatenotificationreadstatus0',
            data: formData,
            headers: { "Content-Type": "application/json; charset=utf-8" },
            onDownloadProgress: function (axiosProgressEvent) {
                if (axiosProgressEvent.download) {
                    spinnerLoading.classList.add("d-none");
                }
            }
        });
        const resdata = axiosResData?.data;
        if (resdata.error) {
            console.log(resdata)
            createWarningAlert(warningAlertMessageDiv, resdata.data, warningAlertDiv, spinnerLoading);
            return;
        }
        createSuccessAlert(successAlertMessageDiv, 'Success', successAlertDiv, spinnerLoading);
        getAssignmentsDiv.innerHTML = resdata;
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }

}

function getNotificationsRealTime() {

    if (window.Worker) {
        const getNotificationsRealTimeWorker = new Worker("/static/js/workers/getnotificationsrealtime.js");
        setInterval(function () {
            getNotificationsRealTimeWorker.postMessage(['/dashboard/getnotificationsrealtime']);
            getNotificationsRealTimeWorker.onmessage = function (e) {

                const data = JSON.parse(e.data)
                //console.log(data)
                if (data.error) {
                    //console.log(data.data)
                    return;
                }
                const notifications = data.data;
                const notificationslength = notifications?.length !== 0 ? notifications?.length : 0
                for (let i = 0; i < notificationslength; i++) {
                    showSuccessDesktopNotification(`New Notification`, `${notifications[i].message}`, `${notifications[i].notification_id}`);
                }
            }
        }, 50000);

    } else {
        console.log('Your browser doesn\'t support web workers.');
    }

}

getNotificationsRealTime();

function getNotifications() {

    if (window.Worker) {
        const getNotificationsWorker = new Worker("/static/js/workers/getnotifications.js");
        setInterval(function () {
            getNotificationsWorker.postMessage(['/dashboard/getnotifications']);
            getNotificationsWorker.onmessage = function (e) {
                const data = JSON.parse(e.data)
                //console.log(data)
                if (data.error) {
                    //console.log(data.data)
                    return;
                }
                const notifications = data.data;

                if (isLocalStorageEnabled()) {
                    window.localStorage.setItem('ncount', notifications.length);
                }
            }
        }, 60000);

    } else {
        console.log('Your browser doesn\'t support web workers.');
    }

}

getNotifications()

function isLocalStorageEnabled() {
    try {
        const key = `storage-test`;
        window.localStorage.setItem(key, null);
        window.localStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
};

$(function () {
    const notificationCount = document.getElementById("notificationCount")
    if (isLocalStorageEnabled()) {
        let ncount = window.localStorage.getItem('ncount');
        if (notificationCount) {
            notificationCount.innerHTML = ncount
        }
        return;
    } else {
        notificationCount.innerHTML = 0
    }
});

function test() {

    const reviewswebsites = document.getElementById("reviewswebsites");

    if (reviewswebsites) {

        reviewswebsites.addEventListener('click', async function (e) {

            e.preventDefault();

            // console.log(e.target)


        });

    }

}
