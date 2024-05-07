import Link from "next/link";
import CastCard from "./cast_card";

import "./podcast_list.css";
async function getData() {
	const res = await fetch("http://localhost:3004/podcasts", {
		next: { revalidate: 30 },
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data!");
	}
	return res.json();
}

export default async function PodcastList() {
	const data = await getData();
	return (
		<>
			<h1 className="text-3xl p-4"> List of Podcasts</h1>
			<div className="card-container mx-auto grid grid-cols-4 gap-3">
				{data.map((cast) => {
					return (
						<Link href={`/podcasts/${cast.id}`} key={cast.id}>
							<CastCard key={cast.id} podcast={cast} />
						</Link>
					);
				})}
			</div>
		</>
	);
}
