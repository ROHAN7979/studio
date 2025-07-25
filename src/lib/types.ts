export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  imageHint: string;
}

export interface Cafe {
  id: string;
  name: string;
  building: string;
  image: string;
  imageHint: string;
  menu: MenuItem[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id:string;
  userId: string;
  items: CartItem[];
  total: number;
  estimatedTime: string;
  status: 'Pending' | 'Completed';
}
