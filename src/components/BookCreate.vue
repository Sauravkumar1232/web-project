<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1>Book Create</h1>
      <div class="container">
        <form action="book/create" method="post">
          <div>
            <label>Book Name : </label>
            <input
              type="text"
              class="form-control"
              name="bookName"
              v-model="bookName"
            />
          </div>
          <div>
            <label>Author Name : </label>
            <input
              type="text"
              class="form-control"
              name="authorName"
              v-model="authorName"
            />
          </div>
          <div>
            <label>Price :</label>
            <input
              type="text"
              class="form-control"
              name="price"
              v-model="price"
            />
          </div>
          <div>
            <label>Label :</label>
            <input
              type="text"
              class="form-control"
              name="Label"
              v-model="label"
            />
          </div>
          <div class="btn">
            <button type="button" class="cancelbtn" @click="cancel()">
              Cancel
            </button>
            <button type="submit" class="signupbtn" @click="createBook()">
              Create
            </button>
          </div>
        </form>
      </div>
    </body>
  </html>
</template>

<script>
import axios from "axios";
export default {
  name: "BookCreate",
  data() {
    return {
      bookName: "",
      authorName: "",
      price: "",
      label: "",
    };
  },
  methods: {
    cancel() {
      axios({
        method: "get",
        url: "http://localhost:8081/",
        // data: data,
      });
    },
    createBook() {
      try {
        let data = {
          bookName: this.bookName,
          authorName: this.authorName,
          price: this.price,
          label: this.label,
        };
        axios({
          method: "post",
          url: "http://localhost:3000/book/create",
          data: data,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(to bottom, #33ccff 0%, #cc99ff 100%);
}
* {
  box-sizing: border-box;
}
.form-control {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: 5px;
  background: none;
}
.container {
  /* margin: auto; */
  padding: 16px;
  /* align-items: center; */
}

button {
  background-color: #04aa6d;
  padding: 14px 20px;
  margin: 80px 0px;
  cursor: pointer;
  opacity: 0.9;
  width: 100%;
}
button:hover {
  opacity: 1;
}
.cancelbtn {
  background-color: red;
}
.cancelbtn,
.signupbtn {
  float: left;
  width: 50%;
}
</style>
