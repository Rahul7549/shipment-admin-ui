export interface Shipment {
    id: number;
    orderedOn:string,
    productName:string;
    orderNumber: string;
    customer: string;
    shippingAddress: string;
    phone: string;
    status: string;
    carrier: string;
    trackingNumber: string;
    shippingMethod: string;
    estimatedDelivery: string;
    items: number;
    weight: string;
    shippingCost: number;
    imgUrl:string,
    updatedOn:string,
    history: { date: string; event: string }[];
  }

  export const shipments: Shipment[] = [
    {
      id: 1,
      updatedOn:'2024-10-10',
      orderedOn:'2024-01-01',
      productName: 'Wireless Noise Cancelling Headphones',
      orderNumber: 'ORD123456',
      customer: 'John Doe',
      shippingAddress: '123 Maple Street, Springfield, IL, 62701, USA',
      phone: '+1-312-555-0101',
      status: 'In Transit',
      carrier: 'FedEx',
      trackingNumber: 'FDX123456789',
      shippingMethod: 'Express',
      estimatedDelivery: '2024-10-10',
      items: 1,
      weight: '2 lbs',
      shippingCost: 15.99,
      history: [
        { date: '2024-10-02', event: 'Shipment Created' },
        { date: '2024-10-03', event: 'Shipment Picked Up' },
        { date: '2024-10-05', event: 'In Transit' },
      ],
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdw02dXnBdsOBj-1DS96ZVWT6Twwkncqcx8Q&s'
    },
    {
      id: 2,
      updatedOn:'2024-12-10',
      orderedOn:'2024-01-01',
      productName: '4K Ultra HD Smart TV',
      orderNumber: 'ORD123457',
      customer: 'Jane Smith',
      shippingAddress: '456 Oak Avenue, Dallas, TX, 75201, USA',
      phone: '+1-214-555-0202',
      status: 'Out for Delivery',
      carrier: 'UPS',
      trackingNumber: 'UPS987654321',
      shippingMethod: 'Standard',
      estimatedDelivery: '2024-10-08',
      items: 1,
      weight: '45 lbs',
      shippingCost: 29.99,
      history: [
        { date: '2024-10-01', event: 'Shipment Created' },
        { date: '2024-10-03', event: 'Shipment Picked Up' },
        { date: '2024-10-06', event: 'In Transit' },
        { date: '2024-10-08', event: 'Out for Delivery' },
      ],
      imgUrl: 'data:image/jpeg;base64,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'
    },
    {
      id: 3,
      updatedOn:'2024-10-2',
      orderedOn:'2024-01-01',
      productName: 'Gaming Laptop',
      orderNumber: 'ORD123458',
      customer: 'Alice Brown',
      shippingAddress: '789 Pine Road, Seattle, WA, 98101, USA',
      phone: '+1-206-555-0303',
      status: 'Delivered',
      carrier: 'DHL',
      trackingNumber: 'DHL654321987',
      shippingMethod: 'Next Day Air',
      estimatedDelivery: '2024-10-03',
      items: 1,
      weight: '7 lbs',
      shippingCost: 49.99,
      history: [
        { date: '2024-09-29', event: 'Shipment Created' },
        { date: '2024-09-30', event: 'Shipment Picked Up' },
        { date: '2024-10-02', event: 'In Transit' },
        { date: '2024-10-03', event: 'Delivered' },
      ],
      imgUrl: 'data:image/jpeg;base64,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'
       },
    {
      id: 4,
      updatedOn:'2024-10-10',
      orderedOn:'2024-01-01',
      productName: 'Smartphone',
      orderNumber: 'ORD123459',
      customer: 'Michael Johnson',
      shippingAddress: '321 Birch Blvd, Miami, FL, 33101, USA',
      phone: '+1-305-555-0404',
      status: 'In Transit',
      carrier: 'USPS',
      trackingNumber: 'USPS123456789',
      shippingMethod: 'Priority Mail',
      estimatedDelivery: '2024-10-12',
      items: 1,
      weight: '1.2 lbs',
      shippingCost: 9.99,
      history: [
        { date: '2024-10-05', event: 'Shipment Created' },
        { date: '2024-10-06', event: 'Shipment Picked Up' },
      ],
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lDxoETmnWeCb02sBdJ1730P3SjWzZUVRTA&s'
      },
    {
      id: 5,
      updatedOn:'2024-10-10',
      orderedOn:'2024-01-01',
      productName: 'Fitness Tracker',
      orderNumber: 'ORD123460',
      customer: 'Emily Davis',
      shippingAddress: '654 Cedar Street, Boston, MA, 02101, USA',
      phone: '+1-617-555-0505',
      status: 'Pending',
      carrier: 'FedEx',
      trackingNumber: 'FDX789456123',
      shippingMethod: 'Standard',
      estimatedDelivery: '2024-10-15',
      items: 1,
      weight: '0.5 lbs',
      shippingCost: 8.99,
      history: [
        { date: '2024-10-04', event: 'Shipment Created' },
      ],
      imgUrl: 'https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 6,
      updatedOn:'2024-10-10',
      orderedOn:'2024-01-01',
      productName: 'Office Chair',
      orderNumber: 'ORD123461',
      customer: 'David Wilson',
      shippingAddress: '987 Willow Lane, Chicago, IL, 60601, USA',
      phone: '+1-312-555-0606',
      status: 'Shipped',
      carrier: 'UPS',
      trackingNumber: 'UPS654987321',
      shippingMethod: 'Freight',
      estimatedDelivery: '2024-10-14',
      items: 1,
      weight: '30 lbs',
      shippingCost: 50.00,
      history: [
        { date: '2024-10-03', event: 'Shipment Created' },
        { date: '2024-10-04', event: 'Shipment Picked Up' },
      ],
      imgUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 7,
      updatedOn:'2024-10-10',
      orderedOn:'2024-01-01',
      productName: 'Bluetooth Speaker',
      orderNumber: 'ORD123462',
      customer: 'Sophia Martinez',
      shippingAddress: '111 Palm Drive, Phoenix, AZ, 85001, USA',
      phone: '+1-480-555-0707',
      status: 'Delivered',
      carrier: 'DHL',
      trackingNumber: 'DHL321789654',
      shippingMethod: 'Express',
      estimatedDelivery: '2024-10-05',
      items: 1,
      weight: '3 lbs',
      shippingCost: 12.99,
      history: [
        { date: '2024-10-01', event: 'Shipment Created' },
        { date: '2024-10-02', event: 'Shipment Picked Up' },
        { date: '2024-10-04', event: 'In Transit' },
        { date: '2024-10-05', event: 'Delivered' },
      ],
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6TzRjmrtd-O0M5Evtn_neGyjDwdCiiNP9w&s'
      },
  ];
  