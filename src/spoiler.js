import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import SpoilerEditing from './spoilerEditing';
import SpoilerUI from './spoilerUI';

export default class Spoiler extends Plugin {
	static get pluginName() {
		return 'Spoiler';
	}

	static get requires() {
		return [ SpoilerEditing, SpoilerUI ];
	}

	afterInit() {
		this.editor.editing.view.document.on( 'click', ( evt, data ) => {
			const element = data.domTarget;
			const isSpoilerTitle = element.classList.contains( 'spoiler-title' );
			if ( data.target.name === 'div' && isSpoilerTitle ) {
				element.classList.toggle( 'hide-icon' );
				element.classList.toggle( 'show-icon' );
				element.parentElement.querySelector( '.spoiler-content' ).classList.toggle( 'hidden' );
			}
		} );
	}
}
