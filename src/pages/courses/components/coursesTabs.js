import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import CoursesTable from "./coursesTable";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import {
    getAllCoursesThunk,
    getUserAllCoursesThunk,
} from "../../../redux/thunks";
import classes from "./courses.module.css";

const StyledTabs = withStyles({
    indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        "& > div": {
            maxWidth: 40,
            width: "100%",
            backgroundColor: "#635ee7",
        },
    },
})(props => (
    <Tabs
        className={classes.tabsWrapper}
        style={{ display: "flex", justifyContent: "center" }}
        {...props}
        TabIndicatorProps={{ children: <div /> }}
    />
));

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: "none",
        color: "#fff",
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        "&:focus": {
            opacity: 1,
        },
    },
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    padding: {
        padding: theme.spacing(3),
    },
    demo: {
        backgroundColor: "#2e1534",
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function CoursesTabs({
    allCourses,
    userCourses,
    userId,
    getUserCourses,
    getAllCourses,
}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        getUserCourses(userId);
    }, [getUserCourses, userId]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
            getUserCourses(userId);
        } else if (newValue === 1) {
            getAllCourses();
        }
    };

    return (
        <div className={classes.demo}>
            <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="styled tabs example"
            >
                <StyledTab label="My courses" {...a11yProps(0)} />
                <StyledTab label="All" {...a11yProps(1)} />
                {/*<StyledTab label="Active" {...a11yProps(2)} />*/}
            </StyledTabs>
            <TabPanel value={value} index={0}>
                <CoursesTable courses={userCourses} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CoursesTable courses={allCourses} />
            </TabPanel>
            {/*TODO create get active courses*/}
            {/*<TabPanel value={value} index={2}>*/}
            {/*    <CoursesTable courses={} />*/}
            {/*</TabPanel>*/}
        </div>
    );
}

const mapStateToProps = state => {
    const { courses, auth } = state;
    const { allCourses, userCourses } = courses;
    const { authData } = auth;
    const { userId } = authData;
    return {
        allCourses,
        userCourses,
        userId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserCourses: id => dispatch(getUserAllCoursesThunk(id)),
        getAllCourses: () => dispatch(getAllCoursesThunk()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(CoursesTabs));
