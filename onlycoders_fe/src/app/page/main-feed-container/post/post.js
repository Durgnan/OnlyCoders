'use client'

import React from "react"
import { AccountCircle, CheckCircle } from '@mui/icons-material'

const PostComponent = (props) => {

    const {displayImage, displayName, isVerified, isProMember, statusTitle, statusTime, postText, postImage, likesCount, commentsCount, shareCount } = props

    return(
        <div className="p-8">
            <div className="d-flex flex-row">
                <AccountCircle fontSize="large"></AccountCircle>
                <div className="m-l-4">
                    <div className="font-size-14">
                        <b>{displayName+" "}</b> 
                        {isVerified && <CheckCircle className="font-size-14 m-l-4 m-r-4" color="primary" fontSize="small"></CheckCircle>}
                        {isProMember && <span className={`badge rounded-pill bg-pill m-r-4 ${isVerified?"":"m-l-4"}`}>Pro Member</span>}
                        <span dangerouslySetInnerHTML={{__html:statusTitle}}></span>
                    </div>
                    <div className="font-size-10 ">{statusTime}</div>
                </div>
            </div>
            <div className="d-flex flex-column">
                {postText && <div className="p-t-8 p-b-8 font-size-12">{postText}</div>}
                {(postImage && postImage!="") && <img src={postImage} className="m-b-4"></img>}
            </div>
            <div className="p-t-4 d-flex flex-row border-top-grey justify-space-between font-size-10">
                <div>
                &#10084; {" "+likesCount} 
                </div>
                <div className="d-flex flex-row">
                    <div>{commentsCount} Comments</div>
                    <div className="m-l-4">{shareCount} Shares</div>
                </div>
            </div>

        </div>
    )

}

export default PostComponent;