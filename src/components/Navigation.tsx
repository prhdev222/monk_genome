import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Dna } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'หน้าแรก' },
  { path: '/monks', label: 'พระพุทธศาสนากับหลักวิทยาศาสตร์' },
  { path: '/genome-technology', label: 'เทคโนโลยีการแพทย์' },
  { path: '/preventive-care', label: 'การดูแลสุขภาพ' },
]

export default function Navigation() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-standard ${
        isScrolled
          ? 'bg-neutral-50/95 backdrop-blur-md shadow-nav'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gold-metallic rounded-full flex items-center justify-center shadow-lg">
              <Dna size={24} className="text-neutral-900" strokeWidth={2.5} />
            </div>
            <div className="hidden lg:block">
              <div className="font-serif font-bold text-lg text-neutral-900 leading-tight">
                พระสงฆ์ไทย
              </div>
              <div className="text-xs text-neutral-500 tracking-wide">
                กับการแพทย์ยุคใหม่
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans font-light text-sm tracking-widest transition-all duration-fast ${
                  location.pathname === link.path
                    ? 'text-gold-600 font-medium border-b-2 border-gold-500'
                    : 'text-neutral-700 hover:text-gold-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-neutral-700 hover:text-gold-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-neutral-200 mt-2">
            <div className="flex flex-col space-y-4 pt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-sans text-base py-2 transition-all duration-fast ${
                    location.pathname === link.path
                      ? 'text-gold-600 font-medium'
                      : 'text-neutral-700 hover:text-gold-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
