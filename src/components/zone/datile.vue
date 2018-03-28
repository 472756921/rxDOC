<template>
  <div class="datile">
    <div class="title">
      <Row>
        <Col span="8" style="text-align: left" @click.native="back"><Icon type="chevron-left"></Icon> 返回</Col>
        <Col span="8">详情</Col>
      </Row>
    </div>
    <div class="content">
      <div class="imgList">
        <img v-for="(it, i) in data.imageJsonList" :src="it.norImageUrl" :key="i" width="100%"/>
      </div>
    </div>
    <div class="content">
      <div class="artTitle">{{data.title}}</div>
      <div class="per">{{data.sketch}}</div>
      <p v-html="data.content"></p>
    </div>
    <div class="content" style="padding: .6rem; color: #999">活动时间：{{data.startTime}} ~ {{data.endTime}}</div>
    <div class="content" style="padding: .6rem; color: #999">名额：{{data.num==-1?'不限':data.num}}</div>
  </div>
</template>

<script>
  import {getLatestActivityById, getActivityStyleById} from '../../interface';
    export default {
      name: 'datile',
      created() {
        this.mID = this.$route.params.id;
        this.type = this.$route.query.type
        this.getData();
      },
      data() {
        return {
          mID: '',
          data: '',
        }
      },
      methods: {
        getData() {
          let url = getLatestActivityById();
          if(this.type == 2) {
            url = getActivityStyleById();
          }
          this.$ajax({
            method: 'get',
            url: url + this.mID,
          }).then((res) => {
            this.data = res.data;
          }).catch((error) => {
            this.$Message.error('网络故障，获取失败');
          });
        },
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
  .per{
    padding: .6rem;
    color: #666;
  }
</style>
