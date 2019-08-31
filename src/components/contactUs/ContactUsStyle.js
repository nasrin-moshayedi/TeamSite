import { makeStyles } from "@material-ui/core/styles";
import image from "./../../assets/images/contact.jpg";

export const useStyles = makeStyles({
  Root: {
    // margin: "60px 0",
    background: 'url("./../../assets/images/contact.jpg")',
    color: "",
    padding: 50
  },
  Text: {
    margin: 50
  },
  talkBtn: {
    color: "#fff",
    border: "1px solid #fcb235"
  },
  CenterText: {
    textAlign: "center"
  }
});
