<template>
    <div>
        <div class="box">
            <h2>THe count is: {{ count }}</h2>
        </div>
        <p>
            <button @click="count += 1">Increment</button>
        </p>
    </div>
</template>

<script>

export default {
  name: 'Counter',
  props: {
    msg: String
  },
    data() {
        return {
            count: 0
        }
    },
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
