import '../App.css'
import React, { useEffect, useState } from 'react';
import { Modal, Button, Pagination } from 'react-bootstrap';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const images = [
    { src: './images/img1.png', alt: 'Ingenius-rm : solution pour vos questions d\'immigration', description: 'Nous sommes une Agence qui vous accompagne dans vos projet d\'immigration vers les destinations souhaitez, en vous proposant un suivi personnalisé dans le respect des Lois d\'immigration en vigueur et mettant en priorité votre satisfaction totale', lien: 'https://www.ingenius-rm.net/' },
    { src: './images/img2.png', alt: 'KrakOs : est le groupe de recherche en virtualisation, Conception d\'OS', description: 'Krakos est le groupe de recherche Virtualisation, Conception d\'OS, Programmation concurrente et distribuée, Programmation distribuée et Middleware pour les infrastructures cloud de l\'Université de Grenoble et l\'un des plus grands groupes du département Informatique de l\'Université de Grenoble', lien: 'https://lig-krakos.imag.fr/index.html' },
    { src: './images/img3.png', alt: 'Nilservice : Plateforme de prestation de service', description: 'NilService est une plateforme de solutions tout en un qui vous connecte à des professionnels de divers domaines allant des plus minimes services du quotidien aux travaux les plus complexes où que vous soyez en Afrique.', lien : 'nilservice.net' },
    { src: './images/img5.png', alt: 'LabPress : la presse pour les laboratoire ', description: 'LabPress (presse de laboratoire) est le nom de la société que nous avons créée, proposant des services de communication scientifique (conseil, organisation d\'événements scientifiques, réalisation de magazines, webmastering, gestion des médias sociaux, création de sites Internet, etc.).', lien: 'http://labpress.scienceontheweb.net/' },
    { src: './images/img6.png', alt: 'Action Burundi ', description: 'Dans le souci d’exposer les étudiants et professionnels burundais aux technologies de pointe tant au niveau théorique que pratique, nous avons initié l\'école d’été “KWIGA” qui est une école d\'été organisée au Burundi, dont la première édition s’est tenue du 14 au 20 septembre 2023 à Bujumbura. Cette école est à l’initiative du collectif Ubuntu et du Professeur Daniel Hagimont, Professeur à l’Institut National Polytechnique de Toulouse.', lien: 'https://mlns2.github.io/ActionBurundi.io/' },
    { src: './images/img7.png', alt: 'Portfolio @Prof Tchana Alain', description: 'Portfolio @Prof Tchana Alain', lien : 'https://lig-membres.imag.fr/tchanaa/index.html' },
  ];




  
function Portfolio() {

    const slideInLeft = (elem, delay, duration)=>{
      gsap.fromTo(
          elem,
          {
              opacity: 0,
              x: -200
          },
          {
              opacity: 1,
              x : 0,
              delay : delay | 0.4,
              duration : duration | 0.6,
              scrollTrigger:{
                trigger: elem,
                start : "top center",
                end : "bottom center"
              }
          },
          
      )
  }


    useEffect(() => {
      slideInLeft("#portfolio","1","3")
    }, []);  


    const [currentBlock, setCurrentBlock] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState({});
  
    const blockSize = 3; // Nombre d'images par bloc
    const totalBlocks = Math.ceil(images.length / blockSize);

  // Gérer la pagination
  const handleBlockChange = (blockIndex) => {
    setCurrentBlock(blockIndex);
  };

  // Gérer l'ouverture du modal
  const handleShowModal = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  // Gérer la fermeture du modal
  const handleCloseModal = () => setShowModal(false);

  const startIndex = currentBlock * blockSize;
  const endIndex = startIndex + blockSize;
    return(

        <div className="image-gallery" id='portfolio'>
         <h2>Portfolio</h2>
         <p>Ci dessous, quelques exemples de réalisations effectuées durant la formation, le stage et plus encore :</p>
        <div className="row">
          {images.slice(startIndex, endIndex).map((image, index) => (
            <div key={index} className="col-md-4 image-item">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid"
                onClick={() => handleShowModal(image)}
              />
              <p>{image.alt}</p>
            </div>
          ))}
        </div>
  
        {/* Pagination */}
        <div className="pagination-dots">
          {[...Array(totalBlocks)].map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentBlock ? 'active' : ''}`}
              onClick={() => handleBlockChange(index)}
            ></span>
          ))}
        </div>
  
        {/* Modal */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title className='title'>{currentImage.alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={currentImage.src} alt={currentImage.alt} className="img-fluid mb-3" />
            <p className='desc'>{currentImage.description}</p>
            <a href={currentImage.lien}>{currentImage.lien}</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    

    )
}

export default Portfolio;