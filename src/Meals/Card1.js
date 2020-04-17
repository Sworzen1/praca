import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { useCalories } from '../Calories'
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {Text} from "../Lang/Language";


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin:"20px 30px 10px 30px",
    backgroundColor: "#17161a",
    color: "white",
    border:"2px solid black"
  },
  img: {
    height: 110,
    
  },
  typo1:{
    fontSize:"19px"
  },
  typo2: {
    color: "rgb(255,255,255,0.5)",
    fontSize:"12px",
  },
  contentCard:{
    height:"65px"
  },
  containerMacro:{
    width:"60vw",
    display:"grid",
    gridTemplateColumns:"auto auto auto auto ",
    fontSize:"15px"
  }
});

const Card1 = props => {
  const {addCalories} = useCalories()
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

  const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles(theme => ({
    root: {
      padding: theme.spacing(2)
    }
  }))(MuiDialogContent);

  const DialogActions = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  }))(MuiDialogActions);

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.img} style={{backgroundImage: "url("+props.xd+")"}} />
        <CardContent className={classes.contentCard}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.typo1}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.typo2}
          >
            {props.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="secondary"
            onClick={() => addCalories( props.carbo, props.protein, props.fat, props.calories)}>
            <Text tid="add"></Text>
          </Button>
          <Button size="small" color="secondary" onClick={handleClickOpen}>
          <Text tid="recipe"></Text>
          </Button>
        </CardActions>
      </Card>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.dialogTitle}>
        <div className={classes.containerMacro}><img src="https://img.icons8.com/ios/25/000000/caloric-energy--v2.png"  /> : {props.calories}
        <img src="https://img.icons8.com/ios/25/000000/wheat.png" /> : {props.carbo } 
        <img src="https://img.icons8.com/ios/25/000000/jamon.png"/> : {props.protein}
        <img src="https://img.icons8.com/ios/25/000000/fish-food.png" /> : {props.fat}</div>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{props.descRecipe}</Typography>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Card1;
