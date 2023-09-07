const host = 'http://localhost';
const port = '5000';

async function uploadFile(event) {
    let photo = document.getElementById('img').files[0];
    let formData = new FormData();

    formData.append('photo', photo);
    const result = await sendFile(formData);

    appendLinkToPage(result.link);

    // prevent page reload
    event.preventDefault();
}

function appendLinkToPage(link) {
    const div = document.createElement('div');

    div.innerHTML = `
        <p>${link}</p>
    `;

    document.body.appendChild(div);
}

async function sendFile(data) {
    const result = await fetch(`${host}:${port}/uploads`, {
        method: 'POST',
        body: data,
    });
    return result.json();
}
