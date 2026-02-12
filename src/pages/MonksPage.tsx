import { useState } from 'react'
import { BookOpen, Brain, Scale, Lightbulb, AlertCircle, X } from 'lucide-react'

export default function MonksPage() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null)

  const openImageModal = (src: string) => {
    setModalImageSrc(src)
    setIsImageModalOpen(true)
  }

  const naturalLaws = [
    {
      icon: Brain,
      pali: 'อุตุนิยาม',
      title: 'อุตุนิยาม',
      english: 'Physical Laws',
      description: 'กฎธรรมชาติเกี่ยวกับความเป็นไปของสภาพแวดล้อม เช่น ดินฟ้าอากาศ ความเปลี่ยนแปลงของอุณหภูมิ การเคลื่อนไหวของดวงอาทิตย์ ดวงจันทร์ และดวงดาวต่างๆ',
      color: 'teal',
    },
    {
      icon: Scale,
      pali: 'พีชนิยาม',
      title: 'พีชนิยาม',
      english: 'Biological Laws',
      description: 'กฎธรรมชาติเกี่ยวกับพืชพันธุ์ หรือพันธุกรรม (ไม่ใช่กรรม) เป็นเรื่องของยีนและพันธุศาสตร์',
      color: 'navy',
    },
    {
      icon: Brain,
      pali: 'จิตตนิยาม',
      title: 'จิตตนิยาม',
      english: 'Psychic Laws',
      description: 'กฎธรรมชาติเกี่ยวกับการทำงานของจิตใจ',
      color: 'gold',
    },
    {
      icon: Lightbulb,
      pali: 'กรรมนิยาม',
      title: 'กรรมนิยาม',
      english: 'Karmic Laws',
      description: 'กฎธรรมชาติที่ว่าด้วยการกระทำของมนุษย์ที่เกิดจากเจตจำนงหรือเจตนา คือกระบวนการแสดงผลของเจตจำนง',
      color: 'teal',
    },
    {
      icon: BookOpen,
      pali: 'ธรรมนิยาม',
      title: 'ธรรมนิยาม',
      english: 'General Laws',
      description: 'กฎทั่วไปแห่งเหตุและผล เช่นว่า สิ่งทั้งหลายเกิดขึ้นดับไป เป็นไปตามเหตุปัจจัย เป็นอนิจจัง ทุกขัง อนัตตา',
      color: 'navy',
    },
  ]

  const wrongBeliefs = [
    {
      pali: 'ปุพเพกตวาท',
      title: 'ลัทธิกรรมเก่า',
      description: 'ลัทธิที่ถือว่าอะไรๆ ก็เป็นเพราะกรรมเก่าที่ทำไว้แต่ชาติปางก่อน',
      color: 'red',
    },
    {
      pali: 'อิศวรนิรมิตวาท',
      title: 'ลัทธิเทพบันดาล',
      description: 'อะไรๆ ก็เป็นเพราะเทพเจ้าผู้ยิ่งใหญ่บันดาล',
      color: 'red',
    },
    {
      pali: 'อเหตุวาท',
      title: 'ลัทธิแล้วแต่โชค',
      description: 'ลัทธิที่ถือว่าอะไรๆ ก็เกิดขึ้นแล้วแต่ความบังเอิญ ไม่มีเหตุไม่มีปัจจัย',
      color: 'red',
    },
  ]

  const keyPrinciples = [
    {
      title: 'โรคเกิดได้จากหลายเหตุ',
      points: [
        'เกิดจากสภาพดินฟ้าอากาศ',
        'เกิดจากการบริหารร่างกายไม่สม่ำเสมอ',
        'เกิดจากการถูกทำร้าย',
        'เกิดจากเหตุภายในระบบร่างกาย',
        'เกิดจากกรรม (เป็นเพียงเหตุหนึ่ง)',
      ],
    },
    {
      title: 'ความประมาทเป็นกรรมชั่ว',
      points: [
        'เมื่อรู้ว่ามีจุดอ่อนข้อบกพร่อง แต่ปล่อยทิ้งไว้ไม่แก้ไข',
        'ประกอบด้วย: ไม่มีปัญญา (โมหะ) และขาดสติ',
        'เป็นทางแห่งความเสื่อมความพินาศ',
      ],
    },
    {
      title: 'มนุษย์เป็นสัตว์ที่ฝึกได้',
      points: [
        'ต้องปรับปรุงให้ดีขึ้นตลอดเวลา',
        'เรียนรู้จากกรรมเก่าเป็นบทเรียน',
        'ทำกรรมใหม่ที่ดี แก้ไขปรับปรุงพัฒนา',
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
            src="/images/Po.jpg" 
            alt="Buddhism and Science" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/50 to-neutral-900/80"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-16 text-center relative z-10">
          <h1 className="font-serif font-bold text-3xl lg:text-h1 text-white mb-4 drop-shadow-lg">
            พระพุทธศาสนากับหลักวิทยาศาสตร์
          </h1>
          <p className="font-sans text-lg lg:text-xl text-neutral-100 max-w-2xl mx-auto drop-shadow-md">
            ความเข้าใจที่ถูกต้องตามหลักพุทธศาสนาและวิทยาศาสตร์
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-spacing bg-white">
        <div className="container-narrow px-6 lg:px-16">
          <div className="card p-8 lg:p-12 border-l-4 border-gold-500">
            <h2 className="font-serif font-semibold text-h3 text-neutral-900 mb-6">
              บทนำ
            </h2>
            <p className="text-body text-neutral-700 leading-relaxed mb-4">
              พระพุทธเจ้าได้ตรัสไว้ว่า หากใครเห็นว่าโรคทุกอย่าง ความบาดเจ็บทุกอย่าง เกิดจากกรรมทั้งสิ้น 
              อย่างนั้นถือเป็นความเข้าใจผิดพลาด โรคเกิดได้จากหลายเหตุ กรรมก็เป็นเหตุปัจจัยอย่างหนึ่งในบรรดาปัจจัยเหล่านั้น
            </p>
            <p className="text-body text-neutral-700 leading-relaxed mb-6">
              ชีวิตมนุษย์นั้นเป็นส่วนประกอบที่ขึ้นอยู่กับกฎธรรมชาติทั้ง 5 กฎครบทั้งหมด 
              ฉะนั้นเราจะต้องแยกออกไป จะไปเอาอย่างใดอย่างหนึ่งไม่ได้ จะบอกว่าเกิดเพราะกรรมเป็นตัวกำหนดไปหมดไม่ได้
            </p>
            <div className="bg-neutral-50 p-4 rounded-md border-l-4 border-gold-500">
              <p className="text-sm text-neutral-600 italic">
                อ้างอิง: พระธรรมปิฎก ป อ. ปยุตฺโต. ตอบคำถามของ รศ. พ.ญ.จินตนา ศิรินาวิน ลงพิมพ์ใน สารศิริราช ปี ๒๕๓๘ ฉบับที่ ๔๗ หน้า ๙๓๙-๙๔๖
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Natural Laws */}
      <section className="section-spacing bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-4">
              กฎธรรมชาติ 5 กฎ
            </h2>
            <p className="text-body text-neutral-700">
              ตามหลักพระพุทธศาสนา สิ่งทั้งหลายเป็นไปตามกฎธรรมชาติ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {naturalLaws.map((law, index) => {
              const Icon = law.icon
              const colorMap = {
                teal: 'text-teal-500 bg-teal-50',
                navy: 'text-navy-500 bg-navy-50',
                gold: 'text-gold-600 bg-gold-50',
              }
              const colors = colorMap[law.color as keyof typeof colorMap]

              return (
                <div key={index} className="card-feature p-8">
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-full ${colors} flex items-center justify-center mb-4`}>
                      <Icon size={28} className={colors.split(' ')[0]} />
                    </div>
                    <div className="text-sm font-mono text-neutral-500 mb-2">
                      {law.pali}
                    </div>
                    <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-1">
                      {law.title}
                    </h3>
                    <p className="text-sm text-neutral-500 italic">
                      ({law.english})
                    </p>
                  </div>
                  <p className="text-body text-neutral-700 leading-relaxed">
                    {law.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Genetics and Buddhism Comparison */}
      <section className="section-spacing bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-4">
              พันธุศาสตร์กับพระพุทธศาสนา
            </h2>
            <p className="text-body text-neutral-700">
              มุมมองที่แตกต่างแต่ไม่ขัดแย้งกัน
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8 border-l-4 border-teal-500">
              <h3 className="font-serif font-semibold text-h3 text-neutral-900 mb-6">
                มุมมองพระพุทธศาสนา
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-body text-neutral-700">เน้นกรรมนิยามและจิตนิยาม</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-body text-neutral-700">การถ่ายทอดผ่านกรรมและวิบาก</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-body text-neutral-700">ปฏิจจสมุปบาท - การเกิดแบบอิงอาศัยกัน</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-body text-neutral-700">ธรรมนิยาม 5 ประการ</span>
                </li>
              </ul>
            </div>

            <div className="card p-8 border-l-4 border-navy-500">
              <h3 className="font-serif font-semibold text-h3 text-neutral-900 mb-6">
                มุมมองวิทยาศาสตร์
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-body text-neutral-700">เน้นอุตุนิยามและพีชนิยาม</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-body text-neutral-700">การถ่ายทอดผ่านยีนและโครโมโซม</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-body text-neutral-700">DNA เป็นพาหะข้อมูลพันธุกรรม</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-body text-neutral-700">กระบวนการปฏิสนธิทางชีววิทยา</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gold-50 p-6 rounded-md border-l-4 border-gold-500">
            <p className="text-body text-neutral-700 leading-relaxed">
              <strong className="text-neutral-900">ข้อสังเกต:</strong> พระพุทธศาสนาไม่ขัดแย้งกับวิทยาศาสตร์ 
              แต่เน้นคนละมิติ โดยพุทธเน้นมิติทางจิตวิญญาณและกรรม ขณะที่วิทยาศาสตร์เน้นมิติทางกายภาพและชีววิทยา
            </p>
          </div>
        </div>
      </section>

      {/* Important Distinction */}
      <section className="section-spacing bg-white">
        <div className="container-narrow px-6 lg:px-16">
          <div className="card p-8 lg:p-12 border-l-4 border-red-500">
            <div className="flex items-start mb-6">
              <AlertCircle size={32} className="text-red-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif font-semibold text-h3 text-neutral-900 mb-4">
                  อย่าสับสนคำว่า "พันธุกรรม" กับ "กรรม"
                </h2>
                <p className="text-body text-neutral-700 leading-relaxed mb-4">
                  "พันธุกรรม" เป็นคำที่คนไทยเราบัญญัติขึ้นใช้ใหม่ ซึ่งพาให้สับสน 
                  โรคของพืชพันธุ์ หรือพันธุกรรม ต้องถือว่าเป็นการใช้ศัพท์ผิดเลยทำให้เข้าใจผิดเป็นเรื่องกรรมไป 
                  จริงๆ แล้วไม่ใช่เรื่องกรรม อาจเรียกว่าพันธุนิยามหรือเรียกเป็นอย่างอื่น 
                  ของพระเรียกว่า <span className="font-mono text-gold-600">พีชนิยาม</span> กฎแห่งพืชพันธุ์ เป็นเรื่องของยีนหรืออื่นๆ
                </p>
                <p className="text-body text-neutral-700 leading-relaxed">
                  <strong className="text-neutral-900">เป็นอันว่า</strong> เรื่องโรคภัยไข้เจ็บ ไม่ใช่เป็นเรื่องของกรรมอย่างเดียว 
                  เพราะว่ากฎธรรมชาติตามหลักพระพุทธศาสนามีหลายกฎ พีชนิยาม หรือกฎแห่งพืชพันธุ์ ก็เป็นอันหนึ่ง
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wrong Beliefs */}
      <section className="section-spacing bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-4">
              ลัทธิที่ผิดหลักกรรม
            </h2>
            <p className="text-body text-neutral-700">
              พระพุทธเจ้าตรัสไว้ว่า 3 ลัทธินี้ผิดหมดเลย
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {wrongBeliefs.map((belief, index) => (
              <div key={index} className="card p-8 border-l-4 border-red-500">
                <div className="text-sm font-mono text-red-600 mb-2">
                  {belief.pali}
                </div>
                <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                  {belief.title}
                </h3>
                <p className="text-body text-neutral-700 leading-relaxed">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-4">
              หลักการสำคัญ
            </h2>
            <p className="text-body text-neutral-700">
              ความเข้าใจที่ถูกต้องตามหลักพระพุทธศาสนา
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyPrinciples.map((principle, index) => (
              <div key={index} className="card-feature p-8">
                <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-6">
                  {principle.title}
                </h3>
                <ul className="space-y-3">
                  {principle.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-gold-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-body text-neutral-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conclusion */}
      <section className="section-spacing-large bg-gradient-to-b from-gold-50 to-white">
        <div className="container-narrow px-6 lg:px-16">
          <div className="card p-8 lg:p-12 border-l-4 border-gold-500">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-6 text-center">
              ข้อสรุปสุดท้าย
            </h2>
            <div className="bg-white p-8 rounded-md shadow-card">
              <p className="text-body-lg text-neutral-700 leading-relaxed mb-6 text-center">
                <strong className="text-neutral-900">พระพุทธศาสนากับวิทยาศาสตร์เป็นสองมุมมองที่ช่วยให้มนุษย์เข้าใจปรากฏการณ์แห่งชีวิตได้อย่างสมบูรณ์</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-teal-50 p-6 rounded-md">
                  <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                    พระพุทธศาสนา
                  </h3>
                  <p className="text-body text-neutral-700 leading-relaxed">
                    ให้คำตอบในมิติของ <strong>"ทำไม"</strong> (Why) ผ่านหลักกรรมและปฏิจจสมุปบาท
                  </p>
                  <button
                    type="button"
                    onClick={() => openImageModal('/images/pathijasmut.jpg')}
                    className="mt-4 block w-full"
                    aria-label="ขยายรูปพุทธศาสตร์"
                  >
                    <img
                      src="/images/pathijasmut.jpg"
                      alt="พุทธศาสตร์"
                      className="w-full h-40 object-cover rounded-md shadow-card transition-transform duration-standard hover:scale-[1.02]"
                    />
                  </button>
                </div>
                <div className="bg-navy-50 p-6 rounded-md">
                  <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                    วิทยาศาสตร์
                  </h3>
                  <p className="text-body text-neutral-700 leading-relaxed">
                    ให้คำตอบในมิติของ <strong>"อย่างไร"</strong> (How) ผ่านกระบวนการทางชีววิทยาและพันธุศาสตร์
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => openImageModal('/images/DNA_RNA.png')}
                      className="block w-full"
                      aria-label="ขยายรูป DNA/RNA"
                    >
                      <img
                        src="/images/DNA_RNA.png"
                        alt="DNA และ RNA"
                        className="w-full h-32 object-contain rounded-md shadow-card bg-white p-2 transition-transform duration-standard hover:scale-[1.02]"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => openImageModal('/images/genetic-pic-1.jpg')}
                      className="block w-full"
                      aria-label="ขยายรูปพันธุศาสตร์"
                    >
                      <img
                        src="/images/genetic-pic-1.jpg"
                        alt="ภาพพันธุศาสตร์"
                        className="w-full h-32 object-cover rounded-md shadow-card transition-transform duration-standard hover:scale-[1.02]"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-gold-50 p-6 rounded-md border-l-4 border-gold-500">
                <p className="text-body-lg text-neutral-700 leading-relaxed text-center">
                  <strong className="text-neutral-900">การบูรณาการทั้งสองมุมมองจึงทำให้เกิดความเข้าใจที่ลึกซึ้งและรอบด้านต่อปรากฏการณ์แห่งชีวิต</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-narrow px-6 lg:px-16">
          <div className="card p-8 lg:p-12">
            <h2 className="font-serif font-semibold text-h3 text-neutral-900 mb-6">
              อ้างอิง
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-md border-l-4 border-gold-500">
                <p className="text-body text-neutral-700 leading-relaxed mb-2">
                  <strong className="text-neutral-900">1.</strong> พระธรรมปิฎก ป อ. ปยุตฺโต. ตอบคำถามของ รศ. พ.ญ.จินตนา ศิรินาวิน 
                  ลงพิมพ์ใน <em>สารศิริราช</em> ปี ๒๕๓๘ ฉบับที่ ๔๗ หน้า ๙๓๙-๙๔๖
                </p>
              </div>
              <div className="bg-white p-6 rounded-md border-l-4 border-teal-500">
                <p className="text-body text-neutral-700 leading-relaxed mb-2">
                  <strong className="text-neutral-900">2.</strong> ประวิทย์ เฮงพระธานี และพระมหามิตร ฐิตปญฺโญ. 
                  <em>พระพุทธศาสนากับการเกิดของมนุษย์ตามหลักพันธุศาสตร์ (Buddhism and Genetic Human Birth)</em>
                </p>
                <p className="text-body text-neutral-700 leading-relaxed text-sm">
                  มหาวิทยาลัยมหาจุฬาลงกรณราชวิทยาลัย วิทยาเขตขอนแก่น. 
                  <em>Dhammathas Academic Journal</em> Vol. 18 No. 3 (September - December 2018) Special Issue
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Link */}
      <section
        className="section-spacing relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/POleaf.png')" }}
      >
        <div className="absolute inset-0 bg-white/60" aria-hidden="true" />
        <div className="container-narrow px-6 lg:px-16 relative z-10">
          <div className="card p-8 lg:p-12 bg-white/70 backdrop-blur-sm">
            <h2 className="font-serif font-semibold text-h3 text-neutral-900 mb-4">
              "เหนือกรรม" กับ "เหนือพันธุกรรม"
            </h2>
            <div className="bg-neutral-50 rounded-md p-4 mb-4">
              <iframe
                src="https://drive.google.com/file/d/1899AshjdhKlquXLnefvzwwU6hxV0fy5A/preview"
                className="w-full h-24 rounded-md border border-neutral-200"
                allow="autoplay"
                title="พุทธศาสนาและวิทยาศาสตร์ (ไฟล์เสียง)"
              />
            </div>
            <div className="text-body text-neutral-700 leading-relaxed space-y-3">
              <p className="text-center">
                "มโนปุพฺพงฺคมา ธมฺมา" — ใจเป็นใหญ่ ร่างกายพร้อมเปลี่ยนตาม
                <br />
                รหัสพันธุกรรมคือ "วิบากเก่า" แต่สติคือ "กรรมปัจจุบัน" ที่ปิดสวิตช์ยีนร้ายได้
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-neutral-50 rounded-md p-4">
                  <p className="font-semibold text-neutral-900 mb-2">เหนือกรรม(กรรมเก่า--กรรมใหม่)</p>
                  <div className="aspect-video w-full max-w-sm rounded-md overflow-hidden border border-neutral-200">
                    <iframe
                      src="https://www.youtube.com/embed/9TaM3jleoTg?start=1"
                      title="เหนือกรรม (กรรมเก่า--กรรมใหม่)"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-2 text-neutral-700">
                    สรุปสั้นๆ: ตอกย้ำว่ากรรมใหม่คือการกระทำปัจจุบันที่เปลี่ยนทิศทางชีวิตได้
                  </p>
                </div>
                <div className="bg-neutral-50 rounded-md p-4">
                  <p className="font-semibold text-neutral-900 mb-2">เหนือพันธุกรรม (epigenetics)</p>
                  <div className="aspect-video w-full max-w-sm rounded-md overflow-hidden border border-neutral-200 md:ml-auto">
                    <iframe
                      src="https://www.youtube.com/embed/zIuiGUgyKH8"
                      title="เหนือพันธุกรรม (epigenetics)"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-2 text-neutral-700">
                    สรุปสั้นๆ: วิถีชีวิตและสิ่งแวดล้อมสามารถเปิด-ปิดการแสดงออกของยีนได้
                  </p>
                </div>
              </div>
              <p>
                เมื่อวิบากกรรมเก่าถูกถอดรหัสด้วยนวัตกรรม — เทคโนโลยีระดับโลกคือดวงตาที่สอง
                อ่านความลับของกายในระดับเซลล์ เปลี่ยนความแม่นยำ(Precision medicine)เป็นโอกาสเยียวยาที่ยั่งยืน
              </p>
            </div>
            <div className="mt-6 text-center">
              <a href="/genome-technology" className="btn-primary">
                หน้าต่อไป: เทคโนโลยีการแพทย์
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isImageModalOpen && modalImageSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/95 overflow-auto"
          onClick={() => setIsImageModalOpen(false)}
        >
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="fixed top-3 right-3 sm:top-4 sm:right-4 z-20 bg-white rounded-full p-2.5 sm:p-3 hover:bg-neutral-100 transition-colors shadow-lg"
            aria-label="ปิด"
          >
            <X size={22} className="sm:w-6 sm:h-6 text-neutral-900" />
          </button>
          <div
            className="min-h-full flex items-center justify-center p-3 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white p-3 sm:p-4 rounded-md shadow-modal">
              <img
                src={modalImageSrc}
                alt="ขยายรูป"
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
