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
				const spoilerContent = element.parentElement.querySelector( '.spoiler-content' );
				spoilerContent.classList.toggle( 'hidden' );

				if ( spoilerContent.classList.contains( 'hidden' ) ) {
					element.classList.toggle( 'show-icon', true );
					element.classList.toggle( 'hide-icon', false );
				} else {
					element.classList.toggle( 'show-icon', false );
					element.classList.toggle( 'hide-icon', true );
				}

			}
		} );
	}
}
