const topScores = (unorderedScores, highest) => {

  // create an array for score counts
  var scoreCounts = Array(highest + 1).fill(0);

  // populate score counts
  unorderedScores.forEach(score => scoreCounts[score]++);

  return scoreCounts.reduceRight((sortedScores, count, i) => {
    sortedScores.push(...Array(count).fill(i));
    return sortedScores;
  }, []);
}

export {
  topScores
}
