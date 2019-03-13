export default function projects(){
    "use strict";

    //Array of Projects for the modal
    let projectsArray = [
        {
            "id": "project_01",
            "title": "The Hiking Chronicles",
            "description": "Hiking Blog",
            "image": "./assets/images/portfolio/the-hiking-chronicles.png",
            "link": "https://www.thehikingchronicles.com",
        },
        {
            "id": "project_02",
            "title": "Kew Community Trust",
            "description": "NGO Website",
            "image": "./assets/images/portfolio/kct.png",
            "link": "https://www.kewcommunitytrust.org.uk/",
        },
        {
            "id": "project_03",
            "title": "Let Us Talk",
            "description": "Counsellor",
            "image": "./assets/images/portfolio/let-us-talk.png",
            "link": "https://www.letustalk.co.za",
        },
        {
            "id": "project_04",
            "title": "IE Divorce",
            "description": "Divorce Law",
            "image": "./assets/images/portfolio/ie-divorce.png",
            "link": "https://www/iedivorce.co.za",
        },
        {
            "id": "project_05",
            "title": "Avenue Halls",
            "description": "NGO Website",
            "image": "./assets/images/portfolio/avenue-halls.png",
            "link": "https://www.avenuehalls.com",
        },
        {
            "id": "project_06",
            "title": "Air Compressor Engineering (ACE)",
            "description": "Air Compressor Company",
            "image": "./assets/images/portfolio/ace.png",
            "link": "https://ace.co.za",
        },
        {
            "id": "project_07",
            "title": "Tegan Smith Photography",
            "description": "Photographer",
            "image": "./assets/images/portfolio/tegan-smith-photo.png",
            "link": "https://www.tegansmithphotography.com",
        },
        {
            "id": "project_08",
            "title": "The Make-up Issue",
            "description": "Make-up College",
            "image": "./assets/images/portfolio/make-up-issue.png",
            "link": "https://www.themakeupissue.com",
        },
        {
            "id": "project_09",
            "title": "SD Law",
            "description": "Attorney at Law",
            "image": "./assets/images/portfolio/sd-law.png",
            "link": "https://www.sdlaw.co.za",
        },
    ];

    let projects = document.getElementsByClassName("project");
    let projectModal = document.getElementById("project-modal");
    let closeModal = document.getElementById("close");
    let hireMeButton = document.getElementById("hireMe");

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