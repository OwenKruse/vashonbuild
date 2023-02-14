async function GetImageData() {
    const cloudinary = require('cloudinary');
    const projectNames = ['BurtonLoop', 'Denslow', 'GordonManetti', 'Knight', 'McCulley']

    const fs = require('fs');
    const path = require('path');

    let projects = [{name: 'BurtonLoop', images: []}, {name: 'Denslow', images: []}, {name: 'GordonManetti', images: []}, {name: 'Knight', images: []}, {name: 'McCulley', images: []}];

    // Get the images_names from the text files in public/project_images and push them to the corresponding array
    for (let i = 0; i < projectNames.length; i++) {
        const project = projectNames[i];
        const projectImages = fs.readFileSync(path.join(process.cwd(), 'public/project_images', project + '.txt'), 'utf8');
        projects[i].images = projectImages.split('\n');
    }
    // For each project, loop through the images and create a new object with the image name and the image data
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        const images = project.images;
        const imagesData = [];
        for (let j = 0; j < images.length; j++) {
            const image = images[j];
            const imageSRC = 'https://res.cloudinary.com/dtu1eezmp/image/upload/v1676092290/Projects/' + project.name + '/' + image;
            const object = {img: imageSRC};
            imagesData.push(object);
    }
    // @ts-ignore
        projects[i].images = imagesData;
}
    return projects;
}


export default GetImageData;