<template>
  <div class="landing">
    <header id="header">
      <h1><a @click="toUser()">BOOKSTORE</a></h1>
    </header>
    <section id="main" class="wrapper">
      <div class="container">

        <div class="table-wrapper" style=" border: #1b1e21 1px solid;">
          <table style="border-collapse: collapse;">
            <thead>
            <tr>
              <th>书名</th>
              <th>信息</th>
              <th>价格</th>
              <th>数量</th>
              <th>状态</th>
            </tr>
            </thead>
            <tbody v-for="(item, index) in bookList">
            <tr>
              <td style="background-color: #1b1e21;color: #fff;font-size: 16px;line-height: 16px;padding: 6px;" colspan="7">订单&nbsp;{{index + 1}}</td>
            </tr>
            <tr v-for="book in item">
              <td><img :src="book.book_smimg" alt="" width="140px" height="150px"/><div>{{book.book_name}}</div></td>
              <td>  作者：{{book.book_author}} 出版社：{{book.book_publishing}}</td>
              <td>{{book.book_price}}</td>
              <td>{{book.book_num}}</td>
              <td v-if="book.is_finsh == '0'">已付款</td>
              <td v-if="book.is_finsh == '1'">已发货</td>
              <td v-if="book.is_finsh == '2'">已完成</td>
            </tr>
            <!--<div style="width: %;height: 2px;background-color: #0b2e13"></div>-->
            <!--<div style="width: 100%;height: 2px;background-color: #0b2e13"></div>-->
            <!--<tr><th aria-colspan="5" style="text-align: right">总价：{{}}</th></tr>-->
            </tbody>
          </table>
        </div>
        <div class="row" style="margin-top: 20px">
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
              <li><a @click="toChart()" class="button special small fit">返回购物车</a></li>
            </ul>
          </div>
        </div>

      </div>
      <hr />
    </section>

    <!-- 页脚 -->
    <footer id="footer">
      <div class="inner">
        <ul class="copyright">
          <li>Design: hwb zzy</li>
        </ul>
      </div>
    </footer>
    <div id="alert">{{message}}
      <img @click="displayNone()" src="../assets/images/close.png"/>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'List',
    data() {
      return {
        bookList:[],
        baseUrl2: "http://119.29.150.121:8080/bookstore",
        message: ""
      }
    },
    methods: {
      getMessage() {
        this.axios.get(this.baseUrl2 + "/api/getSelfOrders?user_name=" + localStorage.getItem("userName"))
          .then(res => {
            if(res.data.status == 1) {
              this.bookList = res.data.data
            }
            else {
              this.message = res.data.message
              this.display()
            }
          })
      },
      toUser() {
        this.$router.push('/')
      },
      toChart() {
        this.$router.push('/chart')
      },
      displayNone() {
        document.getElementById("alert").style.top = "-50px"
      },
      display() {
        document.getElementById("alert").style.top = "10px"
        setTimeout(function () {
          document.getElementById("alert").style.top = "-50px"
        },2000)
      }
    },
    created() {
      this.getMessage()
    }
  }
</script>
<style scoped>
  #alert {
    line-height: 30px;
    padding-left: 80px;
    padding-right: 80px;
    position: fixed;
    left: 50%;
    margin-left: -150px;
    top: -50px;
    text-align: center;
    background-color: rgb(255,255,255);
    border-radius: 3px;
    box-shadow: 10px 10px 5px rgba(0,0,0,0.5);
    color: #000;
    font-size: 15px;
    z-index: 10002;
    transition: all 0.5s ease-in-out;
  }
  #alert img {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 5px;
    right: 5px;
  }
  tr th {
    line-height: 50px;
    padding: 0;
  }
</style>
