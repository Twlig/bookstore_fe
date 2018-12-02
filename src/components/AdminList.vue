<template>
  <div>
    <section id="main" class="wrapper">
      <div class="container">
        <div class="select-wrapper" style="width: 350px;float: left">
          <select name="category" id="category">
            <option value="">- 订单状态 -</option>
            <option value="1">初始订单</option>
            <option value="1">已完成订单</option>
          </select>
        </div>
        <input style="width: 350px;position: relative;left: 50px;float: left" type="text" name="name" id="name" value="" placeholder="Name" v-model="username"/>
        <div class="12u$">
          <input style="position: relative;left: 80px;top: 5px" type="submit" value="查询" @click="getOrderByUser()"/>
        </div>
        <hr>
        <div class="table-wrapper">
          <table>
            <thead>
            <tr >
              <th colspan="2" style="text-align: center ">用户名</th>
              <th>订单</th>
              <th>书名</th>
              <th>订单状态</th>
            </tr>
            </thead>
            <tbody v-for="item in bookList">
            <tr v-for="book in item">
              <td style="position: relative;padding-right: 30px"><input type="checkbox" id="cop" name="copy" >
                <label style="position: absolute;width: 30px;height: 30px;top: 50%;margin-top: -15px;" for="cop"></label></td>
              <td>{{username}}</td>
              <td>{{book.order_id}}</td>
              <td>《{{book.book_name}}》</td>
              <td v-if="book.is_finish == 0">未完成</td>
              <td v-if="book.is_finish == 1">已完成</td>
              <td @click="changeStatus()"><a href="#" class="button alt small">完成</a></td>
            </tr>
            </tbody>

          </table>
        </div>
        <div class="row">
          <div class="3u 6u(small) 12u$(xsmall)">
            <ul class="actions vertical">
            </ul>
          </div>
          <div class="3u 6u$(small) 12u$(xsmall)">
            <ul class="actions vertical small">
            </ul>
          </div>
          <div class="3u 6u(small) 12u$(xsmall)">
            <ul class="actions vertical">
            </ul>
          </div>
          <div class="3u$ 6u$(small) 12u$(xsmall)">
            <ul class="actions vertical small">
              <li><a href="#" class="button special small fit">一键完成</a></li>
            </ul>
          </div>
        </div>

      </div>
      <hr />
    </section>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        baseUrl: "http://119.29.150.121:8080/bookstore",
        username: '',
        bookList: []
      }
    },
    methods: {
      getOrderByUser() {
        this.axios.get(this.baseUrl + "/api/getOrdersByUsername?user_name=" + this.username)
          .then(res => {
            if(res.data.status == 1) {
              this.bookList = res.data.data
            }
            else {
              alert("查询失败")
            }
          })
      },
      changeStatus(){

      }
    },
    created() {

    }
  }
</script>
