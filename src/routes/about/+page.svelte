<div class="about">
    <head>
        <script src="https://kit.fontawesome.com/5ffc4a812b.js" crossorigin="anonymous"></script>
    </head>
<body>
<div class="page">
  
   <div class="view">
        <h1>ABOUT <span>FAITH ACADEMY</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium, ab quia beatae
            repellendus quo veritatis dignissimos modi
            delectus repudiandae est! Lorem ipsum dolor 
            sit amet consectetur adipisicing elit. Obcaecati
            totam explicabo soluta veritatis atque voluptatem
            reiciendis esse ullam minima, excepturi, sequi quam 
            doloremque quaerat. Dolores velit pariatur, repudiandae 
            vero et soluta, harum omnis totam rerum deserunt quia rem 
            debitis repellendus.
        </p> 
    </div>
    <section class="iconic">
        <a href="#"><i class="fa-regular fa-handshake"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>
        </section>

<figure class="text">
<section class="top">
    <img class="logo" src="/1.webp" alt="none">
</section>
<figure class="max-w-screen-md mx-auto text-center">
    <blockquote>
        <p class="text-2xl italic font-medium text-white-900 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat est et accusamus omnis deleniti repudiandae soluta aliquid saepe illo aut.</p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="w-10 h-10 rounded-full" src="profile.jpg" alt="profile picture">
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-white-900 text-white">Micheal Avinash</cite>
            <cite class="pl-3 text-sm text-white-500 text-blue-100">HEAD at faith Academy</cite>
        </div>
    </figcaption>
</figure>
</figure>
<section class="parag">
            <section class="pic">
                <img src="/23.jpg" width="500px" height="200px" alt="">
                <div class="serve">
                <h2>MISSION</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deserunt officia similique, assumenda dignissimos 
                    molestiae minima? Voluptatibus, inventore consequuntur.<br>
                    Doloribus, quam!.Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Quibusdam, ad?<br>
                    Laboriosam dolores natus voluptatibus dolore 
                    praesentium, quod ullam incidunt id impedit 
                    officiis deserunt inventore temporibus, assumenda 
                    adipisci pariatur reiciendis quaerat.</p>
                <span id="dots"></span>
                <div id="more">
                <span>VISION</span>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Maiores aliquid harum
                    vel? Delectus provident quo rep ellendus
                    nam, ratione, ex cumqueipsa quas earum<br>
                    aperiam tempora odio nobis deleniti sint
                    libero, asperiores voluptatibus eaque aliquid
                    similique facere expedita eos. Nihil ut debitis
                    in eum totam officiis non dolores accusamus illo.<br>
                    Delectus?</p>
                </div>

                       <button on:click={readmore} id="btn" >Read more</button>
            </div>
        </section>

        <section class="container">
            <div class="header">
                <h5>CORE VALUES</h5>
            </div>
            <div class="sub-container">
            <div class="teams">
                <img src="global.png" alt="">
                <div class="name">GREAT COMMISSION PARTNERSHIP</div>
                <div class="par">Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Numquam nobis ut asperiores aspernatur.
                      Neque minima iure dolor, magnam fugiat quas?</div>
    
                <div class="social-links">
                    <a href="#"><i class="fa-regular fa-handshake"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-github"></i></a>
                </div>
            </div>
    
            <div class="teams">
                <img src="education.png" alt="">
                <div class="name">EXCELLENCE IN EDUCATION</div>
                <div class="par">Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Numquam nobis ut asperiores aspernatur.
                      Neque minima iure dolor, magnam fugiat quas?</div>
    
                <div class="social-links">
                    <a href="#"><i class="fa-regular fa-handshake"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-github"></i></a>
                </div>
            </div>
        
            <div class="teams">
                <img src="com.jpg" alt="">
                <div class="name">MULTICULTURAL COMMUNITY</div>
                <div class="par">Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Numquam nobis ut asperiores aspernatur.
                      Neque minima iure dolor, magnam fugiat quas?</div>
    
                <div class="social-links">
                    <a href="#"><i class="fa-regular fa-handshake"></i></a>
                    <a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-github"></i></a>
                </div>
            </section>
        </div>
    </body>
</div>



<script>
// @ts-nocheck

    function readmore(){
        var dots = document.getElementById("dots");
        var moretext = document.getElementById("more")
        var btn = document.getElementById("btn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btn.innerHTML = "Read more";
            moretext.style.display = "none";
        }else {
            dots.style.display = "none";
            btn.innerHTML ="Read less";
            moretext.style.display = 'inline';

        }

    }

</script>



<style>
    .view {
        text-align: center;
        position: block;
        background-image: url('skyblue.jpg');
        background-repeat: no-repeat;
        width: 100%;
        height: 300px;
        opacity: 95%;
        background-size: cover;
    }
    .page .view p{
        font-size: 15px;
        color: #ddd;
        margin-bottom: 100px;
        display: block;
        text-shadow: #173459 1px 0 10px;
        padding: 50px;

    }
    .iconic{
        color: #1454bb;
        justify-content: center;
        display: flex;
        position: relative;
        padding-bottom: 10px;

        
    }
    .iconic a{
        margin: 10px;
       
    }
    body {
        width: 100%;
    }
    .parag {
        margin: 50px;
        box-shadow: 30px 30px 20px rgb(0, 0, 0,0.3);

    }
    .text {
        background-color: #1c59bb;
        border-radius: 20px;
        margin-left: 200px;
        margin-right: 200px;
        box-shadow: 30px 30px 20px rgb(0, 0, 0,0.3);
        background-size: 500vh;
    }
    .header h5 {
        font-size: larger;
        font-weight: bold;
        background-color: #1454bb;
        border-radius: 10px;
        box-shadow: 30px 30px 20px rgb(0, 0, 0,0.3);
        width: auto;
        color: #ddd;
        padding: 10px;
        
    }
    .page {
        justify-content: flex-start;

    }
    .page p{
        color: #210303;
    }
    .serve {
        margin-left: 120px;
    }

    .parag {
        text-align: center;
    }
    .about body{
        font-size: 20px;
        text-align: center;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        padding-top: 5px;  
    }
    .top {
        width: 50px;
        height: 50px;
        position: absolute;
        margin: 10px;
    }
    .page h1 {
        font-size: 30px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        text-align: center;
        color: #ffff;
        padding: 5px;
        background-image:linear-gradient(to left,black,blue,rgb(87, 182, 219));
        font-weight: bold;
        text-shadow: #173459 1px 0 10px;

    }
    .page p {
        font-size: 15px;
    }
    .pic {
        background-image: linear-gradient(#1454bb,rgb(56, 134, 165));

        display: flex;
        align-items: center;
        width: auto;
        margin: auto;
        padding:20px;
    }
    .pic p{
        color: beige;
        padding: 10px;
        font-size: small;
        display: flex;
    }
    .pic img{
        border-image: none;
        flex: 0 50%;
        max-width: 300px;
        height: 300px;
        border-radius: 100%;
        border: 3px solid whitesmoke;
        padding: 10px;
    }
    P {
        font-size: 15px;
        padding: 50px;
    }
    .serve button{
        display: flex;
        border: 2px solid #ffff;
        display: inline-block;
        outline: none;
        padding: 5px 10px;
        border-radius: 10px;
        font-size: 15px;

        color: #ffff;
        height: 40px;
        cursor: pointer;
    }
    .serve button:hover {
        color: skyblue;
        transition: .4s;
    }
    .serve h2 {
        color: white;
        font-size: 30px;
        outline: 1px white;
    }

    #more {
        display: none;

    }
    .serve p {
        color: beige;
        padding: 10px;
        font-size: small;
        display: flex;
    }
    .page span{
        color: rgb(107, 194, 237);
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 12px;
        
    }
    .serve span{
        font-size: 30px;
        font-style: oblique;
        color: #ffff;
    }
    .container {
        text-align: center;
        color: #f0e7e7;
        font-size: 15px;
        margin-left: 120px;
        line-height: 20px;
        align-items: center;
    }
    .header {
        padding-top: 60px;
        color: #444;
        font-size: 20px;
        margin:auto;
        line-height: 50px;
    }
    .sub-container {
        max-width: 1200px;
        margin:auto;
        padding: 48px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    
    }
    .teams {
        margin: 10px;
        padding: 22px;
        max-width: 30%;
        transition: 0.4s;
        box-sizing: border-box;
        background-image: -webkit-linear-gradient(skyblue,#1454bb,black);
        border-radius: 10px;
        box-shadow: 30px 30px 20px rgb(0, 0, 0,0.3);
    }
    .teams img {
        width: 200px;
        height: 200px;
        border-radius: 100%;
        border: 5px solid #ddd;
        margin: auto;

    }

    .name {
        padding: 12px;
        font-weight: bold;
        font-size: 16px;
        text-transform: uppercase;
    }
    .social-links{
        margin: 10px;
        display: flex;
        justify-content: center;
    }
    .social-links a{
        display: inline-block;
        height: 30px;
        width: 30px;
    }
   
    .social-links a i{
        color: #f8f0f0;
    }
   
</style>