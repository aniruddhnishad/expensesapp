async function getAssignment(work_id, assignment_id, website_name) {
    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const getAssignmentDiv = document.getElementById("getAssignmentDiv");
    const formData = {
        work_id: work_id ? +work_id : 0,
        assignment_id,
        website_name,
    }
    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/getassignment',
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
        getAssignmentDiv.innerHTML = resdata;
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }

}

async function getAssignmentAccepted(work_id, assignment_id, website_name) {
    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const getAssignmentDiv = document.getElementById("getAssignmentDiv");
    const formData = {
        work_id: work_id ? +work_id : 0,
        assignment_id,
        website_name,
    }
    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/getassignmentaccepted',
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
        getAssignmentDiv.innerHTML = resdata;
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }

}

async function getAssignmentApproved(work_id, assignment_id, website_name) {

    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const getAssignmentDiv = document.getElementById("getAssignmentDiv");
    const formData = {
        work_id: work_id ? +work_id : 0,
        assignment_id,
        website_name,
    }
    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/getassignmentapproved',
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
        getAssignmentDiv.innerHTML = resdata;
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }

}

async function getAssignmentCompleted(work_id, assignment_id, website_name) {

    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const getAssignmentDiv = document.getElementById("getAssignmentDiv");
    const formData = {
        work_id: work_id ? +work_id : 0,
        assignment_id,
        website_name,
    }
    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/getassignmentcompleted',
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
        getAssignmentDiv.innerHTML = resdata;
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }

}

async function getAssignmentReceived(work_id, assignment_id, website_name) {

    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const getAssignmentDiv = document.getElementById("getAssignmentDiv");
    const formData = {
        work_id: work_id ? +work_id : 0,
        assignment_id,
        website_name,
    }
    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/getassignmentreceived',
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
        getAssignmentDiv.innerHTML = resdata;
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }

}


async function getAssignmentRejected(work_id, assignment_id, website_name) {

    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const getAssignmentDiv = document.getElementById("getAssignmentDiv");
    const formData = {
        work_id: work_id ? +work_id : 0,
        assignment_id,
        website_name,
    }
    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/getassignmentrejected',
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
        getAssignmentDiv.innerHTML = resdata;
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }

}

async function getAssignmentReviewed(work_id, assignment_id, website_name) {

    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const getAssignmentDiv = document.getElementById("getAssignmentDiv");
    const formData = {
        work_id: work_id ? +work_id : 0,
        assignment_id,
        website_name,
    }
    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/getassignmentreviewed',
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
        getAssignmentDiv.innerHTML = resdata;
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }

}

async function getAssignmentRework(work_id, assignment_id, website_name) {

    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const getAssignmentDiv = document.getElementById("getAssignmentDiv");
    const formData = {
        work_id: work_id ? +work_id : 0,
        assignment_id,
        website_name,
    }
    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/getassignmentrework',
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
        getAssignmentDiv.innerHTML = resdata;
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }

}

async function acceptAssignment(work_id, assignment_id) {
    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const acceptAssignmentBtn = document.getElementById("acceptAssignmentBtn");
    const receiver_message_accept = document.getElementById("receiver_message_accept");

    const formData = {
        work_id: work_id ? +work_id : 0,
        assignment_id,
        receiver_message: receiver_message_accept.value ? receiver_message_accept.value : undefined,
    }
    acceptAssignmentBtn.setAttribute('disabled', true);

    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/acceptassignment',
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
        getAssignmentDiv.innerHTML = resdata.data;
        window.location.href = `/dashboard/freelancer/getassignmentsreceived`;
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }

}

async function rejectAssignment(work_id, assignment_id) {

    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const rejectAssignmentBtn = document.getElementById("rejectAssignmentBtn");
    const receiver_message_reject = document.getElementById("receiver_message_reject");

    const formData = {
        work_id: work_id ? +work_id : 0,
        assignment_id,
        receiver_message: receiver_message_reject.value ? receiver_message_reject.value : undefined,
    }
    rejectAssignmentBtn.setAttribute('disabled', true);

    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/rejectassignment',
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
        getAssignmentDiv.innerHTML = resdata.data;
        window.location.href = `/dashboard/freelancer/getassignmentsreceived`;
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }

}

async function getAssignmentMessage() {
    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const receiver_message = document.getElementById("receiver_message");
    const work_id = document.getElementById("work_id");
    const getAssignmentMessageDiv = document.getElementById("getAssignmentMessageDiv");
    const nick_name = document.getElementById("nick_name");

    const formData = {
        work_id: work_id.value ? +work_id.value : 0,
        receiver_message: receiver_message.value ? receiver_message.value : undefined,
        receiver_name: nick_name.value ? nick_name.value : 'Freelancer',
    }

    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/getassignmentmessage',
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

        getAssignmentMessageDiv.innerHTML = resdata;
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }

}

async function sendAssignmentMessage() {
    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const assignment_id = document.getElementById("assignment_id");
    const assignmentMessage = document.getElementById("assignmentMessage");
    const getAssignmentMessageDiv = document.getElementById("getAssignmentMessageDiv");

    const message = assignmentMessage.value ? assignmentMessage.value : undefined

    if (!message) return alert('Please privide message!')

    const formData = {
        assignment_id: assignment_id.value ? assignment_id.value : undefined,
        message,
    }

    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/sendassignmentmessage',
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

        getAssignmentMessageDiv.innerHTML = resdata;
        assignmentMessage.value = ''
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }
}

async function startChatAssignmentMessage() {
    const startChatAssignmentMessageBtn = document.getElementById("startChatAssignmentMessageBtn");
    const stopChatAssignmentMessageBtn = document.getElementById("stopChatAssignmentMessageBtn");
    const receiver_message = document.getElementById("receiver_message");
    const work_id = document.getElementById("work_id");
    const getAssignmentMessageDiv = document.getElementById("getAssignmentMessageDiv");
    const nick_name = document.getElementById("nick_name");

    const formData = {
        work_id: work_id.value ? +work_id.value : 0,
        receiver_message: receiver_message.value ? receiver_message.value : undefined,
        receiver_name: nick_name.value ? nick_name.value : 'Freelancer',
    }
    if (window.Worker) {
        const startChatWorker = new Worker("/static/js/workers/startchatassignmentmessage.js");

        var chatInterval = setInterval(function () {
            startChatWorker.postMessage([formData, '/dashboard/freelancer/getassignmentmessage']);
            startChatWorker.onmessage = function (e) {

                const data = JSON.parse(e.data)
                //console.log(data)
                if (data.error) {
                    //console.log(data.data)
                    getAssignmentMessageDiv.innerHTML = data.data
                    return;
                }
                getAssignmentMessageDiv.innerHTML = data.data
                //console.log(data)
            }
        }, 10000);
        startChatAssignmentMessageBtn.classList.add("d-none");
        stopChatAssignmentMessageBtn.classList.remove("d-none");
        stopChatAssignmentMessageBtn.addEventListener('click', () => {
            clearInterval(chatInterval);
            startChatAssignmentMessageBtn.classList.remove("d-none");
            stopChatAssignmentMessageBtn.classList.add("d-none");
        })

    } else {
        console.log('Your browser doesn\'t support web workers.');
    }
}

async function getAssignmentWorkMessage() {
    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const receiver_message = document.getElementById("receiver_message");
    const work_id = document.getElementById("work_id");
    const getAssignmentWorkMessageDiv = document.getElementById("getAssignmentWorkMessageDiv");
    const nick_name = document.getElementById("nick_name");

    const formData = {
        work_id: work_id.value ? +work_id.value : 0,
        receiver_message: receiver_message.value ? receiver_message.value : undefined,
        receiver_name: nick_name.value ? nick_name.value : 'Freelancer',
    }
    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/getassignmentworkmessage',
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

        getAssignmentWorkMessageDiv.innerHTML = resdata;
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }
}

async function sendAssignmentWorkMessage(work_id) {
    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const receiver_message = document.getElementById("receiver_message");
    const getAssignmentWorkMessageDiv = document.getElementById("getAssignmentWorkMessageDiv");
    const nick_name = document.getElementById("nick_name");

    const formData = {
        work_id,
        receiver_message: receiver_message.value ? receiver_message.value : undefined,
        receiver_name: nick_name.value ? nick_name.value : 'Freelancer',
    }

    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/sendassignmentworkmessage',
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
        getAssignmentWorkMessageDiv.innerHTML = resdata;
        receiver_message.value = ''
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }
}

async function startChatAssignmentWorkMessage() {
    const startChatAssignmentWorkMessageBtn = document.getElementById("startChatAssignmentWorkMessageBtn");
    const stopChatAssignmentWorkMessageBtn = document.getElementById("stopChatAssignmentWorkMessageBtn");
    const receiver_message = document.getElementById("receiver_message");
    const work_id = document.getElementById("work_id");
    const getAssignmentWorkMessageDiv = document.getElementById("getAssignmentWorkMessageDiv");
    const nick_name = document.getElementById("nick_name");

    const formData = {
        work_id: work_id.value ? +work_id.value : 0,
        receiver_message: receiver_message.value ? receiver_message.value : undefined,
        receiver_name: nick_name.value ? nick_name.value : 'Freelancer',
    }
    if (window.Worker) {
        const startChatWorker = new Worker("/static/js/workers/startchatassignmentworkmessage.js");

        var chatInterval = setInterval(function () {
            startChatWorker.postMessage([formData, '/dashboard/freelancer/getassignmentworkmessage']);
            startChatWorker.onmessage = function (e) {
                const data = JSON.parse(e.data)
                //console.log(data)
                if (data.error) {
                    //console.log(data.data)
                    getAssignmentWorkMessageDiv.innerHTML = data.data
                    return;
                }
                getAssignmentWorkMessageDiv.innerHTML = data.data
                //console.log(data)
            }
        }, 10000);
        startChatAssignmentWorkMessageBtn.classList.add("d-none");
        stopChatAssignmentWorkMessageBtn.classList.remove("d-none");
        stopChatAssignmentWorkMessageBtn.addEventListener('click', () => {
            clearInterval(chatInterval);
            startChatAssignmentWorkMessageBtn.classList.remove("d-none");
            stopChatAssignmentWorkMessageBtn.classList.add("d-none");
        })

    } else {
        console.log('Your browser doesn\'t support web workers.');
    }
}

async function searchAssignmentWork() {

    const successAlertMessageDiv = document.getElementById("successAlertMessageDiv");
    const successAlertDiv = document.getElementById("successAlertDiv");
    const warningAlertMessageDiv = document.getElementById("warningAlertMessageDiv");
    const warningAlertDiv = document.getElementById("warningAlertDiv");
    const spinnerLoading = document.getElementById("spinnerLoading");

    const searchedAssignmentId = document.getElementById("searchedAssignmentId");
    const searchedAssignmentWorkDiv = document.getElementById("searchedAssignmentWorkDiv");
    const formData = {
        assignment_id: searchedAssignmentId.value ? searchedAssignmentId.value : undefined,
    }
    try {
        spinnerLoading.classList.remove("d-none");
        const axiosResData = await axios({
            method: 'POST',
            url: '/dashboard/freelancer/searchassignmentwork',
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
        searchedAssignmentWorkDiv.innerHTML = resdata;
        searchedAssignmentId.value = ''
    } catch (error) {
        console.log(error)
        console.log(error?.message);
        createWarningAlert(warningAlertMessageDiv, error?.message, warningAlertDiv, spinnerLoading);
    }

}

async function uploadSolutionFile(website_name) {

    let attachment = document.getElementById('attachment');
    const uploadFilesProgressbarDiv = document.getElementById("uploadFilesProgressbarDiv");
    const uploadFilesProgressbar = document.getElementById("uploadFilesProgressbar");
    const uploadFilesData = document.getElementById("uploadFilesData");
    const filesMessage = document.getElementById("filesMessage");

    const formData = new FormData();
    const bucket_name = website_name.replace(/\./g, '')
    formData.append('attachment', attachment.files[0]);

    try {

        const axiosResAttachmentData = await axios({
            method: 'POST',
            url: `${PHP_API}/uploadsolutionfile.php?website_name=${website_name}&bucket_name=${bucket_name}`,
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                'Access-Control-Allow-Origin': '*'
            },
            onUploadProgress: function (axiosProgressEvent) {
                if (axiosProgressEvent.loaded) {
                    var progressPercentage = Math.round((axiosProgressEvent.loaded * 100) / axiosProgressEvent.total);
                    uploadFilesProgressbarDiv.classList.remove("d-none");
                    uploadFilesProgressbar.style.width = progressPercentage + "%";
                    uploadFilesProgressbar.innerHTML = progressPercentage + "%";
                }
            },
        });
        uploadFilesProgressbarDiv.classList.add("d-none");
        const axiosAttachmentData = axiosResAttachmentData.data;

        if (axiosAttachmentData.error) {
            console.log(axiosAttachmentData)
            filesMessage.classList.remove("d-none");
            filesMessage.classList.add("alert-warning");
            filesMessage.innerHTML = axiosAttachmentData.data;
            setTimeout(() => {
                filesMessage.classList.add("d-none");
                filesMessage.classList.remove("alert-warning");
            }, 5000);
            return;
        }

        attachment.value = '';

        let divRow = document.createElement("div");

        divRow.classList.add('row');

        divRow.setAttribute('id', `filediv${axiosAttachmentData.attachment_id}`)

        let divColFileName = document.createElement("div");

        divColFileName.classList.add('col', 'col-md-10', 'attachment_id');

        divColFileName.setAttribute('id', `${axiosAttachmentData.attachment_id}`);

        divColFileName.setAttribute('value', `${axiosAttachmentData.attachment_id}`)

        divColFileName.innerHTML = `${axiosAttachmentData.file_name}`;

        let divColFileDelete = document.createElement("div");

        divColFileDelete.classList.add('col', 'col-md-2');

        let buttonFileDelete = document.createElement("button");

        buttonFileDelete.classList.add('btn', 'btn-light');

        buttonFileDelete.setAttribute('onclick', `deleteSolutionFile('${axiosAttachmentData.data}', 'filediv${axiosAttachmentData.attachment_id}')`);

        buttonFileDelete.innerHTML = 'X';

        divColFileDelete.append(buttonFileDelete);

        divRow.append(divColFileName);

        divRow.append(divColFileDelete);

        uploadFilesData.append(divRow);

    } catch (error) {
        //console.log(error)
        console.log(error?.message);
        filesMessage.classList.remove("d-none");
        filesMessage.classList.add("alert-warning");
        filesMessage.innerHTML = axiosAttachmentData.data;
        setTimeout(() => {
            filesMessage.classList.add("d-none");
            filesMessage.classList.remove("alert-warning");
        }, 5000);
        return;
    }

}

async function deleteSolutionFile(key, file_row_id) {

    const filesMessage = document.getElementById("filesMessage");
    const filesLoading = document.getElementById("filesLoading");
    const row_id = document.getElementById(file_row_id);

    const formData = {}

    try {

        filesLoading.classList.remove("d-none");

        const axiosResAttachmentData = await axios({
            method: 'GET',
            url: `${PHP_API}/deletesolutionfile.php?key=${key}`,
            data: formData,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Access-Control-Allow-Origin': '*'
            },
            onUploadProgress: function (axiosProgressEvent) {
                if (axiosProgressEvent.download) {
                    filesLoading.classList.add("d-none");
                }
            },
        });

        const axiosAttachmentData = axiosResAttachmentData.data;

        if (axiosAttachmentData.error) {
            console.log(axiosAttachmentData)
            filesLoading.classList.add("d-none");
            filesMessage.classList.remove("d-none");
            filesMessage.classList.add("alert-warning");
            filesMessage.innerHTML = axiosAttachmentData.data;
            setTimeout(() => {
                filesMessage.classList.add("d-none");
                filesMessage.classList.remove("alert-warning");
            }, 5000);
            return;
        }

        filesLoading.classList.add("d-none");

        row_id.remove();

    } catch (error) {
        //console.log(error)
        console.log(error?.message);
        filesLoading.classList.add("d-none");
        filesMessage.classList.remove("d-none");
        filesMessage.classList.add("alert-warning");
        filesMessage.innerHTML = axiosAttachmentData.data;
        setTimeout(() => {
            filesMessage.classList.add("d-none");
            filesMessage.classList.remove("alert-warning");
        }, 5000);
        return;
    }

}

async function sendSolutionFiles(work_id, receiver_name,) {

    const receiver_message_solution = document.getElementById("receiver_message_solution");

    const sendFilesMessage = document.getElementById("sendFilesMessage");

    const sendFilesLoading = document.getElementById("sendFilesLoading");

    const getAssignmentDiv = document.getElementById("getAssignmentDiv");

    const website_name_data = document.getElementById("website_name");

    const website_name = website_name_data.value ? website_name_data.value : undefined;

    const attachment_ids_data = document.querySelectorAll(".attachment_id");

    let attachment_ids_data1 = Array.from(attachment_ids_data);

    var attachment_ids = [];

    attachment_ids_data1.forEach((attachment_id) => {

        attachment_ids.push(+attachment_id.id);
    })

    const formDataAttachmentIds = {
        work_id,
        receiver_message: receiver_message_solution.value ? receiver_message_solution.value : undefined,
        receiver_name,
        receiver_status: 'Completed',
        receiver_solution_files_current: attachment_ids,
        website_name,
    }

    try {

        sendFilesLoading.classList.remove("d-none");

        const axiosAttachmentIds = await axios({
            method: 'POST',
            url: `/dashboard/freelancer/sendassignmentsolution`,
            data: formDataAttachmentIds,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Access-Control-Allow-Origin': '*'
            },
            onUploadProgress: function (axiosProgressEvent) {
                if (axiosProgressEvent.download) {
                    sendFilesLoading.classList.add("d-none");
                }
            },
        });

        sendFilesLoading.classList.add("d-none");

        const axiosAttachmentIdsData = axiosAttachmentIds.data;

        if (axiosAttachmentIdsData.error) {
            console.log(axiosAttachmentIdsData)
            sendFilesLoading.classList.add("d-none");
            sendFilesMessage.classList.remove("d-none");
            sendFilesMessage.classList.add("alert-warning");
            sendFilesMessage.innerHTML = axiosAttachmentIdsData.data;
            let uploadFilesData = document.getElementById("uploadFilesData");
            uploadFilesData ? uploadFilesData.innerHTML = '' : undefined
            setTimeout(() => {
                sendFilesMessage.classList.add("d-none");
                sendFilesMessage.classList.remove("alert-warning");
            }, 5000);
            return;
        }

        sendFilesLoading.classList.add("d-none");
        sendFilesMessage.classList.remove("d-none");
        sendFilesMessage.classList.add("alert-success");
        sendFilesMessage.innerHTML = 'Solution send successful, please wait to refresh!';
        setTimeout(() => {
            sendFilesMessage.classList.add("d-none");
            sendFilesMessage.innerHTML = '';
            getAssignmentDiv.innerHTML = axiosAttachmentIdsData
        }, 2000);

    } catch (error) {
        //console.log(error)
        console.log(error?.message);
        sendFilesLoading.classList.add("d-none");
        sendFilesMessage.classList.remove("d-none");
        sendFilesMessage.classList.add("alert-warning");
        sendFilesMessage.innerHTML = axiosAttachmentData.data;
        setTimeout(() => {
            sendFilesMessage.classList.add("d-none");
            sendFilesMessage.classList.remove("alert-warning");
        }, 5000);
        return;
    }

}


