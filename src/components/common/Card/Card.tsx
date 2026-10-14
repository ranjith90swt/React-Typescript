import React from 'react'
import './Card.scss'

interface CardProps {
    title?: string;
    className?: string;
    children?:React.ReactNode; 
}

const Card = (
    {
        title,
        className,
        children
    }: CardProps
) => {
  return (
    <div className={`card ${className}`}>
        <div className="card-header">
            <h5 className='mb-0'>{title}</h5>
        </div>
        <div className="card-body mb-2 pb-0">
            {children}
        </div>
        
    </div>
  )
}

export default Card