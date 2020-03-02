// https://eslint.org/docs/user-guide/configuring

module.exports = {
  // 别人可以直接使用你配置好的ESLint
  root: true,
  // 指定解析器
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 指定脚本的运行环境
  env: {
    browser: true
  },
  // 脚本在执行期间访问的额外的全局变量
  globals: {},
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  //启用的规则及其各自的错误级别e
  rules: {
    //定义，未使用
    'no-unused-vars': 2,
    //备份this只能用self和that
    'consistent-this': [2, 'self'],
    // 最大块嵌套深度为 5 层
    'max-depth': [2, 5],
    // 函数的形参不能多于5个
    'max-params': [2, 5],
    //禁止将await写在循环里,循环属于同步操作，不该将await异步操作写在内部
    'no-await-in-loop': 2,
    //禁止对const定义重新赋值
    'no-const-assign': 2,
    //禁止空的function,保证写的每一个function都有用
    'no-empty-function': 2,
    //禁止额外的分号，
    'no-extra-semi': 2,
    // 不能在块外使用块作用域内 var 定义的变量
    'block-scoped-var': 2,
    // class 的非静态方法必须包含 this 关键字
    'class-methods-use-this': 2,
    // if 后必须包含 { ，单行 if 除外
    'curly': [2, 'multi-line', 'consistent'],
    // 必须使用 === 和 !== ，和 null 对比时除外
    'eqeqeq': [2, 'always', { null: 'ignore' }],
    // for 循环不得因方向错误造成死循环
    'for-direction': 2,
    // getter 必须有返回值，允许返回 undefined
    'getter-return': [2, { allowImplicit: true }],
    // for in 时需检测 hasOwnProperty
    'guard-for-in': 2,
    // callback 中的 err、error 参数和变量必须被处理
    'handle-callback-err': 2,
    // jsx 语法中，属性的值必须使用双引号
    'jsx-quotes': [2, 'prefer-double'],
    // 最大回调深度为 3 层
    'max-nested-callbacks': [2, 3],
    // new关键字后类名应首字母大写
    'new-cap': [
      2,
      {
        capIsNew: false // 允许大写开头的函数直接执行
      }
    ],
    // 禁止使用 arguments.caller 和 arguments.callee
    'no-caller': 2,
    // catch中不得使用已定义的变量名
    'no-catch-shadow': 2,
    // class定义的类名不得与其它变量重名
    'no-class-assign': 2,
    // 禁止出现难以理解的箭头函数，除非用圆括号括起来
    'no-confusing-arrow': [2, { allowParens: true }],
    //函数参数禁止重名
    'no-dupe-args': 2,
    // 禁止对象出现重名键值
    'no-dupe-keys': 2,
    // 类方法禁止重名
    'no-dupe-class-members': 2,
    // 禁止重复 import
    'no-duplicate-imports': 2,
    // 禁止出现空代码块
    'no-empty': [2, { allowEmptyCatch: true }],

    // 禁止解构中出现空 {} 或 []
    'no-empty-pattern': 2,
    // 禁止扩展原生对象
    'no-extend-native': [2, { exceptions: ['Array', 'Object'] }],
    // 禁止额外的 label
    'no-extra-label': 2,
    // 禁止额外的括号，仅针对函数体
    'no-extra-parens': [2, 'functions'],
    // 连续空行的数量限制
    'no-multiple-empty-lines': [2,{max: 3, // 文件内最多连续 3 个
        maxEOF: 1, // 文件末尾最多连续 1 个
        maxBOF: 1 // 文件头最多连续 1 个
      }
    ],
    // 禁止访问未定义的变量或方法
    'no-undef': 2,
    // 禁止使用 undefined，如需判断一个变量是否为 undefined，请使用 typeof a === 'undefined'
    'no-undefined': 2,
    // 禁止将 undefined 赋值给变量
    'no-undef-init': 2,
    // 禁止使用 var，必须用 let 或 const
    'no-var': 2,
    // 禁止属性前出现空格，如 foo. bar()
    'no-whitespace-before-property': 2,
    // 禁止 if 语句在没有花括号的情况下换行
    'nonblock-statement-body-position': 2,
    // generator 函数内必须有 yield
    'require-yield': 2,
    // ...后面不允许有空格
    'rest-spread-spacing': [2, 'never'],
    // 禁止行首出现分号
    'semi-style': [2, 'last'],
    // 操作符前后要加空格
    'space-infix-ops': 2,
    // new, delete, typeof, void, yield 等表达式前后必须有空格，-, +, --, ++, !, !! 等表达式前后不许有空格
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    // allow async-await
    'generator-star-spacing': 'off'
  }
}
