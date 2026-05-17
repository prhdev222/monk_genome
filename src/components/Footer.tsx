import { Heart, MapPin, Dna } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gold-metallic rounded-full flex items-center justify-center shadow-lg">
                <Dna size={20} className="text-neutral-900" strokeWidth={2.5} />
              </div>
              <div className="font-serif font-bold text-lg">พระสงฆ์ไทย</div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              โครงการเผยแพร่ความรู้เกี่ยวกับบทบาทของพระสงฆ์ไทยในการแพทย์
              และเทคโนโลยี Multi-omics เพื่อการป้องกันโรค NCD
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">เมนูหลัก</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-neutral-300 hover:text-gold-500 transition-colors text-sm"
                >
                  หน้าแรก
                </a>
              </li>
              <li>
                <a
                  href="/monks"
                  className="text-neutral-300 hover:text-gold-500 transition-colors text-sm"
                >
                  พระพุทธศาสนากับหลักวิทยาศาสตร์
                </a>
              </li>
              <li>
                <a
                  href="/genome-technology"
                  className="text-neutral-300 hover:text-gold-500 transition-colors text-sm"
                >
                  เทคโนโลยีการแพทย์
                </a>
              </li>
              <li>
                <a
                  href="/preventive-care"
                  className="text-neutral-300 hover:text-gold-500 transition-colors text-sm"
                >
                  การดูแลสุขภาพ
                </a>
              </li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">หัวข้อที่น่าสนใจ</h3>
            <ul className="space-y-3">
              <li className="text-neutral-300 text-sm">กฎธรรมชาติ</li>
              <li className="text-neutral-300 text-sm">Multi-omics</li>
              <li className="text-neutral-300 text-sm">โรค NCD</li>
              <li className="text-neutral-300 text-sm">การป้องกันเชิงรุก</li>
              <li className="text-neutral-300 text-sm">Precision & Personalized Medicine</li>
            </ul>
          </div>

          {/* Related Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">เว็บไซต์ที่เกี่ยวข้อง</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://servicekc.dms.go.th/dashboard/default?ps=s_priest"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-300 hover:text-gold-500 transition-colors text-sm"
                >
                  Dashboard กรมการแพทย์
                </a>
              </li>
              <li>
                <a
                  href="https://www.dms.go.th/?StartWeb=1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-300 hover:text-gold-500 transition-colors text-sm"
                >
                  กรมการแพทย์
                </a>
              </li>
              <li>
                <a
                  href="https://www.priest-hospital.go.th/index.php"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-300 hover:text-gold-500 transition-colors text-sm"
                >
                  โรงพยาบาลสงฆ์
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="font-serif font-semibold text-lg mb-6">ติดต่อ</h3>
            <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
              <div className="rounded-md bg-neutral-800/60 border border-neutral-700 p-4 flex flex-col h-full md:min-h-[220px]">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin size={18} className="text-gold-500 mt-1 flex-shrink-0" />
                  <div className="text-neutral-300 text-sm">
                    <div>โรงพยาบาลสงฆ์</div>
                    <div>กรุงเทพมหานคร ประเทศไทย</div>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/kLgg1Ec1Sy3jyhAN6"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center text-xs text-gold-400 hover:text-gold-300 transition-colors"
                >
                  เปิดแผนที่โรงพยาบาลสงฆ์
                </a>
              </div>

              <div className="rounded-md bg-emerald-500/10 border border-emerald-500/30 p-4 flex flex-col gap-4 h-full md:flex-row md:items-center md:justify-between md:min-h-[220px]">
                <div className="flex-1">
                  <div className="text-sm font-semibold text-neutral-100 mb-1">
                    รับข้อมูลผ่าน LINE OA อายุรกรรม
                  </div>
                  <div className="text-xs text-neutral-300 mb-3">
                    สแกน QR หรือกดปุ่มเพื่อแชททาง LINE
                  </div>
                  <a
                    href="https://line.me/R/ti/p/@490kuerv"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-sm bg-emerald-500 text-white hover:bg-emerald-400 transition-colors"
                  >
                    เปิดใน LINE
                  </a>
                </div>
                <img
                  src="/images/490kuerv.png"
                  alt="LINE OA @490kuerv QR"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-md bg-white p-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © 2026 directed by{' '}
              <a
                href="mailto:uradev222@gmail.com"
                className="text-neutral-200 hover:text-gold-400 transition-colors"
              >
                Uradev
              </a>
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <p className="text-neutral-400 text-sm flex items-center">
                สร้างด้วย <Heart size={16} className="mx-1 text-gold-500" /> ขอให้พระคุณเจ้ามีสุขภาพแข็งแรง
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="/hospital-research"
                  className="text-sm px-4 py-2 rounded-sm border border-neutral-600 text-neutral-200 hover:text-white hover:border-gold-500 transition-colors"
                >
                  งานวิจัยของรพ.
                </a>
                <a
                  href="https://dnadash.pages.dev/patient/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-4 py-2 rounded-sm border border-neutral-600 text-neutral-200 hover:text-white hover:border-gold-500 transition-colors"
                >
                  ค้นหาผลการตรวจงานวิจัย
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
