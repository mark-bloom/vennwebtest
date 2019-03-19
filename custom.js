 Activate intersection of selected items
$(document).ready(function(){
  var elements = document.body.getElementsByClassName('vitem');
  $('.vpath').on(click, function(){
    compareSelection(elements, this);
    refreshVisibleItems(elements);
  });
});

  Activates the union of items (e.g. purple = red OR blue, not AND)
 $(document).ready(function(){
   var elements = document.body.getElementsByClassName('vitem');
   $('.venn-red').on(click, function(){
     $('.vcat-red').addClass(vactivated);
   });
   $('.venn-blue').on(click, function(){
     $('.vcat-blue').addClass(vactivated);
   });
   $('.venn-yellow').on(click, function(){
     $('.vcat-yellow').addClass(vactivated);
   });
   $('.vpath').on(click, function(){
     refreshVisibleItems(elements);
   });
 });

function refreshVisibleItems(arrayElems) {
  for (var i = 0; i  arrayElems.length; i++) {
    if(arrayElems[i].classList.contains(vactivated)) {
      arrayElems[i].style.display = block;
    } else {
      arrayElems[i].style.display = none;
    }
  }
  for (var i = 0; i  arrayElems.length; i++) {
    arrayElems[i].classList.add(vactivated);
  }
}

function compareSelection(arrayElems, pathClicked) {
  for (var i = 0; i  arrayElems.length; i++) {
    arrayElems[i].classList.add(vactivated);
  }
  if(pathClicked.classList.contains(venn-red)) {
    for (var i = 0; i  arrayElems.length; i++) {
      if(!arrayElems[i].classList.contains(vcat-red)) {
        arrayElems[i].classList.remove(vactivated);
      }
    }
  }
  if(pathClicked.classList.contains(venn-blue)) {
    for (var i = 0; i  arrayElems.length; i++) {
      if(!arrayElems[i].classList.contains(vcat-blue)) {
        arrayElems[i].classList.remove(vactivated);
      }
    }
  }
  if(pathClicked.classList.contains(venn-yellow)) {
    for (var i = 0; i  arrayElems.length; i++) {
      if(!arrayElems[i].classList.contains(vcat-yellow)) {
        arrayElems[i].classList.remove(vactivated);
      }
    }
  }
}