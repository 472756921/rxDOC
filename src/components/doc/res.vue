<template>
  <div>
    <Table :columns="columns1" :data="data1" @on-row-click="datile"></Table>
    <Page :current="1" :total="50" size="small" style="text-align: center; margin-top: .4rem"></Page>
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
          closeQ: false,
          tempID: '',
          columns1: [
            {title: '宝宝名',key: 'name'},
            {title: '类型',key: 'type'},
            {title: '联系电话',key: 'phone'},
            {title: '时间',key: 'date'},
            {title: '医生',key: 'doc'},
            {title: '状态',key: 'status',
              render: (p, r) => {
                if(r.row.status == '未完成') {
                  return <div style='color: red'>未完成</div>
                } else if(r.row.status == '已完成') {
                  return <div style='color: green'>已完成</div>
                }
              }
            },
          ],
          data1: [
            {name: '溜溜', type: '视频预约', phone: '17782293840', date: '2012-12-12', status: '未完成', id: 12, doc: '刘德华'},
            {name: '溜溜', type: '在线咨询', phone: '17782293840', date: '2012-12-12', status: '未完成', id: 12, doc: '刘德华'},
            {name: '溜溜', type: '视频预约', phone: '17782293840', date: '2012-12-12', status: '已完成', id: 12, doc: '刘德华'},
            {name: '溜溜', type: '电话预约', phone: '17782293840', date: '2012-12-12', status: '已完成', id: 12, doc: '刘德华'},
            {name: '溜溜', type: '在线咨询', phone: '17782293840', date: '2012-12-12', status: '已完成', id: 12, doc: '刘德华'},
          ]
        };
      },
      mounted() {
        this.getData();
      },
      methods: {
        getData() {
          this.$ajax({
            method: 'get',
            url: getJZList(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            console.log(res.data);
          }).catch((error) => {
            this.$Message.error('网络掉了，请您稍后');
          });
        },
        closeQues() {

        },
        datile(data, index) {
          if (this.type == 1 && data.status == '未完成') {
            if(data.type != '在线咨询') {
              this.tempID = data.id;
              this.closeQ = true;
            }
          }
          if(data.type == '在线咨询') {
            this.$router.push({path: '/chat/'+data.id, query: {data: data, type: this.type}})
          }
        },
      },
    };
</script>

<style scoped>

</style>
