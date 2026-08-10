document.addEventListener("DOMContentLoaded", function () {


  /* ==================================================
     GLOBAL MENU
  ================================================== */

  const navs =
    document.querySelectorAll(".site-nav");


  navs.forEach(function (nav) {

    const trigger =
      nav.querySelector(".nav-trigger");


    if (!trigger) {
      return;
    }


    trigger.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();


        const isOpen =
          nav.classList.toggle("is-open");


        trigger.setAttribute(
          "aria-expanded",
          isOpen ? "true" : "false"
        );

      }
    );

  });



  /* 外側をクリックしたら閉じる */

  document.addEventListener(
    "click",
    function () {

      navs.forEach(function (nav) {

        nav.classList.remove("is-open");


        const trigger =
          nav.querySelector(".nav-trigger");


        if (trigger) {

          trigger.setAttribute(
            "aria-expanded",
            "false"
          );

        }

      });

    }
  );



  /* Escでも閉じる */

  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key !== "Escape") {
        return;
      }


      navs.forEach(function (nav) {

        nav.classList.remove("is-open");


        const trigger =
          nav.querySelector(".nav-trigger");


        if (trigger) {

          trigger.setAttribute(
            "aria-expanded",
            "false"
          );

        }

      });

    }
  );



  /* ==================================================
     DARUMA
  ================================================== */

  const mascot =
    document.querySelector(".mascot");


  if (!mascot) {
    return;
  }


  function rollDaruma() {

    mascot.classList.remove(
      "is-falling"
    );


    /*
      CSS animationを
      確実に最初から再実行
    */

    void mascot.offsetWidth;


    mascot.classList.add(
      "is-falling"
    );

  }



  /* サイトを開いた時 */

  window.setTimeout(
    rollDaruma,
    450
  );



  /* PC hover */

  mascot.addEventListener(
    "mouseenter",
    rollDaruma
  );



  /* click / tap */

  mascot.addEventListener(
    "click",
    rollDaruma
  );



  /* keyboard */

  mascot.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        rollDaruma();

      }

    }
  );



  /* animation終了 */

  mascot.addEventListener(
    "animationend",
    function () {

      mascot.classList.remove(
        "is-falling"
      );

    }
  );


});
