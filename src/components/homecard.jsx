import React from 'react'

function homecard(props) {
    const {className,content}=props
  return (
    <div className={className} >
        <div className="flex flex-col items-center p-10 justify-center space-y-7 transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
        {content}
        </div>
    </div>
  )
}

export default homecard
