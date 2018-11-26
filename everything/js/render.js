var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var block_size_x = 50;
var block_size_y = 50;
var hook_size_x = 10;
var hook_size_y = 10;

var blocks = [];
var blocks_number = 0;
var block_color = "rgba(0, 50, 150, 1)";
var text_color = "rgba(200, 200, 200, 1)";

canvas.width = window.innerWidth * 0.75;
canvas.height = window.innerHeight * 0.9;

document.addEventListener("mousemove", input, false);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw_blocks();
  draw_lines();
}

function draw_begin_block() {
  if(blocks[a].follow == 1) {
    blocks[a].pos_x = mouse_pos.x;
    blocks[a].pos_y = mouse_pos.y;
  }
  var hook_pos_x = blocks[a].pos_x + 20;
  var hook_pos_y = blocks[a].pos_y + 38;

  ctx.beginPath();
  ctx.rect(blocks[a].pos_x, blocks[a].pos_y, block_size_x, block_size_y);
  ctx.font = "15px Arial"
  ctx.fillStyle = block_color;
  ctx.fill();
  ctx.fillStyle = text_color;
  ctx.fillText("beg", blocks[a].pos_x, blocks[a].pos_y + 15);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = text_color;
  ctx.rect(hook_pos_x, hook_pos_y, hook_size_x, hook_size_y);
  ctx.fill();
  ctx.closePath();
}

function draw_variable_block() {
  if(blocks[a].follow == 1) {
    blocks[a].pos_x = mouse_pos.x;
    blocks[a].pos_y = mouse_pos.y;
  }
  var hook_pos_x = blocks[a].pos_x + 20;
  var hook_pos_y = blocks[a].pos_y + 38;

  ctx.beginPath();
  ctx.rect(blocks[a].pos_x, blocks[a].pos_y, block_size_x, block_size_y);
  ctx.font = "15px Arial"
  ctx.fillStyle = block_color;
  ctx.fill();
  ctx.fillStyle = text_color;
  ctx.fillText("var", blocks[a].pos_x, blocks[a].pos_y + 15);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = text_color;
  ctx.rect(hook_pos_x, hook_pos_y, hook_size_x, hook_size_y);
  hook_pos_y -= 36;
  ctx.rect(hook_pos_x, hook_pos_y, hook_size_x, hook_size_y);
  ctx.fill();
  ctx.closePath();
}

function draw_match_block() {
  if(blocks[a].follow == 1) {
    blocks[a].pos_x = mouse_pos.x;
    blocks[a].pos_y = mouse_pos.y;
  }
  var hook_pos_x = blocks[a].pos_x + 20;
  var hook_pos_y = blocks[a].pos_y + 38;

  ctx.beginPath();
  ctx.rect(blocks[a].pos_x, blocks[a].pos_y, block_size_x, block_size_y);
  ctx.font = "15px Arial"
  ctx.fillStyle = block_color;
  ctx.fill();
  ctx.fillStyle = text_color;
  ctx.fillText("mat", blocks[a].pos_x, blocks[a].pos_y + 15);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = text_color;
  ctx.rect(hook_pos_x, hook_pos_y, hook_size_x, hook_size_y);
  hook_pos_y -= 36;
  ctx.rect(hook_pos_x, hook_pos_y, hook_size_x, hook_size_y);
  ctx.fill();
  ctx.closePath();
}

function draw_if_block() {
  if(blocks[a].follow == 1) {
    blocks[a].pos_x = mouse_pos.x;
    blocks[a].pos_y = mouse_pos.y;
  }
  var hook_pos_x = blocks[a].pos_x + 20;
  var hook_pos_y = blocks[a].pos_y + 2;

  ctx.beginPath();
  ctx.rect(blocks[a].pos_x, blocks[a].pos_y, block_size_x, block_size_y);
  ctx.font = "15px Arial"
  ctx.fillStyle = block_color;
  ctx.fill();
  ctx.fillStyle = text_color;
  ctx.fillText("if", blocks[a].pos_x, blocks[a].pos_y + 15);
  ctx.font = "10px Arial"
  ctx.fillText("true", blocks[a].pos_x, blocks[a].pos_y + 29);
  ctx.fillText("false", blocks[a].pos_x + 29, blocks[a].pos_y + 29);
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(hook_pos_x, hook_pos_y, hook_size_x, hook_size_y);
  hook_pos_x -= 18;
  hook_pos_y += 28;
  ctx.rect(hook_pos_x, hook_pos_y, hook_size_x, hook_size_y);
  hook_pos_x += 36;
  ctx.rect(hook_pos_x, hook_pos_y, hook_size_x, hook_size_y);
  ctx.fillStyle = text_color;
  ctx.fill();
  ctx.closePath();
}

function draw_input() {
  if(blocks[a].follow == 1) {
    blocks[a].pos_x = mouse_pos.x;
    blocks[a].pos_y = mouse_pos.y;
  }
  var hook_pos_x = blocks[a].pos_x + 20;
  var hook_pos_y = blocks[a].pos_y + 38;

  ctx.beginPath();
  ctx.rect(blocks[a].pos_x, blocks[a].pos_y, block_size_x, block_size_y);
  ctx.font = "15px Arial"
  ctx.fillStyle = block_color;
  ctx.fill();
  ctx.fillStyle = text_color;
  ctx.fillText("inp", blocks[a].pos_x, blocks[a].pos_y + 15);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = text_color;
  ctx.rect(hook_pos_x, hook_pos_y, hook_size_x, hook_size_y);
  hook_pos_y -= 36;
  ctx.rect(hook_pos_x, hook_pos_y, hook_size_x, hook_size_y);
  ctx.fill();
  ctx.closePath();
}

function draw_output() {
  if(blocks[a].follow == 1) {
    blocks[a].pos_x = mouse_pos.x;
    blocks[a].pos_y = mouse_pos.y;
  }
  var hook_pos_x = blocks[a].pos_x + 20;
  var hook_pos_y = blocks[a].pos_y + 38;

  ctx.beginPath();
  ctx.rect(blocks[a].pos_x, blocks[a].pos_y, block_size_x, block_size_y);
  ctx.font = "15px Arial"
  ctx.fillStyle = block_color;
  ctx.fill();
  ctx.fillStyle = text_color;
  ctx.fillText("out", blocks[a].pos_x, blocks[a].pos_y + 15);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = text_color;
  ctx.rect(hook_pos_x, hook_pos_y, hook_size_x, hook_size_y);
  hook_pos_y -= 36;
  ctx.rect(hook_pos_x, hook_pos_y, hook_size_x, hook_size_y);
  ctx.fill();
  ctx.closePath();
}

function draw_end() {
  if(blocks[a].follow == 1) {
    blocks[a].pos_x = mouse_pos.x;
    blocks[a].pos_y = mouse_pos.y;
  }
  var hook_pos_x = blocks[a].pos_x + 20;
  var hook_pos_y = blocks[a].pos_y + 2;

  ctx.beginPath();
  ctx.rect(blocks[a].pos_x, blocks[a].pos_y, block_size_x, block_size_y);
  ctx.font = "15px Arial"
  ctx.fillStyle = block_color;
  ctx.fill();
  ctx.fillStyle = text_color;
  ctx.fillText("end", blocks[a].pos_x, blocks[a].pos_y + 15);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = text_color;
  ctx.rect(hook_pos_x, hook_pos_y, hook_size_x, hook_size_y);
  ctx.fill();
  ctx.closePath();
}

function draw_blocks() {
  for(a = 0; a < blocks_number; a++) {
    if(blocks[a].type == "begin_block") {
      draw_begin_block()
    }
    if(blocks[a].type == "variable_block") {
      draw_variable_block();
    }
    if(blocks[a].type == "match_block") {
      draw_match_block();
    }
    if(blocks[a].type == "if_block") {
      draw_if_block();
    }
    if(blocks[a].type == "input_block") {
      draw_input();
    }
    if(blocks[a].type == "output_block") {
      draw_output();
    }
    if(blocks[a].type == "end_block") {
      draw_end();
    }
  }
}

function draw_line(x, y, x2, y2) {
  var iterx2 = 0;
  var itery2 = 0;
  var a = 0;
  var b = 0;
  var c = 0;
  var x_pos_b = x;
  var y_pos_b = y;
  var x_pos_e = x2;
  var y_pos_e = y2;

  if(x < x2) {
    iterx2 = x2 - x;
  }
  else if(x2 < x) {
    iterx2 = x - x2;
  }
  if(y < y2) {
    itery2 = y2 - y;
  }
  else if(y2 < y) {
    itery2 = y - y2;
  }

  a = iterx2;
  iterx2 = iterx2 / itery2;
  if(iterx2 < 1) {
    iterx2 = 1;
  }
  itery2 = itery2 / a;
  if(itery2 < 1) {
    itery2 = 1;
  }
  a = 0
  while(a == 0) {
    ctx.beginPath();
    ctx.rect(x_pos_b, y_pos_b, iterx2, itery2);
    ctx.fillStyle = text_color;
    ctx.fill();
    ctx.closePath();

    if(x < x2) {
      x_pos_b += iterx2;
    }
    else {
      x_pos_b -= iterx2;
    }
    if(y < y2) {
      y_pos_b += itery2;
    }
    else {
      y_pos_b -= itery2;
    }
    if(x < x2) {
      if(x_pos_b > x_pos_e) {
        b = 1;
      }
    }
    if(x == x2) {
      b = 1;
    }
    if(x > x2) {
      if(x_pos_b < x_pos_e) {
        b = 1;
      }
    }
    if(y < y2) {
      if(y_pos_b > y_pos_e) {
        c = 1;
      }
    }
    if(y == y2) {
      c = 1;
    }
    if(y > y2) {
      if(y_pos_b < y_pos_e) {
        c = 1;
      }
    }
    if(b == 1 && c == 1) {
      break;
    }
  }
}

function draw_lines() {
  if(connecting != "nope") {
    var x = blocks[connecting].pos_x + 25;
    var y = blocks[connecting].pos_y + 43;
    draw_line(x, y, mouse_pos.x, mouse_pos.y);
  }
  for(a = 0; a < blocks_number; a++) {
    var block_1 = blocks[a].ports[0].block_1;
    var port1 = blocks[a].ports[0].port;
    var block_2 = blocks[a].ports[0].block_2;

    if(block_1 != "nope") {
      if(blocks[block_1].type == "if_block" && port1 == 1) {
        var x = blocks[block_1].pos_x + 7;
        var y = blocks[block_1].pos_y + 35;
        var x1 = blocks[block_2].pos_x + 25;
        var y1 = blocks[block_2].pos_y + 7;
        draw_line(x, y, x1, y1);
      }
      else if(blocks[block_1].type == "if_block" && port1 == 2) {
        var x = blocks[block_1].pos_x + 43;
        var y = blocks[block_1].pos_y + 35;
        var x1 = blocks[block_2].pos_x + 25;
        var y1 = blocks[block_2].pos_y + 7;
        draw_line(x, y, x1, y1);
      }
      else {
        var x = blocks[block_1].pos_x + 25;
        var y = blocks[block_1].pos_y + 43;
        var x1 = blocks[block_2].pos_x + 25;
        var y1 = blocks[block_2].pos_y + 7;
        draw_line(x, y, x1, y1);
      }
    }
  }
}

setInterval(draw, 10);
