window.addEventListener( "load", function () {
    function sendData() {
        var sendRequest = new XMLHttpRequest();
        var signupInfo = new FormData( form );
    
        sendRequest.addEventListener( "load", function( event ) {
            alert( "Your account was created successfully!");
        });
            
         sendRequest.addEventListener( "error", function (event) {
            alert( "Submission unsuccessful, Please try again." );
        });
    

        sendRequest.open( "POST", "http://localhost:5000/app/new/user" ); //end point is address

        sendRequest.send( signupInfo );
    }

    var form = document.getElementById("signup");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        sendData();
    });
});














