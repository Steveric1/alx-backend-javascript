export default function getNeighborhoodsList() {
  this.sanFransciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newnnNeighborhood) => {
    self.sanFransciscoNeighborhoods.push(newnnNeighborhood);
    return self.sanFransciscoNeighborhoods;
  };
}
