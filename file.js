
var accordionList = [
                      {"contentClass":"login_content","headerClass":"login_heading"},
                      {"contentClass":"academics_content","headerClass":"academics"},
                      {"contentClass":"app_content","headerClass":"app"},
                      {"contentClass":"gallery_content","headerClass":"gallery"},
                      {"contentClass":"des_content","headerClass":"des"},
                      {"contentClass":"feed_content","headerClass":"feed"}
                    ];


$(document).ready(function(){
for(var j=0;j<accordionList.length;j++)
{
  $("."+accordionList[j].headerClass).find(".right").show();
  $("."+accordionList[j].headerClass).find(".down").hide();
}
  $(".login_content").slideDown("slow");
  $(".login_heading").find(".down").show();
  $(".login_heading").find(".right").hide();
  $(".login_content").addClass('out');
});
  /*  setInterval(function() {
    $('button').animate( {background-color: "red !important" }, 300)
    .animate( { background-color: "green !important" }, 300);
  }, 1000);

}); */

/*var accordionList = [
                      {"contentClass":"login_content","headerClass":"login_heading"},
                      {"contentClass":"academics_content","headerClass":"academics"}
                    ];
*/
function togglePanel(contentClass,headerClass){

    $("."+contentClass).slideToggle("slow");

  if(!$("."+contentClass).hasClass('out')){
    $("."+contentClass).removeClass('in');
    $("."+contentClass).addClass('out');
  }
  else{
    $("."+contentClass).removeClass('out');
    $("."+contentClass).addClass('in');
  }

  if($("."+contentClass).hasClass('out')){
    $("."+headerClass).find(".right").hide();
    $("."+headerClass).find(".down").show();
  }else{
    $("."+headerClass).find(".right").show();
    $("."+headerClass).find(".down").hide();
  }
  for(var i=0;i<accordionList.length;i++)
  {
    if(!(accordionList[i].contentClass == contentClass)){
      if(!$("."+accordionList[i].contentClass).hasClass('in')){
        $("."+accordionList[i].contentClass).slideUp("slow");
        $("."+accordionList[i].contentClass).removeClass('out');
        $("."+accordionList[i].contentClass).addClass('in');

        $("."+accordionList[i].headerClass).find(".right").show();
        $("."+accordionList[i].headerClass).find(".down").hide();
      }
    }
  }
  //if($("."+className).attr('display') == "block")
};
/*
function checkOnLoad(){
  for(var i=0;i<accordionList.length;i++)
  {
    if(!(accordionList[i].contentClass == "login_content")){
      if(!$("."+accordionList[i].contentClass).hasClass('in')){
        $("."+accordionList[i].contentClass).slideToggle("slow");
        $("."+accordionList[i].contentClass).removeClass('out');
        $("."+accordionList[i].contentClass).addClass('in');
        $("."+accordionList[i].headerClass).find(".right").show();
        $("."+accordionList[i].headerClass).find(".down").hide();
      }
    }else{
      $("."+accordionList[i].contentClass).addClass('out');

        $("."+accordionList[i].headerClass).find(".down").show();
        $("."+accordionList[i].headerClass).find(".right").hide();
    }
  }
};

checkOnLoad(); */
