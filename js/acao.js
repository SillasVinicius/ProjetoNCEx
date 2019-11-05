$(document).ready(function(){
  // menu lateral
  $('.sidenav').sidenav();
  //textarea
  $('input#input_text, textarea#textarea').characterCounter();
  // slider
  $('.slider').slider({
    indicators: false,
    height: 572,
    transition: 500
  });
  //tooltip
  $(document).ready(function(){
    $('.tooltipped').tooltip();
  });
  //select
  $(document).ready(function(){
    $('select').formSelect();
  });
  //material box
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
  //scrollspy
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
  // autocomplete
  $('input.autocomplete').autocomplete({
    data: {
      "São Miguel dos Milagres": null,
      "Litoral Norte de Alagoas": null,
      "Jericoacoara (Jijoca de Jericoacoara)": null,
      "Porto de Galinhas": null,
      "Ipojuca": null,
      "Fernando de Noronha": null,
      "Búzios": null,
      "Região dos Lagos": null,
      "Gramado": null,
      "Chapada dos Veadeiros": null,
      "Morro de São Paulo": null,
      "Pipa": null,
      "Lençóis Maranhenses": null,
      "França": null,
      "Estados Unidos": null,
      "Espanha": null,
      "China": null,
      "Itália": null,
      "Turquia": null,
      "Alemanha": null,
      "Reino Unido": null,
      "Tailândia": null,
      "Foz do Iguaçu": null,
      "Porto Seguro": null,
      "Florianópolis": null,
      "Ouro Preto": null,
      "São Paulo": null,
      "Vitória": null,
      "Belo Horizonte": null,
      "Maceió": null,
      "São Luís": null,
      "Brasília": null,
      "Manaus": null,
      "Olinda": null,
      "Lençóis": null,
      "Canela": null,
      "Cabo Frio": null,
      "New York": null,
      "Cancun": null,
      "Aruba": null
    },
  });
});