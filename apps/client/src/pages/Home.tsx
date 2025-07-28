import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';
import { mockProducts } from '../utils/mockData';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home: React.FC = () => {
  const featuredProducts = mockProducts.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg"
            alt="Luxury Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              Discover
              <span className="text-luxury-gold"> Luxury</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Discover our curated collection of premium fashion for the discerning individual
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/collection/women">
              <Button size="lg" className="text-lg">
                Shop Collection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-lg border-white text-white hover:bg-white hover:text-black"
            >
              View Lookbook
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-luxury-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-luxury-black mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our carefully curated collections designed for every style and occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Women's Collection",
                description: "Elegant pieces for the modern woman",
                image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
                link: "/collection/women"
              },
              {
                title: "Men's Collection",
                description: "Sophisticated style for gentlemen",
                image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
                link: "/collection/men"
              },
              {
                title: "Kids' Collection",
                description: "Luxury fashion for little ones",
                image: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg",
                link: "/collection/kids"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Link to={category.link}>
                  <Card hover className="group overflow-hidden">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="font-serif text-2xl font-bold mb-2">
                          {category.title}
                        </h3>
                        <p className="text-gray-200 mb-4">
                          {category.description}
                        </p>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                          Explore Collection
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-luxury-black mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Handpicked selections from our latest collections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/collection/women">
              <Button size="lg">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-luxury-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                description: "Complimentary shipping on orders over $500"
              },
              {
                icon: Shield,
                title: "Secure Payment",
                description: "Your payment information is always protected"
              },
              {
                icon: Star,
                title: "Premium Quality",
                description: "Only the finest materials and craftsmanship"
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Dedicated customer service whenever you need"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-8">
                  <feature.icon className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-luxury-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-luxury-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold mb-4">
              Stay in the Loop
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Be the first to know about new collections, exclusive offers, and luxury fashion insights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-luxury-gold"
              />
              <Button className="px-8">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-gray-400 mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;