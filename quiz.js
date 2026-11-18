/* ---------- Logic gate drawings ---------- */
const G = {
  and:(x,y)=>`<g transform="translate(${x},${y})" fill="none" stroke="#14202b" stroke-width="3"><path d="M20 10 H50 A30 30 0 0 1 50 70 H20 Z" fill="#fff"/><line x1="0" y1="25" x2="20" y2="25"/><line x1="0" y1="55" x2="20" y2="55"/><line x1="80" y1="40" x2="100" y2="40"/></g>`,
  or:(x,y)=>`<g transform="translate(${x},${y})" fill="none" stroke="#14202b" stroke-width="3"><path d="M15 10 Q45 10 62 22 Q76 31 88 40 Q76 49 62 58 Q45 70 15 70 Q32 40 15 10 Z" fill="#fff"/><line x1="0" y1="25" x2="22" y2="25"/><line x1="0" y1="55" x2="22" y2="55"/><line x1="88" y1="40" x2="100" y2="40"/></g>`,
  not:(x,y)=>`<g transform="translate(${x},${y})" fill="none" stroke="#14202b" stroke-width="3"><path d="M20 15 L20 65 L68 40 Z" fill="#fff"/><circle cx="75" cy="40" r="6" fill="#fff"/><line x1="0" y1="40" x2="20" y2="40"/><line x1="81" y1="40" x2="100" y2="40"/></g>`
};
const gateSVG = (k,label)=>`<svg viewBox="-10 0 130 80" width="240" role="img" aria-label="${label}">${G[k](0,0)}</svg>`;
const circuitSVG = `<svg viewBox="0 0 470 200" width="470" role="img" aria-label="Circuit: input A goes into a NOT gate giving D. Inputs B and C go into an AND gate giving E. D and E go into an OR gate giving the output.">
  <g font-family="Segoe UI,Verdana,Arial,sans-serif" font-size="20" fill="#14202b">
    <text x="0" y="56">A</text><text x="0" y="146">B</text><text x="0" y="177">C</text>
    <text x="196" y="40">D</text><text x="196" y="147">E</text><text x="400" y="104">Output</text>
  </g>
  <g fill="none" stroke="#14202b" stroke-width="3">
    <line x1="22" y1="50" x2="60" y2="50"/>
    <line x1="22" y1="140" x2="60" y2="140"/><line x1="22" y1="170" x2="60" y2="170"/>
    <polyline points="160,50 220,50 220,85 270,85"/>
    <polyline points="160,155 220,155 220,115 270,115"/>
    <line x1="370" y1="100" x2="395" y2="100"/>
  </g>
  ${G.not(60,10)}
  ${G.and(60,115).replace('translate(60,115)','translate(60,115)')}
  ${G.or(270,60)}
</svg>`;

/* ---------- Sections ---------- */
const SECTIONS = {
  hs:"Hardware, software & data",
  os:"Programs & operating systems",
  cpu:"Processor, memory & storage",
  io:"Input & output",
  snap:"Inside the computer: what's where?",
  logic:"Logic & logic gates"
};

/* ---------- Question bank ----------
 type: mc (one answer) | multi (select all) | text (typed) | two (two typed examples)
*/
const HSW = ["Software","Hardware","Neither"];
const IO = ["Input","Output","Neither"];
const SNAP_OPTS = [
  "All the instructions in the music-editing program",
  "All the instructions in the operating system",
  "All the songs saved on your computer",
  "All the programs installed on your computer",
  "All the data for the song you are editing",
  "The instruction that is being carried out right now",
  "The data for the instruction being carried out right now"
];
const SNAP_SCENE = "You switch on your computer. When it is ready, you open a song you saved last week in a music-editing program and start editing it. Imagine taking a snapshot of the computer at that moment.";

const QUESTIONS = [
/* ---- Hardware, software & data ---- */
{sec:"hs",type:"mc",q:"Is a <b>printer</b> software, hardware or neither?",opts:HSW,ans:1,fb:"A printer is a physical part of a computer system you can touch, so it is hardware."},
{sec:"hs",type:"mc",q:"Is a <b>spreadsheet program</b> (e.g. Excel) software, hardware or neither?",opts:HSW,ans:0,fb:"A spreadsheet program is a set of instructions that performs tasks, so it is software."},
{sec:"hs",type:"mc",q:"Is a <b>saved song file (MP3)</b> software, hardware or neither?",opts:HSW,ans:2,fb:"A song file is <b>data</b>. It doesn't perform a task – a music player program works on it. Data is neither hardware nor software."},
{sec:"hs",type:"mc",q:"Is <b>Android</b> software, hardware or neither?",opts:HSW,ans:0,fb:"Android is an operating system. An operating system is a set of programs, so it is software."},
{sec:"hs",type:"mc",q:"Is a <b>webcam</b> software, hardware or neither?",opts:HSW,ans:1,fb:"A webcam is a physical device, so it is hardware (an input device)."},
{sec:"hs",type:"mc",q:"Is a <b>video saved on your phone</b> software, hardware or neither?",opts:HSW,ans:2,fb:"A video is data. Data is processed by programs but is not a program itself."},
{sec:"hs",type:"mc",q:"Is a <b>video-editing app</b> such as CapCut software, hardware or neither?",opts:HSW,ans:0,fb:"Apps are programs, so a video-editing app is software."},
{sec:"hs",type:"mc",q:"Is a <b>Bluetooth adaptor</b> (a device that connects your computer wirelessly to headphones or a phone) software, hardware or neither?",opts:HSW,ans:1,fb:"It is a physical device you can touch, so it is hardware. It is a <b>communication</b> device."},
{sec:"hs",type:"mc",q:"Is a <b>game you have installed</b> (e.g. Minecraft) software, hardware or neither?",opts:HSW,ans:0,fb:"A game is a program, so it is software."},
{sec:"hs",type:"mc",q:"Is a <b>Word document you saved</b> software, hardware or neither?",opts:HSW,ans:2,fb:"The document is data. Word (the program) is software; the document it opens is not."},
{sec:"hs",type:"mc",q:"Is a <b>graphics card</b> software, hardware or neither?",opts:HSW,ans:1,fb:"A graphics card is a physical component inside the computer, so it is hardware."},

/* ---- Programs & OS ---- */
{sec:"os",type:"multi",q:"Which of these are <b>programs</b>?",hint:"There may be more than one correct answer. Select all that apply.",opts:["A web browser","Windows","A photo of the night sky","The main memory (RAM)"],ans:[0,1],fb:"A browser and Windows are both programs – they perform tasks. A photo is data, and RAM is hardware."},
{sec:"os",type:"text",q:"Complete the sentence with one word: <i>A program consists of ______.</i>",accept:["instructions","instruction"],wrong:{"code":"Close! The key word is <b>instructions</b> – a program is a sequence of instructions.","data":"Not quite – programs <i>operate on</i> data. A program consists of <b>instructions</b>.","commands":"Close – the word we use is <b>instructions</b>."},fb:"A program is a sequence of <b>instructions</b>."},
{sec:"os",type:"text",q:"Program instructions operate on (process) <b>______</b>. Use one word.",accept:["data"],fb:"Programs consist of instructions, and those instructions operate on <b>data</b>."},
{sec:"os",type:"two",q:"Give <b>two</b> examples of operating systems.",groups:"OS",fb:"Examples: Windows, macOS, Linux (e.g. Ubuntu), ChromeOS, Android, iOS."},
{sec:"os",type:"mc",q:"What is an <b>operating system</b>?",opts:["A program for browsing the internet","A set of programs that controls the operation of a computing system","The physical parts of a computer","A file that stores your settings"],ans:1,fb:"The operating system is a set of programs that controls the operation of the computing system."},
{sec:"os",type:"multi",q:"Which of these are jobs done by the <b>operating system</b>?",hint:"Select all that apply.",opts:["Memory management","Organising the file system","Writing your homework essay","Managing input and output","Providing the graphical user interface (GUI)","Building the hardware"],ans:[0,1,3,4],fb:"The OS manages program execution, memory, the file system, input and output, communication and the GUI. It doesn't write your work or make hardware."},
{sec:"os",type:"mc",q:"Which program does a computer start executing first, as soon as it powers up?",opts:["The web browser","The operating system","The word processor","Whichever app you used last"],ans:1,fb:"The operating system starts first. It then loads and runs the other programs you open."},
{sec:"os",type:"mc",q:"What is the main task of a <b>general-purpose</b> computing system?",opts:["Its main task is to do maths.","It has no single main task – it can perform any task given to it by a program.","Its main task depends on the system – different systems do different main tasks.","Its main task depends on the user – different users need different tasks."],ans:1,fb:"A general-purpose computer executes programs. Change the program and it does a different task – so it isn't limited to one main task."},
{sec:"os",type:"mc",q:"Why is a laptop called a <b>general-purpose</b> computer?",opts:["Because it is designed for one specific job","Because anyone can use it","Because it can execute different programs to do many different tasks","Because it is mainly used for calculations"],ans:2,fb:"It can run (execute) different programs, so the same hardware can do many different tasks."},

/* ---- CPU, RAM, storage ---- */
{sec:"cpu",type:"multi",q:"What does the <b>processor (CPU)</b> do?",hint:"Select all that apply.",opts:["Stores programs","Stores data","Executes programs","Executes data","Processes data"],ans:[2,4],fb:"The CPU <b>executes programs</b> (carries out their instructions) and <b>processes data</b>. Data is processed, not executed. It doesn't store programs or data long term."},
{sec:"cpu",type:"multi",q:"What does <b>main memory (RAM)</b> do?",hint:"Select all that apply.",opts:["Stores programs","Stores data","Executes programs","Executes data","Processes data"],ans:[0,1],fb:"RAM stores the <b>programs</b> and <b>data</b> currently in use. Executing and processing is the CPU's job."},
{sec:"cpu",type:"multi",q:"What is kept in <b>storage devices</b>?",hint:"Select all that apply.",opts:["Hardware components","Programs","Data","Nothing – the word 'storage' is misleading"],ans:[1,2],fb:"Storage keeps <b>programs</b> and <b>data</b> long term, even when the power is off. It doesn't hold hardware!"},
{sec:"cpu",type:"two",q:"Give <b>two</b> examples of storage devices.",groups:"STORE",fb:"Examples: hard disk drive (HDD), solid state drive (SSD), USB flash drive, SD card, CD/DVD."},
{sec:"cpu",type:"text",q:"What does <b>RAM</b> stand for?",accept:["random access memory"],fb:"RAM = <b>Random Access Memory</b>."},
{sec:"cpu",type:"text",q:"What does <b>CPU</b> stand for?",accept:["central processing unit","central processor unit"],fb:"CPU = <b>Central Processing Unit</b>."},
{sec:"cpu",type:"text",q:"Which component <b>executes</b> program instructions?",accept:["processor","the processor","cpu","the cpu","central processing unit","processor cpu","cpu processor"],wrong:{"ram":"RAM <i>stores</i> instructions. The <b>processor (CPU)</b> executes them.","memory":"Memory <i>stores</i> instructions. The <b>processor (CPU)</b> executes them.","main memory":"Main memory <i>stores</i> instructions. The <b>processor (CPU)</b> executes them."},fb:"The <b>processor (CPU)</b> executes instructions, one at a time, very quickly."},
{sec:"cpu",type:"mc",q:"What happens to everything in <b>RAM</b> when the power is switched off?",opts:["It is saved automatically","It is moved to the CPU","It is wiped (lost)","Nothing – it stays there"],ans:2,fb:"RAM is <b>volatile</b>: its contents are lost when the power goes off. That's why you need to save work to storage."},
{sec:"cpu",type:"mc",q:"Which keeps programs and data even when the power is <b>off</b>?",opts:["Main memory (RAM)","The processor (CPU)","Storage (e.g. SSD)","The screen"],ans:2,fb:"Storage keeps programs and data long term, including when the power is off. RAM does not."},
{sec:"cpu",type:"mc",q:"You open an app. Where is the program copied <b>from</b> and <b>to</b>?",opts:["From RAM into storage","From storage into RAM","From the CPU into storage","From the screen into RAM"],ans:1,fb:"The program is copied <b>from storage into main memory (RAM)</b>. The CPU then fetches its instructions from RAM one by one."},
{sec:"cpu",type:"mc",q:"While a program runs, where does the processor <b>fetch</b> its instructions from?",opts:["Straight from storage","From main memory (RAM)","From the keyboard","From the internet"],ans:1,fb:"Instructions are fetched one by one from <b>main memory</b> into the processor, where they are executed."},
{sec:"cpu",type:"mc",q:"Stella clicks <b>Save</b> on the photo she has edited. What happens behind the scenes?",opts:["Image data is copied from storage into main memory","Image data is copied from main memory into storage","The program is copied from storage into main memory","Instructions are copied from the processor into storage"],ans:1,fb:"Saving copies the image data <b>from main memory into storage</b>, so it is kept when the power is off."},
{sec:"cpu",type:"mc",q:"Stella opens a web page about a constellation. Where does the web page data come <b>from</b>?",opts:["The processor","Her computer's storage","A remote computing system (another computer on the internet)","The keyboard"],ans:2,fb:"The page data is requested and received from a <b>remote computing system</b>, then copied into main memory for processing."},
{sec:"cpu",type:"mc",q:"How many instructions does the CPU fetch and execute at a time?",opts:["One","Two","All of the program at once","As many as are in RAM"],ans:0,fb:"The CPU fetches and executes instructions <b>one at a time</b> – but very, very quickly."},

/* ---- Input & output ---- */
{sec:"io",type:"multi",q:"Is a <b>webcam</b> an input device, an output device or neither?",hint:"Tick both Input and Output if it is both.",opts:IO,ans:[0],fb:"A webcam sends data (images) <i>into</i> the computer, so it is an input device."},
{sec:"io",type:"multi",q:"Are <b>headphones</b> an input device, an output device or neither?",hint:"Tick both Input and Output if it is both.",opts:IO,ans:[1],fb:"Headphones receive sound <i>from</i> the computer, so they are an output device."},
{sec:"io",type:"multi",q:"Is a <b>projector</b> an input device, an output device or neither?",hint:"Tick both Input and Output if it is both.",opts:IO,ans:[1],fb:"A projector displays information from the computer, so it is output."},
{sec:"io",type:"multi",q:"Is a <b>scanner</b> an input device, an output device or neither?",hint:"Tick both Input and Output if it is both.",opts:IO,ans:[0],fb:"A scanner turns a paper page into data and sends it into the computer – input."},
{sec:"io",type:"multi",q:"Is a <b>touchscreen</b> an input device, an output device or neither?",hint:"Tick both Input and Output if it is both.",opts:IO,ans:[0,1],fb:"Both! It <b>displays</b> information (output) and <b>detects your touch</b> (input)."},
{sec:"io",type:"multi",q:"Is the <b>processor (CPU)</b> an input device, an output device or neither?",hint:"Tick both Input and Output if it is both.",opts:IO,ans:[2],fb:"Neither. The processor executes instructions – it doesn't get data from, or send data to, the outside world."},
{sec:"io",type:"multi",q:"Is a <b>temperature sensor</b> an input device, an output device or neither?",hint:"Tick both Input and Output if it is both.",opts:IO,ans:[0],fb:"Sensors measure the environment and send that data in – they are input devices. The same goes for distance sensors."},
{sec:"io",type:"multi",q:"Is a <b>motor</b> (e.g. in a robot) an input device, an output device or neither?",hint:"Tick both Input and Output if it is both.",opts:IO,ans:[1],fb:"A motor is controlled <i>by</i> the computer to make something move – output."},
{sec:"io",type:"multi",q:"Is a <b>hard disk drive</b> an input device, an output device or neither?",hint:"Tick both Input and Output if it is both.",opts:IO,ans:[2],fb:"Neither – a hard disk is a <b>storage</b> device. Input/output devices let the computer communicate with the user or environment."},
{sec:"io",type:"multi",q:"Is a <b>microphone</b> an input device, an output device or neither?",hint:"Tick both Input and Output if it is both.",opts:IO,ans:[0],fb:"A microphone captures sound and sends it into the computer – input."},
{sec:"io",type:"multi",q:"Is a <b>speaker</b> an input device, an output device or neither?",hint:"Tick both Input and Output if it is both.",opts:IO,ans:[1],fb:"A speaker plays sound from the computer – output."},

/* ---- Snapshot ---- */
{sec:"snap",type:"multi",scene:SNAP_SCENE,q:"What is in the <b>processor (CPU)</b> at that moment?",hint:"Select all that apply.",opts:SNAP_OPTS,ans:[5,6],fb:"The CPU only holds the <b>one instruction it is carrying out right now</b> and the <b>data for that instruction</b>. Whole programs and files are far too big – they live in RAM and storage."},
{sec:"snap",type:"multi",scene:SNAP_SCENE,q:"What is in <b>main memory (RAM)</b> at that moment?",hint:"Select all that apply.",opts:SNAP_OPTS,ans:[0,1,4],neutral:[5,6],fb:"RAM holds what is <b>currently in use</b>: the music program's instructions, the operating system's instructions and the data for the song you're editing. It does <i>not</i> hold every saved song or every installed program."},
{sec:"snap",type:"multi",scene:SNAP_SCENE,q:"What is in the <b>storage devices</b> at that moment?",hint:"Select all that apply.",opts:SNAP_OPTS,ans:[2,3],neutral:[0,1,4],fb:"Storage holds <b>all the songs saved</b> and <b>all the programs installed</b> – including ones you aren't using – even when the power is off. (The music program and the OS are installed programs, so they are in storage too.)"},

/* ---- Logic ---- */
{sec:"logic",type:"multi",q:"Which of these are <b>logical (Boolean) operators</b>?",hint:"Select all that apply.",opts:["+ (addition)","AND","OR","× (multiplication)","> (greater than)","NOT","mod (remainder)"],ans:[1,2,5],fb:"The three logical operators are <b>AND</b>, <b>OR</b> and <b>NOT</b>. +, ×, mod are arithmetic; > is a comparison."},
{sec:"logic",type:"mc",q:"If X is a logical statement, what values can it have?",opts:["Any number","Any sentence that makes sense","Either true or false","Either 'yes', 'no' or 'don't know'"],ans:2,fb:"A logical (Boolean) statement is either <b>true</b> or <b>false</b> (sometimes written 1 or 0)."},
{sec:"logic",type:"mc",q:"A car beeps when the engine is running, but only if the seatbelt is <b>not</b> fastened. Which expression matches?",opts:["Engine running OR Seatbelt fastened","Engine running NOT Seatbelt fastened","Engine running AND NOT Seatbelt fastened","Engine running &lt; Seatbelt fastened"],ans:2,fb:"Both conditions must be true – the engine is running <b>AND</b> the seatbelt is <b>NOT</b> fastened. 'X NOT Y' isn't a valid expression: NOT needs AND or OR to join it on."},
{sec:"logic",type:"mc",q:"A greenhouse fan switches on when it is hot <b>or</b> humid, but never while the door is open. Which expression matches?",opts:["(Hot OR Humid) AND NOT Door open","Hot AND Humid AND Door open","(Hot OR Humid) OR Door open","Hot OR Humid NOT Door open"],ans:0,fb:"Either condition can trigger the fan (OR), but the door must not be open (AND NOT)."},
{sec:"logic",type:"mc",q:"True or false? <i>Complex components like the processor and main memory can be built out of simple logic gates.</i>",opts:["True","False"],ans:0,fb:"True. Millions (even billions) of simple logic gates are combined to build processors and memory."},
{sec:"logic",type:"mc",q:"Is this statement true or false?<br><code>9 &gt; 1 AND 2 &lt; 1</code>",opts:["True","False"],ans:1,fb:"9 > 1 is true, but 2 < 1 is false. AND needs <b>both</b> to be true, so the answer is <b>false</b>."},
{sec:"logic",type:"mc",q:"Is this statement true or false?<br><code>8 &gt; 2 OR 1 &gt; 9</code>",opts:["True","False"],ans:0,fb:"8 > 2 is true. OR only needs <b>at least one</b> part to be true, so the answer is <b>true</b>."},
{sec:"logic",type:"mc",q:"Is this statement true or false?<br><code>NOT (3 &gt; 5)</code>",opts:["True","False"],ans:0,fb:"3 > 5 is false. NOT reverses it, so the answer is <b>true</b>."},
{sec:"logic",type:"text",q:"Name this logic gate.",svg:gateSVG("and","Logic gate symbol with a flat back and a rounded front"),accept:["and","and gate"],wrong:{"or":"Not quite – an OR gate has a curved back and a pointed front. This flat-backed 'D' shape is <b>AND</b>.","not":"A NOT gate is a triangle with a small circle. This 'D' shape is <b>AND</b>."},fb:"The 'D' shape with a flat back is an <b>AND</b> gate."},
{sec:"logic",type:"text",q:"Name this logic gate.",svg:gateSVG("or","Logic gate symbol with a curved back and a pointed front"),accept:["or","or gate"],wrong:{"and":"Not quite – an AND gate is a 'D' shape with a flat back. The curved back and pointed front is <b>OR</b>.","not":"A NOT gate is a triangle with a small circle. This curved shape is <b>OR</b>."},fb:"The curved back and pointed front make this an <b>OR</b> gate."},
{sec:"logic",type:"text",q:"Name this logic gate.",svg:gateSVG("not","Logic gate symbol shaped like a triangle with a small circle at its point"),accept:["not","not gate","inverter"],wrong:{"and":"An AND gate is a 'D' shape. The triangle with a small circle is <b>NOT</b>.","or":"An OR gate has a curved back. The triangle with a small circle is <b>NOT</b>."},fb:"The triangle with a small circle is a <b>NOT</b> gate. It has just one input."},
{sec:"logic",type:"text",q:"Which gate outputs <b>True</b> only when <b>both</b> inputs are True?",accept:["and","and gate"],fb:"<b>AND</b> – both inputs must be true."},
{sec:"logic",type:"text",q:"Which gate <b>reverses</b> (flips) its input?",accept:["not","not gate","inverter"],fb:"<b>NOT</b> – True becomes False and False becomes True."},
{sec:"logic",type:"mc",q:"An <b>AND</b> gate has inputs A = 1 and B = 0. What is the output?",opts:["0","1"],ans:0,fb:"AND needs <b>both</b> inputs to be 1. B is 0, so the output is <b>0</b>."},
{sec:"logic",type:"mc",q:"An <b>OR</b> gate has inputs A = 0 and B = 1. What is the output?",opts:["0","1"],ans:1,fb:"OR needs <b>at least one</b> input to be 1. B is 1, so the output is <b>1</b>."},
{sec:"logic",type:"mc",q:"A <b>NOT</b> gate has input 1. What is the output?",opts:["0","1"],ans:0,fb:"NOT flips the input: 1 becomes <b>0</b>."},
{sec:"logic",type:"mc",q:"An <b>OR</b> gate has inputs A = False and B = False. What is the output?",opts:["True","False"],ans:1,fb:"OR is only false when <b>both</b> inputs are false – so the output is <b>False</b>."},
{sec:"logic",type:"mc",q:"Look at the circuit. If A = <b>True</b>, B = <b>True</b> and C = <b>False</b>, what is the output?",svg:circuitSVG,opts:["True","False"],ans:1,fb:"D = NOT A = False. E = B AND C = True AND False = False. Output = D OR E = False OR False = <b>False</b>."},
{sec:"logic",type:"mc",q:"Same circuit. If A = <b>False</b>, B = <b>False</b> and C = <b>False</b>, what is the output?",svg:circuitSVG,opts:["True","False"],ans:0,fb:"D = NOT A = True. So the OR gate already has one True input: Output = <b>True</b> (whatever E is)."},
{sec:"logic",type:"mc",q:"Same circuit. If A = <b>True</b>, B = <b>True</b> and C = <b>True</b>, what is the output?",svg:circuitSVG,opts:["True","False"],ans:0,fb:"D = NOT A = False. E = B AND C = True. Output = False OR True = <b>True</b>."},
{sec:"logic",type:"mc",q:"Which expression describes the circuit?",svg:circuitSVG,opts:["NOT A AND (B OR C)","NOT A OR (B AND C)","A OR (B AND C)","NOT (A OR B OR C)"],ans:1,fb:"A goes through NOT; B and C go through AND; the two results go into OR: <b>NOT A OR (B AND C)</b>."}
];

/* ---------- Answer lists for "give two examples" ---------- */
const GROUPS = {
  OS:{
    name:"operating system",
    groups:[
      ["windows","microsoftwindows","windows10","windows11","windows7","windowsxp","win10","win11"],
      ["macos","osx","macosx","macintoshos"],
      ["linux"],["ubuntu"],["debian"],["fedora"],["linuxmint","mint"],["raspberrypios","raspbian"],["redhat"],
      ["chromeos","googlechromeos"],
      ["android"],["ios","appleios"],["ipados"],["watchos"],["unix"],["harmonyos"],["msdos","dos"]
    ],
    wrong:{
      chrome:"Chrome is a web browser (an application). <b>ChromeOS</b> is the operating system.",
      googlechrome:"Google Chrome is a web browser, not an OS. <b>ChromeOS</b> is the operating system.",
      google:"Google is a company. Name one of its operating systems, e.g. Android or ChromeOS.",
      microsoft:"Microsoft is a company. Its operating system is <b>Windows</b>.",
      apple:"Apple is a company. Its operating systems include <b>macOS</b> and <b>iOS</b>.",
      mac:"A Mac is a computer. Its operating system is <b>macOS</b>.",
      iphone:"An iPhone is a device. Its operating system is <b>iOS</b>.",
      ipad:"An iPad is a device. Its operating system is <b>iPadOS</b>.",
      samsung:"Samsung is a company. Its phones run <b>Android</b>.",
      word:"Word is an application program, not an operating system.",
      safari:"Safari is a web browser (an application), not an operating system.",
      edge:"Edge is a web browser (an application), not an operating system.",
      firefox:"Firefox is a web browser (an application), not an operating system."
    }
  },
  STORE:{
    name:"storage device",
    groups:[
      ["harddrive","harddisk","harddiskdrive","hdd","harddisc","externalharddrive","magneticharddrive","harddiskdrivehdd"],
      ["ssd","solidstatedrive","solidstate","solidstatestorage","solidstatedrivessd"],
      ["usb","usbstick","usbdrive","usbflashdrive","flashdrive","memorystick","pendrive","thumbdrive","usbmemorystick"],
      ["sdcard","sd","microsd","microsdcard","memorycard"],
      ["cd","dvd","bluray","opticaldisc","opticaldisk","cdrom","compactdisc"],
      ["magnetictape","tape"],["floppydisk","floppy"]
    ],
    wrong:{
      ram:"RAM is main memory, not storage – it is wiped when the power goes off.",
      memory:"Memory (RAM) isn't storage – it is wiped when the power goes off.",
      mainmemory:"Main memory (RAM) isn't storage – it is wiped when the power goes off.",
      cloud:"Cloud storage is a service – the files are really on hard drives or SSDs in a data centre. Name the device.",
      icloud:"iCloud is a cloud service – the files are on hard drives or SSDs somewhere else. Name the device.",
      onedrive:"OneDrive is a cloud service – the files are on hard drives or SSDs somewhere else. Name the device.",
      googledrive:"Google Drive is a cloud service – the files are on hard drives or SSDs somewhere else. Name the device.",
      cpu:"The CPU executes instructions – it isn't a storage device.",
      processor:"The processor executes instructions – it isn't a storage device."
    }
  }
};

/* ---------- Helpers ---------- */
const norm = s => s.toLowerCase().replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
const compact = s => norm(s).replace(/ /g,"");
function lev(a,b){const m=a.length,n=b.length;const d=Array.from({length:m+1},(_,i)=>[i,...Array(n).fill(0)]);for(let j=1;j<=n;j++)d[0][j]=j;for(let i=1;i<=m;i++)for(let j=1;j<=n;j++){d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));if(i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1])d[i][j]=Math.min(d[i][j],d[i-2][j-2]+1);}return d[m][n];}
function tol(len){return len>=10?2:len>=5?1:0;}
/* returns {match:true/false, typo:bool} */
function matchList(input, list){
  const c=compact(input); if(!c) return {match:false};
  for(const a of list){const ac=compact(a); if(c===ac) return {match:true,typo:false};}
  for(const a of list){const ac=compact(a); const t=tol(ac.length); if(t && lev(c,ac)<=t) return {match:true,typo:true,word:a};}
  return {match:false};
}
function wrongMsg(input, map){ if(!map) return null; const c=compact(input); for(const k in map){ if(compact(k)===c) return map[k]; } return null; }
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const esc = s => s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- State ---------- */
const app=document.getElementById("app");
let deck=[], idx=0, results=[], checked=false, lastSettings=null;

function startScreen(){
  app.innerHTML=`<div class="card">
    <h2>Choose what to revise</h2>
    <fieldset><legend>Topics</legend>
      ${Object.entries(SECTIONS).map(([k,v])=>{const n=QUESTIONS.filter(q=>q.sec===k).length;return `<label class="chk"><input type="checkbox" name="sec" value="${k}" checked> ${v} <span class="muted">(${n})</span></label>`}).join("")}
    </fieldset>
    <fieldset><legend>How many questions?</legend>
      <label class="chk"><input type="radio" name="len" value="15"> Quick quiz – 15 questions</label>
      <label class="chk"><input type="radio" name="len" value="30" checked> Medium – 30 questions</label>
      <label class="chk"><input type="radio" name="len" value="all"> Everything I've ticked</label>
    </fieldset>
    <div class="row"><button class="btn" id="go">Start quiz</button></div>
  </div>`;
  document.getElementById("go").onclick=()=>{
    const secs=[...app.querySelectorAll('input[name=sec]:checked')].map(i=>i.value);
    if(!secs.length){alertBox("Tick at least one topic.");return;}
    const len=app.querySelector('input[name=len]:checked').value;
    lastSettings={secs,len};
    let pool=shuffle(QUESTIONS.filter(q=>secs.includes(q.sec)));
    if(len!=="all") pool=pool.slice(0,+len);
    begin(pool);
  };
}
function alertBox(msg){let el=document.getElementById("warn"); if(!el){el=document.createElement("p");el.id="warn";el.className="note";app.querySelector(".row").after(el);} el.textContent=msg;}

function begin(pool){deck=pool; idx=0; results=[]; showQ();}

function showQ(){
  checked=false;
  const q=deck[idx];
  const pct=Math.round(idx/deck.length*100);
  let body="";
  if(q.type==="mc"||q.type==="multi"){
    const t=q.type==="mc"?"radio":"checkbox";
    body=`<div class="opts" role="${q.type==='mc'?'radiogroup':'group'}">${q.opts.map((o,i)=>`<label class="opt"><input type="${t}" name="ans" value="${i}"><span>${o}</span><span class="mark"></span></label>`).join("")}</div>`;
  } else if(q.type==="text"){
    body=`<label class="sr" for="t1">Your answer</label><input type="text" id="t1" autocomplete="off" spellcheck="false" placeholder="Type your answer">`;
  } else if(q.type==="two"){
    body=`<div class="twobox"><label for="t1">Example 1</label><input type="text" id="t1" autocomplete="off" spellcheck="false"><label for="t2">Example 2</label><input type="text" id="t2" autocomplete="off" spellcheck="false"></div>`;
  }
  app.innerHTML=`<div class="card" id="qcard">
    <div class="topbar"><span>Question ${idx+1} of ${deck.length}</span><span class="tag">${SECTIONS[q.sec]}</span></div>
    <div class="bar" aria-hidden="true"><div></div></div>
    ${q.scene?`<p class="scene">${q.scene}</p>`:""}
    <p class="prompt">${q.q}</p>
    ${q.hint?`<p class="hint">${q.hint}</p>`:`<p class="hint">${q.type==="mc"?"Choose one answer.":q.type==="two"?"Type one example in each box.":"Type your answer."}</p>`}
    ${q.svg?`<div class="figure">${q.svg}</div>`:""}
    <form id="f">${body}
      <div class="row"><button class="btn" id="check" type="submit">Check</button><button class="btn secondary" id="quit" type="button">End quiz</button></div>
    </form>
    <div id="fb"></div>
  </div>`;
  app.querySelector(".bar>div").style.width=pct+"%";
  const f=document.getElementById("f");
  f.onsubmit=e=>{e.preventDefault(); if(!checked) check(); else next();};
  document.getElementById("quit").onclick=()=>finish();
  const first=app.querySelector("input"); if(first && q.type!=="mc" && q.type!=="multi") first.focus();
}

function check(){
  const q=deck[idx]; let verdict="bad", score=0, extra="";
  if(q.type==="mc"){
    const sel=app.querySelector('input[name=ans]:checked');
    if(!sel){note("Choose an answer first.");return;}
    const v=+sel.value;
    score = v===q.ans?1:0; verdict=score?"ok":"bad";
    app.querySelectorAll("label.opt").forEach((l,i)=>{
      if(i===q.ans){l.classList.add("is-correct");l.querySelector(".mark").textContent=i===v?"✓ Your answer":"✓ Correct answer";}
      else if(i===v){l.classList.add("is-wrong");l.querySelector(".mark").textContent="✗ Your answer";}
    });
    if(!score) extra=`<p>The correct answer is: <b>${q.opts[q.ans]}</b></p>`;
  }
  else if(q.type==="multi"){
    const sel=[...app.querySelectorAll('input[name=ans]:checked')].map(i=>+i.value);
    if(!sel.length){note("Tick at least one answer.");return;}
    const neutral=q.neutral||[];
    const right=q.ans.filter(a=>sel.includes(a)).length;
    const wrong=sel.filter(s=>!q.ans.includes(s)&&!neutral.includes(s)).length;
    const missed=q.ans.length-right;
    if(!wrong&&!missed){score=1;verdict="ok";}
    else if(right>0){score=0;verdict="part";}
    else {score=0;verdict="bad";}
    app.querySelectorAll("label.opt").forEach((l,i)=>{
      const m=l.querySelector(".mark"); const s=sel.includes(i);
      if(q.ans.includes(i)){ if(s){l.classList.add("is-correct");m.textContent="✓ Correct";} else {l.classList.add("is-missed");m.textContent="✓ Missed";} }
      else if(s && !neutral.includes(i)){l.classList.add("is-wrong");m.textContent="✗ Wrong";}
      else if(s && neutral.includes(i)){m.textContent="– Not marked";}
    });
    if(verdict==="part") extra=`<p>You got ${right} of ${q.ans.length} correct${wrong?`, but also ticked ${wrong} wrong answer${wrong>1?"s":""}`:""}${missed?`, and missed ${missed}`:""}.</p>`;
  }
  else if(q.type==="text"){
    const inp=document.getElementById("t1"); const val=inp.value;
    if(!val.trim()){note("Type an answer first.");return;}
    const m=matchList(val,q.accept);
    if(m.match){score=1;verdict="ok";inp.classList.add("ok"); if(m.typo) extra=`<p>Check your spelling: <b>${esc(m.word)}</b></p>`;}
    else {inp.classList.add("bad"); const w=wrongMsg(val,q.wrong); extra=w?`<p>${w}</p>`:`<p>The answer we're looking for is: <b>${q.accept[0]}</b></p>`;}
    inp.readOnly=true;
  }
  else if(q.type==="two"){
    const G2=GROUPS[q.groups]; const ins=[document.getElementById("t1"),document.getElementById("t2")];
    if(!ins[0].value.trim()&&!ins[1].value.trim()){note("Type your two examples first.");return;}
    const used=new Set(); let good=0; const msgs=[];
    ins.forEach((inp,k)=>{
      const v=inp.value; inp.readOnly=true;
      if(!v.trim()){inp.classList.add("bad");msgs.push(`Example ${k+1}: left blank.`);return;}
      let gi=-1, typo=null;
      G2.groups.forEach((g,i)=>{ if(gi<0){const m=matchList(v,g); if(m.match){gi=i; if(m.typo) typo=m.word;}}});
      if(gi>=0 && !used.has(gi)){used.add(gi);good++;inp.classList.add("ok"); if(typo) msgs.push(`Example ${k+1}: correct – but check your spelling.`);}
      else if(gi>=0){inp.classList.add("bad");msgs.push(`Example ${k+1}: that's the same as your first example – give a different one.`);}
      else {inp.classList.add("bad"); const w=wrongMsg(v,G2.wrong); msgs.push(`Example ${k+1} ("${esc(v)}"): ${w||`that isn't ${/^[aeiou]/.test(G2.name)?'an':'a'} ${G2.name} I recognise. Check it with your teacher.`}`);}
    });
    score=good/2; verdict=good===2?"ok":good===1?"part":"bad";
    if(msgs.length) extra=msgs.map(m=>`<p>${m}</p>`).join("");
  }
  app.querySelectorAll('input[name=ans]').forEach(i=>i.disabled=true);
  document.getElementById("f").classList.add("locked");
  const label={ok:"✓ Correct!",bad:"✗ Not quite",part:"◐ Partly right"}[verdict];
  document.getElementById("fb").innerHTML=`<div class="fb ${verdict}" role="status"><strong class="v">${label}</strong>${extra}<p>${q.fb}</p></div>`;
  results.push({q,score});
  checked=true;
  const btn=document.getElementById("check"); btn.textContent= idx===deck.length-1?"See my results":"Next question"; btn.focus();
}
function note(msg){document.getElementById("fb").innerHTML=`<p class="note">${msg}</p>`;}
function next(){ idx++; if(idx>=deck.length) finish(); else showQ(); }

function finish(){
  if(!results.length){startScreen();return;}
  const total=results.length, got=results.reduce((a,r)=>a+r.score,0);
  const pct=Math.round(got/total*100);
  const bySec={}; results.forEach(r=>{const s=bySec[r.q.sec]||(bySec[r.q.sec]={n:0,g:0}); s.n++; s.g+=r.score;});
  const missed=results.filter(r=>r.score<1).map(r=>r.q);
  const msg= pct>=85?"Excellent – you're ready for the test.":pct>=60?"Good work. Retry the ones you missed to lock them in.":"Keep going – retry the ones you missed and re-read the revision guide in OneNote.";
  const strip=s=>s.replace(/<[^>]+>/g,"");
  app.innerHTML=`<div class="card">
    <h2>Your results</h2>
    <div class="score-big">${+got.toFixed(1)} / ${total}</div>
    <p class="m0">${pct}% · ${msg}</p>
    <table><thead><tr><th>Topic</th><th>Score</th></tr></thead><tbody>
      ${Object.entries(bySec).map(([k,s])=>`<tr><td>${SECTIONS[k]}</td><td>${+s.g.toFixed(1)} / ${s.n}</td></tr>`).join("")}
    </tbody></table>
    ${missed.length?`<h2 class="mt">Questions to look at again</h2><ul class="review">${missed.map(q=>`<li>${strip(q.q)}</li>`).join("")}</ul>`:""}
    <div class="row">
      ${missed.length?`<button class="btn" id="retry">Retry the ${missed.length} I got wrong</button>`:""}
      <button class="btn secondary" id="again">New quiz</button>
    </div>
  </div>`;
  if(missed.length) document.getElementById("retry").onclick=()=>begin(shuffle(missed));
  document.getElementById("again").onclick=startScreen;
}

startScreen();
