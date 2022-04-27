const MOBILE_WITH = 800

let projectIndex = 0
let projectLenght
let isMobile = window.innerWidth <= MOBILE_WITH
let projectElements = []
let acces

loadNavbar()
loadProjects()
lock()

let vh = (window.innerHeight - 0.1) * 0.01;
window.onresize = responsiveImage

function updateVh(){
    vh = (window.innerHeight - 0.1) * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    document.body.style.minHeight = "100vh";
    setTimeout(() => {
        document.body.style.minHeight = "-webkit-fill-available";   
    }, 100);
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
    len = header.length - 1
    header.forEach((e, i) => {
        const listItem = document.createElement("li")

        //LINE 1
        if (i == 0) {
            const a = document.createElement("a")
            a.href = "/"
            const l1 = document.createTextNode(e.line1)
            a.appendChild(l1)
            listItem.appendChild(a)
        } else {
            const p1 = document.createElement("p")
            const l1 = document.createTextNode(e.line1)
            p1.appendChild(l1)
            listItem.appendChild(p1)
        }

        //LINE 2
        if (i == 0) {
            const a = document.createElement("a")
            a.href = "/"
            const l2 = document.createTextNode(e.line2)
            a.appendChild(l2)
            listItem.appendChild(a)
        }
        else if (i != len) {
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
    projects = filterProjects(projects)
    // console.log(projects);
    projects = sortProjects(projects)
    projectLenght = projects.length

    loadElements()
    loadMedia()
}

function loadElements() {
    root = document.getElementById("projects")
    projects.forEach(project => {
        element = document.createElement("div")
        element.className = "project"
        element.appendChild(document.createElement("div"))
        if (project.type == "image") {
            media = document.createElement("div")
            media.className = "project-img"
        } else if (project.type == "big-image") {
            media = document.createElement("div")
            media.className = "project-img full-img"
        } else if (project.type == "video") {
            media = document.createElement("video")
            media.autoplay = true
            media.muted = true
            media.loop = true
            media.setAttribute('playsinline', '');
            media.className = "project-video"
        }

        element.appendChild(media)
        info = document.createElement("div")
        info.className = "project-info"
        p = document.createElement("p")
        nameSpan = document.createElement("span")
        nameSpan.className = "project-name"
        nameSpan.appendChild(document.createTextNode(project.name))
        descriptionSpan = document.createElement("span")
        descriptionSpan.className = "project-description"
        descriptionSpan.appendChild(document.createTextNode(project.description))
        p.appendChild(nameSpan)
        p.appendChild(descriptionSpan)
        info.appendChild(p)
        element.appendChild(info)
        root.appendChild(element)
        projectElements.push({
            project: project,
            element: element
        })
    })
}

function setProject(projectElement) {
    setImage(projectElement)
    projectElements.forEach(({ project, element }) => {
        element.classList.remove("visible-flex")
    })
    projectElement.element.classList.add("visible-flex")
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
        element
            .querySelector(".project-video")
            .src = getPath(project)
    }
}

function loadMedia() {
    if (projects.length > 1) {
        rightIndex = 0
        leftIndex = projects.length
        if (projects[0].type == "image" || projects[0].type == "big-image") {
            let img = new Image;
            img.onload = () => {
                setProject(projectElements[0])
                loadNextPrevMedia(0, projects.length)
            }
            img.src = getPath(projectElements[0].project)
        } else {
            setProject(projectElements[0])
        }
    } else {
        setProject(projectElements[0])
    }
}

function loadNextPrevMedia(rightIndex, leftIndex) {
    rightIndex++
    leftIndex--
    let arr = []
    let toLoad
    let loaded = 0
    let isMore = true
    if (rightIndex != leftIndex) {
        arr.push(projectElements[rightIndex])
        arr.push(projectElements[leftIndex])
        toLoad = 2
        if (leftIndex - rightIndex == 1) isMore = false
    }
    else {
        arr.push(projectElements[leftIndex])
        toLoad = 1
        isMore = false
    }

    callback = e => {
        // console.log("Loaded", getPath(arr[loaded].project));
        // console.log(arr[loaded]);
        setImage(arr[loaded])
        loaded++
        if (loaded == toLoad && isMore) {
            loadNextPrevMedia(rightIndex, leftIndex)
        }
    }

    arr.forEach(e => {
        let aux
        let p = e.project
        if (p.type == "image" || p.type == "big-image") {
            aux = new Image;
            aux.onload = callback
        } else if (p.type == "video") {
            aux = document.createElement("video");
            aux.onloadeddata = callback
        }
        aux.src = getPath(p);
    })
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
    console.log("vh",vh);

    let wasMobile = isMobile
    isMobile = window.innerWidth <= MOBILE_WITH
    if ((isMobile && !wasMobile) || (!isMobile && wasMobile)) {
        setImage(projectElements[projectIndex])
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
    const e = document.getElementById("form")
    e.remove()
    acces = true
    projectElements[0].element.querySelector(".project-name").innerHTML = projectElements[0].project.name
    projectElements[0].element.querySelector(".project-description").innerHTML = projectElements[0].project.description
    updateVh()
}

function lock() {
    acces = false
    projectElements[0].element.querySelector(".project-name").innerHTML = passwordTitle
    projectElements[0].element.querySelector(".project-description").innerHTML = passwordDescription
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}



