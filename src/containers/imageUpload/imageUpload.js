import React, { useState } from "react";
import ModalDialog from "../../components/modal/modal";
import Dropzone from "../../components/imageDropzone/dropzone";
import { uploadUserAvatarThunk } from "../../redux/thunks";
import { connect } from "react-redux";

function ImageUpload(props) {
    const { userId, uploadImg, t } = props;

    const [img, setImg] = useState(null);

    const handleAccept = avatar => {
        setImg(avatar);
    };

    const handleUpdateAvatar = () => {
        uploadImg(userId, img);
    };

    return (
        <ModalDialog
            cancelBtnText={t("Cancel")}
            content={<Dropzone t={t} handleAccept={handleAccept} />}
            okBtnText={t("Upload")}
            openBtnText={t("Change avatar")}
            title={t("Change profile image")}
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
