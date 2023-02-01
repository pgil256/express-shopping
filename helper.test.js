const { findMean, findMedian, findMode} = require('./helper');

describe('#findMedian', function(){
    it('finds the median of an even amount of numbers', function(){
      expect(findMedian([-1, 1, 3, 5])).toEqual(2)
    })
    it('finds the median of an odd amount of numbers', function() {
        expect(findMedian([-3, 0, 6])).toEqual(2)
    })
})

describe('#findMean', function() {
    it('find the mean of an empty array', function(){
        expect(findMean([])).toEqual(0)
    })
    it('find the mean of an array with values', function() {
        expect(findMean([-5, -3, 5, 7])).toEqual(1)
    })
})

describe('#findMode', function() {
    it('finds mode', function() {
        expect(findMode([1,2,3,3,4,5])).toEqual(3)
    })
})