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
        <Input style="width: 80%" :maxlength="30" v-model="upD.title"/>
      </div>
      <div class="content">
        <span>活动简述：</span>
        <Input type="textarea" style="width: 80%" v-model="upD.sketch" :maxlength="100"/>
      </div>
      <div class="content">
        <span>活动内容：</span>
        <Input type="textarea" style="width: 80%" v-model="upD.content" :rows="4" :maxlength="500"/>
      </div>
      <div class="content">
        <span>活动地址：</span>
        <Select v-model="upD.provinceId " style="width:40%" @on-change="changePC">
          <Option v-for="item in provinces" :value="item.id" :key="item.id">{{ item.name }}</Option>
        </Select>
        <Select v-model="upD.cityId" style="width:39%">
          <Option v-for="item in city" :value="item.id" :key="item.id">{{ item.name }}</Option>
        </Select>
      </div>
      <div class="content">
        <span>开始时间：</span>
        <DatePicker type="datetime" :options="optionsA" v-model="sd" format="yyyy-MM-dd HH:mm" placeholder="请选择活动时间" style="width: 80%" :editable="false" @on-change="changeDateA"></DatePicker>
      </div>
      <div class="content">
        <span>结束时间：</span>
        <DatePicker type="datetime" :options="optionsB" v-model="ed" format="yyyy-MM-dd HH:mm" placeholder="请选择活动时间" style="width: 80%" :editable="false" @on-change="changeDateB"></DatePicker>
      </div>
      <div class="content">
        <span>活动名额：</span>
        <Input style="width: 80%" v-model="upD.num" :maxlength="30" placeholder="输入 -1 表示不限名额"/>
      </div>
      <div class="content">
        <span>相册<small>（第一张默认为封面图片）</small></span>
        <imgUP :type="1" ref="imgC" @handleSuccessc="fpsuccess" :ptype="5||6"/>
      </div>
      <Button type="info" class="sbtn" @click="send">发布</Button>
    </div>
</template>

<script>
  import imgUP from '../imgUp';
  import {latestActivitysave, activityStylesave} from '../../interface';

    export default {
      name: 'new-acitve',
      components: {imgUP},
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
      data() {
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
          upD: {
            cityId: 0,
            content: '',
            coverImageJsonList: [],
            endTime: '',
            id: '',
            imageJsonList: [],
            num: -1,
            provinceId: 0,
            sketch: '',
            startTime: '',
            title: ''
          },
        }
      },
      methods: {
        changePC() {
          this.getCity(this.upD.provinceId);
        },
        back() {window.history.go(-1)},
        changeDateA(date) {
          const times = new Date(this.sd).getTime();
          this.optionsB = {
            disabledDate(date) {
              return date && date.valueOf() < times;
            }
          };
          this.upD.startTime = date;
        },
        changeDateB(date) {
          this.upD.endTime = date;
        },
        getCity(n) {
          this.$ajax({
            method: 'get',
            url:'http://www.bensonchen.cn/app/api/common/cities/province/' + n,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.city = res.data;
          }).catch((error) => {
          });
        },
        fpsuccess(data) {
          this.upD.imageJsonList.push(data.id);
        },
        send() {
          let URL = latestActivitysave();
          if(this.disabledGroup == '活动风采') {
            URL = activityStylesave();
          }
          this.upD.coverImageJsonList = [this.upD.imageJsonList[0]];
          this.$ajax({
            method: 'post',
            url:URL,
            dataType: 'JSON',
            data: this.upD,
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            console.log(res);
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
