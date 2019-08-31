import { makeStyles } from "@material-ui/core/styles";
// import Image from "./../../assets/images/4.jpg";
export const useStyles = makeStyles({
  root: {
    flexGrow: 1
    // background: "#b7b7b7"
  },
  HeaderStyle: {
    height: 1000,
    background: "#535853ab",
    // background: "#090909d4",
    backgroundImage:
      'url("/home/nasrin/Documents/works/Team/team_site/src/assets/images/1.jpeg")'
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  HeaderImageStyle: {
    width: "100%",
    height: 800,

    filter: "grayscale(100%)"
  },
  HeaderImageCover: {
    // border: "9px solid #fcb235",
    width: "85%",
    height: 400,
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    margin: "10px auto"
  },
  HeaderTopText: {
    display: "block",
    padding: 20,
    background: " #fcb235",
    marginTop: "-391px",
    "&:hover": {
      background: " #fcb235"
      // boxShadow: "1px 1px 3px 5px #fcb235"
    }
  },
  HeaderText: {
    top: "38%",
    left: "22%",
    padding: 20,
    fontSize: 42,
    position: "absolute",
    background: "#dcdcdc54",
    fontWeight: "bolder"
  }
});
