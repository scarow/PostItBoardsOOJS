
var BoardManager = function(selector) {
  this.$elem = $(selector);
  this.$newBoardButton = this.$elem.find("button#new_board");
  this.$loadSamplesButton = this.$elem.find("button#load_samples");
  this.$boardList = this.$elem.find("ul#board_list");
  this.boards = [];

  // jQuery sets the scope of event handler functions to be the object to which the event was bound (in this case, the button). In order to preserve our 'this' pointer, we wrap them in an anonymous function call whose sole purpose is to call that function in a way that preserves our 'this' pointer, and we also need to alias our  'this' pointer.
  var self = this;
  this.$newBoardButton.on('click', function(e) { self.createBoard(e) });
  this.$loadSamplesButton.on('click', function(e) { self.loadSamples(e) });
  this.$boardList.on('click', 'li', function(e) { self.selectBoard(e) });

  this.createBoard();
}


BoardManager.prototype = {
  createBoard: function() {
    var boardId = "board-" + (this.boards.length + 1);
    // add a new board to the list on the side bar
    this.$boardList.append('<li>'+boardId+'</li>');

    // add a new board div to the DOM
    $('#boards').append('<div class="post_board" id="'+boardId+'"></div>')

    // create a new Board object and save it
    this.boards.push(new Board('#'+boardId));

  },

  selectBoard: function(e) {
    // iterate through all of the boards and hide them
    for (var i in this.boards) {
      this.boards[i].$elem.hide();
    }

    // show the board that was clicked
    var selectedBoardId = $(e.target).text();
    $("#"+selectedBoardId).show();
  },

  loadSamples: function(e) {
    console.log("loading samples ...");
  }
}



var Board = function(selector) {

  this.$elem = $(selector);
  
  function initialize() {
    // What needs to happen when this object is created?
  };

  initialize();
};


var PostIt = function() {
  // Your post-it related code goes here
};





$(function() {
  new BoardManager('#board_selector');
});