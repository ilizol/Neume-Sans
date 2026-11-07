const fs = require('fs');
const path = require('path');
const vm = require('vm');

const sourceDir = path.resolve(__dirname, '../docs/sources');
const context = vm.createContext({});
const sharedFiles = [
    'js/neume_data.js',
    'data/neume_glyphs_0_basic.js',
    'data/neume_glyphs_1_combinations.js',
];

for (const file of sharedFiles) {
    vm.runInContext(fs.readFileSync(path.join(sourceDir, file), 'utf8'), context, {
        filename: file,
    });
}

const firstSbmuflGlyph = context.glyphs_data.length;
const sbmuflFile = 'data/neume_glyphs_2_sbmufl.js';
vm.runInContext(fs.readFileSync(path.join(sourceDir, sbmuflFile), 'utf8'), context, {
    filename: sbmuflFile,
});

const glyphs = context.glyphs_data.slice(firstSbmuflGlyph);
process.stdout.write(JSON.stringify(glyphs));
