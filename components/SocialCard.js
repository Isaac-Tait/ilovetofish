import Link from 'next/link'

export default function SocialCard({ url, image, slug, title }) {
  return (
    <div className="columns-2">
      <Link href={url} legacyBehavior>
        <a target="_blank" className="">
          <img src={image} alt={title} className="h-32 w-32 rounded-xl object-cover shadow-xl" />
        </a>
      </Link>
    </div>
  )
}
