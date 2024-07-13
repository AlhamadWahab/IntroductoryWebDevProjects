 /* document.getElementById('rechnen').addEventListener("click",function(event){
  event.preventDefault(); // This prevents the default FORM submission behavior */
  document.getElementById('rechnen').addEventListener("click",function(){
    var gewicht = document.getElementById('gewicht').value;
    var größe = (document.getElementById('größe').value)/ 100;
    var result = gewicht /(Math.pow(größe, 2))
   
    if(isNaN(result)){
        document.getElementById('result').innerHTML = "please enter correct values!"
    }
    else{
        document.getElementById('mathResult').innerHTML = result
        var bmi;
        if(result <18){
            bmi = "too skinny"
        }
        else if(result <= 24.9){
           bmi = "perfecto"
        }
        else if(result <= 29.9){
           bmi = "extra- weight "
        }
        else if(result <= 34.9){
           bmi = "fatty grad 1"
        }
        else if(result <= 39.9){
           bmi = "fatty grad 2"
        }
        else{
           bmi = "danger fatty"
        }
        document.getElementById('result').innerHTML = bmi
    }
})