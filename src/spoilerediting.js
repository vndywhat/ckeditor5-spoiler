import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import CreateSpoilerCommand from './createspoilercommand';
import { toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';

export default class SpoilerEditing extends Plugin {
	static get requires() {
		return [ Widget ];
	}

	init() {
		const editor = this.editor;

		editor.commands.add( 'createSpoiler', new CreateSpoilerCommand( editor ) );

		this._defineSchema();
		this._defineConverters();
	}

	_defineSchema() {
		const schema = this.editor.model.schema;

		schema.register( 'spoiler', {
			isObject: true,
			allowWhere: '$block'
		} );

		schema.register( 'spoilerTitle', {
			isLimit: true,
			allowIn: 'spoiler',
			allowContentOf: '$block'
		} );

		schema.register( 'spoilerContent', {
			isLimit: true,
			allowIn: 'spoiler',
			allowContentOf: '$root'
		} );
	}

	_defineConverters() {
		const conversion = this.editor.conversion;

		conversion.for( 'upcast' ).elementToElement( {
			view: {
				name: 'div',
				classes: 'spoiler'
			},
			model: 'spoiler'
		} );

		conversion.for( 'editingDowncast' ).elementToElement( {
			model: 'spoiler',
			view: ( modelItem, viewWriter ) => {
				const widgetElement = viewWriter.createContainerElement( 'div', { class: 'spoiler' } );

				return toWidget( widgetElement, viewWriter );
			}
		} );

		conversion.for( 'dataDowncast' ).elementToElement( {
			model: 'spoiler',
			view: {
				name: 'div',
				classes: 'spoiler'
			}
		} );

		conversion.for( 'upcast' ).elementToElement( {
			model: 'spoilerTitle',
			view: {
				name: 'div',
				classes: [ 'spoiler-title', 'hide-icon' ]
			}
		} );
		conversion.for( 'dataDowncast' ).elementToElement( {
			model: 'spoilerTitle',
			view: {
				name: 'div',
				classes: [ 'spoiler-title', 'hide-icon' ]
			}
		} );
		conversion.for( 'editingDowncast' ).elementToElement( {
			model: 'spoilerTitle',
			view: ( modelElement, viewWriter ) => {
				const spoilerTitle = viewWriter.createEditableElement( 'div', { class: 'spoiler-title hide-icon' } );

				return toWidgetEditable( spoilerTitle, viewWriter );
			}
		} );

		conversion.for( 'upcast' ).elementToElement( {
			model: 'spoilerContent',
			view: {
				name: 'div',
				classes: 'spoiler-content'
			}
		} );
		conversion.for( 'dataDowncast' ).elementToElement( {
			model: 'spoilerContent',
			view: {
				name: 'div',
				classes: 'spoiler-content'
			}
		} );
		conversion.for( 'editingDowncast' ).elementToElement( {
			model: 'spoilerContent',
			view: ( modelElement, viewWriter ) => {
				const div = viewWriter.createEditableElement( 'div', { class: 'spoiler-content' } );

				return toWidgetEditable( div, viewWriter );
			}
		} );
	}
}
