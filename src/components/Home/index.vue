<template>
    <div class="col-6p">
        <Ideas />
        <!--<Map />-->
    </div>
</template>

<script>
    // import Map from '../Map';
    import Ideas from '../Ideas';

	export default {
		name: 'Homepage',
		components: {
            Ideas,
			Map,
        },
		data() {
			return {}
		},
	}
</script>

<style lang="less">
    /*.col-6p {*/
        /*width: 66.6%;*/
    /*}*/
</style>
