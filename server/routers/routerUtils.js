/**
 * 创建响应对象
 */
exports.createRes = ({ code, msg, result = null }) => ({
  resultCode: code,
  resultMsg: msg,
  result
})

exports.validateFields = () => {

}