import { Heart, Dumbbell, Apple, BrainCircuit } from 'lucide-react'

export default function PreventiveCarePage() {
  const pillars = [
    {
      icon: Heart,
      title: 'วิถีชีวิต',
      description: 'การปรับเปลี่ยนพฤติกรรมเสี่ยงและสร้างนิสัยที่ดีต่อสุขภาพ',
      items: [
        'เลิกบุหรี่และหลีกเลี่ยงแอลกอฮอล์',
        'นอนหลับเพียงพอ 7-9 ชั่วโมงต่อคืน',
        'จำกัดการใช้อุปกรณ์อิเล็กทรอนิกส์ก่อนนอน',
        'รักษาความสัมพันธ์ทางสังคมที่ดี',
      ],
      color: 'gold',
    },
    {
      icon: Dumbbell,
      title: 'การออกกำลังกาย',
      description: 'กิจกรรมทางกายอย่างสม่ำเสมอเพื่อสุขภาพที่แข็งแรง',
      items: [
        'แอโรบิกปานกลาง 150-300 นาที/สัปดาห์',
        'เสริมสร้างกล้ามเนื้ออย่างน้อย 2 วัน/สัปดาห์',
        'หลีกเลี่ยงการอยู่กับที่นานเกินไป',
        'เริ่มจากระดับที่ทำได้และเพิ่มค่อยๆ',
      ],
      color: 'teal',
    },
    {
      icon: Apple,
      title: 'โภชนาการ',
      description: 'อาหารที่สมดุลและเหมาะสมเพื่อป้องกันโรคเรื้อรัง',
      items: [
        'ผักและผลไม้อย่างน้อย 400 กรัม/วัน',
        'ไขมันทั้งหมดต่ำกว่า 30% ของพลังงาน',
        'น้ำตาลอิสระต่ำกว่า 10% ของพลังงาน',
        'เกลือต่ำกว่า 5 กรัม/วัน',
      ],
      color: 'navy',
    },
    {
      icon: BrainCircuit,
      title: 'จัดการความเครียด',
      description: 'เทคนิคดูแลจิตใจเพื่อความสมดุลของร่างกายและจิตใจ',
      items: [
        'ฝึกสมาธิและการหายใจอย่างมีสติ',
        'แผ่เมตตาและการให้อภัย',
        'จัดเวลาพักผ่อนและทำกิจกรรมที่ชอบ',
        'ขอความช่วยเหลือเมื่อจำเป็น',
      ],
      color: 'neutral',
    },
  ]

  const ncdStats = [
    { label: 'การเสียชีวิตจาก NCDs ทั่วโลก', value: '43 ล้านคน', sub: 'ปี 2021' },
    {
      label: 'สัดส่วนการเสียชีวิต',
      value: '75%',
      sub: 'จากสาเหตุไม่ใช่โรคระบาด',
    },
    {
      label: 'เสียชีวิตก่อนวัยอันควร',
      value: '18 ล้านคน',
      sub: 'อายุต่ำกว่า 70 ปี',
    },
    {
      label: 'ความดันโลหิตสูง',
      value: '25%',
      sub: 'เชื่อมโยงการเสียชีวิต NCDs',
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
            แนวทางการป้องกันโรค NCD ผ่านการปรับเปลี่ยนวิถีชีวิต
          </p>
        </div>
      </section>

      {/* NCD Burden */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-4">
              ภาระโรค NCDs ทั่วโลก
            </h2>
            <p className="text-body text-neutral-700">
              ข้อมูลจากองค์การอนามัยโลก (WHO) ปี 2021
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ncdStats.map((stat, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-3xl font-serif font-bold text-teal-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500 mb-1">{stat.sub}</div>
                <div className="text-sm text-neutral-700">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 card p-8 border-l-4 border-teal-500">
            <p className="text-body text-neutral-700 leading-relaxed">
              โรคไม่ติดต่อเรื้อรัง (NCDs) เป็นสาเหตุการเสียชีวิตหลักของโลก
              ส่วนใหญ่เกิดจากปัจจัยเสี่ยงที่ปรับเปลี่ยนได้ เช่น
              การสูบบุหรี่ อาหารไม่ดีต่อสุขภาพ การขาดการออกกำลังกาย
              และการใช้แอลกอฮอล์
              การป้องกันเชิงรุกผ่านการปรับเปลี่ยนวิถีชีวิตสามารถลดความเสี่ยงได้อย่างมีนัยสำคัญ
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="section-spacing bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-4">
              สี่เสาหลักของการป้องกัน
            </h2>
            <p className="text-body text-neutral-700">
              การผสมผสานทั้งสี่ด้านเพื่อสุขภาพที่ยั่งยืน
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              const colorMap = {
                gold: 'text-gold-600 bg-gold-50',
                teal: 'text-teal-500 bg-teal-50',
                navy: 'text-navy-500 bg-navy-50',
                neutral: 'text-neutral-700 bg-neutral-100',
              }
              const colors = colorMap[pillar.color as keyof typeof colorMap]

              return (
                <div key={index} className="card-feature p-8">
                  <div className="flex items-start mb-6">
                    <div className={`w-14 h-14 rounded-full ${colors} flex items-center justify-center mr-4 flex-shrink-0`}>
                      <Icon size={28} className={colors.split(' ')[0]} />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-neutral-600">{pillar.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-body text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
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
          <p className="text-body-lg text-neutral-700 leading-relaxed mb-8">
            การเปลี่ยนแปลงเล็กๆ น้อยๆ ในชีวิตประจำวันสามารถสร้างผลลัพธ์ที่ยิ่งใหญ่ต่อสุขภาพในระยะยาว
            เริ่มจากสิ่งที่ทำได้และค่อยๆ เพิ่มขึ้น
          </p>
          <div className="inline-block bg-white p-8 rounded-md shadow-card">
            <p className="text-2xl font-serif text-teal-700 italic">
              "การทำอะไรก็ได้ดีกว่าไม่ทำเลย"
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
