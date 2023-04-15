/***Validation Form***/
$(document).ready(function($) {       
    $("#register-form").validate({
    rules: {
        fname: "required", 
        lname: "required",                    
        email: {
            required: true,
            minlength: 6
        },
        //mobile: "required",
        mobile : {
            required: true,
            minlength: 7
        },
        areacode: "required",
        packagetype: "required"
    },
    messages: {
        fname: "אנא הזינ/י שם פרטי",
        lname: "אנא הזינ/י שם משפחה",                   
        email: {
            required: "אנא הזינ/י דואר אלקטרוני",
            minlength: "שדה זה חייב להכיל לפחות 6 תווים"
        },
        mobile: {
            required: "אנא הזינ/י מספר טלפון תקין",
            minlength: "שדה זה חייב להכיל לפחות 7 תווים"
        },
      //mobile: "אנא הזינ/י מספר נייד (כולל קידומת)",
      areacode: "יש לבחור קידומת",
      packagetype: "אנא בחר/י את סוג הערכה"
    },
     errorPlacement: function(error, element) 
{
if ( element.is(":radio") ) 
{
    error.appendTo( element.parents('.form-group') );
}
else 
{ 
    error.insertAfter( element );
}
},
    submitHandler: function(form) {
        form.submit();
    }
    
});
});
/***Validation Form***/


/***Packages Type On Change Add Active Background Color***/
$(document).ready(function () {
    var packageTypes = ["single", "double", "family"];    
    $.each(packageTypes, function(index, packageType) {
      $("#" + packageType + "__package").on("change", function() {
        $("." + packageType + "__package").addClass("active__" + packageType + "__package");
        $.each(packageTypes, function(otherIndex, otherPackageType) {
          if (packageType !== otherPackageType) {
            $("." + otherPackageType + "__package").removeClass("active__" + otherPackageType + "__package");
          }
        });
      });
    });
  });
/***Packages Type On Change Add Active Background Color***/


/***Packages Type On Change - Contect Push Rrom Right And Left***/
    $(document).ready(function () {
    $("#single__package").on("change", function() {  
        toggleAnimation(".safari", "push__from__right");
    });
    
    $(".remove__select__single__package__div").on("click", function() {  
        toggleAnimation(".safari", "push__from__right", false);
    });
    
    $("#family__package").on("change", function() {  
        toggleAnimation(".candy", "push__from__left");
    });
    
    $(".remove__select__family__package__div").on("click", function() {  
        toggleAnimation(".candy", "push__from__left", false);
    });
    
    function toggleAnimation(selector, className, add = true) {
        setTimeout(function() {
            if (add) {
                $(selector).addClass(className);
            } else {
                $(selector).removeClass(className);
            }
            $(".visible__none").toggleClass("none", add);
        }, 500);
    }
});
/***Packages Type On Change - Contect Push Rrom Right And Left***/


