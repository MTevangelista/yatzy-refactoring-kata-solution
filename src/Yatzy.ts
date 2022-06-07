export default class Yatzy {
	private dice: number[];

	getDiece(): number[] {
		return this.dice
	} 

	constructor(playValues: number[]) {
		this.dice = playValues
	}

	private compareDiceValueAtIndex(index: number, expectedNumber: number): boolean {
        return this.getDiece()[index] == expectedNumber ? true : false
    }

	private static buildTallies(dice: number[]): number[] {
		var tallies: number[] = [0, 0, 0, 0, 0, 0, 0, 0]

		for (let index = 0; index < dice.length; index++) {
			const element = dice[index];
			tallies[element - 1]++
		}

		return tallies
	}

	static chance(playValues: number[]): number {
		var total = 0;
		total += playValues[0];
		total += playValues[1];
		total += playValues[2];
		total += playValues[3];
		total += playValues[4];
		return total;
	}

	static yatzy(...args: number[]): number {
		var counts = [0, 0, 0, 0, 0, 0, 0, 0];

		for (var i = 0; i != args.length; ++i) {
			var die = args[i];
			counts[die - 1]++;
		}
		for (i = 0; i != 6; i++) if (counts[i] == 5) return 50;
		return 0;
	}

	static ones(playValues: number[]): number {
		var sum = 0;
		if (playValues[0] == 1) sum++;
		if (playValues[1] == 1) sum++;
		if (playValues[2] == 1) sum++;
		if (playValues[3] == 1) sum++;
		if (playValues[4] == 1) sum++;

		return sum;
	}

	static twos(playValues: number[]): number {
		var sum = 0;
		if (playValues[0] == 2) sum += 2;
		if (playValues[1] == 2) sum += 2;
		if (playValues[2] == 2) sum += 2;
		if (playValues[3] == 2) sum += 2;
		if (playValues[4] == 2) sum += 2;
		return sum;
	}

	static threes(playValues: number[]): number {
		var s;
		s = 0;
		if (playValues[0] == 3) s += 3;
		if (playValues[1] == 3) s += 3;
		if (playValues[2] == 3) s += 3;
		if (playValues[3] == 3) s += 3;
		if (playValues[4] == 3) s += 3;
		return s;
	}

	static score_pair(playValues: number[]): number {
		var tallies: number[] = this.buildTallies(playValues)
		var at;
		for (at = 0; at != 6; at++) if (tallies[6 - at - 1] >= 2) return (6 - at) * 2;
		return 0;
	}

	static two_pair(playValues: number[]): number {
		var tallies: number[] = this.buildTallies(playValues)
		var n = 0;
		var score = 0;

		for (let i = 0; i < 6; i += 1)
			if (tallies[6 - i - 1] >= 2) {
				n++;
				score += 6 - i;
			}
		if (n == 2) return score * 2;
		else return 0;
	}

	static four_of_a_kind(playValues: number[]): number {
		var tallies: number[] = this.buildTallies(playValues)

		for (let i = 0; i < 6; i++) if (tallies[i] >= 4) return (i + 1) * 4;
		return 0;
	}

	static three_of_a_kind(playValues: number[]): number {
		var tallies: number[] = this.buildTallies(playValues)

		for (let i = 0; i < 6; i++) if (tallies[i] >= 3) return (i + 1) * 3;
		return 0;
	}

	static smallStraight(playValues: number[]): number {
		var tallies: number[] = this.buildTallies(playValues)

		if (tallies[0] == 1 && tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1) return 15;
		return 0;
	}

	static largeStraight(playValues: number[]): number {
		var tallies: number[] = this.buildTallies(playValues)

		if (tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1 && tallies[5] == 1) return 20;
		return 0;
	}

	static fullHouse(playValues: number[]): number {
		var tallies: number[];
		var _2 = false;
		var i;
		var _2_at = 0;
		var _3 = false;
		var _3_at = 0;

		tallies = this.buildTallies(playValues)

		for (i = 0; i != 6; i += 1)
			if (tallies[i] == 2) {
				_2 = true;
				_2_at = i + 1;
			}

		for (i = 0; i != 6; i += 1)
			if (tallies[i] == 3) {
				_3 = true;
				_3_at = i + 1;
			}

		if (_2 && _3) return _2_at * 2 + _3_at * 3;
		else return 0;
	}

	fours(): number {
		var sum;
		sum = 0;
		for (let at = 0; at != 5; at++) {
			if (this.compareDiceValueAtIndex(at, 4)) {
				sum += 4;
			}
		}
		return sum;
	}

	fives(): number {
		let s = 0;
		var i;
		for (i = 0; i < this.getDiece().length; i++) if (this.compareDiceValueAtIndex(i, 5)) s = s + 5;
		return s;
	}

	sixes(): number {
		let sum = 0;
		for (var at = 0; at < this.getDiece().length; at++) if (this.compareDiceValueAtIndex(at, 6)) sum = sum + 6;
		return sum;
	}
}
