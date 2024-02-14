const roo = $(".root"); // constant to select the div with root class
var turn = "white"; // variable keeping count of the turn 

// function to create a square with its id, color and the piece on that square
function Square(color, id, piece) {
  return { color, id, piece };
}

// function to create each row on the board
function SquareRow(rowID) {
  const color_white = "white";
  const color_black = "black";
  const squareRow = [];
  const Cols = ["a", "b", "c", "d", "e", "f", "g", "h"]; // creating the name for each column

  if (rowID % 2 == 0) {
    // deciding the color of the box depending on row
    $.each(Cols, function (index, el) {
      if (index % 2 == 0) {
        squareRow.push(Square(color_white, el + rowID, null));
      } else {
        squareRow.push(Square(color_black, el + rowID, null));
      }
    });
  } else {
    $.each(Cols, function (index, el) {
      if (index % 2 == 0) {
        squareRow.push(Square(color_black, el + rowID, null));
      } else {
        squareRow.push(Square(color_white, el + rowID, null));
      }
    });
  }
  return squareRow;
}

// function to create the 2-D array for the board
function iniGame() {
  const boardArr = [];

  for (var i = 1; i <= 8; i++) {
    boardArr.push(SquareRow(i));
  }
  return boardArr;
}
const boardArr = iniGame(); // make the board 2d array a global variable so that its accessible by all the elements in js

//functions for black pieces
//function to render black pawn
function black_pawn(current_position) {
  return {
    current_position,
    img: "<i class='fa-solid fa-chess-pawn fa-4x' style='color: #000000;'></i>",
    piece_name: "black pawn",
  };
}
// function for black rook
function black_rook(current_position) {
  return {
    current_position,
    img: "<i class='fa-solid fa-chess-rook fa-4x ' style='color:   #000000;'></i>",
    piece_name: "black rook",
  };
}
//function for black knight
function black_knight(current_position) {
  return {
    current_position,
    img: "<i class='fa-solid fa-chess-knight fa-4x' style='color: #000000;'></i>",
    piece_name: "black knight",
  };
}
//function for black bishop
function black_bishop(current_position) {
  return {
    current_position,
    img: "<i class='fa-solid fa-chess-bishop fa-4x' style='color: #000000;'></i>",
    piece_name: "black bishop",
  };
}
//function for black king
function black_king(current_position) {
  return {
    current_position,
    img: "<i class='fa-solid fa-chess-king fa-4x' style='color: #000000;'></i>",
    piece_name: "black king",
  };
}
//function for black queen
function black_queen(current_position) {
  return {
    current_position,
    img: "<i class='fa-solid fa-chess-queen fa-4x' style='color: #000000;'></i>",
    piece_name: "black queen",
  };
}

//functions for white pieces
//function to render white pawn
function white_pawn(current_position) {
  return {
    current_position,
    img: "<i class='fa-solid fa-chess-pawn fa-4x' style='color: #fafafa;'></i>",
    piece_name: "white pawn",
  };
}
//function for white rook
function white_rook(current_position) {
  return {
    current_position,
    img: "<i class='fa-solid fa-chess-rook fa-4x ' style='color:  #fafafa;'></i>",
    piece_name: "white rook",
  };
}
//function for white knight
function white_knight(current_position) {
  return {
    current_position,
    img: "<i class='fa-solid fa-chess-knight fa-4x' style='color: #fafafa;'></i>",
    piece_name: "white knight",
  };
}
//function for white bishop
function white_bishop(current_position) {
  return {
    current_position,
    img: "<i class='fa-solid fa-chess-bishop fa-4x' style='color: #fafafa;'></i>",
    piece_name: "white bishop",
  };
}
//function for white king
function white_king(current_position) {
  return {
    current_position,
    img: "<i class='fa-solid fa-chess-king fa-4x' style='color: #fafafa;'></i>",
    piece_name: "white king",
  };
}
//function for white queen
function white_queen(current_position) {
  return {
    current_position,
    img: "<i class='fa-solid fa-chess-queen fa-4x' style='color: #fafafa;'></i>",
    piece_name: "white queen",
  };
}

//function to render the position of the pieces
function pieceRender(data) {
  $.each(data, function (_, row) {
    $.each(row, function (_, square) {
      if (square.piece) {
        $("#" + square.id).html(square.piece.img);
      }
    });
  });
}
// function to generate the board in the beginning
function board(data) {
  $.each(data, function (_, row) {
    const rowEL = $("<div>").addClass("row");

    $.each(row, function (_, square) {
      const s = $("<div>").addClass("Square").addClass(square.color);
      s.attr("id", square.id);
      if (square.id[1] == 7) {
        square.piece = black_pawn(square.id);
      }
      if (square.id[1] == 2) {
        square.piece = white_pawn(square.id);
      }
      if (square.id == "a1" || square.id == "h1") {
        square.piece = white_rook(square.id);
      }
      if (square.id == "a8" || square.id == "h8") {
        square.piece = black_rook(square.id);
      }
      if (square.id == "b1" || square.id == "g1") {
        square.piece = white_knight(square.id);
      }
      if (square.id == "b8" || square.id == "g8") {
        square.piece = black_knight(square.id);
      }
      if (square.id == "c1" || square.id == "f1") {
        square.piece = white_bishop(square.id);
      }
      if (square.id == "c8" || square.id == "f8") {
        square.piece = black_bishop(square.id);
      }
      if (square.id == "e1") {
        square.piece = white_king(square.id);
      }
      if (square.id == "e8") {
        square.piece = black_king(square.id);
      }
      if (square.id == "d1") {
        square.piece = white_queen(square.id);
      }
      if (square.id == "d8") {
        square.piece = black_queen(square.id);
      }

      rowEL.append(s);
    });
    roo.append(rowEL);
  });
}

board(boardArr); // generating the board
pieceRender(boardArr); // rendering all the pieces



// function to remove the highlighted yellow parts and the circle that show up
function remove_highlighted_circle() {
  $("i.fa-circle").remove();
  $(".yellow").removeClass("yellow");
}
// function to show the highlighted circles
function highlighted_circles(position) {
  $.each(position, function (_, elements) {
    $("#" + elements).html(
      '<i class="fa-solid fa-circle fa-2x" style="color:rgba(0,0,0,0.1);"></i>'
    );
  });
}
// function to show the pieces that can be captured
function highlight_piece_going(position) {
  $.each(position, function (_, elements) {
    $("#" + elements).append(
      "<i class='fa-regular fa-circle fa-5x' style='color:rgba(0,0,0,0.1);'></i>"
    );
  });
}
//function to change background for the selected piece
function selected_background(position) {
  $("#" + position).addClass("yellow");
}
// function to have red background when in check
function inCheckBackground(position) {
    $("#" + position).addClass("red");
}

//functions to show valid moves
function highlightMoves(object){
  const {possible_position , piece_going} = object;
highlight_piece_going(piece_going);
highlighted_circles(possible_position);
}
//function for white pieces
//function to show valid white pawn moves
function white_pawn_move(current_position) {

  const possible_position = [];
  const piece_going = [];
 



  const possible_move1 =
    current_position[0] + (Number(current_position[1]) + 1);
  const possible_move2 =
    current_position[0] + (Number(current_position[1]) + 2);
  const possible_move3 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 1) +
    (Number(current_position[1]) + 1);
  const possible_move4 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 1) +
    (Number(current_position[1]) + 1);
  
    $.each(boardArr, function (_, row) {
      $.each(row, function (_, square) {
        if (current_position[1] == 2) {
          if (square.id == possible_move1) {
            if (square.piece == null) {
              possible_position.push(possible_move1);
            }
          } else if (square.id == possible_move2) {
            if (square.piece == null) {
              possible_position.push(possible_move2);
              en_pass_white = possible_move2;
            }
          }
        } else {
          if (square.id == possible_move1) {
            if (square.piece == null) {
              possible_position.push(possible_move1);
            }
          }
        }
        if (square.id == possible_move3) {
          if (square.piece != null) {
            if (square.piece.piece_name.includes("black")) {
              piece_going.push(possible_move3);
            }
          }

        }
        if (square.id == possible_move4) {
          if (square.piece != null) {
            if (square.piece.piece_name.includes("black")) {
              piece_going.push(possible_move4);
            }
          }

        }
      });
    });

  return {possible_position,piece_going};
}
// function to show white rook moves
function white_rook_move(current_position) {
  const possible_position = [];
  const piece_going = [];

    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        current_position[0] + (Number(current_position[1]) + al);
      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("white")) {
          break;
        } else if (square1.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectoryb =
        current_position[0] + (Number(current_position[1]) - al);
      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("white")) {
          break;
        } else if (square2.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        String.fromCharCode(current_position[0].charCodeAt(0) + al) +
        Number(current_position[1]);

      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("white")) {
          break;
        } else if (square1.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();

      var possible_trajectoryb =
        String.fromCharCode(current_position[0].charCodeAt(0) - al) +
        Number(current_position[1]);

      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("white")) {
          break;
        } else if (square2.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
 

  return {possible_position,piece_going};
}
//function to show white queen moves
function white_queen_move(current_position) {
  const possible_position = [];
  const piece_going = [];
 
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        current_position[0] + (Number(current_position[1]) + al);
      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("white")) {
          break;
        } else if (square1.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectoryb =
        current_position[0] + (Number(current_position[1]) - al);
      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("white")) {
          break;
        } else if (square2.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        String.fromCharCode(current_position[0].charCodeAt(0) + al) +
        Number(current_position[1]);

      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("white")) {
          break;
        } else if (square1.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();

      var possible_trajectoryb =
        String.fromCharCode(current_position[0].charCodeAt(0) - al) +
        Number(current_position[1]);

      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("white")) {
          break;
        } else if (square2.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        String.fromCharCode(current_position[0].charCodeAt(0) + al) +
        (Number(current_position[1]) + al);
      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("white")) {
          break;
        } else if (square1.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectoryb =
        String.fromCharCode(current_position[0].charCodeAt(0) + al) +
        (Number(current_position[1]) - al);
      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("white")) {
          break;
        } else if (square2.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        String.fromCharCode(current_position[0].charCodeAt(0) - al) +
        (Number(current_position[1]) + al);

      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("white")) {
          break;
        } else if (square1.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();

      var possible_trajectoryb =
        String.fromCharCode(current_position[0].charCodeAt(0) - al) +
        (Number(current_position[1]) - al);

      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("white")) {
          break;
        } else if (square2.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
  

  return {possible_position,piece_going};
}
//function to show white bishop moves
function white_bishop_move(current_position) {
  const possible_position = [];
  const piece_going = [];

    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        String.fromCharCode(current_position[0].charCodeAt(0) + al) +
        (Number(current_position[1]) + al);
      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("white")) {
          break;
        } else if (square1.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectoryb =
        String.fromCharCode(current_position[0].charCodeAt(0) + al) +
        (Number(current_position[1]) - al);
      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("white")) {
          break;
        } else if (square2.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        String.fromCharCode(current_position[0].charCodeAt(0) - al) +
        (Number(current_position[1]) + al);

      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("white")) {
          break;
        } else if (square1.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();

      var possible_trajectoryb =
        String.fromCharCode(current_position[0].charCodeAt(0) - al) +
        (Number(current_position[1]) - al);

      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("white")) {
          break;
        } else if (square2.piece.piece_name.includes("black")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }


  return {possible_position,piece_going};
}

//function to show white knight moves
function white_knight_move(current_position) {
  const possible_position = [];
  const piece_going = [];
  var possible_move1 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 2) +
    (Number(current_position[1]) + 1);
  var possible_move2 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 2) +
    (Number(current_position[1]) - 1);
  var possible_move3 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 2) +
    (Number(current_position[1]) + 1);
  var possible_move4 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 2) +
    (Number(current_position[1]) - 1);
  var possible_move5 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 1) +
    (Number(current_position[1]) + 2);
  var possible_move6 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 1) +
    (Number(current_position[1]) - 2);
  var possible_move7 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 1) +
    (Number(current_position[1]) + 2);
  var possible_move8 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 1) +
    (Number(current_position[1]) - 2);
  var flatBoard = boardArr.flat();
  var square1 = flatBoard.find((el) => el.id == possible_move1);
  var square2 = flatBoard.find((el) => el.id == possible_move2);
  var square3 = flatBoard.find((el) => el.id == possible_move3);
  var square4 = flatBoard.find((el) => el.id == possible_move4);
  var square5 = flatBoard.find((el) => el.id == possible_move5);
  var square6 = flatBoard.find((el) => el.id == possible_move6);
  var square7 = flatBoard.find((el) => el.id == possible_move7);
  var square8 = flatBoard.find((el) => el.id == possible_move8);

    if (square1 !== undefined) {
      if (square1.piece == null) {
        possible_position.push(possible_move1);
      } else if (square1.piece.piece_name.includes("white")) {
      } else if (square1.piece.piece_name.includes("black")) {
        piece_going.push(possible_move1);
      }
    }
    if (square2 !== undefined) {
      if (square2.piece == null) {
        possible_position.push(possible_move2);
      } else if (square2.piece.piece_name.includes("white")) {
      } else if (square2.piece.piece_name.includes("black")) {
        piece_going.push(possible_move2);
      }
    }
    if (square3 !== undefined) {
      if (square3.piece == null) {
        possible_position.push(possible_move3);
      } else if (square3.piece.piece_name.includes("white")) {
      } else if (square3.piece.piece_name.includes("black")) {
        piece_going.push(possible_move3);
      }
    }
    if (square4 !== undefined) {
      if (square4.piece == null) {
        possible_position.push(possible_move4);
      } else if (square4.piece.piece_name.includes("white")) {
      } else if (square4.piece.piece_name.includes("black")) {
        piece_going.push(possible_move4);
      }
    }
    if (square5 !== undefined) {
      if (square5.piece == null) {
        possible_position.push(possible_move5);
      } else if (square5.piece.piece_name.includes("white")) {
      } else if (square5.piece.piece_name.includes("black")) {
        piece_going.push(possible_move5);
      }
    }
    if (square6 !== undefined) {
      if (square6.piece == null) {
        possible_position.push(possible_move6);
      } else if (square6.piece.piece_name.includes("white")) {
      } else if (square6.piece.piece_name.includes("black")) {
        piece_going.push(possible_move6);
      }
    }
    if (square7 !== undefined) {
      if (square7.piece == null) {
        possible_position.push(possible_move7);
      } else if (square7.piece.piece_name.includes("white")) {
      } else if (square7.piece.piece_name.includes("black")) {
        piece_going.push(possible_move7);
      }
    }
    if (square8 !== undefined) {
      if (square8.piece == null) {
        possible_position.push(possible_move8);
      } else if (square8.piece.piece_name.includes("white")) {
      } else if (square8.piece.piece_name.includes("black")) {
        piece_going.push(possible_move8);
      }
    }


  return {possible_position,piece_going};
}

function white_king_move(current_position) {
  const possible_position = [];
  const piece_going = [];
  var possible_move1 =
    String.fromCharCode(current_position[0].charCodeAt(0)) +
    (Number(current_position[1]) + 1);
  var possible_move2 =
    String.fromCharCode(current_position[0].charCodeAt(0)) +
    (Number(current_position[1]) - 1);
  var possible_move3 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 1) +
    Number(current_position[1]);
  var possible_move4 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 1) +
    Number(current_position[1]);
  var possible_move5 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 1) +
    (Number(current_position[1]) + 1);
  var possible_move6 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 1) +
    (Number(current_position[1]) - 1);
  var possible_move7 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 1) +
    (Number(current_position[1]) + 1);
  var possible_move8 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 1) +
    (Number(current_position[1]) - 1);
  var flatBoard = boardArr.flat();
  var square1 = flatBoard.find((el) => el.id == possible_move1);
  var square2 = flatBoard.find((el) => el.id == possible_move2);
  var square3 = flatBoard.find((el) => el.id == possible_move3);
  var square4 = flatBoard.find((el) => el.id == possible_move4);
  var square5 = flatBoard.find((el) => el.id == possible_move5);
  var square6 = flatBoard.find((el) => el.id == possible_move6);
  var square7 = flatBoard.find((el) => el.id == possible_move7);
  var square8 = flatBoard.find((el) => el.id == possible_move8);
    if (square1 !== undefined) {
      if (square1.piece == null) {
        if(checkOnPosition(possible_move1,'white')=== false){
              possible_position.push(possible_move1);}
      } else if (square1.piece.piece_name.includes("white")) {
      } else if (square1.piece.piece_name.includes("black")) {
        piece_going.push(possible_move1);
      }
    }
    if (square2 !== undefined) {
      if (square2.piece == null) {
        if(checkOnPosition(possible_move2,'white')=== false){possible_position.push(possible_move2);}
      } else if (square2.piece.piece_name.includes("white")) {
      } else if (square2.piece.piece_name.includes("black")) {
        piece_going.push(possible_move2);
      }
    }
    if (square3 !== undefined) {
      if (square3.piece == null) {
        if(checkOnPosition(possible_move3,'white')=== false){possible_position.push(possible_move3);}
      } else if (square3.piece.piece_name.includes("white")) {
      } else if (square3.piece.piece_name.includes("black")) {
        piece_going.push(possible_move3);
      }
    }
    if (square4 !== undefined) {
      if (square4.piece == null) {
        if(checkOnPosition(possible_move4,'white')=== false){possible_position.push(possible_move4);}
      } else if (square4.piece.piece_name.includes("white")) {
      } else if (square4.piece.piece_name.includes("black")) {
        piece_going.push(possible_move4);
      }
    }
    if (square5 !== undefined) {
      if (square5.piece == null) {
        if(checkOnPosition(possible_move5,'white')=== false){possible_position.push(possible_move5);}
      } else if (square5.piece.piece_name.includes("white")) {
      } else if (square5.piece.piece_name.includes("black")) {
        piece_going.push(possible_move5);
      }
    }
    if (square6 !== undefined) {
      if (square6.piece == null) {
        if(checkOnPosition(possible_move6,'white')=== false){possible_position.push(possible_move6);}
      } else if (square6.piece.piece_name.includes("white")) {
      } else if (square6.piece.piece_name.includes("black")) {
        piece_going.push(possible_move6);
      }
    }
    if (square7 !== undefined) {
      if (square7.piece == null) {
        if(checkOnPosition(possible_move7,'white')=== false){possible_position.push(possible_move7);};
      } else if (square7.piece.piece_name.includes("white")) {
      } else if (square7.piece.piece_name.includes("black")) {
        piece_going.push(possible_move7);
      }
    }
    if (square8 !== undefined) {
      if (square8.piece == null) {
        if(checkOnPosition(possible_move8,'white') === false){possible_position.push(possible_move8);}
      } else if (square8.piece.piece_name.includes("white")) {
      } else if (square8.piece.piece_name.includes("black")) {
        piece_going.push(possible_move8);
      }
    }
    if(current_position == 'e1'){
      if(if_castle_possible('white', 'king_side')){
        possible_position.push('g1');
      }
      if(if_castle_possible('white', 'queen_side')){
        possible_position.push('c1');
      }
    }
 
  return {possible_position,piece_going};
}
//functions to show black pieces moves
//function to show valid black pawn moves
function black_pawn_move(current_position) {
  const possible_position = [];
  const piece_going = [];
  const possible_move1 =
    current_position[0] + (Number(current_position[1]) - 1);
  const possible_move2 =
    current_position[0] + (Number(current_position[1]) - 2);
  const possible_move3 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 1) +
    (Number(current_position[1]) - 1);
  const possible_move4 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 1) +
    (Number(current_position[1]) - 1);

  
    $.each(boardArr, function (_, row) {
      $.each(row, function (_, square) {
        if (current_position[1] == 7) {
          if (square.id == possible_move1) {
            if (square.piece == null) {
              possible_position.push(possible_move1);
            }
          } else if (square.id == possible_move2) {
            if (square.piece == null) {
              possible_position.push(possible_move2);
              
            }
          }
        } else {
          if (square.id == possible_move1) {
            if (square.piece == null) {
              possible_position.push(possible_move1);
            }
          }
        }
        if (square.id == possible_move3) {
          if (square.piece != null) {
            if (square.piece.piece_name.includes("white")) {
              piece_going.push(possible_move3);
            }
          }
        }
        if (square.id == possible_move4) {
          if (square.piece != null) {
            if (square.piece.piece_name.includes("white")) {
              piece_going.push(possible_move4);
            }
          }
        }
      });
    });
  
  return {possible_position,piece_going};
}

//function to show black rook moves
function black_rook_move(current_position) {
  const possible_position = [];
  const piece_going = [];

    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        current_position[0] + (Number(current_position[1]) + al);
      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("black")) {
          break;
        } else if (square1.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectoryb =
        current_position[0] + (Number(current_position[1]) - al);
      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("black")) {
          break;
        } else if (square2.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        String.fromCharCode(current_position[0].charCodeAt(0) + al) +
        Number(current_position[1]);

      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("black")) {
          break;
        } else if (square1.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();

      var possible_trajectoryb =
        String.fromCharCode(current_position[0].charCodeAt(0) - al) +
        Number(current_position[1]);

      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("black")) {
          break;
        } else if (square2.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
  

  return {possible_position,piece_going};
}
//function to show black bishop moves
function black_bishop_move(current_position) {
  const possible_position = [];
  const piece_going = [];
  
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        String.fromCharCode(current_position[0].charCodeAt(0) + al) +
        (Number(current_position[1]) + al);
      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("black")) {
          break;
        } else if (square1.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectoryb =
        String.fromCharCode(current_position[0].charCodeAt(0) + al) +
        (Number(current_position[1]) - al);
      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("black")) {
          break;
        } else if (square2.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        String.fromCharCode(current_position[0].charCodeAt(0) - al) +
        (Number(current_position[1]) + al);

      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("black")) {
          break;
        } else if (square1.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();

      var possible_trajectoryb =
        String.fromCharCode(current_position[0].charCodeAt(0) - al) +
        (Number(current_position[1]) - al);

      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("black")) {
          break;
        } else if (square2.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
  

  return {possible_position,piece_going};
}
//function to show black knight moves
function black_knight_move(current_position) {
  const possible_position = [];
  const piece_going = [];
  var possible_move1 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 2) +
    (Number(current_position[1]) + 1);
  var possible_move2 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 2) +
    (Number(current_position[1]) - 1);
  var possible_move3 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 2) +
    (Number(current_position[1]) + 1);
  var possible_move4 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 2) +
    (Number(current_position[1]) - 1);
  var possible_move5 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 1) +
    (Number(current_position[1]) + 2);
  var possible_move6 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 1) +
    (Number(current_position[1]) - 2);
  var possible_move7 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 1) +
    (Number(current_position[1]) + 2);
  var possible_move8 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 1) +
    (Number(current_position[1]) - 2);
  var flatBoard = boardArr.flat();
  var square1 = flatBoard.find((el) => el.id == possible_move1);
  var square2 = flatBoard.find((el) => el.id == possible_move2);
  var square3 = flatBoard.find((el) => el.id == possible_move3);
  var square4 = flatBoard.find((el) => el.id == possible_move4);
  var square5 = flatBoard.find((el) => el.id == possible_move5);
  var square6 = flatBoard.find((el) => el.id == possible_move6);
  var square7 = flatBoard.find((el) => el.id == possible_move7);
  var square8 = flatBoard.find((el) => el.id == possible_move8);
 
    if (square1 !== undefined) {
      if (square1.piece == null) {
        possible_position.push(possible_move1);
      } else if (square1.piece.piece_name.includes("black")) {
      } else if (square1.piece.piece_name.includes("white")) {
        piece_going.push(possible_move1);
      }
    }
    if (square2 !== undefined) {
      if (square2.piece == null) {
        possible_position.push(possible_move2);
      } else if (square2.piece.piece_name.includes("black")) {
      } else if (square2.piece.piece_name.includes("white")) {
        piece_going.push(possible_move2);
      }
    }
    if (square3 !== undefined) {
      if (square3.piece == null) {
        possible_position.push(possible_move3);
      } else if (square3.piece.piece_name.includes("black")) {
      } else if (square3.piece.piece_name.includes("white")) {
        piece_going.push(possible_move3);
      }
    }
    if (square4 !== undefined) {
      if (square4.piece == null) {
        possible_position.push(possible_move4);
      } else if (square4.piece.piece_name.includes("black")) {
      } else if (square4.piece.piece_name.includes("white")) {
        piece_going.push(possible_move4);
      }
    }
    if (square5 !== undefined) {
      if (square5.piece == null) {
        possible_position.push(possible_move5);
      } else if (square5.piece.piece_name.includes("black")) {
      } else if (square5.piece.piece_name.includes("white")) {
        piece_going.push(possible_move5);
      }
    }
    if (square6 !== undefined) {
      if (square6.piece == null) {
        possible_position.push(possible_move6);
      } else if (square6.piece.piece_name.includes("black")) {
      } else if (square6.piece.piece_name.includes("white")) {
        piece_going.push(possible_move6);
      }
    }
    if (square7 !== undefined) {
      if (square7.piece == null) {
        possible_position.push(possible_move7);
      } else if (square7.piece.piece_name.includes("black")) {
      } else if (square7.piece.piece_name.includes("white")) {
        piece_going.push(possible_move7);
      }
    }
    if (square8 !== undefined) {
      if (square8.piece == null) {
        possible_position.push(possible_move8);
      } else if (square8.piece.piece_name.includes("black")) {
      } else if (square8.piece.piece_name.includes("white")) {
        piece_going.push(possible_move8);
      }
    }
  

  return {possible_position,piece_going};
}
//function to show black queen moves
function black_queen_move(current_position) {
  const possible_position = [];
  const piece_going = [];
  
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        current_position[0] + (Number(current_position[1]) + al);
      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("black")) {
          break;
        } else if (square1.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectoryb =
        current_position[0] + (Number(current_position[1]) - al);
      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("black")) {
          break;
        } else if (square2.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        String.fromCharCode(current_position[0].charCodeAt(0) + al) +
        Number(current_position[1]);

      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("black")) {
          break;
        } else if (square1.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();

      var possible_trajectoryb =
        String.fromCharCode(current_position[0].charCodeAt(0) - al) +
        Number(current_position[1]);

      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("black")) {
          break;
        } else if (square2.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        String.fromCharCode(current_position[0].charCodeAt(0) + al) +
        (Number(current_position[1]) + al);
      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("black")) {
          break;
        } else if (square1.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectoryb =
        String.fromCharCode(current_position[0].charCodeAt(0) + al) +
        (Number(current_position[1]) - al);
      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("black")) {
          break;
        } else if (square2.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();
      var possible_trajectorya =
        String.fromCharCode(current_position[0].charCodeAt(0) - al) +
        (Number(current_position[1]) + al);

      var square1 = flatBoard.find((el) => el.id == possible_trajectorya);

      if (square1 !== undefined) {
        if (square1.piece == null) {
          possible_position.push(possible_trajectorya);
        } else if (square1.piece.piece_name.includes("black")) {
          break;
        } else if (square1.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectorya);
          break;
        }
      }
    }
    for (var al = 1; al < 8; al++) {
      var flatBoard = boardArr.flat();

      var possible_trajectoryb =
        String.fromCharCode(current_position[0].charCodeAt(0) - al) +
        (Number(current_position[1]) - al);

      var square2 = flatBoard.find((el) => el.id == possible_trajectoryb);
      if (square2 !== undefined) {
        if (square2.piece == null) {
          possible_position.push(possible_trajectoryb);
        } else if (square2.piece.piece_name.includes("black")) {
          break;
        } else if (square2.piece.piece_name.includes("white")) {
          piece_going.push(possible_trajectoryb);
          break;
        }
      }
    }
  

  return {possible_position,piece_going};
}
//function to show black king moves
function black_king_move(current_position) {
  const possible_position = [];
  const piece_going = [];
  var possible_move1 =
    String.fromCharCode(current_position[0].charCodeAt(0)) +
    (Number(current_position[1]) + 1);
  var possible_move2 =
    String.fromCharCode(current_position[0].charCodeAt(0)) +
    (Number(current_position[1]) - 1);
  var possible_move3 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 1) +
    Number(current_position[1]);
  var possible_move4 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 1) +
    Number(current_position[1]);
  var possible_move5 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 1) +
    (Number(current_position[1]) + 1);
  var possible_move6 =
    String.fromCharCode(current_position[0].charCodeAt(0) + 1) +
    (Number(current_position[1]) - 1);
  var possible_move7 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 1) +
    (Number(current_position[1]) + 1);
  var possible_move8 =
    String.fromCharCode(current_position[0].charCodeAt(0) - 1) +
    (Number(current_position[1]) - 1);
  var flatBoard = boardArr.flat();
  var square1 = flatBoard.find((el) => el.id == possible_move1);
  var square2 = flatBoard.find((el) => el.id == possible_move2);
  var square3 = flatBoard.find((el) => el.id == possible_move3);
  var square4 = flatBoard.find((el) => el.id == possible_move4);
  var square5 = flatBoard.find((el) => el.id == possible_move5);
  var square6 = flatBoard.find((el) => el.id == possible_move6);
  var square7 = flatBoard.find((el) => el.id == possible_move7);
  var square8 = flatBoard.find((el) => el.id == possible_move8);
  
    if (square1 !== undefined) {
      if (square1.piece == null) {
        if(checkOnPosition(possible_move1,'black')){possible_position.push(possible_move1);}
      } else if (square1.piece.piece_name.includes("black")) {
      } else if (square1.piece.piece_name.includes("white")) {
        piece_going.push(possible_move1);
      }
    }
    if (square2 !== undefined) {
      if (square2.piece == null) {
        if(checkOnPosition(possible_move2,'black')){possible_position.push(possible_move2);}
      } else if (square2.piece.piece_name.includes("black")) {
      } else if (square2.piece.piece_name.includes("white")) {
        piece_going.push(possible_move2);
      }
    }
    if (square3 !== undefined) {
      if (square3.piece == null) {
        if(checkOnPosition(possible_move3,'black')){possible_position.push(possible_move3);}
      } else if (square3.piece.piece_name.includes("black")) {
      } else if (square3.piece.piece_name.includes("white")) {
        piece_going.push(possible_move3);
      }
    }
    if (square4 !== undefined) {
      if (square4.piece == null) {
        if(checkOnPosition(possible_move4,'black')){possible_position.push(possible_move4);}
      } else if (square4.piece.piece_name.includes("black")) {
      } else if (square4.piece.piece_name.includes("white")) {
        piece_going.push(possible_move4);
      }
    }
    if (square5 !== undefined) {
      if (square5.piece == null) {
        if(checkOnPosition(possible_move5,'black')){possible_position.push(possible_move5);}
      } else if (square5.piece.piece_name.includes("black")) {
      } else if (square5.piece.piece_name.includes("white")) {
        piece_going.push(possible_move5);
      }
    }
    if (square6 !== undefined) {
      if (square6.piece == null) {
        if(checkOnPosition(possible_move6,'black')){possible_position.push(possible_move6);}
      } else if (square6.piece.piece_name.includes("black")) {
      } else if (square6.piece.piece_name.includes("white")) {
        piece_going.push(possible_move6);
      }
    }
    if (square7 !== undefined) {
      if (square7.piece == null) {
        if(checkOnPosition(possible_move7,'black')){possible_position.push(possible_move7);}
      } else if (square7.piece.piece_name.includes("black")) {
      } else if (square7.piece.piece_name.includes("white")) {
        piece_going.push(possible_move7);
      }
    }
    if (square8 !== undefined) {
      if (square8.piece == null) {
        if(checkOnPosition(possible_move8,'black')){possible_position.push(possible_move8);}
      } else if (square8.piece.piece_name.includes("black")) {
      } else if (square8.piece.piece_name.includes("white")) {
        piece_going.push(possible_move8);
      }
    }
  

  return {possible_position,piece_going};
}


// pawn promotion 
var pawn_color = null;
function pawnPromotion(){
  const modal = $('<div>').addClass('pawn_promotion');
  const black_rook =  $("<button type = 'button'><i class='fa-solid fa-chess-rook fa-4x ' style='color:   #000000;'></i></button>") ;

  const black_queen =  $("<button type = 'button'><i class='fa-solid fa-chess-queen fa-4x' style='color: #000000;'></i></button>") ;
  const black_bishop =  $("<button type = 'button'><i class='fa-solid fa-chess-bishop fa-4x' style='color: #000000;'></i></button>") ;
  const black_knight =  $("<button type = 'button'><i class='fa-solid fa-chess-knight fa-4x' style='color: #000000;'></i></button>") ;
  modal.append(black_queen);
  modal.append(black_rook);
  modal.append(black_bishop);
  modal.append(black_knight);
  $('body').prepend(modal);
  roo.addClass('blurr');
  roo.off('click');
}
// function to check if the king in current position is in check 
var white_king_in_check = false;
var black_king_in_check = false;
function checkOnKing() {
  var flatBoard = boardArr.flat();
  var whiteking = flatBoard.find(el => el.piece && el.piece.piece_name == 'white king');
  var pos_white_king = whiteking.piece.current_position;
  $.each(flatBoard,function(index,el){
    if(el.piece !== null){
      if(el.piece.piece_name == 'black queen'){
        var pos = el.piece.current_position;
        var  {possible_position , piece_going} = black_queen_move(pos);
        if(piece_going.includes(pos_white_king)){
         inCheckBackground(pos_white_king);
         white_king_in_check = true;
         
        }
      }
      else if(el.piece.piece_name == 'black pawn'){
        var pos = el.piece.current_position;
        var  {possible_position , piece_going} = black_pawn_move(pos);
        
        if(piece_going.includes(pos_white_king)){
          inCheckBackground(pos_white_king);
          white_king_in_check = true;
        }
      }
      else if(el.piece.piece_name == 'black rook'){
        var pos = el.piece.current_position;
        var  {possible_position , piece_going} = black_rook_move(pos);
       
        if(piece_going.includes(pos_white_king)){
          inCheckBackground(pos_white_king);
          white_king_in_check = true;
        }
      }
      else if(el.piece.piece_name == 'black bishop'){
        var pos = el.piece.current_position;
        var  {possible_position , piece_going} = black_bishop_move(pos);
        
        if(piece_going.includes(pos_white_king)){
          inCheckBackground(pos_white_king);
          white_king_in_check = true;
        }
      }
      else if(el.piece.piece_name == 'black knight'){
        var pos = el.piece.current_position;
        var  {possible_position , piece_going} = black_knight_move(pos);
        
        if(piece_going.includes(pos_white_king)){
          inCheckBackground(pos_white_king);
          white_king_in_check = true;
        }
      }
    }
    })
  var blackking = flatBoard.find(el => el.piece && el.piece.piece_name == 'black king');
  var pos_black_king = blackking.piece.current_position;
  $.each(flatBoard,function(index,el){
  if(el.piece !== null){
    if(el.piece.piece_name == 'white queen'){
      var pos = el.piece.current_position;
      var  {possible_position , piece_going} = white_queen_move(pos);
      if(piece_going.includes(pos_black_king)){
       inCheckBackground(pos_black_king);
       black_king_in_check = true;
      }
    }
    else if(el.piece.piece_name == 'white pawn'){
      var pos = el.piece.current_position;
      var  {possible_position , piece_going} = white_pawn_move(pos);
  
      if(piece_going.includes(pos_black_king)){
        inCheckBackground(pos_black_king);
        black_king_in_check = true;
      }
    }
    else if(el.piece.piece_name == 'white rook'){
      var pos = el.piece.current_position;
      var  {possible_position , piece_going} = white_rook_move(pos);
  
      if(piece_going.includes(pos_black_king)){
        inCheckBackground(pos_black_king);
        black_king_in_check = true;
      }
    }
    else if(el.piece.piece_name == 'white bishop'){
      var pos = el.piece.current_position;
      var  {possible_position , piece_going} = white_bishop_move(pos);
  
      if(piece_going.includes(pos_black_king)){
        inCheckBackground(pos_black_king);
        black_king_in_check = true;
      }
    }
    else if(el.piece.piece_name == 'white knight'){
      var pos = el.piece.current_position;
      var  {possible_position , piece_going} = white_knight_move(pos);
  
      if(piece_going.includes(pos_black_king)){
        inCheckBackground(pos_black_king);
        black_king_in_check = true;
      }
    }
  }
  })
  
  }

// funnction to check if the position is in check
function checkOnPosition(position , kingColor) {
    var flatBoard = boardArr.flat();
    var result = false ;
if(kingColor === 'white')
{
   $.each(flatBoard,function(index,el){
      if(el.piece !== null){
        if(el.piece.piece_name == 'black queen'){
          var pos = el.piece.current_position;
          var  {possible_position , piece_going} = black_queen_move(pos);
          if(possible_position.includes(position)){
            result = true;
            return false;
            
          }
        }
        else if(el.piece.piece_name == 'black pawn'){
          var pos = el.piece.current_position;
          var  {possible_position , piece_going} = black_pawn_move(pos);
          
          if(possible_position.includes(position)){
    
            result = true;
            return false;
          }
        }
        else if(el.piece.piece_name == 'black rook'){
          var pos = el.piece.current_position;
          var  {possible_position , piece_going} = black_rook_move(pos);
         
          if(possible_position.includes(position)){
            result = true;
            return false;
          }
        }
        else if(el.piece.piece_name == 'black bishop'){
          var pos = el.piece.current_position;
          var  {possible_position , piece_going} = black_bishop_move(pos);
          
          if(possible_position.includes(position)){
            result = true;
            return false;
           
          }
        }
        else if(el.piece.piece_name == 'black knight'){
          var pos = el.piece.current_position;
          var  {possible_position , piece_going} = black_knight_move(pos);
          
          if(possible_position.includes(position)){
            result = true;
            return false;
            
          }
        }
      }
      })}

 else if(kingColor === 'black'){   $.each(flatBoard,function(index,el){
    if(el.piece !== null){
      if(el.piece.piece_name == 'white queen'){
        var pos = el.piece.current_position;
        var  {possible_position , piece_going} = white_queen_move(pos);
        if(possible_position.includes(position)){
         
          result = true;
          return false;
        }
      }
      else if(el.piece.piece_name == 'white pawn'){
        var pos = el.piece.current_position;
        var  {possible_position , piece_going} = white_pawn_move(pos);
    
        if(possible_position.includes(position)){
          result = true;
          return false;
         
        }
      }
      else if(el.piece.piece_name == 'white rook'){
        var pos = el.piece.current_position;
        var  {possible_position , piece_going} = white_rook_move(pos);
    
        if(possible_position.includes(position)){
          result = true;
          return false;
       
        }
      }
      else if(el.piece.piece_name == 'white bishop'){
        var pos = el.piece.current_position;
        var  {possible_position , piece_going} = white_bishop_move(pos);
    
        if(possible_position.includes(position)){
          result = true;
          return false;
      
        }
      }
      else if(el.piece.piece_name == 'white knight'){
        var pos = el.piece.current_position;
        var  {possible_position , piece_going} = white_knight_move(pos);
    
        if(possible_position.includes(position)){
          result = true;
          return false;
        }
      }
    }
    })}
return result; 
    }
//function to show white king moves
var white_king_count = 0; // var to keep count if the white king has moved
var white_rook_king_side =0;  // var to keep count if the white kingside rook  has moved
var white_rook_queen_side = 0; // var to keep count if the white queenside rook  has moved
var black_king_count =0; // var to keep count if the black king has moved
var black_rook_king_side =0;// var to keep count if the black kingside rook  has moved
var black_rook_queen_side = 0; // var to keep count if the black queenside rook  has moved

// function that returns true if castle is possible and false otherwise
function  if_castle_possible( king_color, side) {
  var flatBoard = boardArr.flat();
 // checking for white king
 if(king_color == 'white') { 
   // king side castle
if(side == 'king_side'){ 
   if(white_king_count == 0 && white_rook_king_side == 0){
    var id1 = flatBoard.find(el =>el.id === 'f1');
    var id2 = flatBoard.find(el=> el.id === 'g1');

   
    if(id1.piece === null && id2.piece === null){
      
      if((checkOnPosition(id1.id,king_color))===false && (checkOnPosition(id2.id,king_color))==false && white_king_in_check === false){
        return true
      }

    }
  }}
   // queen side castle
 else if(side == 'queen_side'){ 
    if(white_king_count == 0 && white_rook_queen_side == 0){
     var id1 = flatBoard.find(el =>el.id === 'd1');
     var id2 = flatBoard.find(el=> el.id === 'c1');
     var id3 = flatBoard.find(el=> el.id === 'b1');
     if(id1.piece === null && id2.piece === null && id3.piece === null){
       if(checkOnPosition(id1.id,king_color)===false && checkOnPosition(id2.id,king_color)===false && checkOnPosition(id3.id,king_color)===false && white_king_in_check === false){
         return true;
       }
 
     }
   }}
  }
   // checking for black king
else if(king_color == 'black') { 
   // king side castle
    if(side == 'king_side'){ 
       if(black_king_count == 0 && black_rook_king_side == 0){
        var id1 = flatBoard.find(el =>el.id === 'f8');
        var id2 = flatBoard.find(el=> el.id === 'g8');
        if(id1.piece === null && id2.piece === null){
          if(checkOnPosition(id1.id, king_color)===false && checkOnPosition(id2.id, king_color)==false && black_king_in_check === false){
            return true
          }
    
        }
      }}
        // queen side castle
     else if(side == 'queen_side'){ 
        if(black_king_count == 0 && black_rook_queen_side == 0){
         var id1 = flatBoard.find(el =>el.id === 'd8');
         var id2 = flatBoard.find(el=> el.id === 'c8');
         var id3 = flatBoard.find(el=> el.id === 'b8');
         if(id1.piece === null && id2.piece === null && id3.piece === null){
           if(checkOnPosition(id1.id , king_color)===false && checkOnPosition(id2.id , king_color)==false && checkOnPosition(id3.id , king_color)==false && black_king_in_check === false){
             return true;
           }
     
         }
       }}
      }
  
return false;
}
// function to perform the castle move
function castle_Move(clicked_piece){
  // for white king side
  if(clicked_piece == 'g1'){
    boardArr[0][5].piece = white_rook('f1');
    boardArr[0][7].piece = null;
    
  }
   // for white queen side
  else if(clicked_piece == 'c1'){
    boardArr[0][3].piece = white_rook('d1');
    boardArr[0][0].piece = null;
    
  }
    // for black king side
  else if(clicked_piece == 'g8'){
    boardArr[7][5].piece = white_rook('d1');
    boardArr[7][7].piece = null;
    
  }
    // for black queen side
  else if(clicked_piece == 'c8'){
    boardArr[7][3].piece = white_rook('d1');
    boardArr[7][0].piece = null;
    
  }
}
// function which checks if the game has ended and the king has been captured or not
function GameOver () {
    const flatBoard = boardArr.flat();
    var whiteKingPosition = flatBoard.find(el =>el.piece && el.piece.piece_name =="white king");
    if(whiteKingPosition === undefined){
        $('root').css('display','');
        $('.root').html("<h2 class='end'>Refresh Page to restart the game.</h2><h1 class='end'>GAME OVER. BLACK WINS!</h1> ");
    }
    var blackKingPosition = flatBoard.find(el =>el.piece && el.piece.piece_name =="black king");
    if(blackKingPosition === undefined){
        $('.root').html("<h2 class='end'>Refresh Page to restart the game.</h2><h1 class='end'>GAME OVER. WHITE WINS!</h1>");
        

    }
    
}
var selected_piece = null; //var that stores the piece selected
var current_pawn = null; // var that stores the current pawn for pawn promotion


//adding event listener to the roo
roo.on("click", on_click);



//event listener for pawn promotion
$(document).on("click", '.pawn_promotion', function(event) {
  $.each(boardArr, function (_, row) {
    $.each(row, function (_, square) {
      if(square.id=== current_pawn){
        if($(event.target).hasClass('fa-chess-knight')){
          if(pawn_color ==='white'){
            square.piece = white_knight(current_pawn);
          }
          else if(pawn_color === 'black'){
            square.piece = black_knight(current_pawn);
          }
         
         pieceRender(boardArr);
         roo.on("click", on_click);
         roo.removeClass('blurr');
         
         $('.pawn_promotion').remove();
         
        }
      else if($(event.target).hasClass('fa-chess-queen')){
        if(pawn_color ==='white'){
          square.piece = white_queen(current_pawn);
        }
        else if(pawn_color === 'black'){
          square.piece = black_queen(current_pawn);
        }
          
          pieceRender(boardArr);
          roo.on("click", on_click);
          roo.removeClass('blurr');
          
          $('.pawn_promotion').remove();
          
         }
        else if($(event.target).hasClass('fa-chess-bishop')){
          if(pawn_color === 'white'){
            square.piece = white_bishop(current_pawn);
          }
          else if(pawn_color === 'black'){
            square.piece = black_bishop(current_pawn);
          }
          
          pieceRender(boardArr);
          roo.on("click", on_click);
          roo.removeClass('blurr');
          
          $('.pawn_promotion').remove();
          
         }
         else if($(event.target).hasClass('fa-chess-rook')){
          if(pawn_color ==='white'){
            square.piece = white_rook(current_pawn);
          }
          else if(pawn_color ==='black'){
            square.piece = black_rook(current_pawn);
          }
          
          
          pieceRender(boardArr);
          roo.on("click", on_click);
          roo.removeClass('blurr');
          
          $('.pawn_promotion').remove();
          
         }
      
      }
      

    })})


  

});




//function called for the root event listener
function on_click(event) {

  if ($(event.target).is("i.fa-circle")) {
    const clicked_piece = event.target.parentNode.id; // var stores id of the clicked position
    const piece_name = selected_piece.piece_name; // var stored the piece name of the selected piece
    const piece_id = selected_piece.current_position; // var stores the current position of the selected piece

    $.each(boardArr, function (_, row) {
      $.each(row, function (_, square) {
        if (square.id == selected_piece.current_position) {
          square.piece = null;
          $("#" + selected_piece.current_position).html(""); // removing the selected piece from its current position to move it to its clicked position
          remove_highlighted_circle();
        }
        if (square.id == clicked_piece) {
          //updating the pieces to their new position as clicked
          if (piece_name == "white pawn") {
            square.piece = white_pawn(clicked_piece);
            current_pawn = clicked_piece;
            if(clicked_piece.includes('8')){
              pawn_color= 'white';
              pawnPromotion();
              
            }
            
         
            GameOver();

            turn = "black";
          } else if (piece_name == "black pawn") {
            square.piece = black_pawn(clicked_piece);
            current_pawn = clicked_piece;
            if(clicked_piece.includes('1')){
              pawn_color= 'black';
              pawnPromotion();
              
            }
            GameOver();

            turn = "white";
          } else if (piece_name == "white rook") {
            square.piece = white_rook(clicked_piece);
            if(piece_id === 'h1'){
              white_rook_king_side = 1;
            }
            else if(piece_id === 'a1'){
              white_rook_queen_side = 1;
            }
            GameOver();

            turn = "black";
          } else if (piece_name == "black rook") {
            square.piece = black_rook(clicked_piece);
            if(piece_id === 'h8'){
              white_rook_king_side = 1;
            }
            else if(piece_id === 'a8'){
              white_rook_queen_side = 1;
            }
            GameOver();
            turn = "white";
          } else if (piece_name == "white bishop") {
            square.piece = white_bishop(clicked_piece);
            GameOver();

            turn = "black";
          } else if (piece_name == "black bishop") {
            square.piece = black_bishop(clicked_piece);
            GameOver();

            turn = "white";
          } else if (piece_name == "white knight") {
            square.piece = white_knight(clicked_piece);
            GameOver();

            turn = "black";
          } else if (piece_name == "black knight") {
            square.piece = black_knight(clicked_piece);
            GameOver();
 
            turn = "white";
          } else if (piece_name == "white queen") {
            
            square.piece = white_queen(clicked_piece);
            GameOver();

            turn = "black";
          } else if (piece_name == "black queen") {
            square.piece = black_queen(clicked_piece);
            GameOver();

            turn = "white";
          } else if (piece_name == "white king") {
            square.piece = white_king(clicked_piece);
            white_king_count=1;
            if(clicked_piece == 'g1'){
              castle_Move('g1');
              $('#h1').html('');
            }
            else if(clicked_piece == 'c1'){
              castle_Move('c1');
              $('#a1').html('');
            }

            GameOver();
            turn = "black";
          } else if (piece_name == "black king") {

            square.piece = black_king(clicked_piece);
            black_king_count=1;
            if(clicked_piece == 'g8'){
              castle_Move('g8');
              $('#h8').html('');
            }
            else if(clicked_piece == 'c8'){
              castle_Move('c8');
              $('#a8').html('');
            }

            GameOver();
            turn = "white";
          }
        }
      });
    });
    //rednering the pieces after each change to keep the board updated 
    pieceRender(boardArr);
  } else if ($(event.target).is("i")) {
    //when we click on the pieces themselves to be selected
    const clickedID = event.target.parentNode.id; // getting the id of the clicked element
    const flatBoard = boardArr.flat(); // creating a flatboard array to traverse through the boardarr
    const square = flatBoard.find((el) => el.id == clickedID);// getting the square in the boardarr with the clicked id 
    // checking if the turn is white or not
    if(turn === 'white'){
      // code to show the moves of various pieces depending on the piece clicked for white pieces
      if (square.piece.piece_name == "white pawn") {
        remove_highlighted_circle();
        highlightMoves(white_pawn_move(square.piece.current_position));
        selected_background(square.piece.current_position);
        selected_piece = square.piece;
        
      }
      else if (square.piece.piece_name == "white rook") {
        remove_highlighted_circle();
        highlightMoves(white_rook_move(square.piece.current_position));
        selected_background(square.piece.current_position);
        selected_piece = square.piece;
      }
      else if (square.piece.piece_name == "white bishop") {
        remove_highlighted_circle();
        highlightMoves(white_bishop_move(square.piece.current_position));
        selected_background(square.piece.current_position);
        selected_piece = square.piece;
      }  else if (square.piece.piece_name == "white knight") {
        remove_highlighted_circle();
        highlightMoves(white_knight_move(square.piece.current_position));
        selected_background(square.piece.current_position);
        selected_piece = square.piece;
      } else if (square.piece.piece_name == "white queen") {
        remove_highlighted_circle();
       
        highlightMoves(white_queen_move(square.piece.current_position));
        selected_background(square.piece.current_position);
        selected_piece = square.piece;
      }
      else if (square.piece.piece_name == "white king") {
        remove_highlighted_circle();
        highlightMoves(white_king_move(square.piece.current_position));
        selected_background(square.piece.current_position);
        selected_piece = square.piece;
      } 
    }else{
      // code to show the moves of various pieces depending on the piece clicked for black pieces
       if (square.piece.piece_name == "black pawn") {
        remove_highlighted_circle();
        highlightMoves(black_pawn_move(square.piece.current_position));
        selected_background(square.piece.current_position);
        selected_piece = square.piece;
      }
      else if (square.piece.piece_name == "black rook") {
        remove_highlighted_circle();
        highlightMoves(black_rook_move(square.piece.current_position));
        selected_background(square.piece.current_position);
        selected_piece = square.piece;
      } 
      else if (square.piece.piece_name == "black bishop") {
        remove_highlighted_circle();
        highlightMoves(black_bishop_move(square.piece.current_position));
        selected_background(square.piece.current_position);
        selected_piece = square.piece;
      }else if (square.piece.piece_name == "black knight") {
        remove_highlighted_circle();
        highlightMoves(black_knight_move(square.piece.current_position));
        selected_background(square.piece.current_position);
        selected_piece = square.piece;
      } 
      else if (square.piece.piece_name == "black queen") {
        remove_highlighted_circle();
        highlightMoves(black_queen_move(square.piece.current_position));
  
        selected_background(square.piece.current_position);
        selected_piece = square.piece;
        
      }else if (square.piece.piece_name == "black king") {
        remove_highlighted_circle();
        highlightMoves(black_king_move(square.piece.current_position));
        selected_background(square.piece.current_position);
        selected_piece = square.piece;
      }
    }

  } else {
    remove_highlighted_circle();
  }
 white_king_in_check = false;
 black_king_in_check = false;
 $('.root div').removeClass('red');
 checkOnKing();
 
}
