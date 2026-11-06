import React, { type RefObject } from 'react'
import { Terminal } from '../terminal'

export const MainPage = () => {
    return <Terminal />
}

export interface IWithRefChildren {
    refElement: RefObject<HTMLDivElement | null>
}
