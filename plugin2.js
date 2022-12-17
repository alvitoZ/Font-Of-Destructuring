//while mouse enter

(function ($) {
  $.fn.enter = function (option) {
    var Settings = $.extend(
      {
        color: "red",
        transform: "scale(1.2)",
        display: "inline-block",
        transition: "0.5s",
        index: {
          index: [],
          color: "yellow",
        },
      },
      option
    );

    let nilai = this.text();

    const huruf = [...nilai]
      .map((e) => {
        return `<span class="perFont">${e}</span>`;
      })
      .join(" ");

    $(this).html(huruf);

    const array = $(".perFont");

    function searchIndex() {
      $.each(array, function (i) {
        $(this).mouseenter(function () {
          console.log(i);
        });
      });
    }

    searchIndex();

    $(".perFont").mouseenter(function () {
      $(this).css({
        color: Settings.color,
        transform: Settings.transform,
        display: Settings.display,
        transition: Settings.transition,
      });
    });

    $.each(Settings.index.index, function (e, i) {
      $(array[i]).mouseenter(function () {
        $(this).css({
          index: Settings.index.index,
          color: Settings.index.color,
        });
      });
    });

    $(".perFont").mouseleave(function () {
      $(this).css({
        color: ``,
        transform: ``,
      });
    });

    return this;
  };
})(jQuery);

//while mouse leave

(function ($) {
  $.fn.leave = function (option) {
    var Settings = $.extend(
      {
        color: "",
        transform: "",
        display: "",
        transition: "",
        index: {
          index: [],
          color: "",
        },
      },
      option
    );

    $(".perFont").mouseleave(function () {
      $(this).css({
        color: `${Settings.color}`,
        transform: `${Settings.transform}`,
        display: `${Settings.display}`,
        transition: `${Settings.transition}`,
      });
    });

    const array = $(".perFont");

    $.each(Settings.index.index, function (e, i) {
      $(array[i]).mouseleave(function () {
        $(this).css({
          index: Settings.index.index,
          color: Settings.index.color,
        });
      });
    });

    return this;
  };
})(jQuery);
