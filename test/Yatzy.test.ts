import assert from 'assert';
import { GameCategory } from '../src/GameCategory';

import Yatzy from '../src/Yatzy';

describe('Chance', () => {
    it('scores sum of all dice', () => {
        assert.strictEqual(15, new Yatzy([2, 3, 4, 5, 1], GameCategory.Chance).chance())
        assert.strictEqual(16, new Yatzy([3, 3, 4, 5, 1], GameCategory.Chance).chance())
    });
});

describe('Yatzy', () => {
    it('scores 50', () => {
        assert.strictEqual(50, new Yatzy([4, 4, 4, 4, 4], GameCategory.Yatzy).yatzy())
        assert.strictEqual(50, new Yatzy([6, 6, 6, 6, 6], GameCategory.Yatzy).yatzy())
        assert.strictEqual(0, new Yatzy([6, 6, 6, 6, 3], GameCategory.Yatzy).yatzy())
    });
});

describe('Ones', () => {
    it('score the sum of 1s', () => {
        assert.strictEqual(1, new Yatzy([1, 2, 3, 4, 5], GameCategory.Ones).calculateScoreOfGroupOnesToThreesByCategory())
        assert.strictEqual(2, new Yatzy([1, 2, 1, 4, 5], GameCategory.Ones).calculateScoreOfGroupOnesToThreesByCategory())
        assert.strictEqual(0, new Yatzy([6, 2, 2, 4, 5], GameCategory.Ones).calculateScoreOfGroupOnesToThreesByCategory())
        assert.strictEqual(4, new Yatzy([1, 2, 1, 1, 1], GameCategory.Ones).calculateScoreOfGroupOnesToThreesByCategory())
    });
});

describe('Twos', () => {
    it('score the sum of 2s', () => {
        assert.strictEqual(4, new Yatzy([1, 2, 3, 2, 6], GameCategory.Twos).calculateScoreOfGroupOnesToThreesByCategory())
        assert.strictEqual(10, new Yatzy([2, 2, 2, 2, 2], GameCategory.Twos).calculateScoreOfGroupOnesToThreesByCategory())
    });
});

describe('Threes', () => {
    it('score the sum of 3s', () => {
        assert.strictEqual(6, new Yatzy([1, 2, 3, 2, 3], GameCategory.Threes).calculateScoreOfGroupOnesToThreesByCategory())
        assert.strictEqual(12, new Yatzy([2, 3, 3, 3, 3], GameCategory.Threes).calculateScoreOfGroupOnesToThreesByCategory())
    });
});

describe('Fours', () => {
    it('score the sum of 4s', () => {
        assert.strictEqual(12, new Yatzy([4, 4, 4, 5, 5], GameCategory.Fours).calculateScoreOfGroupFourToSixesByCategory());
        assert.strictEqual(8, new Yatzy([4, 4, 5, 5, 5], GameCategory.Fours).calculateScoreOfGroupFourToSixesByCategory());
        assert.strictEqual(4, new Yatzy([4, 5, 5, 5, 5], GameCategory.Fours).calculateScoreOfGroupFourToSixesByCategory());
    });
});

describe('Fives', () => {
    it('score the sum of fives', () => {
        assert.strictEqual(10, new Yatzy([4, 4, 4, 5, 5], GameCategory.Fives).calculateScoreOfGroupFourToSixesByCategory());
        assert.strictEqual(15, new Yatzy([4, 4, 5, 5, 5], GameCategory.Fives).calculateScoreOfGroupFourToSixesByCategory());
        assert.strictEqual(20, new Yatzy([4, 5, 5, 5, 5], GameCategory.Fives).calculateScoreOfGroupFourToSixesByCategory());
    });
});

describe('Sixes', () => {
    it('score the sum of sixes', () => {
        assert.strictEqual(0, new Yatzy([4, 4, 4, 5, 5], GameCategory.Sixes).calculateScoreOfGroupFourToSixesByCategory());
        assert.strictEqual(6, new Yatzy([4, 4, 6, 5, 5], GameCategory.Sixes).calculateScoreOfGroupFourToSixesByCategory());
        assert.strictEqual(18, new Yatzy([6, 5, 6, 6, 5], GameCategory.Sixes).calculateScoreOfGroupFourToSixesByCategory());
    });
});

describe('One pair', () => {
    it('scores the sum of the highest pair', () => {
        assert.strictEqual(6, new Yatzy([3, 4, 3, 5, 6], GameCategory.Pair).score_pair());
        assert.strictEqual(10, new Yatzy([5, 3, 3, 3, 5], GameCategory.Pair).score_pair());
        assert.strictEqual(12, new Yatzy([5, 3, 6, 6, 5], GameCategory.Pair).score_pair());
    });
});

describe('Two pair', () => {
    it('scores the sum of the two pairs', () => {
        assert.strictEqual(16, new Yatzy([3, 3, 5, 4, 5], GameCategory.TwoPairs).two_pair());
        assert.strictEqual(16, new Yatzy([3, 3, 5, 5, 5], GameCategory.TwoPairs).two_pair());
    });
});

describe('Three of a kind', () => {
    it('scores the sum of the three of the kind', () => {
        assert.strictEqual(9, new Yatzy([3, 3, 3, 4, 5], GameCategory.ThreeOfKind).three_of_a_kind());
        assert.strictEqual(15, new Yatzy([5, 3, 5, 4, 5], GameCategory.ThreeOfKind).three_of_a_kind());
        assert.strictEqual(9, new Yatzy([3, 3, 3, 3, 5], GameCategory.ThreeOfKind).three_of_a_kind());
    });
});

describe('Four of a kind', () => {
    it('scores the sum of the four of the kind', () => {
        assert.strictEqual(8, new Yatzy([2, 2, 2, 2, 5], GameCategory.FourOfKind).four_of_a_kind());
        assert.strictEqual(0, new Yatzy([2, 2, 2, 5, 5], GameCategory.FourOfKind).four_of_a_kind());
        assert.strictEqual(8, new Yatzy([2, 2, 2, 2, 2], GameCategory.FourOfKind).four_of_a_kind());
    });
});

describe('Small straight', () => {
    it('scores 15', () => {
        assert.strictEqual(15, new Yatzy([1, 2, 3, 4, 5], GameCategory.SmallStraight).smallStraight());
        assert.strictEqual(15, new Yatzy([2, 3, 4, 5, 1], GameCategory.SmallStraight).smallStraight());
        assert.strictEqual(0, new Yatzy([1, 2, 2, 4, 5], GameCategory.SmallStraight).smallStraight());
    });
});

describe('Large straight', () => {
    it('scores 20', () => {
        assert.strictEqual(20, new Yatzy([6, 2, 3, 4, 5], GameCategory.LargeStraight).largeStraight());
        assert.strictEqual(20, new Yatzy([2, 3, 4, 5, 6], GameCategory.LargeStraight).largeStraight());
        assert.strictEqual(0, new Yatzy([1, 2, 2, 4, 5], GameCategory.LargeStraight).largeStraight());
    });
});

describe('Full house', () => {
    it('scores the sum of the full house', () => {
        assert.strictEqual(18, new Yatzy([6, 2, 2, 2, 6], GameCategory.FullHouse).fullHouse());
        assert.strictEqual(0, new Yatzy([2, 3, 4, 5, 6], GameCategory.FullHouse).fullHouse());
    });
});
