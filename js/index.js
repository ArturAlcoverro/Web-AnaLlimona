const MOBILE_WITH = 800

let projectIndex = 0
let projectLenght
let projectHeight
let isMobile = window.innerWidth <= MOBILE_WITH
let projectElements = []
let acces
const projectsContainer = document.getElementById("projects")

loadNavbar()
loadProjects()
lock()

let vh = (window.innerHeight - 0.1) * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`)
window.onresize = responsiveImage

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
    // console.log(keyName);
    if (keyName == 'ArrowRight')
        goRight()
    else if (keyName == 'ArrowLeft')
        goLeft()
});

function loadNavbar() {
    list = document.querySelector("#personalInfo")
    const items = header
    items.forEach((item) => {
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
    projectLenght = projects.length

    loadElements()
    projectHeight = document.querySelector(".project").offsetHeight
}

function loadElements() {
    try {
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
                media.autoplay = false
                media.controls = false
                media.muted = true
                media.loop = true
                media.setAttribute('playsinline', '');
                media.className = "project-video"
                media.src = getPath(project)
                media.play()
            }

            element.appendChild(media)

            root.appendChild(element)
            projectElements.push({
                project: project,
                element: element
            })
        })
    } catch (error) {
        console.log(error)
        e.toString()
        document.querySelector(".data1").innerHTML = e.toString()
    }
}

function setProject(projectElement) {
    try {
        // setImage(projectElement)
        projectElements.forEach(({ project, element }) => {
            element.classList.remove("visible")
        })

        projectsContainer.style.overflow = "scroll"

        // document.querySelector(".data1").innerHTML = `getTopOffset(projectElement)      :  ${getTopOffset(projectElement)}`
        // document.querySelector(".data2").innerHTML = `projectHeight * projectIndex      :  ${projectHeight * projectIndex}`
        // document.querySelector(".data3").innerHTML = `projectElement.element.offsetTop  :  ${projectElement.element.offsetTop - projectsContainer.offsetTop}`
        // document.querySelector(".data4").innerHTML = `------------------------------------------------------------------------`
        // // console.log("++++++: ", getTopOffset(projectElement));
        // console.log("------: ", projectHeight * projectIndex);
        // console.log("OFFSET: ", projectElement.element.offsetTop - projectsContainer.offsetTop);
        // console.log("DIFF--: ", projectElement.element.offsetTop - (projectHeight * projectIndex));

        projectsContainer.scroll((document.documentElement.clientWidth - 40) * projectIndex, 0)
        // projectsContainer.scroll(0, projectHeight * projectIndex)
        projectsContainer.style.overflow = "hidden"

        if (projectElement.project.type == "big-image")
            projectElement.element.classList.add("visible")

        if (projectElement.project.type == "video") {
            projectElement.element.querySelector("video").currentTime = 0
            projectElement.element.querySelector("video").play()
        }

        document.getElementsByClassName("project-name")[0].innerHTML = projectElement.project.name
        document.getElementsByClassName("project-description")[0].innerHTML = projectElement.project.description
    } catch (error) {
        console.log(error)
        e.toString()
        document.querySelector(".data1").innerHTML = e.toString()
    }

}

function setImage(projectElement) {
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
    // console.log(arr)

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
    if (acces) {
        if (projectIndex == projectLenght - 1)
            projectIndex = 0
        else projectIndex++
        setProject(projectElements[projectIndex])
    }
}

function goLeft() {
    if (acces) {
        if (projectIndex == 0)
            projectIndex = projectLenght - 1
        else projectIndex--
        setProject(projectElements[projectIndex])
    }
}

function responsiveImage() {
    let wasMobile = isMobile
    isMobile = window.innerWidth <= MOBILE_WITH
    console.log(isMobile);
    if ((isMobile && !wasMobile) || (!isMobile && wasMobile)) {
        setImage(projectElements[projectIndex])
    }

    projectHeight = document.querySelector(".project").offsetHeight
    projectsContainer.scroll((document.documentElement.clientWidth - 40) * projectIndex, 0)

    // console.log("mobile: " + isMobile + "-" + window.innerWidth);
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

function unlock() {
    const form = document.getElementById("form")
    form.remove()
    acces = true
    projectElements[0].element.querySelector(".project-name").innerHTML = projectElements[0].project.name
    projectElements[0].element.querySelector(".project-description").innerHTML = projectElements[0].project.description
    updateVh()

    const nav = document.getElementsByTagName("nav")[0]
    const projecstInfo = document.getElementsByClassName("project-info")

    nav.classList.add("difference")
    for (let e of projecstInfo) {
        e.classList.add("difference")
    }
}

function lock() {
    acces = false
    document.querySelector(".project-name").innerHTML = passwordTitle
    document.querySelector(".project-description").innerHTML = passwordDescription
}

function getTopOffset(projectElement) {
    let offset = 0
    for (let i = 0; i < projectElements.length; i++) {
        if (projectElements[i] == projectElement) return offset;
        offset += projectElement.element.offsetHeight;
    }
}
