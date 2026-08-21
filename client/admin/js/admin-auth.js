function showForgotPasswordAlert() {
  Swal.fire({
    title: 'แจ้งเตือนการรีเซ็ตรหัสผ่าน',
    html: `หากลืมรหัสผ่าน กรุณาติดต่อ <b class="text-gray-800">Super Admin</b> หรือฝ่าย IT Support ที่อีเมล:<br><br><a href="mailto:admin-support@occasion.com" class="text-pink-600 font-semibold underline">admin-support@occasion.com</a>`,
    icon: 'info',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#ec4899',
    customClass: {
      popup: 'rounded-2xl',
      confirmButton: 'rounded-xl text-xs font-bold px-6 py-2.5'
    }
  });
}