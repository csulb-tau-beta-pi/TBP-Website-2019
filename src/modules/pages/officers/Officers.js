import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import OfficerCard from "./OfficerCard";

class Officers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Enter Officer Information here
      officer: [
        {
          imgSource: require("../../../assets/images/officers/harrisonfrank.jpg"),
          name: "Harrison Frank",
          position: "President",
          major: "Aerospace Engineering",
          bio:
            "My love for flight began when I was just 12 years old. I knew I wanted to be a pilot, but I didn't quite know how to get there; nor did I know exactly how to pay for it. Since then I have become an Eagle Scout, an Air Force Officer candidate with a pilot slot, an engineer, and a member of Tau Beta Pi. I have interned at Northrop Grumman for the past two years and have worked on projects like the James Webb Space Telescope, the F-35 Joint Strike Fighter, and the F-18 Super Hornet. My passion for aerospace and engineering has already opened up so many opportunities and as far as I'm concerned, this is only the beginning. ",
          email: "president.csulbtbp@gmail.com"
        },
        {
          imgSource: require("../../../assets/images/officers/chrissam.jpg"),
          name: "Christopher Sam",
          position: "External Vice-President",
          major: "Electrical & Biomedical Engineering",
          bio:
            "Hi my name is Chris and I'm a senior majoring in electrical and biomedical engineering. Over the summer ive had the opportunity to intern at Raytheon where I was helping out engineers in a redesign effort through analysis of FPGA simulations via VHDL. Currently I am doing research in the science department using ground penetrating radars to map seawater concentrations with UAVs.",
          email: "vicepresidentexternal.csulbtbp@gmail.com"
        },
        {
          imgSource: require("../../../assets/images/officers/nikkinguyen.jpg"),
          name: "Nikki Nguyen",
          position: "Internal Vice-President",
          major: "Computer Science",
          bio:
            "I am a 4th year with the intent of going to graduate school. Currently I am working under Dr. Stout in biomedical engineering which deals with live cell culturing and machine learning.I am also an EXCEL Peer Mentor under the College of Engineering to help guide freshmen, with that I also tutor in various computer science related courses on campus.",
          email: "vicepresidentinternal.csulbtbp@gmail.com"
        },
        {
          imgSource: require("../../../assets/images/officers/anthonytruong.jpg"),
          name: "Anthony Truong",
          position: "Corresponding Secretary",
          major: "Aerospace Engineering",
          bio:
            "Hello, I'm Anthony and I'm currently a senior. I've had a summer internship at Rima Enterprises where I created parts for post printing machines. Which are machines that stacked papers and conveyor belts that moved paper, and also helped in the repair of a piston which was broken in machines. I took a tennis course last semester so if you're down to play let me know.",
          email: "corresponding.secretary.csulbtbp@gmail.com"
        },
        {
          imgSource: require("../../../assets/images/officers/matthewchu.jpg"),
          name: "Mathew Chu",
          position: "Webmaster",
          major: "Computer Science",
          bio:
            "Hi, I'm Matt and I’m a 4th year computer science student looking to become a software engineer after graduating. I’m currently working at Fullerton College in the networking department and I’ll be transferring to the software development department in the winter. I'm always alone during my office hours so drop by and soothe my solitude.",
          email: "webmaster.csulbtbp@gmail.com"
        },
        {
          imgSource: require("../../../assets/images/officers/ryanvalera.jpg"),
          name: "Ryan Valera",
          position: "Shadow President",
          major: "Mechanical Engineering",
          bio:
            "Hello, I’m Ryan Valera and a 3rd year Mechanical Engineering major. My interest for engineering began at a young age helping my dad work on his 1971 MG MGB roadster being fascinated with how all the components worked. Outside of TBP, I work as event staff for The Perfect Event, Inc., was formerly Vice President of Zeta Beta Tau fraternity, and enjoy weightlifting, reading, and golf. I’ve been fortunate enough to be inducted to Tau Beta Pi and hope to embark on greater opportunities within the field of engineering.",
          email: "president.csulbtbp@gmail.com"
        },
        {
          imgSource: require("../../../assets/images/officers/jeffreynguyen.jpg"),
          name: "Jeffrey Nguyen",
          position: "Shadow External Vice-President",
          major: "Biomedical Engineering",
          bio:
            "Hi, I am currently a third year working under Dr. Perla Ayala in her Tissue Engineering lab where we integrate biomaterials and muscle cell lines to create implantable scaffolds for muscle tissue regeneration. I have also tutored and taught piano at an academy for beginner-intermediate level students to train sight-singing and reading. Other than that, I like to sound-produce, edit videos, and play video games in my free time!",
          email: "vicepresidentexternal.csulbtbp@gmail.com"
        },
        {
          imgSource: require("../../../assets/images/officers/madisonkane.jpg"),
          name: "Madison Kane",
          position: "Shadow Treasurer",
          major: "Biomedical Engineering",
          bio:
            "Hello, I’m Madison and I'm a 3rd year biomedical engineering student. My goal is to attend graduate school and obtain my Ph.D. in biomedical engineering, focusing on tissue engineering research. I am a member of the BUILD research program and currently work under Dr. Ayala in her regenerative medicine laboratory.",
          email: "treasurer.csulbtbp@gmail.com"
        },
        {
          imgSource: require("../../../assets/images/officers/ericdo.jpg"),
          name: "Eric Do",
          position: "Shadow Webmaster",
          major: "Computer Science",
          bio:
            "Greetings, visitor. I'm Eric Do and I am a 4th year computer science student looking to become a front end developer after graduating. I have worked on many side projects that taught me modern front-end developer skills, such as Javascript, Electron, and React. Outside of school, I volunteer at Hue Quang Youth Organization where I work with other leaders to train the youth on developing their leadership skills.",
          email: "webmaster.csulbtbp@gmail.com"
        },
        {
          imgSource: require("../../../assets/images/officers/nicholasnguyen.jpg"),
          name: "Nicholas Nguyen",
          position: "Event Chair",
          major: "Electrical Engineering",
          bio:
            "Salutations. I am currently a senior with an emphasis in Controls and DSP. In my free time, I code using different software programs and tools to keep up with the more sophisticated programs. If you have any further question or if you need of any assistance with coding, drop by and we can figure some things out together. I am also serving as an HKN officer to help distinguish those who excel in EE, CS, and CE. Side note, I have trained for over 10 dedicated years in martial arts and stand as a 2nd level black belt with confidence to defend!",
          email: "event.csulbtbp@gmail.com"
        },
        {
          imgSource: require("../../../assets/images/officers/evelynmuro.jpg"),
          name: "Evelyn Muro",
          position: "K-12 MindSET Chair",
          major: "Chemical Engineering",
          bio:
            "My name is Evelyn Muro and I am a chemical engineering major. I am the event and volunteer chair for Tau Beta Pi this semester. I transferred to CSULB from LA Harbor College. I am captain of Chem-E-Car, where we work in a team to create a car that runs and stops through chemical reactions. At the end of the year we compete with other schools to see which car can stop at a given distance.",
          email: "volunteer.csulbtbp@gmail.com"
        },
        {
          imgSource: require("../../../assets/images/officers/seanblydthansen.jpg"),
          name: "Sean Blydt-Hansen",
          position: "Recruitment Chair",
          major: "Chemical Engineering",
          bio:
            "Hi, I’m Sean and I am currently a 4th year chemical engineering student looking to work with microfabrication once I finish my education. I am currently involved with Chem-E-Car, a competition in which a team works to construct a small car that starts and stops through chemical reactions and competes with other schools to see if it can stop at a specified distance. I am also a tutor at the College of Engineering Tutoring Center in which I help fellow peers with chemical engineering related courses. In my free time I just play video games if you wanna stop by and talk to a nerd I’m your guy.",
          email: "recruitment.csulbtbp@gmail.com"
        },
        {
          imgSource: require("../../../assets/images/officers/minhkhoavu.jpg"),
          name: "Minhkhoa Vu",
          position: "Historian",
          major: "Computer Science",
          bio:
            "I am a senior from Fountain Valley/Huntington Beach who will be (hopefully) graduating in May 2019. After studying computer science for 3 full years, I am considering going into one of the following fields: software engineering, web development, cybersecurity, or big data. My internships at NAVAIR in China Lake and NAVFAC EXWC in Port Hueneme helped me get more experience in at least 2 of the fields.",
          email: "historian.csulbtbp@gmail.com"
        }
      ]
    };
  }
  render() {
    let officerCards = this.state.officer.map(officerInfo => {
      return (
        <Col lg="4" sm="6" className="mb-5">
          <OfficerCard officer={officerInfo} />
        </Col>
      );
    });
    return (
      <div className="w-80">
        <Container fluid>
          <hr />
          <h2>
            Meet our <span class="em1">Officers</span>
          </h2>
          <hr />
          <Row>{officerCards}</Row>
        </Container>
      </div>
    );
  }
}

export default Officers;
