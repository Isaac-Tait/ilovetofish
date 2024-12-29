import Link from 'next/link'
import Image from 'next/image'

export default function SocialCard({ url, image, slug, title }) {
  return (
    <div className="">
      <Link href={url} target="_blank" className="cursor-pointer">
        <Image src={image} alt={title} width={100} height={100} className="h-32 w-32 p-1" />
      </Link>
      <p className="mx-auto mb-1 w-fit rounded-md bg-neutral-200 p-1 text-center text-xs italic">
        {slug}
      </p>
    </div>
  )
}
