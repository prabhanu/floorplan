var drawflag=0;
var n;
var onCanvasClick = function(e) {
  console.log(e);
}
i=0;
var path2=new Array();
$('#drawPolygon').click(function(){
  drawflag=!drawflag;
  path2[i] = new fabric.Path('M 0 0');
  if(drawflag){
    n=0;
   }

  else 
    {path2[i].path[n]=["z"];
    var path = path2[i];
    console.log(path);
    canvas.add(path);
    i++;
  }

  canvas.on('mouse:down', function(options) {
    if(drawflag){console.log(options.e.clientX, options.e.clientY, path2[i].selectable);
      if(n==0){
        path2[i].path[n]=["M",options.e.clientX,options.e.clientY];
      }
      else
        path2[i].path[n]=["L",options.e.clientX,options.e.clientY];
      n++;
    };
});
})

var path_string = new Array();
$('#drawPolygon').click(function(){
  drawflag=!drawflag;
  if(drawflag){
    n=0;
   }

  else 
    {path_string[n]=["z"];
    string = pathToString(path_string);
    var poly_path = new fabric.path(string);
    console.log(string);
    canvas.add(poly_path);
    i++;
  }

  canvas.on('mouse:down', function(options) {
    if(drawflag){console.log(options.e.clientX, options.e.clientY, path2[i].selectable);
      if(n==0){
          path_string[n]=["M",options.e.clientX,options.e.clientY];
      }
      else
          path_string[n]=["L",options.e.clientX,options.e.clientY];
      n++;
    };
});
})