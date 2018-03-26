<template>
  <div>
    <Table :columns="columns1" :data="data1" @on-row-click="datile"></Table>
    <Page :current="1" :total="20" size="small" style="text-align: center; margin-top: .4rem"></Page>
    <Button v-if="type!=3&&utype==1" type="primary" class="Sbtn" @click="posthj">发布活动</Button>
  </div>
</template>

<script>
  export default {
    name: 'activity_list',
    props: ['type'],
    created() {
      this.utype = sessionStorage.getItem('type');
    },
    data() {
      return {
        utype: 1,
        columns1: [
          {title: '标题',key: 'title'},
          {title: '发布者',key: 'sender'},
          {title: '简述',key: 'da'},
        ],
        data1: [
          {title: 'XXXX', da: 'XXXXXXXXXXX', id: 12, sender: 'XX'},
          {title: 'XXXX', da: 'XXXXXXXXXXX', id: 12, sender: 'XX'},
          {title: 'XXXX', da: 'XXXXXXXXXXX', id: 12, sender: 'XX'},
          {title: 'XXXX', da: 'XXXXXXXXXXX', id: 12, sender: 'XX'}
        ],
      };
    },
    methods: {
      datile(data, index){
        this.$router.push({path: '/zonedatile/'+data.id, query: {type: this.type}});
      },
      posthj() {
        this.$router.push({path: '/newAcitve/'+this.type});
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
