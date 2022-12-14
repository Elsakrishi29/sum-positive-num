var s=parseInt(prompt("Enter the number"));
for(i=0;i<=s;i++)
{
var p=parseInt(prompt("Enter the first number"));
var q=parseInt(prompt("Enter the second number"));
var r=parseInt(prompt("Enter the third number"));
var sum=0;
if(p>0 && q>0 && r>0)
{
    sum=p+q+r;
    console.log(sum);
}
else{
    console.log("not a +ve num");
}
}       