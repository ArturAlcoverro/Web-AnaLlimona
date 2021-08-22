let projectIndex = 0
let projectLenght

let imageElement = document.getElementById("project-image")
let bigImageElement = document.getElementById("project-big-image")
let videoElement = document.getElementById("project-video")

let titleElement = document.getElementById("project-name")
let descriptionElement = document.getElementById("project-description")
let actualProject = null


loadNavbar()
loadProjects()
window.onresize = responsiveImage

function loadNavbar() {
    list = document.querySelector("#personalInfo")
    header.forEach((e, i) => {

        const listItem = document.createElement("li")
        const p1 = document.createElement("p")
        const l1 = document.createTextNode(e.line1)
        p1.appendChild(l1)
        listItem.appendChild(p1)

        if (i != 3) {
            const p2 = document.createElement("p")
            const l2 = document.createTextNode(e.line2)
            p2.appendChild(l2)
            listItem.appendChild(p2)
        } else {
            const mail = document.createElement("a")
            mail.href = "mailto:" + e.line2.toLowerCase()
            const l2 = document.createTextNode(e.line2)
            mail.appendChild(l2)
            listItem.appendChild(mail)
        }
        list.appendChild(listItem)
    })
}

function loadProjects() {
    project = sortProjects(projects)
    projectLenght = projects.length

    loadMedia(projects)

    loadProject(projects[projectIndex])
}

function loadProject(project) {
    actualProject = project
    try {
        imageElement.classList.add("hidden")
        bigImageElement.classList.add("hidden")
        videoElement.classList.add("hidden")

        if (project.type == "image") {
            imageElement.style.backgroundImage = `url("${project.path}")`
            imageElement.classList.remove("hidden")
        } else if (project.type == "big-image") {
            bigImageElement.style.backgroundImage = `url("${project.path}")`
            bigImageElement.classList.remove("hidden")
        } else if (project.type == "video") {
            videoElement.src = project.path
            videoElement.classList.remove("hidden")
        }
        titleElement.innerText = project.name
        descriptionElement.innerText = project.description
    }
    catch (e) { console.log(e) }
}

function loadMedia(projects) {
    projects.forEach(e => {
        if (e.type == "image" || e.type == "big-image") {
            let image = new Image;
            image.onload = function () {
                console.log(this.src);
            }
            image.src = e.path;

            console.log(e.path);
        }
        else if (e.type == "video") {
            let video = document.createElement("video");
            video.onloadeddata = (event) => {
                console.log(video.src);
            }

            video.src = e.path;
            console.log(e.path);
        }
    })
}

function sortProjects(projects) {
    arr = projects.slice()
    console.log(arr)

    arr.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    })
    return arr
}

function goRight() {
    if (projectIndex == projectLenght - 1)
        projectIndex = 0
    else projectIndex++
    loadProject(projects[projectIndex])
}

function goLeft() {
    if (projectIndex == 0)
        projectIndex = projectLenght - 1
    else projectIndex--
    loadProject(projects[projectIndex])
}

function responsiveImage() {
    console.log(window.innerWidth);
}



