<template>
  <div class="landing">
    <!-- Header -->
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
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in bookList">
              <td><img :src="'item.book_smimg'" alt="" width="140px" height="150px"/></td>
              <td>  作者：{{item.book_author}} 出版社：{{item.book_publishing}}</td>
              <td>{{item.book_price}}</td>
              <th class="font"><img @click="reduce(index)" src="../assets/images/reduce.png" alt="" width="20px" height="20px"/>{{item.book_count}}<img @click="add(index)" src="../assets/images/add.png" alt="" width="20px" height="20px"/></th>
              <td><a @click="deleteL(index)" href="#" class="button alt small">删除</a></td>
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
              <li><a @click="toList()" class="button special small fit">提交订单</a></li>
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
    name: 'Chart',
    data() {
      return {
        bookList:[]
      }
    },
    methods: {
      getMessage() {
        let _this = this
        this.axios.get("/api/getShopCarWithToken")
          .then(res => {
            if(res.data.status == 1) {
              _this.bookList = res.data.data
            }
            else {
              alert("请求失败")
            }
          })
      },
      toUser() {
        this.$router.push('/')
      },
      toList() {
        this.$router.push('/list')
      },
      deleteL(index) {

      },
      reduce(index) {

      },
      add(index) {

      }
    },
    created() {
      this.getMessage()
    }
  }
</script>
