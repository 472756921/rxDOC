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
        <Input placeholder="请输入标题" v-model="d.title" style="width: 100%" :maxlength="20" :disabled="(userType==1&&(type==1||type==2||type==3))||(userType==2&&(type==2||type==3))"></Input>
      </div>
      <div class="content">
        <span>患教简述：</span>
        <Input placeholder="请输入患教内容" v-model="d.sketch" style="width: 100%" type="textarea" :rows="4" :disabled="(userType==1&&(type==1||type==2||type==3))||(userType==2&&(type==2||type==3))"></Input>
        <span>患教内容：</span>
        <Input placeholder="请输入患教内容" v-model="d.details" style="width: 100%" type="textarea" :rows="6" :disabled="(userType==1&&(type==1||type==2||type==3))||(userType==2&&(type==2||type==3))"></Input>
      </div>
      <div class="content">
        <span>文章类型：</span>
        <RadioGroup v-model="d.type">
          <Radio label='1' :disabled="(userType==1&&(type==1||type==2||type==3))||(userType==2&&(type==2||type==3))">原创</Radio>
          <Radio label='2' :disabled="(userType==1&&(type==1||type==2||type==3))||(userType==2&&(type==2||type==3))">转载</Radio>
        </RadioGroup>
        <Input placeholder="转载来源" v-if="d.type=='2'" v-model="d.resource" :disabled="(userType==1&&(type==1||type==2||type==3))||(userType==2&&(type==2||type==3))"/>
      </div>
      <div class="content">
        <imgup :type="type" v-if="(userType==1&&type==0)||(userType==2&&(type==0||type==1))" ref="imgC" @handleSuccessc="fpsuccess"/>
        <div v-if="(userType==1&&type!=0)||(userType==2&&(type!=0&&type!=1))">
          <img :src="it.norImageUrl" style="width: 100%" v-for="(it, i) in d.imageList" :key="i"/>
        </div>
      </div>
      <div class="content" v-if="type==1">
        <h3 style="color: red;">您的患教文章未被通过，请修改后发布</h3>
        <p style="color: #999;">{{this.d.notPassRemarks}}</p>
      </div>
      <div class="content" v-if="type==2&&userType==1">
        <span>不通过原因：</span>
        <Input placeholder="请输入不通过原因" v-model="d.notPassRemarks" style="width: 100%" type="textarea" :rows="4"/>
      </div>
      <div class="content">
        <Button type="primary" v-if="type==0" class="Sbtn" long @click="posthj">发布患教</Button>
        <Button type="warning" v-if="type==1&&userType==2" class="Sbtn" long @click="posthj">修改患教</Button>
        <Button type="error" v-if="type==2&&userType==1" class="Sbtn2"  @click="zspp(false)">不通过</Button>
        <Button type="success" v-if="type==2&&userType==1" class="Sbtn2"  @click="zspp(true)">通过-发布</Button>
      </div>
    </div>
</template>

<script>
  import imgup from '../../imgUp';
  import {getPatientEducationById, patientEducationSave} from '../../../interface';

  export default {
    components: {imgup},
    name: 'index',
    created() {
      this.type = this.$route.params.type;
      this.userType = sessionStorage.getItem('type');
      if(this.type != 0) {
        this.getData();
      }
    },
    data() {
      return {
        come: '',
        aClass: '原创',
        type: 0,
        userType: 1,
        d: {
          details:"",
          id:'',
          resource:'',
          imageList:[],
          linkAddress:"",
          notPassRemarks:"",
          sketch:"",
          status: 0,
          title:"",
          type: 0,
        }
      };
    },
    methods: {
      back() {window.history.go(-1)},
      getData() {
        this.$ajax({
          method: 'get',
          url: getPatientEducationById() + this.$route.query.data.id,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.d = res.data;
          this.d.type = this.d.type + '';
          if(this.type == 1) {
            let imgs = res.data.imageList;
            if(this.userType == 2) {
              this.$refs.imgC.newIMGDate(this.d.imageList);
              this.d.imageList = [];
              imgs.map((it) => {
                this.d.imageList.push(it.id);
              })
            }
          }
        }).catch((error) => {
          this.$Message.error('网络掉了，请您稍后');
        });
      },
      fpsuccess(data) {
        this.d.imageList.push(data.id);
      },
      posthj() {
        if(this.userType == 1) {
          this.d.status = 1;
        } else if(this.userType == 2) {
          this.d.status = 0;
        }
        this.d.notPassRemarks = '';
        this.$ajax({
          method: 'post',
          url: patientEducationSave(),
          dataType: 'JSON',
          data: this.d,
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.$Message.success('提交成功');
          setTimeout(()=>{this.back()}, 1000)
        }).catch((error) => {
          this.$Message.error('网络掉了，请您稍后');
        });
      },
      zspp(pass) {
        if(this.userType != 1) {
          return false;
        }
        if(pass) {
          this.d.status = 1;
          this.d.notPassRemarks = '';
        } else {
          if(this.d.notPassRemarks == '') {
            this.$Message.warning('请输入未通过原因');
            return false;
          }
          this.d.status = 2;
        }
        let imgs = this.d.imageList;
        this.d.imageList = [];
        imgs.map((it) => {
          this.d.imageList.push(it.id);
        })
        this.$ajax({
          method: 'post',
          url: patientEducationSave(),
          dataType: 'JSON',
          data: this.d,
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.$Message.success('提交成功');
          setTimeout(()=>{this.back()}, 1000)
        }).catch((error) => {
          this.$Message.error('网络掉了，请您稍后');
        });
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
  .Sbtn2{
    width: 49.2%;
    bottom: 10px;
  }
</style>
