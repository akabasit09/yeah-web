import React, { useEffect } from "react";
import "./Products.css";

const Products = () => {
  // 🌟 Scroll animation logic (included inside the component)
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // 🌿 Product data
  const productData = [
    {
      category: "Carbonated Drinks",
      items: [
        { name: "Yeah Apple Flavoured", img: "" },
        { name: "Yeah Malt ", img: "/images/classic2.png" },
        { name: "Yeah Malt Strong", img: "/images/classic3.png" },
      ],
    },
    {
      category: "Milk Drinks",
      items: [
        { name: "Yeah Orange Burst", img: "/images/fruit1.png" },
        { name: "Yeah Pineapple Twist", img: "/images/fruit2.png" },
        { name: "Yeah Berry Fusion", img: "/images/fruit3.png" },
      ],
    },
    {
      category: "Energy Drinks",
      items: [
        { name: "Yeah Energy Max", img: "/images/energy1.png" },
        { name: "Yeah Turbo Charge", img: "/images/energy2.png" },
        { name: "Yeah Active Shot", img: "/images/energy3.png" },
      ],
    },
    {
      category: "Classic Drinks ",
      items: [
        { name: "Yeah Coconut Cool", img: "/images/special1.png" },
        { name: "Yeah Mint Fresh", img: "/images/special2.png" },
        { name: "Yeah Ginger Zest", img: "/images/special3.png" },
      ],
    },
  ];

  return (
    <section className="products-items hidden" id="products">
        <div className="leaf-bg"></div>
      <h2 className="section-title">Our Product Flavours</h2>
      {productData.map((cat, index) => (
        <div key={index} className="category">
          <h3>{cat.category}</h3>
          <div className="product-grid">
            {cat.items.map((item, i) => (
              <div key={i} className="product-card hidden">
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
