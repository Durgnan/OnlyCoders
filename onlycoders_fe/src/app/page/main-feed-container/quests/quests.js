'use client'

import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle,  } from 'reactstrap'
import { ReportOutlined } from '@mui/icons-material'

const QuestsComponent = (props) => {

    const questList = [
        { icon:"warning",title:"Posting Machine", description: "Posted more than 20 profile activities in one day" },
        { icon:"warning",title:"Posting Machine", description: "Posted more than 20 profile activities in one day" },
        { icon:"warning",title:"Posting Machine", description: "Posted more than 20 profile activities in one day" }
    ]

    return (
        <div className="quests-card-container">
            <div className="font-bold">Quests</div>
            <div className="quests-card-list">
                { questList.map((item,index)=>{
                    const {icon,title,description} = item
                    return (
                        <Card key={index} className="m-t-8 d-flex flex-row align-center quest-card">
                            <ReportOutlined className="m-l-8"></ReportOutlined>
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

export default QuestsComponent;