document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})

const observer = new IntersectionObserver((entries)=>{
	entries.forEach((entry)=>{
		if(entry.isIntersecting){
			entry.target.classList.add("show");
		}
		else{
			entry.target.classList.remove("show");
		}
	});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=>observer.observe(el));

let lists = document.getElementsByClassName("list");
let sBox = document.getElementById("S");
let aBox = document.getElementById("A");
let bBox = document.getElementById("B");
let cBox = document.getElementById("C");
let dBox = document.getElementById("D");

for(list of lists){
	list.addEventListener("dragstart",function(e){
		let selected = e.target;

		sBox.addEventListener("dragover",function(e){
			e.preventDefault();
		});
		sBox.addEventListener("drop",function(e){
			sBox.appendChild(selected);
			selected = null;
		});
		aBox.addEventListener("dragover",function(e){
			e.preventDefault();
		});
		aBox.addEventListener("drop",function(e){
			aBox.appendChild(selected);
			selected = null;
		});
		bBox.addEventListener("dragover",function(e){
			e.preventDefault();
		});
		bBox.addEventListener("drop",function(e){
			bBox.appendChild(selected);
			selected = null;
		});
		cBox.addEventListener("dragover",function(e){
			e.preventDefault();
		});
		cBox.addEventListener("drop",function(e){
			cBox.appendChild(selected);
			selected = null;
		});
		dBox.addEventListener("dragover",function(e){
			e.preventDefault();
		});
		dBox.addEventListener("drop",function(e){
			dBox.appendChild(selected);
			selected = null;
		});
	});
}
