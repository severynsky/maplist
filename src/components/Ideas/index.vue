<template>
    <div id="ideas-list">
        <h2>here will be a list</h2>
        <ul class="ideas-list" v-if="ideasList.length > 0">
            <li class="idea" v-for="idea in this.ideasList" :key="idea.location.latitude">
                <img :src="snapshotHandler(idea.location)" alt="" class="location-snapshot">
                <div class="location-info">
                    <h3>{{ idea.title }}</h3>

                    <div class="meta-info">
                        <p class="small">{{ idea.location.description }}</p>
                        <p class="category">{{ idea.category }}</p>
                    </div>
                    <p class="idea-body">{{ idea.body }}</p>
                    <p class="author">
                        created by: <b>{{ idea.author.fullName }}</b>
                    </p>
                    <ul class="author-rank">
                        <li v-for="item in idea.author.rank" :key="item">
                            *
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
	import mockData from '../../helpers/mockData';
	import snapshotHelper from '../../helpers/snapshotHelper';

	export default {
		name: 'Ideas',
		components: {
			Map
		},
		data() {
			return {
				ideasList: mockData,
			}
		},
		mounted() {
		},
		methods: {
			snapshotHandler(data) {
				return snapshotHelper(data);
			}
		},
	}
</script>

<style lang="less">
    .col-6p {
        /*width: 66.6%;*/
    }

    #ideas-list {
        width: 500px;
        margin: 0 auto;
        .ideas-list {
            li.idea {
                display: block;
                margin-top: 0px;
                height: 160px;
                box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
                border-radius: 10px;
                margin-bottom: 10px;
                transition: 0.4s;
                &:hover {
                    box-shadow: 0px 2px 3px rgba(0,0,0,0.2);
                    cursor: pointer;
                    .location-info {
                        h3 {
                            color: tomato;
                        }
                    }
                }
                .location-snapshot {
                    height: 160px;
                    margin-right: 20px;
                }
                .location-info {
                    display: inline-block;
                    vertical-align: top;
                    h3 {
                        margin-top: 10px;
                        transition: 0.4s;
                    }
                    p {
                        margin: 10px 0;
                    }
                    .meta-info {
                        border-left: 2px solid tomato;
                        padding-left: 10px;
                        p {
                            margin: 5px 0;
                        }
                        .small {
                            font-size: 13px;
                            font-style: italic;
                            color: #6f7174;
                        }
                        .category {
                            font-weight: bold;
                            font-size: 13px;
                        }
                    }
                    .idea-body {
                        margin: 20px 0 5px;
                    }
                    .author {
                        font-size: 13px;
                        margin: 5px 0;
                        display: inline-block;
                    }
                    .author-rank {
                        display: inline-block;
                        li {
                            display: inline-block;
                            color: tomato;
                            margin: 2px;
                        }
                    }
                }
            }
        }
    }
</style>
