import "./App.css";
import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function App() {
  const [data, setData] = useState("");
  const [content, setContent] = useState([]);

  const handleSubmit = () => {
    const regex = /<meta[^>]+name="([^")]*).*?content="([^")]*).*?>/gs;
    let m;
    var mArray = [];

    while ((m = regex.exec(data)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
        if (groupIndex !== 0) {
          mArray.push(match);
        }
      });
      setContent(mArray);
    }
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, content) {
    return { name, content };
  }

  let rows = [
    createData(content[0], content[1]),
    createData(content[2], content[3]),
    createData(content[4], content[5]),
    createData(content[6], content[7])
  ];

  return (
    <>
      <div className="App">
        <header className="App-header">
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="Paste metadata here from an EPUB 2"
            style={{ width: "75%" }}
            id="pasteData"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <Button variant="outlined" onClick={handleSubmit}>
            Submit
          </Button>
          <TableContainer component={Paper}>
            <Table style={{ width: "75%" }} align="center" sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="center">Content</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.content}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </header>
      </div>
    </>
  );
}

export default App;