var params = new URLSearchParams(location.search);
if (params.get('sent') === '1') {
  document.getElementById('sent-banner').classList.add('show');
} else if (params.get('error') === '1') {
  document.getElementById('error-banner').classList.add('show');
}
