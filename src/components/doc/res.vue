<template>
  <div>
    <Table :columns="columns1" :data="data1" @on-row-click="datile"></Table>
    <Page :current="1" :total="total" size="small" style="text-align: center; margin-top: .4rem" @on-change="pageChange"></Page>
    <Modal v-model="closeQ" title="确认关闭" :closable="false" :mask-closable="false" @on-ok="closeQues">
      <p slot="header" style="text-align:center;color: #f60;">结束服务</p>
      <div>您要结束这条服务吗？</div>
    </Modal>
  </div>
</template>

<script>
  import {getJZList} from '../../interface';

    export default {
      name: 'res',
      created() {
        this.type = sessionStorage.getItem('type');
      },
      data() {
        return {
          type: 1,
          pageN: 1,
          total: 1,
          closeQ: false,
          tempID: '',
          columns1: [
            {title: '宝宝名',key: 'childrenName'},
            {title: '类型',key: 'type',
              render: (p, r) => {
                if(r.row.type == '1') {
                  return <div>在线问诊</div>
                } else if(r.row.type == '2') {
                  return <div>电话预约</div>
                }else if(r.row.type == '3') {
                  return <div>视频预约</div>
                }
              }
            },
            {title: '联系电话',key: 'phone'},
            // {title: '时间',key: 'addTime'},
            {title: '医生',key: 'doctorName'},
            {title: '状态',key: 'status',
              render: (p, r) => {
                if(r.row.status == null) {
                  return <div style='color: red'>未完成</div>
                } else if(r.row.status == '2') {
                  return <div style='color: green'>已完成</div>
                }else if(r.row.status == '1') {
                  return <div style='color: orangered'>进行中</div>
                }
              }
            },
          ],
          data1: []
        };
      },
      mounted() {
        this.getData(1);
      },
      methods: {
        pageChange(newPage) {
          this.pageN = newPage;
          this.getData();
        },
        getData() {
          this.$ajax({
            method: 'get',
            url: getJZList() + '?size=11&page=' + this.pageN,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.total = res.data.total;
            this.data1 = res.data.results;
          }).catch((error) => {
            this.$Message.error('网络掉了，请您稍后');
          });
        },
        closeQues() {

        },
        datile(data, index) {
          if (this.type == 1 && data.status == null) {
            if(data.type != '1') {
              this.tempID = data.id;
              this.closeQ = true;
            }
          }
          if(data.type == '1') {
            this.$router.push({path: '/chat/'+data.id, query: {data: data, type: this.type}})
          }
        },
      },
    };
</script>

<style scoped>
</style>
