<template>
  <div>
    <div class="title">
      <Row>
        <Col span="8" style="text-align: left" @click.native="back"><Icon type="chevron-left"></Icon> 返回</Col>
        <Col span="8">病人详情</Col>
      </Row>
    </div>
    <Tabs :animated="false" >
      <TabPane label="医疗信息" name="name1"><midc/></TabPane>
      <TabPane label="生长监控" name="name2"><growthList/></TabPane>
      <TabPane label="自查结果" name="name3"></TabPane>
    </Tabs>
  </div>
</template>

<script>
  import growthList from './datile/growthList';
  import midc from './datile/midc';

    export default {
      name: 'datile',
      components: {growthList, midc},
      data() {
        return {
          a: '',
        };
      },
      methods: {
        back() {window.history.go(-1)},
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
</style>
