<template>
    <div class="login_zc">
        <div class="login_zc_top">
            <yd-navbar fontsize="16px"title="会员注册" height="40px" border-color="#fff">
                <router-link to="/login/login_dl" slot="left">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>
                <router-link to="/login/login_dl" slot="right">
                    <yd-navbar title="登录"></yd-navbar>
                </router-link>
            </yd-navbar>
        </div>
        <div class="login_zc_center">
            <div class="login_zc_center_input1">
                <input type="number" value placeholder="手机号" v-model="phone">
                <div>
                    <yd-sendcode slot="right" 
                         v-model="start1" 
                         @click.native="sendCode1" 
                         type="warning"
                    ></yd-sendcode>
                </div>
            </div>
            <div class="login_zc_center_input1" style="margin-top:5px;">
                <input type="number" value placeholder="短信验证码">
            </div>
            <div class="login_zc_center_input1" style="margin-top:5px;">
                <input type="number" value placeholder="6-8位汉字/数字/用户昵称" v-model="uname">
            </div>
            <div class="login_zc_center_input1" style="margin-top:5px;">
                <input type="number" value placeholder="6位数字密码" v-model="upwd">
            </div>
            <div class="login_zc_center_input1" style="margin-top:5px;">
                <input type="number" value placeholder="重新确认密码" v-model="cfupwd">
            </div>
            <div class="login_zc_center_input1" style="margin-top:5px;">
                <input type="number" value placeholder="图形验证码" v-model="tuxingyz">
                <div>
                    <img src="http://127.0.0.1:3000/img/register_img/imgcode.jpg" class="yzm">
                </div>
            </div>
            <p><img src="http://127.0.0.1:3000/img/login_img/tiaokuan.png" class="dg"><span class="tk">我已同意遵守佐卡伊珠宝网条款</span></p>
            <div>
                <yd-button-group>
                    <yd-button  color="#fff" @click.native="register()" size="large" type="hollow" class="btnn">立即登陆</yd-button>
                </yd-button-group>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'login_zc',
  data:function(){
    return {
        start1: false,
        phone:"",/*input手机号*/
        uname:"",/*input密码*/
        upwd:"",/*密码*/
        cfupwd:"",/*重复密码*/
        tuxingyz:"",/*图形验证码*/
    }
  },
  methods:{
      /*手机验证码获取*/
      sendCode1() {
        this.$dialog.loading.open('发送中...');
        setTimeout(() => {
            this.start1 = true;
            this.$dialog.loading.close();
            this.$dialog.toast({
                mes: '已发送',
                icon: 'success',
                timeout: 1500
            });
          }, 1000);
        },
      /*用户注册*/
      register(){
          var phone=this.phone;
          var uname=this.uname;
          var upwd=this.upwd;
          var cfupwd=this.cfupwd;
          var tuxingyz=this.tuxingyz;
          //*手机验证规则 */
          var shouji =/^[1][0-9][0-9]{9}$/; 
          //*用户昵称正则*/
          var nicheng=/^[\w\u4e00-\u9fa5]{6,8}$/
          //*用户密码正则*/
          var mima=/^\d{6,10}$/;
          if(!shouji.test(phone)){
            this.$dialog.alert({mes: '请填写正确11位手机号'});
          }else if(!nicheng.test(uname)){
            this.$dialog.alert({mes: '请检查您的昵称，6-8位汉字/数字/英文字母'});
          }else if(!mima.test(upwd)){
            this.$dialog.alert({mes: '请检查您的密码，6-8位'});
          }else if(cfupwd!=upwd){
            this.$dialog.alert({mes: '重复密码有误，请重新输入'});
          }else if(tuxingyz!=4371){
            this.$dialog.alert({mes: '验证码有误，请重新输入'});
          }else{
             this.axios.post(
                "http://127.0.0.1:3000/user/registercf",
                    Qs.stringify({
                     phone:this.phone,
                })
                ).then(res=>{
                if(res.data=="该账号已注册,请重新输入"){
                this.$dialog.alert({mes: '手机号已注册，请重新输入'});
            }else{
            this.axios.post(
            "http://127.0.0.1:3000/user/register",
                Qs.stringify({
                phone:this.phone,
                uname:this.uname,
                upwd:this.upwd,
                cfupwd:this.cfupwd,
                tuxingyz:this.tuxingyz,
                })
            ).then(res=>{
                console.log(res.data)
                if(res.data=="注册成功"){
                this.$dialog.alert({mes: '注册成功'});
                setTimeout(()=>{
                    this.$router.push("/login")
                },1000)   
            }
            })
            }
        })
        }  
      }
    },
  created(){
  },
  mounted(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }  
}   
</script>
<style scoped>
.btnn{
    background-color:#A6C6F4 !important;
    font-weight:bold
}
.login_zc_center{
    width:100%;
    height:200px;
    margin-top:12px;
}
.login_zc_top{
    width:100%;
    height:40px;
}
.login_zc_center_input1{
    width:100%;
    height:46px;
}
.login_zc_center_input1 input{
    width:96%;
    height:40px;
    border-radius:4px;
}
.login_zc_center_input1  .yd-btn{
    width:85px;
    height:27px;
    border-radius:5px;
    background:#A6C6F4;
    display:block;
    float:right;
    margin-top:-49px;
    margin-right: 16px;
}
.yzm{
    display: block;
    /* float: right; */
    margin-top: -46px;
    margin-left: 310px;
    position: absolute;
}
.dg{
    width:25px;height:25px;position:absolute;left:5px;margin-top:-2px
}
.tk{
    font-size:12px;margin-left:-147px;
}

</style>