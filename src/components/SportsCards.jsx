import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaHeart, FaFilter } from 'react-icons/fa'; 

const itemsData = [
  { id: 1, name: "Pro Speed Basketball", price: "$45.00", category: "Equipment", tag: "New", img: "/soccer ball in goal (6).jpg" },
  { id: 2, name: "Elite Tennis Racket", price: "$120.00", category: "Tennis", tag: "", img: "/soccer ball in goal (2).jpg" },
  { id: 3, name: "Impact Soccer Ball", price: "$35.00", category: "Soccer", tag: "Sale", img: "/one.png" },
  { id: 4, name: "Yoga Mat Premium", price: "$25.00", category: "Fitness", tag: "", img: "/soccer ball in goal (5).jpg" },
  { id: 5, name: "Resistance Bands", price: "$15.00", category: "Fitness", tag: "", img: "/soccer ball in goal (3).jpg" },
  { id: 6, name: "Goalkeeper Gloves", price: "$55.00", category: "Soccer", tag: "", img: "/soccer ball in goal (4).jpg" },
];

const tshirtsData = [
  { id: 1, name: "Nike Dri-Fit Tee", price: "$30.00", category: "Running", tag: "New", img: "/WhatsApp Image 2025-12-07 at 7.49.16 PM.jpeg" },
  { id: 2, name: "Adidas Trefoil", price: "$35.00", category: "Casual", tag: "", img: "/WhatsApp Image 2025-12-07 at 7.49.17 PM (1).jpeg" },
  { id: 3, name: "Under Armour Tech", price: "$28.00", category: "Training", tag: "Sale", img: "/WhatsApp Image 2025-12-07 at 7.49.17 PM.jpeg" },
  { id: 4, name: "Puma Essentials", price: "$22.00", category: "Lifestyle", tag: "", img: "/WhatsApp Image 2025-12-07 at 7.49.18 PM.jpeg" },
  { id: 6, name: "GymShark Apex", price: "$40.00", category: "Gym", tag: "Hot", img: "/WhatsApp Image 2025-12-07 at 7.51.31 PM.jpeg" },
];

const ProductCard = ({ product }) => {
  return (
    <Col xs={12} sm={6} lg={4} className="mb-5">
      <Card className="border-0 h-100 bg-transparent" >
        <div 
          className="position-relative d-flex align-items-center justify-content-center mb-3" 
          style={{ backgroundColor: '#f6f6f6', minHeight: '300px', borderRadius: '4px' }}
        >
          {product.tag && (
            <span 
              className="position-absolute bg-black text-white px-2 py-1" 
              style={{ top: '15px', right: '15px', fontSize: '12px', fontWeight: 'bold' }}
            >
              {product.tag}
            </span>
          )}
          
          <Card.Img 
            variant="top" 
            src={product.img} 
            className="img-fluid p-4" 
            style={{ mixBlendMode: 'multiply', transition: 'transform 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>

        <Card.Body className="p-0">
          <Card.Title className="fw-bold mb-1" style={{ fontSize: '1rem', color: '#111' }}>
            {product.name}
          </Card.Title>
          <Card.Text className="text-muted mb-1" style={{ fontSize: '0.9rem' }}>
            {product.category}
          </Card.Text>
          <Card.Text className="fw-medium" style={{ fontSize: '1rem', color: '#555' }}>
            {product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const ProductSection = ({ title, products }) => {
  return (
    <section className="py-5"  id="courts" >
      <Container>
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h2 className="fw-bold m-0 text-black">{title}</h2>
          
          <div className="d-flex align-items-center text-muted" style={{ fontSize: '0.9rem', cursor: 'pointer' }}>
             <span className="me-2">Sort by: </span>
             <span className="text-dark fw-bold">Newest</span>
          </div>
        </div>

        <div className="d-flex gap-3 mb-5">
            <Button variant="dark" size="sm" className="rounded-0 px-4">All Items</Button>
        </div>

        <Row>
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button 
            variant="outline-dark" 
            className="px-5 py-2 rounded-0" 
            style={{ letterSpacing: '1px', fontSize: '14px' }}
          onClick={() => {
    const section = document.getElementById("Contactus");
    section.scrollIntoView({ behavior: "smooth" });
  }}>
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
};

const ShopPage = () => {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <ProductSection  title="Sports Items" products={itemsData} />
      
      <hr className="my-5 container text-muted" />

      <ProductSection title="Sports T-Shirts" products={tshirtsData} />
    </div>
  );
};

export default ShopPage;