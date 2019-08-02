<template>
    <div class="box">
        <p>
            {{ msg }}
        </p>
    </div>
</template>

<script>

export default {
  name: 'Message',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box {
        background: antiquewhite;
        padding: 10px;
        border: 1px solid #42b983;
    }
</style>
