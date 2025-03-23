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
    question: "What is a deadlock in operating systems?",
    options: [
      "When a process is terminated unexpectedly",
      "When two or more processes wait indefinitely for resources held by each other",
      "When a process consumes too much CPU time",
      "When the system crashes due to hardware failure",
    ],
    answer:
      "When two or more processes wait indefinitely for resources held by each other",
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
      "Which of the following is an example of a Layer 4 protocol in the OSI model?",
    options: ["HTTP", "IP", "TCP", "Ethernet"],
    answer: "TCP",
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
      "To identify a device on a network",
      "To encrypt user passwords",
      "To store files in the cloud",
      "To increase processing speed",
    ],
    answer: "To identify a device on a network",
  },
  {
    question: "What does DHCP stand for?",
    options: [
      "Dynamic Host Configuration Protocol",
      "Data Hosting Control Protocol",
      "Distributed Hardware Configuration Process",
      "Domain Host Connection Protocol",
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
    options: [
      "File Management",
      "Multitasking",
      "Phishing",
      "Resource Allocation",
    ],
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
    question: "What is the primary purpose of a proxy server?",
    options: [
      "To act as an intermediary between clients and servers",
      "To increase internet speed",
      "To manage file sharing",
      "To encrypt data during transmission",
    ],
    answer: "To act as an intermediary between clients and servers",
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
    question: "Which of the following is an example of a network protocol?",
    options: ["HTTP", "HTML", "CSS", "JavaScript"],
    answer: "HTTP",
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
    question: "Which of the following is an example of a cybersecurity attack?",
    options: [
      "Phishing",
      "File Management",
      "Multitasking",
      "Resource Allocation",
    ],
    answer: "Phishing",
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
      "What is the primary purpose of a deadlock detection algorithm in an operating system?",
    options: [
      "To identify and resolve situations where processes are waiting indefinitely for resources",
      "To allocate CPU time to processes",
      "To manage file storage on disk",
      "To handle user authentication",
    ],
    answer:
      "To identify and resolve situations where processes are waiting indefinitely for resources",
  },
  {
    question:
      "Which of the following is a characteristic of a distributed operating system?",
    options: [
      "It allows multiple computers to work together as a single system",
      "It runs on a single machine with multiple cores",
      "It is limited to managing local resources only",
      "It does not support multitasking",
    ],
    answer: "It allows multiple computers to work together as a single system",
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
      "In functional programming, what is the primary characteristic of a pure function?",
    options: [
      "It always produces the same output for the same input and has no side effects",
      "It modifies the state of the program",
      "It uses objects to represent data",
      "It follows a step-by-step execution flow",
    ],
    answer:
      "It always produces the same output for the same input and has no side effects",
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
    question:
      "What is the primary purpose of a Content Delivery Network (CDN)?",
    options: [
      "To distribute content geographically and reduce latency",
      "To encrypt data during transmission",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer: "To distribute content geographically and reduce latency",
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
      "Larger address space",
      "Smaller packet size",
      "Lower security",
      "Limited scalability",
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
    question: "In operating systems, what is the purpose of a page table?",
    options: [
      "To map virtual addresses to physical addresses in memory",
      "To manage file storage on disk",
      "To handle network communication",
      "To allocate CPU time to processes",
    ],
    answer: "To map virtual addresses to physical addresses in memory",
  },
  {
    question:
      "Which of the following is a key feature of a microkernel architecture?",
    options: [
      "It minimizes the kernel's functionality and runs most services in user space",
      "It combines all system services into a single kernel",
      "It does not support multitasking",
      "It is limited to managing local resources only",
    ],
    answer:
      "It minimizes the kernel's functionality and runs most services in user space",
  },
  {
    question: "Which of the following is an example of asymmetric encryption?",
    options: ["AES", "3DES", "RSA", "Blowfish"],
    answer: "RSA",
  },
  {
    question:
      "Which type of malware spreads without requiring user interaction?",
    options: ["Trojan horse", "Worm", "Ransomware", "Spyware"],
    answer: "Worm",
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
    question: "Which of the following is a key feature of a NoSQL database?",
    options: [
      "It supports flexible, schema-less data models",
      "It uses SQL for querying data",
      "It is limited to relational data structures",
      "It does not support horizontal scaling",
    ],
    answer: "It supports flexible, schema-less data models",
  },
  {
    question: "What is the primary purpose of a stateful firewall?",
    options: [
      "To track the state of active connections and make decisions based on context",
      "To increase internet speed",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer:
      "To track the state of active connections and make decisions based on context",
  },
  {
    question: "In cybersecurity, what is the purpose of a digital signature?",
    options: [
      "To encrypt data for secure transmission",
      "To manage file permissions",
      "To verify the authenticity and integrity of a message or document",
      "To increase internet speed",
    ],
    answer: "To verify the authenticity and integrity of a message or document",
  },
  {
    question:
      "Which of the following is a key feature of a peer-to-peer (P2P) network?",
    options: [
      "It allows devices to share resources directly without a central server",
      "It requires a central server for all communication",
      "It is limited to local area networks (LANs)",
      "It does not support file sharing",
    ],
    answer:
      "It allows devices to share resources directly without a central server",
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
      "What is the primary purpose of a quantum key distribution (QKD) in cryptography?",
    options: [
      "To securely distribute encryption keys using quantum mechanics",
      "To increase internet speed",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer: "To securely distribute encryption keys using quantum mechanics",
  },
  {
    question:
      "Which of the following is a key feature of a serverless architecture?",
    options: [
      "It allows developers to run code without managing servers",
      "It requires dedicated servers for each application",
      "It is limited to local area networks (LANs)",
      "It does not support scaling",
    ],
    answer: "It allows developers to run code without managing servers",
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
    question:
      "Which of the following is a key feature of a content-addressable storage system?",
    options: [
      "It retrieves data based on its content rather than its location",
      "It requires a centralized database",
      "It is limited to managing local resources only",
      "It does not support scaling",
    ],
    answer: "It retrieves data based on its content rather than its location",
  },
  {
    question:
      "What is the primary purpose of a side-channel attack in cybersecurity?",
    options: [
      "To exploit indirect information leakage (e.g., power consumption or timing) to compromise a system",
      "To encrypt data for secure transmission",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer:
      "To exploit indirect information leakage (e.g., power consumption or timing) to compromise a system",
  },
  {
    question:
      "Which of the following is a key feature of a federated learning system?",
    options: [
      "It allows machine learning models to be trained across decentralized devices",
      "It requires centralized data storage",
      "It is limited to local area networks (LANs)",
      "It does not support privacy-preserving techniques",
    ],
    answer:
      "It allows machine learning models to be trained across decentralized devices",
  },
  {
    question: "What is the primary purpose of a zero-trust security model?",
    options: [
      "To verify every user and device before granting access to resources",
      "To increase internet speed",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer:
      "To verify every user and device before granting access to resources",
  },
  {
    question: "Which of the following is a key feature of a graph database?",
    options: [
      "It uses graph structures to represent and store data",
      "It is limited to relational data structures",
      "It does not support complex queries",
      "It requires a centralized database",
    ],
    answer: "It uses graph structures to represent and store data",
  },
  {
    question: "What is the primary purpose of a homomorphic encryption scheme?",
    options: [
      "To perform computations on encrypted data without decrypting it",
      "To increase internet speed",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer: "To perform computations on encrypted data without decrypting it",
  },
  {
    question: "Which of the following is a key feature of a quantum computer?",
    options: [
      "It uses qubits to perform computations using quantum mechanics",
      "It is limited to classical binary operations",
      "It does not support parallel processing",
      "It requires a large amount of memory",
    ],
    answer: "It uses qubits to perform computations using quantum mechanics",
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
      "Which of the following is a key feature of a serverless function?",
    options: [
      "It runs code in response to events without requiring server management",
      "It requires dedicated servers for each application",
      "It is limited to local area networks (LANs)",
      "It does not support scaling",
    ],
    answer:
      "It runs code in response to events without requiring server management",
  },
  {
    question:
      "What is the primary purpose of a differential privacy mechanism?",
    options: [
      "To protect individual privacy while allowing data analysis",
      "To increase internet speed",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer: "To protect individual privacy while allowing data analysis",
  },
  {
    question:
      "Which of the following is a key feature of a neuromorphic computing system?",
    options: [
      "It mimics the structure and function of the human brain",
      "It is limited to classical binary operations",
      "It does not support parallel processing",
      "It requires a large amount of memory",
    ],
    answer: "It mimics the structure and function of the human brain",
  },
  {
    question:
      "What is the primary purpose of a secure enclave in hardware security?",
    options: [
      "To provide a protected area for sensitive computations and data storage",
      "To increase internet speed",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer:
      "To provide a protected area for sensitive computations and data storage",
  },
  {
    question:
      "Which of the following is a key feature of a self-sovereign identity system?",
    options: [
      "It allows users to control their own identity information without relying on centralized authorities",
      "It requires centralized data storage",
      "It is limited to local area networks (LANs)",
      "It does not support privacy-preserving techniques",
    ],
    answer:
      "It allows users to control their own identity information without relying on centralized authorities",
  },
  {
    question:
      "What is the primary purpose of a post-quantum cryptography algorithm?",
    options: [
      "To provide security against attacks from quantum computers",
      "To increase internet speed",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer: "To provide security against attacks from quantum computers",
  },
  {
    question:
      "Which of the following is a key feature of a homomorphic encryption scheme?",
    options: [
      "It allows computations to be performed on encrypted data without decrypting it",
      "It requires centralized data storage",
      "It is limited to local area networks (LANs)",
      "It does not support privacy-preserving techniques",
    ],
    answer:
      "It allows computations to be performed on encrypted data without decrypting it",
  },
  {
    question:
      "What is the primary purpose of a zero-knowledge proof in cryptography?",
    options: [
      "To prove the validity of a statement without revealing any additional information",
      "To increase internet speed",
      "To manage file sharing",
      "To assign IP addresses to devices",
    ],
    answer:
      "To prove the validity of a statement without revealing any additional information",
  },
];
