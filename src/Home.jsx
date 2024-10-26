import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = daysOfWeek[new Date().getDay()];

  const [selectedDay, setSelectedDay] = useState(today);

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  return (
    <Container fluid className="p-0">
      {/* Hero Section */}
      <section className="hero-section text-center text-white p-5" style={styles.heroSection}>
        <Container>
          <h1 className="display-4">Welcome to FoodCart Heaven!</h1>
          <p className="lead">Delicious, fresh, and fast – just the way you like it.</p>
          <Button variant="light" size="lg" href="#menu">Explore Menu</Button>
        </Container>
      </section>

      {/* Day Navigation */}
      <section className="day-nav text-center my-4">
        <Nav variant="pills" className="justify-content-center">
          {daysOfWeek.map((day) => (
            <Nav.Item key={day}>
              <Nav.Link
                active={selectedDay === day}
                onClick={() => handleDaySelect(day)}
                style={{ cursor: 'pointer' }}
              >
                {day}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </section>

      {/* Daily Menu Section */}
      <section className="menu-section py-5" id="menu">
        <Container>
          <h2 className="text-center mb-4">Menu for {selectedDay}</h2>
          <Row>
            {(weeklyMenu[selectedDay] || []).map((item, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} className="mb-4">
                <Card className="h-100 shadow">
                  <Card.Img variant="top" src={item.image} alt={item.name} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary">${item.price}</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5 text-white" style={styles.testimonialSection}>
        <Container>
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <Row>
            {testimonials.map((testimonial, idx) => (
              <Col key={idx} xs={12} md={4} className="mb-4">
                <Card className="bg-dark text-white h-100 shadow">
                  <Card.Body>
                    <Card.Text>"{testimonial.quote}"</Card.Text>
                    <footer className="blockquote-footer">{testimonial.name}</footer>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5 text-center" style={styles.contactSection}>
        <Container>
          <h2>Contact Us</h2>
          <p>Visit us at 123 Food Street, Gourmet City, or call us at (123) 456-7890</p>
          <Button variant="outline-light" href="mailto:contact@foodcartheaven.com">Email Us</Button>
        </Container>
      </section>
    </Container>
  );
}

// Weekly menu data
const weeklyMenu = {
  Monday: [
    { name: 'Spicy Chicken Wrap', description: 'A deliciously spicy wrap with chicken, veggies, and special sauce.', price: '6.99', image: 'https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Buffalo-Chicken-Wrap-3-500x500.jpg' },
    { name: 'Caesar Salad', description: 'Fresh salad with Caesar dressing.', price: '5.49', image: 'https://via.placeholder.com/150' },
  ],
  Tuesday: [
    { name: 'Veggie Burger', description: 'Healthy and tasty veggie burger with a side of fries.', price: '7.99', image: 'https://www.wellplated.com/wp-content/uploads/2016/03/Black-Bean-Vegan-Burger-Recipe-500x500.jpg' },
    { name: 'Mango Smoothie', description: 'Fresh mango smoothie to refresh your day.', price: '3.99', image: 'https://everylittlecrumb.com/wp-content/uploads/mangosmoothie-5-500x500.jpg' },
  ],
  Wednesday: [
    { name: 'Veggie Burger', description: 'Healthy and tasty veggie burger with a side of fries.', price: '7.99', image: 'https://www.wellplated.com/wp-content/uploads/2016/03/Black-Bean-Vegan-Burger-Recipe-500x500.jpg' },
    { name: 'Mango Smoothie', description: 'Fresh mango smoothie to refresh your day.', price: '3.99', image: 'https://everylittlecrumb.com/wp-content/uploads/mangosmoothie-5-500x500.jpg' },
  ],
  Sunday: [
    { name: 'Veggie Burger', description: 'Healthy and tasty veggie burger with a side of fries.', price: '7.99', image: 'https://www.wellplated.com/wp-content/uploads/2016/03/Black-Bean-Vegan-Burger-Recipe-500x500.jpg' },
    { name: 'Mango Smoothie', description: 'Fresh mango smoothie to refresh your day.', price: '3.99', image: 'https://everylittlecrumb.com/wp-content/uploads/mangosmoothie-5-500x500.jpg' },
  ],

  Thursday: [
    { name: 'Loaded Nachos', description: 'Crispy nachos loaded with cheese, jalapenos, and salsa.', price: '4.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazU9Zef1jR2L4V2OyHFmqh4KT2L4bB4Ilcg&s' },
    { name: 'Grilled Chicken Salad', description: 'Grilled chicken on a bed of fresh greens.', price: '6.99', image: 'https://via.placeholder.com/150' },
  ],
  Friday: [
    { name: 'Spicy Chicken Wrap', description: 'A deliciously spicy wrap with chicken, veggies, and special sauce.', price: '6.99', image: 'https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Buffalo-Chicken-Wrap-3-500x500.jpg' },
    { name: 'Caesar Salad', description: 'Fresh salad with Caesar dressing.', price: '5.49', image: 'https://via.placeholder.com/150' },
  ],
  Saturday: [
    { name: 'Veggie Burger', description: 'Healthy and tasty veggie burger with a side of fries.', price: '7.99', image: 'https://www.wellplated.com/wp-content/uploads/2016/03/Black-Bean-Vegan-Burger-Recipe-500x500.jpg' },
    { name: 'Mango Smoothie', description: 'Fresh mango smoothie to refresh your day.', price: '3.99', image: 'https://everylittlecrumb.com/wp-content/uploads/mangosmoothie-5-500x500.jpg' },
  ],
  
  // Repeat for Thursday to Sunday
};

// Sample data for testimonials
const testimonials = [
  { name: 'John Doe', quote: 'Best food I’ve ever had on the go!' },
  { name: 'Jane Smith', quote: 'Affordable and absolutely delicious.' },
  { name: 'Sam Lee', quote: 'The flavors are amazing, and the service is fast!' },
];

// Inline styles for sections
const styles = {
  heroSection: {
    backgroundImage: 'url("https://via.placeholder.com/800x400")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  testimonialSection: {
    backgroundColor: '#333',
  },
  contactSection: {
    backgroundColor: '#555',
    color: '#fff',
  },
};

export default Home;
