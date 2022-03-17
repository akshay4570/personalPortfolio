import React from 'react';
import './ProjectCard.scss';
import {BsGithub} from 'react-icons/bs';
import {GrDeploy} from 'react-icons/gr';

const ProjectCard = ({project : {name,image,deployed_url,github_url,description}
}) => {
  return (
    <div className="projectCard">
        <div className="projectCard__wrapper">
            <div className="projectCard__image">
                <img src={image} alt={name}/>
            </div>
            <div className="projectCard__title">
                {name}
            </div>
            <div className="projectCard__description">
                {description}
            </div>
            <div className="projectCard__buttons">
                {
                    (deployed_url === '' && 
                        <button onClick={() => window.open(github_url,"_blank")} className="projectCard__github">
                            <BsGithub /> Code
                        </button>
                    ) || (deployed_url !== '' && 
                    <>
                        <button onClick={() => window.open(deployed_url,"_blank")} className="projectCard__deploy"><GrDeploy /> Live Demo</button>
                        <button onClick={() => window.open(github_url,"_blank")} className="projectCard__github">
                            <BsGithub /> Code
                        </button>
                    </>
                    )
                }
            </div>
        </div>
    </div>
  );
}

export default ProjectCard;