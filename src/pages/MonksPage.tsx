import { BookOpen, Brain, Scale, Lightbulb, AlertCircle } from 'lucide-react'

export default function MonksPage() {
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
            src="/images/monks-hero.jpg" 
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

      {/* Five Aggregates */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-narrow px-6 lg:px-16">
          <div className="card p-8 lg:p-12">
            <h2 className="font-serif font-semibold text-h3 text-neutral-900 mb-6">
              องค์ประกอบของชีวิตในพุทธศาสนา: ขันธ์ 5
            </h2>
            <p className="text-body text-neutral-700 leading-relaxed mb-6">
              ตามหลักพระพุทธศาสนา การเกิดของสิ่งมีชีวิตเป็นผลจากการรวมกันของส่วนประกอบต่างๆ ที่อิงอาศัยซึ่งกันและกัน 
              ตามหลักอนัตตา (ไม่มีตัวตน) ประกอบด้วยขันธ์ 5:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-md">
                <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-3">
                  รูปขันธ์
                </h3>
                <p className="text-body text-neutral-700">
                  ส่วนที่เป็นรูปธรรม ร่างกายและอวัยวะต่างๆ
                </p>
              </div>
              <div className="bg-white p-6 rounded-md">
                <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-3">
                  เวทนาขันธ์
                </h3>
                <p className="text-body text-neutral-700">
                  ความรู้สึก สุข ทุกข์ หรือไม่สุขไม่ทุกข์
                </p>
              </div>
              <div className="bg-white p-6 rounded-md">
                <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-3">
                  สัญญาขันธ์
                </h3>
                <p className="text-body text-neutral-700">
                  ความจำได้หมายรู้ การรับรู้และจดจำ
                </p>
              </div>
              <div className="bg-white p-6 rounded-md">
                <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-3">
                  สังขารขันธ์
                </h3>
                <p className="text-body text-neutral-700">
                  ความคิดปรุงแต่ง การคิดนึกและจงใจ
                </p>
              </div>
              <div className="bg-white p-6 rounded-md">
                <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-3">
                  วิญญาณขันธ์
                </h3>
                <p className="text-body text-neutral-700">
                  ความรู้แจ้ง การรับรู้ทางประสาทสัมผัส
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buddha's Wisdom and Science */}
      <section className="section-spacing bg-white">
        <div className="container-narrow px-6 lg:px-16">
          <div className="card p-8 lg:p-12">
            <h2 className="font-serif font-semibold text-h3 text-neutral-900 mb-6">
              ปัญญาที่ได้จากการตรัสรู้กับวิทยาศาสตร์
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-body text-neutral-700 leading-relaxed mb-4">
                  ปัญญาที่ได้จากการตรัสรู้ทำให้พระพุทธเจ้าทรงเป็นสัพพัญญูคือรอบรู้สรรพสิ่งซึ่งเป็นความจริงในธรรมชาติ 
                  พระองค์ทรงนำสัจธรรมความจริงที่ค้นพบมาประกาศเปิดเผยเพียงบางส่วนเท่านั้น 
                  พระพุทธเจ้าไม่ได้สอนทุกเรื่องที่พระองค์ตรัสรู้ แต่สอนเฉพาะเรื่องที่สำคัญและจำเป็นต่อการดับทุกข์ของสาวก
                </p>
                <p className="text-body text-neutral-700 leading-relaxed mb-4">
                  พระพุทธเจ้าทรงอธิบายว่า เรื่องที่พระองค์ตรัสรู้มีมากมายมหาศาลเหมือนกับใบไม้ในป่าทั้งป่า 
                  แต่เรื่องที่ทรงนำมาสั่งสอนมีน้อยนิดเหมือนใบไม้ในกำมือหนึ่ง 
                  เราจึงเรียกเรื่องที่พระพุทธเจ้าทรงนำมาสั่งสอนว่าธรรมกำมือเดียว 
                  ธรรมที่พระพุทธเจ้าไม่ได้สอนไว้นั้นย่อมรวมถึงสัจธรรมความจริงในธรรมชาติที่วิทยาศาสตร์ประกาศเปิดเผยต่อมานั่นเอง
                </p>
              </div>

              <div className="bg-gold-50 p-6 rounded-md border-l-4 border-gold-500">
                <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                  พุทธพจน์
                </h3>
                <p className="text-body text-neutral-700 leading-relaxed mb-3 italic">
                  "อุปปาทา วา ภิกขเว ตถาคตาน อนุปาทา วา"
                </p>
                <p className="text-body text-neutral-700 leading-relaxed">
                  แปลความว่า "ภิกษุทั้งหลาย พระตถาคตเจ้าทั้งหลายจะอุบัติขึ้นหรือไม่ก็ตาม 
                  ธาตุนั้นคือ ธรรมฐิติ (ความดำรงอยู่ตามธรรมชาติ) ธรรมนิยาม (กฎธรรมชาติ) 
                  อิทัปปัจจยตา (ภาวะที่สรรพสิ่งเกิดดับตามเหตุตามปัจจัย) ก็ยังมีอยู่ 
                  พระตถาคตเจ้าย่อมตรัสรู้ทั่วถึงซึ่งธาตุอันนั้นแล้วบอก แสดง บัญญัติ แต่งตั้ง เปิดเผย จำแนก ทำให้เข้าใจง่าย"
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-md border-l-4 border-teal-500">
                <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                  สรุปใจความสำคัญ
                </h3>
                <p className="text-body text-neutral-700 leading-relaxed">
                  สัจธรรมความจริงมีอยู่ตลอดกาล เพียงรอเวลาให้นักศาสนาหรือนักวิทยาศาสตร์ก็ได้มาค้นพบ 
                  นี่คือท่าทีแบบใจกว้างที่ทำให้พระพุทธศาสนาไม่เคยทะเลาะหรือขัดแย้งกับวิทยาศาสตร์
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Noble Truths and Scientific Method */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-narrow px-6 lg:px-16">
          <div className="card p-8 lg:p-12">
            <h2 className="font-serif font-semibold text-h3 text-neutral-900 mb-6">
              วิธีการแก้ปัญหาแบบอริยสัจกับวิธีการทางวิทยาศาสตร์
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-body text-neutral-700 leading-relaxed mb-4">
                  วิธีการแก้ปัญหาแบบอริยสัจในพระพุทธศาสนาและวิธีการทางวิทยาศาสตร์จัดเป็นวิธีการแห่งปัญญาเหมือนกัน 
                  เราสามารถเทียบเคียงขั้นตอนในวิธีการทั้งสองได้ดังนี้:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-md border-l-4 border-teal-500">
                    <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                      อริยสัจ 4
                    </h3>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li className="text-body text-neutral-700">
                        <strong>ทุกข์</strong> - การกำหนดรู้ทุกข์
                      </li>
                      <li className="text-body text-neutral-700">
                        <strong>สมุทัย</strong> - การค้นหาสมุทัย
                      </li>
                      <li className="text-body text-neutral-700">
                        <strong>นิโรธ</strong> - การเก็งนิโรธ
                      </li>
                      <li className="text-body text-neutral-700">
                        <strong>มรรค</strong> - การดำเนินตามมรรค
                      </li>
                    </ol>
                  </div>
                  <div className="bg-white p-6 rounded-md border-l-4 border-navy-500">
                    <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                      วิธีการทางวิทยาศาสตร์
                    </h3>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li className="text-body text-neutral-700">
                        <strong>การกำหนดขอบเขตของปัญหา</strong>
                      </li>
                      <li className="text-body text-neutral-700">
                        <strong>การตั้งสมมติฐาน</strong>
                      </li>
                      <li className="text-body text-neutral-700">
                        <strong>การคาดคะเน</strong>
                      </li>
                      <li className="text-body text-neutral-700">
                        <strong>การพิสูจน์ทดลอง</strong>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-gold-50 p-6 rounded-md border-l-4 border-gold-500">
                <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                  สรุปใจความสำคัญ
                </h3>
                <p className="text-body text-neutral-700 leading-relaxed mb-4">
                  วิธีการแสวงหาความจริงในพระพุทธศาสนาเป็นวิธีการแห่งปัญญาเพราะไม่ส่งเสริมให้เชื่ออย่างงมงาย 
                  พระพุทธศาสนาสอนให้ตรวจสอบข้อสมมติฐานอย่างรอบคอบก่อนที่จะปลงใจเชื่ออะไรลงไป
                </p>
                <p className="text-body text-neutral-700 leading-relaxed mb-4">
                  ดังข้อแนะนำ ๑๐ ประการที่พระพุทธเจ้าประทานไว้ในกาลามสูตรว่า
                </p>
              </div>

              <div className="bg-white p-6 rounded-md border-l-4 border-teal-500">
                <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-6">
                  กาลามสูตร 10 ประการ
                </h3>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="text-body text-neutral-700">
                    อย่าด่วนเชื่อโดยฟังตามกันมา <span className="text-sm text-neutral-500 italic">(มา อนุสสเวน)</span>
                  </li>
                  <li className="text-body text-neutral-700">
                    อย่าด่วนเชื่อโดยการถือสืบๆ กันมาเป็นประเพณี <span className="text-sm text-neutral-500 italic">(มา ปรมปราย)</span>
                  </li>
                  <li className="text-body text-neutral-700">
                    อย่าด่วนเชื่อเพราะข่าวลือ <span className="text-sm text-neutral-500 italic">(มา อิติกิราย)</span>
                  </li>
                  <li className="text-body text-neutral-700">
                    อย่าด่วนเชื่อเพราะอ้างตำรา <span className="text-sm text-neutral-500 italic">(มา ปิฎกสมุปทาเนน)</span>
                  </li>
                  <li className="text-body text-neutral-700">
                    อย่าด่วนเชื่อเพราะตรรกะ <span className="text-sm text-neutral-500 italic">(มา ตกุกเหตุ)</span>
                  </li>
                  <li className="text-body text-neutral-700">
                    อย่าด่วนเชื่อเพราะการคาดคะเน <span className="text-sm text-neutral-500 italic">(มา นยเหตุ)</span>
                  </li>
                  <li className="text-body text-neutral-700">
                    อย่าด่วนเชื่อเพราะอาการที่ปรากฏภายนอก <span className="text-sm text-neutral-500 italic">(มา อาการปริวิต เกน)</span>
                  </li>
                  <li className="text-body text-neutral-700">
                    อย่าด่วนเชื่อเพราะเข้ากันได้กับทฤษฎีของเรา <span className="text-sm text-neutral-500 italic">(มา ทิฏฐินิชฌานกขนติยา)</span>
                  </li>
                  <li className="text-body text-neutral-700">
                    อย่าด่วนเชื่อเพราะมีลักษณะน่าเชื่อถือ <span className="text-sm text-neutral-500 italic">(มา ภพพรูปตา)</span>
                  </li>
                  <li className="text-body text-neutral-700">
                    อย่าด่วนเชื่อเพราะคิดว่าผู้พูดนั้นเป็นครูของเรา <span className="text-sm text-neutral-500 italic">(มา สมโณ โน ครูติ)</span>
                  </li>
                </ol>
              </div>
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

      {/* Non-negligence */}
      <section className="section-spacing-large bg-gold-50">
        <div className="container-narrow px-6 lg:px-16">
          <div className="text-center">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-6">
              ความไม่ประมาท
            </h2>
            <p className="text-body-lg text-neutral-700 leading-relaxed mb-8">
              หลักความไม่ประมาทนี้ ถือว่าเป็นหัวใจพุทธศาสนาอันหนึ่ง 
              ธรรมทั้งหมดนั้นเหมือนกับอยู่ภายใต้ครอบคลุมของความไม่ประมาท 
              จะมีประโยชน์ขึ้นมาก็เพราะไม่ประมาท จะได้ใช้มันก็เพราะไม่ประมาท
            </p>
            <div className="bg-white p-8 rounded-md shadow-card max-w-3xl mx-auto">
              <p className="text-body text-neutral-700 leading-relaxed mb-4">
                <strong className="text-neutral-900">หลักอนิจจัง</strong> พระพุทธเจ้าจะสอนพร้อมกับความไม่ประมาท:
              </p>
              <div className="bg-neutral-50 p-6 rounded-md mb-4">
                <p className="font-serif text-lg text-neutral-900 mb-2 italic">
                  "วยธัมมา สังขารา"
                </p>
                <p className="text-body text-neutral-700 mb-4">
                  สังขารทั้งหลายมีความเสื่อมสลายไปเป็นธรรมดา
                </p>
                <p className="font-serif text-lg text-neutral-900 mb-2 italic">
                  "อัปปะมาเทนะ สัมปาเทถะ"
                </p>
                <p className="text-body text-neutral-700">
                  เพราะฉะนั้นจงยังความไม่ประมาทให้ถึงพร้อม
                </p>
              </div>
              <p className="text-body text-neutral-700 leading-relaxed">
                เพราะฉะนั้นจะมัวนิ่งนอนใจอยู่ จะมัวปล่อยปละละเลยไม่ได้ 
                มีอะไรควรทำต้องรีบทำ ต้องรีบแก้ไขปรับปรุง
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Epigenetics and Buddhism */}
      <section className="section-spacing bg-white">
        <div className="container-narrow px-6 lg:px-16">
          <div className="card p-8 lg:p-12">
            <h2 className="font-serif font-semibold text-h3 text-neutral-900 mb-6">
              อิทธิพลของความเชื่อต่อชีววิทยา: Epigenetics กับหลักพุทธศาสนา
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-body text-neutral-700 leading-relaxed mb-4">
                  การที่เชื่อมโยงแนวคิดทางชีววิทยา (โดยเฉพาะด้านพันธุศาสตร์เหนือยีน หรือ Epigenetics) 
                  กับหลักปรัชญาพุทธศาสนา เพื่อแสดงให้เห็นว่าระบบความเชื่อและสภาวะจิตใจมีอิทธิพลอย่างมากต่อสุขภาพกายและสุขภาพจิต
                </p>
              </div>

              <div>
                <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                  การเชื่อมโยงกับหลักพุทธศาสนา
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-md border-l-4 border-gold-500">
                    <h4 className="font-serif font-semibold text-lg text-neutral-900 mb-2">
                      อัปปนาสมาธิ/สติ (Mindfulness) และการทำสมาธิ (Meditation)
                    </h4>
                    <p className="text-body text-neutral-700 leading-relaxed">
                      การฝึกสติถูกเน้นว่าเป็นกุญแจสำคัญที่ช่วยให้บุคคลสามารถควบคุมอารมณ์ ลดความเครียด และส่งเสริมความแข็งแกร่งทางจิตใจ 
                      ซึ่งนำไปสู่ผลลัพธ์ด้านสุขภาพที่ดีขึ้น
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-md border-l-4 border-navy-500">
                    <h4 className="font-serif font-semibold text-lg text-neutral-900 mb-2">
                      อนัตตา (Anattā) และอนิจจตา (Aniccata)
                    </h4>
                    <p className="text-body text-neutral-700 leading-relaxed">
                      หลักคำสอนเรื่อง "อนัตตา" (ความไม่ใช่ตัวตนที่ถาวร) และ "อนิจจตา" (ความไม่เที่ยงแท้) 
                      สอดคล้องกับแนวคิดทาง Epigenetics ที่ว่าอัตลักษณ์และสุขภาพสามารถปรับเปลี่ยนได้ 
                      และไม่ได้ถูกกำหนดตายตัวโดยพันธุกรรม
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-md border-l-4 border-teal-500">
                    <h4 className="font-serif font-semibold text-lg text-neutral-900 mb-2">
                      ปฏิจจสมุปบาท (Interdependent Origination)
                    </h4>
                    <p className="text-body text-neutral-700 leading-relaxed">
                      แนวคิดที่ว่าสรรพสิ่งล้วนมีความสัมพันธ์และพึ่งพาอาศัยกัน (Interconnectedness) 
                      สะท้อนถึงมุมมองแบบองค์รวมที่เห็นว่าร่างกายและเซลล์ทำงานเป็นระบบที่ปรับตัวเข้ากับสิ่งแวดล้อมและความเชื่อของสิ่งมีชีวิตทั้งหมด
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gold-50 p-6 rounded-md border-l-4 border-gold-500">
                <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                  การรวมวิทยาศาสตร์และจิตวิญญาณ
                </h3>
                <p className="text-body text-neutral-700 leading-relaxed mb-4">
                  บทความนี้ผสานองค์ความรู้ด้าน Psychoneuroimmunology (สาขาที่ศึกษาความเชื่อมโยงระหว่างจิตใจ ระบบประสาท และระบบภูมิคุ้มกัน) 
                  เข้ากับหลักปฏิบัติทางพุทธศาสนา เพื่อตอกย้ำว่าสภาวะจิตใจมีผลกระทบโดยตรงต่อการทำงานของระบบภูมิคุ้มกันและสุขภาพกาย
                </p>
                <p className="text-body text-neutral-700 leading-relaxed">
                  บทสรุปส่งเสริมให้เกิดการมองสุขภาพแบบองค์รวม (Holistic Model) ที่รวมมิติทางจิตใจ ร่างกาย และจิตวิญญาณเข้าด้วยกัน 
                  โดยเน้นว่าการเปลี่ยนแปลงความเชื่ออย่างตั้งใจสามารถส่งเสริมความยืดหยุ่นและการเยียวยาได้
                </p>
              </div>

              <div className="bg-neutral-50 p-4 rounded-md">
                <p className="text-sm text-neutral-600 italic">
                  อ้างอิง: Ruangsan, N. (2025). Biology of belief in Buddhist perspectives. 
                  <em>Journal of Exploration in Interdisciplinary Methodologies (JEIM)</em>, 2(1), 1–13
                </p>
              </div>
            </div>
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
                </div>
                <div className="bg-navy-50 p-6 rounded-md">
                  <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                    วิทยาศาสตร์
                  </h3>
                  <p className="text-body text-neutral-700 leading-relaxed">
                    ให้คำตอบในมิติของ <strong>"อย่างไร"</strong> (How) ผ่านกระบวนการทางชีววิทยาและพันธุศาสตร์
                  </p>
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

    </div>
  )
}
