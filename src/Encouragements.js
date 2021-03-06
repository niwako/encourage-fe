import AddIcon from "@material-ui/icons/Add";
import { Box, Container, Fab, Grid, makeStyles } from "@material-ui/core";
import AvatarHeader from "./AvatarHeader";
import Entries from "./Entries";
import { Link } from "react-router-dom";
import { useFirestore, useUser } from "reactfire";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    bottom: theme.spacing(2),
  },
}));

export default function Encouragements() {
  const classes = useStyles();

  const { data: user } = useUser();
  const entryId = useFirestore()
    .collection("users")
    .doc(user.uid)
    .collection("entries")
    .doc().id;

  return (
    <>
      <AvatarHeader />
      <Entries />
      <Container disableGutters className={classes.container} maxWidth="sm">
        <Box ml={2} mr={2}>
          <Grid container justify="flex-end">
            <Fab
              color="primary"
              aria-label="add"
              component={Link}
              to={`/editor/${entryId}`}
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
