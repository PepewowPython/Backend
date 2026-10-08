const form = document.getElementById("form");
const numInput = document.getElementById("num");
const radioTodas = document.getElementById("todas");
const radioNumero = document.getElementById("numero");

const toggleInput = () => {
    const usarTodas = radioTodas.checked;
    numInput.disabled = usarTodas;
    if (usarTodas) {
        numInput.value = "";
    }
};

radioTodas.addEventListener("change", toggleInput);
radioNumero.addEventListener("change", toggleInput);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const resultado = document.getElementById("resultado");
    const todas = radioTodas.checked;
    const num = Number.parseInt(numInput.value, 10);

    resultado.innerHTML = "";

    if (todas) {
        for (let i = 1; i <= 15; i++) {
            resultado.innerHTML += `<h4>Tabla del ${i}</h4>`;
            for (let j = 1; j <= 10; j++) {
                resultado.innerHTML += `${i} &emsp;*&emsp; ${j} &emsp;*&emsp; ${i * j}<br>`;
            }
        }
        return;
    }

    if (Number.isNaN(num) || num < 1 || num > 15) {
        resultado.innerHTML = "El número debe estar entre 1 y 15";
        return;
    }

    resultado.innerHTML += `<h4>Tabla del ${num}</h4>`;
    for (let i = 1; i <= 10; i++) {
        resultado.innerHTML += `${num} &emsp;*&emsp; ${i} &emsp;*&emsp; ${num * i}<br>`;
    }
});

form.addEventListener("reset", () => {
    setTimeout(() => {
        radioTodas.checked = true;
        toggleInput();
        document.getElementById("resultado").innerHTML = "";
    }, 0);
});

toggleInput();