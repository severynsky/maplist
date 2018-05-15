const ideas = [
	{
	name: 'some1',
	location: {
		latitude: 49.8262269,
		longitude: 24.0104738,
		description: 'Парк Костюшки, неподалік головної алеї',
		snapShot: 'https://maps.googleapis.com/maps/api/staticmap?center=49.8262269,24.0104738&zoom=18&size=300x300&markers=color:red%7Clabel:S%7C49.8262269,24.0104738&key=AIzaSyCr9JHaOAhoZpW_9uvp_ZjmzGWb13nznaw',
	},
	title: 'Fix park Bench',
	body: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original',
	titleImg: 'https://upload.wikimedia.org/wikipedia/commons/1/11/People%27s-Park.jpg',
	category: 'small fix',
	date: '15 September 2018',
	time: '15:00',
	author: {
		fullName: 'Sever Fisher',
		email: 'sever@gmail.com',
		phoneNo: '0632390410',
		rank: 4
	},
},{
	name: 'some2',
	location: {
		latitude: 49.83,
		longitude: 24.012,
		description: 'Парк Костюшки, неподалік головної алеї',
		snapShot: 'https://maps.googleapis.com/maps/api/staticmap?center=49.8262269,24.0104738&zoom=18&size=300x300&markers=color:red%7Clabel:S%7C49.8262269,24.0104738&key=AIzaSyCr9JHaOAhoZpW_9uvp_ZjmzGWb13nznaw',
	},
	title: 'Fix garden Fense',
	body: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original',
	titleImg: 'https://upload.wikimedia.org/wikipedia/commons/1/11/People%27s-Park.jpg',
	category: 'small fix',
	date: '15 September 2018',
	time: '15:00',
	author: {
		fullName: 'Chris Gartner',
		email: 'chris@gmail.com',
		phoneNo: '0632390410',
		rank: 2
	},
},{
	name: 'some3',
	location: {
		latitude: 49.8257928,
		longitude: 24.0080611,
		description: 'Парк Костюшки, неподалік головної алеї',
		snapShot: 'https://maps.googleapis.com/maps/api/staticmap?center=49.8262269,24.0104738&zoom=18&size=300x300&markers=color:red%7Clabel:S%7C49.8262269,24.0104738&key=AIzaSyCr9JHaOAhoZpW_9uvp_ZjmzGWb13nznaw',
	},
	title: 'Build cat house',
	body: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original',
	titleImg: 'https://upload.wikimedia.org/wikipedia/commons/1/11/People%27s-Park.jpg',
	category: 'small fix',
	date: '15 September 2018',
	time: '15:00',
	author: {
		fullName: 'Arch Cafe',
		email: 'archsever@gmail.com',
		phoneNo: '0632390410',
		rank: 3
	},
},{
	name: 'some4',
	location: {
		latitude: 49.8294334,
		longitude: 23.9675119,
		description: 'Парк Костюшки, неподалік головної алеї',
		snapShot: 'https://maps.googleapis.com/maps/api/staticmap?center=49.8262269,24.0104738&zoom=18&size=300x300&markers=color:red%7Clabel:S%7C49.8262269,24.0104738&key=AIzaSyCr9JHaOAhoZpW_9uvp_ZjmzGWb13nznaw',
	},
	title: 'Plant flovers near fontain',
	body: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original',
	titleImg: 'https://upload.wikimedia.org/wikipedia/commons/1/11/People%27s-Park.jpg',
	category: 'small fix',
	date: '15 September 2018',
	time: '15:00',
	author: {
		fullName: 'Mike Severa',
		email: 'severa@gmail.com',
		phoneNo: '0632390410',
		rank: 5
	},
},{
	name: 'some5',
	location: {
		latitude: 49.7993055,
		longitude: 23.9746734,
		description: 'Парк Костюшки, неподалік головної алеї',
		snapShot: 'https://maps.googleapis.com/maps/api/staticmap?center=49.8262269,24.0104738&zoom=18&size=300x300&markers=color:red%7Clabel:S%7C49.8262269,24.0104738&key=AIzaSyCr9JHaOAhoZpW_9uvp_ZjmzGWb13nznaw',
	},
	title: 'Fix and paint park Benches',
	body: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original',
	titleImg: 'https://upload.wikimedia.org/wikipedia/commons/1/11/People%27s-Park.jpg',
	category: 'small fix',
	date: '15 September 2018',
	time: '15:00',
	author: {
		fullName: 'Ola Olka',
		email: 'olka@gmail.com',
		phoneNo: '0632390410',
		rank: 4
	},
}];

export default ideas;