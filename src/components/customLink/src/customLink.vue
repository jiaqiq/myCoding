<template>
  <el-link
  :type="type"
  :underline="underline"
  :disabled="disabled"
  :href="href"
  :icon="icon">
    <slot></slot>
  </el-link>
</template>

<script>
export default {
    name: 'CustomLink',

    props: {
        type: {
            type: String,
            default: 'default'
        },
        underline: {
            type: Boolean,
            default: true
        },
        disabled: Boolean,
        href: String,
        icon: String
    },
}
</script>

<style>

</style>