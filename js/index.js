const MOBILE_WITH = 800

let projectIndex = 0
let isMobile = window.innerWidth <= MOBILE_WITH
let projectElements = []
let acces
const projectsContainer = document.getElementById("projects")
const logElement = document.getElementById("data")

start()

function start() {
    try {
        loadNavbar()
        loadProjects()
        setProject(projectElements[0])
        lock()

        let vh = (window.innerHeight - 0.1) * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        window.onresize = responsiveImage
    }
    catch (error) {
        console.log(error)
        e.toString()
        document.querySelector(".data1").innerHTML = e.toString()
    }
}

function updateVh() {
    document.body.style.minHeight = "100vh";

    setTimeout(() => {
        vh = (window.innerHeight - 0.1) * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        document.body.style.minHeight = "calc(var(--vh, 1vh) * 100)";
        setTimeout(() => {
            document.body.style.minHeight = "-webkit-fill-available";
        }, 200);
    }, 200);
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName == 'ArrowRight')
        goRight()
    else if (keyName == 'ArrowLeft')
        goLeft()
});

function loadNavbar() {
    const list = document.querySelector("#personalInfo")

    header.forEach((item) => {
        const listItem = document.createElement("li")
        const lines = [item.line1, item.line2]

        lines.forEach((line) => {
            if ('url' in line && line.url !== "") {
                const a = document.createElement("a")
                a.href = line.url
                if ('newTab' in line && line.newTab != false) {
                    a.target = "_blank"
                }
                const text = document.createTextNode(line.text)
                a.appendChild(text)
                listItem.appendChild(a)
            } else {
                const p = document.createElement("p")
                const text = document.createTextNode(line.text)
                p.appendChild(text)
                listItem.appendChild(p)
            }
        })
        list.appendChild(listItem)
    })
}

function loadProjects() {
    projects = filterProjects(projects)
    projects = sortProjects(projects)
    loadElements()
}

function loadElements() {
    root = document.getElementById("projects")
    projects.forEach(project => {
        element = document.createElement("div")
        element.className = "project"
        // element.appendChild(document.createElement("div"))
        if (project.type == "image") {
            media = document.createElement("div")
            media.className = "project-img"
            media.style.backgroundImage = `url("${getPath(project)}")`
        } else if (project.type == "big-image") {
            media = document.createElement("div")
            media.className = "project-img full-img"
            media.style.backgroundImage = `url("${getPath(project)}")`
        } else if (project.type == "video") {
            media = document.createElement("video")
            media.autoplay = true
            media.controls = false
            media.muted = true
            media.loop = true
            media.setAttribute('playsinline', '');
            media.className = "project-video"
            media.src = getPath(project)
        }

        element.appendChild(media)

        root.appendChild(element)
        projectElements.push({
            project: project,
            element: element
        })
    })
}

function handlePreviousProject(projectElement) {
    log("handlePreviousProject")
    if (projectElement.project.type == "video") {
        log('⭕️ -- js/index.js:124 - ')
        projectElement.element.querySelector("video").currentTime = 0
        log('⭕️ -- js/index.js:126 - ')
    }
}

function setProject(projectElement) {
    log("setProject")
    log('⭕️ -- js/index.js:130 - ' )
    projectElements.forEach(({ project, element }) => {
        element.classList.remove("visible")
    })
    log('⭕️ -- js/index.js:133 - ' )
    if (projectElement.project.type == "big-image")
        projectElement.element.classList.add("visible")
    log('⭕️ -- js/index.js:136 - ' )
    // projectsContainer.style.overflow = "scroll"
    projectsContainer.scroll((document.documentElement.clientWidth - 40) * projectIndex, 0)
    // projectsContainer.style.overflow = "hidden"
    log('⭕️ -- js/index.js:140 - ' )
    document.getElementsByClassName("project-name")[0].innerHTML = projectElement.project.name
    log('⭕️ -- js/index.js:142 - ' )
    document.getElementsByClassName("project-description")[0].innerHTML = projectElement.project.description
    log('⭕️ -- js/index.js:144 - ' )
}

function setContent(projectElement) {
    let element = projectElement.element
    let project = projectElement.project

    if (project.type == "image" || project.type == "big-image") {
        element
            .querySelector(".project-img")
            .style
            .backgroundImage = `url("${getPath(project)}")`
    } else if (project.type == "video") {
        const video = element.querySelector(".project-video")
        video.src = getPath(project)
    }
}

function sortProjects(projects) {
    arr = projects.slice()

    arr.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    })
    return arr
}

function filterProjects(projects) {
    return projects.filter(e => (e.hidden == undefined || e.hidden == false))
}


function goRight() {
    clearLog()
    log("goRight")
    if (acces) {
        handlePreviousProject(projectElements[projectIndex])
        if (projectIndex == projects.length - 1)
            projectIndex = 0
        else projectIndex++
        setProject(projectElements[projectIndex])
    }
}

function goLeft() {
    clearLog()
    log("goLeft")
    if (acces) {
        handlePreviousProject(projectElements[projectIndex])
        if (projectIndex == 0)
            projectIndex = projects.length - 1
        else projectIndex--
        setProject(projectElements[projectIndex])
    }
}

function responsiveImage() {
    let wasMobile = isMobile
    isMobile = window.innerWidth <= MOBILE_WITH

    if ((isMobile && !wasMobile) || (!isMobile && wasMobile)) {
        setContent(projectElements[projectIndex])
    }
    projectsContainer.scroll((document.documentElement.clientWidth - 40) * projectIndex, 0)
}

function getPath(project) {
    if (isMobile
        && project.mobilePath != undefined
        && project.mobilePath != "")
        return project.mobilePath
    return project.path
}

function passwordInputHandler() {
    const val = document.getElementById("password").value
    if (val === password) unlock()

}

function passwordChangeHandler() {
    const e = document.getElementById("password")
    const val = e.value
    if (val !== password) e.classList.add("error-input")
}

function lock() {
    acces = false
    document.querySelector(".project-name").innerHTML = passwordTitle
    document.querySelector(".project-description").innerHTML = passwordDescription
}

function unlock() {
    const form = document.getElementById("form")
    form.remove()
    acces = true
    setProject(projectElements[0])
    updateVh()

    const nav = document.getElementsByTagName("nav")[0]
    const projecstInfo = document.getElementsByClassName("project-info")

    nav.classList.add("difference")
    for (let e of projecstInfo) {
        e.classList.add("difference")
    }
}

function log(text){
    let p = document.createElement('p')
    p.innerHTML = text
    logElement.appendChild(p)
}

function clearLog(){
    logElement.innerHTML = '';
}