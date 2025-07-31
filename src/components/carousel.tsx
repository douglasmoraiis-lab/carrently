import React from "react";  
import Img1 from "../assets/BMW.png";
import Img2 from "../assets/Mercedes-Benz_free_logo.png";
import Img3 from "../assets/image 262.png";
import Img4 from "../assets/Suzuki_logo_2 1.png";
import Img5 from "../assets/Vector (1).png";
import Img6 from "../assets/Volvo_logo1 1.png";
import Img7 from "../assets/Nissan_2020_logo.png";
import Img8 from "../assets/Toyota_EU 1.png";

const imagens = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

const Carousel: React.FC = () => {
  return (
    <div  className=""
      style={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",     
        gap: "60px",              
        padding: "180px 0",        
        backgroundColor: "#ECEEF4",
     
      }}
    >
      {imagens.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Imagem ${index + 1}`}
          style={{ width: "100px", height: "auto" }}
        />
      ))}
    </div>
  );
};

export default Carousel;
