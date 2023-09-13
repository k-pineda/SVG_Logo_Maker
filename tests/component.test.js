const Component = require('../lib/component.js');

describe('Component', () => {
  test('should throw error if render() is called', () => {
    const component = new Component();
    const err = new Error('Render method must be implemented in subclasses')
    expect(component.render).toThrow(err);
  });
});
