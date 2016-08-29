import Ember from 'ember';

export default Ember.Component.extend({
  pancakes: Ember.computed.filterBy('items', 'category', 'pancakes and such'),

  classics: Ember.computed.filterBy('items', 'category', 'classic combos'),

  biscuits: Ember.computed.filterBy('items', 'category', 'biscuits and side orders'),

  breakfasts: Ember.computed.filterBy('items', 'category', 'biscuits and side orders')
  });
