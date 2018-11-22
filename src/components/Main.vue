<template>
  <div class="landing">
    <header id="header" class="alt">
      <h1><a href="#nav">书籍目录</a></h1>
      <div v-if="!isLogin">
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
    <nav id="nav">
      <ul class="links">
        <li><a href="#">小说</a></li>
        <li><a href="#">文学</a></li>
        <li><a href="#">传记</a></li>
        <li><a href="#">艺术</a></li>
        <li><a href="#">少儿</a></li>
        <li><a href="#">经济</a></li>
        <li><a href="#">管理</a></li>
        <li><a href="#">生活</a></li>
      </ul>
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
        <div class="col-md-2"><img src="../assets/images/Q.png" alt=""/></div>
        <div class="col-md-8">
          <div class="container-fluid">
            <div class="row" style="margin-bottom: 20px">
              <!--<div class="col-md-2"><span><a href="information.html"><img src="images/book.jpg" alt="" width="180px" height="200px"/></a></span></div>-->
              <!--<div class="col-md-2"><span><a href="information.html"><img src="images/book.jpg" alt="" width="180px" height="200px"/></a></span></div>-->
              <!--<div class="col-md-2"><span><a href="information.html"><img src="images/book.jpg" alt="" width="180px" height="200px"/></a></span></div>-->
              <!--<div class="col-md-2"><span><a href="information.html"><img src="images/book.jpg" alt="" width="180px" height="200px"/></a></span></div>-->
              <div class="col-md-3"><span><a @click="toInformation()"><img src="../assets/images/book.jpg" alt="" width="100%"/></a></span></div>
              <div class="col-md-3"><span><a @click="toInformation()"><img src="../assets/images/book.jpg" alt="" width="100%"/></a></span></div>
              <div class="col-md-3"><span><a @click="toInformation()"><img src="../assets/images/book.jpg" alt="" width="100%"/></a></span></div>
              <div class="col-md-3"><span><a @click="toInformation()"><img src="../assets/images/book.jpg" alt="" width="100%"/></a></span></div>
            </div>
            <div class="row">
              <div class="col-md-3"><span><a @click="toInformation()"><img src="../assets/images/book.jpg" alt="" width="100%"/></a></span></div>
              <div class="col-md-3"><span><a @click="toInformation()"><img src="../assets/images/book.jpg" alt="" width="100%"/></a></span></div>
              <div class="col-md-3"><span><a @click="toInformation()"><img src="../assets/images/book.jpg" alt="" width="100%"/></a></span></div>
              <div class="col-md-3"><span><a @click="toInformation()"><img src="../assets/images/book.jpg" alt="" width="100%"/></a></span></div>
            </div>
          </div>
        </div>
        <div class="col-md-2"><img style="width: 119px;height: 92px" src="../assets/images/P.png" alt=""/></div>
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
        isLogin: true
      }
    },
    methods: {
      toLogin() {
        this.$router.push('/login')
      },
      toRegister() {
        this.$router.push('/register')
      },
      toInformation() {
        this.$router.push('/information')
      },
      toChart() {
        this.$router.push('/chart')
      },
      toList() {
        this.$router.push('/list')
      },
      deleteLogin() {
        this.isLogin = false
      }
    }
  }
</script>
