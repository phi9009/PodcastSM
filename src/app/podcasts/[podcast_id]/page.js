import Link from 'next/link'
import EpCardMini from './ep_card_mini';
export const metadata = {
    title: "Podcast"
  };
async function getData(id){
    const res = await fetch(`http://localhost:3004/podcasts/${id}`, { next: { revalidate: 30 } })
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json();
}
async function getUser(id){
    const res = await fetch(`http://localhost:3004/users/${id}`, { next: { revalidate: 30 } })
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

async function getEpisode(id){
    const res = await fetch(`http://localhost:3004/episodes/${id}`, { next: { revalidate: 30 } })
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function Page({ params }) {
    const cast = await getData(params.podcast_id);
    const user = await getUser(cast.author)
    const episodes = [];
    for(const ep of cast.episodes){
        const getEp = await getEpisode(ep);
        episodes.push(getEp);
    }
   
    //console.log(cast.episodes)   
    // honestly these need to be populated before the data is sent back to us but I'm using a Node module to fake an API rn so
    // I can feel out what's gonna be needed before I commit to any backend descisions. 
    
    return (
    <>
    <div className='mx-auto w-2/4'>
        <h1 className='text-3xl p-5'>{cast.title}</h1>
        
        <div className='podcast-image mx-auto w-72 h-72 border p-5'></div>
        <div className='px-5 m-8'>
            {cast.description}
        </div>   
        <div className='m-3'> <Link href={`/users/${cast.author}`}><em>-{user.username}</em> </Link></div>
        <h3 className='border-t border-b p-2'>Episodes</h3>
        <div>
            <ul>
                {episodes.map((ep) => {
                    return (
                        <li key={ep}>

                            <Link key={ep.id} href={`/episodes/${parseInt(ep.id)}`}><EpCardMini episode={ep}/></Link>

                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
    </>

    )
  }

  export async function generateStaticParams() {
    const casts = await fetch("http://localhost:3004/podcasts").then((res) => res.json())
    //console.log(casts);
    return casts.map((cast) =>  {
        return {
            podcast_id : cast.id,
        }
    })
  }