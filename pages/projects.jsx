import Image from 'next/image'
import React from 'react'

function projects() {
  return (
    <div className="container mx-auto ">
      <div className=" projects  ">
        <h1 className="title">My personal projects</h1>

        <div className="grid grid-cols-2 gap-5">
          <div className="projects__item leftslides">
            <div className="projects__overlay  ">
              <p className="projects__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <a href="#" target="_blank" className="project__btn">
                See more
              </a>
            </div>
          </div>

          <div className="projects__item topmslide">
            <div className="projects__overlay  ">
              <p className="projects__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <a href="#" target="_blank" className="project__btn">
                See more
              </a>
            </div>
          </div>

          <div className="projects__item bottomslide">
            <div className="projects__overlay  ">
              <p className="projects__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <a href="#" target="_blank" className="project__btn">
                See more
              </a>
            </div>
          </div>

          <div className="projects__item rightslides">
            <div className="projects__overlay  ">
              <p className="projects__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <a href="#" target="_blank" className="project__btn">
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects
