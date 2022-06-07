import {DiscussionEmbed} from "disqus-react"

const Comment = ({ slug, title }) => {    
    return (
      <div>
        <DiscussionEmbed
            shortname="iloveto-fish"
            config={{
                url: `https://iloveto.fish/${slug}`,
                identifier: '123',
                title,
            }}
        />
      </div>
    )
  } 
  
  export default Comment;