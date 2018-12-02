<template>
  <div class="landing">
    <!-- Header -->
    <header id="header">
      <h1><a @click="toUser()">BOOKSTORE</a></h1>
    </header>

    <!-- Main -->
    <section id="main" class="wrapper">
      <div class="container">

        <header class="major special">
          <h2>《{{book.name}}》</h2>
          <p>作者：{{book.author}}</p>
        </header>
        <span style="float: left" class="image left"><img :src=book.smimg alt="" /></span>
        <p style="width: 900px;text-align: left">{{book.describe}}</p>
        <div style="clear: both;"></div>
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
              <li><a @click="toChart()" class="button special small fit">加入购物车</a></li>
            </ul>
          </div>
          <div class="3u$ 6u$(small) 12u$(xsmall)">
            <ul class="actions vertical small">
              <li><a @click="toUser()" class="button alt small fit">返回首页</a></li>
            </ul>
          </div>

        </div>


      </div>
    </section>

    <!-- Footer -->
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
    name: 'Information',
    data() {
      return {
        baseUrl: "http://120.79.211.126:8080/bookstore",
        baseUrl2:"http://119.29.150.121:8080/bookstore",
        book_id: '',
        book_count: '',
        book: '',
        //isLogin: false
      }
    },
    methods: {
      getMessage() {
        this.axios(this.baseUrl2 + "/api/getBookInformation?book_id=" + this.$route.query.id)
          .then(res => {
            this.book = res.data.data
          })
      },
      toChart() {
        let _this = this
        this.axios.get(this.baseUrl + "/api/getShopCarWithToken")
          .then((res) => {
            if(res.data.status == 1) {
              //this.isLogin = true
              let data = {
                book_id: this.book.id.toString(),
                book_count: "1"
              }
              this.axios.post(this.baseUrl + "/api/addBookWithToken",data)
                .then(res => {
                  console.log(res.data)
                  if(res.data.status == 1) {
                    alert("添加成功")
                    _this.$router.push('/chart')
                  }
                  else {
                    alert("添加失败")
                  }
                })
            }
            else {
              //alert("没有登录，稍后跳转登录页面")
              this.axios.get(this.baseUrl2 + "/api/addToShopCar?book_id=" + this.book.id.toString())
                .then(res => {
                  if(res.data.status == 1) {
                    alert("添加成功")
                    let books = JSON.parse(sessionStorage.getItem('books'))
                    let bookItem =
                    _this.$router.push('/chart')
                  }
                  else {
                    alert("添加失败")
                  }
                })
            //  _this.$router.push('/login')
            }
          })
      },
      toUser() {
        this.$router.push('/')
      }
    },
    created() {
      this.getMessage()
    }
  }
</script>
