
let lead= [];
let company = [];



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "personfinder" ) {
       start();
           }
    }
  );


  function start(){

    for (var i = 0; i <1; i++) {

     

          

            let lead_dataName = document.getElementsByClassName('text-heading-xlarge inline t-24 v-align-middle break-words');


         for (var j = 0; j < lead_dataName.length; j++) {
            let value = lead_dataName[j].textContent;
                
            var str = value;
            var words = str.split(" ");
            words.splice(2);
            console.log(words);
            var joinName = words.join(" ");
            console.log(joinName);
               
              
                lead.push(joinName);
               

             }    
    

          

            let company_dataName = document.querySelector('[aria-label="Current company"]')
            let company_value = company_dataName.textContent;
            
            company.push(company_value);
           




    }

        var leadName= Array.from(new Set(lead));
        var companyName= Array.from(new Set(company));
 
    
            chrome.runtime.sendMessage({
                data: {leadName, companyName}
            
            }, function (response) {
               // console.dir(response);
            });
       
//}   

 //   }
 }
  
