import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "2rem 2rem",
    maxWidth: 1300,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    textAlign: "left",
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
    margin: "0 auto",
  },
  links: {
    color: theme.palette.primary.dark,
    fontWeight: "bold",
    fontFamily: "Monsterrat",
    fontSize: "0.8rem",
  },
  fontBold: {
    fontWeight: "300",
    fontFamily: "Poppins",
    fontStyle: "italic",
    width: "14rem",
    fontSize: "0.8rem",
  },
  desc: {
    fontSize: "0.8rem",
    fontWeight: "500",
    fontFamily: "Poppins",
  },
  stack: {
    fontSize: "0.8rem",
    fontWeight: "700",
    fontFamily: "Poppins",
    textAlign: "center",
    fontStyle: "italic",
  },
}));

function ProjectTable() {
  const [Task, setTask] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/project/projects"
        );
        setTask(res.data);
      } catch (err) {}
    };
    getProjects();
  }, []);

  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Title</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Source Code Url
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Deployment Url
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Description
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>TechStack</TableCell>
            {/* <TableCell className={classes.tableHeaderCell}>Author</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {Task.map((row) => (
            <TableRow key={row._id}>
              <TableCell>
                <Typography className={classes.fontBold}>
                  {row.title}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.links}>
                  {row.sourceUrl}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.links}>
                  {row.deploymentUrl}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.desc}>
                  {row.description}
                </Typography>
              </TableCell>
              <TableCell className={classes.stack}>{row.stack}</TableCell>
              {/* <TableCell>
                <Avatar
                  src="https://avatars.githubusercontent.com/u/60286295?v=4"
                  className={classes.avatar}
                />
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProjectTable;
