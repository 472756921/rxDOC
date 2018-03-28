<template>
  <div>
    <div class="textCon" v-if="data.userType=='null'">
      <div class="type">
        <div class="lid">患者：</div>
        <p v-html="data.content"></p>
        <img v-if="data.pic!=''" :src="data.pic" width="100%" onClick="showIMG(this)"/>
        <div class="date">{{data.addTime}}</div>
      </div>
    </div>
    <div :class="userType==1?'textCon textCon2':'textCon textCon3'" v-if="data.userType ==1">
      <div class="type">
        <div class="lid">小助手：</div>
        <p v-html="data.content"></p>
        <img v-if="data.pic!=''" :src="data.pic" width="100%" onClick="showIMG(this)"/>
        <div class="date">{{data.addTime}}</div>
      </div>
    </div>
    <div :class="userType==2?'textCon textCon2':'textCon textCon3'" v-if="data.userType ==2">
      <div class="type">
        <div class="lid">医生：</div>
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
    background: #9eea6a;
  }
  .textCon3{
    background: #f9e7cf;
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
