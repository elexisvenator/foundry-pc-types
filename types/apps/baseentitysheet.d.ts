declare interface BaseEntitySheetData<DataType = any> {
	cssClass: 'editable' | 'locked';
	editable: boolean;
	entity: EntityData<DataType>;
	limited: boolean;
	options: any;
	owner: boolean;
	title: string;
}

/**
 * A simple implementation of the FormApplication pattern which is specialized in editing Entity instances
 */
declare class BaseEntitySheet<
	DataType = any,
	EntityType extends Entity<DataType> = any
> extends FormApplication {
	constructor(object: EntityType, options?: FormApplicationOptions);

	/**
	 * A convenience accessor for the object property of the inherited FormApplication instance
	 */
	get entity(): EntityType;

	/**
	 * The BaseEntitySheet requires that the form itself be editable as well as the entity be owned
	 */
	get isEditable(): boolean;

	/**
	 * Assign the default options which are supported by the entity edit sheet
	 */
	static get defaultOptions(): any;

	/**
	 * The displayed window title for the sheet - the entity name by default
	 */
	get title(): string;

	/**
	 * Default data preparation logic for the entity sheet
	 */
	getData(options: any): BaseEntitySheetData<DataType>;

	/**
	 * Implement the _updateObject method as required by the parent class spec
	 * This defines how to update the subject of the form when the form is submitted
	 */
	protected _updateObject(
		event: Event | JQuery.Event,
		formData: any
	): Promise<EntityType>;
}
