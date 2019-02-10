const addBurger = (desc) => {
  $.ajax({
    url:'/api/burger',
    method:'POST',
    data:{burger_desc:desc}
  }).then((data)=>{
    console.log("Added");
    location.reload();
  });
}

const deleteBurger = (id) => {
  $.ajax({
    url:'/api/burger/'+id,
    method:'DELETE'
  }).then((data)=>{
    console.log("Deleted");
    location.reload();
  });
};

$(document).ready(function(){
  // Update Burger
   
    $(document).on("click",".eat",function(){
      let id = $(this).attr("burger-id");
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
    if(!desc){
      Swal.fire("What Burger ?");
      return false;
    }else{
      addBurger(desc);
    }
  });

  //Delete Burger  
  $(document).on("click",".delete",function(){
    let id = $(this).attr("burger-id");
    deleteBurger(id);  
  });

  //Delete without eating
  $(document).on("click",".noEat",function(){
    Swal.fire({title: 'Wait! You have still not devoured. Are you sure to delete? ', showCancelButton: true}).then(result => {
      if (result.value) {
        // handle Confirm button click
        // result.value will contain `true` or the input value
          let id = $(this).attr("burger-id");
          deleteBurger(id);  
      } else {
        // handle dismissals
        // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
        Swal.fire("Burger remains to be devoured");
      }
    });
    
  });

});