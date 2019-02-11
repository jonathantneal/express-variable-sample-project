import express from 'express';
import expressVariable from 'express-variable';
import postcssPresetEnv from 'postcss-preset-env';
import phtmlDoctype from '@phtml/doctype';
import phtmlJsx from '@phtml/jsx';

const app = express();

app.use(expressVariable('public', {
	js: {
		plugins: [
			['@babel/plugin-transform-react-jsx', {
				pragma: '$',
				pragmaFrag: '$',
				useBuiltIns: true
			}]
		],
		presets: [
			['@babel/env', {
				shippedProposals: true,
				targets: '> 1%'
			}]
		],
		sourceMaps: 'inline'
	},
	css: {
		plugins: [
			postcssPresetEnv({
				stage: 0,
				browsers: '> 1%'
			})
		],
		map: {
			inline: true
		}
	},
	html: {
		plugins: [
			phtmlDoctype(),
			phtmlJsx({ data: { location: 'JSX in HTML' } })
		]
	}
}));

app.use(express.static('public'));

app.listen(8080);

console.log('Server started: http://localhost:8080/');
