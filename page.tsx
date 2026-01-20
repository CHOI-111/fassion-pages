import { Button } from '@/components/ui/button'
import { ArrowRight, Menu, ShoppingBag } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-6 bg-foreground" />
              <h1 className="text-xl font-serif tracking-tight">
                CLOSET CREATIONS
              </h1>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#story" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                스토리
              </a>
              <a href="#philosophy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                철학
              </a>
              <a href="#values" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                가치
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                문의
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-foreground hover:text-muted-foreground transition-colors" aria-label="장바구니">
                <ShoppingBag className="w-5 h-5" />
              </button>
              <button className="md:hidden text-foreground" aria-label="메뉴">
                <Menu className="w-6 h-6" />
              </button>
              <Button variant="outline" className="hidden md:inline-flex text-sm bg-transparent">
                상담 예약
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-balance mb-8">
              {'완벽한 정리가 만나는 절제된 디자인'}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance mb-12">
              {'CLOSET CREATIONS의 맞춤형 디자인 솔루션으로 당신의 공간을 기능적인 예술 작품으로 변화시키세요.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="min-w-[200px] text-base">
                우리의 이야기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px] text-base bg-transparent">
                프리미엄 컬렉션
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-serif text-gray-600 mb-4">패션 컬렉션</div>
              <div className="text-lg text-gray-500">CLOSET CREATIONS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-12 text-center">
              우리의 핵심 가치
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20">
              <div>
                <div className="text-7xl md:text-8xl font-serif mb-6">1</div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4 tracking-tight">
                  {'고객과 함께하는 여정'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {'우리는 기업의 전환을 지속 가능한 새로운 실천 방식으로 안내합니다.'}
                </p>
              </div>
              
              <div>
                <div className="text-7xl md:text-8xl font-serif mb-6">2</div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4 tracking-tight">
                  {'혁신을 통한 가치 창출'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {'우리는 새로운 프로젝트를 통해 혁신을 실현하고, 지속 가능한 시스템을 구축합니다.'}
                </p>
              </div>
            </div>

            <div className="relative w-full aspect-video overflow-hidden mb-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-3xl md:text-4xl font-serif mb-2">프리미엄 소재</div>
                <div className="text-sm opacity-80">Premium Fabric</div>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 tracking-tight text-balance">
                {'혁신, 지속가능성, 효율성의 결합'}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-balance">
                {'CLOSET CREATIONS는 패션 산업에서 혁신적인 전환의 선도자입니다. 우리는 기업에 지속 가능한 솔루션을 제공합니다.'}
              </p>
              <Button variant="default" className="min-w-[180px]">
                더 알아보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 tracking-tight text-balance">
                {'미래를 위한 글로벌 접근 방식'}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative aspect-[3/4] overflow-hidden group bg-gradient-to-br from-gray-800 via-gray-900 to-black transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-serif mb-2">파트너십</h3>
                  <p className="text-sm text-white/80">{'함께 성장하는 협력'}</p>
                </div>
              </div>

              <div className="relative aspect-[3/4] overflow-hidden group bg-gradient-to-br from-gray-700 via-gray-800 to-black transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-serif mb-2">혁신</h3>
                  <p className="text-sm text-white/80">{'지속 가능한 미래 설계'}</p>
                </div>
              </div>

              <div className="relative aspect-[3/4] overflow-hidden group bg-gradient-to-br from-gray-600 via-gray-700 to-black transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-serif mb-2">품질</h3>
                  <p className="text-sm text-white/80">{'타협 없는 완벽함'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 tracking-tight text-balance">
              {'프로젝트에 대해 이야기해보세요'}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-balance leading-relaxed">
              {'당신의 비전을 현실로 만들어드립니다. 전문가와 상담하고 맞춤형 솔루션을 받아보세요.'}
            </p>
            <Button size="lg" className="min-w-[200px] text-base">
              지금 문의하기
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-6 bg-foreground" />
                <h3 className="text-base font-serif">CLOSET CREATIONS</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {'미니멀 디자인의 혁신'}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4">회사</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    소개
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    채용
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    지속가능성
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4">고객지원</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    배송정보
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    반품정책
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4">연락처</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contact@closetcreations.kr</li>
                <li>02-1234-5678</li>
                <li>서울시 강남구</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 CLOSET CREATIONS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
