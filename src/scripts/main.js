// Minimal require style by sole because I hate the default bespoke style
require('bespoke').from('article', [
//	require('bespoke-theme-cube')(),
	require('bespoke-theme-voltaire')(),
	require('bespoke-keys')(),
	require('bespoke-touch')(),
	require('bespoke-bullets')('li, .bullet'),
	require('bespoke-backdrop')(),
	require('bespoke-state')(),
	require('bespoke-scale')(),
	require('bespoke-hash')(),
	require('bespoke-progress')(),
	require('bespoke-forms')(),
	require('./fullscreenbg')()
]);

// Sole's quirky and cool fullscreen plugin
require('presentation-fullscreen');

// Sole is creepy and tracks your visit #sorrynotsorry
require('./ga.js');

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

