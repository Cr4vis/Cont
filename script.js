{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const templates = [\
    "Bir ay boyunca g\'fcnl\'fck gazeteleri biriktir, b\'fcy\'fck bir le\uc0\u287 en ve \'e7ama\u351 \u305 r deterjan\u305  al, biriktirdi\u287 in t\'fcm gazeteleri le\u287 ende \'e7ama\u351 \u305 r y\u305 kar gibi y\u305 ka.",\
    "Sevdi\uc0\u287 in bir kitaptan 10 c\'fcmlelik bir yaz\u305  se\'e7, b\'fcy\'fck boyutlu bir lahana al, lahanay\u305  yere koyup \'fczerine \'e7\u305 k ve dengede durarak se\'e7ti\u287 in metni okumaya \'e7al\u305 \u351 . Her dengeni kaybedip d\'fc\u351 t\'fc\u287 \'fcnde metne ba\u351 tan ba\u351 la.",\
    "\uc0\u304 \'e7inde bulundu\u287 un y\u305 l boyunca kad\u305 n cinayetlerinde en \'e7ok kullan\u305 lan ilk be\u351  s\u305 radaki silah\u305  \'f6\u287 ren. Bu silahlar\u305 n her birini \'f6rd\'fc\u287 \'fcn dantellerle kapla ve duvarda sergile.",\
    "Metal, kuma\uc0\u351 , tu\u287 la gibi end\'fcstriyel at\u305 klar\u305  topla, bunlar\u305  yarat\u305 c\u305  bir bi\'e7imde bir araya getirerek antroposen \'e7a\u287 \u305 n kal\u305 nt\u305 lar\u305  ad\u305 nda bir enstalasyon kur.",\
    "Bulundu\uc0\u287 un \u351 ehrin sokaklar\u305 nda dola\u351 arak elle yaz\u305 lm\u305 \u351  duvar yaz\u305 lar\u305 n\u305  foto\u287 rafla. Bu yaz\u305 lar\u305  veri olarak kullanarak \u351 ehrinin ad\u305 n\u305  ta\u351 \u305 yan bir duvar yaz\u305 s\u305  fontu olu\u351 tur.",\
    "Bir cinayet ile ilgili olay yeri foto\uc0\u287 raflar\u305 n\u305  bul, bu foto\u287 raflardan ceset, kan gibi cinayete do\u287 rudan referans veren \'f6\u287 eleri kald\u305 rarak mekan\u305  resmet.",\
    "Rutin olarak vakit ge\'e7irdi\uc0\u287 in bir mekandaki bir g\'fcnl\'fck hareketini ve yer de\u287 i\u351 ikliklerini harita \'fczerinde kaydet, bu hareketi bilardo masas\u305 ndaki bir bilardo topuna tekrar etti\u287 in bir video olu\u351 tur.",\
    "Bulundu\uc0\u287 un \u351 ehirde sana en yak\u305 n lokasyonda bir do\u287 a y\'fcr\'fcy\'fc\u351 \'fc yap, y\'fcr\'fcy\'fc\u351 \'fcn esnas\u305 nda o b\'f6lgeyi temsil etti\u287 ini d\'fc\u351 \'fcnd\'fc\u287 \'fcn ta\u351 , toprak, bitki vb. Do\u287 al materyalleri topla, bu malzemeleri almadan \'f6nce yerlerinde foto\u287 raflar\u305 n\u305  \'e7ek, toplad\u305 \u287 \u305 n malzemeleri sadece nesne g\'f6r\'fcnecek \u351 ekilde ayr\u305  ayr\u305  ka\u287 \u305 tlara suluboya ile resmet.",\
    "Dilimize dahil olmu\uc0\u351  Latince k\'f6kenli bir s\'f6zc\'fck se\'e7 ve etimolojik k\'f6kenini detayl\u305  \u351 ekilde ara\u351 t\u305 r, bu s\'f6zc\'fc\u287 \'fcn ilk kullan\u305 ld\u305 \u287 \u305  yerden ba\u351 layarak g\'fcn\'fcm\'fcze kadar co\u287 rafi yolculu\u287 unu hangi b\'f6lgelerde, hangi dillerde ve hangi anlamlarda kullan\u305 ld\u305 \u287 \u305 n\u305  g\'f6steren bir harita ya da diyagram olu\u351 tur.",\
    "Belirli bir k\'fclt\'fcre ait ve sosyal s\uc0\u305 n\u305 f g\'f6stergesi (reverans gibi) bedensel bir hareket se\'e7, bu hareketi kendini olu\u351 turan be\u351  beden duru\u351 una b\'f6l, bu duru\u351 lar\u305  geometrik formlar bi\'e7iminde soyutla. Soyutlanm\u305 \u351  formlar\u305  kilden yeniden \'fcret.",\
    "Kendini bir beden olarak de\uc0\u287 il bir mekan olarak d\'fc\u351 \'fcn, ki\u351 ili\u287 ini temsil etti\u287 ini d\'fc\u351 \'fcnd\'fc\u287 \'fcn ya da ki\u351 isel tarihinde d\'f6n\'fcm noktas\u305  olan nesneleri kullanarak bu mekan\u305  bir otoportre olarak tasarla.",\
    "Bir filmden bir sahne ve ba\uc0\u351 ka bir filmden bir diyalog se\'e7. Bir ka\u287 \u305 da sahneye karakalem ile resmet di\u287 er ka\u287 \u305 d\u305  ise siyaha boyay\u305 p beyaz kalemle alt yaz\u305  \u351 eklinde diyalo\u287 u yaz, yan yana sergile."\
];\
\
function generateArtProject() \{\
    const randomIndex = Math.floor(Math.random() * templates.length);\
    const project = templates[randomIndex];\
    document.getElementById('project').innerText = project;\
\}\
}