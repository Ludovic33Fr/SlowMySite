(function() {

	// just place a div at top right
	/*
    var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);
    */

    var shouldRun = true;
    //Number of second to wait
    var desiredLoadFactor = 10;
    
    var now = new Date().getTime();
    var result = 0
    console.log("Start the service : " + new Date().toLocaleString('en-US'));
    while(shouldRun) {
        result += Math.random() * Math.random();
        if (new Date().getTime() > now + 1000*desiredLoadFactor)
        {
            shouldRun = false;
            console.log("End the service : " + new Date().toLocaleString('en-US'));
        
        
            var keypad1 = document.createElement("div");
            keypad1.innerHTML = "...Bad it is too slow ...";
            document.body.appendChild(keypad1);

        }
    }	

})();