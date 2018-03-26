<template>
    <div class="cop">
      <div class="my">
        <Row>
          <Col span="3"><Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" /></Col>
          <Col span="17">
            <Input v-model="cp" placeholder="说说你的看法" style="width: 95%; background: #eee"></Input>
          </Col>
          <Col span="4">
            <Button type="success" class="Sbtn" @click="posthj">评论</Button>
          </Col>
        </Row>
      </div>
      <div class="orther">
        <div class="pil">
          <Row>
            <Col span="3"><Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" /></Col>
            <Col span="21">
              <div style="color: #666;">liudehua</div>
              <div>XXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
              <div style="color: #ccc;font-size: 12px">
                <span v-if="!isB">刚刚</span>
                <input v-model="bcp" v-if="isB" size="small" autofocus="autofocus" placeholder="说说你的看法" @blur="backS" class="rebackInput"></input>
                <span style="float: right;color:#19be6b;" @click="backS">{{baText}}</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'index',
      data() {
        return {
          cp: '',
          isB: false,
          bcp: '',
          baText: '回复',
        };
      },
      methods: {
        posthj() {},
        backS() {
          if(this.baText == '回复'){
            this.baText = '发送';
            this.isB = true;
          } else if (this.baText == '发送') {
            this.baText = '回复';
            this.isB = false;
          }
        },
      }
    };
</script>

<style scoped>
  .orther{
    margin-top: 1.4rem;
  }
  .cop{
    padding: .8rem 0;
  }
  .pil{
    margin: .6rem 0;
    border-bottom: 1px solid #eee;
    padding: .4rem 0;
    color: #999;
  }
  .rebackInput{
    width: 80%;
    border: 1px solid #ccc;
    height: 1.4rem;
    padding: .2rem .4rem;
    border-radius: 3px;
  }
</style>
