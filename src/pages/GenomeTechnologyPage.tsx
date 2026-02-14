import { ExternalLink, BookOpen, X } from 'lucide-react'
import { useState } from 'react'

export default function GenomeTechnologyPage() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [modalImageSrc, setModalImageSrc] = useState('/multiomic.png')

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
            Multi-omics และการทำนายโรค NCD ด้วย AI และ Machine Learning
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="section-spacing bg-white">
        <div className="container-narrow px-6 lg:px-16">
          <div className="card p-8 lg:p-12 border-l-4 border-navy-500">
            <h2 className="font-serif font-semibold text-h3 text-neutral-900 mb-4">
              เทคโนโลยี Multi-omics: การตรวจสุขภาพเชิงลึกเพื่อป้องกันโรค NCDs
            </h2>
            <p className="text-body text-neutral-700 leading-relaxed mb-4">
              <strong>หลักการของเทคโนโลยี Multi-omics</strong> เปรียบเสมือน "การตรวจสอบอาคารแห่งชีวิต" ในสองมิติ
              เพื่อทำความเข้าใจธาตุขันธ์ร่างกายของเราในระดับลึก โดยแบ่งการตรวจออกเป็น 2 ส่วนสำคัญ คือ
            </p>
            <ol className="text-body text-neutral-700 leading-relaxed mb-4 space-y-4 ml-6 list-decimal">
              <li>
                <strong>การตรวจสอบ "พิมพ์เขียวดั้งเดิม" ที่ได้รับมาแต่กำเนิด (Genomics/Static Risk)</strong>
                <p className="mt-2">
                  คือการตรวจรหัสพันธุกรรมเพื่อทราบว่าแผนผังของอาคารร่างกายที่เราได้รับมานี้มีโครงสร้างอย่างไร
                  มีจุดแข็งหรือจุดที่อาจมีความเปราะบางตรงไหนบ้าง เปรียบเหมือนการดูพิมพ์เขียวต้นฉบับของอาคารว่ามีฐานรากและเสาเข็มแข็งแรงเพียงใด
                </p>
                <div className="mt-3 overflow-hidden rounded-lg">
                  <img src="/images/MAP.png" alt="พิมพ์เขียวดั้งเดิม" className="w-full h-40 object-cover" />
                </div>
                <p className="mt-3 font-semibold">วิธีการตรวจ ได้แก่:</p>
                <ul className="mt-2 space-y-1 ml-6 list-disc">
                  <li>WGS (Whole Genome Sequencing): อ่านรหัสพันธุกรรมทั้งชุด</li>
                  <li>WES (Whole Exome Sequencing): อ่านเฉพาะส่วนที่สร้างโปรตีน</li>
                  <li>PCR: ตรวจยีนหรือตำแหน่งเฉพาะจุด</li>
                </ul>
                <p className="mt-3 font-semibold">การแปลผล มี 2 แบบ:</p>
                <div className="mt-3 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-neutral-200 p-4 bg-neutral-50">
                    <h4 className="font-semibold text-neutral-900 mb-2">Monogenic (ยีนเดี่ยว)</h4>
                    <p className="text-sm text-neutral-700 mb-3">
                      ตรวจว่ายีนตัวใดตัวหนึ่งมีความผิดปกติชัดเจนหรือไม่ ซึ่งอาจส่งผลให้มีความเสี่ยงต่อโรคบางชนิดสูงกว่าคนทั่วไป
                    </p>
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/images/monogenic.png"
                        alt="Monogenic"
                        className="w-full h-36 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => {
                          setModalImageSrc('/images/monogenic.png')
                          setIsImageModalOpen(true)
                        }}
                      />
                    </div>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-4 bg-neutral-50">
                    <h4 className="font-semibold text-neutral-900 mb-2">Polygenic (กลุ่มยีน)</h4>
                    <p className="text-sm text-neutral-700 mb-3">
                      นำข้อมูลจากยีนหลายตัวมาคำนวณร่วมกัน เพื่อประเมินความเสี่ยงสะสมต่อโรคเรื้อรัง เช่น เบาหวาน ความดันโลหิตสูง
                    </p>
                    <div className="grid gap-3">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src="/images/polygenic.png"
                          alt="Polygenic"
                          className="w-full h-36 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => {
                            setModalImageSrc('/images/polygenic.png')
                            setIsImageModalOpen(true)
                          }}
                        />
                      </div>
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src="/images/PRS.png"
                          alt="Polygenic risk score"
                          className="w-full h-36 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => {
                            setModalImageSrc('/images/PRS.png')
                            setIsImageModalOpen(true)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>การตรวจสอบ "สภาพอาคารปัจจุบัน" จากการใช้งาน (Biomarkers/Dynamic Risk)</strong>
                <p className="mt-2">
                  คือการตรวจวัดสารต่างๆ ในร่างกาย เพื่อดูว่าอาคารร่างกายที่เราอาศัยอยู่นี้ จากการใช้งานมาตลอด
                  (การฉันภัตตาหาร การใช้ชีวิต) ปัจจุบันมีรอยร้าวตรงไหนบ้างหรือไม่ มีสนิมเกาะที่โครงสร้างหรือเปล่า ท่อน้ำอุดตันหรือไม่
                </p>
                <div className="mt-3 overflow-hidden rounded-lg">
                  <img src="/images/crack-inspection.jpg" alt="สภาพอาคารปัจจุบัน" className="w-full h-40 object-cover" />
                </div>
                <p className="mt-3 font-semibold">ตัวอย่างการตรวจสารบ่งชี้ เช่น:</p>
                <ul className="mt-2 space-y-1 ml-6 list-disc">
                  <li>TMAO: เปรียบเสมือนการตรวจดูท่อน้ำ-สัญญาณความเสี่ยงต่อโรคหัวใจและหลอดเลือด</li>
                  <li>pTau217: เปรียบเสมือนการตรวจระบบไฟฟ้า-สารที่เกี่ยวข้องกับภาวะสมองเสื่อม</li>
                  <li>DNA methylation จากอุจจาระ: เปรียบเสมือนการตรวจผนัง-ช่วยคัดกรองความเสี่ยงมะเร็งลำไส้ในระยะเริ่มต้น</li>
                </ul>
              </li>
            </ol>
            <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-3">
              ประโยชน์ของการนำข้อมูลทั้งสองมิติมาใช้ร่วมกัน
            </h3>
            <p className="text-body text-neutral-700 leading-relaxed mb-3">
              เมื่อนำข้อมูลทั้งจาก "พิมพ์เขียวดั้งเดิม" และ "สภาพอาคารปัจจุบัน" มาพิจารณาร่วมกัน ก็เหมือนกับการมีแผนผังต้นฉบับ
              และรายงานการตรวจสอบสภาพอาคารปัจจุบันครบถ้วน ทำให้สามารถ:
            </p>
            <ul className="text-body text-neutral-700 leading-relaxed space-y-2 ml-6 list-disc">
              <li>เข้าใจจุดอ่อนโครงสร้างของแต่ละบุคคลได้ชัดเจนยิ่งขึ้น</li>
              <li>ซ่อมแซมและบำรุงรักษาอาคารได้ตรงจุดก่อนที่จะพังทลาย (ป้องกันโรค NCDs)</li>
              <li>วางแผนดูแลบำรุงรักษาที่เหมาะสมเฉพาะตัวอาคาร</li>
              <li>ปรับเปลี่ยนการใช้งานให้เหมาะสมกับความทนทานของอาคาร</li>
            </ul>
            <p className="text-body text-neutral-700 leading-relaxed mt-4">
              เทคโนโลยีนี้จึงเป็นเครื่องมือสำคัญในการดูแลสุขภาพเชิงป้องกัน และการดูแลธาตุขันธ์ให้สมดุล
            </p>
            <div className="mt-6">
              <p className="text-body text-neutral-700 leading-relaxed mb-3">
                อย่างไรก็ตามต้องคำนึงถึงข้อจำกัดของข้อมูล และใช้เป็นเพียงข้อมูลสนับสนุนแผนการป้องกันและรักษาต่อไป
              </p>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/images/limitation.png"
                  alt="Limitation"
                  className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => {
                    setModalImageSrc('/images/limitation.png')
                    setIsImageModalOpen(true)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-omics Infographic */}
      <section className="section-spacing bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-4">
              เทคโนโลยี Multi-omics สำหรับการดูแลสุขภาพเชิงรุกของพระสงฆ์ไทย
            </h2>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="card p-4 sm:p-6 lg:p-8">
              <img 
                src="/multiomic.png" 
                alt="Multi-omics technology: Proactive health care for Thai monks" 
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => {
                  setModalImageSrc('/multiomic.png')
                  setIsImageModalOpen(true)
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biomarker Testing Details */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-4">
              การตรวจ Biomarker สำคัญ
            </h2>
            <p className="text-body text-neutral-700 max-w-3xl mx-auto">
              ตัวอย่าง ตัวบ่งชี้ทางชีวภาพสำหรับการประเมินความเสี่ยงโรคและการดูแลสุขภาพเชิงรุก
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* pTau217 */}
            <div className="card p-8 border-l-4 border-teal-500">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/images/Ptau217.png"
                  alt="pTau217 biomarker"
                  className="w-full h-32 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => {
                    setModalImageSrc('/images/Ptau217.png')
                    setIsImageModalOpen(true)
                  }}
                />
              </div>
              <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                การตรวจ pTau217
              </h3>
              <p className="text-body text-neutral-700 leading-relaxed mb-4">
                ตัวบ่งชี้โรคอัลไซเมอร์และความเสื่อมของสมอง
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                การตรวจวัดระดับโปรตีน pTau217 ในเลือดหรือน้ำไขสันหลังช่วยในการวินิจฉัยโรคอัลไซเมอร์
                และประเมินความเสี่ยงต่อการเสื่อมของสมองได้ตั้งแต่ระยะเริ่มต้น
              </p>
            </div>

            {/* TMAO */}
            <div className="card p-8 border-l-4 border-red-500">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/images/TMAO.png"
                  alt="TMAO biomarker"
                  className="w-full h-32 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => {
                    setModalImageSrc('/images/TMAO.png')
                    setIsImageModalOpen(true)
                  }}
                />
              </div>
              <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                การตรวจ TMAO
              </h3>
              <p className="text-body text-neutral-700 leading-relaxed mb-4">
                ตัวบ่งชี้โรคหัวใจและหลอดเลือด
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                การตรวจวัดระดับ TMAO (Trimethylamine N-oxide) ในเลือดช่วยประเมินความเสี่ยงต่อโรคหัวใจ
                และหลอดเลือด โดย TMAO เกิดจากการย่อยสลายสารอาหารโดยจุลินทรีย์ในลำไส้
              </p>
            </div>

            {/* DNA Methylation */}
            <div className="card p-8 border-l-4 border-navy-500">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/images/DNAMethylation.jpg"
                  alt="DNA Methylation screening"
                  className="w-full h-32 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => {
                    setModalImageSrc('/images/DNAMethylation.jpg')
                    setIsImageModalOpen(true)
                  }}
                />
              </div>
              <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                การตรวจคัดกรองมะเร็งลำไส้ด้วย DNA Methylation
              </h3>
              <p className="text-body text-neutral-700 leading-relaxed mb-4">
                การตรวจหาการเปลี่ยนแปลงของ DNA Methylation
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                การตรวจคัดกรองมะเร็งลำไส้โดยการวิเคราะห์รูปแบบ DNA Methylation ในตัวอย่างอุจจาระ
                ช่วยในการตรวจพบมะเร็งลำไส้ระยะเริ่มต้นได้อย่างแม่นยำและไม่รุกราน
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WGS Technology Explanation */}
      <section className="section-spacing bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 lg:p-12 border-l-4 border-navy-500">
              <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-6">
                WGS (Whole Genome Sequencing)
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                    WGS คืออะไร?
                  </h3>
                  <p className="text-body text-neutral-700 leading-relaxed mb-4">
                    <strong>Whole Genome Sequencing (WGS)</strong> หรือ <strong>การจัดลำดับจีโนมทั้งหมด</strong> 
                    เป็นเทคโนโลยีการจัดลำดับดีเอ็นเอที่ครอบคลุมทั้งจีโนมของสิ่งมีชีวิต 
                    รวมถึงบริเวณที่เข้ารหัสโปรตีน (coding regions) และบริเวณที่ไม่เข้ารหัสโปรตีน (non-coding regions)
                  </p>
                  <figure className="rounded-lg overflow-hidden border border-neutral-200 shadow-sm max-w-md my-6">
                    <img
                      src="/images/genome_Quiz.png"
                      alt="Genome Quiz - แบบทดสอบความรู้จีโนม"
                      className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition"
                      onClick={() => { setModalImageSrc('/images/genome_Quiz.png'); setIsImageModalOpen(true); }}
                      onKeyDown={(e) => e.key === 'Enter' && (setModalImageSrc('/images/genome_Quiz.png'), setIsImageModalOpen(true))}
                      role="button"
                      tabIndex={0}
                    />
                  </figure>
                  <p className="text-body text-neutral-700 leading-relaxed mb-4">
                    เทคโนโลยีนี้ช่วยให้เราสามารถอ่านและวิเคราะห์ข้อมูลพันธุกรรมทั้งหมดของบุคคลได้อย่างครบถ้วน 
                    ซึ่งครอบคลุมประมาณ 3 พันล้านคู่เบสในมนุษย์
                  </p>
                  <figure className="rounded-lg overflow-hidden border border-neutral-200 shadow-sm max-w-md my-6">
                    <img
                      src="/images/genome_search.png"
                      alt="Genome Search - การค้นหาข้อมูลจีโนม"
                      className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition"
                      onClick={() => { setModalImageSrc('/images/genome_search.png'); setIsImageModalOpen(true); }}
                      onKeyDown={(e) => e.key === 'Enter' && (setModalImageSrc('/images/genome_search.png'), setIsImageModalOpen(true))}
                      role="button"
                      tabIndex={0}
                    />
                  </figure>
                </div>
                
                <div className="bg-navy-50 p-6 rounded-md">
                  <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                    ข้อดีของ WGS
                  </h3>
                  <ul className="space-y-3 text-body text-neutral-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-navy-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>ตรวจจับความแปรปรวนทางพันธุกรรมได้ครบถ้วน รวมถึง structural variants, copy number variations (CNVs), และ inversions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-navy-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>ครอบคลุมทั้งบริเวณที่เข้ารหัสและไม่เข้ารหัส ซึ่งอาจมีข้อมูลสำคัญเกี่ยวกับการควบคุมยีน</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-navy-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>ให้ข้อมูลที่สมบูรณ์ที่สุดสำหรับการวิเคราะห์ทางพันธุกรรมและการแพทย์แม่นยำ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-navy-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>สามารถใช้ในการค้นพบยีนใหม่ที่เกี่ยวข้องกับโรคและการตอบสนองต่อยา</span>
                    </li>
                  </ul>
                </div>

                <div className="relative overflow-hidden rounded-md p-6 min-h-[280px]">
                  <div
                    className="absolute inset-0 z-0 bg-center bg-no-repeat bg-neutral-100"
                    style={{
                      backgroundImage: "url('/images/GWAS_plot.png')",
                      backgroundSize: "contain",
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-0 z-[1] bg-white/80" aria-hidden />
                  <div className="relative z-10">
                    <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                      การประยุกต์ใช้
                    </h3>
                    <p className="text-body text-neutral-700 leading-relaxed mb-4">
                      WGS ถูกนำมาใช้ในการแพทย์แม่นยำเพื่อ:
                    </p>
                    <ul className="space-y-2 text-body text-neutral-700 ml-6 mb-4">
                      <li className="list-disc">การวินิจฉัยโรคหายากและโรคพันธุกรรม</li>
                      <li className="list-disc">การทำนายความเสี่ยงต่อโรคไม่ติดต่อเรื้อรัง (NCDs)</li>
                      <li className="list-disc">การเลือกยาและปรับขนาดยาตามพันธุกรรม (Pharmacogenomics)</li>
                      <li className="list-disc">การตรวจหามะเร็งและการติดตามการรักษา</li>
                      <li className="list-disc">การวิจัยและค้นพบยีนใหม่ที่เกี่ยวข้องกับโรค</li>
                    </ul>
                    <p className="text-body text-neutral-700 leading-relaxed">
                      ข้อมูลจาก WGS มีปริมาณมหาศาล การจะอ่านและวิเคราะห์ด้วยคนอย่างเดียวจึงไม่เพียงพอ ปัจจุบันจึงนำ <strong>ปัญญาประดิษฐ์ (AI)</strong> และ <strong>Machine Learning</strong> มาช่วย ทำให้สามารถคัดกรองความผิดปกติทางพันธุกรรม แปลผล และทำนายความเสี่ยงของโรคได้ เร็วขึ้นและแม่นยำขึ้น กว่าเดิมมาก จึงกลายเป็นเครื่องมือสำคัญของการแพทย์แม่นยำในยุคปัจจุบัน
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
              วิดีโอความรู้เกี่ยวกับเทคโนโลยี Multi-omics และการแพทย์ยุคใหม่
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

            <div className="card-feature p-6">
              <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                จีโนมิกส์ไทยแลนด์ สิทธิสุขภาพคนไทยและการแพทย์แห่งอนาคต
              </h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/Rci2Vecpn8M"
                  title="จีโนมิกส์ไทยแลนด์ สิทธิสุขภาพคนไทยและการแพทย์แห่งอนาคต"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                จีโนมิกส์ไทยแลนด์ สิทธิสุขภาพคนไทยและการแพทย์แห่งอนาคต
              </p>
            </div>

            <div className="card-feature p-6">
              <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                รู้จัก 'CAR-T Cell' ความหวังใหม่รักษาโรคมะเร็ง
              </h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/SEogSo-PT54"
                  title="รู้จัก 'CAR-T Cell' ความหวังใหม่รักษาโรคมะเร็ง"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                รู้จัก 'CAR-T Cell' ความหวังใหม่รักษาโรคมะเร็ง
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
      <section
        className="section-spacing-large relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pharmabuild.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/80" aria-hidden="true" />
        <div className="container-narrow px-6 lg:px-16 text-center relative z-10">
          <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-6">
            Precision & Personalized Medicine
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
          <div className="mt-10 text-body-lg text-neutral-700 leading-relaxed space-y-4 text-left max-w-4xl mx-auto">
            <p>
              อินทริยปโรปริยัตตญาณ ความรู้ในการหยั่งรู้ความพร้อมของแต่ละบุคคล
              พระพุทธเจ้าจึงทรงแสดงธรรมแตกต่างกันตามผู้ฟัง
            </p>
            <p>
              สอดคล้องกับ Personalized Medicine ยอมรับว่าผู้ป่วยแต่ละรายมีพันธุกรรมและการตอบสนองต่อยาที่แตกต่างกัน
              การดูแลสุขภาพจึงต้องปรับให้เหมาะกับแต่ละบุคคล
            </p>
          </div>
          <div className="mt-10 text-center">
            <a href="/preventive-care" className="btn-primary">
              หน้าต่อไป: การดูแลสุขภาพ
            </a>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isImageModalOpen && (
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
            <img
              src={modalImageSrc}
              alt="Expanded view"
              className="w-full sm:w-auto sm:max-w-[95vw] h-auto sm:max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
