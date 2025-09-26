import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function Education() {
  const educationData = [
    { title: "Nxtwave, Full-stack Certification", date: "Jan 2023 – Apr 2025" },
    { title: "JS Hindu PG College, BSc Mathematics", date: "2018 – 2021" },
    { title: "Hilton Convent Sr. Sec. School", date: "SSC – 2015–2016, Intermediate – 2017–2018" },
  ];

  return (
    <div>
      <h2 id="education" className="text-3xl font-bold mt-16 mb-8 text-center text-blue-500">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {educationData.map(({ title, date }, i) => (
          <motion.div key={title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Card className="p-4 bg-gray-800 text-white rounded-xl">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-400">{date}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
