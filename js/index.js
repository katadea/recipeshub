var jsonURL = 'https://s3-us-west-2.amazonaws.com/digicode-interview/Q1.json';

Vue.config.devtools = false;
Vue.config.productionTip = false;

var app = new Vue({

  el: '#app',

  data: {
    recipes: [],
    IngredientsDetails: {},
    error: false,
    panelCount: 1
    },

  /* created: function () {
    this.fetchData();
  }, */

	mounted: function() {
			//console.log ("Readying");
        this.$http({ url: jsonURL, method: 'GET' }).then(function(response) {
            this.$set(this, 'recipes', response.data.recipes);
            this.$set(this, 'IngredientsDetails', response.data.IngredientsDetails);
            //console.log("Recipes and ingredients data loaded");
        }, function(response) {
            this.$set(this, 'error', true);
            console.log("HTTP Request Failed")
        });
    },

   methods: {
   	getValue: function (key, object) {
   		return object[key];
   		
   	}
   	
   	/* getPanelCount: function () {
		return this.$data.panelCount; 
	},
   	
   	increasePanelCount: function () {
		this.panelCount += 1;
	}*/
   } 
  
}); 

$(document).ready(function () {
	
	//Toggle recipe cards
	$('.recipe-item, .cuisineLink').click( function () {
		//console.log('Clicked link');
		var name = $.trim($(this).text());
		//console.log(name);
		toggleCard(name);
	});
	
	//Initialize popovers
	$(function () {
  		$('[data-toggle="popover"]').popover()
	});
	
})

var toggleCard = function (id) {
	$('#rightCol .panel').css('display','none');
	//console.log('The id is #'+id);
	$('#'+id).css('display','block');
	//console.log('element displayed');
};