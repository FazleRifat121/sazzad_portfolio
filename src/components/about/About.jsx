import img from "../../assets/cover.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-500 pb-4">
      <h1 className="text-4xl text-center my-20">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={img}
              alt="about"
              className="rounded-2xl max-w-sm"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              className="my-2 max-w-xl py-6 text-[20.3px]"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Sazzad Hossain Hello, I’m Md. Sazzad Hossain, a passionate and
              aspiring mobile app developer with a strong foundation in Computer
              Science and Engineering. Currently in my 8th semester at American
              International University – Bangladesh. I have developed hands-on
              experience in Object-Oriented Programming, competitive
              programming, and Flutter app development. I’ve worked on various
              projects that showcase my skills, including UniGuide, a university
              admission guide app built in Java, a Roll Dice App created using
              Flutter and a Inventory Management System using C#. Through these
              projects, I have honed my technical abilities, problem-solving
              skills, and creativity in building efficient and user-friendly
              applications. In addition to my technical expertise, I have
              experience collaborating with teams and organizing events as a
              former member of the AIUB Performing Arts Club, where I developed
              strong communication and teamwork skills. Volunteering with Sheba
              Foundation has also taught me adaptability and the importance of
              giving back to the community. I am highly motivated to start my
              career as a mobile app developer and am enthusiastic about
              leveraging my skills to create innovative solutions. With a strong
              work ethic, a passion for coding, and a drive to tackle
              challenges, I aim to contribute meaningfully to the tech industry.
              Let’s connect to explore how I can bring value to your team or
              project!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
