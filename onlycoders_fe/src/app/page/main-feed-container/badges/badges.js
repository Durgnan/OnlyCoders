'use client'

import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle,  } from 'reactstrap'
import { VerifiedOutlined } from '@mui/icons-material'

const BadgesComponent = (props) => {

    const badgesList = [
        { icon:"warning",title:"Globe Trotter", description: "Has joined at least 10 different groups" },
        { icon:"warning",title:"Globe Trotter", description: "Has joined at least 10 different groups" },
        { icon:"warning",title:"Globe Trotter", description: "Has joined at least 10 different groups" }
    ]

    return (
        <div className="badges-card-container">
            <div className="font-bold">Badges</div>
            <div className="badges-card-list">
                { badgesList.map((item,index)=>{
                    const {icon,title,description} = item
                    return (
                        <Card key={index} className="m-t-8 d-flex flex-row align-center badge-card">
                            <VerifiedOutlined className="m-l-8"></VerifiedOutlined>
                            <CardBody className="p-8">
                                <CardTitle className="font-size-10">
                                    {title}
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

export default BadgesComponent;