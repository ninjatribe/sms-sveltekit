<div class="icon">
    <img class="images" src="images.png" width="70px" height="70px">
        </div>
    <body>
    <dev class="heading">
        <h1>ADMISSIONS</h1>
        <p>CHOOSING A Christian education</p>
        
    </dev>
    <section class="o">
        <img src="nash.com.webp" height="500px" width="500px">
        <div class="text">
           <h4>ETERNAL INVESTMENT</h4> 
           <p><br>Few decisions have the lasting impact on your child as that of school choice. Throughout their schooling, lifelong friendships will be made, worldviews will be formed and values will be instilled, spiritual formation will take place.
            Faith Academy is dedicated to providing those opportunities while seeking to make the educational experience the best it can be for all students. We believe in the importance of creating a safe environment to educate with excellence, encourage character development, and prepare students to enter the world after graduation.
            Families at Faith have chosen to make an eternal investment in their children, and we honor that by investing in them.</p>
        </div>
    </section>  

    <div class="container">
            <div class="container1">
                <div class="front">
                    <img src="kuray.jpg" height="500px" width="400px">
                        <h2>START</h2>
                </div>
                <div class="back">
                    <h2>START</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nisi.</p>
                </div>
            </div>
            <div class="container1">
                <div class="front">
                    <img  src="jonas.jpg" height="400px" width="400px" alt="none">
                    <h2>START</h2>
                </div>
                <div class="back">
                    <h2>START</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nisi.</p>
                </div>
            </div>
            <div class="container1">
                <div class="front">
                    <img  src="eddie.jpg" height="400px" width="400px" alt="none">
                    <h2>START</h2>
                </div>
                <div class="back">
                    <h2>START</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nisi.</p>
                </div>
            </div>
            <div class="container1">
                <div class="front">
                    <img src="jomel.jpg" height="400px" width="400px" alt="none">
                    <h2>START</h2>
                </div>
                <div class="back">
                    <h2>START</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nisi.</p>
                </div>
            </div> 
        </div>
        <div class="nash">
         <p><br>We are an international school and celebrate our multicultural community! Because our instruction &amp; curriculum is in <br> English – English speaking, reading and writing proficiency is required for admission.</p>
         </div>
         <section class="d">
             <img src="Faith_init.jpg" width="500px" height="500px" alt="none">
              <div class="dash">
                 <p><br>“We chose Faith Academy because of the combination of progressive and traditional ways of teaching.<br> Students become independent, both academically and spiritually, <br>and their worldview is expanded. The campus facilities are complete, so talents can be enhanced.”</p>
              <h1>- FA PARENT</h1>
              </section>
             
    <div class="icons">
        <p>Are you ready to start the process? Click here to begin!</p>
        <div class="button">
            <a href="https://www.facebook.com/">
        <button id="button">START HERE</button></a>
        </div>
     </div>


    </body>


    <style>
        .heading h1{
            text-align: center;
            font-size: xx-large;
            color: #FFF;
            padding-bottom: 40px;
            background-image:linear-gradient(blue,skyblue)
            
        }
        .heading p{
            text-align: center;
            color: blue;
        }
       
        .o {
            display: flex;
            text-align: center;
            font-size: medium;
            color: blue;
        }
        .o {
            display: flex;
            font-size: x-large;
            background-image:linear-gradient(blue,skyblue)
        }
        .o h4{
            text-align: center;
            color: rgb(255, 255, 255);
        }
        .text{
            text-align: center;
        }
        .text p{
            background-color: #FFF;
            color: black;
            font-family: 'Times New Roman', Times, serif;
        }
        .container {
        display: grid;
        width: 90%;
        margin: 40px auto;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
    }
    
    .front img {
        border-radius: 10px;
        margin-left: 40px;
        width: 300px;
        height: 300px;
    }
    
    .container1 {
        position: relative;
    }
    
    .front h2 {
        position: absolute;
        top: 50%;
        left: 30%;
        background-color: #000;
    }
    
    .back {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: black;
        color: white;
        padding: 15px;
        transform: perspective(600px) rotateY(180deg);
        transition: transform .5s linear 0s;
        backface-visibility: hidden;
        border-radius:20px
        
    }
    
    .front {
        color: white;
        image-resolution: 40px;
        transform: perspective(600px) rotateY(0deg);
        transition: transform .5s linear 0s;
    
    
    }
    
    .container1:hover>.front {
        transform: perspective(600px) rotateY(-180deg);
        cursor: pointer;
    }
    
    .container1:hover>.back {
        transform: perspective(600px) rotateY(0deg);
        cursor: pointer;
    
    
    }
    .front {
        width: 400px;
        height: 300px;
        display: flex;
        background-image:linear-gradient(blue,skyblue)
        
    }
    .nash p{
        text-align: center;
        color:#FFF;
        font-size:x-large;
        width: 100%;
        height:100%;
        background-color: blue;
        margin: 30px;
    }
    .d{
        display: flex;
        text-align: center;
        padding-top: 20px;   
        color:white;
        width: 200%;
        height: 100%;
        background-image:linear-gradient(blue,skyblue);
    }
    .d p{
        display: flex;
        text-align: center;
        padding-top: 50px;
        font-size: large;
        margin: 30px ;
    }
    .d h1{
        text-align: center;
        font-size: large;
        color:black;
        padding-top: 30px;
    }
    .icons{
        padding-left: 700px;
        display: flex;
        color: #FFF;
        background-color: blue;
    }
    .button{
        padding-left: 20px;
        color: pink;
        background-color: black;

    }


    </style>
    