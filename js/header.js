 function headFoot(){
	let headerData=[
    {
        logo:"img/shree_sai_hospital_logo.png",
        alt:"Shri Sai hospital Bilaspur Official Logo",
		About:"Shri Sai Hospital Bilaspur is one of Central India's best multi-super specialty institutes located in Bilaspur. the institution has been envisioned with the aim of bringing to India the highest standards of Medical Care along with Clinical Research, Education And Training."
    },//hospital logo
    {
        tabName:["Home","About","Services","Gallery","Contact"],
        tabLinks:["index.html","about.html","#","gallery.html","ContactUs.html"]
    },//navList 
	{
		mobile:"07752405111",
		mobileN:"07909620000",
		email:"shrisaihospitalbilaspur@gmail.com",
		Adress:"Minocha Colony, Mungeli Road, Bilaspur, Chhattisgarh 495001"
	},
	{
		DropMenu:["ICU","Laparoscopic Surgery","Fracture & Trauma care","Nephrology Dialysis","Paediatric","Gynaecologist","Neurology and Neurosurgery","Urology","Orthopedics","Ambulace facilities"],
		DropLink:["icu_treatment.html",
			"LaparoscopicSurgery.html",
			"Fracture_Trauma_care.html",
			"Nephrology_Dialysis.html",
			"Paediatric.html",
			"Gynaecologist.html",
			"Neurology_and_Neurosurgery.html",
			"Urology.html",
			"Orthopedics.html",
			"Ambulacefacilities.html"
		],
	}
	
]; 
let [logo,nav,adress,drop]=headerData;
let {tabName,tabLinks}=nav;
let {DropMenu,DropLink}=drop;
let headerA=document.getElementById("header");
let footerA=document.getElementById("footer");


function header(){
	headerA.innerHTML=`
		<div class="mainHeader">
			<div class="toggleBTN">
				<button id="menuBtn">
					<i class="fa fa-bars"></i>
				</button>
			</div>
                <div class="container">
                    <div class="HeaderGrid">
                        <div class="logoBox" id="logo">
							<figure>
								<img src=${logo.logo} alt="${logo.alt}" id="home">
							</figure>
                        </div><!--end-logoBox-->
                        <div class="navListBox" id="navList">
                            <div class="navList">
                                <ul id="list">                                    
                                </ul>
                            </div>
                        </div>
                        <div class="actionBtn" id="bt">
                            <button class="btn"id="book">
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>	
	`;
	
	
	//url open function....
	 home.addEventListener("click",()=>{
		 window.location.href="index.html";
	 });
	 book.addEventListener("click",()=>{
		 window.location.href="ContactUs.html";
	 });
	//header-navlist
	for(let i=0; i<tabName.length; i++){
		list.innerHTML+=`
			 <li><a href="${tabLinks[i]}">${tabName[i]}</a></li>  
		 `;
	}
	//---start drop---
	
		
	function menuDropDown(){
		let listAll=document.querySelectorAll("#list>li>a");	
			listAll[2].removeAttribute("href","#"); 			
			listAll[2].style.cursor="pointer";
			listAll[2].style.position="relative";
			let listA=document.querySelectorAll("#list>li");
				listA[2].setAttribute("id","dropDown");
				function Mmenu(){					
					listA[2].innerHTML+=`
						<div id="dropMenu" class="newDrop">
							<ul id="dropNav">								  
							</ul>
						</div> 							 
					 `;
						 let dropNav = document.getElementById("dropNav");
						for(let i=0; i<DropMenu.length; i++){ 						
							dropNav.innerHTML+=`
							   <li><a href="${DropLink[i]}">${DropMenu[i]}</a></li>
							`;
						}
						
				};
				Mmenu();
				
				//---hide--show---
				
				let dropDown=document.querySelector("#dropDown");
				let dropMenu = document.querySelector("#dropMenu");
				
					 dropDown.onclick = function(){
						 dropMenu.classList.toggle("DBolck");
					 }
					 
					window.onclick = function(event){
						if(!event.target.matches("#dropDown>a")){
							dropMenu.classList.remove("DBolck");
						}
					}
					
					
	}
	menuDropDown();
	
	
	
	//--end--drop----

	 //onscroll - Header Sticky
	window.onscroll = function() {myFunction()};	
	let sticky = headerA.offsetTop;

	function myFunction() {
	  if (window.pageYOffset > sticky) {
		headerA.classList.add("sticky");
	  } else {
		headerA.classList.remove("sticky");
		headerA.style.transition="1s";
	  }
	}

}
header();

function footer(){
	   footerA.innerHTML=`
			<div class="mainFooter">
				<div class="container">
					<div class="footerCol">
						<div class="FootAbout">
							
							<div id="footLogo">
								<figure>
									<img src=${logo.logo} alt="${logo.alt}">
								</figure>
							</div>
							<div class="footTExt" id="aboutText">
								<p>${logo.About}</p>
							</div>						
						</div>
					  <div class="Links">
						<h3>Useful links</h3>
						 <ul id="footMenu"></ul>
					  </div>
					  <div class="Location">
						<h3>Contact us</h3>
						<ul id="footLocation">	
							<li><a>${adress.mobile}</a></li>
							<li><a>${adress.mobileN}</a></li>
							<li><a>${adress.email}</a></li>
							<li><a>${adress.Adress}</a></li>
						</ul>
					  </div>
					</div>
				</div>
				<div class="copyright">
					 <span>Copyright © 2022. Design & Developed by </span><a href="#" trget="_blank">Shri Sai Hospital</a>
				</div>
			</div>	
		`;
		
		tabName.map((val,index)=>{
			footMenu.innerHTML+=`
			 <li><a href="${tabLinks[index]}">${tabName[index]}</a></li>  
		 `;
		});	
}
footer();

	let navList=document.querySelector(".navList");
	let MenuOcon=document.querySelector(".toggleBTN button");
	let bt=document.querySelector("#bt");
   document.getElementById("menuBtn").addEventListener("click",()=>{
		MenuOcon.style.border="1px solid red";
		navList.classList.toggle("none");
		bt.classList.toggle("none");
   });
}
export default headFoot;