import React from "react";
import MUIDataTable from "mui-datatables";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";

function CoursesTable(props) {
    const { courses } = props;
    const { allCourses } = courses;

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
                filter: true,
                sort: true,
            },
        },
    ];

    // const data = [
    //     { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    //     { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    //     { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    //     { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    // ];

    const options = {
        filterType: "checkbox",
    };
    return (
        <MUIDataTable
            title={"Courses List"}
            data={allCourses}
            columns={columns}
            options={options}
        />
    );
}
const mapStateToProps = state => {
    const { courses } = state;
    return {
        courses,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesTable);
