const vm = Vue.createApp({
    data(){
        return{
            firstName: "Himanshu"
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = "bob";
},2000)

// Proxy: A figure that can be used to represent the value of something in a calculation
