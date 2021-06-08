export default {
    data: {
        title: "",
        count: 0
    },
    onInit() {
        setInterval(() => {
            this.count++;
        }, 1000);
    }
}
