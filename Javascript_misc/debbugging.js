//The best practice to find out the error is to debug the code. The code can be debugged easily by using web browsers like Google Chrome, Mozilla Firebox.


/*JavaScript Debugging Example
Here, we will find out errors using built-in web browser debugger. To perform debugging, we can use any of the following approaches:

1- Using console.log() method
2- Using debugger keyword */


//Example 1

/*<script>  
x = 10;  
y = 15;  
z = x + y;  
console.log(z);  
console.log(a);//a is not intialized  
</script>  */


<script>  
x = 10;  
y = 15;  
z = x + y;  
debugger;  
document.write(z);  
document.write(a);  
</script>  


