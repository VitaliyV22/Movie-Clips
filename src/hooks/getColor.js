const getColor = (voteAverage) => {
  if (voteAverage > 7) {
    return "bg-green-500 ";
  } else if (voteAverage < 7) return "bg-orange-500";
  else {
    return "bg-red-500";
  }
};

export default getColor;
