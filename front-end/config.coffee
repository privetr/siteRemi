exports.config =
  modules:
    definition: false
    wrapper: false
  paths:
    public: 'www'
  conventions:
    assets: [
        /^app[\\/]assets[\\/]/,
        /^bower_components[\\/]bootstrap-sass[\\/]assets[\\/]fonts[\\/]/
      ]
  overrides:
    re7:
      optimize: true
      sourceMaps: false
  notifications: ['info', 'warn', 'error']
  notificationsTitle: 'CaaS#M'
  plugins:
    cleancss:
      restructuring: false
    jshint:
      pattern: /^app.*\.js$/ 
      warnOnly: false
    JSCS:
      files: /^app.*\.js$/
      config:
        excludeFiles: [
          'node_modules/**', 'bower_components/**'
        ]
        requireCurlyBraces: ['if', 'else', 'for', 'while', 'do', 'try', 'catch']
        requireOperatorBeforeLineBreak: true
        requireCamelCaseOrUpperCaseIdentifiers: true
        maximumLineLength:
          value: 300
          allowComments: true
          allowRegex: true
        validateIndentation: 4
        validateQuoteMarks: '\''
        disallowMultipleLineStrings: true
        disallowMixedSpacesAndTabs: true
        disallowTrailingWhitespace: true
        disallowSpaceAfterPrefixUnaryOperators: true
        disallowMultipleVarDecl: null
        requireSpaceAfterKeywords: [
          'if',
          'else',
          'for',
          'while',
          'do',
          'switch',
          'return',
          'try',
          'catch'
        ]
        requireSpaceBeforeBinaryOperators: [
          '=',
          '+=',
          '-=',
          '*=',
          '/=',
          '%=',
          '<<=',
          '>>=',
          '>>>=',
          '&=',
          '|=',
          '^=',
          '+=',
          '+',
          '-',
          '*',
          '/',
          '%',
          '<<',
          '>>',
          '>>>',
          '&',
          '|',
          '^',
          '&&',
          '||',
          '===',
          '==',
          '>=',
          '<=',
          '<',
          '>',
          '!=',
          '!=='
        ]
        requireSpaceAfterBinaryOperators: true
        requireSpacesInConditionalExpression: true
        requireSpaceBeforeBlockStatements: true
        requireLineFeedAtFileEnd: true
        disallowSpacesInsideObjectBrackets: 'all'
        disallowSpacesInsideArrayBrackets: 'all'
        disallowSpacesInsideParentheses: true
        jsDoc:
          checkParamNames: true
          requireParamTypes: true
        disallowMultipleLineBreaks: true
        disallowCommaBeforeLineBreak: null
        disallowDanglingUnderscores: null
        disallowEmptyBlocks: null
        disallowTrailingComma: null
        requireCommaBeforeLineBreak: null
        requireDotNotation: null
        requireMultipleVarDecl: null
        requireParenthesesAroundIIFE: true
  files:
    javascripts:
      joinTo:
        'js/vendor.js': /^bower_components/
        'js/app.js': /^app/
      order:
        before: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js'
        ]
    stylesheets:
      joinTo:
        'css/app.css'
      order:
        before: [
          'bower_components/toastr/toastr.css'
        ]
