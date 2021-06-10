const langs = {
    js: ['javascript', 'javascriptreact', 'typescript', 'typescriptreact'],
    py: ['python']
};

const patterns = {
    py: {
        print: "^[ \t]*print[ \t]*\(.*\)",
    },
    slash: {
        log: "^[ \t]*console\.log[ \t]*\(.*\)",
    },
};

module.exports = { langs, patterns };
