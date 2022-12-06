$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    })

    // kiemTraHoTen
    var txtTen = $("#txtTen");
    var tbTen = $("#tbTen");
    function kiemTraHoTen(){
        var ktHoTen = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/;
        if(txtTen.val() == ""){
            tbTen.html("*Bắt buộc nhập");
            return false;
        }
        if(!ktHoTen.test(txtTen.val())){
            tbTen.html("*Chữ cái đầu tiên in hoa");
            return false;
        }
        tbTen.html("*");
        return true;
    }
    txtTen.blur(kiemTraHoTen);

    // kiemTraSDT
    var txtSDT = $("#txtSDT");
    var tbSDT = $("#tbSDT");
    function kiemTraSDT(){
        var ktSDT = /^[0-9]{9}$/; //có 9 số
        if(txtSDT.val() == ""){
            tbSDT.html("*Bắt buộc nhập");
            return false;
        }
        if(!ktSDT.test(txtSDT.val())){
            tbSDT.html("*SDT có dạng XXX-YYYYYY");
            return false;
        }
        tbSDT.html("*");
        return true;
    }
    txtSDT.blur(kiemTraSDT);

    // kiemTraNgaySinh
    var txtNgaySinh = $("#txtNgaySinh");
    var tbNgaySinh = $("#tbNgaySinh");
    // function kiemTraNgaySinh(){
    //     var d = new Date();
    //     if(d.getFullYear() - txtNgaySinh.getFullYear().val() > 15){
    //         tbNgaySinh.html("*");
    //         return true;
    //     }
    //     else{
    //         tbNgaySinh.html("*Tuoi phai > 15 & < 18");
    //         return false;
    //     } 
    // }
    // txtNgaySinh.blur(kiemTraNgaySinh);

    // kiemTraTime => HocPhi
    $("#txtTime").change(function(){
        $("#txtTime option:selected").each(function(){
            $("#txtHocPhi").val($(this).val())
        })
    })

    var i = 2;
    $("#btnSave").click(function(){
        var hoTen = txtTen.val();
        var SDT = txtSDT.val();
        var ngaySinh = $("#txtNgaySinh").val();
        var diaChi = $("#txtDiaChi").val();
        var TG = $("#txtTime").val();
        var hocPhi = $("#txtHocPhi").val();
        var anh = $("#txtAnh").val().substring(12);

        var them = "<tr><td>" + (i++) + "</td><td>" + hoTen + "</td><td>" + SDT + "</td><td>" + ngaySinh + "</td><td>" + diaChi + "</td><td>" + TG + "</td><td>" + hocPhi + "</td></tr>";

        $("table tbody").append(them);
        $("#myModal").modal("hide");
        return true;
    })
})

