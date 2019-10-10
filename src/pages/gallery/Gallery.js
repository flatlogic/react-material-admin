import React from "react";
import {
  Grid,
  Box,
  IconButton,
  Divider,
  Collapse,
  CardContent,
} from "@material-ui/core";

//images
import img1 from '../../images/gallery1.jpg'
import img2 from '../../images/gallery2.jpg'
import img3 from '../../images/gallery3.jpg'
import img4 from '../../images/gallery4.jpg'
import img5 from '../../images/gallery5.jpg'
import img6 from '../../images/gallery6.jpg'
import img7 from '../../images/gallery7.jpg'
import img8 from '../../images/gallery8.jpg'
import img9 from '../../images/gallery9.jpg'
import img10 from '../../images/gallery10.jpg'
import img11 from '../../images/gallery11.jpg'
import img12 from '../../images/gallery12.jpg'

//components
import {
  Typography,
  Avatar,
  Link,
  Input,
  Button,
} from "../../components/Wrappers";
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";

const gallery = [
  {
    img: img1
  },
  {
    img: img2
  },
  {
    img: img3
  },
  {
    img: img4
  },
  {
    img: img5
  },
  {
    img: img6
  },
  {
    img: img7
  },
  {
    img: img8
  },
  {
    img: img9
  },
  {
    img: img10
  },
  {
    img: img11
  },
  {
    img: img12
  },
]

const Gallery = () => {
  return (
    <>
      <PageTitle title="Timeline" />
      <Grid container spacing={6}>

      </Grid>
    </>
  );
};

export default Gallery;
