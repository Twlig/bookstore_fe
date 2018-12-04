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
      <ul style="margin-top: 30px" class="links">
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
        <div style="position: relative;" class="col-md-2" @click="pre()">
          <img style="width: 80px;height: 80px;position: absolute;top:50%;margin-top: -40px;right: 0;" src="../assets/images/Q.png" alt=""/>
        </div>
        <div class="col-md-8">
          <div class="container-fluid">
            <div class="row" style="margin-bottom: 20px;">
              <div v-for="(item, index) in bookList_de" class="col-md-3"><span>
                <a @click="toInformation(index)"><img :src=item.smimg alt="" width="100%"/></a>
              <span>{{item.name}}</span>
              </span>
              </div>
            </div>
          </div>
        </div>
        <div style="position: relative;" class="col-md-2" @click="next()">
          <img style="width: 80px;height: 80px;position: absolute;top:50%;margin-top: -40px;left: 20px;" src="../assets/images/P.png" alt=""/>
        </div>
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
    <div id="alert">{{message}}
    <img @click="displayNone()" src="../assets/images/close.png"/>
    </div>
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
        length: 0,
        message: '',
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
            if(res.data.status == 1) {
              this.bookList = res.data.data
              this.bookList_de = res.data.data.slice(this.start,this.end)
              this.length = res.data.data.length
            }
            else {
              this.message = "请求失败"
              this.display()
            }
          })
          .catch(err => {
            this.message = "请求失败"
            this.display()
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
              this.message = res.data.message
              this.display()
            }
          })
          .catch(res => {
            this.message = "请求失败"
            this.display()
          })
      },
      next() {
        if(this.end <= (this.length - 1)) {
          this.start = this.start + 8
          this.end = this.end + 8
          if(this.end < (this.length - 1)) {
            this.bookList_de = this.bookList.slice(this.start,this.end)
          }
          else {
            this.bookList_de = this.bookList.slice(this.start,this.length)
          }
        }
      },
      pre() {
        if(this.start >= 8) {
          this.start = this.start - 8
          this.end = this.end - 8
          this.bookList_de = this.bookList.slice(this.start,this.end)
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
      this.getCategory()
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
