import { Meteor } from 'meteor/meteor';
import { mongo } from 'meteor/mongo';
//export const Rating = new Mongo.Collection('ratings')
Meteor.startup(() => {
  
  Meteor.methods({
  	"insertRating": function (user) {
  	
 		Rating.insert(user);

  	},
  	"getRating": function (user) {
 		var ret = Rating.find().fetch();
 		return ret;

  	}
  })
});
