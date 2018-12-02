<template>
  <div class="landing">
    <header id="header" class="alt">
      <h1><a @click="visible()" >书籍目录</a></h1>
      <div v-if="!isLogin">
        <a @click="toChart()">我的购物车</a>
        <a @click="toLogin()">登录</a>
        <a @click="toRegister()">注册</a>
      </div>
      <div v-if="isLogin">
        <a @click="toChart()">我的购物车</a>
        <a @click="toList()">我的订单</a>
        <a @click="deleteLogin()">注销</a>
      </div>
    </header>

    <!-- 导航 -->
    <nav id="nav" :class="[isVisible ?  'visible' : '']">
      <ul class="links">
        <li v-for="(item, index) in category" @click="getMessage(index)"><a href="#">{{item.name}}</a></li>
      </ul>
      <a class="close" @click="isVisible = !isVisible" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></a>
    </nav>

    <!-- bookstore -->
    <section id="three" class="wrapper style3 special">
      <div class="inner">
        <header class="major narrow	">
          <h2>BOOKSTORE</h2>
        </header>
      </div>
    </section>
    <br>
    <!-- 书籍展示 -->
    <div class="container">
      <section class="row">
        <div style="position: relative" class="col-md-2" @click="pre()"><img style="width: 119px;height: 92px;position: absolute;top:50%;transform: translateY(-50%)" src="../assets/images/Q.png" alt=""/></div>
        <div class="col-md-8">
          <div class="container-fluid">
            <div class="row" style="margin-bottom: 20px;">
              <div style="padding-top: 30px" v-for="(item, index) in bookList_de" class="col-md-3"><span><a @click="toInformation(index)"><img :src=item.smimg alt="" width="100%"/></a>
              <span>{{item.name}}</span>
              </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2" style="position: relative" @click="next()"><img style="width: 119px;height: 92px;position: absolute;top:50%;transform: translateY(-50%)" src="../assets/images/P.png" alt=""/></div>
      </section>
    </div>
    <br>
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
    name: "Main",
    data() {
      return {
        baseUrl: "http://120.79.211.126:8080/bookstore",
        baseUrl2: "http://119.29.150.121:8080/bookstore",
        isLogin: false,
        isVisible: false,
        category: [],
        bookList:[],
        bookList_de:[],
        start: 0,
        end: 8,
        length: 0
      }
    },
    methods: {
      getMessage(index) {
        this.axios.get(this.baseUrl + "/api/getShopCarWithToken")
          .then((res) => {
            if(res.data.status == 1) {
              this.isLogin = true
            }
            else {
              this.isLogin = false
            }
          })
        this.axios.get(this.baseUrl2 + "/api/getSpecialKind?c_id=" + this.category[index].id)
          .then(res => {
            console.log(res.data)
            this.bookList = res.data.data
            this.bookList_de = res.data.data.slice(this.start,this.end)
            this.length = res.data.data.length
            console.log(this.end)
          })
      },
      visible() {
        this.isVisible = !this.isVisible
      },
      getCategory() {
        this.axios.get(this.baseUrl + "/api/getCategory")
          .then((res) => {
            if(res.data.status == 1) {
              this.category = res.data.data
              this.getMessage(0)
            }
            else {
              alert(res.data.message)
            }
          })
      },
      next() {
        if(this.end <= (this.length - 1)) {
          this.start = this.start + 8
          this.end = this.end + 8
          if(this.end < (this.length - 1)) {
            this.bookList_de = this.bookList.slice(this.start,this.end)
            console.log(this.bookList_de)
          }
          else {
            this.bookList_de = this.bookList.slice(this.start,this.length)
            console.log(this.bookList_de)
          }
        }
      },
      pre() {
        if(this.start >= 8) {
          this.start = this.start - 8
          this.end = this.end - 8
          console.log("start:" + this.start)
          this.bookList_de = this.bookList.slice(this.start,this.end)
          console.log(this.bookList_de)
        }
      },
      toLogin() {
        this.$router.push('/login')
      },
      toRegister() {
        this.$router.push('/register')
      },
      toInformation(index) {
        this.$router.push('/information?id=' + this.bookList_de[index].id)
      },
      toChart() {
        this.$router.push('/chart')
      },
      toList() {
        this.$router.push('/list')
      },
      deleteLogin() {
        localStorage.removeItem('token')
        this.isLogin = false
      }
    },
    created() {
      this.getCategory()
    }
  }
</script>
