Vue.config.devtools = true;


const vueApp = new Vue({
    el: "#app",
    data: {
        userList: [
            {
                name: "Michele",
                imgUrl: "../img/avatar_1.jpg"
            },
            {
                name: "Fabio",
                imgUrl: "../img/avatar_2.jpg"
            },
            {
                name: "Samuele",
                imgUrl: "../img/avatar_3.jpg"
            },
            {
                name: "Luisa",
                imgUrl: "../img/avatar_4.jpg"
            }

        ]
    }
});