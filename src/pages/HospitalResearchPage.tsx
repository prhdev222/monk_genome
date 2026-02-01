import { useEffect, useState } from 'react'

const ACCESS_KEY = 'hospital_research_access'
const PASSWORD = 'prh2569'

export default function HospitalResearchPage() {
  const [password, setPassword] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const saved = sessionStorage.getItem(ACCESS_KEY)
    if (saved === 'true') {
      setIsUnlocked(true)
    }
  }, [])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (password.trim() === PASSWORD) {
      sessionStorage.setItem(ACCESS_KEY, 'true')
      setIsUnlocked(true)
      setError('')
      return
    }
    setError('รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง')
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="section-spacing">
        <div className="container-narrow px-6 lg:px-16">
          <div className="card p-8 lg:p-12 border-l-4 border-teal-500">
            <h1 className="font-serif font-semibold text-h2 text-neutral-900 mb-4">
              งานวิจัยของโรงพยาบาลสงฆ์
            </h1>
            <p className="text-body text-neutral-700 leading-relaxed mb-6">
              หน้านี้เป็นข้อมูลภายใน กรุณาใส่รหัสผ่านเพื่อเข้าดูเอกสาร
            </p>

            {!isUnlocked ? (
              <form onSubmit={handleSubmit} className="max-w-md space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    รหัสผ่าน
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="ใส่รหัสผ่านเพื่อเข้าถึง"
                  />
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button type="submit" className="btn-primary px-6 py-3">
                  เข้าสู่ระบบ
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <p className="text-body text-neutral-700 leading-relaxed">
                  เลือกเอกสารที่ต้องการเปิดดู:
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://docs.google.com/document/d/1nAv5ca5OBr5tObPtcRF1W2o3LA8UxaUT/edit?usp=drive_link&ouid=109753591930799162781&rtpof=true&sd=true"
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-700 underline underline-offset-4 hover:text-teal-600"
                  >
                    เกณฑ์การคัดเลือกผู้วิจัย
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1d9NS6exhvvNs7POaj-ERe3M41gG05GjN/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-700 underline underline-offset-4 hover:text-teal-600"
                  >
                    การตรวจคัดกรองภาวะสมองเสื่อม (TMSE)
                  </a>
                  <a
                    href="https://www.dnallth.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-700 underline underline-offset-4 hover:text-teal-600"
                  >
                    DNALL ดูผลตรวจพันธุกรรม
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
