<template>
    <div id="ideas-list">
        <router-link to="/">go back</router-link>
        <p v-if="!this.ideaData.name">loading data..</p>
        <div class="idea-page" v-if="this.ideaData.name">
            <img :src="snapshotHandler(this.ideaData.location)" alt="" class="location-snapshot">
            <div class="idea-info">
                <h3>{{ this.ideaData.title }}</h3>
                <br>

                <div class="meta-info">
                    <p class="small">location: <b>{{ this.ideaData.location.description }}</b></p>
                    <p class="category">category: <b>{{ this.ideaData.category }}</b></p>
                </div>
                <p class="idea-body">{{ this.ideaData.body }}</p>
                <hr>
                <p class="author">
                    created by: <b>{{ this.ideaData.author.fullName }}</b>
                </p>
                <ul class="author-rank">
                    <li v-for="item in this.ideaData.author.rank" :key="item">
                        *
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
	import mockData from '../../helpers/mockData';
	import snapshotHelper from '../../helpers/snapshotHelper';

	export default {
		name: 'Idea',
		components: {
			Map
		},
		data() {
			return {
				ideaData: {},
			}
		},
		mounted() {
			const idea = mockData.filter( e => e.name === this.$route.params.idea)
			this.ideaData = idea[0];
		},
		methods: {
			snapshotHandler(data) {
				return snapshotHelper(data, '800x260', '17');
			}
		},
	}
</script>

<style lang="less">
    .idea-page {
        margin-top: 20px;
    }
</style>
