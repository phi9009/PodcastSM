import Link from 'next/link'
import CastCardMini from '../../cast_card_mini';


async function getData(id){
    const res = await fetch(`http://localhost:3004/episodes/${id}`, { next: { revalidate: 30 } })
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

async function getPodcast(id){
    const res = await fetch(`http://localhost:3004/podcasts/${id}`, { next: { revalidate: 30 } })
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json();
}
export const metadata = {
    title: "Episode"
  };
export default async function Page({ params }) {
    const ep = await getData(params.episode_id);
    const podcast = await getPodcast(ep.series);


    // honestly these need to be populated before the data is sent back to us but I'm using a Node module to fake an API rn so
    // I can feel out what's gonna be needed before I commit to any backend descisions. 


    return (
    <>
        <div className='mx-auto max-w-lg'>
            <h1 className='text-3xl border-b-2 m-5 p-2'>{ep.title}</h1>
            <div className='w-72 h-72 m-auto border-2 mb-10'></div>
            
            <div className='m-2 py-3 border-b-2'>{ep.description}</div> 
            <div className='m-2 py-3 border-b-2'>First Published: {ep.publishdate}</div> 
            <div className='m-2 py-3 '>Series: <Link href={`/podcasts/${ep.series}`}><CastCardMini podcast={podcast}/></Link></div> 
        </div>
    </>
    )
  }

  export async function generateStaticParams() {
    const episodes = await fetch("http://localhost:3004/episodes").then((res) => res.json())
    //console.log(casts);
    return episodes.map((ep) =>  {
        return {
            episode_id : ep.id,
        }
    })
  }