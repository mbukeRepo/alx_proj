var weight_value = document.getElementById("weight");
var result = document.getElementById("result");
var thumbnailElement = document.getElementById('smart_thumbnail');
var thumbnailElement1 = document.getElementById('smart_thumbnail1');
document.getElementById("form").addEventListener('submit',function(e){
    e.preventDefault();
    var quantity = weight_value.value;
    var totalPrice = quantity * 10;
    console.log(totalPrice);
    result.innerText = "it will cost you: " + totalPrice;
});
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById('smart_thumbnail').addEventListener('click',function(e){
        thumbnailElement.className = thumbnailElement.className === "" ?  "small" : "" ;
    });
    
    document.getElementById('smart_thumbnail1').addEventListener('click',function(e){
        thumbnailElement1.className = thumbnailElement1.className === "" ?  "small" : "" ;
    });
});
