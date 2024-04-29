import Link from 'next/link'


async function getData(id){
    const res = await fetch(`http://localhost:3004/users/${id}`, { next: { revalidate: 30 } })
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function Page({ params }) {
    const user = await getData(params.user_id);
    


    // honestly these need to be populated before the data is sent back to us but I'm using a Node module to fake an API rn so
    // I can feel out what's gonna be needed before I commit to any backend descisions. 


    return (
    <>
        <div className='mx-auto max-w-lg'>
            <h1 className='text-3xl'>{user.username}</h1>
            <h2>Series</h2>
            <ul>
                {user.podcasts.map((cast) => {
                    return(
                        <>
                            <li>
                                <Link href={`/podcasts/${cast}`}>{cast}</Link>
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