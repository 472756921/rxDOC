<template>
  <div>
    <Table :columns="columns1" :data="data1" @on-row-click="datile"></Table>
    <Page :current="pageN" :total="total" size="small" style="text-align: center; margin-top: .4rem" @on-change="pageChange"></Page>
    <Button v-if="type!=3&&utype==1" type="primary" class="Sbtn" @click="posthj">发布活动</Button>
  </div>
</template>

<script>
  import {getAllLatestActivity, getAllActivityStyle} from '../../interface';

  export default {
    name: 'activity_list',
    props: ['type'],
    created() {
      this.utype = sessionStorage.getItem('type');
      this.getData();
    },
    data() {
      return {
        pageN: 1,
        total: 1,
        utype: 1,
        columns1: [
          {title: '标题',key: 'title'},
          {title: '发布者',key: 'publishName'},
          {title: '简述',key: 'sketch',
            render: (p, r)=>{
              let d = r.row.sketch.slice(0, 14) + '...'
              return <span>{d}</span>
            }
          },
        ],
        data1: [],
      };
    },
    methods: {
      datile(data, index){
        this.$router.push({path: '/zonedatile/'+data.id, query: {type: this.type}});
      },
      posthj() {
        this.$router.push({path: '/newAcitve/'+this.type});
      },
      pageChange(newPage) {
        this.pageN = newPage;
      },
      getData() {
        let url = getAllLatestActivity();
        if(this.type == 2) {
          url = getAllActivityStyle();
        }
        this.$ajax({
          method: 'get',
          url: url + '?size=11&page=' + this.pageN,
        }).then((res) => {
          this.data1 = res.data.results;
          this.total = res.data.total;
        }).catch((error) => {
        });
      },
    },
  };
</script>

<style scoped>
  .Sbtn{
    width: 95%;
    margin: .4rem auto;
    position: fixed;
    bottom: 10px;
    left: calc(5% / 2);
  }
</style>
