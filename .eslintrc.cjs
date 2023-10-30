/**
 * "off" or 0 - turn the rule off
 * "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
 * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
 */

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        'react/no-unescaped-entities': 'error', // Kiểm tra việc sử dụng ký tự không thoát ra trong JSX
        'react/boolean-prop-naming': 'error', // Kiểm tra tên của prop kiểu boolean
        'indent': ['error', 4], // Thụt đầu dòng 4 khoảng trắng
        'object-curly-spacing': ['error', 'always'], // Yêu cầu sử dụng khoảng trắng trong đối tượng và đối số hàm
        'arrow-spacing': 'error', // Kiểm tra và đảm bảo khoảng trắng trước và sau mũi tên trong hàm mũi tên
        // 'max-len': ['error', { 'code': 120, 'tabWidth': 4 }],  // Giới hạn độ dài của dòng mã
        'object-shorthand': 'error', // Khuyến nghị sử dụng cú pháp rút gọn cho thuộc tính đối tượng
        'react-hooks/exhaustive-deps': 2, // Kiểm tra các phụ thuộc hiệu quả của useEffect
        'react-hooks/rules-of-hooks': 2, // Kiểm tra quy tắc sử dụng hooks trong React
        'no-underscore-dangle': 0, // Cho phép sử dụng gạch dưới trong tên biến và thuộc tính
        'no-template-curly-in-string': 0, // Cho phép sử dụng biểu thức chèn trong chuỗi
        'no-param-reassign': 0, // Cho phép gán lại giá trị của tham số hàm
        'no-restricted-globals': 0, // Tắt cảnh báo sử dụng các biến toàn cục bị hạn chế
        'no-unused-expressions': 0, // Cho phép sử dụng biểu thức không được sử dụng
        'array-callback-return': 0, // Tắt cảnh báo khi không có giá trị trả về trong hàm gọi lại mảng
        'default-param-last': 0, // Cho phép đặt tham số mặc định ở cuối danh sách tham số
        'max-classes-per-file': 0, // Cho phép nhiều lớp trong một tệp
        'react/jsx-props-no-spreading': 0, // Cho phép sử dụng toán tử spread (...) trong JSX
        'no-mixed-spaces-and-tabs': 0, // Cho phép sử dụng cả khoảng trắng và tab trong code
        '@typescript-eslint/no-empty-function': 0, // Cho phép hàm trống
        'class-methods-use-this': 0, // Tắt cảnh báo khi không sử dụng "this" trong phương thức lớp
        'react/jsx-closing-bracket-location': 0, // Tắt kiểm tra vị trí dấu đóng ngoặc trong JSX
        'no-plusplus': 0, // Cho phép sử dụng phép tăng giảm (++) và (--)
        'react/no-unstable-nested-components': 0, // Cho phép sử dụng các thành phần lồng nhau không ổn định
        'react/jsx-one-expression-per-line': 0, // Cho phép sử dụng nhiều biểu thức trên cùng một dòng trong JSX
        'react/no-unused-class-component-methods': 0, // Tắt cảnh báo khi có phương thức không sử dụng trong lớp
        'no-useless-constructor': 0, // Cho phép sử dụng hàm tạo không cần thiết
        'no-trailing-spaces': 0, // Cho phép khoảng trắng ở cuối dòng
        'react/jsx-no-constructed-context-values': 0, // Tắt cảnh báo khi sử dụng giá trị ngữ cảnh được xây dựng
        'no-undef': 0, // Cho phép sử dụng biến chưa được định nghĩa
        'no-redeclare': 0, // Cho phép khai báo lại biến
        'no-nested-ternary': 0, // Cho phép sử dụng toán tử ba ngôi lồng nhau
        'no-duplicate-imports': 2, // Yêu cầu không được import trùng
        'import/extensions': 0, // Tắt cảnh báo khi không có phần mở rộng tệp khi nhập
        'import/no-unresolved': 0, // Tắt cảnh báo khi không tìm thấy tệp được nhập
        'react/no-this-in-sfc': 0, // Tắt cảnh báo khi "this" được sử dụng trong thành phần SFC (stateless functional component)
        // 'jsx-a11y/aria-role': 0, // Tắt cảnh báo liên quan đến ARIA role
        'react/button-has-type': 0, // Tắt cảnh báo khi các nút không có thuộc tính "type"
        'no-async-promise-executor': 0, // Cho phép sử dụng promise executor không đồng bộ
        'no-useless-concat': 0, // Cho phép sử dụng phép nối chuỗi không cần thiết
        'global-require': 0, // Tắt cảnh báo khi sử dụng "require" ở một phạm vi toàn cục
        'react/no-deprecated': 0, // Tắt cảnh báo liên quan đến API bị loại bỏ trong React
        'no-continue': 0, // Cho phép sử dụng lệnh "continue" trong vòng lặp
        'no-throw-literal': 0, // Cho phép ném các giá trị không phải là một đối tượng hoặc một lớp kế thừa
        'no-restricted-exports': 0, // Tắt cảnh báo liên quan đến việc xuất các biểu thức cụ thể
        '@typescript-eslint/no-this-alias': 0, // Tắt cảnh báo khi sử dụng bí danh "this" không cần thiết
        'react/jsx-fragments': 0, // Cho phép sử dụng fragments trong JSX
        'react/jsx-curly-brace-presence': 0, // Tắt cảnh báo liên quan đến việc sử dụng dấu ngoặc nhọn trong JSX
        'no-var': 2, // Yêu cầu sử dụng "let" hoặc "const" thay vì "var"
        'prefer-const': 2, // Yêu cầu sử dụng "const" khi biến không bị gán lại
        'import/order': 0, // Tắt cảnh báo liên quan đến thứ tự nhập
        'no-shadow': 2, // Yêu cầu không che phủ biến bên ngoài phạm vi
        'no-shadow-restricted-names': 2, // Yêu cầu không che phủ các từ khóa cấm
        'no-unused-vars': 0, // Tắt cảnh báo khi có biến không được sử dụng
        'no-use-before-define': 2, // Yêu cầu định nghĩa biến trước khi sử dụng
        'no-cond-assign': [2, 'always'], // Yêu cầu không sử dụng phép gán trong biểu thức điều kiện
        'no-console': 1, // Cảnh báo khi sử dụng lệnh "console"
        'no-debugger': 1, // Cảnh báo khi sử dụng lệnh "debugger"
        'no-alert': 2, // Cảnh báo khi sử dụng lệnh "alert"
        'no-constant-condition': 2, // Cảnh báo khi có điều kiện luôn trả về cùng một giá trị
        'no-dupe-keys': 2, // Cảnh báo khi có các khóa trùng lặp trong một đối tượng
        'no-duplicate-case': 2, // Cảnh báo khi có các trường hợp trùng lặp trong câu lệnh "switch"
        'no-empty': 2, // Cảnh báo khi có các khối trống (empty block)
        'no-ex-assign': 2, // Cảnh báo khi gán lại biến bên ngoài phạm vi biểu thức try-catch
        'no-extra-semi': 2, // Cảnh báo khi có dấu chấm phẩy dư thừa
        'no-func-assign': 2, // Cảnh báo khi gán lại giá trị của một hàm
        'no-inner-declarations': 2, // Cảnh báo khi khai báo biến hoặc hàm trong khối lệnh
        'no-irregular-whitespace': 2, // Cảnh báo khi có khoảng trắng không hợp lệ
        'no-obj-calls': 2, // Cảnh báo khi gọi các phương thức của một đối tượng mà không phải là hàm
        'no-sparse-arrays': 2, // Cảnh báo khi có các mảng thưa thớt
        'no-unreachable': 2, // Cảnh báo khi có mã không thể truy cập
        'use-isnan': 2, // Cảnh báo khi so sánh với NaN bằng dấu "===" thay vì "isNaN"
        'block-scoped-var': 2, // Cảnh báo khi sử dụng biến "var" với phạm vi khối lệnh
        'consistent-return': 2, // Yêu cầu một hàm phải trả về một giá trị đồng nhất
        curly: [2, 'multi-line'], // Yêu cầu viết dấu ngoặc nhọn trên nhiều dòng khi cần thiết
        'default-case': 2, // Yêu cầu một câu lệnh "default" trong câu lệnh "switch"
        'dot-notation': [2, { allowKeywords: true }], // Yêu cầu sử dụng ký hiệu dấu chấm để truy cập thuộ
        eqeqeq: 2, // Yêu cầu sử dụng toán tử so sánh '===' và '!==' thay vì '==' và '!='
        'guard-for-in': 2, // Yêu cầu sử dụng toán tử "hasOwnProperty" trong vòng lặp "for...in"
        'no-caller': 2, // Cảnh báo khi gọi lệnh "arguments.caller" hoặc "arguments.callee"
        'no-else-return': 2, // Cảnh báo khi có lệnh "return" bên trong khối "else" không cần thiết
        'no-eq-null': 2, // Cảnh báo khi so sánh với "null" bằng toán tử "==" thay vì "===" 
        'no-eval': 2, // Cảnh báo khi sử dụng hàm "eval", rất nguy hiểm vì tiềm ẩn lỗ hổng bảo mật
        'no-extend-native': 2, // Cảnh báo khi mở rộng các phương thức của các đối tượng JavaScript cơ bản (native objects)
        'no-extra-bind': 2, // Cảnh báo khi sử dụng hàm "bind" không cần thiết
        'no-fallthrough': 2, // Cảnh báo khi không có lệnh "break" trong các trường hợp liên tiếp trong câu lệnh "switch"
        'no-floating-decimal': 2, // Cảnh báo khi số thập phân không có phần nguyên (vd: .5 thay vì 0.5)
        'no-implied-eval': 2, // Cảnh báo khi sử dụng "setTimeout", "setInterval", hoặc "execScript" với một chuỗi
        'no-lone-blocks': 2, // Cảnh báo khi có các khối lệnh trống không cần thiết
        'no-loop-func': 2, // Cảnh báo khi sử dụng hàm trong một vòng lặp
        'no-multi-str': 2, // Cảnh báo khi sử dụng chuỗi trên nhiều dòng thông qua escape character ('\n')
        'no-native-reassign': 2, // Cảnh báo khi gán lại giá trị của các biến toàn cục được hệ thống định nghĩa
        'no-new': 2, // Cảnh báo khi không gán giá trị của đối tượng sau khi tạo mới
        'no-new-func': 2, // Cảnh báo khi sử dụng hàm tạo mới (new Function) không cần thiết
        'no-new-wrappers': 2, // Cảnh báo khi tạo mới đối tượng bao (wrapper) không cần thiết
        'no-octal': 2, // Cảnh báo khi sử dụng cơ số tám (octal) trong mã JavaScript
        'no-octal-escape': 2, // Cảnh báo khi sử dụng escape character trong chuỗi với cơ số tám (vd: '\251')
        'no-proto': 2, // Cảnh báo khi sử dụng thuộc tính "proto" trong đối tượng (đã bị loại bỏ trong ES5)
        'no-return-assign': 2, // Cảnh báo khi gán lại kết quả của một phép gán trong biểu thức trả về
        'no-script-url': 2, // Cảnh báo khi sử dụng "javascript:" URLs
        'no-self-compare': 2, // Cảnh báo khi so sánh biến với chính nó (vd: x === x)
        'no-sequences': 2, // Cảnh báo khi sử dụng chuỗi các biểu thức (expressions) trong một câu lệnh (vd: a = b, c)
        'no-with': 2, // Cảnh báo khi sử dụng câu lệnh "with", không nên sử dụng trong JavaScript
        radix: 2, // Yêu cầu xác định cơ số cho hàm "parseInt" (vd: parseInt("10", 10))
        'vars-on-top': 2, // Yêu cầu khai báo tất cả biến ở đầu phạm vi
        yoda: 2, // Yêu cầu viết biểu thức so sánh với "yoda conditions" (vd: if (5 == x) thay vì if (x == 5))
        'brace-style': [2, '1tbs', { allowSingleLine: true }], // Yêu cầu cách viết dấu ngoặc mở đầu dòng (1tbs)
        quotes: [2, 'single', 'avoid-escape'], // Yêu cầu sử dụng dấu ngoặc kép cho chuỗi và tránh việc sử dụng ký tự escape
        camelcase: [2, { properties: 'never' }], // Yêu cầu sử dụng kiểu camelCase cho tên biến và thuộc tính
        'comma-spacing': [2, { before: false, after: true }], // Yêu cầu không có khoảng trắng trước dấu phẩy và có khoảng trắng sau dấu phẩy
        'comma-style': [2, 'last'], // Yêu cầu dấu phẩy nằm ở cuối dòng, sau phần tử cuối cùng
        'eol-last': 2, // Yêu cầu có ký tự xuống dòng ở cuối tệp
        'func-names': 2, // Yêu cầu các hàm phải có tên (đặt tên cho hàm)
        'key-spacing': [2, { beforeColon: false, afterColon: true }], // Yêu cầu có khoảng trắng sau dấu hai chấm trong cặp key-value của đối tượng
        'new-cap': [0, { newIsCap: true }], // Tắt cảnh báo khi không sử dụng "new" cho các đối tượng tạo mới
        'no-multiple-empty-lines': [2, { max: 2 }], // Yêu cầu không có quá nhiều dòng trống liên tiếp
        'no-new-object': 2, // Cảnh báo khi sử dụng cú pháp "{...}" để tạo mới đối tượng
        'no-spaced-func': 2, // Cảnh báo khi có khoảng trắng sau tên hàm
        'no-extra-parens': [2, 'functions'], // Cảnh báo khi có nhiều dấu ngoặc đơn không cần thiết cho hàm
        'one-var': [2, 'never'], // Yêu cầu khai báo biến mỗi dòng (không sử dụng dấu phẩy để khai báo nhiều biến)
        'padded-blocks': [2, 'never'], // Yêu cầu không có khoảng trắng không cần thiết trong khối lệnh
        semi: [2, 'always'], // Yêu cầu có dấu chấm phẩy ở cuối mỗi câu lệnh
        'semi-spacing': [2, { before: false, after: true }], // Yêu cầu khoảng trắng sau dấu chấm phẩy
        'space-before-blocks': 2, // Yêu cầu khoảng trắng trước dấu ngoặc nhọn của khối lệnh
        'space-before-function-paren': [2, { anonymous: 'never', named: 'never', asyncArrow: 'always' }], // Yêu cầu khoảng trắng trước dấu ngoặc đơn của hàm
        'space-infix-ops': 2, // Yêu cầu khoảng trắng sau dấu toán tử
        'spaced-comment': [2, 'always', { exceptions: ['-', '+'], markers: ['=', '!'] }], // Yêu cầu có khoảng trắng sau dấu "//" trong bình luận
        'no-multi-spaces': 2, // Cảnh báo khi có nhiều khoảng trắng không cần thiết
        'jsx-quotes': [2, 'prefer-double'], // Yêu cầu sử dụng dấu ngoặc kép cho các thuộc tính trong JSX
        // 'jsx-a11y/img-redundant-alt': 2, // Cảnh báo khi thuộc tính "alt" không được ghi đè giá trị mặc định
        // 'jsx-a11y/aria-props': 2, // Cảnh báo khi các thuộc tính ARIA không hợp lệ
        // 'jsx-a11y/label-has-for': 2, // Cảnh báo khi sử dụng thuộc tính "for" trong thẻ "label"
        // 'jsx-a11y/mouse-events-have-key-events': 2, // Cảnh báo khi có các sự kiện chuột nhưng không có sự kiện bàn phím kết hợp
        // 'jsx-a11y/role-has-required-aria-props': 2, // Cảnh báo khi các thuộc tính ARIA cần thiết không được sử dụng cho vai trò (role)
        // 'jsx-a11y/role-supports-aria-props': 2, // Cảnh báo khi các thuộc tính ARIA không hợp lệ cho vai trò (role)
        // 'jsx-a11y/anchor-is-valid': 0, // Tắt cảnh báo khi không kiểm tra tính hợp lệ của thẻ "a" trong JSX
        'react/jsx-no-undef': 2, // Cảnh báo khi sử dụng biến chưa được định nghĩa trong JSX
        'react/jsx-uses-react': 2, // Cảnh báo khi phải import thư viện React trong tệp
        'react/jsx-uses-vars': 2, // Cảnh báo khi sử dụng các biến chưa được định nghĩa trong JSX
        'react/no-did-mount-set-state': 2, // Cảnh báo khi sử dụng setState trong phương thức componentDidMount
        'react/no-did-update-set-state': 2, // Cảnh báo khi sử dụng setState trong phương thức componentDidUpdate
        'react/no-unknown-property': 2, // Cảnh báo khi sử dụng thuộc tính không hợp lệ trong JSX
        'react/prop-types': 2, // Tắt cảnh báo khi không sử dụng kiểm tra kiểu dữ liệu (PropTypes) cho các props
        'react/react-in-jsx-scope': 2, // Cảnh báo khi không import React khi sử dụng JSX
        'react/self-closing-comp': 2, // Cảnh báo khi không sử dụng dấu "/>" cho các thành phần tự đóng (self-closing components)
        'react/jsx-pascal-case': 2, // Cảnh báo khi sử dụng PascalCase cho tên các thành phần (components) trong JSX
        'react/prefer-stateless-function': 2, // Cảnh báo khi ưa thích sử dụng hàm không lưu trạng thái (stateless function components)
        'react/prefer-es6-class': 2, // Cảnh báo khi ưa thích sử dụng lớp ES6 cho thành phần (component)
        'react/jsx-curly-spacing': 2, // Yêu cầu khoảng trắng xung quanh các biểu thức trong cặp dấu ngoặc nhọn của JSX
        'react/no-string-refs': 2, // Cảnh báo khi sử dụng chuỗi làm tham chiếu (ref) cho thành phần
        'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }], // Cảnh báo khi không bọc JSX nhiều dòng vào dấu ngoặc nhọn
        'react/jsx-no-bind': 2, // Cảnh báo khi sử dụng hàm "bind" trong JSX
        'react/require-render-return': 2, // Cảnh báo khi phương thức "
        'react/no-array-index-key': 2, // Cảnh báo khi sử dụng mảng chỉ mục làm khóa (key) trong danh sách các thành phần (component) trong React
        'react/jsx-indent': 0, // Tắt cảnh báo liên quan đến việc thụt lề (indentation) trong JSX
        'react/jsx-indent-props': 0, // Tắt cảnh báo liên quan đến việc thụt lề (indentation) cho các thuộc tính trong JSX
        'arrow-parens': ['error', 'always'], // Yêu cầu luôn bọc tham số của hàm mũi tên (arrow function) trong dấu ngoặc đơn
        'arrow-body-style': [2, 'as-needed'], // Yêu cầu cơ thể của hàm mũi tên (arrow function) được viết trên nhiều dòng khi cần thiết
        'comma-dangle': [2, 'always-multiline'], // Yêu cầu sử dụng dấu phẩy sau phần tử cuối cùng của mảng và đối tượng khi chúng nằm trên nhiều dòng
        'import/no-extraneous-dependencies': 0, // Tắt cảnh báo khi có sự phụ thuộc không cần thiết trong tệp
        'prefer-template': 2, // Yêu cầu sử dụng template literals (ký tự mẫu) thay vì chuỗi và toán tử nối chuỗi
        'react/forbid-prop-types': 0, // Tắt cảnh báo liên quan đến kiểm tra kiểu dữ liệu (PropTypes) cho các props
        'react/jsx-first-prop-new-line': [2, 'multiline'], // Yêu cầu việc sắp xếp các thuộc tính của JSX trên nhiều dòng
        'react/jsx-filename-extension': 0, // Tắt cảnh báo khi không kiểm tra phần mở rộng của tệp cho tệp chứa JSX
        'react/require-default-props': 0, // Tắt cảnh báo khi không yêu cầu sử dụng giá trị mặc định cho props
        'import/no-cycle': 0, // Tắt cảnh báo liên quan đến việc có một chu kỳ (cycle) phụ thuộc trong import
        'react/sort-comp': [1, {
            order: ['constructor', 'lifecycle', 'everything-else', 'render'],
        }], // Sắp xếp các phần của một thành phần (component) React theo thứ tự nhất định
        'react/no-unused-state': 0, // Tắt cảnh báo khi không yêu cầu sử dụng trạng thái không được sử dụng
        'react/jsx-curly-newline': 0, // Tắt cảnh báo liên quan đến việc xuống dòng cho các biểu thức trong cặp dấu ngoặc nhọn của JSX
        'lines-between-class-members': 0, // Tắt cảnh báo liên quan đến khoảng trắng giữa các thành viên của lớp
        'react/function-component-definition': 0, // Tắt cảnh báo liên quan đến định nghĩa của thành phần hàm (function component)
        'react/no-multi-comp': 0, // Tắt cảnh báo khi không kiểm tra việc có nhiều thành phần trong một tệp
        'react/display-name': 0, // Tắt cảnh báo liên quan đến việc sử dụng phương thức "displayName" cho thành phần
        'react/destructuring-assignment': 0, // Tắt cảnh báo liên quan đến việc sử dụng gán đồng thời khi rút gọn (destructuring assignment)
    },
};
