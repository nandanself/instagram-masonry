import Ember from 'ember';

const {
	RSVP
} = Ember;

export default Ember.Mixin.create({

	getCall(endpoint) {
		var settings = {
			xhr: function() {
				var xhr = new window.XMLHttpRequest();
				xhr.upload.addEventListener("progress", function(evt) {
					if (evt.lengthComputable) {
						var percentComplete = (evt.loaded / evt.total);
						var width = Math.floor(percentComplete * 100) + "%" + " UPLOADED...";
						console.log("width" + width);
						console.log('upload');
						console.log(percentComplete);
						console.log(document.getElementsByClassName("upload")[0]);
						document.getElementsByClassName("upload")[0].innerHTML = width;
					}
				}, false);
				return xhr;
			},
			"async": true,
			"url": endpoint,
			"method": "GET",
			"processData": false,
			"contentType": false,
			"mimeType": "multipart/form-data",
		};

		return new RSVP.Promise(function(resolve, reject) {
			Ember.$.ajax(settings).done(function(response){
				resolve(response);
			},reject);
		});
	}

});
