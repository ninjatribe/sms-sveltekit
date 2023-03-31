<script>
    // @ts-nocheck  
    import BottomNav from "$lib/components/reusable/NavList.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="w-screen h-screen grid grid-cols-1 flex-wrap justify-center static text-black">
    <div class="bg-slate-200 w-screen h-fit grid grid-cols-2 gap-12 bg-no-repeat bg-cover p-5 pb-12 mb-8" 
        id="schoolLife"
        >
        <h1 class="h-full grid grid-cols-1 col-span-2 text-center content-center text-9xl font-bold font-bebas bg-sky-800 text-white rounded-t-2xl hover:bg-white hover:outline-sky-800 outline hover:text-sky-800">SCHOOL LIFE</h1>
        <div class=" h-auto grid grid-cols-1 col-span-2 text-center content-center">
            <div class="grid grid-flow-col place-content-center">
                <h1 class="m-9 text-5xl font-racing">HIGH <span class="font-bold font-mono bg-black text-white underline text-2xl ml-3 h-fit">Academic Standards</span></h1>
            </div>
            <p class="m-5 font-serif text-lg px-10">Faith Academy is officially recognized by the Department of Education in the Philippines as a private international school. This allows us to accept students who meet our requirements, regardless of nationality or passport, and a Faith Academy diploma is recognized for application to Filipino and international universities and colleges.

            Faith Academy is accredited through the Western Association of Schools and Colleges (WASC) and the Association of Christian Schools International (ACSI). The school is evaluated by these bodies every six years.</p>
        </div>
        <div class=" bg-black bg-opacity-10 overflow-hidden text-white h-auto col-span-2 rounded-3xl">
            <div class="h-32 bg-sky-800 grid grid-cols-1 text-center p-5 content-center justify-items-center">
                <h3 class="m-3 text-2xl font-bebas">READ OUR SCHOOLWIDE LEARNING RESULTS & PHILOSOPHY OF EDUCATION</h3>
            </div>
            <div class="h-fit grid grid-cols-5 gap-5">
                <div class="bg-slate-500 grid col-span-1 m-5 h-40">CONTENTS</div>
                <div class="bg-slate-500 grid col-span-1 m-5">CONTENTS</div>
                <div class="bg-slate-500 grid col-span-1 m-5">CONTENTS</div>
                <div class="bg-slate-500 grid col-span-1 m-5">CONTENTS</div>
                <div class="bg-slate-500 grid col-span-1 m-5">CONTENTS</div>
            </div>
        </div>
        <div class=" bg-black bg-opacity-10 overflow-hidden text-white h-fit col-span-1 rounded-3xl">
            <div class="min-h-fit bg-sky-800 grid grid-cols-1 text-center p-5 content-center justify-items-center rounded-t-3xl">
                <h3 class="m-3 text-2xl font-bebas">Learn more about our admissions process, register your student, or apply here!
                </h3>
                <button class="bg-white text-sky-800 w-28 h-16 hover:bg-cyan-600 hover:text-white font-bebas">Start Here</button>
            </div>
            <div class="flex items-center py-4">
                <p class="m-6 text-center text-black text-lg">
                    Our goal for each student walking across the graduation stage is that Faith Academy prepared them well for their next step, that they have been inspired to choose and remain dedicated to their faith, and that they will trust God to put all of the pieces of their life together.
                </p> 
            </div>
        </div>
        <div class="text-black h-auto col-span-1 grid grid-cols-1 place-content-center pl-5">
            <div class="flex flex-col">
                <p class="mb-6 font-bold font-serif">
                    “Faith is more than a school to me. It’s a safe place to express my faith.
    
                    It’s a community that is not just concerned for my academic wellbeing, but my spiritual health as well.”
                </p>               
                <h1 class="bg-sky-800 w-fit px-5 font-bebas text-2xl text-white">- HIGH SCHOOL STUDENT</h1>
            </div>
        </div>
    </div>
    <div class="h-fit bg-white w-screen grid grid-cols-4 gap-4 bg-no-repeat bg-cover p-5 pb-12 mb-8"
    id="elementary"    
    >
    <h1 class="h-full grid grid-cols-1 col-span-4 text-center content-center text-9xl font-bold font-bebas bg-sky-800 text-white rounded-t-2xl hover:bg-white hover:outline-sky-800 outline hover:text-sky-800">ELEMENTARY</h1>
    <div class=" h-fit grid grid-cols-1 col-span-4 text-center content-center rounded-3xl">
        <div class="grid grid-flow-col place-content-center">
            <h1 class="m-9 text-5xl font-racing h-fit bg-black text-white px-2">Elementary School</h1>
            <h1 class="font-bold font-mono text-black underline text-4xl ml-1 h-fit m-auto">Learning in Progress</h1>
        </div>
    </div>
    <div class="grid grid-cols-2 col-span-3 content-center align-middle ml-40">
        <img 
            src="https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" 
            alt=""
            class="h-full rounded-lg mx-auto col-span-1">
        <p class="m-5 font-serif text-2xl text-left col-span-1">Our ultimate hope is that each and every Elementary student gains a sense of who they are, believes that they have been created in God’s image, and that He made them to be learners - which means they can succeed in any area they choose.</p>
    </div>
    <div class=" h-fit grid col-span-4 text-center content-center my-10 bg-sky-800 bg-opacity-40 rounded-xl">
        <p class="m-5 font-serif text-lg px-10 whitespace-pre-line text-justify text-white">If you were to visit and walk through our Elementary School wing, you would see curious young learners in classrooms – little fingers learning to cut paper, faces with brows furrowed in concentration as they form shapes that become words, and celebratory smiles when they find the sum to a new math problem. You would also see teachers working alongside students as they reach these daily accomplishments, hardworking and committed teachers who are thoughtful, and aware of individual student needs.

        Our desire for elementary students is not simply for students to complete assignments and engage in activities, but to see themselves as artists, thinkers, writers, and mathematicians. We encourage students to begin to know themselves and to become interested and invested in their own learning by teaching them the skills needed to be lifelong learners.</p>
    </div>
    <div class=" bg-black bg-opacity-10 overflow-hidden text-white h-fit w-fit col-span-3 rounded-3xl mr-40">
        <div class="flex flex-row items-center p-5 h-fit">
            <p class="m-5 font-serif text-2xl text-left basis-3/4 text-sky-800 whitespace-pre-line ">“When students know what comes easily to them and what might require more work, they can become successful, lifelong learners from the earliest stages of their lives.”
                
             - MRS. MENDOZA, ELEMENTARY PRINCIPAL</p>
            <img class="h-96 w-max" src="https://images.unsplash.com/photo-1581726690015-c9861fa5057f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" alt="">
        </div>
    </div>
    <div class="h-fit grid grid-cols-5 gap-5 col-span-4 text-center my-10">
        <div class="bg-slate-500 grid col-span-1 h-40">CONTENTS</div>
        <div class="bg-slate-500 grid col-span-1">CONTENTS</div>
        <div class="bg-slate-500 grid col-span-1">CONTENTS</div>
        <div class="bg-slate-500 grid col-span-1">CONTENTS</div>
        <div class="bg-slate-500 grid col-span-1">CONTENTS</div>
    </div>
    </div>
    <div
    class="bg-slate-200 w-screen h-fit grid grid-cols-4 gap-4 bg-no-repeat bg-cover p-5 pb-12 mb-8"
    id="middleSchool"    
    >
    <h1 class="h-fit grid grid-cols-1 col-span-4 text-center content-center text-9xl font-bold font-bebas bg-sky-800 text-white rounded-t-2xl hover:bg-white hover:outline-sky-800 outline hover:text-sky-800">MIDDLE SCHOOL</h1>
    <div class=" h-fit grid grid-cols-1 col-span-4 text-center content-center rounded-3xl">
        <div class="grid grid-flow-col place-content-center">
            <h1 class="m-9 text-7xl font-kaushan h-fit text-black bg-white font-extrabold px-2 hover:text-white hover:bg-black">Middle School</h1>
            <h1 class="font-bold font-mono text-black underline text-4xl ml-1 h-fit m-auto hover:text-sky-800">A GOOD KIND OF CRAZY</h1>
        </div>
    </div>
    <div class="grid grid-cols-2 col-start-1 col-span-3 content-center align-middle">
        <img 
            src="https://faith.edu.ph/wp-content/uploads/2020/12/IMG_9906-19-161-e1606791894964.jpg" 
            alt=""
            class="h-full rounded-lg mx-auto col-span-1">
        <p class="m-5 font-serif text-2xl text-left col-span-1">Middle School students at Faith Academy are exposed to active, purposeful engagement in the classroom, elective courses, extracurricular activities, and clubs. Our desire is for each student to experience deep academic, spiritual, and social development during their middle years with us.</p>
    </div>
    <div class=" h-fit grid col-span-4 text-center content-center my-10 bg-sky-800 bg-opacity-40 rounded-xl">
        <p class="m-5 font-serif text-lg px-10 whitespace-pre-line text-justify text-white">The first thing that people tend to think about this age level is “crazy”. It might be the high level of energy these students hold, the physical and mental development that the students experience during these years or simply the global reputation of Middle Schoolers. However, it is our view that Middle School is a formative time, overflowing with energy and possibilities.

        The unique needs of students at this level are met with a passion for helping them understand more of who they are and how special they are to God – beginning to plant seeds for the coming high school years and into adulthood. Our staff value an active and purposeful relationship in and out of the classroom, and are excited about helping each student learn to know themselves, what they are interested in, and who God wants them to become!</p>
    </div>
    <div class=" bg-white overflow-hidden text-white h-fit col-span-4 grid grid-cols-2 grid-rows-2 gap-4 rounded-3xl p-10">
            <div class="grid col-span-1 pl-20">
                <img class="h-64 w-max" src="https://faith.edu.ph/wp-content/uploads/2020/12/20140815_010430-1152x1536.jpg" alt="">
            </div>
            <div class="grid col-span-1 row-span-2 content-center">
                <p class="m-5 font-serif text-2xl text-left grid text-black whitespace-pre-line">
                    <span class="text-sky-800"> AN EXPERIENCE OF A LIFETIME</span>
                    Outdoor Education is often quoted by graduating seniors as a top highlight from their time at Faith Academy.

                    The purpose of this annual week is to allow students time for exploration of the beauty of the Philippines, while providing them with an opportunity to venture outside of their comfort zones, learn outside the classroom, and connect with friends, teachers, and God in a new way.
                    
                    Amazing adventures and learning experiences abound for students participating in Outdoor Education. Students, alongside staff members, are able to spend a day at an active volcano, explore the island ruins of a WWII battle, scuba dive or snorkel in coral reefs, cook outdoors, serve in local churches and schools, learn about sea turtle conservation, and much more. Outdoor Education is designed to rotate geographic locations each year over a three year cycle, affording each student the opportunity to get the most out of each destination.</p>
            </div>
            <div class="grid col-span-1 justify-items-end pr-20">
                <img class="h-64 w-max" src="https://faith.edu.ph/wp-content/uploads/2020/12/OE2020-1518-1024x768.jpg" alt="">
            </div>
    </div>
    </div>
    <div
    class="bg-white w-screen grid grid-cols-4 gap-4 bg-no-repeat bg-cover p-5 pb-12 mb-8 h-fit"
    id="highSchool"    
    >
    <h1 class="h-fit grid grid-cols-1 col-span-4 text-center content-center text-9xl font-bold font-bebas bg-sky-800 text-white rounded-t-2xl hover:bg-white hover:outline-sky-800 outline hover:text-sky-800">HIGH SCHOOL</h1>
    <div class=" h-fit grid grid-cols-1 col-span-4 text-center content-center rounded-3xl">
        <div class="grid grid-flow-col place-content-center">
            <h1 class="m-9 text-7xl font-kaushan h-fit text-black bg-white font-extrabold px-2 hover:text-white hover:bg-black">High School</h1>
            <h1 class="font-bold font-mono text-white bg-black underline text-4xl ml-1 h-fit m-auto ">Putting the pieces together</h1>
        </div>
    </div>
    <div class="grid grid-cols-2 col-start-1 col-span-3 content-center align-middle">
        <img 
            src="https://faith.edu.ph/wp-content/uploads/2020/12/IMG_8597-19-1-1024x682.jpg" 
            alt=""
            class="h-full rounded-lg mx-auto col-span-1">
        <p class="m-5 font-serif text-2xl text-left col-span-1">High School is the final stretch for students at Faith Academy - it is a time when the skills they have been collecting throughout their schooling are cultivated, challenged, and strengthened. We seek to prepare all students to move into the next stage of their lives knowing they are equipped and capable of success.</p>
    </div>
    <div class=" h-fit grid col-span-4 text-center content-center my-10 bg-sky-800 bg-opacity-40 rounded-xl">
        <p class="m-5 font-serif text-lg px-10 whitespace-pre-line text-justify text-white">In the pursuit of cultivating creative and critical thinkers in the classroom, we want to push our students to analyze, interpret, evaluate and synthesize information, but we also aim to develop them into individuals who search for and integrate God’s truth in all aspects of life. Teachers and staff work to reach these goals through modeling what it looks like to be a lifelong learner. 

        The school day has been designed with an emphasis on balancing structured academics with small class sizes and time which allows students to focus on the classes and activities that are most important to their success. As students are taking ownership of their own learning, there are many options for them to take higher level courses and opportunities to connect with teachers when they have questions. We seek to work together, emphasizing individual’s strengths and offering opportunities for leadership and connection.</p>
    </div>
    <div class=" bg-white overflow-hidden text-white h-fit col-span-4 grid grid-cols-2 gap-4 rounded-3xl p-10">
            <div class="grid col-span-1 pl-20 justify-items-end">
                <img class="h-64 w-max" src="https://faith.edu.ph/wp-content/uploads/2020/12/8T0A4473-15-768x1151.jpg" alt="">
            </div>
            <div class="grid col-span-1 content-center">
                <p class="m-5 font-serif text-2xl text-left grid text-black whitespace-pre-line">
                    “There is a genuine desire for our students to succeed and a willingness to do what it takes to help them get there. We recognize, value, and honor our students - we believe their ideas and who they are matter.”

                    - MR. BARLOW, HIGH SCHOOL PRINCIPAL</p>
            </div>
    </div>
    <div class=" bg-sky-800 bg-opacity-40 overflow-hidden text-white h-fit col-span-4 grid grid-cols-2 gap-4 rounded-3xl p-10">
        <div class="grid col-span-1 content-center">
            <p class="m-5 font-serif text-2xl text-left grid text-black whitespace-pre-line">
                MORE THAN CLASSMATES

                To foster multi-grade level relationship, discipleship, and community, our High School contains four Houses: Tharseo, Anastasis, Machaira, and Kaio. Students are sorted into houses randomly, and remain in the same house, along with their siblings during their four years in High School. Each House is led by student leaders who are given opportunities to work together planning events, holding contests, leading small groups, and promoting camaraderie. Staff members are also sorted into houses and are responsible for helping to facilitate House Brother/Sister activities and smaller groups within each house called a homeroom.</p>
        </div>
        <div class="grid col-span-1 pl-20 ">
            <img class="h-auto w-max" src="https://faith.edu.ph/wp-content/uploads/2020/12/DSC_3382-1024x681.jpg" alt="">
        </div>
    </div>
    <div class="h-fit col-span-4 grid grid-cols-5 gap-5">
        <div class="bg-slate-500 grid col-span-1 m-5 h-40">CONTENTS</div>
        <div class="bg-slate-500 grid col-span-1 m-5">CONTENTS</div>
        <div class="bg-slate-500 grid col-span-1 m-5">CONTENTS</div>
        <div class="bg-slate-500 grid col-span-1 m-5">CONTENTS</div>
        <div class="bg-slate-500 grid col-span-1 m-5">CONTENTS</div>
    </div>
    </div>
    <div
    class="bg-slate-200 w-screen grid grid-cols-4 gap-4 bg-no-repeat bg-cover p-5 pb-12"
    style="height:150vh;"
    id="programs"    
    >
    <h1 class="h-fit grid grid-cols-1 col-span-4 text-center content-center text-9xl font-bold font-bebas bg-sky-800 text-white rounded-t-2xl hover:bg-white hover:outline-sky-800 outline hover:text-sky-800">PROGRAMS</h1>
    </div>
    
    <div class="w-screen h-screen flex justify-center static">
    <nav class="px-2 sm:px-4 py-2.5 z-20 fixed bottom-0 center-0 mb-2 font-bold rounded-2xl text-lg">
        <div class="flex md:order-2">
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex p-3 mt-4 border border-gray-100 rounded-2xl bg-slate-700 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-700 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <BottomNav title="School Life" filePath="#schoolLife"/>
            <BottomNav title="Elementary" filePath="#elementary"/>
            <BottomNav title="Middle School" filePath="#middleSchool"/>
            <BottomNav title="High School" filePath="#highSchool"/>
            <BottomNav title="Programs" filePath="#programs"/>
        </ul>
        </div>
        </div>
    </nav>
</div>
</div>
