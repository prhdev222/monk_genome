import { ExternalLink, BookOpen } from 'lucide-react'

export default function GenomeTechnologyPage() {
  const technologies = [
    {
      name: 'WGS (Whole Genome Sequencing)',
      description: 'การจัดลำดับจีโนมทั้งหมด ครอบคลุมทั้งบริเวณเข้ารหัสและไม่เข้ารหัส',
      pros: 'ตรวจจับความแปรปรวนได้ครบถ้วน รวมถึง structural variants',
      cons: 'ต้นทุนสูงกว่า ข้อมูลซับซ้อน ต้องการความเชี่ยวชาญในการแปลผล',
    },
    {
      name: 'WES (Whole Exome Sequencing)',
      description: 'การจัดลำดับเฉพาะบริเวณ exome (ประมาณ 1-2% ของจีโนม)',
      pros: 'คุ้มค่า มุ่งเป้าบริเวณที่ก่อโรคส่วนใหญ่ ข้อมูลจัดการง่ายกว่า',
      cons: 'อาจพลาด structural variants และ regulatory regions',
    },
    {
      name: 'Targeted Panels',
      description: 'การตรวจเฉพาะยีนหรือเส้นทางที่เกี่ยวข้องกับโรคเป้าหมาย',
      pros: 'ให้ความลึกสูง ราคาเหมาะสม เหมาะกับการตรวจเฉพาะโรค',
      cons: 'ครอบคลุมจำกัด ขึ้นกับการเลือกยีน',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative min-h-[300px] flex items-center justify-center bg-neutral-900 pt-24 lg:pt-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/NGS.jpg" 
            alt="DNA Genome Technology" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/50 to-neutral-900/80"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-16 text-center relative z-10">
          <h1 className="font-serif font-bold text-3xl lg:text-h1 text-white mb-4 drop-shadow-lg">
            เทคโนโลยีการแพทย์ยุคใหม่
          </h1>
          <p className="font-sans text-lg lg:text-xl text-neutral-100 max-w-2xl mx-auto drop-shadow-md">
            Genome Testing และการทำนายโรค NCD ด้วย AI และ Machine Learning
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="section-spacing bg-white">
        <div className="container-narrow px-6 lg:px-16">
          <div className="card p-8 lg:p-12 border-l-4 border-navy-500">
            <h2 className="font-serif font-semibold text-h3 text-neutral-900 mb-6">
              บทสรุป
            </h2>
            <p className="text-body text-neutral-700 leading-relaxed mb-4">
              เทคโนโลยีการจัดลำดับจีโนมกำลังเปลี่ยนผ่านจากการรักษาแบบเดียวสำหรับทุกคน
              ไปสู่การดูแลแบบเฉพาะบุคคลที่อาศัยข้อมูลจีโนมและโอมิกส์ร่วมกับปัจจัยทางคลินิก
              พฤติกรรม และสิ่งแวดล้อม
            </p>
            <p className="text-body text-neutral-700 leading-relaxed">
              แกนของการเปลี่ยนผ่านนี้คือเทคโนโลยี NGS ที่ช่วยให้เราอ่านลำดับ DNA ได้ลึก
              ครอบคลุม และตรงจุดยิ่งขึ้น สำหรับการวินิจฉัยโรคหายาก มะเร็ง
              และการป้องกันโรคไม่ติดต่อเรื้อรัง
            </p>
          </div>
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="section-spacing bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-4">
              เปรียบเทียบเทคโนโลยี
            </h2>
            <p className="text-body text-neutral-700">
              WGS vs WES vs Targeted Sequencing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="card p-8">
                <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                  {tech.name}
                </h3>
                <p className="text-body text-neutral-700 mb-6 leading-relaxed">
                  {tech.description}
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-sans font-medium text-teal-700 mb-2">
                      ข้อดี
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {tech.pros}
                    </p>
                  </div>
                  <div>
                    <div className="text-sm font-sans font-medium text-neutral-500 mb-2">
                      ข้อจำกัด
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {tech.cons}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Videos */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-4">
              เกี่ยวกับความรู้
            </h2>
            <p className="text-body text-neutral-700">
              วิดีโอความรู้เกี่ยวกับเทคโนโลยี Genome และการแพทย์ยุคใหม่
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-feature p-6">
              <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                Genome ปฏิวัติการแพทย์
              </h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/x2DbiKkC-lM"
                  title="Genome ปฏิวัติการแพทย์"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                เรียนรู้ว่าการจัดลำดับจีโนมเปลี่ยนแปลงการแพทย์อย่างไร
              </p>
            </div>

            <div className="card-feature p-6">
              <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                เทคโนโลยีการแพทย์ล้ำๆ
              </h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/LeXI3ZmPRhU"
                  title="เทคโนโลยีการแพทย์ล้ำๆ ถอดรหัสพันธุกรรมเพื่อรักษา"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                ถอดรหัสพันธุกรรมเพื่อรักษาและป้องกันโรค
              </p>
            </div>

            <div className="card-feature p-6">
              <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                CRISPR ตัดต่อยีน
              </h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/QCfqKFeMUfA"
                  title="CRISPR ตัดต่อยีนเขย่าโลก ปลุกชีวิตสูญพันธุ์"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                เทคโนโลยี CRISPR ที่เขย่าโลก ปลุกชีวิตสูญพันธุ์
              </p>
            </div>

            <div className="card-feature p-6">
              <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                อิพีเจเนติกส์ (Epigenetics)
              </h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/Qz2tmsS5wyk"
                  title="อิพีเจเนติกส์ (Epigenetics) เมื่อมนุษย์สามารถควบคุมยีนส์พันธุกรรมได้"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                เมื่อมนุษย์สามารถควบคุมยีนส์พันธุกรรมได้
              </p>
            </div>

            <div className="card-feature p-6">
              <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                Microbiome ความหวังใหม่
              </h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/DaN2WvxkrnQ"
                  title="Microbiome ความหวังใหม่ในการป้องกันโรคร้าย"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                Microbiome ความหวังใหม่ในการป้องกันโรคร้าย
              </p>
            </div>

            <div className="card-feature p-6">
              <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                เภสัชพันธุศาสตร์
              </h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/9wwjHHr3WdM"
                  title="เภสัชพันธุศาสตร์"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                เภสัชพันธุศาสตร์: การเลือกยาและปรับขนาดให้เหมาะสมตามพันธุกรรม
              </p>
            </div>

            <div className="card-feature p-6">
              <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                ป้องกันมะเร็งด้วยการตรวจยีน
              </h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/fe5QEfQO2u8"
                  title="ป้องกันมะเร็ง เพิ่มทางเลือกรักษา ด้วยการตรวจยีนความเสี่ยง"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                ป้องกันมะเร็ง เพิ่มทางเลือกรักษา ด้วยการตรวจยีนความเสี่ยง
              </p>
            </div>

            <div className="card-feature p-6">
              <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                ATMPs จักรวาลยาใหม่
              </h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/3fzw-0chRPw"
                  title="ATMPs จักรวาลยาใหม่ เมื่อเซลล์คือยา ฆ่ามะเร็ง ยืดอายุ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                ATMPs จักรวาลยาใหม่ เมื่อเซลล์คือยา ฆ่ามะเร็ง ยืดอายุ
              </p>
            </div>
          </div>

          {/* Additional Learning Resources */}
          <div className="mt-16 pt-16 border-t border-neutral-200">
            <div className="text-center mb-8">
              <h3 className="font-serif font-semibold text-h3 text-neutral-900 mb-4">
                แหล่งเรียนรู้เพิ่มเติม
              </h3>
              <p className="text-body text-neutral-700">
                เว็บไซต์และแหล่งข้อมูลความรู้เกี่ยวกับพันธุศาสตร์และการแพทย์
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <a
                href="https://learn.genetics.utah.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-feature p-8 group hover:shadow-card-hover transition-all duration-standard flex items-start"
              >
                <div className="w-14 h-14 rounded-full bg-navy-50 flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-standard">
                  <BookOpen size={28} className="text-navy-600" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <h4 className="font-serif font-semibold text-h4 text-neutral-900 mr-3">
                      Learn Genetics - University of Utah
                    </h4>
                    <ExternalLink size={18} className="text-navy-600 group-hover:text-navy-700" />
                  </div>
                  <p className="text-body text-neutral-700 leading-relaxed mb-3">
                    แหล่งเรียนรู้พันธุศาสตร์ที่ครอบคลุม ครอบคลุมตั้งแต่พื้นฐานพันธุศาสตร์ 
                    เซลล์ชีววิทยา การแพทย์แม่นยำ จีโนมิกส์ และเทคโนโลยีพันธุกรรม
                  </p>
                  <div className="text-sm text-neutral-500">
                    learn.genetics.utah.edu
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Medicine */}
      <section className="section-spacing-large bg-navy-50">
        <div className="container-narrow px-6 lg:px-16 text-center">
          <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-6">
            Precision Medicine
          </h2>
          <p className="text-body-lg text-neutral-700 leading-relaxed mb-12">
            การแพทย์แม่นยำใช้ข้อมูลจีโนม ข้อมูลคลินิก และข้อมูลสิ่งแวดล้อม
            เพื่อกำหนดการรักษาที่เหมาะสมที่สุดสำหรับแต่ละบุคคล
            โดยเฉพาะในด้านเภสัชพันธุศาสตร์ (Pharmacogenomics)
            ที่ช่วยเลือกยาและปรับขนาดให้เหมาะสม ตัวอย่างเช่น
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-md">
              <div className="text-2xl font-serif font-bold text-navy-600 mb-2">
                CYP2D6
              </div>
              <p className="text-sm text-neutral-700">
                การเมตาบอลิซึมยา เช่น tamoxifen
              </p>
            </div>
            <div className="bg-white p-6 rounded-md">
              <div className="text-2xl font-serif font-bold text-navy-600 mb-2">
                TPMT
              </div>
              <p className="text-sm text-neutral-700">
                ปรับขนาด azathioprine
              </p>
            </div>
            <div className="bg-white p-6 rounded-md">
              <div className="text-2xl font-serif font-bold text-navy-600 mb-2">
                CYP2C19
              </div>
              <p className="text-sm text-neutral-700">
                การตอบสนองต่อ clopidogrel
              </p>
            </div>
            <div className="bg-white p-6 rounded-md">
              <div className="text-2xl font-serif font-bold text-navy-600 mb-2">
                HLA-B*58:01
              </div>
              <p className="text-sm text-neutral-700">
                ความเสี่ยงต่อปฏิกิริยารุนแรงจาก allopurinol
              </p>
            </div>
            <div className="bg-white p-6 rounded-md">
              <div className="text-2xl font-serif font-bold text-navy-600 mb-2">
                HLA-B*15:02
              </div>
              <p className="text-sm text-neutral-700">
                ความเสี่ยงต่อปฏิกิริยารุนแรงจาก carbamazepine
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
