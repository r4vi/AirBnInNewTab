exec = (fn) ->
	script = document.createElement('script')
	script.setAttribute('type', 'text/javascript')
	script.textContent = '(' + fn + ')();'
	document.body.appendChild(script)
	

exec(()->
	$('body').bind('ajaxComplete', ()->
		l.target = '_blank' for l in document.querySelectorAll("a[href*='rooms']")
		null
	))
