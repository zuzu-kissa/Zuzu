document.addEventListener(
  "DOMContentLoaded",
  function () {

    const mascot =
      document.querySelector(".mascot");


    if (!mascot) {
      return;
    }


    function rollDaruma() {

      /*
        同じアニメーションを
        何度でも最初から再生できるようにする
      */

      mascot.classList.remove(
        "is-falling"
      );

      void mascot.offsetWidth;

      mascot.classList.add(
        "is-falling"
      );

    }



    /*
      ページを開いた時
    */

    window.setTimeout(
      rollDaruma,
      450
    );



    /*
      PC:
      カーソルを置いた時
    */

    mascot.addEventListener(
      "mouseenter",
      rollDaruma
    );



    /*
      PC / SMARTPHONE:
      click / tap
    */

    mascot.addEventListener(
      "click",
      rollDaruma
    );



    /*
      KEYBOARD
    */

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



    /*
      animation終了後は
      classを戻す
    */

    mascot.addEventListener(
      "animationend",
      function () {

        mascot.classList.remove(
          "is-falling"
        );

      }
    );

  }
);
