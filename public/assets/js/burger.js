$(document).ready(function(){
  
  // Update Burger
    //$(document).on("click",".fa-laugh",function(){
    $(document).on("click",".eat",function(){
      let id = $(this).attr("burger-id");
      //console.log(" the id : " + id);
      $.ajax({
        url:'/api/burger/'+id,
        method:'PUT'
      }).then((data)=>{
        console.log("Updated");
        location.reload();
      });
    });

  //Add Burger  
  $(document).on("click","#save",function(){
    let desc = $("#burger-desc").val().trim();
    console.log(" desc : " + desc);
    $.ajax({
      url:'/api/burger',
      method:'POST',
      data:{burger_desc:desc}
    }).then((data)=>{
      console.log("Added");
      location.reload();
    });
  });

  //Delete Burger  
  $(document).on("click",".delete",function(){
    let id = $(this).attr("burger-id");
      console.log(" the id : " + id);
      $.ajax({
        url:'/api/burger/'+id,
        method:'DELETE'
      }).then((data)=>{
        console.log("Deleted");
        location.reload();
      });
  });

});