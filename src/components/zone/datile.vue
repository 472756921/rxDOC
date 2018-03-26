<template>
  <div class="datile">
    <div class="title">
      <Row>
        <Col span="8" style="text-align: left" @click.native="back"><Icon type="chevron-left"></Icon> 返回</Col>
        <Col span="8">详情</Col>
      </Row>
    </div>
    <div class="content">
      <div class="artTitle">【蕊心健康课堂】孩子发烧宝爸宝妈如何应对？蕊心医生30分钟全解读！</div>
      <p>
        （1）课程简介：正值冬春交替时节，咨询宝贝发热的宝妈越来越多，由此蕊心儿科邀请张碧云医生为大家带来处理孩子发烧的有效方法。<br/>（2）主讲人：广州医科大学附属第一医院儿科主治医师&nbsp;张碧云&nbsp;<br/>（3）课程时间：2018年3月27日&nbsp;&nbsp;16：00<br/>（4）报名方式：扫描图片二维码即可报名，赶快邀请您身边的宝妈参与吧！<br/>&nbsp;蕊心儿科，您身边专业的儿科咨询平台。
      </p>
    </div>
    <div class="content">
      <div class="imgList">
        <img src="http://www.bensonchen.cn:8080/pics/business/NorImages/latestactivity/2018/03/9012ccbe-a76c-414b-ae31-b37e09927727.jpg" width="100%"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['type'],
      name: 'datile',
      methods: {
        back() {window.history.go(-1)},
      },
    };
</script>

<style scoped>
  .datile{
    background: #f6f6f6;
  }
  .title{
    font-size: 14px;
    text-align: center;
    padding: .8rem .4rem;
    color: #fff;
    background: #1c2438;
  }
  .content{
  }
  .artTitle{
    font-size: 16px;
    padding: .6rem;
  }
  .content p{
    color: #888;
    line-height: 1.8rem;
    font-size: 14px;
    padding: .6rem;
  }
</style>
