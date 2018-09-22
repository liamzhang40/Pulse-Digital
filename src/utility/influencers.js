import $ from 'jquery';

export const fetchData = () => (
  $.ajax({
    method: "GET",
    url: "https://raw.githubusercontent.com/liamzhang40/Pulse-Digital/master/data.json"
  })
);
