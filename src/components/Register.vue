<template>
  <div class="landing">
    <header id="header" class="alt">
      <a href="user.html">首页</a>
    </header>

    <section id="four" class="wrapper style2 special">
      <div class="inner">
        <header class="major narrow">
          <h2>注册</h2>
        </header>
        <br>
        <form action="main.html" method="POST">
          <div class="container 25%">
            <div class="row uniform 100%">
              <div class="12u 12u$(xsmall)">
                <input class="register" name="name" placeholder="Set Name" type="text" />
              </div>
            </div>
          </div>
          <div class="container 25%">
            <div class="row uniform 100%">
              <div class="12u 12u$(xsmall)">
                <input class="password" name="password" placeholder="Set Password" type="password" />
              </div>
            </div>
          </div>
          <br>
          <div class="container 25%">
            <div class="10u$ 12u$(small)">
              <input type="checkbox" id="human" name="human" checked>
              <label for="human">我已阅读并同意《注册条款》</label>
            </div>
          </div>
          <ul class="actions">
            <li><input type="submit" class="special" value="提交" /></li>
            <li><input type="reset" class="alt" value="重置" /></li>
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
<style scoped>
  .register {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .password {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
