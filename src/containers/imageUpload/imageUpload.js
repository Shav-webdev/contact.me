import React, { useState } from "react";
import ModalDialog from "../../components/modal/modal";
import Dropzone from "../../components/imageDropzone/dropzone";
import { uploadUserAvatarThunk } from "../../redux/thunks";
import { connect } from "react-redux";

function ImageUpload(props) {
    const { userId, uploadImg } = props;

    const [img, setImg] = useState(null);

    const handleAccept = avatar => {
        setImg(avatar);
    };

    const handleUpdateAvatar = () => {
        uploadImg(userId, img);
    };

    return (
        <ModalDialog
            cancelBtnText="Cancel"
            content={<Dropzone handleAccept={handleAccept} />}
            okBtnText="Upload"
            openBtnText="Change avatar"
            title="Change profile image"
            okBtnClick={handleUpdateAvatar}
        />
    );
}

const mapStateToProps = state => {
    const { users } = state;
    const { userData } = users;
    const { _id: userId } = userData;
    return {
        userId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        uploadImg: (id, img) => dispatch(uploadUserAvatarThunk(id, img)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
