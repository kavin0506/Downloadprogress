
let progress=document.getElementById("progress");
let name=document.getElementById("per");
let prowidth=0;

function work(){
	prowidth++;
	progress.style.width=`${prowidth}%`;
	setTimeout(()=>{
		name.innerHTML=(prowidth==100)?`${prowidth}% completed`:`${prowidth}% progress`;
	},100)
}

// work()
setTimeout(()=>{
	let stop=setInterval(()=>{
		if(prowidth==100){
			clearInterval(stop);
		}
		else{
			work()
		}
	},500)
},1000)