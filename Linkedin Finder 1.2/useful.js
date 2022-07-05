



    // working script

    selected = $('h1');

    var leadName = selected.textcontent;

    console.log(leadName);

// var selected = ($('h1'));
   // var leadName = selected.textcontent;



//content copy from function

function start(){

    for (var i = 0; i <1; i++) {

        if (list[i].type == "h1") {

          

            let scriptelements = document.getElementsByClassName('text-heading-xlarge inline t-24 v-align-middle break-words');


           for (var j = 0; j < scriptelements.length; j++) {
            let value = scriptelements[j].textContent;
                
                console.log(value);       
              
                lead.push(value);

          }    
           // }



        }

        else if (list[i].type == "div") {

          

            let scriptelements = document.getElementsByName('Current company');


           for (var j = 0; j < scriptelements.length; j++) {
            let value = scriptelements[j].ariaLabel;
                
                console.log(value);   
                console.log("Company Name");    
           
                company.push(value);

          }    
           // }



        }

        var leadName= Array.from(new Set(lead));
        var companyName= Array.from(new Set(company));
 
    
            chrome.runtime.sendMessage({
                data: {leadName, companyName}
            
            }, function (response) {
                console.dir(response);
            });
       
    

    }
  }
  

