# คู่มือการ Deploy

เว็บไซต์นี้สามารถ deploy ได้ทั้ง **GitHub Pages** และ **Vercel**

## 🚀 วิธีที่ 1: Deploy บน Vercel (แนะนำ)

### ขั้นตอน:

1. **ไปที่ [Vercel](https://vercel.com)**
   - Sign in ด้วย GitHub account

2. **เพิ่ม Project ใหม่**
   - คลิก "Add New Project"
   - เลือก repository: `prhdev222/monk_genome`
   - Vercel จะ detect Vite framework อัตโนมัติ

3. **ตั้งค่า (ถ้าจำเป็น)**
   - Framework Preset: Vite
   - Build Command: `pnpm run build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`

4. **Deploy**
   - คลิก "Deploy"
   - รอ build เสร็จ (ประมาณ 1-2 นาที)

### ✅ ข้อดี:
- ✅ รองรับ React Router ได้ดี (ไม่ต้องตั้ง base path)
- ✅ Deploy เร็ว
- ✅ Auto-deploy ทุกครั้งที่ push
- ✅ Preview deployments สำหรับ PR
- ✅ Custom domain ฟรี
- ✅ Analytics และ Performance monitoring

### 📍 URL:
- Production: `https://monk-genome.vercel.app`
- หรือ custom domain ที่ตั้งค่า

---

## 📦 วิธีที่ 2: Deploy บน GitHub Pages

### ขั้นตอน:

1. **เปิดใช้งาน GitHub Pages**
   - ไปที่ repository: https://github.com/prhdev222/monk_genome
   - Settings → Pages
   - Source: เลือก **"GitHub Actions"**

2. **GitHub Actions จะทำงานอัตโนมัติ**
   - เมื่อ push code ไปที่ branch `main`
   - Workflow จะ build และ deploy อัตโนมัติ
   - ดู progress ได้ที่ tab "Actions"

3. **ตรวจสอบการ Deploy**
   - ไปที่ Settings → Pages
   - จะเห็น URL ของเว็บไซต์

### ✅ ข้อดี:
- ✅ ฟรี
- ✅ ใช้ GitHub infrastructure
- ✅ Auto-deploy ผ่าน GitHub Actions

### ⚠️ ข้อจำกัด:
- ⚠️ ต้องใช้ base path: `/monk_genome/`
- ⚠️ React Router ต้องใช้ 404.html redirect
- ⚠️ Build ช้ากว่า Vercel

### 📍 URL:
- `https://prhdev222.github.io/monk_genome/`

---

## 🔧 การตั้งค่า

### Vite Config
ไฟล์ `vite.config.ts` จะตรวจสอบ environment variable:
- `GITHUB_ACTIONS`: ใช้ base path `/monk_genome/` สำหรับ GitHub Pages
- ไม่มี: ใช้ root path `/` สำหรับ Vercel

### ไฟล์สำคัญ:
- `vercel.json`: ตั้งค่าสำหรับ Vercel
- `.github/workflows/deploy.yml`: GitHub Actions workflow
- `public/404.html`: Redirect สำหรับ GitHub Pages + React Router

---

## 🎯 คำแนะนำ

**แนะนำให้ใช้ Vercel** เพราะ:
1. ไม่ต้องตั้ง base path
2. รองรับ React Router ได้ดีกว่า
3. Deploy เร็วและมี features มากกว่า
4. Preview deployments สำหรับ testing

**ใช้ GitHub Pages** ถ้า:
1. ต้องการใช้ GitHub infrastructure
2. ไม่ต้องการตั้งค่าเพิ่มเติม
3. URL แบบ `username.github.io` เป็นที่ต้องการ

---

## 📝 หมายเหตุ

- ทั้งสองวิธีจะ auto-deploy เมื่อ push code ไปที่ `main` branch
- Vercel จะ build ด้วย base path `/` (root)
- GitHub Pages จะ build ด้วย base path `/monk_genome/`
- ไฟล์ `404.html` ใช้สำหรับ GitHub Pages เท่านั้น




