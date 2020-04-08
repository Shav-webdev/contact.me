import React from "react";
import notFoundPic from "../../assets/images/404.png";
import StyledButton from "../../components/styledButton/styledButton";
import history from "../../routes/history";

export default function PageNotFound() {
    const handleBackBtnClick = () => {
        history.push("/");
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <img src={notFoundPic} alt="Page not found" />
            <StyledButton
                handleBtnClick={handleBackBtnClick}
                btnClassName="btnAccentBlue"
            >
                Home
            </StyledButton>
        </div>
    );
}
