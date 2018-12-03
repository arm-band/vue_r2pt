new Vue({
    el: "#app",
    data: {
        scrollY: 0,
        r2tp_show: false
    },
    mounted() {
        window.addEventListener("scroll", this.scrollDistance);
    },
    methods: {
        scrollDistance() {
            this.scrollY = window.scrollY;
            if(this.scrollY > 400) {
                this.r2tp_show = true;
            }
            else {
                this.r2tp_show = false;
            }
        },
        r2pt(e) {
            e.preventDefault();
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    }
})