import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { useCalories } from '../Calories'
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import placki from "./images/placki.jpg";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "20px",
    backgroundColor: "#17161a",
    color: "white"
  },
  img: {
    height: 140,
  
  },
  typo2: {
    color: "rgb(255,255,255,0.5)"
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
        <CardContent>
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
            Dodaj
          </Button>
          <Button size="small" color="secondary" onClick={handleClickOpen}>
            Przepis
          </Button>
        </CardActions>
      </Card>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <img src="https://img.icons8.com/ios/30/000000/caloric-energy--v2.png" style={{marginLeft:"13px"}} /> : {props.calories}
        <img src="https://img.icons8.com/ios/30/000000/wheat.png" style={{marginLeft:"33px"}}/> : {props.carbo }  
        <img src="https://img.icons8.com/ios/30/000000/jamon.png" style={{marginLeft:"38px"}}/> : {props.protein}
        <img src="https://img.icons8.com/ios/30/000000/fish-food.png" style={{marginLeft:"38px"}}/> : {props.fat}
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
