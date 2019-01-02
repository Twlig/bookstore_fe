<template>
  <div>
    <header style="position: relative" id="header" class="skel-layers-fixed">
      <h1><a @click="visible()">Menu</a></h1>
      <span class="title">{{title}}</span>
    </header>
    <nav id="nav" :class="[isVisible ?  'visible' : '']">
      <ul style="padding-top: 30px" class="links">
        <li @click="iswho(1)"><a>书籍管理</a></li>
        <li @click="iswho(2)"><a>用户查询</a></li>
        <li @click="iswho(3)"><a>订单查询</a></li>
      </ul>
      <a class="close" @click="isVisible = !isVisible" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></a>
    </nav>
    <admin-book class="center" v-if="num == 1"></admin-book>
    <admin-user v-if="num == 2"></admin-user>
    <admin-list v-if="num == 3" :userName="username"></admin-list>
    <footer id="footer" style="width: 100%;position: relative;bottom:0;left: 0;">
      <div class="inner">
        <ul class="copyright">
          <li>Design: hwb zzy</li>
        </ul>
      </div>
    </footer >
  </div>
</template>
<script>
  import AdminBook from './AdminBook'
  import AdminList from './AdminList'
  import AdminUser from './AdminUser'
  export default {
    name: 'Admin',
    data() {
      return {
        isVisible: false,
        num: 1,
        title: "书籍管理",
        username: ''
      }
    },
    components: {
      "admin-book": AdminBook,
      "admin-list": AdminList,
      "admin-user": AdminUser
    },
    methods: {
      visible() {
        this.isVisible = !this.isVisible
      },
      iswho(index) {
        this.num = index
        if(this.num == 1) {
          this.title = "书籍管理"
        }
        if(this.num == 2) {
          this.title = "用户查询"
        }
        if(this.num == 3) {
          this.title = "订单查询"
        }
      }
    },
    created() {
        this.num = this.$route.query.num || 1;
        if(this.$router.query.length == 2) {
          //this.
        }
    },
    watch: {
      '$route' (to, from) {
        this.num = to.query.num == undefined ? 1 : to.query.num
        this.username = to.query.username
      }
    }
  }
</script>
<style scoped>
  .center {
    width: 600px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 50px;
    padding-top: 50px;
  }
  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    color: #fff;
  }
</style>
