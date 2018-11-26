function block(x, y, bl_type, por = [], foll = 0, chos = 0,par = []) {
  var check = 0;
  for(a = 0; a < blocks_number; a++) {
    if(blocks[a].pos_x == 0 && blocks[a].pos_y == 0) {
      check++;
    }
  }
  if(check == 0) {
    blocks[blocks_number] = {pos_x:x, pos_y:y, type:bl_type, ports:por, follow:foll, chosen:chos, params:par};
    blocks[blocks_number].ports[0] = {block_1:"nope", port:"nope", block_2:"nope"};
    blocks[blocks_number].ports[1] = {block_1:"nope", port:"nope", block_2:"nope"};
    blocks[blocks_number].ports[2] = {block_1:"nope", port:"nope", block_2:"nope"};
    blocks[blocks_number].params[0] = "";
    blocks[blocks_number].params[1] = "";
    blocks[blocks_number].params[2] = "";
    blocks_number++;
  }
}

function begin_block() {
  block(0, 0, "begin_block");
}

function variable_block() {
  block(0, 0, "variable_block", "");
}

function match_block() {
  block(0, 0, "match_block");
}

function if_block() {
  block(0, 0, "if_block");
}

function input_block() {
  block(0, 0, "input_block");
}

function output_block() {
  block(0, 0, "output_block")
}

function end_block() {
  block(0, 0, "end_block")
}
