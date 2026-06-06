import { motion } from "framer-motion";
import { ReactNode } from "react";

interface EditorialSectionProps {
  label: string;
  children: ReactNode;
  first?: boolean;
}

const EditorialSection = ({ label, children, first = false }: EditorialSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 ${
        first ? "" : "border-t border-border pt-14 md:pt-20"
      }`}
    >
      <div className="md:col-span-4">
        <h2 className="section-label sticky top-8">{label}</h2>
      </div>
      <div className="md:col-span-8">{children}</div>
    </motion.section>
  );
};

export default EditorialSection;
