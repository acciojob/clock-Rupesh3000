 const timer = document.getElementById("timer")
	const intervalID = setInterval(()=>{
		timer.innerHTML = new Date().toLocaleString()
	},1000)