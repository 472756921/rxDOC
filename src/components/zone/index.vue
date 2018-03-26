<template>
  <Tabs :value="name" class="Ben" :animated="false" @on-click="change">
    <TabPane label="最新活动" name="name1"><list :type="1"/></TabPane>
    <TabPane label="活动风采" name="name2"><list :type="2"/></TabPane>
    <TabPane label="共享之家" name="name3"><shared/></TabPane>
  </Tabs>
</template>

<script>
  import list from './list';
  import shared from './shared';

  export default {
    name: 'index',
    components: { list, shared },
    data() {
      return{
        type: 1,
        name: 'name1',
      };
    },
    created() {
      this.type = sessionStorage.getItem('type');
      if(sessionStorage.getItem('Tabname2') != null){
        this.name = sessionStorage.getItem('Tabname2');
      }
    },
    methods: {
      change(nd) {
        this.name = nd;
        sessionStorage.setItem('Tabname2', nd);
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
