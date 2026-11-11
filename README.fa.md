<div align="center">
  <img src="docs/banner.png" alt="Vega Control Panel" width="100%" />
</div>

<h3 align="center">پنل سبک و موبایل‌محور برای اشتراک‌های Xray</h3>

<p align="center">
  یک کاربر، یک UUID، <b>هشت کانفیگ آماده</b> — VLESS، Trojan و VMess،<br />
  با محاسبهٔ مصرف لحظه‌ای، سهمیه و انقضا، و رابط فارسی / انگلیسی.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/Flask-3.0-000000?style=flat-square&logo=flask&logoColor=white" alt="Flask" />
  <img src="https://img.shields.io/badge/Xray--core-1.8.11-8b5cf6?style=flat-square" alt="Xray" />
  <img src="https://img.shields.io/badge/Nginx-reverse%20proxy-009639?style=flat-square&logo=nginx&logoColor=white" alt="Nginx" />
  <img src="https://img.shields.io/badge/Docker-ready-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/license-MIT-22d3ee?style=flat-square" alt="MIT" />
  <img src="https://img.shields.io/badge/PRs-welcome-ec4899?style=flat-square" alt="PRs welcome" />
</p>

<p align="center">
  <a href="#-امکانات">امکانات</a> ·
  <a href="#-تصاویر">تصاویر</a> ·
  <a href="#-شروع-سریع">شروع سریع</a> ·
  <a href="#-پروتکل‌ها">پروتکل‌ها</a> ·
  <a href="#-تم‌ها">تم‌ها</a> ·
  <a href="README.md">English</a>
</p>

<p align="center">
  <img src="docs/preview.gif" alt="پیش‌نمایش پنل Vega" width="100%" />
</p>

---

## ✦ چرا Vega

این پروژه یک اپلیکیشن کوچک Flask است با یک فایل SQLite و **بدون هیچ مرحلهٔ build
سمت فرانت‌اند**. رابط کاربری اول روی صفحهٔ ۳۹۰ پیکسلی طراحی شده، بعد برای دسکتاپ
گسترش پیدا کرده.

کل ظاهر در یک فایل CSS اختیاری جمع شده، پس منطق و API هنگام تغییر استایل دست‌نخورده
می‌مانند.

---

## ✦ امکانات

| | |
|---|---|
| **⚡ هشت کانفیگ برای هر کاربر** | ۴ × VLESS، ۲ × Trojan، ۲ × VMess — همه از یک UUID |
| **📊 محاسبهٔ واقعی مصرف** | حجم هر کاربر از API آمار Xray خوانده و با سهمیه اش جمع می‌شود |
| **⏳ سهمیه و انقضا** | محدودیت گیگابایتی و اعتبار روزانه، با مدیریت خودکار حساب‌های منقضی |
| **👥 مدیریت کاربران** | ساخت، ویرایش، فعال/غیرفعال، ریست مصرف و حذف — از پنل یا API |
| **🔗 لینک اشتراک** | صفحهٔ اختصاصی هر کاربر با دکمهٔ کپی، کد QR و حلقهٔ مصرف |
| **🖥️ منابع سیستم** | مصرف CPU، رم و دیسک مستقیماً از `/proc` (بدون `psutil`) |
| **🤖 ربات تلگرام (اختیاری)** | استعلام وضعیت برای کاربر و گزارش کلی برای مدیر |
| **🌐 دو زبانه** | فارسی (RTL) و انگلیسی (LTR)، سمت کلاینت و ماندگار |
| **🎨 دو تم آماده** | *Obsidian HUD* (سایبرپانک تیره) و *POP* (روشن) — با یک `link` عوض می‌شوند |
| **🐳 دیپلوی یک‌دستوری** | ایمیج Docker هم nginx و هم هستهٔ Xray را آماده دارد |

---

## ✦ تصاویر

> همه از اسکین داخلی **Obsidian HUD** گرفته شده‌اند.

<div align="center">

<p><b>داشبورد</b> — آمار ترافیک، وضعیت سرور و گیج‌های زندهٔ CPU / رم / دیسک</p>

<img src="docs/screens/dashboard.jpg" alt="داشبورد" width="100%" />

<br />

<table>
<tr>
<td width="33%" valign="top"><b>کاربران</b><br /><img src="docs/screens/users.jpg" alt="کاربران" width="100%" /></td>
<td width="33%" valign="top"><b>تنظیمات</b><br /><img src="docs/screens/settings.jpg" alt="تنظیمات" width="100%" /></td>
<td width="33%" valign="top"><b>ورود</b><br /><img src="docs/screens/login.jpg" alt="ورود" width="100%" /></td>
</tr>
</table>

<br />

<p><b>صفحهٔ اشتراک</b> — حلقهٔ مصرف، سهمیه، انقضا، لینک اشتراک و هر ۸ کانفیگ</p>

<img src="docs/screens/subscription.jpg" alt="اشتراک" width="52%" />

<br />

<p><b>حالت روشن</b> — همان داشبورد با دکمهٔ تغییر تم</p>

<img src="docs/screens/dashboard-light.jpg" alt="داشبورد حالت روشن" width="100%" />

<br />

<p><b>موبایل</b> — طرح اولیه برای همین صفحه بود</p>

<img src="docs/screens/mobile.jpg" alt="داشبورد موبایل" width="260" />

</div>

---

## ✦ شروع سریع

### Docker (پیشنهادی)

```bash
git clone https://github.com/<you>/vega-panel.git
cd vega-panel

docker build -t vega .

docker run -d --name vega \
  -p 8080:8080 \
  -e SECRET_KEY="$(openssl rand -hex 32)" \
  -e ADMIN_USER="admin" \
  -e ADMIN_PASS="change-me-now" \
  -v "$PWD/data:/app/data" \
  vega
```

سپس `http://<server-ip>:8080` را باز کنید.

### نصب دستی

نیازمندی‌ها: **Python 3.10+**، **nginx** و باینری **Xray-core** روی سرور.

```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

export SECRET_KEY="$(openssl rand -hex 32)"
export ADMIN_USER="admin"
export ADMIN_PASS="change-me-now"

sudo python3 app.py     # Xray را بالا می‌آورد، nginx.conf را می‌نویسد و پنل را سرو می‌کند
```

`app.py` خودِ Flask را روی `127.0.0.1:5000` می‌نشاند و پورت عمومی دست **nginx**
است؛ همین باعث می‌شود `/ws`، `/tr`، `/vm` و خود پنل یک endpoint مشترک داشته باشند.

---

## ✦ پروتکل‌ها

برای هر کاربر هشت کانفیگ ساخته می‌شود. سمت سرور سه inbound جدا وجود دارد و nginx
بر اساس پیشوند مسیر مسیردهی می‌کند:

```
                        ┌── /ws/*  ──→  127.0.0.1:10000   VLESS  (WebSocket)
nginx  :8080 / :443  ───┼── /tr/*  ──→  127.0.0.1:10001   Trojan (WebSocket)
                        ├── /vm/*  ──→  127.0.0.1:10002   VMess  (WebSocket)
                        └── /*     ──→  127.0.0.1:5000    پنل Flask
```

| # | پروتکل | ترنسپورت | مسیر | توضیح |
|:-:|---|---|---|---|
| ۱ | VLESS | WS | `/ws/{uuid}` | استاندارد |
| ۲ | VLESS | WS + `ed=2560` | `/ws/{uuid}` | early data |
| ۳ | VLESS | WS + `ed=2048` | `/ws/{uuid}` | early data |
| ۴ | VLESS | WS | `/ws/{uuid}` | پارامترهای تصادفی |
| ۵ | Trojan | WS | `/tr/{uuid}` | رمز = UUID |
| ۶ | Trojan | WS + `ed=2048` | `/tr/{uuid}` | early data |
| ۷ | VMess | WS | `/vm/{uuid}` | شناسه = UUID |
| ۸ | VMess | WS + `ed=2048` | `/vm/{uuid}` | early data |

نام کانفیگ‌ها عمداً کوتاه است:

```
⚡ 𝗩𝗘𝗚𝗔 | 1 | username
```

هر سه پروتکل یک UUID مشترک دارند، بنابراین مصرف همهٔ کانفیگ‌ها روی یک حساب جمع
می‌شود و محاسبهٔ سهمیه ساده می‌ماند.

---

## ✦ تم‌ها

استایل از چند فایل override تشکیل شده که **بعد** از استایل قالب‌ها لود می‌شوند. هیچ
کلاس، شناسه یا تابعی عوض نمی‌شود — فقط `href` یک `<link>`.

| فایل | اسکین |
|---|---|
| `static/theme-hud.css` | **Obsidian HUD** — سایبرپانک تیره، براکت گوشه‌ها، گرید ماتریکسی، رادار |
| `static/theme-light.css` | **HUD Light** — همان اسکین در حالت روز: کارت سفید، هاله‌های ملایم |
| `static/theme.css` | **POP** — یک ظاهر کاملاً متفاوت و روشن با استیکر |

### سوییچ روشن / تیره

در نوار بالای همهٔ صفحه‌ها یک دکمهٔ کوچک ☀ / ☾ هست (در صفحهٔ ورود، گوشهٔ بالا-راست
شناور است). با یک کلیک بین **Obsidian HUD** و **HUD Light** جابه‌جا می‌شوید و انتخاب
در `localStorage` با کلید `vegaTheme` ذخیره می‌شود.

```
static/theme-hud.css      ← همیشه لود می‌شود (پایه)
static/theme-light.css    ← با media="not all" لود می‌شود و در حالت روشن به "all" می‌رود
static/theme-toggle.js    ← منطق سوییچ (window.toggleTheme)
```

چون فایل روشن از قبل دانلود شده ولی اعمال نشده، جابه‌جایی فوری است و هیچ پرش یا فلشِ
استایل دیده نمی‌شود. برای اینکه حالت روشن پیش‌فرض باشد، قبل از اولین رندر:

```html
<script>localStorage.setItem('vegaTheme', 'light');</script>
```

رنگ‌ها توکن‌های بالای هر فایل‌اند و با همان چند متغیر عوض می‌شوند.

---

## ✦ تنظیمات

| متغیر | پیش‌فرض | کاربرد |
|---|---|---|
| `SECRET_KEY` | مقدار توسعه | کلید امضای نشست — **عوض کنید** |
| `ADMIN_USER` | `admin` | نام کاربری پنل |
| `ADMIN_PASS` | `admin` | رمز عبور پنل — **عوض کنید** |
| `PORT` | `8080` | پورت عمومی nginx |
| `XRAY_LOCATION_ASSET` | — | مسیر فایل‌های asset هستهٔ Xray |

اگر `ADMIN_USER` و `ADMIN_PASS` تعریف نشوند، اطلاعات ورود از `panel_settings.json`
خوانده می‌شود (از صفحهٔ تنظیمات قابل تغییر است).

### مسیرهای API

| مسیر | متد | خروجی |
|---|---|---|
| `/api/system` | GET | درصد CPU، رم، دیسک، آپتایم و load average |
| `/api/online_users` | GET | کاربران آنلاین |
| `/api/add_user` · `/api/edit_user/<id>` · `/api/delete_user/<id>` | POST | عملیات CRUD |
| `/api/toggle_user/<id>` · `/api/reset_user/<id>` | POST | فعال/غیرفعال، ریست مصرف |
| `/api/user_config/<id>` | GET | کانفیگ‌های یک کاربر |
| `/sub/<uuid>` | GET | صفحهٔ عمومی اشتراک |

---

## ✦ ساختار

```
.
├── app.py                 # اپلیکیشن Flask، سازندهٔ کانفیگ‌ها، راه‌انداز Xray و nginx
├── templates/
│   ├── login.html
│   ├── dashboard.html
│   ├── users.html
│   ├── settings.html
│   └── subscription.html
├── static/
│   ├── logo.png
│   ├── theme-hud.css      # اسکین Obsidian HUD
│   └── theme.css          # اسکین POP
├── docs/                  # بنر، گیف پیش‌نمایش و اسکرین‌شات‌ها
├── requirements.txt
├── Dockerfile
└── README.md
```

فایل‌های وضعیت (دیتابیس SQLite، کانفیگ Xray و `nginx.conf`) کنار پوشهٔ اجرا ساخته
می‌شوند؛ اگر می‌خواهید بعد از ری‌استارت باقی بمانند، mount کنید.

---

## ✦ نکات امنیتی

پیش از عمومی‌کردن پنل:

- [ ] `SECRET_KEY` واقعی و رمز مدیر قوی بگذارید
- [ ] پنل را پشت TLS ببرید (کانفیگ nginx همراه پروژه نقطهٔ شروع است)
- [ ] اگر ممکن است دسترسی پنل را به IP خودتان محدود کنید
- [ ] لینک‌های `/sub/<uuid>` را خصوصی نگه دارید — داشتن UUID یعنی دسترسی
- [ ] از `users.db` بکاپ بگیرید

---

<div align="center">

<p align="center">
  <b>ساخته‌شده برای کسانی که پنل سریع و خوش‌ظاهر می‌خواهند.</b><br />
  اگر Vega به کارتان آمد، یک ⭐ بیشتر از آنچه فکر می‌کنید کمک می‌کند.
</p>

<p align="center"><a href="README.md">🇬🇧 English</a></p>

</div>
