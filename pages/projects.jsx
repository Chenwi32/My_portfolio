import Image from 'next/image'
import React from 'react'

function projects() {
  return (
    <div className="container mx-auto ">
      <div className="secondary_container projects  text-center">
        <h1 className="title">My personal projects</h1>

        <div className="grid grid-cols-2 gap-5">
          <div className="projects__item leftslides">
            <Image
              src="/images/maf.png"
              alt="Profile"
              className="projects__image"
              id="profile"
              width={500}
              height={600}
            />
            <div className="projects__overlay  ">
              <div className="">
                <Image
                  src="/images/maf2.png"
                  alt="Profile"
                  /* priority={true} */
                  className="projects__logo"
                  id="profile"
                  width={80}
                  height={80}
                />
              </div>

              <div className="">
                <p className="projects__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora, ad magnam numquam commodi rem minus perspiciatis
                  aspernatur accusamus, ea, repudiandae sequi quas! Asperiores
                  laudantium natus aspernatur doloremque aut perferendis
                  nostrum?
                </p>
                <a href="#" target="_blank" className="btn2">
                  See this project
                </a>
              </div>
            </div>
          </div>

          <div className="projects__item rightslides2">
            <Image
              src="/images/profile.png"
              alt="Profile"
              className="projects__image"
              id="profile"
              width={500}
              height={600}
            />
            <div className="projects__overlay  ">
              <div className="">
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  /* priority={true} */
                  className="projects__logo"
                  id="profile"
                  width={80}
                  height={80}
                />
              </div>

              <div className="">
                <p className="projects__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora, ad magnam numquam commodi rem minus perspiciatis
                  aspernatur accusamus, ea, repudiandae sequi quas! Asperiores
                  laudantium natus aspernatur doloremque aut perferendis
                  nostrum?
                </p>
                <a href="#" target="_blank" className="btn2">
                  See this project
                </a>
              </div>
            </div>
          </div>

          <div className="projects__item leftslides2">
            <Image
              src="/images/profile.png"
              alt="Profile"
              className="projects__image"
              id="profile"
              width={500}
              height={600}
            />
            <div className="projects__overlay  ">
              <div className="">
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  /* priority={true} */
                  className="projects__logo"
                  id="profile"
                  width={80}
                  height={80}
                />
              </div>

              <div className="">
                <p className="projects__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora, ad magnam numquam commodi rem minus perspiciatis
                  aspernatur accusamus, ea, repudiandae sequi quas! Asperiores
                  laudantium natus aspernatur doloremque aut perferendis
                  nostrum?
                </p>
                <a href="#" target="_blank" className="btn2">
                  See this project
                </a>
              </div>
            </div>
          </div>

          <div className="projects__item rightslides">
            <Image
              src="/images/profile.png"
              alt="Profile"
              className="projects__image"
              id="profile"
              width={500}
              height={600}
            />
            <div className="projects__overlay  ">
              <div className="">
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  /* priority={true} */
                  className="projects__logo"
                  id="profile"
                  width={80}
                  height={80}
                />
              </div>

              <div className="">
                <p className="projects__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora, ad magnam numquam commodi rem minus perspiciatis
                  aspernatur accusamus, ea, repudiandae sequi quas! Asperiores
                  laudantium natus aspernatur doloremque aut perferendis
                  nostrum?
                </p>
                <a href="#" target="_blank" className="btn2">
                  See this project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects
