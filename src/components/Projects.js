import websiteImg1 from '../assets/ecommerce.jpg';
import websiteImg2 from '../assets/food ecommerce.jpg';
import websiteImg3 from '../assets/website.jpg';
export default function Projects() {
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
           <h1 className="text-4xl  border-b-4  mb-5 w-[125px] ">Projects</h1>
          <p>These are some of my best projects. I have built these with React, MERN. Check them out.</p>
        </div>
        </div>
        <div className="w-full">
            <div className='flex  flex-col md:flex-row px-10 gap-5'>
            <div className='relative'>
              <img alt='ecommerce' className='h-[300px] w-[300px]' src={websiteImg1}/>
              <div className='project-desc'>
                    <p className='text-center px-5 py-5'>A Ecommerce Website. Built with Mern stack.</p>
                </div>
            </div>
            
            <div className='relative'>
            <img alt='food' className='h-[300px] w-[300px]' src={websiteImg2}/>
            <div className='project-desc'>
                    <p className='text-center px-5 py-5'>Food Ecommerce website like Swiggy, Built with Angular &.Net</p>
                </div>
            </div>
           <div className='relative'>
           <img alt='hello' className='h-[300px] w-[300px]' src={websiteImg3}/>
           <div className='project-desc'>
                    <p className='text-center px-5 py-5'>Basic Blog website. Built with Next JS and MangoDB</p>
                </div>
           </div>
            
          </div>
        </div>
        </section>
        }