'use client'

import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle,  } from 'reactstrap'
import { HexagonTwoTone, PublicOutlined, LockOutlined } from '@mui/icons-material'

const GroupsComponent = (props) => {

    const groupsList = [
        { icon:"warning",title:"Street Artists", description: "4 members", isClosedGroup: false },
        { icon:"warning",title:"Cosplayers of the World", description: "3 members", isClosedGroup: false },
        { icon:"warning",title:"Stream Designers", description: "3 members", isClosedGroup: false },
        { icon:"warning",title:"Gaming Watchtower", description: "3 members", isClosedGroup: true },
        { icon:"warning",title:"Living in Japan", description: "2 members", isClosedGroup: false },
        { icon:"warning",title:"Gaming Watchtower", description: "3 members", isClosedGroup: true },
        { icon:"warning",title:"Living in Japan", description: "2 members", isClosedGroup: false }
    ]

    return (
        <div className="groups-card-container">
            <div className="font-bold">Popular Groups</div>
            <div className="groups-card-list">
                { groupsList.map((item,index)=>{
                    const {icon,title,description, isClosedGroup} = item
                    return (
                        <Card key={index} className="m-t-8 d-flex flex-row align-center group-card">
                            <HexagonTwoTone className="m-l-8"></HexagonTwoTone>
                            <CardBody className="pad-6">
                                <CardTitle className="font-size-10">
                                    {title}
                                </CardTitle>
                                <CardText className="font-size-8 color-basic-grey">
                                    {description}
                                </CardText>
                            </CardBody>
                            {
                                isClosedGroup ? <LockOutlined className="m-r-8" color="disabled"></LockOutlined> : <PublicOutlined className="m-r-8" color="disabled"></PublicOutlined>
                            }
                        </Card>

                    );
                }) }
            </div>
        </div>
    )

}

export default GroupsComponent;