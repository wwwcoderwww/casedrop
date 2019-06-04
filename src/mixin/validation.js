export const validation = {
    methods: {
        validateEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        validPassword(password) {
            var key = /^(?=.*[a-z])(?=.*[0-9]).+$/;
            return key.test(password)
        },
        notify(type, text) {
            this.$notify({
                type: type,
                text: text,
                duration: 3000
            });
        },
        deleteBorder() {
            for (let key in this.$refs) {
                this.$refs[key].classList.remove('border_error')
            }
        },
        numberValidator: function(fromInput, func) {
            fromInput = fromInput.replace(/,/, '.');
            if (/^\d*\.?\d*$/.test(fromInput)) {
                return func(fromInput)
            } else {
                for (let i = 0; i < fromInput.length; i++) {
                    if (!/^(\d*\.)?\d+$/.test(fromInput[i]) || fromInput[i] == '.') {
                        return fromInput = fromInput.substring(0, fromInput.length - 1);
                    }
                }
            }	
        },
        twoCharAfterDot: function(str) {
            str = str.toString()
            const index = str.indexOf('.');
            if (index == -1) {
                return str
            } else {
                return str.substring(index+3, -1);
            }
        },
        sixCharAfterDot: function(str) {
            str = str.toString()
            const index = str.indexOf('.');
            if (index == -1) {
                return str
            } else {
                return str.substring(index+7, -1);
            }
        },
        formatPrice: function (value, afterDot = 2, space = "") {
            let val = (value / 1).toFixed(afterDot);
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, space);
        },
        copyText(val, text) {
                // navigator.clipboard.writeText(val).then(() => {
                //     this.$notify({
                //         type: 'success',
                //         text: text,
                //         duration: 3000
                //     });
                // }).catch(err => {
                //     this.$notify({
                //         type: 'error',
                //         text: 'Something went wrong',
                //         duration: 3000
                //     });
                // })

                const copyToClipboard = str => {
                    const el = document.createElement('textarea');
                    el.value = str;
                    el.setAttribute('readonly', '');
                    el.style.position = 'absolute';
                    el.style.left = '-9999px';
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);
                    this.notify('success', text);
                };
                copyToClipboard(val)
        },
        timeConverter(UNIX_timestamp) {
            var a = new Date(UNIX_timestamp * 1000);
            var months = [ '01', '02', '03', '04', '05',' 06', '07', '08', '09', '10',' 11', '12' ];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes().toString().length == 2 ? a.getMinutes() : '0' + a.getMinutes();
            var sec = a.getSeconds();
            // var time = date + '.' + month + '.' + year;
            var time = hour + ':' + min + '  ' + date + '.' + month + '.' + year;
            
            return time;
        },
    }
}