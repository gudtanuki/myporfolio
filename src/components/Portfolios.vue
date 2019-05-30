<template>
    <div class="portfolios">
        <div class="content">
            <h2>{{ title }}</h2>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Portfolios',
    data () {
        return {
            title: '今後追加していきます', 
            text: 'ここに説明やURLが入ります'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
