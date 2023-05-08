import { Link } from 'react-router-dom';
import foto1 from '../images/foto1.png';
import foto2 from '../images/foto2.png';
import foto3 from '../images/foto3.png';
import foto4 from '../images/foto4.png';
import foto5 from '../images/foto5.png';
import CardDonate from '../components/cardDonate';
import { useRef } from 'react';

const Home = () => {
    const scrollRef = useRef(null);
    const scrollToBottom = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      };


    return(
        <>
        <div className="bg-red-700 flex gap-10 h-[400px]">
            <div className='pl-36 mt-8 w-[700px]'>
                <h1 className="text-white font-bold text-3xl">While you are still standing, try to reach out to the people who are falling.</h1>
                <p className='pt-7 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugiat optio facere dolorem nulla cumque aut sapiente consectetur ex delectus quos corporis, rem officia ab, quod nemo maiores nobis fugit?</p>
                <button onClick={scrollToBottom} className='bg-white px-8 py-1 rounded text-red-700 mt-5'>Donate Now</button>
            </div>
            <div>
                <img className='w-[350px] absolute right-0 mt-8' src={foto1} />
            </div>
        </div>
        <div className='bg-slate-100 flex'>
            <div className='flex-auto w-32'>
                <img className='w-[300px] absolute top-[380px]' src={foto2}/>
            </div>
            <div className='pl-[350px]'>
                <div className='pr-36 pb-8'>
                    <h1 className='text-3xl w-[700px] pt-32 font-bold text-black'>Your donation is very helpful for people affected by forest fires in Kalimantan.</h1>
                </div>
                <div className='flex gap-9 pr-36'>
                    <div className='flex-auto w-[50%]'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsa ea alias similique cupiditate placeat unde sint voluptatem hic velit excepturi fugit facilis corrupti quod quam sequi veritatis aut et laboriosam mollitia est sunt sed!</p>
                    </div>
                    <div className='flex-auto w-[50%]'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vitae magnam excepturi illum eos cum?</p>
                    </div>
                </div>
            </div>
        </div>
        <div ref={scrollRef} >
            <CardDonate/>
        </div>
        </>
    )
}

export default Home