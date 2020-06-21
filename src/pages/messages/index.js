import React, { useState } from "react";
import classes from "./messages.module.scss";
import MessagesList from "./components/messageList";
import FormItem from "../../components/formItem/formItem";
import StyledButton from "../../components/styledButton/styledButton";
import { validateComment } from "../../utils/validations";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { connect } from "react-redux";
import { createMessageThunk } from "../../redux/thunks";
import queryString from "query-string";

function Messages(props) {
    const {
        onMessageSend,
        messages,
        userId,
        gettingMessagesByRoomId,
        messagesByRoomId,
    } = props;
    const { roomId } = queryString.parse(props?.history?.location?.search);
    const [message, setMessage] = useState("");
    const [isMsgValueValid, setIsMsgValueValid] = useState("");

    const handleMessage = message => setMessage(message);

    const handleEnterPress = e => {
        if (e && e.charCode && e.charCode === 13) {
            sendMessage();
        }
    };

    const isMsgValid = v => {
        setIsMsgValueValid(v);
    };

    const sendMessage = () => {
        if (message && isMsgValueValid) {
            const data = {
                roomId,
                message,
                userId,
            };
            onMessageSend(data);
            setMessage("");
        }
    };

    return (
        <div className={classes.messageSect}>
            <MessagesList
                messages={messagesByRoomId}
                roomId={roomId}
                userId={userId}
            />
            <div className={classes.sendingMsgActionsWrapper}>
                <FormItem
                    handleKeyPress={handleEnterPress}
                    fullWidth
                    required={true}
                    type="text"
                    inputValue={message}
                    placeholder="Type a new message"
                    getInputValue={handleMessage}
                    validateInputField={validateComment}
                    isValueValid={isMsgValid}
                    icon={<MailOutlineIcon />}
                />
                <StyledButton handleBtnClick={sendMessage}>Send</StyledButton>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    const { messages, auth } = state;
    const { authData } = auth;
    const { userId } = authData;
    const { gettingMessagesByRoomId, messagesByRoomId } = messages;
    return {
        messages,
        userId,
        gettingMessagesByRoomId,
        messagesByRoomId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onMessageSend: message => dispatch(createMessageThunk(message)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(Messages));
