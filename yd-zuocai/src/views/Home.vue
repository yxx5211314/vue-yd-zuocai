<template>
  <div class="home">
    <!--头部-->
      <div class="header">
        <img src="http://127.0.0.1:3000/img/home/fenlei.png"  class="fenlei">
        <input type="text"  class="input1">
        <img src="http://127.0.0.1:3000/img/home/sousuo.png" class="sousuo">
        <img src="http://127.0.0.1:3000/img/home/xinxi.png" class="xinxi">
      </div>
    <!--轮播-->
    <div class="lunbo">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(img,i) in images":key="i">
          <img :src="img" style="width:100%;height:100%;">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--中间商品-->
    <div class="sp">
      <div class="zhuyaoshangpin">
        <ul>
          <li v-for="s in sp_img1">
            <img :src="s.url" style="width:100%;height:100%;">
            <p v-text="s.title_1"></p>
          </li>
          <li v-for="s in sp_img2">
            <img :src="s.url" style="width:100%;height:100%;margin-top:22px;">
            <p v-text="s.title_2"></p>
          </li>
        </ul>
      </div>
    </div>
    <!--分割线-->
    <p style="width
    :100px;height:5px;"></p>
    <!--商品海报-->
    <div class="shopping">
      <div class="shopping_1">
        <h1 class="pinpai">品牌门店</h1>
        <div class="pinpai_title">PHYSICAL STORE</div>
        <div class="gengduo">更多>></div>
        <p style="border:2px solid #ccc;margin-top:2px; width:100%;clear:both"></p>
        <div class="pinpaixia">
          <img style="width:100%;height:100%;"src="http://127.0.0.1:3000/img/index_img/mendian_xia.jpg">
        </div>
      </div>
    </div>
    <!--滚动公告 YDUI Touch-->
    <div class="gundong">
      <h1 class="gonggao1">佐卡伊热点:</h1>
      <yd-rollnotice autoplay="2000" class="gonggao2">
          <yd-rollnotice-item><span style="font-weight:bold;color:#577BB5;width:100% !important;"> 佐卡推荐! -佐卡伊珠宝 您的最久永恒</span></yd-rollnotice-item>
      </yd-rollnotice>
    </div>
    <!--商品优荐1f-->
    <div class="shopping_top">
      <div class="shopping_top_1">
        <img :src="product_img" style="width:100%;height:100%">
      </div>
      <h1><b v-text="bigTitle[0]"></b><span>:</span><b>1</b>F</h1>
      <div class="shopping_top_2">
          <ul>
            <li class="yj_1" style="border-right:none;border-left:none;" @click="click()">
              <img :src="pic[0]" class="yj_1_img">
              <p><span v-text="product_title[0]"></span></p>
              <p><span  v-text="price[0]"></span></p>
            </li>
            <li class="yj_1" style="border-right:none;" @click="click()">
              <img :src="pic[1]" class="yj_1_img">
              <p><span v-text="product_title[1]"></span></p>
              <p><span  v-text="price[1]"></span></p>
            </li>
            <li class="yj_1" style="border-right:none;" @click="click()">
              <img :src="pic[2]" class="yj_1_img">
              <p><span v-text="product_title[2]"></span></p>
              <p><span  v-text="price[2]"></span></p>
            </li>
          </ul>
      </div>
    </div>
    <!--商品优荐2f-->
    <div class="shopping_top">
      <div class="shopping_top_1">
        <img :src="product_img_1" style="width:100%;height:100%">
      </div>
      <h1><b v-text="bigTitle_1[0]"></b><span>:</span><b>2</b>F</h1>
      <div class="shopping_top_2">
          <ul>
            <li class="yj_1" style="border-right:none;border-left:none;" @click="click()">
              <img :src="pic_1[0]" class="yj_1_img">
              <p><span v-text="product_title_1[0]"></span></p>
              <p><span  v-text="price_1[0]"></span></p>
            </li>
            <li class="yj_1" style="border-right:none;" @click="click()">
              <img :src="pic_1[1]" class="yj_1_img">
              <p><span v-text="product_title_1[1]"></span></p>
              <p><span  v-text="price_1[1]"></span></p>
            </li>
            <li class="yj_1" style="border-right:none;" @click="click()">
              <img :src="pic_1[2]" class="yj_1_img">
              <p><span v-text="product_title_1[2]"></span></p>
              <p><span  v-text="price_1[2]"></span></p>
            </li>
          </ul>
      </div>
    </div>
    <!--商品优荐3f-->
    <div class="shopping_top">
      <div class="shopping_top_1">
        <img :src="product_img_2" style="width:100%;height:100%">
      </div>
      <h1><b v-text="bigTitle_2[0]"></b><span>:</span><b>3</b>F</h1>
      <div class="shopping_top_2">
          <ul>
            <li class="yj_1" style="border-right:none;border-left:none" @click="click()">
              <img :src="pic_2[0]" class="yj_1_img">
              <p><span v-text="product_title_2[0]"></span></p>
              <p><span  v-text="price_2[0]"></span></p>
            </li>
            <li class="yj_1" style="border-right:none;" @click="click()">
              <img :src="pic_2[1]" class="yj_1_img">
              <p><span v-text="product_title_2[1]"></span></p>
              <p><span  v-text="price_2[1]"></span></p>
            </li>
            <li class="yj_1" style="border-right:none;" @click="click()">
              <img :src="pic_2[2]" class="yj_1_img">
              <p><span v-text="product_title_2[2]"></span></p>
              <p><span  v-text="price_2[2]"></span></p>
            </li>
          </ul>
      </div>
    </div>
    <!--商品优荐4f-->
    <div class="shopping_top">
      <div class="shopping_top_1">
        <img :src="product_img_3" style="width:100%;height:100%">
      </div>
      <h1><b v-text="bigTitle_3[0]"></b><span>:</span><b>4</b>F</h1>
      <div class="shopping_top_2">
          <ul>
            <li class="yj_1" style="border-right:none;border-left:none;" @click="click()">
              <img :src="pic_3[0]" class="yj_1_img">
              <p><span v-text="product_title_3[0]"></span></p>
              <p><span  v-text="price_3[0]"></span></p>
            </li>
            <li class="yj_1" style="border-right:none;" @click="click()">
              <img :src="pic_3[1]" class="yj_1_img" style="border-top:none;">
              <p><span v-text="product_title_3[1]"></span></p>
              <p><span  v-text="price_3[1]"></span></p>
            </li>
            <li class="yj_1" style="border-right:none;" @click="click()">
              <img :src="pic_3[2]" class="yj_1_img" style="border-top:none;">
              <p><span v-text="product_title_3[2]"></span></p>
              <p><span  v-text="price_3[2]"></span></p>
            </li>
          </ul>
      </div>
    </div>
    <div style="width:100%;height:3px"></div>
    <div style="width:100%;height:3px"></div>
    <div style="margin-top:-5px;margin-bottom:0px;">
      <img src="http://127.0.0.1:3000/img/index_img/yd_index_bottom.png" style="width:100%;height:100px">
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data:function(){
    return {
      dd:"",
       images:[
         "http://127.0.0.1:3000/img/index_img/index_lunbo1.jpg","http://127.0.0.1:3000/img/index_img/index_lunbo2.jpg","http://127.0.0.1:3000/img/index_img/index_lunbo3.jpg","http://127.0.0.1:3000/img/index_img/index_lunbo4.jpg","http://127.0.0.1:3000/img/index_img/index_lunbo5.jpg"],
         sp_img1:[     {url:"http://127.0.0.1:3000/img/product_img/product_01.jpg",title_1:"精品男戒"},
        {url:"http://127.0.0.1:3000/img/product_img/product_08.jpg",title_1:"精品女戒"},
        {url:"http://127.0.0.1:3000/img/product_img/product_03.jpg",title_1:"爱情似海"},
        {url:"http://127.0.0.1:3000/img/product_img/product_04.jpg",title_1:"爱的永恒"},
        {url:"http://127.0.0.1:3000/img/product_img/product_05.jpg",title_1:"永恒之恋"},
         ],
         sp_img2:[     {url:"http://127.0.0.1:3000/img/product_img/product_10.jpg",title_2:"时尚钻戒"},
        {url:"http://127.0.0.1:3000/img/product_img/product_11.jpg",title_2:"恋恋四季"},
        {url:"http://127.0.0.1:3000/img/product_img/product_12.jpg",title_2:"注定的爱"},
        {url:"http://127.0.0.1:3000/img/product_img/product_13.jpg",title_2:"纯真女孩"},
        {url:"http://127.0.0.1:3000/img/product_img/product_14.jpg",title_2:"花海与你"},
         ],
          res:"",
          /*首页商品信息-1F */
          pic:"",
          product_title:"",
          price:"",
          bigTitle:"",
          product_img:"",
          /*首页商品信息-2F */
            pic_1:"",
          product_title_1:"",
          price_1:"",
          bigTitle_1:"",
          product_img_1:"",
          /*首页商品信息-3F */
          pic_2:"",
          product_title_2:"",
          price_2:"",
          bigTitle_2:"",
          product_img_2:"",
          /*首页商品信息-4F */
            pic_3:"",
          product_title_3:"",
          price_3:"",
          bigTitle_3:"",
          product_img_3:""
    }
  },methods:{
    click(){
      this.$router.push("/product")
    },
     pro(){
      this.axios.get(
      "http://127.0.0.1:3000/index/index_products").then(res=>{
              console.log(res.data)
              this.res=res.data
                for(var t in res.data){
                this.bigTitle=res.data[0].bigTitle.split(",");
                this.product_img=res.data[0].product_img;
                this.pic=res.data[0].pic.split(",");
                this.product_title=res.data[0].product_title.split(",")
                this.price=res.data[0].price.split(",")

                this.bigTitle_1=res.data[1].bigTitle.split(",");
               // console.log(this.bigTitle_1)
                this.product_img_1=res.data[1].product_img;
                this.pic_1=res.data[1].pic.split(",");
                this.product_title_1=res.data[1].product_title.split(",")
                this.price_1=res.data[1].price.split(",")

                this.bigTitle_2=res.data[2].bigTitle.split(",");
                this.product_img_2=res.data[2].product_img;
                this.pic_2=res.data[2].pic.split(",");
                this.product_title_2=res.data[2].product_title.split(",")
                this.price_2=res.data[2].price.split(",")

                this.bigTitle_3=res.data[3].bigTitle.split(",");
                this.product_img_3=res.data[3].product_img;
                this.pic_3=res.data[3].pic.split(",");
                this.product_title_3=res.data[3].product_title.split(",")
                this.price_3=res.data[3].price.split(",")
          }
      })
    }
  },
  created(){
    this.pro();
  },
  mounted(){
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  } 
}
</script>
<style scoped>
.home{
  background:#fff;
}
  .header{
    position:fixed;
    width:100%;
    z-index:800;
}
.fenlei{
  width:30px;
  height:30px;
  float:left;
  margin-left:10px;
  margin-top:8px;
}
.input1{
  border-radius: 5px;
    float: left;
    background:#fff;
    margin-left: 8px;
    margin-top: 13px;
    width: 74.5%;
    height: 20px;
    border:1px solid #fff;
    padding-left:28px;
    opacity:0.5;
}
.sousuo{
    width: 24px;
    height: 24px;
    margin-left: -542px;
    margin-top: 11px;
}
.xinxi{
    width: 30px;
    height: 30px;
    float:right;
    margin-top: 8px;
    margin-right: 8px;
}
.lunbo{
  width:100%;
  height:170px;
  float:left;
  z-index:-500;
}
.sp{
  width:100%;
  height:150px;
  /*border:1px solid red;*/
  clear:both;
}
.zhuyaoshangpin{
  width:100%;
  height:100%;
  /*border:1px solid red;*/
}
.zhuyaoshangpin ul{
  width:100%;
  height:100%;
  background:#fff;
}
.zhuyaoshangpin ul  li{
  height:47px;
  width:47px;
  float:left;
  margin-left:23px;
  margin-top:5px;
}
.zhuyaoshangpin ul li img{
  width:100%;
  height:100%;
  border-radius:5px;
}
.zhuyaoshangpin ul li p{
  width:48px;
  height:100%;
  font-size:12px;
}
.shopping{
  width:100%;
}
.shopping_1{
  width:100%;
  height:146px;
  /*border:1px solid red;*/
}
.pinpai{
    float: left;
    font-size: 16px;
    color: #577bb5;
    font-weight: bold;
}
.pinpai_title{
    float: left;
    font-size: 14px;
    color: #b9b9b9;
    margin-left: 5px;
}
.gengduo{
    float:right;
    margin: 0px 10px;
}
a{
    color: #666666;
    text-decoration: none;
}
.pinpaixia{
  margin-top:5px;
  width:100%;
  height:120px;
}
.gundong{
  width:100%;
  height:42px;
  background:#fff;
  border-bottom: 1px solid rgb(204, 204, 204);
}
.gonggao1{
  float:left;
  margin-top: 12px;
  width: 96px;
  position: absolute;
  font-size: 16px;
  color:#577BB5;
  text-align:left;
}
.gonggao2{
  float:left;
  margin-left:70px;
  margin-top:8px;
  width:70% !important;
}
.shopping_top{
  width:100%;
  height:264px;
}
.shopping_top .shopping_top_1{
  width:100%;
  height:110px
}
.shopping_top h1{
  height:25px;
  font-size:16px;
  text-align:left;
  color:#577BB5;
  border-bottom:1px solid rgb(204, 204, 204);
}
.shopping_top_2,.shopping_top_2 ul{
  width:100%;
  height:129px;
}
.shopping_top_2 ul li{
  width:125px;
  height:100%;
  float:left;
  border:1px solid #ccc;
  box-sizing:border-box
}
.yj_1_img{
  margin:0 auto;
  width: 60%;
  height: 54%;
  display:block;

}
.yj_1 p{
  margin-top:7px;
  display:block;
}
</style>