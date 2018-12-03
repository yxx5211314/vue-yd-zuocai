<template>
    <div class="cart">
        <yd-navbar title="购物车" height="50px" fontsize="16px">
            <a slot="left" @click="fanhui">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </a>
            <a slot="right">
            <span style="color:#000" v-show="fal_bianji" @click="bianji">编辑</span>
            <span style="color:#000" v-show="fal_wancheng"
            @click="wancheng">完成</span>
            </a>
        </yd-navbar>
        <div class="spxx">
            <ul>
                <li v-for="(s,index) in shopping">
                    <div>
                        <div @click="fal_li_xz($event,index)" >
                           <input type="checkbox" 
                           style="margin-left:-326px;width: 47px;"
                           class="ck1 ck" :data-id="111">
                        </div>
                        <div @click="fal_li_xz_1($event,index)">
                           <input type="checkbox" 
                           style="margin-left:-326px;width: 47px;" class="ck2 ck">
                        </div>
                        <div class="xinxi">
                            <div class="xinxi_dianpu">佐卡伊珠宝旗舰店</div>
                            <div class="xinxi_img">
                                <img style="width:100%;height:100%;" :src="s.product_img">
                            </div>
                            <div class="xinxi_title">
                                <p style="font-size:12px;text-align:left;display: block;margin-top: 5px;color:#000" v-text="s.product_name">--<span>玫瑰金1分</span></p>
                                <p class="RMB">￥<span v-text="s.product_price"></span></p>
                                <div class="jiajian">
                                    <button 
                                    @click="reduce($event,index)">-</button>
                                        <span class="num" v-text="s.count"></span>
                                    <button @click="plus($event,index)">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fengexian"></div>
                </li>
            </ul>
        </div>
        <div class="footer_js" v-show="fal" >
            <div @click="quanxuan2($event)">
                <yd-checkbox val=""color="#A6C6F4" v-model="fas" style="margin-left:-282px;margin-top:12px" shape="circle"></yd-checkbox>
            </div>
            <div class="quanxuan1" @click="quanxuan()">全选</div>
            <div class="heji">
                <p>合计：<span>¥</span><span v-text="price"></span></p>
                <p>（不含运费）</p>
            </div>
            <div class="jiesuan" @click="jiesuan">去结算</div>
        </div>
        <div class="footer_js2" v-show="fal2" style="top:92.5%">
            <div @click="quanxuan2($event)">
                <yd-checkbox val=""color="#A6C6F4" style="margin-left:-282px;margin-top:12px" shape="circle" v-model="fas"></yd-checkbox>
            </div>
            <div class="quanxuan2" @click="quanxuan">全选</div>
            <div class="shanchu" @click="shanchu">删除</div>
        </div>
        <div class="footer_js" v-show="fal3" style="top:92%">
            <div @click="quanxuan2($event)">
                <yd-checkbox val=""color="#A6C6F4" v-model="fas" style="margin-left:-282px;margin-top:12px" shape="circle"></yd-checkbox>
            </div>
            <div class="quanxuan1" @click="quanxuan()">全选</div>
            <div class="heji">
                <p>合计：<span>¥</span><span v-text="price"></span></p>
                <p>（不含运费）</p>
            </div>
            <div class="jiesuan" @click="jiesuan">去结算</div>
        </div>
        <div style="width:100px;height:100px;"></div>
    </div>
</template>
<script>
export default {
    name: 'cart',
    data:function(){
    return {
        checkbox2: [],
        number:0,/*加减数量span*/
        fal:false,/*控制底部显示隐藏，右上角购物车页底部控制*/
        fal2:false,/*控制底部显示隐藏，footer购物车页底部控制*/
        fal3:false,/*控制底部显示隐藏，右上角购物车页底部控制2*/
        fas:false,/*底部按钮控制*/
        num:0,/*独立变量num*/
        shopping:"",/*接收商品信息*/
        price:0,/*商品总价变量*/
        fal_bianji:true,/*右上角编辑显示隐藏变量*/
        fal_wancheng:false/*右上角完成显示隐藏变量*/
        }
    },
    methods:{
        /*结算*/
        jiesuan(){
            this.$router.push("/jies")
        },
        /*编辑*/
        bianji(){
        this.fal_bianji=false;
        this.fal_wancheng=true;
        this.fal2=true;
        this.fal3=false;
        this.fal=false;
        },
        /*完成*/
        wancheng(){
        this.fal_bianji=true;
        this.fal_wancheng=false;
        this.fal2=false;
        this.fal3=true;
        this.fal=false;
        },
        /*删除按钮*/
        shanchu(){
            var uid=sessionStorage.getItem("uid");
            var ck=document.getElementsByClassName("ck1");
            for(var j=0;j<ck.length;j++){
                console.log(ck[j].checked)
                if(ck[j].checked==true){
                    var product_id=this.shopping[j].product_id;
                    this.axios.get(
                    "http://127.0.0.1:3000/cart/delete",{
                        params:{
                            uid:uid,
                            product_id
                    }}
                    ).then(res=>{
                            console.log(res.data);
                            if(res.data=="删除成功"){
                                location.reload();
                            }
                    })
                }
            }
        },
        /*返回按钮*/
        fanhui(){
            this.$router.go(-1)
        },
        plus(e,index){
            /*获取当前下标的数量加减值num*/
        var num=document.getElementsByClassName("num")[index]
        var sum=parseInt(num.innerHTML);
        if(num.innerHTML<=99){
        sum++;
        num.innerHTML=sum
        /*加减号按钮计算总价----------------------①-加号*/
            /*理解每次加都只加一次，也就是当前商品的价格*/
            /*②获取当前坐标下的商品价格*/
            var money_index=this.shopping[index].product_price
            /*③每次加只加 money_index*/
            /*④判断当前index对应的checked是否为true,是的话加，不是的话就不算*/
            var ch=document.getElementsByClassName("ck1")[index]
            if(ch.checked==true){
                this.price+=parseInt(money_index);
            }
        }
        /*根据*/
        },
        reduce(e,index){
        /*获取当前下标的数量加减值num*/
        var num=document.getElementsByClassName("num")[index]
        var sum=parseInt(num.innerHTML);
        /*加减号按钮计算总价----------------------①-加号*/
        /*理解每次减号只减去一个价格*/
        /*②获取当前坐标下的商品价格*/
        /*④判断当前index对应的checked是否为true,是的话加，不是的话就不算*/
        var money_index=this.shopping[index].product_price
        var ch=document.getElementsByClassName("ck1")[index]
        if(num.innerHTML!=1){
        sum--;
        num.innerHTML=sum
            if(ch.checked==true){
                this.price-=parseInt(money_index);
            }
        }
        },
        /*全选按钮计算总价*/
        money(){
            /*①全部商品shopping遍历*/
           var sum=0;
           var shop=this.shopping;
           for(var i=0;i<shop.length;i++){
               /*②遍历后的价格*/
               var s=shop[i].product_price
               /*③根据坐标取到数量*/
               var count=document.getElementsByClassName("num")[i].innerHTML
                sum+=s*count    
           }
            /*④让总价等于sum*/
            this.price=sum;
        },
        quanxuan(){/*购物车底部全选按钮-右上角购物车页底部控制*/
            this.money()
           this.fas=!this.fas
           /*实现全选和不选*/
           var s=document.getElementsByClassName("ck")
           for(var i=0;i<s.length;i++){
               if(this.fas==true){s[i].checked=true}
               else{s[i].checked=false}
           }
           /*如果是全选则计算总价*/
           if(this.fas==true){
               this.money();
           }else{
               this.price=0;
           }
        },
        quanxuan2(e){
            console.log(e.target.checked)
            var s=document.getElementsByClassName("ck")
           for(var i=0;i<s.length;i++){
               if(e.target.checked==true){s[i].checked=true}
               else{s[i].checked=false}
           }
           /*如果是全选则计算总价*/
           if(e.target.checked==true){
               this.money();
           }else{
               this.price=0;
           }
        },
        /*全部控制*/
        container(){
            var ss=document.getElementsByClassName("ck1")
            let Array=[];
            for(var s=0;s<ss.length;s++){
            if(ss[s].checked==true){
            Array.push(ss[s].dataset.id)
            if(Array.length==ss.length){
                this.fas=true;
            }
            }else {
                //this.$refs.py.checked=false;
                this.fas=false;
            }
        }
        },
        //*控制当前li的checked值*正向--/
        fal_li_xz(e,index){
        var s=document.getElementsByClassName("ck1")[index]
        var s1=document.getElementsByClassName("ck2")[index]
        s1.checked=s.checked
         this.container()
          /*checked按钮计算总价----------------------①*/
            /*①获取当前坐标下的数量值*/
         var num=document.getElementsByClassName("num")[index].innerHTML
            /*②获取当前坐标下的商品价格*/
         var money_index=this.shopping[index].product_price
            /*③两者相乘*/
         var money_zong=num*money_index;
            /*④进行判断checked/如果为true则+=总价否则-=总价*/
         if(e.target.checked==true){
          this.price+=money_zong;
         }else{
           this.price-=money_zong;
         }
         console.log(this.price)
        },
        //*控制当前li的checked值*反向--/
        fal_li_xz_1(e,index){
        //this.money_ck()
        var s=document.getElementsByClassName("ck1")[index]
        var s1=document.getElementsByClassName("ck2")[index]
        s.checked=s1.checked
        this.container() 
        /*checked按钮计算总价----------------------②*/
            /*①获取当前坐标下的数量值*/
         var num=document.getElementsByClassName("num")[index].innerHTML
            /*②获取当前坐标下的商品价格*/
         var money_index=this.shopping[index].product_price
            /*③两者相乘*/
         var money_zong=num*money_index;
            /*④进行判断checked/如果为true则+=总价否则-=总价*/
         if(e.target.checked==true){
          this.price+=money_zong;
         }else{
           this.price-=money_zong;
         }
         console.log(this.price)
        }
    },
    mounted() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    }, 
    created(){
    /*判断用户是否登录，写在APP.vue中没有登录直接跳转到登录页面*/
    this.islogin();
    /*实现商品获取页面创建自动加载*/
    /*1:获取sessionStorage里的用户ID并发送请求获取其购物车信息*/
    var uid=sessionStorage.getItem("uid");
    this.axios.get(
        "http://127.0.0.1:3000/cart/cart",{
            params:{
                uid:uid
        }}
    ).then(res=>{
        //console.log(res.data[0]);
        this.shopping=res.data
        console.log(res.data)
    })
    /*接收判断值-我爱你*/
    if(this.$route.params.id==2){
        this.fal=false;
        this.fal3=true;
        this.fal2=false;
    }else{
        this.fal=true;
        this.fal3=false;
        this.fal2=false;
    }
    
    }
}   
</script>
<style scoped>
.spxx{
    width:100%;
}
.xinxi{
    width:334px;
    height:-93px;
    position:absolute;
    background:#fff;
    margin-top:-93px;
    margin-left:41px;
    z-index:1
}
.xinxi_dianpu{
    width:100%;
    height:38px;
    border-bottom:1px solid rgba(230,230,230,8);
    text-align:left;
    font-size:14px;
    line-height:41px;
}
.xinxi_img{
    width:70px;
    height:70px;
    border:1px solid #ccc;
    margin-top:10px;
}
.xinxi_title{
    width:255px;
    height:70px;
    float:right;
    margin-top:-70px;
}
.RMB{
    width:76px;
    height:20px;
    color:#577BB5;
    margin-top:18px;
    display:block;
}
.jiajian{
    width: 100px;
    height: 26px;
    float: right;
    margin-top: -25px;
}
.jiajian button{
    width:23px;
    height:23px;
}
.jiajian span {
    display: inline-block;
    width: 23px;
}
.fengexian{
    width: 100%;
    height: 7px;
    margin-top: 38px;
    background: rgba(235,235,235,0.8);
}   
.footer_js,.footer_js2{
    position: fixed;
    z-index: 5000;
    top: 85%;
    width:100%;
    height:50px;
    background:#fff;
}
.quanxuan1,.quanxuan2{
    position: fixed;
    background: #fff;
    z-index: 2;
    font-size: 14px;
    margin-top: -20px;
    margin-left: 39px;
}
.heji{
    width:189px;
    height:90%;
    margin-left: 79px;
    margin-top: -30px;
     text-align:right
} 
.jiesuan,.shanchu{
    width: 102px;
    height: 100%;
    float: right;
    margin-top: -48px;
    background:#A6C6F4;
    font-size: 13px;
    color: #fff;
    text-align: center;
    line-height: 50px;
}
.shanchu{
    background:#A6C6F4;
    margin-top: -35px;
}
.ck2{
    margin-top:53px;
}
.ck1{
    margin-top:10px;
}
</style>