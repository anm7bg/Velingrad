import { ImageResponse } from 'next/og'
 
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://.../${params.slug}`).then((res) =>
    // const post = await fetch(`https://.../posts/${params.slug}`).then((res) =>
    res.json(),
//   console.log("post.title", params.)
//   console.log(post.title)
)


  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {post.title}
      </div>
    ),
    {
      ...size,
    }
  )
}