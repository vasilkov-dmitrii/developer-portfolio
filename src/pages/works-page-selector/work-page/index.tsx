import React from "react";
import { Link, useParams } from "react-router-dom";
import './work-page.scss';
import {Slider} from "../../../components/slider";
import {IWorkPage} from "../index";
import {BackToMain} from "../back-to-main";

export const WorkPage: React.FC<IWorkPage> = ({slides, projectTitle,
                                                  projectDescription,
                                                  technologiesTitle,
                                                  technologiesList,
                                              contributionsToProjectList,
                                                  projectLink}) => {
    const { id } = useParams()
    return (
        <>
            <div className='work__info'>
                <p className="case_path">
                    <Link to="/">~</Link>
                    <span>projects</span>
                    <span className="current">{id}</span>
                </p>
                <h2>{projectTitle}</h2>
                <p className='title'>{projectDescription}</p>
                <Slider slides={slides}/>

                <h3>{technologiesTitle}</h3>
                <hr />
                <ul className="technology">
                    {technologiesList.map((el) => (
                        <li key={el}>{el}</li>
                    ))}
                </ul>
                <h3>Project Contributions</h3>

                {contributionsToProjectList.map((el, idx) => <p key={idx} className="main_text">
                    {el}
                </p>)}
                {projectLink && <>
                    <h3>Results & Link</h3>

                    <ul className="technology non_padding">
                        <li className='li_styles'>Project link
                            <a className='link_btn' href={projectLink}
                               target="_blank" rel="noreferrer noopener"><span>{projectLink}</span></a>
                        </li>
                    </ul>

                </>}
                <BackToMain/>
            </div>
        </>
    )
}
