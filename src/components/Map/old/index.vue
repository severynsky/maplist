<template>
    <div class="map-container">
        <div class="google-map" :id="mapName"></div>
        <h1>{{ this.myLocations }}</h1>

        <button @click="printPosition">
            my location
        </button>
    </div>
</template>

<script>
	import mockData from '../../helpers/mockData';

	export default {
		name: 'Map',
		props: {
			msg: String
		},
		data() {
			let markerArray = [];
			return {
				text: 'hello',
				mapName: "main-map",
				markerCoordinates: mockData,
				map: null,
				bounds: null,
				markers: markerArray,
				myLocations: null,
			};
		},
		watch: {
			markers(newValue) {
				console.log('markers: ', newValue);
			}
		},
		mounted: function () {
			this.createMap();
		},
		methods: {
			openInfo(item) {
				let content = `<div id="content">${item.content.title} ${item.content.body}</div>`
				let infowindow = new google.maps.InfoWindow({
					content,
				});
				infowindow.open(this.map, content);
			},
			createMap() {

				this.bounds = new google.maps.LatLngBounds();
				const element = document.getElementById(this.mapName)
				const mapCentre = this.markerCoordinates[0]
				const options = {
					center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
				}
				this.map = new google.maps.Map(element, options);
				this.markerCoordinates.forEach((coord) => {
					const position = new google.maps.LatLng(coord.latitude, coord.longitude);
					const marker = new google.maps.Marker({
						position,
						map: this.map,
						content: coord,
					});
					let self = this;
					marker.addListener('click', function () {
						self.openInfo(marker);
					});
					this.markers.push(marker)
					this.map.fitBounds(this.bounds.extend(position))
				})
			},
			alertCoords(pos) {
				this.myLocations = pos.coords.accuracy;
				const position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
				const marker = new google.maps.Marker({
					position,
					map: this.map,
				});
				this.markerCoordinates = marker;
				// google.maps.event.trigger(this.map, 'resize');
				setTimeout(() => this.createMap(), 3000);
			},
			printPosition() {
				navigator.geolocation.getCurrentPosition(this.alertCoords);
			}
		}

	}
</script>

<style lang="less" scoped>
    .map-container {
        width: 100%;
        height: 100vh;
        .google-map {
            min-height: 70vh;
            background: gray;
        }
    }
</style>
