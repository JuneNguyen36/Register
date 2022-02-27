function check_register(){
    var myfr = document.forms['register'];

    if(myfr.username.value == '') {
        alert "Vui lòng nhập tên Tài khoản"
    }
    else if(myfr.pass.value != myfr.repass.value ) {
        alert "Mật khẩu không khớp vui lòng nhập lại!"
    }
    
}