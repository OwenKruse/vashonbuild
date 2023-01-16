import * as fs from "fs";
import * as path from "path";

const GetImageData = () => {
    // Read all the images in the public/projects directory in the directory there are subdirectories for each project
    // Each subdirectory has the images for that project

    // Get the path to the public/projects directory
    const projectsPath = path.join(process.cwd(), "public/projects");

    // Get the names of all the subdirectories in the public/projects directory skip the .DS_Store file
    const projectNames = fs.readdirSync(projectsPath).filter((item) => item !== ".DS_Store");
    console.log(projectNames);
    // Create an array to store each project's image srcs
    const projects: any[][] = [];

    // Loop through each project name
    projectNames.forEach((projectName) => {
        // Get the path to the project's directory
        const projectPath = path.join(projectsPath, projectName);
        // Get the names of all the images in the project's directory
        const imageNames = fs.readdirSync
        (projectPath).filter((item) => item !== ".DS_Store");
        // Create an array to store the image srcs for this project
        const projectImages: any[] = [];
        // Loop through each image name
        imageNames.forEach((imageName) => {
            // Create the image src
            const imageSrc = `/projects/${projectName}/${imageName}`;
            // Create the image title
            const imageTitle = imageName.split(".")[0];
            // Create the image object
            const image = {
                img: imageSrc,
                title: imageTitle
            }
            // Add the image object to the projectImages array
            projectImages.push(image);
            // Add the image src to the projectImages array
        }
        );
        // Add the projectImages array to the projects array
        projects.push(projectImages);
    }
    );
    return projects;

};

export default GetImageData;