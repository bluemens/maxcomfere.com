import Layout from '@/components/Layout'
import { Download, ExternalLink, Mail, Phone, MapPin, Calendar, GraduationCap, Briefcase, Code, Globe, Award } from 'lucide-react'

export default function ResumePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Resume</h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional experience and academic background
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/resume.pdf" className="btn-primary flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download PDF</span>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center space-x-2">
              <ExternalLink className="h-5 w-5" />
              <span>View PDF</span>
            </a>
          </div>
        </div>

        {/* Resume Content */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">MAXIMILIAN COMFERE</h2>
            <div className="flex flex-wrap justify-center items-center space-x-4 text-gray-600 mb-4">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>(507) 250-6563</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>mkc2182@columbia.edu</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">EDUCATION</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">Columbia University, Fu School of Engineering and Applied Science</h4>
                    <p className="text-gray-600">Bachelor of Science, Computer Engineering</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">New York, NY</p>
                    <p className="text-gray-600">Expected May 2026</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Relevant Coursework:</strong> Mathematics of Machine Learning, Advanced Programming, Data Structures, Natural Language Processing, Signals and Systems, Introduction to JavaScript and Web Technologies
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">Century High School</h4>
                    <p className="text-gray-600">Diploma, Honors Society, National African American Recognition Scholar</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">Rochester, MN</p>
                    <p className="text-gray-600">May 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="h-5 w-5 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">PROFESSIONAL EXPERIENCE</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">Columbia's Mortimer B. Zuckerman Mind, Brain and Behavior Institute</h4>
                    <p className="text-gray-600">Undergraduate Software Lab Assistant</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">New York, NY</p>
                    <p className="text-gray-600">September 2023 – August 2024</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Implemented MoSeq, a motion sequence machine learning model, to observe and then map behavioral characteristics of Naked Mole Rats to specific castes within the colony.</li>
                  <li>Designed large-scale transition matrices using Python to create visual representations of behavioral sequences.</li>
                  <li>Modeled a tunnel game in Python to efficiently pair all Naked Mole Rats against each other to determine a dominance hierarchy for the colony.</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">Center for Digital Health, Mayo Clinic</h4>
                    <p className="text-gray-600">Software Engineer Intern</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">Rochester, MN</p>
                    <p className="text-gray-600">June 2023 – August 2023</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Automated test data creation for myelodysplastic risk assessment model using Python and the integration of ChatGPT's API.</li>
                  <li>Developed a comprehensive team site to access existing workflows and files using JavaScript, CSS, HTML and React.</li>
                  <li>Designed and tested front-end mechanics for myelodysplastic risk calculator web application.</li>
                  <li>The risk calculator implemented a machine learning model that assessed medical record data and accessed real time laboratory results using SQL streams to predict patient outcomes and guide health provider decisions.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Extracurriculars */}
          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="h-5 w-5 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">EXTRACURRICULARS</h3>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">Columbia University</h4>
                  <p className="text-gray-600">Intercollegiate Athletics: Varsity Track and Field</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">New York, NY</p>
                  <p className="text-gray-600">September 2022 - present</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>NCAA USTFCCCA Division 1 All-Academic Team 2023</li>
              </ul>
            </div>
          </section>

          {/* Skills & Interests */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-5 w-5 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">SKILLS & INTERESTS</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Computer</h4>
                <p className="text-sm text-gray-700">
                  Java, C/C++, JavaScript, Swift, Python, React, Node, pandas, MoSeq, Swift, SQL, HTML, CSS, LTspice, PyTorch, MATLAB
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Language</h4>
                <p className="text-sm text-gray-700">
                  English (native), German (advanced)
                </p>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="font-semibold text-gray-900 mb-2">Interests</h4>
                <p className="text-sm text-gray-700">
                  Creative Writing, Premier League Soccer, Cycling, Sprinting, Backpacking, Cosmology
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}