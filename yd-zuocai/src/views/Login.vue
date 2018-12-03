<template>
    <div class="Login">
        <div class="login_top">
            <div class="login_top_touxiang"></div>
            <div class="login_top_dlzc" v-show="fal">
                <router-link to="/login/login_dl">登录/注册</router-link>
            </div>
            <div class="login_top_jbxx" v-show="fal1">
                <div class="phone">{{phone}}</div>
                <div class="yue_jifen">
                    <span>余额：</span><span>0.00</span>&nbsp;&nbsp;
                    <span>积分：</span><span>52</span>
                </div>
                <div class="zhanghuguanli">
                <span>账户管理</span>
                <span class="mui-icon mui-icon-forward"></span>
                </div>
            </div>
            <div class="shezhi">
                <span class="mui-icon mui-icon-gear" style="font-size:30px;color:#fff"></span>
            </div>
        </div>
        <div class="login_dingdan">
            <div class="wddd">
                <div class="wddd_text_left">我的订单</div>
                <div class="wddd_text_right">查看全部<span class="mui-icon mui-icon-arrowright" style="font-size:14px;"></span></div>
            </div>
            <div class="wdddxx">
                <ul>
                    <li>
                        <div v-html="yangshi1"></div>
                        <p style="display:block;margin-top:-5px;">待付款</p>
                    </li>
                    <li>
                        <div v-html="yangshi2"></div>
                        <p style="display:block;margin-top:-5px;">待发货</p>
                    </li>
                    <li>
                        <div v-html="yangshi3"></div>
                        <p style="display:block;margin-top:-5px;">待收货</p>
                    </li>
                    <li>
                        <div v-html="yangshi4"></div>
                        <p style="display:block;margin-top:-5px;">待评价</p>
                    </li>
                    <li>
                        <div v-html="yangshi5"></div>
                        <p style="display:block;margin-top:-5px;">退款/退货</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bibei">
            <div class="bibei_d1">
                <span class="bibei_text">必备工具</span>
            </div>
            <div class="bibei_d2">
                <ul>
                    <li v-for="item in images">
                        <div><img :src="item.src" style="width:36px;height:36px"></div>
                        <p v-text="item.title"></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'login',
  data:function(){
    return {
        yangshi1:`<span class="mui-icon-extra mui-icon-extra-prech" style="font-size:37px"></span>`,
        yangshi2:`<span class="mui-icon-extra mui-icon-extra-trend" style="font-size:37px"></span>`,
        yangshi3:`<span class="mui-icon-extra mui-icon-extra-express" style="font-size:37px"></span>`,
        yangshi4:`<span class="mui-icon mui-icon-compose" style="font-size:37px"></span>`,
        yangshi5:`<span class="mui-icon mui-icon-info" style="font-size:37px"></span>`,
        images:[{src:"http://127.0.0.1:3000/img/login_img/zhxx_yd.png",title:"账户信息"},{src:"http://127.0.0.1:3000/img/login_img/wdzc_yd.png",title:"我的资产"},{src:"http://127.0.0.1:3000/img/login_img/wdsc_yd.png",title:"我的收藏"},{src:"http://127.0.0.1:3000/img/login_img/shdz_yd.png",title:"收货地址"},{src:"http://127.0.0.1:3000/img/login_img/qd_yd.png",title:"签到"},{src:"http://127.0.0.1:3000/img/login_img/cj_yd.png",title:"抽奖"},{src:"http://127.0.0.1:3000/img/login_img/yhj_yd.png",title:"优惠券"}],
        fal:true,
        fal1:false,
        phone:"15735651516"
    }
  },
  created(){
     var phone=sessionStorage.getItem("phone");
     this.phone=phone;
      console.log(phone)
      /*如果没有该手机号则自动去往登录页*/
      if(!phone){
          this.$router.push("/login/login_dl")
      }
      if(phone){
          this.fal=false;
          this.fal1=true;
      }else{
          this.fal=true;
          this.fal1=false;
      }
  },
  mounted(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  } 
}   
</script>
<style scoped>
.Login{
    width:100%;

    /*border:1px solid red;*/

}
.login_top{
    width:100%;
    height:130px;
    border:1px solid rgba(108,160,237,0);
    background:rgba(108,160,237,0.6);
}
.login_top_touxiang{
    width:63px;
    height:63px;
    margin-left:22px;
    margin-top:41px;
    border-radius:50%;
    background:url("http://127.0.0.1:3000/img/user_img/touxiang.jpg");
    background-size:100% 100%
}
.login_top_dlzc{
    width:100px;
    height:40px;
    margin-top: -41px;
    margin-left: 81px;
    color:#fff;
    font-size:16px
}
.shezhi{
    float:right;
    margin-top:-108px;
    margin-right:8px;
}
.login_dingdan{
  width:100%;
  height:119px;
  background:#fff;
  padding-top:-5px;
}
.wddd{
  width:100%;
  height:39px;
  border-bottom:1px solid rgba(235,235,235,1);
  text-align:left;
  font-size:16px;
}
.wddd_text_left{
    margin-left:10px;
    padding-top:11px;
    padding-bottom:6px;
}
.wddd_text_right{
    font-size:14px;
    float:right;
    margin-left:4px;
    margin-top: -26px;
    color:#ccc;
}
.wdddxx{
    width:100%;
    height:78px;
}
.wdddxx ul li{
    width:20%;
    height:78px;
    float:left;
}
.wdddxx ul li div{
    width:35px;
    height:35px;
    margin:12px auto;
}
.bibei_d1{
    width: 100%;
    height: 40px;
    background: #fff;
    margin-top: 9px;
    border-bottom:1px solid rgba(235,235,235,0.9)
}
.bibei{
    width:100%;
    height:200px;
}
.bibei_text{
    font-size:16px;
    float:left;
    margin-top: 9px;
    margin-left: 9px;
}
.bibei_d2{
    width:100%;
    height:160px;
}
.bibei_d2 ul li{
    float:left;
    width:25%;
    height:80px;
    background: #fff;
    border-bottom:1px solid rgba(235,235,235,0.9)
}
.bibei_d2 ul li div img{
    width:36px;
}
.bibei_d2 ul li div{
    margin-top:7px;   
}
.login_top_jbxx{
    width: 269px;
    height: 49px;
    position: absolute;
    top: 53px;
    left: 99px;
    font-size: 16px;
    color: #fff;
}
.login_top_jbxx .phone{
    width: 128px;
    height: 20px;
    font-size: 20px;
}
.login_top_jbxx .yue_jifen{
    width: 148px;
    height: 20px;
    font-size: 14px;
    text-align: left;
    line-height: 20px;
    margin-top:7px;
}
.zhanghuguanli{
    width: 66px;
    height: 20px;
    font-size:12px;
    float: right;
    margin-top: -32px;
}
.mui-icon-forward{
    font-size:15px !important;
}
</style>