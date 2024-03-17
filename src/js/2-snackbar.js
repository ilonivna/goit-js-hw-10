import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("form");


form.addEventListener("submit", event => {
    event.preventDefault();
    const delay = form.elements.delay.value;
    const state = form.elements.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve();
            } else {
                reject();
    }
        }, delay)
    })
    promise
    .then(value => {
        iziToast.success({
            color: "green",
            position: "topRight",
            message: `✅ Fulfilled promise in ${delay}ms`
        })
    })
    .catch(error => {
        iziToast.error({
            color: "red",
            position: "topRight",
            message: `❌ Rejected promise in ${delay}ms`
        })
    })
});

