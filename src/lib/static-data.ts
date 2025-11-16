// Types
export interface Page {
  id: string
  slug: string
  title_th: string
  title_en?: string
  description_th?: string
  description_en?: string
  hero_title_th?: string
  hero_subtitle_th?: string
  meta_title?: string
  meta_description?: string
  page_order: number
  is_published: boolean
  created_at: string
  updated_at: string
}

export interface Section {
  id: string
  page_id: string
  section_type: string
  title_th?: string
  title_en?: string
  content_th?: string
  content_en?: string
  section_order: number
  metadata?: any
  is_visible: boolean
  created_at: string
  updated_at: string
}

export interface DataTable {
  id: string
  table_key: string
  title_th: string
  title_en?: string
  table_data: any
  source_file?: string
  category?: string
  created_at: string
  updated_at: string
}

export interface Statistic {
  id: string
  stat_key: string
  label_th: string
  label_en?: string
  value: string
  unit?: string
  icon_name?: string
  color_theme?: string
  display_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface TimelineEvent {
  id: string
  year: string
  title_th: string
  title_en?: string
  description_th?: string
  description_en?: string
  event_order: number
  category?: string
  created_at: string
  updated_at: string
}

// Static Data
const now = new Date().toISOString()

const staticPages: Page[] = [
  {
    id: '1',
    slug: 'home',
    title_th: 'หน้าแรก',
    title_en: 'Home',
    description_th: 'พระสงฆ์ไทยกับการแพทย์ยุคใหม่: Genome Testing และการป้องกันโรค NCD',
    description_en: 'Thai Monks and Modern Medicine: Genome Testing and NCD Prevention',
    hero_title_th: 'พระสงฆ์ไทยกับการแพทย์ยุคใหม่',
    hero_subtitle_th: 'Genome Testing และการป้องกันโรค NCD',
    page_order: 1,
    is_published: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: '2',
    slug: 'monks',
    title_th: 'เกี่ยวกับพระสงฆ์ไทย',
    title_en: 'About Thai Monks',
    description_th: 'ประวัติศาสตร์และบทบาทของพระสงฆ์ไทยในการแพทย์แผนโบราณและยุคใหม่',
    description_en: 'History and role of Thai monks in traditional and modern medicine',
    hero_title_th: 'พระสงฆ์ไทยกับการแพทย์',
    hero_subtitle_th: 'จากอดีตสู่ปัจจุบัน',
    page_order: 2,
    is_published: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: '3',
    slug: 'genome-technology',
    title_th: 'เทคโนโลยีการแพทย์ยุคใหม่',
    title_en: 'Modern Medical Technology',
    description_th: 'เทคโนโลยี Genome Testing: WGS, WES และ PRS สำหรับการป้องกันโรค NCD',
    description_en: 'Genome Testing Technology: WGS, WES and PRS for NCD Prevention',
    hero_title_th: 'เทคโนโลยีการแพทย์ยุคใหม่',
    hero_subtitle_th: 'Genome Testing สำหรับสุขภาพที่ดีกว่า',
    page_order: 3,
    is_published: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: '4',
    slug: 'preventive-care',
    title_th: 'การดูแลสุขภาพเชิงป้องกัน',
    title_en: 'Preventive Healthcare',
    description_th: 'แนวทางการดูแลสุขภาพเชิงป้องกันและแผนสุขภาพ 12 สัปดาห์',
    description_en: 'Preventive healthcare guidelines and 12-week health plan',
    hero_title_th: 'การดูแลสุขภาพเชิงป้องกัน',
    hero_subtitle_th: 'แผนสุขภาพส่วนบุคคล',
    page_order: 4,
    is_published: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: '5',
    slug: 'examples',
    title_th: 'ตัวอย่างการใช้งาน',
    title_en: 'Examples',
    description_th: 'บริการ Genome Testing ในไทยและต่างประเทศ',
    description_en: 'Genome Testing services in Thailand and abroad',
    hero_title_th: 'ตัวอย่างการใช้งานจริง',
    hero_subtitle_th: 'บริการและกรณีศึกษา',
    page_order: 5,
    is_published: true,
    created_at: now,
    updated_at: now,
  },
]

const staticStatistics: Statistic[] = [
  {
    id: '1',
    stat_key: 'temples',
    label_th: 'วัดส่งเสริมสุขภาพ',
    label_en: 'Temples in Thailand',
    value: '21,718',
    unit: 'แห่ง',
    icon_name: 'Building2',
    color_theme: 'gold',
    display_order: 1,
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: '2',
    stat_key: 'monks_trained',
    label_th: 'พระธรรมนิเทศ',
    label_en: 'Trained Monks',
    value: '282',
    unit: 'รูป',
    icon_name: 'Users',
    color_theme: 'teal',
    display_order: 2,
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: '3',
    stat_key: 'health_check',
    label_th: 'ตรวจสุขภาพพระสงฆ์',
    label_en: 'Health Check',
    value: '72,161',
    unit: 'รูป',
    icon_name: 'Activity',
    color_theme: 'navy',
    display_order: 3,
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: '4',
    stat_key: 'fast_track',
    label_th: 'Fast Track',
    label_en: 'Fast Track',
    value: '21',
    unit: 'แห่ง',
    icon_name: 'TrendingUp',
    color_theme: 'primary',
    display_order: 4,
    is_active: true,
    created_at: now,
    updated_at: now,
  },
]

const staticTimelineEvents: TimelineEvent[] = [
  {
    id: '1',
    year: 'พุทธกาล',
    title_th: 'หมอชีวกโกมารภัจจ์',
    title_en: 'Jivaka Komarabhacca',
    description_th: 'แพทย์ประจำพระองค์พระพุทธเจ้า ผสานการรักษากายและจิตใจด้วยเมตตาธรรม',
    description_en: 'Personal physician to the Buddha, integrating physical and mental healing with compassion',
    event_order: 1,
    category: 'historical',
    created_at: now,
    updated_at: now,
  },
  {
    id: '2',
    year: 'สมัยอยุธยา',
    title_th: 'กรมแพทย์โรงพระโอสถ',
    title_en: 'Ayutthaya Era: Traditional Thai Medicine',
    description_th: 'จัดตั้งระบบราชการแพทย์ วัดเป็นศูนย์รวมความรู้ยาและการดูแลผู้ป่วย',
    description_en: 'Established royal medical system, temples as centers of medical knowledge and patient care',
    event_order: 2,
    category: 'historical',
    created_at: now,
    updated_at: now,
  },
  {
    id: '3',
    year: 'รัตนโกสินทร์ตอนต้น',
    title_th: 'ฟื้นฟูตำรายา',
    title_en: 'Early Rattanakosin: Knowledge Integration',
    description_th: 'จารึกวิชาแพทย์ที่วัด เปิดความรู้สู่ประชาชน',
    description_en: 'Medical texts inscribed at temples, making knowledge accessible to the public',
    event_order: 3,
    category: 'historical',
    created_at: now,
    updated_at: now,
  },
  {
    id: '4',
    year: 'ปัจจุบัน',
    title_th: 'ธรรมนามัยสมัยใหม่',
    title_en: 'Modern Era: Genome Testing and NCD Prevention',
    description_th: 'บูรณาการพุทธธรรมกับการแพทย์ เน้นสุขภาวะองค์รวม',
    description_en: 'Integrating Buddhist principles with modern medicine, focusing on holistic wellness',
    event_order: 4,
    category: 'modern',
    created_at: now,
    updated_at: now,
  },
]

const staticDataTables: DataTable[] = [
  {
    id: '1',
    table_key: 'thai_providers',
    title_th: 'ผู้ให้บริการ Genome Testing ในไทย',
    title_en: 'Genome Testing Providers in Thailand',
    table_data: {
      headers: ['ผู้ให้บริการ', 'บริการ', 'เทคโนโลยี', 'หมายเหตุ'],
      rows: [
        ['Bumrungrad Genomic Medicine Center', 'WES, แพนเซตยีนมะเร็ง, PGx, Carrier Screening', 'NGS, Tele-Genomics', 'ทีมสหสาขาและที่ปรึกษาพันธุกรรม'],
        ['MedPark Hospital', 'Gene Testing for Cancer Risk, 74-79 ยีน, 22-23 มะเร็ง', 'NGS', 'รวมค่าแพทย์และการแปลผล'],
        ['Bangkok Hospital', 'Cancer Look Out, คัดกรองมะเร็ง 10 ชนิด', 'Genetic Screening', 'รวมค่าแพทย์แปลผล'],
        ['Samitivej Hospital', 'Genomic Testing, Cancer Screening, PGx', 'NGS', 'บริการครบวงจร'],
      ],
    },
    source_file: 'genome_testing_global_examples.md',
    category: 'providers',
    created_at: now,
    updated_at: now,
  },
  {
    id: '2',
    table_key: 'global_programs',
    title_th: 'โครงการ Genome Testing ระดับประเทศ',
    title_en: 'National Genome Testing Programs',
    table_data: {
      headers: ['ประเทศ', 'โครงการ', 'ความครอบคลุม', 'งบประมาณ'],
      rows: [
        ['สหรัฐอเมริกา', 'All of Us Research Program', '1 ล้านคน', '$1.45 พันล้าน'],
        ['สหราชอาณาจักร', 'UK Biobank & NHS Genomic Medicine', '500,000 คน', '£200 ล้าน/ปี'],
        ['ญี่ปุ่น', 'Japan Genomic Medicine Program', '100,000 คน', '¥10 พันล้าน'],
      ],
    },
    source_file: 'genome_testing_global_examples.md',
    category: 'programs',
    created_at: now,
    updated_at: now,
  },
  {
    id: '3',
    table_key: 'price_ranges',
    title_th: 'ช่วงราคาการทดสอบ Genome',
    title_en: 'Genome Testing Price Ranges',
    table_data: {
      headers: ['ประเภท', 'ราคา', 'รายละเอียด'],
      rows: [
        ['เลือกยามะเร็งแบบมุ่งเป้า', '1,100-11,000 บาท', 'HER2/neu, BCR-ABL, EGFR'],
        ['ทำนาย SCARs', '1,000-2,000 บาท', 'HLA-B*15:02, HLA-B*57:01, HLA-B*58:01'],
        ['ปรับขนาดยา', '1,000-4,800 บาท', 'TPMT, UGT1A1, CYP2C19, CYP2D6'],
        ['พยากรณ์ความเสี่ยงมะเร็ง', '19,400-50,000 บาท', 'BRCA1/2'],
      ],
    },
    source_file: 'genome_testing_global_examples.md',
    category: 'pricing',
    created_at: now,
    updated_at: now,
  },
]

// API functions (synchronous, returning static data)
export const api = {
  // Pages
  getPages(): Page[] {
    return staticPages.filter(p => p.is_published).sort((a, b) => a.page_order - b.page_order)
  },

  getPageBySlug(slug: string): Page | null {
    const page = staticPages.find(p => p.slug === slug && p.is_published)
    return page || null
  },

  // Statistics
  getStatistics(): Statistic[] {
    return staticStatistics.filter(s => s.is_active).sort((a, b) => a.display_order - b.display_order)
  },

  // Timeline events
  getTimelineEvents(): TimelineEvent[] {
    return staticTimelineEvents.sort((a, b) => a.event_order - b.event_order)
  },

  // Data tables
  getDataTableByKey(key: string): DataTable | null {
    const table = staticDataTables.find(t => t.table_key === key)
    return table || null
  },

  // Sections (not used in current pages, but keeping for compatibility)
  getSectionsByPageId(pageId: string): Section[] {
    return []
  },
}

