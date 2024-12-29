import Link from 'next/link'
import Image from 'next/image'

export default function SocialCard({ url, image, slug, title }) {
  return (
    <div className="">
      <Link href={url} legacyBehavior>
        <Image src={image} alt={title} width={100} height={100} className="h-32 w-32" />
      </Link>
      <p className="w-full text-wrap bg-neutral-200">{slug}</p>
    </div>
  )
}
