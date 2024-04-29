import Link from 'next/link'


async function getData(id){
    const res = await fetch(`http://localhost:3004/episodes/${id}`, { next: { revalidate: 30 } })
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function Page({ params }) {
    const ep = await getData(params.episode_id);
    


    // honestly these need to be populated before the data is sent back to us but I'm using a Node module to fake an API rn so
    // I can feel out what's gonna be needed before I commit to any backend descisions. 


    return (
    <>
        <div className='mx-auto max-w-lg'>
            <h1 className='text-3xl'>{ep.title}</h1>
            <div>{ep.description}</div> 
            
            <div>Series: <Link href={`/podcasts/${ep.series}`}>{ep.series}</Link></div> 
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