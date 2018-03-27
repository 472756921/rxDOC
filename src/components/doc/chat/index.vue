<template>
  <div>
    <div class="title">
      <Row>
        <Col span="8" style="text-align: left" @click.native="back"><Icon type="chevron-left"></Icon> 返回</Col>
        <Col span="8">{{title}}</Col>
        <Col span="8" style="text-align: right">
          <span style="color: #00c000" v-if="isOver">已完成</span>
          <Button type="error" v-if="!isOver&&type==2" @click="closeQ=true" size="small">结束问答</Button>
          <span v-if="type==1&&!isOver" style="color:red;">未完成</span>
        </Col>
      </Row>
    </div>

    <div class="content" id="ccon">
      <textCon v-for="(it, i) in chat" :key="i" :data="it" :userType="type"/>
    </div>

    <div class="option">
      <Input placeholder="请输入内容" v-model="text" style="width: 64%" :maxlength="100"></Input>
      <Button type="info" style="float: right" shape="circle" icon="image" @click="imgSelect" :disabled="isOver"></Button>
      <Button type="info" style="width: 20%;float: right;margin-right: 10px" @click="send" :disabled="isOver">发送</Button>
    </div>
    <input type="file" style="display: none" name="file" id="files" @change="imgsend" accept="image/*"/>

    <Modal v-model="showF" title="查看详情" :closable="false" :mask-closable="false">
      <p slot="header" style="text-align:center">图片详情</p>
      <img :src="imgSrc" width="100%"/>
      <div slot="footer">
        <Button type="error" size="large" long @click="showF=false">关闭</Button>
      </div>
    </Modal>

    <Modal v-model="closeQ" title="确认关闭" :closable="false" :mask-closable="false" @on-ok="closeQues">
      <p slot="header" style="text-align:center;color: #f60;">结束问答</p>
      <div>您要结束这条咨询吗？<br/>结束后，用户将无法再通过这条会话向您咨询。</div>
    </Modal>
  </div>
</template>

<script>
  import textCon from './textCon';
  import {getChatList} from '../../../interface';
  export default {
    name: 'chat',
    components: {textCon},
    data() {
      return {
        docID: '',
        type: 1,
        isOver: false,
        showF: false,
        closeQ: false,
        imgSrc: '',
        title: '',
        text: '',
        images: '',
        total: '',
        pageN: '',
        cid: '',
        //1acc  2doc
        chat: [],
        obj: {
          data: "",
          fileType: "",
          id: '',
          norImageUrl: "",
          originalName: ""
        },
      };
    },
    created() {
      const data = this.$route.query.data;
      this.title = data.childrenName;
      this.docID = data.doctorId;
      this.cid = data.id;
      if(this.cid == undefined) {
        this.back();
      }
      this.type = this.$route.query.type;
      this.isOver = data.status=='2'?true:false;
      this.getData();
    },
    mounted() {
      const h = window.screen.availHeight;
      const c = document.getElementById('ccon');
      c.style.height = h - 91 + 'px';
      c.scrollTop = c.scrollHeight;
    },
    watch: {
      chat: {
        handler: (v, ov) => {
          const c = document.getElementById('ccon');
          setTimeout(()=> {c.scrollTop = c.scrollHeight;}, 100)
        }
      },
    },
    methods: {
      send() {
        if(this.text == '') {
          return false;
        }
        this.$ajax({
          method: 'post',
          data: {
            adminId: this.type==1?this.docID:'',
            content: this.text,
            customerId: '',
            doctorConsultId: this.doctorConsultId,
            doctorId: this.type==2?this.docID:'',
            imageJsonList:this.obj,
            type: this.type,
            userType: this.userType,
          },
          url: 'http://118.31.38.219/admin/app/api/doctorChatCustomer/save',
        }).then((res) => {
        }).catch((error) => {
        });
        this.chat.push({content: this.text, addTime: this.getNowFormatDate(), userType: this.type});
        this.text = '';
      },
      imgSelect() {
        document.getElementById('files').click();
      },
      closeQues() {
        this.isOver = true;
      },
      back() {window.history.go(-1)},
      imgsend() {
        const files = document.getElementById('files').files[0];
        if (files.type != 'image/jpeg') {
          this.$Message.error('请选择图片文件');
          return false;
        }
        let reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onloadend = (res) => {
          const re = res.target.result;
          this.dealImage(re, {width: 500}, (data)=>{this.chat.push({message: '<img src="'+data+'" style="width: 100%" onClick="showIMG(this)"/>', date: this.getNowFormatDate(), type: this.type});});
          window.showIMG = (data) => {
            this.showF = true;
            this.imgSrc = data.src;
          }
        }
      },
      getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var Hour = date.getHours();
        var Min = date.getMinutes();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        if (Hour >= 0 && Hour <= 9) {
          Hour = "0" + Hour;
        }
        if (Min >= 0 && Min <= 9) {
          Min = "0" + Min;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate + ' ' + Hour + ':' + Min;
        return currentdate;
      },
      dealImage(path, obj, callback){
        var img = new Image();
        img.src = path;
        img.onload = function(){
          var that = this;
          // 默认按比例压缩
          var w = that.width,
            h = that.height,
            scale = w / h;
          w = obj.width || w;
          h = obj.height || (w / scale);
          var quality = 0.7;  // 默认图片质量为0.7
          //生成canvas
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          // 创建属性节点
          var anw = document.createAttribute("width");
          anw.nodeValue = w;
          var anh = document.createAttribute("height");
          anh.nodeValue = h;
          canvas.setAttributeNode(anw);
          canvas.setAttributeNode(anh);
          ctx.drawImage(that, 0, 0, w, h);
          // 图像质量
          if(obj.quality && obj.quality <= 1 && obj.quality > 0){
            quality = obj.quality;
          }
          // quality值越小，所绘制出的图像越模糊
          var base64 = canvas.toDataURL('image/jpeg', quality );
          // 回调函数返回base64的值
          callback(base64);
        }
      },
      getData() {
        this.$ajax({
          method: 'get',
          url: getChatList() + this.cid,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.total = res.data.total;
          this.chat = res.data.results;
        }).catch((error) => {
          this.$Message.error('网络掉了，请您稍后');
        });
      },
    },
  };
</script>

<style scoped>
  .title{
    font-size: 14px;
    text-align: center;
    padding: .8rem .4rem;
    color: #fff;
    background: #1c2438;
  }
  .content{
    overflow: auto;
    height: 500px;
    width: 95%;
    margin: 0 auto;
    box-shadow: 0 0 20px #ddd;
    background: #f4f4f4;
    padding: .4rem;
  }
  .option{
    padding: .4rem;
  }
</style>
