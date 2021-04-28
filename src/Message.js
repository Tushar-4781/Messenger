import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './Message.css'
const Message = forwardRef(({username,message}, ref) => {
    // forwardRef => for tracking the message -- wrapping what we already had by referencing through key  
    const checkUser = message.username===username;

    return (
        <div ref={ref} className={`message ${checkUser && `message_user`}`}>
            <Card className={checkUser ? "message_userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2">
                        
                        {!checkUser && `${message.username || "Unknown User"} :`} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
