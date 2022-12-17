// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Note: If you want to go to the start of code execution, scroll to the bottom of the code.

$(function () {

  var calendarText = {

    slotText: ["", "", "", "", "", "", "", "", ""],
  }

  if (localStorage.getItem("data") == null) {
    localStorage.setItem('data', JSON.stringify(calendarText));
  }

  // displayCalanderData(): Fetches and display the text stored in Local storage on the screen

  function displayCalanderData() {
    calendarText = JSON.parse(localStorage.getItem("data"));

    $('.text-area-9am').text(calendarText.slotText[0]);
    $('.text-area-10am').text(calendarText.slotText[1]);
    $('.text-area-11am').text(calendarText.slotText[2]);
    $('.text-area-12am').text(calendarText.slotText[3]);
    $('.text-area-13am').text(calendarText.slotText[4]);
    $('.text-area-14am').text(calendarText.slotText[5]);
    $('.text-area-15am').text(calendarText.slotText[6]);
    $('.text-area-16am').text(calendarText.slotText[7]);
    $('.text-area-17am').text(calendarText.slotText[8]);

  }


  console.log($('.text-area-9am')[0])
  var timeAndDate = dayjs();

  function showTimeAndDate() {
    $('#currentDay').text(dayjs().format('dddd, MMM D, YYYY'));
  }

  setInterval(showTimeAndDate, 1000);

  function removeAllClasses() {
    for (var i = 9; i <= 17; i++) {
      $('#hour-' + i).removeClass('past');
      $('#hour-' + i).removeClass('present');
      $('#hour-' + i).removeClass('future');
    }
  }

// function applyClasses(): Apply colors to the <Textarea> by adding and removing required classess

  function applyClasses() {
    if (dayjs().hour() == 9) {

      removeAllClasses();

      $('#hour-9').addClass('present');
      $('#hour-10').addClass('future');
      $('#hour-11').addClass('future');
      $('#hour-12').addClass('future');
      $('#hour-13').addClass('future');
      $('#hour-14').addClass('future');
      $('#hour-15').addClass('future');
      $('#hour-16').addClass('future');
      $('#hour-17').addClass('future');
    }

    else if (dayjs().hour() == 10) {

      removeAllClasses();

      $('#hour-9').addClass('past');
      $('#hour-10').addClass('present');
      $('#hour-11').addClass('future');
      $('#hour-12').addClass('future');
      $('#hour-13').addClass('future');
      $('#hour-14').addClass('future');
      $('#hour-15').addClass('future');
      $('#hour-16').addClass('future');
      $('#hour-17').addClass('future');
    }

    else if (dayjs().hour() == 11) {

      removeAllClasses();

      $('#hour-9').addClass('past');
      $('#hour-10').addClass('past');
      $('#hour-11').addClass('present');
      $('#hour-12').addClass('future');
      $('#hour-13').addClass('future');
      $('#hour-14').addClass('future');
      $('#hour-15').addClass('future');
      $('#hour-16').addClass('future');
      $('#hour-17').addClass('future');
    }

    else if (dayjs().hour() == 12) {

      removeAllClasses();

      $('#hour-9').addClass('past');
      $('#hour-10').addClass('past');
      $('#hour-11').addClass('past');
      $('#hour-12').addClass('present');
      $('#hour-13').addClass('future');
      $('#hour-14').addClass('future');
      $('#hour-15').addClass('future');
      $('#hour-16').addClass('future');
      $('#hour-17').addClass('future');
    }

    else if (dayjs().hour() == 13) {

      removeAllClasses();

      $('#hour-9').addClass('past');
      $('#hour-10').addClass('past');
      $('#hour-11').addClass('past');
      $('#hour-12').addClass('past');
      $('#hour-13').addClass('present');
      $('#hour-14').addClass('future');
      $('#hour-15').addClass('future');
      $('#hour-16').addClass('future');
      $('#hour-17').addClass('future');
    }

    else if (dayjs().hour() == 14) {

      removeAllClasses();

      $('#hour-9').addClass('past');
      $('#hour-10').addClass('past');
      $('#hour-11').addClass('past');
      $('#hour-12').addClass('past');
      $('#hour-13').addClass('past');
      $('#hour-14').addClass('present');
      $('#hour-15').addClass('future');
      $('#hour-16').addClass('future');
      $('#hour-17').addClass('future');
    }

    else if (dayjs().hour() == 15) {

      removeAllClasses();

      $('#hour-9').addClass('past');
      $('#hour-10').addClass('past');
      $('#hour-11').addClass('past');
      $('#hour-12').addClass('past');
      $('#hour-13').addClass('past');
      $('#hour-14').addClass('past');
      $('#hour-15').addClass('present');
      $('#hour-16').addClass('future');
      $('#hour-17').addClass('future');
    }


    else if (dayjs().hour() == 16) {

      removeAllClasses();

      $('#hour-9').addClass('past');
      $('#hour-10').addClass('past');
      $('#hour-11').addClass('past');
      $('#hour-12').addClass('past');
      $('#hour-13').addClass('past');
      $('#hour-14').addClass('past');
      $('#hour-15').addClass('past');
      $('#hour-16').addClass('present');
      $('#hour-17').addClass('future');
    }


    else if (dayjs().hour() == 17) {

      removeAllClasses();

      $('#hour-9').addClass('past');
      $('#hour-10').addClass('past');
      $('#hour-11').addClass('past');
      $('#hour-12').addClass('past');
      $('#hour-13').addClass('past');
      $('#hour-14').addClass('past');
      $('#hour-15').addClass('past');
      $('#hour-16').addClass('past');
      $('#hour-17').addClass('present');
    }

    else {
      removeAllClasses();

      $('#hour-9').addClass('past');
      $('#hour-10').addClass('past');
      $('#hour-11').addClass('past');
      $('#hour-12').addClass('past');
      $('#hour-13').addClass('past');
      $('#hour-14').addClass('past');
      $('#hour-15').addClass('past');
      $('#hour-16').addClass('past');
      $('#hour-17').addClass('past');


    }
  }



// Checks for hour of the day evey second and changes color of <Textarea> accordingly
  setInterval(applyClasses, 1000);


// saveData(event): Determine which save button is pressed and then saves the appointment text associated with it.
  function saveData(event) {

    var listOfTargetClasses = $(event.target).attr('class');

    if (listOfTargetClasses.split(" ").includes('btn') || listOfTargetClasses.split(" ").includes('fas'));
    {
      if (listOfTargetClasses.split(" ").includes('btn')) {

        var getText = $(event.target).siblings('.description').val();

        if ($(event.target).attr('data-num') == 9) {
          calendarText.slotText[0] = getText;
        }
        else if ($(event.target).attr('data-num') == 10) {
          calendarText.slotText[1] = getText;
        }
        else if ($(event.target).attr('data-num') == 11) {
          calendarText.slotText[2] = getText;
        }
        else if ($(event.target).attr('data-num') == 12) {
          calendarText.slotText[3] = getText;
        }
        else if ($(event.target).attr('data-num') == 13) {
          calendarText.slotText[4] = getText;
        }
        else if ($(event.target).attr('data-num') == 14) {
          calendarText.slotText[5] = getText;
        }
        else if ($(event.target).attr('data-num') == 15) {
          calendarText.slotText[6] = getText;
        }
        else if ($(event.target).attr('data-num') == 16) {
          calendarText.slotText[7] = getText;
        }
        else if ($(event.target).attr('data-num') == 17) {
          calendarText.slotText[8] = getText;
        }

        var convertToString = JSON.stringify(calendarText);
        localStorage.setItem('data', convertToString);
        $('.notification').text("  Appointment added to local storage.  ");
        setTimeout(function () { $('.notification').text(" "); }, 2000);


      }

      else {
        var getText = $(event.target).parent().siblings('.description').val();

        if ($(event.target).attr('data-num') == 9) {
          calendarText.slotText[0] = getText;
        }
        else if ($(event.target).attr('data-num') == 10) {
          calendarText.slotText[1] = getText;
        }
        else if ($(event.target).attr('data-num') == 11) {
          calendarText.slotText[2] = getText;
        }
        else if ($(event.target).attr('data-num') == 12) {
          calendarText.slotText[3] = getText;
        }
        else if ($(event.target).attr('data-num') == 13) {
          calendarText.slotText[4] = getText;
        }
        else if ($(event.target).attr('data-num') == 14) {
          calendarText.slotText[5] = getText;
        }
        else if ($(event.target).attr('data-num') == 15) {
          calendarText.slotText[6] = getText;
        }
        else if ($(event.target).attr('data-num') == 16) {
          calendarText.slotText[7] = getText;
        }
        else if ($(event.target).attr('data-num') == 17) {
          calendarText.slotText[8] = getText;
        }

        var convertToString = JSON.stringify(calendarText);
        localStorage.setItem('data', convertToString);
        $('.notification').text("  Appointment added to local storage.  ");
        setTimeout(function () { $('.notification').text(" "); }, 2000);

      }

    }

  }

  // Add event listner to all save buttons

  $('.saveBtn').on('click', saveData);


  // Start of code
  displayCalanderData();

});
