import React,{useState} from 'react';
import {motion} from 'framer-motion';
import ProjectCard from './ProjectCard/ProjectCard';
import projectDetails from './ProjectDetails/ProjectDetails';

import './Projects.scss';

const project_variants = {
    hidden : {
        opacity : 0
    },
    visible : {
        opacity : 1,
        transition : {
            delay : 0.2,duration : 0.6,
        }
    }
}
const Projects = () => {
    const [project, setProject] = useState(projectDetails);
    return (
        <motion.div className="projects"
                variants={project_variants}
                initial='hidden'
                animate='visible'
        >
            <div className="project__card">
            {
                project.map(element => <ProjectCard key={element.name}project={element} />)
            }
            </div>
        </motion.div>
  );
}

export default Projects;