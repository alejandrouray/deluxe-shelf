import Head from "next/head";
import Layout from "components/Layout";
import useDispatch from "utils/hooks/useDispatch";

import ProTip from "components/ProTip";
import Link from "components/Link";
import Copyright from "components/Copyright";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { SET_PAGE } from "utils/constants";

const Home = () => {
  useDispatch(SET_PAGE, "Deluxe Shelf");

  return (
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
      <ProTip />
      <Copyright />
    </Box>
  );
};

export default Home;
