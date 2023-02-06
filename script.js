var countr = setInterval(update, 50);
var oly = document.querySelector("#ovly");
var start = 0;
function update() {
  var count = document.querySelector("#div");
  count.innerHTML = ++start + "%";
  if (start === 100) {
    clearInterval(count);
    oly.style.opacity = 0;
  }
}

var onclk = document.querySelector("#clr");
var colr = document.querySelector("#colr");
var main = document.querySelector("#main");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var flag = 0;
onclk.addEventListener("click", function () {
  if (flag === 0) {
    (onclk.style.width = "100%"), (colr.style.opacity = 1);

    flag = 1;
  } else {
    (onclk.style.width = "55%"), (colr.style.opacity = 0);
    flag = 0;
  }
});

function colorChange() {
  flag = 0;
  one.addEventListener("click", function () {
    if (flag === 0) {
      home.style.backgroundColor = "#152a21";
      flag = 1;
    } else {
      home.style.backgroundColor = "#292929";
      flag = 0;
    }
  });
  two.addEventListener("click", function () {
    if (flag === 0) {
      home.style.backgroundColor = "#2d0b04";
      flag = 1;
    } else {
      home.style.backgroundColor = "#292929";
      flag = 0;
    }
  });
  three.addEventListener("click", function () {
    if (flag === 0) {
      home.style.backgroundColor = "#292929";
      flag = 1;
    } else {
      home.style.backgroundColor = "#292929";
      flag = 0;
    }
  });
}


function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    var prnt = document.createElement("span");
    var chld = document.createElement("span");

    prnt.classList.add("prnt");
    chld.classList.add("chld");

    chld.innerHTML = elem.innerHTML;
    prnt.appendChild(chld);

    elem.innerHTML = " ";
    elem.appendChild(prnt);

    var str1 = " ";
    document
      .querySelector(".reveal .prnt .chld")
      .textContent.split("")
      .forEach(function (chr) {
        str1 += `<span>${chr}</span>`;
      });
    document.querySelector(".reveal .prnt .chld").innerHTML = str1;
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#second",
        scrub: 1,
        start: "top",
        end: "top 40%",

        // markers:true
      },
    });
    tl.to(".reveal .chld>span:nth-child(1)", {
      transform: "translateY(0)",
      stagger: -0.1,
      ease: "power1.out",
    });
    tl.to(".reveal .chld>span:nth-child(2)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal .chld>span:nth-child(3)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal .chld>span:nth-child(4)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal .chld>span:nth-child(5)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal .chld>span:nth-child(6)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal .chld>span:nth-child(7)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });

    tl.to(".reveal .chld>span:nth-child(9)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal .chld>span:nth-child(10)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal .chld>span:nth-child(11)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal .chld>span:nth-child(12)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal .chld>span:nth-child(13)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to("#about-me>p", {
      opacity: 1,
    });
  });
}

function award() {}

function creativity() {
  document.querySelectorAll(".reveal1").forEach(function (elem) {
    var prnt1 = document.createElement("span");
    var chld1 = document.createElement("span");
    prnt1.classList.add("prnt1");
    chld1.classList.add("chld1");

    chld1.innerHTML = elem.innerHTML;
    prnt1.appendChild(chld1);

    elem.innerHTML = " ";
    elem.appendChild(prnt1);

    var str = " ";
    document
      .querySelector("#creative-section .reveal1 .prnt1 .chld1")
      .textContent.split("")
      .forEach(function (chr) {
        str += `<span>${chr}</span>`;
      });
    document.querySelector(
      "#creative-section .reveal1 .prnt1 .chld1"
    ).innerHTML = str;
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#creative-section",
        scrub: 1,
        start: "top",
        end: "top 60%",
        // markers:true
      },
    });
    tl.to(".reveal1 .chld1>span:nth-child(1)", {
      transform: "translateY(0)",
      stagger: -0.1,
      ease: "power1.out",
    });
    tl.to(".reveal1 .chld1>span:nth-child(2)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(3)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(4)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(5)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(6)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(7)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(8)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });

    tl.to(".reveal1 .chld1>span:nth-child(9)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(10)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(11)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(12)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(13)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(14)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(15)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(16)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(17)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(18)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(19)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(20)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(21)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(22)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".reveal1 .chld1>span:nth-child(23)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
  });
}

function award() {
  document.querySelectorAll(".revealsm").forEach(function (values) {
    var spanParent = document.createElement("span");
    var spanChild = document.createElement("span");

    spanParent.classList.add("spanParent");
    spanChild.classList.add("spanChild");

    spanChild.innerHTML = values.innerHTML;
    spanParent.appendChild(spanChild);

    values.innerHTML = " ";
    values.appendChild(spanParent);

    var clutter = " ";
    document
      .querySelector(".revealsm .spanParent .spanChild")
      .textContent.split("")
      .forEach(function (char) {
        clutter += `<span>${char}</span>`;
      });
    document.querySelector(".revealsm .spanParent .spanChild").innerHTML =
      clutter;

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main1",
        scrub: 1,
        start: "top",

        end: "top 90%",
        // markers:true
      },
    });
    tl.to(".revealsm .spanChild>span:nth-child(1)", {
      transform: "translateY(0)",
      stagger: -0.1,
      ease: "power1.out",
    });
    tl.to(".revealsm .spanChild>span:nth-child(2)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(3)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(4)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(5)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(6)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(7)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(8)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });

    tl.to(".revealsm .spanChild>span:nth-child(9)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(10)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(11)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(12)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(13)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(14)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(15)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(16)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(17)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(18)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(19)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(20)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(21)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(22)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(23)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(24)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
    tl.to(".revealsm .spanChild>span:nth-child(25)", {
      transform: "translateY(0)",
      stagger: -0.1,
    });
  });
}
function caseStudy() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#third-hm",
      pin: true,
      // markers: true,
      scrub: 2,
    },
  });
  tl.to(
    "#initial-page",
    {
      scale: 0.8,
      stagger: 0.1,
      duration: 1.5,
      ease: Power1,
    },
    "a"
  );
  tl.to(
    "#primary-page",
    {
      top: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: Power1,
    },
    "a"
  );
  tl.to(
    "#primary-page",
    {
      scale: 0.8,
      duration: 1.5,
      stagger: 0.1,
      ease: Power1,
    },
    "a1"
  );
  tl.to(
    "#secondary-page ",
    {
      top: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: Power1,
    },
    "a1"
  );
  tl.to(
    "#secondary-page ",
    {
      scale: 0.8,
      duration: 1.5,
      stagger: 0.1,
      ease: Power1,
    },
    "a2"
  );
  tl.to(
    "#tertiary-page",
    {
      top: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: Power1,
    },
    "a2"
  );
}

function dos() {
  var cursor = document.querySelector("#cursor");
  var main = document.querySelector("#main");
  main.addEventListener("mousemove", function (value) {
    cursor.style.left = value.x + "px";
    cursor.style.top = value.x + "px";
  });

  document
    .querySelector(".oly1")
    .addEventListener("mousemove", function (value) {
      document.querySelector("#elem1 img").style.scale = 1;
      document.querySelector("#elem1 img").style.opacity = 1;
      cursor.style.opacity = 0;
      document.querySelector("#elem1 img").style.left = value.x - 850 + "px";
    });

  document
    .querySelector(".oly1")
    .addEventListener("mouseleave", function (value) {
      document.querySelector("#elem1 img").style.scale = 0;
      document.querySelector("#elem1 img").style.opacity = 0;
      cursor.style.opacity = 1;
    });

  document
    .querySelector(".oly2")
    .addEventListener("mousemove", function (value) {
      document.querySelector("#elem2 img").style.scale = 1;
      document.querySelector("#elem2 img").style.opacity = 1;
      cursor.style.opacity = 0;
      document.querySelector("#elem2 img").style.left = value.x - 850 + "px";
    });

  document
    .querySelector(".oly2")
    .addEventListener("mouseleave", function (value) {
      document.querySelector("#elem2 img").style.scale = 0;
      document.querySelector("#elem2 img").style.opacity = 0;
      cursor.style.opacity = 1;
    });
  document
    .querySelector(".oly3")
    .addEventListener("mousemove", function (value) {
      document.querySelector("#elem3 img").style.scale = 1;
      document.querySelector("#elem3 img").style.opacity = 1;

      cursor.style.opacity = 0;
      document.querySelector("#elem3 img").style.left = value.x - 850 + "px";
    });

  document
    .querySelector(".oly3")
    .addEventListener("mouseleave", function (value) {
      document.querySelector("#elem3 img").style.scale = 0;
      document.querySelector("#elem3 img").style.opacity = 0;
      cursor.style.opacity = 1;
    });
  document
    .querySelector(".oly4")
    .addEventListener("mousemove", function (value) {
      document.querySelector("#elem4 img").style.scale = 1;
      document.querySelector("#elem4 img").style.opacity = 1;
      cursor.style.opacity = 0;
      document.querySelector("#elem4 img").style.left = value.x - 850 + "px";
    });

  document
    .querySelector(".oly4")
    .addEventListener("mouseleave", function (value) {
      document.querySelector("#elem4 img").style.scale = 0;
      document.querySelector("#elem4 img").style.opacity = 0;
      cursor.style.opacity = 1;
    });
  document
    .querySelector(".oly5")
    .addEventListener("mousemove", function (value) {
      document.querySelector("#elem5 img").style.scale = 1;
      document.querySelector("#elem5 img").style.opacity = 1;
      cursor.style.opacity = 0;
      document.querySelector("#elem5 img").style.left = value.x - 850 + "px";
    });

  document
    .querySelector(".oly5")
    .addEventListener("mouseleave", function (value) {
      document.querySelector("#elem5 img").style.scale = 0;
      document.querySelector("#elem5 img").style.opacity = 0;
      cursor.style.opacity = 1;
    });
  document
    .querySelector(".oly6")
    .addEventListener("mousemove", function (value) {
      document.querySelector("#elem6 img").style.scale = 1;
      document.querySelector("#elem6 img").style.opacity = 1;
      cursor.style.opacity = 0;
      document.querySelector("#elem6 img").style.left = value.x - 850 + "px";
    });

  document
    .querySelector(".oly6")
    .addEventListener("mouseleave", function (value) {
      document.querySelector("#elem6 img").style.scale = 0;
      document.querySelector("#elem6 img").style.opacity = 0;
      cursor.style.opacity = 1;
    });
  document
    .querySelector(".oly7")
    .addEventListener("mousemove", function (value) {
      document.querySelector("#elem7 img").style.scale = 1;
      document.querySelector("#elem7 img").style.opacity = 1;
      cursor.style.opacity = 0;
      document.querySelector("#elem7 img").style.left = value.x - 850 + "px";
    });

  document
    .querySelector(".oly7")
    .addEventListener("mouseleave", function (value) {
      document.querySelector("#elem7 img").style.scale = 0;
      document.querySelector("#elem7 img").style.opacity = 0;
      cursor.style.opacity = 1;
    });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#li",
      scrub: 1,
      start: "top 30%",
      end: "bottom 85%",
      // markers: true,
    },
  });
  tl.to("#elem4", {
    y: 10,
    opacity: 1,
    stagger: 0.1,
    ease: Power1,
  })
    .to("#elem5", {
      y: 10,
      opacity: 1,
      stagger: 0.1,
      ease: Power1,
    })
    .to("#elem6", {
      y: 10,
      opacity: 1,
      stagger: 0.1,
      ease: Power1,
    })
    .to("#elem7", {
      y: 10,
      opacity: 1,
      stagger: 0.1,
      ease: Power1,
    })
    .to("#fourth-hm", {
      y: "-100%",
      stagger: 0.5,
      duration: 2.5,
      end: "+=" + window.innerHeight * 9,
    });
}
dos();

function soloLevelling() {
  document.querySelectorAll(".prettier").forEach(function (elem) {
    var parent = document.createElement("span");
    var child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = " ";
    elem.appendChild(parent);

    var str = "";
    document
      .querySelector(".prettier .parent .child")
      .textContent.split("")
      .forEach(function (char) {
        str += `<span>${char}</span>`;
      });
    document.querySelector(".prettier .parent .child").innerHTML = str;
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#fifth",
      scrub: 1,
      pin: true,
      // markers: true,
    },
  });
  tl.to(".columns", {
    y: "-10%",
  }).to(
    "#shadow-saga",
    {
      opacity: 1,

      end: "+=" + window.innerHeight * 16,
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(1)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(2)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(3)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(4)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(5)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(6)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(7)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(8)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );

  tl.to(
    ".prettier .child>span:nth-child(9)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(10)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(11)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(12)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(13)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(14)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(15)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(16)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(17)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(18)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(19)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(20)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(21)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(22)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(23)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
  tl.to(
    ".prettier .child>span:nth-child(24)",
    {
      transform: "translateY(0)",
      stagger: -0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    "flag"
  );
}

function uplift() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#main2",
      scrub: 1,
      pin: true,
      start: "top",
      end: "bottom",

      // markers:true
    },
  });
  tl.to("#sixth", {
    y: "-100%",
    delay: 4,
    stagger: 0.7,
    // duration:2.5,
    ease: Power1,
  });
}

function dets() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#boxing",
      // markers:true,
      start: "top",
      end: "bottom 40%",
    },
  });
  tl.to(".rl1", {
    y: 10,
    opacity: 1,
  });
  tl.to(".rl2", {
    y: 10,
    opacity: 1,
  });
}

function subDets() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#seventh",
      scrub: 1,
      pin: true,
      start: "top ",

      // markers:true
    },
  });
  tl.to("#sub-details", {
    scale: 0.9,
  });
}
function rel() {
  var cursor = document.querySelector("#cursor1");
  var main = document.querySelector("#main3");
  main.addEventListener("mousemove", function (value) {
    cursor.style.left = value.x + "px";
    cursor.style.top = value.x + "px";
  });
  document
    .querySelector("#cloak")
    .addEventListener("mousemove", function (value) {
      document.querySelector("#interest img").style.scale = 1;
      document.querySelector("#interest img").style.opacity = 1;
      cursor.style.opacity = 0;
      document.querySelector("#interest img").style.left = value.x - 600 + "px";
    });

  document
    .querySelector("#cloak")
    .addEventListener("mouseleave", function (value) {
      document.querySelector("#interest img").style.scale = 0;
      document.querySelector("#interest img").style.opacity = 0;
      cursor.style.opacity = 1;
    });
}
colorChange();
revealToSpan();
creativity();
award();
caseStudy();

soloLevelling();
uplift();
dets();
subDets();
rel();
