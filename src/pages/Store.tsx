
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tag } from "lucide-react";

interface ProductItem {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'financial' | 'analysis' | 'investor';
}

const productItems: ProductItem[] = [
  {
    id: "cohort-model",
    title: "SaaS Cohort Analysis Model",
    description: "Track customer acquisition and retention with this comprehensive cohort analysis template designed for SaaS businesses.",
    price: 29.99,
    imageUrl: "/placeholder.svg",
    category: 'analysis'
  },
  {
    id: "saas-retention",
    title: "SaaS Retention Analysis Template",
    description: "Analyze user retention and churn with this ready-to-use SaaS retention analysis spreadsheet.",
    price: 24.99,
    imageUrl: "/placeholder.svg",
    category: 'analysis'
  },
  {
    id: "investor-pl",
    title: "Investor-Ready P&L Template",
    description: "Professional profit and loss statement template formatted to impress investors and stakeholders.",
    price: 39.99,
    imageUrl: "/placeholder.svg",
    category: 'investor'
  },
  {
    id: "financial-model",
    title: "Startup Financial Model",
    description: "Comprehensive financial model for startups seeking funding, with 3-year projections and key metrics.",
    price: 49.99,
    imageUrl: "/placeholder.svg",
    category: 'financial'
  },
  {
    id: "cap-table",
    title: "Cap Table Management Template",
    description: "Track equity distribution, dilution, and ownership with this easy-to-use cap table template.",
    price: 34.99,
    imageUrl: "/placeholder.svg",
    category: 'investor'
  },
  {
    id: "budget-forecast",
    title: "Annual Budget & Forecast Tool",
    description: "Plan your company's finances with this detailed annual budget and forecast Excel template.",
    price: 29.99,
    imageUrl: "/placeholder.svg",
    category: 'financial'
  }
];

const Store: React.FC = () => {
  const handlePurchase = (product: ProductItem) => {
    console.log(`Initiating purchase for ${product.title}`);
    // This is where the Stripe integration will be implemented
    alert(`Stripe integration will be added here to purchase: ${product.title} for $${product.price}`);
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-cfo-navy mb-2">Financial Templates Store</h1>
        <p className="text-xl text-center text-cfo-slate mb-12 max-w-3xl mx-auto">
          Professional Excel templates and financial models to streamline your business analysis and investor presentations.
        </p>
        
        <Tabs defaultValue="all" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All Templates</TabsTrigger>
            <TabsTrigger value="financial">Financial Models</TabsTrigger>
            <TabsTrigger value="analysis">Analysis Tools</TabsTrigger>
            <TabsTrigger value="investor">Investor Ready</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productItems.map(product => (
                <ProductCard key={product.id} product={product} onPurchase={handlePurchase} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="financial" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productItems.filter(p => p.category === 'financial').map(product => (
                <ProductCard key={product.id} product={product} onPurchase={handlePurchase} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="analysis" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productItems.filter(p => p.category === 'analysis').map(product => (
                <ProductCard key={product.id} product={product} onPurchase={handlePurchase} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="investor" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productItems.filter(p => p.category === 'investor').map(product => (
                <ProductCard key={product.id} product={product} onPurchase={handlePurchase} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: ProductItem;
  onPurchase: (product: ProductItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPurchase }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video bg-muted relative overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-cfo-accent text-white py-1 px-2 rounded-md text-sm font-medium">
          ${product.price}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="flex items-start gap-2">
          <Tag className="h-5 w-5 mt-1 text-cfo-accent" />
          <span>{product.title}</span>
        </CardTitle>
        <CardDescription className="text-sm">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button 
          className="w-full bg-cfo-navy hover:bg-cfo-blue"
          onClick={() => onPurchase(product)}
        >
          Purchase Template
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Store;
