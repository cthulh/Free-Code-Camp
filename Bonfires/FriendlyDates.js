function makeFriendlyDates(arr) {
  var friendlyDates = [];
  var start_date = arr[0];
  var end_date = arr[1];
  function getDay(date){
    var ORDINAL = [[1,"st"],[2,"nd"],[3,"rd"]];
    var day = parseInt(date.substring(8,10));
    var ord = "th";
    for (i = 0; i < ORDINAL.length; i += 1){
      if (ORDINAL[i][0] === day) ord = ORDINAL[i][1];
    }
    return day + ord;
  }
  function getMonth(date){
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return MONTHS[parseInt(date.substring(5,7)) - 1];
  }
  function getYear(date){
    return date.substring(0,4);
  }
  function moreThanAYear(d1, d2) {
    var date1 = new Date(getYear(d1),parseInt(d1.substring(5,7)),parseInt(d1.substring(8,10)));
    var date2 = new Date(getYear(d2),parseInt(d2.substring(5,7)),parseInt(d2.substring(8,10)));
    var result = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
    return (result > 364)? true : false;
  }

  console.log(start_date);
  var start_year = getYear(start_date);
  var start_month = getMonth(start_date);
  var start_day = getDay(start_date);
  console.log(start_year + " " + start_month + " " + start_day);

  var end_year = getYear(end_date);
  var end_month = getMonth(end_date);
  var end_day = getDay(end_date);
  console.log(end_year + " " + end_month + " " + end_day);

  console.log("More than a year between dates? " + moreThanAYear(start_date,end_date));
  var current_date = new Date();
  console.log("Current year: " + current_date.getFullYear());
  console.log("Current month: " + current_date.getMonth());
  console.log("Current day: " + current_date.getDate());


  if (moreThanAYear(start_date,end_date)){
    // if more than a year between dates
    friendlyDates.push(start_month + " " + start_day + ", " + start_year);
    friendlyDates.push(end_month + " " + end_day + ", " + end_year);
  }
  console.log(friendlyDates);
  return friendlyDates;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
