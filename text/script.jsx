function newFunction() {
    console.log();
};

var newFunction = ();

newFunction();

// members
var members = [
    {
        username: "rgenete",
        password: "arise"
    },
    {
        username: "jteus",
        password: "arise"
    },
    {
        username: "aaquino",
        password: "arise"
    }

];

//projects
var projects = [
    {
        project_title: "Safer Schools Program",
        project_desc: "Work Theme 1",
        project_type: "Training",
        project_category: "DRMS",
        project_status: "Scheduled"
    },
    {
        project_title: "Dialogue with DILG",
        project_desc: "Work Theme 3",
        project_type: "Dialogue",
        project_category: "URRR",
        project_status: "Scheduled"
    },
    {
        project_title: "Calendar of DRR Trainings",
        project_desc: "Work Theme 2",
        project_type: "Webinar",
        project_category: "EDUC",
        project_status: "Started"
    },
    {
        project_title: "MSME Guidebook",
        project_desc: "Priority Area 1",
        project_type: "Document",
        project_category: "INV",
        project_status: "Completed"
    }
];

//sendai
var sdg = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    }    
];

var projectsLength = projects.length;
for (var i=0; i < projectsLength; i++){
    console.log(projects);
}

var counter = 10;
    do {
        console.log("while", counter);
        counter;
    }while (counter >10);

var c = 10;
    while (c>10){
        console.log("while", c);
        c;
    }

function logActuals(actuals,i){
    console.log(actuals,i);
}

actuals.forEach(logActuals);
actualsImportant.forEach(logActuals);

// Select SDG and collapse - Projects Form
var sdg = document.getElementByName("sendai_id")[0];

sdg.addEventListener("click", function(){
    console.log("")
}
)

// Button Click Listener - Submit Form
var btn_save = getElementbyId("save");
var input_project_title = document.getElementbyId("project_title");
var ul = document.querySelector("ul");

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input_project_title.value));
    ul.appendChild(li);
    alert("Project saved.");
    input_project_title.value="";
}

btn_save.addEventListener("click", function(){
    createListElement();
});

