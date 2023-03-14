const questions = [
    {
        question: "Which tool can perform a scan for open ports on a machine ?",
        optionA: "ping",
        optionB: "tracert",
        optionC: "Autopsy",
        optionD: "Nmap",
        correctOption: "optionD"
    },

    {
        question: "What Linux tool is used to search text & log files for specific values ?",
        optionA: "cat",
        optionB: "grep",
        optionC: "tail",
        optionD: "sort",
        correctOption: "optionB"
    },

    {
        question: "What is a vulnerability assessment ?",
        optionA: "an automated scan for known vulnerabilities",
        optionB: "simulates a real-world attack",
        optionC: "same as a pentest",
        optionD: "assessment of physical security",
        correctOption: "optionA"
    },

    {
        question: "What is the last step in the Incident Response Process?",
        optionA: "Containment",
        optionB: "Eradication",
        optionC: "Lessons Learned",
        optionD: "Preparation",
        correctOption: "optionC"
    },

    {
        question: "Which Attack Framework relies heavily on discussing Tactics, Techniques and procedures of the adversary ?",
        optionA: "cyber kill chain",
        optionB: "diamond intrusion model",
        optionC: "MITRE ATT&CK",
        optionD: "Metasploit",
        correctOption: "optionC"
    },

    {
        question: "What is the 6th stage of an attack according to the cyber kill chain ?",
        optionA: "Command & Control",
        optionB: "exploitation",
        optionC: "delivery",
        optionD: "Weaponisation",
        correctOption: "optionA"
    },

    {
        question: "_____ is used for taking a forensic image of a hard drive on Linux ?",
        optionA: "Autopsy",
        optionB: "nmap",
        optionC: "dd",
        optionD: "FTKImager",
        correctOption: "optionC"
    },

    {
        question: "What is a security incident report?",
        optionA: "outlines the details of a security incident",
        optionB: "list of potential threats to a company",
        optionC: "outlines a company's security policies",
        optionD: "A list of software vulnerabilities",
        correctOption: "optionA"
    },

    {
        question: "Which software is used in a SOC to provide a centralised visibiility of threats in realtime ?",
        optionA: "Wireshark",
        optionB: "IDS",
        optionC: "SOAR",
        optionD: "SIEM",
        correctOption: "optionD"
    },

    {
        question: "___ log files contain information such as successful and failed login attempts ?" ,
        optionA: "System",
        optionB: "Network",
        optionC: "Application",
        optionD: "Security",
        correctOption: "optionD"
    },

    {
        question: "what file extension would you expect to see after performing a memory dump ?",
        optionA: ".txt",
        optionB: ".exe",
        optionC: ".dmp",
        optionD: ".html",
        correctOption: "optionC"
    },

    {
        question: "What is used to make configuration cahnges to a mobile device ?",
        optionA: "MDM",
        optionB: "Firewall",
        optionC: "DLP system",
        optionD: "EDR",
        correctOption: "optionA"
    },


    {
        question: "What is the purpose of a disaster recovery plan ?",
        optionA: "To prevent security incidents from occurring",
        optionB: "Recover from catastrophic events",
        optionC: "Miinimizing impact of an incident",
        optionD: "responding to incidents quickly",
        correctOption: "optionB"
    },

    {
        question: "What type of server is used to collect logs from the network in one place ?",
        optionA: "Web server",
        optionB: "FTP server",
        optionC: "SSH server",
        optionD: "Syslog server",
        correctOption: "optionD"
    },

    {
        question: "What is the BEST way of protecting old devices that can't be updated anymore ?",
        optionA: "Air gapping",
        optionB: "MDM",
        optionC: "VLANs",
        optionD: "Firewalls",
        correctOption: "optionA"
    },

    {
        question: "___ is used for incident response automation using playbooks ?",
        optionA: "SIEM",
        optionB: "Wireshark",
        optionC: "SOAR",
        optionD: "IPS",
        correctOption: "optionC"
    },

    {
        question: "____ documents each person who handled evidence in a digital forensics investigation ?",
        optionA: "chain of custody",
        optionB: "An incident report",
        optionC: "A Playbook",
        optionD: "A runbook",
        correctOption: "optionA"
    },

    {
        question: "When conducting a forensic investigation on a machine, which type of data should be collected first?",
        optionA: "data in memory(RAM)",
        optionB: "hard drive data",
        optionC: "CPU cache",
        optionD: "browser data",
        correctOption: "optionC"
    },

    {
        question: "Which is NOT a benefit from security audits ?",
        optionA: "Identify security risks",
        optionB: "indentify vulenrabilities",
        optionC: "prevents incidents from occuring",
        optionD: "Ensures legal compliance",
        correctOption: "optionC"
    },

    {
        question: "What is used to ensure digital evidence has not been changed/altered during the forensic process ?",
        optionA: "Hashing",
        optionB: "encryption",
        optionC: "encoding",
        optionD: "binary",
        correctOption: "optionA"
    },

    {
        question: "____ is a hypothetical simulation to test the incident response plan ?",
        optionA: "RedTeaming",
        optionB: "Penetration test",
        optionC: "security audit",
        optionD: "Tabletop excercise",
        correctOption: "optionD"
    },

    {
        question: "Which tool can read a PCAP file?",
        optionA: "Nmap",
        optionB: "Wireshark",
        optionC: "Metasploit",
        optionD: "nslookup",
        correctOption: "optionB"
    },

    {
        question: "what is NOT considered a part of the diamond model of intrusion analysis?",
        optionA: "Victim",
        optionB: "Technique",
        optionC: "Infrastructure",
        optionD: "Capability",
        correctOption: "optionB"
    },

    {
        question: "Which of these tools is most likely not going to be used in a digital forensic investigation ?",
        optionA: "autopsy",
        optionB: "FTK Imager",
        optionC: "nmap",
        optionD: "memdump",
        correctOption: "optionC"
    },

    {
        question: "What is the first step in the Incident Response Process?",
        optionA: "Containment",
        optionB: "Lessons Learned",
        optionC: "Eradication",
        optionD: "Preparation",
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