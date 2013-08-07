$(document).ready(function(){
  if (window.DeviceMonitorEvent) {
    window.addEventListener('devicemotion', deviceMotionHandler, false);
  } else {
    $('div').after("<p>Not supported</p>");
  }
  function deviceMotionHandler(eventData){
    var acceleration = eventData.acceleration;
    if (acceleration.x > 0.0){
      $('div').animate({left: "+=10px"}, 400);
    }
    if (acceleration.x < 0.0){
      $('div').animate({left: "-=10px"}, 400);
    }
    if (acceleration.y > 0.0){
      $('div').animate({top: "-=10px"}, 400);
    }
    if (acceleration.y < 0.0){
      $('div').animate({left: "+=10px"}, 400);
    }
    if (acceleration.z > 0.0){
      $('div').animate({height: "+=10px", width: "+=10px"}, 400);
    }
    if (acceleration.z < 0.0){
      $('div').animate({height: "-=10px", width: "-=10px"}, 400);
    }
  };
}); 
