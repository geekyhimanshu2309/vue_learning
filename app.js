// Proxy: A figure that can be used to represent the value of something in a calculation
const vm = Vue.createApp({
  data() {
    return {
      firstName: "Himanshu",
      middleName: "",
      lastName: "geek",
      url: "https://google.com",
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      // event.preventDefault();
      console.log(msg);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("Full name computed property was called!!");
      return `${this.firstName.toUpperCase()} ${this.middleName} ${
        this.lastName
      }`;
    },
  },
  watch: {
    age(newVal, oldVal){
        setTimeout(() => {
          this.age = 20
        },3000)
    }
  }
}).mount("#app");

// setTimeout(() => {
//     vm.firstName = "bob";
// },2000)

// Proxy: A figure that can be used to represent the value of something in a calculation
// Computed Properties- How to create computed properties and why they are useful
