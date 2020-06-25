const playlist = {
    
  
  var playerInstance = jwplayer("vplayer").setup(playlist);
  
  function jumpBySeconds(seksToJump) {
    var time = jwplayer("vplayer").getPosition() + seksToJump;
    if (time < 0) {
      time = 0;
    }
    jwplayer("vplayer").seek(time);
  }
  jwplayer("vplayer").on("ready", function () {
    var forward = document.createElement("div");
    var rewind = document.createElement("div");
    var download = document.createElement("div");
    var jwBtnArea = document.getElementsByClassName("jw-button-container")[0];
    forward.setAttribute(
      "class",
      "jw-icon jw-icon-inline jw-button-color jw-reset"
    );
    forward.setAttribute("title", "Forward 10 Seconds");
    forward.setAttribute("onclick", "jumpBySeconds(10)");
    forward.innerHTML =
      '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  style="width:19px; height:19px;" class="jw-svg-icon jw-svg-icon-rewind" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="489.394px" height="489.394px" viewBox="0 0 489.394 489.394" style="enable-background:new 0 0 489.394 489.394;" xml:space="preserve"> <g> <path d="M113.605,92.868h208.924l-17.506-42.795c-3.725-9.132-1-19.574,6.691-25.744c7.699-6.166,18.537-6.508,26.639-0.879 l141.465,98.261c6.197,4.304,9.795,11.457,9.564,18.995c-0.232,7.533-4.262,14.446-10.711,18.359l-147.926,89.823 c-8.416,5.107-19.18,4.093-26.48-2.499c-7.312-6.591-9.427-17.312-5.219-26.202l19.443-41.132H113.605 c-15.119,0-27.418,12.536-27.418,27.654v149.852c0,15.118,12.299,27.189,27.418,27.189h226.741 c20.225,0,36.623,16.396,36.623,36.623v12.942c0,20.227-16.398,36.623-36.623,36.623H113.605C50.963,469.939,0,419.207,0,356.56 V206.71C-0.001,144.063,50.963,92.868,113.605,92.868z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>';
    rewind.setAttribute(
      "class",
      "jw-icon jw-icon-inline jw-button-color jw-reset"
    );
    rewind.setAttribute("title", "Rewind 10 Seconds");
    rewind.setAttribute("onclick", "jumpBySeconds(-10)");
    rewind.innerHTML =
      '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  style="width:19px; height:19px;" class="jw-svg-icon jw-svg-icon-rewind" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="489.394px" height="489.394px" viewBox="0 0 489.394 489.394" style="enable-background:new 0 0 489.394 489.394;" xml:space="preserve"> <g> <path d="M375.789,92.867H166.864l17.507-42.795c3.724-9.132,1-19.574-6.691-25.744c-7.701-6.166-18.538-6.508-26.639-0.879 L9.574,121.71c-6.197,4.304-9.795,11.457-9.563,18.995c0.231,7.533,4.261,14.446,10.71,18.359l147.925,89.823 c8.417,5.108,19.18,4.093,26.481-2.499c7.312-6.591,9.427-17.312,5.219-26.202l-19.443-41.132h204.886 c15.119,0,27.418,12.536,27.418,27.654v149.852c0,15.118-12.299,27.19-27.418,27.19h-226.74c-20.226,0-36.623,16.396-36.623,36.622 v12.942c0,20.228,16.397,36.624,36.623,36.624h226.74c62.642,0,113.604-50.732,113.604-113.379V206.709 C489.395,144.062,438.431,92.867,375.789,92.867z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>';
    jwBtnArea.insertBefore(forward, jwBtnArea.children[2]);
    jwBtnArea.insertBefore(rewind, jwBtnArea.children[2]);
  });
  
  jwplayer().on("displayClick", function () {
    jwplayer().setFullscreen(false);
  });
  