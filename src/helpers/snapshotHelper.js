const snapshotHelper = function (data, size, zoom) {
	const { latitude, longitude } = data;
	return `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=${zoom}&size=${size}&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=AIzaSyCr9JHaOAhoZpW_9uvp_ZjmzGWb13nznaw`

}

export default snapshotHelper;