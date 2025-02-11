document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("btnRegistrar");

    registerForm.addEventListener("click", async function (event) {
        event.preventDefault();

        const name = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!name || !email  || !password) {
            alert("Porfavor llena todos los campos");
            return;
        }

        const userData = {
            name: name,
            email: email,
            password: password
        };

        try {
            const response = await fetch("http://localhost:8081/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(userData),
                credentials: "include"
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error("Error: " + errorMessage);
            }

            const data = await response.json();

            localStorage.setItem("email", email);
            localStorage.setItem("token", data.token);

            const userResponse = await fetch(`http://localhost:8081/api/user/email/${email}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${data.token}`,
                    "Content-Type": "application/json"
                }
            });

            if (!userResponse.ok) {
                throw new Error("Error al obtener el ID del usuario.");
            }

            const userDataResponse = await userResponse.json();
            localStorage.setItem("userId", userDataResponse.id);

            alert("Registro exitoso");
            window.location.href = "./inicio.html";

        } catch (error) {
            console.error("Error:", error);
            alert("Ups algo salio mal, intenta más tarde");
        }
    });
});
