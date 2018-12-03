<template>
  <div>
    <section id="main" class="wrapper">
      <div class="container">
        <div class="select-wrapper" style="width: 350px;float: left">
          <select name="category" id="category" v-model="status">
            <option value="">- 订单状态 -</option>
            <option value="0">初始订单</option>
            <option value="1">已发货</option>
            <option value="2">已完成</option>
          </select>
        </div>
        <input style="width: 350px;position: relative;left: 50px;float: left" type="text" name="name" id="name" value="" placeholder="Name" v-model="username"/>
        <div class="12u$">
          <input style="position: relative;left: 80px;top: 5px;outline: none" type="submit" value="查询" @click="getOrderByUser()"/>
        </div>
        <hr>
        <div class="table-wrapper">
          <table>
            <thead>
            <tr >
              <th colspan="2" style="text-align: center ">用户名</th>
              <th>订单号</th>
              <th>书名</th>
              <th>订单状态</th>
              <th>修改订单状态</th>
            </tr>
            </thead>
            <tbody v-for="item in bookList">
            <tr v-for="book in item">
              <!--<td style="position: relative;padding-right: 30px"><input type="checkbox" id="cop" name="copy" >-->
                <!--<label style="position: absolute;width: 30px;height: 30px;top: 50%;margin-top: -15px;" for="cop"></label></td>-->
              <td colspan="2" style="text-align: center ">{{username}}</td>
              <td>{{book.order_id}}</td>
              <td>《{{book.book_name}}》</td>
              <td v-if="book.is_finsh == 0">已付款</td>
              <td v-if="book.is_finsh == 1">已发货</td>
              <td v-if="book.is_finsh == 2">已完成</td>
              <td @click="changeStatus(book)"><a href="#" class="button alt small">完成</a></td>
            </tr>
            </tbody>
            <tbody v-for="item in bookList1">
            <tr v-for="book in item">
              <!--<td style="position: relative;padding-right: 30px"><input type="checkbox" id="cop" name="copy" >-->
              <!--<label style="position: absolute;width: 30px;height: 30px;top: 50%;margin-top: -15px;" for="cop"></label></td>-->
              <td colspan="2" style="text-align: center ">{{username}}</td>
              <td>{{book.order_id}}</td>
              <td>《{{book.book_name}}》</td>
              <td v-if="book.is_finsh == 0">已付款</td>
              <td v-if="book.is_finsh == 1">已发货</td>
              <td v-if="book.is_finsh == 2">已完成</td>
              <td @click="changeStatus(book)"><a href="#" class="button alt small">完成</a></td>
            </tr>
            </tbody>
            <tbody v-for="item in bookList2">
            <tr v-for="book in item">
              <!--<td style="position: relative;padding-right: 30px"><input type="checkbox" id="cop" name="copy" >-->
              <!--<label style="position: absolute;width: 30px;height: 30px;top: 50%;margin-top: -15px;" for="cop"></label></td>-->
              <td colspan="2" style="text-align: center ">{{username}}</td>
              <td>{{book.order_id}}</td>
              <td>《{{book.book_name}}》</td>
              <td v-if="book.is_finsh == 0">已付款</td>
              <td v-if="book.is_finsh == 1">已发货</td>
              <td v-if="book.is_finsh == 2">已完成</td>
              <td @click="changeStatus(book)"><a href="#" class="button alt small">完成</a></td>
            </tr>
            </tbody>

          </table>
        </div>
        <!--<div class="row">-->
          <!--<div class="3u 6u(small) 12u$(xsmall)">-->
            <!--<ul class="actions vertical">-->
            <!--</ul>-->
          <!--</div>-->
          <!--<div class="3u 6u$(small) 12u$(xsmall)">-->
            <!--<ul class="actions vertical small">-->
            <!--</ul>-->
          <!--</div>-->
          <!--<div class="3u 6u(small) 12u$(xsmall)">-->
            <!--<ul class="actions vertical">-->
            <!--</ul>-->
          <!--</div>-->
          <!--<div class="3u$ 6u$(small) 12u$(xsmall)">-->
            <!--<ul class="actions vertical small">-->
              <!--<li><a href="#" class="button special small fit">一键完成</a></li>-->
            <!--</ul>-->
          <!--</div>-->
        <!--</div>-->
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
        bookList: [],
        bookList1: [],
        bookList2: [],
        status: ''
      }
    },
    methods: {
      getOrderByUser() {
        if(this.status == "" && this.username == "") {
          this.axios.get(this.baseUrl + "/api/searchOrders?user_name=" + this.username + "&&status=" + this.status)
            .then(res => {
              if(res.data.status == 1) {
                this.bookList = res.data.data[0]
                this.bookList1 = res.data.data[1]
                this.bookList2 = res.data.data[2]
              }
              else {
                alert("请求失败")
              }
            })
        }
        else {
          this.axios.get(this.baseUrl + "/api/searchOrders?user_name=" + this.username + "&&status=" + this.status)
            .then(res => {
              if(res.data.status == 1) {
                this.bookList = res.data.data
                this.bookList1 = []
                this.bookList2 = []
              }
              else if(res.data.status == -1) {
                this.bookList = []
                this.bookList1 = []
                this.bookList2 = []
                alert("当前用户尚未有任何订单记录")
              }
              else {
                alert("请求失败")
              }
            })
        }
      },
      changeStatus(book){
        this.axios.get(this.baseUrl + "/api/updateOrderStatus?order_id=" + book.order_id +"&status=" + 2 + "&book_id=" + book.book_id)
          .then(res => {
            if(res.data.status == 1) {
              this.getOrderByUser()
            }
            else {
              alert("修改失败")
            }
          })
      }
    },
    created() {

    }
  }
</script>
<style>
  td,
  th{
    text-align: center;
  }
</style>
