"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Coffee, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="circleGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="MaMa YaTai"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "plain",
      }}
      title="Authentic Japanese Vibes in Davie"
      description="Experience our signature Mochi Donuts, savory Yakitori, and crispy Corn Dogs. Made fresh daily with a modern twist."
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-composition-tasty-donuts_23-2148194234.jpg?_wi=1",
          imageAlt: "Fresh mochi donuts display",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-yummy-white-chocolate-donuts-red-background_23-2147895888.jpg?_wi=1",
          imageAlt: "Signature mochi donut",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-meat-seafood-barbecue-with-vegetables-wooden-skewers-plate-sauce-top-view_1253-954.jpg?_wi=1",
          imageAlt: "Traditional yakitori skewers",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-corn-dog_23-2149387967.jpg",
          imageAlt: "Crispy cheese corn dog",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-glazed-donuts_23-2148628295.jpg",
          imageAlt: "Creme brulee donut",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/set-sweet-doughnuts-with-sprinkles_114579-53452.jpg",
          imageAlt: "Matcha mochi donut",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Welcome to MaMa YaTai & Donuts"
      description="We are a unique Japanese-inspired cafe in Davie, FL. Our shop features vibrant city-inspired decor, bringing the authentic feel of a Japanese street market to Carriage Hills Plaza."
      bulletPoints={[
        {
          title: "Handcrafted Mochi",
          description: "Authentic, chewy, and light.",
        },
        {
          title: "Fusion Favorites",
          description: "Crispy corn dogs and savory yakitori.",
        },
        {
          title: "LGBTQ+ Friendly",
          description: "A welcoming space for everyone.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/girl-wearing-floral-dress-wearing-hat-sitting_1150-19274.jpg?_wi=1"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        {
          title: "Signature Mochi Donuts",
          description: "Chewy, airy, and full of flavor.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-different-ingredients-cips-flakes-nuts-grey-background-meal-snack-breakfast-color_140725-110132.jpg?_wi=1",
        },
        {
          title: "Crispy Street Food",
          description: "The best Korean-style cheese corn dogs.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-hand-holding-corn-dog_23-2149929412.jpg",
        },
        {
          title: "Cozy Atmosphere",
          description: "Decorated like a Japanese city street.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-ignoring-woman-while-talking-phone_107420-65720.jpg",
        },
      ]}
      title="Why We're Loved"
      description="Discover what makes our cafe the go-to spot in Davie."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Signature Mochi Donut",
          price: "$3.50",
          imageSrc: "http://img.b2bpic.net/free-photo/pair-donuts-with-chocolate-cream-top_140725-6405.jpg",
        },
        {
          id: "p2",
          name: "Classic Yakitori Skewers",
          price: "$5.00",
          imageSrc: "http://img.b2bpic.net/free-photo/deep-fried-pork-belly-with-fish-sauce-dark-background_1150-45502.jpg",
        },
        {
          id: "p3",
          name: "Tornado Cheese Corn Dog",
          price: "$6.00",
          imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-appetizing-street-food_23-2151516908.jpg",
        },
        {
          id: "p4",
          name: "Creme Brulee Donut",
          price: "$4.50",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-yummy-donut-with-chocolate-inside-blue-plate-bright-blue-floor_140725-13823.jpg",
        },
        {
          id: "p5",
          name: "Taro Mochi Donut",
          price: "$3.50",
          imageSrc: "http://img.b2bpic.net/free-photo/homemade-doughnuts-food-photography-recipe-idea_53876-97.jpg",
        },
        {
          id: "p6",
          name: "Matcha Mochi Donut",
          price: "$3.50",
          imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-glazed-donuts-box_23-2150757621.jpg",
        },
      ]}
      title="Popular Menu Items"
      description="Explore our favorite snacks and treats."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Happy Customers",
          value: "600+",
          icon: Star,
        },
        {
          id: "m2",
          title: "Donut Varieties",
          value: "15+",
          icon: Coffee,
        },
        {
          id: "m3",
          title: "Daily Fresh Batches",
          value: "100%",
          icon: Star,
        },
      ]}
      title="Our Community Impact"
      description="Proudly serving our Davie community."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Nae McQueen",
          date: "6 months ago",
          title: "Local Guide",
          quote: "Decorated like a Japanese city! Unique and cool.",
          tag: "Excellent",
          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-sitting-together_23-2149366418.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-composition-tasty-donuts_23-2148194234.jpg?_wi=2",
          imageAlt: "happy customer dining cafe",
        },
        {
          id: "t2",
          name: "Sarah Jenkins",
          date: "1 week ago",
          title: "Donut Lover",
          quote: "Matcha and black sesame were my favorites.",
          tag: "Tasty",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-shot-bearded-businessman-light-pink-formal-shirt-covers-eyes-with-two-delicious-doughnuts-clenches-teeth-feels-temptation_273609-24083.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/girl-wearing-floral-dress-wearing-hat-sitting_1150-19274.jpg?_wi=2",
          imageAlt: "happy customer dining cafe",
        },
        {
          id: "t3",
          name: "David Kim",
          date: "2 weeks ago",
          title: "Regular",
          quote: "Fantastic food and service with a smile.",
          tag: "Friendly",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-cooking_1098-13267.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-different-ingredients-cips-flakes-nuts-grey-background-meal-snack-breakfast-color_140725-110132.jpg?_wi=2",
          imageAlt: "happy customer dining cafe",
        },
        {
          id: "t4",
          name: "Maria Lopez",
          date: "1 month ago",
          title: "Foodie",
          quote: "The cheese corn dogs are absolutely addictive.",
          tag: "Great",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-birthday-me-portrait-upbeat-excited-hispanic-man-with-dreads-celebrating-bday-holding-pl_1258-109346.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-yummy-white-chocolate-donuts-red-background_23-2147895888.jpg?_wi=2",
          imageAlt: "happy customer dining cafe",
        },
        {
          id: "t5",
          name: "James Chen",
          date: "3 months ago",
          title: "Daily Visitor",
          quote: "The best mochi donuts in all of Florida.",
          tag: "Unique",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-asian-girl-barista-giving-order-client-holding-takeaway-coffee-cup-wearing-apron-working_1258-199319.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-meat-seafood-barbecue-with-vegetables-wooden-skewers-plate-sauce-top-view_1253-954.jpg?_wi=2",
          imageAlt: "happy customer dining cafe",
        },
      ]}
      title="Customer Reviews"
      description="Read what our amazing customers say about us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you offer delivery?",
          content: "Yes, we offer delivery via various platforms.",
        },
        {
          id: "f2",
          title: "Are your donuts fresh?",
          content: "Yes, we prepare fresh batches daily.",
        },
        {
          id: "f3",
          title: "Is there outdoor seating?",
          content: "Yes, we have comfortable outdoor seating available.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about MaMa YaTai."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Join Our Community"
      description="Stay updated with our latest donut flavors and promotions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/small-spoon-desert_23-2147896740.jpg"
      logoText="MaMa YaTai & Donuts"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Menu",
              href: "#products",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Location",
          items: [
            {
              label: "6477 Stirling Rd, Davie, FL",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 MaMa YaTai & Donuts"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
