function handle_begin() {
  var hook_pos_x = blocks[a].pos_x + 20;
  var hook_pos_y = blocks[a].pos_y + 38;
  var hook_size_X = hook_pos_x + hook_size_x;
  var hook_size_Y = hook_pos_y + hook_size_y;

  var block_size_X = blocks[a].pos_x + block_size_x;
  var block_size_Y = blocks[a].pos_y + block_size_y;

  if(connecting == "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y) {
    port = 1;
    connecting = a;
  }
  else if(connecting == "nope" && mouse_pos.x > blocks[a].pos_x && mouse_pos.y > blocks[a].pos_y && mouse_pos.x < block_size_X && mouse_pos.y < block_size_Y) {
    blocks[a].follow = 1;
    chosen = a;
    document.getElementById("params").innerHTML = "begin block <div id='block_number'></div><br/><input id='delete' type='button' value='delete' onclick='delete();'></input>";
    document.getElementById("block_number").innerHTML = chosen;
  }
  else if(chosen == a) {
    clear();
  }
}

function handle_variable() {
  var hook_pos_x = blocks[a].pos_x + 20;
  var hook_pos_y = blocks[a].pos_y + 2;
  var hook_size_X = hook_pos_x + hook_size_x;
  var hook_size_Y = hook_pos_y + hook_size_y;

  var hook_pos_y2 = blocks[a].pos_y + 36;
  var hook_size_Y2 = hook_pos_y2 + hook_size_y;

  var block_size_X = blocks[a].pos_x + block_size_x;
  var block_size_Y = blocks[a].pos_y + block_size_y;

  if(connecting != "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y) {
    blocks[connecting].ports[1].block_1 = connecting;
    blocks[connecting].ports[1].port = port;
    blocks[connecting].ports[1].block_2 = a;

    blocks[a].ports[0].block_1 = connecting;
    blocks[a].ports[0].port = port;
    blocks[a].ports[0].block_2 = a;

    clear();
  }
  else if(connecting == "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y) {
    var block_1 = blocks[a].ports[0].block_1;
    port = blocks[a].ports[0].port;

    blocks[block_1].ports[port].block_1 = "nope";
    blocks[block_1].ports[port].port = "nope";
    blocks[block_1].ports[port].block_2 = "nope";

    blocks[a].ports[0].block_1 = "nope";
    blocks[a].ports[0].port = "nope";
    blocks[a].ports[0].block_2 = "nope";
  }
  else if(connecting == "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y2 && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y2) {
    port = 1;
    connecting = a;
  }
  else if(connecting == "nope" && mouse_pos.x > blocks[a].pos_x && mouse_pos.y > blocks[a].pos_y && mouse_pos.x < block_size_X && mouse_pos.y < block_size_Y) {
    blocks[a].follow = 1;
    chosen = a;
    document.getElementById("params").innerHTML = "variable_block <div id='block_number'></div><br/><input id='param1' type='text' placeholder='variable name'></input><br/><input id='param2' type='text' placeholder='value'></input><input id='submit' type='submit' value='submit' onclick='update_params();'></input><br/><input id='delete' type='button' value='delete' onclick='delete();'></input>";
    document.getElementById("param1").value = blocks[chosen].params[0];
    document.getElementById("param2").value = blocks[chosen].params[1];
    document.getElementById("block_number").innerHTML = chosen;
  }
  else if(chosen == a) {
    clear();
  }
}

function handle_match() {
  var hook_pos_x = blocks[a].pos_x + 20;
  var hook_pos_y = blocks[a].pos_y + 2;
  var hook_size_X = hook_pos_x + hook_size_x;
  var hook_size_Y = hook_pos_y + hook_size_y;

  var hook_pos_y2 = blocks[a].pos_y + 36;
  var hook_size_Y2 = hook_pos_y2 + hook_size_y;

  var block_size_X = blocks[a].pos_x + block_size_x;
  var block_size_Y = blocks[a].pos_y + block_size_y;

  if(connecting != "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y) {
    blocks[connecting].ports[1].block_1 = connecting;
    blocks[connecting].ports[1].port = port;
    blocks[connecting].ports[1].block_2 = a;

    blocks[a].ports[0].block_1 = connecting;
    blocks[a].ports[0].port = port;
    blocks[a].ports[0].block_2 = a;

    clear();
  }
  else if(connecting == "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y) {
    var block_1 = blocks[a].ports[0].block_1;
    port = blocks[a].ports[0].port;

    blocks[block_1].ports[port].block_1 = "nope";
    blocks[block_1].ports[port].port = "nope";
    blocks[block_1].ports[port].block_2 = "nope";

    blocks[a].ports[0].block_1 = "nope";
    blocks[a].ports[0].port = "nope";
    blocks[a].ports[0].block_2 = "nope";
  }
  else if(connecting == "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y2 && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y2) {
    port = 1;
    connecting = a;
  }
  else if(connecting == "nope" && mouse_pos.x > blocks[a].pos_x && mouse_pos.y > blocks[a].pos_y && mouse_pos.x < block_size_X && mouse_pos.y < block_size_Y) {
    blocks[a].follow = 1;
    chosen = a;

    document.getElementById("params").innerHTML = "match_block <div id='block_number'></div><br/><input id='param1' type='text' placeholder='param1'></input><div id='option'></div><input id='param2' type='text' placeholder='param2'></input><input id='submit' type='submit' value='submit' onclick='update_params();'></input><br/><input id='addition' type='button' value='+' onclick='addition()'></input><input id='subtraction' type='button' value='-' onclick='subtraction()'></input><input id='multiplication' type='button' value='*' onclick='multiplication()'></input><input id='division' type='button' value='/' onclick='division()'></input><br/><input id='delete' type='button' value='delete' onclick='delete();'></input>";
    document.getElementById("param1").value = blocks[chosen].params[0];
    document.getElementById("param2").value = blocks[chosen].params[1];
    document.getElementById("option").innerHTML = blocks[chosen].params[2];
    document.getElementById("block_number").innerHTML = chosen;
  }
  else if(chosen == a) {
    clear();
  }
}

function handle_if() {
  var hook_pos_x = blocks[a].pos_x + 20;
  var hook_pos_y = blocks[a].pos_y + 2;
  var hook_size_X = hook_pos_x + hook_size_x;
  var hook_size_Y = hook_pos_y + hook_size_y;

  var hook_pos_y2 = blocks[a].pos_y + 30;
  var hook_pos_x2 = blocks[a].pos_x + 2;
  var hook_size_Y2 = hook_pos_y2 + hook_size_y;
  var hook_size_X2 = hook_pos_x2 + hook_size_x;

  var hook_pos_y3 = blocks[a].pos_y + 30;
  var hook_pos_x3 = blocks[a].pos_x + 36;
  var hook_size_Y3 = hook_pos_y3 + hook_size_y;
  var hook_size_X3 = hook_pos_x3 + hook_size_x;

  var block_size_X = blocks[a].pos_x + block_size_x;
  var block_size_Y = blocks[a].pos_y + block_size_y;

  if(connecting != "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y) {
    blocks[connecting].ports[1].block_1 = connecting;
    blocks[connecting].ports[1].port = 1;
    blocks[connecting].ports[1].block_2 = a;

    blocks[a].ports[0].block_1 = connecting;
    blocks[a].ports[0].port = 1;
    blocks[a].ports[0].block_2 = a;

    clear();
  }
  else if(connecting != "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y) {
    blocks[connecting].ports[1].block_1 = connecting;
    blocks[connecting].ports[1].port = port;
    blocks[connecting].ports[1].block_2 = a;

    blocks[a].ports[0].block_1 = connecting;
    blocks[a].ports[0].port = port;
    blocks[a].ports[0].block_2 = a;

    clear();
  }
  else if(connecting == "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y) {
    var block_1 = blocks[a].ports[0].block_1;
    port = blocks[a].ports[0].port;

    blocks[block_1].ports[port].block_1 = "nope";
    blocks[block_1].ports[port].port = "nope";
    blocks[block_1].ports[port].block_2 = "nope";

    blocks[a].ports[0].block_1 = "nope";
    blocks[a].ports[0].port = "nope";
    blocks[a].ports[0].block_2 = "nope";
  }
  else if(connecting == "nope" && mouse_pos.x > hook_pos_x2 && mouse_pos.y > hook_pos_y2 && mouse_pos.x < hook_size_X2 && mouse_pos.y < hook_size_Y2) {
    port = 1;
    connecting = a;
  }
  else if(connecting == "nope" && mouse_pos.x > hook_pos_x3 && mouse_pos.y > hook_pos_y3 && mouse_pos.x < hook_size_X3 && mouse_pos.y < hook_size_Y3) {
    port = 2;
    connecting = a;
  }
  else if(connecting == "nope" && mouse_pos.x > blocks[a].pos_x && mouse_pos.y > blocks[a].pos_y && mouse_pos.x < block_size_X && mouse_pos.y < block_size_Y) {
    blocks[a].follow = 1;
    chosen = a;

    document.getElementById("params").innerHTML = "if_block <div id='block_number'></div><br/><input id='param1' type='text' placeholder='param1'></input><div id='option'></div><input id='param2' type='text' placeholder='param2'></input><input id='submit' type='submit' value='submit' onclick='update_params();'></input><br/><input id='greater_than' type='button' value='>' onclick='greater_than()'></input></input><input id='equal_to' type='button' value='=' onclick='equal_to()'></input></input><input id='less_than' type='button' value='<' onclick='less_than()'></input><br/></input><input id='delete' type='button' value='delete' onclick='delete();'></input>";
    document.getElementById("param1").value = blocks[chosen].params[0];
    document.getElementById("param2").value = blocks[chosen].params[1];
    document.getElementById("option").innerHTML = blocks[chosen].params[2];
    document.getElementById("block_number").innerHTML = chosen;
  }
  else if(chosen == a) {
    clear();
  }
}

function handle_input() {
  var hook_pos_x = blocks[a].pos_x + 20;
  var hook_pos_y = blocks[a].pos_y + 2;
  var hook_size_X = hook_pos_x + hook_size_x;
  var hook_size_Y = hook_pos_y + hook_size_y;

  var hook_pos_y2 = blocks[a].pos_y + 36;
  var hook_size_Y2 = hook_pos_y2 + hook_size_y;

  var block_size_X = blocks[a].pos_x + block_size_x;
  var block_size_Y = blocks[a].pos_y + block_size_y;

  if(connecting != "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y) {
    blocks[connecting].ports[1].block_1 = connecting;
    blocks[connecting].ports[1].port = port;
    blocks[connecting].ports[1].block_2 = a;

    blocks[a].ports[0].block_1 = connecting;
    blocks[a].ports[0].port = port;
    blocks[a].ports[0].block_2 = a;

    clear();
  }
  else if(connecting == "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y) {
    var block_1 = blocks[a].ports[0].block_1;
    port = blocks[a].ports[0].port;

    blocks[block_1].ports[port].block_1 = "nope";
    blocks[block_1].ports[port].port = "nope";
    blocks[block_1].ports[port].block_2 = "nope";

    blocks[a].ports[0].block_1 = "nope";
    blocks[a].ports[0].port = "nope";
    blocks[a].ports[0].block_2 = "nope";
  }
  else if(connecting == "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y2 && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y2) {
    port = 1;
    connecting = a;
  }
  else if(connecting == "nope" && mouse_pos.x > blocks[a].pos_x && mouse_pos.y > blocks[a].pos_y && mouse_pos.x < block_size_X && mouse_pos.y < block_size_Y) {
    blocks[a].follow = 1;
    chosen = a;
    document.getElementById("params").innerHTML = "input_block <div id='block_number'></div><br/><input id='param1' type='text' placeholder='param1'></input><input id='submit' type='submit' value='submit' onclick='update_params()'></input><br/><input id='delete' type='button' value='delete' onclick='delete();'></input>";
    document.getElementById("param1").value = blocks[a].params[0];
    document.getElementById("block_number").innerHTML = chosen;
  }
  else if(chosen == a) {
    clear();
  }
}

function handle_output() {
  var hook_pos_x = blocks[a].pos_x + 20;
  var hook_pos_y = blocks[a].pos_y + 2;
  var hook_size_X = hook_pos_x + hook_size_x;
  var hook_size_Y = hook_pos_y + hook_size_y;

  var hook_pos_y2 = blocks[a].pos_y + 36;
  var hook_size_Y2 = hook_pos_y2 + hook_size_y;

  var block_size_X = blocks[a].pos_x + block_size_x;
  var block_size_Y = blocks[a].pos_y + block_size_y;

  if(connecting != "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y) {
    blocks[connecting].ports[1].block_1 = connecting;
    blocks[connecting].ports[1].port = port;
    blocks[connecting].ports[1].block_2 = a;

    blocks[a].ports[0].block_1 = connecting;
    blocks[a].ports[0].port = port;
    blocks[a].ports[0].block_2 = a;

    clear();
  }
  else if(connecting == "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y) {
    var block_1 = blocks[a].ports[0].block_1;
    port = blocks[a].ports[0].port;

    blocks[block_1].ports[port].block_1 = "nope";
    blocks[block_1].ports[port].port = "nope";
    blocks[block_1].ports[port].block_2 = "nope";

    blocks[a].ports[0].block_1 = "nope";
    blocks[a].ports[0].port = "nope";
    blocks[a].ports[0].block_2 = "nope";
  }
  else if(connecting == "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y2 && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y2) {
    port = 1;
    connecting = a;
  }
  else if(connecting == "nope" && mouse_pos.x > blocks[a].pos_x && mouse_pos.y > blocks[a].pos_y && mouse_pos.x < block_size_X && mouse_pos.y < block_size_Y) {
    blocks[a].follow = 1;
    chosen = a;
    document.getElementById("params").innerHTML = "output_block <div id='block_number'></div><br/><input id='param1' type='text' placeholder='param1'></input><input id='submit' type='submit' value='submit' onclick='update_params()'></input><br/><input id='delete' type='button' value='delete' onclick='delete();'></input>";
    document.getElementById("param1").value = blocks[a].params[0];
    document.getElementById("block_number").innerHTML = chosen;
  }
  else if(chosen == a) {
    clear();
  }
}

function handle_end() {
  var hook_pos_x = blocks[a].pos_x + 20;
  var hook_pos_y = blocks[a].pos_y + 2;
  var hook_size_X = hook_pos_x + hook_size_x;
  var hook_size_Y = hook_pos_y + hook_size_y;

  var block_size_X = blocks[a].pos_x + block_size_x;
  var block_size_Y = blocks[a].pos_y + block_size_y;

  if(connecting != "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y) {
    blocks[connecting].ports[1].block_1 = connecting;
    blocks[connecting].ports[1].port = port;
    blocks[connecting].ports[1].block_2 = a;

    blocks[a].ports[0].block_1 = connecting;
    blocks[a].ports[0].port = port;
    blocks[a].ports[0].block_2 = a;

    clear();
  }
  else if(connecting == "nope" && mouse_pos.x > hook_pos_x && mouse_pos.y > hook_pos_y && mouse_pos.x < hook_size_X && mouse_pos.y < hook_size_Y) {
    var block_1 = blocks[a].ports[0].block_1;
    port = blocks[a].ports[0].port;

    blocks[block_1].ports[port].block_1 = "nope";
    blocks[block_1].ports[port].port = "nope";
    blocks[block_1].ports[port].block_2 = "nope";

    blocks[a].ports[0].block_1 = "nope";
    blocks[a].ports[0].port = "nope";
    blocks[a].ports[0].block_2 = "nope";
  }
  else if(connecting == "nope" && mouse_pos.x > blocks[a].pos_x && mouse_pos.y > blocks[a].pos_y && mouse_pos.x < block_size_X && mouse_pos.y < block_size_Y) {
    blocks[a].follow = 1;
    chosen = a;
    document.getElementById("params").innerHTML = "end_block <div id='block_number'></div><br/><input id='delete' type='button' value='delete' onclick='delete();'></input>";
    document.getElementById("block_number").innerHTML = chosen;
  }
  else if(chosen == a) {
    clear();
  }
}
