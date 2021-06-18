const langs = {
  js: ['javascript', 'javascriptreact', 'typescript', 'typescriptreact'],
  py: ['python'],
  hash: ['python'],
  slash: ['javascript', 'javascriptreact', 'typescript', 'typescriptreact', 'c', 'c++']
};

const patterns = {
  py: {
    print: "^[ \t]*print[ \t]*\(.*\)",
    printComment: "^[ \t]*#[ \t]*print[ \t]*\(.*\)"
  },
  js: {
    log: "^[ \t]*console\.log[ \t]*\(.*\)",
    logComment: "^[ \t]*\/\/[ \t]*console\.log[ \t]*\(.*\)"
  },
  c: {
    printf: "^[ \t]*printf[ \t]*\(.*\)[ \t]*;[ \t]*$",
    cout: "^[ \t]*cout.*<<.*;[ \t]*$"
  },
  comment: {
    hash: "^[ \t]*#.*",
    slash: "^[ \t]*\/\/.*"
  }
};

module.exports = { langs, patterns };
