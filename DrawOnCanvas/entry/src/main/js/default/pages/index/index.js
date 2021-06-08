export default {
    data: {
        title: ""
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    onShow() {
        let ctx = this.$refs.canvas.getContext("2d");
        ctx.fillStyle = "red";
        ctx.fillRect(100, 400, 200, 100);

        ctx.fillText("Hello World", 0, 400);

        let img = new Image();
        img.src = "common/images/icon.png";
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
        };
    }
}
