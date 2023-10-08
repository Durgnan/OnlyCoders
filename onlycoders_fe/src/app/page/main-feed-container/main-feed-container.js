'use client'

import React from 'react';

import BadgesComponent from './badges/badges';
import GroupsComponent from './groups/groups';
import NewMembersComponent from './new-members/new-members';
import QuestsComponent from './quests/quests';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import PostComponent from './post/post';

const MainFeedContainer = (props) => {

    const postsList = [
        {
            displayImage: "/source/to/url", 
            displayName: "Durgesh Nandan", 
            isVerified: true, 
            isProMember: true, 
            statusTitle: "replied to the topic <b>Welcome to the Cosplayers Group Forum!</b> in the forum <b>Cosplayers Group Forum</b>", 
            statusTime: "1 year ago", 
            postText: "Hello Everyone!", 
            postImage: "", 
            likesCount: 5, 
            commentsCount: 2, 
            shareCount: 3
        },
        {
            displayImage: "/source/to/url", 
            displayName: "Durgesh Nandan", 
            isVerified: false, 
            isProMember: true, 
            statusTitle: "replied to the topic <b>Welcome to the Cosplayers Group Forum!</b> in the forum <b>Cosplayers Group Forum</b>", 
            statusTime: "1 year ago", 
            postText: "Hello Everyone!", 
            postImage: "/demo1.jpeg", 
            likesCount: 5, 
            commentsCount: 2, 
            shareCount: 3
        },
        {
            displayImage: "/source/to/url", 
            displayName: "Durgesh Nandan", 
            isVerified: true, 
            isProMember: false, 
            statusTitle: "replied to the topic <b>Welcome to the Cosplayers Group Forum!</b> in the forum <b>Cosplayers Group Forum</b>", 
            statusTime: "1 year ago", 
            postText: "Hello Everyone!", 
            postImage: "/demo2.jpeg", 
            likesCount: 5, 
            commentsCount: 2, 
            shareCount: 3
        },
        {
            displayImage: "/source/to/url", 
            displayName: "Durgesh Nandan", 
            isVerified: true, 
            isProMember: true, 
            statusTitle: "replied to the topic <b>Welcome to the Cosplayers Group Forum!</b> in the forum <b>Cosplayers Group Forum</b>", 
            statusTime: "1 year ago", 
            postText: "Hello Everyone!", 
            postImage: "/demo3.jpeg", 
            likesCount: 5, 
            commentsCount: 2, 
            shareCount: 3
        },
        {
            displayImage: "/source/to/url", 
            displayName: "Durgesh Nandan", 
            isVerified: true, 
            isProMember: true, 
            statusTitle: "replied to the topic <b>Welcome to the Cosplayers Group Forum!</b> in the forum <b>Cosplayers Group Forum</b>", 
            statusTime: "1 year ago", 
            postText: "Hello Everyone!", 
            postImage: "/demo4.jpeg", 
            likesCount: 5, 
            commentsCount: 2, 
            shareCount: 3
        }
    ]
    
    return(
        <div className='container-main-feed'>
            <img src='/MainFeedBanner.png' className='jtron-main-feed'></img>
            <div className='d-flex flex-row m-t-100'>
                <div>
                    <div className='w-200 h-396 m-t-20 bg-plain-white bor-rad-8'>
                        <NewMembersComponent></NewMembersComponent>
                    </div>
                    <div className='w-200 h-250 m-t-16 bor-rad-8 bg-plain-white'>
                        <QuestsComponent></QuestsComponent>
                    </div>
                </div>
                <div className='m-l-16 m-r-16 h-682'>
                    <div className='main-feed-filter w-368 h-80 m-t-20 bg-plain-white bor-rad-8 d-flex flex-row'>
                        <div className='font-bold main-feed-filter-heading'>All Updates</div>
                        <div>
                            <FormControl>
                                <InputLabel className='bg-plain-white'>
                                    Show
                                </InputLabel>
                                <Select value={0} className='h-36'>
                                    <MenuItem value={0}>Everything</MenuItem>
                                    <MenuItem value={1}>Latest</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='m-t-16 main-feed-container'>
                        {
                            postsList.map((item,index) => {
                                const {displayImage, displayName, isVerified, isProMember, statusTitle, statusTime, postText, postImage, likesCount, commentsCount, shareCount} = item
                                return(
                                    <div className='w-368 m-b-20 bg-plain-white bor-rad-8' key={index} >
                                        <PostComponent
                                            displayImage={displayImage}
                                            displayName={displayName}
                                            isVerified={isVerified}
                                            isProMember={isProMember}
                                            statusTitle={statusTitle}
                                            statusTime={statusTime}
                                            postText={postText}
                                            postImage={postImage}
                                            likesCount={likesCount}
                                            commentsCount={commentsCount}
                                            shareCount={shareCount}>
                                        </PostComponent>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div>
                    <div className='w-200 h-396 m-t-20 bg-plain-white bor-rad-8'>
                        <GroupsComponent></GroupsComponent>
                    </div>
                    <div className='w-200 h-250 m-t-16 bor-rad-8 bg-plain-white'>
                        <BadgesComponent></BadgesComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFeedContainer;

