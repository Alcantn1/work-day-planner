function updateBlocks() {
  const currentHour = dayjs().hour();
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
  }
  );
  }

  function getInputData(){
    $(".time-block").each(function() {
      const id = $(this).attr('id');
      const input = localStorage.getItem(id);
      $(this).find('.description').val(input);
    });
  }
  $(document).ready(() => {
    setInterval(updateBlocks, 60 * 60 * 1000);
    getInputData();
  
    $('.saveBtn').on('click', () => {
      const currentHour = dayjs().hour();
      $(".time-block").each((index, element) => {
        const timeBlockHour = parseInt($(element).attr("id"), 10);
        $(element).removeClass("past present future");
  
        if (timeBlockHour < currentHour) {
          $(element).addClass("past");
        } else if (timeBlockHour === currentHour) {
          $(element).addClass("present");
        } else {
          $(element).addClass("future");
        }
  
        const input = $(element).find('.description').val();
        const id = $(element).attr('id');
        localStorage.setItem(id, input);
      });
    });
  });

  





  
   
  