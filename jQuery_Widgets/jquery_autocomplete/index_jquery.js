var products = ["Apple","Samsung,","Oppo","Vivo","One+","Nothing","Nokia"]

$("document").ready(function () {
  
   $("#inp").autocomplete({
      source: products
   },{
      delay:1000,
      // minLength:1,
      autoFocus: true
   })

});
//go through the jquery website for more info
