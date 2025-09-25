$(function () {



  // TOGGLE DARK MODE
  const $toggleBtn = $("#theme-toggle");
  const $body = $("body");

  $toggleBtn.on("click", function () {
    $body.toggleClass("dark-mode");
    $toggleBtn.text($body.hasClass("dark-mode") ? "🌙" : "☀️");
  });



  // MOBILE MENU
  $("#menu-toggle").on("click", function () {
    $(".nav-links").toggleClass("show");
  });



  // ANIMATIONS: pakai IntersectionObserver tetap, tapi elemennya via jQuery
  const fadeElems = document.querySelectorAll(
    ".hero-text, .hero-photo, .content-card"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  $(fadeElems).each(function () {
    $(this).addClass("fade-element");
    observer.observe(this);
  });



  // ISI PROJECTS
  const projects = [
    {
      title: "Desain RDBMS",
      description: "Demo desain basis data mitra Basreng Basah",
      image: "assets/RDBMS.jpg",
      link: "https://docs.google.com/document/d/1FqndulY9kJqkOKWv9JDVLTu70JiIPIJ_i3I8FgKfXkw/edit?usp=sharing",
    },
    {
      title: "Si BaBa Udin",
      description: "Demo OOP dalam aplikasi berbasis winforms .NET ",
      image: "assets/OOP.png",
      link: "https://github.com/AsAnotherAnonym/Si-BABA-Udin---PROJEK-PBO",
    },
  ];

  let currentIndex = 0;
  const $carouselInner = $("#carousel-inner");
  const $prevBtn = $("#prev-btn");
  const $nextBtn = $("#next-btn");

  // generate project
  $.each(projects, function (_, proj) {
    const $item = $(`
      <div class="project-item">
        <div class="project-text">
          <h3>${proj.title}</h3>
          <p>${proj.description}</p>
          <a href="${proj.link}" target="_blank">View Project</a>
        </div>
        <div class="project-photo">
          <img src="${proj.image}" alt="${proj.title}">
        </div>
      </div>
    `);
    $carouselInner.append($item);
  });

  // nambahin "more to come"
  const $moreItem = $(`
    <div class="project-item">
      <div class="project-text">
        <h3>More to come!</h3>
        <p>Ditunggu yh projekannyah 😋</p>
      </div>
    </div>
  `);
  $carouselInner.append($moreItem);

  const totalProjects = projects.length + 1;

  // fungsi update tombol
  function updateButtons() {
    if (currentIndex === 0) {
      $prevBtn.css({ visibility: "hidden", opacity: 0, pointerEvents: "none" });
    } else {
      $prevBtn.css({ visibility: "visible", opacity: 1, pointerEvents: "auto" });
    }

    if (currentIndex === totalProjects - 1) {
      $nextBtn.css({ visibility: "hidden", opacity: 0, pointerEvents: "none" });
    } else {
      $nextBtn.css({ visibility: "visible", opacity: 1, pointerEvents: "auto" });
    }
  }

  // next
  $nextBtn.on("click", function () {
    if (currentIndex < totalProjects - 1) {
      currentIndex++;
      $carouselInner.css(
        "transform",
        `translateX(-${currentIndex * 100}%)`
      );
      updateButtons();
    }
  });

  // prev
  $prevBtn.on("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    }
    $carouselInner.css("transform", `translateX(-${currentIndex * 100}%)`);
    updateButtons();
  });

  // inisialisasi awal
  updateButtons();



  // ISI SKILLS
  const skills = [
    {
      name: "Python",
      logo: "assets/python-original.svg"
    },
    {
      name: "HTML",
      logo: "assets/html5-original-wordmark.svg"
    },
    {
      name: "CSS",
      logo: "assets/css3-original-wordmark.svg"
    },
    {
      name: "JavaScript",
      logo: "assets/javascript.svg"
    },
    {
      name: "C#",
      logo: "assets/csharp.svg"
    },
    {
      name: "PostgreSQL",
      logo: "assets/postgresql-original-wordmark.svg"
    },
    {
      name: "Golang",
      logo: "assets/go-original-wordmark.svg"
    },
    {
      name: "PHP",
      logo: "assets/php-original.svg"
    },
    {
      name: "Lua (newbie)",
      logo: "assets/lua-original.svg"
    },
    {
      name: ".NET Core",
      logo: "assets/dotnetcore-original.svg"
    },
    {
      name: "Bootstrap (newbie)",
      logo: "assets/bootstrap-original.svg"
    },
    {
      name: "Git",
      logo: "assets/git-original.svg"
    },
    {
      name: "GitHub",
      logo: "assets/github-original.svg"
    }
  ];

  const $skillsContainer = $("#skills-container");

  // generate semua skill
  $.each(skills, function (_, skill) {
    const $item = $(`
      <div class="skill-item">
        <img src="${skill.logo}" alt="${skill.name}">
        <p>${skill.name}</p>
      </div>
    `);
    $skillsContainer.append($item);
  });



  // FOOTWER
  const $footer = $(".footer");

  // trigger 1: scroll sampai bawah
  $(window).on("scroll", function () {
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 10) {
      $footer.addClass("show");
    }
  });

  // trigger 2: klik tombol contact me
  $("#contact-btn").on("click", function () {
    $footer.addClass("show");
    $("html, body").animate({ scrollTop: $(document).height() }, 800); // optional scroll ke bawah
  });
  
});
