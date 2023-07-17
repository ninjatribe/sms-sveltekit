<div class="about">
	<html lang="en">
		<head>
			<title>About FAITH ACADEMY</title>
			<meta name="viewport" content="width=device-width initial-scale=1.0" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap"
				rel="stylesheet"
			/>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap"
				rel="stylesheet"
			/>
		</head>
		<div class="top-image">
			<img src="top-image1.jpg" alt="" />
		</div>
		<body>
			<div class="main">
				<section class="navbar">
					<ul>
						<li><a href="/" class="active">ABOUT</a></li>
						<li><a href="/">HISTORY</a></li>
						<li><a href="/">SERVE</a></li>
						<li><a href="/">CALENDAR</a></li>
						<li><a href="/">FACILITIES</a></li>
						<li><a href="/">FAQS</a></li>
					</ul>
				</section>

				<div class="author">
					<div class="image-border" />
					<img src="IMG_1186-2-682x1024.jpg" alt="" />
					<div class="content">
						<h5>MESSAGE FROM THE HEAD OF <br />SCHOOL</h5>
						<h1>MR. LEIGHTON HELWIG</h1>
						<br />
						<p>
							Then people visit Faith Academy, they often comment about our amazing facilities.It is
							true, God has blessed our school with a wonderfulcampus.The facilities,however, simply
							reflect the well-rounded education we provide our students. It is through these
							facilities that our teachers and staff provide an excellent education that fosters
							spirit ...

							<span id="dots" />
						</p>
						<div id="more">
							<p>
								academic, creative, and physical growth in a rapidly changing world. It is our goal
								to use our school to provide opportunities for students to grow into young adults
								who better understand how God made them.
							</p>
						</div>
						<button on:click={readmore} id="btn">+ Read more</button>
					</div>
					<script>
						// @ts-nocheck

						function readmore() {
							var dots = document.getElementById('dots');
							var moretext = document.getElementById('more');
							var btn = document.getElementById('btn');

							if (dots.style.display === 'none') {
								dots.style.display = 'inline';
								btn.innerHTML = '+ Read more';
								moretext.style.display = 'none';
							} else {
								dots.style.display = 'none';
								btn.innerHTML = '- Read less';
								moretext.style.display = 'inline';
							}
						}
					</script>
				</div>

				<div class="mv">
					<div class="column1">
						<div class="mission">
							<h1>Mission</h1>
							<p>
								FORMING CHRISTLIKE, LIFELONG LEARNERS<br />
								THROUGH A DYNAMIC, RELEVANT EDUCATION, ESPECIALLY<br />
								FOR THE CHILDREN OF MISSIONARIES SERVING IN ASIA
							</p>
						</div>
					</div>
					<div class="column1">
						<div class="vission">
							<h1>Vission</h1>
							<p>
								TO SEE GOD’S KINGDOM AND THE GREAT COMMISSION<br />
								ADVANCED THROUGH TRANSFORMATIVE, CHRIST-CENTERED<br />
								EDUCATION
							</p>
						</div>
					</div>
				</div>
				<div class="bt">
					<p>
						It is our goal to offer rich opportunities for learning and growth inside and outside
						the classroom, to train students to think biblically about every aspect of life, to
						instill a sense of honor and respect for people of all cultural backgrounds, and to
						disciple and empower our students to impact the world around them for the Gospel.
						Students of missionary families, international businesspeople, diplomats, and Philippine
						nationals are all welcomed.<br />

						<strong>+ Read our Statement of Faith </strong>
					</p>
				</div>
				<section class="ocv">
					<h6>Our Core Values</h6>
				</section>
				<section class="core">
					<div class="columns">
						<div class="values">
							<img src="c1.png" alt="" />
							<h6>GREAT COMMISSION<br />PARTNERSHIP</h6>
							<p>
								WE ARE PASSIONATE ABOUT<br />
								PARTICIPATING IN THE GREAT<br />
								COMMISSION
							</p>
						</div>
					</div>
					<div class="columns">
						<div class="values">
							<img src="c2.png" alt="" />
							<h6>EXCELLENCE IN<br />EDUCATION</h6>
							<p>
								WE ARE COMITTED TO BEST<br />
								PRACTICES IN EDUCATION
							</p>
						</div>
					</div>
					<div class="columns">
						<div class="values">
							<img src="c3.png" alt="" />
							<h6>MULTICULTURAL<br />COMMUNITY</h6>
							<p>
								WE ARE A VIBRANT,<br />
								MULTICULTURAL COMMUNITY<br />
								BOUND TOGETHER BY<br />
								CHRISTIAN LOVE
							</p>
						</div>
					</div>
					<div class="columns">
						<div class="values">
							<img src="c4.png" alt="" />
							<h6>GOSPEL INTEGRATION</h6>
							<p>
								WE ARE DEDICATED TO<br />
								SEEING THE GOSPEL <br />
								PERMEATE EVERYTHING WE<br />
								DO, IN AND OUT OF THE<br />
								CLASSROOM
							</p>
						</div>
					</div>
				</section>
				<div class="endborder">
					<p>
						As a member of the Child Safety Protection Network, Faith Academy is committed to every
						student’s safety. All faculty and staff are provided mandatory ongoing child safety
						training so that they are able to prevent incidents as well as recognize and effectively
						report any indicators of abuse. Our Child Safety Team is dedicated to responding to and
						resolving all cases so that all involved may find help and healing.
					</p>

					<button class="text">+ Contact the CST</button>
				</div>
			</div></body
		>
	</html>
</div>

<style>
	.about {
		margin: none;
	}
	body {
		border: none;
		position: absolute;
		height: 200vh;
	}
	.main {
		background-color: white;
		background-size: cover;
		height: 285vh;
		width: 205vh;
	}
	.top-image img {
		max-width: 100%;
		max-height: 800px;
		position: fixed;
	}
	.navbar {
		background-image: linear-gradient(to left, rgb(3, 3, 39), #174fa9, skyblue);
		color: aliceblue;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		padding: 5px;
		margin-top: 30vh;
		text-shadow: #00060d 1px 0 10px;
	}
	.navbar .active {
		color: #00dbde;
	}
	.navbar ul {
		margin: 10px;
		text-align: center;
		align-items: center;
		display: flex;
		justify-content: center;
	}
	.navbar ul li a {
		margin: 20px;
		cursor: pointer;
		color: rgb(201, 200, 200);
	}
	.navbar ul li a:hover {
		color: white;
		transition-duration: 0s;
	}
	.author {
		justify-content: center;
		display: flex;
		margin-top: 100px;
		margin-right: 50vh;
		margin-left: 50vh;
	}

	.image-border {
		z-index: 1;
		background-color: transparent;
		width: 120vh;
		height: 420px;
		border: 4px solid rgb(17, 91, 210);
	}
	.author img {
		z-index: 2;
		width: 290px;
		height: auto;
		position: absolute;
		padding: 10px;
		margin-top: 20px;
		margin-right: 70vh;
	}
	.content {
		margin-top: 20px;
		margin-right: 50px;
		margin-left: 50px;
	}
	.content p {
		margin-right: 100px;
		padding-right: 80px;
		word-break: break-all;
		color: #174fa9;
	}
	.content h5 {
		color: #174fa9;
		font-family: 'Anton', sans-serif;
		font-size: 30px;
		font-weight: bold;
	}
	.content h1 {
		font-family: Georgia, 'Times New Roman', Times, serif;
	}
	.content button {
		display: flex;
		display: inline-block;
		padding: 4px 10px;
		border-radius: 10px;
		font-size: 15px;
		background-image: linear-gradient(to left, #174fa9, rgb(95, 177, 210));
		box-shadow: 30px 30px 20px rgb(0, 0, 0, 0.3);
		color: #ffff;
		height: 40px;
		cursor: pointer;
	}
	.content button:hover {
		color: skyblue;
	}
	#more {
		display: none;
	}

	.mv {
		text-align: center;
		display: flex;
		justify-content: center;
		margin-top: 100px;
	}
	.mv .column1 {
		margin: 50px;
		border: 2px solid #174fa9;
	}
	.mv .column1 h1 {
		font-family: 'Kaushan Script', cursive;
		color: #174fa9;
		font-size: 50px;
	}
	.mv .column1 p {
		font-size: 15px;
		color: #174fa9;
		font-weight: bold;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		margin: 30px;
	}
	.bt {
		margin-top: 10vh;
		background-image: url(blue1.jpg);
		width: 100%;
		height: 40vh;
	}
	.bt p {
		color: #eef1f5;
		text-shadow: #020913 1px 0 10px;
		text-align: center;
		padding: 100px 30vh 30vh;
		word-break: break-all;
	}
	.ocv {
		transform: transalte(-50%, 50%);
	}
	.ocv h6 {
		background: linear-gradient(90deg, #00dbde, #174fa9, rgb(117, 57, 220));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		color: #dbe0e8;
		margin-top: 5vh;
		font-size: 8vh;
		font-family: 'Oleo Script', cursive;
		text-align: center;
	}
	.core {
		margin-top: 100px;
		display: flex;
		justify-content: center;
	}
	.core .columns {
		margin-top: none;
		margin-right: 30px;
		margin-left: 30px;
		margin-bottom: 20px;
		text-align: center;
	}
	.core .values img {
		margin: auto;
		width: auto;
		height: 150px;
		object-fit: cover;
	}
	.core .values h6 {
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-weight: bold;
		color: #174fa9;
		margin-top: 20px;
	}
	.core .values p {
		padding-top: 10px;
		font-size: 11px;
	}
	.endborder {
		background-image: linear-gradient(to left, #174fa9, rgb(18, 18, 18), #174fa9);
		text-align: center;
		height: 50vh;
	}
	.endborder p {
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
		text-shadow: #010b18 1px 0 10px;
		color: #dbe0e8;
		padding-top: 150px;
		margin-top: 30px;
	}
	.endborder button {
		color: #1160de;
		font-weight: bold;
		background: transparent;
		border: none;
		margin: 20px;
	}
	.endborder button:hover {
		color: #33aad5;
	}
	@media screen and (max-width: 1000px) {
		body .main {
			width: 102vh;
			background-size: cover;
		}
		body .author {
			margin-top: 50px;
			margin-right: 100px;
			margin-left: 100px;
		}
		body .author .content {
			margin-top: 30px;
			margin-right: none;
			margin-left: 50px;
		}
		body .image-border {
			z-index: 1;
			background-color: transparent;
			width: 165vh;
			height: 365px;
			margin-top: 20px;
			margin-left: 45px;
			border: 4px solid rgb(17, 91, 210);
		}
		body .author img {
			z-index: 2;
			width: 30vh;
			height: auto;
			position: absolute;
			padding: 20px;
			margin-left: 29vh;
		}
		.core {
			margin-top: 100px;
			display: flex;
			justify-content: center;
		}
		.core .columns {
			margin-top: none;
			margin-right: 30px;
			margin-left: 30px;
			margin-bottom: 20px;
			text-align: center;
		}
		.core .values img {
			margin: auto;
			width: auto;
			height: 120px;
			object-fit: cover;
		}
		.bt p {
			color: #eef1f5;
			text-shadow: #020913 1px 0 10px;
			text-align: center;
			padding: 100px 30px 30px;
			word-break: break-all;
		}
		.endborder p {
			font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
				sans-serif;
			text-shadow: #010b18 1px 0 10px;
			color: #dbe0e8;
			padding-top: 150px;
			margin: 50px 50px 5px;
			word-break: break-all;
		}
		.content {
			margin: 20px auto auto;
		}
	}
</style>
