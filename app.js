const getTime = (timezone) => {
  return new Date().toLocaleTimeString("en-US",{
    timeZone: timezone,
    timeStyle: "medium",
    hourCycle: "h12",
  });
};

const updateClocks = () => {
  const tbilisi = document.getElementById("tbilisiTime");
  const singapore = document.getElementById("singaporeTime");
  const london = document.getElementById("londonTime");
  const paris = document.getElementById("parisTime");
  const seoul = document.getElementById("seoulTime");
  const berlin = document.getElementById("berlinTime");
  const losAngeles = document.getElementById("losangelesTime");
  const cairo = document.getElementById("cairoTime");
  const tokyo = document.getElementById("tokyoTime");
  const chicago = document.getElementById("chicagoTime");

  tbilisi.innerHTML = getTime("Asia/Tbilisi");
  singapore.innerHTML = getTime("Asia/Singapore");
  london.innerHTML = getTime("Europe/London");
  paris.innerHTML = getTime("Europe/Paris");
  seoul.innerHTML = getTime("Asia/Seoul");
  berlin.innerHTML = getTime("Europe/Berlin");
  losAngeles.innerHTML = getTime("America/Los_Angeles");
  cairo.innerHTML = getTime("Africa/Cairo");
  tokyo.innerHTML = getTime("Asia/Tokyo");
  chicago.innerHTML = getTime("America/chicago")
};

setInterval(updateClocks, 1000);









