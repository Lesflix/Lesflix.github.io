import styled from "@emotion/styled"
import React from "react"
import Slider from "react-slick"
import PostCard from "../components/PostCard/PostCard"
function SlidePostContainer({ postList }) {
  const length = postList.length
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <StyleSlider>
      <Slider {...settings}>
        {postList.map((post, i) => (
          <PostCard post={post} />
        ))}
      </Slider>
    </StyleSlider>
  )
}

export default SlidePostContainer

const StyleSlider = styled.div`
  width: 100%;
  @media screen and (min-width: 1920px) {
    padding: 0 36px;
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    padding: 0 39px;
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    padding: 0 22px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 7px;
  }
`
