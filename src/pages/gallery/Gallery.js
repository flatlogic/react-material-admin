import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  IconButton
} from "@mui/material";
import { Favorite as LikeIcon, Chat as CommentsIcon } from "@mui/icons-material";

//images
import img1 from "../../images/gallery/gallery1.jpg";
import img2 from "../../images/gallery/gallery2.jpg";
import img3 from "../../images/gallery/gallery3.jpg";
import img4 from "../../images/gallery/gallery4.jpg";
import img5 from "../../images/gallery/gallery5.jpg";
import img6 from "../../images/gallery/gallery6.jpg";
import img7 from "../../images/gallery/gallery7.jpg";
import img8 from "../../images/gallery/gallery8.jpg";
import img9 from "../../images/gallery/gallery9.jpg";
import img10 from "../../images/gallery/gallery10.jpg";
import img11 from "../../images/gallery/gallery11.jpg";
import img12 from "../../images/gallery/gallery12.jpg";


const gallery = [
  {
    img: img1,
    id: 1
  },
  {
    img: img2,
    id: 2
  },
  {
    img: img3,
    id: 3
  },
  {
    img: img4,
    id: 4
  },
  {
    img: img5,
    id: 5
  },
  {
    img: img6,
    id: 6
  },
  {
    img: img7,
    id: 7
  },
  {
    img: img8,
    id: 8
  },
  {
    img: img9,
    id: 9
  },
  {
    img: img10,
    id: 10
  },
  {
    img: img11,
    id: 11
  },
  {
    img: img12,
    id: 12
  }
];

const Gallery = () => {
  return (
    <>
      <Grid container spacing={6}>
        {gallery.map((c, n) => (
          <Grid item md={3} xs={12} key={c.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  image={c.img}
                  title="Gallery"
                  style={{ height: 200 }}
                />
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="like">
                  <LikeIcon />
                </IconButton>
                <IconButton aria-label="comments">
                  <CommentsIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Gallery;
