export interface ProductSpec {
  key: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryId: string;
  images: string[];
  thumbnail: string;
  specs: ProductSpec[];
  description: string;
  featured?: boolean;
  modelCode?: string;
  badge?: string;
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  count: number;
  available: boolean;
  image?: string;
}

export interface ClientItem {
  name: string;
  image: string;
}

export interface GalleryItem {
  full: string;
  thumb: string;
  title?: string;
}

export interface Branch {
  name: string;
  address: string;
  phones: string[];
  mobile?: string;
  email?: string;
  manager?: string;
  isHQ?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface OrderInquiry {
  id: string;
  customerName: string;
  companyName?: string;
  phone: string;
  email: string;
  address: string;
  inquiryType: 'order' | 'quote' | 'service';
  items: CartItem[];
  totalQuantity: number;
  message?: string;
  createdAt: string;
  status: 'pending' | 'contacted' | 'completed';
}
