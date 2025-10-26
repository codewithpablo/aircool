"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  enrollmentDate: string;
  photo: string;
  courses: string[];
}

// Nombres argentinos
const names = {
  male: ["Benjamín", "Mateo", "Gael", "Nicolás", "Agustín", "Santiago", "Joaquín", "Valentín", "Felipe", "Tomás"],
  female: ["Isabella", "Valentina", "Olivia", "Camila", "Emilia", "Jazmín", "Agustina", "Antonella", "Bianca", "Carla"],
};

// Localidades de Chaco
const locations = [
  "Resistencia",
  "Sáenz Peña",
  "Villa Ángela",
  "Presidencia Roque Sáenz Peña",
  "Castelli",
  "Villa Río Bermejito",
  "Charata",
  "General Pinedo",
];

// Cursos disponibles
const allCourses = [
  "Fundamentos de Refrigeración",
  "Instalación de Aire Acondicionado",
  "Programación en Python",
  "Desarrollo Web con React",
  "Marketing Digital",
];

// Función para obtener alumnos de Random User API
const fetchStudents = async (count: number): Promise<Student[]> => {
  const response = await fetch(`https://randomuser.me/api/?results=${count}`);
  const data = await response.json();

  return data.results.map((user: any, index: number) => ({
    id: user.login.uuid,
    name: `${names.male[index % names.male.length]} ${names.female[index % names.female.length]}`,
    email: user.email,
    phone: user.phone,
    location: locations[index % locations.length],
    enrollmentDate: new Date(user.dob.date).toLocaleDateString(),
    photo: user.picture.medium,
    courses: allCourses.sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * 3) + 1),
  }));
};

export default function StudentsTable() {
  const [students, setStudents] = useState<Student[]>([]);
  const [tooltipOpenId, setTooltipOpenId] = useState<string | null>(null);

  useEffect(() => {
    const loadStudents = async () => {
      const fetchedStudents = await fetchStudents(30);
      setStudents(fetchedStudents);
    };
    loadStudents();
  }, []);

  return (
    <div className="relative overflow-y-scroll hideScrollbar max-h-[80vh] rounded-xl border border-gray-200 shadow-lg">
      <Table className="w-full">
        

        <TableHeader className="bg-gray-50">
          <TableRow className="[&>th]:border-r last:border-r-0">
            <TableHead className="w-20 text-gray-700">Foto</TableHead>
            <TableHead className="text-gray-700">Nombre</TableHead>
            <TableHead className="text-gray-700">Correo</TableHead>
            <TableHead className="text-gray-700">Curso(s)</TableHead>
            <TableHead className="text-gray-700">Teléfono</TableHead>
            <TableHead className="text-gray-700">Localidad</TableHead>
            <TableHead className="text-gray-700">Fecha inscripción</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {students.map((student, idx) => (
            <TableRow
              key={student.id}
              className={`[&>td]:border-r last:border-r-0 transition relative ${
                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-blue-50`}
            >
              {/* Foto */}
              <TableCell>
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                  <Image src={student.photo} alt={student.name} fill className="object-cover" />
                </div>
              </TableCell>

              <TableCell className="font-medium text-gray-800">{student.name}</TableCell>
              <TableCell className="text-gray-600">{student.email}</TableCell>

              {/* Cursos con tooltip */}
              <TableCell className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  onMouseEnter={() => setTooltipOpenId(student.id)}
                  onMouseLeave={() => setTooltipOpenId(null)}
                  onClick={() =>
                    setTooltipOpenId(tooltipOpenId === student.id ? null : student.id)
                  }
                >
                  Ver cursos
                </Button>

                <AnimatePresence>
                  {tooltipOpenId === student.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute top-10 left-0 z-20 w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-sm text-gray-700"
                    >
                      <h4 className="font-semibold mb-2">Cursos:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {student.courses.map((course, index) => (
                          <li key={index}>{course}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TableCell>

              <TableCell className="text-gray-700">{student.phone}</TableCell>
              <TableCell className="text-gray-700">{student.location}</TableCell>
              <TableCell className="text-gray-700">{student.enrollmentDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter className="bg-gray-50">
          <TableRow className="*:border-r last:border-r-0">
            <TableCell colSpan={7} className="font-medium text-gray-700">
              Total de alumnos: {students.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
