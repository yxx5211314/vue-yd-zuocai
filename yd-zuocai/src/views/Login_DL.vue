<template>
    <div class="login_dl">
        <div class="login_dl_top">
            <yd-navbar fontsize="16px"title="会员登录" height="40px" fixed>
                <router-link to="/login" slot="left">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>
            </yd-navbar>
        </div>
        <div class="login_dl_bottom">
            <div class="login_dl_text">
                <div>
                    <span>账号</span>
                    <input type="text" name="text" placeholder="手机号码" value v-model="phone"  style="width:300px;height:46px;border:none;">
                </div>
                <div>
                    <span>密码</span>
                    <input type="number" name="text" placeholder="6位纯数字密码" value v-model="upwd"  style="width:300px;height:46px;border:none;">
                </div>
            </div>
            <p class="login_dl_text_right1">
                <router-link to="/login/login_zc">
                手机快速注册
                </router-link>
            </p>
            <p class="login_dl_text_right2">
                <router-link to="">
                找回密码
                </router-link>
            </p>

             <yd-button-group>
                <yd-button  color="#fff" @click.native="login()" size="large" type="hollow">立即登陆</yd-button>
             </yd-button-group>
        </div>
    </div>
</template>
<script>
export default {
  name: 'login_dl',
  data:function(){
    return {
       phone:"",
       upwd:"",
    }
  },
  methods:{
      /*用户登录*/
      login() {
        var phone=this.phone;
        var upwd=this.upwd;
        var mima=/^\d{6,10}$/;//密码验证规则 
        var shouji =/^[1][0-9][0-9]{9}$/; //手机验证规则  
        if(!shouji.test(phone)){
            this.$dialog.alert({mes: '请填写正确11位手机号'});
        }else if(!mima.test(upwd)){
            this.$dialog.alert({mes: '请填写正确的6位密码'});
        }else{
            this.axios.post(
            "http://127.0.0.1:3000/user/login",
            Qs.stringify({
            phone:phone,
            upwd:upwd,
            email:"8499111@qq.com"
            })
        ).then(res=>{
            if(res.data.xinxi=="登录成功"){
            this.$dialog.alert({mes: '登录成功'});
            //将用户名和用户ID放入sessionStorage
            sessionStorage.setItem('phone',res.data.xinxi1);
            sessionStorage.setItem('uid',res.data.uid);
             setTimeout(()=>{
                this.$router.push("/login")
            },1000)   
            }else if(res.data.xinxi=="登录失败"){
            this.$dialog.alert({mes: '登录信息有误，请检查账号密码后重新输入'});
            }
        })
        }
    },
  },
  mounted(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }  
}   
</script>
<style scoped>
.yd-confirm-ft>a>.yd-confirm-btn{
    color:#A6C6F4 !important;
}
.login_dl{
    width:100%;
    background:#fff;
}
.login_dl_top{
    width:100%;
    height:40px;
}
.login_dl_bottom{

    height:200px;
}
.login_dl_text div{
    width:100%;
    border-bottom:1px solid rgba(235,235,235,0.5)
}    
.login_dl_text div span{
    font-size:16px
}
.login_dl_text_right1,.login_dl_text_right2{
    margin-top:6px;
    font-size:12px;
    text-align:right;
    margin-right:10px;
}
.login_dl_ljdl{
    width:90%;
    height:37px;
    margin:11px auto;
    border-radius:5px;
    background:#A6C6F4;
}
.login_dl_ljdl span{
    font-size:16px;
    height:37px;
    color:#fff;
    text-align:center;
    line-height:37px;
}
.yd-btn-block{
    background:#A6C6F4 !important
}
</style>