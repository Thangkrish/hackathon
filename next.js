var http=require("http");
function onRequest(request,response)
 {
    response.writeHead(200, {
        'Content-Type': 'text/html'
      });
    response.write("<!DOCTYPE html>"+
     "<head>"+
        "<meta charset='utf-8'>"+
       "<meta http-equiv='X-UA-Compatible' content='IE=edge'>"+
        "<title>Voice Controlled Notes App</title>"+
        "<meta name='description' content=''>"+
        "<meta name='viewport' content='width=device-width, initial-scale=1'>"+
        
        "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/shoelace-css/1.0.0-beta16/shoelace.css'>"+
        "<link rel='stylesheet' href='styles.css'>"+
    "</head>"+
    "<body>"+
        "<div class='container'>"+
            "<h1>Tell feedback Name</h1>"+
        "<form action='http://localhost:5555' method='get'>"+
            "<div class='app'>" +
                "<h3>Add New Note</h3>"+
                "<div class='input-single'>"+
                    "<textarea id='note-textarea' placeholder='Create a new note by typing or using voice recognition.' rows='6' name='textarea'></textarea>"+
                "</div>"+         
                "<button id='start-record-btn' title='Start Recording'>Start Recognition</button>"+
                "<button id='pause-record-btn' title='Pause Recording'>Pause Recognition</button>"+
                "<p id='recording-instructions'>Press the <strong>Start Recognition</strong> button and allow access.</p>"+
                "<input type='submit' >"+
           "</form>"+   
            "</div>"+
        "</div>"+
    "</body>"+
"</html>");
}
http.createServer(onRequest).listen(5555);
console.log("server is started");