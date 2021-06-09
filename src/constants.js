const langs = {
    js: ['javascript', 'javascriptreact', 'typescript', 'typescriptreact'],
    py: ['python']
};

const patterns = {
    py: {
        print: "([ \t]*(?!#)[ \t]*print\s*\(.*\))",
    },
    slash: {},
};

module.exports = { langs, patterns };
