<template>
  <Tabs :value="name" class="Ben" :animated="false" @on-click="change">
    <TabPane label="咨询列表" name="name1"><resList/></TabPane>
    <TabPane label="患教信息" name="name2"><hj/></TabPane>
    <TabPane label="我的信息" name="name3"><info v-if="type==2"/><zinfo v-if="type==1"/></TabPane>
  </Tabs>
</template>

<script>
  import resList from './res';
  import hj from './hj';
  import info from './info';
  import zinfo from './z_info';

  export default {
    name: 'index',
    components: { resList, hj, info, zinfo },
    data() {
      return{
        type: 1,
        name: 'name1',
      };
    },
    created() {
      this.type = sessionStorage.getItem('type');
      if(sessionStorage.getItem('Tabname') != null){
        this.name = sessionStorage.getItem('Tabname');
      }
    },
    methods: {
      change(nd) {
        this.name = nd;
        sessionStorage.setItem('Tabname', nd);
      }
    },
  };
</script>

<style scoped>

</style>
<style>
  .Ben .ivu-tabs-bar{
    text-align: center;
    padding: 6px 0;
    margin-bottom: 1px!important;
    background: #1c2438;
    color: #999;
  }
  .Ben .ivu-tabs-tab{
    font-size: 16px;
  }
  .Ben .ivu-tabs-tab-active{
    color: #fff!important;
  }
  .Ben .nav-text{
    width: 100%;
  }
  .Ben .ivu-tabs-ink-bar{
    display: none!important;
  }
</style>
