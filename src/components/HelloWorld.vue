<template>
  <div class="hello">
    <RadioGroup v-model="animal">
      <Radio label="2">医生</Radio>
      <Radio label="1">助手</Radio>
    </RadioGroup>
    <div @click="sure">确认</div>
  </div>
</template>

<script>
  import {loginZuShou, loginDoctor} from '../interface';
  import {getStaus} from './stand';

export default {
  name: 'HelloWorld',
  data () {
    return {
      animal: '',
    }
  },
  created() {
    //         男    女
    // 高      3     2
    // 重      5     4
    // 头      7     6
    getStaus(18, 79.5, 3)
  },
  methods: {
    sure() {
      let URL = this.animal==1?loginZuShou():loginDoctor();
      this.$ajax({
        method: 'get',
        url: URL,
        dataType: 'JSON',
        contentType: 'application/json;charset=UTF-8',
      }).then((res) => {
        sessionStorage.setItem('type', this.animal);
        this.$Message.success('OK');
      }).catch((error) => {
        this.$Message.error('网络掉了，请您稍后');
      });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
