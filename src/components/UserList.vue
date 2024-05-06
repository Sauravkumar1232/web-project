<template>
  <html>
    <head> </head>
    <body>
      <!-- <h1>User List</h1>  -->
      <table class="table">
        <caption>
          Users List
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr v-for="(user, index) in userList" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ user.firstname }}</td>
            <td>{{ user.Lastname }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.password }}</td>
            <td>
              <input
                class="edit"
                type="submit"
                value="Edit"
                @click="openEditPage(user._id)"
              />
              <input
                class="delete"
                type="submit"
                value="Delete"
                @click="deleteUser(user._id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
</template>
<script>
import router from "@/router";
import axios from "axios";

export default {
  name: "UserList",

  data() {
    return {
      userList: {},
    };
  },

  created() {
    this.getuserList();
  },

  methods: {
    async openEditPage(id) {
      console.log(id);
      router.push({ path: "/userEdit/" + id });

      // alert(id);
    },
    async getuserList() {
      try {
        // alert("ok..");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/user/list",
        });
        console.log(result, "message");
        this.userList = result.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteUser(id) {
      try {
        console.log(id);
        let result = await axios({
          method: "delete",
          url: "http://localhost:3000/user/delete/" + id,
        });
        console.log(result, " Deleted");
        this.getuserList();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: sans-serif;
}
caption {
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: #333;
}
.table {
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  width: 100%;

  /* display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  text-align: center; */
}
thead {
  background-color: aqua;
}
.tbody {
  vertical-align: bottom;
}
th,
td {
  border: 1px solid black;
  padding: 8px;
}
thead th {
  width: auto;
}
.delete {
  padding: 5px;
  width: auto;
  border-radius: 3px;
  border: none;
  background-color: red;
  color: white;
  font-size: medium;
  cursor: pointer;
}
.edit {
  color: white;
  margin-right: 5px;
  padding: 5px;
  width: auto;
  border-radius: 3px;
  border-style: groove;
  background-color: green;
  font-size: medium;
  cursor: pointer;
}
</style>
