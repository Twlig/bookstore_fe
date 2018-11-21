<template>
  <div class="landing">
    <header id="header" class="alt">
      <a href="user.html">首页</a>
    </header>
    <section id="four" class="wrapper style2 special">
      <div class="inner">
        <header class="major narrow">
          <h2>登录</h2>
        </header>
        <br>
        <form action="main.html" method="POST">
          <div class="container 25%">
            <div class="row uniform 100%">
              <div class="12u 12u$(xsmall)">
                <input class="login" name="name" placeholder="Set Name" type="text" />
              </div>
            </div>
          </div>
          <div class="container 25% formarea">
            <div class="row uniform 100%">
              <div class="12u 12u$(xsmall)">
                <input class="password" name="password" placeholder="Set Password" type="password" />
              </div>
            </div>
          </div>
          <ul class="actions">
            <li><input type="submit" class="special" value="提交" /></li>
            <li><input type="reset" class="alt" value="重置" /></li>
          </ul>
        </form>
        <div >
          <a href="register.html">没有账号，现在注册</a>
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
    data() {
      return {

      }
    },
    methods: {
      getMess() {
        this.axios.get()
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
</style>
