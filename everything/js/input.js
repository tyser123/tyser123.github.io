var mouse_pos = {x:0, y:0};
var allign_to_mouse = 0;
var chosen = 0;
var last_chosen = chosen;

var check = 0;
var port = "nope";
var connecting = "nope";

function input(a) {
  mouse_pos.x = a.clientX - canvas.offsetLeft;
  mouse_pos.y = a.clientY - canvas.offsetTop;
}

function clicked(event) {
  for(a = 0; a < blocks_number; a++) {
    if(blocks[a].type == "begin_block"){
      handle_begin();
    }
    else if(blocks[a].type == "variable_block") {
      handle_variable();
    }
    else if(blocks[a].type == "match_block") {
      handle_match();
    }
    else if(blocks[a].type == "if_block") {
      handle_if();
    }
    else if(blocks[a].type == "input_block") {
      handle_input();
    }
    else if(blocks[a].type == "output_block") {
      handle_output();
    }
    else if(blocks[a].type == "end_block") {
      handle_end();
    }
  }
}

function clear() {
  blocks[a].follow = 0;
  connecting = "nope";
  last_chosen = chosen;
  chosen = "nope";
  port = "nope";
}

function update_params() {
  blocks[last_chosen].params[0] = document.getElementById("param1").value;
  if(blocks[last_chosen].type != "input_block" && blocks[last_chosen].type != "output_block") {
      blocks[last_chosen].params[1] = document.getElementById("param2").value;
  }
}

function greater_than() {
  blocks[last_chosen].params[2] = ">";
  document.getElementById("option").innerHTML = ">";
}

function equal_to() {
  blocks[last_chosen].params[2] = "=";
  document.getElementById("option").innerHTML = "=";
}

function less_than() {
  blocks[last_chosen].params[2] = "<";
  document.getElementById("option").innerHTML = "<";
}

function addition() {
  blocks[last_chosen].params[2] = "+";
  document.getElementById("option").innerHTML = "+";
}

function subtraction() {
  blocks[last_chosen].params[2] = "-";
  document.getElementById("option").innerHTML = "-";
}

function multiplication() {
  blocks[last_chosen].params[2] = "*";
  document.getElementById("option").innerHTML = "*";
}

function division() {
  blocks[last_chosen].params[2] = "/";
  document.getElementById("option").innerHTML = "/";
}
/*
function delete() {
  var b;
  for(a = 0; a < blocks_number; a++) {
    if(a > chosen) {
      b = a - 1;
      blocks[b] = blocks[a];
    }
    if(blocks[a].ports[0].block_1 == chosen) {
      blocks[a].ports[0].block_1 = "nope";
      blocks[a].ports[0].port = "nope";
      blocks[a].ports[0].block_2 = "nope";
    }
  }
  connecting = "nope";
  port = "nope";
  blocks_number -= 1;
  blocks[chosen] = "nope";
}*/
