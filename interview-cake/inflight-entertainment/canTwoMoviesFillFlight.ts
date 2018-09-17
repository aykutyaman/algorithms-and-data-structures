// https://bit.ly/2NTj3wO

const setMovieLength = (map, movieLength, flightLength) => (
  map.set(movieLength, map.has(movieLength)
    ? map.get(movieLength) + (flightLength - movieLength)
    : (flightLength - movieLength))
)

const reducer = map => fligthLength => (acc, movieLength, i, arr) => {
  return map.has(fligthLength - movieLength)
    ? arr.slice(i) && true
    : setMovieLength(map, movieLength, fligthLength) && acc;
}

const canTwoMoviesFillFlight = (
  movieLengths: number[], flightLength: number
): Boolean => (
    [...movieLengths].reduce(reducer(new Map)(flightLength), false)
  )

export {
  canTwoMoviesFillFlight
}
