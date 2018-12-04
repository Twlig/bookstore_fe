<template>
  <div class="landing">
    <!-- Header -->
    <header id="header">
      <h1><a @click="toUser()">BOOKSTORE</a></h1>
    </header>
    <section id="main" class="wrapper">
      <div class="container">

        <div class="table-wrapper">
          <table>
            <thead>
            <tr>
              <th colspan="2" style="text-align: center">书名</th>
              <th>信息</th>
              <th>价格</th>
              <th>数量</th>
              <th>删除</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in bookList">
              <td style="position: relative">
                <input type="checkbox" :id="`copy${index}`" :value="index" name="copy" v-model="checkBook">
                <label style="position: absolute;width: 30px;height: 30px;top: 50%;margin-top: -15px;" :for="`copy${index}`"></label>
              </td>
              <td>
                <img :src=item.book_smimg alt="" width="140px" height="150px"/>
                <div>{{item.book_name}}</div>
              </td>
              <td>  作者：{{item.book_author}} 出版社：{{item.book_publishing}}</td>
              <td>{{item.book_price}}</td>
              <th class="font" style="font-size: 20px"><img @click="reduce(index)" src="../assets/images/reduce.png" alt="" width="20px" height="20px"/>&nbsp;{{item.book_count}}&nbsp;<img @click="add(index)" src="../assets/images/add.png" alt="" width="20px" height="20px"/></th>
              <td><a @click="deleteL(index)" href="#" class="button alt small">删除</a></td>
            </tr>
            </tbody>

          </table>
        </div>
        <div class="row">
          <div class="3u 6u(small) 12u$(xsmall)">
            <ul class="actions vertical">
            </ul>
          </div>
          <div class="3u 6u$(small) 12u$(xsmall)">
            <ul class="actions vertical small">
            </ul>
          </div>
          <div class="3u 6u(small) 12u$(xsmall)">
            <ul class="actions vertical">
            </ul>
          </div>
          <div class="3u$ 6u$(small) 12u$(xsmall)">
            <ul class="actions vertical small">
              <li><a @click="toList()" class="button special small fit">提交订单</a></li>
            </ul>
          </div>
        </div>

      </div>
      <hr />
    </section>

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
    name: 'Chart',
    data() {
      return {
        baseUrl: "http://120.79.211.126:8080/bookstore",
        baseUrl2:"http://119.29.150.121:8080/bookstore",
        bookList:[],
        isLogin: false,
        checkBook: [],
        message: ""
      }
    },
    methods: {
      getMessage() {
        let _this = this
        this.axios.get(this.baseUrl + "/api/getShopCarWithToken")
          .then(res => {
            if(res.data.status == 1) {
              _this.bookList = res.data.data
            }
            else {
              this.message = res.data.message
              this.display()
            }
          })
      },
      getMessageWithoutToken() {
        this.axios.get(this.baseUrl2 + "/api/viewShopCar")
          .then(res => {
            if(res.data.status == 1) {
              this.bookList = res.data.data
            }
            else{
              if(res.data.status == -1) {
                this.message = res.data.message
                this.display()
              }
              else {
               this.message = res.data.message
                this.display()
              }
            }
          })
      },
      getStatus() {
        this.axios.get(this.baseUrl + "/api/getShopCarWithToken")
          .then(res => {
           // console.log("status:" + res.data.status)
            if(res.data.status == 1) {
              this.isLogin = true
              this.getMessage()
            }
            else {
              // this.getMessageWithoutToken()
              this.message = "未登录，无法查看"
              this.display()
            }
          })
      },
      toUser() {
        this.$router.push('/')
      },
      toList() {
        //console.log(this.checkBook.length)
        let data = []
        for(let i = 0; i < this.checkBook.length;i++) {
          data.push({
            book_id: this.bookList[this.checkBook[i]].book_id.toString(),
          })
        }
         let data1 = {
          isLog: 1,
          user_name: "6100116006",
          book_idArr: data
        }
        let _this = this
        this.axios.post(this.baseUrl2 + "/api/submitOrders",data1)
          .then(res => {
            if(res.data.status == 1) {
              _this.message = "提交成功，即将跳转到登录页面"
              this.display()
              setTimeout(function () {
                _this.$router.push('/list')
              },2000)
            }
            else {
              _this.message = res.data.message
              _this.display()
            }
          })
      },
      deleteL(index) {
        let data = {
          book_id: this.bookList[index].book_id.toString()
        }
        this.axios.post(this.baseUrl + "/api/deleteCarBook",data)
          .then(res => {
            if(res.data.status == 1) {
              this.bookList.splice(index, 1)
            }
            else {
             this.message = "删除失败"
              this.display()
            }
          })
      },
      reduce(index) {
         if(this.bookList[index].book_count <= 1 ) {
           this.deleteL(index)
         }
         else {
           let data = {
             book_id: this.bookList[index].book_id.toString(),
             type: -1
           }
           this.axios.post(this.baseUrl + "/api/updateCarBookCount",data)
             .then(res => {
               if(res.data.status == 1) {
                 this.bookList[index].book_count = this.bookList[index].book_count - 1;
               }
               else {
                this.message = "删除失败"
                 this.display()
               }
             })
         }
      },
      add(index) {
        let data = {
          book_id: this.bookList[index].book_id.toString(),
          type: 1
        }
        this.axios.post(this.baseUrl + "/api/updateCarBookCount",data)
          .then(res => {
            if(res.data.status == 1) {
              this.bookList[index].book_count = this.bookList[index].book_count + 1;
            }
            else {
              this.message = res.data.message
              this.display()
            }
          })
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
      this.getStatus()
    }
  }
</script>
<style scoped>
  td,
  th{
    text-align: center;
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
