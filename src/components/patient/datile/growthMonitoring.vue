<template>
  <div>
    <Tabs :animated="false" >
      <TabPane label="列表" name="name1"><growthList/></TabPane>
      <TabPane label="身高" name="name2"><growthHight/></TabPane>
      <TabPane label="体重" name="name3"></TabPane>
      <TabPane label="头围" name="name4"></TabPane>
    </Tabs>
  </div>
</template>

<script>
  import growthList from './growthList';
  import growthHight from './growthHight';
    export default {
      components: {growthList, growthHight},
      name: 'growth-monitoring',
    };
</script>

<style scoped>

</style>
