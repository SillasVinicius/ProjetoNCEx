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
    format: 'dd mmmm, yy',
    container: 'body',
    minDate: new Date(),
  });
});