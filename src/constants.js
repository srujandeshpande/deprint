const langs = {
  js: ['javascript', 'javascriptreact', 'typescript', 'typescriptreact'],
  py: ['python'],
  c: ['c', 'cpp'],
  sh: ['bash'],
  hash: ['python'],
  rb:['ruby'],
  slash: ['javascript', 'javascriptreact', 'typescript', 'typescriptreact', 'c', 'c++', 'java']
};

const patterns = {
  sh: {
    echoComment: "^[ \t]*#[ \t]*echo[ \t]*$"
  },
  py: {
    print: "^[ \t]*print[ \t]*\(.*\)",
    printComment: "^[ \t]*#[ \t]*print[ \t]*\(.*\)"
  },
  rb: {
    puts: "^[ \t]*puts[ \t]*(.*\)",
    putsComment: "^[ \t]*#[ \t]*puts[ \t]*(.*\)"

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
