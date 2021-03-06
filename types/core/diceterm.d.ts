/**
 * The result of a DiceTerm roll
 */
interface DiceTermResult {
	result: number;
	active: boolean;
	count?: number;
	success?: boolean;
	failure?: boolean;
	rerolled?: boolean;
	exploded?: boolean;
	discarded?: boolean;
}

/**
 * Method called on to modify the result set in a DiceTerm.
 * @this is DiceTerm
 */
type ModifierFn = (modifier: string) => void;

/**
 * An abstract base class for any term which appears in a dice roll formula
 * @abstract
 *
 * @param {object} termData                 Data used to create the Dice Term, including the following:
 * @param {number} termData.number          The number of dice of this term to roll, before modifiers are applied
 * @param {number} termData.faces           The number of faces on each die of this type
 * @param {string[]} termData.modifiers     An array of modifiers applied to the results
 * @param {object} termData.options         Additional options that modify the term
 */
declare class DiceTerm {
	constructor({
		number,
		faces,
		modifiers,
		options,
	}?: {
		number?: number;
		faces?: number;
		modifiers?: string[];
		options?: object;
	});
	/**
	 * The number of dice of this term to roll, before modifiers are applied
	 */
	number: number;

	/**
	 * The number of faces on the die
	 */
	faces: number;

	/**
	 * An Array of dice term modifiers which are applied
	 */
	modifiers: string[];

	/**
	 * An object of additional options which modify the dice term
	 */
	options: object;

	/**
	 * The array of dice term results which have been rolled
	 */
	results: DiceTermResult[];

	/**
	 * Return a standardized representation for the displayed formula associated with this DiceTerm
	 */
	get formula(): string;

	/**
	 * Return the total result of the DiceTerm if it has been evaluated
	 */
	get total(): number | null;

	/**
	 * Return an array of rolled values which are still active within this term
	 */
	get values(): number[];

	/**
	 * Roll the DiceTerm by mapping a random uniform draw against the faces of the dice term.
	 * @param [minimize]    Apply the minimum possible result instead of a random result.
	 * @param [maximize]    Apply the maximum possible result instead of a random result.
	 * @return {DiceTermResult}
	 */
	roll({
		minimize,
		maximize,
	}?: {
		minimize: boolean;
		maximize: boolean;
	}): DiceTermResult;

	/**
	 * Alter the DiceTerm by adding or multiplying the number of dice which are rolled
	 * @param  multiply   A factor to multiply. Dice are multiplied before any additions.
	 * @param add        A number of dice to add. Dice are added after multiplication.
	 * @return           The altered term
	 */
	alter(multiply: number, add: number): DiceTerm;

	/**
	 * Evaluate the roll term, populating the results Array.
	 * @param {boolean} [minimize]    Apply the minimum possible result for each roll.
	 * @param {boolean} [maximize]    Apply the maximum possible result for each roll.
	 * @returns {DiceTerm}    The evaluated dice term
	 */
	evaluate({
		minimize,
		maximize,
	}?: {
		minimize: boolean;
		maximize: boolean;
	}): DiceTerm;

	/**
	 * Serialize the DiceTerm to a JSON string which allows it to be saved in the database or embedded in text.
	 * This method should return an object suitable for passing to the JSON.stringify function.
	 */
	toJSON(): object;

	/**
	 * Reconstruct a DiceTerm instance from a provided JSON string
	 * @param json   A serialized JSON representation of a DiceTerm
	 * @return       A reconstructed DiceTerm from the provided JSON
	 */
	static fromJSON(json: string): DiceTerm;

	/**
	 * Return a string used as the label for each rolled result
	 */
	static getResultLabel(result: string): string;

	/**
	 * Define the denomination string used to register this Dice type in CONFIG.Dice.terms
	 */
	static DENOMINATION: string;

	/**
	 * Define the modifiers that can be used for this particular DiceTerm type.
	 */
	static MODIFIERS: {
		[modifier: string]: string | ModifierFn;
	};
}
