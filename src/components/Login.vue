<template>
  <div class="landing">
    <header id="header" class="alt">
      <a @click="toMain()">首页</a>
    </header>
    <section id="four" class="wrapper style2 special">
      <div class="inner">
        <header class="major narrow">
          <h2>登录</h2>
        </header>
        <br>
        <form>
          <div class="container 25% formarea">
            <div class="row uniform 100%">
              <div class="12u 12u$(xsmall)">
                <input v-model="userid" class="login" name="name" placeholder="Set Name" type="text" />
              </div>
            </div>
          </div>
          <div class="container 25% formarea">
            <div class="row uniform 100%">
              <div class="12u 12u$(xsmall)">
                <input v-model="userpassword" class="password" name="password" placeholder="Set Password" type="password" />
              </div>
            </div>
          </div>
          <ul class="actions">
            <li><input style="outline: none" @click="login()" type="button" class="special" value="提交" /></li>
            <li><input style="outline: none" @click="reset()" type="button" class="alt" value="重置" /></li>
          </ul>
        </form>
        <div >
          <a @click="toRegister()">没有账号，现在注册</a>
        </div>
      </div>
      <br>
      <br>
      <br>
    </section>

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
    name:'Login',
    data() {
      return {
        baseUrl: "http://120.79.211.126:8080/bookstore",
        userid: '',
        userpassword: '',
        message: ''
      }
    },
    methods: {
      toMain() {
        this.$router.push('/')
      },
      toRegister() {
        this.$router.push('/register')
      },
      login() {
        let data = {
          user_num: this.userid,
          user_pwd: this.userpassword
        }
        let _this = this
        this.axios.post(this.baseUrl + '/api/login',data)
          .then(function (res) {
            if(res.data.status == 1) {
              localStorage.setItem("userName",_this.userid)
              localStorage.setItem("token",res.data.data.token)
              if(res.data.data.user_type == 0) {
                _this.$router.push('/')
              }
              if(res.data.data.user_type == 1) {
                _this.$router.push('/admin')
              }
            }
            else {
              _this.message = res.data.message
              _this.display()
            }
          })
          .catch(function (err) {
            _this.message = "请求失败"
            _this.display()
          })
      },
      reset() {
        this.userid = ''
        this.userpassword = ''
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
    }
  }

</script>
<style scoped>
  .login {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .password {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .formarea {
    margin-top: 10px;
    width: 36%;
  }
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
