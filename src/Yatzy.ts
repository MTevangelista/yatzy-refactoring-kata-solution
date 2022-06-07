import { GameCategory } from "./GameCategory";

export default class Yatzy {
	private dice: number[];
	private category: GameCategory

	getDiece(): number[] {
		let test = this.category
		console.log(test);
		return this.dice
	} 

	constructor(dice: number[], category: GameCategory) {
		this.dice = dice
		this.category = category
	}

	private compareDiceValueAtIndex(index: number, expectedNumber: number): boolean {
        return this.getDiece()[index] == expectedNumber ? true : false
    }

	private buildTallies(): number[] {
		var tallies: number[] = [0, 0, 0, 0, 0, 0, 0, 0]

		for (let index = 0; index < this.getDiece().length; index++) {
			const element = this.getDiece()[index];
			tallies[element - 1]++
		}

		return tallies
	}

	chance(): number {
		var total = 0;
		total += this.getDiece()[0];
		total += this.getDiece()[1];
		total += this.getDiece()[2];
		total += this.getDiece()[3];
		total += this.getDiece()[4];
		return total;
	}

	yatzy(): number {
		var counts = [0, 0, 0, 0, 0, 0, 0, 0];

		for (var i = 0; i != this.getDiece().length; ++i) {
			var die = this.getDiece()[i];
			counts[die - 1]++;
		}
		for (i = 0; i != 6; i++) if (counts[i] == 5) return 50;
		return 0;
	}

	ones(): number {
		var sum = 0;
		if (this.getDiece()[0] == 1) sum++;
		if (this.getDiece()[1] == 1) sum++;
		if (this.getDiece()[2] == 1) sum++;
		if (this.getDiece()[3] == 1) sum++;
		if (this.getDiece()[4] == 1) sum++;

		return sum;
	}

	twos(): number {
		var sum = 0;
		if (this.getDiece()[0] == 2) sum += 2;
		if (this.getDiece()[1] == 2) sum += 2;
		if (this.getDiece()[2] == 2) sum += 2;
		if (this.getDiece()[3] == 2) sum += 2;
		if (this.getDiece()[4] == 2) sum += 2;
		return sum;
	}

	threes(): number {
		var s;
		s = 0;
		if (this.getDiece()[0] == 3) s += 3;
		if (this.getDiece()[1] == 3) s += 3;
		if (this.getDiece()[2] == 3) s += 3;
		if (this.getDiece()[3] == 3) s += 3;
		if (this.getDiece()[4] == 3) s += 3;
		return s;
	}

	score_pair(): number {
		var tallies: number[] = this.buildTallies()
		var at;
		for (at = 0; at != 6; at++) if (tallies[6 - at - 1] >= 2) return (6 - at) * 2;
		return 0;
	}

	two_pair(): number {
		var tallies: number[] = this.buildTallies()
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

	four_of_a_kind(): number {
		var tallies: number[] = this.buildTallies()

		for (let i = 0; i < 6; i++) if (tallies[i] >= 4) return (i + 1) * 4;
		return 0;
	}

	three_of_a_kind(): number {
		var tallies: number[] = this.buildTallies()

		for (let i = 0; i < 6; i++) if (tallies[i] >= 3) return (i + 1) * 3;
		return 0;
	}

	smallStraight(): number {
		var tallies: number[] = this.buildTallies()

		if (tallies[0] == 1 && tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1) return 15;
		return 0;
	}

	largeStraight(): number {
		var tallies: number[] = this.buildTallies()

		if (tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1 && tallies[5] == 1) return 20;
		return 0;
	}

	fullHouse(): number {
		var tallies: number[];
		var _2 = false;
		var i;
		var _2_at = 0;
		var _3 = false;
		var _3_at = 0;

		tallies = this.buildTallies()

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
