<template>
  <div>
    <Table :columns="columns1" :data="data1" @on-row-click="datile"></Table>
    <Page :current="1" :total="20" size="small" style="text-align: center; margin-top: .4rem"></Page>
    <Button type="info" class="Sbtn" @click="posthj">写一条</Button>
  </div>
</template>

<script>
  export default {
    name: 'shared',
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
          {title: '评论总数',key: 'da'},
        ],
        data1: [
          {title: 'XXXX', sender: 'XXXXXXXXXXX', da: 12},
          {title: 'XXXX', sender: 'XXXXXXXXXXX', da: 12},
          {title: 'XXXX', sender: 'XXXXXXXXXXX', da: 12},
          {title: 'XXXX', sender: 'XXXXXXXXXXX', da: 12}
        ],
      };
    },
    methods: {
      datile(data, index){
        this.$router.push({path: '/s_datile/'+data.id, query: {type: this.type}})
      },
      posthj() {},
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
