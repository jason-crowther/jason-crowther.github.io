export default function projects(){
    "use strict";

    //Array of Projects for the modal
    const projectsArray = [
        {
            "id": "project_01",
            "title": "The Hiking Chronicles",
            "description": "The Hiking Chronicles is a hiking/camping blog and passion project of mine which I run along with my partner. I designed the logo and developed the website on Wordpress.",
            "image": "./assets/images/portfolio/the-hiking-chronicles.png",
            "link": "https://www.thehikingchronicles.com",
        },
        {
            "id": "project_02",
            "title": "Kew Community Trust",
            "description": "Kew Community Trust is a charity based in the UK. I was tasked with re-designing three of their websites, all were developed on Wordpress. I was also tasked with various designs for print related media.",
            "image": "./assets/images/portfolio/kct.png",
            "link": "https://www.kewcommunitytrust.org.uk/",
        },
        {
            "id": "project_03",
            "title": "Let Us Talk",
            "description": "Let Us Talk is a platform for Registered Counsellor Natasha Potter. I was tasked with logo design and website development on Wordpress.",
            "image": "./assets/images/portfolio/let-us-talk.png",
            "link": "https://www.letustalk.co.za",
        },
        {
            "id": "project_04",
            "title": "IE Divorce",
            "description": "IE Divorce is a divorce law firm. I was tasked with logo design, business card design and the website which was developed on Wordpress.",
            "image": "./assets/images/portfolio/ie-divorce.png",
            "link": "https://www/iedivorce.co.za",
        },
        {
            "id": "project_05",
            "title": "Avenue Halls",
            "description": "Avenue Halls forms part of Kew Community Trust which is a charity based in the UK. I was tasked with re-designing three of their websites, all were developed on Wordpress. I was also tasked with various designs for print related media.",
            "image": "./assets/images/portfolio/avenue-halls.png",
            "link": "https://www.avenuehalls.com",
        },
        {
            "id": "project_06",
            "title": "Air Compressor Engineering (ACE)",
            "description": "Air Compressor Engineering (ACE) is an air compressor company. I was tasked with a website re-design which was developed on Wordpress.",
            "image": "./assets/images/portfolio/ace.png",
            "link": "https://ace.co.za",
        },
        {
            "id": "project_07",
            "title": "Tegan Smith Photography",
            "description": "Tegan Smith is a professional Fashion/ Blogger Photographer. I was tasked with creating a portfolio website on Wordpress.",
            "image": "./assets/images/portfolio/tegan-smith-photo.png",
            "link": "https://www.tegansmithphotography.com",
        },
        {
            "id": "project_08",
            "title": "The Make-up Issue",
            "description": "The Make-up Issues is a make-up college, I was tasked with creating their website on Wordpress.",
            "image": "./assets/images/portfolio/make-up-issue.png",
            "link": "https://www.themakeupissue.com",
        }
    ];

    const projects = document.getElementsByClassName("project");
    const projectModal = document.getElementById("project-modal");
    const closeModal = document.getElementById("close");
    const hireMeButton = document.getElementById("hireMe");

    //Click event to launch modal
    for(var i = 0; i < projects.length; i++) {

        projects[i].addEventListener("click", function(e) {
            if(e.target.parentElement.classList.contains("project")){
                lauchModal(e.target.parentElement.dataset.project);
            }else{
                lauchModal(e.target.parentElement.parentElement.dataset.project);
            }
        });

    }

    //Launch modal
    let lauchModal = function(project){
        for(var x = 0; x < projectsArray.length; x++){
            if(project === projectsArray[x].id){
                document.querySelector("#project-modal .modal-title").innerText = projectsArray[x].title;
                document.querySelector("#project-modal .modal-description").innerText = projectsArray[x].description;
                document.querySelector("#project-modal .modal-img").src = projectsArray[x].image;
                document.querySelector("#project-modal .modal-link").href = projectsArray[x].link;
            }
        }
        projectModal.classList.remove("d-none");
        projectModal.classList.add("flipInX");
    };

    //Hire Me
    hireMeButton.addEventListener("click", function(){
        let contact = document.getElementById("contactSection");
        contact.scrollIntoView({behavior: "smooth", block: "start"});
    });

    //Close modal
    closeModal.addEventListener("click", function(){
        projectModal.classList.add("d-none");
        projectModal.classList.remove("flipInX");
    });

}