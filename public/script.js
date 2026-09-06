document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("surpriseBtn");
    const animation = document.getElementById("surpriseAnimation");
    const surprise = document.getElementById("surprise");
    const confetti = document.getElementById("confetti");
    const sparks = document.getElementById("sparkContainer");
    const card = document.querySelector(".birthday-card");

    if (!button || !animation || !surprise || !confetti || !sparks || !card) {
        console.error("❌ Required birthday elements are missing.");
        return;
    }

    let opened = false;

    button.addEventListener("click", function () {

        if (opened) return;

        opened = true;

        console.log("🎁 SURPRISE CLICKED!");

        /* =========================================
           BUTTON CHANGE
        ========================================= */

        const text = button.querySelector("span");

        if (text) {
            text.textContent = "Surprise Unlocked ✨";
        }


        /* =========================================
           RESET OLD ANIMATION
        ========================================= */

        animation.classList.remove("play");

        void animation.offsetWidth;


        /* =========================================
           START ANIMATION
        ========================================= */

        animation.classList.add("play");


        /* =========================================
           FIRST HIT — CAKE
        ========================================= */

        setTimeout(function () {

            console.log("🎂 CAKE HIT!");

            shakeScreen();

            createSparks(45);

        }, 1450);


        /* =========================================
           SECOND HIT — EGG
        ========================================= */

        setTimeout(function () {

            console.log("🥚 EGG HIT!");

            shakeScreen();

            createSparks(55);

        }, 3000);


        /* =========================================
           CONFETTI
        ========================================= */

        setTimeout(function () {

            console.log("🎉 CONFETTI!");

            createConfetti(140);

        }, 3400);


        /* =========================================
           SHOW MESSAGE
        ========================================= */

        setTimeout(function () {

            console.log("❤️ MESSAGE REVEALED!");

            surprise.classList.add("active");

            card.classList.add("message-reveal");

            setTimeout(function () {

                surprise.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 200);

        }, 4100);


        /* =========================================
           REMOVE CINEMATIC OVERLAY
        ========================================= */

        setTimeout(function () {

            animation.classList.remove("play");

        }, 6000);

    });


    /* =============================================
       SCREEN SHAKE
    ============================================= */

    function shakeScreen() {

        document.body.classList.remove("hit-shake");

        void document.body.offsetWidth;

        document.body.classList.add("hit-shake");

        setTimeout(function () {

            document.body.classList.remove("hit-shake");

        }, 600);

    }


    /* =============================================
       SPARKS
    ============================================= */

    function createSparks(amount) {

        const symbols = [
            "✨",
            "✦",
            "✧",
            "★",
            "⭐",
            "💫"
        ];

        for (let i = 0; i < amount; i++) {

            const spark = document.createElement("div");

            spark.className = "spark";

            spark.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];


            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                80 + Math.random() * 300;


            const x =
                Math.cos(angle) * distance;

            const y =
                Math.sin(angle) * distance;


            spark.style.setProperty(
                "--x",
                x + "px"
            );

            spark.style.setProperty(
                "--y",
                y + "px"
            );


            spark.style.fontSize =
                (14 + Math.random() * 24) + "px";


            spark.style.left = "50%";
            spark.style.top = "53%";


            sparks.appendChild(spark);


            setTimeout(function () {

                spark.remove();

            }, 1800);

        }

    }


    /* =============================================
       CONFETTI
    ============================================= */

    function createConfetti(amount) {

        const symbols = [
            "🎉",
            "✨",
            "⭐",
            "🎂",
            "💖",
            "✦",
            "♥",
            "◆"
        ];

        for (let i = 0; i < amount; i++) {

            const piece =
                document.createElement("div");

            piece.className =
                "confetti-piece";


            piece.textContent =
                symbols[
                    Math.floor(
                        Math.random() * symbols.length
                    )
                ];


            piece.style.left =
                Math.random() * 100 + "%";


            piece.style.fontSize =
                10 + Math.random() * 20 + "px";


            piece.style.animationDuration =
                3 + Math.random() * 4 + "s";


            piece.style.animationDelay =
                Math.random() * 0.8 + "s";


            piece.style.setProperty(
                "--drift",
                (Math.random() - 0.5) * 600 + "px"
            );


            piece.style.setProperty(
                "--rotation",
                (Math.random() - 0.5) * 1600 + "deg"
            );


            confetti.appendChild(piece);


            setTimeout(function () {

                piece.remove();

            }, 9000);

        }

    }


    /* =============================================
       BUTTON HOVER
    ============================================= */

    button.addEventListener("mouseenter", function () {

        if (!opened) {

            button.style.transform =
                "translateY(-4px) scale(1.04)";

        }

    });


    button.addEventListener("mouseleave", function () {

        if (!opened) {

            button.style.transform = "";

        }

    });

});