

/* Phone (Small devices)
@media screen and (max-width: 767px) {
  .hero {
      background-color: lightcoral !important; 
  }
} */


/* Large Laptop (Screens wider than 1366px) */
@media screen and (min-width: 1367px) and (max-width: 1440px) {
  .hero {
      /* background-color: lightgreen !important; Example styles */
  }

  


  #heading-0, #heading-1 {
    width: 24rem;
    margin-left: 5rem;
  }

  #heading-0, #heading-1, #heading-2, #heading-3, #heading-4 {
    transition: transform 0.3s ease;
  }

  #heading-0:hover, #heading-1:hover, #heading-2:hover, #heading-3:hover, #heading-4:hover {
    transform: translateY(-30px);
    height: auto;
    padding: 16px;
  }

  #desc {
    font-size: 14px !important;
  }
}
