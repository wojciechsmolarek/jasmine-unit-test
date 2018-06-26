var helloWorld = require('../app/helloWorld.js');

describe('helloWorld', function() {
  it('should return Hello World', function() {
    expect(helloWorld()).toBe('Hello World');
  })
})
