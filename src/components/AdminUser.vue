<template>
  <div>
    <br>
    <section id="main" class="wrapper">
      <div class="container">
        <div style="" class="row">
          <div class="col-md-1"></div>
          <input class="col-md-8 input1" type="text" name="name" id="name" placeholder="Name" v-model="user_name" />
          <div style="padding: 0" class="col-md-2">
            <div class="button1" @click="select()">查询</div>
          </div>
          <div class="col-md-1"></div>
        </div>
        <hr>
        <div class="table-wrapper">
          <table>
            <thead>
            <tr>
              <th>用户名id</th>
              <th>用户名</th>
              <th>身份</th>
              <td>查询订单</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in userInfo">
              <td>{{item.user_id}}</td>
              <td>{{item.user_name}}</td>
              <td v-if="item.user_type == 0">普通用户</td>
              <td v-if="item.user_type == 1">管理员</td>
              <td><div class="12u$">
                <span @click="toList(item.user_name)" class="new1">查询该用户订单</span>
              </div></td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
      <br>
    </section>
    <hr>
    <br>
    <br>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        baseUrl: "http://120.79.211.126:8080/bookstore",
        user_name: '',
        userInfo: [],
        user: ''
      }
    },
    methods: {
      select() {
        if(this.user_name == '') {
          this.axios.get(this.baseUrl + "/api/searchUser")
            .then(res => {
              if(res.data.status == 1) {
                this.userInfo = res.data.data
              }
              else {
                alert("查询失败")
              }
            })
        }
        else {
          this.axios.get(this.baseUrl + "/api/searchUser?user_name=" + this.user_name)
            .then(res => {
              if(res.data.status == 1) {
                this.userInfo = res.data.data
              }
              else {
                alert("查询失败")
              }
            })
        }
      }
    }
  }
</script>
<style scoped>
  .button1 {
    width: 100%;
    line-height: 49px;
    text-align: center;
    background-color: #25383B;
    color: #fff;
    font-size: 17px;
    border: 1px #25383B solid;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .input1 {
    line-height: 50px;
    border: 1px #25383B solid;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    outline: none;
  }
  .new1 {
    display: inline-block;
    width: 140px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    background-color: #51BAA4;
    border: 1px #51BAA4 solid;
    border-radius: 20px;
    color: #fff;
  }
</style>
