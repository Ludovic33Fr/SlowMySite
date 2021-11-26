(function() {

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);

    var shouldRun = true;
    var desiredLoadFactor = .5;
    
    function blockCpuFor(ms) {
        var now = new Date().getTime();
        var result = 0
        while(shouldRun) {
            result += Math.random() * Math.random();
            if (new Date().getTime() > now +ms)
                return;
        }	
    }
    
    function start() {
        shouldRun = true;
        blockCpuFor(1000*desiredLoadFactor);
        setTimeout(start, 1000* (1 - desiredLoadFactor));
    }

	//alert('Insert the injection Alert');
    start();

})();