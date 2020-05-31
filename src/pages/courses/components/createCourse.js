import React, { useEffect, useState } from "react";
import FormItem from "../../../components/formItem/formItem";
import { validateComment, validateName } from "../../../utils/validations";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { validationMessages } from "../../../utils/constants";

const { courseText, descriptionText } = validationMessages;

export default function CreateCourse({
    course,
    description,
    getCourseTitle,
    getCourseDesc,
    isCourseTitleValid,
    isCourseDescriptionValid,
    showCourseNameValidText,
    showCourseDescriptionValidText,
}) {
    // const [course, setCourse] = useState("");
    // const [description, setDescription] = useState("");
    // const [showDescriptionValidText, setShowDescriptionValidText] = useState(
    //     false
    // );
    // const [showCourseValidText, setShowCourseValidText] = useState(false);
    // const [isDescriptionValid, setIsDescriptionValid] = useState(false);
    // const [isCourseValid, setIsCourseValid] = useState(false);

    return (
        <>
            <FormItem
                type="text"
                required={true}
                getInputValue={getCourseTitle}
                icon={<LocalOfferIcon />}
                inputValue={course}
                isValueValid={isCourseTitleValid}
                label="Title"
                placeholder="Course name"
                showValidationText={showCourseNameValidText}
                validateInputField={validateName}
                validationText={courseText}
            />
            <FormItem
                type="text"
                required={true}
                getInputValue={getCourseDesc}
                icon={<LocalOfferIcon />}
                inputValue={description}
                isValueValid={isCourseDescriptionValid}
                label="Description"
                placeholder="Description"
                showValidationText={showCourseDescriptionValidText}
                validateInputField={validateComment}
                validationText={descriptionText}
            />
        </>
    );
}
