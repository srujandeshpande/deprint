const langs = {
  js: ['javascript', 'javascriptreact', 'typescript', 'typescriptreact'],
  py: ['python'],
  c: ['c', 'cpp'],
  rs: ['rust'],
  rb: ['ruby'],
  hash: ['python', 'ruby'],
  slash: ['javascript', 'javascriptreact', 'typescript', 'typescriptreact', 'c', 'c++', 'java', 'rust']
};

const patterns = {
  py: {
    print: "^[ \t]*print[ \t]*\(.*\)",
    printComment: "^[ \t]*#[ \t]*print[ \t]*\(.*\)"
  },
  rb: {
    puts: "^[ \t]*puts[ \t]*$",
    putsComment: "^[ \t]*#[ \t]*puts[ \t]*$"
  },
  js: {
    log: "^[ \t]*console\.log[ \t]*\(.*\)",
    logComment: "^[ \t]*\/\/[ \t]*console\.log[ \t]*\(.*\)"
  },
  c: {
    printf: "^[ \t]*printf[ \t]*\(.*\)[ \t]*;[ \t]*$",
    cout: "^[ \t]*cout.*<<.*;[ \t]*$"
  },
  rs: {
    println: "^[ \t]*println![ \t]*\(.*\)[ \t]*;[ \t]*$",
  },
  comment: {
    hash: "^[ \t]*#.*",
    slash: "^[ \t]*\/\/.*"
  }
};

module.exports = { langs, patterns };
