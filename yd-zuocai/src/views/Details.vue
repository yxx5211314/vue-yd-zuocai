<template>
    <div class="details_one"  >
      <yd-navbar title="欢迎光临佐卡伊商品详情" fixed height="40px" fontsize="16px" bgcolor="#A6C6F4" color="#fff">
          <router-link to="/product" slot="left" >
              <yd-navbar-back-icon color="#fff" font-size="16px"></yd-navbar-back-icon>
          </router-link>
          <a slot="right" @click="cartTo()">
              <yd-icon name="shopcart-outline" size="25px" color="#fff"></yd-icon>
              <div style="background:red;border-radius:50%;width:10px;position:absolute;width:17px; height: 17px;margin-top: -8px;margin-left: 4px;"><div v-text="shopping_count"></div></div>
          </a>
      </yd-navbar>
      <div class="details_d1">
        <div class="details_d1_one">
          <img :src="product.details_ld_pic" style="width:73%">
        </div>
        <div class="details_d1_two">
          <div class="details_d1_two_f1">
            <ul>
              <li>
                <div class="div1">
                  <span class="span_one" v-text="product.product_name"></span><br>
                  <span class="span_two" v-text="product.product_title"></span>
                </div>
                <div class="div2">
                  <span>宝贝评价：值得入手</span>
                </div>
              </li>
              <li>
                <div class="fq">
                    <div class="fq_mounth">3个月</div>
                    <div class="fq_mounth">6个月</div>
                    <div class="fq_mounth">12个月</div>
                </div>
                <div><span style="display:inline-block;margin-left:26px">月供：¥</span><span style="display:inline-block;margin-left:1px" v-text="product.details_fq_price_3"></span></div>
              </li>
            </ul>
            <div  class="details_d1_two_f1_fx">
              <img src="http://127.0.0.1:3000/img/details_img/fenxiang.png" style="width:29px;">
              <p>分享</p>
            </div>
          </div>
          <div class="details_d1_two_f2">
            <div class="details_d1_two_f2_price">
              &nbsp;&nbsp;&nbsp;<i>¥</i><span style="font-size:20px" v-text="product.product_price"></span>
              <div style="margin-top:-3px;margin-left:7px;">专柜价&nbsp;¥<s v-text="parseInt(product.product_price)+500"></s></div>
            </div>
          </div>
          <div class="details_d1_two_f3">
            <div class="details_d1_two_f3_one">
              <div style="margin-left:7px">快递：0.00</div>
              <div>近期销量：509件</div>
              <div style="margin-right:7px">商品评分：5星</div>
            </div>
            <div class="details_d1_two_f3_two" style="    margin-top:3px;">
              <div class="icon">
                <div>
                  <img   src="http://127.0.0.1:3000/img/details_img/zpbz.png"><span>尊贵名品</span>
                </div>
                <div>
                  <img   src="http://127.0.0.1:3000/img/details_img/zpbz.png"><span>正品保证</span>
                </div>
                <div>
                  <img   src="http://127.0.0.1:3000/img/details_img/zpbz.png"><span>厂家直销</span>
                </div>
              </div>
            </div>
          </div>
          <div class="details_d1_two_f4">
            <div class="details_d1_two_f4_GG">
              <span style="margin-left:2px;">已选</span>&nbsp;&nbsp;<span>1</span>件
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="details_d1_two_f4_compent">
              <div class="details_d1_two_f4_compent_title">
                <span>商品评论</span>
              </div>
              <div class="details_d1_two_f4_compent_cpt" v-for="s in 4">
                <img src="http://127.0.0.1:3000/img/details_img/compent.png">&nbsp;
                <span>解*****中</span>
                <p style="text-align:left;display:block;margin-top:12px;margin-left:7px;color:#000;">东西已经收到，就是不知道会不会掉色，有点小，和图片有差距，不过老公很满意。就那样吧</p>
                <p style="text-align:left">2017-10-26&nbsp;&nbsp;购买：情侣钻石戒指</p>
              </div>
              <p class="FGX"></p>
              <div class="compent_bottom"><div class="CKPL">查看全部评论</div></div>
            </div> 
          </div>
          <div class="details_d1_two_f5">
            <div class="div1">
              <img src="http://127.0.0.1:3000/img/details_img/sjtx.png" style="width:102px;float:left;padding-top:13px;padding-left:7px;">
              <p>佐卡伊珠宝店自营</p>
              <div style="margin-left:5px;width:100px;float:right;font-size:14px;">综合：<span style="color:red">5.00</span></div>
            </div>
            <div class="div2">
              <div class="div2_pl" style="margin-left:20px;">
                <div style="margin-top:7px;">商品&nbsp;<span style="color:red;">5&nbsp;/&nbsp;高</span></div>
                <div>224</div>
                <div style="color:#aaa;">全部宝贝</div>
              </div>
              <div class="div2_pl">
                <div style="margin-top:7px;">服务&nbsp;<span style="color:red;">5&nbsp;/&nbsp;高</span></div>
                <div>49</div>
                <div style="color:#aaa;">新品上架</div>
              </div>
              <div class="div2_pl" style="margin-right:20px;">
                <div style="margin-top:7px;">物流&nbsp;<span style="color:red;">5&nbsp;/&nbsp;高</span></div>
                <div>50</div>
                <div style="color:#aaa;">关注人数</div>
              </div>
            </div>
            <div class="div3">
              <div>联系卖家</div>
              <div>进店逛逛</div>
            </div>
          </div>
          <div class="product_show">
            <div v-for="s in product_img"><img :src="s"></div>
          </div>
         
          <div style="margin-top:-5px;margin-bottom:0px;">
                <img src="http://127.0.0.1:3000/img/index_img/yd_index_bottom.png" style="width:100%;height:100px">
        </div>
        <yd-backtop bottom="100px" name=""><img src="http://127.0.0.1:3000/img/product_img/fanhui.png" style="width:38px"></yd-backtop>  
        <div style="height:50px;"></div>
          <yd-tabbar fixed fontsize="14px">
            <yd-tabbar-item title="客服" link="#" style="border-right:1px solid rgba(230,230,230,1);">
                <yd-icon name="phone2" slot="icon" size="21px"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="店铺" link="#" style="border-right:1px solid rgba(230,230,230,1);">
               <img slot="icon" style="height: 21px; width:24px" src="http://127.0.0.1:3000/img/details_img/dp.png">
            </yd-tabbar-item>
            <yd-tabbar-item title="收藏" link="#" style="border-right:1px solid rgba(230,230,230,1);">
                <yd-icon name="star-outline" slot="icon" size="21px"></yd-icon>
            </yd-tabbar-item>
              <yd-button size="large" type="warning" style="width:80px;height: 50px;background:rgb(87,123,181,0.7);margin-top:0px;font-size:14px;" @click.native="show2 = true">
                加入购物车
              </yd-button>
              <yd-popup v-model="show2" position="bottom" height="70%">
                <yd-button type="warning" style="margin:30px;" @click.native="show2 = false">
                  <img src="http://127.0.0.1:3000/img/details_img/guanbi.png" class="guanbi">
                </yd-button>
                <div class="dianpu">
                  <img :src="product.product_img">
                </div>
                <div class="price_count_one">
                   <div style="width:100px;height:21px;"><span v-text="product.product_name"></span></div>
                  <span>￥：</span><span v-text="product.product_price"></span>
                </div>
                <div class="price_count_two">
                  <div style="float:left;margin-top:14px;margin-left:12px;">数量</div>
                  <div class="jiajian"><button @click="reduce">-</button><span v-text="number"></span><button @click="plus">+</button></div>
                  <yd-button @click.native="toastSuccess" size="large" type="danger">确定</yd-button>
                </div>
              </yd-popup>  
            <yd-tabbar-item title="立即购买" link="#" style="border-right:1px solid #577BB5;width:77px;height:42px;color:#fff;background:#577bb5;padding-left:10px;padding-right:10px">
            </yd-tabbar-item>
          </yd-tabbar>
        </div>
      </div>
    </div>
</template>
<script type="text/babel">
export default {
  name: 'details_none',
  data:function(){
    return {
       show2: false,/*加入购物车的弹窗变量*/
       product_id:""/*接收的商品ID变量*/,
       product:""/*接收请求回来的对应ID 的 商品信息*/,
       product_img:"",/*接收请求回来的商品展示信息*/
       number:1,/*弹窗加减数量变量*/
       shopping_count:0,
    }
  },
  methods:{
    s(){
      console.log(123)
    },
    plus(){
      if(this.number<=99){
      this.number++;
      }
    },
    reduce(){
      if(this.number!=1){
          this.number--;
    }
    },
    /*添加商品按钮-确定*/
    toastSuccess() {
         var islogin=sessionStorage.getItem("uid");
         if(islogin==undefined){
           this.$router.push("/login/login_dl")
         }
         else
            /*先查询当前商品id在cart里面有没有存在，不存在再插入数据*/
            this.axios.get("http://127.0.0.1:3000/cart/selectProduct",{
            params: { 
              uid:islogin,
              product_id:this.product_id,
              }
          })
          .then(res=>{ 
              if(res.data=="无重复"){
          /*如果无重复了，就请求后台数据把当前点击的uid和product_id等插入数据库，那边去掉*/
              this.axios.get("http://127.0.0.1:3000/cart/inserte",{  //params参数必写 , 如果没有参数传{}也可以
              params: { 
              uid:islogin,
              product_id:this.product_id,
              cprice:this.product.product_price,
              count:this.number
              }
              })
              .then(res=>{ 
              console.log(res);
              });
                this.$dialog.toast({
                    mes: '成功加入购物车',
                    timeout: 1500,
                    icon: 'success'
                });
                this.show2=false;
              }else{
                  this.$dialog.toast({
                  mes: '购物车已存在此商品',
                  timeout: 1500,
                  icon: 'success'
              });
              this.show2=false;
              }
          });
    },
    /*跳转购物车*/
    cartTo(){
      this.$router.push("/cart/"+2)
    }
  },
  created(){
      var t=this.$route.params.key
      var product_id=parseInt(t)//获取商品页传来的商品ID①
      product_id+=1//获取商品页传来的商品ID②
      this.product_id=product_id
      console.log(this.product_id)
      this.axios.get("http://127.0.0.1:3000/details/details",{  //params参数必写 , 如果没有参数传{}也可以
                params: { 
                  id:this.product_id
                }
            })
      .then(res=>{ 
        this.product=res.data[0]
        this.product_img=res.data[0].details_mm_pic.split(',')
      })

      /*获取商品购物车数量*/
       /*1:获取sessionStorage里的用户ID并发送请求获取其购物车信息*/
        var uid=sessionStorage.getItem("uid");
       this.axios.get(
            "http://127.0.0.1:3000/cart/cart",{
                params:{
                    uid:uid
            }}
        ).then(res=>{
            //console.log(res.data[0]);
            console.log(res.data)
            /*将用户商品购物车数量添加到session*/
              if(res.data=="用户ID为空-err"){this.shopping_count=0}else{ var count=res.data.length;  this.shopping_count=count}
        }) 
  },
  mounted(){
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
  } 
}   
</script>
<style scoped>
.details_one{
  width:100%;
}
.details_d1{
  width:100%;
  margin-top:40px;
}
.details_d1_one{
  width:100%;
  height:280px;
  border-bottom:1px solid rgba(230,230,230,1);
}
.details_d1_two{
  width:100%;
  height:94px;
}
.details_d1_two_f1{
  width:80%;
  height:94px;

  text-align:left;
}
.details_d1_two_f1 span{
  font-size:14px;
  display:inline-block;
  margin-left:8px;
}
.details_d1_two_f1 ul li{
  width:50%;
  height:94px;
  float:left;
}
.details_d1_two_f1 ul li .div1{
  width:100%;
  height:45px;
  margin-top:10px;
}
.details_d1_two_f1 ul li .div2{
  width:100%;
  height:25px;
  margin-top:7px;
}
.details_d1_two_f1_fx{
  width: 32px;
  height: 48px;
  float: right;
  margin-right: -74px;
  margin-top: 13px
}
.details_d1_two_f2{
  width:100%;
  height:40px;

}
.details_d1_two_f2_price{
  text-align:left;
  color:#577BB5
}
.details_d1_two_f2_price div {
  color:#aaa;
}
.details_d1_two_f3{
  width:100%;
  height:40px;
  margin-top:3px;
}
.details_d1_two_f3_one{
  width:100%;
  height:20px;
  display:flex;
  color:#aaa;
  justify-content:space-between;
}
.tails_d1_two_f3_two{
  width:100%;
  height:30px;
}
.details_d1_two_f3_two .icon{
  display:flex;
  justify-content:space-between;
  width:77%;
  height:20px;
  margin-left:7px;
}
.details_d1_two_f3_two .icon div{
  width:68px;
  height:20px;
}
.details_d1_two_f3_two .icon div img{
  width:15px;
  height:15px;
  position:absolute;
  margin-top: 1.5px;
}
.details_d1_two_f3_two .icon div span{
  display:inline-block;
  margin-left:20px
}
.fq{
  width:100%;
  height:50px;
  display:flex;
  justify-content:space-between;
}
.fq .fq_mounth{
  width:44px;
  height:20px;
  margin-top:16px;
  text-align:center;
  border:1px solid #A6C6F4;
}
.details_d1_two_f4{
  width:100%;
  height:400px;
}
.details_d1_two_f4_GG{
  width: 100%;
  height: 33px;
  border-top: 4px solid rgba(230,230,230,0.9);
  border-bottom: 4px solid rgba(230,230,230,0.9);
  margin-top:9px;
  text-align:left;
  padding-top:3px;
  padding-left:4px;
  font-size:14px;
  color:#aaa;
}
.details_d1_two_f4_GG ul{
  float:right;
  margin-right: 10px;
}
.details_d1_two_f4_GG ul li{
  width:5px;
  height:5px;
  float:right;
  background:#aaa;
  margin-top: 8px;
  border-radius:50%;
}
.details_d1_two_f4_compent{
  width:100%;
  height:421px;

}
.details_d1_two_f4_compent_title{
  width: 100%;
  height: 33px;
  border-bottom: 1px solid rgba(225,225,225,0.9);
}
.details_d1_two_f4_compent_title span{
  display:block;
  padding-top:8px;
  text-align:left;
  padding-left:6px;
  font-size:14px;
  color:#aaa;
}
.details_d1_two_f4_compent_cpt img{
  float:left;
  margin-left:5px;
  margin-top:5px;
}
.details_d1_two_f4_compent_cpt span{
  text-align:left;
  display:block;
  width:100px;
  margin-left:5px;
  padding-top:10px;
  float:left;
}
.FGX{
  width:100%;
  height:2px;
  border-bottom:1px solid rgba(225,225,225,1);
}
.CKPL{
  font-size:14px;
  width:95px;
  height:22px;
  border:1px solid #aaa;
  margin:0 auto;
  color:#aaa;
  border-radius:5px;
  margin-top:7px
}
.details_d1_two_f5{
  width:100%;
  height:197px;
  margin-top: 89px;
  border-top:4px solid rgba(230,230,230,0.9);
  border-bottom:4px solid rgba(230,230,230,0.9);
}
.compent_bottom{
  width:100%;
  height:37px;
}
.details_d1_two_f5 .div1 p{
  height:10px;
  width:114px;
  display:block;
}
.div2{
  width:100%;
  height:86px;
  margin-top:47px;
  display:flex;
  justify-content:space-between;
}
.product_show{
  width:100%;
}
.product_show img{
  width:100%;
  height:100%;
}
.div2 .div2_pl{
  width:88px;
  height: 84px;
}
.div3{
  width:100%;
}
.div3 div{
  width:80px;
  height:20px;
  float: left;
  margin-left: 69px;
  margin-top: 15px;
  border-radius:4px;
  color:#aaa;
  border:1px solid #aaa;
}
.span_two{

  font-size:12px;
}
.div2 span{
  margin-top:11px;
}
.yd-tabbar-item{
  width:50px !important;
   height:50px !important
}
.yd-btn{
  margin-left: 130px !important;
  margin-top: 4px !important;
  position: absolute;
  background:#fff !important;
}
.dianpu{
  width:78px;
  height:78px;
  position:absolute;
  margin-top: 11px;
  margin-left: 11px;
  border:1px solid #ccc;
}
.dianpu img{
  width:100%;
  height:100%;
}
.price_count_one{
  width:100px;
  height:72px;
  color:#577BB5;
  text-align:center;
  line-height:40px;
  position:absolute;
  margin-top: 40px;
  margin-left: 87px;
}
.price_count_two{
  width:100%;
  height:50px;
  border-bottom:1px solid #577BB5;
  position:absolute;
  margin-top: 103px;
}
.price_count_two div{
  color:#000;
}
.price_count_two button{
  width: 22px;
  height: 22px;
}
.price_count_two span{
    width: 32px;
    height: 20px;
  display:inline-block;
}
.jiajian{
  width:148px;
  height:30px;
  float:right;
  margin-top: 11px;
}
.yd-btn-danger{
  width:100% !important;
  height:50px !important;
  margin-top:314px !important;
  background:#A6C6F4 !important
}
.input_check{
  border:1px solid red;
}
</style>