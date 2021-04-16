<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header name='Home' />
    <Sidebar />
    <h2>Home Page</h2>
    <div id='loadid' v-if="loading">Please wait while we load data....</div>
    <div v-else class="dataclass">
    <!-- <div v-if="users.length === 0">No Users exists</div>
    <div v-else>
      <div v-for="(user, i) of users" :key="i">
        {{user}}
      </div>
    </div> -->
    <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            NAME
          </th>
          <th class="text-left">
            USERNAME
          </th>
          <th class="text-left">
            EMAIL
          </th>
          <th class="text-left">
            ADDRESS
          </th>
          <th class="text-left">
            PHONE
          </th>
          <th class="text-left">
            WEBSITE
          </th>
          <th class="text-left">
            COMPANY
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address.street }},{{ user.address.suite }},{{ user.address.city }}
              {{ user.address.zipcode }},{{ user.address.geo.lat }},{{ user.address.lng }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.website }}</td>
          <td>{{ user.company.name }},{{ user.company.catchPhrase }},{{ user.company.bs }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </div>
  <div>
    <Footer />
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  data() {
    return {
      loading: false,
      users: [],
    };
  },
  components: {
    // HelloWorld,
    Header,
    Sidebar,
    Footer,
  },
  computed: {
    ...mapGetters(['listOfUsers']),
  },
  mounted() {
    this.getData();
    window.console.log(this.$store.state.users);
  },
  methods: {
    ...mapActions(['setUsersAction']),
    async getData() {
      this.loading = true;
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );
        this.setUsersAction(response.data);
        window.console.log(this.loading);
        this.users = response.data;
        
        window.console.log(response.data);
        this.loading = false;
        window.console.log(this.loading);
      } catch (error) {
        window.console.log(error);
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped lang="scss" >
$toppy: -30px;
$lefty: 10%;

.dataclass {
  margin-top: $toppy;
  margin-left: $lefty;
  background-color: lightgray;
}
#loadid {
  margin-left: 10%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 4px;
}
</style>
