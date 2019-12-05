$(document).ready(function(){

  $('#iniciarLigacao').show();
  $('#cancelarLigacao').hide();
  $('#finalizarContato').hide();
  $('#salvarContato').hide();
  $('#descricaoChamadaMarketing').hide();

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
  $('.tooltipped').tooltip();
  //select
  $('select').formSelect();
  //dropdown
  $('.dropdown-trigger').dropdown();
  //material box
  $('.materialboxed').materialbox();
  //scrollspy
  $('.scrollspy').scrollSpy();
  //datepicker
  $('.datepicker').datepicker({
    i18n: {
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    today: 'Hoje',
    clear: 'Limpar',
    cancel: 'Sair',
    done: 'Confirmar',
    labelMonthNext: 'Próximo mês',
    labelMonthPrev: 'Mês anterior',
    labelMonthSelect: 'Selecione um mês',
    labelYearSelect: 'Selecione um ano',
    selectMonths: true,
    selectYears: 15,
    },
    format: 'dd mmmm, yyyy',
    container: 'body',
    minDate: new Date()
  });
  //autoComplete
  $('input.autocompleteFuncionario').autocomplete({
    data: {
      "Kevin Iago Pires": "./imgs/1.jpg",
      "Oliver Edson Luís Nogueira": "./imgs/2.jpg",
      "Julio Nelson Bento Oliveira": "./imgs/3.jpg"
    },
  });
  $('input.autocompleteCliente').autocomplete({
    data: {
      "Bruno Thales Jesus - 991.430.002-23": "./imgs/1.jpg",
      "Benício Geraldo Severino Rocha - 712.842.476-86": "./imgs/2.jpg",
      "João Jorge Yago da Rosa - 520.928.866-81": "./imgs/3.jpg"
    },
  });
  $('input.autocompleteProduto').autocomplete({
    data: {
      "Bebedouro Eletronico Prata - 220 V #2423423": "./imgs/1.jpg",
      "Aspirador de Pó Robô Multilaser #45454666": "./imgs/2.jpg",
      "Pipoqueira Pop Time Pip B-02 #78798732": "./imgs/3.jpg"
    },
  });
  $('input.autocompleteProcedimentos').autocomplete({
    data: {
      "Produto não liga...": null,
      "Produto desliga repentinamente...": null,
      "Produto chegou com defeito...": null,
      "Produto apresentou com uso...": null,
      "Produto danificado na entrega...": null,
    },
  });
  //iniciar ligação
  $("#iniciarLigacao").click(function(){
    $('#iniciarLigacao').hide();
    $('#cancelarLigacao').show();
    $('#finalizarContato').show();
    $('#salvarContato').hide();
  });

  //cancelar Ligacao
  $("#cancelarLigacao").click(function(){
    $('#iniciarLigacao').show();
    $('#cancelarLigacao').hide();
    $('#finalizarContato').hide();
    $('#salvarContato').hide();
  });

  //finalizar Contato
  $("#finalizarContato").click(function(){
    $('#iniciarLigacao').hide();
    $('#cancelarLigacao').hide();
    $('#finalizarContato').hide();
    $('#salvarContato').show();

    $('#descricaoChamadaMarketing').show();
  });

  //botão sim alerta tela de procedimentos
  $("#btnSim").click(function(){
    M.toast({html: 'Parabéns! Bom Trabalho!', classes: 'rounded'});
  });

  //botão não modal tela de procedimentos
  $('.modal').modal();
});