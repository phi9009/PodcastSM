async function getData(id){
    const res = await fetch(`http://localhost:3004/podcasts/${id}`, { next: { revalidate: 30 } })
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function Page({ params }) {
    const cast = await getData(params.podcast_id);
    console.log(cast)
    console.log(params);


    // honestly these need to be populated before the data is sent back to us but I'm using a Node module to fake an API rn so
    // I can feel out what's gonna be needed before I commit to any backend descisions. 


    return (
    <>
    <h1>{cast.title}</h1>
    <div>{cast.description}</div> 
    <h3>Episodes</h3>
    <div>
        <ul>
            {cast.episodes.map((ep) => {
                return (
                    <li>
                        <h4>{ep}</h4>
                        <div>
                            episode description lorem
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
    </>
    )
  }

  export async function generateStaticParams() {
    const casts = await fetch("http://localhost:3004/podcasts").then((res) => res.json())
    console.log(casts);
    return casts.map((cast) =>  {
        return {
            podcast_id : cast.id,
        }
    })
  }