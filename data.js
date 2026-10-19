// Danh sách Cô Giáo Chủ Nhiệm và 19 bóng hồng lớp A3K33 cùng lời chúc 20/10
const studentsData = [
  {
    id: 0,
    fullName: "Cô Tâm",
    shortName: "Cô Tâm",
    title: "Cô Giáo Chủ Nhiệm Kính Yêu 💐👑",
    avatarBg: "linear-gradient(135deg, #ffd700 0%, #ff758c 50%, #8a2be2 100%)",
    image: "images/co_tam.jpg",
    altImages: ["images/cotam.jpg", "images/0.jpg", "images/co_tam.png", "images/Cô Tâm.jpg"],
    isTeacher: true,
    wish: "Nhân ngày Phụ nữ Việt Nam 20/10, tập thể A3K33 chúng em xin gửi đến Cô Tâm - người thuyền trưởng tận tâm và người mẹ thứ hai của lớp lời tri ân sâu sắc và lời chúc ngọt ngào nhất. Cảm ơn cô vì đã luôn bao dung, nhẫn nại và dành trọn tình thương, tâm huyết để dìu dắt từng đứa chúng em qua từng tháng ngày dưới mái trường. Chúc cô luôn ngập tràn niềm vui, dồi dào sức khỏe, lúc nào cũng giữ nụ cười rạng rỡ trên môi và mãi là ngọn hải đăng soi sáng cho chúng em. Chúng em yêu cô rất nhiều! ❤️"
  },
  {
    id: 1,
    fullName: "Phùng Hải Anh",
    shortName: "Hải Anh",
    title: "Tiểu Thư Dễ Thương ✨",
    avatarBg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
    image: "images/phung_hai_anh.jpg",
    altImages: ["images/haianh.jpg", "images/1.jpg", "images/Phùng Hải Anh.jpg"],
    wish: "20/10 chúc Hải Anh lúc nào cũng xinh xắn, đáng yêu nha. Chúc bạn luôn được cưng chiều như em bé, muốn gì có nấy, lúc nào cũng có người sẵn sàng nghe bạn mè nheo và chiều từ A đến Z!"
  },
  {
    id: 2,
    fullName: "Trần Thùy Anh",
    shortName: "Thùy Anh",
    title: "Nàng Thơ Dịu Dàng 🌸",
    avatarBg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    image: "images/tran_thuy_anh.jpg",
    altImages: ["images/thuyanh.jpg", "images/2.jpg", "images/Trần Thùy Anh.jpg"],
    wish: "Chúc Thùy Anh 20/10 ngập tràn hạnh phúc nè. Nói thật cái nết dịu dàng của bạn ai nhìn cũng thấy mê, chúc bạn luôn được người ta nâng niu, coi bạn là ưu tiên số một nhé."
  },
  {
    id: 3,
    fullName: "Bùi Huyền Chi",
    shortName: "Chi",
    title: "Ngoan Xinh Yêu Đỉnh Cao 💖",
    avatarBg: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
    image: "images/bui_huyen_chi.jpg",
    altImages: ["images/chi.jpg", "images/3.jpg", "images/Bùi Huyền Chi.jpg"],
    wish: "20/10 chúc Chi lúc nào cũng giữ vững phong độ ngoan xinh yêu nha. Chúc bạn ngày càng đẹp ra, được săn đón và chiều chuộng hết mực, nay nhớ đòi quà nhiệt tình vào đấy!"
  },
  {
    id: 4,
    fullName: "Trần Thị Ngọc Hà",
    shortName: "Hà",
    title: "Báu Vật Ngọt Ngào 💎",
    avatarBg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    image: "images/tran_thi_ngoc_ha.jpg",
    altImages: ["images/ngocha.jpg", "images/ha.jpg", "images/4.jpg", "images/Trần Thị Ngọc Hà.jpg"],
    wish: "Chúc Hà ngày 20/10 thật vui vẻ và ngọt ngào. Nhìn bạn lúc nào cũng nhẹ nhàng dễ mến, chúc cho Hà luôn gặp người đối đãi thật lòng, lúc nào cũng coi bạn như báu vật."
  },
  {
    id: 5,
    fullName: "Vũ Nguyễn Gia Hân",
    shortName: "Hân",
    title: "Công Chúa Trà Sữa 🧋👑",
    avatarBg: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    image: "images/vu_nguyen_gia_han.jpg",
    altImages: ["images/giahan.jpg", "images/han.jpg", "images/5.jpg", "images/Vũ Nguyễn Gia Hân.jpg"],
    wish: "20/10 chúc Hân lúc nào cũng rạng rỡ nha. Bình thường đã đáng yêu rồi, hôm nay lại càng phải được cưng nhiều hơn. Chúc bạn luôn có người mua đồ ăn, trà sữa, cung phụng đúng chuẩn công chúa!"
  },
  {
    id: 6,
    fullName: "Lương Ngọc Mai Khanh",
    shortName: "Khanh",
    title: "Mỹ Nhân Cuốn Hút 🌹",
    avatarBg: "linear-gradient(135deg, #fdcbf1 0%, #e6cbfd 100%)",
    image: "images/luong_ngoc_mai_khanh.jpg",
    altImages: ["images/maikhanh.jpg", "images/khanh.jpg", "images/6.jpg", "images/Lương Ngọc Mai Khanh.jpg"],
    wish: "Chúc Khanh 20/10 thật xịn xò nha. Bạn vừa xinh vừa cuốn hút thế này thì người ta chỉ có đổ đứ đừ thôi, chúc Khanh làm gì cũng có người đứng sau hậu thuẫn, chiều chuộng hết lòng."
  },
  {
    id: 7,
    fullName: "Ngô Phương Linh",
    shortName: "Linh",
    title: "Cô Gái Duyên Dáng Tài Lộc 💰✨",
    avatarBg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    image: "images/ngo_phuong_linh.jpg",
    altImages: ["images/phuonglinh.jpg", "images/linh.jpg", "images/7.jpg", "images/Ngô Phương Linh.jpg"],
    wish: "20/10 chúc Linh luôn là cô gái nói chuyện duyên dáng, ai gặp cũng quý. Chúc bạn ngày càng xinh xẻo, được yêu thương hết nấc và ví lúc nào cũng rủng rỉnh tiền tiêu!"
  },
  {
    id: 8,
    fullName: "Nguyễn Đặng Bảo Ly",
    shortName: "Ly",
    title: "Nụ Cười Kẹo Ngọt 🍬",
    avatarBg: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    image: "images/nguyen_dang_bao_ly.jpg",
    altImages: ["images/baoly.jpg", "images/ly.jpg", "images/8.jpg", "images/Nguyễn Đặng Bảo Ly.jpg"],
    wish: "Chúc Ly 20/10 thật ấm áp nha. Chúc bạn lúc nào cũng giữ được cái nét ngọt ngào này, ra đường thì ai cũng mến, về nhà thì có người chăm lo từng li từng tí, không bao giờ phải chịu thiệt thòi."
  },
  {
    id: 9,
    fullName: "Phạm Thị Thu Oanh",
    shortName: "Oanh",
    title: "Quý Cô Sang Trọng 🌟",
    avatarBg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    image: "images/pham_thi_thu_oanh.jpg",
    altImages: ["images/thuoanh.jpg", "images/oanh.jpg", "images/9.jpg", "images/Phạm Thị Thu Oanh.jpg"],
    wish: "20/10 chúc Oanh ngày càng cuốn hút và mặn mà hơn. Chúc bạn lúc nào cũng tự tin, gặp được đúng người sẵn sàng chiều chuộng, đặt bạn lên vị trí cao nhất nhé!"
  },
  {
    id: 10,
    fullName: "Giang Thu Phương",
    shortName: "Thu Phương",
    title: "Nàng Thơ Đằm Thắm 🍃",
    avatarBg: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
    image: "images/giang_thu_phuong.jpg",
    altImages: ["images/thuphuong.jpg", "images/10.jpg", "images/Giang Thu Phương.jpg"],
    wish: "Chúc Thu Phương 20/10 thật nhiều niềm vui. Bạn lúc nào cũng toát ra vẻ đằm thắm khiến người ta muốn che chở, chúc bạn luôn được sống trong sự yêu thương và cưng chiều của mọi người."
  },
  {
    id: 11,
    fullName: "Nguyễn Thị Hoàng Phương",
    shortName: "Hoàng Phương",
    title: "Tâm Điểm Sang Chảnh 👑✨",
    avatarBg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    image: "images/nguyen_thi_hoang_phuong.jpg",
    altImages: ["images/hoangphuong.jpg", "images/11.jpg", "images/Nguyễn Thị Hoàng Phương.jpg"],
    wish: "Chúc Hoàng Phương 20/10 cực kỳ rực rỡ và sang chảnh nha. Gu đỉnh, mặt xinh, chúc bạn đi đâu cũng là tâm điểm chú ý, được người ta săn đón và yêu thương hết nấc!"
  },
  {
    id: 12,
    fullName: "Nguyễn Phương Thảo",
    shortName: "Thảo",
    title: "Thiên Thần Hiền Hòa 🕊️",
    avatarBg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    image: "images/nguyen_phuong_thao.jpg",
    altImages: ["images/phuongthao.jpg", "images/thao.jpg", "images/12.jpg", "images/Nguyễn Phương Thảo.jpg"],
    wish: "Chúc Thảo 20/10 an yên và thật nhiều hạnh phúc. Nết bạn hiền lành, dễ thương thế này thì xứng đáng có được tất cả những điều tốt đẹp nhất, chúc Thảo luôn có người thương yêu vô điều kiện."
  },
  {
    id: 13,
    fullName: "Phạm Yến Thi",
    shortName: "Thi",
    title: "Nữ Hoàng Tinh Tế 💫",
    avatarBg: "linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",
    image: "images/pham_yen_thi.jpg",
    altImages: ["images/yenthi.jpg", "images/thi.jpg", "images/13.jpg", "images/Phạm Yến Thi.jpg"],
    wish: "Chúc Thi 20/10 nhận quà mỏi tay nhé. Chúc bạn lúc nào cũng xinh xắn, tinh tế, mở lời câu nào là người ta xiêu lòng câu đấy, cuộc sống lúc nào cũng ngập tràn mật ngọt!"
  },
  {
    id: 14,
    fullName: "Nguyễn Minh Thư",
    shortName: "Thư",
    title: "Soái Muội Ngầu Đét 😎🔥",
    avatarBg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    image: "images/nguyen_minh_thu.jpg",
    altImages: ["images/minhthu.jpg", "images/thu.jpg", "images/14.jpg", "images/Nguyễn Minh Thư.jpg"],
    wish: "20/10 vui vẻ nha Thư! Chúc người anh em lúc nào cũng ngầu đét, phong độ vững vàng, sống chill chill thoải mái. Việc gì cũng thuận buồm xuôi gió, ăn ngon ngủ kỹ, ví luôn dày và giữ vững cái chất riêng cực đỉnh nhé!"
  },
  {
    id: 15,
    fullName: "Phạm Thị Quỳnh Trang",
    shortName: "Quỳnh Trang",
    title: "Bà Hoàng Quyến Rũ 👑💐",
    avatarBg: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
    image: "images/pham_thi_quynh_trang.jpg",
    altImages: ["images/quynhtrang.jpg", "images/15.jpg", "images/Phạm Thị Quỳnh Trang.jpg"],
    wish: "20/10 chúc Quỳnh Trang luôn giữ trọn vẻ xinh đẹp và ngọt ngào này nhé. Chúc bạn lúc nào cũng là số một trong mắt người ta, được nâng niu và chiều như bà hoàng!"
  },
  {
    id: 16,
    fullName: "Trần Hoàng Mai Trang",
    shortName: "Mai Trang",
    title: "Vitamin Năng Lượng ☀️⚡",
    avatarBg: "linear-gradient(135deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%)",
    image: "images/tran_hoang_mai_trang.jpg",
    altImages: ["images/maitrang.jpg", "images/16.jpg", "images/Trần Hoàng Mai Trang.jpg"],
    wish: "Chúc Mai Trang 20/10 ngập tràn niềm vui nha! Người đâu mà vừa năng lượng lại vừa cuốn hút. Chúc bạn lúc nào cũng hạnh phúc, luôn có người sẵn sàng làm mọi thứ chỉ để thấy bạn cười."
  },
  {
    id: 17,
    fullName: "Nguyễn Cẩm Vân",
    shortName: "Vân",
    title: "Mây Trắng Dịu Êm ☁️🌸",
    avatarBg: "linear-gradient(135deg, #e3eeff 0%, #f3e7e9 100%)",
    image: "images/nguyen_cam_van.jpg",
    altImages: ["images/camvan.jpg", "images/van.jpg", "images/17.jpg", "images/Nguyễn Cẩm Vân.jpg"],
    wish: "20/10 chúc Vân thật nhiều điều ngọt ngào. Chúc cho cô gái dịu dàng này lúc nào cũng được yêu thương, chẳng bao giờ phải buồn phiền hay chịu ấm ức gì nhé!"
  },
  {
    id: 18,
    fullName: "Lê Hà Vy",
    shortName: "Hà Vy",
    title: "Công Nương Lộng Lẫy 💎✨",
    avatarBg: "linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)",
    image: "images/le_ha_vy.jpg",
    altImages: ["images/havy.jpg", "images/18.jpg", "images/Lê Hà Vy.jpg"],
    wish: "Chúc Hà Vy 20/10 thật vui vẻ và lộng lẫy hết nấc! Bạn vừa xinh vừa có duyên thế này ai mà không mê. Chúc bạn lúc nào cũng được cưng chiều, hôm nay nhớ tận hưởng trọn vẹn nhé!"
  },
  {
    id: 19,
    fullName: "Trần Thị Yến Vy",
    shortName: "Yến Vy",
    title: "Bé Ngoan Cưng Chiều 🍬💕",
    avatarBg: "linear-gradient(135deg, #fbc2eb 0%, #a18cd1 100%)",
    image: "images/tran_thi_yen_vy.jpg",
    altImages: ["images/yenvy.jpg", "images/19.jpg", "images/Trần Thị Yến Vy.jpg"],
    wish: "20/10 chúc Yến Vy lúc nào cũng ngọt ngào, đáng yêu thế này nha. Chúc bạn lúc nào cũng có người bảo bọc, cưng chiều hết nấc, cả đời chẳng cần lo nghĩ chuyện gì!"
  }
];
