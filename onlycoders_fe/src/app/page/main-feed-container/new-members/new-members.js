'use client'

import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle,  } from 'reactstrap'
import { HexagonTwoTone, CheckCircle } from '@mui/icons-material'

const NewMembersComponent = (props) => {

    const newMembersList = [
        { icon:"warning",title:"Sandra Strange", description: "@sanstrange", isVerified: true },
        { icon:"warning",title:"Rosie Sakura", description: "@sakurara", isVerified: false },
        { icon:"warning",title:"Damian Greyson", description: "@dgreyson", isVerified: false },
        { icon:"warning",title:"The Green Goa", description: "@greengoa", isVerified: true },
        { icon:"warning",title:"Bearded Wonder", description: "@brdwonder", isVerified: false },
        { icon:"warning",title:"Evil Bratt", description: "@evilbratt", isVerified: true },
        { icon:"warning",title:"Esoteric Ed", description: "@esoteric_ed", isVerified: false }
    ]

    return (
        <div className="new-member-card-container">
            <div className="font-bold">Newest Members</div>
            <div className="new-member-card-list">
                { newMembersList.map((item,index)=>{
                    const {icon,title,description, isVerified} = item
                    return (
                        <Card key={index} className="m-t-8 d-flex flex-row align-center new-member-card">
                            <HexagonTwoTone className="m-l-8"></HexagonTwoTone>
                            <CardBody className="pad-6">
                                <CardTitle className="font-size-10">
                                    {title}{isVerified && <CheckCircle className="font-size-14 m-l-4" color="primary" fontSize="small"></CheckCircle>}
                                </CardTitle>
                                <CardText className="font-size-8 color-basic-grey">
                                    {description}
                                </CardText>
                            </CardBody>
                        </Card>

                    );
                }) }
            </div>
        </div>
    )

}

export default NewMembersComponent;