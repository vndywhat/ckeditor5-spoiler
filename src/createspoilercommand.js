import Command from '@ckeditor/ckeditor5-core/src/command';

export default class CreateSpoilerCommand extends Command {
	execute() {
		const model = this.editor.model;

		model.change( writer => {
			model.insertContent( createSpoiler( writer ) );
		} );
	}

	refresh() {
		const model = this.editor.model;
		const selection = model.document.selection;
		const allowedIn = model.schema.findAllowedParent( selection.getFirstPosition(), 'spoiler' );

		this.isEnabled = allowedIn !== null;
	}
}

function createSpoiler( writer ) {
	const spoilerContainer = writer.createElement( 'spoiler' );
	const spoilerTitle = writer.createElement( 'spoilerTitle' );
	const spoilerContent = writer.createElement( 'spoilerContent' );
	const content = writer.createElement( 'paragraph' );
	writer.appendText( 'Spoiler title', spoilerTitle );
	writer.append( content, spoilerContent );
	writer.append( spoilerTitle, spoilerContainer );
	writer.append( spoilerContent, spoilerContainer );
	return spoilerContainer;
}
