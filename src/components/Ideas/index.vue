<template>
    <div id="ideas-list">
        <div class="view-selector">
            <button :class="[viewType === 'listView' ? 'active' : '']" @click="handleView('listView')">list</button>
            <button :class="[viewType === 'mapView' ? 'active' : '']" @click="handleView('mapView')">map</button>
        </div>
        <div id="list-container" v-if="this.viewType === 'listView'">
            <List :data="this.ideasList"/>
        </div>
        <div id="map-container" v-if="this.viewType === 'mapView'">
            <Map :data="this.ideasList"/>
        </div>
    </div>
</template>

<script>
	import mockData from '../../helpers/mockData';
	import List from './components/List';
	import Map from '../Map';
	import snapshotHelper from '../../helpers/snapshotHelper';

	export default {
		name: 'Ideas',
		components: {
			List,
			Map
		},
		data() {
			return {
				ideasList: mockData,
				viewType: 'listView',
			}
		},
		mounted() {
		},
		methods: {
			snapshotHandler(data) {
				return snapshotHelper(data, '160x160', '15');
			},
			handleView(data) {
				this.viewType = data;
			}
		},
	}
</script>

<style lang="less">
    .col-6p {
        /*width: 66.6%;*/
    }

    .view-selector {
        width: 140px;
        margin: 0 auto 10px;
        button {
            padding: 5px 10px;
            border: 1px solid tomato;
            border-radius: 5px;
            font-size: 16px;
            color: tomato;
            outline: none;
            cursor: pointer;
            &.active {
                background-color: tomato;
                color: white;
            }
        }
    }

    #ideas-list {
        width: 500px;
        margin: 0 auto;
        .ideas-list {
            li.idea {
                display: block;
                margin-top: 0px;
                height: 160px;
                box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                margin-bottom: 10px;
                transition: 0.4s;
                &:hover {
                    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
                    .location-info {
                        h3 {
                            color: tomato;
                        }
                    }
                }
                a {
                    color: black;
                    text-decoration: none;
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
                        margin: 10px 0 0px !important;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        width: 270px;
                        /*white-space: nowrap;*/
                        height: 40px;
                        /* white-space: nowrap; */
                        font-size: 14px;
                    }
                    .author {
                        font-size: 12px;
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
