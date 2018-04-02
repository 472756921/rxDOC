<template>
  <div class="datile" id="datileID">
    <div class="title">
      <Row>
        <Col span="8" style="text-align: left" @click.native="back"><Icon type="chevron-left"></Icon> 返回</Col>
        <Col span="8">共享之家</Col>
      </Row>
    </div>
    <div class="content">
      <div class="artTitle"><Avatar size="small" :src="data.customerIcon" /> {{data.customerName}}</div>
      <h3 style="padding: .6rem">{{data.title}}</h3>
      <p v-html="data.content"></p>
    </div>
    <div class="content">
      <div class="imgList" v-for="(it, i) in data.imageJsonList" :key="i">
        <img :src="it.norImageUrl" width="100%" @click="showIMG(it.norImageUrl)"/>
      </div>
    </div>
    <div class="content">
      <div style="padding: .4rem; color: #999;text-align: right">2012-12-12 08:22:34</div>
    </div>

    <div class="copen">
      <div style="padding-left: 3px;border-left: 6px solid #19be6b;">评论</div>
      <div style="border-bottom: 1px solid #eee;margin-top: .4rem"></div>
      <cop/>
    </div>
    <Modal v-model="showF" title="查看详情" :closable="false" :mask-closable="false">
      <p slot="header" style="text-align:center">图片详情</p>
      <img :src="imgSrc" width="100%"/>
      <div slot="footer">
        <Button type="error" size="large" long @click="showF=false">关闭</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import cop from './cop/index';
  import {getCustomerShareById} from '../../interface';

    export default {
      props: ['type'],
      name: 's_datile',
      components: {cop},
      data() {
        return {
          showF: false,
          imgSrc: '',
          data: '',
          cdata: '',
        };
      },
      created() {
        this.getData();
      },
      mounted() {
        let d = document.getElementById('datileID');
        d.style.height = document.body.scrollHeight + 'px';
        d.style.minHeight = window.screen.availHeight + 'px';
      },
      methods: {
        getData() {
          this.$ajax({
            method: 'get',
            url: getCustomerShareById() + this.$route.params.id,
          }).then((res) => {
            this.data = res.data;
          }).catch((error) => {
            this.$Message.error('网络故障，获取失败');
          });
        },
        back() {window.history.go(-1)},
        showIMG(src) {
          this.imgSrc = src;
          this.showF = true;
        },
      },
    };
</script>

<style scoped>
  .datile{
    background: #f6f6f6;
    overflow: auto;
  }
  .title{
    font-size: 14px;
    text-align: center;
    padding: .8rem .4rem;
    color: #fff;
    background: #1c2438;
  }
  .content{
    overflow: auto;
  }
  .artTitle{
    padding: .6rem;
  }
  .content p{
    color: #888;
    line-height: 1.8rem;
    font-size: 14px;
    padding: .6rem;
  }
  .imgList{
    width: 25%;
    height: 25vw;
    overflow: hidden;
    float: left;
  }
  .copen{
    font-size: 14px;
    padding: .4rem;
    margin-top: .6rem;
  }
</style>
