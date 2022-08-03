import React from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineRollback } from "react-icons/ai"

// cover images
import keep_calm_cover from "../project_images/under_construction/sub_keep_calm_cat.jpg"

//CSS
import "../projects.css"

const githubLink = "https://github.com/le-james?tab=repositories"

function Under_construction() {
    return (
        <div class="projects">
            <Link to="/projects">
                <AiOutlineRollback class="header_icon" size="2em" />
            </Link>
            <div class="project-container">
                <div class="card in-card">
                    <div class="card__body">
                        <img src={keep_calm_cover} alt="cat with space helmet"/>

                        <br/>
                        <a className='reg_link' href={githubLink} target="_blank" rel="noopener noreferrer">
                        <hr/>
                            GitHub Repo
                        </a>

                        <h2>UNDER CONSTRUCTION</h2>
                        <p>
                            More coming soon...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Under_construction