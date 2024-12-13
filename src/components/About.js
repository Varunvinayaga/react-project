import AboutImg from '../assets/about.jpg'
export default function About() {
    return <section id='about' className='flex flex-col md:flex-row bg-secondary px-5' >
        <div className='py-5 md:w-1/2'>
            <img className='h-[650px]' src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center '>
             <div className='flex flex-col justify-center text-white'>
        <h1 className="text-4xl  border-b-4  mb-5 w-[160px] ">About Me</h1>
            <p className='pb-5'>Hi, My name is varun. I am a Full stack web developer. I built beautiful Websites</p>
            <p className='pb-5'> I am proficient in Frontend skills like React.js,Redux,redux tool kit,Axios,css,SaSS,Css3 and many more</p>
            <p className='pb-5'>In backend I know Node.js,Express.js,MongoDB</p>
        </div>
        </div>
    </section>
}