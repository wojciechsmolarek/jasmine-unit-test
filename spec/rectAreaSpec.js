var Rectangle = require('../app/rectArea.js');

describe('Rectangle', () => {
    var rect = new Rectangle(5,5);
    var result;

    describe('when numbers are equal, lower than 0', () => {
        it('should return false', () => {
            rect.setA(0);
            rect.setB(0);

            expect(result).toBeFalsy();
        });
    })

    xit('should return 25', () => {
        expect(rect.countArea()).toBe(25);        
    });

})