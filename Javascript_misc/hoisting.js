
/*Hoisting is a mechanism in JavaScript that moves the declaration of variables and functions at the top. So, in JavaScript we can use variables and functions before declaring them.

JavaScript hoisting is applicable only for declaration not initialization. It is required to initialize the variables and functions before using their values. */


//JavaScript Variable Hoisting

<script>  
x=10;  
document.write(x);  
var x;  
</script>  


// javascript function Hoisting

/*<script>  
document.write(sum(10,20));  
function sum(a,b)  
{  
return a+b;  
}  
</script> */ 