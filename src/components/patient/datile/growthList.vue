<template>
  <div>
    <div style="margin: 0 15px">图例：
      <span class="cj1">三倍偏差</span>，<span class="cj2">两倍偏差</span>，<span class="cj3">一倍偏差</span>，<span class="cj4">正常</span>
    </div>
    <Table :columns="columns1" :data="data1"></Table>
    <Page :current="pageN" :total="total" size="small" style="text-align: center; margin-top: .4rem" @on-change="pageChange"></Page>
  </div>
</template>

<script>
import {getAllChildrenGrowRecord, getChildrenById} from '../../../interface';
import {getStaus} from '../../stand';

  export default {
    name: 'growthList',
    data() {
      return {
        pageN: 1,
        sex: 1,
        total: 1,
        columns1: [
          {
            title: '月龄',
            key: 'age'
          },
          {
            title: '身高(cm)',
            key: 'height',
            render: (p, r) => {
              let sext = 3;
              if(this.sex == 2) {
                sext = 2
              }
              let v = getStaus(r.row.age, r.row.height, sext);
              if(v>=3 || v<=-3){
                return <span class="cj1">{r.row.height}</span>
              } else if(v>=-1 && v<=1){
                return <span  class="cj4">{r.row.height}</span>
              } else {
                return <span class="cj2">{r.row.height}</span>
              }
            }
          },
          {
            title: '体重(kg)',
            key: 'weight',
            render: (p, r) => {
              let sext = 5;
              if(this.sex == 2) {
                sext = 4
              }
              let v = getStaus(r.row.age, r.row.weight, sext);
              if(v >= 3 || v <= -3){
                return <span class="cj1">{r.row.weight}</span>
              } else if(v >= -1 && v <= 1){
                return <span  class="cj4">{r.row.weight}</span>
              } else {
                return <span class="cj2">{r.row.weight}</span>
              }
            }
          },
          {
            title: '头围(cm)',
            key: 'headCircumference',
            render: (p, r) => {
              let sext = 7;
              if(this.sex == 2) {
                sext = 6
              }
              let v = getStaus(r.row.age, r.row.headCircumference, sext);
              if(v >= 3 || v <= -3){
                return <span class="cj1">{r.row.headCircumference}</span>
              } else if(v >= -1 && v <= 1){
                return <span  class="cj4">{r.row.headCircumference}</span>
              } else {
                return <span class="cj2">{r.row.headCircumference}</span>
              }
            }
          }
        ],
        data1: []
      };
    },
    created() {
      this.getData();
    },
    methods: {
      pageChange(pn) {
        this.pageN = pn;
      },
      getData() {
        this.$ajax({
          method: 'get',
          url: getAllChildrenGrowRecord() + this.$route.params.id + '&page=' + this.pageN,
        }).then((res) => {
          this.data1 = res.data.results;
          this.total = res.data.total;
          this.$ajax({
            method: 'get',
            url: getChildrenById() + this.$route.params.id,
          }).then((res) => {
            this.sex = res.data.sex;
          }).catch((error) => {
            this.$Message.error('网络出错，请稍后再试');
          });
        }).catch((error) => {
          this.$Message.error('网络出错，请稍后再试');
        });
      }
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
  .cj1{
    color: #dc134e;
  }
  .cj2{
    color: #e69f82;
  }
  .cj3{
    color: #3b769f;
  }
  .cj4{
    color: #8bb26a;
  }
</style>
