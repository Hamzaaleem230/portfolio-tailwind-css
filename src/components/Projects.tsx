import Card from './Card';
import Heading from './Heading';

const data = [
  { id: 1, title: "Currency Converter", desc: "This is a simple and user-friendly currency converter that uses HTML, CSS, and JavaScript. It allows users to easily convert between different currencies.", img: "/currency converter.png", tags: ["Html", "CSS", "JavaScript"] },
  { id: 2, title: "Countdown Timer", desc: "This is a countdown timer built using Next.js with HTML, CSS, Tailwind CSS, and JavaScript. It allows users to set a target time and visually counts down to zero, offering a responsive and stylish interface.", img: "/countdown timer.png", tags: ["Html", "CSS", "JavaScript", "Nextjs"]  },
  { id: 3, title: "Simple Calculator", desc: "This is a simple calculator I created using HTML, CSS, and JavaScript. It allows you to easily perform basic arithmetic operations like addition, subtraction, multiplication, and division, with an attractive design styled through CSS.", img: "/calculator.png", tags: ["Html", "CSS", "JavaScript" ] },
  { id: 4, title: "Static Interactive Resume", desc: "This is a static interactive resume that I created using HTML, CSS, and JavaScript. It presents my skills, experience, and qualifications in a visually appealing format, with interactive elements that enhance user engagement.", img: "/resume.png", tags: ["Html", "CSS", "JavaScript"] },
  { id: 5, title: "College Admission Form", desc: "This is a college admission form I created using HTML, CSS, and JavaScript. The form allows students to easily submit their information with a user-friendly interface and responsive design, enhanced by JavaScript for form validation and interactivity.", img: "/admission form.png", tags: ["Html", "CSS"] },
  { id: 6, title: "Empire Magzine", desc: "I have created an Empire magazine that features information about various Hollywood animated movies, using HTML, CSS, and JavaScript. The magazine has an interactive layout, with a visually appealing design powered by CSS, and dynamic elements enhanced by JavaScript for a smooth user experience.", img: "/magzine.png", tags: ["Html", "CSS"] },
];


const Projects = () => {
  return (
    <div id='projects' className='container pt-32 ' data-aos="zoom-in-up">
        <Heading title='My Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md: grid-cols-3 lg:grid-cols-3 place-items-center' data-aos="zoom-in-up">
            {data.map((el) => (
                <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}

        </div>
    </div>
  )
}

export default Projects