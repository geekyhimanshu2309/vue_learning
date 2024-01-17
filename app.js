const vm = Vue.createApp({
    data(){
        return{
            firstName: "Himanshu"
        }
    },
    methods:{
        fullName(){
            return `${this.firstName.toUpperCase()}`
        }
    }
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = "bob";
// },2000)

// Proxy: A figure that can be used to represent the value of something in a calculation
