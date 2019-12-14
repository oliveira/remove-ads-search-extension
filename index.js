if (document.title.indexOf("Google") != -1) {
  const ads = document.querySelectorAll('.ads-ad')
  ads.forEach((ad) => ad.parentNode.removeChild(ad))
}
