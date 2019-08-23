import { makeStyles } from "@material-ui/core/styles";
// import Image from "./../../assets/images/4.jpg";
export const useStyles = makeStyles({
  Root: {
    padding: "60px 0",
    background: "#f5f5f5"
  },
  TeamImage: {
    width: 200,
    height: 200,
    filter: "grayscale(100%)",
    margin: "60px auto -80px",
    boxShadow: "20px -19px 94px -51px #aaaaaa"
  },
  TeamText: {
    textAlign: "center",
    background: "#fff",
    padding: "70px 10px 10px",
    boxShadow: "7px 6px 19px -7px #aaaaaa",
    borderRadius: 13
  },
  Teamname: {
    color: "#06052f",
    padding: "30px 0 20px"
  },
  Teamskils: {
    color: "#656965",
    padding: 10
  },
  SocialNetwork: {
    color: "#a09696",
    padding: "54px 10px 10px"
  }
});
