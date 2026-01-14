import React, { useState } from 'react'
import './menu.scss'

export const Menu: React.FC<IMenu> = ({
    aboutRef,
    experienceRef,
    headerRef,
    skillsRef,
    worksRef,
}) => {
    const [open, setOpen] = useState(false)

    const scrollToPosition = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref?.current && 'scrollIntoView' in ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
            })
            setOpen(false)
        }
    }

    return (
        <>
            <div className={`menu ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`hidden_menu ${open ? 'active' : ''}`}>
                <span onClick={() => scrollToPosition(headerRef)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                    >
                        <path d="M4 0l-4 3h1v4h2v-2h2v2h2v-4.03l1 .03-4-3z"></path>
                    </svg>
                </span>
                <span onClick={() => scrollToPosition(aboutRef)}>
                    <svg
                        className="nav-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                    >
                        <path
                            d="M3 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-1.5 2.5c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5s.5.22.5.5-1 1.64-1 2.5c0 .86.67 1.5 1.5 1.5s1.5-.67 1.5-1.5h-1c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-.36 1-1.84 1-2.5 0-.81-.67-1.5-1.5-1.5z"
                            transform="translate(2)"
                        ></path>
                    </svg>
                </span>
                <span onClick={() => scrollToPosition(worksRef)}>
                    <svg
                        className="nav-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                    >
                        <path d="M3 0c-.55 0-1 .45-1 1v1h-1.91c-.06 0-.09.04-.09.09v2.41c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5v-2.41c0-.06-.04-.09-.09-.09h-1.91v-1c0-.55-.45-1-1-1h-2zm0 1h2v1h-2v-1zm-3 4.91v2c0 .05.04.09.09.09h7.81c.05 0 .09-.04.09-.09v-2c-.16.06-.32.09-.5.09h-7c-.18 0-.34-.04-.5-.09z"></path>
                    </svg>
                </span>
                <span onClick={() => scrollToPosition(experienceRef)}>
                    <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="779.11px"
                        height="779.11px"
                        viewBox="0 0 779.11 779.11"
                    >
                        <g>
                            <g>
                                <path
                                    d="M662.914,632.351H530.07H254.474c-11.49,0-20.806,9.315-20.806,20.806v12.805c0,11.49,9.315,20.81,20.806,20.81h275.598
                        h132.844h68.82v-54.418L662.914,632.351L662.914,632.351z"
                                />
                                <circle cx="211.187" cy="189.625" r="115.19" />
                                <path
                                    d="M492.234,472.147l-263.969-0.146l-6.25-0.02v-30.632l-0.217-25.64c0-61.245-49.651-110.898-110.899-110.898
                        c-2.075,0-4.136,0.07-6.184,0.182l-0.156-0.182C46.813,304.813,0,351.625,0,409.372v295.303h222.015V578.876l-2.937-0.231
                        c-0.209-0.019-0.261,0.002-0.391,0.002c-15.021,0-29.417-6.324-39.562-17.399l-90.112-98.363
                        c-2.873-3.135-2.66-8.003,0.476-10.874c3.133-2.873,8.003-2.659,10.874,0.476l90.111,98.362
                        c7.322,7.993,17.648,12.881,28.521,13.039c0.723,0.01,10.594,0.152,10.594,0.152h262.645c25.375,0,45.947-20.571,45.947-45.947
                        C538.182,492.717,517.609,472.147,492.234,472.147z"
                                />
                                <path
                                    d="M765.197,309.111c-10.744-3.681-22.439,2.049-26.123,12.794l-87.209,254.59H339.803c-11.356,0-20.567,9.206-20.567,20.564
                        s9.211,20.566,20.567,20.566h326.507c6.994,0,13.168-3.503,16.879-8.841c1.283-1.694,2.33-3.607,3.059-5.729L778,335.225
                        C781.67,324.486,775.947,312.79,765.197,309.111z"
                                />
                            </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                    </svg>
                </span>
                <span onClick={() => scrollToPosition(skillsRef)}>
                    <svg
                        className="nav-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                    >
                        <path
                            d="M5 0l-3 6h1l3-6h-1zm-4 1l-1 2 1 2h1l-1-2 1-2h-1zm5 0l1 2-1 2h1l1-2-1-2h-1z"
                            transform="translate(0 1)"
                        ></path>
                    </svg>
                </span>
                <span
                    onClick={() =>
                        window.scrollTo({
                            behavior: 'smooth',
                            top: document.body.scrollHeight,
                        })
                    }
                >
                    <svg
                        className="nav-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                    >
                        <path
                            d="M0 0v1l4 2 4-2v-1h-8zm0 2v4h8v-4l-4 2-4-2z"
                            transform="translate(0 1)"
                        ></path>
                    </svg>
                </span>
            </div>
        </>
    )
}

interface IMenu {
    headerRef: React.RefObject<HTMLDivElement | null>
    aboutRef: React.RefObject<HTMLDivElement | null>
    worksRef: React.RefObject<HTMLDivElement | null>
    experienceRef: React.RefObject<HTMLDivElement | null>
    skillsRef: React.RefObject<HTMLDivElement | null>
}
