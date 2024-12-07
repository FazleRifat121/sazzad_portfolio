import { motion } from "framer-motion";
import { Link } from "react-router";
const Project = ({ item }) => {
  const { id, title, img, description } = item;
  return (
    <Link to={`/projects/${id}`}>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <div className="w-full lg:w-1/2">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={img}
            alt={title}
            className="mb-6 rounded"
            width={300}
            height={300}
          />
        </div>
        <motion.div
          className="w-full max-w-xl lg:w-3/4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h6 className="mb-6 font-semibold">{title}</h6>
          <p className="mb-4 text-neutral-400">{description}</p>
        </motion.div>
      </div>
    </Link>
  );
};

export default Project;
