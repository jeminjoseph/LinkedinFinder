chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { "message": "personfinder" });
  });
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message);

    var content=document.getElementById("lead_result")

    /*for (var i=0;i<2;i++){
      if(i==0){*/
        content.appendChild($('<div class="result_item"><h3>Lead Name:</h3>'+message.data.leadName+'</div>')[0]);
     /* }
      if(i=1){*/
        content.appendChild($('<div class="result_item"><h3>Company Name:</h3>'+message.data.companyName+'</div>')[0]);
     // }
    //}
    
    
});