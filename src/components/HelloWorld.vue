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
export default {
  name: 'HelloWorld',
  data () {
    return {
      animal: '',
    }
  },
  methods: {
    sure() {
      sessionStorage.setItem('type', this.animal);
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
