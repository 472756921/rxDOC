<template>
  <Upload action="http://www.bensonchen.cn/admin/app/api/base/uploadImg">
    <Button type="ghost" icon="ios-cloud-upload-outline">上传图片</Button>
  </Upload>
</template>
<script>
  export default {
    methods: {
      handleSuccess (res, file) {
        file.url = res.data.norImageUrl;
        file.name = res.data.fileName;
        this.$emit('handleSuccessc',res.data);
      },
    }
  }
</script>
