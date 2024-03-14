const getColor = (voteAverage) => {
  if (voteAverage > 7) {
    return "bg-green-600 ";
  } else if (voteAverage > 6) return "bg-orange-600";
  else {
    return "bg-pink-700";
  }
};

export default getColor;
