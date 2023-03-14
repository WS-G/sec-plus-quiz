const questions = [
    {
        question: "Which of the following is a common protocol used to secure email transmission?",
        optionA: "SSL",
        optionB: "TLS",
        optionC: "IPSec",
        optionD: "SSH",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is an example of multifactor authentication?",
        optionA: "A username and password",
        optionB: "A smart card and a PIN",
        optionC: "A biometric scan",
        optionD: "A security token",
        correctOption: "optionB"
    },

    {
        question: "What is the purpose of access control?",
        optionA: "To monitor network traffic for suspicious activity",
        optionB: "To prevent unauthorized access to a system",
        optionC: "To identify and assess vulnerabilities in a system",
        optionD: "To protect against network attacks",
        correctOption: "optionB"
    },

    {
        question: "What is the purpose of a security baseline?",
        optionA: "To identify and assess vulnerabilities in a system",
        optionB: "To protect against network attacks",
        optionC: "To monitor network traffic for suspicious activity",
        optionD: "To establish a minimum level of security for a system",
        correctOption: "optionD"
    },

    {
        question: "What is the purpose of security testing?",
        optionA: "To protect against network attacks",
        optionB: "To identify and assess vulnerabilities in a system",
        optionC: "To monitor network traffic for suspicious activity",
        optionD: "To prevent unauthorized access to a system",
        correctOption: "optionB"
    },

    {
        question: "What is the purpose of change management?",
        optionA: "To prevent unauthorized access to a system",
        optionB: "To monitor network traffic for suspicious activity",
        optionC: "To identify and assess vulnerabilities in a system",
        optionD: "To control the process of making changes to a system",
        correctOption: "optionD"
    },

    {
        question: "Which of the following is an example of a security control?",
        optionA: "A firewall",
        optionB: "A vulnerability scanner",
        optionC: "A protocol analyzer",
        optionD: "A honeypot",
        correctOption: "optionA"
    },

    {
        question: "Which of the following is an example of a vulnerability?",
        optionA: "A firewall",
        optionB: "A virus",
        optionC: "An open port on a server",
        optionD: "A DDoS attack",
        correctOption: "optionC"
    },

    {
        question: "Which of the following is an example of a physical control?",
        optionA: "A firewall",
        optionB: "A password policy",
        optionC: "Security cameras",
        optionD: "An intrusion detection system",
        correctOption: "optionC"
    },

    {
        question: "What is the purpose of a password policy?",
        optionA: "To prevent unauthorized access to a system",
        optionB: "To monitor network traffic for suspicious activity",
        optionC: "To identify and assess vulnerabilities in a system",
        optionD: "To protect against network attacks",
        correctOption: "optionA"
    },

    {
        question: "Which network protocol is commonly used for remote access on Linux machines?",
        optionA: "RDP",
        optionB: "SSH",
        optionC: "SMTP",
        optionD: "POP3",
        correctOption: "optionB"
    },

    {
        question: "Which protocol is used for secure authentication of users in Active Directory network?",
        optionA: "LDAP",
        optionB: "HTTPS",
        optionC: "FTP",
        optionD: "Kerberos",
        correctOption: "optionD"
    },

    {
        question: "What port number is HTTPS on by default ?",
        optionA: "445",
        optionB: "8080",
        optionC: "80",
        optionD: "443",
        correctOption: "optionB"
    },

    {
        question: "Which of the following makes it harder to brute-force hashed passwords ?",
        optionA: "encoding",
        optionB: "tokenisation",
        optionC: "anonymisation",
        optionD: "Salting",
        correctOption: "optionD"
    },

    {
        question: "Which application security contorl helps protect against buffer overflow attacks ?",
        optionA: "Secure cookies",
        optionB: "Input Validation",
        optionC: "HSTS Headers",
        optionD: "Code Signing",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is commonly seen in a blackbox test?",
        optionA: "manual code review",
        optionB: "static testing",
        optionC: "fuzzing",
        optionD: "automatic code review",
        correctOption: "optionC"
    },

    {
        question: "____ will help protect data at rest ?",
        optionA: "Patch Management",
        optionB: "Disk Encryption",
        optionC: "Whitelisting",
        optionD: "Secure Boot",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is used as secure key storage on a motherboard ?",
        optionA: "BIOS Key",
        optionB: "TPM chip",
        optionC: "BIOS Chip",
        optionD: "Self-Encrypting Drive",
        correctOption: "optionB"
    },

    {
        question: "What is used to for a scure tunnel into another network over the internet ?",
        optionA: "HTTPS tunnel",
        optionB: "VPN",
        optionC: "SSH",
        optionD: "Remote Desktop",
        correctOption: "optionB"
    },

    {
        question: "What is used to prevent a web server being overloaded with traffic?",
        optionA: "Next-Gen Firewall",
        optionB: "Web Proxy",
        optionC: "Load Balancer",
        optionD: "IDS",
        correctOption: "optionC"
    },

    {
        question: "Which is NOT used for VPN ?",
        optionA: "IPSec",
        optionB: "Wireguard",
        optionC: "IKEv2",
        optionD: "SNMP",
        correctOption: "optionD"
    },

    {
        question: "What prevents an unauthorized system from connecting to a port on a switch ?",
        optionA: "802.1x",
        optionB: "RADIUS",
        optionC: "IPSec",
        optionD: "Firewall",
        correctOption: "optionA"
    },

    {
        question: "which tool is used to detect threats over a whole network?",
        optionA: "NIPS",
        optionB: "NIDS",
        optionC: "Anti-Virus",
        optionD: "EDR",
        correctOption: "optionB"
    },

    {
        question: "Which is an example of an open-source firewall ?",
        optionA: "Cisco",
        optionB: "Palo Alto",
        optionC: "Pfsense",
        optionD: "Fortinet",
        correctOption: "optionC"
    },

    {
        question: "Which wireless protocol is considered most-secure?",
        optionA: "WPA",
        optionB: "WEP6",
        optionC: "WPA2",
        optionD: "WPA3",
        correctOption: "optionD"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 19) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 19) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 7) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 8 && playerScore < 16) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 16) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 20) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}