$(document).ready(function () {
  $(document).on('click', '.tabs_header_list', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    const thread = $(this).data('target');
    if (thread === 'all') {
      $('.tabs_wrapper').children().show();
    }
    $(thread).show();
    $(thread).siblings().hide();
  });
  $(document).on('click', '.tab ul li', function () {
    $(this).children().not($('.title')).toggle();
    $(this).siblings().children().not($('.title')).hide();
  })
})