import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FinderResults from './FinderResults';
import SubjectPicker from './SubjectPicker';
<<<<<<< HEAD
=======
import Transition from 'react-transition-group/Transition';
import './CourseFinder.css';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
};
>>>>>>> prettified course finder

const subjects = [
    {
        name: "Administration",
        code: "ADM"
    },
    {
        name: "Arabic Language and Culture",
        code: "ARB"
    },
    {
        name: "Biomedical Engineering",
        code: "BMG"
    },
    {
        name: "Chemical Engineering",
        code: "CHG"
    },
    {
        name: "Civil Engineering",
        code: "CVG"
    },
    {
        name: "Communications",
        code: "COM"
    },
    {
        name: "Computer Engineering",
        code: "CEG"
    },
    {
        name: "Computer Science",
        code: "CSI"
    },
    {
        name: "Economics",
        code: "ECO"
    },
    {
        name: "Electrical Engineering",
        code: "ELG"
    },
    {
        name: "Science",
        code: "SCI"
    },
    {
        name: "Geology",
        code: "GEO"
    },
    {
        name: "Film Studies",
        code: "CIN"
    },
    {
        name: "Geology",
        code: "GEO"
    },
    {
        name: "Human Kinetics",
        code: "APA"
    },
    {
        name: "Management",
        code: "ADM"
    },
    {
        name: "Physics",
        code: "PHY"
    },
    {
        name: "Software Engineering",
        code: "SEG"
    }
];
        const semesters = [
            "Any term",
            "Summer 2017",
            "Fall 2017",
            "Winter 2018"
        ];
        const years = [
            "Any year",
            "First year",
            "Second year",
            "Third year",
            "Fourth year"
        ];

        const semesterItems = semesters.map((semester, index) => (
            <MenuItem value={semester} key={index} primaryText={semester}  />
        ));

        const yearItems = years.map((year, index) => (
            <MenuItem value={year} key={index} primaryText={year}  />
        ));

export default class CourseFinder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            subjectValue: "Pick a subject",
            semesterValue: "Choose the term",
            yearValue: "Any"
=======
            semesterValue: "Any term",
            yearValue: "Any year",
            searchActive: false
>>>>>>> prettified course finder
        };
    }

    onValidationChange = (val) => this.setState({
        validation: val
    })

    handleSubjectChange = (event, index, subjectValue) => this.setState({subjectValue});
    handleSemesterChange = (event, index, semesterValue) => this.setState({semesterValue});
    handleYearChange = (event, index, yearValue) => this.setState({yearValue});
    //handleSearch

    render() {
        return (
            <div style={{padding: "0 68px", }}>
                <div style={{}}>
                <SubjectPicker onValidationChange={this.onValidationChange} subjects={subjects}></SubjectPicker>
                    <div>
                        <DropDownMenu style={{marginLeft: "-24px"}} maxHeight={300} value={this.state.semesterValue} onChange={this.handleSemesterChange}>
                            {semesterItems}
                        </DropDownMenu>
                        <DropDownMenu maxHeight={300} value={this.state.yearValue} onChange={this.handleYearChange}>
                            {yearItems}
                        </DropDownMenu>
                    </div>
                <RaisedButton className="searchButton" label="Search" primary={true} onTouchTap={this.handleSearch}/>
                </div>
                <Transition in={this.state.searchActive} timeout={duration}>
                    {(state) => (
                        <div 
                            course={this.state.selectedCourse}
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state],
                                marginTop: "1em"
                            }}>
                            {this.state.searchActive ? <FinderResults style={{}}/> : null}
                        </div>
                    )}
                </Transition>
            </div>
        );
    }
}