<template>
  <div>
   <Header name="Register" />
   <Sidebar />
  <v-form ref="form" class="mx-auto" v-model="valid">
    <div class='formclass'>

     <v-col
          cols="12"
          md="4"
      />

    <v-text-field
      class="red--text"
      v-model="name"
      :counter="30"
      :rules="nameRules"
      label="Please Enter your Name"
      required
    ></v-text-field>

     <v-col
          cols="12"
          md="4"
      />

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Please Enter your E-mail"
      required
    ></v-text-field>

     <v-col
          cols="12"
          md="4"
      />

    <v-text-field
      class="red--text"
      v-model="mobile"
      :counter="10"
      :rules="mobileRules"
      label="Please Enter your PhoneNumber"
      required
    ></v-text-field>

    <v-col
          cols="12"
          md="4"
      />

    <v-text-field
      v-model="date"
      :rules="dateRules"
      type="date"
      label="Select Date"
    ></v-text-field
    >

     <v-col
          cols="12"
          md="4"
      />

    <router-link to="/userDetails"
      ><button :disabled="!valid" @click="testingdata">
        Register
      </button></router-link
    >
    </div>
  </v-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
  data: () => ({
    valid: true,
    name: "",
    arr: [],
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    mobile: "",
    mobileRules: [
      (v) => !!v || "Phone Number is required",
      (v) => (v && v.length == 10) || "Phone Number must contain 10 Numbers",
    ],
    date: "",
    dateRules: [(v) => !!v || "Date is required"],
  }),
  components: {
    Header,
    Sidebar,
  },
  methods: {
    ...mapActions(["setuserInputAction"]),
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    testingdata() {
      var userdata = {
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        Date: this.date,
      };
      this.setuserInputAction(userdata);
    },
  },
};
</script>

<style scoped lang="scss">
$leftmargin: 20%;
$widthy: 60%;

button {
  color: rgb(44, 41, 41);
  background-color: lightgreen;
  padding: 10px 30px 10px 30px;
  border-radius: 5px;
  font-weight: bold;
  font-family: sans-serif;
  margin-right: 30px;
}
button:disabled {
  background-color: gray;
}

.formclass {
  margin-left: $leftmargin;
  width: $widthy;
}
</style>