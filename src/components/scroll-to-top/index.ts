import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export type SectionState = { section?: string } | null

export const ScrollToTop = () => {
    const { pathname, state } = useLocation()
    const section = (state as SectionState)?.section

    useEffect(() => {
        if (section) return
        window.scrollTo({ top: 0 })
    }, [pathname, section])

    return null
}
