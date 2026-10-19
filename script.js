// ====================================================================
// SCRIPT: DISNEY FAIRY TALE 20/10 - A3K33
// ĐỒNG BỘ CHỮ VIẾT TAY & THÊM CÔ TÂM GVCN
// ====================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Hoạt ảnh mở màn chữ viết tay nghệ thuật Disney
  initDisneyIntroAnimation();

  // 2. Khởi tạo canvas sao lấp lánh (Star & Pixie Dust)
  initStarCanvas();

  // 3. Khởi tạo Băng chuyền ảnh Sushi (Conveyor Belt với Cô Tâm & 19 bạn nữ)
  initSushiConveyor();

  // 4. Khởi tạo Ô tìm kiếm và gợi ý tên (Quick pills & Autocomplete)
  initNameSearch();

  // 5. Khởi tạo Tải ảnh tập thể lớp lưu trữ LocalStorage
  initClassPhotoManager();

  // 6. Khởi tạo sự kiện đóng mở bức thư hoàng gia
  initLetterModalControls();
});

// ====================================================================
// 1. DISNEY INTRO HANDWRITING ANIMATION (CHỮ VIẾT TAY HOẠT HÌNH DISNEY)
// ====================================================================
function initDisneyIntroAnimation() {
  const titleEl = document.getElementById("disneyTitle");
  if (!titleEl) return;

  const introText = "xin chào các bóng hồng của a3k33";
  let isWriting = false;

  function runAnimation() {
    if (isWriting) return;
    isWriting = true;

    titleEl.classList.remove("finished-writing");
    titleEl.innerHTML = "";

    const textSpan = document.createElement("span");
    textSpan.className = "writing-text";
    
    const wand = document.createElement("span");
    wand.className = "magic-wand-tip";
    wand.innerHTML = "✨";

    titleEl.appendChild(textSpan);
    titleEl.appendChild(wand);

    let charIdx = 0;

    function typeNextChar() {
      if (charIdx < introText.length) {
        textSpan.textContent += introText[charIdx];
        charIdx++;

        // Tạo bụi tiên phát sáng ngẫu nhiên
        if (Math.random() > 0.45) {
          spawnIntroSparkle(wand);
        }

        const delay = introText[charIdx - 1] === " " ? 85 : (42 + Math.random() * 32);
        setTimeout(typeNextChar, delay);
      } else {
        // Viết xong dòng chữ
        setTimeout(() => {
          wand.style.opacity = "0";
          titleEl.classList.add("finished-writing");
          isWriting = false;
          playFairyChime();
        }, 400);
      }
    }

    typeNextChar();
  }

  // Chạy ngay khi tải trang
  setTimeout(runAnimation, 400);

  // Bấm vào dòng chữ để xem lại hoạt cảnh viết chữ
  titleEl.addEventListener("click", () => {
    runAnimation();
  });
}

function spawnIntroSparkle(targetEl) {
  if (!targetEl) return;
  const rect = targetEl.getBoundingClientRect();
  const sparkle = document.createElement("div");
  sparkle.className = "intro-sparkle-dot";
  sparkle.innerHTML = Math.random() > 0.5 ? "✦" : "★";
  sparkle.style.position = "fixed";
  sparkle.style.left = `${rect.left + rect.width / 2 + (Math.random() - 0.5) * 20}px`;
  sparkle.style.top = `${rect.top + rect.height / 2 + (Math.random() - 0.5) * 20}px`;
  sparkle.style.fontSize = `${Math.random() * 12 + 10}px`;
  sparkle.style.color = Math.random() > 0.5 ? "#ffd700" : "#ffffff";
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "999";
  sparkle.style.transition = "all 0.8s ease-out";
  sparkle.style.textShadow = "0 0 8px #ffd700";

  document.body.appendChild(sparkle);

  requestAnimationFrame(() => {
    sparkle.style.transform = `translate(${(Math.random() - 0.5) * 40}px, ${Math.random() * 30 + 10}px) scale(0)`;
    sparkle.style.opacity = "0";
  });

  setTimeout(() => {
    sparkle.remove();
  }, 850);
}

// ====================================================================
// 2. STAR & PIXIE DUST CANVAS
// ====================================================================
function initStarCanvas() {
  const canvas = document.getElementById("starCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const stars = [];
  const starCount = 95;

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.8,
      speedY: Math.random() * 0.35 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.8 + 0.2,
      fadeSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      color: Math.random() > 0.4 ? "#ffd700" : (Math.random() > 0.5 ? "#ffffff" : "#d18aff")
    });
  }

  // Mouse sparkle trail
  const trail = [];
  window.addEventListener("mousemove", (e) => {
    if (Math.random() > 0.6) {
      trail.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 3 + 2,
        opacity: 1,
        color: Math.random() > 0.5 ? "#ffd700" : "#ff758c"
      });
    }
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach((star) => {
      star.y -= star.speedY;
      star.x += star.speedX;
      star.opacity += star.fadeSpeed;

      if (star.opacity >= 1 || star.opacity <= 0.15) {
        star.fadeSpeed = -star.fadeSpeed;
      }
      if (star.y < 0) {
        star.y = height;
        star.x = Math.random() * width;
      }
      if (star.x < 0) star.x = width;
      if (star.x > width) star.x = 0;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = star.color;
      ctx.globalAlpha = star.opacity;
      ctx.shadowBlur = 8;
      ctx.shadowColor = star.color;
      ctx.fill();
    });

    for (let i = trail.length - 1; i >= 0; i--) {
      const p = trail[i];
      p.y += 0.8;
      p.opacity -= 0.025;
      if (p.opacity <= 0) {
        trail.splice(i, 1);
        continue;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(render);
  }

  render();
}

// ====================================================================
// 3. SOUND SYNTHESIZER (HIỆU ỨNG ÂM THANH DISNEY)
// ====================================================================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playFairyChime() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98, 2093.0];
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);

    gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.07);
    gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + idx * 0.07 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.07 + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + idx * 0.07);
    osc.stop(ctx.currentTime + idx * 0.07 + 0.65);
  });
}

function playTickSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(800 + Math.random() * 300, ctx.currentTime);

  gain.gain.setValueAtTime(0.08, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.045);
}

function playJackpotFanfare() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const chords = [
    { notes: [523.25, 659.25, 783.99], time: 0, dur: 0.25 },
    { notes: [587.33, 739.99, 880.0], time: 0.22, dur: 0.25 },
    { notes: [659.25, 830.61, 987.77], time: 0.44, dur: 0.3 },
    { notes: [783.99, 987.77, 1174.66, 1567.98], time: 0.72, dur: 1.2 }
  ];

  chords.forEach(chord => {
    chord.notes.forEach(freq => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + chord.time);

      gain.gain.setValueAtTime(0.001, ctx.currentTime + chord.time);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + chord.time + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + chord.time + chord.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + chord.time);
      osc.stop(ctx.currentTime + chord.time + chord.dur + 0.05);
    });
  });
}

// ====================================================================
// 4. SUSHI CONVEYOR BELT (BĂNG CHUYỀN ẢNH SUSHI)
// ====================================================================
function initSushiConveyor() {
  const belt = document.getElementById("conveyorBelt");
  if (!belt || typeof studentsData === "undefined") return;

  // Lặp lại danh sách để băng chuyền chạy mượt mà vô tận
  const fullList = [...studentsData, ...studentsData];

  belt.innerHTML = "";

  fullList.forEach((student) => {
    const card = document.createElement("div");
    card.className = "sushi-plate-card" + (student.isTeacher ? " teacher-vip" : "");
    card.setAttribute("data-id", student.id);
    card.setAttribute("title", `Bấm để nhận thiệp chúc của ${student.fullName}`);

    const savedPhoto = localStorage.getItem(`student_photo_${student.id}`);
    const imgSrc = savedPhoto || student.image;

    card.innerHTML = `
      <div class="sushi-avatar-frame">
        <div class="sushi-avatar-inner" style="background: ${student.avatarBg};">
          <img 
            class="sushi-avatar-img" 
            src="${imgSrc}" 
            alt="${student.fullName}"
            onerror="if(!this.src.endsWith('.svg')){ this.src = this.src + '.svg'; } else { this.style.display='none'; this.nextElementSibling.style.display='flex'; }"
          >
          <div class="sushi-avatar-fallback" style="display: none;">
            <div class="fallback-crown">${student.isTeacher ? "💐👑" : "👑"}</div>
            <div class="fallback-initials">${getInitials(student.shortName)}</div>
          </div>
        </div>
      </div>
      <div class="sushi-dish-base"></div>
      <div class="sushi-name-tag">
        <span class="student-num">${student.isTeacher ? "GVCN" : "#" + String(student.id).padStart(2, "0")}</span>
        <span class="student-name">${student.fullName}</span>
      </div>
    `;

    // Click vào đĩa sushi -> Tự động điền tên và mở thiệp
    card.addEventListener("click", () => {
      const input = document.getElementById("studentNameInput");
      if (input) {
        input.value = student.fullName;
      }
      playFairyChime();
      triggerGacha(student);
    });

    belt.appendChild(card);
  });
}

function getInitials(name) {
  if (!name) return "👑";
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

// ====================================================================
// 5. NAME SEARCH, AUTOCOMPLETE & MỞ THIỆP
// ====================================================================
function initNameSearch() {
  const input = document.getElementById("studentNameInput");
  const clearBtn = document.getElementById("clearInputBtn");
  const datalist = document.getElementById("namesDatalist");
  const pillsContainer = document.getElementById("quickPillsContainer");
  const spinBtn = document.getElementById("btnSpinGacha");
  const errorMsg = document.getElementById("gachaErrorMsg");

  if (!input || typeof studentsData === "undefined") return;

  // Điền danh sách autocomplete (Datalist)
  datalist.innerHTML = "";
  studentsData.forEach(student => {
    const opt = document.createElement("option");
    opt.value = student.fullName;
    datalist.appendChild(opt);
  });

  // Điền các nút chọn nhanh (Cô Tâm đứng đầu tiên, sau đó đến 19 bạn nữ)
  pillsContainer.innerHTML = "";
  studentsData.forEach(student => {
    const pill = document.createElement("button");
    pill.className = "name-pill" + (student.isTeacher ? " teacher-pill" : "");
    pill.textContent = student.isTeacher ? `💐 ${student.fullName} (GVCN)` : student.fullName;
    pill.addEventListener("click", () => {
      input.value = student.fullName;
      clearBtn.style.display = "block";
      errorMsg.style.display = "none";
      document.querySelectorAll(".name-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      playFairyChime();
    });
    pillsContainer.appendChild(pill);
  });

  // Input behavior
  input.addEventListener("input", () => {
    clearBtn.style.display = input.value.trim() ? "block" : "none";
    errorMsg.style.display = "none";
  });

  clearBtn.addEventListener("click", () => {
    input.value = "";
    clearBtn.style.display = "none";
    input.focus();
  });

  // Nút Mở Thiệp Chúc Mừng 20/10
  spinBtn.addEventListener("click", () => {
    const rawVal = input.value.trim();
    if (!rawVal) {
      showError("Nàng ơi, hãy gõ họ và tên của mình vào ô trên nhé! ✨");
      return;
    }

    const matched = findStudent(rawVal);
    if (!matched) {
      showError("Ui, tên này hình như chưa khớp trong danh sách lớp A3K33. Nàng chọn từ các nút bên dưới thử nhé! 💖");
      return;
    }

    errorMsg.style.display = "none";
    triggerGacha(matched);
  });

  function showError(msg) {
    errorMsg.textContent = msg;
    errorMsg.style.display = "block";
    input.focus();
  }
}

// Tìm kiếm thông minh (hỗ trợ Cô Tâm, Tâm, tên có dấu, không dấu)
function findStudent(query) {
  const cleanQ = normalizeStr(query);

  // 1. Kiểm tra Cô Tâm
  if (cleanQ === "tam" || cleanQ === "co tam" || cleanQ === "gvcn" || cleanQ === "co giao tam" || cleanQ === "co giao") {
    const teacher = studentsData.find(s => s.isTeacher);
    if (teacher) return teacher;
  }

  // 2. Khớp chính xác tên đầy đủ
  let found = studentsData.find(s => normalizeStr(s.fullName) === cleanQ);
  if (found) return found;

  // 3. Khớp theo tên gọi (shortName)
  found = studentsData.find(s => normalizeStr(s.shortName) === cleanQ);
  if (found) return found;

  // 4. Khớp chứa chuỗi (contains)
  found = studentsData.find(s => normalizeStr(s.fullName).includes(cleanQ));
  if (found) return found;

  return null;
}

function normalizeStr(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim();
}

// ====================================================================
// 6. HIỆU ỨNG XOAY MỞ THIỆP
// ====================================================================
let currentSelectedStudent = null;

function triggerGacha(targetStudent) {
  currentSelectedStudent = targetStudent;
  const overlay = document.getElementById("gachaModalOverlay");
  const reelStrip = document.getElementById("slotReelStrip");
  const lightRays = document.getElementById("lightRays");
  const statusText = document.getElementById("gachaStatusText");

  if (!overlay || !reelStrip) return;

  // Hiển thị modal xoay
  overlay.classList.add("active");
  lightRays.classList.remove("active");
  statusText.textContent = `✨ Đang mở phong thư bí mật dành cho ${targetStudent.fullName}... ✨`;
  playFairyChime();

  // Tạo dải items quay lướt qua, kết thúc chắc chắn là targetStudent
  const totalReelCount = 26;
  const reelItems = [];

  for (let i = 0; i < totalReelCount - 1; i++) {
    const rand = studentsData[Math.floor(Math.random() * studentsData.length)];
    reelItems.push(rand);
  }
  reelItems.push(targetStudent);

  // Render các slot item
  reelStrip.innerHTML = "";
  reelItems.forEach((student) => {
    const item = document.createElement("div");
    item.className = "slot-item";

    const savedPhoto = localStorage.getItem(`student_photo_${student.id}`);
    const imgSrc = savedPhoto || student.image;

    item.innerHTML = `
      <div class="slot-item-avatar" style="background: ${student.avatarBg};">
        <img 
          src="${imgSrc}" 
          alt="${student.fullName}"
          onerror="if(!this.src.endsWith('.svg')){ this.src = this.src + '.svg'; } else { this.style.display='none'; this.nextElementSibling.style.display='flex'; }"
        >
        <div class="sushi-avatar-fallback" style="display: none; height: 100%;">
          <div class="fallback-crown" style="font-size: 2rem;">${student.isTeacher ? "💐👑" : "👑"}</div>
          <div class="fallback-initials" style="font-size: 1.5rem;">${getInitials(student.shortName)}</div>
        </div>
      </div>
      <div class="slot-item-name">${student.fullName}</div>
      <div class="slot-item-title">${student.title}</div>
    `;
    reelStrip.appendChild(item);
  });

  let itemHeight = 280;
  if (window.innerWidth <= 480) {
    itemHeight = 190;
  } else if (window.innerWidth <= 768) {
    itemHeight = 230;
  }
  const targetTranslate = -(totalReelCount - 1) * itemHeight;

  // Reset vị trí
  reelStrip.style.transition = "none";
  reelStrip.style.transform = "translateY(0px)";

  // Âm thanh lách cách
  let tickInterval = setInterval(() => {
    playTickSound();
  }, 120);

  // Bắt đầu quay
  setTimeout(() => {
    reelStrip.style.transition = "transform 3.2s cubic-bezier(0.12, 0.8, 0.2, 1)";
    reelStrip.style.transform = `translateY(${targetTranslate}px)`;
  }, 50);

  // Dừng lại và chúc mừng
  setTimeout(() => {
    clearInterval(tickInterval);
    playJackpotFanfare();

    lightRays.classList.add("active");
    statusText.innerHTML = `✨ TADA! Lời chúc của <b>${targetStudent.fullName}</b> đã sẵn sàng! ✨`;

    // Confetti ăn mừng
    if (typeof confetti === "function") {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#ffd700", "#ff758c", "#8a2be2", "#ffffff", "#00ffff"]
      });
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 60,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 60,
          origin: { x: 1 }
        });
      }, 350);
    }

    // Sau 1.4s mở tấm thiệp thư dài kéo xuống
    setTimeout(() => {
      overlay.classList.remove("active");
      openRoyalScrollLetter(targetStudent);
    }, 1400);

  }, 3300);
}

// ====================================================================
// 7. ROYAL LONG SCROLL LETTER (TẤM THIỆP THƯ DÀI KÉO XUỐNG)
// ====================================================================
function openRoyalScrollLetter(student) {
  currentSelectedStudent = student;
  const modal = document.getElementById("letterModalOverlay");
  const nameEl = document.getElementById("letterRecipientName");
  const titleEl = document.getElementById("letterSpecialTitle");
  const wishEl = document.getElementById("letterWishText");
  const imgEl = document.getElementById("letterGirlImg");
  const fallbackEl = document.getElementById("letterGirlFallback");
  const fallbackNameEl = document.getElementById("fallbackStudentName");
  const captionEl = document.getElementById("letterPhotoCaption");
  const headingEl = document.getElementById("letterPhotoHeading");
  const scrollContainer = document.getElementById("parchmentScrollBody");

  if (!modal) return;

  // Điền dữ liệu
  nameEl.textContent = student.fullName;
  titleEl.textContent = student.title;
  wishEl.textContent = student.wish;

  if (student.isTeacher) {
    if (headingEl) headingEl.textContent = "✨ Khoảnh Khắc Tri Ân Cô Giáo Chủ Nhiệm Kính Yêu ✨";
    captionEl.innerHTML = "Người mẹ thứ hai của tập thể A3K33 💐";
  } else {
    if (headingEl) headingEl.textContent = "✨ Khoảnh Khắc Tỏa Sáng Của Riêng Bạn ✨";
    captionEl.innerHTML = `Nàng thơ của A3K33: <b>${student.fullName}</b> 🌹`;
  }

  // Ảnh (từ localStorage hoặc file mặc định)
  const savedPhoto = localStorage.getItem(`student_photo_${student.id}`);
  const imgSrc = savedPhoto || student.image;

  fallbackNameEl.textContent = student.fullName;
  fallbackEl.style.background = student.avatarBg;

  imgEl.src = imgSrc;
  imgEl.style.display = "block";
  fallbackEl.style.display = "none";

  imgEl.onerror = () => {
    if (!imgEl.src.endsWith(".svg")) {
      imgEl.src = imgEl.src + ".svg";
    } else {
      imgEl.style.display = "none";
      fallbackEl.style.display = "flex";
    }
  };

  // Cuộn mượt về đầu thư
  if (scrollContainer) {
    scrollContainer.scrollTop = 0;
  }

  // Mở modal
  modal.classList.add("active");
  playFairyChime();

  if (typeof confetti === "function") {
    confetti({
      particleCount: 50,
      spread: 75,
      origin: { y: 0.3 }
    });
  }
}

// Điều khiển đóng mở bức thư
function initLetterModalControls() {
  const closeBtn = document.getElementById("btnCloseLetter");
  const modal = document.getElementById("letterModalOverlay");

  const closeLetter = () => {
    if (modal) modal.classList.remove("active");
  };

  if (closeBtn) closeBtn.addEventListener("click", closeLetter);

  // Bấm ra ngoài vùng cuộn giấy để đóng
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeLetter();
      }
    });
  }

  // Phím ESC để đóng
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLetter();
    }
  });
}

// ====================================================================
// 8. TẢI ẢNH TẬP THỂ LỚP (LƯU LOCALSTORAGE)
// ====================================================================
function initClassPhotoManager() {
  const classPhotoInput = document.getElementById("classPhotoInput");
  const classPhotoImg = document.getElementById("classPhotoImg");
  const classPlaceholder = document.getElementById("classPhotoPlaceholder");

  // Xóa ảnh cũ bị lưu nhầm (ảnh bài tập lý) để trả lại giao diện chuẩn
  if (localStorage.getItem("a3k33_class_photo_cleared_wrong") !== "true") {
    localStorage.removeItem("a3k33_class_photo");
    localStorage.setItem("a3k33_class_photo_cleared_wrong", "true");
  }

  const savedClassPhoto = localStorage.getItem("a3k33_class_photo");
  if (savedClassPhoto && classPhotoImg) {
    classPhotoImg.src = savedClassPhoto;
    classPhotoImg.style.display = "block";
    if (classPlaceholder) classPlaceholder.classList.add("hidden");
  }

  if (classPhotoInput) {
    classPhotoInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          localStorage.setItem("a3k33_class_photo", dataUrl);
          if (classPhotoImg) {
            classPhotoImg.src = dataUrl;
            classPhotoImg.style.display = "block";
          }
          if (classPlaceholder) classPlaceholder.classList.add("hidden");
          playFairyChime();
        };
        reader.readAsDataURL(file);
      }
    });
  }
}
