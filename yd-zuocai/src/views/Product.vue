<template>
    <div class="product">
        <yd-navbar fontsize="16px" title="佐卡伊珠宝展示区" height="40px" fixed color="#fff">         
        </yd-navbar>
        <div class="xuanchuantu">
            <yd-slider autoplay="4000" speed="2000" pagination-activecolor="#589BC1 !important" pagination-color="#fff" direction="vertical">
                <yd-slider-item>
                    <a href="http://www.ydcss.com">
                        <img src="http://127.0.0.1:3000/img/product_img/lunbo1.jpg">
                    </a>
                </yd-slider-item>
                <yd-slider-item>
                    <a href="http://www.ydcss.com">
                        <img src="http://127.0.0.1:3000/img/product_img/lunbo2.jpg">
                    </a>
                </yd-slider-item>
            </yd-slider>
        </div>
        <div class="fenlei">
            <div style="font-size:17px;font-weight:800;text-align: left;color:#A6C6F4;margin-top:5px;">热门分类&nbsp;<span class="mui-icon-extra mui-icon-extra-class"></span></div>
            <div>
                <ul>
                    <li v-for="(s,i) in fenlei" :key="i" @click="active(i)">
                        <span class="fenlei_text" :class="{fenleiStyle:i==index}"v-text="s"></span>
                    </li>
                </ul>
            </div>
        </div>
        <div >
        <yd-list theme="3">
            <yd-list-item v-for="item, key in product2" :key="key" type="a"  :href="'/product/details/'+key"><>
                <img slot="img" :src="item.product_img" >
                <span slot="title">{{item.product_name}}</span>
                <yd-list-other slot="other">
                    <div>
                        <span class="demo-list-price"><em>¥</em>{{item.product_price}}&nbsp;&nbsp;</span>
                        <s><span class="demo-list-del-price">¥{{parseInt(item.product_price)+500}}</span></s>
                    </div>
                    <div style="color:#89B4ED"><b>自营~</b></div>
                </yd-list-other>
            </yd-list-item>
        </yd-list>
        </div>
        <div style="margin-top:-5px;margin-bottom:0px;">
                <img src="http://127.0.0.1:3000/img/index_img/yd_index_bottom.png" style="width:100%;height:100px">
        </div>
        <yd-backtop bottom="100px" name=""><img src="http://127.0.0.1:3000/img/product_img/fanhui.png" style="width:38px"></yd-backtop>    
    </div>
</template>
<script>
export default {
  name: 'product',
  data:function(){
    return {
         fenlei:["戒指","耳钉","耳环","吊坠","项链","手链","K金贵族","珍珠宝"],
         product1:"",/*商店初次加载的商品信息接收变量*/
         product2:"",/*商店分类加载的商品信息接收变量*/
         index:0,/*初始分类样式-用于动态绑定class*/
    }
  },
  methods:{
      /*商品分类功能*/
    active(i){
        this.index=i;
        if(i==0){
            /*如果点击到第一个分类则让页面加载默认商品页*/
            this.product2=this.product1
        }else{
        this.axios.get("http://127.0.0.1:3000/products/product_list", {  //params参数必写 , 如果没有参数传{}也可以
            params: { 
            num1:(i-1)*32, //分页动态请求参数-传过去查询
            num2:32
            }
        })
        .then(res=>{ 
            this.product2=res.data;
        })
        }
    }
  },
    created(){
      /*商店初次加载获取数据库商品信息32条*/
      this.axios.get(
        "http://127.0.0.1:3000/products/product"
        )
    .then(res=>{
        console.log(res);
        this.product1=res.data;
        this.product2=this.product1;
    })
  },
  mounted(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  } 
}   
</script>
<style scoped>
.product{
    width:100%;
}
.product{
    margin-top:43px;
}
.fenlei{
    width:100%;
    height:124px;
    /*border:1px solid red;*/
}
.fenlei ul li{
    width:25%;
    height:49px;
    border:1px solid rgba(230,230,230,0.5);
    float:left;
}
.yd-navbar{
    background-color:#A6C6F4 !important
}
.xuanchuantu,.xuanchuantu img{
    width:100%;
    height:146px;
}
.fenlei_text{
    width: 75px;
    height: 27px;
    margin:11px auto;
    background:#A6C6F4;
    box-shadow:0px 0px 10px 5px #589BC1 inset;;
    display:block;
    text-align:center;
    line-height:27px;
    border-radius:5px;
    color:#fff;
}
.demo-list-price{
    color:#577BB5;
    font-weight:bold;
    font-size: 16px;
}
.fenleiStyle{
    font-size:17px;
    color:yellow;
}
</style>