<template>
  <div class="landing">
    <header id="header" class="alt">
      <a @click="toMain()">首页</a>
    </header>

    <section id="four" class="wrapper style2 special">
      <div class="inner">
        <header class="major narrow">
          <h2>注册</h2>
        </header>
        <br>
        <form class="form">
          <div class="container 25% formarea">
            <div class="row uniform 100%">
              <div class="12u 12u$(xsmall)">
                <input v-model="userid" class="register" name="name" placeholder="Set Name" type="text" />
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
          <br>
          <div class="container 25% formarea1">
            <div class="10u$ 12u$(small)">
              <input type="checkbox" id="human" name="human" checked>
              <label for="human">我已阅读并同意《注册条款》</label>
            </div>
          </div>
          <ul class="actions formarea2">
            <li @click="submitMess()" class="input"><input style="border: none;outline: none" type="reset" class="special" value="提交" /></li>
            <li @click="reset()" class="input"><input style="border: none;outline: none" type="reset" class="alt" value="重置" /></li>
          </ul>
        </form>
      </div>
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
    name: 'Register',
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
      submitMess() {
        let data = {
          user_num: this.userid,
          user_pwd: this.userpassword
        }
        let _this = this
        if(this.userid == '') {
          _this.message = "用户名不能为空"
          this.display()
        }
        else if(this.userpassword == '') {
          this.message = "密码不能为空"
          this.display()
        }
        else {
          this.axios.post( this.baseUrl+'/api/register',data)
            .then(function (res) {
              _this.message = res.data.message
              _this.display()
              _this.$router.push("/login")
            })
            .catch(function (err) {
              _this.message = "请求失败"
              _this.display()
            })
        }
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
    }
  }
</script>
<style scoped>
  .register {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .password {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  /*.form {*/
    /*position: relative;*/
    /*width: 36%;*/
    /*left: 50%;*/
    /*margin-left: -18%;*/
  /*}*/
  .formarea {
    /*position: absolute;*/
    width: 36%;
    margin-top: 20px;
  }
  .formarea1 {
    width: 36%;
    margin-top: 10px;
    text-align: left;
  }
  .formarea2 {
    margin-top: 30px;
  }
  .formarea2 .input {
    width: 18%;
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
  .aa {
    background-color: #51BAA4;
  }
</style>
