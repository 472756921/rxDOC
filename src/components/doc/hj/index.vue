<template>
    <div>
      <div class="title">
        <Row>
          <Col span="8" style="text-align: left" @click.native="back"><Icon type="chevron-left"></Icon> 返回</Col>
          <Col span="8">发布患教</Col>
        </Row>
      </div>
      <div class="content">
        <span>患教标题：</span>
        <Input placeholder="请输入标题" v-model="d.title" style="width: 100%" :maxlength="20" :disabled="type==2"></Input>
      </div>
      <div class="content">
        <span>患教内容：</span>
        <Input placeholder="请输入患教内容" v-model="d.content" style="width: 100%" type="textarea" :rows="6" :disabled="type==2"></Input>
      </div>
      <div class="content">
        <imgup :type="type"/>
      </div>
      <div class="content" v-if="type==1">
        <h3 style="color: red;">您的患教文章未被通过，请修改后发布</h3>
        <p style="color: #999;">未通过原因：文章太乱，读者不懂</p>
      </div>
      <div class="content">
        <Button type="primary" v-if="type==0" class="Sbtn" long @click="posthj">发布患教</Button>
        <Button type="warning" v-if="type==1" class="Sbtn" long @click="posthj">修改患教</Button>
      </div>
    </div>
</template>

<script>
  import imgup from '../../imgUp';

  export default {
    components: {imgup},
    name: 'index',
    created() {
      this.type = this.$route.params.type;
    },
    data() {
      return {
        type: 0,
        d: {
          content: '',
          title: '',
        }
      };
    },
    methods: {
      back() {window.history.go(-1)},
      posthj() {

      },
    },
  };
</script>

<style scoped>
  .content{
    padding: .4rem;
    padding-top: .8rem;
    font-size: 14px;
  }
  .title{
    font-size: 14px;
    text-align: center;
    padding: .8rem .4rem;
    color: #fff;
    background: #1c2438;
  }
  .Sbtn{
    position: absolute;
    width: 96%;
    bottom: 10px;
  }
</style>
