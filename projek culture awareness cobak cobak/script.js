/* ==================================
   1. DATA PROVINSI DAN BUDAYA
================================== */

const provinces = [
    {
        name: "Banten",
        description: "Banten has diverse cultural traditions influenced by Sundanese, Javanese, and Baduy communities.",
        culture: [
            ["Traditional House", "Rumah Sulah Nyanda, a traditional Baduy house made from bamboo, wood, and natural materials."],
            ["Traditional Clothes", "Pangsi, traditional Sundanese clothing commonly worn by men."],
            ["Traditional Dance", "Rampak Bedug Dance and Cokek Dance."],
            ["Traditional Food", "Sate Bandeng, Rabeg, and Angeun Lada."],
            ["Musical Instrument", "Angklung Buhun and Bedug."],
            ["Local Language", "Sundanese, Javanese, and Baduy languages."]
        ]
    },
    {
        name: "DKI Jakarta",
        description: "DKI Jakarta has rich Betawi cultural traditions influenced by various ethnic groups and cultures.",
        culture: [
            ["Traditional House", "Rumah Kebaya, a traditional Betawi house with a distinctive roof and spacious terrace."],
            ["Traditional Clothes", "Sadariah for men and Kebaya Encim for women."],
            ["Traditional Dance", "Yapong Dance and Topeng Betawi Dance."],
            ["Traditional Food", "Kerak Telor, Soto Betawi, and Asinan Betawi."],
            ["Musical Instrument", "Gambang Kromong and Tanjidor."],
            ["Local Language", "Betawi."]
        ]
    },
    {
         name: "West Java",
        description: "West Java is rich in Sundanese cultural traditions, known for its traditional arts, music, and cuisine.",
        culture: [
            ["Traditional House", "Rumah Julang Ngapak, a traditional Sundanese house with a roof resembling a bird spreading its wings."],
            ["Traditional Clothes", "Pangsi for men and Kebaya Sunda for women."],
            ["Traditional Dance", "Jaipong Dance and Merak Dance."],
            ["Traditional Food", "Karedok, Seblak, and Nasi Timbel."],
            ["Musical Instrument", "Angklung, Kecapi, and Suling Sunda."],
            ["Local Language", "Sundanese, Cirebonese, and Betawi in some areas."]
        ]
    },
    {
       name: "Central Java",
        description: "Central Java is known for its elegant Javanese traditions, traditional performances, and cultural heritage.",
        culture: [
            ["Traditional House", "Rumah Joglo, a traditional Javanese house with a distinctive high roof supported by wooden pillars."],
            ["Traditional Clothes", "Jawi Jangkep for men and Kebaya for women."],
            ["Traditional Dance", "Gambyong Dance and Bedhaya Dance."],
            ["Traditional Food", "Lumpia Semarang, Soto Kudus, and Garang Asem."],
            ["Musical Instrument", "Gamelan, Siter, and Kendang."],
            ["Local Language", "Javanese, particularly the Central Javanese dialect."]
        ]
    },
    {
        name: "Special Region of Yogyakarta",
        description: "Yogyakarta preserves strong Javanese royal traditions, especially through its palace, arts, and cultural ceremonies.",
        culture: [
            ["Traditional House", "Rumah Joglo, a traditional Javanese house commonly found in Yogyakarta."],
            ["Traditional Clothes", "Surjan for men and Kebaya for women."],
            ["Traditional Dance", "Serimpi Dance, Bedhaya Dance, and Golek Dance."],
            ["Traditional Food", "Gudeg, Bakpia, and Sate Klathak."],
            ["Musical Instrument", "Gamelan, Gong, and Kendang."],
            ["Local Language", "Javanese, particularly the Yogyakarta dialect."]
        ]
    },
    {
       name: "East Java",
        description: "East Java has diverse cultural traditions influenced by Javanese, Madurese, and Osing communities.",
        culture: [
            ["Traditional House", "Rumah Joglo Situbondo, a traditional East Javanese house with distinctive wooden architecture."],
            ["Traditional Clothes", "Pesa'an, traditional Madurese clothing, and Mantenan."],
            ["Traditional Dance", "Remo Dance and Gandrung Dance."],
            ["Traditional Food", "Rawon, Rujak Cingur, and Lontong Balap."],
            ["Musical Instrument", "Gamelan and Angklung Banyuwangi."],
            ["Local Language", "Javanese, Madurese, and Osing."]
        ]
    }
];


/* ==================================
   2. NAVIGATION
================================== */

function goToMap() {
    window.location.href = "map.html";
}

function goToQuiz() {
    window.location.href = "quiz.html";
}


/* ==================================
   3. MEMBER POPUP
================================== */

function openMembers() {
    document.getElementById("memberModal").classList.add("show");
}

function closeMembers() {
    document.getElementById("memberModal").classList.remove("show");
}


/* ==================================
   4. MAP PAGE
================================== */

const provinceList = document.getElementById("provinceList");

if (provinceList) {

    provinces.forEach((province, index) => {

        const button = document.createElement("button");

        button.textContent = province.name;

        button.addEventListener("click", () => {

            window.location.href =
                "culture.html?province=" + index;

        });

        provinceList.appendChild(button);

    });

}


/* ==================================
   5. CULTURE PAGE
================================== */

const cultureGrid = document.getElementById("cultureGrid");

if (cultureGrid) {

    const params = new URLSearchParams(window.location.search);

    const provinceIndex = Number(params.get("province"));

    if (
        !Number.isInteger(provinceIndex) ||
        provinceIndex < 0 ||
        provinceIndex >= provinces.length
    ) {

        document.getElementById("provinceName").textContent =
            "Province Not Found";

        document.getElementById("provinceDescription").textContent =
            "Please select a province from the map.";

        document.querySelector(".culture-navigation").style.display =
            "none";

    } else {

        const province = provinces[provinceIndex];

        document.body.className = "province-" + provinceIndex;

        document.getElementById("provinceName").textContent =
            province.name;

        document.getElementById("provinceDescription").textContent =
            province.description;

        province.culture.forEach((item) => {

            const card = document.createElement("div");

            card.className = "culture-card";

            const title = document.createElement("h3");
            title.textContent = item[0];

            const description = document.createElement("p");
            description.textContent = item[1];

            card.appendChild(title);
            card.appendChild(description);

            cultureGrid.appendChild(card);

        });

    }

}


/* ==================================
   6. QUIZ QUESTIONS - 20 QUESTIONS
   JAVA ISLAND CULTURE
================================== */

const questions = [

    {
        question: "What is the traditional house of Banten?",
        answers: [
            "Rumah Joglo",
            "Rumah Sulah Nyanda",
            "Rumah Kebaya",
            "Rumah Gadang"
        ],
        correct: 1
    },

    {
        question: "Which traditional dance comes from DKI Jakarta?",
        answers: [
            "Tari Jaipong",
            "Tari Remo",
            "Tari Yapong",
            "Tari Gambyong"
        ],
        correct: 2
    },

    {
        question: "What is the famous traditional food from Banten?",
        answers: [
            "Gudeg",
            "Rawon",
            "Kerak Telor",
            "Sate Bandeng"
        ],
        correct: 3
    },

    {
        question: "What is the traditional clothing of Betawi men?",
        answers: [
            "Pangsi",
            "Sadariah",
            "Jawi Jangkep",
            "Pesa'an"
        ],
        correct: 1
    },

    {
        question: "Which traditional house comes from West Java?",
        answers: [
            "Rumah Kebaya",
            "Rumah Joglo",
            "Rumah Julang Ngapak",
            "Rumah Sulah Nyanda"
        ],
        correct: 2
    },

    {
        question: "What is the famous traditional dance of West Java?",
        answers: [
            "Tari Serimpi",
            "Tari Jaipong",
            "Tari Yapong",
            "Tari Remo"
        ],
        correct: 1
    },

    {
        question: "Which traditional musical instrument comes from West Java?",
        answers: [
            "Gamelan",
            "Tanjidor",
            "Angklung",
            "Gordang Sambilan"
        ],
        correct: 2
    },

    {
        question: "What is the traditional house of Central Java?",
        answers: [
            "Rumah Joglo",
            "Rumah Kebaya",
            "Rumah Gadang",
            "Rumah Panggung"
        ],
        correct: 0
    },

    {
        question: "Which traditional dance comes from Central Java?",
        answers: [
            "Tari Gandrung",
            "Tari Gambyong",
            "Tari Cokek",
            "Tari Merak"
        ],
        correct: 1
    },

    {
        question: "What is the famous traditional food from Yogyakarta?",
        answers: [
            "Pempek",
            "Sate Bandeng",
            "Gudeg",
            "Kerak Telor"
        ],
        correct: 2
    },

    {
        question: "What is the traditional clothing of Yogyakarta men?",
        answers: [
            "Pesa'an",
            "Sadariah",
            "Surjan",
            "Pangsi"
        ],
        correct: 2
    },

    {
        question: "Which traditional dance comes from Yogyakarta?",
        answers: [
            "Tari Serimpi",
            "Tari Yapong",
            "Tari Jaipong",
            "Tari Remo"
        ],
        correct: 0
    },

    {
        question: "What is the famous traditional food from East Java?",
        answers: [
            "Karedok",
            "Lumpia Semarang",
            "Rawon",
            "Gudeg"
        ],
        correct: 2
    },

    {
        question: "Which traditional clothing is associated with the Madurese people of East Java?",
        answers: [
            "Kebaya Encim",
            "Pesa'an",
            "Jawi Jangkep",
            "Surjan"
        ],
        correct: 1
    },

    {
        question: "Which traditional dance comes from East Java?",
        answers: [
            "Tari Gambyong",
            "Tari Serimpi",
            "Tari Cokek",
            "Tari Remo"
        ],
        correct: 3
    },

    {
        question: "What is the traditional musical ensemble of Central Java?",
        answers: [
            "Gambang Kromong",
            "Gamelan",
            "Angklung Buhun",
            "Tanjidor"
        ],
        correct: 1
    },

    {
        question: "Which local language is mainly spoken in West Java?",
        answers: [
            "Madurese",
            "Betawi",
            "Sundanese",
            "Osing"
        ],
        correct: 2
    },

    {
        question: "What is the famous traditional food from DKI Jakarta?",
        answers: [
            "Kerak Telor",
            "Gudeg",
            "Rawon",
            "Karedok"
        ],
        correct: 0
    },

    {
        question: "Which traditional musical instrument is associated with Betawi culture?",
        answers: [
            "Saluang",
            "Gambang Kromong",
            "Sasando",
            "Kolintang"
        ],
        correct: 1
    },

    {
        question: "What is the traditional language spoken by the Madurese community in East Java?",
        answers: [
            "Sundanese",
            "Betawi",
            "Madurese",
            "Balinese"
        ],
        correct: 2
    }

];


/* ==================================
   7. QUIZ SYSTEM
================================== */

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const questionNumber = document.getElementById("questionNumber");
const scoreDisplay = document.getElementById("scoreDisplay");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const progressFill = document.getElementById("progressFill");

if (questionText) {

    showQuestion();

}


function showQuestion() {

    answered = false;

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `QUESTION ${currentQuestion + 1} / ${questions.length}`;

    scoreDisplay.textContent = `SCORE: ${score}`;

    questionText.textContent = current.question;

    answerList.innerHTML = "";

    feedback.textContent = "";

    nextButton.disabled = true;

    nextButton.textContent =
        currentQuestion === questions.length - 1
        ? "SEE MY RESULT →"
        : "NEXT QUESTION →";

    progressFill.style.width =
        (currentQuestion / questions.length * 100) + "%";


    current.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer-button";

        button.textContent =
            String.fromCharCode(65 + index) + ". " + answer;

        button.addEventListener("click", () => {

            selectAnswer(index);

        });

        answerList.appendChild(button);

    });

}


/* ==================================
   8. CHECK ANSWER
================================== */

function selectAnswer(selectedIndex) {

    if (answered) return;

    answered = true;

    const current = questions[currentQuestion];

    const buttons =
        answerList.querySelectorAll(".answer-button");

    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === current.correct) {

            button.classList.add("correct");

        }

        if (
            index === selectedIndex &&
            selectedIndex !== current.correct
        ) {

            button.classList.add("wrong");

        }

    });


    if (selectedIndex === current.correct) {

        score++;

        feedback.textContent = "Correct! Great job! ✓";

        feedback.style.color = "green";

    } else {

        feedback.textContent =
            "Incorrect! The correct answer is " +
            current.answers[current.correct] + ".";

        feedback.style.color = "#bd574a";

    }

    scoreDisplay.textContent = `SCORE: ${score}`;

    nextButton.disabled = false;

}


/* ==================================
   9. NEXT QUESTION
================================== */

function nextQuestion() {

    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

}


/* ==================================
   10. RESULT PAGE
================================== */

function showResult() {

    document.querySelector(".quiz-box").style.display = "none";

    const resultBox = document.getElementById("resultBox");

    resultBox.style.display = "block";

    document.getElementById("finalScore").textContent =
        score + " / " + questions.length;

    progressFill.style.width = "100%";

    let message = "";

    if (score >= 18) {

        message = "Excellent! You really understand the cultural diversity of Java!";

    } else if (score >= 15) {

        message = "Great job! You have learned a lot about Java's culture.";

    } else if (score >= 10) {

        message = "Good effort! Keep learning and exploring the culture of Java.";

    } else {

        message = "Don't give up! Explore the Java culture pages again and try once more.";

    }

    document.getElementById("resultMessage").textContent =
        message;

}


/* ==================================
   11. RESTART QUIZ
================================== */

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    answered = false;

    document.querySelector(".quiz-box").style.display = "block";

    document.getElementById("resultBox").style.display = "none";

    showQuestion();

}