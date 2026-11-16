import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { WorkPage } from './work-page'
import { Routes } from '../../routes'
import { projectsConfig } from './projects-config'

export const WorksPageSelector = () => {
    const { id } = useParams()
    const projectData = projectsConfig[id as Routes]

    if (!projectData) return <Navigate to={Routes.MAIN} replace />
    return <WorkPage key={id} {...projectData} />
}

export interface IWorkPage {
    projectTitle: string
    projectDescription: string
    slides: string[]
    gallery?: 'phone'
    technologiesTitle: string
    technologiesList: string[]
    contributionsToProjectList: string[]
    projectLink?: string
}
