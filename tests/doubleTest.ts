import double from 'double';

describe('double', () => {
    it('should double', () => {
        const b = double(2);
        expect(b).toBe(4);
    });
});
