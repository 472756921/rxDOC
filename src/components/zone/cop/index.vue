<template>
    <div class="cop">
      <div class="my" v-if="ut==1">
        <Row>
          <Col span="3"><Avatar style="color: #f56a00;background-color: #fde3cf">User</Avatar></Col>
          <Col span="17">
            <Input v-model="cp" placeholder="说说你的看法" style="width: 95%; background: #eee"></Input>
          </Col>
          <Col span="4">
            <Button type="success" class="Sbtn" @click="posthj">评论</Button>
          </Col>
        </Row>
      </div>
      <div class="orther">
        <div class="pil" v-for="(it, i) in cdata">
          <Row>
            <Col span="3"><Avatar :src="it.customerIcon" /></Col>
            <Col span="21">
              <div style="color: #666;">{{it.customerName}} <span v-if="it.replyCustomerName!=''" style="color: #aaaaaa;"> 回复：{{it.replyCustomerName}}</span></div>
              <div>{{it.content}}</div>
              <div style="color: #ccc;font-size: 12px">
                <span>{{it.addTime}}</span>
                <input v-model="bcp" v-if="isB&&showI==i" size="small" autofocus="autofocus" placeholder="说说你的看法" @blur="backS" class="rebackInput"></input>
                <span style="float: right;color:#19be6b;" @click="backS(i, it)" v-if="ut==1">{{baText}}</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
</template>

<script>
  import {getAllCustomerShareComment, customerShareComment} from '../../../interface';
    export default {
      name: 'index',
      data() {
        return {
          ut: 1,
          cp: '',
          isB: false,
          bcp: '',
          cdata: '',
          baText: '回复',
          showI: '',
        };
      },
      mounted() {
        this.getData();
        this.ut = sessionStorage.getItem('type');
      },
      methods: {
        posthj() {
          if(this.cp == '') {
            return false;
          }
          let data = {
            content: this.cp,
            customerShareId: this.$route.params.id,
            id: '',
            replyCustomerId: '',
          };
          this.$ajax({
            method: 'post',
            data: data,
            url: customerShareComment(),
          }).then((res) => {
            this.$Message.success('评论成功');
            window.location.reload();
          }).catch((error) => {
            this.$Message.error('网络故障，获取失败');
          });
        },
        getData() {
          this.$ajax({
            method: 'get',
            url: getAllCustomerShareComment() + this.$route.params.id,
          }).then((res) => {
            this.cdata = res.data.results;
          }).catch((error) => {
            this.$Message.error('网络故障，获取失败');
          });
        },
        backS(i, it) {
          this.showI = i;
          if(this.baText == '回复'){
            this.baText = '发送';
            this.isB = true;
          } else if (this.baText == '发送') {
            if(this.bcp == '') {
              return false;
            }
            let data = {
              content: this.bcp,
              customerShareId: this.$route.params.id,
              id: '',
              replyCustomerId: it.customerId,
            };

            this.$ajax({
              method: 'post',
              data: data,
              url: customerShareComment(),
            }).then((res) => {
              this.$Message.success('回复成功');
              window.location.reload();
            }).catch((error) => {
              this.$Message.error('网络故障，获取失败');
            });
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
