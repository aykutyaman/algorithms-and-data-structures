const reducer = (acc, mark) => (
  (acc[mark] = acc[mark] + 1) && acc
)

const frequency = (marks: number[]): number[] => (
  marks.reduce(reducer, Array(101).fill(0))
);

export {
  frequency
}
