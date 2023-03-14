<script>
    import headerImg from "$lib/images/header.jpg"
    import Navbar from "$lib/components/forms/Navbar.svelte";
    import arrowRight from "$lib/images/arrow_right.svg";
    import mailImg from "$lib/images/mail.svg";
	import { onMount } from "svelte/internal";

    // This gives the opacity sliding animation
    const intersectAnimation = async() => {
        // Paste this on class
        // intersectClass opacity-0 transform translate-x-20

        const cards = document.querySelectorAll('.intersectClass')
        const animateStyles = ["transform", "opacity-1", "duration-500", "opacity-1"]
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    // Right to left
                    if(entry.target.classList.contains('translate-x-20')){
                        entry.target.classList.remove("opacity-0", "translate-x-20")
                        entry.target.classList.add(...animateStyles, "sm:-translate-x-20")
                    }
                    // Left to right
                    else if(entry.target.classList.contains('-translate-x-20')){
                        entry.target.classList.remove("opacity-0", "-translate-x-20")
                        entry.target.classList.add(...animateStyles, "sm:translate-x-3")
                    }
                    //Unobserve immediately to prevent re-animation
                    observer.unobserve(entry.target)
                }
            })
        },{
            // Sets the threshold of visibility of when to execute
            // 1 = 100%, 0 = 1pixel.
            threshold: .7,
        })

        cards.forEach(card => {
            observer.observe(card)
        })
    }

    onMount(async () =>{
        intersectAnimation()
    })

    //Tailwind animations
    const hoverWhite = 'hover:text-white transition duration-300 ease-in-out'
    const hoverBase = 'transition duration-300 ease-in-out'
    
</script>

<Navbar/>

<!-- Component wrapper so I can column -->
<div class="flex flex-col justify-center items-center">
    
    <!-- Header image -->
    <div class="border-1 border-black pointer-events-none">
        <img src={headerImg} alt="" class="">
    </div>

    <!-- Application instruction component -->
    <!-- Source: https://tailwindcomponents.com/component/responsive-vertical-timeline-1 -->
    <!-- Heavily edited -->
    <div class="container p-5 py-6 flex flex-col justify-center sm:py-12">

        <p class="self-center text-3xl sm:text-5xl sm:mb-20 font-kaushan">Application Process</p>
        <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

            <div class="relative text-gray-700 antialiased text-sm font-semibold">
                <!-- Vertical bar running through middle. Left and translate to center it absolutely -->
                <!-- The vertical "progress back can be implemented if need be. just need to transparent this guy" -->
                <div class="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
        
                <!-- Left section, set by justify-start and sm:pr-8 -->
                <div class="mt-6 sm:mt-0 sm:mb-12">
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex justify-start w-full mx-auto items-center intersectClass opacity-0 transform translate-x-20">
                            <div class="w-full sm:w-1/2 sm:pr-8">
                                <!-- This is the actual box -->
                                <div class="p-4 bg-yellow-300 rounded shadow-3xl sm:w-80">
                                    <p class="text-2xl sm:text-4xl">Visit</p>
                                    <br>
                                    <p>Check out our campus and programs by <a href="#top" class="text-blue-500 font-bold {hoverWhite}">scheduling a tour</a> or viewing our <a href="#top" class="text-blue-500 font-bold {hoverWhite}">virtual open house</a>. You can also contact us by submitting a <a href="#top" class="text-blue-500 font-bold {hoverWhite}">new student inquiry</a> for answers to more specific questions about enrolling your student at Faith Academy.</p>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg> -->
                            <p class="text-white">1</p>
                        </div>
                    </div>
                </div>
        
                <!-- Right section, set by justify-end and sm:pl-8 -->
                <div class="mt-6 sm:mt-0 sm:mb-12">
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex justify-end w-full mx-auto items-center intersectClass opacity-0 transform -translate-x-20">
                            <div class="w-full sm:w-1/2 sm:pl-8">
                                <div class="p-4 bg-orange-300 rounded shadow-3xl sm:w-80">
                                    <p class="text-2xl sm:text-4xl">Prepare</p>
                                    <br>
                                    <p>During the application and enrollment process you’re going to need <a href="#top" class="text-blue-500 font-bold {hoverWhite}">this checklist</a> of things. It’s a good idea to gather them before you begin!</p>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg> -->
                            <p class="text-white">2</p>
                        </div>
                    </div>
                </div>
        
                <!-- Left section, set by justify-start and sm:pr-8 -->
                <div class="mt-6 sm:mt-0 sm:mb-12">
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex justify-start w-full mx-auto items-center intersectClass opacity-0 transform translate-x-20">
                            <div class="w-full sm:w-1/2 sm:pr-8">
                                <div class="p-4 bg-blue-300 rounded shadow-3xl sm:w-80">
                                    <p class="text-2xl sm:text-4xl">Apply</p>
                                    <br>
                                    <p>To apply for enrollment at Faith Academy <a href="#top" class="text-blue-500 font-bold {hoverWhite}">start here</a> with the new student inquiry. To avoid delays, be sure your <a href="#top" class="text-blue-500 font-bold {hoverWhite}">application fees</a> are <a href="#top" class="text-blue-500 font-bold {hoverWhite}">paid</a> the same day your application is submitted. Once your student’s academic application has been accepted you may also apply for the boarding program.</p>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> -->
                            <p class="text-white">3</p>
                        </div>
                    </div>
                </div>
        
                <!-- Right section, set by justify-end and sm:pl-8 -->
                <div class="mt-6 sm:mt-0">
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex justify-end w-full mx-auto items-center intersectClass opacity-0 transform -translate-x-20">
                            <div class="w-full sm:w-1/2 sm:pl-8">
                                <div class="p-4 bg-green-300 rounded shadow-3xl sm:w-80">
                                    <p class="text-2xl sm:text-4xl">Enroll</p>
                                    <br>
                                    <p>After your application has been accepted, return again to the <a href="#top" class="text-blue-500 font-bold {hoverWhite}">registration portal</a> to finish the enrollment process. At this time you may also apply for boarding.</p>
                                    <br>
                                    <p>New students will reserve their space by paying the <a href="#top" class="text-blue-500 font-bold {hoverWhite}">seat deposit</a> the first year only. Every year you will submit updated health information, review child safety information, and a few other things. Once these things are complete your student will be ready to attend classes!</p>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg> -->
                            <p class="text-white">4</p>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
        <!-- New student, email and re-enrollment -->
        <div class="self-center w-full mt-20 flex flex-col justify-center items-center">
            <div class="flex justify-between items-center w-60 bg-blue-900 hover:bg-blue-500 cursor-pointer {hoverBase} text-white shadow-2xl rounded-md bold px-4 p-2">
                <a href="apply/new_student_inquiry" class="text-white">New Student Inquiry</a>
                <img src={arrowRight} alt="" class="w-10 h-10 invert">
            </div>
            <div class="mt-4 flex flex-col items-center justify-center text-lg text-black font-bold bg-yellow-300 hover:bg-yellow-500 {hoverBase} cursor-pointer p-2 rounded-lg">
                <p>Questions? Email us here!</p>
                <a class="flex justify-center items-center underline" href="mailto:registrar@faith.edu.ph">
                    <img src={mailImg} alt="" class="w-10 h-10">
                    <p> REGISTRAR@FAITH.EDU.PH</p>
                </a>
            </div>
            <p class="font-bold mt-4">Already started an application or looking for re-enrollment? <a href="#top" class="text-blue-300 hover:text-blue-500 font-bold {hoverBase}">Login here.</a></p>
        </div>
    </div>

</div>