
var popupContainer = document.getElementById('popupContainer');
var openPopupButton = document.getElementById('openPopup');
var closePopupButton = document.getElementById('closePopup');


openPopupButton.onclick = function() {
    popupContainer.style.display = "block";
}


closePopupButton.onclick = function() {
    popupContainer.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == popupContainer) {
        popupContainer.style.display = "none";
    }
}
//proudect
// متغير لتخزين العدد الحالي
var cartCount = 0;

// الحصول على جميع عناصر fram-out
var fram_out_elements = document.querySelectorAll('.fram');

// إضافة أحداث لإظهار وإخفاء العناصر المرتبطة عند التمرير على كل fram-out
fram_out_elements.forEach(function(fram_out) {
    var id = fram_out.getAttribute('data-id');
    var relatedElements = document.querySelectorAll('.myElement[data-id="' + id + '"]');
    var related_2_Elements = document.querySelectorAll('.love[data-id="' + id + '"]');
    var imgElement = fram_out.querySelector('img#pc');

    // إخفاء العناصر المرتبطة بشكل افتراضي
    relatedElements.forEach(function(element) {
        element.style.display = 'none';
    });
    related_2_Elements.forEach(function(element) {
        element.style.display = 'none';
    });

    // إظهار العناصر المرتبطة عند التمرير فوق fram-out
    fram_out.addEventListener('mouseover', function() {
        relatedElements.forEach(function(element) {
            element.style.display = 'block';
        });
        related_2_Elements.forEach(function(element) {
            element.style.display = 'block';
        });
        imgElement.src = './image/pc 1.png';
    });

    // إخفاء العناصر المرتبطة عند مغادرة الفأرة لـ fram-out
    fram_out.addEventListener('mouseout', function() {
        relatedElements.forEach(function(element) {
            element.style.display = 'none';
        });
        related_2_Elements.forEach(function(element) {
            element.style.display = 'none';
        });
        imgElement.src = './image/pc ' + id + '.png';
    });

    // التعامل مع عملية الضغط على زر "Add To Cart"
    var addToCartButton = fram_out.querySelector('.add-products button');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            // زيادة العداد
            cartCount++;

            // تحديث العداد المرئي
            var cartCounterElement = document.getElementById('cartCounter');
            if (cartCounterElement) {
                cartCounterElement.textContent = cartCount;
            }
        });
    }
});
// الحصول على عناصر DOM
// الحصول على عناصر DOM
var cartIcon = document.getElementById('cartIcon');
var cartModal = document.getElementById('cartModal');
var closeModal = document.getElementById('closeModal');
var cartCounter = document.getElementById('cartCounter');
var addToCartButtons = document.querySelectorAll('.add-products button');
var cartItemsContainer = document.getElementById('cartItemsContainer');
var itemsCount = document.getElementById('itemsCount');
var cartSubtotal = document.getElementById('cartSubtotal');

// إظهار النافذة المنبثقة عند النقر على أيقونة السلة
cartIcon.addEventListener('click', function() {
    cartModal.style.display = 'block';
});

// إخفاء النافذة المنبثقة عند النقر على X
closeModal.addEventListener('click', function() {
    cartModal.style.display = 'none';
});

// إخفاء النافذة المنبثقة عند النقر خارجها
window.addEventListener('click', function(event) {
    if (event.target == cartModal) {
        cartModal.style.display = 'none';
    }
});

// زيادة عدد العناصر في السلة عند النقر على زر "Add to Cart"
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var currentCount = parseInt(cartCounter.innerText);
        
        itemsCount.innerText = `${currentCount } item(s) in cart`;

        // الحصول على المنتج المرتبط بالزر
        var productElement = button.closest('.fram');
        var productTitle = productElement.querySelector('h3').innerText;
        var productImageSrc = productElement.querySelector('img').src;
        var productPrice = productElement.querySelector('.cost h3').innerText;

        // إنشاء عنصر جديد للسلة
        var cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${productImageSrc}" alt="Product Image">
            <p>${productTitle}</p>
            <span>${productPrice}</span>
            <span class="remove-item">&times;</span>
        `;

        // إضافة العنصر الجديد إلى السلة
        cartItemsContainer.appendChild(cartItem);

        // تحديث المجموع
        var currentSubtotal = parseFloat(cartSubtotal.innerText.replace('$', ''));
        var itemPrice = parseFloat(productPrice.replace('$', ''));
        cartSubtotal.innerText = `$${(currentSubtotal + itemPrice).toFixed(2)}`;

        // إضافة حدث إزالة العنصر عند النقر على زر الإزالة
        cartItem.querySelector('.remove-item').addEventListener('click', function() {
            cartItem.remove();
            cartCounter.innerText = parseInt(cartCounter.innerText) - 1;
            itemsCount.innerText = `${parseInt(cartCounter.innerText)} item(s) in cart`;
            cartSubtotal.innerText = `$${(parseFloat(cartSubtotal.innerText.replace('$', '')) - itemPrice).toFixed(2)}`;
        });
    });
});
cartIcon.addEventListener('click', function() {
    console.log("Cart icon clicked");
    cartModal.style.display = 'block';
});
//--------------------------------------------------------
//change img advertisements
var images = [
    './image/msi.png', 
    './image/news/pc.png', 
    './image/news/pc 2.png'
];
var currentIndex = 0;

var imgElement = document.getElementById('advertisement-image');
var leftButton = document.querySelector('.left-next');
var rightButton = document.querySelector('.right-next');

// وظيفة لتغيير الصورة
function changeImage(index) {
    imgElement.src = images[index];
}


setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
}, 5000);

// عند النقر على السهم الأيمن
rightButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
});

// عند النقر على السهم الأيسر
leftButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(currentIndex);
});
//---------------------------------------------------
//nav bar laptop
document.getElementById("laptopsButton").addEventListener("mouseover", function() {
    document.getElementById("laptopsDropdown").style.display = "block";
});

document.getElementById("laptopsDropdown").addEventListener("mouseleave", function() {
    this.style.display = "none";
});

//user 
document.getElementById("userIcon").addEventListener("click", function() {
    var dropdown = document.getElementById("userDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});

// إخفاء القائمة عند النقر خارجها
window.onclick = function(event) {
    if (!event.target.matches('#userIcon')) {
        var dropdowns = document.getElementsByClassName("dropdown-user-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
/*user sgin */
// لفتح نافذة تسجيل الدخول
document.getElementById("userDropdown").addEventListener("click", function(event) {
    if (event.target.textContent.trim() === "Sign In") {
        document.getElementById("signInModal").style.display = "flex";
    }
});

// لإغلاق نافذة تسجيل الدخول
document.getElementById("closeSignInModal").addEventListener("click", function() {
    document.getElementById("signInModal").style.display = "none";
});

// لإغلاق النافذة عند النقر خارج المحتوى
window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("signInModal")) {
        document.getElementById("signInModal").style.display = "none";
    }
});
// لإظهار نافذة إنشاء الحساب عند النقر على "Create one"
document.querySelector("#signInModal a").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("signInModal").style.display = "none";
    document.getElementById("createAccountModal").style.display = "flex";
});

// لإغلاق نافذة إنشاء الحساب
document.getElementById("closeCreateAccountModal").addEventListener("click", function() {
    document.getElementById("createAccountModal").style.display = "none";
});

// لإغلاق النافذة عند النقر خارج المحتوى
window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("createAccountModal")) {
        document.getElementById("createAccountModal").style.display = "none";
    }
});

// لتخزين البيانات في object عند إرسال النموذج
document.getElementById("createAccountForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var newFullName = document.getElementById("newFullName").value;
    var newEmail = document.getElementById("newEmail").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // التحقق من تطابق كلمات المرور
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    var newAccount = {
        name: newFullName,
        email: newEmail,
        password: newPassword
    };

    console.log("New Account Created:", newAccount);

    // إغلاق نافذة إنشاء الحساب
    document.getElementById("createAccountModal").style.display = "none";

    // يمكنك تنفيذ عمليات إضافية مثل حفظ البيانات في قاعدة بيانات هنا
});

// لإظهار نافذة تسجيل الدخول عند النقر على "Sign In"
document.getElementById("signInLink").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("signInModal").style.display = "flex";
});

// لإغلاق نافذة تسجيل الدخول
document.getElementById("closeSignInModal").addEventListener("click", function() {
    document.getElementById("signInModal").style.display = "none";
});

// لإغلاق النافذة عند النقر خارج المحتوى
window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("signInModal")) {
        document.getElementById("signInModal").style.display = "none";
    }
});

// لإظهار نافذة إنشاء الحساب عند النقر على "Create account"
document.getElementById("createAccountLink").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("createAccountModal").style.display = "flex";
});

// لإغلاق نافذة إنشاء الحساب
document.getElementById("closeCreateAccountModal").addEventListener("click", function() {
    document.getElementById("createAccountModal").style.display = "none";
});

// لإغلاق النافذة عند النقر خارج المحتوى
window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("createAccountModal")) {
        document.getElementById("createAccountModal").style.display = "none";
    }
});

// لتخزين البيانات في object عند إرسال النموذج
document.getElementById("createAccountForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var newFullName = document.getElementById("newFullName").value;
    var newEmail = document.getElementById("newEmail").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // التحقق من تطابق كلمات المرور
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    var newAccount = {
        name: newFullName,
        email: newEmail,
        password: newPassword
    };

    console.log("New Account Created:", newAccount);

    // إغلاق نافذة إنشاء الحساب
    document.getElementById("createAccountModal").style.display = "none";

    // عرض رسالة النجاح
    showSuccessMessage();
});

// عرض رسالة النجاح
function showSuccessMessage() {
    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // إخفاء الرسالة بعد 3 ثواني
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 2000);

    // إخفاء الرسالة عند الضغط على زر الإغلاق
    document.getElementById('closeSuccessMessage').onclick = function() {
        successMessage.style.display = 'none';
    };
}
// عندما يتم الضغط على زر "Sign In"
document.querySelector('form button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // منع إرسال النموذج الفعلي
    document.getElementById('signInModal').style.display = 'none';
    showSuccessMessage();
});

// عندما يتم الضغط على زر "Create"
document.querySelector('.modal-content p a').addEventListener('click', function(event) {
    event.preventDefault(); // منع الرابط من التصرف الافتراضي
    document.getElementById('signInModal').style.display = 'none';
    showSuccessMessage();
});

// عرض رسالة النجاح
function showSuccessMessage() {
    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // إخفاء الرسالة بعد 3 ثواني
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 3000);

    // إخفاء الرسالة عند الضغط على زر الإغلاق
    document.getElementById('closeSuccessMessage').onclick = function() {
        successMessage.style.display = 'none';
    };
}
//search
document.querySelector('.navbar input').style.display='none';
document.querySelector('.navbar .icon .close-search').style.display='none';
document.querySelector('.navbar .icon .open-search').addEventListener('click', function(event)
{

    document.querySelector('.navbar ul').style.display='none';

    document.querySelector('.navbar input').style.display='block';
    document.querySelector('.navbar .icon .open-search').style.display='none';
    document.querySelector('.navbar .icon .close-search').style.display='block';
    

})
document.querySelector('.navbar .icon .close-search').addEventListener('click', function(event){
    
document.querySelector('.navbar input').style.display='none';
document.querySelector('.navbar ul').style.display='flex';
document.querySelector('.navbar .icon .open-search').style.display='block';
document.querySelector('.navbar .icon .close-search').style.display='none';
}
)
/*menu */
document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navbar ul').classList.toggle('show-menu');
});
