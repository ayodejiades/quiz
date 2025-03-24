const questions = [
  {
    question: "Which of the following is an example of application software?",
    options: ["Windows OS", "Linux Kernel", "Microsoft Word", "Device Drivers"],
    answer: "Microsoft Word",
  },
  {
    question: "What is the function of a CPU in a computer system?",
    options: [
      "To store data permanently",
      "To display output on the screen",
      "To connect to the internet",
      "To process data and control other components",
    ],
    answer: "To process data and control other components",
  },
  {
    question:
      "Which type of attack involves intercepting communication between two parties without their knowledge?",
    options: [
      "Phishing",
      "Man-in-the-Middle (MITM)",
      "SQL Injection",
      "Denial-of-Service (DoS)",
    ],
    answer: "Man-in-the-Middle (MITM)",
  },
  {
    question: "In networking, what is the primary function of a subnet mask?",
    options: [
      "To identify a network's range of IP addresses",
      "To encrypt data before transmission",
      "To assign MAC addresses to devices",
      "To detect unauthorized network access",
    ],
    answer: "To identify a network's range of IP addresses",
  },
  {
    question:
      "Which cybersecurity principle ensures that data remains unchanged unless modified by authorized entities?",
    options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
    answer: "Integrity",
  },
  {
    question:
      "What is the primary difference between symmetric and asymmetric encryption?",
    options: [
      "Symmetric encryption uses a single key, while asymmetric encryption uses a key pair",
      "Symmetric encryption is slower than asymmetric encryption",
      "Asymmetric encryption is only used for password storage",
      "Symmetric encryption requires a certificate authority",
    ],
    answer:
      "Symmetric encryption uses a single key, while asymmetric encryption uses a key pair",
  },
  {
    question: "What does the 'C' in the CIA Triad stand for?",
    options: ["Control", "Confidentiality", "Compliance", "Connectivity"],
    answer: "Confidentiality",
  },
  {
    question: "What does the 'I' in the CIA Triad stand for?",
    options: ["Integration", "Integrity", "Internet", "Interface"],
    answer: "Integrity",
  },
  {
    question: "What does the 'A' in the CIA Triad stand for?",
    options: [
      "Accessibility",
      "Availability",
      "Authentication",
      "Authorization",
    ],
    answer: "Availability",
  },
  {
    question:
      "What does a '*' (asterisk) in the output of 'tracert google.com' indicate?",
    options: [
      "A successful response from the router",
      "A timeout or no response from the router",
      "The final destination has been reached",
      "The hop number is unknown",
    ],
    answer: "A timeout or no response from the router",
  },
  {
    question: "What does the 'ping' command stand for?",
    options: [
      "Packet Internet or Inter-Network Groper",
      "Packet Inter-Network Gateway",
      "Protocol Internet Gateway",
      "Packet Inter-Network Grabber",
    ],
    answer: "Packet Internet or Inter-Network Groper",
  },
  {
    question:
      "What is the primary goal of ensuring availability in cybersecurity?",
    options: [
      "To prevent unauthorized access to data",
      "To ensure data is accurate and unaltered",
      "To ensure systems and data are accessible when needed",
      "To encrypt sensitive information",
    ],
    answer: "To ensure systems and data are accessible when needed",
  },
  {
    question:
      "Which programming paradigm is based on functions as first-class citizens and avoids changing state?",
    options: [
      "Procedural Programming",
      "Object-Oriented Programming",
      "Functional Programming",
      "Imperative Programming",
    ],
    answer: "Functional Programming",
  },
  {
    question: "In Linux, which command is used to modify file permissions?",
    options: ["ls", "chmod", "cd", "mkdir"],
    answer: "chmod",
  },
  {
    question:
      "Which part of a CPU is responsible for executing arithmetic and logic operations?",
    options: [
      "Control Unit",
      "Cache Memory",
      "ALU (Arithmetic Logic Unit)",
      "Registers",
    ],
    answer: "ALU (Arithmetic Logic Unit)",
  },
  {
    question:
      "Which type of cyberattack tricks users into revealing sensitive information?",
    options: [
      "Brute-force attack",
      "Phishing attack",
      "Denial-of-Service attack",
      "Trojan attack",
    ],
    answer: "Phishing attack",
  },
  {
    question: "What is the primary purpose of the OSI model?",
    options: [
      "To provide a framework for network communication",
      "To encrypt data transmissions",
      "To increase internet speed",
      "To store network configurations",
    ],
    answer: "To provide a framework for network communication",
  },
  {
    question: "Which protocol is commonly used to send emails?",
    options: ["IMAP", "SMTP", "POP3", "HTTP"],
    answer: "SMTP",
  },
  {
    question:
      "Which type of cyberattack attempts to overwhelm a server with excessive requests?",
    options: [
      "Phishing",
      "Denial-of-Service (DoS)",
      "Man-in-the-Middle (MITM)",
      "SQL Injection",
    ],
    answer: "Denial-of-Service (DoS)",
  },
  {
    question: "What is the primary function of an operating system?",
    options: [
      "To manage hardware resources",
      "To create web pages",
      "To design graphics",
      "To execute user applications",
    ],
    answer: "To manage hardware resources",
  },
  {
    question:
      "What is the purpose of limiting the maximum number of hops in the 'tracert' command?",
    options: [
      "To increase the speed of the trace",
      "To reduce the amount of data displayed",
      "To focus on a specific segment of the network path",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question:
      "What is the default maximum number of hops in the 'tracert' command?",
    options: ["15 hops", "30 hops", "50 hops", "100 hops"],
    answer: "30 hops",
  },
  {
    question:
      "What happens if the 'tracert' command reaches the default maximum number of hops?",
    options: [
      "The command stops and displays the results up to that point",
      "The command continues indefinitely",
      "The command restarts from the beginning",
      "The command switches to a different protocol",
    ],
    answer: "The command stops and displays the results up to that point",
  },
  {
    question:
      "Which command would you use to limit the 'tracert' command to 15 hops?",
    options: [
      "tracert -h 15 google.com",
      "tracert -w 15 google.com",
      "tracert -m 15 google.com",
      "tracert -t 15 google.com",
    ],
    answer: "tracert -h 15 google.com",
  },
  {
    question: "Which of the following is an example of system software?",
    options: [
      "Microsoft Word",
      "Windows OS",
      "Google Chrome",
      "Adobe Photoshop",
    ],
    answer: "Windows OS",
  },
  {
    question: "What is the purpose of process management in an OS?",
    options: [
      "To delete unnecessary files",
      "To control program execution and multitasking",
      "To manage user login sessions",
      "To encrypt network traffic",
    ],
    answer: "To control program execution and multitasking",
  },
  {
    question:
      "Which component of an OS is responsible for managing memory allocation?",
    options: ["Kernel", "File system", "Device driver", "Task scheduler"],
    answer: "Kernel",
  },
  {
    question: "What is the primary role of a file system in an OS?",
    options: [
      "To execute applications",
      "To organize and store files",
      "To manage system security",
      "To configure device drivers",
    ],
    answer: "To organize and store files",
  },
  {
    question: "What is an IP address used for?",
    options: [
      "To encrypt user passwords",
      "To store files in the cloud",
      "To identify a device on a network",
      "To increase processing speed",
    ],
    answer: "To identify a device on a network",
  },
  {
    question: "What does DHCP stand for?",
    options: [
      "Dynamic Host Configuration Process",
      "Dynamic Host Configuration Protocol",
      "Dynamic Hosting Control Protocol",
      "Dynamic Hosting Configuration Protocol",
    ],
    answer: "Dynamic Host Configuration Protocol",
  },
  {
    question: "Which of the following best describes a firewall?",
    options: [
      "A software that speeds up processing",
      "A security system that monitors and controls network traffic",
      "A tool used for data compression",
      "A protocol for wireless communication",
    ],
    answer: "A security system that monitors and controls network traffic",
  },
  {
    question: "What is the first step to install Linux on VirtualBox?",
    options: [
      "Create a new virtual machine and assign RAM",
      "Configure network settings",
      "Install essential software",
      "Download VirtualBox and a Linux ISO",
    ],
    answer: "Download VirtualBox and a Linux ISO",
  },
  {
    question:
      "What is the minimum recommended amount of RAM to assign to a Linux virtual machine in VirtualBox?",
    options: ["512 MB", "1 GB", "2 GB", "4 GB"],
    answer: "2 GB",
  },
  {
    question: "What does 'Telnet' stand for?",
    options: [
      "Telecommunication Network",
      "Terminal Network",
      "Telephone Network",
      "Teletype Network",
    ],
    answer: "Teletype Network",
  },
  {
    question: "What is the primary purpose of Telnet?",
    options: [
      "To securely transfer files over a network",
      "To encrypt network communication",
      "To provide remote access to another computer over a network",
      "To diagnose network connectivity issues",
    ],
    answer: "To provide remote access to another computer over a network",
  },
  {
    question:
      "What is the purpose of selecting the Linux ISO as the boot device during VirtualBox setup?",
    options: [
      "To configure network settings",
      "To start the Linux installation process",
      "To assign RAM to the virtual machine",
      "To install essential software",
    ],
    answer: "To start the Linux installation process",
  },
  {
    question:
      "Which command is used to install updates on a Linux system after installation?",
    options: [
      "sudo apt update && sudo apt upgrade",
      "sudo install updates",
      "sudo update linux",
      "sudo apt-get install updates",
    ],
    answer: "sudo apt update && sudo apt upgrade",
  },
  {
    question:
      "What is the purpose of enabling shared folders in VirtualBox after installing Linux?",
    options: [
      "To increase the virtual machine's RAM",
      "To allow file sharing between the host and guest operating systems",
      "To configure network settings",
      "To install essential software",
    ],
    answer:
      "To allow file sharing between the host and guest operating systems",
  },
  {
    question: "What is a primary function of network protocols?",
    options: [
      "To encrypt passwords",
      "To define rules for data transmission",
      "To speed up CPU processing",
      "To store user data",
    ],
    answer: "To define rules for data transmission",
  },
  {
    question:
      "Which of the following is an example of an interpreted programming language?",
    options: ["C", "Java", "Python", "Assembly"],
    answer: "Python",
  },
  {
    question:
      "Which network topology connects all devices to a single central hub?",
    options: [
      "Bus topology",
      "Star topology",
      "Ring topology",
      "Mesh topology",
    ],
    answer: "Star topology",
  },
  {
    question: "What is the main function of a router in a network?",
    options: [
      "To provide power to devices",
      "To manage local storage",
      "To forward data between networks",
      "To protect against malware",
    ],
    answer: "To forward data between networks",
  },
  {
    question:
      "Which type of malware encrypts user files and demands payment for decryption?",
    options: ["Trojan horse", "Ransomware", "Spyware", "Adware"],
    answer: "Ransomware",
  },
  {
    question:
      "Which protocol is responsible for mapping IP addresses to MAC addresses in a network?",
    options: ["DNS", "DHCP", "ARP", "ICMP"],
    answer: "ARP",
  },
  {
    question: "Which protocol is used for secure file transfer over a network?",
    options: ["HTTP", "FTP", "SFTP", "POP3"],
    answer: "SFTP",
  },
  {
    question: "Which network protocol is used to send and receive web pages?",
    options: ["FTP", "HTTP", "SMTP", "SNMP"],
    answer: "HTTP",
  },
  {
    question: "What is the main purpose of the TCP protocol?",
    options: [
      "To encrypt network traffic",
      "To provide reliable, connection-oriented communication",
      "To dynamically assign IP addresses",
      "To translate domain names to IP addresses",
    ],
    answer: "To provide reliable, connection-oriented communication",
  },
  {
    question: "Which protocol is used for email transmission?",
    options: ["SMTP", "IMAP", "POP3", "DNS"],
    answer: "SMTP",
  },
  {
    question:
      "Which protocol is responsible for resolving domain names into IP addresses?",
    options: ["HTTP", "TCP", "DNS", "ARP"],
    answer: "DNS",
  },
  {
    question: "What type of protocol is UDP?",
    options: [
      "Connection-oriented",
      "Connectionless",
      "Encrypted",
      "Error-correcting",
    ],
    answer: "Connectionless",
  },
  {
    question:
      "Which protocol is used for retrieving emails from a mail server?",
    options: ["SMTP", "IMAP", "FTP", "DHCP"],
    answer: "IMAP",
  },
  {
    question: "Which protocol is commonly used for network device management?",
    options: ["SNMP", "FTP", "TCP", "HTTP"],
    answer: "SNMP",
  },
  {
    question:
      "Which network protocol provides connectionless communication and is often used for streaming services?",
    options: ["TCP", "UDP", "ICMP", "ARP"],
    answer: "UDP",
  },
  {
    question:
      "Which protocol is used to determine the path data takes across networks?",
    options: ["DNS", "SMTP", "ICMP", "FTP"],
    answer: "ICMP",
  },
  {
    question:
      "Which protocol ensures secure communication over a network by encrypting data?",
    options: ["FTP", "SSH", "POP3", "HTTP"],
    answer: "SSH",
  },
  {
    question:
      "Which protocol is used to transfer files between a client and a server?",
    options: ["FTP", "TCP", "SMTP", "ICMP"],
    answer: "FTP",
  },
  {
    question:
      "Which protocol is used by web browsers to establish secure connections?",
    options: ["HTTP", "FTP", "SSL/TLS", "IMAP"],
    answer: "SSL/TLS",
  },
  {
    question:
      "Which protocol is responsible for automatically assigning IP addresses to devices?",
    options: ["DNS", "DHCP", "NTP", "FTP"],
    answer: "DHCP",
  },
  {
    question: "What is the main function of the ICMP protocol?",
    options: [
      "To provide email services",
      "To manage routing tables",
      "To send error messages and diagnostics",
      "To encrypt network packets",
    ],
    answer: "To send error messages and diagnostics",
  },
  {
    question:
      "Which protocol is used to synchronize time across multiple devices in a network?",
    options: ["NTP", "SNMP", "ICMP", "DNS"],
    answer: "NTP",
  },
  {
    question: "Which transport layer protocol guarantees data delivery?",
    options: ["TCP", "UDP", "ICMP", "FTP"],
    answer: "TCP",
  },
  {
    question: "What is the main advantage of cloud computing?",
    options: [
      "Improved battery life",
      "Lower electricity consumption",
      "Remote access to data and services",
      "Increased CPU speed",
    ],
    answer: "Remote access to data and services",
  },
  {
    question: "Which command is used to test network connectivity in Windows?",
    options: ["ping", "netstat", "ipconfig", "tracert"],
    answer: "ping",
  },
  {
    question: "What does BGP stand for in networking?",
    options: [
      "Border Gateway Protocol",
      "Broadband Gateway Pathway",
      "Basic Gateway Processing",
      "Bandwidth Generating Protocol",
    ],
    answer: "Border Gateway Protocol",
  },
  {
    question:
      "Which protocol is responsible for establishing secure shell connections?",
    options: ["SSH", "SMTP", "FTP", "IMAP"],
    answer: "SSH",
  },
  {
    question: "What is the function of the ARP protocol?",
    options: [
      "To map IP addresses to MAC addresses",
      "To encrypt network traffic",
      "To manage domain name resolution",
      "To monitor network security",
    ],
    answer: "To map IP addresses to MAC addresses",
  },
  {
    question: "What does VLAN stand for in networking?",
    options: [
      "Virtual Local Area Network",
      "Variable Link Access Node",
      "Verified Local Address Network",
      "Virtual Link and Network",
    ],
    answer: "Virtual Local Area Network",
  },
  {
    question: "What is the primary function of an antivirus program?",
    options: [
      "To delete old files",
      "To prevent unauthorized software installations",
      "To detect and remove malicious software",
      "To manage network traffic",
    ],
    answer: "To detect and remove malicious software",
  },
  {
    question:
      "Which data structure operates in a Last In, First Out (LIFO) manner?",
    options: ["Queue", "Stack", "Linked List", "Array"],
    answer: "Stack",
  },
  {
    question:
      "Which of the following techniques is commonly used to prevent SQL Injection attacks?",
    options: [
      "Using strong passwords",
      "Input validation and prepared statements",
      "Enabling two-factor authentication",
      "Hiding database connection strings",
    ],
    answer: "Input validation and prepared statements",
  },
  {
    question: "What is the purpose of a hash function in cybersecurity?",
    options: [
      "To encrypt data",
      "To generate a fixed-length output from variable-length input",
      "To establish a secure network connection",
      "To compress large files",
    ],
    answer: "To generate a fixed-length output from variable-length input",
  },
  {
    question:
      "Which type of malware disguises itself as legitimate software to trick users into installing it?",
    options: ["Trojan Horse", "Ransomware", "Worm", "Spyware"],
    answer: "Trojan Horse",
  },
  {
    question:
      "What is the primary function of memory management in an operating system?",
    options: [
      "To manage file storage on disk",
      "To control network communication",
      "To allocate and deallocate memory for applications",
      "To handle user authentication",
    ],
    answer: "To allocate and deallocate memory for applications",
  },
  {
    question:
      "Which of the following is an example of a file extension for an image file?",
    options: [".txt", ".exe", ".jpg", ".mp3"],
    answer: ".jpg",
  },
  {
    question: "What is the purpose of a firewall in a computer network?",
    options: [
      "To increase internet speed",
      "To block unauthorized access to a network",
      "To store data securely",
      "To manage file sharing",
    ],
    answer: "To block unauthorized access to a network",
  },
  {
    question:
      "Which protocol is used for secure communication over the internet?",
    options: ["HTTP", "FTP", "HTTPS", "SMTP"],
    answer: "HTTPS",
  },
  {
    question: "Which of the following is an example of a utility program?",
    options: [
      "Microsoft Word",
      "Google Chrome",
      "Antivirus software",
      "Adobe Photoshop",
    ],
    answer: "Antivirus software",
  },
  {
    question: "Which protocol does the `ping` command use to send packets?",
    options: ["TCP", "UDP", "ICMP", "ARP"],
    answer: "ICMP",
  },
  {
    question: "What is the main purpose of a CPU in a computer system?",
    options: [
      "To store data permanently",
      "To process data and control other components",
      "To display output on the screen",
      "To connect to the internet",
    ],
    answer: "To process data and control other components",
  },
  {
    question: "What is the purpose of a subnet mask in networking?",
    options: [
      "To encrypt data during transmission",
      "To identify the network portion of an IP address",
      "To assign MAC addresses to devices",
      "To detect unauthorized access",
    ],
    answer: "To identify the network portion of an IP address",
  },
  {
    question: "Which of the following is an example of a cybersecurity threat?",
    options: ["Fhishing", "Fishing", "Phishing", "Phising"],
    answer: "Phishing",
  },
  {
    question: "What is the primary purpose of a blockchain?",
    options: [
      "To increase internet speed",
      "To manage file sharing",
      "To store data in a decentralized and immutable manner",
      "To encrypt data during transmission",
    ],
    answer: "To store data in a decentralized and immutable manner",
  },
  {
    question: "Which of the following is an example of an IoT device?",
    options: [
      "Microsoft Word",
      "Linux Kernel",
      "Smart Thermostat",
      "Antivirus Software",
    ],
    answer: "Smart Thermostat",
  },
  {
    question:
      "What is the primary purpose of a backup system in fault tolerance?",
    options: [
      "To prevent data loss in case of failure",
      "To increase internet speed",
      "To manage file sharing",
      "To encrypt data during transmission",
    ],
    answer: "To prevent data loss in case of failure",
  },
  {
    question: "What is the primary goal of cybersecurity?",
    options: [
      "To increase internet speed",
      "To protect systems, networks, and data from cyber threats",
      "To enhance computer graphics",
      "To reduce electricity consumption in data centers",
    ],
    answer: "To protect systems, networks, and data from cyber threats",
  },
  {
    question:
      "Which of the following ensures that data is only accessible to authorized users?",
    options: ["Integrity", "Confidentiality", "Availability", "Redundancy"],
    answer: "Confidentiality",
  },
  {
    question: "What is an example of a phishing attack?",
    options: [
      "A hacker creates a fake banking website to steal credentials",
      "Using strong passwords to secure accounts",
      "Encrypting files to prevent unauthorized access",
      "Updating software to patch vulnerabilities",
    ],
    answer: "A hacker creates a fake banking website to steal credentials",
  },
  {
    question:
      "Which technology is used to ensure that transactions are immutable?",
    options: ["AI", "IoT", "Blockchain", "Cloud Computing"],
    answer: "Blockchain",
  },
  {
    question: "What is the primary purpose of a VPN (Virtual Private Network)?",
    options: [
      "To encrypt internet traffic and provide anonymity",
      "To increase internet speed",
      "To manage file sharing",
      "To store data securely",
    ],
    answer: "To encrypt internet traffic and provide anonymity",
  },
  {
    question: "Which of the following is an example of symmetric encryption?",
    options: ["RSA", "AES", "Diffie-Hellman", "Elliptic Curve Cryptography"],
    answer: "AES",
  },
  {
    question:
      "What is the default wait-time (timeout) for each reply in the 'tracert' command?",
    options: [
      "100 milliseconds",
      "1000 milliseconds",
      "4000 milliseconds",
      "500 milliseconds",
    ],
    answer: "4000 milliseconds",
  },
  {
    question:
      "Which programming paradigm uses a step-by-step approach with functions and loops to solve problems?",
    options: [
      "Object-Oriented Programming",
      "Functional Programming",
      "Procedural Programming",
      "Event-Driven Programming",
    ],
    answer: "Procedural Programming",
  },
  {
    question:
      "What is the term for the ability of a function to be passed as an argument to another function in functional programming?",
    options: [
      "Encapsulation",
      "Inheritance",
      "First-Class Functions",
      "Polymorphism",
    ],
    answer: "First-Class Functions",
  },
  {
    question:
      "What is the primary unit of organization in Object-Oriented Programming (OOP)?",
    options: ["Functions", "Loops", "Objects", "Variables"],
    answer: "Objects",
  },
  {
    question:
      "In OOP, what is the term for one class inheriting properties and methods from another class?",
    options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    answer: "Inheritance",
  },
  {
    question:
      "Which programming paradigm treats computation as the evaluation of mathematical functions and avoids changing state?",
    options: [
      "Procedural Programming",
      "Object-Oriented Programming",
      "Functional Programming",
      "Imperative Programming",
    ],
    answer: "Functional Programming",
  },
  {
    question:
      "Which type of operating system is designed to execute a series of jobs without manual intervention?",
    options: [
      "Real-Time Operating System",
      "Batch Operating System",
      "Distributed Operating System",
      "Network Operating System",
    ],
    answer: "Batch Operating System",
  },
  {
    question:
      "Which type of operating system is used in environments where response time is critical, such as air traffic control systems?",
    options: [
      "Batch Operating System",
      "Real-Time Operating System",
      "Distributed Operating System",
      "Network Operating System",
    ],
    answer: "Real-Time Operating System",
  },
  {
    question:
      "Which type of operating system manages a group of independent computers and makes them appear as a single system?",
    options: [
      "Batch Operating System",
      "Real-Time Operating System",
      "Distributed Operating System",
      "Network Operating System",
    ],
    answer: "Distributed Operating System",
  },
  {
    question:
      "Which type of operating system is designed to manage and coordinate network resources, such as file sharing and printer access?",
    options: [
      "Batch Operating System",
      "Real-Time Operating System",
      "Distributed Operating System",
      "Network Operating System",
    ],
    answer: "Network Operating System",
  },
  {
    question:
      "Which type of operating system is commonly used in personal computers and workstations?",
    options: [
      "Batch Operating System",
      "Real-Time Operating System",
      "Time-Sharing Operating System",
      "Distributed Operating System",
    ],
    answer: "Time-Sharing Operating System",
  },
  {
    question:
      "What is the term for a function that always returns the same output for the same input and has no side effects?",
    options: [
      "Recursive Function",
      "Pure Function",
      "Anonymous Function",
      "Higher-Order Function",
    ],
    answer: "Pure Function",
  },
  {
    question:
      "Which of the following is a characteristic of functional programming?",
    options: [
      "Mutable data",
      "Stateful functions",
      "Immutability",
      "Inheritance",
    ],
    answer: "Immutability",
  },
  {
    question:
      "In Python, which of the following is an example of a lambda function?",
    options: [
      "def add(a, b): return a + b",
      "lambda x: x * x",
      "class Car: pass",
      "for i in range(10): print(i)",
    ],
    answer: "lambda x: x * x",
  },
  {
    question:
      "Which programming paradigm organizes code into objects that contain both data (attributes) and behavior (methods)?",
    options: [
      "Procedural Programming",
      "Functional Programming",
      "Object-Oriented Programming",
      "Declarative Programming",
    ],
    answer: "Object-Oriented Programming",
  },
  {
    question:
      "Which of the following is a characteristic of functional programming?",
    options: [
      "Encapsulation and inheritance",
      "Using pure functions without changing state",
      "Using loops and conditional statements",
      "Executing commands in sequence",
    ],
    answer: "Using pure functions without changing state",
  },
  {
    question:
      "What is the main difference between system software and application software?",
    options: [
      "System software runs applications, while application software performs user tasks",
      "Application software is free, while system software is paid",
      "System software is installed by users, while application software is built-in",
      "System software does not require updates, while application software does",
    ],
    answer:
      "System software runs applications, while application software performs user tasks",
  },
  {
    question: "What is the primary function of firmware in a computer system?",
    options: [
      "To provide a user interface for applications",
      "To manage hardware at a low level before the OS loads",
      "To store user documents and media files",
      "To improve internet speed",
    ],
    answer: "To manage hardware at a low level before the OS loads",
  },
  {
    question: "Which of the following best describes the BIOS?",
    options: [
      "A type of application software",
      "An operating system component",
      "A firmware responsible for hardware initialization",
      "A high-speed storage device",
    ],
    answer: "A firmware responsible for hardware initialization",
  },
  {
    question: "What does BIOS stand for?",
    options: [
      "Basic Input Output System",
      "Binary Integrated Operating System",
      "Basic Internet Operating Software",
      "Boot Initialization and Optimization System",
    ],
    answer: "Basic Input Output System",
  },
  {
    question:
      "Which of the following is a key difference between BIOS and UEFI?",
    options: [
      "BIOS is older and supports larger storage devices than UEFI",
      "UEFI supports a graphical user interface and secure boot, whereas BIOS does not",
      "BIOS is faster and more secure than UEFI",
      "UEFI can only be used on Linux-based systems",
    ],
    answer:
      "UEFI supports a graphical user interface and secure boot, whereas BIOS does not",
  },
  {
    question: "What does firmware do in an embedded system?",
    options: [
      "It provides real-time data analysis",
      "It serves as the permanent software controlling hardware operations",
      "It enhances battery life",
      "It increases internet speed",
    ],
    answer:
      "It serves as the permanent software controlling hardware operations",
  },
  {
    question: "What does IP stand for in the context of networking?",
    options: [
      "Internet Protocol",
      "Internal Protocol",
      "Internet Pathway",
      "Internal Pathway",
    ],
    answer: "Internet Protocol",
  },
  {
    question: "Which of the following is an example of an IPv4 address?",
    options: [
      "192.168.1.1",
      "2001:db8::ff00:42:8329",
      "fe80::1",
      "300.168.1.1",
    ],
    answer: "192.168.1.1",
  },
  {
    question: "What is the primary purpose of an IP address in a network?",
    options: [
      "To store data",
      "To identify devices on a network",
      "To process data",
      "To display output",
    ],
    answer: "To identify devices on a network",
  },
  {
    question: "Which of the following is an example of an IPv6 address?",
    options: [
      "192.168.1.1",
      "2001:db8::ff00:42:8329",
      "10.0.0.1",
      "172.16.254.1",
    ],
    answer: "2001:db8::ff00:42:8329",
  },
  {
    question: "How many bits are in an IPv4 address?",
    options: ["32 bits", "64 bits", "128 bits", "256 bits"],
    answer: "32 bits",
  },
  {
    question: "How many bits are in an IPv6 address?",
    options: ["32 bits", "64 bits", "128 bits", "256 bits"],
    answer: "128 bits",
  },
  {
    question: "Which of the following is a private IP address range?",
    options: [
      "192.168.0.0 to 192.168.255.255",
      "2001:db8::ff00:42:8329",
      "8.8.8.8",
      "172.32.0.0 to 172.63.255.255",
    ],
    answer: "192.168.0.0 to 192.168.255.255",
  },
  {
    question: "What is the purpose of a subnet mask in IP addressing?",
    options: [
      "To identify the network portion of an IP address",
      "To encrypt data",
      "To increase the speed of data transmission",
      "To store data",
    ],
    answer: "To identify the network portion of an IP address",
  },
  {
    question: "Which of the following is a common way to update firmware?",
    options: [
      "By reinstalling the operating system",
      "Through a firmware flashing tool provided by the manufacturer",
      "By clearing the system cache",
      "By formatting the hard drive",
    ],
    answer: "Through a firmware flashing tool provided by the manufacturer",
  },
  {
    question: "Which type of memory stores the BIOS firmware?",
    options: ["RAM", "ROM", "Cache", "Hard disk"],
    answer: "ROM",
  },
  {
    question:
      "What is the main function of the CMOS battery in relation to BIOS?",
    options: [
      "To power the CPU",
      "To provide backup power for BIOS settings storage",
      "To store the operating system",
      "To increase boot speed",
    ],
    answer: "To provide backup power for BIOS settings storage",
  },
  {
    question: "Which of the following is NOT a function of BIOS?",
    options: [
      "Performing the Power-On Self Test (POST)",
      "Loading the operating system bootloader",
      "Providing runtime services for the OS",
      "Managing user-installed applications",
    ],
    answer: "Managing user-installed applications",
  },
  {
    question: "What is the main advantage of UEFI over traditional BIOS?",
    options: [
      "It has a faster boot time and supports larger storage drives",
      "It does not require firmware updates",
      "It eliminates the need for an operating system",
      "It only works on 32-bit processors",
    ],
    answer: "It has a faster boot time and supports larger storage drives",
  },
  {
    question: "What is the primary purpose of a DHCP server in a network?",
    options: [
      "To automatically assign IP addresses to devices",
      "To encrypt data during transmission",
      "To manage file sharing",
      "To store data securely",
    ],
    answer: "To automatically assign IP addresses to devices",
  },
  {
    question: "What does 'integrity' mean in cybersecurity?",
    options: [
      "Ensuring data is accessible to everyone",
      "Ensuring data is accurate and not tampered with",
      "Ensuring systems are always fast",
      "Ensuring data is stored in the cloud",
    ],
    answer: "Ensuring data is accurate and not tampered with",
  },
  {
    question: "What is fault tolerance in a system?",
    options: [
      "The ability to prevent all failures",
      "The ability to continue operating even when components fail",
      "The ability to reduce system costs",
      "The ability to increase system speed",
    ],
    answer: "The ability to continue operating even when components fail",
  },
  {
    question:
      "Which of the following is an example of redundancy in fault tolerance?",
    options: [
      "Using backup systems",
      "Increasing system speed",
      "Reducing system costs",
      "Improving user interface design",
    ],
    answer: "Using backup systems",
  },
  {
    question: "What is the purpose of a failover system?",
    options: [
      "To reduce system costs",
      "To automatically switch to standby systems when a failure occurs",
      "To increase system speed",
      "To improve user interface design",
    ],
    answer: "To automatically switch to standby systems when a failure occurs",
  },
  {
    question: "What is the role of load balancing in fault tolerance?",
    options: [
      "To reduce system costs",
      "To distribute workload across multiple servers to prevent overload",
      "To increase system speed",
      "To improve user interface design",
    ],
    answer:
      "To distribute workload across multiple servers to prevent overload",
  },
  {
    question: "What is a common technique to prevent phishing attacks?",
    options: [
      "Disabling firewalls",
      "Enabling Multi-Factor Authentication (MFA)",
      "Using weak passwords",
      "Ignoring email links",
    ],
    answer: "Enabling Multi-Factor Authentication (MFA)",
  },
  {
    question:
      "What is the purpose of error detection and correction in fault tolerance?",
    options: [
      "To increase system speed",
      "To reduce system costs",
      "To detect and correct faults automatically",
      "To improve user interface design",
    ],
    answer: "To detect and correct faults automatically",
  },
  {
    question:
      "Which of the following is an example of a blockchain application?",
    options: [
      "Cryptocurrency",
      "Web browsing",
      "Word processing",
      "Image editing",
    ],
    answer: "Cryptocurrency",
  },
  {
    question: "What is the primary characteristic of blockchain transactions?",
    options: [
      "They are reversible",
      "They are immutable (cannot be changed)",
      "They are stored in a single location",
      "They are controlled by a central authority",
    ],
    answer: "They are immutable (cannot be changed)",
  },
  {
    question: "What is the role of AI in everyday life?",
    options: [
      "To increase manual labor",
      "To provide virtual assistants like Siri and Alexa",
      "To reduce system costs",
      "To improve user interface design",
    ],
    answer: "To provide virtual assistants like Siri and Alexa",
  },
  {
    question: "Which of the following is an example of IoT automation?",
    options: [
      "Smart homes with voice-controlled lights",
      "Manual data entry",
      "Using a typewriter",
      "Printing documents",
    ],
    answer: "Smart homes with voice-controlled lights",
  },
  {
    question: "What is the purpose of a smart contract in blockchain?",
    options: [
      "To increase system speed",
      "To create self-executing agreements without third parties",
      "To reduce system costs",
      "To improve user interface design",
    ],
    answer: "To create self-executing agreements without third parties",
  },
  {
    question: "What is the purpose of using IoT in healthcare?",
    options: [
      "To increase manual labor",
      "To monitor patients remotely using wearable devices",
      "To reduce system costs",
      "To improve user interface design",
    ],
    answer: "To monitor patients remotely using wearable devices",
  },
  {
    question: "What is the primary function of a blockchain?",
    options: [
      "To increase system speed",
      "To record transactions in an immutable ledger",
      "To reduce system costs",
      "To improve user interface design",
    ],
    answer: "To record transactions in an immutable ledger",
  },
  {
    question: "Which of the following is an example of an AI application?",
    options: [
      "Facial recognition for unlocking smartphones",
      "Manual data entry",
      "Using a typewriter",
      "Printing documents",
    ],
    answer: "Facial recognition for unlocking smartphones",
  },
  {
    question: "What are the three primary components of a computer system?",
    options: [
      "Hardware, Software, Data",
      "CPU, RAM, Storage",
      "Input, Processing, Output",
      "Monitor, Keyboard, Mouse",
    ],
    answer: "Hardware, Software, Data",
  },
  {
    question: "Which of the following is an example of an input device?",
    options: ["Monitor", "Printer", "Keyboard", "Speakers"],
    answer: "Keyboard",
  },
  {
    question:
      "When running the command 'tracert google.com', what does each row in the output represent?",
    options: [
      "A file on your computer",
      "A hop (router) between your device and the destination",
      "A different website",
      "A network protocol",
    ],
    answer: "A hop (router) between your device and the destination",
  },
  {
    question:
      "In the output of 'tracert google.com', what does the first column represent?",
    options: [
      "The IP address of your computer",
      "The hop number",
      "The round-trip time (RTT)",
      "The name of the destination",
    ],
    answer: "The hop number",
  },
  {
    question:
      "In the output of 'tracert google.com', what do the next three columns represent?",
    options: [
      "The IP address of the router",
      "The round-trip time (RTT) in milliseconds",
      "The name of the destination",
      "The file size being transmitted",
    ],
    answer: "The round-trip time (RTT) in milliseconds",
  },
  {
    question:
      "In the output of 'tracert google.com', what does the last column represent?",
    options: [
      "The IP address or hostname of the router",
      "The round-trip time (RTT)",
      "The hop number",
      "The name of the destination",
    ],
    answer: "The IP address or hostname of the router",
  },
  {
    question: "What is the primary role of data in a computer system?",
    options: [
      "To store hardware components",
      "To serve as the raw material for processing",
      "To connect to the internet",
      "To display output on the monitor",
    ],
    answer: "To serve as the raw material for processing",
  },
  {
    question: "What is the purpose of a computer network?",
    options: [
      "To store data",
      "To share resources and communicate",
      "To process data",
      "To display output",
    ],
    answer: "To share resources and communicate",
  },
  {
    question:
      "Which of the following is an example of a Local Area Network (LAN)?",
    options: [
      "The internet",
      "A network connecting computers in a single office",
      "A network connecting computers across countries",
      "A network connecting smartphones",
    ],
    answer: "A network connecting computers in a single office",
  },
  {
    question: "What is the function of an IP address in a network?",
    options: [
      "To store data",
      "To identify devices on a network",
      "To process data",
      "To display output",
    ],
    answer: "To identify devices on a network",
  },
  {
    question: "Which protocol is commonly used for internet communication?",
    options: ["HTTP", "FTP", "TCP/IP", "SMTP"],
    answer: "TCP/IP",
  },
  {
    question:
      "What is the main advantage of using computer systems in business?",
    options: [
      "Increased manual errors",
      "Slower processing speeds",
      "Automation of repetitive tasks",
      "Reduced connectivity",
    ],
    answer: "Automation of repetitive tasks",
  },
  {
    question: "Which of the following is an example of a storage device?",
    options: ["Monitor", "Printer", "Hard drive", "Keyboard"],
    answer: "Hard drive",
  },
  {
    question: "What is the role of software in a computer system?",
    options: [
      "To physically interact with hardware",
      "To provide instructions for performing tasks",
      "To store data permanently",
      "To connect to the internet",
    ],
    answer: "To provide instructions for performing tasks",
  },
  {
    question:
      "Which of the following is an example of a Wide Area Network (WAN)?",
    options: [
      "A network in a single building",
      "The internet",
      "A network in a classroom",
      "A network connecting printers",
    ],
    answer: "The internet",
  },
  {
    question:
      "What is the first step in setting up a Local Area Network (LAN)?",
    options: [
      "Assign IP addresses",
      "Connect devices using Ethernet cables or Wi-Fi",
      "Enable network sharing",
      "Test network connectivity",
    ],
    answer: "Connect devices using Ethernet cables or Wi-Fi",
  },
  {
    question: "Which of the following is used to connect devices in a LAN?",
    options: ["Ethernet cables", "USB cables", "HDMI cables", "Power cables"],
    answer: "Ethernet cables",
  },
  {
    question: "What is the purpose of assigning IP addresses in a LAN?",
    options: [
      "To store data",
      "To identify devices on the network for communication",
      "To increase internet speed",
      "To encrypt data",
    ],
    answer: "To identify devices on the network for communication",
  },
  {
    question:
      "Which protocol can automatically assign IP addresses to devices in a LAN?",
    options: ["HTTP", "FTP", "DHCP", "TCP"],
    answer: "DHCP",
  },
  {
    question: "What is the purpose of enabling network sharing in a LAN?",
    options: [
      "To increase internet speed",
      "To allow devices to share files and printers",
      "To encrypt data",
      "To assign IP addresses",
    ],
    answer: "To allow devices to share files and printers",
  },
  {
    question:
      "Which command is used to test network connectivity between devices in a LAN?",
    options: ["tracert", "ping", "ipconfig", "netstat"],
    answer: "ping",
  },
  {
    question: "What does the 'ping' command do in a LAN setup?",
    options: [
      "Assigns IP addresses to devices",
      "Tests connectivity between devices by sending ICMP Echo Requests",
      "Enables file sharing",
      "Configures network settings",
    ],
    answer: "Tests connectivity between devices by sending ICMP Echo Requests",
  },
  {
    question:
      "Which of the following is an example of a private IP address range used in LANs?",
    options: [
      "192.168.0.0 to 192.168.255.255",
      "8.8.8.8 to 8.8.8.255",
      "172.32.0.0 to 172.63.255.255",
      "2001:db8::ff00:42:8329",
    ],
    answer: "192.168.0.0 to 192.168.255.255",
  },
  {
    question: "What is the purpose of a router in a LAN?",
    options: [
      "To store data",
      "To connect multiple devices and manage traffic between them",
      "To increase internet speed",
      "To encrypt data",
    ],
    answer: "To connect multiple devices and manage traffic between them",
  },
  {
    question:
      "Which of the following is a common tool used to analyze network paths in a LAN?",
    options: ["ping", "tracert", "ipconfig", "netstat"],
    answer: "tracert",
  },
  {
    question: "What does ICMP stand for?",
    options: [
      "Internet Control Message Protocol",
      "Internet Connection Management Protocol",
      "Internal Communication Message Protocol",
      "Integrated Control Management Protocol",
    ],
    answer: "Internet Control Message Protocol",
  },
  {
    question: "What does UDP stand for?",
    options: [
      "User Datagram Protocol",
      "Universal Data Protocol",
      "Unified Data Packet",
      "User Data Packet",
    ],
    answer: "User Datagram Protocol",
  },
  {
    question: "What is the primary purpose of a computer system?",
    options: [
      "To process, store, and retrieve information",
      "To display images",
      "To connect to the internet",
      "To print documents",
    ],
    answer: "To process, store, and retrieve information",
  },
  {
    question: "Which of the following is an example of an output device?",
    options: ["Keyboard", "Mouse", "Printer", "Scanner"],
    answer: "Printer",
  },
  {
    question: "What is the function of a protocol in a network?",
    options: [
      "To store data",
      "To govern communication between computers",
      "To process data",
      "To display output",
    ],
    answer: "To govern communication between computers",
  },
  {
    question: "Which of the following is an example of a processing unit?",
    options: ["Monitor", "CPU", "Printer", "Keyboard"],
    answer: "CPU",
  },
  {
    question: "What is the main benefit of automation in computer systems?",
    options: [
      "Increased manual labor",
      "Reduced efficiency",
      "Faster and more accurate processing",
      "Decreased connectivity",
    ],
    answer: "Faster and more accurate processing",
  },
  {
    question:
      "What is the primary purpose of a NAT (Network Address Translation)?",
    options: [
      "To allow multiple devices to share a single public IP address",
      "To increase internet speed",
      "To manage file sharing",
      "To encrypt data during transmission",
    ],
    answer: "To allow multiple devices to share a single public IP address",
  },
  {
    question: "Which of the following is an example of a programming paradigm?",
    options: [
      "Object-Oriented Programming",
      "File Management",
      "Network Protocols",
      "Cybersecurity",
    ],
    answer: "Object-Oriented Programming",
  },
  {
    question: "Why are specific ports blocked in a firewall configuration?",
    options: [
      "To increase internet speed",
      "To prevent unauthorized access to services running on those ports",
      "To assign IP addresses to devices",
      "To store data for the network",
    ],
    answer: "To prevent unauthorized access to services running on those ports",
  },
  {
    question:
      "Which port is commonly blocked to prevent unauthorized Telnet access?",
    options: ["Port 21", "Port 23", "Port 80", "Port 443"],
    answer: "Port 23",
  },
  {
    question:
      "What is the purpose of blocking port 21 in a firewall configuration?",
    options: [
      "To prevent unauthorized FTP access",
      "To block web traffic",
      "To block email services",
      "To block Telnet access",
    ],
    answer: "To prevent unauthorized FTP access",
  },
  {
    question:
      "Which of the following ports is commonly blocked to prevent unauthorized remote desktop access?",
    options: ["Port 22", "Port 25", "Port 3389", "Port 8080"],
    answer: "Port 3389",
  },
  {
    question:
      "What is the impact of blocking port 80 in a firewall configuration?",
    options: [
      "It prevents HTTP web traffic",
      "It prevents FTP file transfers",
      "It blocks email services",
      "It blocks Telnet access",
    ],
    answer: "It prevents HTTP web traffic",
  },
  {
    question: "Which of the following is an example of a network protocol?",
    options: ["HTTP", "HTML", "CSS", "JavaScript"],
    answer: "HTTP",
  },
  {
    question: "What does ARP stand for in networking?",
    options: [
      "Address Resolution Protocol",
      "Advanced Routing Protocol",
      "Automatic Routing Protocol",
      "Address Routing Protocol",
    ],
    answer: "Address Resolution Protocol",
  },
  {
    question:
      "Which component is responsible for rendering graphics on a monitor?",
    options: ["CPU", "RAM", "GPU", "SSD"],
    answer: "GPU",
  },
  {
    question:
      "Which Python script would rename all files in a folder with a prefix?",
    options: [
      "Using `os.listdir()` and `os.rename()`",
      "Using `pandas.read_csv()`",
      "Using `requests.get()`",
      "Using `numpy.array()`",
    ],
    answer: "Using `os.listdir()` and `os.rename()`",
  },
  {
    question: "What does IoT stand for?",
    options: [
      "Internet of Transactions",
      "Internet of Things",
      "Integrated Online Technology",
      "Internal Operations Tool",
    ],
    answer: "Internet of Things",
  },
  {
    question: "What does CLI stand for?",
    options: [
      "Command Line Input",
      "Computer Logic Interface",
      "Command Line Interface",
      "Common Language Interpreter",
    ],
    answer: "Command Line Interface",
  },
  {
    question:
      "Which component is often referred to as the 'brain' of the computer?",
    options: ["RAM", "CPU", "GPU", "Power Supply"],
    answer: "CPU",
  },
  {
    question:
      "In Linux/macOS, which command performs the same function as 'tracert' in Windows?",
    options: ["traceroute", "route", "nslookup", "netstat"],
    answer: "traceroute",
  },
  {
    question: "What is the purpose of the motherboard in a computer system?",
    options: [
      "To store data permanently",
      "To connect and communicate between all hardware components",
      "To display output on the monitor",
      "To provide internet connectivity",
    ],
    answer: "To connect and communicate between all hardware components",
  },
  {
    question:
      "Which component temporarily stores data being processed by the CPU?",
    options: ["HDD", "SSD", "RAM", "ROM"],
    answer: "RAM",
  },
  {
    question: "What does the `os.path.join()` function do in Python?",
    options: [
      "Deletes a file",
      "Combines directory paths into a valid file path",
      "Encrypts a file",
      "Sends HTTP requests",
    ],
    answer: "Combines directory paths into a valid file path",
  },
  {
    question: "What is the function of a power supply unit (PSU)?",
    options: [
      "To cool the computer",
      "To convert AC power to DC power for computer components",
      "To manage network connections",
      "To display graphics",
    ],
    answer: "To convert AC power to DC power for computer components",
  },
  {
    question: "What does FTP stand for?",
    options: [
      "File Transfer Protocol",
      "Fast Transmission Process",
      "Firewall Testing Program",
      "Flexible Transport Pathway",
    ],
    answer: "File Transfer Protocol",
  },
  {
    question: "What does TCP stand for?",
    options: [
      "Transmission Control Protocol",
      "Transport Communication Process",
      "Traffic Control Protocol",
      "Time Control Protocol",
    ],
    answer: "Transmission Control Protocol",
  },
  {
    question: "What does DNS stand for?",
    options: [
      "Domain Name System",
      "Dynamic Network Service",
      "Data Navigation Structure",
      "Digital Numbering Scheme",
    ],
    answer: "Domain Name System",
  },
  {
    question: "What does SMTP stand for?",
    options: [
      "Simple Mail Transfer Protocol",
      "Secure Messaging and Transfer Process",
      "System Management Transport Protocol",
      "Smart Mail Tracking Protocol",
    ],
    answer: "Simple Mail Transfer Protocol",
  },
  {
    question: "What does HTTPS stand for?",
    options: [
      "HyperText Transfer Protocol Secure",
      "High-Tech Transfer Protocol System",
      "Hybrid Transport Protocol Secure",
      "Host Tracking Process Secure",
    ],
    answer: "HyperText Transfer Protocol Secure",
  },
  {
    question: "What does POP3 stand for?",
    options: [
      "Post Office Protocol 3",
      "Packet Optimized Process",
      "Primary Online Processing",
      "Protocol for Online Passwords",
    ],
    answer: "Post Office Protocol 3",
  },
  {
    question: "What does Telnet protocol do?",
    options: [
      "Provides a command-line interface for remote system access",
      "Encrypts network connections",
      "Transfers files between remote computers",
      "Synchronizes time between devices",
    ],
    answer: "Provides a command-line interface for remote system access",
  },
  {
    question:
      "Which protocol is used to troubleshoot network paths by tracing packet routes?",
    options: ["Traceroute", "Ping", "NTP", "IMAP"],
    answer: "Traceroute",
  },
  {
    question: "What is the primary purpose of a DNS (Domain Name System)?",
    options: [
      "To translate domain names into IP addresses",
      "To encrypt data during transmission",
      "To manage file sharing",
      "To store data securely",
    ],
    answer: "To translate domain names into IP addresses",
  },
  {
    question:
      "Which of the following is an example of a cloud computing service?",
    options: [
      "Amazon Web Services (AWS)",
      "Microsoft Word",
      "Adobe Photoshop",
      "Antivirus Software",
    ],
    answer: "Amazon Web Services (AWS)",
  },
  {
    question: "What information does the `ping` command return?",
    options: [
      "The number of hops between the source and destination",
      "The IP address of the device",
      "The time taken for packets to reach the destination and return",
      "The list of all connected devices on the network",
    ],
    answer: "The time taken for packets to reach the destination and return",
  },
  {
    question:
      "By default, how many echo request packets does `ping` send in Windows?",
    options: ["4", "5", "10", "Unlimited"],
    answer: "4",
  },
  {
    question: "What does the `-t` option do in the `ping` command?",
    options: [
      "Sends packets continuously until manually stopped",
      "Displays only lost packets",
      "Shows the path taken by packets",
      "Sends packets with encryption",
    ],
    answer: "Sends packets continuously until manually stopped",
  },
  {
    question: "What does `ping -n 10 8.8.8.8` do?",
    options: [
      "Pings 8.8.8.8 ten times",
      "Runs a continuous ping",
      "Pings the address with encryption",
      "Traces the route to 8.8.8.8",
    ],
    answer: "Pings 8.8.8.8 ten times",
  },
  {
    question: "How can you use `tracert` to limit the number of hops?",
    options: [
      "`tracert -h <number>`",
      "`tracert -l <number>`",
      "`tracert -w <number>`",
      "`tracert -t <number>`",
    ],
    answer: "`tracert -h <number>`",
  },
  {
    question: "Which of the following might cause a `ping` request to fail?",
    options: [
      "A firewall blocking ICMP traffic",
      "A weak Wi-Fi signal",
      "An expired DNS record",
      "A slow processor on the remote server",
    ],
    answer: "A firewall blocking ICMP traffic",
  },
  {
    question: "What does `tracert google.com` do?",
    options: [
      "Displays the route packets take to reach Google's server",
      "Checks if Google's server is online",
      "Lists all websites hosted by Google",
      "Scans Google's firewall security",
    ],
    answer: "Displays the route packets take to reach Google's server",
  },
  {
    question: "Which option in `ping` sets the time-to-live (TTL) value?",
    options: ["`ping -t`", "`ping -n`", "`ping -i`", "`ping -s`"],
    answer: "`ping -i`",
  },
  {
    question: "What is the primary purpose of a load balancer in a network?",
    options: [
      "To distribute workload across multiple servers",
      "To store data securely",
      "To manage file sharing",
      "To encrypt data during transmission",
    ],
    answer: "To distribute workload across multiple servers",
  },
  {
    question: "Which of the following is an example of a network topology?",
    options: ["Bus", "HTML", "CSS", "JavaScript"],
    answer: "Bus",
  },
  {
    question: "What is the primary purpose of a DHCP server in a network?",
    options: [
      "To automatically assign IP addresses to devices",
      "To encrypt data during transmission",
      "To manage file sharing",
      "To store data securely",
    ],
    answer: "To automatically assign IP addresses to devices",
  },
  {
    question: "What principle uses backup systems to prevent system failures?",
    options: [
      "Load Balancing",
      "Redundancy",
      "Failover Systems",
      "Error Detection",
    ],
    answer: "Redundancy",
  },
  {
    question:
      "What does the '-w' flag in the 'tracert -w 100 google.com' command do?",
    options: [
      "It sets the maximum number of hops to 100",
      "It sets the timeout for each reply to 100 milliseconds",
      "It increases the packet size to 100 bytes",
      "It limits the output to 100 lines",
    ],
    answer: "It sets the timeout for each reply to 100 milliseconds",
  },
  {
    question: "Which of the following is an example of a programming language?",
    options: ["Swift", "HTML", "CSS", "DNS"],
    answer: "Swift",
  },
  {
    question:
      "Which cybersecurity concept ensures that data remains accurate and unaltered during storage or transit?",
    options: ["Confidentiality", "Integrity", "Availability", "Redundancy"],
    answer: "Integrity",
  },
  {
    question: "What does a failover system do in a network?",
    options: [
      "It increases bandwidth",
      "It detects malware",
      "It automatically switches to standby systems during a failure",
      "It monitors user activity",
    ],
    answer: "It automatically switches to standby systems during a failure",
  },
  {
    question: "How does load balancing contribute to system reliability?",
    options: [
      "By distributing workloads across multiple servers",
      "By encrypting data",
      "By storing data in the cloud",
      "By isolating network segments",
    ],
    answer: "By distributing workloads across multiple servers",
  },
  {
    question:
      "Which of the following is a common method to detect and correct errors in data transmission?",
    options: [
      "Error Detection & Correction",
      "Data Encryption",
      "Load Balancing",
      "Redundancy",
    ],
    answer: "Error Detection & Correction",
  },
  {
    question:
      "After configuring a firewall rule to block unauthorized access, which tool can be used to verify if the rule is working?",
    options: ["Ping", "Traceroute", "Telnet", "Wireshark"],
    answer: "Telnet",
  },
  {
    question:
      "In the context of cloud computing, what happens when a data center fails?",
    options: [
      "The service shuts down completely",
      "The system automatically switches to another data center",
      "Users must manually connect to another data center",
      "The system enters maintenance mode",
    ],
    answer: "The system automatically switches to another data center",
  },
  {
    question: "Which practice can help prevent phishing attacks?",
    options: [
      "Ignoring URL protocols",
      "Verifying URLs before clicking",
      "Using the same password for all sites",
      "Disabling browser security settings",
    ],
    answer: "Verifying URLs before clicking",
  },
  {
    question:
      "What is the purpose of enabling Multi-Factor Authentication (MFA)?",
    options: [
      "To simplify login processes",
      "To increase the complexity of user credentials",
      "To provide an extra layer of security",
      "To replace passwords entirely",
    ],
    answer: "To provide an extra layer of security",
  },
  {
    question:
      "Which tool is mentioned as an example for firewall configuration in the lab task?",
    options: ["Node-RED", "pfSense", "Ethereum", "Raspberry Pi"],
    answer: "pfSense",
  },
  {
    question: "What command is used in Windows Firewall to block Telnet?",
    options: [
      'New-NetFirewallRule -DisplayName "Block Telnet" -Direction Inbound -Protocol TCP -LocalPort 23 -Action Block',
      'Set-NetFirewallRule -Name "TelnetBlock" -Action Deny',
      'Add-FirewallRule -Name "Telnet" -Port 23',
      'Enable-NetFirewallRule -Name "TelnetBlock"',
    ],
    answer:
      'New-NetFirewallRule -DisplayName "Block Telnet" -Direction Inbound -Protocol TCP -LocalPort 23 -Action Block',
  },
  {
    question: "Which emerging technology is associated with smart contracts?",
    options: [
      "Artificial Intelligence",
      "Internet of Things",
      "Blockchain",
      "Cloud Computing",
    ],
    answer: "Blockchain",
  },
  {
    question: "What is a primary application of AI mentioned in the slides?",
    options: [
      "Smart Thermostats",
      "Chatbots and Virtual Assistants",
      "Data Center Cooling",
      "Blockchain Transactions",
    ],
    answer: "Chatbots and Virtual Assistants",
  },
  {
    question: "Which application uses facial recognition technology?",
    options: [
      "Self-Driving Cars",
      "Virtual assistants",
      "Unlocking smartphones",
      "Smart home automation",
    ],
    answer: "Unlocking smartphones",
  },
  {
    question:
      "What role do recommendation systems play in everyday technology?",
    options: [
      "They secure networks",
      "They predict weather patterns",
      "They suggest content on platforms like Netflix and YouTube",
      "They control IoT devices",
    ],
    answer: "They suggest content on platforms like Netflix and YouTube",
  },
  {
    question: "How do IoT devices typically communicate data?",
    options: [
      "Through wired Ethernet cables only",
      "Using the internet",
      "By manual data entry",
      "Via satellite communications",
    ],
    answer: "Using the internet",
  },
  {
    question: "What is an example of an IoT application in healthcare?",
    options: [
      "Chatbots for patient inquiries",
      "Wearable heart rate monitors",
      "Blockchain for data integrity",
      "AI-powered translation services",
    ],
    answer: "Wearable heart rate monitors",
  },
  {
    question:
      "Which device is used in the lab task to automate a smart light system?",
    options: ["pfSense", "Raspberry Pi", "Node-RED", "Metamask"],
    answer: "Raspberry Pi",
  },
  {
    question:
      "What programming language is used in the example smart contract?",
    options: ["Python", "JavaScript", "Solidity", "C++"],
    answer: "Solidity",
  },
  {
    question: "Which network is suggested for testing blockchain transactions?",
    options: [
      "Main Ethereum Network",
      "Ropsten Test Network",
      "Bitcoin Testnet",
      "Private Blockchain Network",
    ],
    answer: "Ropsten Test Network",
  },
  {
    question: "What is the purpose of using anti-phishing browser extensions?",
    options: [
      "To block pop-up ads",
      "To enhance website design",
      "To detect and block phishing sites",
      "To improve search engine rankings",
    ],
    answer: "To detect and block phishing sites",
  },
  {
    question:
      "Which of the following is an example of a cybersecurity principle?",
    options: [
      "Availability",
      "File Management",
      "Multitasking",
      "Resource Allocation",
    ],
    answer: "Availability",
  },
  {
    question:
      "What is the primary purpose of a RAID system in fault tolerance?",
    options: [
      "To provide redundancy and prevent data loss",
      "To increase internet speed",
      "To manage file sharing",
      "To encrypt data during transmission",
    ],
    answer: "To provide redundancy and prevent data loss",
  },
  {
    question: "Which of the following is an example of a cybersecurity tool?",
    options: [
      "Intrusion Detection System (IDS)",
      "Microsoft Word",
      "Adobe Photoshop",
      "Linux Kernel",
    ],
    answer: "Intrusion Detection System (IDS)",
  },
  {
    question: "In operating systems, what is the purpose of a semaphore?",
    options: [
      "To manage access to shared resources and prevent race conditions",
      "To allocate memory to processes",
      "To manage file permissions",
      "To handle network communication",
    ],
    answer: "To manage access to shared resources and prevent race conditions",
  },
  {
    question:
      "What is the primary purpose of the 'traceroute' command in networking?",
    options: [
      "To trace the path packets take from source to destination",
      "To encrypt data during transmission",
      "To assign IP addresses to devices",
      "To manage file sharing",
    ],
    answer: "To trace the path packets take from source to destination",
  },
  {
    question: "In cybersecurity, what is the purpose of a zero-day exploit?",
    options: [
      "To take advantage of a vulnerability before it is patched",
      "To encrypt data for secure transmission",
      "To detect unauthorized access to a network",
      "To manage file permissions",
    ],
    answer: "To take advantage of a vulnerability before it is patched",
  },
  {
    question:
      "What is the primary purpose of a blockchain consensus algorithm like Proof of Work (PoW)?",
    options: [
      "To validate transactions and secure the network",
      "To increase internet speed",
      "To manage file sharing",
      "To encrypt data during transmission",
    ],
    answer: "To validate transactions and secure the network",
  },
  {
    question:
      "Which of the following is a key feature of object-oriented programming (OOP)?",
    options: [
      "Encapsulation",
      "Linear execution flow",
      "Pure functions",
      "Immutability",
    ],
    answer: "Encapsulation",
  },
  {
    question:
      "What is the primary purpose of the 'ipconfig' command in Windows?",
    options: [
      "To test network connectivity",
      "To display the IP configuration of a computer",
      "To assign IP addresses to devices",
      "To analyze network paths",
    ],
    answer: "To display the IP configuration of a computer",
  },
  {
    question:
      "Which of the following information is displayed by the 'ipconfig' command?",
    options: [
      "IP address, subnet mask, and default gateway",
      "Network latency and packet loss",
      "List of all connected devices",
      "Network protocols in use",
    ],
    answer: "IP address, subnet mask, and default gateway",
  },
  {
    question: "What does the 'ipconfig /release' command do?",
    options: [
      "Displays the IP configuration",
      "Releases the current IP address assigned to the computer",
      "Renews the IP address from the DHCP server",
      "Tests network connectivity",
    ],
    answer: "Releases the current IP address assigned to the computer",
  },
  {
    question: "What does the 'ipconfig /renew' command do?",
    options: [
      "Displays the IP configuration",
      "Releases the current IP address assigned to the computer",
      "Requests a new IP address from the DHCP server",
      "Tests network connectivity",
    ],
    answer: "Requests a new IP address from the DHCP server",
  },
  {
    question:
      "Which of the following commands would you use to display detailed IP configuration information, including DNS servers?",
    options: [
      "ipconfig",
      "ipconfig /all",
      "ipconfig /release",
      "ipconfig /renew",
    ],
    answer: "ipconfig /all",
  },
  {
    question:
      "What is the primary purpose of a virtual machine (VM) in system virtualization?",
    options: [
      "To emulate a physical computer and run multiple operating systems on a single machine",
      "To increase internet speed",
      "To manage file sharing",
      "To encrypt data during transmission",
    ],
    answer:
      "To emulate a physical computer and run multiple operating systems on a single machine",
  },
  {
    question:
      "Which of the following is a key principle of fault tolerance in distributed systems?",
    options: [
      "Redundancy",
      "Single point of failure",
      "Linear scalability",
      "Centralized control",
    ],
    answer: "Redundancy",
  },
  {
    question: "In cybersecurity, what is the purpose of a honeypot?",
    options: [
      "To attract and detect attackers by simulating a vulnerable system",
      "To encrypt data for secure transmission",
      "To manage file permissions",
      "To increase internet speed",
    ],
    answer: "To attract and detect attackers by simulating a vulnerable system",
  },
  {
    question:
      "Which of the following is a key feature of the IPv6 protocol compared to IPv4?",
    options: [
      "Smaller packet size",
      "Lower security",
      "Limited scalability",
      "Larger address space",
    ],
    answer: "Larger address space",
  },
  {
    question: "What is the primary purpose of a reverse proxy in a network?",
    options: [
      "To handle requests on behalf of servers and improve security",
      "To increase internet speed",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer: "To handle requests on behalf of servers and improve security",
  },
  {
    question: "Which of the following is an example of asymmetric encryption?",
    options: ["AES", "3DES", "RSA", "Blowfish"],
    answer: "RSA",
  },
  {
    question: "Which of the following is a common use case for a proxy server?",
    options: [
      "To act as a firewall",
      "To bypass geographic restrictions on content",
      "To assign IP addresses to devices",
      "To encrypt all network traffic",
    ],
    answer: "To bypass geographic restrictions on content",
  },
  {
    question:
      "Which attack exploits unvalidated input to execute arbitrary SQL queries?",
    options: [
      "Cross-Site Scripting (XSS)",
      "SQL Injection",
      "Buffer Overflow",
      "Session Hijacking",
    ],
    answer: "SQL Injection",
  },
  {
    question:
      "What is the purpose of blocking specific ports (e.g., port 23 for Telnet) in a firewall configuration?",
    options: [
      "To increase internet speed",
      "To prevent unauthorized access to services running on those ports",
      "To assign IP addresses to devices",
      "To store data for the network",
    ],
    answer: "To prevent unauthorized access to services running on those ports",
  },
  {
    question: "What is the primary purpose of a proxy server?",
    options: [
      "To store data for the network",
      "To act as an intermediary between a client and a server",
      "To encrypt all network traffic",
      "To assign IP addresses to devices",
    ],
    answer: "To act as an intermediary between a client and a server",
  },
  {
    question: "What is the primary purpose of a hypervisor in virtualization?",
    options: [
      "To create and manage virtual machines on a host system",
      "To increase internet speed",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer: "To create and manage virtual machines on a host system",
  },
  {
    question: "In operating systems, what is the purpose of a context switch?",
    options: [
      "To save the state of a process and switch to another process",
      "To manage file storage on disk",
      "To handle network communication",
      "To allocate CPU time to processes",
    ],
    answer: "To save the state of a process and switch to another process",
  },
  {
    question:
      "Which of the following is a key feature of a containerization platform like Docker?",
    options: [
      "It allows applications to run in isolated environments with shared OS resources",
      "It requires a separate OS for each application",
      "It is limited to managing local resources only",
      "It does not support multitasking",
    ],
    answer:
      "It allows applications to run in isolated environments with shared OS resources",
  },
  {
    question:
      "What is the primary purpose of a neural network in artificial intelligence?",
    options: [
      "To simulate the behavior of the human brain for pattern recognition and decision-making",
      "To increase internet speed",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer:
      "To simulate the behavior of the human brain for pattern recognition and decision-making",
  },
  {
    question: "In cybersecurity, what is the purpose of a sandbox?",
    options: [
      "To isolate and analyze potentially malicious software in a safe environment",
      "To encrypt data for secure transmission",
      "To manage file permissions",
      "To increase internet speed",
    ],
    answer:
      "To isolate and analyze potentially malicious software in a safe environment",
  },
  {
    question:
      "Which of the following is a key feature of a multi-threaded application?",
    options: [
      "It allows concurrent execution of multiple threads within a single process",
      "It is limited to single-threaded execution",
      "It does not support multitasking",
      "It requires separate processes for each task",
    ],
    answer:
      "It allows concurrent execution of multiple threads within a single process",
  },
  {
    question:
      "What is the primary purpose of a distributed ledger in blockchain technology?",
    options: [
      "To maintain a decentralized and tamper-proof record of transactions",
      "To increase internet speed",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer:
      "To maintain a decentralized and tamper-proof record of transactions",
  },
  {
    question:
      "Which of the following is a key feature of a real-time operating system (RTOS)?",
    options: [
      "It guarantees timely processing of tasks with strict deadlines",
      "It is limited to non-critical applications",
      "It does not support multitasking",
      "It requires a large amount of memory",
    ],
    answer: "It guarantees timely processing of tasks with strict deadlines",
  },
  {
    question: "What is the primary purpose of a CAPTCHA in cybersecurity?",
    options: [
      "To distinguish between human users and automated bots",
      "To encrypt data for secure transmission",
      "To manage file permissions",
      "To increase internet speed",
    ],
    answer: "To distinguish between human users and automated bots",
  },
  {
    question: "What is the primary function of a modem in a computer network?",
    options: [
      "To connect devices within a LAN",
      "To connect a computer network to the internet",
      "To store data for the network",
      "To assign IP addresses to devices",
    ],
    answer: "To connect a computer network to the internet",
  },
  {
    question: "What does a modem do to enable internet connectivity?",
    options: [
      "Converts digital data to analog signals and vice versa",
      "Routes data between multiple networks",
      "Stores data for the network",
      "Assigns IP addresses to devices",
    ],
    answer: "Converts digital data to analog signals and vice versa",
  },
  {
    question: "What is the primary purpose of a blockchain oracle?",
    options: [
      "To provide external data to smart contracts on a blockchain",
      "To increase internet speed",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer: "To provide external data to smart contracts on a blockchain",
  },
  {
    question:
      "Which of the following is a device used to connect multiple computers in a Local Area Network (LAN)?",
    options: ["Router", "Switch", "Server", "Modem"],
    answer: "Switch",
  },
  {
    question: "What is the primary function of a router in a computer network?",
    options: [
      "To connect devices within a LAN",
      "To connect multiple networks and route data between them",
      "To store data for the network",
      "To assign IP addresses to devices",
    ],
    answer: "To connect multiple networks and route data between them",
  },
  {
    question:
      "Which device is used to connect a computer network to the internet?",
    options: ["Switch", "Router", "Hub", "Modem"],
    answer: "Modem",
  },
  {
    question: "What is the role of a server in a computer network?",
    options: [
      "To connect devices within a LAN",
      "To store and manage network resources like files and applications",
      "To route data between networks",
      "To assign IP addresses to devices",
    ],
    answer: "To store and manage network resources like files and applications",
  },
  {
    question:
      "Which of the following is a network protocol used for communication over the internet?",
    options: ["HTTP", "FTP", "TCP/IP", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What is the purpose of a switch in a computer network?",
    options: [
      "To connect multiple networks",
      "To connect devices within a LAN and forward data to the correct device",
      "To store data for the network",
      "To assign IP addresses to devices",
    ],
    answer:
      "To connect devices within a LAN and forward data to the correct device",
  },
  {
    question:
      "Which of the following is an example of a network storage device?",
    options: ["Router", "Switch", "NAS (Network Attached Storage)", "Modem"],
    answer: "NAS (Network Attached Storage)",
  },
  {
    question: "Which of the following is a wireless networking device?",
    options: ["Router", "Switch", "Access Point", "Modem"],
    answer: "Access Point",
  },
  {
    question:
      "What is the purpose of a Network Interface Card (NIC) in a computer?",
    options: [
      "To connect the computer to a network",
      "To store data for the network",
      "To route data between networks",
      "To assign IP addresses to devices",
    ],
    answer: "To connect the computer to a network",
  },
];
