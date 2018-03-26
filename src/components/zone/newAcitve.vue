<template>
    <div>
      <div class="title">
        <Row>
          <Col span="8" style="text-align: left" @click.native="back"><Icon type="chevron-left"></Icon> 返回</Col>
          <Col span="8">发布活动</Col>
        </Row>
      </div>
      <div class="activeClass">
        <span>活动类型：</span>
        <RadioGroup v-model="disabledGroup">
          <Radio label="最新活动"></Radio>
          <Radio label="活动风采"></Radio>
        </RadioGroup>
      </div>
      <div class="content">
        <span>活动标题：</span>
        <Input style="width: 80%" :maxlength="30"/>
      </div>
      <div class="content">
        <span>活动简述：</span>
        <Input type="textarea" style="width: 80%" :maxlength="100"/>
      </div>
      <div class="content">
        <span>活动内容：</span>
        <Input type="textarea" style="width: 80%" :rows="4" :maxlength="500"/>
      </div>
      <div class="content">
        <span>活动地址：</span>
        <Select v-model="provincesID" style="width:40%">
          <Option v-for="item in provinces" :value="item.id" :key="item.id">{{ item.name }}</Option>
        </Select>
        <Select v-model="cityID" style="width:39%">
          <Option v-for="item in city" :value="item.id" :key="item.id">{{ item.name }}</Option>
        </Select>
      </div>
      <div class="content">
        <span>开始时间：</span>
        <DatePicker type="datetime" :options="optionsA" v-model="sd" format="yyyy-MM-dd HH:mm" placeholder="请选择活动时间" style="width: 80%" :editable="false" @on-change="change('sd')"></DatePicker>
      </div>
      <div class="content">
        <span>结束时间：</span>
        <DatePicker type="datetime" :options="optionsB" v-model="ed" format="yyyy-MM-dd HH:mm" placeholder="请选择活动时间" style="width: 80%" :editable="false"></DatePicker>
      </div>
      <div class="content">
        <span>活动名额：</span>
        <Input style="width: 80%" :maxlength="30" placeholder="输入 -1 表示不限名额"/>
      </div>
      <div class="content">
        <span>封面</span>
        <imgUPS/>
      </div>
      <div class="content">
        <span>相册</span>
        <imgUP/>
      </div>
      <Button type="info" class="sbtn" @click="send">发布</Button>
    </div>
</template>

<script>
  import imgUP from '../imgUp';
  import imgUPS from '../imgUpS';

    export default {
      name: 'new-acitve',
      components: {imgUP, imgUPS},
      watch: {
        provincesID(v, ov) {
          this.getCity(v);
        },
      },
      created() {
        const utype = this.$route.params.type;
        if(utype == 1) {
          this.disabledGroup = '最新活动';
        } else {
          this.disabledGroup = '活动风采';
        }
        this.$ajax({
          method: 'get',
          url:'http://www.bensonchen.cn/app/api/common/provinces',
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.provinces = res.data;
        }).catch((error) => {
          this.$Message.error('网络掉了，请您稍后');
        });

      },
      data(){
        return {
          optionsA: {
            disabledDate (date) {
              return date && date.valueOf() < Date.now();
            }
          },
          optionsB: {
            disabledDate (date) {
              return date && date.valueOf() < Date.now();
            }
          },
          sd: "",
          ed: "",
          provinces: [],
          city: [],
          provincesID: '',
          cityID: '',
          disabledGroup: '最新活动',
        }
      },
      methods: {
        send() {},
        back() {window.history.go(-1)},
        change(type) {
          if(type == 'sd') {
            const times = new Date(this.sd).getTime();
            this.optionsB = {
              disabledDate(date) {
                return date && date.valueOf() < times;
              }
            };
          }
        },
        getCity(n) {
          this.$ajax({
            method: 'get',
            url:'http://www.bensonchen.cn/app/api/common/cities/province/' + n,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            console.log(res);
            this.city = res.data;
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
  .activeClass{
    padding: .4rem;
  }
  .content{
    padding: .4rem;
  }
  .sbtn{
    width: 90%;
    margin: 30px auto;
    display: block;
  }
</style>
