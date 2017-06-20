import Ember from 'ember';

const {
	RSVP
} = Ember;

export default Ember.Mixin.create({

	getCall(endpoint) {
		var settings = {
			xhr: function() {
				console.log('hiiiii');
				var xhr = new window.XMLHttpRequest();
				xhr.addEventListener("progress", function(evt) {
					console.log(evt)
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
      "headers": {
         'authorization':"token b0fb466a6eac3ad87cd200058042fb2192b85ab4"
       },
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
