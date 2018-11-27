<template>
  <div class="landing">
    <header id="header">
      <h1><a @click="toUser()">BOOKSTORE</a></h1>
    </header>
    <section id="main" class="wrapper">
      <div class="container">

        <div class="table-wrapper">
          <table>
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
            <tr v-for="book in item.books">
              <td><img :src="book.book_smimg" alt="" width="140px" height="150px"/></td>
              <td>  作者：{{book.book_author}} 出版社：{{book.book_publishing}}</td>
              <td>价格</td>
              <th>{{book.book_count}}</th>
              <td v-if="item.is_finsh == '1'">已付款</td>
              <td v-if="item.is_finsh == '0'">待收货</td>
            </tr>
            <hr>
            <tr><th aria-colspan="5" style="text-align: right">总价：{{item.total_price}}</th></tr>
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
        bookList:[]
      }
    },
    methods: {
      getMessage() {
        this.axios.get("/api/getUserOrders")
          .then(res => {
            if(res.data.status == 0) {
              this.bookList = res.data.data
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
    }
  }
</script>
