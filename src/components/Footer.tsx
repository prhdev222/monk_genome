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
              และเทคโนโลยี Genome Testing เพื่อการป้องกันโรค NCD
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
              <li className="text-neutral-300 text-sm">ธรรมนามัย</li>
              <li className="text-neutral-300 text-sm">Genome Sequencing</li>
              <li className="text-neutral-300 text-sm">โรค NCD</li>
              <li className="text-neutral-300 text-sm">การป้องกันเชิงรุก</li>
              <li className="text-neutral-300 text-sm">Precision Medicine</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">ติดต่อ</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold-500 mt-1 flex-shrink-0" />
                <div className="text-neutral-300 text-sm">
                  <div>โรงพยาบาลสงฆ์</div>
                  <div>กรุงเทพมหานคร ประเทศไทย</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} พระสงฆ์ไทยกับการแพทย์ยุคใหม่ สงวนลิขสิทธิ์
            </p>
            <p className="text-neutral-400 text-sm flex items-center">
              สร้างด้วย <Heart size={16} className="mx-1 text-gold-500" /> เพื่อสุขภาพที่ดีกว่า
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
