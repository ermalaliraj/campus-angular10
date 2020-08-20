function exceptionConfigProvider() {
    this.config = {
    // These are the properties we need to set
    //appErrorPrefix: ''
    };
    this.$get = function () {
        return {
            config: this.config
        };
    };
}
