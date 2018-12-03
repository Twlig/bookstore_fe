<template>
  <div class="landing">
    <header id="header">
      <h1><a @click="toUser()">BOOKSTORE</a></h1>
    </header>
    <section id="main" class="wrapper">
      <div class="container">

        <div class="table-wrapper">
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
            <tbody v-for="item in bookList">
            <div style="width: 100%;height: 2px;background-color: #1b1e21"></div>
            <tr v-for="book in item">
              <td><img :src="book.book_smimg" alt="" width="140px" height="150px"/><div>{{book.book_name}}</div></td>
              <td>  作者：{{book.book_author}} 出版社：{{book.book_publishing}}</td>
              <td>{{book.book_price}}</td>
              <th>{{book.book_num}}</th>
              <td v-if="book.is_finsh == '1'">已付款</td>
              <td v-if="book.is_finsh == '0'">待收货</td>
            </tr>
            <!--<div style="width: %;height: 2px;background-color: #0b2e13"></div>-->
            <!--<div style="width: 100%;height: 2px;background-color: #0b2e13"></div>-->
            <!--<tr><th aria-colspan="5" style="text-align: right">总价：{{}}</th></tr>-->
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

  </div>
</template>
<script>
  export default {
    name: 'List',
    data() {
      return {
        bookList:[],
        baseUrl: "http://120.79.211.126:8080/bookstore",
        baseUrl2: "http://119.29.150.121:8080/bookstore"
      }
    },
    methods: {
      getMessage() {
        this.axios.get(this.baseUrl2 + "/api/getSelfOrders?user_name=" + localStorage.getItem("userName"))
          .then(res => {
            if(res.data.status == 1) {
              this.bookList = res.data.data
              console.log(this.bookList)
            }
            else {
              alert("请求失败")
            }
          })
      },
      toUser() {
        this.$router.push('/')
      },
      toChart() {
        this.$router.push('/chart')
      }
    },
    created() {
      this.getMessage()
    }
  }
</script>
