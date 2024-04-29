import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='mx-auto max-w-lg'>
      <h1 className="text-3xl"> Podcasting App Landing page!</h1>
      <div><Link href="/podcasts">Podcasts</Link></div>
    </div>
  );
}
