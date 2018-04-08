<template>
  <div>
    <div class="textCon textCon4" v-if="data.userType==null ">
      <img style="position: absolute;left: -35px" :src="data.childrenIcon" width="30px" />
      <div class="type">
        <div class="lid">患者：</div>
        <p v-html="data.content"></p>
        <img v-if="data.pic!=''" :src="data.pic" width="100%" onClick="showIMG(this)"/>
        <div class="date">{{data.addTime}}</div>
      </div>
    </div>
    <div :class="userType==1?'textCon textCon2':'textCon textCon3'" v-if="data.userType ==1 ">
      <img src="http://www.bensonchen.cn:8080/pics/business/NorImages/icon/2018/03/8af4fe35-2146-4174-b295-7b2ee6aec811.jpg" width="30px" />
      <div class="type">
        <div class="lid">小助手：</div>
        <p v-html="data.content"></p>
        <img v-if="data.pic!=''" :src="data.pic" width="100%" onClick="showIMG(this)"/>
        <div class="date">{{data.addTime}}</div>
      </div>
    </div>
    <div :class="userType==2?'textCon textCon2':'textCon textCon3'" v-if="data.userType ==2 ">
      <img :src="data.doctorIcon" width="30px" />
      <div class="type">
        <p v-html="data.content"></p>
        <img v-if="data.pic!=''" :src="data.pic" width="100%" onClick="window.showIMG(this)"/>
        <div class="date">{{data.addTime}}</div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      name: 'text-con',
      props: ['data', 'userType'],
      data() {
        return {
          isDOC: false,
          isACC: true,
        };
      },
      methods: {
        showIMG(data) {
        },
      },
    };
</script>

<style scoped>
  .textCon{
    position: relative;
    padding: .4rem;
    background: #fff;
    width: 55%;
    border-radius: 5px;
    margin: .4rem 0;
    float: left;
    word-wrap:break-word;
    word-break:break-all;
  }
  .textCon2{
    float: right;
    margin-right: 30px;
    background: #b1d664;
  }
  .textCon2 > img{
    position: absolute;
    right: -35px;
  }
  .textCon3{
    background: #f9e7cf;
    margin-left: 40px;
  }
  .textCon3 > img{
    position: absolute;
    left: -35px;
  }
  .textCon4{
    background: #f9e7cf;
    margin-left: 40px;
  }
  .lid{
    color: #999;
  }
  .type p{
    color: #666;
  }
  .date{
    color: #999;
  }
</style>
