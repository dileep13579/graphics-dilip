$(".slider").slider({

    // animation speed
    speed: 1000,
  
    // animation delay
    delay: 2000,
  
    // autoplay
    autoplay: true,
  
    // pause on hover
    pauseonhover: true,
  
    // shows navigation
    navigation: true,
  
    // shows pagination
    pagination: true,
  
    // or 'thumbnail'
    paginationType: 'dots',
  
    // initial slide
    initialslide: 1,
  
    // width/height
    width: '100%',
    height: 'auto',
  
    // or right
    direction: 'right',
  
    // is responsive
    responsive: true,
  
    // custom navigation buttons
    buttons: {
      prev: "<div class='prev slider-buttons'><span>&#8249;</span></div>",
      next: "<div class='next slider-buttons'><span>&#8250;</span></div>"
    }
    
  });

  // zoom plug in

  $(document).ready(function() { 
    $('.zoomple').zoomple({ 
      blankURL : 'images/blank.gif',
      bgColor : '#90D5D9',
      loaderURL : 'images/loader.gif',
      offset : {x:-150,y:-150},
      zoomWidth : 300,  
      zoomHeight : 300,
      roundedCorners : true
    });
  });

  // whats app
  $('#myButton').venomButton({
    phone: '8247890069',
    message: "8247890069",
    showPopup: true,
    position: "right",
    autoOpenTimeout: 10000,
    size:'70px',
    headerTitle:'DILEEP GRAPHICS'
  });

  // animation scroll
  