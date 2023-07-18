const arrayOfQuotes = [
  {'author': 'کورش کبیر',
   'quote': 'فرمانروایی بر مردمان به شیوه ای نیک و والا بزرگ تر از هر کار دیگر است '
  },
  {'author': 'آلبرت انیشتین',
   'quote': 'از دیروز بیاموز. برای امروز زندگی کن و امید به فردا داشته باش '
  },
  {'author': 'گاندی',
   'quote': 'پیروزی آن نیست که هرگز زمین نخوری، آنست که بعد از هر زمین خوردنی برخیزی'
  },
  {'author': 'والترنیس',
   'quote': 'تغییر دهندگان اثر گذار در جهان کسانی هستند کـه بر خلاف جریان شنا میکنند'
  },
  {'author': 'داستا یوفسکی',
   'quote': 'تنها آرامش و سکوت سرچشمه‌ي نیروی لایزال اسـت'
  },
  {'author': 'ناپلئون هیل',
   'quote': 'دانستن کافی نیست، باید بـه دانسته ي خود عمل کنید'
  },
];
function generateQuote(){
  const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
  document.querySelector('#quoteOutput').textContent = `"${arrayOfQuotes[random].quote}"`;
  document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;

}