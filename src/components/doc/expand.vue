<style>
  .ivu-table-expanded-cell{
    padding: .8rem !important;
  }
  .expand-value{
    color: #999;
  }
</style>
<template>
  <Row class="expand-row" style="line-height: 1.6rem">
    <Col span="24">
      <span class="expand-key">主题： </span>
      <span class="expand-value">{{ row.questionName }}</span>
    </Col>
    <Col span="24">
      <span class="expand-key">更新时间： </span>
      <span class="expand-value">{{ row.endTime }}</span>
    </Col>
    <Col span="24">
      <Button type="success" size="small" @click="datile(row)">查看详情</Button>
    </Col>
  </Row>
</template>
<script>
  export default {
    props: {
      row: Object
    },
    data() {
      return {
        type: 1,
      };
    },
    created() {
      this.type = sessionStorage.getItem('type');
    },
    methods: {
      datile(data) {
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
    }
  };
</script>
