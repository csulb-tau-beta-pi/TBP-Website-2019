import React, { Component } from "react";
import { Container } from "reactstrap";
import Footer from "../../components/Footer";
import "../../../assets/fonts/FontStyles.css";
import "../../components/GlobalStyles.css";
import * as XLSX from "xlsx";
import excel from "xlsx";

class Eligibles extends Component {
  render() {
    let logExcel = () => {
      let f = "../../../assets/docs/S19 Juniors.xlsx";
      var name = f.name;
      const reader = new FileReader();
      reader.onload = evt => {
        //evt = on_file_select event
        /* Parse data */
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: "binary" });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
        /* Update state */
        console.log("Data>>>" + data);
      };
      reader.readAsBinaryString(f);
    };
    return (
      <div className="page">
        <div className="section-white">
          <div className="w-80">
            <div className="col-12 narrow">
              <Container fluid>
                <hr />
                <h2>
                  List of <span className="em1">Eligibles</span>
                </h2>
                <hr />
                <br />
                <button onClick={logExcel}>Hello</button>
              </Container>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Eligibles;
