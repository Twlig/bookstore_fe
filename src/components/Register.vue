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
            <li @click="submitMess()" class="input"><input type="submit" class="special" value="提交" /></li>
            <li class="input"><input type="reset" class="alt" value="重置" /></li>
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
  </div>
</template>
<script>
  export default {
    name: 'Register',
    data() {
      return {
        baseUrl: '',
        userid: '',
        userpassword: ''
      }
    },
    methods: {
      toMain() {
        this.$router.push('/')
      },
      submitMess() {
        data = {
          user_num: this.userid,
          user_pwd: this.userpassword
        }
        this.axios.post('/api/register',data)
          .then(function (res) {
            
          })
          .catch(function (err) {
            
          })
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
</style>
