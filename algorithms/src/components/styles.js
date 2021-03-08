import React, {useContext} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { PostsContext } from '../contexts/PostsContext'

const CardExampleImageCard = ( {post} ) => {
    const { removePost } = useContext(PostsContext);
    return(
            <li>
                 <div className="ui card">
                        <div className="image">
                            <img src="/images/avatar/large/daniel.jpg"/>
                            </div>
                        <div class="content">
                            <div class="header">{post.title}</div>
                            <div class="meta">Joined in 2016</div>
                            <div class="description"> {post.content} </div>
                        </div>
                        <div class="extra content">
                            <a><i aria-hidden="true" class="user icon"></i>By: {post.author}</a>
                            <button className="ui button" onClick={()=>removePost(post.id)}>Remove</button>

                        </div>
                    </div>
                    
                
            </li>
           
    )
  
    }

export default CardExampleImageCard