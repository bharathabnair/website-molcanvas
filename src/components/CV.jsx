export default function CV() {
  return (
    <div className="min-h-screen bg-white text-black p-8 font-sans">
      <h1 className="text-4xl font-bold mb-6">Curriculum Vitae</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="list-disc pl-5">
          <li>PhD in Biochemistry, University of Copenhagen, Denmark – 2023</li>
          <li>Integrated BSc and MSc in Chemistry, NIT Rourkela, India – 2018</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Current Position</h2>
        <p>Postdoctoral Researcher, University of Southern Denmark – Since Feb 2025</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Research Experience</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>University of Cambridge – Postdoc in palaeoproteomics, Jul 2023–Dec 2024</li>
          <li>Globe Institute, University of Copenhagen – Postdoc and PhD in protein degradation</li>
          <li>National Institute of Technology Rourkela – Nanomaterials research project</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <p>Mass Spectrometry, MALDI-ToF, LC-MS2, R, Python, FORTRAN, MATLAB</p>
      </section>
    </div>
  );
}