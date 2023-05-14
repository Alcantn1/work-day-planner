$(document).ready(() => {
  const today = dayjs();
  setInterval( () => {
  updateBlocks();
},
 60 *60 *1000);
getInputData();

  $('.saveBtn').on('click', () => {
    const currentHour = dayjs(). hour();
    
    $(".time-block").each(function() {
      const timeBlockHour = parseInt($(this).attr("id"));
      
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");


      } else if (timeBlockHour === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");

        
      } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
      const input = $(this).find('.description').val();
      const id = $(this).attr('id');
      localStorage.setItem(id, input);
    });
  });
});

  
   
  