import React from 'react';
import { HeroSection } from './components/HeroSection';
import { OffersSection } from './components/OffersSection'; 
import { OrderForm } from './components/OrderForm';
import { ProductShowcase } from './components/ProductShowcase';
import { QualityPromise } from './components/QualityPromise';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Product, Offer } from './types';

const App: React.FC = () => {
  const offers: Offer[] = [
    {
      id: 'offer_large',
      title: 'باقة الخير الكاملة (العرض الأكبر)',
      items: [
        '3 كيلو سمن بلدي فاخر',
        '1 كيلو زبدة فلاحي طازجة',
        '1 كيلو قشطة فلاحي غنية'
      ],
      price: '2760 ج.م',
      originalPrice: '2890 ج.م',
      isPrimary: true,
      savings: 'خصم خاص جداً + توفير إضافي!', 
      highlightTag: "عرض حصري! خصم لفترة محدودة!", 
      ctaText: 'اطلب باقة الخير الكاملة الآن'
    },
    {
      id: 'offer_small',
      title: 'باقة التوفير العملية (العرض الأصغر)',
      items: [
        '1.5 كيلو سمن بلدي فاخر',
        '0.5 كيلو (نصف كيلو) زبدة فلاحي',
        '0.5 كيلو (نصف كيلو) قشطة فلاحي'
      ],
      price: '1600 ج.م',
      savings: 'مثالية للتجربة أو الاستخدام المعتدل!',
      ctaText: 'اطلب باقة التوفير'
    }
  ];

  const products: Product[] = [
    {
      id: 'ghee-001',
      name: 'سمن بلدي فاخر',
      description: 'سمن بقري صافي 100%، مستخلص بالطرق التقليدية الأصيلة. متوفر في عروضنا المميزة.',
      price: 'ضمن عروضنا',
      imageUrl: 'https://picsum.photos/seed/gheegeneral/600/400', // Placeholder - recommend authentic image
      altText: 'سمن بلدي فاخر',
    },
    {
      id: 'butter-001',
      name: 'زبدة فلاحي طازجة',
      description: 'زبدة طبيعية مصنوعة من أجود أنواع الحليب كامل الدسم. تذوق الطعم الأصلي ضمن باقاتنا.',
      price: 'ضمن عروضنا',
      imageUrl: 'https://picsum.photos/seed/buttergeneral/600/400', // Placeholder - recommend authentic image
      altText: 'زبدة فلاحي طازجة',
    },
    {
      id: 'qeshta-001',
      name: 'قشطة فلاحي غنية',
      description: 'قشطة بلدي نقية، ذات قوام كريمي غني ونكهة لا تُنسى. متوفرة في عروضنا الخاصة.',
      price: 'ضمن عروضنا',
      imageUrl: 'https://picsum.photos/seed/qeshtageneral/600/400', // Placeholder - recommend authentic image
      altText: 'قشطة فلاحي غنية ودسمة',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-amber-100 to-yellow-200 text-yellow-900">
      <HeroSection />
      <OffersSection offers={offers} />
      <OrderForm offers={offers} />
      <ProductShowcase products={products} />
      <QualityPromise />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;