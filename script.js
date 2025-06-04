document.getElementById('calculateSspBtn').addEventListener('click', function() {
  const SSP_WEEKLY_RATE = 116.75;
  const maxDays = 28;
  const sspDays = Number(document.getElementById('sspDays').value);

  if (sspDays < 0 || sspDays > maxDays) {
    document.getElementById('sspResult').textContent = 'Please enter days between 0 and 28.';
    return;
  }

  const daysToPay = Math.min(sspDays, maxDays);
  const dailyRate = SSP_WEEKLY_RATE / 7;
  const totalPay = daysToPay * dailyRate;

  document.getElementById('sspResult').textContent =
    `Estimated Statutory Sick Pay:\n£${totalPay.toFixed(2)}`;
});
