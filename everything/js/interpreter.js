function interpreter() {
  if(blocks_number != 0) {
    var start = 1;
    var start_block;
    var next_block;
    for(a = 0; a < blocks_number; a++) {
      if(blocks[a].type == "begin_block") {
        start_block = a;
        break;
      }
    }
    next_block = blocks[start_block].ports[1].block_2;
    while(start == 1) {
      //
    }
  }
}
