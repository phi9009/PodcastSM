import Link from 'next/link'
import CastCardMini from '../../cast_card_mini';

export const metadata = {
    title: "User"
  };

async function getData(id){
    const res = await fetch(`http://localhost:3004/users/${id}`, { next: { revalidate: 30 } })
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json();
}
async function getSeries(id){
    const res = await fetch(`http://localhost:3004/podcasts/${id}`, { next: { revalidate: 30 } })
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function Page({ params }) {
    const user = await getData(params.user_id);
    const series = [];
    for(const cast of user.podcasts)
    {
        const newCast = await getSeries(cast);
        series.push(newCast);
    }
    console.log(series);

    // honestly these need to be populated before the data is sent back to us but I'm using a Node module to fake an API rn so
    // I can feel out what's gonna be needed before I commit to any backend descisions. 


    return (
    <>
        <div className='mx-auto max-w-lg'>
            <div className='w-72 h-72 border-2 mx-auto my-5'></div>
            <h1 className='text-3xl m-3 border-b-2'>{user.username}</h1>
            <h2 className='m-3 border-b'>Series</h2>
            <ul>
                {series.map((cast) => {
                    return(
                        <>
                            <li key={cast.id}>
                                <Link href={`/podcasts/${parseInt(cast.id)}`}><CastCardMini podcast={cast} /></Link>
                            </li>
                        </>
                    )

                })}
            </ul>
        </div>
    </>
    )
  }

  export async function generateStaticParams() {
    const users = await fetch("http://localhost:3004/users").then((res) => res.json())
    //console.log(casts);
    return users.map((user) =>  {
        return {
            user_id : user.id,
        }
    })
  }