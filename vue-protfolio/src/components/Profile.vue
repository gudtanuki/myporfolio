<template>
    <div class="profile">
        <div class="content">
            <h2>{{ title }}</h2>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data () {
        return {
            title: '基本情報', 
            text: 'gudtanuki'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
