document.addEventListener("DOMContentLoaded", function () {
    localStorage.clear();
    const loginButton = document.getElementById("btnLogin");

    loginButton.addEventListener("click", async function (event) {
        event.preventDefault(); 

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Por favor ingresa todos los datos");
            return;
        }

        const requestData = {
            email: email,
            password: password
        };

        try {
            const response = await fetch("http://localhost:8081/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                throw new Error("Credenciales invalidas");
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

            const userData = await userResponse.json();
            localStorage.setItem("userId", userData.id); 
            alert("Inicio de sesion exitoso");
            window.location.href = "Pages/inicio.html";

        } catch (error) {
            console.error("Error:", error);
            alert("Error al iniciar sesion");
        }
    });
});