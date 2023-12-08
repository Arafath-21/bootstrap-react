import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Icons from './components/Icons'
import Imgshowcase from './components/Imgshowcase'
import Testimonials from './components/Testimonials'
import CalltoAction from './components/CalltoAction'
import Footer from './components/Footer'
import show1 from './assets/img/bg-showcase-1.jpg'
import show2 from './assets/img/bg-showcase-2.jpg'
import show3 from './assets/img/bg-showcase-3.jpg'
import test1 from './assets/img/testimonials-1.jpg'
import test2 from './assets/img/testimonials-2.jpg'
import test3 from './assets/img/testimonials-3.jpg'
function App() {

  const icons=[
    {
      head:"Fully Responsive",
      desc:"This theme will look great on any device, no matter the size!",
      icon:"bi-window"
    },
    {
      head:"Fully Responsive",
      desc:"This theme will look great on any device, no matter the size!",
      icon:"bi-layers",
    },
    {
      head:"Fully Responsive",
      desc:"This theme will look great on any device, no matter the size!",
      icon:"bi-terminal",
    },
  ];
const showImage=[
  {
    heading:"Fully Responsive Design",
    desc:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    isImageRight:false,
    img:show1,
  },
  {
    heading:"Updated For Bootstrap 5",
    desc:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    isImageRight:true,
    img:show2,
  },
  {
    heading:"Easy to Use & Customize",
    desc:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    isImageRight:false,
    img:show3,
  },
]
const testimonial=[
  {
    name:"Margaret E.",
    desc:'"This is fantastic! Thanks so much guys!"',
    img:test1,
  },
  {
    name:"Fred S.",
    desc:'"Bootstrap is amazing. I\'ve been using it to create lots of super nice landing pages."',
    img:test2,
  },
  {
    name:"Sarah W.",
    desc:'"Thanks so much for making these free resources available to us!"',
    img:test3,
  }
]
  return <>
    <Navbar />
    <Header />
      <section className="features-icons bg-light text-center">
              <div className="container">
                  <div className="row">    
                    {
                      icons.map((e,i)=>{
                        return <Icons icons={e} key={i} />
                      })
                    }
                  </div>
              </div>
      </section>   
      {/*  */}
      <section className="showcase">
      <div className="container-fluid p-0">
          {
          showImage.map((e,i)=>{
          return <Imgshowcase showImage={e} key={i} /> 
            })
            
            }
          </div>
      </section>

      <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                  <div className="row">
                {
                    testimonial.map((e,i)=>{
                      return <Testimonials testimonial={e} key={i} />
                    })
                }
                  </div>
            </div>
      </section>

      <CalltoAction />    
      <Footer />      

  </>
}

export default App
