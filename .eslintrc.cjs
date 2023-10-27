// eslint-disable-next-line no-undef
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
        'react/prop-types': 'off', // Tắt kiểm tra PropTypes (tuỳ chọn)
        'react/react-in-jsx-scope': 'off', // Tắt khi sử dụng React 17 trở lên
        'react/jsx-uses-react': 'off', // Tắt khi sử dụng React 17 trở lên
        'react/jsx-uses-vars': 'error', // Kiểm tra việc sử dụng biến trong JSX
        'react/no-unescaped-entities': 'error', // Kiểm tra việc sử dụng ký tự không thoát ra trong JSX
        'react/boolean-prop-naming': 'error', // Kiểm tra tên của prop kiểu boolean
        'react/self-closing-comp': 'error', // Yêu cầu sử dụng self-closing tag trong JSX
        'react/no-unknown-property': 'error', // Kiểm tra thuộc tính không hợp lệ trong JSX
        'react/no-unused-state': 'error', // Kiểm tra việc khai báo state không được sử dụng
        // Kiểm tra sự hiện diện của dấu ngoặc nhọn trong JSX
        'react/jsx-curly-brace-presence': ['error', { 'props': 'never', 'children': 'never' }],
        'react-hooks/rules-of-hooks': 'error', // Kiểm tra quy tắc sử dụng React Hooks
        'react-hooks/exhaustive-deps': 'warn', // Cảnh báo khi useEffect chưa cung cấp danh sách dependencies
        'no-console': 'warn',  // Không cho phép sử dụng console.log
        'no-unused-vars': 'off',  // Cảnh báo về biến không sử dụng
        'no-undef': 'error',  // Báo lỗi khi sử dụng biến chưa được định nghĩa
        'semi': ['error', 'always'],  // Yêu cầu dấu chấm phẩy sau mỗi lệnh
        'quotes': ['error', 'single'],  // Yêu cầu sử dụng dấu nháy đơn
        'indent': ['error', 4],  // Thụt đầu dòng 4 khoảng trắng
        'object-curly-spacing': ['error', 'always'],  // Yêu cầu sử dụng khoảng trắng trong đối tượng và đối số hàm
        'arrow-spacing': 'error',  // Kiểm tra và đảm bảo khoảng trắng trước và sau mũi tên trong hàm mũi tên
        'prefer-const': 'error',  // Khuyến nghị sử dụng const thay vì let khi biến không cần thay đổi
        'no-multiple-empty-lines': 'warn',  // Cảnh báo về việc sử dụng quá nhiều dòng trống liên tiếp
        // 'max-len': ['error', { 'code': 120, 'tabWidth': 4 }],  // Giới hạn độ dài của dòng mã
        'object-shorthand': 'error',  // Khuyến nghị sử dụng cú pháp rút gọn cho thuộc tính đối tượng
        'no-unused-expressions': 'error',  // Báo lỗi khi có biểu thức không được sử dụng trong lệnh hoặc khai báo
        'no-var': 'error',  // Yêu cầu không sử dụng `var`, sử dụng `let` hoặc `const` thay thế
    },
};
