<script>  
         
      //define a date object variable that will take the current system date  
       todaydate = new Date();  
  
      //find the year of the current date  
       var oneJan =  new Date(todaydate.getFullYear(), 0, 1);   
    
       // calculating number of days in given year before a given date   
       var numberOfDays =  Math.floor((todaydate - oneJan) / (24 * 60 * 60 * 1000));   
    
       // adding 1 since to current date and returns value starting from 0   
       var result = Math.ceil(( todaydate.getDay() + 1 + numberOfDays) / 7);     
  
       //display the calculated result         
       document.write("Week Numbers of current date (" + todaydate +   
       ") is: <br>" + result);  
  
   </script>    