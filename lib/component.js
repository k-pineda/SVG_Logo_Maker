class Component {
  constructor() {
    this.props = {};
  }

  render() {
    throw new Error('Render method must be implemented in subclasses');
  }
}

module.exports = Component;
