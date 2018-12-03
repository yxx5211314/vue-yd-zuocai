<template>
  <nav class="mui-bar mui-bar-tab" v-show="F">
    <a class="mui-tab-item mui-active" style="cursor:pointer;":style="{color:color_1}"  href="#tabbar"@click="dianji_1()">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </a>
    <a class="mui-tab-item" style="cursor:pointer;" :style="{color:color_2}"href="#tabbar-with-contact"@click="dianji_2()">
      <span class="mui-icon mui-icon-search"></span>
      <span class="mui-tab-label">商品</span>
    </a>
    <a class="mui-tab-item" :style="{color:color_3}"href="#tabbar-with-contact"@click="dianji_3()">
      <span class="mui-icon mui-icon-plus"><span class="mui-badge">10</span></span>
      <span class="mui-tab-label">购物车</span>
    </a>
    <a class="mui-tab-item" @click="dianji_4()" :style="{color:color_4}"><span  >
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label" >个人中心</span>
      </span>
    </a>
  </nav>
</template>
<script>
export default {
  data:function(){
    return{
        img_1:"http://127.0.0.1:3000/img/index_img/shouye_yd2.png",
        img_2:"http://127.0.0.1:3000/img/index_img/fenlei_yd2.png",
        img_3:"http://127.0.0.1:3000/img/index_img/gwc_yd2.png",
        img_4:"http://127.0.0.1:3000/img/index_img/wode_yd2.png",
        color_1:"#479EFD !important",
        color_2:"#929292",
        color_3:"#929292",
        color_4:"#929292 !important",
        F:this.$store.state.f/*商品页控制其隐藏并换其他组件*/
    }
  },methods:{
    /*切换底部*/
    dianji_1(e){
      this.color_1="#479EFD"
      this.color_2="#929292"
      this.color_3="#929292"
      this.color_4="#929292"
      this.$router.push("/home")
    },
    dianji_2(e){
      console.log(close)
      this.color_1="#929292"
      this.color_2="#479EFD"
      this.color_3="#929292"
      this.color_4="#929292"
      this.$router.push("/product")
    },
    dianji_3(e){
      console.log(close)
      this.color_1="#929292"
      this.color_2="#929292"
      this.color_3="#479EFD"
      this.color_4="#929292"
      this.$router.push("/cart")
    },
    dianji_4(e){
      this.color_1="#929292"
      this.color_2="#929292"
      this.color_3="#929292"
      this.color_4="#479EFD"
      this.$router.push("/login")
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gd{
  width:100%;
  height:200px;
}
.mui-bar-tab .mui-tab-item{
  cursor:pointer;
}
</style>
