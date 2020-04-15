import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone(props) {
    const { handleAccept } = props;
    const onDropAccepted = useCallback(acceptedFiles => {
        const img = acceptedFiles[0];
        handleAccept(img);
    }, []);

    const {
        acceptedFiles,
        rejectedFiles,
        getRootProps,
        getInputProps,
    } = useDropzone({
        accept: "image/jpeg, image/png",
        multiple: false,
        maxSize: 5 * 1000000,
        onDropAccepted,
    });

    const acceptedFilesItems = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {(file.size / 1000).toFixed(1)} kb
        </li>
    ));

    const rejectedFilesItems = rejectedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <em>(Only *.jpeg and *.png images will be accepted)</em>
            </div>
            <aside>
                <h4>Accepted files</h4>
                <ul>{acceptedFilesItems}</ul>
                <h4>Rejected files</h4>
                <ul>{rejectedFilesItems}</ul>
            </aside>
        </section>
    );
}
