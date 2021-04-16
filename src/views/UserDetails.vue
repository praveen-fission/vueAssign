<template>
    <div>
        <Header name='UserDetails' />
        <Sidebar />
        <h2>Hai</h2>
        <div class="userclass">
        <h2>User Details Page</h2>
        <div>
         {{inputOfForm.name}} <br/> {{inputOfForm.email}} <br/>
         {{inputOfForm.phoneNumber}} <br/> {{inputOfForm.Date}}
        </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
  name: 'UserDetails',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['inputOfForm']),
},
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style scoped lang='scss'>
$backcolor : burlywood;

.userclass {
  margin-left: 30%;
  background-color: $backcolor;
}
</style>
