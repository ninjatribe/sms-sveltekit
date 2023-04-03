<script>
    import { onMount } from "svelte/internal";

    import faith_logo from '$lib/images/faith_academy_letter_logo.svg'
    import faith_logo_white from '$lib/images/faith_academy_letter_logo_white.svg'
    import arrow_right from '$lib/images/arrow_right.svg'
    import main_home from '$lib/images/main_home_img.jpeg'
    import group_photo from '$lib/images/group_photo.jpeg'
    import elementary from '$lib/images/elementary.jpg'
    import middle_school from '$lib/images/middle_school.jpg'
    import high_school from '$lib/images/high_school.jpg'
    
    import Footer from '$lib/components/Footer.svelte'
	import Hamburger from '$lib/components/reusable/Hamburger.svelte';

    //Socials
    import facebook_logo from '$lib/images/facebook_logo.svg'
    import instagram_logo from '$lib/images/instagram_logo.svg'
    import vimeo_logo from '$lib/images/vimeo_logo.svg'
    import youtube_logo from '$lib/images/youtube_logo.svg'

    // Hamburger/sidebar
    export let open = false;

    // Adjust embedded vimeo width/height
    /**
	 * @type {HTMLIFrameElement}
	 */
    let embeddedVideo;
    const adjustSize = async() => {
        if(screen.width >= 580){
            embeddedVideo.width = '426'
            embeddedVideo.height = '240'
        }
    }

    // Intersect animation
    const intersectAnimation = async() => {
        // Paste this on class
        // intersectClass opacity-0 transform translate-x-20

        const animated = document.querySelectorAll('.animated')
        const animateStyles = ["transform", "opacity-1", "duration-1000", "opacity-1", "ease-out"]
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    if(entry.target.classList.contains('first')){
                        entry.target.classList.remove("opacity-0", "translate-y-72")
                        entry.target.classList.add(...animateStyles)
                    }
                    else if(entry.target.classList.contains('second')){
                        entry.target.classList.remove("opacity-0", "translate-x-20")
                        entry.target.classList.add(...animateStyles)
                    }
                    else if(entry.target.classList.contains('third')){
                        entry.target.classList.remove("opacity-0", "-translate-x-20")
                        entry.target.classList.add(...animateStyles)
                    }
                    else if(entry.target.classList.contains('fourth')){
                        entry.target.classList.remove("opacity-0", "-translate-y-20")
                        entry.target.classList.add(...animateStyles)
                    }
                    else if(entry.target.classList.contains('fifth')){
                        entry.target.classList.remove("opacity-0", "-translate-y-20")
                        entry.target.classList.add(...animateStyles)
                    }
                }
            })

        },{
            // Sets the threshold of visibility of when to execute
            // 1 = 100%, 0 = 1pixel.
            threshold: .5,
        })
        animated.forEach(animate => {
            observer.observe(animate)
        })
    }

    onMount(async () =>{
        intersectAnimation()
        adjustSize()
    })

</script>

<div class="main-wrapper">
    <!-- Blank space -->
    <div class="h-10 bg-blue-900">
    
    </div>
    <!-- Custom navbar wrapper -->
    <div class="flex items-centers justify-center p-2 w-full">
        <a href="/" class="w-full flex justify-start lg:justify-center">
            <img src={faith_logo} alt="faith_logo" class="h-20">
        </a>
        <!-- Buttons -->
        <div class="hidden lg:flex justify-center items-center gap-8 font-bold text-blue-900 uppercase w-full">
            <a href="/about" class="hover:text-slate-400 transition-all duration-200 ease-in">About</a>
            <a href="/admissions" class="hover:text-slate-400 transition-all duration-200 ease-in">Admissions</a>
            <a href="/serve" class="hover:text-slate-400 transition-all duration-200 ease-in">Serve</a>
            <a href="/school_life" class="hover:text-slate-400 transition-all duration-200 ease-in">School Life</a>
        </div>
        <div class="flex lg:hidden justify-center items-center w-1/4">
            <Hamburger bind:open/>
        </div>
    </div>

    <!-- 1st image -->
    <div class="mt-2 w-full h-full bg-center bg-cover bg-fixed" style="background-image: url({main_home})" >
        <!-- <img src={main_home} alt="" class="contrast-20"> -->
        <div class="animated first flex justify-center opacity-0 translate-y-72 py-60 cursor-default">
            <div class="flex flex-col justify-center uppercase text-2xl lg:text-3xl p-2 font-bold text-white ">
                <p class="bg-blue-300 w-min h-full font-quicksand pl-2 pr-10">Transformative,</p>
                <div class="flex flex-col lg:flex-row flex-wrap items-center justify-center bg-blue-300 p-2 lg:gap-2 translate-x-5">
                    <p class="">Christ-centered</p>
                    <p class="font-kaushan text-4xl text-blue-900">education</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Welcome to faith -->
    <div class="flex flex-col lg:flex-row items-center p-5 py-24 gap-10 w-full overflow-clip">
        <div class="flex items-center justify-center lg:justify-end w-full">
            <div class="border-4 border-blue-400">
                <img src={group_photo} alt="group_photo" class="pointer-events-none h-60 sm:h-96 bg-green-500 object-cover translate-x-4 translate-y-4">
            </div>
        </div>
        <div class="animated second flex flex-col items-center lg:items-start w-full translate-x-20 opacity-0 cursor-default">
            <div class="uppercase font-bold text-4xl text-white -translate-x-4 lg:-translate-x-24">
                <p class="bg-blue-900 p-1">Welcome to</p>
                <p class="bg-blue-900 p-2 translate-x-10">faith academy</p>
            </div>
            <p class="w-96 text-blue-900 mt-2">Faith Academy is recognized as an international leader in providing a well-rounded educational experience for third-culture kids, located just outside Manila, Philippines.</p>
            <br>
            <a href="/about">
                <p class= "text-yellow-400">LEARN MORE ABOUT US ></p>
            </a>
        </div>
    </div>

    <!-- Mission -->
    <div class="bg-yellow-300 py-20 cursor-default">
        <div class="animated fourth flex flex-col lg:flex-row items-center justify-center opacity-0 -translate-y-20">
            <p class="font-kaushan text-end p-5 lg:pl-52 text-5xl text-blue-900 font-bold">Mission</p>
            <p class="w-96 font-sans text-lg px-4 lg:p-0 text-slate-800 font-semibold">Forming Christlike, lifelong learners through a dynamic, relevant education, especially for the children of missionaries.</p>
        </div>
    </div>

    <!-- Embedded video -->
    <div class="py-20 flex justify-center flex-col lg:flex-row items-center gap-6 cursor-default">
        <div class="lg:order-2 border-4 border-green-600 grow-0">
            <iframe class="-translate-x-4 translate-y-4" bind:this={embeddedVideo} src="https://player.vimeo.com/video/219770193?h=7fccb28631&color=9fc1e6" width="256" height="144" frameborder="0" allow="fullscreen; picture-in-picture;" allowfullscreen title="Cultivating Hearts and Minds for Christ at Faith Academy"></iframe>
        </div>
        <div class="animated third w-96 lg:order-1 flex flex-col items-end font-quicksand font-semibold text-lg -translate-x-20 opacity-0">
            <p class="text-end text-blue-900">“Faith Academy has been a place that’s pushed me to perform to the best of my abilities while still remaining a community that nurtures and guides me through my walk with God.”</p>
            <br>
            <p class="text-yellow-400">- HIGH SCHOOL STUDENT</p>
        </div>
    </div>

    <!-- School life -->
    <div class="flex flex-col lg:flex-row pb-2 bg-blue-900">
        <div class="relative overflow-hidden group h-80 lg:h-auto">
            <img src={elementary} alt="elementary" class="pointer-events-none h-full w-full object-cover brightness-50 group-hover:brightness-100 saturate-50 group-hover:saturate-100 transition-all duration-500 ease-in-out">
            <div class="absolute top-1/2 w-full h-full flex flex-col justify-between items-center group-hover:-translate-y-3/4 animation duration-700 ease-in-out">
                <p class="text-5xl font-kaushan text-white cursor-default">Elementary</p>
                <a href="/school_life/elementary" class="text-slate-700 text-lg p-5 bg-slate-200 hover:bg-slate-400 transition-all duration-300 cursor-pointer">Learn more</a>
            </div>
        </div>
        <div class="relative overflow-hidden group h-80 lg:h-auto">
            <img src={middle_school} alt="middle_school" class="pointer-events-none h-full w-full object-cover object-top brightness-50 group-hover:brightness-100 saturate-50 group-hover:saturate-100 transition-all duration-500 ease-in-out">
            <div class="absolute top-1/2 w-full h-full flex flex-col justify-between items-center group-hover:-translate-y-3/4 animation duration-700 ease-in-out">
                <p class="text-5xl font-kaushan text-white cursor-default">Middle School</p>
                <a href="/school_life/middle_school" class="text-slate-700 text-lg p-5 bg-slate-200 hover:bg-slate-400 transition-all duration-300 cursor-pointer">Learn more</a>
            </div>
        </div>
        <div class="relative overflow-hidden group h-80 lg:h-auto">
            <img src={high_school} alt="high_school" class="pointer-events-none h-full w-full object-cover object-bottom brightness-50 group-hover:brightness-100 saturate-50 group-hover:saturate-100 transition-all duration-500 ease-in-out">
            <div class="absolute top-1/2 w-full h-full flex flex-col justify-between items-center group-hover:-translate-y-3/4 animation duration-700 ease-in-out">
                <p class="text-5xl font-kaushan text-white cursor-default">High School</p>
                <a href="/school_life/high_school" class="text-slate-700 text-lg p-5 bg-slate-200 hover:bg-slate-400 transition-all duration-300 cursor-pointer">Learn more</a>
            </div>
        </div>
    </div>

    <!-- Learn more -->
    <div class="bg-blue-900 p-2 py-20">
        <div class="animated fifth flex flex-col lg:flex-row justify-center items-center gap-4 text-white opacity-0 -translate-y-20">
            <p class="text-center cursor-default"><b>Learn more</b> about our admission process, <b>register</b> your student, or <b>apply</b> here!</p>
            <a href="/apply" class="py-2 px-6 bg-blue-400 text-xl text-slate-100 hover:bg-yellow-300 hover:text-slate-600 transition-all duration-300 ease-in-out">Register</a>
        </div>
    </div>

    <!-- Instagram/Medias -->
    <div class="">
        <!-- <div class="flex overflow-auto">
            <div>
                <iframe src="https://www.instagram.com/reel/CqCSMuHJLld/embed" width="320" height="400" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
            <div>                
                <iframe src="https://www.instagram.com/p/CpwOMZ3pLAA/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
            <div>                
                <iframe src="https://www.instagram.com/p/CptzAlapIWo/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
            <div>                
                <iframe src="https://www.instagram.com/p/CpofzbVp_ud/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
            <div>                
                <iframe src="https://www.instagram.com/p/Cpl0Incp4r7/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
            <div>                
                <iframe src="https://www.instagram.com/p/CpbTOPHJKJm/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
            <div>                
                <iframe src="https://www.instagram.com/p/CpT_9TOp1af/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
            <div>                
                <iframe src="https://www.instagram.com/p/CpQyUasJ7pB/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
            <div>                
                <iframe src="https://www.instagram.com/reel/CpOyg5pJk3o/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
            <div>                
                <iframe src="https://www.instagram.com/p/CpMppaRLQJ1/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
            <div>                
                <iframe src="https://www.instagram.com/p/CpCJaqwJV5b/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
        </div> -->
    </div>

</div>

<Footer></Footer>

<!-- Hidden Sidebar -->
<!-- Can be componetized depends if needed -->
<div class="aside absolute lg:hidden top-0 w-full h-full bg-blue-900" class:open>
    <div class="flex flex-col my-28">
        <img src={faith_logo_white} alt="faith_logo" class="h-28">
        <div class="flex flex-col px-20 py-10 w-full text-white text-xl gap-5">
            <a href="/about">About</a>
            <a href="/admissions">Admissions</a>
            <a href="/serve">Serve</a>
            <a href="/school_life" class="border-b-2 pb-8">School Life</a>
        </div>
        <div class="flex justify-center gap-2 mt-2 p-2">
            <a href="https://www.facebook.com/faithacademymanila/" target="_blank" rel="noreferrer" class="w-10"><img src={facebook_logo} alt="facebook" class="transition duration-300 ease-in-out hover:rotate-12"></a>
            <a href="https://www.instagram.com/faithacademymanila/" target="_blank" rel="noreferrer" class="w-10"><img src={instagram_logo} alt="instagram" class="transition duration-300 ease-in-out hover:rotate-12"></a>
            <a href="https://vimeo.com/faithacademymanila" target="_blank" rel="noreferrer" class="w-10"><img src={vimeo_logo} alt="vimeo" class="transition duration-300 ease-in-out hover:rotate-12"></a>
            <a href="https://www.youtube.com/c/FaithAcademyManilaOfficial" target="_blank" rel="noreferrer" class="w-10"><img src={youtube_logo} alt="youtube" class="transition duration-300 ease-in-out hover:rotate-12"></a>
        </div>
    </div>
</div>

<!-- Small aside animation -->
<style>
    .aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
	}
</style>