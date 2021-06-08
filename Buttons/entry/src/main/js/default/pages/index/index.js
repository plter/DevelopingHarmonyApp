export default {
    data: {
        title: ""
    },
    onInit() {
        this.title = this.$t('strings.world');
    },

    btnClicked(){
        console.debug("Button Clicked");
    }
}
