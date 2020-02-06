function jumpingOnClouds(c) {
  let currentCloud = 0;
  let nextCloud = 0;
  let steps = [];
  for (let i = 0; i < c.length - 1; i++) {
    if (i >= currentCloud && c[currentCloud] !== 1) {
      if (c[i + 2] === 0) {
        nextCloud = i + 2;
      } else nextCloud = i + 1;
      currentCloud = nextCloud;
      steps.push(currentCloud);
    }
  }
  let count = [...new Set(steps)].length;

  return count;
}
