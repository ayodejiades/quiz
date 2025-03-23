const questions = [
  {
    question: "What is the primary purpose of an operating system?",
    options: [
      "To provide internet access",
      "To manage hardware resources",
      "To create documents",
      "To design websites",
    ],
    answer: "To manage hardware resources",
  },
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
    question: "What is the primary purpose of an operating system?",
    options: [
      "To provide a user interface",
      "To manage hardware resources",
      "To run applications",
      "All of the above",
    ],
    answer: "All of the above",
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
    question: "What is the primary purpose of an IP address in a network?",
    options: [
      "To identify a device on the network",
      "To encrypt data during transmission",
      "To store files on a server",
      "To manage user permissions",
    ],
    answer: "To identify a device on the network",
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
    question: "Which of the following is an example of a network protocol?",
    options: ["TCP/IP", "HTML", "CSS", "JavaScript"],
    answer: "TCP/IP",
  },
  {
    question: "What is the primary purpose of a router in a network?",
    options: [
      "To forward data packets between networks",
      "To store data securely",
      "To manage file sharing",
      "To encrypt data during transmission",
    ],
    answer: "To forward data packets between networks",
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
    question: "Which of the following is an example of a network topology?",
    options: ["Star", "HTML", "CSS", "JavaScript"],
    answer: "Star",
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
      "Denial-of-Service (DoS)",
      "File Management",
      "Multitasking",
      "Resource Allocation",
    ],
    answer: "Denial-of-Service (DoS)",
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
    question: "Which of the following is an example of a network protocol?",
    options: ["FTP", "HTML", "CSS", "JavaScript"],
    answer: "FTP",
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
    question:
      "What is the primary purpose of a distributed denial-of-service (DDoS) attack?",
    options: [
      "To overwhelm a target system with traffic and make it unavailable",
      "To encrypt data for secure transmission",
      "To manage file sharing",
      "To detect unauthorized access to a network",
    ],
    answer: "To overwhelm a target system with traffic and make it unavailable",
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
      "To verify the authenticity and integrity of a message or document",
      "To encrypt data for secure transmission",
      "To manage file permissions",
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
