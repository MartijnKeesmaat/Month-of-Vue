<template lang="html">
  <article class="mv-alert mv-alert--error">
    <button @click="onClose" class="mv-alert__close">x</button>
    <p class="mv-alert__message">{{ text }}</p>
  </article>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    onClose () {
      this.$emit('dismissed')
    }
  }
}
</script>

<style lang="scss" scoped>
  .mv-alert{
    width: 100%;
    padding: 20px 30px;
    position: relative;

    &--error{
      background: red;
    }

    &__message{
      color: #fff;
    }

    &__close{
      position: absolute;
      top: 5px;
      right: 5px;
      background: rgba(#000, .3);
      color: #fff;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      font-size: 1.3rem;
    }

  }

</style>
