import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return this.store.findRecord('move', params.move_id);
 },
});
