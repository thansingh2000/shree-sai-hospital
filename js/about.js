function about(){
	document.getElementById("about").innerHTML=`
		<div class="container">
			<div class="mainAbout">
				<div class="AboutImg">
					<figure>
						<img src="img/About-sai-hospital.png" alt="sai hospital"/>
					</figure>
				</div>
				<div class="AboutText">
					<h2><b> Shri Sai <b class="colorRed">Hospital</b></b></h2>
					<p><strong>Shri Sai Hospital Bilaspur</strong> is one of Central India's best multi-super specialty institutes located in Bilaspur. the institution has been envisioned with the aim of bringing to India the highest standards of Medical Care along with <strong> Clinical Research, Education And Training.</strong></p>
					<br>
					<p><strong>Shri Sai Hospital </strong> is governed under the guiding principles of providing medical services to patients with care, compassion and commitment.</p>
					<br>
					<div class="aboutDr">
						<div class="drPic">
							<img src="img/dr.png" alt="doctors-image">
						</div>
						<div class="drName">
							<h3>Dr. John Mishra</h3>
							<span>MBBS Medical</span>
						</div>
					</div> 							
				</div>
				
			</div>
		</div>
	`;
}

export default  about;