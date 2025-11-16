import { Activity, HeartPulse, Users } from 'lucide-react'
import { api, Page } from '../lib/data'
import { Link } from 'react-router-dom'

export default function HomePage() {
  // Use static data directly (no async needed)
  const page = api.getPageBySlug('home')

  // Three pillars data
  const pillars = [
    {
      icon: Users,
      title: 'พระพุทธศาสนากับหลักวิทยาศาสตร์',
      description:
        'ความเข้าใจที่ถูกต้องเกี่ยวกับกรรมกับโรคพันธุกรรม กฎธรรมชาติ 5 กฎ และหลักความไม่ประมาทตามหลักพระพุทธศาสนา',
      color: 'gold',
      link: '/monks',
    },
    {
      icon: Activity,
      title: 'Genome Testing',
      description:
        'เทคโนโลยีการจัดลำดับจีโนมและการทำนายโรค NCD ด้วย AI และ Machine Learning สำหรับการแพทย์แม่นยำ',
      color: 'navy',
      link: '/genome-technology',
    },
    {
      icon: HeartPulse,
      title: 'การดูแลสุขภาพ',
      description:
        'แนวทางการป้องกันโรคเรื้อรัง (NCDs) ผ่านการปรับวิถีชีวิต โภชนาการ การออกกำลังกาย และการจัดการความเครียด',
      color: 'teal',
      link: '/preventive-care',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-neutral-900 pt-24 lg:pt-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/sala.jpg" 
            alt="Thai Temple" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-900/40 to-neutral-900/70"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-16 text-center relative z-10">
          <h1 className="font-serif font-bold text-4xl lg:text-display text-white mb-6 lg:mb-8 drop-shadow-lg">
            {page?.hero_title_th || 'พระสงฆ์ไทยกับการแพทย์ยุคใหม่'}
          </h1>
          <p className="font-sans text-xl lg:text-body-lg text-neutral-100 max-w-3xl mx-auto mb-8 lg:mb-12 leading-relaxed drop-shadow-md">
            {page?.hero_subtitle_th || 'Genome Testing และการป้องกันโรค NCD'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/monks" className="btn-primary inline-block">
              เริ่มต้นเรียนรู้
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-6">
              พันธกิจของโครงการ
            </h2>
            <p className="text-body text-neutral-700 leading-relaxed mb-4">
              โครงการนี้มุ่งเน้นการนำเสนอความรู้เกี่ยวกับพระพุทธศาสนาและวิทยาศาสตร์ พร้อมทั้งเชื่อมโยงกับเทคโนโลยีการแพทย์ขั้นสูงในยุคปัจจุบัน
            </p>
            <p className="text-body text-neutral-700 leading-relaxed">
              เราเชื่อว่าการผสมผสานระหว่างภูมิปัญญาทางพุทธศาสนาและวิทยาศาสตร์การแพทย์สมัยใหม่ จะนำไปสู่การดูแลสุขภาพที่สมดุลและยั่งยืน
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars Overview */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-4">
              สามเสาหลักของโครงการ
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              การบูรณาการความรู้จากสามด้านเพื่อความเข้าใจที่ครบถ้วนและสมดุล
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              const colorMap = {
                gold: 'text-gold-600',
                navy: 'text-navy-500',
                teal: 'text-teal-500',
                neutral: 'text-neutral-700',
              }
              const iconColor = colorMap[pillar.color as keyof typeof colorMap]

              return (
                <Link
                  key={index}
                  to={pillar.link}
                  className="card p-8 text-center group"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-standard">
                      <Icon size={32} className={iconColor} />
                    </div>
                  </div>
                  <h3 className="font-serif font-semibold text-h4 text-neutral-900 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {pillar.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing-large bg-neutral-100">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="font-serif font-semibold text-h2 text-neutral-900 mb-6">
            พร้อมที่จะเรียนรู้เพิ่มเติมหรือยัง
          </h2>
          <p className="text-body-lg text-neutral-700 max-w-2xl mx-auto mb-8">
            สำรวจเนื้อหาเชิงลึกในแต่ละด้านเพื่อความเข้าใจที่ครบถ้วนเกี่ยวกับการดูแลสุขภาพแบบองค์รวม
          </p>
          <Link to="/monks" className="btn-primary">
            เริ่มสำรวจเนื้อหา
          </Link>
        </div>
      </section>
    </div>
  )
}
