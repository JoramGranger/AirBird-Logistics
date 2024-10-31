import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Clock3, MapPin, Package, BarChart, Shield } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const cities = [
    "Nairobi", "Mombasa", "Kisumu", "Eldoret", "Nakuru", // Kenya
    "Dar es Salaam", "Arusha", "Mwanza", "Zanzibar City", "Dodoma", // Tanzania
    "Kampala", "Entebbe", "Jinja", "Gulu", "Mbarara", // Uganda
    "Kigali", "Butare", "Gisenyi", "Cyangugu", "Ruhengeri", // Rwanda
    "Bujumbura", "Gitega", "Ngozi", "Rumonge", "Bururi", // Burundi
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#191A52]">
      <header className="sticky top-0 z-40 bg-white px-4 lg:px-6 h-16 flex items-center border-b border-[#191A52]/10">
        <Link className="flex items-center justify-center" href="#">
          <Plane className="h-8 w-8 mr-2 text-[#FFD610]" />
          <span className="font-bold text-2xl">AirBird</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-[#FFD610] transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-[#FFD610] transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:text-[#FFD610] transition-colors" href="#cities">
            Cities
          </Link>
          <Link className="text-sm font-medium hover:text-[#FFD610] transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#191A52] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Connecting East Africa, <span className="text-[#FFD610]">3 Hours</span> at a Time
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  AirBird: Swift and reliable intercity air cargo services across East Africa. From packages to pallets, we deliver with precision.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-[#FFD610] text-[#191A52] hover:bg-[#FFD610]/90">Get a Quote</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#191A52]">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About AirBird</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AirBird is revolutionizing logistics in East Africa with our rapid intercity air cargo service. We connect major cities across the region, ensuring your goods reach their destination in just 3 hours or less.
                </p>
                <ul className="grid gap-4 mt-6">
                  <li className="flex items-center gap-2 text-gray-600">
                    <Clock3 className="w-5 h-5 text-[#FFD610]" /> 3-hour delivery between cities
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-[#FFD610]" /> Extensive network across East Africa
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <Shield className="w-5 h-5 text-[#FFD610]" /> Secure and reliable transportation
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="AirBird Cargo Plane"
                  className="aspect-video w-full overflow-hidden rounded-xl object-cover object-center"
                  height={200}
                  width={200}
                  src="/airbird.jpg"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-[#191A52]/5">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Services
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#191A52]">
                    <Package className="w-5 h-5 mr-2 text-[#FFD610]" />
                    Express Parcels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Fast delivery of small to medium-sized packages across East African cities.
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#191A52]">
                    <BarChart className="w-5 h-5 mr-2 text-[#FFD610]" />
                    Bulk Cargo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Efficient transportation of large volumes of goods for businesses.
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#191A52]">
                    <Shield className="w-5 h-5 mr-2 text-[#FFD610]" />
                    Secure Valuables
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Specialized handling and transportation of high-value items.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="cities" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Cities We Connect
            </h2>
            <p className="text-center mb-8 text-gray-600">
              AirBird connects major cities across East Africa, ensuring swift delivery within our 3-hour promise.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-[#191A52]/5 rounded-lg">
                  <MapPin className="w-4 h-4 mr-2 text-[#FFD610]" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#191A52] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose AirBird?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the AirBird advantage: unmatched speed, reliability, and coverage across East Africa.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Clock3 className="w-8 h-8 text-[#FFD610]" />
                  <div>
                    <h3 className="font-bold">3-Hour Delivery</h3>
                    <p>Swift transportation between major East African cities.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8 text-[#FFD610]" />
                  <div>
                    <h3 className="font-bold">Extensive Network</h3>
                    <p>Connecting over 25 cities across 5 East African countries.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Shield className="w-8 h-8 text-[#FFD610]" />
                  <div>
                    <h3 className="font-bold">Secure Handling</h3>
                    <p>State-of-the-art security measures for your peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#191A52]/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Ship with AirBird?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with us to learn more about our services or to book your next shipment.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input className="max-w-lg flex-1" placeholder="Your Name" type="text" />
                  <Input className="max-w-lg flex-1" placeholder="Your Email" type="email" />
                  <Input className="max-w-lg flex-1" placeholder="Your Phone" type="tel" />
                  <Button type="submit" className="w-full bg-[#FFD610] text-[#191A52] hover:bg-[#FFD610]/90">Contact Us</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#191A52]/10">
        <p className="text-xs text-gray-600">
          © 2024 AirBird Logistics. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-[#191A52]" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-[#191A52]" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}