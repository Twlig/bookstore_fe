<template>
  <div>
    <div class="container">
      <ul style="list-style: none">
        <li>
          <input style="width: 400px;" type="text" name="name" id="name" value="" placeholder="书名" v-model="book_name" /></li>
        <li>
          <input style="width: 400px;position: relative;top:10px" type="text" name="name" id="name2" value="" placeholder="作者" v-model="book_author" /></li>
        <li>
          <input style="width: 400px;position: relative;top:20px" type="text" name="name" id="name3" value="" placeholder="价格" v-model="book_price" /></li>
        <li>
          <input style="width: 400px;position: relative;top:30px" type="text" name="name" id="name4" value="" placeholder="出版社" v-model="book_publishing" /></li>
        <li>
          <input style="width: 400px;position: relative;top:40px" type="text" name="name" id="name5" value="" placeholder="书籍封面" v-model="book_smimg" /></li>
        <li>
          <input style="width: 400px;position: relative;top:50px" type="text" name="name" id="name7" value="" placeholder="书籍分类id" v-model="c_id" /></li>
        <li>
          <input style="width: 400px;position: relative;top:50px" type="text" name="name" id="name6" value="" placeholder="书籍封面（详情页）" v-model="book_mdimg" /></li>
        <li>
          <textarea style="width:600px;position: relative;top:60px" name="message" id="message" placeholder="书籍详情信息" rows="6" v-model="book_describe"></textarea></li>

        <div class="12u$">
          <input style="position: relative;top: 80px" class="a" value="录入" @click="postBookMessage()" />
        </div>
      </ul>
    </div>
    <hr style="position: relative;top:90px">
  </div>
</template>
<script>
  export default {
    data() {
      return {
        book_name: '',
        book_author: '',
        book_price: '',
        book_publishing: '',
        book_smimg: '',
        book_mdimg: '',
        book_describe: '',
        c_id: '',
        baseUrl: 'http://120.79.211.126:8080/bookstore'
      }
    },
    methods: {
      postBookMessage() {
        let data = {
          book_name: this.book_name,
          book_author: this.book_author,
          book_price: this.book_price,
          book_publishing: this.book_publishing,
          book_mdimg: this.book_mdimg,
          book_smimg: this.book_smimg,
          book_describe: this.book_describe,
          c_id: this.c_id
        }
        this.axios.post(this.baseUrl + "/api/addBookToSql",data)
          .then(res => {
           // if(res.data)
          })
      }
    },
    created() {

    }
  }
</script>
<style scoped>
  .a {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    border-radius: 2.5em;
    border: 0;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    height: 2.85em;
    line-height: 2.95em;
    min-width: 10em;
    padding: 0 1.5em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    background-color: #25383B;
    color: #fff;
  }
</style>
