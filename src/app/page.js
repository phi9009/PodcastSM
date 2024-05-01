import Image from "next/image";
import Link from "next/link";
import Jumbo from "./jumbo";

export default function Home() {
  return (
    <div className='mx-auto items-center flex flex-col'>
      <Jumbo text = "Speakr"/>
      <div className="subtitle text-3xl my-10">Stupid,catchy drivel goes here</div>
      <div><Link href="/podcasts">Podcasts</Link></div>
    </div>
  );
}
