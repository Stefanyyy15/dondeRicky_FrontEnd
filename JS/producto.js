document.addEventListener("DOMContentLoaded", function () {

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const registerForm = document.getElementById("btnRegistrar");

    registerForm.addEventListener("click", async function (event) {
        event.preventDefault();

        const name = document.getElementById("nombre").value.trim();
        const precio = document.getElementById("precio").value.trim();
        const descripcion = document.getElementById("descripcion").value.trim();
        const imagen = document.getElementById("imagen").value.trim();

        if (!name || !precio  || !descripcion || !imagen) {
            alert("Porfavor llena todos los campos");
            return;
        }

        const productData = {
            name: name,
            price: precio,
            description: descripcion,
            image: imagen
        };

        try {
            const response = await fetch("http://localhost:3002/api/product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(productData),
                credentials: "include"
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error("Error: " + errorMessage);
            }

            const data = await response.json();
            console.log(data);

            alert("Registro exitoso");
            window.location.href = "./inicio.html";

        } catch (error) {
            console.error("Error:", error);
            alert("Ups algo salio mal, intenta más tarde");
        }
    });
});
