baseUrl = 'http://127.0.0.1:5000/';
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
      if (request.role == "operator") {
          console.log('Operator message: ', request.message);
          $.ajax({
              type: "GET",
              url: baseUrl,
              //    data: payload,
              success: function (data) {
                  console.log(data);
                  sendResponse({ genReply: data });
              }
          });
          return true;
      } else if (request.role == "customer") {
          console.log('Customer message: ', request.message);
          $.ajax({
              type: "GET",
              url: baseUrl,
              //    data: payload,
              success: function (data) {
                  console.log(data);
                  sendResponse({ genReply: data });
              }
          });
          return true;
      }
  });