export default function projects(){
    "use strict";

    //Array of Projects for the modal
    let projectsArray = [
        {
            "id": "project_01",
            "title": "The Hiking Chronicles",
            "description": "Hiking Blog",
            "image": "./assets/images/portfolio/download (1).jpg",
            "link": "https://www.thehikingchronicles.com",
        },
        {
            "id": "project_02",
            "title": "Kew Community Trust",
            "description": "NGO Website",
            "image": "#",
            "link": "#",
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