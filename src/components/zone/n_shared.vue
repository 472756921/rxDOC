<template>
    <div class="nsC">
      <div class="title">发布共享</div>
      <div style="padding: .6rem">
        <div>标题：<Input v-model="upD.title"  style="width: 300px"></Input></div>
        <br/>
        <div>内容：<Input v-model="upD.content" type="textarea" :rows="4" ></Input></div>
        <br/>
        <imgUP :type="1" ref="imgC" @handleSuccessc="fpsuccess" :ptype="4" />
        <br/>
        <Button type="info" class="sbtn" long @click="send">发布</Button>
      </div>
    </div>
</template>

<script>
  import imgUP from '../imgUp';
  import {customerShareSave} from '../../interface';
    export default {
      name: 'n_shared',
      components: {imgUP},
      data() {
        return {
          upD: {
            content: "",
            imageJsonList: [],
            title: ""
          },
        }
      },
      methods: {
        fpsuccess(data) {
          this.upD.imageJsonList.push(data.id);
        },
        send() {
          this.$ajax({
            method: 'post',
            url:customerShareSave(),
            dataType: 'JSON',
            data: this.upD,
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.$Message.success('发布成功');
          }).catch((error) => {
            this.$Message.error('网络掉了，请您稍后');
          });
        },
      },
    };
</script>

<style scoped>
  .nsC{
  }
  .title{
    text-align: center;
    font-size: 16px;
    padding: .6rem;
    background: #666;
    color: #fff;
  }
</style>
