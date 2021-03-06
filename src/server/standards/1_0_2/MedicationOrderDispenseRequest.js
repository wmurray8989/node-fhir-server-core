const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class MedicationOrderDispenseRequest extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationOrderDispenseRequest';
		Object.assign(this, opt);
	}

	// This is a MedicationOrderDispenseRequest resource
	static get __resourceType() {
		return 'MedicationOrderDispenseRequest';
	}

	// Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
	get medicationCodeableConcept() {
		return this.__medicationCodeableConcept;
	}

	set medicationCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__medicationCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
	get medicationReference() {
		return this.__medicationReference;
	}

	set medicationReference(new_value) {
		const Reference = require('./Reference');
		this.__medicationReference = new Reference(new_value);
	}

	// This indicates the validity period of a prescription (stale dating the Prescription).
	get validityPeriod() {
		return this.__validityPeriod;
	}

	set validityPeriod(new_value) {
		const Period = require('./Period');
		this.__validityPeriod = new Period(new_value);
	}

	// An integer indicating the number of additional times (aka refills or repeats) the patient can receive the prescribed medication.   Usage Notes: This integer does NOT include the original order dispense.   This means that if an order indicates dispense 30 tablets plus  \'3 repeats\', then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.
	get numberOfRepeatsAllowed() {
		return this.__numberOfRepeatsAllowed;
	}

	set numberOfRepeatsAllowed(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field numberOfRepeatsAllowed`);
		}
		this.__numberOfRepeatsAllowed = new_value;
	}

	// The amount that is to be dispensed for one fill.
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.
	get expectedSupplyDuration() {
		return this.__expectedSupplyDuration;
	}

	set expectedSupplyDuration(new_value) {
		const Quantity = require('./Quantity');
		this.__expectedSupplyDuration = new Quantity(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			medicationCodeableConcept: this.__medicationCodeableConcept && this.__medicationCodeableConcept.toJSON(),
			medicationReference: this.__medicationReference && this.__medicationReference.toJSON(),
			validityPeriod: this.__validityPeriod && this.__validityPeriod.toJSON(),
			numberOfRepeatsAllowed: this.__numberOfRepeatsAllowed,
			quantity: this.__quantity && this.__quantity.toJSON(),
			expectedSupplyDuration: this.__expectedSupplyDuration && this.__expectedSupplyDuration.toJSON(),
		});
	}
}

module.exports = MedicationOrderDispenseRequest;
