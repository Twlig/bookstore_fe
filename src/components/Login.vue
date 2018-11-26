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
            <li><input @click="login()" type="submit" class="special" value="提交" /></li>
            <li><input @click="reset()" type="reset" class="alt" value="重置" /></li>
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
  </div>
</template>
<script>
  export default {
    name:'Login',
    data() {
      return {
        userid: '',
        userpassword: ''
      }
    },
    methods: {
      toMain() {

      },
      toRegister() {
        this.$router.push('/register')
      },
      login() {
        let data = {
          user_num: this.userid,
          user_pwd: this.userpassword
        }
        this.axios.post('/api/login',data)
          .then(function (res) {
            if(res.data.status == 1) {
              localStorage.setItem("token",res.data.data.token)
              this.$router.push('/main')
            }
            else {
              alert(res.data.message)
            }
          })
          .catch(function (err) {
          })
      },
      reset() {
        this.userid = ''
        this.userpassword = ''
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
</style>
