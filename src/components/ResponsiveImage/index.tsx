import React from 'react'

export const ResponsiveImage: React.FC<IResponsiveImage> = ({
    src,
    style,
    useMap,
    className,
    callback,
    alt,
}) => {
    return (
        <img
            useMap={useMap}
            src={src}
            alt={alt}
            data-render={true}
            style={style}
            className={className}
            onClick={callback}
            loading={'lazy'}
        />
    )
}

export interface IResponsiveImage {
    src: string
    style?: React.CSSProperties
    useMap?: string
    className?: string
    callback?: () => void
    alt?: string
}
