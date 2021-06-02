const db = firebase.firestore();
const projectsRef = db.collection("projects");

// Inspirert av freecodecamp.org 

projectsRef.get().then((database) => { 
    const data = database.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));

    data.map(function(project) {
        console.log(project);

        var link = document.createElement("a");
        link.href = `${project.link}.html`;

        var container = document.createElement("div");
        container.className = "portfolio-preview";

        // Bilde
        var image = document.createElement("img");
        image.src = project.imageUrl;
        image.alt = project.title;
        image.className = "portfolio-preview-image";

        // Tittel
        var title = document.createElement("p");
        var titleSpan = document.createElement("span");
        titleSpan.innerText = project.title;
        titleSpan.classList.add("portfolio-preview-title");
        titleSpan.classList.add(`title-${project.color}`);
        title.appendChild(titleSpan);

        // Undertekst
        var subtitle = document.createElement("p");
        subtitle.innerText = project.subtitle;
        subtitle.className = "portfolio-preview-subtitle";
        
        container.appendChild(image);
        container.appendChild(title);
        container.appendChild(subtitle);

        link.appendChild(container);

        var projectsContainer = document.getElementById("projects");
        projectsContainer.appendChild(link);
    });

}) 