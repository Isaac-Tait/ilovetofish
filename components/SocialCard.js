import Link from 'next/link'
import Image from 'next/image'

export default function SocialCard({ url, image, slug, title }) {
  return (
    <div className="columns-2">
      <Link href={url} legacyBehavior>
        <a target="_blank" className="">
          <Image src={image} alt={title} className="h-32 w-32 rounded-xl object-cover shadow-xl" />
        </a>
      </Link>
    </div>
  )
}
