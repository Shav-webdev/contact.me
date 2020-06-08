import React from "react";
import MUIDataTable from "mui-datatables";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import moment from "moment";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

function CoursesTable({ courses }) {
    const getMuiTheme = () =>
        createMuiTheme({
            overrides: {
                MUIDataTableBodyCell: {
                    root: {
                        backgroundColor: "#FF0000",
                    },
                },
            },
        });

    const columns = [
        {
            name: "title",
            label: "Course",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "description",
            label: "Description",
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: "status",
            label: "Status",
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: "rate",
            label: "Rating",
            options: {
                filter: false,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => (
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating name="read-only" value={value} readOnly />
                    </Box>
                ),
            },
        },
        {
            name: "createdTime",
            label: "Created at",
            options: {
                customBodyRender: value => (
                    <span>{moment(value).format("LLL")}</span>
                ),
            },
        },
    ];

    const options = {
        filterType: "dropdown",
        // 'checkbox', 'dropdown', 'multiselect', 'textField', 'custom'
    };
    return (
        <div style={{ padding: "2rem 5rem" }}>
            <MuiThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={"Courses List"}
                    data={courses}
                    columns={columns}
                    options={options}
                />
            </MuiThemeProvider>
        </div>
    );
}

export default React.memo(CoursesTable);
