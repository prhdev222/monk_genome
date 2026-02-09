import { Heart, Apple, BrainCircuit, ShieldCheck } from 'lucide-react'

export default function PreventiveCarePage() {
  const preventiveGuide = {
    intro: {
      title: 'การดูแลสุขภาพเชิงป้องกัน: คู่มือสำหรับพระภิกษุ',
      paragraphs: [
        'พระสงฆ์ไทยมีความเสี่ยงสูงต่อโรคไม่ติดต่อเรื้อรัง (NCDs) เนื่องจากวิถีชีวิตที่ได้รับอาหารจากการบิณฑบาต ซึ่งมักมีรสหวาน มัน และเค็ม ส่งผลให้เกิดความเสี่ยงต่อโรคหัวใจและหลอดเลือด โรคสมองเสื่อม ความดันโลหิตสูง และเบาหวาน',
        'การตรวจคัดกรองด้วยเทคโนโลยีการแพทย์สมัยใหม่ช่วยตรวจพบความเสี่ยงได้เร็วขึ้นมาก ช่วยให้พระคุณเจ้าวางแผนดูแลสุขภาพได้อย่างเหมาะสม สามารถทราบถึงความเสี่ยงที่จะเป็นโรค เพื่อจะได้ออกแบบการปฏิบัติตัว การใช้ชีวิต และชนิดของยาที่เลือกใช้รักษาได้อย่างเหมาะสมของแต่ละบุคคล (Personalized medicine)',
        'ดังคำสอนที่ว่า "อโรคฺยปรมา ลาภา" สุขภาพดีเป็นลาภที่ประเสริฐที่สุด',
      ],
    },
    infographic: {
      title: 'ภาพรวมการดูแลสุขภาพเชิงป้องกัน',
      description: 'คัดกรองความเสี่ยง + ปรับวิถีชีวิต = ลดโรคเรื้อรัง',
      image: '/images/monks-hero.jpg',
      bullets: [
        'เริ่มจากคัดกรองพื้นฐานปีละครั้ง',
        'ปรับอาหาร ออกกำลังกาย และพักผ่อนให้พอ',
        'ดูแลจิตใจให้สงบ ลดความเครียดสะสม',
      ],
    },
    conclusion: {
      title: 'สรุป',
      paragraphs: [
        'การตรวจสุขภาพเป็นประจำช่วยให้พระคุณเจ้าปฏิบัติธรรมได้อย่างมั่นคง',
        'หลักการสำคัญคืออาหารเหมาะสม ออกกำลังกายสม่ำเสมอ พักผ่อนเพียงพอ และใจสงบตามทางสายกลาง',
      ],
    },
  }

  const diseaseGroups = [
    {
      id: 'cardio',
      title: 'โรคหัวใจและหลอดเลือด',
      description: 'ปัจจัยเสี่ยงหลักคือความดันสูงและไขมันสูง',
      color: 'teal',
      icon: Heart,
      diseases: [
        {
          title: 'โรคหัวใจ',
          image: '/images/heart (2).png',
          summary: ['หลอดเลือดตีบหรืออุดตัน', 'เสี่ยงกล้ามเนื้อหัวใจตาย'],
          screening: ['ตรวจคลื่นไฟฟ้าหัวใจ', 'ตรวจระดับไขมันในเลือด', 'ประเมินความเสี่ยงกับแพทย์'],
          prevention: ['เดินจงกรมหรือกิจกรรมแอโรบิกสม่ำเสมอ', 'ลดไขมัน เกลือ และน้ำตาล', 'พักผ่อนให้พอ ลดความเครียด'],
        },
        {
          title: 'ความดันโลหิตสูง',
          image: '/images/HT_BP.png',
          summary: ['มักไม่มีอาการในระยะแรก', 'ทำลายหลอดเลือดและอวัยวะสำคัญ'],
          screening: ['วัดความดันสม่ำเสมอ', 'ค่าปกติควรอยู่ในช่วง 120/80 มม.ปรอท ไม่ควรเกิน 140/90 มม.ปรอท'],
          prevention: ['ลดเกลือ เพิ่มผักผลไม้', 'เดินจงกรมสม่ำเสมอ', 'ฝึกสมาธิช่วยลดความเครียด'],
        },
        {
          title: 'ไขมันในเลือดสูง',
          image: '/images/DLP.png',
          summary: ['ไขมันสะสมทำให้หลอดเลือดตีบ', 'เพิ่มความเสี่ยงโรคหัวใจและหลอดเลือดสมอง'],
          screening: ['ตรวจคอเลสเตอรอลและไตรกลีเซอไรด์', 'ควรตรวจเป็นประจำขึ้นกับความเสี่ยงโรคหลอดเลือด'],
          prevention: ['ลดอาหารไขมันอิ่มตัวและของทอด', 'เพิ่มปลา ถั่ว และไขมันดี', 'ออกกำลังกายสม่ำเสมอ'],
        },
      ],
    },
    {
      id: 'metabolic',
      title: 'โรคเมตาบอลิซึม',
      description: 'เชื่อมโยงกับโภชนาการ น้ำหนัก และการเผาผลาญ',
      color: 'gold',
      icon: Apple,
      diseases: [
        {
          title: 'โรคเบาหวาน',
          image: '/images/DM.png',
          summary: ['น้ำตาลในเลือดสูงเรื้อรัง', 'กระทบไต ตา หัวใจ และเส้นประสาท'],
          screening: ['ตรวจน้ำตาลขณะอดอาหาร', 'ตรวจค่า HbA1C อย่างน้อยปีละครั้ง'],
          prevention: ['ควบคุมน้ำหนัก', 'ออกกำลังกายวันละ 30 นาที', 'กินใยอาหารสูง ลดหวานและทอด'],
        },
        {
          title: 'โรคอ้วน',
          image: '/images/obesity.png',
          summary: ['เพิ่มความเสี่ยงเบาหวานและความดันสูง', 'เกี่ยวข้องกับโรคเรื้อรังหลายชนิด'],
          screening: ['คำนวณ BMI', 'วัดรอบเอวเกิน 90 ซม. เสี่ยงสูง'],
          prevention: ['ควบคุมปริมาณอาหาร', 'เน้นผักผลไม้ ลดหวานทอด', 'ออกกำลังกายสม่ำเสมอ'],
        },
      ],
    },
    {
      id: 'cancer',
      title: 'โรคมะเร็ง',
      description: 'เน้นคัดกรองระยะเริ่มต้นและลดปัจจัยเสี่ยง',
      color: 'teal',
      icon: ShieldCheck,
      diseases: [
        {
          title: 'โรคมะเร็ง',
          image: '/images/Cancer.png',
          summary: ['พบระยะต้นรักษาได้ผลดี', 'พฤติกรรมสุขภาพช่วยลดความเสี่ยง'],
          screening: ['ตรวจเลือดในอุจจาระ', 'เอกซเรย์ปอดสำหรับผู้เสี่ยง', 'ตรวจตามคำแนะนำแพทย์'],
          prevention: ['กินผักผลไม้สด ลดเนื้อแปรรูป', 'ออกกำลังกายสม่ำเสมอ', 'ป้องกันผิวจากแสงแดด'],
        },
      ],
    },
    {
      id: 'brain',
      title: 'โรคสมอง',
      description: 'ดูแลสมองด้วยการออกกำลังกายและฝึกสมาธิ',
      color: 'navy',
      icon: BrainCircuit,
      diseases: [
        {
          title: 'โรคสมองเสื่อมอัลไซเมอร์',
          image: '/images/Dementia.png',
          summary: ['ความจำเสื่อมกระทบชีวิตประจำวัน', 'ตรวจพบเร็วช่วยหาวิธีชะลอความเสื่อม'],
          screening: [
            'TMSE (หรือ Thai Mental State Examination เป็นแบบทดสอบคัดกรองภาวะสมองเสื่อม)',
            'ประเมินความจำ การคำนวณ และการทำตามคำสั่ง',
          ],
          prevention: ['เดินและฝึกสมองสม่ำเสมอ', 'ท่องจำพระปริยัติหรือศึกษาธรรมะ', 'ควบคุมความดันและน้ำตาลในเลือด'],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative min-h-[300px] flex items-center justify-center bg-neutral-900 pt-24 lg:pt-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Pai.png" 
            alt="Health and Wellness" 
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/50 to-neutral-900/80"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-16 text-center relative z-10">
          <h1 className="font-serif font-bold text-3xl lg:text-h1 text-white mb-4 drop-shadow-lg">
            การดูแลสุขภาพเชิงป้องกัน
          </h1>
          <p className="font-sans text-lg lg:text-xl text-neutral-100 max-w-2xl mx-auto drop-shadow-md">
            คู่มือการป้องกันโรคและการตรวจคัดกรองสำหรับพระภิกษุ
          </p>
        </div>
      </section>

      {/* Preventive Guide */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-6">
              {preventiveGuide.intro.title}
            </h2>
            <div className="space-y-3 text-body text-neutral-700 leading-relaxed">
              {preventiveGuide.intro.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="card p-6">
              <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-2">
                {preventiveGuide.infographic.title}
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                {preventiveGuide.infographic.description}
              </p>
              <ul className="space-y-2 text-body text-neutral-700">
                {preventiveGuide.infographic.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-xl shadow-card">
              <img
                src={preventiveGuide.infographic.image}
                alt="Preventive health infographic"
                className="w-full h-full object-cover max-h-[280px]"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-10">
            {diseaseGroups.map((group) => {
              const GroupIcon = group.icon
              const groupColorMap = {
                gold: 'border-gold-400 bg-gold-50 text-gold-700',
                teal: 'border-teal-400 bg-teal-50 text-teal-700',
                navy: 'border-navy-400 bg-navy-50 text-navy-700',
              }
              const groupColors = groupColorMap[group.color as keyof typeof groupColorMap]

              return (
                <div key={group.id} className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className={`w-10 h-10 rounded-full border ${groupColors} flex items-center justify-center mr-3`}>
                          <GroupIcon size={20} />
                        </span>
                        <h3 className="font-serif font-semibold text-h3 text-neutral-900">{group.title}</h3>
                      </div>
                      <p className="text-body text-neutral-600">{group.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm border ${groupColors}`}>
                      {group.diseases.length} โรคสำคัญ
                    </span>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {group.diseases.map((disease) => (
                      <div key={disease.title} className="card overflow-hidden">
                        <div className="h-36 overflow-hidden">
                          <img src={disease.image} alt={disease.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                          <h4 className="font-serif font-semibold text-h4 text-neutral-900 mb-2">
                            {disease.title}
                          </h4>
                          <ul className="space-y-1 text-sm text-neutral-700 mb-4">
                            {disease.summary.map((line) => (
                              <li key={line} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="space-y-4">
                            <div className="bg-neutral-50 rounded-md p-4">
                              <h5 className="font-semibold text-neutral-900 mb-2">การตรวจคัดกรอง</h5>
                              <ul className="space-y-1 text-sm text-neutral-700">
                                {disease.screening.map((item) => (
                                  <li key={item} className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-teal-50 rounded-md p-4">
                              <h5 className="font-semibold text-neutral-900 mb-2">การป้องกัน</h5>
                              <ul className="space-y-1 text-sm text-neutral-700">
                                {disease.prevention.map((item) => (
                                  <li key={item} className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing-large bg-teal-50">
        <div className="container-narrow px-6 lg:px-16 text-center">
          <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-6">
            เริ่มต้นวันนี้เพื่อสุขภาพที่ดีกว่า
          </h2>
          <div className="text-body-lg text-neutral-700 leading-relaxed mb-8 space-y-4">
            <p>
              การเปลี่ยนแปลงเล็กๆ น้อยๆ ในชีวิตประจำวันสามารถสร้างผลลัพธ์ที่ยิ่งใหญ่ต่อสุขภาพในระยะยาว เริ่มจากสิ่งที่ทำได้และค่อยๆ เพิ่มขึ้น
            </p>
            <div className="space-y-2 text-base text-neutral-700">
              <p className="font-serif italic">กเรยฺย โยคฺคํ ธุวมปฺปมตฺโต.</p>
              <p>“ผู้ไม่ประมาท ควรทำความเพียรให้แน่วแน่”</p>
              <p className="font-serif italic">วายเมเถว ปุริโส ยาว อตฺถสฺส นิปฺปทา.</p>
              <p>“บุรุษพึงพยายามไปจนกว่าจะสำเร็จประโยชน์”</p>
            </div>
          </div>
          <div className="mt-8 max-w-3xl mx-auto text-body text-neutral-700 leading-relaxed">
            <p className="mt-4 text-base text-neutral-700">
              แหล่งอ้างอิง:{' '}
              <a
                href="https://prhdev222.github.io/med_prh_patientNCDs/"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 underline underline-offset-4 hover:text-teal-600"
              >
                ความรู้เรื่อง NCDs สำหรับพระภิกษุสงฆ์
              </a>
            </p>
          </div>
          <div className="mt-10">
            <a href="/" className="btn-primary">
              หน้าต่อไป: หน้าแรก
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
