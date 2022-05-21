import {DiscussionEmbed} from "disqus-react"

const DisqusComments = () => {    
    return (
      <div>
       <DiscussionEmbed
            shortname="iloveto-fish"
            config={{
                url: 'https://iloveto.fish',
                identifier: '123',
                title: 'Spring Finesse Fishing'
            }}
        />
      </div>
    )
  } 
  
  export default DisqusComments;