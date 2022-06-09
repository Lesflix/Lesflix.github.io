import styled from "@emotion/styled"
import React, { useState } from "react"
import Slider from "react-slick"
import PostCard from "../components/PostCard/PostCard"
function SlidePostContainer({ postList, title, subTitle }) {
  const [selectId, setSelectId] = useState("")
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
      <strong className="title">{title}</strong>
      <span className="sub">{subTitle}</span>
      <Slider {...settings}>
        {postList.map((post, i) => (
          <PostCard
            post={post}
            isSlide={true}
            selectId={selectId}
            setSelectId={setSelectId}
          />
        ))}
      </Slider>
    </StyleSlider>
  )
}

export default SlidePostContainer

const StyleSlider = styled.div`
  width: 100%;
  margin: 20px 0;
  .title {
    margin-right: 10px;
  }
  @media screen and (min-width: 1920px) {
    padding: 0 36px;
    .title {
      font-size: 37px;
    }
    .sub {
      font-size: 25px;
    }
    .sub {
      font-size: 30px;
    }
    font-size: 35px;
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    padding: 0 30px;
    .title {
      font-size: 30px;
    }
    .sub {
      font-size: 22px;
    }
    font-size: 28px;
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    padding: 0 22px;
    .title {
      font-size: 22px;
    }
    .sub {
      font-size: 15px;
    }
    font-size: 20px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    padding: 0 7px;

    .title {
      font-size: 16px;
    }
    .sub {
      font-size: 10px;
    }
    font-size: 14px;
  }
  @media screen and (max-width: 374px) {
    padding: 0 7px;

    .title {
      font-size: 14px;
    }
    .sub {
      font-size: 10px;
    }
    font-size: 12px;
  }
`
