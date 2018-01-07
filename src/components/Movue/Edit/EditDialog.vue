<template lang="html">
  <div class="mv-dialog">
    <h3>Edit this movue</h3>
    <button class="mv-dialog__close">X close</button>

    <label for="title">Title {{title}}</label>
    <input v-model="editedTitle" name="title" type="text" placeholder="Title">

    <br>

    <button class="btn">Save</button>
    <button @click="" class="btn btn--ghost">Cancel</button>

  </div>
</template>

<script>
export default {
  props: ['movue'],
  data () {
    return {
      editedTitle: this.movue.title
    }
  }
}
</script>

<style lang="scss">
  @import '../../../styles/2.settings/index-sett.scss';

  .mv-dialog{
    background: #fff;
    width: 400px;
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: $shadow-lg;
    padding: 20px 30px;
    color: #000;
    z-index: 10;

    h3{
      color: #000;
    }

    &__close{
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
</style>
