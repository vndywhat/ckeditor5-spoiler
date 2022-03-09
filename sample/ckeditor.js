/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import Spoiler from '../src/spoiler';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Spoiler,
	Essentials,
	UploadAdapter,
	Autoformat,
	EasyImage,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Subscript,
	Superscript,
	BlockQuote,
	CKFinder,
	CodeBlock,
	Heading,
	HorizontalLine,
	Image,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageCaption,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TableProperties,
	TableCellProperties,
	Font,
	Base64UploadAdapter,
	Highlight,
	Alignment,
	Mention
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'spoiler',
			'heading',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'link',
			'|',
			'indent',
			'outdent',
			'alignment',
			'|',
			'imageUpload',
			'undo',
			'redo',
			'highlight',
			'bulletedList',
			'numberedList',
			'subscript',
			'superscript',
			'insertTable',
			'mediaEmbed',
			'blockQuote',
			'horizontalLine',
			'codeBlock'
		]
	},
	link: {
		defaultProtocol: 'http://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			},
			openInNewTab: {
				mode: 'manual',
				label: 'Open in a new tab',
				defaultValue: true,
				attributes: {
					target: '_blank',
					rel: 'noopener noreferrer'
				}
			}
		}
	},
	image: {
		toolbar: [
			'imageStyle:alignLeft',
			'imageStyle:full',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative'
		],
		styles: [
			'full',
			'alignLeft',
			'alignRight'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
			'tableCellProperties'
		],
		tableProperties: {},
		tableCellProperties: {}
	},
	language: 'en'
};
ClassicEditor
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
		window.editor = editor;
		window.console.log( 'CKEditor 5 is ready.', editor );
		CKEditorInspector.attach( editor );
	} )
	.catch( err => {
		window.console.error( err.stack );
	} );
