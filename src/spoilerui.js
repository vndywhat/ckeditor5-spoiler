import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import spoilerIcon from '../theme/icons/spoiler.svg';
import '../theme/spoiler.css';

export default class SpoilerUI extends Plugin {
	init() {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add( 'Spoiler', locale => {
			const button = new ButtonView( locale );

			button.set( {
				label: t( 'Spoiler' ),
				icon: spoilerIcon,
				tooltip: true
			} );

			this.listenTo( button, 'execute', () => editor.execute( 'createSpoiler' ) );

			return button;
		} );
	}
}

