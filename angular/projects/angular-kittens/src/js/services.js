(function() {

  'use strict';

  angular
    .module('ngKittens.services', [])
    .service('kittensService', kittensService);

  function kittensService() {
    /*jshint validthis: true */
    const kittens = [
      {
        id: 1,
        name: 'Robby',
        bio: 'eats like a deer',
        likes: 0,
        url: 'https://placekitten.com/g/100/100',
        comments: [
          'So nice',
          'Is that hajek?'
        ]
      }
    ];
    this.getAllKittens = function() {
      return kittens;
    };
    this.getComments = function(id) {
      return kittens.filter((el) => {
        return el.id === parseInt(id);
      })[0].comments;
    };
    this.addKitten = function(kitten) {
      kittens.push(kitten);
    };
    this.addComment = function(id, comment) {
      for (let kitten of kittens) {
        if (kitten.id === parseInt(id)) {
          kitten.comments.push(comment);
        }
      }
    };
    this.getNextID = function() {
      return parseInt(kittens[kittens.length - 1].id) + 1;
    };
  }

})();
