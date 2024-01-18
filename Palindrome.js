//Palindrome

function isPalindrome (x){
    return  x < 0 ? false: +x.toString().split("").reverse().join("")
  }
  
  const result = isPalindrome(121);
  console.log(result)
  
  var a= 121;
  const res=a.toString();
  console.log(typeof(a)); //number
  console.log(typeof(res)); //string
   
   let b= "Aishwarya";
   console.log(b.split("")); // ['A', 'i', 's', 'h', 'w', 'a', 'r', 'y','a']
  