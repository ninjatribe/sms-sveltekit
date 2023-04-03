<script>
    // @ts-nocheck 
    import acsi from '$lib/images/acsi_accredited.png'
    import best from '$lib/images/christian_workplace.png'
    import faith_logo from '$lib/images/faith_academy_logo_white.png'
    import wasc from '$lib/images/wasc_accredited.png'
    
    //Socials
    import facebook_logo from '$lib/images/facebook_logo.svg'
    import instagram_logo from '$lib/images/instagram_logo.svg'
    import vimeo_logo from '$lib/images/vimeo_logo.svg'
    import youtube_logo from '$lib/images/youtube_logo.svg'
</script>
<div class="bg-blue-900 flex flex-col lg:flex-row items-center justify-center py-5 px-8 lg:px-20">
    <div class="flex flex-col items-center w-full lg:w-1/2 p-2 ">
        <div class="flex items-center justify-start gap-3 p-1">
            <img src={faith_logo} alt="" class="w-28 lg:w-40">
            <p class="w-60 font-bold text-yellow-300">Forming christlike, lifelong learners through a dynamic, relevant education, especially for the children of missionaries.</p>
        </div>
        <br>
        <div class="flex flex-col justify-center items-center border-black border-t-2 p-2 text-white">
            <p>Penny Lane Street, Valley Golf Subdivision</p>
            <p>San Juan, Cainta, Rizal 1900 Philippines</p>
            <p>+63 2-8651-7100 | vanguard@faith.edu.ph</p>
            <div class="flex justify-center gap-2 w-1/2 mt-2 p-2 border-black border-t-2 overflow-hidden">
                <a href="https://www.facebook.com/faithacademymanila/" target="_blank" rel="noreferrer" class="w-20"><img src={facebook_logo} alt="" class="transition duration-300 ease-in-out hover:rotate-12"></a>
                <a href="https://www.instagram.com/faithacademymanila/" target="_blank" rel="noreferrer" class="w-20"><img src={instagram_logo} alt="" class="transition duration-300 ease-in-out hover:rotate-12"></a>
                <a href="https://vimeo.com/faithacademymanila" target="_blank" rel="noreferrer" class="w-20"><img src={vimeo_logo} alt="" class="transition duration-300 ease-in-out hover:rotate-12"></a>
                <a href="https://www.youtube.com/c/FaithAcademyManilaOfficial" target="_blank" rel="noreferrer" class="w-20"><img src={youtube_logo} alt="" class="transition duration-300 ease-in-out hover:rotate-12"></a>
            </div>
        </div>
    </div>
    <div class="lg:w-1/2 p-2 flex flex-col items-center font-bold text-white">
        <div class="flex flex-col items-center justify-center gap-2 p-4 mb-2 shadow-xl">
            <!-- <img src={acsi} alt="" class="h-20 lg:h-24"> -->
            <a href="https://www.acsi.org/" target="_blank" rel="noreferrer"><img src={acsi} alt="" class="h-20 lg:h-24"></a>
            <div class="flex gap-2">
                <a href="https://workplaces.org/"><img src={best} alt="bruh" class="h-20 lg:h-24"></a>
                <a href="https://www.acswasc.org/"><img src={wasc} alt="" class="h-20 lg:h-24"></a>
            </div>
        </div>
        <p>School Hours: Mon-Fri 7:10AM - 2:30PM</p>
        <p>Copyright © 2023 Faith Academy</p>
        <p>Sample footer by yap(iaiaian1)</p>
    </div>
</div>