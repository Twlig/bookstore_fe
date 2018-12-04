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
              <li><a @click="toChart()" class="button special small fit"><i class="fa fa-shopping-cart"></i> &nbsp;加入购物车(￥{{book.price}})</a></li>
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
    <div id="alert">{{message}}
      <img @click="displayNone()" src="../assets/images/close.png"/>
    </div>
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
        message: ""
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
                    this.message = res.data.message
                    this.display()
                    // _this.$router.push('/chart')
                  }
                  else {
                    this.message = res.data.message
                    this.display()
                  }
                })
            }
            else {
              this.message = "没有登录无法添加购物车"
              this.display()
            }
          })
      },
      toUser() {
        this.$router.push('/')
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
</style>
