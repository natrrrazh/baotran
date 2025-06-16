

document.addEventListener('DOMContentLoaded', function () {
// Dữ liệu mẫu cho các tỉnh
const provinceData = {
    hanoi: {
        name: "Hà Nội",
        image: "image/hanoi.jpg",
        tourism: "Nổi bật với Hồ Gươm, Văn Miếu, phố cổ, ẩm thực đặc sắc.",
        history: "Thủ đô ngàn năm văn hiến, trung tâm chính trị – văn hóa.",
        food: "Phở, bún chả, chả cá Lã Vọng, bánh cuốn Thanh Trì"
    },
    hochiminh : {
        name: "Hồ Chí Minh",
        image:"image/hcm.jpg",
        tourism: "Nổi tiếng với chợ Bến Thành, phố đi bộ Nguyễn Huệ, bảo tàng, các quán cà phê sôi động.",
        history : "Thành phố năng động, trung tâm thương mại và văn hóa phía Nam Việt Nam.",
        food : " Bánh mì, hủ tiếu, cơm tấm, cà phê sữa đá đặc trưng."
    },
    thuathienhue : {
        name: "Thừa Thiên Huế ",
        image:"image/hue.jpg",
        tourism: "Đại Nội, lăng tẩm vua Nguyễn, sông Hương thơ mộng.",
        history : "Kinh đô của triều đại nhà Nguyễn.",
        food : "Bún bò Huế, cơm hến."

    },
    cantho : {
      name: "Cần Thơ",
      image:"image/cantho.jpg",
      tourism:" Chợ nổi Cái Răng, nhà cổ Bình Thủy, vườn cây trái.",
        history: " Trung tâm Đồng bằng sông Cửu Long.",
        food:"  Lẩu mắm, bún mắm, cá lóc nướng trui."
    },
    haiphong: {
        name:"Hải Phòng",
        image:"image/haiphong.jpg",
        tourism:"Đảo Cát Bà, vịnh Hạ Long, đền Độc Cước",
        history:"Thành phố cảng lớn miền Bắc, trung tâm quân sự và kinh tế ",
        food:"Bánh đa cua, nem cua bể, chả cá Lã Vọng",
    },
    quangninh:{
        name:"Quảng Ninh",
        image:"image/quangninh.jpg",
        tourism:"Vịnh Hạ Long, động Thiên Cung, đảo Cô Tô",
        history:"Trung tâm khai thác than, phát triển du lịch biển đảo",
        food:" Sá sùng, chả mực Hạ Long, bún hải sản",
    },
    quangnam: {
        name:"Quảng Nam",
        image:"image/quangnam.jpg",
        tourism:"Phố cổ Hội An, thánh địa Mỹ Sơn...",
        history:" Trung tâm văn hóa Óc Eo và Champa cổ",
        food:"Cao lầu, mì Quảng, bánh tổ",
    },
    nghean:{
        name:"Nghệ An",
        image:"image/nghean.jpg",
        tourism:"Quê Bác Hồ, biển Cửa Lò, núi Quyết",
        history:"Vùng đất cổ, trung tâm cách mạng miền Trung",
        food:" Cháo lươn, cơm cháy, cá mát",
    },
    thanhhoa:{
        name:"Thanh Hóa",
        image:"image/thanhhoa.jpg",
        tourism:" Sầm Sơn, Pù Luông, đảo Hòn Mê",
        history:"Vùng đất văn hóa Đông Sơn, phát triển lâu đời",
        food:"Nem chua Thanh Hóa, bánh cuốn ngọt, cá suối"
    },
    binhdinh:{
        name:"Bình Định",
        image:"image/binhdinh.jpg",
        tourism:"Eo Gió, Ghềnh Ráng, tháp Đôi",
        history:"Vùng đất võ thuật nổi tiếng, Champa cổ",
        food:"Bánh ít lá gai, nem nướng, bún chả cá"
    },
    khanhhoa:{
        name:"Khánh Hòa",
        image:"image/khanhhoa.jpg",
        tourism:"Nha Trang, đảo Hòn Tre, vịnh Vân Phong",
        history:" Cảng cổ, điểm giao thương biển miền Trung",
        food:"Bún chả cá, nem nướng Ninh Hòa, hải sản tươi"
    },
    bacninh:{
        name:"Bắc Ninh",
        image:"image/bacninh.jpg",
        tourism:" Đền Đô linh thiêng, làng quan họ Trù Sơn, các festival dân gian đặc sắc.",
        history:"Cố đô xưa, trung tâm văn hóa Kinh Bắc với truyền thống hát quan họ lâu đời.",
        food:"Bánh phu thê, bò nướng ống tre, nem chua Đại Bái."
    },
    hungyen:{
        name:"Hưng Yên",
        image:"image/hungyen.jpg",
        tourism:"Làng gốm Bát Tràng, đền Mẫu Đông Hồ, vườn nhãn lồng Hưng Yên nổi tiếng.",
        history:"Vùng đất cổ có vị trí chiến lược trên trục giao thương Bắc Bộ.",
        food:"Bánh đậu xanh, chuối ngự và cá rô phi nướng."
    },
    hatinh:{
        name:"Hà Tĩnh",
        image:"image/hatinh.jpg",
        tourism:" Biển Thiên Cầm, khu di tích Nguyễn Du, núi Hồng Lĩnh hùng vĩ.",
        history:" Miền đất anh hùng, quê hương nhiều danh nhân văn hóa và cách mạng.",
        food:"Cháo canh, gà nướng Tiến Thủy, rượu nếp.",

    },
    phuquoc:{
        name:"Phú Quốc",
        image:"image/phuquoc.jpg",
        tourism:"Bãi Sao, Vinpearl Safari, Dinh Cậu.",
        history:"Nơi có nhiều bãi biển đẹp và khu nghỉ dưỡng sang trọng.",
        food:"Nước mắm Phú Quốc, hải sản tươi sống, gỏi cá trích.",
    },
    yenbai:{
        name:"Yên Bái",
        image:"image/yenbai.jpg",
        tourism:" Mù Cang Chải, ruộng bậc thang.",
        history:"Nơi có nhiều cảnh đẹp thiên nhiên và văn hóa đặc sắc.",
        food:"Xôi ngũ sắc, cá nướng, rượu ngô.",
    },
       binhduong:{
        name:"Bình Dương",
        image:"image/binhduong.jpg",
        tourism:": Khu công nghiệp, Làng tre Phú An.",
        history:": Trung tâm công nghiệp lớn, phát triển nhanh chóng.",
        food:"bánh bèo , bánh xèo , gà nướng",
       },
    daklak:{
        name:"Đăk Lăk",
        image:"image/daklak.jpg",
        tourism:"Buôn Ma Thuột, hồ Lăk, thác Dray Nur.",
        history:"Trung tâm vùng Tây Nguyên với văn hóa dân tộc đa dạng và cảnh sắc thiên nhiên hùng vĩ.",
        food:" Cà phê Buôn Ma Thuột, cơm lam, gà nướng.",
    },
    bentre:{
        name:"Bến Tre",
        image:"image/bentre.jpg",
        tourism:"Vườn cây ăn trái, chợ nổi trên sông.",
        history:"Nơi có truyền thống cách mạng và văn hóa miệt vườn.",
        food:"Bánh tráng Bến Tre, kẹo dừa, hải sản.",
    },
    langson:{
        name:"Lạng Sơn",
        image:"image/langson.jpg",
        tourism:" Núi Nàng Tô, động Tam Thanh, cửa khẩu Đông Khê.",
        history:" Vùng đất, biên giới với lịch sử lâu đời và văn hóa dân tộc đa dạng.",
        food:"Bánh cuốn, phở chua, măng chua.",
    },
    bariavungtau:{
        name: "Bà Rịa -Vũng Tàu",
        image:"image/vungtau.jpg",
        tourism:"Bãi biển Vũng Tàu, mũi Nghinh Phong, tượng Chúa Kitô.",
        history:" Thành phố cảng lớn với nền kinh tế phát triển nhanh chóng.",
        food:"Hải sản tươi sống, bánh khọt, lẩu cá đuối.",
    },
    quangtri:{
        name:"Quảng Trị ",
        image:"image/quangtri.jpg",
        tourism:"Thành cổ Quảng Trị, bãi biển Cửa Tùng.",
        history:"Nơi có nhiều di tích lịch sử từ thời kỳ kháng chiến chống Mỹ.",
        food:"Bánh khoái, bún thịt nướng, nem lụi.",
    },
    laocai:{
        name:"Lào Cai",
        image:"image/laocai.jpg",
        tourism:"Sapa, Fansipan, thác Bạc.",
        history:"Cửa ngõ giao thương với Trung Quốc, đa dạng văn hóa dân tộc.",
        food:"Thắng cố, xôi ngũ sắc, cá hồi Sapa.",
    },
    kiengiang:{
        name:"Kiên Giang",
        image:"image/kiengiang.jpg",
        tourism:" Phú Quốc, Hà Tiên, Rạch Giá.",
        history:"Vùng đất có nhiều di tích lịch sử và văn hóa, ảnh hưởng từ các nền văn minh khác nhau.",
        food:"Hải sản tươi sống, bún kèn, bánh canh chả cá.",
    },


    // ... Thêm các tỉnh khác
    danang: {
        name: "Đà Nẵng",
        image: "image/danang.png",
        tourism: "Nổi tiếng với bãi biển Mỹ Khê, cầu Rồng, Ngũ Hành Sơn.",
        history: "Thành phố trẻ, năng động, trung tâm du lịch miền Trung.",
        food: "Mì Quảng, bánh tráng cuốn thịt heo, bún chả cá"
    },
};

const infoBox = document.getElementById('province-info');
const svg = document.getElementById('vietnam-map');
const paths = svg.querySelectorAll('path[data-province]');

paths.forEach(path => {
    path.addEventListener('mouseenter', function () {
        const provinceId = path.getAttribute('data-province').toLowerCase();
        const data = provinceData[provinceId];
        if (!data) return;

        infoBox.innerHTML = `
            <button class="close-btn">×</button>
            <div class="info-content" style="display:flex; gap:10px;">
                <div class="image"><img src="${data.image}" alt="${data.name}" width="100"></div>
                <div class="text">
                    <h4>${data.name}</h4>
                    <p><b>Du lịch:</b> ${data.tourism}</p>
                    <p><b>Lịch sử:</b> ${data.history}</p>
                    <p><b>Ẩm thực:</b> ${data.food || "Đang cập nhật..."}</p>
                    <p style="color:blue; cursor:pointer;" id="go-to-page">>> Xem chi tiết</p>
                </div>
            </div>
        `;

        infoBox.style.left = `${svg.getBoundingClientRect().right - 200}px`;
        infoBox.style.top = `${svg.getBoundingClientRect().top + 120}px`;
        infoBox.style.display = 'block';

        infoBox.querySelector('.close-btn').addEventListener('click', () => {
            infoBox.style.display = 'none';
        });

        const goToPage = infoBox.querySelector('#go-to-page');
        goToPage.addEventListener('click', () => {
            window.location.href = `${provinceId}.html`;
        });
    });
});
function removeVietnameseTones(str) {
    return str.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d").replace(/Đ/g, "D")
        .toLowerCase();
}

// Mảng tên 63 tỉnh thành Việt Nam
const provinces = [
    "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", "Bắc Ninh",
    "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước", "Bình Thuận", "Cà Mau",
    "Cần Thơ", "Cao Bằng", "Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai",
    "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh", "Hải Dương",
    "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang",
    "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định",
    "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên", "Quảng Bình",
    "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La",
    "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang",
    "TP Hồ Chí Minh", "Trà Vinh", "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
];

document.querySelector(".search-form").addEventListener("submit", function(e){
    e.preventDefault();
    const keyword = this.querySelector("input").value.trim();
    const normalizedKeyword = removeVietnameseTones(keyword);

    const matched = provinces.find(province => {
        const normalizedProvince = removeVietnameseTones(province);
        return normalizedProvince.includes(normalizedKeyword);
    });

    if (matched) {
        const url = removeVietnameseTones(matched).replace(/\s+/g, "") + ".html";
        window.location.href = url;
    } else {
        alert("Không tìm thấy kết quả cho: " + keyword);
    }
});

const header = document.getElementById('header');
const toggleBtn = document.getElementById('toggleBtn');
let isHidden = false;

toggleBtn.addEventListener('click', () => {
    isHidden = !isHidden;
    header.classList.toggle('header-hidden', isHidden);
toggleBtn.innerHTML = isHidden ? '<i class="fas fa-chevron-down"></i>' : '<i class="fas fa-chevron-up"></i>';
});                         
});
