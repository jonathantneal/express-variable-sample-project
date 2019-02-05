import express from 'express';
import expressVariable from 'express-variable';
import postcssPresetEnv from 'postcss-preset-env';

const app = express();

app.use(expressVariable('public', {
	js: {
		presets: [
			['@babel/react', {
				pragma: '$',
				pragmaFrag: '$',
				useBuiltIns: true
			}],
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
	}
}));

app.use(express.static('public'));

app.listen(8080);

console.log('Server started: http://localhost:8080/');
