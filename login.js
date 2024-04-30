document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止表单默认提交行为

  // 获取输入值
  var personalId = document.getElementById('personalId').value;
  var password = document.getElementById('password').value;

  // 检查身份证号码和密码是否正确（你需要根据实际情况修改这里的逻辑）
  if (personalId === '123' && password === '123') {
    // 登录成功，重定向到下一个页面（这里是checkout.html）
    window.location.href = 'checkout.html';
  } else {
    // 登录失败，显示错误消息（你可以自定义错误消息）
    alert('个人身份证号码或密码不正确，请重新输入。');
  }
});
