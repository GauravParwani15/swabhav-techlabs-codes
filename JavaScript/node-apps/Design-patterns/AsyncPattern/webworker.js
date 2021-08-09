

function timedCount() {

  postMessage("async");
  setTimeout("timedCount()",500);
}

// postMessage("async");

timedCount();