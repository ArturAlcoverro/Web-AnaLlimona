let projectIndex = 0
let projectLenght
let isMobile = window.innerWidth <= 600

const imageElement = document.getElementById("project-image")
const bigImageElement = document.getElementById("project-big-image")
const videoElement = document.getElementById("project-video")

const titleElement = document.getElementById("project-name")
const descriptionElement = document.getElementById("project-description")

let actualProject = null


loadNavbar()
loadProjects()

window.onresize = responsiveImage

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName);
    if (keyName == 'ArrowRight')
        goRight()
    else if (keyName == 'ArrowLeft')
        goLeft()
});

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
    projects = sortProjects(projects)
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

        setImage(project, getPath(project))

        titleElement.innerText = project.name
        descriptionElement.innerText = project.description
    }
    catch (e) { console.log(e) }
}

function setImage(project, path){
    if (project.type == "image") {
        imageElement.style.backgroundImage = `url("${path}")`
        imageElement.classList.remove("hidden")
    } else if (project.type == "big-image") {
        bigImageElement.style.backgroundImage = `url("${path}")`
        bigImageElement.classList.remove("hidden")
    } else if (project.type == "video") {
        videoElement.src = getPath(project)
        videoElement.classList.remove("hidden")
    }
}

function loadMedia(projects) {
    if (projects.length > 1) {
        rightIndex = 0
        leftIndex = projects.length

        let img = new Image;
        img.onload = () => {
            loadNextPrevMedia(projects, 0, projects.length)
        }
        img.src = getPath(projects[0])
    }
}

function loadNextPrevMedia(projects, rightIndex, leftIndex) {
    rightIndex++
    leftIndex--
    let arr = []
    let toLoad
    let loaded = 0
    let isMore = true
    if (rightIndex != leftIndex) {
        arr.push(projects[rightIndex])
        arr.push(projects[leftIndex])
        toLoad = 2
        if (leftIndex - rightIndex == 1) isMore = false
    }
    else {
        arr.push(projects[leftIndex])
        toLoad = 1
        isMore = false
    }

    callback = function () {
        console.log("Loaded", getPath(arr[loaded]));
        loaded++
        if (loaded == toLoad && isMore) {
            loadNextPrevMedia(projects, rightIndex, leftIndex)
        }
    }

    arr.forEach(e => {
        let element
        if (e.type == "image" || e.type == "big-image") {
            element = new Image;
            element.onload = callback

        } else if (e.type == "video") {
            element = document.createElement("video");
            element.onloadeddata = callback
        }
        element.src = getPath(e);
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
    let wasMobile = isMobile
    isMobile = window.innerWidth <= 600
    if (isMobile && !wasMobile) {
        loadProject(A)
    }
    console.log("mobile: " + isMobile + "-" + window.innerWidth);
}

function getPath(project) {
    if (isMobile
        && project.mobilePath != undefined
        && project.mobilePath != "")
        return project.mobilePath
    return project.path
}



