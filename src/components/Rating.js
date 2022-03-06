import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import React from 'react';

const Rating = ({ rating, onClick }) => (
  <>
    {[...Array(5)].map((x, index) => (
      <span key={index} onClick={() => onClick(index)}>
        {rating > index ? <AiFillStar fontSize="15px" /> : <AiOutlineStar fontSize="15px" />}
      </span>
    ))}
  </>
)

export default Rating;
