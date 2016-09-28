module.exports = {
	use: [
		"postcss-import",
		"autoprefixer",
		"postcss-nested",
    "postcss-custom-properties"
	],
	input: "src/entry.css",
	output: "build/styles.css",
	autoprefixer: {
		browsers: ['last 5 versions']
	},
	"local-plugins": true,
	"watch": true
};
