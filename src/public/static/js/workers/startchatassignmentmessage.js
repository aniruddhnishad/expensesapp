onmessage = async function (e) {
    try {
        //console.log(e)
        const formData = {
            work_id: e.data[0]?.work_id,
            receiver_message: e.data[0]?.receiver_message,
            receiver_name: e.data[0]?.receiver_name
        }
        const response = await fetch(e.data[1], {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(formData),
        });
        let contentType = response.headers.get("content-type");
        let position = contentType.search("application/json");
        if (position === 0) {
            let resdata = await response.json()
            postMessage(JSON.stringify(resdata));
        } else {
            let resdata = await response.text()
            postMessage(JSON.stringify({ error: false, data: resdata }));
        }
    } catch (error) {
        console.log(error)
        postMessage(JSON.stringify({ error: true, data: error.message }));
    }
}
