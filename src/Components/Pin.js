import React from 'react'

function Pin({ pinSize, imgSrc, name, link }) {
  return (
    <div className={`pin ${pinSize}`}>

      <img 
        className="mainPic" 
        src={imgSrc} 
        alt=""
    />

        <div className="content">
            <h3> {name} </h3>

            <div className="Search">
                <a href={link}>

                
              <img 
                  src="https://firebasestorage.googleapis.com/v0/b/pixit-c872d.appspot.com/o/icons8-forward-arrow-50.png?alt=media&token=d068ccaa-4dd8-4405-aa1a-83b3e1fb5a0f" 
                  alt="" 
                  
                  />
                  </a>
            </div>
            
        </div>
    </div>
  )
}

export default Pin;

// bring images 
// bring up content section 
