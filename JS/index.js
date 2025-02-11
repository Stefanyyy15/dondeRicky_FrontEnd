
const urlUser = "";

const peticionGet = async (url) => {
    try {
        const respuesta = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ''
            }
        });
        console.log('Response status: ', respuesta.status);
        if (respuesta.ok) {
            const info = await respuesta.json();
            console.log(info);
            return info;
        } else {
            console.log('Error ', respuesta.status);
            return null;
        }
    } catch (error) {
        console.error('Error ', error);
        return null;
    }
}

async function peticionPost(url, data) {
    try {
        const token = localStorage.getItem('token');

        if (!token) {
            alert("There is no valid token. Please log in.");
            return;
        }
        const respuesta = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        });

        console.log('Response Status', respuesta.status);
        if (respuesta.ok) {
            const postCreado = await respuesta.json();
            return postCreado;
        } else {
            console.error('Error', respuesta.status);
            const textoError = await respuesta.text();
            console.error('Error detail:', textoError);
            return null;
        }
    } catch (error) {
        console.error("Error POST", error);
        return null;
    }
}



/* async function agregarPost(url) {
    const content = document.getElementById("content").value.trim();
    const image = document.getElementById("image").value.trim() || null;
    const user = JSON.parse(localStorage.getItem('user'));

    if (content.length === 0) {
        alert("The content of the post is mandatory.");
        return;
    }

    if (content.length < 5 || content.length > 500) {
        alert("The content of the post must be between 5 and 500 characters.");
        return;
    }

    const nuevoPost = {
        content,
        image,
        user: { id_user: user.id_user },
        publicationDate: new Date().toISOString()
    };

    try {
        const postCreado = await peticionPost(url, nuevoPost);

        if (postCreado) {
            console.log("Post created successfully:", postCreado);
            alert("Post created successfully");
            window.location.href = "/Pages/inicio.html";
        } else {
            alert("Error creating post");
        }
    } catch (error) {
        console.error("Request failed:", error);
        alert("An error occurred while trying to create the post.");
    }
}
 */


document.getElementById("btn-create-post").addEventListener("click", () => {
    agregarPost(urlPost);
});
