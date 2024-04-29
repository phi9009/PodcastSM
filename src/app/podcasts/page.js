import Link from 'next/link'

async function getData(){
    const res = await fetch("http://localhost:3004/podcasts", { next: { revalidate: 30 } })
    if(!res.ok){
        throw new Error('Failed to fetch data!')
    }
    return res.json();
}

export default async function PodcastList (){
    const data = await getData();
    return(
        <>
        <div className='mx-auto max-w-lg'>
            <h1 className='text-3xl'> List of Podcasts</h1>
            <ul>
                {data.map( (cast) => {
                    return (
                        <li key={cast.id}>
                            <Link href={`/podcasts/${cast.id}`}>{cast.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
        </>
    )
}



