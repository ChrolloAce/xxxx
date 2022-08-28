
const directDiv = document.querySelector("");
var currentTarget = 2;
function LoadMore()
{
   const children = directDiv.querySelectorAll(':scope > .item');

   if(children.length == 0)return;  

   if(currentTarget < children.length)
   {
    
   }
   else if(currentTarget == children.length)
   {

   }


}