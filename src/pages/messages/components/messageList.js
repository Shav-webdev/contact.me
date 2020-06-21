import React, { useEffect } from "react";
import classes from "../messages.module.scss";

function MessagesList({ userId, messages, roomId }) {
    return (
        <div className={classes.messagesList}>
            {messages &&
                messages[roomId] &&
                messages[roomId].length > 0 &&
                messages[roomId].map(message => {
                    if (userId === message.author) {
                        return (
                            <div
                                key={message._id}
                                className={classes.providerUser}
                            >
                                {message.message}
                            </div>
                        );
                    } else {
                        return (
                            <div
                                key={message._id}
                                className={classes.subscriberUser}
                            >
                                {message.message}
                            </div>
                        );
                    }
                })}
        </div>
    );
}

export default React.memo(MessagesList);
